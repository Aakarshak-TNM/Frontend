import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import config from "../api/config";
import axios from 'axios';
import Alert from "./alert"
import { useNavigate } from 'react-router-dom';

const signup = () => {
    const navigateTo = useNavigate();
    const [alertFlag, setalertFlag] = useState(false)
    const [alert, setAlert] = useState("")
    const [checked, setChecked] = useState(false);
    const handleonChange = (event) => {
        setChecked(event.target.checked);
    }
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(config.signup, formData);
            // console.log(response.data);
            navigateTo('/');
        } catch (error) {
            // console.error('Error submitting form:', error);
            setalertFlag(true);
            setAlert("User Already Exists, Sign Instead!");
        }
    };
    return (
        <div className={`flex flex-col items-center justify-center ${alertFlag ? "mt-24" : "mt-[9.5rem]"}`}>
            <div className="w-[26rem] px-4">
                {alertFlag && <Alert message={alert} />}
            </div>
            <Card color="transparent" shadow={false} >
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method="post" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3" >
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Your Name here"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="username" value={formData.username} onChange={handleChange}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3" >
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="email" value={formData.email} onChange={handleChange}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="password" value={formData.password} onChange={handleChange}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                        checked={checked}
                        onChange={handleonChange}
                    />
                    <Button className="mt-6" fullWidth disabled={!checked} type="submit">
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-gray-900">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}
export default signup
