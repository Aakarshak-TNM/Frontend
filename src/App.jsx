import React, { useState, useEffect } from 'react';
import { fetchStudents } from "./api/api"
import Navbar from './components/navbar2'
import Listings from './components/listings'
import Signup from "./components/signup"
import Login from "./components/login"
import Typing from './components/typing';
import StudentData from './components/student_data';
import image from './assets/student-management.webp'
// import { jwtDecode } from 'jwt-decode';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [students, setStudents] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [number_of_page, setNumberOfPage] = useState(0);
  const [imageLoad, setImageLoad] = useState(false)
  const [loginState, setLoginState] = useState(true)

  useEffect(() => {
    fetchData();
  }, [searchBar]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoginState(true);
    }
    else {
      setLoginState(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      const studentsData = await fetchStudents(searchBar);
      setStudents(studentsData.data);
      setTotalResults(studentsData.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleonLoad = () => {
    setImageLoad(true);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar loginState={loginState} setLoginState={setLoginState} />
        <Routes>
          <Route path='/' element={
            <>
              <div className='flex flex-col justify-center items-center'>
                <div className="image-content flex flex-row justify-evenly items-center mt-14">
                  {imageLoad && <div className="component">
                    <Typing />
                  </div>}
                  <div className="image">
                    <img src={image} alt="" className='ml-10' onLoad={handleonLoad} />
                  </div>
                </div>
              </div>
            </>
          } />

          <Route
            path="/listing"
            element={
              loginState ? (
                <div>
                  <Listings
                    students={students}
                    setStudents={setStudents}
                    searchBar={searchBar}
                    setSearchBar={setSearchBar}
                    totalResults={totalResults}
                    setTotalResults={setTotalResults}
                    number_of_page={number_of_page}
                    setNumberOfPage={setNumberOfPage}
                  />
                </div>
              ) : (
                // If not logged in, render a different component or redirect to login page
                <Navigate to="/login" />
              )
            }
          />
          <Route path='/student' element={<div className='flex flex-col justify-center items-center mt-10'><StudentData /></div>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setLoginState={setLoginState} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
