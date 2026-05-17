import styled from 'styled-components'
import cerca from '../assets/img/cerca.png'

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-height: 300px;
  background-color: var(--principal);
  background-image: url(${cerca});
 background-size: 400px;
  background-position: bottom;
  background-repeat: repeat-x;

  p {
    font-size: 20px;
  }
`
export const DivDraw = styled.div`
display: flex;
flex-direction: column;
width: 200px;

align-self: stretch;

svg{
  width: 100%;
 flex: 1;
  display: block;
  fill: var(--bg);
}
`;

