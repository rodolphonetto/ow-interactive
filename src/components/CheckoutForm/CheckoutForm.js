/**
 * Componente gera o formulario do checkout com formik e validação Yup.
 * @name CheckoutForm
 * @component
 * @returns {function} Formulário checkout completo
 */

import React, { useState } from "react"

import axios from "axios"

import { Formik } from "formik"
import { validationSchema } from "../../services/CheckoutValidation"

import * as S from "./CheckoutForm.styled"

import SucessModal from "../SuccessModal/SuccessModal"
import SentButton from "./SentButton/SentButton"

const CheckoutForm = () => {
  const [Modal, SetModal] = useState(false)
  const [Inputs, SetInputs] = useState({
    nome: "",
    email: "",
    cpf: "",
    data: "",
    telefone: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: ""
  })

  const Handle = event => {
    event.persist()
    SetInputs(Inputs => ({
      ...Inputs,
      [event.target.name]: event.target.value
    }))
  }

  /**
   * Função busca de endereço.
   * @name deleteProduct
   * @param {object} evento Evento que dispara ao sair do campo, podendo pegar o target.value necessário
   * @returns {object} Endereço completo
   */
  const getEndereco = async e => {
    const cep = e.target.value
    const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    SetInputs(Inputs => ({
      ...Inputs,
      logradouro: endereco.data.logradouro,
      bairro: endereco.data.bairro,
      cidade: endereco.data.localidade,
      estado: endereco.data.uf
    }))
  }

  return (
    <>
      <SucessModal visible={Modal} />
      <Formik
        initialValues={{
          nome: Inputs.nome,
          email: Inputs.email,
          cpf: Inputs.cpf,
          data: Inputs.data,
          telefone: Inputs.telefone,
          cep: Inputs.cep,
          complemento: Inputs.complemento,
          numero: Inputs.numero,
          logradouro: Inputs.logradouro,
          bairro: Inputs.bairro,
          cidade: Inputs.cidade,
          estado: Inputs.estado
        }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={values => {
          SetModal(true)
          setSubmitting(false)
        }}
      >
        {() => (
          <S.Container>
            <S.FieldsContainer>
              <S.InputContainer>
                <S.InputLabel>Nome*</S.InputLabel>
                <S.InputField
                  type="text"
                  name="nome"
                  onChange={e => Handle(e)}
                />
                <S.Error name="nome" component="div" />
              </S.InputContainer>
              <S.InputContainer>
                <S.InputLabel>Email*</S.InputLabel>
                <S.InputField
                  type="text"
                  name="email"
                  onChange={e => Handle(e)}
                />
                <S.Error name="email" component="div" />
              </S.InputContainer>
              <S.InputContainer>
                <S.InputLabel>CPF*</S.InputLabel>
                <S.InputField
                  type="text"
                  name="cpf"
                  onChange={e => Handle(e)}
                />
                <S.Error name="cpf" component="div" />
              </S.InputContainer>
              <S.LineInputsContainer>
                <S.InputContainer>
                  <S.InputLabel>Data Nascimento*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="data"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="data" component="div" />
                </S.InputContainer>
                <S.InputContainer>
                  <S.InputLabel>Telefone*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="telefone"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="telefone" component="div" />
                </S.InputContainer>
              </S.LineInputsContainer>
            </S.FieldsContainer>
            <S.FieldsContainer>
              <S.InputContainer>
                <S.InputLabel>CEP*</S.InputLabel>
                <S.InputField
                  type="text"
                  name="cep"
                  onChange={e => Handle(e)}
                  onBlur={e => getEndereco(e)}
                />
                <S.Error name="cep" component="div" />
              </S.InputContainer>
              <S.LineInputsContainer>
                <S.InputContainer>
                  <S.InputLabel>Endereço*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="logradouro"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="logradouro" component="div" />
                </S.InputContainer>
                <S.InputContainer>
                  <S.InputLabel>Numero*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="numero"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="numero" component="div" />
                </S.InputContainer>
              </S.LineInputsContainer>
              <S.LineInputsContainer>
                <S.InputContainer>
                  <S.InputLabel>Complemento</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="complemento"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="complemento" component="div" />
                </S.InputContainer>
                <S.InputContainer>
                  <S.InputLabel>Bairro*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="bairro"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="bairro" component="div" />
                </S.InputContainer>
              </S.LineInputsContainer>
              <S.LineInputsContainer>
                <S.InputContainer>
                  <S.InputLabel>Cidade*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="cidade"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="cidade" component="div" />
                </S.InputContainer>
                <S.InputContainer>
                  <S.InputLabel>Estado*</S.InputLabel>
                  <S.InputField
                    half
                    type="text"
                    name="estado"
                    onChange={e => Handle(e)}
                  />
                  <S.Error name="estado" component="div" />
                </S.InputContainer>
              </S.LineInputsContainer>
            </S.FieldsContainer>
            <S.FieldsContainer></S.FieldsContainer>

            <SentButton finish type="submit">
              Concluir Compra
            </SentButton>
          </S.Container>
        )}
      </Formik>
    </>
  )
}

export default CheckoutForm
