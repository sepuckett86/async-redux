import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters, getCharactersLoading, getCharactersError } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/characterActions';
import Characters from '../components/Characters';
import PropTypes from 'prop-types';

class AllCharacters extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Characters {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCharacters);
