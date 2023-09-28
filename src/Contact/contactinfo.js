import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

const ContactInfo = ({ prop }) => {
  const { value, icon } = prop;
  return (
    <li className="list">
      {icon}
      <span className="w-100"> : {value}</span>
    </li>
  );
};

export default ContactInfo;
