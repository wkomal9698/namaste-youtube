import React, { useState, useRef, useEffect } from "react";

const Demo2 = () => {

    const interval = useRef(null);

    const [y, setY] = useState(0);
    let x= 10;
    // useRef doesn't store like ref=0
    // ref = {current: 0} - it stores as an object
    const ref = useRef(0);

    console.log("x: ", x);
    console.log("y: ", y);
    console.log("ref: ", ref);

    useEffect(() => {
        interval.current = setInterval(() => {
            console.log("Namaste", Math.random())
        });
        return () => clearInterval(interval.current);
    },[]);

    return (
        <div className="m-4 p-2 w-96 h-96 border border-black">
            <div>
                <button className="bg-green-100 p-2 m-2" onClick={() => x=x+1}>Increase x</button>
                <span className="font-bold text-xl">
                    Let - {x}
                </span>
            </div>
            <div>
                <button className="bg-green-100 p-2 m-2" onClick={() => setY(y+1)}>Increase y</button>
                <span className="font-bold text-xl">
                    State - {y}
                </span>
            </div>
            <div>
                <button className="bg-green-100 p-2 m-2" onClick={() => ref.current = ref.current + 1}>Increase ref</button>
                <span className="font-bold text-xl">
                    Ref - {ref.current}
                </span> 
            </div>
            <button className="bg-red-900 p-4 m-4 font-bold text-white rounded-md" onClick={() => clearInterval(interval.current)}>Stop printing</button>
        </div>
    )
}

export default Demo2;