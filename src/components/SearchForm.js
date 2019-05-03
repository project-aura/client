import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    this.state = {
      searchForm: {
        auraValue: '',
        categoryValue: '',
        cityValue: '',
      },
      scroll: 0,
      top: 10,
    };
  }

  componentDidMount() {
    const form = this.formRef.current;
    this.setState({ top: form.offsetTop });
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchForm);
  };

  handleAuraChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const tempForm = prevState.searchForm;
      tempForm.auraValue = value;
      return { searchForm: tempForm };
    });
  };

  handleCategoryChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const tempForm = prevState.searchForm;
      tempForm.categoryValue = value;
      return { searchForm: tempForm };
    });
  };

  handleCityChange = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const tempForm = prevState.searchForm;
      tempForm.cityValue = value;
      return { searchForm: tempForm };
    });
  };

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    return (
      <article>
        <section
          id="search-form"
          ref={this.formRef}
          className={this.state.scroll > this.state.top ? 'fixed' : ''}
        >
          <form
            action=""
            method="GET"
            name="search"
            role="search"
            onSubmit={this.handleSearchSubmit}
          >
            <span id="want" className="grid-80">
              I want to be
            </span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.auraValue}
                name="auraValue"
                className="grid-80 corner"
                onChange={this.handleAuraChange}
              >
                <option value="">Any Aura</option>
                <option value="trendy">Trendy</option>
                <option value="inspired">Inspired</option>
                <option value="romantic">Romantic</option>
                <option value="cheerful">Cheerful</option>
                <option value="intimate">Intimate</option>
                <option value="classy">Classy</option>
                <option value="hipster">Hipster</option>
                <option value="casual">Casual</option>
                <option value="touristy">Touristy</option>
              </select>
            </p>

            <span className="grid-40">while</span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.categoryValue}
                name="categoryValue"
                className="grid-80 middle"
                onChange={this.handleCategoryChange}
              >
                <option value="">Going Out</option>
                <option value="eating">Eating</option>
                <option value="studying">Studying</option>
                <option value="dating">Dating</option>
                {/* <option value="relaxing">Relaxing</option> */}
                <option value="drinking">Drinking</option>
                {/* <option value="shopping">Shopping</option> */}
              </select>
            </p>

            <span className="grid-40">in</span>
            <p className="cat-wrap">
              <select
                value={this.state.searchForm.cityValue}
                name="cityValue"
                className="grid-80 city"
                onChange={this.handleCityChange}
              >
                <option value="">Any Place</option>
                <option value="santa monica">Santa Monica</option>
                <option value="downtown la">Downtown LA</option>
                <option value="culver city">Culver City</option>
                <option value="beverly hills">Beverly Hills</option>
                <option value="hollywood">Hollywood</option>
                <option value="la brea">La Brea</option>
                <option value="van nuys">Van Nuys</option>
                <option value="pasadena">Pasadena</option>
                <option value="newport beach">Newport Beach</option>
                <option value="anaheim">Anaheim</option>
                <option value="rowland heights">Rowland Heights</option>
                <option value="laguna">Laguna</option>
                <option value="brea">Brea</option>
              </select>
            </p>
            <p className="submit-wrap" id="submitButtonContainer">
              <button id="submitButton" className="grid-100 btn">
                Search
              </button>
            </p>
          </form>
        </section>
      </article>
    );
  }
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
