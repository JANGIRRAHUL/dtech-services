import Card from "./card";
import "./index.css"

const cardDetails = [
  {name:"card1"},  
  {name:"card1"},  
  {name:"card1"},  
  {name:"card1"},  
  {name:"card1"},  

]

const Home = () => (
  <div className="main-container">
    <div className="upper-container d-flex flex-column align-items-center justify-content-center">
      <div className="text-white d-flex justify-content-center align-items-center mt-5">
        <h1 className="main-heading text-center">DTS: Precision in Telecom, Signaling, <br/> Solar.</h1>
      </div>
      <div className="text-white d-flex w-50 fw-semibold fs-5 mt-2">
        <ul className="w-100 d-flex">
          <li className=" w-25 text-left">Drive Efficiency</li>
          <li className="w-25">Automate</li>
          <li className="w-25">Reduce Risk</li>
          <li className="w-25">Improve Service</li>
        </ul>
      </div>
    </div>
    <div className="lower-container fs-6 fw-bold mt-5 d-flex justify-content-center">
      <p className="text-center">
        DTech Services stands out in the Telecom, Signaling, and Power Infra
        industries by offering comprehensive, end-to-end solutions <br/>  that 
        encompass supply, installation, commissioning, and ongoing maintenance
        of critical systems. With a focus on innovation, a <br/>  highly qualified 
        team, and extensive engineering expertise, we provide clients with
        tailored solutions that ensure seamless  <br/> operations in  the Railways,
        Metros, Factories, Offices, and more.
      </p>
    </div>
    <div className="d-flex flex-wrap justify-content-center p-5 border border-black">
      <div className="lower-container fs-3 fw-bold m-4 d-flex justify-content-center card" style={{ width: "20rem" }}>
        <p className="text-center">
        DTech Services (DTS) stands out as a complete solution partner that integrates Telecom, Signaling, and Power Infrastructure services.
        </p>
      </div>
      {cardDetails.map((value,index) => {
        return(<Card key={index} prop={value}/>)
      })}
    </div>
  </div>
);

export default Home;
