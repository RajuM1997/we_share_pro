// import React from "react";
// import PropTypes from "prop-types";
// import { graphql, gql, compose } from "react-apollo";

// // Style
// import withStyles from "isomorphic-style-loader/lib/withStyles";

// class Categorys extends React.Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     data: PropTypes.shape({
//       loading: PropTypes.bool,
//     }),
//   };

//   static defaultProps = {
//     data: {
//       loading: true,
//     },
//   };

//   render() {
//     const {
//       data: { loading },
//     } = this.props;
//     return <PopularLocationManagement data={getPopularLocation} />;
//   }
// }

// export default compose(
//   withStyles(s),
//   graphql(getPopularLocation, {
//     options: {
//       fetchPolicy: "network-only",
//       ssr: false,
//     },
//   })
// )(PopularLocation);
