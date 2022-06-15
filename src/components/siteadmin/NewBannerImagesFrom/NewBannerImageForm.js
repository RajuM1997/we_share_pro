// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import { Field, reduxForm } from "redux-form";
// import submit from "./submit";
// import validate from "./validate";

// // Style
// import {
//   Button,
//   Row,
//   FormGroup,
//   Col,
//   FormControl,
//   Panel,
// } from "react-bootstrap";
// import cx from "classnames";
// import withStyles from "isomorphic-style-loader/lib/withStyles";
// import s from "./NewBannerImageForm.css";
// import bt from "../../../components/commonStyle.css";

// // Component
// import Uploader from "./Uploader/Uploader";
// import Loader from "../../Loader/Loader";

// // Translation
// import { FormattedMessage, injectIntl } from "react-intl";
// import messages from "../../../locale/messages";

// class NewImageBannerForm extends Component {
//   static propTypes = {
//     initialValues: PropTypes.object,
//     title: PropTypes.string.isRequired,
//     bannerNewUploaderLoading: PropTypes.bool,
//   };

//   renderFormControl = ({
//     input,
//     label,
//     type,
//     meta: { touched, error },
//     className,
//   }) => {
//     const { formatMessage } = this.props.intl;
//     return (
//       <FormGroup className={s.space3}>
//         <Row>
//           <Col xs={12} sm={12} md={12} lg={3}>
//             <label className={s.labelTextNew}>{label}</label>
//           </Col>
//           <Col xs={12} sm={12} md={12} lg={9}>
//             <FormControl
//               {...input}
//               type={type}
//               className={bt.commonControlInput}
//             />
//             {touched && error && (
//               <span className={s.errorMessage}>{formatMessage(error)}</span>
//             )}
//           </Col>
//         </Row>
//       </FormGroup>
//     );
//   };

//   render() {
//     const { formatMessage } = this.props.intl;
//     const {
//       error,
//       handleSubmit,
//       submitting,
//       dispatch,
//       initialValues,
//       image,
//       bannerNewUploaderLoading,
//     } = this.props;
//     return (
//       <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
//         <div>
//           <h1 className={s.headerTitle}>
//             <FormattedMessage {...messages.homepageBannererSettings} />
//           </h1>
//           <Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
//             <Panel className={s.panelHeader}>
//               <form onSubmit={handleSubmit(submit)}>
//                 {error && <strong>{formatMessage(error)}</strong>}
//                 <FormGroup className={s.space3}>
//                   <Row>
//                     <Col xs={12} sm={12} md={12} lg={3}>
//                       <label className={s.labelTextNew}>
//                         <FormattedMessage {...messages.bannerImage} />
//                       </label>
//                     </Col>
//                     <Col xs={12} sm={12} md={12} lg={9}>
//                       <div>
//                         <Uploader
//                           data={image}
//                           placeholder={formatMessage(
//                             messages.photosPlaceholder
//                           )}
//                         />
//                       </div>
//                       <Loader show={bannerNewUploaderLoading} type={"page"}>
//                         {image != null && (
//                           <Col
//                             xs={12}
//                             sm={6}
//                             md={6}
//                             lg={4}
//                             className={s.noPadding}
//                           >
//                             <div
//                               style={{
//                                 backgroundImage: `url(/images/bannerNew/${image})`,
//                               }}
//                               className={s.bannerImageBg}
//                             />
//                           </Col>
//                         )}
//                       </Loader>
//                     </Col>
//                   </Row>
//                 </FormGroup>
//                 <Field
//                   name="title"
//                   type="text"
//                   component={this.renderFormControl}
//                   label={formatMessage(messages.titleAdminLabel)}
//                 />
//                 <Field
//                   name="description"
//                   type="text"
//                   component={this.renderFormControl}
//                   label={formatMessage(messages.descriptionAdminLabel)}
//                 />
//                 <Field
//                   name="colorText"
//                   type="text"
//                   component={this.renderFormControl}
//                   label={formatMessage(messages.buttonLabel)}
//                 />
//                 <Field
//                   name="bottomText"
//                   type="text"
//                   component={this.renderFormControl}
//                   label={formatMessage(messages.bottomText)}
//                 />
//                 <label>Category</label>
//                 <br />
//                 <Field
//                   name="category"
//                   component="select"
//                   type="select"
//                   className={bt.commonControlInput}
//                   label={formatMessage(messages.bottomText)}
//                 >
//                   <option />
//                   <option value="Vacation Home">Vacation Home</option>
//                   <option value="Events Space">Events Space</option>
//                   <option value="Vehicles">Vehicles</option>
//                   <option value="RVs">RVs</option>
//                   <option value="Boats">Boats</option>
//                   <option value="Bikes">Bikes</option>
//                   <option value="Electronics">Electronics</option>
//                   <option value="Power Tools">Power Tools</option>
//                   <option value="0000ff">Film Equipment</option>
//                   <option value="Event Equipment">Event Equipment</option>
//                   <option value="Parking">Parking</option>
//                 </Field>
//                 <FormGroup className={s.space1}>
//                   <Row>
//                     <Col
//                       xs={12}
//                       sm={12}
//                       md={12}
//                       lg={12}
//                       className={cx(bt.textAlignRight, "textAlignLeftRtl")}
//                     >
//                       <Button
//                         className={cx(bt.btnPrimary, bt.btnLarge)}
//                         type="submit"
//                         disabled={submitting}
//                       >
//                         <FormattedMessage {...messages.save} />
//                       </Button>
//                     </Col>
//                   </Row>
//                 </FormGroup>
//               </form>
//             </Panel>
//           </Col>
//         </div>
//       </div>
//     );
//   }
// }

// NewImageBannerForm = reduxForm({
//   form: "addNewBanner", // a unique name for this form
//   validate,
// })(NewImageBannerForm);

// const mapState = (state) => ({
//   bannerNewUploaderLoading: state.siteSettings.bannerNewUploaderLoading,
// });

// const mapDispatch = {};

// export default injectIntl(
//   withStyles(s, bt)(connect(mapState, mapDispatch)(NewImageBannerForm))
// );

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./NewBannerImageForm.css";
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
import Uploader from "./Uploader/Uploader";
// import PlaceGeoSuggest from "./PlaceGeoSuggest/PlaceGeoSuggest";

// Translation
import { FormattedMessage } from "react-intl";
import messages from "../../../locale/messages";

class NewBannerImageForm extends React.Component {
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
            <label className={s.labelTextNew}>{type}</label>
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
            <label className={s.labelTextNew}>{label}</label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <PlaceGeoSuggest
              {...input}
              label={""}
              className={className}
              formName={"AddCategory"}
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
            <FormattedMessage {...messages.addCategory} />
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
                <Field
                  name="title"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.categoryTypeInputText)}
                />
                <Field
                  name="subTitle"
                  type="text"
                  component={this.renderFormControl}
                  label={formatMessage(messages.categorySub)}
                />
                <Field
                  name="category"
                  component="select"
                  type="select"
                  className={bt.commonControlInput}
                >
                  <label className={s.labelTextNew}>
                    {formatMessage(messages.categoryType)}
                  </label>
                  <option />
                  <option value="Vacation Home">Vacation Home</option>
                  <option value="Events Space">Events Space</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="RVs">RVs</option>
                  <option value="Boats">Boats</option>
                  <option value="Bikes">Bikes</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Power Tools">Power Tools</option>
                  <option value="0000ff">Film Equipment</option>
                  <option value="Event Equipment">Event Equipment</option>
                  <option value="Parking">Parking</option>
                </Field>
                {/* <Field
                  name="subTitle"
                  type="text"
                  component={this.renderPlacesSuggest}
                  label={formatMessage(messages.locationAddress)}
                /> */}
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
NewBannerImageForm = reduxForm({
  form: "addBanner", // a unique name for this form
  validate,
})(NewBannerImageForm);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(NewBannerImageForm))
);