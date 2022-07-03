// General
import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";

// Translation
import { injectIntl } from "react-intl";

// Styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Header.css";
import cx from "classnames";
import { Navbar } from "react-bootstrap";

// Internal Components
import Navigation from "../Navigation";
import Logo from "../Logo";

// External Components
import Toaster from "../Toaster";
import LoadingBar from "react-redux-loading-bar";
import HeaderLocationSearch from "./HeaderLocationSearch";

// Redux action
import { toggleOpen, toggleClose } from "../../actions/Menu/toggleControl";

import history from "../../core/history";
import { closeLoginModal } from "../../actions/modalActions";
import SearchOption from "../Home/SearchOption/SearchOption";

class Header extends React.Component {
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
    // this.handleScroll = this.handleScroll.bind(this);
    this.handleDisableSearchPages = this.handleDisableSearchPages.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.openClose = this.openClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      load: true,
    });
    this.handleDisableSearchPages();
    this.setState({
      load: true,
    });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    if (window.scrollY >= 1) {
      this.setState({ change: false });
    } else {
      this.setState({ change: true });
    }
  };

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
    if (this.state.isOpen == 0) {
      document.body.classList.add("menu-open");
    }
  }

  async openClose() {
    this.setState({
      isOpen: 0,
    });
    if (this.state.isOpen == 1) {
      document.body.classList.remove("menu-open");
    }
  }

  render() {
    const { borderLess, showMenu } = this.props;
    const { searchHide, load } = this.state;
    let borderClass;
    let location;
    if (borderLess) {
      borderClass = s.rentAllHeaderBorderLess;
    }

    if (history.location) {
      location = history.location.pathname;
    }
    console.log(this.state.change);

    if (!load) {
      return (
        <div
          className=""
          style={{ background: this.state.scrolling ? "black" : "red" }}
        >
          <div className={s.root} key={new Date().getTime()}>
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
                  <Navbar.Brand>
                    <Logo link={"/"} className={cx(s.brand, s.brandImg)} />
                  </Navbar.Brand>
                  <div onClick={() => this.openMenu()}>
                    <div className={"hidden-lg hamburgerButton"}>
                      <span className={cx("menuToggle", "menuToggleOne")}>
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
                  {/* {!searchHide && (
                    <Navbar.Form
                      pullLeft
                      className={cx(
                        "hidden-xs",
                        s.breakPoint,
                        "searchHeaderAR"
                      )}
                    >
                      <HeaderLocationSearch />
                    </Navbar.Form>
                  )} */}
                  <div onClick={() => this.openClose()}>
                    <Navigation />
                  </div>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="">
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
                {!this.state.change && (
                  <div className={s.search_all}>
                    <SearchOption />
                  </div>
                )}
                <Navbar.Brand style={{ marginLeft: "10px" }}>
                  <Logo link={"/"} className={cx(s.brand, s.brandImg)} />
                  <span></span>
                </Navbar.Brand>
                <div onClick={() => this.openMenu()}>
                  <div className={"hidden-lg hamburgerButton"}>
                    <span className={cx("menuToggle", "menuToggleOne")}>
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
                {/* {!searchHide && (
                  <Navbar.Form
                    pullLeft
                    className={cx(
                      "hidden-xs",
                      s.breakPoint,
                      "searchHeaderAR",
                      "breakPointTab"
                    )}
                  >
                    <HeaderLocationSearch />
                  </Navbar.Form>
                )} */}
                <div onClick={() => this.openClose()}>
                  <Navigation />
                </div>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  siteSettings: state.siteSettings.data,
  showMenu: state.toggle.showMenu,
});

const mapDispatch = {
  toggleOpen,
  toggleClose,
};

export default injectIntl(
  withStyles(s)(connect(mapState, mapDispatch)(Header))
);
