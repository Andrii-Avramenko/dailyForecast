import { useEffect, useState } from "react";
import {
  GallerySection,
  GalleryTitle,
  GalleryList,
  GalleryItem,
  GalleryImage,
} from "./Gallery.styled";

import fetchGalleryPhotos from "../../services/galleryPhotos";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  async function fetchPhotos() {
    try {
      const page = Math.floor(Math.random() * 10) + 1;
      const data = await fetchGalleryPhotos("nature", page);

      setPhotos(data.hits ?? []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <GallerySection>
      <GalleryTitle>Beautiful nature</GalleryTitle>

      <GalleryList>
        {photos.map(({ id, webformatURL }, index) => {
          let position = index - activeIndex;

          if (position > 5) {
            position -= photos.length;
          }

          if (position < -5) {
            position += photos.length;
          }

          return (
            <GalleryItem
              key={id}
              $position={position}
              onClick={() => setActiveIndex(index)}
            >
              <GalleryImage src={webformatURL} alt="nature" />
            </GalleryItem>
          );
        })}
      </GalleryList>
    </GallerySection>
  );
}

export default Gallery;
