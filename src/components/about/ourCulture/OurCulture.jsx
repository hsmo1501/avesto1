import './ourCulture.css'

export default function OurCulture() {
    
    return(
        <>
        <div className='pb-10 mb-10'>

        <div class="col-span-1 md:col-span-full lg:col-span-3  bg-color ">
                <div class="container mx-auto p-4 py-20 flex lg:flex-row  sm:flex-col sm items-center	 	">
                    <div className='basis-8/12 '>
                        <h1 className='text-4xl font-semibold tracking-wider mt-5 mb-7 ' >
                        Приверженность нашей культуры
                        </h1>
                        <p className=' text-xl leading-relaxed '>
                        Мы достигнем нашей миссии, только если будем следовать нашей культуре. Мы
                        начинаем с того, что  учимся всему – у нас настрой на рост, затем мы применяем
                        этот подход, чтобы узнать больше  о наших клиентах, быть разнообразными и
                        инклюзивными и работать вместе, как единое целое.
                        </p> 
                    </div>
                    <div className=' ml-20 sm:mx-auto sm:pt-10'>
                        <img className='threeLogo' src="src/assets/threeLogo.png" alt="" />
                    </div>
                </div>
            </div>
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto">
           
            <div class="col-span-1 md:col-span-1 lg:col-span-3 p-4 mt-10 ">
                <h2 className='text-4xl  font-medium'>
                Наши культурные атрибуты
                </h2>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1  p-4 py-5">
                <h3 className='font-medium text-2xl mb-4'>Установка на рост</h3>
                <p className='p-2 pe-7 text-xl text-justify'>
                Мы глубоко убеждены, что нам нужна
                культура, основанная на мышлении
                роста. Она начинается с убеждения в
                том, что каждый может расти и
                развиваться; что потенциал взращивается,
                а не предопределяется; и что каждый
                может изменить свое мышление.
                </p>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1  p-4 py-5">
                <h3 className='font-medium text-2xl mb-4'>Одержимость</h3>
                    <p className='p-2 pe-7 text-xl text-justify'>
                    Мы узнаем о наших партнеров и их
                    бизнесе с точки зрения новичка, а затем
                    предложим решения, соответствующие
                    их потребностям. Мы будем неутолимы
                    в нашем желании учиться у других и
                    привносить это в Авесто, продолжая
                    внедрять инновации, делая это нашей
                    традицией.
                    </p>
            </div>
            <div class="col-span-1 md:col-span-1 lg:col-span-1 p-4 py-5">
                <h3 className='font-medium text-2xl mb-4'>Разнообразная и инклюзивная</h3>
                    <p className='p-2  text-lg text-justify'>
                    Мы будем открыты для изучения наших
                    собственных предубеждений и изменения
                    нашего поведения, чтобы использовать
                    коллективную силу каждого сотрудника.
                    Мы не просто ценим различия, мы ищем
                    их, мы приглашаем их к участию. И в
                    результате наши идеи становятся лучше,
                    наши продукты - лучше, а обслуживание
                    наших партнеров еще лучше.
                    </p>
            </div>
        </div>
    
        </div>
        </>
    )
};
