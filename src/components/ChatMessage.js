import React from "react";

const ChatMessage = ({name, text}) => {
    return (
        <div className="flex shadow-sm p-2">
            {/* <img className="rounded-full w-10 h-10" alt="Profile Picture" src="https://yt3.ggpht.com/G80o7rUU4BRQektJO3ELMFdqgQfR-_fgUlGmwt1YwQPpXi4MxSX5MFGv6AABNw28bUBHjs5m=s88-c-k-c0x00ffffff-no-rj"/> */}
            <img className='ml-2 w-8 h-8' alt='user' src='https://tse2.mm.bing.net/th?id=OIP.03WKV-zEZtyHfYqP6IU92QHaHx&pid=Api&P=0&h=180'/>
            <div className=" items-center">
            <span className="pl-2 font-bold">{name}</span>
            <span className="pl-2">{text}</span>
            </div></div>
    )
};

export default ChatMessage;