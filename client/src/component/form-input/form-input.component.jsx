import React from 'react'

export default function FormInput({ label, className, ...otherProps }) {
    return (
        <div className='flex flex-col w-full '>
            {label && <label className='mb-1 px-2 font-normal text-gray-700 text-lg'>{label}</label>}
            <input className='h-12 mb-1 mx-1 px-2 rounded-lg outline-primary focus:bg-sky-50 shadow-md' {...otherProps} />
        </div>
    )
}
