/**
 * Componente que gera o card de cada produto.
 * @name ProductCard
 * @component
 * @param {string} name Nome do produto
 * @param {string} price Preço do produto
 * @param {string} picture Foto do produto
 * @param {function} clicked Função que adiciona o produto ao carrinho
 * @returns {function} Componente com o card do produto
 */

import React from "react"
import * as S from "./ProductCard.styled"

const ProductCard = ({ name, price, picture, clicked }) => {
  return (
    <S.Container>
      <S.Image name={name} picture={picture} />
      <S.InfosBlock>
        <S.Category>Eletrônicos</S.Category>
        <S.Name>{name}</S.Name>
        <S.Description>
          Lorem ipsum dolor sit amet, cons ctetur adipiscing elit. Etiam pell
          sit amet, cons
        </S.Description>
        <S.Price>R$ {price}</S.Price>
      </S.InfosBlock>
      <S.BuyContainer>
        <S.BuyButton onClick={(name, price) => clicked(name, price)}>
          Adicionar ao carrinho
        </S.BuyButton>
      </S.BuyContainer>
    </S.Container>
  )
}

export default ProductCard
