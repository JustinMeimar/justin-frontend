import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./css/BaseBlog.css";

const BaseBlog = ({ title, content }) => (
  <div className="base_blog_container">
    <div className="base_blog_title">
        <h1>{title}</h1>
    </div>
    <div className="base_blog_content">
        <ReactMarkdown children={content} />
    </div>
  </div>
);

export default BaseBlog;