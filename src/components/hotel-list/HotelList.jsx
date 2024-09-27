import React, { useEffect, useState } from "react";
import "./hotelList.css";
import initialHotels from "./mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function HotelList({ searchValue }) {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  // Recupera os dados dos hoteis para a pagina principal
  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];

    // Se o localStorage não tiver hotéis, inicializa com os dados do mock
    if (storedHotels.length === 0) {
      localStorage.setItem("hotels", JSON.stringify(initialHotels));
      setHotels(initialHotels); // Define o estado com os hotéis do mock
    } else {
      setHotels(storedHotels); // Se houver dados no localStorage, usa-os
    }
  }, []);

  // Filtra os hoteis de acordo o searchValue: funcao de busca
  const normalizeString = (str) => {
    return str
      .normalize("NFD") // Decompor caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remover acentos
      .replace(/[^a-zA-Z0-9 ]/g, "") // Remover caracteres especiais
      .toLowerCase();
  };

  const filteredHotels = hotels.filter((hotel) => {
    const normalizedSearchValue = normalizeString(searchValue);
    const normalizedHotelName = normalizeString(hotel.name);
    return normalizedHotelName.includes(normalizedSearchValue);
  });

  // Função para excluir o hotel da pagina principal
  function removeHotel(hotelId) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este hotel?"
    );

    if (confirmDelete) {
      // Remover o hotel da lista de hotes no localStorage
      const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
      const updatedHotels = storedHotels.filter((h) => h.id !== hotelId);
      localStorage.setItem("hotels", JSON.stringify(updatedHotels));

      // Remover o hotel dos detalhes no localStorage
      const storedDetails = JSON.parse(localStorage.getItem("details")) || [];
      const updatedDetails = storedDetails.filter((d) => d.id !== hotelId);
      localStorage.setItem("details", JSON.stringify(updatedDetails));
    }
    navigate(0);
  }

  return (
    <div className="hotels">
      <div className="card-hotels">
        {filteredHotels.map((hotel, index) => (
          <div className="card-container" key={index}>
            <Link
              to={`/hotel/${hotel.name}`}
              key={index}
              className="card-hotel"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="card-hotel-image"
              />
              <div className="card-hotel-titles">
                <h2>{hotel.name}</h2>
                <h3>
                  {hotel.city}-{hotel.state}
                </h3>
              </div>

              <div className="card-hotel-more">
                <p>
                  {Array.from({ length: hotel.rating }, (_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStarSolid}
                      className="stars"
                    />
                  ))}

                  {Array.from({ length: 5 - hotel.rating }, (_, i) => (
                    <FontAwesomeIcon
                      key={i + hotel.rating}
                      icon={faStarRegular}
                      className="stars"
                    />
                  ))}
                </p>
                <p className="hotel-price">
                  Preço: R$ {hotel.price}/diária | 1 adulto
                </p>
              </div>
            </Link>
            <button
              className="exclude-btn-hotel"
              onClick={() => removeHotel(hotel.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
