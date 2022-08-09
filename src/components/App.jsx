import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { apiService } from 'services/apiService';
import { Loader } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    perPage: '12',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, perPage, page } = this.state;

    if (query === '') {
      return;
    }

    if (prevState.query !== query) {
      this.setState({ status: 'pending' });
      apiService(query, perPage, page)
        .then(images => this.setState({ images: [...images] }))
        .finally(() => this.setState({ status: 'resolved' }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      apiService(query, perPage, page)
        .then(images =>
          this.setState({ images: [...prevState.images, ...images] })
        )
        .finally(() => this.setState({ status: 'resolved' }));
    }
  }
  onSubmit = data => {
    if (this.state.query === data) {
      this.setState({ status: 'pending' });
      apiService(this.state.query, this.state.perPage, this.state.page)
        .then(resp => {
          console.log(resp);
          this.setState({ images: [...resp] });
        })
        .finally(() => this.setState({ status: 'resolved' }));
      return;
    } else {
      this.setState({ query: data, images: [] });
      return;
    }
  };

  onLoadMoreButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <SearchBar onSubmit={this.onSubmit} />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <SearchBar onSubmit={this.onSubmit} />
          <ImageGallery images={images} />
          {images.length > 0 ? (
            <LoadMoreButton onClick={this.onLoadMoreButtonClick} />
          ) : (
            ''
          )}
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      );
    }
  }
}
