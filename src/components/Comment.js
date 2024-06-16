import React from "react";

const Comment = ({data}) => {
    const {name, text} = data;
    return (
        <div className="flex mt-2 p-2 shadow-sm bg-gray-100 rounded-md">
            <img className='ml-2 w-8 h-8' alt='user' src='https://tse2.mm.bing.net/th?id=OIP.03WKV-zEZtyHfYqP6IU92QHaHx&pid=Api&P=0&h=180'/>
            <div className="flex flex-col mt-1 ml-2">
                <p className="font-bold">{name}</p>
                <p className="pt-2">{text}</p>
            </div>
        </div>
    )
}

export default Comment;