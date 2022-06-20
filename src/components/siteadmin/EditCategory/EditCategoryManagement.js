import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditCategoryManagement.css";
import bt from "../../../components/commonStyle.css";
import { Field, reduxForm } from "redux-form";
import submit from "./submit";
import validate from "./validate";
import { injectIntl, FormattedMessage } from "react-intl";
import Link from "../../Link/Link";

// Style
import {
  Button,
  Row,
  FormGroup,
  Col,
  FormControl,
  Panel,
} from "react-bootstrap";
import Uploader from "./Uploader/Uploader";
import PlaceGeoSuggest from "./PlaceGeoSuggest/PlaceGeoSuggest";

// Translation
import messages from "../../../locale/messages";

import {
  databaseUrl,
  analytics,
  googleMapAPI,
  payment,
  googleCaptcha,
  emailConfig,
  sms,
  auth,
} from "../../../config";

class EditCategoryManagement extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
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
            <label className={s.labelTextNew}>{label}</label>
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

  renderPlacesSuggest = ({
    input,
    label,
    meta: { touched, error },
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup className={s.space2}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={3}>
            <label className={s.labelTextNew}>{label}</label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <PlaceGeoSuggest
              {...input}
              label={""}
              className={className}
              formName={"EditCategory"}
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
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      initialValues,
    } = this.props;
    const { data } = this.props;
    const { formatMessage } = this.props.intl;

    return (
      <div
        className={cx(
          s.pagecontentWrapper,
          "addcategory-autocomplete",
          "pagecontentAR"
        )}
      >
        <div>
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.editPopularLocation} />
          </h1>
          <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
            <div
              className={cx(s.space4, bt.textAlignRight, "textAlignLeftRtl")}
            >
              <Link
                to={"/siteadmin/categorys"}
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
                <FormGroup className={s.space2}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={3}>
                      <label className={s.labelTextNew}>
                        <FormattedMessage {...messages.imageLabel} />
                      </label>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={9}>
                      <Uploader values={initialValues} />
                    </Col>
                  </Row>
                </FormGroup>
                <Field
                  name="title"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.location)}
                />
                <Field
                  name="subTitle"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.location)}
                />
                <label className={s.labelTextNew}>Category</label>
                <Field
                  name="category"
                  component="select"
                  type="select"
                  className={bt.commonControlInput}
                >
                  <option />
                  <option value="Vacation Home">Vacation Home</option>
                  <option value="Events Space">Events Space</option>
                  <option value="Workspace">Workspace</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="RVs">RVs</option>
                  <option value="Boats">Boats</option>
                  <option value="Bikes">Bikes</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Power Tools">Power Tools</option>
                  <option value="Film Equipment">Film Equipment</option>
                  <option value="Event Equipment">Event Equipment</option>
                  <option value="Parking">Parking</option>
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
                        className={cx(bt.btnPrimary, bt.btnLarge)}
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

EditCategoryManagement = reduxForm({
  form: "EditCategory", // a unique name for this form
  validate,
})(EditCategoryManagement);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(EditCategoryManagement))
);
