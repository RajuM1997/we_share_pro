import React, { Component } from "react";
import PropTypes from "prop-types";

import { Table, Tr, Td, Thead, Th } from "reactable";
import { connect } from "react-redux";
import moment from "moment";
import Link from "../../Link/Link";
import Confirm from "react-confirm-bootstrap";
import { Button } from "react-bootstrap";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./FieldManagement.css";
import bt from "../../../components/commonStyle.css";
import {
  deleteFields,
  updateFieldsStatus,
} from "../../../actions/siteadmin/deleteFields";
import history from "../../../core/history";

// Translation
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import messages from "../../../locale/messages";

import { openListSettingsModal } from "../../../actions/siteadmin/modalActions";
import NewListSettingModel from "../ListSettingsModel2/NewListSettingModel";
import {getFieldsBySubCategory} from "../../../helpers/graphQLHelper";

class FieldManagement extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        category: PropTypes.string,
        isEnable: PropTypes.string,
        image: PropTypes.string,
      })
    ),
    deleteFields: PropTypes.any,
    updateFieldsStatus: PropTypes.any,
  };

  static defaultProps = {
    fieldsData: [],
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      fieldsData: [],
      pageData: [],
    }
  }

  fetchPageData(subCategoryId) {
    getFieldsBySubCategory(subCategoryId).then(data => {
      this.setState({ pageData: data })
    }).catch(e => {
    })
  }

  componentDidMount() {
    console.log("this.props.subCategoryId", this.props.subCategoryId);
    this.fetchPageData(this.props.subCategoryId)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps?.subCategoryId) {
      this.fetchPageData(nextProps?.subCategoryId)
    }
  }

  handleClick() {
    history.push("/siteadmin/add");
  }
  render() {
    const {
      deleteFields,
      updateFieldsStatus,
      openListSettingsModal,
      subCategoryId,
    } = this.props;

    // console.log("data", subCategoryId);
    // console.log(deleteFields);
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
        <div>
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.field} />
          </h1>
          <NewListSettingModel subCategoryId={subCategoryId} />
          <div className={s.space4}>
            <Button
              className={cx(bt.btnPrimary, bt.btnLarge)}
              onClick={() => openListSettingsModal("AddListSettingsForm")}
            >
              <FormattedMessage {...messages.addNewLabel} />
            </Button>
          </div>
          <div
            className={cx(
              "table-responsive",
              "popularlocationlist",
              "tableBorderRadiusAdmin",
              "NewAdminResponsiveTable",
              "NewResponsiveTableAdmin"
            )}
          >
            <Table
              className="table"
              noDataText={formatMessage(messages.noRecordFound)}
            >
              <Thead>
                {/* <Th scope="col">{formatMessage(messages.categoryId)}</Th> */}
                <Th scope="col">{formatMessage(messages.fieldName)}</Th>
                <Th scope="col">{formatMessage(messages.fieldType)}</Th>
                <Th scope="col">{formatMessage(messages.fieldPageId)}</Th>
                <Th scope="col">{formatMessage(messages.setEnableDisable)}</Th>
                <Th scope="col">{formatMessage(messages.editLabel)}</Th>
                <Th scope="col">{formatMessage(messages.delete)}</Th>
              </Thead>
              {this.state?.pageData?.map((value, key) => {
                  return (
                    <Tr key={key}>
                      <Td
                        data-label={formatMessage(messages.fieldName)}
                        column={formatMessage(messages.fieldName)}
                        data={value.name}
                      />
                      <Td
                        data-label={formatMessage(messages.fieldPageId)}
                        column={formatMessage(messages.fieldPageId)}
                        className={s.imageurl}
                        data={value.pageId}
                      />
                      <Td
                        data-label={formatMessage(messages.fieldType)}
                        column={formatMessage(messages.fieldType)}
                        className={s.imageurl}
                        data={value.type}
                      />
                      <Td
                        data-label={formatMessage(messages.status)}
                        column={formatMessage(messages.status)}
                      >
                        {value.isEnable == "true"
                          ? formatMessage(messages.enabledLabel)
                          : formatMessage(messages.disabledLabel)}
                      </Td>
                      <Td
                        data-label={formatMessage(messages.setEnableDisable)}
                        column={formatMessage(messages.setEnableDisable)}
                      >
                        <a
                          href="javascript:void(0)"
                          onClick={() =>
                            updateFieldsStatus(value.id, value.isEnable)
                          }
                        >
                          {value.isEnable == "true"
                            ? formatMessage(messages.disableLabel)
                            : formatMessage(messages.enableLabel)}
                        </a>
                      </Td>
                      <Td
                        data-label={formatMessage(messages.editLabel)}
                        column={formatMessage(messages.editLabel)}
                      >
                        <Link to={"/siteadmin/edit/fields/" + value.id}>
                          <FormattedMessage {...messages.editLabel} />
                        </Link>
                      </Td>
                      <Td
                        data-label={formatMessage(messages.delete)}
                        column={formatMessage(messages.delete)}
                      >
                        <div>
                          <Confirm
                            onConfirm={() => deleteFields(value.id)}
                            body={formatMessage(
                              messages.areYouSureDeleteWishList
                            )}
                            confirmText={formatMessage(messages.confirmDelete)}
                            cancelText={formatMessage(messages.cancel)}
                            title={formatMessage(
                              messages.deletePopularLocationLabel
                            )}
                          >
                            <a href="javascript:void(0)">
                              <FormattedMessage {...messages.delete} />
                            </a>
                          </Confirm>
                        </div>
                      </Td>
                    </Tr>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = {
  deleteFields,
  updateFieldsStatus,
  openListSettingsModal,
};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(FieldManagement))
);
