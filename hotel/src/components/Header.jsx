import { Link } from "react-router-dom";
import "./Header.css"; // CSS propio para detalles

function Header() {
  return (
    <header className="header bg-dark">
      <nav className="navbar navbar-expand-md navbar-dark container-fluid">
        <Link className="navbar-brand" to="/">
          Hotel Paradise
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rooms">
              Habitaciones
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              Eventos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">
              Galería
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
