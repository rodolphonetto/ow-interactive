/**
 * Componente gera a lista de produtos na pagina inicial.
 * @name Products
 * @component
 * @param {array} products Array contendo dos os produtos
 * @returns {function} Componente com a lista de produtos
 */

import React, { useState, useEffect, useContext } from "react"
import * as S from "./Products.styled"

import {
  getProductsOnCart,
  addFirstProduct,
  increaseQtd,
  addNewProduct
} from "../../services/cart"

import ProductCard from "./ProductCard/ProductCard"

import { CartContext } from "../../services/CartContext"

const Products = ({ products }) => {
  const [state, setState] = useContext(CartContext)

  const [fetchedProducts, SetfetchedProducts] = useState([])

  const [SearchWord, SetSearchWord] = useState("")

  const onChangeHandler = event => {
    event.persist()
    SetSearchWord(event.target.value)
  }

  const onPressEnter = e => {
    if (e.key == "Enter") {
      SearchProduct()
    }
  }

  /**
   * Função que simula uma busca filtrando os produtos.
   * @name SearchProduct
   * @param {string} SearchWord Palavra chave para executar o filtro
   * @returns {array} Retorna e salva no state apenas os produtos que atendem o filtro
   */
  const SearchProduct = () => {
    const productsFound = products.filter(product => {
      return product.name.toLowerCase().includes(SearchWord.toLowerCase())
    })
    SetfetchedProducts([...productsFound])
  }

  useEffect(() => {
    SetfetchedProducts([...products])
  }, [])

  /**
   * Função que adiciona produtos no carrinho. Ela verifica se o carrinho já tem produtos
   * em caso negativo salva o primeiro produto. Em caso positivo verifica se aquele produto já está no carrinho
   * se sim, adiciona a quantidade, se não adiciona o novo produto
   * @name AddItemToCart
   * @param {string} name Nome do produto
   * @param {string} price Preço do produto
   * @returns {void} Salva os produtos no localStorage e no state
   */
  const AddItemToCart = (name, price) => {
    const productsOnCart = getProductsOnCart()
    if (productsOnCart) {
      if (productsOnCart.some(product => product.prodName === name)) {
        increaseQtd(productsOnCart, name)
        const CartCount = getProductsOnCart()
        setState({ ...state, cartCount: CartCount.length })
      } else {
        addNewProduct(productsOnCart, name, price)
        const CartCount = getProductsOnCart()
        setState({ ...state, cartCount: CartCount.length })
      }
    } else {
      addFirstProduct(name, price)
      const CartCount = getProductsOnCart()
      setState({ ...state, cartCount: CartCount.length })
    }
  }

  const singleProducts = fetchedProducts.map((product, index) => {
    return (
      <ProductCard
        key={index}
        name={product.name}
        price={product.price}
        picture={product.picture}
        clicked={() => AddItemToCart(product.name, product.price)}
      />
    )
  })

  return (
    <>
      <S.SearchContainer>
        <S.Text>Escontre seu produto</S.Text>
        <S.FormContainer>
          <S.InputSearch
            onKeyDown={e => {
              onPressEnter(e)
            }}
            onChange={e => onChangeHandler(e)}
            value={SearchWord}
            placeholder="Pesquisar..."
          />
          <S.ButtonSeach onClick={() => SearchProduct()} />
        </S.FormContainer>
      </S.SearchContainer>
      <S.Container>{singleProducts}</S.Container>
    </>
  )
}

export default Products
