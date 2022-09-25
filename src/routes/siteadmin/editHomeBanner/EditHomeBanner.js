import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./EditHomeBanner.css";

// Component
import EditHomeBannerManagement from "../../../components/siteadmin/EditHomeBanner/EditHomeBannerManagement";

// Query
import editHomeBannerQuery from "./editHomeBanner.graphql";

class EditHomeBanner extends React.Component {
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
      data: { loading, editHomeBanner },
      title,
      id,
    } = this.props;
    console.log("EditHomeBanner", editHomeBanner);
    return (
      <EditHomeBannerManagement
        title={title}
        initialValues={editHomeBanner}
        id={id}
      />
    );
  }
}

export default compose(
  withStyles(s),
  graphql(editHomeBannerQuery, {
    options: (props) => ({
      variables: {
        id: props.id,
      },
      fetchPolicy: "network-only",
    }),
  })
)(EditHomeBanner);
