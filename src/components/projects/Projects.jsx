import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import './projects.css'
import PROJECTS from '../../mockData/PROJECTS'
import { Link } from 'react-router-dom';

export default function Projects() {

    const CustomButtonGroup = ({ next, previous }) => (
        <div className="custom-button-group">
          <button onClick={previous} className="prev-btn">&#10094;</button>
          <button onClick={next} className="next-btn">&#10095;</button>
        </div>
      );


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

      const projects = PROJECTS;

        return(
            <>
                <div className='bg-gray-100 py-16  '>
                    <div class="flex flex-col max-w-[1700px] mx-auto  relative  border-b-2 border-b-gray-200 p-2 pb-28">
                      <div className='flex flex-row justify-between'>
                        <div className='flex-start mb-14'>
                          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 "><span className='border-b-2 border-b-[#008000] p-2'>Проекты</span></h1>
                        </div>
                        <div>
                          <Link to={'projects'} className='p-4 text-lg flex items-center hover:border-b-2 border-green-500'>
                            Все проекты 
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                          </Link>
                        </div>
                      </div>
                       
                        <div>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                arrows={false}
                                customButtonGroup={<CustomButtonGroup />}
                                removeArrowOnDeviceType={['tablet', 'mobile']}
                                className=''>
                                    {projects.map(project =>(
                                        <div className="px-4 " key={project.id}>
                                        <div className="bg-white p-4  ">
                                        <img src={project.img} alt="Company Logo" className="mx-auto" />
                                        <p className="text-center mt-4">{project.subtitle}</p>
                                        </div>
                                    </div>

                                    ))}
                                </Carousel>
                            </div> 
                    </div>
                </div>
            </>
        )
};
