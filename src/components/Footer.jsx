import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
    return (
        <footer className="mx-auto flex flex-row flex-wrap items-center justify-center border border-dashed border-b-0 border-l-0 border-r-0 p-5 ">
            <Typography className="custom-font3 font-normal text-[0.9rem] lg:text-[1.2rem]">
                Made With ❤️ by Team Resurgence
            </Typography>
        </footer>
    );
}
