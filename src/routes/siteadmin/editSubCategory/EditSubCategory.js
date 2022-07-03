import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditSubCategory.css";

// Component
import EditSubCategoryManagement from "../../../components/siteadmin/EditSubCategory/EditSubCategoryManagement";
// Query
import editSubCategoryQuery from "./editSubCategoryQuery.graphql";

class EditCategory extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
    }),
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    data: {
      loading: true,
    },
  };

  render() {
    const {
      data: { loading, editSubCategory },
      title,
    } = this.props;
    return (
      <EditSubCategoryManagement
        title={title}
        initialValues={editSubCategory}
      />
    );
  }
}

export default compose(
  withStyles(s),
  graphql(editSubCategoryQuery, {
    options: (props) => ({
      variables: {
        id: props.id,
      },
      fetchPolicy: "network-only",
    }),
  })
)(EditCategory);
