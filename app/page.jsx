import React from 'react'
import Link from 'next/link'


const HomePage = () => {
  console.log("this is  da home page yo")
  return (
    <div className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-600 to-gray-900'>
       <h1 className='text-3xl'>Home Page</h1>
       <Link href="/projects">Show Projects</Link>
    </div>
    
  )
}

export default HomePage