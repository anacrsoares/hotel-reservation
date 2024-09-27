import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-return">
            return home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}
