import React from 'react'
import { Cartitem } from '../components/Cartitem'

export const CartPage = ({user}) => {
  return (
    <div>
      <Cartitem user={user}></Cartitem>
    </div>
  )
}
