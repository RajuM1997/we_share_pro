import React from "react";
import PropTypes from "prop-types";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./BecomeHost.css";
import cx from "classnames";
// graphql;
import { graphql, compose } from "react-apollo";

// query
import getFieldsQuery from "./getFields.graphql";
import getCategoryQuery from "./getCategory.graphql";
import getSubCategoryQuery from "./getSubCategory.graphql";
import getPageFieldQuery from "./getPageField.graphql";
// Redux
import { connect } from "react-redux";

// Component
import ListPlaceStep1 from "../../components/ListPlaceStep1/ListPlaceStep1";
import PageRenderer from "../../components/NewListPlaceStep1/PageRenderer";
import { Field } from "../../components/ListsPlaceStep1/FakeDb";
import CategoryAndSubCtegorySelector from "./CategoryAndSubCtegorySelector";

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
    getCategoryData: PropTypes.shape({
      loading: PropTypes.bool,
      getCategoryData: PropTypes.array,
    }),
    getSubCategoryData: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategoryData: PropTypes.array,
    }),
    getFieldsData: PropTypes.shape({
      loading: PropTypes.bool,
      getFieldsData: PropTypes.array,
    }),
    getPageFieldData: PropTypes.shape({
      loading: PropTypes.bool,
      getPageFieldData: PropTypes.array,
    }),
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
      currentPage: 1,
      selectedCategoryValue: "",
      selectedCategory: "",
      selectedSubCategory: "",
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.updateFileByPageId = this.updateFileByPageId.bind(this);
    this.continuePage = this.continuePage.bind(this);
    this.prePage = this.prePage.bind(this);
    this.onSelectChanged = this.onSelectChanged(this);
    this.onSelectSubCategoryChanged = this.onSelectSubCategoryChanged.bind(
      this
    );
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
  continuePage(selectedCategory) {
    this.setState((thisState) => ({
      ...thisState,
      currentPage: thisState.currentPage + 1,
    }));
    this.setState({
      selectedCategoryValue: selectedCategory,
    });
    // console.log(selectedCategory);
  }
  prePage() {
    this.setState((thisState) => ({
      ...thisState,
      currentPage: thisState.currentPage - 1,
    }));
  }
  onSelectChanged(event) {
    console.log("event22", event);
    this.setState({ selectedCategory: event?.target?.value });
  }
  onSelectSubCategoryChanged(event) {
    console.log("event22", event);
    this.setState({ selectedSubCategory: event?.target?.value });
  }
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
      const pages = this.props.getFieldsData?.getFieldsAdmin?.map(
        (page, index) => {
          const fields = JSON.parse(page.fields);
          return {
            ...page,
            pageIndex: index,
            fields,
          };
        }
      );
      const groupedPages = groupBy(pages, "pageId");
      return Object.values(groupedPages);
    } catch (error) {
      return [];
    }
  }
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
    // console.log(getCategory);
    const {
      title,
      getCategoryData,
      getSubCategoryData,
      getFieldsData,
      getPageFieldData,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    // console.log(listId);
    const pageData = this.generatePageData();
    const currentPageFields = pageData[this.state.currentPageIndex] || [];
    const currentPageId = currentPageFields[0]?.pageId;
    // console.log(currentPageFields);
    // console.log(getCategoryData.getCategoryAdmin);
    // console.log(getSubCategoryData.getSubCategoryAdmin);
    console.log(getPageFieldData.getPageFieldAdmin);

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

          {this.state.selectedCategory && this.state.selectedSubCategory ? (
            <PageRenderer
              totalPage={pageData?.length}
              currentPageData={{
                fields: currentPageFields,
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
              category={getCategoryData.getCategoryAdmin}
              subCategory={getSubCategoryData.getSubCategoryAdmin}
              // fields={getFieldsData.getFieldsAdmin}
              // pageField={getPageFieldData.getPageFieldAdmin}
            />
          ) : (
            <CategoryAndSubCtegorySelector
              category={getCategoryData.getCategoryAdmin}
              subCategory={getSubCategoryData.getSubCategoryAdmin}
              continuePage={this.continuePage}
              onSelectChanged={(event) => {
                console.log("event22", event);
                this.setState({ selectedCategory: event?.target?.value });
              }}
              selectedCategory={this.state.selectedCategory}
              onSelectSubCategoryChanged={this.onSelectSubCategoryChanged}
              selectedSubCategory={this.state.selectedSubCategory}
              prePage={this.prePage}
              currentPage={this.state.currentPage}
              nextPage={this.nextPage}
            />
          )}
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({});

const mapDispatch = {};
export default compose(
  withStyles(s),
  graphql(getCategoryQuery, {
    name: "getCategoryData",
    options: {
      ssr: true,
    },
  }),
  graphql(getSubCategoryQuery, {
    name: "getSubCategoryData",
    options: {
      ssr: true,
    },
  }),
  graphql(getFieldsQuery, {
    name: "getFieldsData",
    options: {
      ssr: true,
    },
  }),
  graphql(getPageFieldQuery, {
    name: "getPageFieldData",
    options: {
      ssr: true,
    },
  }),
  connect(mapState, mapDispatch)
)(BecomeHost);
