import axios from 'axios';
import styled from 'styled-components';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const StyledProgressBar = styled.div`
  height: 10px;
  width: 100%;
  background-color: #ddd;
  margin-top: 10px;
`;

const StyledProgressFill = styled.div`
  height: 100%;
  background-color: #007bff;
  width: ${({ completed }) => completed}%;
`;
function VideoUploader() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    }

    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
    }
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('video', video);
        setUploading(true);
        axios.post('http://localhost:3000/api/videos', formData, {
            headers: {
                "Content-Type":'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setUploadProgress(progress);
            }
        })
            .then(response => {
                console.log(response);
                setUploading(false);
                setUploadProgress(0);
                navigate("/")
            })
            .catch(error => {
                console.log(error);
                setUploading(false);
                setUploadProgress(0);
            });
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto" encType="multipart/form-data">
            <div className="py-4">
                <label className="block font-medium text-white mb-2">Title:</label>
                <input required type="text" value={title} onChange={handleTitleChange} className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="py-4">
                <label className="block font-medium text-white mb-2">Desc:</label>
                <input required type="text" value={desc} onChange={handleDescChange} className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div className="py-4">
                <label className="block font-medium text-white mb-2">Image:</label>
                <input required type="file" accept="image/*" onChange={handleImageChange} className="appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="py-4">
                <label className="block font-medium text-white mb-2">Video:</label>
                <input required type="file" accept="video/*" onChange={handleVideoChange} className="appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            {uploading && (
                <div className="py-4">
                    <StyledProgressBar>
                        <StyledProgressFill completed={uploadProgress} />
                    </StyledProgressBar>
                </div>
            )}
            <div className="py-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Upload</button>
            </div>
        </form>
    )
}

export default VideoUploader