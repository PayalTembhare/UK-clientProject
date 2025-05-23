import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function ErrorSection7() {
    // Client-side path handling
    const path = typeof window !== 'undefined' ? window.location.pathname : "/";

    const nav = useNavigate()
    const handleBackHome = () => {
          nav('/'); 
    };

    return (
        <div className="h-screen mx-auto grid place-items-center text-center px-8 ">
            <div>
                <FlagIcon className="w-20 h-20 mx-auto" />
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mt-10 !text-3xl !leading-snug md:!text-4xl"
                >
                    Error 404 <br /> Invalid Path
                </Typography>
                <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                    Oops! The page <strong>{path}</strong> does not exist or has been moved.
                    Please check the URL for typos or go back to the homepage.
                </Typography>
                <Button color="gray" className="w-full px-4 md:w-[8rem]" onClick={handleBackHome}>
                    Back Home
                </Button>
            </div>
        </div>
    );
}

export default ErrorSection7;
