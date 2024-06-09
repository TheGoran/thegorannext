//Client component so we can use react hooks, event listeners and other browser related stuff. 
'use client';
import React from 'react'
import Link from 'next/link'
// useParams is for using parameters from the url bar.
//For example this component is dynamic and it can have any name as param
// useSearchParams is  for using url queries such as /name=something



const SingleProjPg = () => {
  

  return (
    <div>
    <h1 className="text-3xl">Single Project Page</h1><br />
    
      
    </div>
  )
}

export default SingleProjPg