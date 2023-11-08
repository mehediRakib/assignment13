import React, {useState} from 'react';

const UseStateService = () => {
    const [number,setNumber]=useState(0);
    return (
        <div>
            <h1>Number:{number}</h1>
            <button onClick={()=>{
                setNumber(number+1);
            }}>component 2</button>
        </div>
    );
};

export default UseStateService;