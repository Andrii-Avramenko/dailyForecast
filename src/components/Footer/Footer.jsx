import {logo} from '../Footer/Images/logo.png'
import {whatsapp} from './Images/whatsapp.png'
import {Instagram} from './Images/Instagram.png'
import {Facebook} from './Images/Facebook.png'
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
        <Logo src={logo} alt="24/7 Forecast" />

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
                <SocialIcon src={Instagram} alt="Instagram" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src={Facebook} alt="Facebook" />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#"  rel="">
                <SocialIcon src={whatsapp} alt="WhatsApp" />
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