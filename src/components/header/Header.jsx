import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHotel,
  faRankingStar,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalForm from "../modal-form/ModalForm";

export default function Header({ setSearchValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [typedValue, setTypedValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function openModal() {
    setModalOpen(true);
  }

  // Funcao que atualiza o value conforme o caractere digitado
  function handleSearchChange(event) {
    const value = event.target.value;
    setTypedValue(value);
    setSearchValue(value);
    console.log(value);
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-list">
          <ul
            className={
              isOpen ? "header-nav-links show-nav" : "header-nav-links"
            }
          >
            <li className="header-nav-item">
              <FontAwesomeIcon icon={faHotel} />
              <Link to="/">Home</Link>
            </li>

            <li className="header-nav-item">
              <FontAwesomeIcon icon={faRankingStar} />
              <Link to="/">Ranking</Link>
            </li>
          </ul>

          <button className="nav-btn" onClick={() => handleToggle()}>
            <FontAwesomeIcon icon={faAlignRight} className="nav-icon" />
          </button>

          {/* <div className="header-item">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotéis</span>
          </div>

          <div className="header-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hostels</span>
          </div>

          <div className="header-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Locais</span>
          </div> */}
        </div>
        <h1 className="header-title">
          TripExplorer | Sua próxima aventura começa Aqui!
        </h1>
        <p className="header-description">
          Conheça os melhores hotéis do país de acordo com o ranking Trip
          Explorer<sup>&copy;</sup>
        </p>

        <div className="container-header-btn">
          <button className="header-btn" onClick={() => openModal()}>
            Cadastre o seu Hotel!
          </button>
        </div>

        <div className="header-search">
          <input
            className="header-search-input"
            type="text"
            name="search-name"
            id="search-name"
            placeholder="Procure um hotel/hostel pelo nome"
            value={typedValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
