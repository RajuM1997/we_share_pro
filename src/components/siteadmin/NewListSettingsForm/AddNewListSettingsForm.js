// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Fetch Request
import fetch from "../../../core/fetch";

// Redux Form
import { Field, reduxForm, formValueSelector, change } from "redux-form";
import submit from "./submit";
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

class AddListSettingsForm extends Component {
  static propTypes = {
    fieldType: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      fieldType: null,
      selectedField: null,
      addOption: false,
      option: [],
      label: "",
      value: "",

      title: "",
      name: "",
      subTitle: "",
      step: "",
      pageId: "",
      type: "",
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
  shawOption() {
    this.setState({
      addOption: !this.state.addOption,
    });
  }

  handleOption = (event) => {
    this.setState({
      label: event.target.value,
      value: event.target.value,
    });
  };

  addOption = () => {
    this.setState({
      option: [
        ...this.state.option,
        { label: this.state.label, value: this.state.value },
      ],
    });
  };

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target.name.value;
    data.title = e.target.title.value;
    data.subTitle = e.target.subTitle.value;
    data.step = e.target.step.value;
    data.pageId = e.target.pageId.value;
    data.type = e.target.type.value;
    data.option = this.state.option;
    console.log(data);

    //   const resp = await fetch("/graphql", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: query,
    //     variables: data,
    //   }),
    //   credentials: "include",
    // });

    e.target.reset();
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
    console.log(this.state.option);
    const { name, title, subTitle, type, pageId, step } = this.state;
    return (
      <div className={cx(s.formMaxWidth, "maxwidthcenter", "empty")}>
        <pre></pre>
        <form onSubmit={this.handleSubmit}>
          {error && <strong>{formatMessage(error)}</strong>}
          <FormGroup className={s.space3}>
            <Field
              name="name"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.addName)}
              className={cx(bt.commonControlInput)}
              value={name}
              onChange={this.handleChanges}
            />
            <Field
              name="title"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.pageTitle)}
              className={cx(bt.commonControlInput)}
              value={title}
              onChange={this.handleChanges}
            />
            <Field
              name="subTitle"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.pageSubTitle)}
              className={cx(bt.commonControlInput)}
              value={subTitle}
              onChange={this.handleChanges}
            />
            <Field
              name="step"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.hostingStep)}
              className={cx(bt.commonControlInput)}
              value={step}
              onChange={this.handleChanges}
            />
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
              onChange={this.handleChanges}
              value={type}
            >
              <option value="checkbox">Check Box</option>
              <option value="calendar">Calendar</option>
              <option value="select">Dropdown</option>
              <option value="textInput">Input</option>
              <option value="image">Image</option>
              <option value="radio">Radio Button</option>
              <option value="checkboxImage">Check Box And Image</option>
              <option value="map">Map</option>
            </Field>

            {this.state.type == "select" && (
              <>
                <Button
                  className={cx(bt.btnPrimaryBorder, bt.btnLarge)}
                  onClick={() => this.shawOption()}
                >
                  {formatMessage(messages.addOptions)}
                </Button>
              </>
            )}
            {this.state.addOption && (
              <>
                <Field
                  name="label"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.fieldsOption)}
                  className={cx(bt.commonControlInput)}
                  value={this.state.label}
                  onChange={this.handleOption}
                />
                <Field
                  name="value"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.labelOption)}
                  className={cx(bt.commonControlInput)}
                  value={this.state.value}
                  onChange={this.handleOption}
                />
                <Button
                  className={cx(bt.btnPrimaryBorder, bt.btnLarge)}
                  onClick={this.addOption}
                  style={{ marginTop: "10px" }}
                >
                  {formatMessage(messages.add)}
                </Button>
              </>
            )}

            <Field
              name="pageId"
              type="number"
              component={this.renderFormControl}
              label={formatMessage(messages.fieldsPageId)}
              className={cx(bt.commonControlInput)}
              value={pageId}
              onChange={this.handleChanges}
            />
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

AddListSettingsForm = reduxForm({
  form: "AddListSettingsForm", // a unique name for this form
})(AddListSettingsForm);

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
  withStyles(s, bt)(connect(mapState, mapDispatch)(AddListSettingsForm))
);
