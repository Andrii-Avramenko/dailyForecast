import { useEffect, useState } from "react";
import fetchGalleryPhotos from "../../services/galleryPhotos";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    try {
      const data = await fetchGalleryPhotos("nature", 1);
      setPhotos(data.hits ?? []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <h2>Beautiful nature</h2>
      <ul>
        {photos.map(({ id, webformatURL }) => (
          <li key={id}>
            <img src={webformatURL} alt="nature" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Gallery;
