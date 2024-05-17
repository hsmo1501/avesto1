import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import './partners.css'
import PARTNERS from '../../mockData/PARTNERS'

export default function Partners() {

    const CustomButtonGroup = ({ next, previous }) => (
        <div className="custom-button-group">
          <button onClick={previous} className="prev-btn">&#10094;</button>
          <button onClick={next} className="next-btn">&#10095;</button>
        </div>
      );


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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

      const partners = PARTNERS;

    return(
        <>
            <div className='bg-gray-100 py-10  '>
                    <div class="flex flex-col max-w-[1700px] mx-auto  mb-20 relative">
                        <div className='mb-14 text-center'>
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 "><span className='border-b-2 border-b-[#008000] p-2'>Познакомтесь с нашими партнерами</span></h1>
                        </div>
                        <div>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                arrows={false}
                                customButtonGroup={<CustomButtonGroup />}
                                removeArrowOnDeviceType={['tablet', 'mobile']}
                                className=''>
                                    {partners.map(partner =>(
                                        <div className="px-4 " key={partner.id}>
                                        <div className="bg-white p-4  ">
                                        <img src={partner.img} alt="Company Logo" className="mx-auto" />                                        
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
