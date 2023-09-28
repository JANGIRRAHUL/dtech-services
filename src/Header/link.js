import { Link } from "react-router-dom"

import './index.css'

const HeaderLink = ({prop}) =>{

const {name, to} = prop;

    return (
        <>
        <li className="d-flex align-items-center justify-content-center nav-item mx-2 glow-on-hover" >
            <Link className="nav-link fw-bold text-white" to={to}>
              {name}
            </Link>
          </li>
        </>
    )
}

export default HeaderLink;