import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import squid from "../assets/images/SQUID GAMES8.webp";

const CardDefault = () => {
    return (
        <div className="mt-3 w-[30rem] h-[15rem] flex bg-[#ffffff] p-[1.2rem] border-white rounded transition-transform transform duration-300 hover:translate-y-[-10px]">
            <div className="relative h-[18rem] bottom-10 transition-transform transform duration-300 hover:translate-y-[-10px]">
                <img
                    className="shadow-2xl  rounded-lg object-cover object-center"
                    src={squid}
                    alt="nature image"
                />
            </div>
            <div className="flex flex-col ml-[1.5rem] justify-evenly">
                <Typography
                    variant="h5"
                    className="mb-2 w-[16rem] font-poppins text-black"
                >
                    Squid Games
                </Typography>
                <Typography
                    color="black"
                    className="font-poppins text-[.9rem] text-[#6d7178]"
                >
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                </Typography>
            </div>
        </div>
    );
};

export default CardDefault;
