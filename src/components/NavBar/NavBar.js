/**
 * Componente NavBar
 * @name NavBar
 * @component
 * @returns {function} NavBar de todas as paginas
 */

import React, { useContext, useEffect } from "react"
import Link from "next/link"

import * as S from "./NavBar.styled"

import { getProductsOnCart } from "../../services/cart"

import { CartContext } from "../../services/CartContext"

const NavBar = () => {
  const [state, setState] = useContext(CartContext)

  /**
   * Função que recupera os produtos do localStorage.
   * @name useEffect-CartCount
   * @returns {object} Retorna e salva no context a quantidade de produtos no carrinho
   */
  useEffect(() => {
    const CartCount = getProductsOnCart()
    setState({ ...state, cartCount: CartCount.length })
  }, [])

  return (
    <S.Container>
      <Link href="/">
        <a>
          <S.Logo src="../../images/logo.png" />
        </a>
      </Link>
      <S.Text>Produtos</S.Text>
      <S.CartContainer>
        <Link href="/cart">
          <a>
            <S.Cart src="../../images/cart.svg" />
          </a>
        </Link>
        <S.ProductsNumber>{state.cartCount}</S.ProductsNumber>
      </S.CartContainer>
    </S.Container>
  )
}

export default NavBar
