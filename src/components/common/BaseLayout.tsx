import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'

import NotificationToaster from './NotificationToaster'

const BaseLayout: React.FC<any> = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setOpenSideBar(false)
  }, [location.pathname])

  return (
    <div className='relative flex flex-col flex-1 min-h-screen max-h-screen overflow-hidden w-screen h-screen bg-[#927265] text-light'>
      <Navbar
        openSidebar={() => {
          setOpenSideBar((prev) => !prev)
        }}
      />
      <main className='flex flex-1 min-h-screen no-scrollbar overflow-y-auto justify-between'>
        <Sidebar
          openSideBar={openSideBar}
          onCloseSidebar={() => {
            setOpenSideBar(false)
          }}
        />
        <div className='flex mb-10 flex-1 min-h-screen overflow-y-auto  h-full object-left-20  bg-no-repeat w-full lg:w-3/4 xl:w-5/6  bg-cover absolute right-0 top-0 -z-0 mt-20 md:mt-0 items-center justify-center pb-20'>
          {openSideBar && (
            <div
              className='fixed w-full h-full inset-0 bg-gray-900 opacity-75 z-20'
              onClick={() => {
                setOpenSideBar(false)
              }}
            ></div>
          )}
          <Outlet />
          <div className='min-h-32'></div>
          <NotificationToaster />
        </div>
      </main>
    </div>
  )
}

export default BaseLayout
