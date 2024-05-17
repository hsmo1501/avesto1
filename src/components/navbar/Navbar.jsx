import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './navbar.css';
import avesto_logo_green from '../../assets/avesto_logo_green.png';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

    // Стейт боковой панели
  const [nav, setNav] = useState(false);

  // Функция отображения боковой панели
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Компания',  path:'/'},
    { id: 2, text: 'Отрасли ',  path:'industries' },
    { id: 3, text: 'Новости ',  path:'news' },
    { id: 4, text: 'Проекты',  path:'projects' },
    { id: 5, text: 'Инвесторам',  path:'for-investors' },
    { id: 6, text: 'Карьера',  path:'career' },
    { id: 6, text: 'Контакты',  path:'contacts' },
  ];

    return(
        <>
        <div className="navbar">
    <div className='container flex justify-between items-center h-24  mx-auto px-4 text-black   '>
     
      <Link to="/" className='w-full text-3xl  '><img src={avesto_logo_green} alt="logo" /></Link>

      {/* Навигация для больших экранов */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-8  rounded-xl m-2 cursor-pointer duration-300  font-medium  hover:text-green-500 '
          >
            <NavLink to={item.path}> {item.text} </NavLink>
            
          </li>
        ))}
      </ul>



      {/* Навигация для моб. устройств */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-green-700 m-4'><img src={avesto_logo_green} alt="logo" /></h1>

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  rounded-xl  hover:text-xl  duration-300  cursor-pointer text-lg'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
    </div>
        </>
    )
};
