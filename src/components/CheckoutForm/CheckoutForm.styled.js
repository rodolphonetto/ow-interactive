import styled from "styled-components"
import media from "styled-media-query"

import { Form, Field, ErrorMessage } from "formik"

export const Container = styled(Form)`
  visibility: ${props => (props.visible ? "hidden" : "visible")};
  grid-column: 2 / 12;
  margin-top: 15rem;
  min-height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
  ${media.lessThan("1200px")`
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 3fr 1fr;
  grid-column: 4 / 10;
`}
  ${media.lessThan("990px")`
  grid-column: 3 / 9;
`}
  ${media.lessThan("900px")`
  grid-column: 2 / 8;
`}
  ${media.lessThan("800px")`
  grid-column: 1 / -1;
  padding: 0 4rem;
`}
`

export const FieldsContainer = styled.div`
  ${media.lessThan("1200px")`
  grid-row: ${props => (props.left ? "2" : "1")};
`}
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

export const LineInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan("550px")`
  flex-direction: column;
`}
`

export const InputLabel = styled.label`
  display: block;
  color: #434343;
  font-size: 1.8rem;
`

export const InputField = styled(Field)`
  padding: 0.5rem 1rem;
  width: ${props => (props.half ? "20rem" : "50rem")};
  border: 1px solid #909090;
  font-size: 1.8rem;
  ${media.lessThan("550px")`
  width: ${props => (props.half ? "20rem" : "30rem")};
`}
`
export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 1.2rem;
`
