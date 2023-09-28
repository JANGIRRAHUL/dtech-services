import { Link } from "react-router-dom";
import HeaderLink from "./link.js";

import "bootstrap/dist/css/bootstrap.css";

const headerLink = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Services", to: "/services" },
  { name: "Team", to: "/team" },
  { name: "Contact", to: "/contact" },
];

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-3 border border-bottom"
      style={{ backgroundColor: "#000080" }}
    >
      <div className="container-fluid px-5">
        <div>
          <ul className="navbar-brand navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link fw-bold text-secondary" to="/">
                <img
                  src="https://res.cloudinary.com/dg4htpr73/image/upload/v1695880590/Dtech_Services_cnqugr.jpg"
                  alt="dtech services"
                  height={50}
                  width={50}
                  className="logo"
                />
                <span className="ms-2" style={{ color: "#D9D9D9" }}>
                  DTech Services
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse pe-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {headerLink.map((v, i) => {
              return <HeaderLink key={i} prop={v} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
