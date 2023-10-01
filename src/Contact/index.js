import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/fontawesome-free-solid";
import { faPhone } from "@fortawesome/fontawesome-free-solid";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import logoImg from './../images/earth-globe-with-continents-maps_44536.png'
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

const contactInfo = [
  {
    name: "Registered Office Address:",
    value:
      "Plot no 8, Mangalam Vihar, D Vistar, Benar Road Jaipur, Rajasthan, 302013",
    icon: (
      <FontAwesomeIcon icon={faLocationArrow} />
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

const Contact = () => {
  useEffect(() => { document.title = "Contact Us" }, [])
  return (
    <>
      <div className="contactUs">
        <div className="w-screen flex justify-center items-center">
          <div className="flex flex-col">
            <div className=" flex justify-center items-center bg-[url('./../images/bg1.jpg')] bg-cover h-[calc(100vh-82px)] w-screen">
              <div className=" screen-1 h-72 w-[480px] p-10 bg-black rounded-xl shadow-2xl shadow-black flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="">
                    <img className="h-16 w-16 rounded-full" src={logoImg} alt="" />
                  </div>
                  <h1 className="font-thin text-3xl text-white"><span className="font-bold">D-Tech</span> Services</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[url('./../images/bg2.jpg')] bg-cover h-[calc(100vh-82px)] w-screen">
              <div className="screen-2 h-72 w-[480px] p-10 bg-white rounded-xl shadow-2xl  shadow-black flex justify-between border-black border">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h1 className="font-thin text-3xl"><span className="font-bold">UTTAM</span> KUMAR</h1>
                    <p className="mb-2">Founder D-Tech Services</p>
                    <div className="flex items-center">
                      <div className="bg-black h-1 w-8 rounded-l-full"></div>
                      <div className="bg-black h-0.5 w-44 rounded-r-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {
                      contactInfo.map((v, i) => {
                        return (
                          <h3 key={i} className="text-xs flex gap-3">
                            <span className="text-sm flex justify-center items-center">{v.icon}</span>
                            <span className="w-52">{v.value}</span>
                          </h3>
                        )
                      })
                    }
                  </div>
                </div>
                <div>
                  <img className="h-20" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[url('./../images/bg3.jpg')] bg-cover h-[calc(100vh-82px)] w-screen">
              <div className="w-[480px] border border-black bg-white p-8 py-14 rounded-lg shadow-xl  shadow-black">
                <h1 className="text-2xl text-center">WE ARE HERE TO HELP YOU !</h1>
                <div className="">
                  <form className="">
                    <div className="flex flex-col gap-0">
                      <div className="form-row">
                        <div className="col-md-4 mb-2 w-full">
                          <label htmlFor="validationServer01">Name</label>
                          <input
                            type="text"
                            className="form-control border border-primary"
                            id="validationServer01"
                            placeholder="Someone"
                            defaultValue=""
                            required=""
                          />
                        </div>
                        <div className="col-md-4 mb-2 w-full">
                          <label htmlFor="validationServer02">Email</label>
                          <input
                            type="email"
                            className="form-control border border-primary"
                            id="validationServer02"
                            placeholder="abc@domain.com"
                            defaultValue=""
                            required=""
                          />
                        </div>
                        <div className="col-md-4 mb-2 w-full">
                          <label htmlFor="validationServer04">Contact No</label>
                          <input
                            type="email"
                            className="form-control border border-primary"
                            id="validationServer04"
                            placeholder="+91 XXXXX-XXXXX"
                            defaultValue=""
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-3 w-full">
                          <label htmlFor="validationServer03">Quary</label>
                          <textarea name="" id="" cols="30" rows="6" className="form-control border border-primary"></textarea>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
