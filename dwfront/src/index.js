import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from "./assets/LandingPage";

/**
 Renders react pages;
 */
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <LandingPage />
    </BrowserRouter>
)

