import styled from "styled-components";

export const NewsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  height: fit-content; /* Секція стискається/розтягується разом з картками */
  transition: all 0.3s ease-in-out;
`;

export const NewsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 40px; /* Фіксований відступ 40px до першого ряду */
  text-align: left;
`;

export const NewsList = styled.ul`
  display: grid;
  /* Строго 4 колонки на десктопі або 2 на планшеті/мобільному (без 3-х колонок) */
  grid-template-columns: repeat(4, 270px);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 270px);
    justify-content: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 270px;
    justify-content: center;
  }
`;

export const NewsCard = styled.li`
  width: 270px;
  display: flex;
  flex-direction: column;
`;

export const NewsImage = styled.img`
  width: 270px;
  height: 208px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 12px;
`;

export const ArticleTitle = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: #333333;
  margin: 0;
  font-weight: 500;
`;

export const SeeMoreButton = styled.button`
  width: 138px;
  height: 40px;
  background-color: #ff9f66;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0894e;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
