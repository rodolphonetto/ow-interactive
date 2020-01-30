import React, { useState } from "react"

const CartContext = React.createContext([{}, () => {}])

const CartProvider = props => {
  const [state, setState] = useState({ cartCount: 0 })

  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
