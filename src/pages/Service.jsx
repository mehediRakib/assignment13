import React, {useRef} from 'react';
import AppNav from "../components/AppNav.jsx";
import UseRefService from "../components/useRefService.jsx";
import UseStateService from "../components/useStateService.jsx";
import UseEffectService from "../components/useEffectService.jsx";

const Service = () => {
    let change=useRef();

    return (
        <div>


            <AppNav/>
            <UseRefService/>
            <UseStateService/>
            <UseEffectService/>
            <h1>service</h1>
        </div>
    );
};

export default Service;