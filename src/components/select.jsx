import React from "react";
import { Select, Option } from "@material-tailwind/react";

const select = (props) => {

    return (
        <div className="w-96 mt-4">
            <Select
                label="Select Role"
                value={props.value}
                onChange={(val) => {
                    props.setValue(val);
                    props.handleChange({ target: { name: props.name, value: val } });
                }}
                name={props.name}

            >
                <Option value="student">Student</Option>
                <Option value="teacher">Teacher</Option>
            </Select>
        </div >
    );
}

export default select