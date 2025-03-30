import React from 'react'

const Card = ({title, description, primaryText, secondaryText}) => {
    return (
        <div className='p-8 shadow-lg mt-10 rounded-lg '>
            <h3 className='text-2xl font-bold '>{title}</h3>
            <p>{description}</p>
            <div>
            <button className='bg-indigo-700 text-white rounded p-3 hover:bg-indigo-300'> {primaryText}</button>
            <button className='border border-indigo-500 text-indigo-500 rounded p-3 hover:bg-indigo-300'> {secondaryText}</button>
            </div> 
        </div>
    )
}

export default Card