import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 80%;

 @media (max-width: 900px) {
    width: 95%;

  }
`;

export const Card = styled.div`
    flex: 1;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 10px;
`;

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;