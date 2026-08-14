import InstaImg from "../../assets/footer/Instagram.svg"
import FacebookImg from '../../assets/footer/Facebook.svg'
import WhatImg from '../../assets/footer/whatsapp .svg'

import {
    Container,
    ContentWrapper,
    Logo,
    Section,
    Title,
    AddressText,
    SocialList,
    SocialItem,
    SocialIcon,
  } from './Footer.styled';

function Footer() {
    return (
        <>
    <Container>
      <ContentWrapper>
        <Logo src="src/assets/logo.webp"  alt="24/7 Forecast" />

        <Section>
          <Title>Address</Title>
          <AddressText>
            Svobody str. 35<br />
            Kyiv<br />
            Ukraine
          </AddressText>
        </Section>

        <Section>
          <Title>Contact us</Title>
          <SocialList>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src={InstaImg}  alt="Instagram" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src={FacebookImg} alt="Facebook" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src={WhatImg} alt="WhatsApp" />
              </a>
            </SocialItem>
          </SocialList>
        </Section>
      </ContentWrapper>
    </Container>
        </>
    )
}

export default Footer