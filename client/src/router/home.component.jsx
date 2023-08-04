import React, { useContext, useEffect, useState } from 'react'
import HeroSection from '../component/hero-section/hero-section.component'
import { JobListContext } from '../context/job-list.context'
import ItemCard from '../component/item-card/item-card.component'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Filter from '../component/filter/filter.component';

const job_titles = ['Librarian', 'Engineer', 'Data Scientist', 'Product Manager', 'Public Relations Specialist', "Zoologist",
    'Event Coordinator', 'Interior Designer', 'Game Developer', 'Software Tester', 'Hardware Engineer', 'Technical Support Engineer', 'Market Research Analyst', 'Research Scientist']


export default function Home() {
    const { list, setlist, filterData } = useContext(JobListContext)
    const { data, currentJobs } = filterData


    useEffect(() => {
        const getJobs = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/items")
            const dataAPI = await response.json()
            setlist(dataAPI)
        }
        getJobs()
    }, [])


    return (
        <div className='m-2'>
            <HeroSection />


            <div className='m-2 flex space-x-2 '>

                <div className='w-10/12 '>
                    <div className='flex justify-end'>
                        Total {currentJobs}
                    </div>

                    {
                        data && data.map((item) => {
                            return (<ItemCard key={item.id} document={item} />)
                        })
                    }
                </div>


                <div className='rounded-lg px-2 py-1 shadow-sm '>
                    <div className='flex justify-end align-middle items-center  '>
                        <AdjustmentsHorizontalIcon height={20} width={20} className='text-right' />
                        <h3 className='ml-2'>Filter</h3>
                    </div>

                    {
                        job_titles.map((jobtitle) => {
                            return <Filter key={Math.random()} title={jobtitle} />
                        })
                    }
                </div>
            </div>


        </div>
    )
}
