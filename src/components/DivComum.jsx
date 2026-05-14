import * as S from './DivComum.styles.jsx'

function DivComum({ children, titulo }) {
  return (
    <S.Container>
      <S.Titulo>{titulo}</S.Titulo>
      <S.DivComum>
        {children}
      </S.DivComum>
    </S.Container>
  )
}

export default DivComum