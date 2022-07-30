import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./AdminLayout.css";
import AdminHeader from "../Header/AdminHeader";
import AdminFooter from "../siteadmin/AdminFooter";
import SideBar from "../siteadmin/SideBar";
import history from "../../core/history";
import { graphql, compose } from "react-apollo";
import getSubCategory from "./getSubCategory.graphql";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getCategory: PropTypes.array,
    }),
  };
  static defaultProps = {
    data: {
      loading: true,
    },
  };

  render() {
    let location;
    if (history.location) {
      location = history.location.pathname;
    }
    const {
      data: { loading },
    } = this.props;

    const {
      data: { getSubCategory },
    } = this.props;

    return (
      <div className="adminstyle">
        <AdminHeader />
        <div>
          <SideBar
            location={location}
            changeLocation={this.changeLocation}
            data={getSubCategory}
          />
          <div className={"hamburger"}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
        </div>
        <div>{this.props.children}</div>
        <div>
          <AdminFooter />
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  graphql(getSubCategory, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(Layout);
