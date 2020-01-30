import * as Yup from "yup"

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
const phoneRegExp = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
const dataRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
const CEPRegex = /[0-9]{5}-[\d]{3}/
const NumberRegex = /[0-9]/

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required("O Campo nome não pode ficar em branco"),
  email: Yup.string()
    .email("Preencha um e-mail valido")
    .required("O campo e-mail não pode ficar em branco"),
  cpf: Yup.string()
    .matches(cpfRegex, "Digite um CPF valido 123.123.123-12")
    .required("O campo CPF não pode ficar em branco"),
  telefone: Yup.string()
    .matches(phoneRegExp, "Digite um telefone valido, DDD Telefone")
    .required("O campo telefone não pode ficar em branco"),
  data: Yup.string()
    .matches(dataRegex, "Digite uma data valida, dd/mm/aaaa")
    .required("O campo data não pode ficar em branco"),
  cep: Yup.string()
    .matches(CEPRegex, "Digite um CEP valido, 12123-000")
    .required("O campo CEP não pode ficar em branco"),
  logradouro: Yup.string().required(
    "O campo endereço não pode ficar em branco"
  ),
  numero: Yup.string()
    .matches(NumberRegex, "Digite apenas numeros")
    .required("O campo numero não pode ficar em branco"),
  bairro: Yup.string().required("O campo bairro não pode ficar em branco"),
  cidade: Yup.string().required("O campo cidade não pode ficar em branco"),
  estado: Yup.string().required("O campo estado não pode ficar em branco")
})
