import React from 'react';
import AppNav from "../components/AppNav.jsx";
import UseRefproject from "../components/useRefproject.jsx";
import UseStateProject from "../components/useStateProject.jsx";
import UseEffectProject from "../components/useEffectProject.jsx";

const Project = () => {
    return (
        <div>
            <h1>Project page</h1>
            <AppNav/>
            <UseRefproject/>
            <UseStateProject/>
            <UseEffectProject/>
        </div>
    );
};

export default Project;