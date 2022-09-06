import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditFieldsManagement.css";
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

// Translation
import messages from "../../../locale/messages";

class EditFieldsManagement extends React.Component {
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

  render() {
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      initialValues,
      id,
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
            <FormattedMessage {...messages.editPageField} />
          </h1>
          <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
            <div
              className={cx(s.space4, bt.textAlignRight, "textAlignLeftRtl")}
            >
              <Link
                to={`/siteadmin/fields/${id}`}
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
                <Field
                  name="title"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.fieldTitle)}
                  className={cx(bt.commonControlInput)}
                />
                <Field
                  name="name"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.addName)}
                  className={cx(bt.commonControlInput)}
                />
                <Field
                  disabled
                  name="pageId"
                  type="number"
                  component={this.renderFormControl}
                  label={formatMessage(messages.adminPageFieldPageId)}
                />
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={3}
                  style={{ paddingLeft: "0px" }}
                >
                  <label className={s.labelTextNew}> Type</label>
                </Col>
                <Col xs={12} sm={12} md={12} lg={9} className={s.categoryCol}>
                  <Field
                    name="type"
                    component="select"
                    type="select"
                    className={bt.commonControlInput}
                    label={formatMessage(messages.categoryAdminCategory)}
                    style={{ marginBottom: "10px", width: "100%" }}
                  >
                    <option value="" selected disabled>
                      Please Select
                    </option>
                    <option value="checkbox">Check Box</option>
                    <option value="select">Dropdown</option>
                    <option value="text">Text Input</option>
                    <option value="number">Number Input</option>
                  </Field>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={3}
                  style={{ paddingLeft: "0px" }}
                >
                  <label className={s.labelTextNew}> Option</label>
                </Col>
                <Col xs={12} sm={12} md={12} lg={9} className={s.categoryCol}>
                  <Field
                    name="fields"
                    component="select"
                    type="select"
                    className={bt.commonControlInput}
                    label={formatMessage(messages.categoryAdminCategory)}
                    style={{ marginBottom: "10px", width: "100%" }}
                  >
                    <option value="" selected disabled>
                      Please Select
                    </option>
                  </Field>
                </Col>
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

EditFieldsManagement = reduxForm({
  form: "EditFields", // a unique name for this form
  validate,
})(EditFieldsManagement);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(EditFieldsManagement))
);
