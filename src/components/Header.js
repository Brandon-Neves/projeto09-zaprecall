import logo from '../assets/img/logo.png'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <h1>ZapRecall</h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 35px 0 18px 0;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 400;
    font-size: 36px;
    font-style: normal;
    line-height: 45px;
    color: #fff;
    margin-left: 20px;
    font-family: 'Righteous';
  }
  img {
    width: 50px;
  }
`
