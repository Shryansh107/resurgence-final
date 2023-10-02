import React from "react";
import NavbarDefault from "../components/Navbar";
import Typewriter from "typewriter-effect";
import Text from "./Herotext";
import { Typography } from "@material-tailwind/react";

const HeroSection = () => {
    return (
        <>
            <div className=" grid grid-cols-1 gap-2 ">
                <div>
                    {/* <img
                        src={bg}
                        alt="background"
                        className="hidden lg:block absolute z-[-1]  w-full h-full object-cover"
                    /> */}
                    <NavbarDefault />
                    <Typography className="absolute top-[250px] left-[400px] custom-font1 z-[9] text-[3rem] lg:text-[1.5rem]  ">
                        <Typewriter
                            options={{
                                strings: ["Where Gaming Comes to Life"],
                                autoStart: true,
                                loop: true,
                                pauseFor: 1000,
                                delay: 140,
                            }}
                        />
                    </Typography>
                    <Text />
                    <Typography className="text-[5.3rem] italic fontstyle1 z-[10] custom-font4 lg:text-[10rem]">
                Resurgence
            </Typography>
                    <div className="text-[5.3rem] pt-[16rem] text-[#eaecec]  custom-font1 lg:text-[14rem]">
                        Resurgence
                    </div>

                    {/* <Socials /> */}
                </div>
                <div className="w-full h-full"></div>
            </div>
        </>
    );
};

export default HeroSection;
