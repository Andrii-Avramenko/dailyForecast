import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getNewsArticles } from "../../services/newsApi";

const NewsSection = styled.section`
  padding: 40px 20px;
  max-width: 1140px; /* 4 картки x 270px + 3 gap x 20px */
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #212121;
  margin-bottom: 40px; /* 40px від назви секції до першої картинки */
  text-align: left;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 20px; /* 20px між картками */
  margin-bottom: 40px; /* 40px від тексту під картинкою до кнопки */
  justify-content: start; /* Сітка вирівняна по лівому краю */

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 270px);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 270px);
  }
`;

const NewsCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 270px;
  background: transparent;
`;

const ImageWrapper = styled.div`
  width: 270px; /* Ширина картинки 270px */
  height: 208px; /* Висота картинки 208px */
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e2e8f0;
  margin-bottom: 20px; /* 20px від картинки до тексту під нею */
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CardTitle = styled.h3`
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

const SeeMoreButton = styled.button`
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
  margin: 0; /* Вирівняно по лівому краю */
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fca058;
  }
`;

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80";

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const data = await getNewsArticles(8);
      setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const handleToggleArticles = () => {
    if (visibleCount >= 8) {
      setVisibleCount(4);
      const section = document.getElementById("news");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setVisibleCount(8);
    }
  };

  if (loading) {
    return (
      <NewsSection id="news">
        <SectionTitle>Interacting with our pets</SectionTitle>
        <p>Завантаження новин про тварин...</p>
      </NewsSection>
    );
  }

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <NewsSection id="news">
      <SectionTitle>Interacting with our pets</SectionTitle>

      <NewsGrid>
        {visibleArticles.map((article, index) => (
          <NewsCard key={`${article.title}-${index}`}>
            <ImageWrapper>
              <CardImage
                src={article.urlToImage || FALLBACK_IMAGE}
                alt={article.title || "Pet news"}
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                }}
              />
            </ImageWrapper>

            <CardTitle>{article.title}</CardTitle>
          </NewsCard>
        ))}
      </NewsGrid>

      <SeeMoreButton type="button" onClick={handleToggleArticles}>
        {visibleCount >= 8 ? "Collapse" : "See more"}
      </SeeMoreButton>
    </NewsSection>
  );
};

export default News;
