import {Home as HomeIcom}  from 'lucide-react'
import React from 'react'

export const NavBar = () => {
  return (
    <>
    <div className="ml-70 flex items-center p-4">
      {/* <MobileSideBar /> */}
      <div className="md:hidden">
        <HomeIcom className="text-blue-600" />
      </div>
      <div className="flex w-full justify-end">
        <button>
          {/* <LogOut /> */} btn
        </button>
      </div>
    </div>
    </>
  )
}
