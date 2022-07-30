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
// import Field from "../../components/ListsPlaceStep1/FakeDb";

class BecomeHost extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
    listId: PropTypes.number,
    formBaseURI: PropTypes.string,
    mode: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPageId: 1,
    };
  }
  componentDidMount() {
    const currentPageData = Field.find(
      (thisData) => thisData.pageId === this.currentPageId
    );
    this.setState({
      data: currentPageData,
    });
  }

  render() {
    const {
      title,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    return (
      <div className={s.root}>
        <div className={cx(s.container, "existingPage")}>
          <ListPlaceStep1
            listId={listId}
            formPage={formPage}
            formBaseURI={formBaseURI}
            mode={mode}
            baseCurrency={baseCurrency}
          />
          <PageRenderer currentPageData={this.data} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BecomeHost);
