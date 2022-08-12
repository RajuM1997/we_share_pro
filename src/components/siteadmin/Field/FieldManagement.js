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
  deletePageField,
  updatePageFieldStatus,
} from "../../../actions/siteadmin/deletePageField";
import history from "../../../core/history";

// Translation
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import messages from "../../../locale/messages";
import { openListSettingsModal } from "../../../actions/siteadmin/modalActions";
import NewListSettingModel from "../ListSettingsModel2/NewListSettingModel";

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
    deletePageField: PropTypes.any,
    updatePageFieldStatus: PropTypes.any,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    history.push("/siteadmin/add");
  }
  render() {
    const { data, deletePageField, updatePageFieldStatus } = this.props;
    const { openListSettingsModal, page } = this.props;
    console.log(data);
    // console.log(deletePageField);
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
        <div>
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.field} />
          </h1>
          <NewListSettingModel />
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
              </Thead>
              {data &&
                data.map(function(value, key) {
                  console.log(value);
                  let isStatus;
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
                            updatePageFieldStatus(value.id, value.isEnable)
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
                        <Link to={"/siteadmin/edit/category/" + value.id}>
                          <FormattedMessage {...messages.editLabel} />
                        </Link>
                      </Td>
                      <Td
                        data-label={formatMessage(messages.delete)}
                        column={formatMessage(messages.delete)}
                      >
                        <div>
                          <Confirm
                            onConfirm={() => deletePageField(value.id)}
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
  deletePageField,
  updatePageFieldStatus,
  openListSettingsModal,
};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(FieldManagement))
);
