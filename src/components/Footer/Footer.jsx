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
        <Logo src="../Footer/Images/logo.png" alt="24/7 Forecast" />

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
                <SocialIcon src="../Footer/Images/Instagram.png" alt="Instagram" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src="./Images/Facebook.png" alt="Facebook" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src="./Images/whatsapp.png" alt="WhatsApp" />
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