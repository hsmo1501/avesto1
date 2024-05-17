import FormAplication from "./FormAplication";


export default function Career() {
    return(
        <>
            <div className="career-bg bg-black">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 pt-36 mx-auto">
                        <div class="text-center ">
                            <div className="flex flex-row  justify-between    "> 
                                <div><h1 class="sm:text-4xl text-3xl font-medium title-font text-white mt-3  mb-32">Станьте частью нашей команды</h1></div>
                                <div><img src="src/assets/avestoJob/avesto-job.png" alt="ico" /></div>
                            </div>
                            <p class="text-2xl font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">Что вы можете ожидать от АВЕСТО</p>
                            <div class="flex mt-6 justify-center">
                                <div class="w-16 h-1 rounded-full bg-green-500 inline-flex mb-28"></div>
                        </div>
                    </div>

                        <div class="w-11/12 mx-auto flex  flex-wrap  justify-between ">

                            <div class="p-4  flex flex-col text-center items-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full   mb-5 flex-shrink-0">
                                <img className="" src="src/assets/avestoJob/ico1.png" alt="ico" />
                                </div>
                                <div class="flex-grow">
                                <h2 class="text-gray-900 text-base font-medium mb-3 text-green-500 font-sans">Практический  опыт</h2>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col text-center items-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
                                <img src="src/assets/avestoJob/ico2.png" alt="ico" />
                                </div>
                                <div class="flex-grow">
                                <h2 class="text-gray-900 text-base font-medium mb-3 text-green-500 font-sans">Корпоративные <br /> мероприятия</h2>
                                </div>
                            </div>
                        <div class="p-4  flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0 ">
                            <img src="src/assets/avestoJob/ico3.png" alt="ico" />
                            </div>
                            <div class="flex-grow">
                            <h2 class="text-gray-900 text-base font-medium mb-3 text-green-500 font-sans">Карьерный  рост</h2>
                            </div>
                        </div>
                        <div class="p-4  flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src="src/assets/avestoJob/ico4.png" alt="ico" />
                                </div>
                                <div class="flex-grow"> 
                                <h2 class="text-gray-900 text-base font-medium mb-3 text-green-500 font-sans">Корпоративные <br /> обучения</h2>
                            </div>

                        </div>
                        <div class="p-4  flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src="src/assets/avestoJob/ico5.png" alt="ico" />
                                </div>
                                <div class="flex-grow">
                                <h2 class="text-gray-900 text-base font-medium mb-3 text-green-500 font-sans">Помошь  экспертов </h2>
                            </div>

                        </div>
                        <div class="p-4  flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src="src/assets/avestoJob/ico6.png" alt="ico" />
                                </div>
                                <div class="flex-grow">
                                <h2 class="text-gray-900  text-base font-medium mb-3 text-green-500 font-sans">Гибкий  график </h2>
                            </div>

                        </div>
                        <div class="p-4  flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src="src/assets/avestoJob/ico7.png" alt="ico" />
                                </div>
                                <div class="flex-grow">
                                <h2 class="text-gray-900 text-base font-medium  mb-3 text-green-500 font-sans">Стабильная ЗП</h2>
                            </div>

                        </div>
                            
                        
                        </div>
                            <div class="h-1 mt-10 bg-gray-400 rounded overflow-hidden">
                                <div class="w-72 h-full bg-green-500"></div>
                            </div>
                        <div class="text-center mt-20 text-white text-xl  font-sans">Заинтересован?</div>
                        <div className="mt-5">
                            <svg className="w-6 h-6 mx-2 animate-bounce mx-auto text-green-500"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 19V6M5 12l7 7 7-7" />
                            </svg>
                            <svg className="w-6 h-6 mx-2 animate-bounce mx-auto text-green-500" style={{ animationDelay: '0.2s',  }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 19V6M5 12l7 7 7-7" />
                            </svg>
                        </div>
                        
                    </div>

                </section>





            {/* Часть вакансий */}
                <section className="flex  container mx-auto py-20">
                    {/* Левая часть страницы */}

                    <div className="w-1/2 flex flex-col justify-center items-center ">
                        <div className="self-start">
                            <h1 className="text-2xl text-white font-medium p-5">Доступные вакансии:</h1>
                        </div>
                        <div className="w-11/12 m-2 space-y-2">
                            {/* 1 */}
                            <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 py-3 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500" tabIndex="1">
                            <div className="flex cursor-pointer items-center justify-between ">
                                <span> Аналитик </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                            </div>
                            {/* 2 */}
                            <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 py-3 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500" tabIndex="1">
                            <div className="flex cursor-pointer items-center justify-between ">
                                <span> Дизайнер </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                            </div>
                            {/* 3 */}
                            <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 py-3 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500" tabIndex="1">
                            <div className="flex cursor-pointer items-center justify-between ">
                                <span> Копирайтер </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                            </div>
                            {/* 4 */}   
                            <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 py-3 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500" tabIndex="1">
                            <div className="flex cursor-pointer items-center justify-between ">
                                <span> Менеджер </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                            </div>
                            {/* 5 */}
                            <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 py-3 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500" tabIndex="1">
                            <div className="flex cursor-pointer items-center justify-between ">
                                <span> Разработчик </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                            </div>
                            {/* 6 */}
                            <div className="group flex flex-col gap-2 rounded-lg bg-black p-5 py-3 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500" tabIndex="1">
                            <div className="flex cursor-pointer items-center justify-between ">
                                <span> Материальный бухгалтер </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                            </div>

                            {/* Добавьте остальные элементы здесь с аналогичными стилями */}
                        </div>
                    </div>

                    
                    {/* Правая часть страницы */}
                    <div className="w-1/2  flex flex-col justify-center items-center">
                        <div>
                            <FormAplication/>
                        </div>
                        
                    </div>
                </section>


            </div>
        </>
    )
};
