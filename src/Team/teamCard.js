function TeamCard({ eachTeam, i }) {
    console.log(i);
    return (<>
        <div className={`flex rounded-[20px] w-[360px] aspect-video  ${i == 0 ? 'card-right bg-[#e0e0ff]' : i == 2 ? 'card-left bg-[#e0e0ff] z-0' : 'card-center -mx-20 bg-white z-10'} relative ease-in-out duration-500`}>
            <div className="bg-[url('https://res.cloudinary.com/dg4htpr73/image/upload/v1696007173/wallpaperflare.com_wallpaper_7_1_lfcfst.jpg')] aspect-square w-36 bg-cover  rounded-l-[20px]"></div>
            <div key={eachTeam.id}>
                <div className="p-4 pt-2">
                    <h1 className="text-xl text-blue-700">{eachTeam.name}</h1>
                    <p className="text-sm">{eachTeam.designation}</p>
                    <p className="text-sm font-thin">{eachTeam.description}</p>
                    <p className="text-sm font-mono font-thin mt-2">{eachTeam.message}</p>
                    <button className="btn btn-primary scale-50">Contact</button>
                </div>
            </div>
        </div>
    </>);
}

export default TeamCard;