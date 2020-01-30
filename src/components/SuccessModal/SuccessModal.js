/**
 * Componente que gera o modal de sucesso
 * @name SuccessModal
 * @component
 * @param {boolean} visible Se está visivel ou não
 * @returns {function} Componente com o modal de sucesso
 */

import React from "react"
import Link from "next/link"

import * as S from "./SuccessModal.styled"

const SuccessModal = ({ visible }) => {
  return (
    <S.Container visible={visible}>
      <S.ModalContainer>
        <S.Icon src="../../images/sucessIcon.svg" />
        <S.TextMessage>Seu Cadastro foi solicitado com sucesso!</S.TextMessage>
        <Link href="/">
          <a>
            <S.BackButtonContainer>
              <S.IconBackButton src="../../images/left-arrow.svg" />
              <S.TextBackButton>Voltar para Home</S.TextBackButton>
            </S.BackButtonContainer>
          </a>
        </Link>
        <Link href="/">
          <a>
            <S.CloseButton>X</S.CloseButton>
          </a>
        </Link>
      </S.ModalContainer>
    </S.Container>
  )
}

export default SuccessModal
