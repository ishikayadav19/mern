import React from 'react'

const TodoApp = () => {
  return (
    <div className='h-screen bg-slate-200 py-10'>
        <h1 className='text-center font-bold text-5xl'> ToDo App</h1>
        <div className='mt-10  container w-[80%] mx-auto shadow-lg border border-gray-300'>
            <div className='p-3 border-b-2 border border-gray-500'>
                <input type="text" className='px-4 py-2 rounded border border-2 w-full' placeholder='Enter your task here..' />
            </div>
            <div className='p-5'>
                <p className='font-bold text-center my-8 text-3xl text-gray-400'> No Task Found</p>
            </div>
        </div>
    </div>
  )
}

export default TodoApp