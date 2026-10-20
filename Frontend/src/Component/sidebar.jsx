import React from 'react'

function Sidebar() {
    return (
        <>
            <div className="w-2/10 border-1 border-primary/30">
                <div className="logo-box flex items-center justify-start gap-2 border-b-1 border-primary/20">
                    <img src="/logo.svg" alt="logo" className="w-[100px] object-cover animate-spin animate-spin-slow" />
                    <h5 className="site-name text-jstext-white">Doom Store</h5>
                </div>
            </div>
        </>
    )
}

export default Sidebar

