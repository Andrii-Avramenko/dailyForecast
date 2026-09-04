import { useState, useEffect } from "react";
import { getNewsArticles } from "../../services/newsApi";
import {
  NewsSection,
  SectionTitle,
  NewsGrid,
  NewsCard,
  ImageWrapper,
  ImageLink,
  CardImage,
  CardTitle,
  ButtonGroup,
  SeeMoreButton,
  CollapseButton,
} from "./News.styled";

import FALLBACK_IMG from '../../assets/FallbackImage.jpg'

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const newArticles = await getNewsArticles(page, 4);

      if (page === 1) {
        setArticles(newArticles);
      } else {
        setArticles((prev) => {
          const existingTitles = new Set(prev.map((item) => item.title));
          const uniqueNewArticles = newArticles.filter(
            (item) => !existingTitles.has(item.title)
          );
          return [...prev, ...uniqueNewArticles];
        });
      }

      setLoading(false);
    };

    fetchNews();
  }, [page]);

  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleCollapse = () => {
    setPage(1);
    const section = document.getElementById("news");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NewsSection id="news">
      <SectionTitle>Interacting with our pets</SectionTitle>

      <NewsGrid>
        {articles.map((article, index) => (
          <NewsCard key={`${article.url || article.title}-${index}`}>
            <ImageWrapper>
              <ImageLink
                href={article.urlToImage || FALLBACK_IMG}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImage
                  src={article.urlToImage || FALLBACK_IMG}
                  alt={article.title || "Pet news"}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMG;
                    if (e.target.parentElement) {
                      e.target.parentElement.href = FALLBACK_IMG;
                    }
                  }}
                />
              </ImageLink>
            </ImageWrapper>

            <CardTitle>{article.title}</CardTitle>
          </NewsCard>
        ))}
      </NewsGrid>

      <ButtonGroup>
        {articles.length < 20 && (
          <SeeMoreButton
            type="button"
            onClick={handleSeeMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "See more"}
          </SeeMoreButton>
        )}

        {articles.length > 4 && (
          <CollapseButton type="button" onClick={handleCollapse}>
            Collapse
          </CollapseButton>
        )}
      </ButtonGroup>
    </NewsSection>
  );
};

export default News;
