import * as S from './Banner3Quadrados.styles.jsx'

const PLACEHOLDER = 'https://placehold.co/400x400?text=Imagem';

function Banner3Quadrados({ src1, src2, src3 }) {
    return (
        <S.Wrapper>
            <S.Card>
                <S.Imagem src={src1 || PLACEHOLDER} alt="imagem 1" />
            </S.Card>
            <S.Card>
                <S.Imagem src={src2 || PLACEHOLDER} alt="imagem 2" />
            </S.Card>
            <S.Card>
                <S.Imagem src={src3 || PLACEHOLDER} alt="imagem 3" />
            </S.Card>
        </S.Wrapper>
    );
}

export default Banner3Quadrados;