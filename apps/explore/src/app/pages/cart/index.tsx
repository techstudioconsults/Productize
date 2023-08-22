import CartStore from 'apps/explore/src/libs/cart/CartStore'
import ExploreLayout from 'apps/explore/src/libs/layouts/ExploreLayout'
import React from 'react'

const Cart: React.FC = () => {
  return (
    <ExploreLayout>
        <CartStore />
    </ExploreLayout>
  )
}

export default Cart