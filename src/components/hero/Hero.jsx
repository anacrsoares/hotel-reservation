import "./hero.css";

export default function Hero({ hero, children, backgroundUrl }) {
  return (
    <div className={hero} style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h1>{children}</h1>
    </div>
  );
}

Hero.defaultProps = {
  hero: "default-hero",
};
