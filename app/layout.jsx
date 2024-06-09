// This is the main app layout
//rafce = shortcut for react arrow func component with export at the bottom.


import React from 'react'
import NavBar from '@/components/NavBar'
import '@/assets/styles/globals.css'   //the @ means{points} basically start from root of project then dwell into paths lol. 

// Defining global metadata that will apply to each page/component, if they dont have own custom metadata. 

export const metadata = {
    title: 'TheGoran',
    description: 'Developer and Digital Artist',
    keywords: 'Developer, Digital Artist, programmer, frontend, backend, fullstack, react, nextjs, dev ops, software, software solution, hire, build, solution'

}

const MainLayout = ({children}) => {    // we will pass the pages as  children(destructured) prop. 
  return (
    <html lang="en">
        <body>
          <NavBar />
            <main>{ children }</main>
        </body>
    </html>
  )
}

export default MainLayout;