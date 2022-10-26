require("source-map-support").install();
exports.ids = ["siteadmin-viewPayout~siteadmin-viewreservation"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ViewReservation/ViewReservation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.ViewReservation-rentAllHeaderAdmin-1AGGA {\n  position: fixed !important;\n}\n.ViewReservation-adminLayout-3odqn {\n  padding-top: 64px !important;\n}\n.ViewReservation-box-1zIwg h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.ViewReservation-exportLink-3TlS7 {\n  margin-bottom: -29px;\n}\n.ViewReservation-blockcenter-2AWzP {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.ViewReservation-panelHeader-1obPP {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.ViewReservation-currencyselect-3qVOO {\n  width: 100%;\n  margin-right: 0px;\n}\n.ViewReservation-panelHeader-1obPP {\n  overflow: hidden;\n  position: relative;\n}\n.ViewReservation-mar0-2rOVW {\n  margin-left: 0;\n  margin-right: 0;\n}\n.ViewReservation-navbar-1owFs > .ViewReservation-container-44JCL .ViewReservation-navbar-brand-13q0_,\n.ViewReservation-navbar-1owFs > .ViewReservation-container-fluid-1sS4M .ViewReservation-navbar-brand-13q0_ {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .ViewReservation-blockcenter-2AWzP {\n    padding: 0px;\n  }\n  .ViewReservation-panelHeader-1obPP {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.ViewReservation-pagecontentWrapper-1SuWQ {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.ViewReservation-headerTitle-BXIEo {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.ViewReservation-panelHeader-1obPP {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.ViewReservation-table-3fetr {\n\tdisplay: table;\n}\n.ViewReservation-tableRow-2iuAA {\n\tdisplay: table-row;\n}\n.ViewReservation-tableCell-zPFSj {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.ViewReservation-formGroup-1tnuS {\n\tmargin-bottom: 6px;\n}\n.ViewReservation-select-YQt15 {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.ViewReservation-noMargin-LqjHW {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.ViewReservation-exportLink-3TlS7 {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.ViewReservation-labelTextNew-2T9Gh {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.ViewReservation-displayInline-M0nJ2 {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.ViewReservation-btnUPdate-1NyK7 {\n\tdisplay: inline-block;\n}\n.ViewReservation-btnModalDelete-3uM9V {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.ViewReservation-radioBtn-3FoUI {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.ViewReservation-btnUPdate-1NyK7 {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.ViewReservation-btnModalDelete-3uM9V {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.ViewReservation-btnWidth-39UbW {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.ViewReservation-bannerImageBg-SZfOr {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.ViewReservation-bannerDelete-2o9eQ {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.ViewReservation-modalRoot-3iEM6 {\n\tpadding: 32px;\n}\n.ViewReservation-modalBorderBottom-2our- {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.ViewReservation-logInModalBody-3kQNo {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.ViewReservation-exportSection-1kWH3 {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.ViewReservation-exportSectionGridSub-w0sMZ {\n\tgrid-template-columns: 50% 49% !important;\n}\n.ViewReservation-exportText-3dx6K {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.ViewReservation-exportLinkImg-38pYe {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.ViewReservation-vtrMiddle-2g_Qx {\n\tvertical-align: middle;\n}\n.ViewReservation-exportImg-1Q3GZ {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.ViewReservation-profileViewlabel-1u8bB {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.ViewReservation-profileViewMainContent-3JEHw {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.ViewReservation-profileViewMain-3qQBt {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.ViewReservation-profileViewInner--tq5c {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.ViewReservation-profileImageSection-1C34Z {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.ViewReservation-lastviewInner-tWIIa {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.ViewReservation-pagecontentWrapper-1SuWQ {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.ViewReservation-exportSection-1kWH3 {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.ViewReservation-exportText-3dx6K {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.ViewReservation-exportSectionGridSub-w0sMZ {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.ViewReservation-profileViewlabel-1u8bB {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.ViewReservation-profileViewMainContent-3JEHw {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.ViewReservation-pagecontentWrapper-1SuWQ {\n\t\tmargin-left: 0;\n\t}\n}\n.ViewReservation-ChangeToUpperCase-3HWKp{\n    text-transform: uppercase\n}\n.ViewReservation-noBorder-aRaCk {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.ViewReservation-space1-2WmYm {\n\tmargin-bottom: 6px !important;\n}\n.ViewReservation-space2-HDTKu {\n\tmargin-bottom: 12px !important;\n}\n.ViewReservation-space3-2_Eur {\n\tmargin-bottom: 18px !important;\n}\n.ViewReservation-space4-18FIh {\n\tmargin-bottom: 24px !important;\n}\n.ViewReservation-space5-ujC3h {\n\tmargin-bottom: 30px !important;\n}\n.ViewReservation-space6-1qoQr {\n\tmargin-bottom: 36px !important;\n}\n.ViewReservation-space7-1H50V {\n\tmargin-bottom: 42px !important;\n}\n.ViewReservation-spaceTop8-82OBs {\n\tmargin-bottom: 48px !important;\n}\n.ViewReservation-spaceTop1-1Gh2s {\n\tmargin-top: 6px !important;\n}\n.ViewReservation-spaceTop2-3zoHV {\n\tmargin-top: 12px !important;\n}\n.ViewReservation-spaceTop3-25gPo {\n\tmargin-top: 18px !important;\n}\n.ViewReservation-spaceTop4-2p6HO {\n\tmargin-top: 24px !important;\n}\n.ViewReservation-spaceTop5-39UqW {\n\tmargin-top: 30px !important;\n}\n.ViewReservation-spaceTop6-1sjuk {\n\tmargin-top: 36px !important;\n}\n.ViewReservation-spaceTop7-kcp4Q {\n\tmargin-top: 42px !important;\n}\n.ViewReservation-spaceTop8-82OBs {\n\tmargin-top: 48px !important;\n}\n.ViewReservation-noMargin-LqjHW {\n\tmargin: 0px !important;\n}\n.ViewReservation-padding1-1_csq {\n\tpadding-bottom: 6px !important;\n}\n.ViewReservation-padding2-B27V0 {\n\tpadding-bottom: 12px !important;\n}\n.ViewReservation-padding3-3R8Ru {\n\tpadding-bottom: 18px !important;\n}\n.ViewReservation-padding4-1KPoz {\n\tpadding-bottom: 24px !important;\n}\n.ViewReservation-padding5-2p5Xl {\n\tpadding-bottom: 30px !important;\n}\n.ViewReservation-padding6-1S97R {\n\tpadding-bottom: 36px !important;\n}\n.ViewReservation-padding7-DOMB4 {\n\tpadding-bottom: 42px !important;\n}\n.ViewReservation-paddingTop1-2QdyJ {\n\tpadding-top: 6px !important;\n}\n.ViewReservation-paddingTop2-gzL6y {\n\tpadding-top: 12px !important;\n}\n.ViewReservation-paddingTop3-2p1IF {\n\tpadding-top: 18px !important;\n}\n.ViewReservation-paddingTop4-13yIV {\n\tpadding-top: 24px !important;\n}\n.ViewReservation-paddingTop5-23q9J {\n\tpadding-top: 30px !important;\n}\n.ViewReservation-paddingTop6-2S4WK {\n\tpadding-top: 36px !important;\n}\n.ViewReservation-paddingTop7-nBWCl {\n\tpadding-top: 42px !important;\n}\n.ViewReservation-noPadding-3qLZj {\n\tpadding: 0px !important;\n}\n.ViewReservation-textBold-2_TCG {\n\tfont-weight: 500 !important;\n}\n.ViewReservation-textBolder-k4Ig6 {\n\tfont-weight: 700 !important;\n}\n.ViewReservation-textNormal-1avzR {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.ViewReservation-textDarkBlue-3dBpo {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.ViewReservation-textLightBlue-3EvIY {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.ViewReservation-textLightSandleGreen-3guv9 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.ViewReservation-textLightBrown-3YZeC {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.ViewReservation-textMediumMaroon-VQ3s2 {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.ViewReservation-textBrown-3rtAh {\n\tcolor: #B5DC4B !important;\n}\n.ViewReservation-textMaroon-3279l {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.ViewReservation-textDarkBrown-1ChL7 {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.ViewReservation-textMediumBrown-32Rtt {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.ViewReservation-textSkyBlue-2js-e {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.ViewReservation-textGray-1-QG- {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.ViewReservation-capitalize-2hKFH { \n\ttext-transform: capitalize; \n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ViewReservation/ViewReservation.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,2BAA2B;CAC3B","file":"ViewReservation.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.capitalize { \n\ttext-transform: capitalize; \n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "ViewReservation-rentAllHeaderAdmin-1AGGA",
	"adminLayout": "ViewReservation-adminLayout-3odqn",
	"box": "ViewReservation-box-1zIwg",
	"exportLink": "ViewReservation-exportLink-3TlS7",
	"blockcenter": "ViewReservation-blockcenter-2AWzP",
	"panelHeader": "ViewReservation-panelHeader-1obPP",
	"currencyselect": "ViewReservation-currencyselect-3qVOO",
	"mar0": "ViewReservation-mar0-2rOVW",
	"navbar": "ViewReservation-navbar-1owFs",
	"container": "ViewReservation-container-44JCL",
	"navbar-brand": "ViewReservation-navbar-brand-13q0_",
	"container-fluid": "ViewReservation-container-fluid-1sS4M",
	"pagecontentWrapper": "ViewReservation-pagecontentWrapper-1SuWQ",
	"headerTitle": "ViewReservation-headerTitle-BXIEo",
	"table": "ViewReservation-table-3fetr",
	"tableRow": "ViewReservation-tableRow-2iuAA",
	"tableCell": "ViewReservation-tableCell-zPFSj",
	"formGroup": "ViewReservation-formGroup-1tnuS",
	"select": "ViewReservation-select-YQt15",
	"noMargin": "ViewReservation-noMargin-LqjHW",
	"labelTextNew": "ViewReservation-labelTextNew-2T9Gh",
	"displayInline": "ViewReservation-displayInline-M0nJ2",
	"btnUPdate": "ViewReservation-btnUPdate-1NyK7",
	"btnModalDelete": "ViewReservation-btnModalDelete-3uM9V",
	"radioBtn": "ViewReservation-radioBtn-3FoUI",
	"btnWidth": "ViewReservation-btnWidth-39UbW",
	"bannerImageBg": "ViewReservation-bannerImageBg-SZfOr",
	"bannerDelete": "ViewReservation-bannerDelete-2o9eQ",
	"modalRoot": "ViewReservation-modalRoot-3iEM6",
	"modalBorderBottom": "ViewReservation-modalBorderBottom-2our-",
	"logInModalBody": "ViewReservation-logInModalBody-3kQNo",
	"exportSection": "ViewReservation-exportSection-1kWH3",
	"exportSectionGridSub": "ViewReservation-exportSectionGridSub-w0sMZ",
	"exportText": "ViewReservation-exportText-3dx6K",
	"exportLinkImg": "ViewReservation-exportLinkImg-38pYe",
	"vtrMiddle": "ViewReservation-vtrMiddle-2g_Qx",
	"exportImg": "ViewReservation-exportImg-1Q3GZ",
	"profileViewlabel": "ViewReservation-profileViewlabel-1u8bB",
	"profileViewMainContent": "ViewReservation-profileViewMainContent-3JEHw",
	"profileViewMain": "ViewReservation-profileViewMain-3qQBt",
	"profileViewInner": "ViewReservation-profileViewInner--tq5c",
	"profileImageSection": "ViewReservation-profileImageSection-1C34Z",
	"lastviewInner": "ViewReservation-lastviewInner-tWIIa",
	"ChangeToUpperCase": "ViewReservation-ChangeToUpperCase-3HWKp",
	"noBorder": "ViewReservation-noBorder-aRaCk",
	"space1": "ViewReservation-space1-2WmYm",
	"space2": "ViewReservation-space2-HDTKu",
	"space3": "ViewReservation-space3-2_Eur",
	"space4": "ViewReservation-space4-18FIh",
	"space5": "ViewReservation-space5-ujC3h",
	"space6": "ViewReservation-space6-1qoQr",
	"space7": "ViewReservation-space7-1H50V",
	"spaceTop8": "ViewReservation-spaceTop8-82OBs",
	"spaceTop1": "ViewReservation-spaceTop1-1Gh2s",
	"spaceTop2": "ViewReservation-spaceTop2-3zoHV",
	"spaceTop3": "ViewReservation-spaceTop3-25gPo",
	"spaceTop4": "ViewReservation-spaceTop4-2p6HO",
	"spaceTop5": "ViewReservation-spaceTop5-39UqW",
	"spaceTop6": "ViewReservation-spaceTop6-1sjuk",
	"spaceTop7": "ViewReservation-spaceTop7-kcp4Q",
	"padding1": "ViewReservation-padding1-1_csq",
	"padding2": "ViewReservation-padding2-B27V0",
	"padding3": "ViewReservation-padding3-3R8Ru",
	"padding4": "ViewReservation-padding4-1KPoz",
	"padding5": "ViewReservation-padding5-2p5Xl",
	"padding6": "ViewReservation-padding6-1S97R",
	"padding7": "ViewReservation-padding7-DOMB4",
	"paddingTop1": "ViewReservation-paddingTop1-2QdyJ",
	"paddingTop2": "ViewReservation-paddingTop2-gzL6y",
	"paddingTop3": "ViewReservation-paddingTop3-2p1IF",
	"paddingTop4": "ViewReservation-paddingTop4-13yIV",
	"paddingTop5": "ViewReservation-paddingTop5-23q9J",
	"paddingTop6": "ViewReservation-paddingTop6-2S4WK",
	"paddingTop7": "ViewReservation-paddingTop7-nBWCl",
	"noPadding": "ViewReservation-noPadding-3qLZj",
	"textBold": "ViewReservation-textBold-2_TCG",
	"textBolder": "ViewReservation-textBolder-k4Ig6",
	"textNormal": "ViewReservation-textNormal-1avzR",
	"textDarkBlue": "ViewReservation-textDarkBlue-3dBpo",
	"textLightBlue": "ViewReservation-textLightBlue-3EvIY",
	"textLightSandleGreen": "ViewReservation-textLightSandleGreen-3guv9",
	"textLightBrown": "ViewReservation-textLightBrown-3YZeC",
	"textMediumMaroon": "ViewReservation-textMediumMaroon-VQ3s2",
	"textBrown": "ViewReservation-textBrown-3rtAh",
	"textMaroon": "ViewReservation-textMaroon-3279l",
	"textDarkBrown": "ViewReservation-textDarkBrown-1ChL7",
	"textMediumBrown": "ViewReservation-textMediumBrown-32Rtt",
	"textSkyBlue": "ViewReservation-textSkyBlue-2js-e",
	"textGray": "ViewReservation-textGray-1-QG-",
	"capitalize": "ViewReservation-capitalize-2hKFH"
};

/***/ }),

/***/ "./src/components/siteadmin/ViewReservation/HostServiceFee.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ViewReservation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/siteadmin/ViewReservation/ViewReservation.css");
/* harmony import */ var _ViewReservation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ViewReservation/HostServiceFee.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class HostServiceFee extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      checkIn,
      loading,
      reservationId,
      reservationState,
      completed,
      cancelData,
      hostServiceFee
    } = this.props;
    const {
      id,
      amount,
      currency,
      hostPayout,
      hostTransaction
    } = this.props;
    let amountPaytoHost = 0,
        additionalStatus; // if (hostPayout === null || hostPayout.payEmail === undefined) {
    //     return <span> <CurrencyConverter amount={0}
    //         from={currency} />  </span>
    // }
    // if (cancelData) {
    //     amountPaytoHost = cancelData.payoutToHost;
    // }
    // if (reservationState === 'expired' || reservationState === 'declined' || (reservationState === 'cancelled' && amountPaytoHost === 0)) {
    //     return <span> <CurrencyConverter amount={0}
    //         from={currency} />  </span>
    // }

    if (hostPayout === null || hostPayout.payEmail === undefined) {
      additionalStatus = 'No Payout method';
    } // if ((hostTransaction != null && hostTransaction.id != undefined) || (reservationId === id)) {
    //     return <span> <CurrencyConverter amount={hostServiceFee}
    //         from={currency} /></span>
    // }


    let nextDay = moment__WEBPACK_IMPORTED_MODULE_4___default()(checkIn).add(1, 'days');
    let today = moment__WEBPACK_IMPORTED_MODULE_4___default()();
    let dayDifference = nextDay.diff(today, 'days');
    let status = {
      hostServiceFee
    };
    let action = false;

    if (dayDifference < 0 && hostPayout != null || reservationState === 'cancelled' && amountPaytoHost > 0) {
      status = {
        hostServiceFee
      };
      action = true;
    } else if (dayDifference < 0) {
      status = 0;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_5__["default"], {
      amount: hostServiceFee,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }), additionalStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, ' ', "(", additionalStatus, ")"));
  }

}

_defineProperty(HostServiceFee, "propTypes", {
  hostId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hostPayout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    payEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }),
  hostTransaction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  reservationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  completed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  openReservationModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    payoutToHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

_defineProperty(HostServiceFee, "defaultProps", {
  hostPayout: null,
  loading: false,
  completed: false,
  reservationId: 0
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_3___default.a)(HostServiceFee));

/***/ }),

/***/ "./src/components/siteadmin/ViewReservation/ViewReservation.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ViewReservation/ViewReservation.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/components/siteadmin/ViewReservation/ViewReservation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/siteadmin/ViewReservation/ViewReservation.css");
/* harmony import */ var _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _ReservationManagement_ModalForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/ModalForm/ModalForm.js");
/* harmony import */ var _actions_Reservation_viewReceiptAdmin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/actions/Reservation/viewReceiptAdmin.js");
/* harmony import */ var _HostServiceFee__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/siteadmin/ViewReservation/HostServiceFee.js");
/* harmony import */ var _helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/helpers/queryEncryption.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ViewReservation/ViewReservation.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Style




 // Components



 // Redux Action



 // Translation




class ViewReservation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentWillReceiveProps(nextProps) {
    const {
      completed,
      loading
    } = nextProps;
    const {
      refetch
    } = this.props;

    if (completed && !loading) {
      refetch();
    }
  }

  render() {
    const {
      type,
      data,
      data: {
        listData,
        cancellationDetails,
        transaction
      }
    } = this.props;
    let subTotal;

    if (data) {
      subTotal = data.total + data.guestServiceFee;
    }

    let amountPaytoGuest = 0;
    let amountPaytoHost = 0;
    let guestFee = 0,
        hostFee = 0;

    if (cancellationDetails) {
      amountPaytoGuest = cancellationDetails.refundToGuest;
      amountPaytoHost = cancellationDetails.payoutToHost;
      guestFee = cancellationDetails.guestServiceFee;
      hostFee = cancellationDetails.hostServiceFee;
    } else if (data) {
      amountPaytoHost = Number(data.total) - Number(data.hostServiceFee);
      guestFee = data.guestServiceFee;
      hostFee = data.hostServiceFee;
    }

    if (data && (data.reservationState == 'expired' || data.reservationState == 'declined')) {
      guestFee = 0;
    }

    let nextDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(data.checkIn).add(1, 'days');
    let today = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    let dayDifference = nextDay.diff(today, 'days');
    let booktype, reservestate;

    if (data) {
      reservestate = data.reservationState;
    }

    if (listData) {
      booktype = data.bookingType;
    }

    let Guestname, Hostname, reservationStatus, bookingType;

    if (data && data.guestData) {
      Guestname = data.guestData.firstName + " " + data.guestData.lastName;
    }

    if (data && data.hostData) {
      Hostname = data.hostData.firstName + " " + data.hostData.lastName;
    }

    if (reservestate) {
      reservationStatus = reservestate.charAt(0).toUpperCase() + reservestate.slice(1);
    }

    if (booktype) {
      bookingType = booktype.charAt(0).toUpperCase() + booktype.slice(1);
    }

    const gobackcss = {
      padding: '10px'
    };
    let taxRate = data && data.taxRate && data.taxRate > 0 ? data.taxRate : 0;
    let url = type === 'reservation' ? '/siteadmin/reservations' : '/siteadmin/payout';
    let titleMessageKey = type === 'reservation' ? 'reservationDetails' : 'payoutDetails';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.pagecontentWrapper, 'pagecontentAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReservationManagement_ModalForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"][titleMessageKey], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 51
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.space4, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
      to: url,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnPrimaryBorder, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnLarge, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.noTextDecoration, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnPrimaryLink),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].goBack, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMain,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    }, data && data.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 48
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].reservationId, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 33
      }
    }, "  ", data.id, "  ")), data && data.confirmationCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 62
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 33
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].confirmationCode, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 91
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 33
      }
    }, "  ", data.confirmationCode, "  ")), reservationStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].reservationStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 33
      }
    }, " ", reservationStatus, "  ")), data && data.cancellationDetails && data.cancellationDetails.cancellationPolicy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 112
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].cancellationPolicy, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 33
      }
    }, " ", data.cancellationDetails.cancellationPolicy, "  ")), data && data.cancellationDetails && data.cancellationDetails.cancelledBy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 105
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].cancelledLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.capitalize),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 33
      }
    }, " ", data.cancellationDetails.cancelledBy, "  ")), data && data.listData && data.listData.id && data.listData.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 97
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].titleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + data.listData.id,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 82
      }
    }, " ", data.listData.title, "  "), "  ")), data && data.checkIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 53
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].checkIn, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 33
      }
    }, " ", moment__WEBPACK_IMPORTED_MODULE_2___default()(data.checkIn).format("Do MMMM YYYY"), "  ")), data && data.checkOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 54
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].checkOut, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 33
      }
    }, "  ", moment__WEBPACK_IMPORTED_MODULE_2___default()(data.checkOut).format("Do MMMM YYYY"), "  ")), bookingType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 44
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].bookingType, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 92
      }
    })), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 33
      }
    }, "  ", bookingType, "  ")), data && (subTotal == 0 || subTotal > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 72
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].amountPaid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      amount: subTotal,
      from: data.currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 82
      }
    }), "  ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 29
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].guestServiceFee, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 88
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 29
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      amount: guestFee,
      from: data.currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 78
      }
    }), "  ")), data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].hostServiceFeeType, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HostServiceFee__WEBPACK_IMPORTED_MODULE_13__["default"], {
      hostId: data.hostId,
      checkIn: data.checkIn,
      id: data.id,
      hostPayout: data.hostPayout,
      amount: data.total,
      currency: data.currency,
      hostTransaction: data.hostTransaction,
      reservationState: data.reservationState,
      cancelData: data.cancellationDetails,
      hostServiceFee: hostFee,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 82
      }
    }), " ")), data && data.guestData && data.guestData.profileId && Guestname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 96
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].guestName, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/users/show/" + data.guestData.profileId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 82
      }
    }, " ", Guestname, "   "), "  ")), data && data.guestData && data.guestData.phoneNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 85
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].guestPhoneNumber, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 92
      }
    })), "    "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 33
      }
    }, " ", Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_14__["decode"])(data.guestData.phoneNumber), "  ")), data && data.guestUser && data.guestUser.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 79
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 33
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].guestEmail, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 91
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 33
      }
    }, "  ", data.guestUser.email, "  ")), data && data.hostData && data.hostData.profileId && Hostname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 93
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].hostName, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/users/show/" + data.hostData.profileId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 82
      }
    }, " ", Hostname, "   "), " ")), data && data.hostData && data.hostData.phoneNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 83
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 33
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].hostPhoneNumber, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 91
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 33
      }
    }, " ", Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_14__["decode"])(data.hostData.phoneNumber), " ")), data && data.hostUser && data.hostUser.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 77
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].hostEmail, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 92
      }
    })), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 33
      }
    }, " ", data.hostUser.email, " ")), data && data.cancellationDetails && data.cancellationDetails.createdAt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 103
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].cancelDate, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 33
      }
    }, "  ", moment__WEBPACK_IMPORTED_MODULE_2___default()(data.cancellationDetails.createdAt).format("Do MMMM YYYY"), "  ")), data && cancellationDetails && (cancellationDetails.refundToGuest == 0 || cancellationDetails.refundToGuest > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 145
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].refundAmount, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      amount: cancellationDetails.refundToGuest,
      from: data.currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 82
      }
    }), "  ")), data && !cancellationDetails && (data.reservationState == 'expired' || data.reservationState == 'declined') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 140
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].refundAmount, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      amount: subTotal,
      from: data.currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 82
      }
    }), "  ")), data && (data.reservationState == 'approved' || data.reservationState == 'completed' || data.reservationState == 'cancelled') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.lastviewInner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 158
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew, _ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewlabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].payoutLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 92
      }
    })), "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileViewMainContent),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 33
      }
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      amount: amountPaytoHost > 0 ? amountPaytoHost : 0,
      from: data.currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 82
      }
    }))))));
  }

}

_defineProperty(ViewReservation, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    hostData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    hostPayout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      payEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    hostTransaction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }),
    guestData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    transaction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      payerEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      paymentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    refundStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      receiverEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    cancellationDetails: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      refundToGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      payoutToHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      cancellationPolicy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      cancelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }),
  viewReceiptAdmin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(ViewReservation, "defaultProps", {
  data: []
});

const mapState = state => ({
  completed: state.reservation.completed,
  loading: state.reservation.loading
});

const mapDispatch = {
  viewReceiptAdmin: _actions_Reservation_viewReceiptAdmin__WEBPACK_IMPORTED_MODULE_12__["viewReceiptAdmin"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_ViewReservation_css__WEBPACK_IMPORTED_MODULE_7___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch)(ViewReservation)));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi12aWV3UGF5b3V0fnNpdGVhZG1pbi12aWV3cmVzZXJ2YXRpb24uanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9WaWV3UmVzZXJ2YXRpb24vVmlld1Jlc2VydmF0aW9uLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9WaWV3UmVzZXJ2YXRpb24vSG9zdFNlcnZpY2VGZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1ZpZXdSZXNlcnZhdGlvbi9WaWV3UmVzZXJ2YXRpb24uY3NzPzAyMjgiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vVmlld1Jlc2VydmF0aW9uL1ZpZXdSZXNlcnZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1yZW50QWxsSGVhZGVyQWRtaW4tMUFHR0Ege1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tYWRtaW5MYXlvdXQtM29kcW4ge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1ib3gtMXpJd2cgaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1leHBvcnRMaW5rLTNUbFM3IHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLWJsb2NrY2VudGVyLTJBV3pQIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFuZWxIZWFkZXItMW9iUFAge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1jdXJyZW5jeXNlbGVjdC0zcVZPTyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhbmVsSGVhZGVyLTFvYlBQIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tbWFyMC0yck9WVyB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1uYXZiYXItMW93RnMgPiAuVmlld1Jlc2VydmF0aW9uLWNvbnRhaW5lci00NEpDTCAuVmlld1Jlc2VydmF0aW9uLW5hdmJhci1icmFuZC0xM3EwXyxcXG4uVmlld1Jlc2VydmF0aW9uLW5hdmJhci0xb3dGcyA+IC5WaWV3UmVzZXJ2YXRpb24tY29udGFpbmVyLWZsdWlkLTFzUzRNIC5WaWV3UmVzZXJ2YXRpb24tbmF2YmFyLWJyYW5kLTEzcTBfIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLlZpZXdSZXNlcnZhdGlvbi1ibG9ja2NlbnRlci0yQVd6UCB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5WaWV3UmVzZXJ2YXRpb24tcGFuZWxIZWFkZXItMW9iUFAge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLlZpZXdSZXNlcnZhdGlvbi1wYWdlY29udGVudFdyYXBwZXItMVN1V1Ege1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24taGVhZGVyVGl0bGUtQlhJRW8ge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1wYW5lbEhlYWRlci0xb2JQUCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tdGFibGUtM2ZldHIge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXRhYmxlUm93LTJpdUFBIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tdGFibGVDZWxsLXpQRlNqIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLWZvcm1Hcm91cC0xdG51UyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXNlbGVjdC1ZUXQxNSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLW5vTWFyZ2luLUxxakhXIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tZXhwb3J0TGluay0zVGxTNyB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1sYWJlbFRleHROZXctMlQ5R2gge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1kaXNwbGF5SW5saW5lLU0wbkoyIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLlZpZXdSZXNlcnZhdGlvbi1idG5VUGRhdGUtMU55Szcge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1idG5Nb2RhbERlbGV0ZS0zdU05ViB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXJhZGlvQnRuLTNGb1VJIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVmlld1Jlc2VydmF0aW9uLWJ0blVQZGF0ZS0xTnlLNyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LlZpZXdSZXNlcnZhdGlvbi1idG5Nb2RhbERlbGV0ZS0zdU05ViB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LlZpZXdSZXNlcnZhdGlvbi1idG5XaWR0aC0zOVViVyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLlZpZXdSZXNlcnZhdGlvbi1iYW5uZXJJbWFnZUJnLVNaZk9yIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLWJhbm5lckRlbGV0ZS0ybzllUSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLlZpZXdSZXNlcnZhdGlvbi1tb2RhbFJvb3QtM2lFTTYge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tbW9kYWxCb3JkZXJCb3R0b20tMm91ci0ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tbG9nSW5Nb2RhbEJvZHktM2tRTm8ge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uVmlld1Jlc2VydmF0aW9uLWV4cG9ydFNlY3Rpb24tMWtXSDMge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tZXhwb3J0U2VjdGlvbkdyaWRTdWItdzBzTVoge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLWV4cG9ydFRleHQtM2R4Nksge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1leHBvcnRMaW5rSW1nLTM4cFllIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXZ0ck1pZGRsZS0yZ19ReCB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1leHBvcnRJbWctMVEzR1oge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXByb2ZpbGVWaWV3bGFiZWwtMXU4YkIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcHJvZmlsZVZpZXdNYWluQ29udGVudC0zSkVIdyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcHJvZmlsZVZpZXdNYWluLTNxUUJ0IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1wcm9maWxlVmlld0lubmVyLS10cTVjIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXByb2ZpbGVJbWFnZVNlY3Rpb24tMUMzNFoge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1sYXN0dmlld0lubmVyLXRXSUlhIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuVmlld1Jlc2VydmF0aW9uLXBhZ2Vjb250ZW50V3JhcHBlci0xU3VXUSB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LlZpZXdSZXNlcnZhdGlvbi1leHBvcnRTZWN0aW9uLTFrV0gzIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5WaWV3UmVzZXJ2YXRpb24tZXhwb3J0VGV4dC0zZHg2SyB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LlZpZXdSZXNlcnZhdGlvbi1leHBvcnRTZWN0aW9uR3JpZFN1Yi13MHNNWiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5WaWV3UmVzZXJ2YXRpb24tcHJvZmlsZVZpZXdsYWJlbC0xdThiQiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LlZpZXdSZXNlcnZhdGlvbi1wcm9maWxlVmlld01haW5Db250ZW50LTNKRUh3IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVmlld1Jlc2VydmF0aW9uLXBhZ2Vjb250ZW50V3JhcHBlci0xU3VXUSB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uVmlld1Jlc2VydmF0aW9uLUNoYW5nZVRvVXBwZXJDYXNlLTNIV0twe1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tbm9Cb3JkZXItYVJhQ2sge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uVmlld1Jlc2VydmF0aW9uLXNwYWNlMS0yV21ZbSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2UyLUhEVEt1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2UzLTJfRXVyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2U0LTE4RkloIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2U1LXVqQzNoIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2U2LTFxb1FyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2U3LTFINTBWIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2VUb3A4LTgyT0JzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tc3BhY2VUb3AxLTFHaDJzIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDItM3pvSFYge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDMtMjVnUG8ge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDQtMnA2SE8ge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDUtMzlVcVcge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDYtMXNqdWsge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDcta2NwNFEge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDgtODJPQnMge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1ub01hcmdpbi1McWpIVyB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi1wYWRkaW5nMS0xX2NzcSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmcyLUIyN1YwIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmczLTNSOFJ1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmc0LTFLUG96IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmc1LTJwNVhsIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmc2LTFTOTdSIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmc3LURPTUI0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXBhZGRpbmdUb3AxLTJRZHlKIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDItZ3pMNnkge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDMtMnAxSUYge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDQtMTN5SVYge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDUtMjNxOUoge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDYtMlM0V0sge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDctbkJXQ2wge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tbm9QYWRkaW5nLTNxTFpqIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi10ZXh0Qm9sZC0yX1RDRyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXRleHRCb2xkZXItazRJZzYge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi10ZXh0Tm9ybWFsLTFhdnpSIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5WaWV3UmVzZXJ2YXRpb24tdGV4dERhcmtCbHVlLTNkQnBvIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tdGV4dExpZ2h0Qmx1ZS0zRXZJWSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi10ZXh0TGlnaHRTYW5kbGVHcmVlbi0zZ3V2OSB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXRleHRMaWdodEJyb3duLTNZWmVDIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXRleHRNZWRpdW1NYXJvb24tVlEzczIge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi10ZXh0QnJvd24tM3J0QWgge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tdGV4dE1hcm9vbi0zMjc5bCB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi10ZXh0RGFya0Jyb3duLTFDaEw3IHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3UmVzZXJ2YXRpb24tdGV4dE1lZGl1bUJyb3duLTMyUnR0IHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLXRleHRTa3lCbHVlLTJqcy1lIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLlZpZXdSZXNlcnZhdGlvbi10ZXh0R3JheS0xLVFHLSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld1Jlc2VydmF0aW9uLWNhcGl0YWxpemUtMmhLRkggeyBcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgXFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vVmlld1Jlc2VydmF0aW9uL1ZpZXdSZXNlcnZhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QjtBQUM1QjtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQlwiLFwiZmlsZVwiOlwiVmlld1Jlc2VydmF0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4ucmVudEFsbEhlYWRlckFkbWluIHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5MYXlvdXQge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLmJsb2NrY2VudGVyIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uY3VycmVuY3lzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubmF2YmFyID4gLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLFxcbi5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmQge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuYmxvY2tjZW50ZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAucGFuZWxIZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi50YWJsZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi50YWJsZVJvdyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4udGFibGVDZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uZm9ybUdyb3VwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBvcnRMaW5rIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubGFiZWxUZXh0TmV3IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5kaXNwbGF5SW5saW5lIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLmJ0blVQZGF0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuTW9kYWxEZWxldGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLnJhZGlvQnRuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYnRuVVBkYXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuYnRuTW9kYWxEZWxldGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5idG5XaWR0aCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLmJhbm5lckltYWdlQmcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5iYW5uZXJEZWxldGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5tb2RhbFJvb3Qge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5tb2RhbEJvcmRlckJvdHRvbSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLmxvZ0luTW9kYWxCb2R5IHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmV4cG9ydFNlY3Rpb24ge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5leHBvcnRUZXh0IHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5leHBvcnRMaW5rSW1nIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udnRyTWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZXhwb3J0SW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLnByb2ZpbGVWaWV3TWFpbiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5wcm9maWxlVmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4ucHJvZmlsZUltYWdlU2VjdGlvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubGFzdHZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LmV4cG9ydFNlY3Rpb24ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LmV4cG9ydFRleHQge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uQ2hhbmdlVG9VcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLm5vQm9yZGVyIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uY2FwaXRhbGl6ZSB7IFxcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIlZpZXdSZXNlcnZhdGlvbi1yZW50QWxsSGVhZGVyQWRtaW4tMUFHR0FcIixcblx0XCJhZG1pbkxheW91dFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1hZG1pbkxheW91dC0zb2RxblwiLFxuXHRcImJveFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1ib3gtMXpJd2dcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiVmlld1Jlc2VydmF0aW9uLWV4cG9ydExpbmstM1RsUzdcIixcblx0XCJibG9ja2NlbnRlclwiOiBcIlZpZXdSZXNlcnZhdGlvbi1ibG9ja2NlbnRlci0yQVd6UFwiLFxuXHRcInBhbmVsSGVhZGVyXCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhbmVsSGVhZGVyLTFvYlBQXCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJWaWV3UmVzZXJ2YXRpb24tY3VycmVuY3lzZWxlY3QtM3FWT09cIixcblx0XCJtYXIwXCI6IFwiVmlld1Jlc2VydmF0aW9uLW1hcjAtMnJPVldcIixcblx0XCJuYXZiYXJcIjogXCJWaWV3UmVzZXJ2YXRpb24tbmF2YmFyLTFvd0ZzXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVmlld1Jlc2VydmF0aW9uLWNvbnRhaW5lci00NEpDTFwiLFxuXHRcIm5hdmJhci1icmFuZFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1uYXZiYXItYnJhbmQtMTNxMF9cIixcblx0XCJjb250YWluZXItZmx1aWRcIjogXCJWaWV3UmVzZXJ2YXRpb24tY29udGFpbmVyLWZsdWlkLTFzUzRNXCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhZ2Vjb250ZW50V3JhcHBlci0xU3VXUVwiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiVmlld1Jlc2VydmF0aW9uLWhlYWRlclRpdGxlLUJYSUVvXCIsXG5cdFwidGFibGVcIjogXCJWaWV3UmVzZXJ2YXRpb24tdGFibGUtM2ZldHJcIixcblx0XCJ0YWJsZVJvd1wiOiBcIlZpZXdSZXNlcnZhdGlvbi10YWJsZVJvdy0yaXVBQVwiLFxuXHRcInRhYmxlQ2VsbFwiOiBcIlZpZXdSZXNlcnZhdGlvbi10YWJsZUNlbGwtelBGU2pcIixcblx0XCJmb3JtR3JvdXBcIjogXCJWaWV3UmVzZXJ2YXRpb24tZm9ybUdyb3VwLTF0bnVTXCIsXG5cdFwic2VsZWN0XCI6IFwiVmlld1Jlc2VydmF0aW9uLXNlbGVjdC1ZUXQxNVwiLFxuXHRcIm5vTWFyZ2luXCI6IFwiVmlld1Jlc2VydmF0aW9uLW5vTWFyZ2luLUxxakhXXCIsXG5cdFwibGFiZWxUZXh0TmV3XCI6IFwiVmlld1Jlc2VydmF0aW9uLWxhYmVsVGV4dE5ldy0yVDlHaFwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJWaWV3UmVzZXJ2YXRpb24tZGlzcGxheUlubGluZS1NMG5KMlwiLFxuXHRcImJ0blVQZGF0ZVwiOiBcIlZpZXdSZXNlcnZhdGlvbi1idG5VUGRhdGUtMU55SzdcIixcblx0XCJidG5Nb2RhbERlbGV0ZVwiOiBcIlZpZXdSZXNlcnZhdGlvbi1idG5Nb2RhbERlbGV0ZS0zdU05VlwiLFxuXHRcInJhZGlvQnRuXCI6IFwiVmlld1Jlc2VydmF0aW9uLXJhZGlvQnRuLTNGb1VJXCIsXG5cdFwiYnRuV2lkdGhcIjogXCJWaWV3UmVzZXJ2YXRpb24tYnRuV2lkdGgtMzlVYldcIixcblx0XCJiYW5uZXJJbWFnZUJnXCI6IFwiVmlld1Jlc2VydmF0aW9uLWJhbm5lckltYWdlQmctU1pmT3JcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJWaWV3UmVzZXJ2YXRpb24tYmFubmVyRGVsZXRlLTJvOWVRXCIsXG5cdFwibW9kYWxSb290XCI6IFwiVmlld1Jlc2VydmF0aW9uLW1vZGFsUm9vdC0zaUVNNlwiLFxuXHRcIm1vZGFsQm9yZGVyQm90dG9tXCI6IFwiVmlld1Jlc2VydmF0aW9uLW1vZGFsQm9yZGVyQm90dG9tLTJvdXItXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJWaWV3UmVzZXJ2YXRpb24tbG9nSW5Nb2RhbEJvZHktM2tRTm9cIixcblx0XCJleHBvcnRTZWN0aW9uXCI6IFwiVmlld1Jlc2VydmF0aW9uLWV4cG9ydFNlY3Rpb24tMWtXSDNcIixcblx0XCJleHBvcnRTZWN0aW9uR3JpZFN1YlwiOiBcIlZpZXdSZXNlcnZhdGlvbi1leHBvcnRTZWN0aW9uR3JpZFN1Yi13MHNNWlwiLFxuXHRcImV4cG9ydFRleHRcIjogXCJWaWV3UmVzZXJ2YXRpb24tZXhwb3J0VGV4dC0zZHg2S1wiLFxuXHRcImV4cG9ydExpbmtJbWdcIjogXCJWaWV3UmVzZXJ2YXRpb24tZXhwb3J0TGlua0ltZy0zOHBZZVwiLFxuXHRcInZ0ck1pZGRsZVwiOiBcIlZpZXdSZXNlcnZhdGlvbi12dHJNaWRkbGUtMmdfUXhcIixcblx0XCJleHBvcnRJbWdcIjogXCJWaWV3UmVzZXJ2YXRpb24tZXhwb3J0SW1nLTFRM0daXCIsXG5cdFwicHJvZmlsZVZpZXdsYWJlbFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1wcm9maWxlVmlld2xhYmVsLTF1OGJCXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluQ29udGVudFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1wcm9maWxlVmlld01haW5Db250ZW50LTNKRUh3XCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiVmlld1Jlc2VydmF0aW9uLXByb2ZpbGVWaWV3TWFpbi0zcVFCdFwiLFxuXHRcInByb2ZpbGVWaWV3SW5uZXJcIjogXCJWaWV3UmVzZXJ2YXRpb24tcHJvZmlsZVZpZXdJbm5lci0tdHE1Y1wiLFxuXHRcInByb2ZpbGVJbWFnZVNlY3Rpb25cIjogXCJWaWV3UmVzZXJ2YXRpb24tcHJvZmlsZUltYWdlU2VjdGlvbi0xQzM0WlwiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJWaWV3UmVzZXJ2YXRpb24tbGFzdHZpZXdJbm5lci10V0lJYVwiLFxuXHRcIkNoYW5nZVRvVXBwZXJDYXNlXCI6IFwiVmlld1Jlc2VydmF0aW9uLUNoYW5nZVRvVXBwZXJDYXNlLTNIV0twXCIsXG5cdFwibm9Cb3JkZXJcIjogXCJWaWV3UmVzZXJ2YXRpb24tbm9Cb3JkZXItYVJhQ2tcIixcblx0XCJzcGFjZTFcIjogXCJWaWV3UmVzZXJ2YXRpb24tc3BhY2UxLTJXbVltXCIsXG5cdFwic3BhY2UyXCI6IFwiVmlld1Jlc2VydmF0aW9uLXNwYWNlMi1IRFRLdVwiLFxuXHRcInNwYWNlM1wiOiBcIlZpZXdSZXNlcnZhdGlvbi1zcGFjZTMtMl9FdXJcIixcblx0XCJzcGFjZTRcIjogXCJWaWV3UmVzZXJ2YXRpb24tc3BhY2U0LTE4RkloXCIsXG5cdFwic3BhY2U1XCI6IFwiVmlld1Jlc2VydmF0aW9uLXNwYWNlNS11akMzaFwiLFxuXHRcInNwYWNlNlwiOiBcIlZpZXdSZXNlcnZhdGlvbi1zcGFjZTYtMXFvUXJcIixcblx0XCJzcGFjZTdcIjogXCJWaWV3UmVzZXJ2YXRpb24tc3BhY2U3LTFINTBWXCIsXG5cdFwic3BhY2VUb3A4XCI6IFwiVmlld1Jlc2VydmF0aW9uLXNwYWNlVG9wOC04Mk9Cc1wiLFxuXHRcInNwYWNlVG9wMVwiOiBcIlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDEtMUdoMnNcIixcblx0XCJzcGFjZVRvcDJcIjogXCJWaWV3UmVzZXJ2YXRpb24tc3BhY2VUb3AyLTN6b0hWXCIsXG5cdFwic3BhY2VUb3AzXCI6IFwiVmlld1Jlc2VydmF0aW9uLXNwYWNlVG9wMy0yNWdQb1wiLFxuXHRcInNwYWNlVG9wNFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDQtMnA2SE9cIixcblx0XCJzcGFjZVRvcDVcIjogXCJWaWV3UmVzZXJ2YXRpb24tc3BhY2VUb3A1LTM5VXFXXCIsXG5cdFwic3BhY2VUb3A2XCI6IFwiVmlld1Jlc2VydmF0aW9uLXNwYWNlVG9wNi0xc2p1a1wiLFxuXHRcInNwYWNlVG9wN1wiOiBcIlZpZXdSZXNlcnZhdGlvbi1zcGFjZVRvcDcta2NwNFFcIixcblx0XCJwYWRkaW5nMVwiOiBcIlZpZXdSZXNlcnZhdGlvbi1wYWRkaW5nMS0xX2NzcVwiLFxuXHRcInBhZGRpbmcyXCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhZGRpbmcyLUIyN1YwXCIsXG5cdFwicGFkZGluZzNcIjogXCJWaWV3UmVzZXJ2YXRpb24tcGFkZGluZzMtM1I4UnVcIixcblx0XCJwYWRkaW5nNFwiOiBcIlZpZXdSZXNlcnZhdGlvbi1wYWRkaW5nNC0xS1BvelwiLFxuXHRcInBhZGRpbmc1XCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhZGRpbmc1LTJwNVhsXCIsXG5cdFwicGFkZGluZzZcIjogXCJWaWV3UmVzZXJ2YXRpb24tcGFkZGluZzYtMVM5N1JcIixcblx0XCJwYWRkaW5nN1wiOiBcIlZpZXdSZXNlcnZhdGlvbi1wYWRkaW5nNy1ET01CNFwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhZGRpbmdUb3AxLTJRZHlKXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJWaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDItZ3pMNnlcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIlZpZXdSZXNlcnZhdGlvbi1wYWRkaW5nVG9wMy0ycDFJRlwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhZGRpbmdUb3A0LTEzeUlWXCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJWaWV3UmVzZXJ2YXRpb24tcGFkZGluZ1RvcDUtMjNxOUpcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIlZpZXdSZXNlcnZhdGlvbi1wYWRkaW5nVG9wNi0yUzRXS1wiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiVmlld1Jlc2VydmF0aW9uLXBhZGRpbmdUb3A3LW5CV0NsXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiVmlld1Jlc2VydmF0aW9uLW5vUGFkZGluZy0zcUxaalwiLFxuXHRcInRleHRCb2xkXCI6IFwiVmlld1Jlc2VydmF0aW9uLXRleHRCb2xkLTJfVENHXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIlZpZXdSZXNlcnZhdGlvbi10ZXh0Qm9sZGVyLWs0SWc2XCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIlZpZXdSZXNlcnZhdGlvbi10ZXh0Tm9ybWFsLTFhdnpSXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiVmlld1Jlc2VydmF0aW9uLXRleHREYXJrQmx1ZS0zZEJwb1wiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJWaWV3UmVzZXJ2YXRpb24tdGV4dExpZ2h0Qmx1ZS0zRXZJWVwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiVmlld1Jlc2VydmF0aW9uLXRleHRMaWdodFNhbmRsZUdyZWVuLTNndXY5XCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJWaWV3UmVzZXJ2YXRpb24tdGV4dExpZ2h0QnJvd24tM1laZUNcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiVmlld1Jlc2VydmF0aW9uLXRleHRNZWRpdW1NYXJvb24tVlEzczJcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJWaWV3UmVzZXJ2YXRpb24tdGV4dEJyb3duLTNydEFoXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIlZpZXdSZXNlcnZhdGlvbi10ZXh0TWFyb29uLTMyNzlsXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIlZpZXdSZXNlcnZhdGlvbi10ZXh0RGFya0Jyb3duLTFDaEw3XCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiVmlld1Jlc2VydmF0aW9uLXRleHRNZWRpdW1Ccm93bi0zMlJ0dFwiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiVmlld1Jlc2VydmF0aW9uLXRleHRTa3lCbHVlLTJqcy1lXCIsXG5cdFwidGV4dEdyYXlcIjogXCJWaWV3UmVzZXJ2YXRpb24tdGV4dEdyYXktMS1RRy1cIixcblx0XCJjYXBpdGFsaXplXCI6IFwiVmlld1Jlc2VydmF0aW9uLWNhcGl0YWxpemUtMmhLRkhcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVmlld1Jlc2VydmF0aW9uLmNzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQ3VycmVuY3lDb252ZXJ0ZXIgZnJvbSAnLi4vLi4vQ3VycmVuY3lDb252ZXJ0ZXInO1xuXG5cbmNsYXNzIEhvc3RTZXJ2aWNlRmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBob3N0SWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaG9zdFBheW91dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBwYXlFbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgIH0pLFxuICAgICAgICBob3N0VHJhbnNhY3Rpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICB9KSxcbiAgICAgICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHJlc2VydmF0aW9uU3RhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgb3BlblJlc2VydmF0aW9uTW9kYWw6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgICAgY2FuY2VsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgfSksXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGhvc3RQYXlvdXQ6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICByZXNlcnZhdGlvbklkOiAwLFxuICAgIH07XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hlY2tJbiwgbG9hZGluZywgcmVzZXJ2YXRpb25JZCwgcmVzZXJ2YXRpb25TdGF0ZSwgY29tcGxldGVkLCBjYW5jZWxEYXRhLCBob3N0U2VydmljZUZlZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBpZCwgYW1vdW50LCBjdXJyZW5jeSwgaG9zdFBheW91dCwgaG9zdFRyYW5zYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYW1vdW50UGF5dG9Ib3N0ID0gMCwgYWRkaXRpb25hbFN0YXR1cztcblxuICAgICAgICAvLyBpZiAoaG9zdFBheW91dCA9PT0gbnVsbCB8fCBob3N0UGF5b3V0LnBheUVtYWlsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiA8c3Bhbj4gPEN1cnJlbmN5Q29udmVydGVyIGFtb3VudD17MH1cbiAgICAgICAgLy8gICAgICAgICBmcm9tPXtjdXJyZW5jeX0gLz4gIDwvc3Bhbj5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoY2FuY2VsRGF0YSkge1xuICAgICAgICAvLyAgICAgYW1vdW50UGF5dG9Ib3N0ID0gY2FuY2VsRGF0YS5wYXlvdXRUb0hvc3Q7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHJlc2VydmF0aW9uU3RhdGUgPT09ICdleHBpcmVkJyB8fCByZXNlcnZhdGlvblN0YXRlID09PSAnZGVjbGluZWQnIHx8IChyZXNlcnZhdGlvblN0YXRlID09PSAnY2FuY2VsbGVkJyAmJiBhbW91bnRQYXl0b0hvc3QgPT09IDApKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gPHNwYW4+IDxDdXJyZW5jeUNvbnZlcnRlciBhbW91bnQ9ezB9XG4gICAgICAgIC8vICAgICAgICAgZnJvbT17Y3VycmVuY3l9IC8+ICA8L3NwYW4+XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKGhvc3RQYXlvdXQgPT09IG51bGwgfHwgaG9zdFBheW91dC5wYXlFbWFpbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsU3RhdHVzID0gJ05vIFBheW91dCBtZXRob2QnXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGlmICgoaG9zdFRyYW5zYWN0aW9uICE9IG51bGwgJiYgaG9zdFRyYW5zYWN0aW9uLmlkICE9IHVuZGVmaW5lZCkgfHwgKHJlc2VydmF0aW9uSWQgPT09IGlkKSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIDxzcGFuPiA8Q3VycmVuY3lDb252ZXJ0ZXIgYW1vdW50PXtob3N0U2VydmljZUZlZX1cbiAgICAgICAgLy8gICAgICAgICBmcm9tPXtjdXJyZW5jeX0gLz48L3NwYW4+XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgbmV4dERheSA9IG1vbWVudChjaGVja0luKS5hZGQoMSwgJ2RheXMnKTtcbiAgICAgICAgbGV0IHRvZGF5ID0gbW9tZW50KCk7XG4gICAgICAgIGxldCBkYXlEaWZmZXJlbmNlID0gbmV4dERheS5kaWZmKHRvZGF5LCAnZGF5cycpO1xuICAgICAgICBsZXQgc3RhdHVzID0geyBob3N0U2VydmljZUZlZSB9O1xuICAgICAgICBsZXQgYWN0aW9uID0gZmFsc2U7XG4gICAgICAgIGlmICgoZGF5RGlmZmVyZW5jZSA8IDAgJiYgaG9zdFBheW91dCAhPSBudWxsKSB8fCAocmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2NhbmNlbGxlZCcgJiYgYW1vdW50UGF5dG9Ib3N0ID4gMCkpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IHsgaG9zdFNlcnZpY2VGZWUgfVxuICAgICAgICAgICAgYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXlEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICAgICAgc3RhdHVzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8Q3VycmVuY3lDb252ZXJ0ZXIgYW1vdW50PXtob3N0U2VydmljZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgZnJvbT17Y3VycmVuY3l9IC8+XG4gICAgICAgICAgICAgICAge2FkZGl0aW9uYWxTdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+eycgJ30oe2FkZGl0aW9uYWxTdGF0dXN9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhvc3RTZXJ2aWNlRmVlKTtcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVmlld1Jlc2VydmF0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3UmVzZXJ2YXRpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVmlld1Jlc2VydmF0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICAgIFRhYmxlXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG4vLyBTdHlsZVxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9WaWV3UmVzZXJ2YXRpb24uY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBDdXJyZW5jeUNvbnZlcnRlciBmcm9tICcuLi8uLi9DdXJyZW5jeUNvbnZlcnRlcic7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJztcbmltcG9ydCBNb2RhbEZvcm0gZnJvbSAnLi4vUmVzZXJ2YXRpb25NYW5hZ2VtZW50L01vZGFsRm9ybSc7XG4vLyBSZWR1eCBBY3Rpb25cbmltcG9ydCB7IHZpZXdSZWNlaXB0QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL1Jlc2VydmF0aW9uL3ZpZXdSZWNlaXB0QWRtaW4nO1xuaW1wb3J0IEhvc3RTZXJ2aWNlRmVlIGZyb20gJy4vSG9zdFNlcnZpY2VGZWUnO1xuaW1wb3J0IHsgZGVjb2RlIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9xdWVyeUVuY3J5cHRpb24nO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIFZpZXdSZXNlcnZhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBsaXN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGhvc3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgZ3Vlc3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgY2hlY2tPdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGd1ZXN0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgcmVzZXJ2YXRpb25TdGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgbGlzdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBob3N0RGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBob3N0UGF5b3V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgcGF5RW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBob3N0VHJhbnNhY3Rpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZ3Vlc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgIHBheWVyRW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBwYXltZW50VHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWZ1bmRTdGF0dXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICByZWNlaXZlckVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhbmNlbGxhdGlvbkRldGFpbHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgcmVmdW5kVG9HdWVzdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBndWVzdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIGNhbmNlbGxhdGlvblBvbGljeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgICAgICBjYW5jZWxsZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgICAgdmlld1JlY2VpcHRBZG1pbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGF0YTogW11cbiAgICB9O1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkLCBsb2FkaW5nIH0gPSBuZXh0UHJvcHM7XG4gICAgICAgIGNvbnN0IHsgcmVmZXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGNvbXBsZXRlZCAmJiAhbG9hZGluZykge1xuICAgICAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBkYXRhLCBkYXRhOiB7IGxpc3REYXRhLCBjYW5jZWxsYXRpb25EZXRhaWxzLCB0cmFuc2FjdGlvbiB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc3ViVG90YWw7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBzdWJUb3RhbCA9IGRhdGEudG90YWwgKyBkYXRhLmd1ZXN0U2VydmljZUZlZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYW1vdW50UGF5dG9HdWVzdCA9IDA7XG4gICAgICAgIGxldCBhbW91bnRQYXl0b0hvc3QgPSAwO1xuICAgICAgICBsZXQgZ3Vlc3RGZWUgPSAwLCBob3N0RmVlID0gMDtcbiAgICAgICAgaWYgKGNhbmNlbGxhdGlvbkRldGFpbHMpIHtcbiAgICAgICAgICAgIGFtb3VudFBheXRvR3Vlc3QgPSBjYW5jZWxsYXRpb25EZXRhaWxzLnJlZnVuZFRvR3Vlc3Q7XG4gICAgICAgICAgICBhbW91bnRQYXl0b0hvc3QgPSBjYW5jZWxsYXRpb25EZXRhaWxzLnBheW91dFRvSG9zdDtcbiAgICAgICAgICAgIGd1ZXN0RmVlID0gY2FuY2VsbGF0aW9uRGV0YWlscy5ndWVzdFNlcnZpY2VGZWU7XG4gICAgICAgICAgICBob3N0RmVlID0gY2FuY2VsbGF0aW9uRGV0YWlscy5ob3N0U2VydmljZUZlZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBhbW91bnRQYXl0b0hvc3QgPSBOdW1iZXIoZGF0YS50b3RhbCkgLSBOdW1iZXIoZGF0YS5ob3N0U2VydmljZUZlZSk7XG4gICAgICAgICAgICBndWVzdEZlZSA9IGRhdGEuZ3Vlc3RTZXJ2aWNlRmVlO1xuICAgICAgICAgICAgaG9zdEZlZSA9IGRhdGEuaG9zdFNlcnZpY2VGZWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YSAmJiAoZGF0YS5yZXNlcnZhdGlvblN0YXRlID09ICdleHBpcmVkJyB8fCBkYXRhLnJlc2VydmF0aW9uU3RhdGUgPT0gJ2RlY2xpbmVkJykpIHtcbiAgICAgICAgICAgIGd1ZXN0RmVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dERheSA9IG1vbWVudChkYXRhLmNoZWNrSW4pLmFkZCgxLCAnZGF5cycpO1xuICAgICAgICBsZXQgdG9kYXkgPSBtb21lbnQoKTtcbiAgICAgICAgbGV0IGRheURpZmZlcmVuY2UgPSBuZXh0RGF5LmRpZmYodG9kYXksICdkYXlzJyk7XG5cbiAgICAgICAgbGV0IGJvb2t0eXBlLCByZXNlcnZlc3RhdGU7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICByZXNlcnZlc3RhdGUgPSBkYXRhLnJlc2VydmF0aW9uU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3REYXRhKSB7XG4gICAgICAgICAgICBib29rdHlwZSA9IGRhdGEuYm9va2luZ1R5cGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IEd1ZXN0bmFtZSwgSG9zdG5hbWUsIHJlc2VydmF0aW9uU3RhdHVzLCBib29raW5nVHlwZTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5ndWVzdERhdGEpIHtcbiAgICAgICAgICAgIEd1ZXN0bmFtZSA9IGRhdGEuZ3Vlc3REYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5ndWVzdERhdGEubGFzdE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5ob3N0RGF0YSkge1xuICAgICAgICAgICAgSG9zdG5hbWUgPSBkYXRhLmhvc3REYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5ob3N0RGF0YS5sYXN0TmFtZTtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNlcnZlc3RhdGUpIHtcbiAgICAgICAgICAgIHJlc2VydmF0aW9uU3RhdHVzID0gcmVzZXJ2ZXN0YXRlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzZXJ2ZXN0YXRlLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib29rdHlwZSkge1xuICAgICAgICAgICAgYm9va2luZ1R5cGUgPSBib29rdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGJvb2t0eXBlLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdvYmFja2NzcyA9IHsgcGFkZGluZzogJzEwcHgnIH07XG5cbiAgICAgICAgbGV0IHRheFJhdGUgPSBkYXRhICYmIGRhdGEudGF4UmF0ZSAmJiBkYXRhLnRheFJhdGUgPiAwID8gZGF0YS50YXhSYXRlIDogMFxuXG4gICAgICAgIGxldCB1cmwgPSB0eXBlID09PSAncmVzZXJ2YXRpb24nID8gJy9zaXRlYWRtaW4vcmVzZXJ2YXRpb25zJyA6ICcvc2l0ZWFkbWluL3BheW91dCc7XG4gICAgICAgIGxldCB0aXRsZU1lc3NhZ2VLZXkgPSB0eXBlID09PSAncmVzZXJ2YXRpb24nID8gJ3Jlc2VydmF0aW9uRGV0YWlscycgOiAncGF5b3V0RGV0YWlscyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5wYWdlY29udGVudFdyYXBwZXIsICdwYWdlY29udGVudEFSJyl9PlxuICAgICAgICAgICAgICAgIDxNb2RhbEZvcm0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzLmhlYWRlclRpdGxlfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXNbdGl0bGVNZXNzYWdlS2V5XX0gLz48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5zcGFjZTQsIGJ0LnRleHRBbGlnblJpZ2h0LCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt1cmx9IGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeUJvcmRlciwgYnQuYnRuTGFyZ2UsIGJ0Lm5vVGV4dERlY29yYXRpb24sIGJ0LmJ0blByaW1hcnlMaW5rKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmdvQmFja30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3TWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmlkICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZXNlcnZhdGlvbklkfSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIHtkYXRhLmlkfSAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5jb25maXJtYXRpb25Db2RlICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNvbmZpcm1hdGlvbkNvZGV9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiAge2RhdGEuY29uZmlybWF0aW9uQ29kZX0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvblN0YXR1cyAmJiA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlVmlld0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5wcm9maWxlVmlld2xhYmVsKX0+ICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVzZXJ2YXRpb25TdGF0dXN9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiB7cmVzZXJ2YXRpb25TdGF0dXN9ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmNhbmNlbGxhdGlvbkRldGFpbHMgJiYgZGF0YS5jYW5jZWxsYXRpb25EZXRhaWxzLmNhbmNlbGxhdGlvblBvbGljeSAmJiA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlVmlld0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5wcm9maWxlVmlld2xhYmVsKX0+ICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2FuY2VsbGF0aW9uUG9saWN5fSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4ge2RhdGEuY2FuY2VsbGF0aW9uRGV0YWlscy5jYW5jZWxsYXRpb25Qb2xpY3l9ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmNhbmNlbGxhdGlvbkRldGFpbHMgJiYgZGF0YS5jYW5jZWxsYXRpb25EZXRhaWxzLmNhbmNlbGxlZEJ5ICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxsZWRMYWJlbH0gLz4gICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5wcm9maWxlVmlld01haW5Db250ZW50LCBzLmNhcGl0YWxpemUpfT4ge2RhdGEuY2FuY2VsbGF0aW9uRGV0YWlscy5jYW5jZWxsZWRCeX0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEubGlzdERhdGEgJiYgZGF0YS5saXN0RGF0YS5pZCAmJiBkYXRhLmxpc3REYXRhLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy50aXRsZUxhYmVsfSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIDxhIGhyZWY9e1wiL3Jvb21zL1wiICsgZGF0YS5saXN0RGF0YS5pZH0gdGFyZ2V0PVwiX2JsYW5rXCI+IHtkYXRhLmxpc3REYXRhLnRpdGxlfSAgPC9hPiAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5jaGVja0luICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jaGVja0lufSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4ge21vbWVudChkYXRhLmNoZWNrSW4pLmZvcm1hdChcIkRvIE1NTU0gWVlZWVwiKX0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEuY2hlY2tPdXQgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNoZWNrT3V0fSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIHttb21lbnQoZGF0YS5jaGVja091dCkuZm9ybWF0KFwiRG8gTU1NTSBZWVlZXCIpfSAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUeXBlICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nVHlwZX0gLz4gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIHtib29raW5nVHlwZX0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIChzdWJUb3RhbCA9PSAwIHx8IHN1YlRvdGFsID4gMCkgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmFtb3VudFBhaWR9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiAgPEN1cnJlbmN5Q29udmVydGVyIGFtb3VudD17c3ViVG90YWx9IGZyb209e2RhdGEuY3VycmVuY3l9IC8+ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiAoZGF0YS5ndWVzdFNlcnZpY2VGZWUgPT0gMCB8fCBkYXRhLmd1ZXN0U2VydmljZUZlZSA+IDApICYmICFjYW5jZWxsYXRpb25EZXRhaWxzICYmIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ICBHdWVzdCBTZXJ2aWNlIEZlZSAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ICA8Q3VycmVuY3lDb252ZXJ0ZXIgYW1vdW50PXtkYXRhLmd1ZXN0U2VydmljZUZlZX0gZnJvbT17ZGF0YS5jdXJyZW5jeX0gLz4gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogeyB0YXhSYXRlID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ICBUYXggUmF0ZSAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gIDxDdXJyZW5jeUNvbnZlcnRlciBhbW91bnQ9e3RheFJhdGV9IGZyb209e2RhdGEuY3VycmVuY3l9IC8+ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlVmlld0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ndWVzdFNlcnZpY2VGZWV9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5wcm9maWxlVmlld01haW5Db250ZW50KX0+ICA8Q3VycmVuY3lDb252ZXJ0ZXIgYW1vdW50PXtndWVzdEZlZX0gZnJvbT17ZGF0YS5jdXJyZW5jeX0gLz4gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3RTZXJ2aWNlRmVlVHlwZX0gLz4gICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5wcm9maWxlVmlld01haW5Db250ZW50KX0+ICA8SG9zdFNlcnZpY2VGZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RJZD17ZGF0YS5ob3N0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0luPXtkYXRhLmNoZWNrSW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RQYXlvdXQ9e2RhdGEuaG9zdFBheW91dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZGF0YS50b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtkYXRhLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdFRyYW5zYWN0aW9uPXtkYXRhLmhvc3RUcmFuc2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uU3RhdGU9e2RhdGEucmVzZXJ2YXRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbERhdGE9e2RhdGEuY2FuY2VsbGF0aW9uRGV0YWlsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RTZXJ2aWNlRmVlPXtob3N0RmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmd1ZXN0RGF0YSAmJiBkYXRhLmd1ZXN0RGF0YS5wcm9maWxlSWQgJiYgR3Vlc3RuYW1lICYmIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVWaWV3SW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLnByb2ZpbGVWaWV3bGFiZWwpfT4gIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ndWVzdE5hbWV9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiAgPGEgaHJlZj17XCIvdXNlcnMvc2hvdy9cIiArIGRhdGEuZ3Vlc3REYXRhLnByb2ZpbGVJZH0gdGFyZ2V0PVwiX2JsYW5rXCI+IHtHdWVzdG5hbWV9ICAgPC9hPiAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5ndWVzdERhdGEgJiYgZGF0YS5ndWVzdERhdGEucGhvbmVOdW1iZXIgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmd1ZXN0UGhvbmVOdW1iZXJ9IC8+ICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4ge2RlY29kZShkYXRhLmd1ZXN0RGF0YS5waG9uZU51bWJlcil9ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmd1ZXN0VXNlciAmJiBkYXRhLmd1ZXN0VXNlci5lbWFpbCAmJiA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlVmlld0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5wcm9maWxlVmlld2xhYmVsKX0+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ndWVzdEVtYWlsfSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIHtkYXRhLmd1ZXN0VXNlci5lbWFpbH0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEuaG9zdERhdGEgJiYgZGF0YS5ob3N0RGF0YS5wcm9maWxlSWQgJiYgSG9zdG5hbWUgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3ROYW1lfSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIDxhIGhyZWY9e1wiL3VzZXJzL3Nob3cvXCIgKyBkYXRhLmhvc3REYXRhLnByb2ZpbGVJZH0gdGFyZ2V0PVwiX2JsYW5rXCI+IHtIb3N0bmFtZX0gICA8L2E+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEuaG9zdERhdGEgJiYgZGF0YS5ob3N0RGF0YS5waG9uZU51bWJlciAmJiA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlVmlld0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5wcm9maWxlVmlld2xhYmVsKX0+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0UGhvbmVOdW1iZXJ9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiB7ZGVjb2RlKGRhdGEuaG9zdERhdGEucGhvbmVOdW1iZXIpfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmhvc3RVc2VyICYmIGRhdGEuaG9zdFVzZXIuZW1haWwgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3RFbWFpbH0gLz4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiB7ZGF0YS5ob3N0VXNlci5lbWFpbH0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5jYW5jZWxsYXRpb25EZXRhaWxzICYmIGRhdGEuY2FuY2VsbGF0aW9uRGV0YWlscy5jcmVhdGVkQXQgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNhbmNlbERhdGV9IC8+ICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZVZpZXdNYWluQ29udGVudCl9PiAge21vbWVudChkYXRhLmNhbmNlbGxhdGlvbkRldGFpbHMuY3JlYXRlZEF0KS5mb3JtYXQoXCJEbyBNTU1NIFlZWVlcIil9ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBjYW5jZWxsYXRpb25EZXRhaWxzICYmIChjYW5jZWxsYXRpb25EZXRhaWxzLnJlZnVuZFRvR3Vlc3QgPT0gMCB8fCBjYW5jZWxsYXRpb25EZXRhaWxzLnJlZnVuZFRvR3Vlc3QgPiAwKSAmJiA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlVmlld0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5wcm9maWxlVmlld2xhYmVsKX0+ICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVmdW5kQW1vdW50fSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIDxDdXJyZW5jeUNvbnZlcnRlciBhbW91bnQ9e2NhbmNlbGxhdGlvbkRldGFpbHMucmVmdW5kVG9HdWVzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb209e2RhdGEuY3VycmVuY3l9IC8+ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiAhY2FuY2VsbGF0aW9uRGV0YWlscyAmJiAoZGF0YS5yZXNlcnZhdGlvblN0YXRlID09ICdleHBpcmVkJyB8fCBkYXRhLnJlc2VydmF0aW9uU3RhdGUgPT0gJ2RlY2xpbmVkJykgJiYgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZVZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlZnVuZEFtb3VudH0gLz4gICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5wcm9maWxlVmlld01haW5Db250ZW50KX0+ICA8Q3VycmVuY3lDb252ZXJ0ZXIgYW1vdW50PXtzdWJUb3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb209e2RhdGEuY3VycmVuY3l9IC8+ICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiAoZGF0YS5yZXNlcnZhdGlvblN0YXRlID09ICdhcHByb3ZlZCcgfHwgZGF0YS5yZXNlcnZhdGlvblN0YXRlID09ICdjb21wbGV0ZWQnIHx8IGRhdGEucmVzZXJ2YXRpb25TdGF0ZSA9PSAnY2FuY2VsbGVkJykgJiYgPGRpdiBjbGFzc05hbWU9e3MubGFzdHZpZXdJbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMucHJvZmlsZVZpZXdsYWJlbCl9PiAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnBheW91dExhYmVsfSAvPiAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQpfT4gIDxDdXJyZW5jeUNvbnZlcnRlciBhbW91bnQ9e2Ftb3VudFBheXRvSG9zdCA+IDAgPyBhbW91bnRQYXl0b0hvc3QgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbT17ZGF0YS5jdXJyZW5jeX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gICAgY29tcGxldGVkOiBzdGF0ZS5yZXNlcnZhdGlvbi5jb21wbGV0ZWQsXG4gICAgbG9hZGluZzogc3RhdGUucmVzZXJ2YXRpb24ubG9hZGluZyxcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gICAgdmlld1JlY2VpcHRBZG1pbixcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoVmlld1Jlc2VydmF0aW9uKSk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBbUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQW5GQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFsQkE7QUFDQTtBQUZBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQThEQTs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBNERBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQXRTQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQTFDQTtBQXFEQTtBQXREQTtBQUNBO0FBRkE7QUEwREE7QUFEQTtBQUNBO0FBOE9BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9