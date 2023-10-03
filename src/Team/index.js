import { useEffect } from 'react';
import './index.css';
import { useState } from 'react';
import CardService from './teamCardService';

let teamData = [
  {
    id: 1,
    name: 'Kiran',
    designation: 'CEO',
    description: 'He is the CEO of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ceo-img.png',
    message: 'Our CEO, Kiran, saw a huge opportunity in the market and started our company in 2013',
  },
  {
    id: 2,
    name: 'Rajesh',
    designation: 'COO',
    description: 'He is the COO of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/coo-img.png',
    message: 'Rajesh, our COO, has more than 10 years of experience in the industry',

  },
  {
    id: 3,
    name: 'Ramesh',
    designation: 'CTO',
    description: 'He is the CTO of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/cto-img.png',
    message: 'Ramesh, our CTO, is a tech guru and has 20 years of experience in the field',
  },
  {
    id: 4,
    name: 'Radhika',
    designation: 'HR',
    description: 'She is the HR of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/hr-img.png',
    message: 'Radhika, our HR, has 10 years of experience in the industry',

  },
  {
    id: 5,
    name: 'Sonia',
    designation: 'Manager',
    description: 'She is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Sonia, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 6,
    name: 'Rahul',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Rahul, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 7,
    name: 'Rohit',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Rohit, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 8,
    name: 'Rani',
    designation: 'Manager',
    description: 'She is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Rani, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 9,
    name: 'Raj',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Raj, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 10,
    name: 'Rajeshwari',
    designation: 'Manager',
    description: 'She is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Rajeshwari, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 11,
    name: 'Rajendra',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Rajendra, our Manager, has 15 years of experience in the industry',
  },
  {
    id: 12,
    name: 'Rajkumar',
    designation: 'Manager',
    description: 'He is the Manager of our company',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/manager-img.png',
    message: 'Rajkumar, our Manager, has 15 years of experience in the industry',
  }
]




const Team = () => {
  const [teamDataArr, setTeamDataArr] = useState([])
  const [count, setCount] = useState(0)
  document.title = "Team"

  let limit = 3;
  useEffect(() => {
    setTeamDataArr(teamData.slice(count, limit + count));

    console.log(window.scrollX);
  }, [window.screenY]);


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
        <div className=' bg-[#E1EAFF]'>
          <div className="flex justify-center items-center">
            <CardService teamData={teamData} />
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div>
                {
                  teamData.map((eachTeam, i) => {
                    return (
                      <button className='rounded-full border-none m-2 p-2 w-10'>{i}</button>
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
