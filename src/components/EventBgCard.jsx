import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const BackgroundBlogCard = () => {
    return (
        <Card
            shadow={false}
            className="mb-10 relative grid h-[40rem] w-full  items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="absolute py-14 px-6 md:px-12">
                <Typography
                    color="white"
                    className="mb-6 font-medium leading-[1.5] custom-font1 tracking-widest text-[2.5rem] lg:text-[5.5rem]"
                >
                    Events
                </Typography>
            </CardBody>
        </Card>
    );
};

export default BackgroundBlogCard;
