
import React from 'react'
import Sidebar from '../Component/sidebar'
import HeaderTopBar from '../Component/HeaderTopBar'
import { Outlet } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs';


function DashboardLayout() {
    const breadcrumbs = useBreadcrumbs();
  return (
      <div className="flex h-[100vh]">
        <Sidebar />
        <div className="p-2 w-8/10">
            <HeaderTopBar/>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout
