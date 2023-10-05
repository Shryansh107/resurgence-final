import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import Overview from "../components/Overview";
// import HeroSection from "../components/Herosection.jsx";
import GameOn from "../components/GameOn";
import BackgroundParticles from "../components/BackgroundParticles";
import ContactUs from "../components/Contactus";
import { SimpleFooter } from "../components/Footer";
import Service from "../components/service.jsx";
import config from "../App.config";
import "../components/WhatDoWeDo.css";
import "./Home.scss";
import cyber from "../assets/images/cyberpunk-warrior-man-futuristic-soldier-3d-render-illustration_691560-6135.png";

const Home = () => {
    return (
        <>
            <div className="absolute z-[-1]">
                <BackgroundParticles />
            </div>
            <div>
                <div className="">
                    <div
                        className="flex w-screen h-screen justify-evenly items-center 
                flex-col lg:flex-row"
                    >
                        <div>
                            {/* <div className="home_main_text custom-font ">
                                <span className="flicker text-[5rem] lg:text-[11rem]">
                                    Res
                                </span>
                                <span className="text-[5rem] lg:text-[11rem]">
                                    urg{" "}
                                </span>
                                <span className="fast-flicker text-[5rem] lg:text-[11rem]">
                                    ence
                                </span>
                            </div> */}
                            <div className="home_main_text custom-font flex flex-col mt-[5rem] gap-[6rem] md:flex-row md:gap-0 ">
                                <div className="flicker text-[10rem] lg:text-[11rem]">
                                    Resur
                                </div>
                                <div className="text-[11rem] lg:text-[11rem]">
                                    gen{" "}
                                </div>
                                <div className="fast-flicker text-[11rem] lg:text-[11rem]">
                                    ce
                                </div>
                            </div>
                            <div
                                className="home_main_info glitch custom-font text-[2.4rem] lg:text-[4.5rem] mt-14"
                                data-text="For vibe, for games."
                            >
                                For vibe, for games.
                            </div>
                        </div>

                        <div className="">
                            <img
                                className="h-96 w-full hidden lg:block object-cover object-center"
                                src={cyber}
                                alt="nature image"
                            />
                        </div>
                    </div>
                </div>

                <Overview />
                <div className="grid grid-cols-1 lg:grid-cols-4 ml-16 lg:m-4 lg:p-[40px]">
                    {config.whatDoWeDo.map((service, index) => {
                        return (
                            <Service
                                key={service.title}
                                index={index}
                                {...service}
                            />
                        );
                    })}
                </div>
                <HorizontalLine />
                <GameOn />
                <HorizontalLine />
                <ContactUs />
                {/* <HorizontalLine /> */}
                <SimpleFooter />
            </div>
        </>
    );
};

export default Home;
