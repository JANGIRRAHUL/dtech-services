import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/fontawesome-free-solid";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

import ContactInfo from "./contactinfo";

const contactInfo = [
  {
    name: "Registered Office Address:",
    value:
      "Plot no 8, Mangalam Vihar, D Vistar, Benar Road Jaipur, Rajasthan, 302013",
    icon: (
      <FontAwesomeIcon icon={faAddressBook} className="border border-black" />
    ),
  },
  {
    name: "Mob No:",
    value: "+91-7678473747",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
  {
    name: "Email:",
    value: "Info@dtechservices.co.in",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

const Contact = () => (
  <div className="container1 d-flex flex-column justify-content-center">
    <div className="d-flex flex-column align-items-center">
      <h1 className="heading">GET IN TOUCH</h1>
      <div className="">
        <ul>
          {contactInfo.map((value, index) => {
            return <ContactInfo key={index} prop={value} />;
          })}
        </ul>
      </div>
    </div>
    <div className="">
      <form action="" method="post">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div></div>
      </form>
    </div>
  </div>
);

export default Contact;
