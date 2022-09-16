import React from "react";
import PropTypes from "prop-types";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ListingDetails.css";
import { Row, Col } from "react-bootstrap";
import cx from "classnames";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

class ListBedTypes extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className={cx(s.horizontalLineThrough)}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space1)}>
            <p className={s.textMutedNew}> Beds </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className={cx(s.spaceTop1)}>
            <Row>
              <Col md={12} lg={12}>
                <p className={s.splitList}>
                  <span>
                    {data?.bedTypes}: {data?.beds}
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(withStyles(s)(ListBedTypes));
