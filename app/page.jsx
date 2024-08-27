import React from 'react'
import Link from 'next/link'
import { PiGithubLogoThin } from "react-icons/pi";


const HomePage = () => {
  console.log("this is  da home page yo")
  return (
    <div className='flex flex-col items-center justify-center  w-screen h-full'>
      <div className=" p-2 mb-2 w-1/2 justify-center items-enter text-center">
       <h1 className='text-9xl  font-black'>🏗️ </h1>
       <h1 className='font-black'>Under Contruction</h1>
       <div className='p-4 justify-center text-center items-center'>
          <p >Check my GitHub repos for prjects and code overview and some demos</p>
        </div>
       <Link href="https://github.com/TheGoran?tab=repositories" className='text-4xl font-semibold '> <PiGithubLogoThin className='inline' /> GitHub </Link>
      </div>      
    </div>
    
  )
}

export default HomePage