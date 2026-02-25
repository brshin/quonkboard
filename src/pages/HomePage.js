import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";

import ProximaMainDisplay from './ProximaMainDisplay';
import SphinxMainDisplay from './SphinxMainDisplay';

const HomePage = ({ type }) => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('./ProximaMainDisplay')}> Proxima </button>
            <button onClick={() => navigate('./SphinxMainDisplay')}> Sphinx </button>
            <Routes>
                <Route path='test' element={<ProximaMainDisplay />} />
                <Route path='test' element={<SphinxMainDisplay />} />
            </Routes>
        </div>
    );
}

export default HomePage;