import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import image from "../assets/images/logo.png"


const DialogDefault = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                onClick={handleOpen}
                className="bg-[rgba(0,0,0,0.75)] text-[1.2rem]"
            >
                ☰
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                size="xxl"
                className="bg-[rgba(0,0,0,0.9)]"
            >
                <DialogHeader>
                    <Button
                        variant="text"
                        color="white"
                        onClick={handleOpen}
                        className="mx-10 text-[1.2rem] bg-[rgba(0,0,0,0.9)]  "
                    >
                        <span>X</span>
                    </Button>
                </DialogHeader>
                <div className="flex justify-evenly" >
                    <div className="img">
                        <img
                            className="h-96 w-96 rounded-full object-cover object-center"
                            src={image}
                            alt="nature image"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <Typography
                            as="li"
                            variant="xl"
                            color="white"
                            className="p-1 font-normal"
                        >
                            <a
                                href="/home"
                                className="flex items-center custom-font3 text-[2rem]"
                            >
                                Home
                            </a>
                        </Typography>{" "}
                        <Typography
                            as="li"
                            variant="xl"
                            color="white"
                            className="p-1 font-normal"
                        >
                            <a
                                href="/events"
                                className="flex items-center custom-font3 text-[2rem]"
                            >
                                Events
                            </a>
                        </Typography>{" "}
                        <Typography
                            as="li"
                            variant="xl"
                            color="white"
                            className="p-1 font-normal"
                        >
                            <a
                                href="/team"
                                className="flex items-center custom-font3 text-[2rem]"
                            >
                                Team Members
                            </a>
                        </Typography>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default DialogDefault;
