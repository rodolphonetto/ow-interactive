import styled from "styled-components"

export const Container = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110%;
  background-color: #00000099;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`

export const ModalContainer = styled.div`
  height: 35rem;
  width: 55rem;
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  position: relative;
`
export const Icon = styled.img`
  width: 8rem;
`
export const TextMessage = styled.span`
  margin-top: 4rem;
  color: #434343;
  font-size: 2.4rem;
`

export const BackButtonContainer = styled.div`
  cursor: pointer;
  margin-top: 4rem;
  display: flex;
  align-content: center;
  justify-content: space-around;
`

export const TextBackButton = styled.span`
  color: #8e36b7;
  font-size: 1.6rem;
  text-transform: uppercase;
`
export const IconBackButton = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #434343;
`
