import './main.css'
import { Carousel } from 'flowbite-react'

export default function Main() {

       

    return(
        <>
            <div className="h-screen bg-gray-50">


                <Carousel className='' leftControl="" rightControl="">
                    {/* <div className='bg-gray-100 h-screen'> */}
                    <div className='container mx-auto  my-26 md:my-8 py-12 flex flex-col content-center  md:flex-row-reverse items-center  justify-between'>
                        <div className='mx-auto'>
                            <img className=' img' src="src/assets/avesto_ico.png" alt="" />
                            {/* класс для вращения логотипа  className='img  animate-spin-y ' */}

                        </div>
                        <div className='md:w-1/2 mx-auto'>
                            <h1 className='text-4xl font-semibold mb-4 text-green-500  md:w-3/4 leading-snug'>
                            Мы делаем инновации<br/>
                            нашей традицией!
                            </h1>
                            <p className='text-2xl mt-5'>
                                Авесто Групп – это <br />
                                многопрофильная группа компаний, <br />
                                которые осуществляют свою <br />
                                деятельность в различных отраслях.
                            </p>
                            <button className='mt-7 px-8 py-5 border-solid border-2 border-green-500 hover:text-xl hover:border-dashed'>
                                Подробнее 
                            </button>
                        </div>
                    </div>
                    {/* </div> */}

                    <div>
                    <div class="relative w-full h-screen bg-cover bg-center bg-img1" >
                        <div class="absolute  inset-0 bg-black opacity-50"></div> 
                        <div class="absolute container mx-auto  m-auto inset-0 flex flex-col justify-center items-end ml text-white">
                            <p className='text-4xl  '>
                                Авесто Групп – это <br />
                                многопрофильная группа компаний, <br />
                                которые осуществляют свою <br />
                                деятельность в различных отраслях.
                            </p>
                            <button className='mt-7 px-8 py-5 border-solid border-2 border-green-500 hover:text-xl hover:border-dashed w-1/5 ' >
                                Подробнее 
                            </button>
                        </div>
                    </div>
                    </div>


                    <div>
                    <div class="relative w-full h-screen bg-cover bg-center bg-img2" >
                        <div class="absolute inset-0 bg-black opacity-50"></div> 
                        <div class="absolute container mx-auto m-auto inset-0 flex flex-col justify-center items-left text-white">
                            <p className='text-4xl mt-5'>
                                Авесто Групп – это <br />
                                многопрофильная группа компаний, <br />
                                которые осуществляют свою <br />
                                деятельность в различных отраслях.
                            </p>
                            <button className='mt-7 px-8 py-5 border-solid border-2 border-green-500 hover:text-xl hover:border-dashed w-1/5'>
                                Подробнее 
                            </button>
                        </div>
                    </div>
                    </div>


                    <div >
                    <div class="relative w-full h-screen bg-cover bg-center bg-img3" >
                        <div class="absolute inset-0 bg-black opacity-50"></div> 
                        <div class="absolute container mx-auto m-auto inset-0 flex flex-col justify-center items-left text-white">
                            <p className='text-4xl '>
                                Авесто Групп – это <br />
                                многопрофильная группа компаний, <br />
                                которые осуществляют свою <br />
                                деятельность в различных отраслях.
                            </p>
                            <button className='mt-7 px-8 py-5 border-solid border-2 border-green-500 hover:text-xl hover:border-dashed w-1/5'>
                                Подробнее 
                            </button>
                        </div>
                    </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
};

