import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-6">
      <div className="container">
        <Link to="/">
          <p className="text-lg">HEADER</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
