import React from 'react';
import AppNav from "../components/AppNav.jsx";
import UseRefBlog from "../components/useRefBlog.jsx";
import UseStatBlog from "../components/useStatBlog.jsx";
import UseEffectBlog from "../components/useEffectBlog.jsx";

const Blog = () => {
    return (
        <div>
            <h1>Blog page</h1>
            <AppNav/>
            <UseRefBlog/>
            <UseStatBlog/>
            <UseEffectBlog/>

        </div>
    );
};

export default Blog;