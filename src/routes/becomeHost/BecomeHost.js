import React from "react";
import PropTypes from "prop-types";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./BecomeHost.css";
import cx from "classnames";

// Component
import ListPlaceStep1 from "../../components/ListPlaceStep1/ListPlaceStep1";
import PageRenderer from "../../components/NewListPlaceStep1/PageRenderer";
import { Field } from "../../components/ListsPlaceStep1/FakeDb";

class BecomeHost extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
    listId: PropTypes.number,
    formBaseURI: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPageId: 1,
      formData: {},
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.updateFileByPageId = this.updateFileByPageId.bind(this);
  }
  nextPage() {
    this.setState((thisState) => ({
      ...thisState,
      currentPageId: thisState.currentPageId + 1,
    }));
  }
  previousPage() {
    this.setState((thisState) => ({
      ...thisState,
      currentPageId: thisState.currentPageId - 1,
    }));
  }

  updateFileByPageId = (key, value) => {
    this.setState((thisState) => ({
      ...thisState,
      formData: {
        ...thisState.formData,
        [this.state.currentPageId]: {
          ...(thisState[this.state.currentPageId] || {}),
          [key]: value,
        },
      },
    }));
  };

  render() {
    const {
      title,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    console.log(listId);
    const currentPageData = Field.find(
      (thisData) => thisData.pageId === this.state.currentPageId
    );
    return (
      <div className={s.root}>
        <div className={cx(s.container, "existingPage")}>
          <pre>{JSON.stringify(this.state, null, 4)}</pre>
          {/* <ListPlaceStep1
            listId={listId}
            formPage={formPage}
            formBaseURI={formBaseURI}
            mode={mode}
            baseCurrency={baseCurrency}
          /> */}
          <PageRenderer
            currentPageData={currentPageData}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            listId={listId}
            formPage={formPage}
            formBaseURI={formBaseURI}
            mode={mode}
            baseCurrency={baseCurrency}
            formData={this.state.formData[this.state.currentPageId] || {}}
            updateField={this.updateFileByPageId}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BecomeHost);
