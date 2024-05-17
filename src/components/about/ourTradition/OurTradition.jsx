import './ourTradition.css'

export default function OurTradition() {
    return(

        <>
            <div className='background-color py-16 pb-40'>

                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  mx-auto">
                    
                    <div class="col-span-1 md:col-span-1 lg:col-span-3 p-4 mt-10 text-center">
                        <h2 className='text-4xl font-semibold '>
                            НАШИ ТРАДИЦИИ

                        </h2>
                        <p className='mt-10 text-xl '>
                        Узнайте больше о нашей компании, чтобы узнать, как мы поддерживаем <br />
                        командный дух сотрудников и клиетов на каждом этапе их работы.
                        </p>
                    </div>
                    
                    <div class="col-span-1 md:col-span-1 lg:col-span-1 bg-white   px-8 py-10 mt-10 rounded-xl hover:shadow-xl hover:scale-105">
                        <h3 className='font-medium text-2xl mb-4 text-center'>НАШИ ЦЕНОСТИ</h3>
                        <p className='text-xl text-justify '>
                        Главным нашим ресурсом    являются
                        <span className='border-b-2 border-[#008000] '> люди-творческие, целеустремленные, </span>
                        саморазвивающиеся, имеющие командный
                        дух, профессионализм, думающие в
                        духе «выиграл-выиграл», честные и
                        приверженные моральным принципам
                        компании.
                        </p>
                    </div>
                    <div class="col-span-1 md:col-span-1 lg:col-span-1 bg-white  px-8 py-10 mt-10 rounded-xl hover:shadow-xl hover:scale-105">
                        <h3 className='font-medium text-2xl mb-4 text-center '>НАШЕ ВИДЕНИЕ</h3>
                            <p className='p-2  text-xl text-justify'>
                            <span className='border-b-2 border-[#008000] '>Быть лучшей компанией</span> в тех отраслях,
                            в которых мы работаем, за счет
                            внедрения инноваций.Предоставить
                            возможности карьерного роста для
                            сотдрудников компании.
                            </p>
                    </div>
                    <div class="col-span-1 md:col-span-1 lg:col-span-1 bg-white  px-8 py-10 mt-10 rounded-xl hover:shadow-xl hover:scale-105 ">
                        <h3 className='font-medium text-2xl mb-4  text-center'>НАША МИССИЯ</h3>
                            <p className='p-2  text-xl text-justify'>
                            Используя наши интеллектуальные
                            ресурсы, мы стараемся внедрить
                            инновации в каждую сферу, в которой
                            реализируем наши проекты.
                            </p>
                    </div>
                </div>
            </div>
        </>
    )
};
