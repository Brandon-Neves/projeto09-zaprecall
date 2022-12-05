import React, { useState } from 'react'
import Deck from './Deck'
import TelaPrincipal from './TelaPrincipal'
import styled from 'styled-components'
import GlobalStyle from '../assets/css/GlobalStyle'

function App() {
  const [deck, setDeck] = useState(false)

  return (
    <AppContainer>
      <GlobalStyle />
      {deck ? (
        <Deck cards={cards} />
      ) : (
        <TelaPrincipal resultadoDeck={() => setDeck(true)} />
      )}
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #fb6b6b;
  padding-bottom: 190px;
  flex-direction: column;
  align-items: center;
`
const cards = [
  {
    pergunta: 'O que é JSX?',
    resposta: 'Uma extensão da linguagem JavaScript'
  },
  {
    pergunta: 'O React é __',
    resposta: 'Uma biblioteca JavaScript para construção de interfaces'
  },
  { pergunta: 'Componentes devem iniciar com __', resposta: 'Letra maiúscula' },
  { pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
  {
    pergunta: 'O ReactDOM nos ajuda __',
    resposta: 'Interagindo com a DOM para colocar componentes React na mesma'
  },
  {
    pergunta: 'Usamos o npm para __',
    resposta: 'Gerenciar os pacotes necessários e suas dependências'
  },
  {
    pergunta: 'Usamos props para __',
    resposta: 'Passar diferentes informações para componentes'
  },
  {
    pergunta: 'Usamos estado (state) para __',
    resposta:
      'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
  }
]
