import axios from "axios";

const API_KEY = "6f8db570f3fb4b2b893eac6c244b2cee";
const BASE_URL = "https://newsapi.org/v2/everything";

// Резервний пул новин ВИКЛЮЧНО про тварин
const PETS_ONLY_FALLBACK_POOL = [
  {
    title: "How to Build a Stronger Bond with Your Dog Today",
    url: "https://newsapi.org/article-1",
    urlToImage:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Understanding Cat Behavior: Tips for Feline Owners",
    url: "https://newsapi.org/article-2",
    urlToImage:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Essential Nutrition Advice for Growing Puppies and Kittens",
    url: "https://newsapi.org/article-3",
    urlToImage:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Creative Indoor Games to Keep Active Dogs Healthy",
    url: "https://newsapi.org/article-4",
    urlToImage:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rescue Pups Pose as Ghosts in Festive Halloween Shoot",
    url: "https://newsapi.org/article-5",
    urlToImage:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Curious Cat Interrupts Morning Coffee on Sunny Porch",
    url: "https://newsapi.org/article-6",
    urlToImage:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "New Study Finds Friendly Dogs Respond More to Gentle Voices",
    url: "https://newsapi.org/article-7",
    urlToImage:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Petting Rescue Dogs Offers Proven Health Benefits",
    url: "https://newsapi.org/article-8",
    urlToImage:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Top 10 Grooming Tips for Long-Haired Domestic Cats",
    url: "https://newsapi.org/article-9",
    urlToImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Why Positive Reinforcement Is Best for Dog Obedience",
    url: "https://newsapi.org/article-10",
    urlToImage:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "How to Prepare Your Living Room for a New Adopted Puppy",
    url: "https://newsapi.org/article-11",
    urlToImage:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Recognizing Early Signs of Stress in House Cats and Dogs",
    url: "https://newsapi.org/article-12",
    urlToImage:
      "https://images.unsplash.com/photo-1450778869186-39d32b810d48?auto=format&fit=crop&w=600&q=80",
  },
];

// Алгоритм випадкового перемішування
const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Список слів для перевірки, що новина присвячена саме тваринам
const PET_KEYWORDS = [
  "dog",
  "cat",
  "pet",
  "puppy",
  "kitten",
  "animal",
  "feline",
  "canine",
  "pup",
];

const isPetRelated = (title) => {
  if (!title) return false;
  const lowerTitle = title.toLowerCase();
  return PET_KEYWORDS.some((keyword) => lowerTitle.includes(keyword));
};

// Видалення дублікатів та сторонніх статей
const filterPetArticles = (items) => {
  const seenTitles = new Set();
  return items.filter((item) => {
    if (
      !item.title ||
      item.title === "[Removed]" ||
      seenTitles.has(item.title)
    ) {
      return false;
    }
    if (!isPetRelated(item.title)) {
      return false;
    }
    seenTitles.add(item.title);
    return true;
  });
};

export const getNewsArticles = async (requiredCount = 8) => {
  const randomPage = Math.floor(Math.random() * 3) + 1;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: "dog OR cat OR pet OR puppy OR kitten",
        pageSize: 20, // Запитуємо більше, щоб мати запас після жорсткої фільтрації
        page: randomPage,
        apiKey: API_KEY,
        language: "en",
      },
    });

    if (response.data && response.data.articles) {
      const validPetArticles = filterPetArticles(
        response.data.articles.map((a) => ({
          title: a.title,
          url: a.url,
          urlToImage: a.urlToImage,
        }))
      );

      if (validPetArticles.length >= requiredCount) {
        return validPetArticles.slice(0, requiredCount);
      }
    }
  } catch (error) {
    console.warn(
      "NewsAPI об обмеженні або повернув помилку. Використовуємо перевірені новини про тварин."
    );
  }

  // Якщо API дав недостатньо новин про тварин або повернув помилку
  const shuffledPool = shuffle(PETS_ONLY_FALLBACK_POOL);
  return filterPetArticles(shuffledPool).slice(0, requiredCount);
};
