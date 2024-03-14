import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { React, useState } from 'react'
import config from "../api/config"
import axios from 'axios';

const student_data = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollno: '',
        course: '',
        standard: '',
        standard_name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const configuration = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios.post(config.student, formData, configuration);
            // console.log('Form submitted successfully:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Add Student Data
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter Details of the Student
            </Typography>
            <form className="my-2 w-80 max-w-screen-lg sm:w-96" method="post" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Student Name
                    </Typography>
                    <Input
                        size="md"
                        placeholder="Student Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name='name'
                        onChange={handleChange}
                        type="text"
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Roll Number
                    </Typography>
                    <Input
                        size="md"
                        placeholder="Roll Number"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name='rollno'
                        onChange={handleChange}

                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Course
                    </Typography>
                    <Input
                        size="md"
                        placeholder="Course"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name='course'
                        onChange={handleChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Standard
                    </Typography>
                    <Input
                        size="md"
                        placeholder="Standard"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name='standard'
                        onChange={handleChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Standard Name
                    </Typography>
                    <Input
                        size="md"
                        placeholder="Standard Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name='standard_name'
                        onChange={handleChange}
                    />
                </div>
                <Button className="w-full mt-6" type="submit">Submit</Button>
            </form>
        </Card>
    );
}

export default student_data

