import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarFormButton,
  SearchFormInput,
} from './SearchBar.styled';
import { BiSearch } from 'react-icons/bi';

export class SearchBar extends Component {
  state = {
    query: '',
    images: [],
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query.trim());
  };

  render() {
    return (
      <SearchBarWrapper>
        <SearchBarForm onSubmit={this.handleSubmit}>
          <SearchBarFormButton type="submit">
            <BiSearch size="40" />
          </SearchBarFormButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchBarForm>
      </SearchBarWrapper>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
