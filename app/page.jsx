import React from 'react'
import Link from 'next/link'
import { PiGithubLogoThin } from "react-icons/pi";


const HomePage = () => {
  console.log("this is  da home page yo")
  return (
    <div className='flex flex-col items-center justify-center md:w-screen sm:w-screen'>
       <h1 className='text-9xl font-black'>🏗️Under Construction</h1>
       <br />
       <p>Check my GitHub repos for prjects and code overview and some demos.</p>
       <br />
       <Link href="https://github.com/TheGoran?tab=repositories" className='text-6xl font-semibold '> <PiGithubLogoThin className='inline' /> GitHub </Link>
       
    </div>
    
  )
}

export default HomePage