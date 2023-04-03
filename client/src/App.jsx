import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import VideoUploader from "./pages/VideoUploader"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
function App() {


  return (
    <div>
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uploads" element={<VideoUploader />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
        <div className="mt-10"></div>
    </div>
  )
}

export default App
