import React, { useContext } from 'react';
import { FriendContext, friends } from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    const { swap } = useContext(FriendContext);
    const handleClickPhotos = (newHero) => {
        swap(newHero);
        console.log("Pressed", newHero);
    };

    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((f, i) => (
                <Friend
                    key={i}
                    friendPhoto={f}
                    pos={i + 1}
                    onClick={() => handleClickPhotos(f)}
                />
            ))}
        </section>
    );
}

export default DreamTeam;
