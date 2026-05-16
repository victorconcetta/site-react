import * as S from './BannerFull.styles.jsx'

function BannerFull({ children, titulo, style }) {
  return (
    <S.Container style={style}>
      {titulo && <S.Titulo>{titulo}</S.Titulo>}

      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}

export default BannerFull