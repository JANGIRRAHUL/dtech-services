import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCopyright } from "@fortawesome/fontawesome-free-regular"

import "./index.css"

const Footer = () => {
    return(
        <div className="footer" style={{fontFamily:"'Poppins',sans-serif"}}>
      <div className="upper-part d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center aligh-content-center" style={{color:"#0e0f0f"}}><h4 className="fw-bold">Scaled Solutions for the Industry</h4></div>
        <div className="mt-4 d-flex justify-content-center"><p className="w-75 fs-6" style={{color:"#555555"}}>Agile. Adaptable. Ambitious. We work to reduce costs and implement best practices in Power Infrastructure, Telecom, Signaling and Solar. Our business and services outsourcing solutions are tailored and will give you the time to focus on service, long-term strategy.</p></div>
      </div>
      <div className="footer-copyright">
        <div className="d-flex align-self-center">
          <div className="d-flex align-self-center mx-2"><FontAwesomeIcon icon={faCopyright} /></div>
          <div className="d-flex align-self-center">2023 DTech Services. All rights reserved.</div>
          </div>
          <div className="d-flex align-self-center">Designed and Developed by  <span className="mx-2" style={{color:"#b4cbcf"}}> Tidan Projects</span></div>
        </div>
    </div>
    )
}

export default Footer