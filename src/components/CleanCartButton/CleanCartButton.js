/**
 * Componente gera o botão de limpar carrinho.
 * @name CleanCartButton
 * @component
 * @param {function} clicked Função que executa a limpeza do carrinho
 * @returns {function} Botão para limpeza do carrinho
 */

import React from "react"
import * as S from "./CleanCartButton.styled"

const CleanCartButton = ({ clicked }) => {
  return (
    <S.Container onClick={() => clicked()}>
      <S.Icon src="../../images/garbage.svg" />
      Limpar carrinho
    </S.Container>
  )
}

export default CleanCartButton
