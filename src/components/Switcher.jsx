import React, {useContext} from 'react';
import Home from "./Home.jsx";
import {FriendContext, navItems} from "../utils/constants.js";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";
import {Route, Routes} from "react-router-dom";

const Switcher = () => {

    // switch (currentPage) {
    //     case navItems[0].route:
    //         return <Home/>
    //     case navItems[1].route:
    //         return <AboutMe/>
    //     case navItems[2].route:
    //         return <StarWars/>
    //     case navItems[3].route:
    //         return <Contacts/>
    // }
    const {currentHero,swap} = useContext(FriendContext);
    return (
      <Routes>
            <Route path={'/'} element={<Home currentHero={currentHero} swap={swap}/>}/>
            <Route path={navItems[0].route} element={<Home/>}/>
            <Route path={navItems[1].route} element={<AboutMe/>}/>
            <Route path={navItems[2].route} element={<StarWars/>}/>
            <Route path={navItems[3].route} element={<Contacts/>}/>

        </Routes>
    )
}

export default Switcher;