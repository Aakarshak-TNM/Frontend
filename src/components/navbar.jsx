import React from 'react'
import paginationImage from "../assets/pagination.png";
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <div className='h-20 w-full bg-slate-200 text-3xl'>
      <div className="flex flex-row items-center justify-evenly">
        <div className='pagination-logo'>
          <img src={paginationImage} alt="" className='w-20' />
        </div>
        <div className='pagination-heading'>
          <h1 className='text-2xl text-black font-medium'>Discover Paginated Results</h1>
        </div>
        <div className="pagination-dark-mode-button">
          <button>
            <i className="fa-regular fa-lightbulb"></i>
          </button>
        </div>
        <div className='signup-login-button flex flex-row items-center justify-evenly space-x-4'>
          <Link to="/login"><Button color='blue'>Login</Button></Link>
          <Link to="/signup"><Button color="blue">Signup</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default navbar