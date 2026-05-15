
import * as S from './home.styles.jsx'
import DivComum from '../components/DivComum.jsx'
import SwiperMod from '../components/SwiperMod.jsx'
import BannerFull from '../components/BannerFull.jsx'
import BannerImagemFull from '../components/BannerImagemFull.jsx'
import Banner3Quadrados from '../components/Banner3Quadrados.jsx'

function Home() {
  return (
    <>
      <SwiperMod />
<div className="Subpagina">
  <S.Container>

 <DivComum titulo="COMPONENTE BANNER FULL">
<p>EXMEPLO DE CARD DE INFORMACAO.</p><br /> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br /> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br /> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br /> 
  </DivComum >
<br />
  <BannerFull titulo="Contato">
<p>EXMEPLO DE CARD DE INFORMACAO.</p><br /> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br /> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br /> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br /> 
  </BannerFull>

<BannerImagemFull
    src="https://placehold.co/600x400/aaaaaa/ffffff?text=BannerImagemFull"
    legenda="COMPONENTE BANNER IMAGEM FULL"
/>
<br />
<Banner3Quadrados
    src1="https://placehold.co/400x400/aaaaaa/ffffff?text=Banner"
    src2="https://placehold.co/400x400/cccccc/ffffff?text=3"
    src3="https://placehold.co/400x400/aaaaaa/ffffff?text=Quadrados"
/>


 </S.Container>
  </div>
  </>
  )
}

export default Home