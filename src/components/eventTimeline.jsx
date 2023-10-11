import { Chrono } from "react-chrono";
import { events } from "../config";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
                    mediaHeight="400"
                    theme={{
                        primary: "blue",
                        secondary: "white",
                        cardBgColor: "white",
                        titleColor: "white",
                        titleColorActive: "blue",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Home;
