import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return(
        <div className='px-5 mx-auto shadow-lg'>
            <iframe 
            width="1400" 
            height="650" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v") }
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage;