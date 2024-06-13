import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import {YOUTUBE_VIDEOS_API} from './../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  },[]);

  const getAllVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map(video => 
      <Link to={'/watch?v=' + video.id}><VideoCard key={video.id} video={video}/></Link>)}
      </div>
  )
}

export default VideoContainer