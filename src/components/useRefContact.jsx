import React, {useRef} from 'react';

const UseRefContact = () => {
    const ref=useRef();
    const show=()=>{ref.current.innerHTML="component 1";}
    return (
        <div>
            <h1 ref={ref}></h1>
            <button onClick={show}>conponent 1</button>
        </div>
    );
};

export default UseRefContact;