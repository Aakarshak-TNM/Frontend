import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

import { React, useState } from 'react'
import axios from 'axios';
import config from "../api/config";
import { useNavigate } from 'react-router-dom';

const login = () => {
    const navigateTo = useNavigate();
    const [alertFlag, setalertFlag] = useState(false)
    const [checked, setChecked] = useState(false);
    const handleonChange = (event) => {
        setChecked(event.target.checked);
    }
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(config.login, formData);
            console.log(response.data);
            navigateTo('/');
        } catch (error) {
            console.error('Error submitting form:', error);
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
                </form>
            </Card>
        </div>
    );
}
export default login
