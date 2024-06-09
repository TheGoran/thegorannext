import React from 'react'
import Link from 'next/link'


const HomePage = () => {
  console.log("this is  da home page yo")
  return (
    <div>
       <h1 className='text-3xl'>Home Page</h1>
       <Link href="/projects">Show Projects</Link>
    </div>
    
  )
}

export default HomePage