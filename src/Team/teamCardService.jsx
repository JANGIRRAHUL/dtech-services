import TeamCard from "./teamCard";
import { useState } from "react";

function CardService({ teamData, cardLocationData }) {
    let { cardLocation, cardScrollLocation } = cardLocationData;
    let el = document.getElementById('scrollTeam');
    let [isReachingEnd, IsReachingEnd] = useState(false);
    if (el != null) {
        el.onscroll = () => {
            IsReachingEnd(cardScrollLocation === (Math.round(el.scrollLeft) < cardScrollLocation ? Math.round(el.scrollLeft) + 1 : Math.round(el.scrollLeft)));
        };
    }

    return (<>
        <div id="scrollTeam" style={{ width: 450 }} onClick={(e) => {
            console.log(e.target.scrollLeft);
        }} className=' p-4 pb-4 flex overflow-scroll hide-scroll snap-container'>
            {
                teamData.map((eachTeam, i) => {
                    return (
                        <TeamCard key={eachTeam.id} eachTeam={eachTeam} i={cardLocation} isReachingEnd={isReachingEnd} />
                    )
                })
            }
        </div>
    </>);
}

export default CardService;