import React, { useState, useEffect } from 'react';
import { fetchStudents } from "./api/api"
import Navbar from './components/navbar'
import Listings from './components/listings'
import Signup from "./components/signup"
import Login from "./components/login"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [students, setStudents] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [number_of_page, setNumberOfPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [searchBar]);


  const fetchData = async () => {
    try {
      const studentsData = await fetchStudents(searchBar);
      setStudents(studentsData.data);
      setTotalResults(studentsData.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div><Navbar />
              <Listings
                students={students}
                setStudents={setStudents}
                searchBar={searchBar}
                setSearchBar={setSearchBar}
                totalResults={totalResults}
                setTotalResults={setTotalResults}
                number_of_page={number_of_page}
                setNumberOfPage={setNumberOfPage}
              /></div>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
