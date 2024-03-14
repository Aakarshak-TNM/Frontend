import React, { useState, useEffect } from 'react';
import Table from './table';
import Paginationbutton from "./paginationbutton";
import config from '../api/config';

const listings = (students) => {
    const [results, setResults] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(1);
    const [rem_count, setRemCount] = useState(0);

    useEffect(() => {
        students.setNumberOfPage(students.number_of_page);
    }, [students.number_of_page]);

    const handleonChange = (event) => {
        setResults(parseInt(event.target.value) >= 0 ? parseInt(event.target.value) : 0);
        setEnd(parseInt(event.target.value));
        let rem = (students.totalResults % parseInt(event.target.value))
        if (rem < parseInt(event.target.value && rem != 0)) {
            setRemCount(1)
        }
        students.setNumberOfPage((students.totalResults / parseInt(event.target.value)) + rem_count)
    };
    const handleonChangeSearchbar = (event) => {
        students.setSearchBar(event.target.value);
        handleSearchBar(event.target.value);
    }
    const handleSearchBar = (value) => {
        const token = localStorage.getItem('token');
        fetch(`${config.base_url}/Students/?query=${value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                students.setStudents(data.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="listings mt-32">
            <div className='flex flex-col items-center justify-center space-y-10'>
                <div className="listing-search-bar flex flex-row items-center justify-evenly rounded-lg text-2xl space-x-20">
                    <div className='page-btn bg-slate-200 rounded-lg'>
                        <label htmlFor="" className='px-4'>Results:</label>
                        <input type="number" name="results" value={results} onChange={handleonChange} min={1} id="" className="bg-slate-200 rounded-lg text-center" />
                    </div>
                    <div className="search-bar bg-slate-200 rounded-md px-2">
                        <button><i className="fa-solid fa-magnifying-glass mx-2"></i></button>
                        <input type="text" name="search-name" id="" className='bg-slate-200 rounded-md ml-2' value={students.searchBar} onChange={handleonChangeSearchbar} />
                    </div>

                </div>
                <div className="listing-table">
                    <Table students={students.students} start={start} results={results} end={end} />
                </div>
                <div className='listing-btns'>
                    <Paginationbutton number_of_page={students.number_of_page} setStart={setStart} setEnd={setEnd} end={end} start={start} results={results} />
                </div>
            </div>
        </div>
    )
}

export default listings