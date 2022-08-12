import React from "react";
import PropTypes from "prop-types";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./BecomeHost.css";
import cx from "classnames";
// graphql;
import { graphql, compose } from "react-apollo";
import getFields from "./getFields.graphql";
import getCategory from "./getCategory.graphql";

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
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getFields: PropTypes.array,
    }),
    // categoryData: PropTypes.shape({
    //   loading: PropTypes.bool,
    //   getCategory: PropTypes.array,
    // }),
  };
  static defaultProps = {
    data: {
      loading: true,
    },
    categoryData: {
      loading: true,
    },
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
      data: { loading },
    } = this.props;

    const {
      data: { getFields },
    } = this.props;

    console.log(getFields);

    const genarateField = () => {
      try {
        return JSON.parse(getFields.fields);
      } catch (error) {
        return [];
      }
    };

    // console.log(getCategory);
    const {
      title,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    console.log(listId);
    const currentPageData = genarateField().find(
      (thisData) => thisData.pageId == this.state.currentPageId
    );
    console.log(currentPageData);
    return (
      <div className={s.root}>
        <div className={cx(s.container, "existingPage")}>
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

BecomeHost;
export default compose(
  withStyles(s),
  graphql(getFields, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
  // graphql(getCategory, {
  //   options: {
  //     fetchPolicy: "network-only",
  //     ssr: false,
  //   },
  // })
)(BecomeHost);
