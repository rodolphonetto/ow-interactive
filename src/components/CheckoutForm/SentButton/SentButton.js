/**
 * Componente gera o botão do checkout.
 * @name SentButton
 * @component
 * @param {boolean} finish true/false para definir tipo do botão
 * @returns {function} Se true botão tipo finish (roxo) se false botão comum (cinza)
 */

import React from "react"
import * as S from "./SentButton.styled"

const SentButton = ({ finish, children }) => {
  return (
    <S.Container type="submit" finish={finish}>
      {children}
    </S.Container>
  )
}

export default SentButton
