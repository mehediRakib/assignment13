import React, {useRef} from 'react';
import AppNav from "../components/AppNav.jsx";
import UseRefHome from "../components/useRefHome.jsx";
import UseStateHome from "../components/useStateHome.jsx";
import UseEffectHome from "../components/useEffectHome.jsx";

const Home = () => {
    let obj=useRef();
    const show=()=>{
        obj.current.innerHTML="<ul><li>a</li><li>b</li></ul>"
    }
    return (
        <div>
            <h1 ref={obj}></h1>
            <button onClick={show}>click</button>
            <AppNav/>
            <UseRefHome/>
            <UseStateHome/>
            <UseEffectHome/>
            <h1>home</h1>
        </div>
    );
};

export default Home;