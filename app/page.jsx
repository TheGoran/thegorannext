import React from 'react'
import Link from 'next/link'
import { PiGithubLogoThin } from "react-icons/pi";
import { GiCargoCrane } from "react-icons/gi";



const HomePage = () => {
  console.log("this is  da home page yo")
  return (
    <div className='flex flex-col items-center justify-center  w-screen h-full'>
      <div className=" p-4 mb-4  justify-center items-enter text-center">
      <GiCargoCrane size={192}  className='inline'></GiCargoCrane>
       <h1 className='font-black'>Under Construction</h1>
       <div className='p-2 justify-center text-center items-center'>
          <p >Check my GitHub repos for prjects and code overview and some demos</p>
        </div>
       <Link href="https://github.com/TheGoran?tab=repositories" className='text-4xl font-semibold '> <PiGithubLogoThin size={92} color='orange' className='inline' /> </Link>
      </div>      
    </div>
    
  )
}

export default HomePage