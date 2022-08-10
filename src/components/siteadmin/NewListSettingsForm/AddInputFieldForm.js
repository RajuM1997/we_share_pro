// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm, formValueSelector, change } from "redux-form";
import submit from "../ListSettingsForm/submit";
// import validate from "./validate";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";
import messages from "../../../locale/messages";

// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import s from "./NewListSettingForm.css";
import bt from "../../../components/commonStyle.css";
import { Button, FormGroup, FormControl, Col, Row } from "react-bootstrap";
import NewListSettingModel from "../ListSettingsModel2/NewListSettingModel";
// import DropZone from "./DropZone";
// import { url } from "../../../config";

// Asset
// import defaultPic from "../../../../public/adminIcons/defaultAdmin.svg";
// import DeleteIcon from "../../../../public/adminIcons/dlt.png";

class AddInputFieldForm extends Component {
  static propTypes = {
    fieldType: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      fieldType: null,
      selectedField: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { fieldType } = this.props;
    if (fieldType != undefined) {
      this.setState({ fieldType: fieldType });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { fieldType } = nextProps;
    if (fieldType != undefined) {
      this.setState({ fieldType: fieldType });
    }
  }
  onSelectChanged(event) {
    this.setState({ selectedField: event.target.value });
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

  renderFormControlTextArea = ({
    input,
    label,
    meta: { touched, error },
    children,
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <FormGroup>
        <label className={s.labelTextNew}>{label}</label>
        <FormControl {...input} className={className} componentClass="textarea">
          {children}
        </FormControl>
        {touched && error && (
          <span className={s.errorMessage}>{formatMessage(error)}</span>
        )}
      </FormGroup>
    );
  };

  async handleChange(e) {
    const { change } = this.props;
    await change("image", null);
  }

  render() {
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      typeId,
      initialValues,
      image,
      openListSettingsModal,
    } = this.props;
    const { formatMessage } = this.props.intl;
    const { fieldType } = this.state;
    console.log(this.state.selectedField);

    return (
      <div className={cx(s.formMaxWidth, "maxwidthcenter", "empty")}>
        <form onSubmit={handleSubmit(submit)}>
          {error && <strong>{formatMessage(error)}</strong>}
          <div> </div>
          <FormGroup className={s.space3}>
            <label
              className={s.labelTextNew}
              style={{ marginRight: "20px", marginBottom: "10px" }}
            >
              Type
            </label>
            <br />
            <Field
              name="type"
              component="select"
              type="select"
              className={bt.commonControlInput}
              label={formatMessage(messages.categoryAdminCategory)}
              style={{ marginBottom: "10px" }}
              onChange={this.onSelectChanged.bind(this)}
            >
              <option value="checkbox">Check Box</option>
            </Field>
          </FormGroup>
          <FormGroup className={s.space1}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={cx(
                  bt.textAlignRight,
                  s.spaceTop3,
                  "textAlignLeftRtl"
                )}
              >
                <Button
                  className={cx(bt.btnPrimaryBorder, bt.btnLarge)}
                  type="submit"
                  disabled={submitting}
                >
                  {formatMessage(messages.add)}
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </form>
      </div>
    );
  }
}

AddInputFieldForm = reduxForm({
  form: "AddInputFieldForm", // a unique name for this form
})(AddInputFieldForm);

// Decorate with connect to read form values
const selector = formValueSelector("AddNewListSettingsForm"); // <-- same as form name

const mapState = (state) => ({
  typeId: selector(state, "typeId"),
  image: selector(state, "image"),
});

const mapDispatch = {
  change,
};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(AddInputFieldForm))
);
