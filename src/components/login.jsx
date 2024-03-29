import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { React, useState } from 'react'
import axios from 'axios';
import config from "../api/config";
import { useNavigate } from 'react-router-dom';

const login = (props) => {
    const navigateTo = useNavigate();
    const [alertFlag, setalertFlag] = useState(false)
    const [checked, setChecked] = useState(false);
    const handleonChange = (event) => {
        setChecked(event.target.checked);
    }
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOtp = async () => {
        try {
            const response = await axios.post('https://d2u3hkwjh7rtvm.cloudfront.net', formData);
            return response.data;
        } catch (error) {
            console.error('Error verifying OTP:', error);
            throw error; // Rethrow the error to handle it in the caller function
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const otpResponse = await handleOtp();
            props.setOtp(otpResponse.body);
            // Proceed with login only if OTP verification is successful
            const response = await axios.post(config.login, formData);
            const token = response.data.token.access;
            localStorage.setItem('token', token);
            props.setLoginState(true);
            navigateTo('/otp');
        } catch (error) {
            console.error('Error submitting form:', error);
            props.setLoginState(false);
            // setalertFlag(true);
            // setAlert("User Already Exists, Sign Instead!");
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center ${alertFlag ? "mt-24" : "mt-[9.5rem]"}`}>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Log in
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method="post" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email or Username
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Email or Username"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="username" value={formData.username} onChange={handleChange}
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Email"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            name="email" value={formData.email} onChange={handleChange}
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
                        log in
                    </Button>
                    <Typography
                        variant="small"
                        color="gray"
                        className="text-center my-2"
                    >
                        Don't have an Account?
                        <Link to='/signup' className="underline text-black mx-2">
                            SignUp Here
                        </Link>
                    </Typography>

                </form>
            </Card>
        </div>
    );
}
export default login
