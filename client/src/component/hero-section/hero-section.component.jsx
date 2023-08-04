import React, { useContext } from 'react'
import SearchBar from '../search-bar/search-bar.component'
import { JobListContext } from '../../context/job-list.context'

export default function HeroSection() {

    const { list} = useContext(JobListContext)
    const { totalJobs } = list

    return (
        <div className='flex flex-col space-y-3 w-full p-2 rounded-md bg-black h-72 items-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
            <h1 className='text-9xl py-3 font-default  '>Get <span className='text-primary'>Hired</span></h1>
            <SearchBar />
            <h2>Total  <span className='text-primary'> {totalJobs - 15}+ </span> Job Listed</h2>
        </div>
    )
}
