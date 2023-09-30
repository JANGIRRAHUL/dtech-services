import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCopyright } from "@fortawesome/fontawesome-free-regular"

import "./index.css"

const Footer = () => {
  return (
    <div className="footer" style={{ fontFamily: "'Poppins',sans-serif" }}>
      <div className="upper-part d-flex flex-column justify-content-center mt-5 mb-5">
        <div className="d-flex justify-content-center aligh-content-center" style={{ color: "#0e0f0f" }}><h4 className="fw-bold">Scaled Solutions for the Industry</h4></div>
        <div className="mt-4 d-flex justify-content-center"><p className="w-75 fs-6" style={{ color: "#555555" }}>Agile. Adaptable. Ambitious. We work to reduce costs and implement best practices in Power Infrastructure, Telecom, Signaling and Solar. Our business and services outsourcing solutions are tailored and will give you the time to focus on service, long-term strategy.</p></div>
        <div className="d-flex justify-content-center" style={{ backgroundColor: "#e1f5f0" }}>
          <p className="w-75 fs-6" style={{ color: "#555555" }}>Professional experience more the 17 years in Telecom & Signaling systems including  on air the GSM-R network of NR-1, NR-2 & KFW Project, support of design & execution of WDFC project & design & execution of MML3 (Mumbai Metro) Project</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="d-flex align-self-center" style={{ height: "10vh" }}>
          <div className="d-flex align-self-center mx-2"><FontAwesomeIcon icon={faCopyright} /></div>
          <div className="d-flex align-self-center">2023 DTech Services. All rights reserved.</div>
        </div>
        <div className="d-flex align-self-center">Designed and Developed by  <span className="mx-2" style={{ color: "#b4cbcf" }}> Tidan Projects</span></div>
      </div>
    </div>
  )
}

export default Footer