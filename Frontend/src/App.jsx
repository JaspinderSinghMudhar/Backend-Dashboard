import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Products from './pages/products'
import Sales from './pages/sales'
import NotFound from './pages/NotFound'
import Product from './pages/product'
import { Routes, Route } from "react-router-dom"
import DashboardLayout from './layouts/DashboardLayout'


function App() {
  return (
    <>
      <router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/products/:id" element={<Product />} />
          </ Route>
        </Routes>
      </router>
    </>
  )
}

export default App
