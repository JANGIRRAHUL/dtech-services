import { useNavigate } from "react-router-dom";

import "./index.css"

const Card = ({ prop }) => {
  const navigate = useNavigate();

  const goToService = () => {
    navigate("/services")
  }

  const { name, url } = prop
  return (
    <div className="parent d-flex justify-content-center align-content-center m-3 p-5 text-center rounded-3" style={{ width: "25rem", aspectRatio: '9/6', backgroundSize: 'cover', backgroundImage: `url(${url})`, boxShadow: ".1rem .1rem .8rem grey" }}>
      <div className="child d-flex flex-column justify-content-between align-content-center">
        <p className="text-white fw-bold" style={{ fontSize: "1.5rem" }}>
          {name}
        </p>
        <div>
          <button onClick={() => goToService()} className="text-white fw-bold btn w-50 bg-transparent border-3 border" style={{ backgroundColor: "#0e84cc" }}>Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
