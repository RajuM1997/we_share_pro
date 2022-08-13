import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditFields.css";
// Component
import EditFieldsManagement from "../../../components/siteadmin/EditFields/EditFieldsManagement";

// Query
import editFieldsQuery from "./editFields.graphql";

class EditPageField extends React.Component {
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
      data: { loading, editFields },
      title,
    } = this.props;
    return <EditFieldsManagement title={title} initialValues={editFields} />;
  }
}

export default compose(
  withStyles(s),
  graphql(editFieldsQuery, {
    options: (props) => ({
      variables: {
        id: props.id,
      },
      fetchPolicy: "network-only",
    }),
  })
)(EditPageField);
