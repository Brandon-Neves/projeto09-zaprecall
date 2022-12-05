import certo from '../assets/img/icone_certo.png'
import erro from '../assets/img/icone_erro.png'
import quase from '../assets/img/icone_quase.png'
import setaPlay from '../assets/img/seta_play.png'

export default function Icone({ estado }) {
  return (
    <>
      {estado === 'sem estado' && <img src={setaPlay} />}
      {estado === 'certo' && <img src={certo} />}
      {estado === 'quase' && <img src={quase} />}
      {estado === 'erro' && <img src={erro} />}
    </>
  )
}
