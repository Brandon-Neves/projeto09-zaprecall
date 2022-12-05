import styled from 'styled-components'
import React, { useState } from 'react'
import Header from './Header'
import Flashcard from './Flashcard'
import cores from '../assets/css/cores'

export default function Deck({ cards }) {
  const { vermelho, amarelo, verde } = cores

  const [abrir, setAbrir] = useState(null)
  const [virar, setVirar] = useState(null)
  const [resposta, setResposta] = useState([])

  function respostaPergunta(estado) {
    if (abrir !== null && abrir === virar) {
      const criarNovoArray = [...resposta, { i: abrir, estado: estado }]
      setResposta(criarNovoArray)
      setAbrir(null)
    }
  }

  function estadoCard(index) {
    const card = resposta.find(r => r.i === index)
    if (card !== null && card !== undefined) {
      return card.estado
    } else {
      return 'sem estado'
    }
  }

  return (
    <>
      <Header />

      {cards.map((card, index) => (
        <Flashcard
          abrirCard={() => setAbrir(index)}
          key={index}
          numero={index + 1}
          estado={estadoCard(index)}
          cardAberto={index === abrir}
          pergunta={card.pergunta}
          resposta={card.resposta}
          virarCard={() => setVirar(index)}
          virar={index === virar}
          respostaPerguntas={() => respostaPergunta(index)}
        />
      ))}

      <Footer>
        <div>
          <h1>
            {resposta.lenght} / {cards.lenght} Concluído
          </h1>
        </div>
      </Footer>
    </>
  )
}

const Footer = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 50px;
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  padding: 10px;
  font-size: 18px;
  font-family: 'Recursive';
  color: #333;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px;
  width: 80%;
  h1 {
    text-align: center;
  }
`

const Buttons = styled.button`
  font-family: 'Recursive';
  font-weight: 400;
  color: #fff;
  font-style: normal;
  line-height: 14px;
  font-size: 12px;
  display: flex;
  width: 90%;
  border-radius: 5px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${props => props.cor};
  border: 1px solid ${props => props.cor};
`
