import { Chrono } from "react-chrono";
import { events } from "../config";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CardDefault from "./EventBgCard";

const Home = () => {
    const items = events;
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);
    return (
        <div className="w-screen">
            <motion.div
                initial={{ y: "150px", opacity: 0 }}
                transition={{
                    type: "spring",
                    delay: 0.3,
                    duration: 0.85,
                    ease: "easeOut",
                }}
                ref={ref}
                animate={controls}
                variants={{ show: { x: 0, y: 0, opacity: 1 } }}
            >
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    hideControls="false"
                    cardHeight="650"
                    cardWidth="500"
                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.8rem',
                        cardTitle: '1rem',


                        title: '1.5rem',
                    }}
                    mediaHeight="400"
                    theme={{
                        primary: "blue",
                        secondary: "white",
                        cardBgColor: "white",
                        titleColor: "white",
                        titleColorActive: "blue",
                    }}
                />
                {/* <Chrono mode="VERTICAL_ALTERNATING" hideControls="false">
                <CardDefault/>
                </Chrono> */}
                
            </motion.div>
        </div>
    );
};

export default Home;
