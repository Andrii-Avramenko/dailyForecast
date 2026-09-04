import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${props => props.theme.colors.accent};
  width: 100%;

  box-sizing: border-box;
  min-height: 212px; 
  display: flex;
  align-items: center;
  padding: 30px 0;

  @media (min-width: 1024px) {
    min-height: 179px;
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column; 
  text-align: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction:row;
    padding: 0 40px;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    flex-direction: row; 
    align-items: flex-start;
    text-align: left;
    gap: 80px;
    padding: 0 80px;
  }
`;

export const LogoLink = styled.a`
  width: 90px;
  height: auto;
  object-fit: contain;
`

export const Logo = styled.img`
 display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Box = styled.div`
  display: flex;
  column-gap: 200px;
  justify-content: flex-start;

  @media(min-width:768px){
    column-gap:100px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  


  @media (min-width: 1024px) {
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.black};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AddressText = styled.address`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.4;
  color: ${props => props.theme.colors.black};

  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 16px; 
`;

export const SocialItem = styled.li`
  display: flex;
`;

export const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;
  
  @media (hover: hover) {
    &:hover {
      transform: scale(1.08);
    }
  }
`;
