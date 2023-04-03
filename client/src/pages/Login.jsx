import {useState} from "react";
import {useDispatch} from "react-redux";
import {userLogin} from "../app/users.js";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage,setErrorMessage]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/api/auth/signin", {
            email, password
        }).then(response => {
            const token = response.data.data.token
            dispatch(userLogin(token))
            navigate("/")
        }).catch(error => {
            console.log(error.response.data)
            setErrorMessage(error.response.data.message)
        })
    }

    return (
        <div className="flex justify-center mt-20">
            <div className="w-1/2">
                <form>

                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" name="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="johndoe@gmail.com" required/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" name="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="*****" required/>
                    </div>
                    <br/>

                    <button type="submit"
                            onClick={loginHandler}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
                <br/>
                {errorMessage && (
                    <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert">
                        <span className="font-medium">{errorMessage}</span>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Login