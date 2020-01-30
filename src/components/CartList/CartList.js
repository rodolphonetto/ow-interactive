/**
 * Componente gera a lista do carrinho.
 * @name CartList
 * @component
 * @returns {function} Retorna a lista dos produtos que estão adicionados ao carrinho
 */

import React, { useState, useEffect, useContext } from "react"
import Link from "next/link"

import * as S from "./CartList.styled"

import {
  getProductsOnCart,
  increaseQtd,
  decreaseQtd,
  removeProduct,
  cleanCart
} from "../../services/cart"

import CartButton from "../CartButton/CartButton"
import CleanCartButton from "../CleanCartButton/CleanCartButton"

import { CartContext } from "../../services/CartContext"

const CartList = () => {
  const [state, setState] = useContext(CartContext)
  const [ProductsOnCart, SetProductsOnCart] = useState([])
  const [TotalSum, setTotalSum] = useState(0)

  /**
   * Função que recupera os produtos do localStorage e converte o preço.
   * @name useEffect-convertedPrice
   * @returns {void} Retorna e salva no state todos os produtos com o preço convertido em Float
   */
  useEffect(() => {
    const localStorageProducts = getProductsOnCart()
    const convertedPrice = localStorageProducts.map(product => {
      return {
        ...product,
        newPrice: parseFloat(
          product.prodPrice.replace(".", "").replace(",", ".")
        )
      }
    })
    SetProductsOnCart(convertedPrice)
  }, [])

  /**
   * Função que multiplica o preço dos produtos pela quantidade no carrinho e soma todos.
   * @name useEffect-cartTotalPrice
   * @returns {void} Salva no state a soma de todos os produtos no carrinho
   */
  useEffect(() => {
    const productTotalPrice = ProductsOnCart.map(product => {
      return { ...product, totalPrice: product.newPrice * product.qtd }
    })

    const cartTotalPrice = productTotalPrice.reduce(
      (prev, cur) => prev + cur.totalPrice,
      0
    )
    setTotalSum(cartTotalPrice)
  }, [ProductsOnCart])

  /**
   * Função adiciona 1 na quantidade do produto.
   * @name addQtd
   * @param {array} ProductsOnCart Array com todos os produtos no carrinho
   * @param {string} name Nome do produto que está sendo adicionado
   * @returns {void} Salva o produto com a quantidade atualizada no localStorage e no state
   */
  const addQtd = (ProductsOnCart, name) => {
    increaseQtd(ProductsOnCart, name)
    const localStorageProducts = getProductsOnCart()
    SetProductsOnCart(localStorageProducts)
  }

  /**
   * Função subtrai 1 na quantidade do produto.
   * @name removeQtd
   * @param {array} ProductsOnCart Array com todos os produtos no carrinho
   * @param {string} name Nome do produto que está sendo subtraido
   * @returns {void} Salva o produto com a quantidade atualizada no localStorage e no state
   */
  const removeQtd = (ProductsOnCart, name) => {
    decreaseQtd(ProductsOnCart, name)
    const localStorageProducts = getProductsOnCart()
    SetProductsOnCart(localStorageProducts)
  }

  /**
   * Função que exclui o produto do carrinho
   * @name deleteProduct
   * @param {array} ProductsOnCart Array com todos os produtos no carrinho
   * @param {string} name Nome do produto que está sendo deletado
   * @returns {void} remove o produto no localStorage e no state
   */
  const deleteProduct = (ProductsOnCart, name) => {
    removeProduct(ProductsOnCart, name)
    const localStorageProducts = getProductsOnCart()
    SetProductsOnCart(localStorageProducts)
    setState({ ...state, cartCount: localStorageProducts.length })
  }

  /**
   * Função que limpa o carrinho deletando todos os produtos.
   * @name cleanCartProducts
   * @returns {void} remove todos os produtos do localStorage e do state
   */
  const cleanCartProducts = () => {
    cleanCart()
    const localStorageProducts = getProductsOnCart()
    SetProductsOnCart(localStorageProducts)
    setState({ ...state, cartCount: localStorageProducts.length })
  }

  const products = ProductsOnCart.map((product, index) => {
    return (
      <S.ProductItem key={index}>
        <S.ProductContainer>
          <S.DeleteButton
            onClick={() => deleteProduct(ProductsOnCart, product.prodName)}
            src="../../images/garbage.svg"
          />
          <S.ProductCategory>Eletrônicos</S.ProductCategory>
          <S.ProductName>{product.prodName}</S.ProductName>
        </S.ProductContainer>
        <S.QtdContainer>
          <S.QtdIncrease
            onClick={() => addQtd(ProductsOnCart, product.prodName)}
          >
            +
          </S.QtdIncrease>
          <S.QtdValue value={product.qtd} />
          <S.QtdDecrease
            onClick={() => removeQtd(ProductsOnCart, product.prodName)}
          >
            -
          </S.QtdDecrease>
        </S.QtdContainer>
        <S.PriceContainer>
          <S.UnPrice>R$ {product.prodPrice}</S.UnPrice>
          <S.TenTimesPrice>
            {` à vista ou 10x de ${(parseFloat(product.newPrice) / 10)
              .toFixed(2)
              .replace(".", ",")}`}
          </S.TenTimesPrice>
        </S.PriceContainer>
        <S.PriceContainer>
          <S.UnPrice>
            R${" "}
            {(parseFloat(product.newPrice) * product.qtd)
              .toFixed(2)
              .replace(".", ",")}
          </S.UnPrice>
          <S.TenTimesPrice>
            {` à vista ou 10x de ${(
              (parseFloat(product.newPrice) / 10) *
              product.qtd
            )
              .toFixed(2)
              .replace(".", ",")}`}
          </S.TenTimesPrice>
        </S.PriceContainer>
      </S.ProductItem>
    )
  })
  return (
    <S.Container>
      <S.ListItem>
        <S.Title>Produto</S.Title>
        <S.Title>Quantidade</S.Title>
        <S.Title>Valor Unitário</S.Title>
        <S.Title>Total</S.Title>
      </S.ListItem>
      {products}
      <S.TotalsContainer>
        <S.Title totalLabel>Total à Vista:</S.Title>
        <S.Title total>{`R$ ${TotalSum.toFixed(2).replace(".", ",")}`}</S.Title>
      </S.TotalsContainer>
      <S.TotalsContainer>
        <S.Title totalLabel>Total à prazo:</S.Title>
        <S.Title>{(TotalSum / 10).toFixed(2).replace(".", ",")}</S.Title>
      </S.TotalsContainer>
      <S.FooterContainer>
        <CleanCartButton clicked={cleanCartProducts} />
        <Link href="/">
          <S.LinkBox>
            <CartButton>Continuar Comprando</CartButton>
          </S.LinkBox>
        </Link>
        <Link href="checkout">
          <S.LinkBox finish>
            <CartButton finish>Concluir compra</CartButton>
          </S.LinkBox>
        </Link>
      </S.FooterContainer>
    </S.Container>
  )
}

export default CartList
