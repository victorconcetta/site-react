import * as S from './menu.styles.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.png"

function MenuPrincipal() {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <S.Container>
        <S.DivLogo><Link to="/"><img src={logo} /></Link></S.DivLogo>
        <S.UlMenu>
          <S.LiMenu><Link to="/">Home</Link></S.LiMenu>
           <S.LinhaVer />
      <S.LiMenu><Link to="/sobre">Produtos</Link></S.LiMenu>
             <S.LinhaVer />
      <S.LiMenu><Link to="/contato">Ofertas</Link></S.LiMenu>
                   <S.LinhaVer />
      <S.LiMenu><Link to="/contato">Unidades</Link></S.LiMenu>
                         <S.LinhaVer />
      <S.LiMenu><Link to="/contato">Contato</Link></S.LiMenu>
        </S.UlMenu>

        <S.Hamburger onClick={() => setAberto(!aberto)}>
          <S.Linha />
          <S.Linha />
          <S.Linha />
        </S.Hamburger>
      </S.Container>

      {aberto && (
        <S.MenuMobile>
          <S.LiMenuMobile><Link to="/">Home</Link></S.LiMenuMobile>
          <S.LinhaHor />
            <S.LiMenuMobile><Link to="/sobre">Sobre</Link></S.LiMenuMobile>
            <S.LinhaHor />
      <S.LiMenuMobile><Link to="/contato">Contato</Link></S.LiMenuMobile>
        </S.MenuMobile>
      )}
    </>
  )
}

export default MenuPrincipal