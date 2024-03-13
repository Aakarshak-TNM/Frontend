import {
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import React from 'react'

const checkbox = (props) => {
    const handleStudentChange = (e) => {
        props.setStudentValue(e.target.value)
     }

     const handleTeacherChange = (e) => {
        props.setTeacherValue(e.target.value)
     }
    return (
        <Card className="w-full max-w-[24rem]">
            <List className="flex-row">
                <ListItem className="p-0">
                    <label
                        htmlFor="horizontal-list-react"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                        <ListItemPrefix className="mr-3">
                            <Checkbox
                                id="horizontal-list-react"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                                value={props.studentValue}
                                onChange={handleStudentChange}
                            />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                            Student
                        </Typography>
                    </label>
                </ListItem>
                <ListItem className="p-0">
                    <label
                        htmlFor="horizontal-list-vue"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                        <ListItemPrefix className="mr-3">
                            <Checkbox
                                id="horizontal-list-vue"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                                value={props.teacherValue}
                                onChange={handleTeacherChange}
                            />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                            Teacher
                        </Typography>
                    </label>
                </ListItem>
            </List>
        </Card>
    );
}

export default checkbox

