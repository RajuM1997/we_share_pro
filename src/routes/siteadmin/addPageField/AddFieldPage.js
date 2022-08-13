import React from "react";
import PropTypes from "prop-types";
import { compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./AddPageField.css";
import AddPageFieldManagement from "../../../components/siteadmin/AddPageField/AddPageFieldManagement";

class AddField extends React.Component {
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
      title,
      subCategoryId,
    } = this.props;

    return (
      <AddPageFieldManagement title={title} subCategoryId={subCategoryId} />
    );
  }
}

export default compose(withStyles(s))(AddField);
