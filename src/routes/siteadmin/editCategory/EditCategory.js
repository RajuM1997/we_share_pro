import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditCategory.css";

// Component
import EditCategoryManagement from "../../../components/siteadmin/EditCategory/EditCategoryManagement";

// Query
import editCategoryQuery from "./editCategoryQuery.graphql";

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
      data: { loading, editCategory },
      title,
    } = this.props;
    return (
      <EditCategoryManagement title={title} initialValues={editCategory} />
    );
  }
}

export default compose(
  withStyles(s),
  graphql(editCategoryQuery, {
    options: (props) => ({
      variables: {
        id: props.id,
      },
      fetchPolicy: "network-only",
    }),
  })
)(EditCategory);
