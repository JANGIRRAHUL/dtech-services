import { useEffect } from "react";
import TeamCard from "./teamCard";

function CardService({ teamData }) {

    return (<>
        <div id="scrollTeam" style={{ width: 350 }} onClick={(e) => {
            e.target.scrollTo({ left: 0, behavior: 'smooth' })
            console.log(e.target.scrollLeft);
        }} className=' p-4 flex overflow-scroll hide-scroll snap-container'>
            {
                teamData.map((eachTeam, i) => {
                    return (
                        <TeamCard key={i} eachTeam={eachTeam} i={i} />
                    )
                })
            }
        </div>
    </>);
}

export default CardService;