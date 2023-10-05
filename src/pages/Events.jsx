import React from "react";
import HorizontalCard from "../components/eventComponents";
import EventBgCard from "../components/eventBgCard";
import Home from "../components/eventTimeline";
import BackgroundParticles from "../components/BackgroundParticles";


const OurTeam = () => {
    return (
        <>  
            <div className="absolute z-[-1]">
                <BackgroundParticles />
            </div>
            <EventBgCard />
            <Home/>        
        </>
    );
};

export default OurTeam;
