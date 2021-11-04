import React from "react";
import { Message } from "../message/Message";
import { Navbar } from "../Navbar/Navbar";
import { HomeMain } from "./HomeMain";

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeMain />
            <Message />
        </>
    );
};

export default Home;
