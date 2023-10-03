import { useEffect } from "react";
import TeamCard from "./teamCard";

function CardService({ teamData }) {

    return (<>
        <div onScroll={(e) => { console.log(e.target.scrollLeft); }} className=' max-w-2xl p-4 flex overflow-scroll hide-scroll snap-x snap-proximity card-container'>
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