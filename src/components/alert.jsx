import { Alert } from "@material-tailwind/react";

import React from 'react'

const alert = (props) => {
    return <div className="w-[24rem]">
        <Alert>{props.message}</Alert>
    </div>

}

export default alert