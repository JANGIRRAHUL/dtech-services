import { useEffect } from "react";
import TeamCard from "./teamCard";

function CardService({ teamData }) {
    
    return (<>
        <div>
            <div onScroll={(e)=>{console.log(e.target.scrollLeft);}} id="teamCard" className='relative max-w-2xl p-5 flex overflow-scroll hide-scroll snap-x snap-proximity card-container'>
                {
                    teamData.map((eachTeam, i) => {
                        return (
                            <TeamCard key={i} eachTeam={eachTeam} i={i} />
                        )
                    })
                }
            </div>
        </div>
    </>);
}

export default CardService;