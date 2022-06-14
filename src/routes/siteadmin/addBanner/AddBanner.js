import React from "react";
import PropTypes from "prop-types";
import { compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./AddBanner.css";
import AddBannerManagement from "../../../components/siteadmin/AddBanner/AddBannerManagement";

class AddBanner extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
    }),
  };

  static defaultProps = {
    data: {
      loading: true,
    },
  };

  render() {
    const {
      data: { loading },
    } = this.props;

    return <AddBannerManagement />;
  }
}

export default compose(withStyles(s))(AddBanner);
