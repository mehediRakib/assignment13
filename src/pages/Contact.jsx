import React from 'react';
import AppNav from "../components/AppNav.jsx";
import UseRefContact from "../components/useRefContact.jsx";
import UseStateContact from "../components/useStateContact.jsx";
import UseEffectContact from "../components/useEffectContact.jsx";

const Contact = () => {
    return (
        <div>
            <h1>Blog page</h1>
            <AppNav/>
            <UseRefContact/>
            <UseStateContact/>
            <UseEffectContact/>
        </div>
    );
};

export default Contact;