import React from "react";
import { blogs } from "../../config";
import BlogSection from "./BlogSection";
import "./Blog.css"

const Blog = () => {
  const [blogData] = React.useState(blogs);
  const [visibleSection, setVisibleSection] = React.useState("");
  return (
  <>
    <h1 className="headingTitle">Blogs</h1>
    <div className="blogPage">{blogData.map((blog)=>(
        <BlogSection key={blog.id} {...blog} isVisible = {visibleSection === blog.id} setIsVisible = {() => setVisibleSection(visibleSection === blog.id ? "" : blog.id)}/>
    ))}</div>
  </>  );
};

export default Blog;
