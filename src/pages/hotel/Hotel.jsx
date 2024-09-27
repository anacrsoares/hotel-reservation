import Hero from "../../components/hero/Hero.jsx";
import Banner from "../../components/banner/Banner.jsx";
import { Link } from "react-router-dom";

export default function Hotel() {
  return (
    <div>
      <Hero>
        <Banner title="Hotel Luxo" subtitle="Hotel em São Paulo por R$350">
          <Link to="/" className="btn-return">
            our rooms
          </Link>
        </Banner>
      </Hero>

      {/* <div className="hotel-container">
        <div className="hotel-wrapper">
          <h1 className="hotel-title">Nome do Hotel</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Endereço do Hotel</span>
          </div>
          <span className="hotel-distance">Distância do centro</span>
          <span className="hotel-price-highlight">Promoção se fechar</span>
        </div>

        <div className="hotel-six-images">
          {photosHotel0.map((photo) => (
            <div className="hotel-img-wrapper">
              <img src={photo.src} />
            </div>
          ))}
        </div>

        <div className="hotel-details">
          <div className="hotel-details-texts">
            <h1 className="hotel-call">Stay in the heart of Krakow</h1>
            <p className="hotel-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officiis dolor consequatur reiciendis sunt accusantium
              ducimus corrupti voluptates quasi quidem. Dolorem quam facere
              dolores, provident dolore voluptatem id neque alias!
            </p>
          </div>
        </div>
        <div className="hotel-details-price">
          <h2>Perfeito para 9 dias de estadia</h2>
          <span>
            Localizado no coração de Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tempora sit eum excepturi repudiandae. Laudantium
            animi molestias nesciunt quas veniam nostrum quos deserunt adipisci
            reprehenderit, quo magnam reiciendis amet voluptatem ut. score de
            9.9.
          </span>
          <h3>
            <b>$945</b> (9 nights)
          </h3>
          <button>Agende a sua Reserva AGORA!</button>
        </div>
      </div> */}
    </div>
  );
}
