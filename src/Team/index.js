import './index.css';
import TeamCard from './teamCard';

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




  return (
    <div className="team">
      <img
        src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
        alt="contact"
      />
      <h1>Team</h1>

      <div className="flex p-2">
        {teamData.map((eachTeam) => {
          return (
            <TeamCard eachTeam={eachTeam} />
          )
        })}
      </div>
    </div>)
};

export default Team;
