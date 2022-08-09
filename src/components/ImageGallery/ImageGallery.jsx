import PropTypes from 'prop-types';
import { ImgaeGalleryList } from './ImageGallery.stelyd';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImgaeGalleryList o>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            tags={tags}
            webformatURL={webformatURL}
          />
        );
      })}
    </ImgaeGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
