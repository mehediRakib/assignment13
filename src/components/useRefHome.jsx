import React, {useRef} from 'react';

const UseRefHome = () => {
    const ref=useRef();
    const show=()=>{
        ref.current.innerHTML="Hello component 1"
    }
    return (
        <div>
            <h1 ref={ref}></h1>
           <button onClick={show}>component 1</button>
        </div>
    );
};

export default UseRefHome;