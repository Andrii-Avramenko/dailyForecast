import styled from "styled-components";

export const NewsSection = styled.section`
<<<<<<< Updated upstream
  padding: 24px 0;
=======
  padding: 30px 0;
>>>>>>> Stashed changes
  background-color: #ffffff;
  font-family: "Montserrat", "Inter", -apple-system, BlinkMacSystemFont,
    sans-serif;

<<<<<<< Updated upstream
  @media screen and (min-width: 393px) {
    padding: 28px 0;
  }

  @media screen and (min-width: 834px) {
=======
  @media screen and (min-width: 768px) {
>>>>>>> Stashed changes
    padding: 40px 0;
  }

  @media screen and (min-width: 1200px) {
<<<<<<< Updated upstream
    padding: 48px 0;
=======
    padding: 50px 0;
>>>>>>> Stashed changes
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
<<<<<<< Updated upstream
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
=======
  padding: 0 15px;

  /* Mobile: 320-480px */
  @media screen and (min-width: 320px) {
    max-width: 480px;
  }

  /* Tablet: >768px */
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  /* Desktop: >1200px */
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 16px;
>>>>>>> Stashed changes
  }
`;

export const MainTitle = styled.h2`
<<<<<<< Updated upstream
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
=======
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: left;
  margin-bottom: 24px;
  font-family: inherit;

  @media screen and (min-width: 768px) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  gap: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 20px;
    margin-bottom: 32px;
=======
  gap: 20px 16px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 20px;
>>>>>>> Stashed changes
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
<<<<<<< Updated upstream
    gap: 24px 20px;
=======
    gap: 30px 20px;
>>>>>>> Stashed changes
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease;

<<<<<<< Updated upstream
  @media screen and (min-width: 834px) {
    &:hover {
      transform: translateY(-4px);
    }
=======
  &:hover {
    transform: translateY(-4px);
>>>>>>> Stashed changes
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
<<<<<<< Updated upstream
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
=======
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #f0f0f0;

  @media screen and (min-width: 768px) {
    height: 170px;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  font-size: 14px;
  font-weight: 500;
  color: #2b2b2b;
  line-height: 1.4;
=======
  font-size: 13px;
  font-weight: 500;
  color: #2b2b2b;
  line-height: 1.35;
>>>>>>> Stashed changes
  margin: 0;
  font-family: inherit;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
<<<<<<< Updated upstream

  @media screen and (min-width: 834px) {
    font-size: 13px;
  }
=======
>>>>>>> Stashed changes
`;

export const SeeMoreButton = styled.button`
  display: inline-block;
<<<<<<< Updated upstream
  padding: 10px 24px;
=======
  padding: 10px 28px;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    transform: scale(0.97);
  }

  @media screen and (min-width: 834px) {
    padding: 10px 28px;
=======
    transform: scale(0.98);
>>>>>>> Stashed changes
  }
`;
