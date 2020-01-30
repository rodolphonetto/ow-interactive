import React from "react"

import GlobalStyle from "./Layout.styled"
import { CartProvider } from "../../services/CartContext"

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <GlobalStyle />
      {children}
    </CartProvider>
  )
}

export default Layout
