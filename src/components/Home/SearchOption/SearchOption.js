import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import PropTypes from "prop-types";
import s from "./SearchOption.css";
import cx from "classnames";
import * as FontAwesome from "react-icons/lib/fa";
// Redux
import { connect } from "react-redux";

import { graphql, compose } from "react-apollo";

import getCategoryQuery from "./getCategory.graphql";
import getPopularLocationQuery from "./getPopularLocation.graphql";
import getHostListingQuery from "./getHostListing.graphql";
import history from "../../../core/history";
class SearchOption extends Component {
  static propTypes = {
    getCategoryData: PropTypes.shape({
      loading: PropTypes.bool,
      getCategoryData: PropTypes.array,
    }),
    getPopularLocationData: PropTypes.shape({
      loading: PropTypes.bool,
      getPopularLocationData: PropTypes.array,
    }),
    getHostListingData: PropTypes.shape({
      loading: PropTypes.bool,
      getHostListingData: PropTypes.array,
    }),
  };
  static defaultProps = {
    getCategoryData: {
      loading: true,
    },
    getPopularLocationData: {
      loading: true,
    },
    getHostListingData: {
      loading: true,
    },
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      what: null,
      where: "",
      when: "When",
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {
      getCategoryData: { getCategoryAdmin },
      getPopularLocationData: { getPopularLocationAdmin },
      getHostListingData: { getHostListing },
    } = this.props;
    console.log("getPopularLocationAdmin", getHostListing);
    const handleClick = () => {
      const filterData = getHostListing.filter((item) => {
        if (
          item.categoryId == this.state.what &&
          item.country == this.state.where
        ) {
          window.open(`/category/${this.state.what}`, "_blank");
          // history.push(`/category/${this.state.what}`, "_blank");
          return true;
        } else {
          window.open(`/category/${this.state.what}`, "_blank");
        }
      });
      sessionStorage.setItem("filterData", JSON.stringify(filterData));
      // console.log("hello", filterData);
    };

    return (
      <div className={s.search_main_container}>
        <div
          className={
            cx(s.icon_text)
            //    "active_icon_text text-center px-0"
          }
        >
          <div
            className={
              cx(s.margin, s.selector)
              //  : "active_selector margin ms-1"
            }
          >
            <select name="what" id="" onChange={this.handleChange}>
              <option
                disabled
                selected
                style={{ background: "#fff", padding: "0px 20px" }}
                id="red"
              >
                What
              </option>
              {getCategoryAdmin?.map((item, i) => {
                return (
                  <option
                    key={i}
                    style={{ background: "#fff", padding: "0px 20px" }}
                    id="red"
                    value={item.id}
                  >
                    {item.category}
                  </option>
                );
              })}
              {/* <FontAwesome.IoIosArrowDown /> */}
              {/* <option
              style={{ background: "#fff", padding: "20px" }}
              id="red"
              value=""
            >
              What
            </option> */}
            </select>
          </div>
          <div className={cx(s.margin, s.borderRight)}></div>
          <div
            className={
              cx(s.margin, s.selector)
              //   : "active_selector margin"
            }
          >
            <select name="where" id="" onChange={this.handleChange}>
              <option
                disabled
                selected
                style={{ background: "#fff", padding: "20px" }}
                id="red"
              >
                Where
              </option>
              {getPopularLocationAdmin?.slice(7, 12).map((item, i) => {
                return (
                  <option
                    key={i}
                    style={{
                      background: "#fff",
                    }}
                    id="red"
                    value={"AF"}
                  >
                    {item.location}
                  </option>
                );
              })}
              {/* <FontAwesome.IoIosArrowDown /> */}
            </select>
            {/* <FormControl
              componentClass="select"
              className={cx(
                s.formControlSelect,
                s.input,
                s.inputPadding,
                "inputPaddingAR"
              )}
              onChange={(e) =>
                setPersonalizedValues({
                  name: "personCapacity",
                  value: Number(e.target.value),
                })
              }
              defaultValue={"what"}
            >
              <option value="">what</option>
            </FormControl> */}
          </div>
          <div className={cx(s.margin, s.borderRight)}></div>

          <div
            className={
              cx(s.margin, s.selector)
              //   : "active_selector margin"
            }
          >
            {/* <select name="when" id="" onChange={this.handleChange}> */}
            {/* <option id="red" value="">
                When
                <input type="text" />
              </option> */}
            <span className={s.whenText}>{this.state.when}</span>
            <input
              name="when"
              id=""
              onChange={this.handleChange}
              type="date"
              placeholder="When"
              data-date-inline-picker="false"
            />
            {/* <FontAwesome.IoIosArrowDown /> */}
            {/* <option value="fa fa-angle-down">When&#xf107;</option> */}

            {/* <option value="">When</option> */}
            {/* </select> */}
          </div>
          <div
            className={
              cx(s.rightBorder, s.search_icon)
              // : "active_search_icon rightBorder"
            }
            onClick={handleClick}
          >
            {/* <i className="fas fa-search"></i> */}
            <FontAwesome.FaSearch />
          </div>
        </div>
        <div
          className={
            cx(s.list_items_btn)
            //    : "list_items_btn_active "
          }
        >
          <button>List An Item</button>
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({});
const mapDispatch = {};
export default compose(
  withStyles(s),
  graphql(getCategoryQuery, {
    name: "getCategoryData",
    options: {
      ssr: true,
    },
  }),
  graphql(getPopularLocationQuery, {
    name: "getPopularLocationData",
    options: {
      ssr: false,
    },
  }),
  graphql(getHostListingQuery, {
    name: "getHostListingData",
    options: {
      ssr: false,
    },
  }),
  connect(mapState, mapDispatch)
)(SearchOption);
