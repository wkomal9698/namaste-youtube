import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState, useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

   // Subscribing to the store using selector
   const searchCache = useSelector((store) => store.search)

  const [suggestionList, setSuggestionList] = useState([]);

  const [showSuggestionList, setShowSuggestionList] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Make an API call after every key press
    // but decline the API call if difference between 2 API calls is < 200ms
    const suggestionTimeout = setTimeout(() => {
     
      if(searchCache[searchQuery]) {
        console.log("From cache!!!")
        // Consume result from searchSlice
        setShowSuggestionList(true);
        setSuggestionList(searchCache[searchQuery]);
      } else {
        console.log("From API!!!")
      getSearchSuggestionsByQuery()
    }
  }, 200);

    return () => {
      clearTimeout(suggestionTimeout);
    }

  },[searchQuery]);

  const getSearchSuggestionsByQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setShowSuggestionList(true);
    setSuggestionList(json[1]);
    // Add result to searchSlice for caching
    dispatch(cacheResults({[searchQuery]: json[1]}))
  }



  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
        <div className='flex col-span-1'>
            <img onClick={() => toggleMenuHandler()} alt="menu" className='ml-2 mr-10 my-auto w-8 h-10 cursor-pointer' src='https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png'/>
            <a href='/'  className='my-auto h-6'><img alt="logo" className='ml-2 mr-10 my-auto w-26 h-5' src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png'/></a>
        </div>
        <div className='col-span-10 px-10'>
          <div>
            <input onFocus={() => setShowSuggestionList(true)} onBlur={() => {setShowSuggestionList(false); console.log(showSuggestionList);}} onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className='border border-gray-400 rounded-l-full my-auto p-2 w-1/2' type='text'/>
            <button className=' my-auto rounded-r-full p-2 border border-gray-400 bg-gray-100 px-5'>🔍</button>
          </div>
          {showSuggestionList &&
          <div className=' w-[28rem] absolute bg-white py-2 m-2 rounded-lg shadow-xl border-gray-100'>
            <ul>
              {suggestionList.map((suggestion) => <li key={suggestion} onClick={() => {setShowSuggestionList(true); console.log(showSuggestionList); setSearchQuery(suggestion);}} className='p-2 shadow-sm hover:bg-gray-100'>🔍 {suggestion}</li>)}
            </ul> 
          </div>}
        </div>
        <div className='col-span-1'>
            <button className='ml-2 my-auto'>
              <img className='ml-2 w-8 h-8' alt='user' src='https://tse2.mm.bing.net/th?id=OIP.03WKV-zEZtyHfYqP6IU92QHaHx&pid=Api&P=0&h=180'/>
            </button>
        </div>
    </div>
  )
}

export default Head