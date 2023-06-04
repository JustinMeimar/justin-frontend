import React, { useState } from 'react';
import './css/HomePage.css' 

import InfoModal from '../InfoModal.js';
import AboutSitePage from "./about/AboutSitePage.js";

function HomePage() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const modalContent = `
        # Your Info
        This is some information about our service.
    `;

    return(
        <div className="home_page">
            <AboutSitePage />
        </div> 
    );
}
    
export default HomePage;