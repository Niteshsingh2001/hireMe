import React from 'react'


export const BUTTON_TYPE_CLASS = {
    primary: "text-white bg-primary hover:bg-sky-700",
    inverted: "border border-primary hover:bg-gray-100   text-primary"

}

export default function Button({ children, buttonType = BUTTON_TYPE_CLASS.primary, className, ...otherProps }) {
    return (
        <button className={`px-4 rounded-lg ${buttonType} ${className}`} {...otherProps} >
            {children}
        </button>
    )
}
