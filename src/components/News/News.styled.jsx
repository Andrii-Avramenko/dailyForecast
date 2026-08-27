import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 1200px; /* Прив'язка до ширини контейнера всієї сторінки */
  margin: 40px auto; /* Центрування секції */
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    padding: 0 40px; /* Симетричні відступи зліва та справа */
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  margin: 0 0 20px 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 колонки тягнуться на всю ширину */
    gap: 20px;
  }
`;

export const Card = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px; /* Більша висота для фото */
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    height: 160px;
  }

  @media (min-width: 1200px) {
    height: 150px; /* Збільшений розмір картинок під десктоп */
  }
`;

export const CardTitle = styled.h3`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #222222;
  margin: 0;
  text-align: left;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  background-color: #fca766;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f09552;
  }
`;
