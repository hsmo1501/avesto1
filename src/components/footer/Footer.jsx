import avesto_logo from '../../assets/avesto_logo.png';
import {Link} from 'react-router-dom';

export default function Footer() {
    return(
        <>
             <footer className="bg-green-500 py-6">
      <div className="container mx-auto flex flex-col md:flex-col  justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0 pb-5">
          <Link to='/' className="mr-4"><img src={avesto_logo} alt="logo" /></Link>
          <div className="font-sans text-white">© 2024 ООО «Авесто Групп»</div>
        </div>
        <div className="flex flex-wrap md:flex-no-wrap justify-between">
          <a href="#" className="text-white hover:text-blue-600 block mb-2 md:mb-0  font-sans border-e-2 border-gray-200 pr-10">Политика компании</a>
          <a href="#" className="text-white hover:text-blue-600 block mb-2 md:mb-0  font-sans border-e-2 border-gray-200 pr-10">Безопасность продуктов</a>
          <a href="#" className="text-white hover:text-blue-600 block mb-2 md:mb-0  font-sans border-e-2 border-gray-200 pr-10">Налоговый кодекс РТ</a>
          <a href="#" className="text-white hover:text-blue-600 block mb-2 md:mb-0  font-sans border-e-2 border-gray-200 pr-10">Законы РТ «Об инвестициях» </a>
          <a href="#" className="text-white hover:text-blue-600 block mb-2 md:mb-0  font-sans border-e-2 border-gray-200 pr-10">Таможенный кодекс РТ</a>
          <a href="#" className="text-white hover:text-blue-600 block mb-2 md:mb-0 font-sans">Закон РТ «О концессиях»</a>
        </div>
      </div>
    </footer>
        </>
    )
};
