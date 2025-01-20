import React from 'react'
import Components from "../components"
import { Outlet } from 'react-router-dom'

const { Navbar } = Components

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout