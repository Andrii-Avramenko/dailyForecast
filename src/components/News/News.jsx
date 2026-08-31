import { useState, useEffect } from "react";
import { getNewsArticles } from "../../services/newsApi";
import {
  NewsSection,
  NewsTitle,
  NewsList,
  NewsCard,
  NewsImage,
  ArticleTitle,
  SeeMoreButton,
} from "./News.styled";

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getNewsArticles(1, 4);
        setArticles(data);
      } catch (err) {
        setError(err.message || "Не вдалося завантажити новини");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialNews();
  }, []);

  
  const handleToggle = async () => {
    if (isExpanded) {
      
      setArticles((prev) => prev.slice(0, 4));
      setIsExpanded(false);
    } else {
     
      try {
        setIsLoading(true);
        const newArticles = await getNewsArticles(2, 4);
        setArticles((prev) => [...prev, ...newArticles]);
        setIsExpanded(true);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading && articles.length === 0) return <p>Завантаження новин...</p>;
  if (error && articles.length === 0)
    return <p style={{ color: "red" }}>Помилка: {error}</p>;

  return (
    <NewsSection>
      <NewsTitle>Interacting with our pets</NewsTitle>

      <NewsList>
        {articles.map((item) => (
          <NewsCard key={item.id}>
            <NewsImage src={item.webformatURL} alt={item.tags} />
            <ArticleTitle>{item.tags}</ArticleTitle>
          </NewsCard>
        ))}
      </NewsList>

      <SeeMoreButton onClick={handleToggle} disabled={isLoading}>
        {isLoading ? "Loading..." : isExpanded ? "Show less" : "See more"}
      </SeeMoreButton>
    </NewsSection>
  );
};
export default News;
