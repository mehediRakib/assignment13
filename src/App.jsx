import React, {useRef} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Blog from "./pages/Blog.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
    return (
        <div>


            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;