import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.main`
  margin-top: 6rem;
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 6rem;
  justify-content: center;
  font-family: "Source Sans Pro", sans-serif;
  ${media.lessThan("1200px")`
  grid-column: 1 / -1;
  margin: 0 2rem; 
  margin-top: 6rem;
`}
  ${media.lessThan("850px")`
  grid-template-columns: repeat(2, 1fr);
`}
  ${media.lessThan("550px")`
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
`}
`

export const SearchContainer = styled.div`
  grid-column: 2 / 12;
  margin-top: 4rem;
  height: 8rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;
  font-family: "Source Sans Pro", sans-serif;
  ${media.lessThan("1200px")`
  grid-column: 1 / -1;
  margin: 0 2rem; 
  margin-top: 4rem;
`}
  ${media.lessThan("500px")`
  padding: 0rem 2rem;
`}
  ${media.lessThan("400px")`
  flex-direction: column;
  padding: 1rem 1rem;
  height: 10rem;
`}
`

export const Text = styled.span`
  color: #909090;
  font-size: 1.8rem;
  ${media.lessThan("800px")`
  font-size: 1.6rem;
`}
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const InputSearch = styled.input`
  padding: 1rem;
  border: 1px solid #909090;
  border-radius: 3px;
  width: 50rem;
  ${media.lessThan("800px")`
  width: 30rem;
`}
  ${media.lessThan("600px")`
  width: 20rem;
`}
`

export const ButtonSeach = styled.button`
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #8e36b7;
  background-image: url("../../images/ico-search.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 3.8rem;
  height: 3.8rem;
  position: absolute;
  right: 0;
`
