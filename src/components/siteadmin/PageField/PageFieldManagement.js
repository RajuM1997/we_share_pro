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
import s from "./PageFieldManagement.css";
import bt from "../../../components/commonStyle.css";
import {
  deletePageField,
  updatePageFieldStatus,
} from "../../../actions/siteadmin/deletePageField";
import history from "../../../core/history";

// Translation
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import messages from "../../../locale/messages";

class PageFieldManagement extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        step: PropTypes.string,
        pageId: PropTypes.number,
        isEnable: PropTypes.string,
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
    history.push("/siteadmin/pageField/add");
  }

  render() {
    const { data, deletePageField, updatePageFieldStatus } = this.props;
    console.log(data);
    // console.log(deletePageField);
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
        <div>
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.field} />
          </h1>
          <div className={s.space4}>
            <Button
              onClick={this.handleClick}
              className={cx(bt.btnPrimary, bt.btnLarge)}
            >
              <FormattedMessage {...messages.addNew} />
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
                <Th scope="col">{formatMessage(messages.fieldPageId)}</Th>
                <Th scope="col">{formatMessage(messages.pageFieldStep)}</Th>
                <Th scope="col">{formatMessage(messages.pageFieldTitle)}</Th>
                <Th scope="col">{formatMessage(messages.setEnableDisable)}</Th>
                <Th scope="col">{formatMessage(messages.editLabel)}</Th>
                <Th scope="col">{formatMessage(messages.delete)}</Th>
              </Thead>
              {data &&
                data.map(function(value, key) {
                  console.log(value);
                  let isStatus;
                  return (
                    <Tr key={key}>
                      <Td
                        data-label={formatMessage(messages.fieldPageId)}
                        column={formatMessage(messages.fieldPageId)}
                        data={value.pageId}
                      />
                      <Td
                        data-label={formatMessage(messages.pageFieldTitle)}
                        column={formatMessage(messages.pageFieldTitle)}
                        data={value.title}
                      />
                      <Td
                        data-label={formatMessage(messages.pageFieldStep)}
                        column={formatMessage(messages.pageFieldStep)}
                        className={s.imageurl}
                        data={value.step}
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
                        <Link to={"/siteadmin/edit/pageField/" + value.id}>
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
};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(PageFieldManagement))
);
