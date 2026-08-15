import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #ffb36c;
  width: 100%;
  min-height: 179px;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: flex-start;
  gap: 80px;
`;

export const Logo = styled.img`
  width: 90px;
  height: auto;
  object-fit: contain;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

export const AddressText = styled.address`
  font-style: normal;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
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

  &:hover {
    transform: scale(1.08);
  }
`;