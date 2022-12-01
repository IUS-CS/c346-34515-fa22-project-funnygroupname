import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from "./assets/LandingPage";

/**
 * Creation of our root object
 */
const container = document.getElementById('root');
const root = createRoot(container);


/**
 * Renders react pages
 */
root.render(
    <BrowserRouter>
        <LandingPage />
    </BrowserRouter>
)

