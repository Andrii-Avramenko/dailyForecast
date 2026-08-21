import React, { useState, useRef } from "react";
import {
  NewsSection,
  Container,
  MainTitle,
  NewsGrid,
  Card,
  ImageWrapper,
  CardImage,
  CardTitle,
  SeeMoreButton,
} from "./News.styled";

const ALL_PET_NEWS = [
  {
    id: 1,
    title: "Rescue pups pose as ghosts in festive photo shoot",
    urlToImage:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 2,
    title: "Cat interrupts morning coffee on sunny Washington morning",
    urlToImage:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 3,
    title: "New study finds dogs pay more attention to women",
    urlToImage:
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 4,
    title: "Petting dogs gives health benefit, even if they are not yours",
    urlToImage:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 5,
    title: "How playing fetch improves dog cognitive agility and mood",
    urlToImage:
      "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 6,
    title: "Fluffy companions bring warmth and comfort to daily routines",
    urlToImage:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 7,
    title: "Understanding pet body language for better daily connection",
    urlToImage:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
  {
    id: 8,
    title: "Exploring outdoors: Safe adventures with your favorite animals",
    urlToImage:
      "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "#",
  },
];

export const News = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionTitleRef = useRef(null);

  const smoothScrollTo = (targetElement, duration = 800) => {
    if (!targetElement) return;

    const offset = 20;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleToggle = () => {
    if (isExpanded) {
      smoothScrollTo(sectionTitleRef.current, 800);
    }
    setIsExpanded((prev) => !prev);
  };

  const visibleArticles = isExpanded ? ALL_PET_NEWS : ALL_PET_NEWS.slice(0, 4);

  return (
    <NewsSection id="news">
      <Container>
        <MainTitle ref={sectionTitleRef}>Interacting with our pets</MainTitle>

        <NewsGrid>
          {visibleArticles.map((item) => (
            <Card
              key={item.id}
              href={item.url !== "#" ? item.url : undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageWrapper>
                <CardImage
                  src={item.urlToImage}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageWrapper>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          ))}
        </NewsGrid>

        <SeeMoreButton onClick={handleToggle}>
          {isExpanded ? "Show less" : "See more"}
        </SeeMoreButton>
      </Container>
    </NewsSection>
  );
};

export default News;
