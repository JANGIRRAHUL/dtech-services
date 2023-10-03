import './index.css';
import { useState } from 'react';
import CardService from './teamCardService';

let teamData = [
  {
    id: 1,
    name: 'Kiran',
    designation: 'CEO',
    description: 'He is the CEO of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Our CEO, Kiran, saw a huge opportunity in the market and started our company in 2013',
  },
  {
    id: 2,
    name: 'Rajesh',
    designation: 'COO',
    description: 'He is the COO of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rajesh, our COO, has more than 10 years of experience in the industry',

  },
  {
    id: 3,
    name: 'Ramesh',
    designation: 'CTO',
    description: 'He is the CTO of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Ramesh, our CTO, is a tech guru and has 20 years of experience in the field',
  },
  {
    id: 4,
    name: 'Radhika',
    designation: 'HR',
    description: 'She is the HR of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Radhika, our HR, has 10 years of experience in the industry',

  },
  {
    id: 5,
    name: 'Sonia',
    designation: 'Manager',
    description: 'She is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Sonia, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 6,
    name: 'Rahul',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rahul, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 7,
    name: 'Rohit',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rohit, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 8,
    name: 'Rani',
    designation: 'Manager',
    description: 'She is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rani, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 9,
    name: 'Raj',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Raj, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 10,
    name: 'Rajeshwari',
    designation: 'Manager',
    description: 'She is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rajeshwari, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 11,
    name: 'Rajendra',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rajendra, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 12,
    name: 'Rajkumar',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    message: 'Rajkumar, our Manager, has 15 years of experience in the industry',
  }
]

let count = 0;
let abc = null;
let autoScroll = setInterval(() => {
  if (!abc) return;
  abc(count)
  if (count === teamData.length - 1) {
    count = 0;
  } else {
    count++;
  }
  console.log(autoScroll);
}, 3000)

const Team = () => {
  const [cardLocation, setCardLocation] = useState(0)
  const [cardScrollLocation, setCardScrollLocation] = useState(0)
  let el = document.getElementById('scrollTeam');
  document.title = "Team"

  function scrollLeft(i) {
    setCardLocation(i)
    setCardScrollLocation(i * 456 + 27)
    if (el) { el.scrollTo({ left: (i * 456 + 27) || 0, behavior: 'smooth' }) }
  }
  abc = scrollLeft;

  if (el) {
    el.onmouseover = () => {
      clearInterval(autoScroll);
      
    }

    el.ontouchstart = () => {
      clearInterval(autoScroll);
    }
    el.ontouchend = () => {
      clearInterval(autoScroll);
      autoScroll = setInterval(() => {
        scrollLeft(count)
        if (count === teamData.length - 1) {
          count = 0;
        } else {
          count++;
        }
      }, 3000)
    }

    el.onmouseleave = () => {
      clearInterval(autoScroll);
      autoScroll = setInterval(() => {
        scrollLeft(count)
        if (count === teamData.length - 1) {
          count = 0;
        } else {
          count++;
        }
      }, 3000)
    }
  }



  return (
    <div className="">
      <div className="team-container d-flex flex-column align-items-center justify-content-center text-white">
        <div className="d-flex justify-content-center align-items-center mt-5 fw-bolder">
          <h1 className="main-heading">Our People</h1>
        </div><div className="d-flex justify-content-center align-items-center w-100">
          <p className="text-center" style={{ fontSize: "1.5em", width: "75vw" }}>DTech Services is focusing its extensive engineering experience and resources on providing innovative & practical solutions to clients. Complete system management across all the technologies in Telecom, Signaling-Railways/Metros & Solar industries.
          </p>
        </div>
      </div>
      <div className='team'>
        <div className=' bg-[#E1EAFF] p-6'>
          <div className="flex justify-center items-center">
            <CardService teamData={teamData} cardLocationData={{ cardLocation, cardScrollLocation }} />
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className='flex'>
                {
                  teamData.map((eachTeam, i) => {
                    return (
                      <button key={i} onClick={() => {
                        scrollLeft(i);
                        clearInterval(autoScroll);
                      }} className={`${i === cardLocation ? 'bg-gray-700' : "bg-green-500"} hover:bg-gray-700 rounded-full border-none m-0.5 p-0.5 w-1 h-1`}></button>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
};

export default Team;
