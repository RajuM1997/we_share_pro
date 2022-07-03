import React from "react";
import PropTypes from "prop-types";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./BecomeHost.css";
import cx from "classnames";

// Component
import ListsPlaceStep1 from "../../components/ListsPlaceStep1/ListsPlaceStep1";

class BecomeHosts extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
    listId: PropTypes.number,
    formBaseURI: PropTypes.string,
    mode: PropTypes.string,
  };

  render() {
    const {
      title,
      formPage,
      formBaseURI,
      mode,
      listId,
      baseCurrency,
    } = this.props;
    return (
      <div className={s.root}>
        <div className={cx(s.container, "existingPage")}>
          <ListsPlaceStep1
            listId={listId}
            formPage={formPage}
            formBaseURI={formBaseURI}
            mode={mode}
            baseCurrency={baseCurrency}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BecomeHosts);
