import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditPageFieldManagement.css";
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

class EditPageFieldManagement extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    initialValues: PropTypes.object,
  };

  static defaultProps = {
    data: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  renderFormControl = ({
    input,
    label,
    type,
    meta: { touched, error },
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl {...input} type={type} className={className} />
        {touched && error && (
          <span className={s.errorMessage}>{formatMessage(error)}</span>
        )}
      </div>
    );
  };
  render() {
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      initialValues,
      subId,
    } = this.props;
    const { data } = this.props;
    const { formatMessage } = this.props.intl;
    // console.log(initialValues.id);
    // for (const key of initialValues) {
    //   console.log(key[initialValues]);
    // }
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
                to={`/siteadmin/fieldSetting/${data.subCategoryId}`}
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
                  label={formatMessage(messages.categoryAdminTitle)}
                />
                <Field
                  disabled
                  name="pageId"
                  type="number"
                  component={this.renderFormControl}
                  label={formatMessage(messages.adminPageFieldPageId)}
                />
                <div className={s.selectField}>
                  <label className={cx(s.labelTextNew)}>Step</label>
                  <Field
                    name="step"
                    component="select"
                    type="select"
                    className={bt.commonControlInput}
                    style={{ marginBottom: "10px", width: "100%" }}
                  >
                    <option value="" selected disabled>
                      Please Select
                    </option>
                    <option value={1}>Step1</option>
                    <option value={2}>Step2</option>
                    <option value={3}>Step3</option>
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

EditPageFieldManagement = reduxForm({
  form: "EditPageField", // a unique name for this form
  validate,
})(EditPageFieldManagement);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(EditPageFieldManagement))
);
