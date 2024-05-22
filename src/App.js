import React from 'react';
import Header from './components/Header';
import MainVideo from './components/MainVideo';
import { RightNav } from './components/RightNav';

import './App.css';

function App() {
    return (
        <div>
            <Header />
            <MainVideo />
            <RightNav />
        </div>
    );
}

export default App;