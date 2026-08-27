import React, { useEffect, useState } from "react";
import { fetchPetNews } from "/src/services/newsApi.js";
import * as S from "./News.styled";

const MOCK_NEWS = [
  {
    title: "Rescue pups pose as ghosts in festive photo shoot",
    urlToImage:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
  },
  {
    title: "Cat interrupts morning coffee on sunny Washington morning",
    urlToImage:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  },
  {
    title: "New study finds dogs pay more attention to women",
    urlToImage:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
  },
  {
    title: "Petting dogs gives health benefit, even if they are not yours",
    urlToImage:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  },
  {
    title: "Friendly cat enjoying sunny afternoon on the porch",
    urlToImage:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
  },
  {
    title: "Playful golden retriever running in the park",
    urlToImage:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1552053831-71594a27632d",
  },
  {
    title: "Cute kitten playing with a colorful ball of yarn",
    urlToImage:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
  },
  {
    title: "Happy puppy sitting on fresh green grass",
    urlToImage:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=500&q=80",
    url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
  },
];

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchPetNews();

      if (data && data.length >= 4) {
        const cleanData = data
          .filter((item) => item.urlToImage && item.title)
          .filter(
            (item, index, self) =>
              index === self.findIndex((a) => a.url === item.url)
          );
        setArticles(cleanData);
      } else {
        setArticles(MOCK_NEWS);
      }
      setLoading(false);
    };

    getNews();
  }, []);

  const handleToggle = () => {
    setVisibleCount((prev) => (prev === 4 ? 8 : 4));
  };

  if (loading) {
    return <S.Section>Loading...</S.Section>;
  }

  return (
    <S.Section>
      <S.Title>Interacting with our pets</S.Title>

      <S.Grid>
        {articles.slice(0, visibleCount).map((item, index) => (
          <S.Card
            key={`${item.url}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Image src={item.urlToImage} alt={item.title} />
            <S.CardTitle>{item.title}</S.CardTitle>
          </S.Card>
        ))}
      </S.Grid>

      <S.Button onClick={handleToggle}>
        {visibleCount === 4 ? "See more" : "Show less"}
      </S.Button>
    </S.Section>
  );
};

export default News;
