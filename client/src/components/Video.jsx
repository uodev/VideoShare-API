import ReactPlayer from 'react-player'
function Video({videoUrl, title, description}) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-5">
            <div style={{width: '640px', height: '360px'}}>

                <ReactPlayer controls url={videoUrl}  />
            </div>
            <div className="px-4 py-3">
                <h3 className="text-base font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
                <div className="flex items-center mt-2">
                    <img className="w-6 h-6 rounded-full mr-2" src="https://i.pravatar.cc/32" alt="Avatar"/>
                    <span className="text-xs text-gray-500">John Doe</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-xs text-gray-500">10K views</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-xs text-gray-500">2 days ago</span>
                </div>
            </div>
        </div>
    )
}

export default Video