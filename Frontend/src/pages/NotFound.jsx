import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h1 className='text-6xl text-center mt-7'>404 Page Not Found!</h1>
            <Link to={"/"} className='flex justify-center text-2xl button w-[200px] m-auto'>Go Back Home</Link >
    </div>
    )
}

export default NotFound