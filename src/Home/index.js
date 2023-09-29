import Card from "./card";
import "./index.css"

const cardDetails = [
  {name:"Excels in the Telecom, Signaling, and Power Infrastructure sectors", url:"https://res.cloudinary.com/dg4htpr73/image/upload/v1696007960/istockphoto-187567068-1024x1024-transformed_gb5dom.jpg"},  
  {name:"Power Infrastructure solutions, and innovative electricity cost reduction strategies.", url:"https://res.cloudinary.com/dg4htpr73/image/upload/v1696007173/wallpaperflare.com_wallpaper_7_1_lfcfst.jpg"},  
  {name:"Telecom solutions, RF surveys and support for GSM/GSM-R systems", url:"https://res.cloudinary.com/dg4htpr73/image/upload/v1696008267/2482029_iitmm4.jpg"},  
  {name:"Deliver innovative, budget-compliant solutions and top-notch quality standards.", url:"https://res.cloudinary.com/dg4htpr73/image/upload/v1696009175/hand-using-touch-screen_il31xz.jpg"},  
  {name:"Providing installation, commissioning, and maintenance for signaling equipment", url:"https://res.cloudinary.com/dg4htpr73/image/upload/v1696006655/wallpaperflare.com_wallpaper_3_lltrdq_1_hppqgx.jpg"},  

]

const Home = () => (
  <div className="main-container">
    <div className="upper-container d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex justify-content-center align-items-center mt-5 fw-bold">
        <h1 className="main-heading text-center">DTS: Precision in Telecom, Signaling, <br/> Solar.</h1>
      </div>
      <div className="d-flex w-50 fw-semibold fs-5 mt-2">
        <ul className="w-100 d-flex">
          <li className=" w-25 text-left">Drive Efficiency</li>
          <li className="w-25">Automate</li>
          <li className="w-25">Reduce Risk</li>
          <li className="w-25">Improve Service</li>
        </ul>
      </div>
    </div>
    <div className="lower-container fs-5 fw-bold mt-5 d-flex justify-content-center">
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
    <div className="d-flex flex-wrap justify-content-center p-5 h-100">
      <div className="lower-container fs-3 fw-bold m-3 d-flex justify-content-center align-content-center" style={{ width: "25rem", height:"20rem" }}>
        <p className="text-left mx-3">
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
