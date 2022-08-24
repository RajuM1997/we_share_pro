import React from "react";
import PropTypes from "prop-types";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./BecomeHost.css";
import cx from "classnames";
// graphql;
import { graphql, compose } from "react-apollo";

// query
import getCategoryQuery from "./getCategory.graphql";
import getSubCategoryQuery from "./getSubCategory.graphql";
// Redux
import { connect } from "react-redux";

// Component
import PageRenderer from "../../components/NewListPlaceStep1/PageRenderer";
import CategoryAndSubCtegorySelector from "./CategoryAndSubCtegorySelector";
import {
  getFieldsBySubCategory,
  getPageFieldBySubCategory,
} from "../../helpers/graphQLHelper";
import ExistingPage1 from "../../components/ListPlaceStep1/ExistingPage1";

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
    pageData: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      steps: {},
      pageData: {},
      currentPageIndex: 0,
      currentStep: 1,
      personCapacity: 0,
      formData: {},
      selectedCategory: "",
      selectedSubCategory: "",
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.updateFileByPageId = this.updateFileByPageId.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCompleteStep = this.handleCompleteStep.bind(this);
    this.handleOnNextStep = this.handleOnNextStep.bind(this);
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

  async handleSubCategoryChange(
    selectedSubCategory,
    personCapacity,
    selectedCategory
  ) {
    this.setState({ selectedSubCategory, personCapacity, selectedCategory });
    if (selectedSubCategory) {
      try {
        const pages = await getPageFieldBySubCategory(selectedSubCategory);
        const fields = await getFieldsBySubCategory(selectedSubCategory);
        const data = fields?.map((page, index) => {
          const fields = JSON.parse(page.fields);
          const pageInfo = pages.find((item) => item?.pageId === page?.pageId);
          return {
            ...page,
            pageIndex: index,
            step: pageInfo?.step || -1,
            fields,
          };
        });
        const stepPages = groupBy(data, "step");
        for (const property in stepPages) {
          stepPages[property] = Object.values(
            groupBy(stepPages[property], "pageId")
          );
          this.setState((thisSate) => ({
            steps: {
              ...thisSate.steps,
              [property]: "pending",
            },
          }));
        }
        console.log("stepPages", stepPages);
        this.setState({ pageData: stepPages });
      } catch (e) {}
    }
  }

  handleCategoryChange(selectedCategory) {
    this.setState({ selectedCategory });
  }

  handleCompleteStep() {
    this.setState((thisSate) => ({
      steps: {
        ...thisSate.steps,
        [thisSate.currentStep]: "visible",
      },
    }));
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

  handleOnNextStep() {
    const maxStep = Math.max(
        ...Object.keys(this.state?.steps || {})
    );
    console.log("maxStep", maxStep);
    console.log("currentStep", this.state.currentStep);
    if (maxStep === this.state.currentStep) {
      alert("Do Form Submit");
    } else {
      this.setState((thisSate) => ({
        steps: {
          ...thisSate.steps,
          [thisSate.currentStep]: "completed",
        },
        currentStep:
            thisSate.currentStep < maxStep
                ? thisSate.currentStep + 1
                : maxStep,
        currentPageIndex: 0,
      }));
    }
  }
  render() {
    const {
      title,
      getCategoryData,
      getSubCategoryData,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    const pageData = this.state?.pageData[this.state.currentStep] || [];
    const currentPageFields = pageData[this.state.currentPageIndex] || [];
    const { pageId: currentPageId } = currentPageFields[0] || {};

    return (
      <div className={s.root}>
        <div className={cx(s.container, "existingPage")}>
          {this.state.steps &&
          this.state.steps[this?.state?.currentStep] === "visible" ? (
              <ExistingPage1 currentStep={this.state.currentStep} handleOnNextStep={this.handleOnNextStep}/>
          ) : (
            <>
              {this.state.selectedCategory && this.state.selectedSubCategory ? (
                <PageRenderer
                  totalPage={pageData?.length}
                  currentPageData={{
                    fields: currentPageFields,
                  }}
                  pageIndex={this.state.currentPageIndex}
                  nextPage={this.nextPage}
                  previousPage={this.previousPage}
                  listId={this.state.currentPageIndex}
                  formPage={formPage}
                  formBaseURI={formBaseURI}
                  mode={mode}
                  baseCurrency={baseCurrency}
                  formData={this.state.formData[currentPageId] || {}}
                  updateField={this.updateFileByPageId(currentPageId)}
                  handleCompleteStep={this.handleCompleteStep}
                />
              ) : (
                <CategoryAndSubCtegorySelector
                  category={getCategoryData.getCategoryAdmin}
                  subCategory={getSubCategoryData.getSubCategoryAdmin}
                  continuePage={this.continuePage}
                  onSelectChanged={this.handleCategoryChange}
                  onSelectSubCategoryChanged={this.handleSubCategoryChange}
                  selectedCategory={this.state.selectedCategory}
                  selectedSubCategory={this.state.selectedSubCategory}
                />
              )}
            </>
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
  connect(mapState, mapDispatch)
)(BecomeHost);
