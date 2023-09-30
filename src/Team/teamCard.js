function TeamCard({ eachTeam, i }) {
    console.log(i);
    return (<>
        <div className={`p-6 rounded-[20px] w-[360px] aspect-video  ${i == 0 ? 'card-right bg-[#e0e0ff]' : i == 2 ? 'card-left bg-[#e0e0ff] z-0' : 'card-center -mx-20 bg-white z-10'} relative ease-in-out duration-500`}>
            <div key={eachTeam.id}>
                <div className="flex mb-4">
                    <div className="bg-[url('https://res.cloudinary.com/dg4htpr73/image/upload/v1696007173/wallpaperflare.com_wallpaper_7_1_lfcfst.jpg')] h-28 aspect-square bg-cover  rounded-[20px]"></div>
                    <div className="pl-4 pt-2">
                        <h1 className="text-xl text-blue-700">{eachTeam.name}</h1>
                        <p className="text-sm">{eachTeam.designation}</p>
                        <p className="text-sm font-thin">{eachTeam.description}</p>
                    </div>
                </div>
                <p className="text-sm font-mono font-thin">{eachTeam.message}</p>
            </div>
        </div>
    </>);
}

export default TeamCard;