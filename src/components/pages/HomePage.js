import React, { useState } from 'react';
import './css/HomePage.css' 

import InfoModal from '../InfoModal.js';

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
            <div class="jumbotron jumbotron-fluid"> 
                <div class="container">
                    <h1 class="display-4">Justin's Website</h1>
                    <p class="lead">Welcome to my webiste  &#129303; </p>
                    <button onClick={handleOpenModal}>Open Info</button>
                    <InfoModal isOpen={isModalOpen} onRequestClose={handleCloseModal} content={modalContent}/>
                </div>
            </div>
        </div> 
    );
}
    
export default HomePage;