import "./index.css"

const Card = ({prop}) => {
    const {name, url} = prop
  return (
    <div className="d-flex justify-content-center align-content-center m-3 text-center rounded-3 shadow" style={{ width: "25rem", height: "20rem" }}>
    <div
      className="parent rounded-3 shadow" 
      style={{ width: "25rem" ,height: "20rem"}}
    >
      <div className="child d-flex flex-column justify-content-between align-content-center p-5 rounded-3 shadow" style={{backgroundImage: `url(${url})`}}>
        <p className="text-white fw-bold fs-3">
          {name}
        </p>
        <div>
        <button className="text-white fw-bold btn w-50 bg-transparent border-3 border" style={{backgroundColor: "#0e84cc"}}>Click Here</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
