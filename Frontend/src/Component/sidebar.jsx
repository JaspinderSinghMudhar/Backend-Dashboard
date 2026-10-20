import React from 'react'
import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";


function Sidebar() {
    return (
        <>
            <div className="w-2/10 border-1 border-primary/30">
                <div className="logo-box flex items-center justify-start gap-2 border-b-1 border-primary/20">
                    <img src="/logo.svg" alt="logo" className="w-[100px] object-cover animate-spin animate-spin-slow" />
                    <h5 className="site-name text-jstext-white">Doom Store</h5>
                </div>
                <div className="pages">
                    <Link to="/" className="page-item flex items-center justify-start gap-2 p-2 hover:bg-primary/20">
                        <MdSpaceDashboard />
                        <span className="text-jstext-white">Dashboard</span>
                    </Link>
                    <Link to="/products" className="page-item flex items-center justify-start gap-2 p-2 hover:bg-primary/20">
                        <MdSpaceDashboard />
                        <span className="text-jstext-white">Products</span>
                    </Link>
                    <Link to="/sales" className="page-item flex items-center justify-start gap-2 p-2 hover:bg-primary/20">
                        <MdSpaceDashboard />
                        <span className="text-jstext-white">Sales</span>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Sidebar

