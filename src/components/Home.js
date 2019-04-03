/* eslint-disable react/no-unescaped-entities */
import React from "react";
import axios from "axios";

// Components
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Modal from "./Modal";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalDetails: "",
      businesses: [],
      isShowing: false,
      loading: false
    };
  }

  handleSearchSubmit = searchFormData => {
    this.setState({ loading: true });
    window.scroll({
      top: 635,
      left: 0,
      behavior: "smooth"
    });
    axios
      .get("https://aurelia-server.herokuapp.com/api/businesses", {
        params: {
          aura: searchFormData.auraValue
        }
      })
      .then(response => this.setState({ businesses: response.data }))
      .then(() => this.setState({ loading: false }));
  };

  // Functions for Modals
  openModalHandler = details => {
    this.setState({
      isShowing: true,
      modalDetails: { details }
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          details={this.state.modalDetails}
        >
          {/* Can only take primitive data */}
        </Modal>

        <SearchForm onSearchSubmit={this.handleSearchSubmit} />

        <SearchResults
          loading={this.state.loading}
          businesses={this.state.businesses}
          onOpenModal={this.openModalHandler}
          id="results"
        />
      </div>
    );
  }
}

export default Home;
