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

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

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
      currentPageIndex: 0,
      formData: {},
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.updateFileByPageId = this.updateFileByPageId.bind(this);
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //     if (this.props?.data?.getFields && this.props?.data?.getFields?.length !== nextProps?.data?.getFields?.length) {
  //       const fields = this.generatePageData();
  //       console.log("fields", fields);
  //       this.setState({
  //         currentPageId: fields[0]?.pageId || 1
  //       })
  //     }
  // }

  nextPage() {
    this.setState((thisState) => ({
      ...thisState,
      currentPageIndex: thisState.currentPageIndex + 1,
    }));
  }
  previousPage() {
    this.setState((thisState) => ({
      ...thisState,
      currentPageIndex: thisState.currentPageIndex - 1,
    }));
  }
  generatePageData() {
    try {
      console.log("this?.props?.data?.getFields", this?.props?.data?.getFields);
      const pages = this?.props?.data?.getFields?.map((page, index) => {
        const fields = JSON.parse(page.fields);
        return {
          ...page,
          pageIndex: index,
          fields,
        }
      });
      const groupedPages = groupBy(pages, 'pageId');
      return Object.values(groupedPages);
    } catch (error) {
      return [];
    }
  };
  updateFileByPageId = (currentPageId) => (key, value) => {
    this.setState((thisState) => ({
      ...thisState,
      formData: {
        ...thisState.formData,
        [currentPageId]: {
          ...(thisState[currentPageId] || {}),
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
    const pageData = this.generatePageData();
    const currentPageFields = pageData[this.state.currentPageIndex] || [];
    const currentPageId = currentPageFields[0]?.pageId;
    console.log(currentPageFields);
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
            totalPage={pageData?.length}
            currentPageData={{
              fields: currentPageFields
            }}
            pageIndex={this.state.currentPageIndex}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            listId={listId}
            formPage={formPage}
            formBaseURI={formBaseURI}
            mode={mode}
            baseCurrency={baseCurrency}
            formData={this.state.formData[currentPageId] || {}}
            updateField={this.updateFileByPageId(currentPageId)}
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
