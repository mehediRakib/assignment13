import React from 'react';
import AppNav from "../components/AppNav.jsx";
import UseRefAbout from "../components/UseRefAbout.jsx";

import UseEffectAbout from "../components/useEffectAbout.jsx";
import UseStateAbout from "../components/useStateAbout.jsx";

const About = () => {
    return (
        <div>
            <AppNav/>
            <UseRefAbout/>
            <UseStateAbout/>
            <UseEffectAbout/>
            <h1>About</h1>
        </div>
    );
};

export default About;