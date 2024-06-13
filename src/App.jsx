import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";
import { FriendContext } from "./utils/constants.js";
import mainHero from "./utils/constants.js"

const App = () => {
    const [currentHero, setCurrentHero] = useState('');

    const swap = (newHero) => {
        setCurrentHero(newHero)
    }


    return (
        <div>
            <FriendContext.Provider value={{ currentHero, swap , mainHero, setCurrentHero }}>
                <Header />
                <Switcher />
                <Footer />
            </FriendContext.Provider>
        </div>
    );
}

export default App;
