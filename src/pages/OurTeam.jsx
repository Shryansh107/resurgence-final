import React from "react";
import BackgroundBlogCard from "../components/teamBgCard";
import ProfileCard from "../components/profileCard";
import TeamCarousel from "../components/teamCarousel";
import { Typography } from "@material-tailwind/react";

const Events = () => {
    return (
        <>
            <BackgroundBlogCard />
            {/* <ProfileCard/> */}
            <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    Final Year
                </Typography>
                <TeamCarousel />
            </div>
            <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    PreFinal Year
                </Typography>
                <TeamCarousel />
            </div>{" "}
            <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    Second Year
                </Typography>
                <TeamCarousel />
            </div>{" "}
            <div className="border-b border-dashed py-7">
                <Typography className="custom-font2 " variant="h2">
                    First Year
                </Typography>
                <TeamCarousel />
            </div>
        </>
    );
};

export default Events;
