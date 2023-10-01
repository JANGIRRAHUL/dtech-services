const ServiceCard = ({prop}) => {

    
    return(
        <div className="card d-flex flex-row  m-4 mt-0">
          <div className="left-container d-flex justify-content-center" style={{ width: "40%" , backgroundImage: `url(${prop.img})`}}>
          </div>
          
          <div className="d-flex flex-column justify-content-center p-5 pt-3 pe-3" style={{ width: "70%" }}>
          <div className="d-flex justify-content-end text-white fw-semibold mb-3"><span className="bg-dark border shadow-lg rounded-5 p-3">{prop.tag}</span></div>
            <div className="d-flex">
              <h3 className="fw-bold mb-4" style={{color: "#0e84cc"}}>{prop.heading[0]}: <span style={{fontWeight: 100, fontSize: 20, lineHeight: 0.8}}>{prop.heading[1]}</span></h3>
            </div>
            <div>

            </div>
            <ul style={{fontWeight: 500}} className="mx-5 d-flex flex-column gap-2 ">
                {prop.points_list.map((v,i) => {
                    return(
                        <li key={i}>{v}</li>
                    )
                } )}
            </ul>
          </div>

        </div>
    )
}

export default ServiceCard