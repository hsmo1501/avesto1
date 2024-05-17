import { FaMapMarkerAlt, FaPhone , FaEnvelope, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import './contacts.css'

export default function Contacts() {
    return(
        <>
            <section className='contactsBackground'>
                <div className="container mx-auto my-auto flex flex-col lg:flex-row h-screen lg:pt-0 md:pt-32 sm:pt-32">
                    {/* Контейнер для контактов */}
                    <div className="lg:w-2/5 w-full  p-4 flex items-center justify-center">
                        <div>
                        <h2 className="text-4xl font-bold mb-10 text-center uppercase text-white">Наш Офис</h2>
                        <ul className="text-left">
                            <li className="mb-5 flex items-center justify-start font-sans text-2xl text-white"><FaMapMarkerAlt className="mr-4 text-green-500" />г. Душанбе, ул. Х.Шерози</li>
                            <li className="mb-5 flex items-center justify-start font-sans text-2xl text-white"> <FaPhone className="mr-4 text-green-500" /> +992 44 600 64 65</li>
                            <li className="mb-5 flex items-center justify-start font-sans text-2xl text-white"><FaEnvelope className="mr-4 text-green-500" /> info@avesto.com</li>
                        </ul>

                        <hr className='my-20' />


                        <h3 className='text-2xl text-white mb-5'>Оставайтесь на связи:</h3>
                        <div className="flex text-left items-center justify-left ">
                            <a href="#" className="mr-4 pr-3 ">
                                <FaFacebook className="text-white hover:text-green-500 text-4xl" />
                            </a>
                            <a href="#" className="mr-4 pr-3">
                                <FaInstagram className="text-white hover:text-green-500 text-4xl" />
                            </a>
                            <a href="#">
                                <FaYoutube className="text-white hover:text-green-500 text-4xl" />
                            </a>
                            </div>
                        </div>
                    </div>
                    {/* Контейнер для карты */}
                    <div className="lg:w-3/5  hidden lg:block w-full  p-4 flex items-center justify-center ">
                        <div className="h-full w-full flex items-center justify-center">
                            <iframe
                                style={{ pointerEvents: 'none'}}
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A68e61897f889990b6eb3892384b6b1d09e4389b59153ec650ff30af6e8bebf79&amp;source=constructor"
                                width="100%"
                                height="60%"
                                frameBorder="0"
                                title="Yandex Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    )
};
