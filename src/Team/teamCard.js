function TeamCard({ eachTeam}) {
    return (<>
        <div className="p-2">
            <div key={eachTeam.id} className="team-card">
                <img src={eachTeam.imgUrl} alt="team" />
                <h1 className="text-red-500">{eachTeam.name}</h1>
                <p>{eachTeam.designation}</p>
                <p>{eachTeam.description}</p>
                <p>{eachTeam.message}</p>
            </div>
        </div>
    </>);
}

export default TeamCard;