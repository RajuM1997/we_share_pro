import React, { Component } from "react";
import PropTypes from "prop-types";

import { Table, Tr, Td, Thead, Th } from "reactable";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import moment from "moment";
import Confirm from "react-confirm-bootstrap";

// Redux Action
import { removeListing } from "../../../actions/siteadmin/ListingManagement/removeListing";
import {
  addListToRecommended,
  removeListFromRecommended,
} from "../../../actions/siteadmin/ListingManagement/manageRecommend";

// import messages from './messages';
import { graphql, gql, compose } from "react-apollo";
import { FormattedMessage, injectIntl } from "react-intl";
import messages from "../../../locale/messages";

//Images
import ExportImage from "../../../../public/adminIcons/export.png";

// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./HostListingManagement.css";
import CustomPagination from "../../CustomPagination/CustomPagination";
import listingsQuery from "./listingsQuery.graphql";
import { FormControl } from "react-bootstrap";

class HostListingManagement extends React.Component {
  static propTypes = {
    getAllListings: PropTypes.array,
    addListToRecommended: PropTypes.func.isRequired,
    removeListFromRecommended: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      searchList: "",
      typing: false,
      typingTimeout: 0,
    };
    this.paginationData = this.paginationData.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  paginationData(currentPage) {
    const {
      getAllListings: { refetch },
    } = this.props;
    let variables = { currentPage };
    this.setState({ currentPage });
    refetch(variables);
  }
  handleClick(searchList) {
    const {
      getAllListings: { refetch },
    } = this.props;
    const { currentPage } = this.state;
    let variables = {
      currentPage: 1,
      searchList: searchList,
    };
    this.setState({ currentPage: 1 });
    refetch(variables);
  }
  handleSearchChange = (e) => {
    const self = this;
    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }
    self.setState({
      searchList: e.target.value,
      typing: false,
      typingTimeout: setTimeout(function() {
        self.handleClick(self.state.searchList);
      }, 450),
    });
  };

  async deleteListing(id, type) {
    const { removeListing } = this.props;
    const {
      getAllListings: { refetch },
    } = this.props;

    let variables = { currentPage: 1 };
    await removeListing(id, type);
    this.setState({ currentPage: 1 });
    await refetch(variables);
  }

  render() {
    const {
      intl,
      removeListing,
      addListToRecommended,
      removeListFromRecommended,
      data,
    } = this.props;
    const { currentPage, searchList } = this.state;
    const { formatMessage } = this.props.intl;

    return (
      <div className={cx(s.pagecontentWrapper, "pagecontentAR")}>
        <div>
          <h1 className={s.headerTitle}>
            <FormattedMessage {...messages.hostListingsManagement} />
          </h1>
          <div className={cx(s.exportSection, s.exportSectionGridSub)}>
            <div>
              <FormControl
                type="text"
                placeholder={formatMessage(messages.search)}
                onChange={(e) => this.handleSearchChange(e)}
                className={cx(
                  "searchInputControl",
                  "searchInputControlWidth",
                  "searchInputControlAR"
                )}
              />
            </div>
            <div>
              <a
                href={`/export-admin-data?type=listings&keyword=${searchList}`}
                className={cx(s.exportText, "commonFloatLeft")}
              >
                <span className={s.vtrMiddle}>
                  <FormattedMessage {...messages.exportDataIntoCSV} />
                </span>
                <span className={cx(s.exportLinkImg, "exportLinkImgCommon")}>
                  <img src={ExportImage} className={s.exportImg} />
                </span>
              </a>
            </div>
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
                <Th scope="col">{formatMessage(messages.approve)}</Th>
                <Th scope="col">{formatMessage(messages.reject)}</Th>
                {/* <Th scope="col">{formatMessage(messages.editLabel)}</Th>
                <Th scope="col">{formatMessage(messages.delete)}</Th> */}
              </Thead>
              {data &&
                data.map(function(value, key) {
                  console.log(value);
                  let isStatus;
                  return (
                    <Tr key={key}>
                      <Td
                        data-label={formatMessage(messages.idLabel)}
                        column={formatMessage(messages.idLabel)}
                        data={value.id}
                      />
                      <Td
                        data-label={formatMessage(messages.categoryName)}
                        column={formatMessage(messages.categoryName)}
                        data={value.title}
                      />
                      <Td
                        data-label={formatMessage(messages.locationAddress)}
                        column={formatMessage(messages.locationAddress)}
                        className={s.imageurl}
                        data={value.subTitle}
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
                            updateBannerStatus(value.id, value.isEnable)
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
                        <Link to={"/siteadmin/edit/banner/" + value.id}>
                          <FormattedMessage {...messages.editLabel} />
                        </Link>
                      </Td>
                      <Td
                        data-label={formatMessage(messages.delete)}
                        column={formatMessage(messages.delete)}
                      >
                        <div>
                          <Confirm
                            onConfirm={() => deleteHomeBanner(value.id)}
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
          <div>
            <div>
              <CustomPagination
                // total={getAllListings?.count}
                currentPage={currentPage}
                defaultCurrent={1}
                defaultPageSize={10}
                change={this.paginationData}
                paginationLabel={formatMessage(messages.lists)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = {
  removeListing,
  addListToRecommended,
  removeListFromRecommended,
};
export default compose(
  injectIntl,
  withStyles(s),
  connect(mapState, mapDispatch)
)(HostListingManagement);
