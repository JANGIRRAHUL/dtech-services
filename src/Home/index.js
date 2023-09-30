import Card from "./card";
import "./index.css"

const cardDetails = [
  { name: "Excels in the Telecom, Signaling, and Power Infrastructure sectors", url: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696007960/istockphoto-187567068-1024x1024-transformed_gb5dom.jpg" },
  { name: "Power Infra solutions, and innovative electricity cost reduction strategies.", url: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696007173/wallpaperflare.com_wallpaper_7_1_lfcfst.jpg" },
  { name: "Telecom solutions, RF surveys and support for GSM/GSM-R systems", url: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696008267/2482029_iitmm4.jpg" },
  { name: "Deliver innovative, budget-compliant solutions and top-notch quality standards.", url: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696009175/hand-using-touch-screen_il31xz.jpg" },
  { name: "Providing installation, commissioning, and maintenance for signaling equipment", url: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696006655/wallpaperflare.com_wallpaper_3_lltrdq_1_hppqgx.jpg" },

]

const Home = () => (
  <div className="main-container">
    <div className="upper-container d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex justify-content-center align-items-center mt-5 fw-bold">
        <h1 className="main-heading text-center">DTS: Precision in Telecom, Signaling, <br /> Solar.</h1>
      </div>
      <div className="d-flex justify-content-center fw-semibold fs-5 mt-2">
        <ul className="d-flex flex-row justify-content-center align-content-center">
          <p className="mx-3">Drive Efficiency</p>
          <p className="mx-3">Automate</p>
          <p className="mx-3">Reduce Risk</p>
          <p className="mx-3">Improve Service</p>
        </ul>
      </div>
    </div>
    <div className="lower-container fs-5 fw-bold mt-5 mx-3 d-flex justify-content-center">
      <p className="text-center mx-3">
        DTech Services stands out in the Telecom, Signaling, and Power Infra
        industries by offering comprehensive, end-to-end solutions that
        encompass supply, installation, commissioning, and ongoing maintenance
        of critical systems. With a focus on innovation, a highly qualified
        team, and extensive engineering expertise, we provide clients with
        tailored solutions that ensure seamless operations in  the Railways,
        Metros, Factories, Offices, and more.
      </p>
    </div>
    <div className="d-flex flex-wrap justify-content-center p-5" style={{ height: "100%" }}>
      <div className="lower-container fs-3 fw-bold m-3 d-flex justify-content-center align-content-center" style={{ width: "25vw", height: "45vh" }}>
        <p className="text-left mx-3">
          DTech Services (DTS) stands out as a complete solution partner that integrates Telecom, Signaling, and Power Infrastructure services.
        </p>
      </div>
      {cardDetails.map((value, index) => {
        return (<Card key={index} prop={value} />)
      })}
    </div>
  </div>
);

export default Home;
