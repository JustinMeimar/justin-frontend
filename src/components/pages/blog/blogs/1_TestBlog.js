import React from 'react';
import BaseBlog from '../BaseBlog';

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import Content from './1_TestBlog.md'

const TestBlog = () => {
    return (
        <BaseBlog content={Content}/>
    );
};

export default TestBlog;