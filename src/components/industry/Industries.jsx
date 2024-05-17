import { useState, useEffect } from "react";
import INDUSTRY from '../../mockData/DATA'

export default function Industries() {

    const industries = INDUSTRY;
      
      const [selectedObject, setSelectedObject] = useState(JSON.parse(localStorage.getItem('selectedObject')) || null);
      const [activeItemId, setActiveItemId] = useState(null);
    

      const handleObjectClick = (object) => {
        setSelectedObject(object);
        setActiveItemId(object.id);
      };

      useEffect(() => {
        localStorage.setItem('selectedObject', JSON.stringify(selectedObject));
      }, [selectedObject]);

    //   useEffect(() => {
    //     localStorage.removeItem('selectedObject');
    //   }, []);

    return(

        <>
        <div className="container mx-auto lg:flex-row sm:flex flex-col items-center py-24">
           
            <div className="w-1/2 p-24 sm:mx-auto sm:p-0 ">
                <h2 className="text-3xl font-semibold my-14">Отрасли:</h2>
                <ul className="mt-4 lg:ms-7 lg:px-7 sm:mx-auto sm:p-0 text-xl ">
                {industries.map(object => (
                    <li key={object.id} onClick={() => handleObjectClick(object)}   className={`cursor-pointer py-4 px-2 hover:bg-gray-100 border-[#008000] hover:border-b-2 ${activeItemId === object.id ? 'border-b-2 font-medium' : ''}`}>
                    {object.title}
                    </li>
                ))}
                </ul>
            </div>
           
            <div className="w-2/3  ">
               
                {selectedObject ? (
                    <div class="flex  items-center justify-center px-4 pt-10 my-auto ">
                        <div class="max-w-lg font-sans overflow-hidden  bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                            <img  src={selectedObject.img} alt={selectedObject.title} class="" />
                            <div class="p-5">
                            <h1 className="text-xl font-semibold py-3">{selectedObject.descriptionTitle}</h1>
                                <p class=" font-sans text-medium mb-5 text-gray-700 text-justify">{selectedObject.description}</p>
                                <button class="w-full rounded-md bg-green-600  py-2 text-white hover:bg-green-300 hover:text-black hover:shadow-md duration-75">Подробнее</button>
                            </div>
                        </div>
                    </div>
                ) : (
                <p className="mt-4">Выберите объект из списка</p>
                )}
            </div>
        </div>
        </>
    )
};
