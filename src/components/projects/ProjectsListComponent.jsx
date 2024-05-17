import PROJECTS from '../../mockData/PROJECTS'
import PARTNERS from '../../mockData/PARTNERS'
import { Link } from 'react-router-dom';


export default function ProjectsListComponent() {

    const projects = PROJECTS;
    const partners = PARTNERS;

    return(
        <>

{/* Проекты */}
            <section class="text-gray-600 body-font pt-36">
                <div class="container px-5  mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Наши проекты</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-xl">Авесто Групп – это многопрофильная группа компаний, которые осуществляют свою деятельность в различных отраслях.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    {projects.map(project =>(
                            <div key={project.id} class="lg:w-1/4 sm:w-1/2 p-10 mb-4">
                                <Link to={`${project.id}`} class="flex relative">
                                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={project.img}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-green-100 opacity-0 hover:opacity-90">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">ПРОЕКТ</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                                        <p class="leading-relaxed">{project.subtitle}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


{/* Партнеры */}
            <section class="text-gray-600 body-font ">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Наши партнёры</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-xl">Авесто Групп – это многопрофильная группа компаний, которые осуществляют свою деятельность в различных отраслях.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    {partners.map(partner =>(
                            <div key={partner.id} class="lg:w-1/4 sm:w-1/2 p-10 mb-4">
                                <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={partner.img}/>
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-green-100 opacity-0 hover:opacity-95">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">МЕЖДУНАРОДНЫЙ ПАРТНЕР</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{partner.title}</h1>
                                    <p class="leading-relaxed">{partner.subtitle}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};
