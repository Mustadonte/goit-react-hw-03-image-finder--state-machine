import { Component } from 'react';
import {
  ImageGalleryListItem,
  ImageGalleryListItemImg,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <ImageGalleryListItem key={this.props.id}>
          <ImageGalleryListItemImg
            src={this.props.webformatURL}
            alt={this.props.tags}
            onClick={this.toggleModal}
          />
        </ImageGalleryListItem>
        {this.state.showModal && (
          <Modal tags={this.props.tags} onClose={this.toggleModal}>
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </Modal>
        )}
      </>
    );
  }
}
