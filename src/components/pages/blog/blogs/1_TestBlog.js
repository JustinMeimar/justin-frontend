import React from 'react';
import BaseBlog from '../BaseBlog';

const TestBlog = () => {
    const markdownContent = `
    # Heading

    Some text.

    - A list item
    - Another list item
    `;

    return (
        <BaseBlog title="My Blog Post" content={markdownContent} />
    );
};

export default TestBlog;