import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormAplication() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        phone: '',
        resume: null
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleFileChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          resume: e.target.files[0]
        }));
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Ваша заявка принята, и в скором времени с вами свяжется наш сотрудник!');
        // Здесь можно добавить логику для отправки формы на сервер
      };



    return(
        <>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl mb-6 text-center text-white">Отправка заявки</h2>
                    <div className="mb-4">
                    <label className="block text-gray-300">Имя</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-300">Фамилия</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-300">Должность</label>
                    <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-green-500 bg-transparent rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    >
                        <option value="" className='bg-gray-700 text-white'>Выберите должность</option>
                        <option value="developer" className="bg-gray-700 text-white">Разработчик</option>
                        <option value="designer" className="bg-gray-700 text-white">Дизайнер</option>
                        <option value="manager" className="bg-gray-700 text-white">Менеджер</option>
                        <option value="analyst" className="bg-gray-700 text-white">Аналитик</option>
                    </select>
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-300">Номер телефона</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    </div>
                    <div className="mb-4 flex items-center">
                    <label className="block text-gray-300 mr-4">CV</label>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        className="mt-1 p-2 border border-green-500 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    </div>
                    <div className="flex justify-between items-center">
                    <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Отправить</button>
                    </div>
                </form>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </div>
        </>
    )
};
