import { Chrono } from "react-chrono";
import { useEffect } from "react";
import "./index.css"

const items = [
  {
    title: 'WDFC_STP-5_Texmaco_CTP-1',
    cardTitle: 'WDFC_STP-5_Texmaco_CTP-1',
    cardSubtitle: 'Project- Installation',
    cardDetailedText:
      "Project installation done of GSM-R Equipment's at Stations & THs and Earthings for Tower & Lighting Arrestors.",
  },
  {
    title: 'WDFC_STP-5_Texmaco_CTP-2',
    cardTitle: 'WDFC_STP-5_Texmaco_CTP-2',
    cardSubtitle: 'Project- Installation',
    cardDetailedText:
      "Project installation done of GSM-R Equipment's at Stations & THs, Earthings for Tower & Lighting Arrestors and ALH Indoor signallaing (Hitachi) equipments & wiring work, CTR outdoor cable wirings, etc.",
  },
  {
    title: 'WDFC_STP-5_Texmaco_CTP-2 & 3',
    cardTitle: 'WDFC_STP-5_Texmaco_CTP-2 & 3',
    cardSubtitle: 'Project- Installation',
    cardDetailedText:
      "Project installation done of Earthings & Testing for Telecom and Signaling Equipments.",
  },
  {
    title: 'WDFC_STP-5_Texmaco_CTP-3',
    cardTitle: 'WDFC_STP-5_Texmaco_CTP-3',
    cardSubtitle: 'Project- Installation',
    cardDetailedText:
      "Project installation done of ALH Indoor signallaing (Hitachi) equipments & wiring work, CTR outdoor cable wirings, etc.",
  },
  {
    title: 'WDFC_CTP-13_L&T',
    cardTitle: 'WDFC_CTP-13_L&T',
    cardSubtitle: 'Projects_ Trenching & Cable laying work ',
    cardDetailedText:
      "Projects_ Trenching & Cable laying work along the track including TPWS cables (Hitachi), Signaling cables & Telecom cables for HFCL.",
  },
  {
    title: 'EDFC_CP-104_D Vista',
    cardTitle: 'EDFC_CP-104_D Vista',
    cardSubtitle: 'Projects- GSM-R system installation',
    cardDetailedText:
      "Projects- GSM-R system installation done including Antenna’s, cable laying, BTS installation, earthings.",
  },
  {
    title: 'WDFC_STP-14_HFCL',
    cardTitle: 'WDFC_STP-14_HFCL',
    cardSubtitle: 'Projects - installation',
    cardDetailedText:
      "Projects- Installation of Indoor Telecom Equipments at Stations, THs, IBH locations.",
  },
  {
    title: 'WDFC_STP-17_HFCL',
    cardTitle: 'WDFC_STP-17_HFCL',
    cardSubtitle: 'Projects- installation',
    cardDetailedText:
      "Projects- Installation of Indoor Telecom Equipments at Stations, THs, IBH locations.",
  },

]

const Projects = () => {
  useEffect(() => { document.title = "Projects" }, [])
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <div className="project-container d-flex flex-column align-items-center justify-content-center text-white">
        <div className="d-flex justify-content-center align-items-center mt-5 fw-bolder">
          <h1 className="main-heading">About Projects</h1>
        </div><div className="d-flex justify-content-center align-items-center w-100">
          <p className="text-center" style={{ fontSize: "1.5em", width: "75vw" }}>DTech Services is focusing its extensive engineering experience and resources on providing innovative & practical solutions to clients. Complete system management across all the technologies in Telecom, Signaling-Railways/Metros & Solar industries.
          </p>
        </div>
      </div>
      <div className="chrono-container">
        <Chrono theme={{
          primary: "red",
          secondary: "skyblue",
          cardBgColor: "#e8cd84",
          cardForeColor: "red",
          titleColor: "red",
        }} fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.8rem',
          cardTitle: '1rem',
          title: '1rem',
        }} items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  )
};

export default Projects;
