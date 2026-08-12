const KEY = "50412649-7dd48fe355273c295d58f736c";

async function fetchGalleryPhotos(searchWord, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchWord}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  if (!response.ok) {
    throw new Error("проблеми з сервером");
  }

  const data = await response.json();
  return data;
}

export default fetchGalleryPhotos;
