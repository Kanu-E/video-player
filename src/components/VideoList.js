import React from 'react'
import VideoItem from './VideoItem'
const VideoList =({videos, onVideoSelect}) =>{
const videoItems = videos.map((video, )=>{
    return <VideoItem key = {video.snippet.id}video={video} onVideoSelect={onVideoSelect}/>
})
    
    return(
        <div className="ui relaxed divided list">
        {videoItems}
        </div> 
        )
}

export default VideoList