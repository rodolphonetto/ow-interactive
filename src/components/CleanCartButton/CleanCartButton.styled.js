import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  cursor: pointer;
  font-size: 1.6rem;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #434343;
  ${media.lessThan("850px")`
  justify-self: center;
`}
`
export const Icon = styled.img`
  max-width: 2rem;
  margin-right: 1rem;
`
