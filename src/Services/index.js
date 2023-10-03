import { useEffect } from "react";

import "./index.css"
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696171041/Picture1_y82vwd.jpg",
    tag: "TELECOM",
    heading: ["GSM/GSM-R System", "DTech Services is providing the services in Installation, Testing & commissioning of following GSM/GSM-R equipment's"],
    points_list: [
      "Base Transceiver System (BTS)",
      "Antennas on Tower, Loco & buildings",
      "Fixed Radio Terminal",
      "Lighting Arrestors & Aviation lights",
      "In-building solutions",
      "Power Supply systems",
      "BSC, TCU, Servers, etc.",
      "Media Gateways",
      "GPRS Nodes",
      "Network switches",
      "Network Management Systems",
      "Cab Radios",
      "Radio Dispatcher workstations (RDW)",
      "RF Drive Testing pre-Launch & Post-Launch",
      "RF optimization",
      "Pre-Installation Surveys"
    ]

  }
  ,
  {
    id: 2,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1696183869/Picture2_cyccsy.png",
    tag: "TELECOM",
    heading: ["EPABX & DTS System", "DTech Services is providing the services in Installation, Testing & commissioning of following EPABX/DTS equipment’s"],
    points_list: [
      "Mother & Child exchange",
      "Servers",
      "Voice recording systems",
      "Switches",
      "IP Telephones",
      "Analog Telephones",
      "Digital Telephones",
      "PIJF Cable laying"
  ]

  }
  ,
  {
    id: 3,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696184826/Picture3_1_enhwie.png",
    tag: "TELECOM",
    heading: ["MCS System", "DTech Services is providing the services in Installation , Testing & commissioning of following MCS (Master clock system) equipment’s"],
    points_list: [
      "Master clock system",
      "Sub-Master Clock",
      "SSU (Synchronization Supply Unit)",
      "Digital Clocks",
      "Analog Clocks",
      "Power & Data cablings"
  ]

  }
  ,
  {
    id: 4,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183870/Picture4_bwezup.png",
    tag: "TELECOM",
    heading: ["Power Supply System (PSS)", "DTech Services is providing the services in Installation, Testing & commissioning of following PSS equipment’s"],
    points_list: [
      "SMPS/Chargers",
      "Battery Banks 200/300/600 AH",
      "UPS (Uninterruptible Power Supply)",
      "Earthing work",
      "Alarm extension",
      "Power & Data cablings"
  ]

  }
  ,
  {
    id: 5,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183871/Picture5_iwu3gw.png",
    tag: "TELECOM",
    heading: ["WAN & LAN System", "DTech Services is providing the services in Installation, Testing & commissioning of WAN/LAN equipment’s"],
    points_list: [
      "L3/L2 Switches",
      "Servers",
      "Racks",
      "Access Points",
      "Network Management servers",
      "Power & Data cablings",
      "Power Supplies",
      "FMS/ODF (Fiber Management System / Optical Distribution Frame)"
  ]

  }
  ,
  {
    id: 6,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183873/Picture6_ymvknk.png",
    tag: "TELECOM",
    heading: ["CCTV System", "DTech Services is providing the services in Installation, Testing & commissioning of of CCTV (VSS) equipment’s"],
    points_list: [
      "PTZ/Dome/Fixed box Camera",
      "L3/L2 Switches",
      "Servers, Recorders & storage",
      "Power supplies",
      "LIU/FMS, Junction boxes",
      "Workstations",
      "POE switches",
      "Network Management system"
  ]

  }
  ,
  {
    id: 7,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183873/Picture6_ymvknk.png",
    tag: "TELECOM",
    heading: ["SDH/PDH, OFC", "DTech Services is providing services in Installation, Testing & commissioning of SDH/PDH Systems, OFC laying, splicing, etc."],
    points_list: [
      "Design Assistance of GSM-R, OFC, SDH, WAN, MCS, PSS, EPABX, DTS, VSS Systems",
      "Installation & testing of Earthing system"
  ]

  }
  ,
  {
    id: 7,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183874/Picture7_wutwqc.jpg",
    tag: "TELECOM",
    heading: ["IT equipment’s & accessories", "DTech Services is providing the services in Installation, Testing & commissioning of following IT equipment’s & accessories"],
    points_list: [
      "Servers",
      "L3/L2 Switches",
      "Light Interfacing Units (LIU)",
      "Access Points",
      "19” Racks 42U to 6U",
      "ETSI Racks",
      "Equipment earthing’s",
      "Power Supplies",
      "UPS (Uninterruptible Power Supply)",
      "Network Management System (NMS)",
      "Power Cabling",
      "Data cabling",
      "OFC laying & splicing (Optical Fiber Cable)",
      "Fiber Management System",
      "Other IT equipment's"
  ]

  }
  ,
  {
    id: 8,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183875/Picture8_lnmy4w.jpg",
    tag: "SIGNALING",
    heading: ["Signaling Systems", "DTech Services is providing the services in design, Execution and O&M of Signaling Systems"],
    points_list: [
      "Installation and Wiring of Relay rack including wiring of SPDs, Relays, connectorization of wagos, etc.",
      "Installation and Wiring of Cable Termination racks (CTR) including wiring of SPDs, outdoor and indoor cable terminations, wiring between IOM and CT Racks.",
      "Installation and wiring of Input Output Modules (IOM), connectorization/wiring (Sauriou connector - Hitachi) between Relay rack to IOM, power cabling and earthing work.",
      "Installation and wiring/cabling of Location boxes and signals.",
      "Installation of power system for signaling equipment like UPS, battery backups, SPDs, AC/DCs, etc.",
      "Termination of Location box cables at CT rack inside equipment room.",
      "Outdoor earthing work including laying of GI/copper strip, cabling, earth testing, terminations, etc.",
      "Installation, wiring and cabling of Train Protection and Warning System (TPWS).",
      "Preparation of Design drawing/documents.",
      "Interaction with Client and OEMs.",
      "Design Review & finalization as per client requirements.",
      "Requirement finalization for the installation as per site/client requirements."
  ]

  }
  ,
  {
    id: 9,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696171041/Picture1_y82vwd.jpg",
    tag: "SIGNALING",
    heading: ["TPWS", "Installation of Train Protection And Warning Systems (TPWS)"],
    points_list: [
      "Survey and inspection for marking of cross trench and junction box location as per approved CPP",
      "Installation of Balise and Laying of cables up to JB location.",
      "Excavation of cross/branch trench, main & tail balise cable laying, backfilling, continuity testing, etc.",
      "Installation and Wiring of Balise junction box & termination of balise main & tail cables at JB.",
      "Installation of earthing near track as per plan and Testing of Earth resistance value.",
      "Labeling of cables, equipment's and accessories.",
      "Coiling of spare cable in pits.",
      "Fixing of Junction box support assembly.",
      "Continuity and loop resistance test of balise cables.",
      "Insulation resistance testing.",
      "Earth value and elevation marking on JB.",
      "Installation of TPWS rack inside ALH & stations.",
      "Wiring of TPWS system inside SER at ALH & stations.",
      "Power & earthing work inside SER at ALH & stations.",
      "Installation, wiring and cabling of Train Protection and Warning System (TPWS).",
      "Preparation of Design drawing/documents.",
      "Interaction with Client and OEMs.",
      "Design Review & finalization as per client requirements.",
      "Requirement finalization for the installation as per site/client requirements."
  ]

  }
  ,
  {
    id: 10,
    img: "https://res.cloudinary.com/dg4htpr73/image/upload/v1696183877/Picture10_n5mxqt.png",
    tag: "POWER INFRASTRUCTURE",
    heading: ["Solar System", "Design, Execution and O&M of Solar System Work"],
    points_list: [
      "Preparation of Design drawing/documents",
      "Interaction & finalization of OEMs (Original Equipment Manufacturers)",
      "Design Review & finalization as per client requirements",
      "Site visit/survey for solar system installation",
      "Requirement finalization for the installation as per site/client requirements",
      "Installation of solar panels, Array mounting kit, combiner box, surge protection (inverter), meters, battery banks, charge controller, etc.",
      "Installation of sliding accessories/assemblies",
      "System grounding",
      "Testing of solar panel modules",
      "Preparation of foundations",
      "Preparation of equipment/monitoring rooms",
      "Operation and Maintenance of solar system"
  ]

  }
]

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

      <div className="d-flex flex-column" style={{ backgroundColor: "#e1eaff" }}>
        <div className="text-center p-5 fw-bold" ><h1 className="fw-bold" style={{ fontSize: '10vw' }}>SPECIALIZATION</h1></div>

        {serviceData.map((v, i) => {
          return (<ServiceCard key={i} prop={v} />)
        })}
      </div>
    </div >
  )
};

export default Services;
