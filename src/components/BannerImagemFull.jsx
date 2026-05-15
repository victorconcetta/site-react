import * as S from './BannerImagemFull.styles.jsx'

function BannerImagemFull({ src, legenda }) {
    console.log('src:', src);
    return (
        <S.Wrapper>
            <S.Imagem src={src} alt={legenda || 'imagem'} />
            {legenda && <S.Legenda>{legenda}</S.Legenda>}
        </S.Wrapper>
    );
}

export default BannerImagemFull;