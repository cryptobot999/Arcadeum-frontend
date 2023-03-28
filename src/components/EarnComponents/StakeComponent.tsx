import React from 'react'

type Props = {
  stakeData: any
}

const StakeComponent = (props: Props) => {
  return (
    <div className='w-full h-full drop-shadow-2xl shadow-2xl flex flex-col bg-[#722f2f] min-h-52 !text-light-100 rounded-xl'>
      <div className='flex justify-between items-center h-20 bg-[#3d1a1a] px-8'>
        <div className='flex py-2 h-8 w-8 items-center gap-x-3'>
          <img src='/icons/arc_logo.svg' className='object-contain h-10 w-10' />
          <h2 className='uppercase font-semibold text-white'>Ponix</h2>
        </div>
        <div>
          <p className='flex items-center text-white'>
            <a
              className='hover:underline mx-4'
              href='https://arbiscan.io/address/0x7F465507f058e17Ad21623927a120ac05CA32741'
              target='_blank'
              rel='noreferrer'
            >
              0x7F46...2741
            </a>
            <button className=''>
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M13 7H7V5H13V7Z' fill='currentColor'></path>
                <path d='M13 11H7V9H13V11Z' fill='currentColor'></path>
                <path d='M7 15H13V13H7V15Z' fill='currentColor'></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z'
                  fill='white'
                ></path>
              </svg>
            </button>
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-y-6 px-8 py-10 !text-white'>
        <div className='flex flex-col gap-y-2'>
          <div className='flex justify-between items-center'>
            <p className='font-semibold text-light-200'>Price</p>
            <p className='font-semibold text-white'>$1.3300</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>Wallet</p>
            <p className='font-semibold text-white'>0.00</p>
          </div>
          <hr className='' />
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>All Tokens</p>
            <p className='font-semibold text-white'>9,943,609.364</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>Staked Tokens (sPONIX)</p>
            <p className='font-semibold text-white'>1,086,956.716 (10.87%)</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>Burnt Tokens (xPONIX)</p>
            <p className='font-semibold text-white'>56,390.636 (0.564%)</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>Escrowed Tokens (esPONIX)</p>
            <p className='font-semibold text-white'>2,000,000.00 (20.00%)</p>
          </div>
          <hr className='' />
        </div>
        <div className=''>
          <button className='px-5 py-2 bg-[#d55050] text-white rounded-lg'>Buy PONIX</button>
        </div>
      </div>
    </div>
  )
}

export default StakeComponent
