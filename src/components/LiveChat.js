import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const chatPollingMessages = useSelector((store) => store.chat.messages)


    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(()=> {
            // API Polling
            dispatch(addMessage({
                name: generateRandomName(),
                text:generateRandomText()
            }));

        }, 2000)

        return () => clearInterval(interval);

    }, [])

   

    return (
        <div>
        <div className="ml-2 p-2 bg-slate-100 w-full h-[500px] rounded-t-2xl border overflow-y-scroll flex flex-col-reverse">
            
            {chatPollingMessages && chatPollingMessages.map((chat, index) => <ChatMessage key={index} name={chat.name} text={chat.text}/>)}
            </div>
            <form className="w-full p-2 ml-2 border-black border" onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Komal",
                    text: liveMessage
                }));
                setLiveMessage("");}}>
                <input className="px-2 w-[350px]" placeholder="Say something..." type="text" onChange={(e)=> setLiveMessage(e.target.value)} value={liveMessage}></input>
                <button className="mx-2 px-2 bg-green-100">Send</button>
            </form>
        </div>
    )
};

export default LiveChat;