import React from 'react';
import BaseBlog from '../BaseBlog';
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Content from './2_HomeServerRecipe.md'

const HomeServerRecipe = () => {
    return (
        <BaseBlog content={Content}/>
    );
};

export default HomeServerRecipe;