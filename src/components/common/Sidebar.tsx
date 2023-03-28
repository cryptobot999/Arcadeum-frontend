import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import CustomSVG from '../../helpers/CustomSVG'
import { Menu, Transition } from '@headlessui/react'
type Props = {
  onCloseSidebar: () => void
  openSideBar: boolean
}

const GamesMenu = () => {
  const [showMenuItems, setShowMenuItems] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes('games')) setShowMenuItems(true)
    console.log(location.pathname)
  }, [])

  return (
    <div className='transition gap-y-10'>
      <button
        onClick={() => setShowMenuItems((prev) => !prev)}
        className='w-full flex flex-col items-center  group  transition duration-1000 ease-in-out '
      >
        <div className='flex items-center gap-x-2 w-full px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] group'>
          <CustomSVG name='podium' className={clsx('group-hover:text-white text-[#aa6e6e]')} />
          Games
          <svg
            className={clsx(
              'w-4 h-6 ml-auto text-gray-100 group-hover:text-white transition-all duration-300 ease-linear',
              showMenuItems ? '-rotate-0' : '-rotate-90',
            )}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </button>
      <ul
        className={clsx(
          'w-full my-4 transition-all ease-in-out duration-1000 flex flex-col gap-y-2 items-start pl-5 list-none',
          showMenuItems ? 'flex opacity-100 ' : 'hidden opacity-0',
        )}
      >
        <li className='menu-item flex w-full'>
          <Link
            to='/games/roulette/'
            className={clsx(
              'flex items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full justify-between',
              location.pathname.includes('roulette') && 'text-white bg-[#b46f6f] ',
            )}
          >
            <span className='menu-title'>Roulette</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </Link>
        </li>
        <li className='menu-item flex w-full'>
          <Link
            to='/games/dice/'
            className={clsx(
              'flex items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full justify-between',
              location.pathname.includes('dice') && 'text-white bg-[#b46f6f] ',
            )}
          >
            <span className='menu-title'>Dice</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </Link>
        </li>
        {/* <li className='menu-item flex w-full'>
          <a
            href='/games/wheel/'
            className='false flex justify-between items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full '
          >
            <span className='menu-title'>Wheel</span>
            <span className='menu-suffix'>
              <span className='bg-green-500 text-xs px-1.5 py-0.5 rounded-md'>Beta</span>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>

            </span>
          </a>
        </li> */}
        {/* <li className='menu-item flex w-full'>
          <a
            href='/games/slide/'
            className='false flex justify-between items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full '
          >
            <span className='menu-title'>Slide</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </a>
        </li>
        <li className='menu-item flex w-full'>
          <a
            href='/games/limbo/'
            className='false flex justify-between items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full '
          >
            <span className='menu-title'>Limbo</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </a>
        </li>
        <li className='menu-item flex w-full'>
          <a
            href='/games/rock-paper-scissors/'
            className='false flex justify-between items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full '
          >
            <span className='menu-title'>Rock Paper Scissors</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </a>
        </li>
        <li className='menu-item flex w-full'>
          <a
            href='/games/coin-flip/'
            className='false flex justify-between items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full '
          >
            <span className='menu-title'>Coin Flip</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </a>
        </li>
        <li className='menu-item flex w-full'>
          <a
            href='/games/slots/'
            className='false flex justify-between items-center gap-x-4 px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f] w-full '
          >
            <span className='menu-title'>Slots</span>
            <span className='menu-suffix'>
              <span className='bg-red-500 text-xs px-1.5 py-0.5 rounded-md'>Soon</span>
            </span>
          </a>
        </li> */}
      </ul>
    </div>
  )
}

const Sidebar = (props: Props) => {
  const location = useLocation()

  const SelectWallet = () => {
    return (
      <Menu as='div' className='relative inline-block text-left w-full'>
        <div className='w-full'>
          <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 wallet-adapter-button wallet-custom'>
            Select Wallet
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={clsx(
                      active ? ' bg-gray-100 text-gray-900' : 'text-gray-200',
                      'block px-4 py-2 text-sm w-full',
                    )}
                  >
                    Copy address
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-200',
                      'block px-4 py-2 text-sm w-full',
                    )}
                  >
                    Change wallet
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-200',
                      'block px-4 py-2 text-sm w-full',
                    )}
                  >
                    Disconnect
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  const SidebarItems = () => {
    return (
      <div className='text-white flex w-full flex-col items-center font-medium'>
        <div className='flex flex-col w-full py-3'>
          <div className='flex flex-col gap-2 gap-y-5'>
            <div className='flex h-16 p-6 items-center gap-3 my-5'>
              <div className='flex p-4 mx-auto max-w-[160px]'>
                <div className=' pointer-events-none p-2'>
                  <div className='profile-avatar relative'>
                    <div className='image-out relative blur-md'>
                      <img src='/images/defaultAvatar.png' alt='' className='object-cover' />
                    </div>
                    <img
                      src='/images/defaultAvatar.png'
                      className='image-inner absolute left-0 right-0 top-0 bottom-0 m-auto object-cover'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex pl-3'>
              <div className='flex flex-col'>
                {/* <span className='overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-semibold'>
                  Not logged in!
                </span> */}
                <span className='flex items-center gap-1 text-sm font-semibold'>
                  <div className='bg-vgray-900 grid h-8 w-8 place-content-center rounded-full ring-opacity-70 transition w-5'>
                    <div className='rounded-full p-[20%]'>
                      <img src='/icons/avax.svg' alt='AVAX' />
                    </div>
                  </div>
                  0.335 AVAX
                </span>
                <span className='flex items-center gap-1 text-sm font-semibold'>
                  <div className='bg-vgray-900 grid h-8 w-8 place-content-center rounded-full ring-opacity-70 transition w-5'>
                    <div className='rounded-full p-[20%]'>
                      <img src='/icons/usdt.png' alt='usdt' />
                    </div>
                  </div>
                  8,190.7 USDT
                </span>
              </div>
            </div>
            <div className='z-40 flex h-12 items-center justify-center rounded-lg text-light shadow-lg undefined'>
              <SelectWallet />
            </div>
          </div>
          <div className='h-0.5 w-full bg-[#693838] my-5'></div>
          <div className='flex flex-col'>
            <span className='font-bold text-mute'>Dashboard</span>
            <div className='mt-5 flex flex-col gap-4'>
              <Link to='/' className='flex items-center'>
                <button
                  className={clsx(
                    'group flex w-full px-4 py-3 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f]',
                    location.pathname === '/' && 'bg-[#b46f6f]',
                  )}
                >
                  <CustomSVG
                    name='planet'
                    className={clsx(
                      'group-hover:text-white text-[#aa6e6e]',
                      location.pathname === '/' && 'text-white',
                    )}
                  />
                  <span className='ml-2 font-semibold'>Home Page</span>
                </button>
              </Link>
              <Link to='/earn' className='flex items-center'>
                <button
                  className={clsx(
                    'group flex w-full px-4 py-3 text-sm font-medium transition-all duration-200 text-gray-100 hover:text-white rounded-lg hover:bg-[#b46f6f]',
                    location.pathname.includes('/earn') && 'bg-[#b46f6f]',
                  )}
                >
                  <CustomSVG
                    name='podium'
                    className={clsx(
                      'group-hover:text-white text-[#aa6e6e]',
                      location.pathname.includes('/earn') && 'text-white',
                    )}
                  />
                  <span className='ml-2 font-semibold'>Earn</span>
                </button>
              </Link>
              <GamesMenu />
            </div>
          </div>
          <div className='h-0.5 w-full bg-[#693838] my-5'></div>
          <div className='flex flex-col'>
            <span className='font-bold text-mute'>Official Rooms</span>
            <div className='mt-5 flex flex-col gap-4'>
              <Link
                className='flex items-center rounded-lg border-[2.6px] border-[#7c5f48] bg-[#693838] px-2 py-2  transition border-opacity-30 bg-opacity-30 hover:border-opacity-50 hover:bg-opacity-70'
                to='/jackpot/2c15efe5-6187-4bfe-980e-e25a91a1a762'
              >
                <span className='w-7 undefined'>
                  <img src='/icons/infinite.svg' />
                </span>
                <span className='ml-1 font-semibold'>Poker Room</span>
                <div className='bg-vgray-900 grid h-8 w-8 place-content-center rounded-full ring-opacity-70 transition ml-auto h-5 w-5'>
                  <div className='rounded-full p-[20%]'>
                    <img src='/icons/avax.svg' alt='AVAX' />
                  </div>
                </div>
              </Link>
              <Link
                className='flex items-center rounded-lg border-[2.6px] border-[#7c5f48] bg-[#693838] px-2 py-2  transition border-opacity-30 bg-opacity-30 hover:border-opacity-50 hover:bg-opacity-70'
                to='/jackpot/bf03d50c-1b5a-4ef5-89cd-1f2219b0aaf8'
              >
                <span className='w-7 pl-1'>
                  <img src='/icons/shrimp.svg' />
                </span>
                <span className='ml-1 font-semibold'>Black Jack Room</span>
                <div className='bg-vgray-900 grid h-8 w-8 place-content-center rounded-full ring-opacity-70 transition ml-auto h-5 w-5'>
                  <div className='rounded-full p-[20%]'>
                    <img src='/icons/avax.svg' alt='AVAX' />
                  </div>
                </div>
              </Link>
              <a
                className='flex items-center rounded-lg border-[2.6px] border-[#7c5f48] bg-[#693838] px-2 py-2 transition border-opacity-30 bg-opacity-30 hover:border-opacity-50 hover:bg-opacity-70'
                href='/jackpot/ca79bd13-5e6d-4161-9aab-4e9ad9d68841'
              >
                <span className='w-7 undefined'>
                  {/* <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACACAMAAAAPm6ZjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURW5xqG5uqW5wqG5vpm1urW5vqG5vqG5vqG5vqG1tq25vqG9vp25wqW5vqG5vqW5vqW5vqW5vqW5vqUdwTAsKYE4AAAAUdFJOU/9b5joE8flI1QvCK34eFKCQsW4AW4DzkwAABOBJREFUaN7tmtl2pCAQhlkFZBHM+7/rdEtrIxQumOOcOSNXSTryQVHLX9jo5/6BHubDfJgP82E+zId5CxPLLuh7mYIjhMKtTCVfSETYjUw2dm9mdyfTTdtEyN7INBGJxH1M2n2Y+Dam6z9IZG5jYj4zh7uYSs7IKwF6jukXJJI3MekXifg9TDUkTKRuYVKeMu0tTJ8iEb2DqciKKX6V6cyAgRQ+rpBwImJjMKqBad+5JtCC2q+ZI7Ta8H7UnWdONRnJfB+Wr5lQ8pvqHKENzE8a9w788zw8YKEpTXXiNJPpj690gRZ7SEZQNcfG5/epwjwtGVktUhDqXc1A43km+zooT+w7ZEypa3XONMSK/k7c9bN9Wc7Mj40txvctOUEmUxNRYeZTO3K0tIJMnE7NY34omXLlRMnnoYXpOADNfSjzz2SdfQuThfWGbCr44LJt5fFyDuf4dSySyUNxlzO7JH5N8ilpYlJSzq0LJvJL+FpyQkKgHUn5DfKslE0HN9dtJldrbKufa4cJP7ATcVFkkWm0Mel67smGtmDOkajlbzB/IE3QF0yioA94I3MdGYEBQmFZDOP1GDrDXBs3RgslFeNm++wbmW7tiRg6tveW1imKy34YhW1kMuFJHokOOFCbGJ14rI8o7bqPMZfkligKQsnUS67tjDvY72/6tR74ShQMZYROKUq8fhiO396gxZYY08Iyau43q0wRRQnHxaOaYizYFjPGRkeCx9QxlteLHSb5ug1jjmIfSFeXKQgSryQYMQshKpfzZKFiWz0XGCdMWAUUd3UmLZyjn9uHSWJX/TY9RYZ7nv8DrTOBooGCXSRkNT4To/7Y0gxzcqycJy8f+Gi+l9KJUwteyQnRVKUVEB+3fEgBi5w1nyYDg9VJIvEEYClI66fxaaFnPrrZx1QObGSRYYDdZyG1kRMoBI37iAmGAoZwNZWPNho0VG+CcrE+bJhWQM+O+7lPQWv9CmdbetAi/BRk2UEdyLdA/CXXBoAZltZMAA/27lCO12TDfMOG8QALEX2wruCuqierxXO+gcjXww4yla96ERAMZqlJ5VF7dbx+ljP3DLgEW70GAAJXnqnZQDqJSy7cpDN14xBxhumAeqWLnjR1EudLJ9i+IkLbwvZbIwtmzMEKSu07txgFs2y/Kkwa7QrUI9Tpc0wmjzFjFdMQMq1wx3SfgaOFghUFSpe7lzXlPm1u3EkksCxHRaED9MHvB+xpfSvBFGclELUe3GZDj2TAFj4TEkOtirfdgxWZLFYIU85roRK2kxAqd4w9GP3rsoxrdei1RHWeWYRFdNxVXZ71O+RBu2/vICbzYA0dC6mDoej0rIVZWLebDpSRXBCOkGX3G0K4F9Tgfb/Zv45D/YGWsNJ/2nWCkS5To5OflFedS7/R1PMq8wJ0nJM4ohcNZB4xPL+/E85fbk3MoU673mdT40csaByxHmo6D539TgUevTn4Omujt2cnvw5w+P+f77j8HaayVAh8aAhBrbrOVDhIAtZksE4TGbC6yATz984g4kp8OlDP7Q5uXDMTugI5No4kP/j9yoCah2+sK2PXzuzGJqbm6MLguoHJPLo0dq2Lam+l20ffcDdO+TUmb3hvj9HF0fAO3Vxlmn+Dia+eZ0vvMF5yXDm29A7sP9MJD/NhPsyH+TAf5r/A/AN7LyHecnjCVwAAAABJRU5ErkJggg==' /> */}
                  <img src='/icons/shrimp.svg' />
                </span>
                <span className='ml-1 font-semibold'>Seaweed Room</span>
                <div className='bg-vgray-900 grid h-8 w-8 place-content-center rounded-full ring-opacity-70 transition ml-auto h-5 w-5'>
                  <div className='rounded-full p-[20%]'>
                    <img src='/icons/avax.svg' alt='AVAX' />
                  </div>
                </div>
              </a>
              <a
                className='flex items-center rounded-lg border-[2.6px] border-[#7c5f48] bg-[#693838] px-2 py-2  transition border-opacity-30 bg-opacity-30 hover:border-opacity-50 hover:bg-opacity-70'
                href='/jackpot/d0fc9a62-8d31-4e74-92b1-b6827db30571'
              >
                <span className='w-7 undefined'>
                  <img src='/icons/infinite.svg' />
                </span>
                <span className='ml-1 font-semibold'>Infinite Room</span>
                <div className='bg-vgray-900 grid h-8 w-8 place-content-center rounded-full ring-opacity-70 transition ml-auto h-5 w-5'>
                  <img
                    className='rounded-full'
                    src='https://cdn.solanashuffle.com/images/BONK.png'
                    alt='BONK'
                  />
                </div>
              </a>
            </div>
          </div>
          <div className='h-0.5 w-full bg-[#693838] my-5'></div>
          <div className='flex flex-col'>
            <span className='font-bold text-mute'>Additional Information</span>
            <div className='mt-5 flex flex-col gap-4'>
              <a
                href='https://twitter.com/Ponix_Casino'
                className='flex items-center'
                target='_blank'
                rel='noreferrer'
              >
                <span className='font-semibold'>Twitter</span>
              </a>
              {/* <a
                href='https://discord.gg/immortalssol'
                className='flex items-center'
                target='_blank'
                rel='noreferrer'
              >
                <span className='font-semibold'>Discord</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={clsx(
          'bg-darky text-white flex lg:hidden my-20 flex-1 fixed h-full z-40  ease-in-out duration-300 top-0 left-0 ',
          'min-w-[260px] w-1/6 flex-col justify-between items-center px-10 text-white bg-[#4e3724]',
          props.openSideBar ? 'translate-x-0' : '-translate-x-80',
        )}
      >
        <div className='flex px-2 overflow-auto z-50 md:z-0 md:flex h-screen fixed min-w-[260px] w-full py-12 justify-between items-center flex-col shadow-2xl'>
          <SidebarItems />
        </div>
      </div>

      <div
        className={clsx(
          'hidden lg:flex min-w-[260px] w-1/6 px-5 flex-col justify-between items-center  text-white ',
          'bg-[#661919] mt-20 md:mt-0 flex fixed h-full z-40  ease-in-out duration-300 top-0 left-0 ',
        )}
      >
        <SidebarItems />
      </div>
    </>
  )
}

export default Sidebar
