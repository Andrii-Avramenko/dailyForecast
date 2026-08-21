import styled from "styled-components";

export const NewsSection = styled.section`
  padding: 24px 0;
  background-color: #ffffff;
  font-family: "Montserrat", "Inter", -apple-system, BlinkMacSystemFont,
    sans-serif;

  @media screen and (min-width: 393px) {
    padding: 28px 0;
  }

  @media screen and (min-width: 834px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 393px) {
    max-width: 393px;
    padding: 0 20px;
  }

  @media screen and (min-width: 834px) {
    max-width: 834px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 24px;
  }
`;

export const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: left;
  margin-bottom: 20px;
  font-family: inherit;

  @media screen and (min-width: 393px) {
    font-size: 20px;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 834px) {
    font-size: 22px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 20px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px 20px;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease;

  @media screen and (min-width: 834px) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #f4f4f4;

  @media screen and (min-width: 393px) {
    height: 215px;
  }

  @media screen and (min-width: 834px) {
    height: 220px;
  }

  @media screen and (min-width: 1200px) {
    height: 180px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #2b2b2b;
  line-height: 1.4;
  margin: 0;
  font-family: inherit;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-width: 834px) {
    font-size: 13px;
  }
`;

export const SeeMoreButton = styled.button`
  display: inline-block;
  padding: 10px 24px;
  background-color: #ffb074;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #ffa05a;
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 834px) {
    padding: 10px 28px;
  }
`;
