import { useParams, Link } from 'react-router-dom';
import PROJECTS from '../../../mockData/PROJECTS';

export default function ClickedProject() {


    const {projectId} = useParams();

    const project = PROJECTS.find(proj => proj.id.toString() === projectId);

    if (!project) {
        return <div className='container mx-auto  pt-32'>Проект не найден</div>;
      }

    return(
        <>
            <section class="text-gray-600 body-font pt-32">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={project.img}/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-sans">{project.title}</h1>
                    <p class="mb-8 leading-relaxed font-sans">{project.content}</p>
                    <div class="flex justify-center">
                        <Link to="/projects">Вернуться к списку проектов</Link>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
};
