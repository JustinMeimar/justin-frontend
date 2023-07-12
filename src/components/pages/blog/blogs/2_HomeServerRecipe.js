import React from 'react';
import BaseBlog from '../BaseBlog';

const HomeServerRecipie = () => {
    const markdownContent = `
    # Heading

    Homeserver!!

    - A list item
    - Another list item
    `;

    return (
        <BaseBlog title="My Easy Home Server Recipie" content={markdownContent} />
    );
};

export default HomeServerRecipie;