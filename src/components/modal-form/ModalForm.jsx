import React, { useState, useEffect } from "react";
import "./formModal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ModalForm({ isOpen, onClose }) {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  const [hotelData, setHotelData] = useState({
    name: "",
    image: "",
    rating: "",
    city: "",
    state: "",
    price: "",
    description: "",
    promotion: "",
    actionCall: "",
    services: [],
  });

  const [hotelCard, setHotelCard] = useState({
    name: "",
    image: "",
    rating: "",
    city: "",
    state: "",
    price: "",
  });

  // Recupera os dados dos hotéis do localStorage
  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(storedHotels);
  }, []);

  // Função para gerar o próximo ID na sequência
  function getNextId() {
    // Encontra o maior ID existente
    const maxId = hotels.reduce((max, hotel) => {
      return Math.max(max, parseInt(hotel.id));
    }, 0);

    return maxId + 1; // O próximo ID é o maior existente + 1
  }

  function handleNewData(event) {
    const { name, value } = event.target;

    if (event.target.type === "checkbox") {
      setHotelData((prev) => ({
        ...prev,
        services: prev.services.includes(value)
          ? prev.services.filter((s) => s !== value)
          : [...prev.services, value],
      }));
    } else {
      setHotelData((prev) => ({
        ...prev,
        id: prev.id || getNextId(),
        [name]: value,
      }));
    }

    setHotelCard((prev) => ({
      ...prev,
      id: prev.id || getNextId(),
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
    localStorage.setItem("hotels", JSON.stringify([...hotels, hotelCard]));

    const details = JSON.parse(localStorage.getItem("details")) || [];
    localStorage.setItem("details", JSON.stringify([...details, hotelData]));
    onClose();

    navigate(0);
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>

        <form className="modal-form" onSubmit={handleSubmit}>
          <h2>Ficha Cadastral</h2>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            value={hotelData.name}
            onChange={handleNewData}
            id="name"
            placeholder="Digite o nome do hotel/hostel/pousada"
          />
          <label htmlFor="description">Slogan: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={hotelData.description}
            onChange={handleNewData}
            placeholder="Digite o seu slogan"
          />
          <label htmlFor="image">Imagem:</label>
          <input
            type="text"
            name="image"
            id="image"
            value={hotelData.image}
            onChange={handleNewData}
            placeholder="Digite o url da imagem principal"
          />

          <label htmlFor="rating">Classificação</label>

          <select
            id="rating"
            name="rating"
            value={hotelData.rating}
            onChange={handleNewData}
          >
            <option value="">Classificação</option>
            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
          </select>

          <label htmlFor="state">Estado</label>
          <select
            name="state"
            id="state"
            value={hotelData.state}
            onChange={handleNewData}
            aria-label="Selecione o estado"
          >
            <option value="">Selecione o estado</option>
            <option value="AC">Acre (AC)</option>
            <option value="AL">Alagoas (AL)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="DF">Distrito Federal (DF)</option>
            <option value="ES">Espírito Santo (ES)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="PA">Pará (PA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PR">Paraná (PR)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="SC">Santa Catarina (SC)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="SE">Sergipe (SE)</option>
            <option value="TO">Tocantins (TO)</option>
          </select>

          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            name="city"
            id="city"
            value={hotelData.city}
            onChange={handleNewData}
            placeholder="Digite o nome da cidade"
          />

          <div className="log">
            <label for="logradouro">Rua/Avenida:</label>
            <input
              type="text"
              name="logradouro"
              placeholder="Rua/Avenida"
              required
            />

            <label for="numero">Número:</label>
            <input type="text" name="numero" placeholder="Número" required />

            <label for="bairro">Bairro:</label>
            <input type="text" name="bairro" placeholder="Bairro" required />
          </div>

          <input
            name="price"
            type="number"
            value={hotelData.price}
            onChange={handleNewData}
            placeholder="Preço da diária para 1 adulto"
            min="0"
            max="10000"
            step="9"
          />
          <textarea
            name="localDescription"
            value={hotelData.localDescription}
            onChange={handleNewData}
            rows="5"
            cols="33"
            placeholder="Descreva um pouco mais sobre o seu hotel e arredores..."
          ></textarea>
          <fieldset>
            <legend>
              Selecione os serviços oferecidos pelo seu estabelecimento:
            </legend>
            <div className="fields-check">
              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Wi-Fi gratuito"
                  onChange={handleNewData}
                />{" "}
                Wi-Fi gratuito
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Café da manhã incluído"
                />{" "}
                Café da manhã incluído
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Serviço de quarto 24h"
                />{" "}
                Serviço de quarto 24h
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Transporte para o aeroporto"
                />{" "}
                Transporte para o aeroporto
              </label>

              <label>
                <input type="checkbox" name="serviceSelector" value="Spa" /> Spa
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Academia"
                />{" "}
                Academia
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Restaurante gourmet"
                />{" "}
                Restaurante gourmet
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Praia privativa"
                />{" "}
                Praia privativa
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Atividades aquáticas"
                />{" "}
                Atividades aquáticas
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Serviço de praia"
                />{" "}
                Serviço de praia
              </label>

              <label>
                <input type="checkbox" name="serviceSelector" value="Jardim" />{" "}
                Jardim
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Atividades ao ar livre"
                />{" "}
                Atividades ao ar livre
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Transporte para a praia"
                />{" "}
                Transporte para a praia
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Cozinha compartilhada"
                />{" "}
                Cozinha compartilhada
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Sala de estar"
                />{" "}
                Sala de estar
              </label>

              <label>
                <input type="checkbox" name="serviceSelector" value="Praia" />{" "}
                Praia
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Restaurante à beira-mar"
                />{" "}
                Restaurante à beira-mar
              </label>

              <label>
                <input type="checkbox" name="serviceSelector" value="Trilhas" />{" "}
                Trilhas
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Eventos sociais"
                />{" "}
                Eventos sociais
              </label>

              <label>
                <input type="checkbox" name="serviceSelector" value="Piscina" />{" "}
                Piscina
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Estacionamento gratuito"
                />{" "}
                Estacionamento gratuito
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Eventos temáticos"
                />{" "}
                Eventos temáticos
              </label>

              <label>
                <input
                  type="checkbox"
                  name="serviceSelector"
                  value="Restaurante medieval"
                />{" "}
                Restaurante medieval
              </label>
            </div>
          </fieldset>
          <textarea
            name="promotion"
            value={hotelData.promotion}
            onChange={handleNewData}
            rows="5"
            placeholder="Digite as promoções e ofertas em andamento..."
          ></textarea>

          <input
            type="text"
            placeholder="Fique hospedado no melhor hotel da cidade..."
            name="actionCall"
            value={hotelData.actionCall}
            onChange={handleNewData}
          />

          <button type="submit" className="submit-btn">
            Cadastrar Hotel
          </button>
        </form>
      </div>
    </div>
  );
}
