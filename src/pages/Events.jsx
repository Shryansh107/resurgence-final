import React from "react";
import HorizontalCard from "../components/eventComponents";
import EventBgCard from "../components/eventBgCard";
import {
  Typography
} from "@material-tailwind/react";

const OurTeam = () => {
  return <>
    <EventBgCard/>
    <div className="flex flex-col items-center justify-center border-t border-dashed pl-10">
    <div className="border-l border-dashed p-10 ">
      <HorizontalCard />
      <HorizontalCard />
      <HorizontalCard />
      <HorizontalCard />
    </div>
  </div>
  </>
};

export default OurTeam;
