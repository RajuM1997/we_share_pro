import React from "react";
import PropTypes from "prop-types";
import { compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./AddSubCategory.css";
import AddSubCategoryManagement from "../../../components/siteadmin/AddSubCategory/AddSubCategoryManagement";

// Component
// import AddCategoryManagement from "../../../components/siteadmin/AddCategory/AddCategoryManagement";
// /home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AddCategory/AddCategoryManagement.js
class AddSubCategory extends React.Component {
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

    return <AddSubCategoryManagement />;
  }
}

export default compose(withStyles(s))(AddSubCategory);
