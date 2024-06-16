import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return(
        <div className='flex flex-col'>
        <div className='px-5 m-5'>
            <iframe className='rounded-2xl'
            width="1100" 
            height="550" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v") }
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
        <CommentContainer/>
        </div>
    )
}

export default WatchPage;