import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-warning mt-5 py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          &copy; 2026 Hotel Paradise. Todos los derechos reservados.
        </p>
        <div>
          <a href="#" className="text-warning me-3">
            Facebook
          </a>
          <a href="#" className="text-warning me-3">
            Instagram
          </a>
          <a href="#" className="text-warning">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
