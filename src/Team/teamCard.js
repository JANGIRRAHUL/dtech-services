function TeamCard({ eachTeam, i }) {
    
    return (<>
        <div className={`flex rounded-[20px] min-w-[260px] aspect-video  ${i == 0 ? 'card-right bg-[#e0e0ff]' : i >= 2 ? 'card-left bg-[#e0e0ff] z-0' : 'card-center bg-white z-10'} relative ease-in-out duration-500 snap-center`}>
            <div className="bg-[url('./../images/bg1.jpg')] aspect-square w-20 bg-cover  rounded-l-[20px]"></div>
            <div key={eachTeam.id}>
                <div className="p-2 pl-2">
                    <h1 className="text-base text-blue-700 mb-0.5">{eachTeam.name}</h1>
                    <p className="text-xs mb-2">{eachTeam.designation}</p>
                    <p className="text-xs font-thin">{eachTeam.description}</p>
                    <p className="text-xs font-thin mt-2">{eachTeam.message}</p>
                </div>
            </div>
        </div>
    </>);
}

export default TeamCard;