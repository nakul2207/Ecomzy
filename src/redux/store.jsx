import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice/cartslice'

export const store = configureStore({
  reducer: {
    cart : cartSlice.reducer
  },
})