import React from 'react'

type Props = {
  openSidebar: () => void
}

const Navbar = (props: Props) => {
  return (
    <>
      <div className='flex h-20 w-full items-center bg-[#6b4035] lg:hidden py-4 z-50'>
        <a className='flex items-center' href='/'>
          <img src='/images/defaultAvatar.png' alt='default avatar' className='ml-2 h-12' />
          <span className='ml-2 text-lg font-black uppercase'>Ponix</span>
        </a>
        <button
          onClick={props.openSidebar}
          className='ml-auto mr-4 grid h-11 w-11 place-content-center rounded-xl border-2 border-[#7c5248] cursor-pointer'
        >
          <img className='h-4 w-4' src='/icons/menu.svg' alt='' />
        </button>
      </div>
    </>
  )
}

export default Navbar
