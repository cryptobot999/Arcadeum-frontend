import { useState } from 'react'
import {
  // ESARComponent,
  PONIXComponent,
  PLPComponent,
  SPONIXComponent,
  USDTVaultComponent,
  // XARCComponent,
} from '../components/EarnComponents'

const EarnPage = () => {
  return (
    <>
      <div
        className=' h-screen relative flex flex-col items-center w-full md:w-10/12 py-20 gap-y-5'
        style={{
          backgroundImage: "url('/images/background1.png')",
        }}
      >
        <div className='flex flex-col justify-start items-start self-start gap-y-2'>
          <h1 className='h-full w-full text-white text-3xl font-semibold'>Earn Page</h1>
          <h4 className='text-white'>
            Stake{' '}
            <a href='' className='underline '>
              Ponix
            </a>{' '}
            {/* and deposit into{' '}
            <a href='' className='underline '>
              PLP
            </a>{' '} */}
            to earn rewards.
          </h4>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-x-10 gap-y-5'>
          <PLPComponent />
          <PONIXComponent />
          <SPONIXComponent />
          <USDTVaultComponent />
        </div>
        {/* <div className='grid grid-cols-1 lg:grid-cols-3 w-full gap-x-10 gap-y-5'>
          <XARCComponent />
          <ESARComponent />
        </div> */}
        <footer className='footer bg-[#6d2b1b] p-5 text-white mt-10'>
          <div className='content has-text-centered'>
            <p className='font-demibold'>
              This interface is a free interface for using the Ponix Protocol. The Ponix Protocol
              and this interface is not available to residents, citizens, or agents of: the United
              States, Iran, Cuba, Syria, Myanmar (Burma), Sudan, Liberia, or the
              regions of Crimea, Donetsk, or Luhansk. By continuing to use this interface, you
              confirm that you are not a US Person or US Entity and are not accessing this interface
              from within the United States.
            </p>
            <p className='font-demibold'>
              This free interface is maintained by the Ponix community and does not receive a cut of
              house profits. Use this app at your own risk. Ponix is a decentralized protocol and
              the maintainers of this interface are not responsible for any losses or damages
              incurred by using this interface.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default EarnPage
