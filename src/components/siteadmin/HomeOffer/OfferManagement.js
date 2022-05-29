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
import s from "./OfferManagement.css";
import bt from "../../../components/commonStyle.css";
import {
  deleteOffer,
  updateOfferStatus,
} from "../../../actions/siteadmin/deleteOffer";
import history from "../../../core/history";

// Translation
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import messages from "../../../locale/messages";

class OfferManagement extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        location: PropTypes.string,
        locationAddress: PropTypes.string,
        isEnable: PropTypes.string,
        images: PropTypes.string,
      })
    ),
    deleteOffer: PropTypes.any,
    updateOfferStatus: PropTypes.any,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    history.push("/siteadmin/offer/add");
  }

  render() {
    const { data, deleteOffer, updateOfferStatus } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
        <div>
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.category} />
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
                <Th scope="col">{formatMessage(messages.categoryId)}</Th>
                <Th scope="col">{formatMessage(messages.categoryName)}</Th>
                <Th scope="col">{formatMessage(messages.categoryStatus)}</Th>
                <Th scope="col">{formatMessage(messages.categoryOperation)}</Th>
              </Thead>
              {data &&
                data.map(function(value, key) {
                  let isStatus;
                  return (
                    <Tr key={key}>
                      <Td
                        data-label={formatMessage(messages.idLabel)}
                        column={formatMessage(messages.idLabel)}
                        data={value.id}
                      />
                      <Td
                        data-label={formatMessage(messages.location)}
                        column={formatMessage(messages.location)}
                        data={value.location}
                      />
                      <Td
                        data-label={formatMessage(messages.locationAddress)}
                        column={formatMessage(messages.locationAddress)}
                        className={s.imageurl}
                        data={value.locationAddress}
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
                            updateOfferStatus(value.id, value.isEnable)
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
                        <Link
                          to={"/siteadmin/edit/popularlocation/" + value.id}
                        >
                          <FormattedMessage {...messages.editLabel} />
                        </Link>
                      </Td>
                      <Td
                        data-label={formatMessage(messages.delete)}
                        column={formatMessage(messages.delete)}
                      >
                        <div>
                          <Confirm
                            onConfirm={() => deleteOffer(value.id)}
                            body={formatMessage(
                              messages.areYouSureDeleteWishList
                            )}
                            confirmText={formatMessage(messages.confirmDelete)}
                            cancelText={formatMessage(messages.cancel)}
                            title={formatMessage(messages.deleteOfferLabel)}
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
  deleteOffer,
  updateOfferStatus,
};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(OfferManagement))
);
