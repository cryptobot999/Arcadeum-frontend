import React, { Fragment, useState } from 'react'
import './style.css'
import clsx from 'clsx'
import { Listbox, Menu, Transition } from '@headlessui/react'
import { MdCheckCircleOutline, MdKeyboardArrowDown } from 'react-icons/md'

const DiceSlider = () => {
  const [value, setValue] = useState(50)

  const SelectType = () => {
    const rowSizes: string[] = ['USDT', 'Ponix', 'ETH']
    const iconList: string[] = ['usdt.png', 'logo.png', 'eth.png']
    const [selected, setSelected] = useState(rowSizes[0])

    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className='relative mt-1'>
              <Listbox.Button className='cursor-default rounded-md border border-gray-800 text-white py-2 px-5 w-32 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
                <span className='flex items-center'>
                  <span className='block truncate h-5 w-5'>
                    <img
                      src={
                        '/icons/' +
                        iconList[rowSizes.indexOf(selected) != -1 ? rowSizes.indexOf(selected) : 0]
                      }
                    />
                  </span>
                  <span className='ml-3 block truncate'>{selected}</span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <MdKeyboardArrowDown />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-800 text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {rowSizes.map((rowSize) => (
                    <Listbox.Option
                      key={rowSize}
                      className={({ active }) =>
                        clsx(
                          active ? 'bg-indigo-600 ' : '',
                          'relative cursor-default select-none text-white py-2',
                        )
                      }
                      value={rowSize}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span
                              className={clsx(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate',
                              )}
                            >
                              {rowSize}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={clsx(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}
                            >
                              <MdCheckCircleOutline className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    )
  }

  const BetAmountInput = () => {
    return (
      <div className='flex justify-between items-center text-white py-7 h-full w-full'>
        <div className='w-full px-3'>
          <input
            type='number'
            defaultValue={0}
            className='py-8 font-bold  bg-transparent w-full  outline-transparent appearance-none ring-0 focus:outline-none focus:ring-0 '
          />
        </div>
        <span className='py-1 px-3 bg-neutral-700 text-gray-200 rounded-lg'>Max</span>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col items-center gap-y-5 my-10'>
      <div className='w-11/12 lg:w-2/3 xl:w-1/2 flex flex-col items-center gap-y-5 my-10'>
        <div className='value text-white text-8xl '>{value}x</div>
        <div className='w-full flex flex-col gap-y-2'>
          <div className='px-14 py-10 rounded-2xl bg-[#0B0C31] w-full'>
            <div className='relative h-3 slider w-full flex items-center'>
              <input
                className='absolute w-full z-50 '
                type='range'
                min='0'
                max={100}
                step={0.01}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <div
                style={{
                  width: `${(value / 100) * 100}%`,
                }}
                className={clsx('absolute z-20 inset-0 rounded-full', 'slider_upper')}
              ></div>
              <div
                style={{}}
                className={clsx('absolute z-0  inset-0 rounded-full', 'slider_lower')}
              ></div>
            </div>
          </div>
          <ul className='flex justify-between w-full text-white px-14'>
            <li className='flex justify-center relative'>
              <span className='absolute'>4</span>
            </li>
            <li className='flex justify-center relative'>
              <span className='absolute'>25</span>
            </li>
            <li className='flex justify-center relative'>
              <span className='absolute'>50</span>
            </li>
            <li className='flex justify-center relative'>
              <span className='absolute'>75</span>
            </li>
            <li className='flex justify-center relative'>
              <span className='absolute'>99</span>
            </li>
          </ul>
        </div>
        <div className='w-full my-10'>
          <div className='px-14 rounded-2xl bg-[#0B0C31] w-full flex'>
            <div className='relative w-min flex items-center h-20 text-gray-600'>
              <div className='flex items-center h-full px-4 border-0 border-r-2 border-gray-600 text-lg font-medium'>
                BET
              </div>
            </div>
            <div className='relative slider w-full flex items-center h-20 text-gray-600 px-2 flex-[3]'>
              <BetAmountInput />
            </div>
            <div className='relative slider w-full flex items-center h-20 text-gray-600 flex-[1] border-l-2 border-gray-600 px-4 justify-center'>
              <SelectType />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2  text-white/70 my-5'>
            <div className='flex flex-col items-start justify-start'>
              <p>50% win chance 3.5% house edge</p>
              <p>Bank: 880, 788, 4194 Ponix</p>
            </div>
            <div className='flex flex-col items-end justify-start'>
              <p>Target payout: -0 Ponix</p>
              <p>Min bet amount: 200 Ponix</p>
              <p>Max payout: 17.615.7684 Ponix</p>
            </div>
          </div>
        </div>

        <div className='my-5 w-full'>
          <button className='w-full text-[#cd50dd] border-2 text-xl font-semibold border-[#cd50dd] hover:bg-[#cd50dd] hover:text-white rounded-2xl py-6 px-14 text-center'>
            Connect your Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiceSlider
