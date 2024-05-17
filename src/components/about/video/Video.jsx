export default function Video() {
    return(
        <>
             <div className="container mx-auto px-4 py-10 mb-14 flex flex-col justify-center items-center">
                <div className="self-start my-10 border-s-4 border-[#008000] ps-5 mb-16">
                    <h2 className="text-5xl font-medium mb-5 ">Все об Авесто</h2>
                    <p className="text-2xl mb-4 justify-self-start">Видеотур</p>
                </div>
                <div className=" aspect-w-16 aspect-h-9 mb-10">
                <iframe
                    className="w-[50vw] h-[57vh]"
                    src="https://www.youtube.com/embed/bRGk2_xSgrs"
                    title="Авесто Групп – мы делаем инновации нашей традицией!"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                </div>
        </div>
        </>
    )
};

