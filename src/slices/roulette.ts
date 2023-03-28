import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pad as _pad } from '../config/pad'

interface Props {
  prizeNumber: number
  chipValue: number
  pad: Pad[]
  clickedPoints: {
    x: number
    y: number
    count: number
    value: number[]
  }[]
}

const initialState: Props = {
  prizeNumber: 0,
  chipValue: 0,
  pad: _pad,
  clickedPoints: [],
}

export const roulette = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setPrizeNumber: (state, action: PayloadAction<number>) => {
      state.prizeNumber = action.payload
    },
    setChipValue: (state, action: PayloadAction<number>) => {
      state.chipValue = action.payload
    },
    setPad: (state, action: PayloadAction<Pad[]>) => {
      state.pad = action.payload
    },
    setClickedPoints: (state, action: PayloadAction<Props['clickedPoints']>) => {
      state.clickedPoints = action.payload
    },
  },
})

export const { setPrizeNumber, setChipValue, setClickedPoints, setPad } = roulette.actions

export default roulette.reducer
