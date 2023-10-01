import { useEffect } from "react";

import "./index.css"

const Services = () => {
  useEffect(() => { document.title = "Services" }, [])
  return (
    <div className="main-container" style={{ fontFamily: "'Poppins',Sans-serif" }}>
      <div className="service-container d-flex flex-column align-items-center justify-content-center text-white">
        <div className="d-flex justify-content-center align-items-center mt-5 fw-bolder">
          <h1 className="main-heading">About Services</h1>
        </div><div className="d-flex justify-content-center align-items-center w-100">
          <p className="text-center" style={{ fontSize: "1.5em", width: "75vw" }}>DTech Services is focusing its extensive engineering experience and resources on providing innovative & practical solutions to clients. Complete system management across all the technologies in Telecom, Signaling-Railways/Metros & Solar industries.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column" style={{ backgroundColor: "#ccb697" }}>
        <div className="d-flex justify-content-center mt-5"><h2 className="text-decoration-underline">SPECIALIZATION IN TELECOM</h2></div>
        <div className="d-flex flex-row">
          <div className="card d-flex flex-column justify-content-center">
            <div className="d-flex align-self-center">
              <h3>GSM/GSM-R System</h3>
            </div>
            <div>
              <h5>DTech Services is providing the services in Installation, Testing & commissioning <br /> of following GSM/GSM-R equipment’s
              </h5></div>
            <ul className="mx-5">
              <li>Base Transceiver System (BTS)</li>
              <li>Antennas on Tower, Loco & buildings</li>
              <li>Fixed Radio Terminal</li>
              <li>Lightning Arrestors & Aviation lights</li>
              <li>In-building solutions</li>
              <li>Power Supply systems</li>
              <li>BSC, TCU, Servers, etc.</li>
              <li>Media Gateways</li>
              <li>GPRS Nodes</li>
              <li>Network switches</li>
              <li>Network Management Systems</li>
              <li>Cab Radios</li>
              <li>Radio Dispatcher workstations (RDW)</li>
              <li>RF Drive Testing pre-Launch & Post-Launch</li>
              <li>RF optimization</li>
              <li>Pre-Installation Surveys</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-content-center align-self-center" style={{ height: "77vh", width: "30vw" }}>
            <img src="https://res.cloudinary.com/dg4htpr73/image/upload/v1696171041/Picture1_y82vwd.jpg" alt="telecom" style={{ borderRadius: "10%", height: "77vh", width: "25vw" }} />
          </div>
        </div>

      </div>
    </div >
  )
};

export default Services;
