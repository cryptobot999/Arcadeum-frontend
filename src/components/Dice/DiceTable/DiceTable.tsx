import { Listbox, Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdCheckCircleOutline,
  MdKeyboardArrowDown,
} from 'react-icons/md'
import { truncateAddress } from '../../../utils/address'
import { formatDistanceToNow } from 'date-fns'

enum GameStatus {
  WIN = 'Busted',
  BUSTED = 'Busted',
}

enum BetTypeEnum {
  ALL_BETS = 'All Bets',
  MY_BETS = 'My Bets',
}

type Props = {
  bet: any
  key: any
}

const bets = {
  [BetTypeEnum.ALL_BETS]: [
    {
      id: '92575489938231811449747941370430815546947625168771951450218950015830669470351',
      betTxnHash: '0xcd0d5dde6ea8e4cd802247b12bcc2623ff7c837ac5bcac2a59068e48457d5824',

      timestamp: '1677579290',
      user: {
        id: '0x7dd2186b3eb30dc5a600df3e1675356b706d51d0',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '200000000000000000000',
      resolved: true,
      rollTxnHash: '0x0bb5c2043303bd41cdc67fc8637e56164c95da50e66ba8b91b1db34e2b82276a',
      rollTxnTimestamp: '1677579302',
      payout: '264383561643835616439',
      cap: 27,
      rolled: 100,
      __typename: 'DiceBet',
    },
    {
      id: '108994325810464439472913080143877167200999920603532954214909568645093211545362',
      betTxnHash: '0x1eb44aeb9e0da85d01a378c7d50ffbefc1b5a8bbc123ae00cdfb69d7100a0b20',
      timestamp: '1677531091',
      user: {
        id: '0x48eb0779cc9400f64eee80d2c836a02396784afc',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '200000000000000000000',
      resolved: true,
      rollTxnHash: '0x13998b485759b1df3af177fed7b39d108c3edc1669ee0db33a8ea5b98efe9bef',
      rollTxnTimestamp: '1677531105',
      payout: '386000000000000000000',
      cap: 50,
      rolled: 66,
      __typename: 'DiceBet',
    },
    {
      id: '37356333402452449565523781544642154682433116427055649269109943302721137959565',
      betTxnHash: '0x7fd775ad551e2e2e5b9f5a540789c3cfe1be2d2a437743b0301dc30fe61890e2',
      timestamp: '1677524084',
      user: {
        id: '0x770a561bc5165abe8768734cf707492f9a70f16b',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '1000000000000000000000',
      resolved: true,
      rollTxnHash: '0xf503d760e765ffdc6d61c1b71b3852d95ce46839730a72d1fe7b359aa7f6908e',
      rollTxnTimestamp: '1677524098',
      payout: '2010416666666666666667',
      cap: 52,
      rolled: 71,
      __typename: 'DiceBet',
    },
    {
      id: '45696710037244581468684493829413548453298835664997512193092336260905210787737',
      betTxnHash: '0x4cda38fdebcb299f4a3cb1b28e204353dfc1cc2530b90246899cdf3e20a2c42d',
      timestamp: '1677522934',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '7200000000000000000000',
      resolved: true,
      rollTxnHash: '0x327f16d3f072141be97aa74011ed3f9d8f49c53cc259375af3f9887a4d3ae8b6',
      rollTxnTimestamp: '1677522952',
      payout: '12866666666666666666667',
      cap: 46,
      rolled: 66,
      __typename: 'DiceBet',
    },
    {
      id: '91162673085612828470493331268705069409986730380969665106236233362647594481733',
      betTxnHash: '0xd3d5fecc79c2bba8ae4a977d13ec7e8389cbab05974d7c0a5c0328d323cacb53',
      timestamp: '1677522900',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '3500000000000000000000',
      resolved: true,
      rollTxnHash: '0xc8798c099652247281404fe501a2ee5290015f7b75cb3679a3368e183fe267f1',
      rollTxnTimestamp: '1677522918',
      payout: '0',
      cap: 52,
      rolled: 48,
      __typename: 'DiceBet',
    },
    {
      id: '84410762839906398582130937897984766218222742022487828215926062711487027924139',
      betTxnHash: '0x653ab7d4090a3759d4305c166a969bb5fbb9fc177097efce65db621612c42f45',
      timestamp: '1677522874',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '1700000000000000000000',
      resolved: true,
      rollTxnHash: '0xef211a6a914c5c893a5549b2a28679069448c8a37e94d2233506bb456f33a936',
      rollTxnTimestamp: '1677522886',
      payout: '0',
      cap: 52,
      rolled: 48,
      __typename: 'DiceBet',
    },
    {
      id: '2460002602437623598757929317859160358458633278140348963365163367383415824309',
      betTxnHash: '0x9ef35df93a0052b75680f2100451320db93961ea9f56603a381638d0e8ab97a5',
      timestamp: '1677522842',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '800000000000000000000',
      resolved: true,
      rollTxnHash: '0x6bca83eae8025e8896fc43885ceade6b1e3380df05637bc6fa7428f6cfd3ff59',
      rollTxnTimestamp: '1677522858',
      payout: '0',
      cap: 52,
      rolled: 26,
      __typename: 'DiceBet',
    },
    {
      id: '83907263388427125769810305477538016573702858750063733499044659531238427191331',
      betTxnHash: '0x245446149897d69504ec1ed091b5c89012914f1d9b33ebf8166f012959305351',
      timestamp: '1677522804',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '800000000000000000000',
      resolved: true,
      rollTxnHash: '0x9579857b026aabcaf95cb1b07ed7f2167d439b8ae0cf0d7bf33d81864925724d',
      rollTxnTimestamp: '1677522828',
      payout: '1029333333333333333333',
      cap: 25,
      rolled: 50,
      __typename: 'DiceBet',
    },
    {
      id: '61253438001387450003195813658094747690963498772777637583611647184192907756326',
      betTxnHash: '0x0984fa8a6a701725ee954ed309e9e04f8679a89cb0f56dba7c0e79b9d42f1d92',
      timestamp: '1677522754',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '800000000000000000000',
      resolved: true,
      rollTxnHash: '0x4275517a1a15a122bda00dce4feb83b71767ca3a249df635421c212b96f8592d',
      rollTxnTimestamp: '1677522766',
      payout: '1608333333333333333333',
      cap: 52,
      rolled: 68,
      __typename: 'DiceBet',
    },
    {
      id: '37172827620204554091396891209172208192059654405494407142503321741032591595186',
      betTxnHash: '0xc62168979fd20b9f407609e60487b075ddfdd5c47df9fba92ffdfc1d28a2b981',
      timestamp: '1677522726',
      user: {
        id: '0xe9afb9abbe24296fefdf6d078242d1c674aff604',
        __typename: 'User',
      },
      gameToken: {
        token: {
          id: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
          __typename: 'Token',
        },
        __typename: 'GameToken',
      },
      amount: '400000000000000000000',
      resolved: true,
      rollTxnHash: '0xfd80224a58b047c25b674dbde84ec360338bd91b29286583df0864294dc9152e',
      rollTxnTimestamp: '1677522740',
      payout: '0',
      cap: 52,
      rolled: 7,
      __typename: 'DiceBet',
    },
  ],
  [BetTypeEnum.MY_BETS]: [],
}

const TableRow = ({ bet }: Props) => {
  return (
    <tr key={bet.id} className='py-6 px-5 border-b border-b-gray-700/50 hover:bg-gray-700/50'>
      <td className='text-start py-3 px-2 flex items-center gap-x-2'>
        <span className='inline-flex'>
          <span
            aria-atomic='true'
            aria-label='Badge'
            aria-live='polite'
            role='status'
            className={clsx(
              'inline-flex justify-center items-center h-3 w-3  rounded-full  error ',
              bet.payout === '0' ? 'bg-red-500' : 'bg-green-700',
            )}
          ></span>
        </span>
        <span>{bet.payout === '0' ? 'Busted' : 'Win'} </span>
      </td>
      <td className='text-start'>
        <span>{truncateAddress(bet.user.id)}</span>
      </td>
      <td className='text-start'>
        <span>4.20x</span>
      </td>
      <td className='text-start flex items-center gap-x-1 h-full py-5'>
        <img width='20' height='20' src='/icons/usdt.png' alt='currency logo' />
        &nbsp;
        <span>-4,072.8285 ($18.09)</span>
      </td>
      <td className='text-right'>
        <span>{formatDistanceToNow(new Date(parseInt(bet.timestamp)))}</span>
      </td>
    </tr>
  )
}

const RowPerPage = () => {
  const rowSizes: number[] = [5, 10, 20, 50, 100]
  const [selected, setSelected] = useState(rowSizes[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className='relative mt-1'>
            <Listbox.Button className=' w-full cursor-default rounded-md border border-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
              <span className='flex items-center'>
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
              <Listbox.Options className='absolute transform -translate-y-full z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-800 text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
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

const DiceTable = () => {
  const [selectedBetType, setSelectedBetType] = useState<BetTypeEnum>(BetTypeEnum.ALL_BETS)
  const BetFilter = () => {
    return (
      <div className=''>
        <div className='v-input__control'>
          <div
            role='button'
            aria-haspopup='listbox'
            aria-expanded='false'
            aria-owns='list-158'
            className='v-input__slot'
          >
            <div className='v-select__slot'>
              <div className='flex gap-x-4'>
                <div
                  onClick={() => setSelectedBetType(BetTypeEnum.ALL_BETS)}
                  className={clsx(
                    'transition-all duration-200 ease-in-out',
                    selectedBetType !== BetTypeEnum.ALL_BETS ? 'text-gray-700' : 'text-gray-100',
                  )}
                >
                  All
                </div>
                <div
                  onClick={() => setSelectedBetType(BetTypeEnum.MY_BETS)}
                  className={clsx(
                    'transition-all duration-200 ease-in-out',
                    selectedBetType !== BetTypeEnum.MY_BETS ? 'text-gray-700' : 'text-gray-100',
                  )}
                >
                  My bets
                </div>
              </div>
              <div className='v-input__append-inner'>
                <div className='v-input__icon v-input__icon--append'>
                  <i
                    aria-hidden='true'
                    className='v-icon notranslate mdi mdi-menu-down theme--dark'
                  ></i>
                </div>
              </div>
              <input type='hidden' value='false' />
            </div>
            <div className='v-menu'></div>
          </div>
          <div className='v-text-field__details'>
            <div className='v-messages theme--dark'>
              <div className='v-messages__wrapper'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='relative h-full w-full  bg-[#070a23] text-white p-5 overflow-y-visible'>
      <div className='w-full  bg-[#070a23] text-white p-5'>
        <table className='w-full'>
          <colgroup>
            <col className='' />
            <col className='' />
            <col className='' />
            <col className='' />
            <col className='' />
          </colgroup>
          <thead className='v-data-table-header'>
            <tr>
              <th role='columnheader' scope='col' aria-label='Win' className='text-start'>
                <BetFilter />
              </th>
              <th role='columnheader' scope='col' aria-label='Player' className='text-start'>
                <span>Player</span>
              </th>
              <th role='columnheader' scope='col' aria-label='Target' className='text-start'>
                <span>Target</span>
              </th>
              <th
                role='columnheader'
                scope='col'
                aria-label='Profit: Not sorted. Activate to sort ascending.'
                className='text-start sortable'
                aria-sort='none'
              >
                <span>Profit</span>
                <i
                  aria-hidden='true'
                  className='v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--dark'
                  style={{ fontSize: '18px' }}
                ></i>
              </th>
              <th
                role='columnheader'
                scope='col'
                aria-label='Time: Sorted descending. Activate to sort ascending. '
                className='text-right sortable active desc cursor-pointer'
                aria-sort='descending'
              >
                <div className='flex justify-end items-center gap-x-1 '>
                  <span>Time</span>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    id='up-arrow'
                    data-name='Flat Line'
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon flat-line h-5 w-5'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                    <g id='SVGRepo_iconCarrier'>
                      <line
                        id='primary'
                        x1='12'
                        y1='21'
                        x2='12'
                        y2='3'
                        style={{
                          fill: 'none',
                          stroke: '#fff',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                        }}
                      ></line>
                      <polyline
                        id='primary-2'
                        data-name='primary'
                        points='15 6 12 3 9 6'
                        style={{
                          fill: 'none',
                          stroke: '#fff',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                        }}
                      ></polyline>
                    </g>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {bets[selectedBetType].length > 0 ? (
              bets[selectedBetType].map((bet, i) => {
                return <TableRow key={i} bet={bet} />
              })
            ) : (
              <tr className='py-6 px-5  border-b border-b-gray-700/50 hover:bg-gray-700/50'>
                <td className='text-center py-3' colSpan={5}>
                  Place your first bet!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {bets[selectedBetType].length > 0 && (
        <div className='w-full items-center flex justify-between bg-[#070a23] text-white p-5'>
          <div className='flex-1'></div>
          <div className='flex gap-x-3 justify-center items-center flex-1 py-2'>
            <div className='v-data-footer__icons-before'>
              <button
                type='button'
                disabled
                className='hover:bg-gray-600 p-1.5 flex justify-center items-center rounded-full'
                aria-label='Previous page'
              >
                <MdArrowBackIos />
              </button>
            </div>
            <div className='v-data-footer__pagination'>1-10 of 109294</div>
            <div className='v-data-footer__icons-after'>
              <button
                type='button'
                className='hover:bg-gray-600 p-1.5 flex justify-center items-center rounded-full'
                aria-label='Next page'
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
          <div className='flex flex-1 justify-end py-2'>
            <RowPerPage />
          </div>
        </div>
      )}
    </div>
  )
}

export default DiceTable
