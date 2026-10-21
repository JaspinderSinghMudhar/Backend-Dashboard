
import Sidebar from '../Component/sidebar'
import HeaderTopBar from '../Component/HeaderTopBar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
      <div className="flex h-[100vh] scrollbar-none">
        <Sidebar />
        <div className="w-8/10 scrollbar-thin overflow-auto">
            <HeaderTopBar/>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout
