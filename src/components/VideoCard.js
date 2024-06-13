import React from 'react'

const VideoCard = ({video}) => {
  console.log("In card:: ", video);
  const {snippet, statistics} = video;
  const {channelTitle, title, thumbnails, publishedAt} = snippet;
  const {viewCount} = statistics;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} height={thumbnails.medium.height} width={thumbnails.medium.width} alt=''/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
        {/* <li>{publishedAt}</li> */}
      </ul>
    </div>
  )
}

export default VideoCard