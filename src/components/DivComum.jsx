import * as S from './DivComum.styles.jsx'

function DivComum({ children, titulo, className, style }) {
  return (
    <S.Container className={className} style={style}>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}

export default DivComum