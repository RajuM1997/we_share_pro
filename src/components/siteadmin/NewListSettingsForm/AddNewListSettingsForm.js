// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Fetch Request
import fetch from "../../../core/fetch";

// Redux Form
import { Field, reduxForm, formValueSelector, change } from "redux-form";
// import submit from "./submit";
import validate from "./validate";

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
import {
  Button,
  FormGroup,
  FormControl,
  Col,
  Row,
  Alert,
} from "react-bootstrap";
import { toastr } from "react-redux-toastr";
import submit from "./submit";

class AddListSettingsForm extends Component {
  static propTypes = {
    fieldType: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      title: "",
      name: "",
      type: "",
      label: "",
      value: "",
      pageId: "",
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

  addOption = (event) => {
    this.setState((thisState) => {
      return {
        ...thisState,
        fields: [
          ...thisState.fields,
          {
            label: thisState.label,
            value: thisState.value,
          },
        ],
        label: null,
        value: null,
      };
    });
  };

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, name, type, pageId } = this.state;
    if (title && name && type && pageId) {
      const data = {
        fields: JSON.stringify(this.state.fields),
        subCategoryId: Number(this.props.subCategoryId),
        title,
        name,
        type,
        pageId: Number(pageId),
      };
      submit(data, this.props.dispatch);
      console.log("data", data);
    } else {
      toastr.error("Error", "Field can't be empty");
    }
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
      listSettingsModalStatus,
      closeListSettingsModal,
    } = this.props;
    const { formatMessage } = this.props.intl;
    const { name, title, type, pageId } = this.state;
    const { data, subCategoryId } = this.props;
    // console.log(data);
    return (
      <div className={cx(s.formMaxWidth, "maxwidthcenter", "empty")}>
        <form onSubmit={this.handleSubmit}>
          {error && <strong>{formatMessage(error)}</strong>}
          <FormGroup className={s.space3}>
            <Field
              name="title"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.fieldTitle)}
              className={cx(bt.commonControlInput)}
              value={title}
              onChange={this.handleChanges}
            />
            <Field
              name="name"
              type="text"
              component={this.renderFormControl}
              label={formatMessage(messages.addName)}
              className={cx(bt.commonControlInput)}
              value={name}
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
              <option value="" selected disabled>
                Please Select
              </option>
              <option value="checkbox">Check Box</option>
              <option value="calendar">Calendar</option>
              <option value="select">Dropdown</option>
              <option value="text">Text Input</option>
              <option value="number">Number Input</option>
              <option value="image">Image</option>
              <option value="coverImage">Cover Image</option>
              <option value="title">Title</option>
              <option value="textarea">Textarea</option>
              <option value="price">Price</option>
              <option value="address">Address</option>
              <option value="map">Map</option>
              <option value="spaces">Spaces</option>
              <option value="houseType">House Type</option>
              <option value="roomType">Room Type</option>
              <option value="buildingSize">Building Size</option>
              <option value="bedroom">Bedroom</option>
              <option value="bathroomType">Bathroom Type</option>
              <option value="bookingNoticeTime">Booking Notice Time</option>
              <option value="maxDaysNotice">Max Days Notice</option>
              <option value="reviewGuestBook">Review Guest Book</option>
              <option value="guestRequirements">Guest Requirements</option>
              <option value="houseRules">House Rules</option>
              <option value="localLaws">Local Laws</option>
            </Field>

            {(this.state.type === "select" ||
              this.state.type === "checkbox") && (
              <Row>
                <Col xs={12}>
                  {this.state.fields.map((field, index) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 8,
                        background: "#f5f5f5",
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        marginBottom: 8,
                      }}
                    >
                      <span>
                        {field.label} ({field.value})
                      </span>
                      <button
                        onClick={() => {
                          const fields = [...this.state.fields];
                          fields.splice(index, 1);
                          this.setState({
                            fields,
                          });
                        }}
                        className={s.deleteBtn}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </Col>
                <Col xs={6}>
                  <label className={s.labelTextNew}>
                    {formatMessage(messages.labelOption)}
                  </label>
                  <FormControl
                    name="label"
                    type="text"
                    className={cx(bt.commonControlInput)}
                    value={this.state.label}
                    onChange={this.handleChanges}
                  />
                </Col>
                <Col xs={6}>
                  <label className={s.labelTextNew}>
                    {formatMessage(messages.valueOption)}
                  </label>
                  <FormControl
                    name="value"
                    type="text"
                    className={cx(bt.commonControlInput)}
                    value={this.state.value}
                    onChange={this.handleChanges}
                  />
                </Col>
                <Col xs={12}>
                  <Button
                    className={cx(bt.btnPrimaryBorder, bt.btnLarge)}
                    onClick={this.addOption}
                    style={{ marginTop: "10px" }}
                    type="reset"
                  >
                    {formatMessage(messages.add)}
                  </Button>
                </Col>
              </Row>
            )}
            <label
              className={s.labelTextNew}
              style={{ marginRight: "20px", marginBottom: "10px" }}
            >
              {formatMessage(messages.fieldsPageId)}
            </label>
            <br />
            <Field
              name="pageId"
              component="select"
              type="select"
              className={bt.commonControlInput}
              label={formatMessage(messages.fieldsPageId)}
              style={{ marginBottom: "10px" }}
              onChange={this.handleChanges}
              value={pageId}
            >
              <option value="" selected disabled>
                Please Select
              </option>
              {data?.map((page) => (
                <option value={page?.pageId}>{page?.pageId}</option>
              ))}
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
                  // onClick={() => listSettingsModalStatus(false)}
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
  validate,
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
