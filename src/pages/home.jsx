
import * as S from './home.styles.jsx'
import DivComum from '../components/DivComum.jsx'

function Home() {
  return (
<div className="Subpagina">
  <S.Container>
    
 <DivComum titulo="Título">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </DivComum >

 <DivComum titulo="Título">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </DivComum >
 <DivComum titulo="Título">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </DivComum >
  </S.Container>
  </div>
  )
}

export default Home