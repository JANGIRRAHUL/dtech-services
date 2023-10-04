function TeamCard({ eachTeam, i, isReachingEnd }) {
    return (<>
        <div className={` ${i === (eachTeam.id - 1) && isReachingEnd ? 'card-center opacity-1' : ' '
            } mx-5 flex rounded-[20px] min-w-[360px] aspect-video bg-white relative ease-in-out duration-500 snap-center`}>
            <div style={{backgroundImage: `url("${eachTeam.imgUrl}")`}} className={` aspect-square w-36 bg-cover rounded-l-[20px]`}></div>
            <div className="">
                <div className="p-4">
                    <h1 className="text-xl text-blue-700 mb-0.5">{eachTeam.name}</h1>
                    <p className="text-sm mb-2">{eachTeam.designation}</p>
                    <p className="text-xs font-thin">{eachTeam.description}</p>
                    <p className="text-xs font-thin mt-2">{eachTeam.message}</p>
                </div>
            </div>
        </div>
    </>);
}

export default TeamCard;