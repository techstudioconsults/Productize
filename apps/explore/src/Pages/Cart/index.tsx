import React from 'react'
import CartStore from './CartComponents/CartStore'
import ExploreLayout from '../../layouts/ExploreLayout'

const Cart: React.FC = () => {
  return (
    <ExploreLayout>
        <CartStore />
    </ExploreLayout>
  )
}

export default Cart