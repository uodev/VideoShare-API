import {useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()
    const logoutHandle = () => {
        navigate("/")

        location.reload()
    }
    const user = useSelector(state => state.users.isLoggedIn)
    console.log(user)
    return (
            <nav className="flex justify-between items-center bg-gray-800 text-white px-5 py-3">
                <div>
                    <Link to="/" className="text-white font-bold text-lg">VideoShare</Link>
                </div>
                <ul className="flex space-x-5">
                    <li>
                        <Link to="/"
                              className="mr-2 duration-300  focus:outline-none text-white  flex justify-center items-center  focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5">Videolar</Link>
                    </li>
                    {user && (
                        <li>
                            <Link to="/uploads"
                                  className="mr-2 duration-300  focus:outline-none text-white  flex justify-center items-center  focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5">Video
                                Yükle</Link>
                        </li>
                    )}
                    {!user && (
                        <li>
                            <Link to="/login"
                                  className={`mr-2 duration-300  focus:outline-none text-white bg-green-700 flex justify-center items-center hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900`}>Giriş
                                Yap</Link>
                        </li>
                    )}
                    {!user && (
                        <li>
                            <Link to="/register"
                                  className={`mr-2 duration-300  focus:outline-none text-white bg-red-700 flex justify-center items-center hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>Kayıt
                                Ol</Link>
                        </li>
                    )}
                    {user && (
                        <li>
                            <button onClick={logoutHandle}
                                  className={`mr-2 duration-300  focus:outline-none text-white bg-red-700 flex justify-center items-center hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>Çıkış Yap</button>
                        </li>
                    )}


                </ul>
            </nav>
    )
}

export default Navbar