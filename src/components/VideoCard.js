import React from 'react'

const VideoCard = ({video}) => {
  const {snippet, statistics} = video;
  const {channelTitle, title, thumbnails} = snippet;
  const {viewCount} = statistics;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} height={thumbnails.medium.height} width={thumbnails.medium.width} alt=''/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({video}) => {
  return (
    <div className='border border-slate-400 p-2 m-2'>
      <VideoCard video={video}/>
      <p className='font-bold text-slate-400 text-xs'>Ad - {video.snippet.channelTitle}</p>
    </div>
  )
}

export default VideoCard