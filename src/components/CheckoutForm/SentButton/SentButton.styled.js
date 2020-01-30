import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.button`
  cursor: pointer;
  padding: 2rem 6rem;
  max-height: 6rem;
  max-width: 35rem;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: ${props => (props.finish ? "#8e36b7" : "#CFCFCF")};
  color: ${props => (props.finish ? "white" : "#434343")};
  margin-left: ${props => (props.finish ? "1rem" : "0")};
  grid-column: 2;
  justify-self: end;
  ${media.lessThan("1200px")`
  grid-row: 3;
  grid-column: 1;
`}
`
