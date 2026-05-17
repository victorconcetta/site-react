import styled from 'styled-components'

export const SocialBar = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 99;
  border-radius: 12px 0 0 12px; 
  overflow: hidden;
  box-shadow: -3px 3px 10px rgba(0,0,0,0.2);
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  transition: 0.3s;

  img {
    width: 26px;
    height: 26px;
  }

  &.facebook  { background: #1876f2b9; }
  &.instagram { background: #e1306bc0; }
  &.whatsapp  { background: #25d365d8; }

  &:hover {
    width: 58px;
    filter: brightness(1.15);
  }
`