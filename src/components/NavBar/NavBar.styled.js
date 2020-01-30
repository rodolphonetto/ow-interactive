import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.nav`
  padding: 0 25%;
  height: 8rem;
  display: grid;
  grid-template-columns: 7fr 1fr 1fr;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  ${media.lessThan("1200px")`
  padding: 0 5%;
`}
`

export const Logo = styled.img`
  justify-self: flex-start;
`

export const Text = styled.span`
  color: #909090;
  font-size: 2rem;
  grid-column: 2;
  font-family: "Source Sans Pro", sans-serif;
  ${media.lessThan("400px")`
  display: none;
`}
`

export const CartContainer = styled.div`
  position: relative;
`

export const Cart = styled.img`
  grid-column: 3;
  width: 3rem;
`

export const ProductsNumber = styled.span`
  text-align: center;
  font-size: 1.4rem;
  width: 2rem;
  height: 2rem;
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  text-align: center;
  padding-top: 2px;
  font-family: "Source Sans Pro", sans-serif;
`
