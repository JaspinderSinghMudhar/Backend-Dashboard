import React from 'react'
import Sidebar from '../Component/sidebar'
import HeaderTopBar from '../Component/HeaderTopBar'
import useBreadcrumbs from 'use-react-router-breadcrumbs';


function Home() {
    const breadcrumbs = useBreadcrumbs();
  return (
      <div className="flex">
        <Sidebar />
        <div className="p-2 w-8/10">
            <HeaderTopBar/>
        </div>
    </div>
  )
}

export default Home