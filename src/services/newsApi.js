import axios from "axios";

const API_KEY = "6f8db570f3fb4b2b893eac6c244b2cee";
const BASE_URL = "https://newsapi.org/v2/everything";

export const getNewsArticles = async (page = 1, pageSize = 4) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        qInTitle: "dog OR cat OR pet OR puppy OR kitten OR animal",
        pageSize: pageSize * 2,
        page,
        apiKey: API_KEY,
        language: "en",
        sortBy: "publishedAt",
      },
    });

    if (response.data && response.data.articles) {
      return response.data.articles
        .filter((article) => {
          if (!article.title || article.title === "[Removed]") return false;
          if (!article.urlToImage || typeof article.urlToImage !== "string")
            return false;

          const imgUrl = article.urlToImage.toLowerCase();
          const isBadImage =
            imgUrl.includes(".svg") ||
            imgUrl.includes("placeholder") ||
            imgUrl.includes("logo") ||
            imgUrl.includes("avatar") ||
            imgUrl.includes("default");

          return !isBadImage;
        })
        .slice(0, pageSize)
        .map((a) => ({
          title: a.title,
          url: a.url,
          urlToImage: a.urlToImage,
        }));
    }
    return [];
  } catch (error) {
    console.warn("NewsAPI error:", error);
    return [];
  }
};
