import React from 'react'
import Sidebar from '../Component/sidebar'
import useBreadcrumbs from 'use-react-router-breadcrumbs';


function Home() {
    const breadcrumbs = useBreadcrumbs();
  return (
      <div className="flex">
        <Sidebar />
        <div className="p-2 w-8/10">
            {breadcrumbs.map(({ match, breadcrumb}, index) => (
                index === 0 ? <span key={match.pathname}> <a href={match.pathname}>Dashboard</a> / </span> :
                <span key={match.pathname}><a href={match.pathname}>{breadcrumb} / </a></span>
            ))}
        </div>
    </div>
  )
}

export default Home