import { Link } from "react-router-dom";
import HeaderLink from "./link.js";

import "bootstrap/dist/css/bootstrap.css";

import "./index.css"

const headerLink = [
  { name: "HOME", to: "/" },
  { name: "PROJECTS", to: "/projects" },
  { name: "TEAM", to: "/team" },
  { name: "SERVICES", to: "/services" },
  { name: "ABOUT", to: "/about" },
  { name: "CONTACT", to: "/contact" },
];

const Header = () => {
  return (
    <div className="d-flex" style={{ fontFamily: "'Poppins',sans-serif" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light px-3 d-flex w-100 position-fixed shadow"
        style={{ backgroundColor: "#ffffff", zIndex: 10 }}
      >
        <div className="container-fluid px-5">
          <div>
            <ul className="navbar-brand navbar-nav ms-auto m-0 p-0">
              <li className="nav-item d-flex justify-content-center align-content-center">
                <Link className="nav-link fw-bold text-secondary d-flex justify-content-center align-content-center align-items-center flex-inherit flex-row" to="/">
                  <img
                    src="https://res.cloudinary.com/dg4htpr73/image/upload/v1695880590/Dtech_Services_cnqugr.jpg"
                    alt="dtech services"
                    height={50}
                    width={50}
                    className="logo"
                  />
                  <span className="fs-2" style={{ color: "#0e84cc" }}>
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
    </div>
  );
};

export default Header;
