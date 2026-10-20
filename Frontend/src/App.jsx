import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Routes, Route, Link } from "react-router-dom"


// function Xyz(){
//   const breadcrumbs = useBreadcrumbs();
//   return (
//       <div className="flex">
//         <Sidebar />
//         <div className="p-2 w-8/10">
//             {breadcrumbs.map(({ match, breadcrumb}, index) => (
//                 index === 0 ? <span key={match.pathname}> <a href={match.pathname}>Dashboard</a> / </span> :
//                 <span key={match.pathname}><a href={match.pathname}>{breadcrumb} / </a></span>
//             ))}
//         </div>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </router>
    </>
  )
}

export default App
