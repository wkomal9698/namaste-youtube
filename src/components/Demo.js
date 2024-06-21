import React, { useState, useMemo } from "react";
import {findNthPrime} from '../utils/helper';

const Demo = () => {

    // If the below code was a heavy operation, then everytime the state changes, the heavy operation will happen.
    // To avoid the heavy operation repetition for every state change, we memoize the code 
    console.log("Rendering...")
    const [text, setText] = useState(0);

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const prime = useMemo(() => findNthPrime(text), [text]);

    
    return(
        <div className={"m-4 p-2 w-96 h-96 border border-black" + (isDarkTheme && " bg-gray-900 text-white")}>
            <div>
                <button className="m-2 p-2 bg-green-200" onClick={() => setIsDarkTheme(!isDarkTheme)}>Change Theme</button>
            </div>
            <div>
                <input className="m-2 p-2 border border-black w-72" type="number" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div>
                <h1>nth Prime:: {prime}</h1>
            </div>
        </div>
    )
}

export default Demo;