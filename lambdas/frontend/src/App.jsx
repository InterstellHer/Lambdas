import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import LambdaNav from './components/navigation/LambdaNav';
import Legacy from './components/pages/Legacy';

export default function App() {
    return (
        <Router>
            <div>
                <LambdaNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/legacy" element={<Legacy />} />
                </Routes>
            </div>
        </Router>
    );
}
