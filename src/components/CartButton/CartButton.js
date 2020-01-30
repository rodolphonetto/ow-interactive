/**
 * Componente gera os botões do carrinho.
 * @name CartButton
 * @component
 * @param {boolean} finish true/false para definir tipo do botão
 * @returns {function} Se true botão tipo finish (roxo) se false botão comum (cinza)
 */

import React from "react"
import * as S from "./CartButton.styled"

const CartButton = ({ finish, children }) => {
  return <S.Container finish={finish}>{children}</S.Container>
}

export default CartButton
