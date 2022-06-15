// General
import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Redux Form
import { reduxForm } from "redux-form";
// Translation
import { injectIntl } from "react-intl";

// Styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Header.css";
import cx from "classnames";
import { Navbar } from "react-bootstrap";

// Internal Components
import Link from "../Link";
import Navigation from "../Navigation";
import Logo from "../Logo";

// External Components
import Toaster from "../Toaster";
import LoadingBar from "react-redux-loading-bar";
import HeaderLocationSearch from "./HeaderLocationSearch";

// Redux action
import { toggleOpen, toggleClose } from "../../actions/Menu/toggleControl";

import history from "../../core/history";
import SearchOption from "../Home/SearchOption/SearchOption";

class HomeHeader extends React.Component {
  static propTypes = {
    borderLess: PropTypes.bool,
    showMenu: PropTypes.bool,
    toggleOpen: PropTypes.any.isRequired,
    formatMessage: PropTypes.any,
    checked: PropTypes.any,
  };

  static defaultProps = {
    borderLess: false,
    showMenu: false,
    searchDisablePages: ["/", "/home"],
  };
  constructor(props) {
    super(props);
    this.state = {
      searchHide: true,
      load: false,
      isOpen: 0,
      change: false,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleDisableSearchPages = this.handleDisableSearchPages.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.openClose = this.openClose.bind(this);
  }

  // componentDidMount() {

  //   console.log("add event");
  // }

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

  componentDidMount() {
    this.setState({
      load: true,
    });
    this.handleDisableSearchPages();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.handleDisableSearchPages();
  }

  handleMenu() {
    const { showMenu, toggleOpen, toggleClose } = this.props;
    if (showMenu) {
      toggleClose();
    } else {
      toggleOpen();
    }
  }

  handleDisableSearchPages() {
    const { searchDisablePages } = this.props;
    let location = history.location ? history.location.pathname : null;
    let searchHide = false;
    if (location && searchDisablePages.length > 0) {
      searchHide = searchDisablePages.find((o) => location === o);
      searchHide = searchHide ? true : false;
    }
    this.setState({
      searchHide,
    });
  }
  async openMenu() {
    this.setState({
      isOpen: 1,
    });
  }

  async openClose() {
    this.setState({
      isOpen: 0,
    });
  }
  render() {
    const {
      siteSettings,
      borderLess,
      showMenu,
      toggleOpen,
      layoutType,
    } = this.props;
    const { searchHide, load } = this.state;
    let borderClass, headerDesignClass;
    let location;
    if (borderLess) {
      borderClass = s.rentAllHeaderBorderLess;
    }

    if (layoutType && layoutType != 2) {
      headerDesignClass = "headerNewDesign";
    }

    if (history.location) {
      location = history.location.pathname;
    }

    if (!load) {
      return (
        <div className={cx(headerDesignClass)}>
          <div className={s.root} key={new Date().getTime()}>
            <Toaster />
            <LoadingBar />
            <div className={s.container}>
              <Navbar
                fluid
                className={cx(s.rentAllHeader, "rentAllHeader", borderClass, {
                  ["homeHeader"]: location === "/" || location === "/home",
                })}
                expanded={showMenu}
                onToggle={this.handleMenu}
              >
                <Navbar.Header
                  className={cx(
                    "logoPadding",
                    !showMenu ? "normalPosition" : "fixedPosition"
                  )}
                >
                  <Navbar.Brand>
                    <Logo link={"/"} className={cx(s.brand, s.brandImg)} />
                    <div
                      className={
                        !this.state.change
                          ? s.category_btn
                          : s.active_category_btn
                      }
                    >
                      <button>Category</button>
                    </div>
                  </Navbar.Brand>
                  <div onClick={() => this.openMenu()}>
                    <div
                      className={cx(
                        !this.state.change
                          ? "hidden-lg hamburgerButton"
                          : "active_hamburgerButton"
                      )}
                    >
                      <span
                        className={cx(
                          layoutType == 2 ? "menuToggleOne" : "menuToggle"
                        )}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                </Navbar.Header>
                <div
                  className={cx(
                    { [s.menuOpen]: this.state.isOpen == 1 },
                    s.mobileMenu
                  )}
                >
                  <div
                    className={cx(
                      { [s.menuClose]: this.state.isOpen == 0 },
                      s.rightMenuClose,
                      "hidden-lg"
                    )}
                  >
                    <div className={s.closeButtonPosition}>
                      <div
                        className={s.closeColor}
                        onClick={() => this.openClose()}
                      >
                        ×
                      </div>
                    </div>
                  </div>
                  {!searchHide && (
                    <Navbar.Form
                      pullLeft
                      className={("hidden-xs", s.breakPoint)}
                    >
                      <HeaderLocationSearch />
                    </Navbar.Form>
                  )}
                  <div onClick={() => this.openClose()}>
                    <Navigation openClose={this.state.isOpen} />
                  </div>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={
          !this.state.change ? s.active_navbar_default : cx(headerDesignClass)
        }
      >
        <div className={s.root}>
          <Toaster />
          <LoadingBar />
          <div className={s.container}>
            <Navbar
              fluid
              className={cx(
                s.rentAllHeader,
                "rentAllHeader",
                borderClass,
                { [s.fixedHeader]: location === "/s" },
                { ["homeHeader"]: location === "/" || location === "/home" }
              )}
              expanded={showMenu}
              onToggle={this.handleMenu}
            >
              <Navbar.Header
                className={cx(
                  "logoPadding",
                  !showMenu ? "normalPosition" : "fixedPosition"
                )}
              >
                <Navbar.Brand
                  className={
                    !this.state.change ? s.active_logo_main : s.logo_main
                  }
                >
                  <Logo link={"/"} className={cx(s.brand, s.brandImg)} />
                  <div
                    className={
                      this.state.change
                        ? cx(s.category_btn)
                        : cx(s.active_category_btn)
                    }
                  >
                    <button>Category</button>
                  </div>
                </Navbar.Brand>
                <div onClick={() => this.openMenu()}>
                  <div className={"hidden-lg hamburgerButton"}>
                    <div
                      className={
                        !this.state.change ? "menuToggle" : "active_menuToggle"
                      }
                    >
                      <span
                        className={cx(
                          layoutType == 2 ? "menuToggleOne" : "menuToggle"
                        )}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </Navbar.Header>
              {!this.state.change && (
                <div className={s.mobile_searchOption}>
                  <SearchOption />
                </div>
              )}
              <div
                className={cx(
                  { [s.menuOpen]: this.state.isOpen == 1 },
                  s.mobileMenu,
                  "homeMobileMenu"
                )}
              >
                <div
                  className={cx(
                    { [s.menuClose]: this.state.isOpen == 0 },
                    s.rightMenuClose,
                    "hidden-lg"
                  )}
                >
                  <div className={s.closeButtonPosition}>
                    <div
                      className={s.closeColor}
                      onClick={() => this.openClose()}
                    >
                      ×
                    </div>
                  </div>
                </div>
                {!searchHide && (
                  <Navbar.Form pullLeft className={("hidden-xs", s.breakPoint)}>
                    <HeaderLocationSearch />
                  </Navbar.Form>
                )}
                <div onClick={() => this.openClose()}>
                  <Navigation openClose={this.state.isOpen} />
                </div>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

HomeHeader = reduxForm({
  form: "HomeHeaderForm", // a unique name for this form
})(HomeHeader);

const mapState = (state) => ({
  siteSettings: state.siteSettings.data,
  showMenu: state.toggle.showMenu,
  layoutType: state.siteSettings.data.homePageType,
});

const mapDispatch = {
  toggleOpen,
  toggleClose,
};

export default injectIntl(
  withStyles(s)(connect(mapState, mapDispatch)(HomeHeader))
);
