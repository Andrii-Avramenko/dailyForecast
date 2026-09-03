import styled from "styled-components";

export const NewsSection = styled.section`
  padding: 40px 20px;
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #212121;
  margin-bottom: 40px;
  text-align: left;
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 20px;
  margin-bottom: 40px;
  justify-content: start;
`;

export const NewsCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 270px;
  background: transparent;
`;

export const ImageWrapper = styled.div`
  width: 270px;
  height: 208px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e2e8f0;
  margin-bottom: 20px;
`;

export const ImageLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: #212121;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
`;

export const SeeMoreButton = styled.button`
  background-color: #ffb074;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fca058;
  }

  &:disabled {
    background-color: #ffd8be;
    cursor: not-allowed;
  }
`;

export const CollapseButton = styled.button`
  background-color: transparent;
  color: #212121;
  border: 1px solid #ffb074;
  border-radius: 8px;
  padding: 10px 28px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    background-color: #fff0e5;
  }
`;
