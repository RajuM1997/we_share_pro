import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./NavigationBeforeLogin.css";

import { Nav } from "react-bootstrap";

// Modals
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import ForgotPassword from "../ForgotPassword";
import HeaderModal from "../HeaderModal";

import NavLink from "../NavLink";

// Redux
import { connect } from "react-redux";

// Locale
import messages from "../../locale/messages";

import { openHeaderModal } from "../../actions/modalActions";

import { showCurrencySymbol } from "../../helpers/currencyConvertion";
import { formatLocale } from "../../helpers/formatLocale";
import SearchOption from "../Home/SearchOption/SearchOption";

class NavigationBeforeLogin extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      change: false,
    };
    this.state = {
      setActiveAnimation: true,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log("add event");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("remove event");
  }

  handleScroll = (e) => {
    if (window.scrollY >= 1) {
      this.setState({ change: false });
    } else {
      this.setState({ change: true });
    }
  };
  static propTypes = {
    className: PropTypes.string,
    setUserLogout: PropTypes.any,
    openLoginModal: PropTypes.any,
    openSignupModal: PropTypes.any,
  };

  render() {
    const {
      className,
      openLoginModal,
      openSignupModal,
      openHeaderModal,
    } = this.props;
    const { toCurrency, baseCurrency, currentLocale, openClose } = this.props;
    let displayCurrency = toCurrency ? toCurrency : baseCurrency;

    return (
      <div className={!this.state.change ? s.active_navbar_default : ""}>
        <div className={s.nav_search_main}>
          <div className={s.search_container}>
            {!this.state.change && (
              <>
                <SearchOption />

                <div className={s.logSin}>
                  <NavLink to="#" noLink onClick={openLoginModal}>
                    <FormattedMessage {...messages.login} />
                  </NavLink>
                  <span className={s.rightBorder}></span>
                  <NavLink
                    to="#"
                    noLink
                    onClick={openSignupModal}
                    className={s.signup}
                  >
                    <FormattedMessage {...messages.signup} />
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
        <LoginModal />
        <SignupModal />
        <ForgotPassword />
        <HeaderModal modalType={"languageModal"} />
        <HeaderModal modalType={"currencyModal"} />
        <Nav
          pullRight
          className={
            !this.state.change
              ? cx("floatLeftAR", s.navbarLeft)
              : cx("floatLeftAR", s.navbarLeftActive)
          }
        >
          {/* <Nav pullRight className={s.newMenu}></Nav> */}
          <NavLink to="/" className={cx("hidden-lg", s.newMenuDesign)}>
            <FormattedMessage {...messages.home} />
          </NavLink>
          <NavLink
            noLink
            onClick={(e) => openHeaderModal("languageModal")}
            className={cx(s.breakPointScreen)}
          >
            {formatLocale(currentLocale)}
          </NavLink>
          <span className={s.rightBorder}></span>
          <NavLink
            noLink
            onClick={(e) => openHeaderModal("currencyModal")}
            className={cx(s.breakPointScreen)}
          >
            {showCurrencySymbol(displayCurrency, currentLocale) +
              displayCurrency}
          </NavLink>
          <span className={s.rightBorder}></span>
          <NavLink to="/whyhost">
            <FormattedMessage {...messages.becomeAHost} />
          </NavLink>
          <span className={s.rightBorder}></span>
          <NavLink to="/whyhosts">
            <FormattedMessage {...messages.becomeAHost2} />
          </NavLink>
          <span className={s.rightBorder}></span>
          <NavLink to="/">
            <FormattedMessage {...messages.howItWork} />
          </NavLink>
          <span className={s.rightBorder}></span>
          {/* <NavLink to="/help">
          
            <FormattedMessage {...messages.help} />
          </NavLink> */}
          <NavLink to="#" noLink onClick={openLoginModal}>
            <FormattedMessage {...messages.login} />
          </NavLink>
          <span className={s.rightBorder}></span>
          <NavLink to="#" noLink onClick={openSignupModal} className={s.signup}>
            <FormattedMessage {...messages.signup} />
          </NavLink>
        </Nav>
      </div>
    );
  }
}

const mapState = (state) => ({
  baseCurrency: state.currency.base,
  toCurrency: state.currency.to,
  currentLocale: state.intl.locale,
});
const mapDispatch = {
  openHeaderModal,
};

export default withStyles(s)(
  connect(mapState, mapDispatch)(NavigationBeforeLogin)
);
