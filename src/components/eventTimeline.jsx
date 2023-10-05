import React from "react";
import { Chrono } from "react-chrono";
import HorizontalCard from "../components/eventComponents";
import { events } from "../config";

const Home = () => {
    const items = events;

    return (
        <div className="w-screen">
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                theme={{
                    primary: "blue",
                    secondary: "white",
                    cardBgColor: "white",
                    titleColor: "white",
                    titleColorActive: "blue",
                }}
            />
        </div>
    );
};

export default Home;
