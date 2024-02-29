import React, { useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
const paginationbutton = (props) => {
    var buttonArray = Array.from({ length: props.number_of_page }, (_, index) => index + 1);
    const [curr, setCurr] = useState(0)
    const handleonClick = (event) => {
        let btn_value = parseInt(event.target.textContent);
        let startIndex = (btn_value - 1) * props.results;
        let endIndex = startIndex + props.results;

        props.setStart(startIndex);
        props.setEnd(endIndex);
        setCurr(btn_value);
    }
    // const prevArrow = () => {

    // }

    // const nextArrow = () => {

    // }


    return (
        <div className='flex flex-box items-center justify-center space-x-4 mt-52 mb-10'>
            <ArrowLeftIcon className='h-8 w-8 cursor-pointer' />
            {buttonArray.map((buttonNumber) => (
                <button
                    key={buttonNumber}
                    type="button"
                    className='bg-black text-white w-8 h-8 rounded-full cursor-pointer'
                    onClick={handleonClick}
                >
                    {buttonNumber}
                </button>
            ))}

            <ArrowRightIcon className='h-8 w-8 cursor-pointer' />
        </div>
    )
}

export default paginationbutton