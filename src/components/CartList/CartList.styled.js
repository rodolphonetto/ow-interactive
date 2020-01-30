import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  grid-column: 1 / -1;
  margin-top: 8rem;
  font-family: "Source Sans Pro", sans-serif;
  min-height: 69vh;
`

export const ListItem = styled.div`
  height: 15rem;
  padding: 1rem 0;
  border-bottom: 1px solid #aaaaaa;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  ${media.lessThan("1200px")`
  height: 100%;
`}
  ${media.lessThan("500px")`
  display: none;
`}
`

export const ProductItem = styled.div`
  height: 15rem;
  padding: 1rem 0;
  border-bottom: 1px solid #aaaaaa;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  ${media.lessThan("500px")`
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 2fr 2fr;
  grid-column-gap: 1rem;
`}
`

export const Title = styled.span`
  display: block;
  color: ${props => (props.total ? "#8e36b7" : "#434343")};
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-right: ${props => (props.totalLabel ? "2rem" : 0)};
  ${media.lessThan("800px")`
  font-size: 1.4rem;
`}
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  ${media.lessThan("500px")`
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: 1fr 4fr;
`}
`

export const DeleteButton = styled.img`
  cursor: pointer;
  grid-column: 1;
  grid-row: span 2;
  align-self: center;
  justify-self: center;
  max-width: 3rem;
`

export const ProductCategory = styled.span`
  grid-column: 2;
  font-size: 1.4rem;
  color: #8e36b7;
  font-weight: bold;
  ${media.lessThan("800px")`
  font-size: 1.1rem;
`}
`

export const ProductName = styled.span`
  grid-column: 2;
  color: #434343;
  font-weight: bold;
  font-size: 1.4rem;
  ${media.lessThan("800px")`
  font-size: 1.2rem;
`}
`

export const QtdContainer = styled.div`
  height: 3rem;
  border: 1px solid black;
  ${media.lessThan("500px")`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  height: 6rem;
`}
`

export const QtdDecrease = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  width: 2.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  ${media.lessThan("500px")`
  font-size: 1rem;
  width: 2rem;

`}
`

export const QtdValue = styled.input`
  width: 4rem;
  height: 100%;
  text-align: center;
  border: none;
  border-right: 1px solid black;
  border-left: 1px solid black;
  ${media.lessThan("500px")`
  width: 2rem;
  font-size: 1rem;
  border: none;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

`}
`

export const QtdIncrease = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  width: 2.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  ${media.lessThan("500px")`
  font-size: 1rem;
  font-size: 1rem;
  width: 2rem;
`}
`

export const PriceContainer = styled.div`
  ${media.lessThan("500px")`
  grid-row: 2;
`}
`

export const UnPrice = styled.span`
  color: #434343;
  font-weight: bold;
  font-size: 1.6rem;
  ${media.lessThan("800px")`
  font-size: 1.2rem;
`}
`

export const TenTimesPrice = styled.span`
  color: #434343;
  font-size: 1.6rem;
  ${media.lessThan("800px")`
  font-size: 1.2rem;
`}
`

export const TotalsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 0;
  ${media.lessThan("1200px")`
  margin: 4rem 2rem;
`}
`

export const FooterContainer = styled.div`
  border-top: 1px solid #aaaaaa;
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  margin: 4rem 0;
  ${media.lessThan("1200px")`
  margin: 4rem 2rem;
`}
  ${media.lessThan("850px")`
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
`}
`
export const LinkBox = styled.a`
  ${media.lessThan("850px")`
  grid-row: ${props => (props.finish ? "1" : "2")};
`}
`
