import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const typing = () => {
    return (
        <TypeAnimation
            sequence={[

                `A Student Management System (SMS) is an essential tool for educational institutions In this system, the frontend is developed using React, a popular JavaScript library for building user interfaces React provides a dynamic and efficient way to create interactive UI components for the SMS
                Through React, users can seamlessly navigate through different sections of the application, such as student profiles, attendance records, and grades
                On the backend side, the SMS is powered by Django, a high-level Python web framework
                Django offers a robust set of features for building scalable and secure web applications, making it an ideal choice for managing student data
                With Django, administrators can easily define models for students, courses, and teachers, and perform CRUD operations to manage this data efficiently
                // Conclusion
                By combining React for the frontend and Django for the backend, the Student Management System provides a modern and reliable solution for educational institutions to manage student information effectively`,
                4000
            ]}

            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' , fontWeight:'bolder'}}
            repeat={Infinity}
            className='w-[30rem]'
        />
    );
}

export default typing
