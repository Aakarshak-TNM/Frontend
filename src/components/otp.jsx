import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const otp = (props) => {
    const [inputotp, handleOtp] = useState("")
    let check="";
    const navigateTo = useNavigate();
    const handleChange = (e) => {
        handleOtp(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i=0;i<props.otp.length;i++){
            if(props.otp[i]!=='"'){
                check+=props.otp[i]
            }
        }
        if (inputotp === check) {
            console.log('OTP validation successful');
            navigateTo('/')
        } else {
            console.log('Invalid OTP');
        }
    };

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                OTP
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your otp from email to validate
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method="post" onClick={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        One time password
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="One time Password"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={handleChange}
                    /></div>
                <Button className="mt-6" fullWidth type="submit">
                    Validate
                </Button>
            </form>
        </Card>
    );
}

export default otp

