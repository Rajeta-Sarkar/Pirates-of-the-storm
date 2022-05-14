import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import FindTheSoul from '../pages/FindTheSoul';
import SoulBreaker from '../pages/SoulBreaker';

function Main() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/findTheSoul" element={<FindTheSoul />} />
                <Route path="/soulBreaker" element={<SoulBreaker />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
