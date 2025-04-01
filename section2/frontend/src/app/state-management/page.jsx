'use client';
import React, { useState } from 'react'

const StateManagement = () => {
    // let count = 0;
    // to make any state there is a function known as useState(hook)
    // useState => usestate snippet
    // tab (0)
    // useState function h jo initial value leta h or 2 value return krta h => phele value readonly value => for updating
    // const [count(readonly), setCount(updating)] = useState(0)(initial);
    
    const [count, setCount] = useState(0);

  return (
    <div className='container mx-auto'> 
        <h1 className='text-center text-5xl font-bold my-6'>Event Handling</h1>
        <button className='border p-2' onClick={ () => {alert('button was clicked');}}> click Event</button>
        <input  className="border p-2" type="text" onChange={(e) => {
            console.log(e.target.value); 
            // console side ka mtlb server side 
        }} />
        <button className='border p-2 block' onClick={()=> {
            setCount(count+1);
            console.log(count);
            // update on console not on DOM
            // to show the updates on DOM we have make states in react this makes it more faster
        }}>Counter</button>
        <h2 className='text-3xl mt-4'> {count}</h2>
    </div>
  )
}

export default StateManagement