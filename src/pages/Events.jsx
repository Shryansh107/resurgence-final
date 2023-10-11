import React from "react";
import EventBgCard from "../components/eventBgCard";
import Home from "../components/eventTimeline";
import BackgroundParticles from "../components/BackgroundParticles";
import FooterWithLogo from "../components/footer";
import "../components/mouseScroll.css";

const OurTeam = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute z-[-1] inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm" />
                <div className="absolute z-[-2]">
                    <BackgroundParticles />
                </div>  .              
                <EventBgCard />
                <Home />
                <FooterWithLogo />
            </div>
        </>
    );
};

export default OurTeam;
