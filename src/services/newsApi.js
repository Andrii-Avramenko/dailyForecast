const API_KEY = "46029113-01c4619ce2b155a2dd4a2705d";
const BASE_URL = "https://pixabay.com/api/";

export const getNewsArticles = async (page = 1, perPage = 4) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=pets&image_type=photo&page=${page}&per_page=${perPage}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Помилка завантаження даних з сервера");
  }

  const data = await response.json();
  return data.hits;
};
