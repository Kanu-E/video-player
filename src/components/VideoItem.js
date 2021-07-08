import React from 'react'

const VideoItem =({video})=>{
return(
    <div>
        {video.snippet.title}
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
    </div>
)

}

export default VideoItem