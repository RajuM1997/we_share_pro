import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditPageField.css";

// Component
import EditPageFieldManagement from "../../../components/siteadmin/EditPageField/EditPageFieldManagement";

// Query
import editPageFieldQuery from "./editPageField.graphql";

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
      data: { loading, editPageField },
      title,
    } = this.props;
    return (
      <EditPageFieldManagement title={title} initialValues={editPageField} />
    );
  }
}

export default compose(
  withStyles(s),
  graphql(editPageFieldQuery, {
    options: (props) => ({
      variables: {
        id: props.id,
      },
      fetchPolicy: "network-only",
    }),
  })
)(EditPageField);
