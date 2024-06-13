import React, { useContext } from 'react';
import mainHero from '../Images/main.jpg';
import { FriendContext } from "../utils/constants.js";

const Hero = () => {
    const { currentHero, swap } = useContext(FriendContext);
    const handleImageClick = () => {
        swap(mainHero);
        console.log("pressed");
    };

    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={currentHero || mainHero} alt="hero" onClick={handleImageClick} />
        </section>
    );
}

export default Hero;
