import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import './index.css'

const HeaderLink = ({ prop }) => {

  const { name, to } = prop;

  return (
    <>
      <Nav.Link className="d-flex align-items-center justify-content-center mx-2 glow-on-hover" style={{ color: "#0e84cc" }} href={to}>{name}</Nav.Link>
    </>
  )
}

export default HeaderLink;