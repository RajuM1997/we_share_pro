import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./AddPageFieldManagement.css";
import bt from "../../../components/commonStyle.css";
import { Field, reduxForm, change, formValueSelector } from "redux-form";
import submit from "./submit";
import validate from "./validate";
import { injectIntl } from "react-intl";
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

// Translation
import { FormattedMessage } from "react-intl";
import messages from "../../../locale/messages";

class AddPageFieldManagement extends React.Component {
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
            <label className={s.labelTextNew}>{label}</label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <select value={input.value} aria-label="Default select example">
              {options.map((option) => {
                return <option value={option.value}>{option.name}</option>;
              })}
            </select>
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
            <FormattedMessage {...messages.fieldCategory} />
          </h1>
          <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
            <div
              className={cx(s.space4, bt.textAlignRight, "textAlignLeftRtl")}
            >
              <Link
                to={"/siteadmin/fieldSetting"}
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
                <div className={s.selectField}>
                  <label
                    className={s.labelTextNew}
                    style={{ marginRight: "20px", marginBottom: "10px" }}
                  >
                    Title
                  </label>
                  <Field name="title" type="text" component="input" />
                </div>
                <div className={s.selectField}>
                  <label
                    className={s.labelTextNew}
                    style={{ marginRight: "20px", marginBottom: "10px" }}
                  >
                    Page ID
                  </label>
                  <Field
                    name="pageId"
                    component="select"
                    type="select"
                    className={bt.commonControlInput}
                    label={formatMessage(messages.fieldsPageId)}
                    style={{ marginBottom: "10px" }}
                  >
                    <option value="" selected disabled>
                      Please Select
                    </option>
                    {Array.from(Array(100).keys()).map((page) => (
                      <option value={page}>{page}</option>
                    ))}
                  </Field>
                </div>
                <div className={s.selectField}>
                  <label
                    className={s.labelTextNew}
                    style={{ marginRight: "20px", marginBottom: "10px" }}
                  >
                    Step
                  </label>
                  <Field
                    name="step"
                    component="select"
                    type="select"
                    className={bt.commonControlInput}
                    label={formatMessage(messages.fieldsPageId)}
                    style={{ marginBottom: "10px" }}
                  >
                    <option value="" selected disabled>
                      Please Select
                    </option>
                    <option value="step1">Step1</option>
                    <option value="step3">Step2</option>
                    <option value="step2">Step3</option>
                  </Field>
                </div>
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
AddPageFieldManagement = reduxForm({
  form: "AddPageFieldManagement", // a unique name for this form
  validate,
})(AddPageFieldManagement);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(AddPageFieldManagement))
);
