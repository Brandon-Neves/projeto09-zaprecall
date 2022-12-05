import cores from '../assets/css/cores'
import Icone from './Icone'
import styled from 'styled-components'
import seta from '../assets/img/seta_virar.png'

export default function Flashcard({
  numero,
  abrirCard,
  estado,
  cardAberto,
  pergunta,
  resposta,
  virarCard,
  virar,
  respostaPerguntas
}) {
  const { amarelo, vermelho, cinza, verde } = cores

  function abrir() {
    if (estado === 'sem estado') {
      abrirCard()
    }
  }

  function escolherCor() {
    switch (estado) {
      case 'erro':
        return vermelho
      case 'quase':
        return amarelo
      case 'certo':
        return verde
      default:
        return cinza
    }
  }
  return (
    <>
      {cardAberto ? (
        <CartaoAberto>
          <p>
            {virar ? (
              <>
                {resposta}
                <ButtonContainer>
                  <Buttons
                    cor={vermelho}
                    onClick={() => respostaPerguntas('erro')}
                  >
                    Zap!
                  </Buttons>
                  <Buttons
                    cor={amarelo}
                    onClick={() => respostaPerguntas('quase')}
                  >
                    Quase não lembrei
                  </Buttons>
                  <Buttons
                    cor={verde}
                    onClick={() => respostaPerguntas('certo')}
                  >
                    Zap!
                  </Buttons>
                </ButtonContainer>
              </>
            ) : (
              pergunta
            )}
          </p>
          {!virar && <img onClick={virarCard} src={seta} />}
        </CartaoAberto>
      ) : (
        <CartaoFechado onClick={abrir}>
          <TextoCartaoFechado cor={escolherCor()} estado={estado}>
            Pergunta {numero}
          </TextoCartaoFechado>
          <Icone estado={estado} />
        </CartaoFechado>
      )}
    </>
  )
}

const CartaoAberto = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  font-family: 'Recursive';
  font-style: normal;
  font-size: 18px;
  font-weight: 400px;
  line-height: 22px;
  margin: 12px;
  background: #ffffd5;
  color: #333;
  width: 300px;
  min-height: 100px;
  padding: 14px;
  margin: 12px;
  img {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`

const CartaoFechado = styled.div`
  height: 35px;
  width: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
  padding: 14px;
  color: #fff;
`

const TextoCartaoFechado = styled.div`
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 17px;
  font-family: 'Recursive';
  color: ${props => props.cores};
  text-decoration: ${props =>
    props.estado === 'sem estado' ? 'none' : 'line-through'};
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 10px 0px 10px;
  width: 95%;
  gap: 0 10px;
  h1 {
    text-align: center;
  }
`
const Buttons = styled.button`
  font-family: 'Recursive';
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
