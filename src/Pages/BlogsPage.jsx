// src/Pages/Blog.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import BlogContent from './BlogContent';

const BlogsPage = () => {
    return (
        <div className="container mx-auto mt-24">
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold text-left mb-6  border-l-4 border-yellow-300 pl-2 sm:text-3xl md:text-6xl lg:text-7xl">
                    Our Blogs
                </h1>
            </div>
            <Routes>
                {/* Blog List Route */}
                <Route index element={<Blog />} />

                {/* Blog Content Route (specific blog post based on 'id') */}
                <Route path=":id" element={<BlogContent />} />
            </Routes>
        </div>
    );
};

export default BlogsPage;
