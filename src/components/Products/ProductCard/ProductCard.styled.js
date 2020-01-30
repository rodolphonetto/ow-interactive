import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  height: 45rem;
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  font-family: "Source Sans Pro", sans-serif;
  ${media.lessThan("550px")`
  width: 60%;
  justify-self: center;
`}
  ${media.lessThan("450px")`
  width: 70%;
  justify-self: center;
`}
  ${media.lessThan("370px")`
  width: 80%;
  justify-self: center;
`}
  ${media.lessThan("300px")`
  width: 100%;
  justify-self: center;
`}
`

export const Image = styled.div`
  background-image: url(${props => props.picture});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 20rem;
  width: 65%;
`

export const InfosBlock = styled.div`
  width: 100%;
  padding: 2rem 2rem 0 2rem;
  display: grid;
  grid-template-rows: 0.5fr 2fr 1fr 1fr;
  height: 50%;
  border-bottom: 1px solid #aaaaaa;
`

export const Category = styled.span`
  font-size: 1.2rem;
  color: #8e36b7;
  font-weight: bold;
  ${media.lessThan("550px")`
  font-size: 1.1rem;
`}
`

export const Name = styled.span`
  color: #434343;
  font-weight: bold;
  font-size: 1.6rem;
  ${media.lessThan("550px")`
  font-size: 1.4rem;
`}
`
export const Description = styled.p`
  color: #909090;
  font-size: 1.2rem;
  ${media.lessThan("550px")`
  font-size: 1.1rem;
`}
`

export const Price = styled.span`
  margin: 1rem 0;
  color: #434343;
  font-weight: bold;
  font-size: 2rem;
`
export const BuyContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BuyButton = styled.button`
  width: 100%;
  height: 100%;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  background: none;
  color: #8e36b7;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: #8e36b7;
    color: white;
  }
`
