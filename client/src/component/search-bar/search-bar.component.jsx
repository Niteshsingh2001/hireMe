import React, { useContext, useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/Button.component'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { JobListContext } from '../../context/job-list.context';

export default function SearchBar() {
    const [inputVal, setInputVal] = useState("")

    const { list, setlist } = useContext(JobListContext)




    const handleInputChange = (event) => {
        setInputVal(event.target.value)

        // const searchResults = async () => {
        //     const response = await fetch(`http://127.0.0.1:8000/api/search/${inputVal}`)
        //     const dataAPI = await response.json()
        //     setlist(dataAPI)
        // }
        // searchResults()
    }

    const handleBtnClick = (event) => {
        const searchResults = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/search/${inputVal}`)
            const dataAPI = await response.json()
            setlist(dataAPI)
        }
        searchResults()

    }

    return (
        <div className='flex w-full'>
            <FormInput className="w-full" required type="search" placeholder="Search Jobs Here ..." onChange={handleInputChange} value={inputVal} />
            <Button className='h-12 mr-1 shadow-md' onClick={handleBtnClick} ><MagnifyingGlassIcon height={30} width={30} /></Button>
        </div>
    )
}
