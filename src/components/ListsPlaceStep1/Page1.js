// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm } from "redux-form";

// Redux
import { connect } from "react-redux";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../locale/messages";

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
import s from "./ListPlaceStep1.css";
import bt from "../../components/commonStyle.css";

import update from "./update";

// Component
import ListPlaceTips from "../ListPlaceTips/ListPlaceTips";

class Page1 extends Component {
  static propTypes = {
    initialValues: PropTypes.object,
    nextPage: PropTypes.any,
    userData: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getCategory: PropTypes.any,
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
      roomType: [],
      personCapacity: [],
      selectedCategory: [],
    };
  }

  componentWillMount() {
    const { listingFields } = this.props;
    this.setState({
      roomType: listingFields.roomType,
      personCapacity: listingFields.personCapacity,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { listingFields } = nextProps;
    if (listingFields != undefined) {
      this.setState({
        roomType: listingFields.roomType,
        personCapacity: listingFields.personCapacity,
      });
    }
  }
  onSelectChanged(event) {
    this.setState({ selectedCategory: event.target.value });
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
    const { error, handleSubmit, submitting, dispatch, nextPage } = this.props;
    const { loading, data } = this.props;
    const { userData } = this.props;
    const { roomType, personCapacity, selectedCategory } = this.state;
    console.log(selectedCategory);
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <Col
              xs={12}
              smOffset={1}
              sm={8}
              mdOffset={1}
              md={8}
              lgOffset={1}
              lg={8}
            >
              {/* <h2 className={s.landingTitle}>
                <FormattedMessage {...messages.hi} />, {userData.firstName}!{" "}
                <FormattedMessage {...messages.letYouGetReady} />.
              </h2>
              <strong className={s.landingStep}>
                <span>
                  {" "}
                  <FormattedMessage {...messages.step1HeadingNew} />
                </span>
              </strong>
               */}
              <h3 className={s.landingContentTitle}>
                {" "}
                <FormattedMessage {...messages.chooseCategory} />{" "}
              </h3>

              <form onSubmit={handleSubmit}>
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
                        name="category"
                        value={this.state.selectedCategory}
                        onChange={this.onSelectChanged.bind(this)}
                        component={this.renderFormControlSelect}
                        className={cx(
                          s.backgroundPosition,
                          s.formControlSelect,
                          s.jumboSelect,
                          s.noFontWeight
                        )}
                      >
                        {data &&
                          data.length > 0 &&
                          data.map((value, key) => {
                            return (
                              value.isEnable && (
                                <option value={value.category} key={value.id}>
                                  {value.category}
                                </option>
                              )
                            );
                          })}
                      </Field>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className={cx(s.formGroup, "floatLeft")}>
                  <Button
                    className={cx(s.button, bt.btnPrimary, bt.btnLarge)}
                    onClick={() => nextPage("subCategory", selectedCategory)}
                  >
                    <FormattedMessage {...messages.continue} />
                  </Button>
                </FormGroup>
              </form>
            </Col>
          </Col>
          <ListPlaceTips />
        </Row>
      </Grid>
    );
  }
}

Page1 = reduxForm({
  form: "ListPlaceStep1", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmit: update,
})(Page1);

const mapState = (state) => ({
  userData: state.account.data,
  listingFields: state.listingFields.data,
});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Page1))
);
