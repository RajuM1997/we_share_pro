// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm, formValueSelector } from "redux-form";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../locale/messages";

// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import {
  Grid,
  Button,
  Row,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import s from "../../components/NewListPlaceStep1/ListPlaceStep1.css";
import bt from "../../components/commonStyle.css";
import ListPlaceTips from "../../components/ListPlaceTips/ListPlaceTips";

// Component

class CategoryAndSubCtegorySelector extends Component {
  static propTypes = {
    previousPage: PropTypes.any,
    initialValues: PropTypes.object,
    nextPage: PropTypes.any,
    userData: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategory: PropTypes.any,
    }),
  };
  static defaultProps = {
    userData: {
      firstName: "",
    },
    data: {
      loading: true,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      personCapacity: [],
      selectedPersonCapacity: 0,
      selectedSubCategory: null,
    };
  }

  componentWillMount() {
    const { listingFields } = this.props;
    if (listingFields != undefined) {
      this.setState({
        personCapacity: listingFields.personCapacity,
      });
    }
  }

  componentDidMount() {
    const { valid } = this.props;

    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { valid, listingFields } = nextProps;
    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }

    if (listingFields != undefined) {
      this.setState({
        personCapacity: listingFields.personCapacity,
      });
    }
  }

  renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
  }) => {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <select {...input}>{children}</select>
        {touched && error && <span>{formatMessage(error)}</span>}
      </div>
    );
  };

  renderFormControlSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl componentClass="select" {...input} className={className}>
          {children}
        </FormControl>
      </div>
    );
  };

  render() {
    const {
      handleSubmit,
      onSelectSubCategoryChanged,
      selectedSubCategory,
      subCategory,
      userData,
      selectedCategory,
    } = this.props;
    const { isDisabled, personCapacity } = this.state;

    return (
      <div>
        <Grid fluid>
          <Row className={cx(s.landingContainer, "arrowPosition")}>
            <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
              <div>
                <h2 className={s.landingTitle}>
                  <FormattedMessage {...messages.hi} />, {userData?.firstName}!{" "}
                  <FormattedMessage {...messages.letYouGetReady} />.
                </h2>
                <strong className={s.landingStep}>
                  <span>
                    {" "}
                    <FormattedMessage {...messages.step1HeadingNew} />
                  </span>
                </strong>
                <h3 className={s.landingContentTitle}>
                  {" "}
                  <FormattedMessage {...messages.whatKindOfPlace} />{" "}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className={s.landingMainContent}>
                    <FormGroup className={s.formGroup}>
                      <Row>
                        <Col
                          componentClass={ControlLabel}
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                        >
                          <Field
                            name="subCategory"
                            onChange={(event) => {
                              this.setState({
                                selectedSubCategory: event?.target?.value,
                              });
                            }}
                            value={selectedSubCategory}
                            component={this.renderFormControlSelect}
                            className={cx(
                              s.backgroundPosition,
                              s.formControlSelect,
                              s.jumboSelect,
                              s.noFontWeight
                            )}
                          >
                            <option value="" selected disabled>
                              Please Select
                            </option>
                            {subCategory &&
                              subCategory.length > 0 &&
                              subCategory?.map((value, key) => {
                                return (
                                  <option value={value.id} key={key}>
                                    {value.subCategory}
                                  </option>
                                );
                              })}
                          </Field>
                        </Col>

                        <Col
                          componentClass={ControlLabel}
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                        >
                          <Field
                            name="personCapacity"
                            component={this.renderFormControlSelect}
                            className={cx(
                              s.backgroundPosition,
                              s.formControlSelect,
                              s.jumboSelect,
                              s.noFontWeight
                            )}
                            onChange={(event) => {
                              this.setState({
                                selectedPersonCapacity: event?.target?.value,
                              });
                            }}
                          >
                            {personCapacity.map((value, key) => {
                              let rows = [];
                              for (
                                let i = value.startValue;
                                i <= value.endValue;
                                i++
                              ) {
                                rows.push(
                                  <>
                                    <option value="" selected disabled>
                                      Please Select
                                    </option>
                                    <option value={i} key={key}>
                                      for {i}{" "}
                                      {i > 1
                                        ? value.otherItemName
                                        : value.itemName}
                                    </option>
                                  </>
                                );
                              }
                              return rows;
                            })}
                          </Field>
                        </Col>
                      </Row>
                    </FormGroup>
                    <div className={s.nextPosition}>
                      <div className={s.nextBackButton}>
                        <hr className={s.horizontalLineThrough} />
                        <FormGroup className={s.formGroup}>
                          <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className={s.noPadding}
                          >
                            <Button
                              className={cx(
                                s.button,
                                bt.btnPrimaryBorder,
                                bt.btnLarge,
                                s.pullLeft,
                                "floatRight"
                              )}
                              onClick={() => {
                                onSelectSubCategoryChanged(null, 0, null);
                              }}
                            >
                              <FormattedMessage {...messages.back} />
                            </Button>
                            <Button
                              className={cx(
                                s.button,
                                bt.btnPrimary,
                                bt.btnLarge,
                                s.pullRight,
                                "floatLeft"
                              )}
                              disabled={isDisabled}
                              onClick={() => {
                                onSelectSubCategoryChanged(
                                  this.state.selectedSubCategory,
                                  this.state.selectedPersonCapacity,
                                  selectedCategory
                                );
                              }}
                            >
                              <FormattedMessage {...messages.next} />
                            </Button>
                          </Col>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <ListPlaceTips />
          </Row>
        </Grid>
      </div>
    );
  }
}

CategoryAndSubCtegorySelector = reduxForm({
  form: "ListPlaceStep1", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CategoryAndSubCtegorySelector);

// Decorate with connect to read form values
const selector = formValueSelector("ListPlaceStep1"); // <-- same as form name

const mapState = (state) => ({
  userData: state.account.data,
  listingFields: state.listingFields.data,
});

const mapDispatch = {};

export default injectIntl(
  withStyles(
    s,
    bt
  )(connect(mapState, mapDispatch)(CategoryAndSubCtegorySelector))
);
