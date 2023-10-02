import React from "react";
import NavbarDefault from "../components/Navbar";
import Typewriter from "typewriter-effect";
import BackgroundVideo from "./heroSection/backgroundVideo";
import { Typography } from "@material-tailwind/react";
import CornerTri from "./heroSection/CornerTri";


const HeroSection = () => {
    return (
        <>
            <div className=" grid grid-cols-1 gap-2 ">
                <div>
                    {/* <NavbarDefault /> */}
                    <section>
                        <BackgroundVideo />
                        <CornerTri/>
                        <div
                            className="relative py-10 lg:px[5%] text-white max-w-7xl mx-auto
        h-[30rem] lg:h-[42vw]
        lg:flex lg:flex-col lg:justify-center lg:items-center"
                        >
                            {/* Logo & Text Container */}
                            <div
                                className="text-center flex
            my-9 lg:mb-0
            flex-col lg:flex-col-reverse
            lg:w-2/3"
                            >
                                {/* Logo Container */}
                                <div
                                    className="w-5/6 max-w-xs
                mx-auto lg:max-w-none"
                                    style={{
                                        filter: "drop-shadow(0 0 0.75em rgba(0,0,0,.3))",
                                    }}
                                >
                                    {/* <ValorantLogo /> */}
                                    <div className="text-[2.3rem]  pt-[16rem] text-[#eaecec]  custom-font1 lg:text-[5.3rem]">
                                        Resurgence
                                    </div>
                                </div>
                            </div>
                            {/* Button Container */}
                            <div
                                className="absolute lg:relative
            bottom-[1.7rem] lg:bottom-0 
            -translate-x-1/2 lg:translate-x-0
            left-1/2 lg:left-0
            lg:mt-[2.65rem] lg:mb-[3.75rem]
            "
                            >
                                {/* <RiotButton>Play Free</RiotButton> */}
                                <Typography className=" custom-font1 text-[0.5rem] lg:text-[1.5rem]  ">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Where Gaming Comes to Life",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            pauseFor: 1000,
                                            delay: 140,
                                        }}
                                    />
                                </Typography>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full h-full"></div>
            </div>
        </>
    );
};

export default HeroSection;
