import Video from "../components/Video.jsx";
import {useState, useEffect} from "react";
import axios from "axios";

function Home() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/videos").then(response => {
            setVideos(response.data.videos)
        })
    }, [])
    console.log(videos)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {videos.map(video => (

                <Video key={video._id} description={video.desc} title={video.title}
                       videoUrl={video.videoUrl}/>
            ))}

        </div>
    )
}

export default Home