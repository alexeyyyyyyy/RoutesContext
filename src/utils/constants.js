import friend1 from "../Images/friend1.jpg";
import friend2 from "../Images/friend2.jpg";
import friend3 from "../Images/friend3.jpg";
import friend4 from "../Images/friend4.jpg";
import friend5 from "../Images/friend5.jpg";
import friend6 from "../Images/friend6.jpg";
import friend7 from "../Images/friend7.jpg";
import friend8 from "../Images/friend8.jpg";
import friend9 from "../Images/friend9.jpg";
import mainHero from "../Images/main.jpg";
import {createContext} from "react";

export default mainHero;
export const friends = [friend9,friend8,friend7,friend6,friend5,friend4,friend3,friend2
                        ,friend1];

export const BASE_URL = "https://sw-info-api.herokuapp.com";

export const period_month = 30 * 24 * 60 * 60 * 1000;

export const navItems = [{
    name:"Home",
    route:"home"
}, {
    name: 'About Me',
    route: 'aboutMe'
}, {
    name: "Star Wars",
    route: "starWars"
}, {
    name: "Contact",
    route: "contact"
}];

export const FriendContext = createContext({});
