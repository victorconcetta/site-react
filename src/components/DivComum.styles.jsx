import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
  width: 50vw;
  min-height: 300px;
  height: auto;
  border-radius: 30px;
  border: 15px solid #6b99b8;

    @media (max-width: 768px) {
 width: 90vw;
 border: 10px solid #6b99b8;
  }

`
export const DivComum = styled.div`
display: flex;
padding: 10px;
justify-content: center;
text-align: justify;

`
export const Titulo = styled.h2`
background: #6b99b8;
text-align: center;
width: 100%;
height: auto;
overflow: hidden;
`;





