import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./AddBannerManagement.css";
import bt from "../../../components/commonStyle.css";
import { Field, reduxForm, change, formValueSelector } from "redux-form";
import submit from "./submit";
import validate from "./validate";
import Link from "../../Link/Link";

// Style
import {
  Button,
  Row,
  FormGroup,
  Col,
  FormControl,
  Form,
  Panel,
} from "react-bootstrap";
import Uploader from "./Uploader/Uploader";
import PlaceGeoSuggest from "./PlaceGeoSuggest/PlaceGeoSuggest";

// Translation
import { FormattedMessage, injectIntl } from "react-intl";
import messages from "../../../locale/messages";

class AddBannerManagement extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    formatMessage: PropTypes.func,
    initialValues: PropTypes.object,
  };

  static defaultProps = {
    data: [],
  };

  renderFormControl = ({
    input,
    label,
    type,
    meta: { touched, error },
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={s.space2}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={3}>
            <label className={s.labelTextNew}></label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <FormControl
              {...input}
              type={type}
              className={bt.commonControlInput}
            />
            {touched && error && (
              <span className={s.errorMessage}>{formatMessage(error)}</span>
            )}
          </Col>
        </Row>
      </FormGroup>
    );
  };
  renderSelect = (options) => ({
    input,
    label,
    type,
    meta: { touched, error },
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={s.space2}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={3}>
            <label className={s.labelTextNew}></label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <select value={input.value} aria-label="Default select example">
              {options.map((option) => {
                return <option value={option.value}>{option.name}</option>;
              })}

              {/* <options value="1">One</options>
              <options value="2">Two</options>
              <options value="3">Three</options> */}
            </select>
            {touched && error && (
              <span className={s.errorMessage}>{formatMessage(error)}</span>
            )}
          </Col>
        </Row>
      </FormGroup>
    );
  };

  renderPlacesSuggest = ({
    input,
    label,
    meta: { touched, error },
    className,
    select,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={s.space2}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={3}>
            <label className={s.labelTextNew}></label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <PlaceGeoSuggest
              {...input}
              label={""}
              className={className}
              formName={"AddBanner"}
            />
            {touched && error && (
              <span className={s.errorMessage}>{formatMessage(error)}</span>
            )}
          </Col>
        </Row>
      </FormGroup>
    );
  };

  render() {
    const { formatMessage } = this.props.intl;
    let row = ["boat"];
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      initialValues,
    } = this.props;
    const { data } = this.props;
    return (
      <div>
        <div
          className={cx(
            s.pagecontentWrapper,
            "addpopular-autocomplete",
            "pagecontentAR"
          )}
        >
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.addBanner} />
          </h1>
          <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
            <div
              className={cx(s.space4, bt.textAlignRight, "textAlignLeftRtl")}
            >
              <Link
                to={"/siteadmin/popularlocation"}
                className={cx(
                  bt.btnPrimaryBorder,
                  bt.btnLarge,
                  bt.noTextDecoration,
                  bt.btnPrimaryLink
                )}
              >
                <FormattedMessage {...messages.goBack} />
              </Link>
            </div>
            <Panel className={s.panelHeader}>
              <form onSubmit={handleSubmit(submit)}>
                {error && <strong>{formatMessage(error)}</strong>}
                <FormGroup className={s.formGroup}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={3}>
                      <label className={s.labelTextNew}>
                        <FormattedMessage {...messages.imageLabel} />
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={9}>
                      <Uploader />
                    </Col>
                  </Row>
                </FormGroup>
                <label className={s.labelTextNew}>Title</label>
                <Field
                  name="title"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.titleAdminLabel)}
                />
                <label className={s.labelTextNew}>Description</label>
                <Field
                  name="description"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.descriptionAdminLabel)}
                />
                <label className={s.labelTextNew}>Color Text</label>
                <Field
                  name="colorText"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.buttonLabel)}
                />
                <label className={s.labelTextNew}>Bottom Text</label>
                <Field
                  name="bottomText"
                  defaultValue={null}
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.bottomText)}
                />
                <label
                  className={s.labelTextNew}
                  style={{ marginRight: "20px", marginBottom: "10px" }}
                >
                  Category
                </label>

                <Field
                  name="category"
                  component="select"
                  type="select"
                  className={bt.commonControlInput}
                  label={formatMessage(messages.bottomText)}
                  style={{ marginBottom: "10px" }}
                >
                  <option />
                  <option value="Vacation Home">Vacation Home</option>
                  <option value="Events Space">Events Space</option>
                  <option value="Workspace">Workspace</option>
                  <option value="RVs">RVs</option>
                  <option value="Boats">Boats</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Power Tools">Power Tools</option>
                  <option value="Film Equipment">Film Equipment</option>
                  <option value="Event Equipment">Event Equipment</option>
                  <option value="Bikes">Bikes</option>
                  <option value="Parking">Parking</option>
                  <option value="Vehicles">Vehicles</option>
                </Field>
                <FormGroup className={s.formGroup}>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      className={cx(bt.textAlignRight, "textAlignLeftRtl")}
                    >
                      <Button
                        className={cx(bt.button, bt.btnPrimary, bt.btnlarge)}
                        type="submit"
                        disabled={submitting}
                      >
                        <FormattedMessage {...messages.save} />
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
              </form>
            </Panel>
          </Col>
        </div>
      </div>
    );
  }
}
AddBannerManagement = reduxForm({
  form: "AddBanner", // a unique name for this form
  validate,
})(AddBannerManagement);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(AddBannerManagement))
);
