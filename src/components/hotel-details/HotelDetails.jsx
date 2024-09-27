import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import detailsHotels from "./mock.js";
import Hero from "../hero/Hero.jsx";
import Banner from "../banner/Banner.jsx";
import { Link, useParams } from "react-router-dom";
import "./hotelDetails.css";

export default function HotelDetails() {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const [hotelDetail, setHotelDetail] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [imageHero, setImageHero] = useState("");

  // Recupera os hoteis e seus detalhes

  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem("hotels")) || [];
    setHotels(storedHotels);
  }, []);

  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem("details")) || [];
    setDetails(storedDetails);
  }, []);

  // Seleciona o Hotel

  useEffect(() => {
    const hotels = JSON.parse(localStorage.getItem("details")) || [];
    const selectedHotel = hotels.find((h) => h.name === name);
    setHotelDetail(selectedHotel);
  }, [name]);

  useEffect(() => {
    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];
    const selectedHotel = hotels.find((h) => h.name === name);
    const hotelImageUrl = selectedHotel.image;
    setImageHero(hotelImageUrl);
  }, []);

  if (!hotelDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero backgroundUrl={imageHero}>
        <Banner title={hotelDetail.name} subtitle={hotelDetail.description}>
          <Link to="/" className="btn-return">
            voltar para o início
          </Link>
        </Banner>
      </Hero>

      <div className="hotel-container">
        <div className="hotel-wrapper">
          <h1 className="hotel-title">{hotelDetail.name}</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelDetail.address}</span>
          </div>
          <span className="hotel-distance">{hotelDetail.landmark}</span>
        </div>

        <div className="hotel-six-images">
          <p></p>
          {hotelDetail.images.map((image) => (
            <div className="hotel-img-wrapper">
              <img src={image} />
            </div>
          ))}
        </div>

        <div className="hotel-details">
          <div className="hotel-details-texts">
            <h1 className="hotel-call">{hotelDetail.actionCall}</h1>
            <p className="hotel-description">{hotelDetail.localDescription}</p>
          </div>

          <div className="hotel-services">
            <h2>Services</h2>
            {hotelDetail.services.map((service) => (
              <p>{service}</p>
            ))}
          </div>
        </div>

        <div className="hotel-location-price">R$ {hotelDetail.price}</div>
      </div>
    </div>
  );
}
