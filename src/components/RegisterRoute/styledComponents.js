import styled from 'styled-components'

export const Container = styled.div``

export const MainContainer = styled(Container)`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EditorContainer = styled(Container)`
  background-color: #1b1c22;
  display: flex;
  padding: 20px;
`
export const LeftContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
`

export const Heading = styled.h1`
  color: white;
`

export const Image = styled.img`
  width: 90%;
`

export const RightContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 50%;
`
export const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 10px;
  margin: 0px;
  border-bottom: 1px solid white;
`

export const ListItem = styled.li``
export const Button = styled.button`
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border-width: 0px;
`
export const TextAreaContainer = styled(Container)`
  width: 100%;
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  background-color: transparent;
  width: 100%;
  height: 86%;
  color: white;
  //   margin: 0px;
  padding: 10px;
  font-family: 'Roboto';
`
