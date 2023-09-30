import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowAltCircleDown } from "@fortawesome/fontawesome-free-regular"

import "./index.css"

const About = () => (
  <div style={{ fontFamily: "'Poppins',sans-serif" }} >
    <div className="about-container d-flex flex-column align-items-center justify-content-center text-white">
      <div className="d-flex justify-content-center align-items-center mt-5 fw-bolder">
        <h1 className="main-heading">About Us</h1>
      </div><div className="d-flex justify-content-center align-items-center w-100">
        <p className="text-center" style={{ fontSize: "1.5em", width: "75vw" }}>DTech Services (DTS) is a purely private owned firm, mainly dealing of supply and services in Telecom, Signaling & Solar industries (Power Infra). DTS is committed to deliver projects on time, within budget and the required quality.
        </p>
      </div>
    </div>
    <div className="d-flex flex-column align-content-center" style={{ backgroundColor: "#e6f0f2", height: "100vh" }}>
      <div className="d-flex justify-content-center aligh-content-center" style={{ color: "#0e84cc" }}>
        <h2 className="fw-semibold" style={{ marginTop: "2vh" }}>Our People</h2>
      </div>
      <div className="d-flex justify-content-center align-content-center fs-3" style={{ color: "#0e84cc" }}><FontAwesomeIcon icon={faArrowAltCircleDown} /></div>
      <div className="mt-4 d-flex justify-content-center">
        <p className="w-75 fs-6" style={{ color: "#555555" }}>The success and strength of DTech Services is grounded in the quality of our people. Our turnover rates are consistently among the lowest in our industry. Simply put, we retain our people, and, as a result, our people retain our clients. Our passion and commitment to providing the best possible service unites us, and our diversity of experience strengthens this passion.</p>
      </div>
      <div className="d-flex justify-content-center">
        <dl className="w-75">
          <dt className="fs-5" style={{ color: "#0e84cc", marginTop: "2vh" }}>Client Focus</dt>
          <li style={{ color: "#555555", marginTop: "2vh" }}>Our commitment to client services begins with our recruiting only the best employees and giving them the support and tools they need to enable our clients’ success.  We combine cutting-edge technology with a unique commitment to bringing a strong customer service focus to functions that were previously managed internally.</li>
          <li style={{ color: "#555555", marginTop: "2vh" }}>Drawn to DTech Service's energetic and dynamic environment, our employees are committed to shaping the future of our industry with their strategic and innovative ideas.</li>
          <dt className="fs-5" style={{ color: "#0e84cc", marginTop: "2vh" }}>Specialists and Leaders</dt>
          <li style={{ color: "#555555", marginTop: "2vh" }}>Our teams are constantly striving to lead the industry with an original service model and by constantly improving our Best-Practices approach to providing professional services</li>
          <li style={{ color: "#555555", marginTop: "2vh" }}>Our employees thrive in an environment where career development and the success of DTech Service are mutually dependent on our ability to hone and improve the services that we provide to our clients.</li>
        </dl>
      </div>
    </div>
  </div>
)

export default About