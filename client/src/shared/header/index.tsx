import { Link, useNavigate } from "react-router-dom";
import Button from "../button";

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="bg-white py-6">
      <div className="container flex flex-row justify-between items-center">
        <Link to="/">
          <p className="text-lg">HEADER</p>
        </Link>
        <Button onClick={() => navigate('/user-add')}>Добавить</Button>
      </div>
    </header>
  );
};

export default Header;
