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
import getCountriesQuery from "./getCountries.graphql";
import getHostListingByUserIdQuery from "./getHostListingByUserId.graphql";
import getPageFieldsQuery from "./getPageField.graphql";

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
import PageReRendererStep3 from "./PageReRendererStep3";
import PageReRendererStep1 from "./PageReRendererStep1";
import submit from "./submit";

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
    getCountriesData: PropTypes.shape({
      loading: PropTypes.bool,
      getCountriesData: PropTypes.array,
    }),
    getHostListingByUserIdData: PropTypes.shape({
      loading: PropTypes.bool,
      getHostListingByUserIdData: PropTypes.array,
    }),
    getPageFieldsData: PropTypes.shape({
      loading: PropTypes.bool,
      getPageFieldsData: PropTypes.array,
    }),
  };
  static defaultProps = {
    data: {
      loading: true,
    },
    categoryData: {
      loading: true,
    },
    getCountriesData: {
      loading: true,
    },
    getHostListingByUserIdData: {
      loading: true,
    },
    getPageFieldsData: {
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
      formData: {
        dynamicFields: {},
      },
      selectedCategory: "",
      selectedSubCategory: "",
      shawButton: true,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.updateFieldByPageId = this.updateFieldByPageId.bind(this);
    this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCompleteStep = this.handleCompleteStep.bind(this);
    this.handleOnNextStep = this.handleOnNextStep.bind(this);
    this.handleCompleteHostListing = this.handleCompleteHostListing.bind(this);
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
        const fields = await getFieldsBySubCategory(selectedSubCategory);
        const data = fields?.map((page, index) => {
          const fields = JSON.parse(page.fields);
          return {
            ...page,
            pageIndex: index,
            step: 1,
            fields,
          };
        });
        const step2Fields = groupBy(data, "pageId");

        // for (const property in stepPages) {
        //   stepPages[property] = Object.values(
        //     groupBy(stepPages[property], "pageId")
        //   );
        //   this.setState((thisSate) => ({
        //     steps: {
        //       ...thisSate.steps,
        //       [property]: "pending",
        //     },
        //   }));
        // }
        console.log("stepPages", step2Fields);
        this.setState(() => ({
          steps: {
            1: "pending",
            2: "pending",
            3: "pending",
          },
        }));
        this.setState({
          pageData: {
            1: [
              [
                {
                  type: "title",
                  pageId: 1,
                  step: 1,
                },
              ],
              [
                {
                  type: "description",
                  pageId: 2,
                  step: 1,
                },
              ],
              [
                {
                  type: "location",
                  pageId: 3,
                  step: 1,
                },
              ],
              [
                {
                  type: "address",
                  pageId: 4,
                  step: 1,
                },
              ],
              [
                {
                  type: "photosUpload",
                  pageId: 5,
                  step: 1,
                },
              ],
            ],
            2: Object.values(step2Fields),
            3: [
              [
                {
                  type: "guestRequirements",
                  pageId: 1,
                  step: 3,
                },
              ],
              [
                {
                  type: "reviewGuestBook",
                  pageId: 2,
                  step: 3,
                },
              ],
              [
                {
                  type: "bookingNoticeTime",
                  pageId: 3,
                  step: 3,
                },
              ],
              [
                {
                  type: "bookingWindow",
                  pageId: 4,
                  step: 3,
                },
              ],
              [
                {
                  type: "tripLength",
                  pageId: 5,
                  step: 3,
                },
              ],
              [
                {
                  type: "pricingDescription",
                  pageId: 6,
                  step: 3,
                },
              ],
              [
                {
                  type: "calendar",
                  pageId: 7,
                  step: 3,
                },
              ],
              [
                {
                  type: "discount",
                  pageId: 8,
                  step: 3,
                },
              ],
              [
                {
                  type: "instantBooking",
                  pageId: 9,
                  step: 3,
                },
              ],
              [
                {
                  type: "localLaws",
                  pageId: 10,
                  step: 3,
                },
              ],
            ],
          },
        });
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

  updateFieldByPageId = (currentPageId) => (key, value) => {
    console.log("currentPageId", currentPageId);
    console.log("key", key);
    console.log("value", value);

    this.setState((thisState) => ({
      ...thisState,
      formData: {
        ...thisState?.formData,
        dynamicFields: {
          ...(thisState?.formData?.dynamicFields || {}),
          ...(currentPageId
            ? {
                ...(thisState?.formData?.dynamicFields[currentPageId] || {}),
                [key]: value,
              }
            : {}),
        },
        ...(currentPageId
          ? {}
          : {
              [key]: value,
            }),
      },
    }));
  };

  async handleCompleteHostListing() {
    let currentUser = this.props.account.userId;
    const category = this.props?.getCategoryData?.getCategoryAdmin?.find(
      (ele) => ele.category === this.state.selectedCategory
    );
    console.log("categoryId", category);
    const data = await submit({
      userId: currentUser,
      categoryId: category?.id,
      subCategoryId: this.state.selectedSubCategory,
      personCapacity: this.state.personCapacity,
      ...this.state.formData,
    });
    this.setState({
      shawButton: !this.state.shawButton,
    });
    console.log("handleCompleteHostListing", data);
  }

  handleOnNextStep() {
    const maxStep = Math.max(...Object.keys(this.state?.steps || {}));
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
          thisSate.currentStep < maxStep ? thisSate.currentStep + 1 : maxStep,
        currentPageIndex: 0,
      }));
    }
  }
  render() {
    const {
      title,
      getCategoryData,
      getSubCategoryData,
      getCountriesData,
      getHostListingByUserIdData,
      getPageFieldsData,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    const pageData = this.state?.pageData[this.state.currentStep] || [];
    const currentPageFields = pageData[this.state.currentPageIndex] || [];
    const { pageId: currentPageId } = currentPageFields[0] || {};
    // console.log("page fields", getPageFieldsData);

    return (
      <div className={s.root}>
        <div className={cx(s.container, "existingPage")}>
          {this.state.steps &&
          this.state.steps[this?.state?.currentStep] === "visible" ? (
            <ExistingPage1
              shawButton={this.state.shawButton}
              currentStep={this.state.currentStep}
              handleOnNextStep={this.handleOnNextStep}
              handleCompleteHostListing={this.handleCompleteHostListing}
            />
          ) : (
            <>
              {this.state.selectedCategory && this.state.selectedSubCategory ? (
                <>
                  {this?.state?.currentStep === 1 && (
                    <PageReRendererStep1
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
                      formData={this.state.formData || {}}
                      updateField={this.updateFieldByPageId()}
                      handleCompleteStep={this.handleCompleteStep}
                      countryList={getCountriesData}
                    />
                  )}
                  {this?.state?.currentStep === 2 && (
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
                      updateField={this.updateFieldByPageId(currentPageId)}
                      handleCompleteStep={this.handleCompleteStep}
                      countryList={getCountriesData}
                      fieldsData={getPageFieldsData.getPageFieldAdmin}
                    />
                  )}
                  {this?.state?.currentStep === 3 && (
                    <PageReRendererStep3
                      totalPage={pageData?.length}
                      currentPageData={{
                        fields: currentPageFields,
                      }}
                      pageIndex={this.state.currentPageIndex}
                      nextPage={this.nextPage}
                      previousPage={this.previousPage}
                      formPage={formPage}
                      formBaseURI={formBaseURI}
                      mode={mode}
                      baseCurrency={baseCurrency}
                      formData={this.state.formData || {}}
                      updateField={this.updateFieldByPageId()}
                      handleCompleteStep={this.handleCompleteStep}
                      countryList={getCountriesData}
                    />
                  )}
                </>
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
const mapState = (state) => ({
  account: state.account.data,
});

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
  graphql(getPageFieldsQuery, {
    name: "getPageFieldsData",
    options: {
      ssr: true,
    },
  }),
  graphql(getCountriesQuery, {
    name: "getCountriesData",
    options: {
      ssr: true,
    },
  }),
  graphql(getHostListingByUserIdQuery, {
    name: "getHostListingByUserIdData",
    options: (props) => ({
      variables: {
        listId: props?.userId,
      },
      fetchPolicy: "network-only",
      ssr: false,
    }),
  }),
  connect(mapState, mapDispatch)
)(BecomeHost);
