import React, { useEffect, useState, useContext } from 'react'
import { JobListContext } from '../../context/job-list.context'


export default function Filter({ title }) {

    const { list, setFilterData, } = useContext(JobListContext)


    return (
        <div className='flex p-1 m'>
            <input type='checkbox' data-value={title}/>
            <p className='ml-1'>{title}</p>
        </div>
    )
}
