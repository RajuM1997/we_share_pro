require("source-map-support").install();
exports.ids = ["siteadmin-becomeHostStaticBlock~siteadmin-listSettings"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js!./src/components/siteadmin/ListSettingsForm/filepicker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ListSettingsForm/ListSettingsForm.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.ListSettingsForm-errorMessage-FqFSY {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.ListSettingsForm-space1-J_dmJ {\n\tmargin-bottom: 6px !important;\n}\n.ListSettingsForm-space2-3J5nB {\n\tmargin-bottom: 12px !important;\n}\n.ListSettingsForm-space3-38U2E {\n\tmargin-bottom: 18px !important;\n}\n.ListSettingsForm-space4-xu13M {\n\tmargin-bottom: 24px !important;\n}\n.ListSettingsForm-space5-3du4M {\n\tmargin-bottom: 30px !important;\n}\n.ListSettingsForm-space6-1mpJi {\n\tmargin-bottom: 36px !important;\n}\n.ListSettingsForm-space7-3F88a {\n\tmargin-bottom: 42px !important;\n}\n.ListSettingsForm-spaceTop8-1AOoh {\n\tmargin-bottom: 48px !important;\n}\n.ListSettingsForm-spaceTop1-3-yAB {\n\tmargin-top: 6px !important;\n}\n.ListSettingsForm-spaceTop2-20Md_ {\n\tmargin-top: 12px !important;\n}\n.ListSettingsForm-spaceTop3-3FFvG {\n\tmargin-top: 18px !important;\n}\n.ListSettingsForm-spaceTop4-Sw8YX {\n\tmargin-top: 24px !important;\n}\n.ListSettingsForm-spaceTop5-22sT2 {\n\tmargin-top: 30px !important;\n}\n.ListSettingsForm-spaceTop6-2U6nT {\n\tmargin-top: 36px !important;\n}\n.ListSettingsForm-spaceTop7-3kqJA {\n\tmargin-top: 42px !important;\n}\n.ListSettingsForm-spaceTop8-1AOoh {\n\tmargin-top: 48px !important;\n}\n.ListSettingsForm-noMargin-gw3x5 {\n\tmargin: 0px !important;\n}\n.ListSettingsForm-padding1-2kRSV {\n\tpadding-bottom: 6px !important;\n}\n.ListSettingsForm-padding2-1-w62 {\n\tpadding-bottom: 12px !important;\n}\n.ListSettingsForm-padding3-31tvA {\n\tpadding-bottom: 18px !important;\n}\n.ListSettingsForm-padding4-l1OrW {\n\tpadding-bottom: 24px !important;\n}\n.ListSettingsForm-padding5-3K7CE {\n\tpadding-bottom: 30px !important;\n}\n.ListSettingsForm-padding6-61llk {\n\tpadding-bottom: 36px !important;\n}\n.ListSettingsForm-padding7-2ZTY2 {\n\tpadding-bottom: 42px !important;\n}\n.ListSettingsForm-paddingTop1-37O4B {\n\tpadding-top: 6px !important;\n}\n.ListSettingsForm-paddingTop2-1qyXi {\n\tpadding-top: 12px !important;\n}\n.ListSettingsForm-paddingTop3-2Iu5t {\n\tpadding-top: 18px !important;\n}\n.ListSettingsForm-paddingTop4-1sDQ5 {\n\tpadding-top: 24px !important;\n}\n.ListSettingsForm-paddingTop5-3k_4B {\n\tpadding-top: 30px !important;\n}\n.ListSettingsForm-paddingTop6-2uzW2 {\n\tpadding-top: 36px !important;\n}\n.ListSettingsForm-paddingTop7-39Kpe {\n\tpadding-top: 42px !important;\n}\n.ListSettingsForm-noPadding-1n90J {\n\tpadding: 0px !important;\n}\n.ListSettingsForm-textBold-1u7HF {\n\tfont-weight: 500 !important;\n}\n.ListSettingsForm-textBolder-3Lqp7 {\n\tfont-weight: 700 !important;\n}\n.ListSettingsForm-textNormal-3FMyc {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.ListSettingsForm-textDarkBlue-82mCq {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.ListSettingsForm-textLightBlue-3XtGn {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.ListSettingsForm-textLightSandleGreen-2c8gW {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.ListSettingsForm-textLightBrown-2e3Y1 {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.ListSettingsForm-textMediumMaroon-lDXiG {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.ListSettingsForm-textBrown-qcfDt {\n\tcolor: #B5DC4B !important;\n}\n.ListSettingsForm-textMaroon-hwFiW {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.ListSettingsForm-textDarkBrown-2jU58 {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.ListSettingsForm-textMediumBrown-WnMwy {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.ListSettingsForm-textSkyBlue-1JXAE {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.ListSettingsForm-textGray-28Ix4 {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.ListSettingsForm-rentAllHeaderAdmin-2ovS6 {\n  position: fixed !important;\n}\n.ListSettingsForm-adminLayout-1g9dJ {\n  padding-top: 64px !important;\n}\n.ListSettingsForm-box-1g1X8 h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.ListSettingsForm-exportLink-39Dj7 {\n  margin-bottom: -29px;\n}\n.ListSettingsForm-blockcenter-NzmmK {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.ListSettingsForm-panelHeader-281EC {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.ListSettingsForm-currencyselect-2-9Ow {\n  width: 100%;\n  margin-right: 0px;\n}\n.ListSettingsForm-panelHeader-281EC {\n  overflow: hidden;\n  position: relative;\n}\n.ListSettingsForm-mar0-2IHe6 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.ListSettingsForm-navbar-NV7im > .ListSettingsForm-container-13T5F .ListSettingsForm-navbar-brand-1PRQs,\n.ListSettingsForm-navbar-NV7im > .ListSettingsForm-container-fluid-1oH2t .ListSettingsForm-navbar-brand-1PRQs {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .ListSettingsForm-blockcenter-NzmmK {\n    padding: 0px;\n  }\n  .ListSettingsForm-panelHeader-281EC {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.ListSettingsForm-pagecontentWrapper-31DV6 {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.ListSettingsForm-headerTitle-2IOn- {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.ListSettingsForm-panelHeader-281EC {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.ListSettingsForm-table-1W3YW {\n\tdisplay: table;\n}\n.ListSettingsForm-tableRow-3-2na {\n\tdisplay: table-row;\n}\n.ListSettingsForm-tableCell-3OQCG {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.ListSettingsForm-formGroup-38qRt {\n\tmargin-bottom: 6px;\n}\n.ListSettingsForm-select-2VMrK {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.ListSettingsForm-noMargin-gw3x5 {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.ListSettingsForm-exportLink-39Dj7 {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.ListSettingsForm-labelTextNew-3AV4h {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.ListSettingsForm-displayInline-YcGyE {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.ListSettingsForm-btnUPdate-d0QTh {\n\tdisplay: inline-block;\n}\n.ListSettingsForm-btnModalDelete-3Ze6r {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.ListSettingsForm-radioBtn-2Nl_u {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.ListSettingsForm-btnUPdate-d0QTh {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.ListSettingsForm-btnModalDelete-3Ze6r {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.ListSettingsForm-btnWidth-1S3xr {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.ListSettingsForm-bannerImageBg-16WMk {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.ListSettingsForm-bannerDelete-2uH1x {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.ListSettingsForm-modalRoot-34QwB {\n\tpadding: 32px;\n}\n.ListSettingsForm-modalBorderBottom-rHUnP {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.ListSettingsForm-logInModalBody-3Z2UO {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.ListSettingsForm-exportSection-30QO- {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.ListSettingsForm-exportSectionGridSub-2BJ-P {\n\tgrid-template-columns: 50% 49% !important;\n}\n.ListSettingsForm-exportText-2Cw3U {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.ListSettingsForm-exportLinkImg-UpDW0 {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.ListSettingsForm-vtrMiddle-wm4HJ {\n\tvertical-align: middle;\n}\n.ListSettingsForm-exportImg-RbbDr {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.ListSettingsForm-profileViewlabel-11bq6 {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.ListSettingsForm-profileViewMainContent-2rpZB {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.ListSettingsForm-profileViewMain-1Y8on {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.ListSettingsForm-profileViewInner-_D0GP {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.ListSettingsForm-profileImageSection-1_49U {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.ListSettingsForm-lastviewInner-3hOX5 {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.ListSettingsForm-pagecontentWrapper-31DV6 {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.ListSettingsForm-exportSection-30QO- {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.ListSettingsForm-exportText-2Cw3U {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.ListSettingsForm-exportSectionGridSub-2BJ-P {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.ListSettingsForm-profileViewlabel-11bq6 {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.ListSettingsForm-profileViewMainContent-2rpZB {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.ListSettingsForm-pagecontentWrapper-31DV6 {\n\t\tmargin-left: 0;\n\t}\n}\n.ListSettingsForm-ChangeToUpperCase-2bRBn{\n    text-transform: uppercase\n}\n.ListSettingsForm-noBorder-37-mi {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ListSettingsForm/ListSettingsForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"ListSettingsForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"errorMessage": "ListSettingsForm-errorMessage-FqFSY",
	"space1": "ListSettingsForm-space1-J_dmJ",
	"space2": "ListSettingsForm-space2-3J5nB",
	"space3": "ListSettingsForm-space3-38U2E",
	"space4": "ListSettingsForm-space4-xu13M",
	"space5": "ListSettingsForm-space5-3du4M",
	"space6": "ListSettingsForm-space6-1mpJi",
	"space7": "ListSettingsForm-space7-3F88a",
	"spaceTop8": "ListSettingsForm-spaceTop8-1AOoh",
	"spaceTop1": "ListSettingsForm-spaceTop1-3-yAB",
	"spaceTop2": "ListSettingsForm-spaceTop2-20Md_",
	"spaceTop3": "ListSettingsForm-spaceTop3-3FFvG",
	"spaceTop4": "ListSettingsForm-spaceTop4-Sw8YX",
	"spaceTop5": "ListSettingsForm-spaceTop5-22sT2",
	"spaceTop6": "ListSettingsForm-spaceTop6-2U6nT",
	"spaceTop7": "ListSettingsForm-spaceTop7-3kqJA",
	"noMargin": "ListSettingsForm-noMargin-gw3x5",
	"padding1": "ListSettingsForm-padding1-2kRSV",
	"padding2": "ListSettingsForm-padding2-1-w62",
	"padding3": "ListSettingsForm-padding3-31tvA",
	"padding4": "ListSettingsForm-padding4-l1OrW",
	"padding5": "ListSettingsForm-padding5-3K7CE",
	"padding6": "ListSettingsForm-padding6-61llk",
	"padding7": "ListSettingsForm-padding7-2ZTY2",
	"paddingTop1": "ListSettingsForm-paddingTop1-37O4B",
	"paddingTop2": "ListSettingsForm-paddingTop2-1qyXi",
	"paddingTop3": "ListSettingsForm-paddingTop3-2Iu5t",
	"paddingTop4": "ListSettingsForm-paddingTop4-1sDQ5",
	"paddingTop5": "ListSettingsForm-paddingTop5-3k_4B",
	"paddingTop6": "ListSettingsForm-paddingTop6-2uzW2",
	"paddingTop7": "ListSettingsForm-paddingTop7-39Kpe",
	"noPadding": "ListSettingsForm-noPadding-1n90J",
	"textBold": "ListSettingsForm-textBold-1u7HF",
	"textBolder": "ListSettingsForm-textBolder-3Lqp7",
	"textNormal": "ListSettingsForm-textNormal-3FMyc",
	"textDarkBlue": "ListSettingsForm-textDarkBlue-82mCq",
	"textLightBlue": "ListSettingsForm-textLightBlue-3XtGn",
	"textLightSandleGreen": "ListSettingsForm-textLightSandleGreen-2c8gW",
	"textLightBrown": "ListSettingsForm-textLightBrown-2e3Y1",
	"textMediumMaroon": "ListSettingsForm-textMediumMaroon-lDXiG",
	"textBrown": "ListSettingsForm-textBrown-qcfDt",
	"textMaroon": "ListSettingsForm-textMaroon-hwFiW",
	"textDarkBrown": "ListSettingsForm-textDarkBrown-2jU58",
	"textMediumBrown": "ListSettingsForm-textMediumBrown-WnMwy",
	"textSkyBlue": "ListSettingsForm-textSkyBlue-1JXAE",
	"textGray": "ListSettingsForm-textGray-28Ix4",
	"rentAllHeaderAdmin": "ListSettingsForm-rentAllHeaderAdmin-2ovS6",
	"adminLayout": "ListSettingsForm-adminLayout-1g9dJ",
	"box": "ListSettingsForm-box-1g1X8",
	"exportLink": "ListSettingsForm-exportLink-39Dj7",
	"blockcenter": "ListSettingsForm-blockcenter-NzmmK",
	"panelHeader": "ListSettingsForm-panelHeader-281EC",
	"currencyselect": "ListSettingsForm-currencyselect-2-9Ow",
	"mar0": "ListSettingsForm-mar0-2IHe6",
	"navbar": "ListSettingsForm-navbar-NV7im",
	"container": "ListSettingsForm-container-13T5F",
	"navbar-brand": "ListSettingsForm-navbar-brand-1PRQs",
	"container-fluid": "ListSettingsForm-container-fluid-1oH2t",
	"pagecontentWrapper": "ListSettingsForm-pagecontentWrapper-31DV6",
	"headerTitle": "ListSettingsForm-headerTitle-2IOn-",
	"table": "ListSettingsForm-table-1W3YW",
	"tableRow": "ListSettingsForm-tableRow-3-2na",
	"tableCell": "ListSettingsForm-tableCell-3OQCG",
	"formGroup": "ListSettingsForm-formGroup-38qRt",
	"select": "ListSettingsForm-select-2VMrK",
	"labelTextNew": "ListSettingsForm-labelTextNew-3AV4h",
	"displayInline": "ListSettingsForm-displayInline-YcGyE",
	"btnUPdate": "ListSettingsForm-btnUPdate-d0QTh",
	"btnModalDelete": "ListSettingsForm-btnModalDelete-3Ze6r",
	"radioBtn": "ListSettingsForm-radioBtn-2Nl_u",
	"btnWidth": "ListSettingsForm-btnWidth-1S3xr",
	"bannerImageBg": "ListSettingsForm-bannerImageBg-16WMk",
	"bannerDelete": "ListSettingsForm-bannerDelete-2uH1x",
	"modalRoot": "ListSettingsForm-modalRoot-34QwB",
	"modalBorderBottom": "ListSettingsForm-modalBorderBottom-rHUnP",
	"logInModalBody": "ListSettingsForm-logInModalBody-3Z2UO",
	"exportSection": "ListSettingsForm-exportSection-30QO-",
	"exportSectionGridSub": "ListSettingsForm-exportSectionGridSub-2BJ-P",
	"exportText": "ListSettingsForm-exportText-2Cw3U",
	"exportLinkImg": "ListSettingsForm-exportLinkImg-UpDW0",
	"vtrMiddle": "ListSettingsForm-vtrMiddle-wm4HJ",
	"exportImg": "ListSettingsForm-exportImg-RbbDr",
	"profileViewlabel": "ListSettingsForm-profileViewlabel-11bq6",
	"profileViewMainContent": "ListSettingsForm-profileViewMainContent-2rpZB",
	"profileViewMain": "ListSettingsForm-profileViewMain-1Y8on",
	"profileViewInner": "ListSettingsForm-profileViewInner-_D0GP",
	"profileImageSection": "ListSettingsForm-profileImageSection-1_49U",
	"lastviewInner": "ListSettingsForm-lastviewInner-3hOX5",
	"ChangeToUpperCase": "ListSettingsForm-ChangeToUpperCase-2bRBn",
	"noBorder": "ListSettingsForm-noBorder-37-mi"
};

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./src/components/siteadmin/ListSettingsForm/filepicker.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js!./src/components/siteadmin/ListSettingsForm/filepicker.css");
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

/***/ "./public/adminIcons/defaultAdmin.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ }),

/***/ "./public/adminIcons/dlt.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/dlt.png?b362cae0";

/***/ }),

/***/ "./src/actions/siteadmin/deleteListSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteListSettings", function() { return deleteListSettings; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _getAdminListingSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/actions/siteadmin/getAdminListingSettings.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);


 // Toaster


const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query($id:Int, $typeId: Int) {
    deleteListSettings(id: $id, typeId: $typeId){
      status
      }
    }
  `;
function deleteListSettings(id, typeId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_LIST_SETTINGS_START"]
    });

    try {
      const {
        data
      } = await client.query({
        query,
        variables: {
          id,
          typeId
        },
        fetchPolicy: 'network-only'
      });

      if (data.deleteListSettings) {
        if (data.deleteListSettings.status === "success") {
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["CLOSE_LIST_SETTINGS_MODAL"]
          });
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_LIST_SETTINGS_SUCCESS"]
          });
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].success('Delete Setting Success', "Setting is deleted successfully");
          dispatch(Object(_getAdminListingSettings__WEBPACK_IMPORTED_MODULE_2__["getAdminListingSettings"])(typeId));
        } else {
          if (data.deleteListSettings.status === "unableToDisable") {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].error("Update List Settings", "Unable to delete the list setting. At least, one list setting should be available for the properties.");
          } else if (data.deleteListSettings.status === "listingUsed") {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].error("Update List Settings", "Unable to delete the list setting. The list setting is using on the property. Please remove the list setting on the properties and try again.");
          } else {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].error("Update List Settings", "Oops! Something went wrong. Please try again.");
            dispatch({
              type: _constants__WEBPACK_IMPORTED_MODULE_1__["CLOSE_LIST_SETTINGS_MODAL"]
            });
          }

          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_LIST_SETTINGS_ERROR"]
          });
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_LIST_SETTINGS_ERROR"],
        payload: {
          error
        }
      });
    }
  };
}

/***/ }),

/***/ "./src/actions/siteadmin/getAdminListingSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminListingSettings", function() { return getAdminListingSettings; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");


const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query ($currentPage: Int,$typeId: Int) {
	getAllAdminListSettings(currentPage: $currentPage,typeId: $typeId){
    status
    errorMessage
    listSettingsTypeData {
      id
      typeName
      typeLabel
      fieldType
    }
    count
    listSettingsData {
      id
      typeId
      itemName
      itemDescription
      otherItemName
      startValue
      endValue
      maximum
      minimum
      isEnable
      image
  	}
	}  	
}
`;
function getAdminListingSettings(typeId, page) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_LOAD_LIST_SETTINGS_START"]
    });

    try {
      let currentPage = page ? page : 1; // Send Request to get listing data for admin panel

      const {
        data
      } = await client.query({
        query,
        variables: {
          typeId,
          currentPage
        },
        fetchPolicy: 'network-only'
      });

      if (data && data.getAllAdminListSettings) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_LOAD_LIST_SETTINGS_SUCCESS"],
          payload: {
            adminListSettingsData: data,
            currentPage
          }
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_LOAD_LIST_SETTINGS_ERROR"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_LOAD_LIST_SETTINGS_ERROR"],
        payload: {
          error
        }
      });
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/AddListSettingsForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/submit.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/validate.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/ListSettingsForm.css");
/* harmony import */ var _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/DropZone.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/config.js");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/adminIcons/defaultAdmin.svg");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/adminIcons/dlt.png");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ListSettingsForm/AddListSettingsForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// General

 // Redux Form



 // Translation


 // Redux

 // Style







 // Asset




class AddListSettingsForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderFormControl", ({
      input,
      label,
      type,
      meta: {
        touched,
        error
      },
      className
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], _extends({}, input, {
        type: type,
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    _defineProperty(this, "renderFormControlTextArea", ({
      input,
      label,
      meta: {
        touched,
        error
      },
      children,
      className
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    this.state = {
      fieldType: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const {
      fieldType
    } = this.props;

    if (fieldType != undefined) {
      this.setState({
        fieldType: fieldType
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      fieldType
    } = nextProps;

    if (fieldType != undefined) {
      this.setState({
        fieldType: fieldType
      });
    }
  }

  async handleChange(e) {
    const {
      change
    } = this.props;
    await change('image', null);
  }

  render() {
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      typeId,
      initialValues,
      image
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    const {
      fieldType
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.formMaxWidth, 'maxwidthcenter', 'empty'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_3__["default"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "itemName",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].addItemNew),
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.commonControlInput),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    })), (typeId === 11 || typeId === 10) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.noPadding,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].IconLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 45
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.picContainerMain,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.picContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('hidden-md hidden-lg hidden-sm'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, "\xA0"), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundImage: `url(/images/amenities/${image})`
      },
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.bannerImageBg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 29
      }
    }), image == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundImage: `url(${_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a})`
      },
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.profileImageBg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 37
      }
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "javascript:void(0);",
      onClick: () => this.handleChange(),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.trashIconNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 28
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space2, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.spaceTop2, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.fullWidth, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnPrimary, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.noPadding, 'photoUploadBtn'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_13__["default"], {
      formName: 'AddListSettingsForm',
      defaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].UploadImage),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    })))), typeId === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "itemDescription",
      component: this.renderFormControlTextArea,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].addNewDescription),
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.commonControlInput, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    })), fieldType == "numberType" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 42
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "otherItemName",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].addOtherItem),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.commonControlInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "startValue",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].startValue),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.commonControlInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "endValue",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].endValue),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.commonControlInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.space1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.textAlignRight, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a.spaceTop3, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnPrimaryBorder, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnLarge),
      type: "submit",
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].add)))))));
  }

}

_defineProperty(AddListSettingsForm, "propTypes", {
  fieldType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

AddListSettingsForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "AddListSettingsForm",
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_4__["default"]
})(AddListSettingsForm); // Decorate with connect to read form values

const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["formValueSelector"])("AddListSettingsForm"); // <-- same as form name

const mapState = state => ({
  typeId: selector(state, 'typeId'),
  image: selector(state, 'image')
});

const mapDispatch = {
  change: redux_form__WEBPACK_IMPORTED_MODULE_2__["change"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_10___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_11___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(AddListSettingsForm))));

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/DropZone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-dropzone-component");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./src/components/siteadmin/ListSettingsForm/filepicker.css");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ListSettingsForm/DropZone.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //Toastr




 //Config





class Dropzone extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.addedfile = this.addedfile.bind(this);
    this.dropzone = null;
  }

  componentDidUpdate() {
    const isBrowser = typeof window !== 'undefined';
    const isDocument = typeof document !== undefined;

    if (isBrowser && isDocument) {
      document.querySelector(".dz-hidden-input").style.visibility = 'visible';
      document.querySelector(".dz-hidden-input").style.opacity = '0';
      document.querySelector(".dz-hidden-input").style.height = '100%';
      document.querySelector(".dz-hidden-input").style.width = '100%';
      document.querySelector(".dz-hidden-input").style.cursor = 'pointer';
    }
  }

  success(file, fromServer) {
    const {
      change,
      formName
    } = this.props;
    let fileName = fromServer.file.filename;

    if (formName == 'AddListSettingsForm') {
      change('AddListSettingsForm', 'image', fileName);
    } else if (formName == 'EditListSettingsForm') {
      change('EditListSettingsForm', 'image', fileName);
    }
  }

  addedfile(file, fromServer) {
    let fileFormates = ['image/svg+xml', 'application/sql', 'application/pdf', 'application/vnd.oasis.opendocument.presentation', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/epub+zip', 'application/zip', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.oasis.opendocument.spreadsheet', 'text/tab-separated-values', 'text/calendar', 'application/json'];

    if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_8__["maxUploadSize"]) {
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
      this.dropzone.removeFile(file);
    } else {} // if (file && file.type == "image/svg+xml" || file.type == "application/sql" || file.type == "application/pdf") {


    if (fileFormates.indexOf(file && file.type) > 0) {
      setTimeout(() => {
        if (file && file.accepted === false) {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');
          this.dropzone.removeFile(file.name);
        }
      }, 1000);
    }

    if (file && file.accepted === false) {
      setTimeout(() => {
        if (file && file.accepted === false) {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');
          this.dropzone.removeFile(file.name);
        }
      }, 1000);
    }

    if (file && file.accepted === true) {
      setTimeout(() => {
        if (file && file.accepted === true) {}
      }, 1000);
    }
  }

  render() {
    const {
      formatMessage
    } = this.props.intl;
    const {
      defaultMessage
    } = this.props;
    const djsConfig = {
      dictDefaultMessage: '',
      addRemoveLinks: false,
      uploadMultiple: false,
      maxFilesize: 10,
      acceptedFiles: 'image/jpeg,image/png',
      dictMaxFilesExceeded: 'Remove the existing image and try upload again',
      previewsContainer: false,
      hiddenInputContainer: '.dzInputContainer',
      maxFiles: 20
    };
    const componentConfig = {
      iconFiletypes: ['.jpg', '.png'],
      postUrl: '/uploadAmenities'
    };
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      success: this.success,
      addedfile: this.addedfile
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('dzInputContainer'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
      config: componentConfig,
      eventHandlers: eventHandlers,
      djsConfig: djsConfig,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }, defaultMessage));
  }

}

_defineProperty(Dropzone, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

const mapState = state => ({});

const mapDispatch = {
  change: redux_form__WEBPACK_IMPORTED_MODULE_10__["change"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/EditListSettingsForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/update.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/validate.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_siteadmin_deleteListSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/actions/siteadmin/deleteListSettings.js");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/ListSettingsForm.css");
/* harmony import */ var _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/DropZone.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/config.js");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/adminIcons/defaultAdmin.svg");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/adminIcons/dlt.png");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ListSettingsForm/EditListSettingsForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// General

 // Redux Form



 // Translation


 // Redux


 // Style







 // Asset




class EditListSettingsForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderFormControl", ({
      input,
      label,
      type,
      meta: {
        touched,
        error
      },
      className
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormControl"], _extends({}, input, {
        type: type,
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    _defineProperty(this, "renderFormControlTextArea", ({
      input,
      label,
      meta: {
        touched,
        error
      },
      children,
      className
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    this.state = {
      fieldType: null
    }, this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const {
      fieldType
    } = this.props;

    if (fieldType != undefined) {
      this.setState({
        fieldType: fieldType
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      fieldType
    } = nextProps;

    if (fieldType != undefined) {
      this.setState({
        fieldType: fieldType
      });
    }
  }

  async handleChange(e) {
    const {
      change
    } = this.props;
    await change('image', null);
  }

  render() {
    const {
      error,
      handleSubmit,
      submitting,
      dispatch
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    const {
      id,
      typeId,
      deleteListSettings,
      image
    } = this.props;
    const {
      fieldType
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.formMaxWidth, 'maxwidthcenter', 'empty', 'adminRadioBtn'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(_update__WEBPACK_IMPORTED_MODULE_3__["default"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "itemName",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].addItemNew),
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.commonControlInput),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    })), (typeId === 11 || typeId === 10) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.noPadding,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].IconLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 45
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.picContainerMain,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.picContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('hidden-md hidden-lg hidden-sm'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, "\xA0"), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundImage: `url(/images/amenities/${image})`
      },
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.bannerImageBg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }), image == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundImage: `url(${_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16___default.a})`
      },
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.profileImageBg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 37
      }
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "javascript:void(0);",
      onClick: () => this.handleChange(),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.trashIconNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 28
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space2, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.spaceTop2, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.fullWidth, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.btnPrimary, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.noPadding, 'photoUploadBtn'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_14__["default"], {
      formName: 'EditListSettingsForm',
      defaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].UploadImage),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    })))), typeId == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 28
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "itemDescription",
      component: this.renderFormControlTextArea,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].addNewDescription),
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.commonControlInput, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 15
      }
    })), fieldType == "numberType" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 42
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "otherItemName",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].addOtherItem),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.commonControlInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "startValue",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].startValue),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.commonControlInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "endValue",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].endValue),
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.commonControlInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }))), fieldType != "numberType" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 42
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.labelTextNew, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnUPdate, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.curderPointer),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "isEnable",
      component: "input",
      type: "radio",
      value: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 19
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.radioBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 86
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].enable))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.labelTextNew, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnModalDelete, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.curderPointer, 'adminDelete'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "isEnable",
      component: "input",
      type: "radio",
      value: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.radioBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 86
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].disable)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnUPdate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.btnPrimary, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnWidth),
      type: "submit",
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 23
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].update))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnModalDelete, 'adminUpdate'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.btnPrimaryBorder, _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnWidth),
      onClick: () => deleteListSettings(id, typeId),
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 23
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].delete))))))), fieldType === "numberType" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
      className: _ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 43
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a.btnLarge),
      type: "submit",
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 19
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_6__["default"].update)))))));
  }

}

_defineProperty(EditListSettingsForm, "propTypes", {
  isEnable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  typeId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  fieldType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  deleteListSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

EditListSettingsForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: "EditListSettingsForm",
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_4__["default"]
})(EditListSettingsForm); // Decorate with connect to read form values

const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["formValueSelector"])("EditListSettingsForm"); // <-- same as form name

const mapState = state => ({
  isEnable: selector(state, 'isEnable'),
  id: selector(state, 'id'),
  typeId: selector(state, 'typeId'),
  image: selector(state, 'image')
});

const mapDispatch = {
  deleteListSettings: _actions_siteadmin_deleteListSettings__WEBPACK_IMPORTED_MODULE_8__["deleteListSettings"],
  change: redux_form__WEBPACK_IMPORTED_MODULE_2__["change"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_ListSettingsForm_css__WEBPACK_IMPORTED_MODULE_11___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_12___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(EditListSettingsForm))));

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/ListSettingsForm.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ListSettingsForm/ListSettingsForm.css");
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

/***/ "./src/components/siteadmin/ListSettingsForm/ListSettingsForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AddListSettingsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/AddListSettingsForm.js");
/* harmony import */ var _EditListSettingsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/ListSettingsForm/EditListSettingsForm.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ListSettingsForm/ListSettingsForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// General

 // Redux Form

 // Translation

 // Redux





class ListSettingsForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      id
    } = this.props;

    if (id != undefined) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "empty",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditListSettingsForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "empty",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddListSettingsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }));
    }
  }

} // Decorate with connect to read form values


_defineProperty(ListSettingsForm, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});

const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["formValueSelector"])("EditListSettingsForm"); // <-- same as form name

const mapState = state => ({
  id: selector(state, 'id')
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(ListSettingsForm)));

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/actions/siteadmin/modalActions.js");
/* harmony import */ var _actions_siteadmin_getAdminListingSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/siteadmin/getAdminListingSettings.js");
// Fetch Request
 // Toaster

 // Redux




async function submit(values, dispatch) {
  const query = `
    query (
        $typeId:Int,
        $itemName:String,
        $itemDescription:String,
        $otherItemName:String,
        $maximum:Int,
        $minimum:Int,
      	$startValue:Int,
        $endValue:Int,
        $isEnable: String,
        $image: String
      ) {
          addListSettings (
            typeId:$typeId,
            itemName:$itemName,
            itemDescription:$itemDescription,
            otherItemName:$otherItemName,
            maximum: $maximum,
            minimum: $minimum,
            startValue: $startValue,
            endValue: $endValue,
            isEnable: $isEnable,
            image: $image
          ) {
            status
          }
        }
  `;
  const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: values
    }),
    credentials: 'include'
  });
  const {
    data
  } = await resp.json();

  if (data.addListSettings.status === "success") {
    dispatch(Object(_actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_2__["closeListSettingsModal"])());
    dispatch(Object(_actions_siteadmin_getAdminListingSettings__WEBPACK_IMPORTED_MODULE_3__["getAdminListingSettings"])(values.typeId));
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Add List Settings", "List Setting is created successfully!");
  } else {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Add List Settings", "Creating List Setting is failed");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/update.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/actions/siteadmin/modalActions.js");
/* harmony import */ var _actions_siteadmin_getAdminListingSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/siteadmin/getAdminListingSettings.js");
// Fetch Request
 // Toaster

 // Redux




async function update(values, dispatch) {
  const query = `
    query (
        $id:Int,
        $typeId:Int,
        $itemName:String,
        $itemDescription:String,
        $otherItemName:String,
        $maximum:Int,
        $minimum:Int,
      	$startValue:Int,
        $endValue:Int,
        $isEnable: String,
        $image: String
      ) {
          updateListSettings (
            id: $id,
            typeId:$typeId,
            itemName:$itemName,
            itemDescription:$itemDescription,
            otherItemName: $otherItemName,
            maximum: $maximum,
            minimum: $minimum,
            startValue: $startValue,
            endValue: $endValue,
            isEnable: $isEnable,
            image: $image
          ) {
            status
          }
        }
  `;
  const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: values
    }),
    credentials: 'include'
  });
  const {
    data
  } = await resp.json();

  if (data.updateListSettings.status === "success") {
    dispatch(Object(_actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_2__["closeListSettingsModal"])());
    await dispatch(Object(_actions_siteadmin_getAdminListingSettings__WEBPACK_IMPORTED_MODULE_3__["getAdminListingSettings"])(values.typeId));
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Update List Settings", "The list setting has been updated successfully!");
  } else if (data.updateListSettings.status === "unableToDisable") {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update List Settings", "Unable to disable the list setting. At least, one list setting should be active.");
  } else if (data.updateListSettings.status === "listingUsed") {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update List Settings", "Unable to disable the list setting. The list setting is using on the property. Please remove the list setting on the properties and try again.");
  } else {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update List Settings", "Oops! Something went wrong. Please try again.");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (update);

/***/ }),

/***/ "./src/components/siteadmin/ListSettingsForm/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {};

  if (!values.itemName) {
    errors.itemName = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].Required;
  } else if (values.itemName && values.itemName.trim() == "") {
    errors.itemName = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  } else if (values.itemName && values.itemName.length > 255) {
    errors.itemName = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].exceedLimit;
  }

  if (!values.otherItemName) {
    errors.otherItemName = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].Required;
  }

  if (values.startValue != 0 && values.startValue < 0) {
    if (Number(values.startValue) || Number(values.startValue) != parseInt(values.startValue, 10)) {
      errors.startValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].startValueIsInvalid;
    }
  }

  if (!Number(values.endValue) || Number(values.endValue) != parseInt(values.endValue, 10)) {
    errors.endValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].endValueIsInvalid;
  }

  if (Number(values.endValue) < Number(values.startValue)) {
    errors.endValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].endValueGreater;
  }

  if (values.itemDescription && values.itemDescription.trim() == "") {
    // errors.itemDescription = messages.descriptionEmpty;
    errors.itemDescription = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1iZWNvbWVIb3N0U3RhdGljQmxvY2t+c2l0ZWFkbWluLWxpc3RTZXR0aW5ncy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0xpc3RTZXR0aW5nc0Zvcm0vZmlsZXBpY2tlci5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vTGlzdFNldHRpbmdzRm9ybS9MaXN0U2V0dGluZ3NGb3JtLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vTGlzdFNldHRpbmdzRm9ybS9maWxlcGlja2VyLmNzcz9kYmFlIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2ZyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vZGVsZXRlTGlzdFNldHRpbmdzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL2dldEFkbWluTGlzdGluZ1NldHRpbmdzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0xpc3RTZXR0aW5nc0Zvcm0vQWRkTGlzdFNldHRpbmdzRm9ybS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9MaXN0U2V0dGluZ3NGb3JtL0Ryb3Bab25lLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0xpc3RTZXR0aW5nc0Zvcm0vRWRpdExpc3RTZXR0aW5nc0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0xpc3RTZXR0aW5nc0Zvcm0vTGlzdFNldHRpbmdzRm9ybS5jc3M/MjAxOSIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9MaXN0U2V0dGluZ3NGb3JtL0xpc3RTZXR0aW5nc0Zvcm0uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vTGlzdFNldHRpbmdzRm9ybS9zdWJtaXQuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vTGlzdFNldHRpbmdzRm9ybS91cGRhdGUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vTGlzdFNldHRpbmdzRm9ybS92YWxpZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1lcnJvck1lc3NhZ2UtRnFGU1kge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNwYWNlMS1KX2RtSiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNwYWNlMi0zSjVuQiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1zcGFjZTMtMzhVMkUge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2U0LXh1MTNNIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNwYWNlNS0zZHU0TSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1zcGFjZTYtMW1wSmkge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2U3LTNGODhhIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNwYWNlVG9wOC0xQU9vaCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1zcGFjZVRvcDEtMy15QUIge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1zcGFjZVRvcDItMjBNZF8ge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2VUb3AzLTNGRnZHIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNwYWNlVG9wNC1TdzhZWCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1zcGFjZVRvcDUtMjJzVDIge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2VUb3A2LTJVNm5UIHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNwYWNlVG9wNy0za3FKQSB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1zcGFjZVRvcDgtMUFPb2gge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tbm9NYXJnaW4tZ3czeDUge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmcxLTJrUlNWIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmcyLTEtdzYyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wYWRkaW5nMy0zMXR2QSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcGFkZGluZzQtbDFPclcge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmc1LTNLN0NFIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wYWRkaW5nNi02MWxsayB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcGFkZGluZzctMlpUWTIge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3AxLTM3TzRCIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3AyLTFxeVhpIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wYWRkaW5nVG9wMy0ySXU1dCB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDQtMXNEUTUge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3A1LTNrXzRCIHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wYWRkaW5nVG9wNi0ydXpXMiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDctMzlLcGUge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLW5vUGFkZGluZy0xbjkwSiB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXRleHRCb2xkLTF1N0hGIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXRleHRCb2xkZXItM0xxcDcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdGV4dE5vcm1hbC0zRk15YyB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4uTGlzdFNldHRpbmdzRm9ybS10ZXh0RGFya0JsdWUtODJtQ3Ege1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdGV4dExpZ2h0Qmx1ZS0zWHRHbiB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdGV4dExpZ2h0U2FuZGxlR3JlZW4tMmM4Z1cge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdGV4dExpZ2h0QnJvd24tMmUzWTEge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXRleHRNZWRpdW1NYXJvb24tbERYaUcge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdGV4dEJyb3duLXFjZkR0IHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS10ZXh0TWFyb29uLWh3RmlXIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS10ZXh0RGFya0Jyb3duLTJqVTU4IHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXRleHRNZWRpdW1Ccm93bi1Xbk13eSB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdGV4dFNreUJsdWUtMUpYQUUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS10ZXh0R3JheS0yOEl4NCB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1yZW50QWxsSGVhZGVyQWRtaW4tMm92UzYge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLWFkbWluTGF5b3V0LTFnOWRKIHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLWJveC0xZzFYOCBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1leHBvcnRMaW5rLTM5RGo3IHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1ibG9ja2NlbnRlci1Oem1tSyB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wYW5lbEhlYWRlci0yODFFQyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1jdXJyZW5jeXNlbGVjdC0yLTlPdyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wYW5lbEhlYWRlci0yODFFQyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1tYXIwLTJJSGU2IHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1uYXZiYXItTlY3aW0gPiAuTGlzdFNldHRpbmdzRm9ybS1jb250YWluZXItMTNUNUYgLkxpc3RTZXR0aW5nc0Zvcm0tbmF2YmFyLWJyYW5kLTFQUlFzLFxcbi5MaXN0U2V0dGluZ3NGb3JtLW5hdmJhci1OVjdpbSA+IC5MaXN0U2V0dGluZ3NGb3JtLWNvbnRhaW5lci1mbHVpZC0xb0gydCAuTGlzdFNldHRpbmdzRm9ybS1uYXZiYXItYnJhbmQtMVBSUXMge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuTGlzdFNldHRpbmdzRm9ybS1ibG9ja2NlbnRlci1Oem1tSyB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5MaXN0U2V0dGluZ3NGb3JtLXBhbmVsSGVhZGVyLTI4MUVDIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5MaXN0U2V0dGluZ3NGb3JtLXBhZ2Vjb250ZW50V3JhcHBlci0zMURWNiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0taGVhZGVyVGl0bGUtMklPbi0ge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcGFuZWxIZWFkZXItMjgxRUMge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS10YWJsZS0xVzNZVyB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXRhYmxlUm93LTMtMm5hIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXRhYmxlQ2VsbC0zT1FDRyB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tZm9ybUdyb3VwLTM4cVJ0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLXNlbGVjdC0yVk1ySyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1ub01hcmdpbi1ndzN4NSB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1leHBvcnRMaW5rLTM5RGo3IHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1sYWJlbFRleHROZXctM0FWNGgge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tZGlzcGxheUlubGluZS1ZY0d5RSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5MaXN0U2V0dGluZ3NGb3JtLWJ0blVQZGF0ZS1kMFFUaCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1idG5Nb2RhbERlbGV0ZS0zWmU2ciB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1yYWRpb0J0bi0yTmxfdSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0Lkxpc3RTZXR0aW5nc0Zvcm0tYnRuVVBkYXRlLWQwUVRoIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuTGlzdFNldHRpbmdzRm9ybS1idG5Nb2RhbERlbGV0ZS0zWmU2ciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0Lkxpc3RTZXR0aW5nc0Zvcm0tYnRuV2lkdGgtMVMzeHIge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5MaXN0U2V0dGluZ3NGb3JtLWJhbm5lckltYWdlQmctMTZXTWsge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLWJhbm5lckRlbGV0ZS0ydUgxeCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLkxpc3RTZXR0aW5nc0Zvcm0tbW9kYWxSb290LTM0UXdCIHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1tb2RhbEJvcmRlckJvdHRvbS1ySFVuUCB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tbG9nSW5Nb2RhbEJvZHktM1oyVU8ge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uTGlzdFNldHRpbmdzRm9ybS1leHBvcnRTZWN0aW9uLTMwUU8tIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1leHBvcnRTZWN0aW9uR3JpZFN1Yi0yQkotUCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5MaXN0U2V0dGluZ3NGb3JtLWV4cG9ydFRleHQtMkN3M1Uge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tZXhwb3J0TGlua0ltZy1VcERXMCB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tdnRyTWlkZGxlLXdtNEhKIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1leHBvcnRJbWctUmJiRHIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wcm9maWxlVmlld2xhYmVsLTExYnE2IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LTJycFpCIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdNYWluLTFZOG9uIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdJbm5lci1fRDBHUCB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tcHJvZmlsZUltYWdlU2VjdGlvbi0xXzQ5VSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uTGlzdFNldHRpbmdzRm9ybS1sYXN0dmlld0lubmVyLTNoT1g1IHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuTGlzdFNldHRpbmdzRm9ybS1wYWdlY29udGVudFdyYXBwZXItMzFEVjYge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5MaXN0U2V0dGluZ3NGb3JtLWV4cG9ydFNlY3Rpb24tMzBRTy0ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0Lkxpc3RTZXR0aW5nc0Zvcm0tZXhwb3J0VGV4dC0yQ3czVSB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0Lkxpc3RTZXR0aW5nc0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItMkJKLVAge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuTGlzdFNldHRpbmdzRm9ybS1wcm9maWxlVmlld2xhYmVsLTExYnE2IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuTGlzdFNldHRpbmdzRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LTJycFpCIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuTGlzdFNldHRpbmdzRm9ybS1wYWdlY29udGVudFdyYXBwZXItMzFEVjYge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tQ2hhbmdlVG9VcHBlckNhc2UtMmJSQm57XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLkxpc3RTZXR0aW5nc0Zvcm0tbm9Cb3JkZXItMzctbWkge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0xpc3RTZXR0aW5nc0Zvcm0vTGlzdFNldHRpbmdzRm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QlwiLFwiZmlsZVwiOlwiTGlzdFNldHRpbmdzRm9ybS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLmVycm9yTWVzc2FnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4ucmVudEFsbEhlYWRlckFkbWluIHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5MYXlvdXQge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLmJsb2NrY2VudGVyIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uY3VycmVuY3lzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubmF2YmFyID4gLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLFxcbi5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmQge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuYmxvY2tjZW50ZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAucGFuZWxIZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi50YWJsZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi50YWJsZVJvdyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4udGFibGVDZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uZm9ybUdyb3VwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBvcnRMaW5rIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubGFiZWxUZXh0TmV3IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5kaXNwbGF5SW5saW5lIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLmJ0blVQZGF0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuTW9kYWxEZWxldGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLnJhZGlvQnRuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYnRuVVBkYXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuYnRuTW9kYWxEZWxldGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5idG5XaWR0aCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLmJhbm5lckltYWdlQmcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5iYW5uZXJEZWxldGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5tb2RhbFJvb3Qge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5tb2RhbEJvcmRlckJvdHRvbSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLmxvZ0luTW9kYWxCb2R5IHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmV4cG9ydFNlY3Rpb24ge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5leHBvcnRUZXh0IHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5leHBvcnRMaW5rSW1nIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udnRyTWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZXhwb3J0SW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLnByb2ZpbGVWaWV3TWFpbiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5wcm9maWxlVmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4ucHJvZmlsZUltYWdlU2VjdGlvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubGFzdHZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LmV4cG9ydFNlY3Rpb24ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LmV4cG9ydFRleHQge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uQ2hhbmdlVG9VcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLm5vQm9yZGVyIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImVycm9yTWVzc2FnZVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tZXJyb3JNZXNzYWdlLUZxRlNZXCIsXG5cdFwic3BhY2UxXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1zcGFjZTEtSl9kbUpcIixcblx0XCJzcGFjZTJcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXNwYWNlMi0zSjVuQlwiLFxuXHRcInNwYWNlM1wiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2UzLTM4VTJFXCIsXG5cdFwic3BhY2U0XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1zcGFjZTQteHUxM01cIixcblx0XCJzcGFjZTVcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXNwYWNlNS0zZHU0TVwiLFxuXHRcInNwYWNlNlwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2U2LTFtcEppXCIsXG5cdFwic3BhY2U3XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1zcGFjZTctM0Y4OGFcIixcblx0XCJzcGFjZVRvcDhcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXNwYWNlVG9wOC0xQU9vaFwiLFxuXHRcInNwYWNlVG9wMVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2VUb3AxLTMteUFCXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1zcGFjZVRvcDItMjBNZF9cIixcblx0XCJzcGFjZVRvcDNcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXNwYWNlVG9wMy0zRkZ2R1wiLFxuXHRcInNwYWNlVG9wNFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2VUb3A0LVN3OFlYXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1zcGFjZVRvcDUtMjJzVDJcIixcblx0XCJzcGFjZVRvcDZcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXNwYWNlVG9wNi0yVTZuVFwiLFxuXHRcInNwYWNlVG9wN1wiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tc3BhY2VUb3A3LTNrcUpBXCIsXG5cdFwibm9NYXJnaW5cIjogXCJMaXN0U2V0dGluZ3NGb3JtLW5vTWFyZ2luLWd3M3g1XCIsXG5cdFwicGFkZGluZzFcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmcxLTJrUlNWXCIsXG5cdFwicGFkZGluZzJcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmcyLTEtdzYyXCIsXG5cdFwicGFkZGluZzNcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmczLTMxdHZBXCIsXG5cdFwicGFkZGluZzRcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmc0LWwxT3JXXCIsXG5cdFwicGFkZGluZzVcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmc1LTNLN0NFXCIsXG5cdFwicGFkZGluZzZcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmc2LTYxbGxrXCIsXG5cdFwicGFkZGluZzdcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmc3LTJaVFkyXCIsXG5cdFwicGFkZGluZ1RvcDFcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3AxLTM3TzRCXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3AyLTFxeVhpXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3AzLTJJdTV0XCIsXG5cdFwicGFkZGluZ1RvcDRcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3A0LTFzRFE1XCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3A1LTNrXzRCXCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3A2LTJ1elcyXCIsXG5cdFwicGFkZGluZ1RvcDdcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXBhZGRpbmdUb3A3LTM5S3BlXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1ub1BhZGRpbmctMW45MEpcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdGV4dEJvbGQtMXU3SEZcIixcblx0XCJ0ZXh0Qm9sZGVyXCI6IFwiTGlzdFNldHRpbmdzRm9ybS10ZXh0Qm9sZGVyLTNMcXA3XCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdGV4dE5vcm1hbC0zRk15Y1wiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdGV4dERhcmtCbHVlLTgybUNxXCIsXG5cdFwidGV4dExpZ2h0Qmx1ZVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdGV4dExpZ2h0Qmx1ZS0zWHRHblwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiTGlzdFNldHRpbmdzRm9ybS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0yYzhnV1wiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiTGlzdFNldHRpbmdzRm9ybS10ZXh0TGlnaHRCcm93bi0yZTNZMVwiLFxuXHRcInRleHRNZWRpdW1NYXJvb25cIjogXCJMaXN0U2V0dGluZ3NGb3JtLXRleHRNZWRpdW1NYXJvb24tbERYaUdcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJMaXN0U2V0dGluZ3NGb3JtLXRleHRCcm93bi1xY2ZEdFwiLFxuXHRcInRleHRNYXJvb25cIjogXCJMaXN0U2V0dGluZ3NGb3JtLXRleHRNYXJvb24taHdGaVdcIixcblx0XCJ0ZXh0RGFya0Jyb3duXCI6IFwiTGlzdFNldHRpbmdzRm9ybS10ZXh0RGFya0Jyb3duLTJqVTU4XCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiTGlzdFNldHRpbmdzRm9ybS10ZXh0TWVkaXVtQnJvd24tV25Nd3lcIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdGV4dFNreUJsdWUtMUpYQUVcIixcblx0XCJ0ZXh0R3JheVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdGV4dEdyYXktMjhJeDRcIixcblx0XCJyZW50QWxsSGVhZGVyQWRtaW5cIjogXCJMaXN0U2V0dGluZ3NGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi0yb3ZTNlwiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1hZG1pbkxheW91dC0xZzlkSlwiLFxuXHRcImJveFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tYm94LTFnMVg4XCIsXG5cdFwiZXhwb3J0TGlua1wiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tZXhwb3J0TGluay0zOURqN1wiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1ibG9ja2NlbnRlci1Oem1tS1wiLFxuXHRcInBhbmVsSGVhZGVyXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1wYW5lbEhlYWRlci0yODFFQ1wiLFxuXHRcImN1cnJlbmN5c2VsZWN0XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1jdXJyZW5jeXNlbGVjdC0yLTlPd1wiLFxuXHRcIm1hcjBcIjogXCJMaXN0U2V0dGluZ3NGb3JtLW1hcjAtMklIZTZcIixcblx0XCJuYXZiYXJcIjogXCJMaXN0U2V0dGluZ3NGb3JtLW5hdmJhci1OVjdpbVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tY29udGFpbmVyLTEzVDVGXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1uYXZiYXItYnJhbmQtMVBSUXNcIixcblx0XCJjb250YWluZXItZmx1aWRcIjogXCJMaXN0U2V0dGluZ3NGb3JtLWNvbnRhaW5lci1mbHVpZC0xb0gydFwiLFxuXHRcInBhZ2Vjb250ZW50V3JhcHBlclwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTMxRFY2XCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJMaXN0U2V0dGluZ3NGb3JtLWhlYWRlclRpdGxlLTJJT24tXCIsXG5cdFwidGFibGVcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXRhYmxlLTFXM1lXXCIsXG5cdFwidGFibGVSb3dcIjogXCJMaXN0U2V0dGluZ3NGb3JtLXRhYmxlUm93LTMtMm5hXCIsXG5cdFwidGFibGVDZWxsXCI6IFwiTGlzdFNldHRpbmdzRm9ybS10YWJsZUNlbGwtM09RQ0dcIixcblx0XCJmb3JtR3JvdXBcIjogXCJMaXN0U2V0dGluZ3NGb3JtLWZvcm1Hcm91cC0zOHFSdFwiLFxuXHRcInNlbGVjdFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tc2VsZWN0LTJWTXJLXCIsXG5cdFwibGFiZWxUZXh0TmV3XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1sYWJlbFRleHROZXctM0FWNGhcIixcblx0XCJkaXNwbGF5SW5saW5lXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1kaXNwbGF5SW5saW5lLVljR3lFXCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1idG5VUGRhdGUtZDBRVGhcIixcblx0XCJidG5Nb2RhbERlbGV0ZVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tYnRuTW9kYWxEZWxldGUtM1plNnJcIixcblx0XCJyYWRpb0J0blwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tcmFkaW9CdG4tMk5sX3VcIixcblx0XCJidG5XaWR0aFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tYnRuV2lkdGgtMVMzeHJcIixcblx0XCJiYW5uZXJJbWFnZUJnXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1iYW5uZXJJbWFnZUJnLTE2V01rXCIsXG5cdFwiYmFubmVyRGVsZXRlXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1iYW5uZXJEZWxldGUtMnVIMXhcIixcblx0XCJtb2RhbFJvb3RcIjogXCJMaXN0U2V0dGluZ3NGb3JtLW1vZGFsUm9vdC0zNFF3QlwiLFxuXHRcIm1vZGFsQm9yZGVyQm90dG9tXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1tb2RhbEJvcmRlckJvdHRvbS1ySFVuUFwiLFxuXHRcImxvZ0luTW9kYWxCb2R5XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1sb2dJbk1vZGFsQm9keS0zWjJVT1wiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJMaXN0U2V0dGluZ3NGb3JtLWV4cG9ydFNlY3Rpb24tMzBRTy1cIixcblx0XCJleHBvcnRTZWN0aW9uR3JpZFN1YlwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItMkJKLVBcIixcblx0XCJleHBvcnRUZXh0XCI6IFwiTGlzdFNldHRpbmdzRm9ybS1leHBvcnRUZXh0LTJDdzNVXCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tZXhwb3J0TGlua0ltZy1VcERXMFwiLFxuXHRcInZ0ck1pZGRsZVwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tdnRyTWlkZGxlLXdtNEhKXCIsXG5cdFwiZXhwb3J0SW1nXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1leHBvcnRJbWctUmJiRHJcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1wcm9maWxlVmlld2xhYmVsLTExYnE2XCIsXG5cdFwicHJvZmlsZVZpZXdNYWluQ29udGVudFwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0ycnBaQlwiLFxuXHRcInByb2ZpbGVWaWV3TWFpblwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdNYWluLTFZOG9uXCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIkxpc3RTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdJbm5lci1fRDBHUFwiLFxuXHRcInByb2ZpbGVJbWFnZVNlY3Rpb25cIjogXCJMaXN0U2V0dGluZ3NGb3JtLXByb2ZpbGVJbWFnZVNlY3Rpb24tMV80OVVcIixcblx0XCJsYXN0dmlld0lubmVyXCI6IFwiTGlzdFNldHRpbmdzRm9ybS1sYXN0dmlld0lubmVyLTNoT1g1XCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJMaXN0U2V0dGluZ3NGb3JtLUNoYW5nZVRvVXBwZXJDYXNlLTJiUkJuXCIsXG5cdFwibm9Cb3JkZXJcIjogXCJMaXN0U2V0dGluZ3NGb3JtLW5vQm9yZGVyLTM3LW1pXCJcbn07IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmc/MGNiNjVhZDZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nP2IzNjJjYWUwXCI7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuaW1wb3J0IHtcbiAgREVMRVRFX0xJU1RfU0VUVElOR1NfU1RBUlQsXG4gIERFTEVURV9MSVNUX1NFVFRJTkdTX1NVQ0NFU1MsXG4gIERFTEVURV9MSVNUX1NFVFRJTkdTX0VSUk9SLFxuICBDTE9TRV9MSVNUX1NFVFRJTkdTX01PREFMXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRBZG1pbkxpc3RpbmdTZXR0aW5ncyB9IGZyb20gJy4vZ2V0QWRtaW5MaXN0aW5nU2V0dGluZ3MnO1xuXG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkoJGlkOkludCwgJHR5cGVJZDogSW50KSB7XG4gICAgZGVsZXRlTGlzdFNldHRpbmdzKGlkOiAkaWQsIHR5cGVJZDogJHR5cGVJZCl7XG4gICAgICBzdGF0dXNcbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0U2V0dGluZ3MoaWQsIHR5cGVJZCkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBERUxFVEVfTElTVF9TRVRUSU5HU19TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHZhcmlhYmxlczogeyBpZCwgdHlwZUlkIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLmRlbGV0ZUxpc3RTZXR0aW5ncykge1xuICAgICAgICBpZiAoZGF0YS5kZWxldGVMaXN0U2V0dGluZ3Muc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENMT1NFX0xJU1RfU0VUVElOR1NfTU9EQUwsXG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9MSVNUX1NFVFRJTkdTX1NVQ0NFU1MsXG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdEZWxldGUgU2V0dGluZyBTdWNjZXNzJywgXCJTZXR0aW5nIGlzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICBcbiAgICAgICAgICBkaXNwYXRjaChnZXRBZG1pbkxpc3RpbmdTZXR0aW5ncyh0eXBlSWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihkYXRhLmRlbGV0ZUxpc3RTZXR0aW5ncy5zdGF0dXMgPT09IFwidW5hYmxlVG9EaXNhYmxlXCIpIHtcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlVwZGF0ZSBMaXN0IFNldHRpbmdzXCIsIFwiVW5hYmxlIHRvIGRlbGV0ZSB0aGUgbGlzdCBzZXR0aW5nLiBBdCBsZWFzdCwgb25lIGxpc3Qgc2V0dGluZyBzaG91bGQgYmUgYXZhaWxhYmxlIGZvciB0aGUgcHJvcGVydGllcy5cIik7XG4gICAgICAgICAgfSBlbHNlIGlmKGRhdGEuZGVsZXRlTGlzdFNldHRpbmdzLnN0YXR1cyA9PT0gXCJsaXN0aW5nVXNlZFwiKSB7XG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJVcGRhdGUgTGlzdCBTZXR0aW5nc1wiLCBcIlVuYWJsZSB0byBkZWxldGUgdGhlIGxpc3Qgc2V0dGluZy4gVGhlIGxpc3Qgc2V0dGluZyBpcyB1c2luZyBvbiB0aGUgcHJvcGVydHkuIFBsZWFzZSByZW1vdmUgdGhlIGxpc3Qgc2V0dGluZyBvbiB0aGUgcHJvcGVydGllcyBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiVXBkYXRlIExpc3QgU2V0dGluZ3NcIiwgXCJPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6IENMT1NFX0xJU1RfU0VUVElOR1NfTU9EQUwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfTElTVF9TRVRUSU5HU19FUlJPUixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IERFTEVURV9MSVNUX1NFVFRJTkdTX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuaW1wb3J0IHtcbiAgQURNSU5fTE9BRF9MSVNUX1NFVFRJTkdTX1NUQVJULFxuICBBRE1JTl9MT0FEX0xJU1RfU0VUVElOR1NfU1VDQ0VTUyxcbiAgQURNSU5fTE9BRF9MSVNUX1NFVFRJTkdTX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxucXVlcnkgKCRjdXJyZW50UGFnZTogSW50LCR0eXBlSWQ6IEludCkge1xuXHRnZXRBbGxBZG1pbkxpc3RTZXR0aW5ncyhjdXJyZW50UGFnZTogJGN1cnJlbnRQYWdlLHR5cGVJZDogJHR5cGVJZCl7XG4gICAgc3RhdHVzXG4gICAgZXJyb3JNZXNzYWdlXG4gICAgbGlzdFNldHRpbmdzVHlwZURhdGEge1xuICAgICAgaWRcbiAgICAgIHR5cGVOYW1lXG4gICAgICB0eXBlTGFiZWxcbiAgICAgIGZpZWxkVHlwZVxuICAgIH1cbiAgICBjb3VudFxuICAgIGxpc3RTZXR0aW5nc0RhdGEge1xuICAgICAgaWRcbiAgICAgIHR5cGVJZFxuICAgICAgaXRlbU5hbWVcbiAgICAgIGl0ZW1EZXNjcmlwdGlvblxuICAgICAgb3RoZXJJdGVtTmFtZVxuICAgICAgc3RhcnRWYWx1ZVxuICAgICAgZW5kVmFsdWVcbiAgICAgIG1heGltdW1cbiAgICAgIG1pbmltdW1cbiAgICAgIGlzRW5hYmxlXG4gICAgICBpbWFnZVxuICBcdH1cblx0fSAgXHRcbn1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbkxpc3RpbmdTZXR0aW5ncyh0eXBlSWQsIHBhZ2UpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQURNSU5fTE9BRF9MSVNUX1NFVFRJTkdTX1NUQVJUXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGN1cnJlbnRQYWdlID0gcGFnZSA/IHBhZ2UgOiAxO1xuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGdldCBsaXN0aW5nIGRhdGEgZm9yIGFkbWluIHBhbmVsXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICB2YXJpYWJsZXM6IHsgdHlwZUlkLCBjdXJyZW50UGFnZSB9LFxuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmdldEFsbEFkbWluTGlzdFNldHRpbmdzKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBBRE1JTl9MT0FEX0xJU1RfU0VUVElOR1NfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBhZG1pbkxpc3RTZXR0aW5nc0RhdGE6IGRhdGEsXG4gICAgICAgICAgICBjdXJyZW50UGFnZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQURNSU5fTE9BRF9MSVNUX1NFVFRJTkdTX0VSUk9SLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRE1JTl9MT0FEX0xJU1RfU0VUVElOR1NfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG4iLCIvLyBHZW5lcmFsXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG4vLyBSZWR1eCBGb3JtXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtLCBmb3JtVmFsdWVTZWxlY3RvciwgY2hhbmdlIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgc3VibWl0IGZyb20gJy4vc3VibWl0JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IGluamVjdEludGwsIEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gU3R5bGVcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzIGZyb20gJy4vTGlzdFNldHRpbmdzRm9ybS5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRm9ybUdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgQ29sLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZSdcbmltcG9ydCB7IHVybCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuLy8gQXNzZXRcbmltcG9ydCBkZWZhdWx0UGljIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2FkbWluSWNvbnMvZGx0LnBuZyc7XG5cbmNsYXNzIEFkZExpc3RTZXR0aW5nc0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZmllbGRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWVsZFR5cGU6IG51bGxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmllbGRUeXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChmaWVsZFR5cGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmllbGRUeXBlOiBmaWVsZFR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGZpZWxkVHlwZSB9ID0gbmV4dFByb3BzO1xuICAgIGlmIChmaWVsZFR5cGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmllbGRUeXBlOiBmaWVsZFR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2wgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9PntsYWJlbH08L2xhYmVsPlxuICAgICAgICA8Rm9ybUNvbnRyb2wgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhID0gKHsgaW5wdXQsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQ2hhbmdlKGUpe1xuICAgIGNvbnN0IHsgY2hhbmdlIH0gPSB0aGlzLnByb3BzOyAgIFxuICAgIGF3YWl0IGNoYW5nZSgnaW1hZ2UnLCBudWxsKSAgICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlcnJvciwgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBkaXNwYXRjaCwgdHlwZUlkLCBpbml0aWFsVmFsdWVzLCBpbWFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICBjb25zdCB7IGZpZWxkVHlwZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5mb3JtTWF4V2lkdGgsICdtYXh3aWR0aGNlbnRlcicsICdlbXB0eScpfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICB7ZXJyb3IgJiYgPHN0cm9uZz57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zdHJvbmc+fVxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cIml0ZW1OYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2x9XG4gICAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmFkZEl0ZW1OZXcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LmNvbW1vbkNvbnRyb2xJbnB1dCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICh0eXBlSWQgPT09IDExIHx8IHR5cGVJZCA9PT0gMTApICYmXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtzLm5vUGFkZGluZ30+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5JY29uTGFiZWx9IC8+PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnQucGljQ29udGFpbmVyTWFpbn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnBpY0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2N4KCdoaWRkZW4tbWQgaGlkZGVuLWxnIGhpZGRlbi1zbScpfT4mbmJzcDs8L3A+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2UgJiYgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9hbWVuaXRpZXMvJHtpbWFnZX0pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuYmFubmVySW1hZ2VCZ31cbiAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAge2ltYWdlID09IG51bGwgJiYgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkZWZhdWx0UGljfSlgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnQucHJvZmlsZUltYWdlQmd9XG4gICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGltYWdlICYmIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC50cmFzaEljb25OZXd9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17RGVsZXRlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlMiwgcy5zcGFjZVRvcDIsIHMubm9QYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZnVsbFdpZHRoLCBidC5idG5QcmltYXJ5LCBzLm5vUGFkZGluZywgJ3Bob3RvVXBsb2FkQnRuJyl9PlxuICAgICAgICAgICAgICAgICAgPERyb3Bab25lIGZvcm1OYW1lPXsnQWRkTGlzdFNldHRpbmdzRm9ybSd9IGRlZmF1bHRNZXNzYWdlPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLlVwbG9hZEltYWdlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZUlkID09PSAxICYmIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmFkZE5ld0Rlc2NyaXB0aW9uKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LmNvbW1vbkNvbnRyb2xJbnB1dCwgcy5zcGFjZTMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkVHlwZSA9PSBcIm51bWJlclR5cGVcIiAmJiA8ZGl2PlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVySXRlbU5hbWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuYWRkT3RoZXJJdGVtKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnQuY29tbW9uQ29udHJvbElucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc3RhcnRWYWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LmNvbW1vbkNvbnRyb2xJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbmRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5lbmRWYWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LmNvbW1vbkNvbnRyb2xJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTF9PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3goYnQudGV4dEFsaWduUmlnaHQsIHMuc3BhY2VUb3AzLCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeUJvcmRlciwgYnQuYnRuTGFyZ2UpfSB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuYWRkKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuQWRkTGlzdFNldHRpbmdzRm9ybSA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06IFwiQWRkTGlzdFNldHRpbmdzRm9ybVwiLCAvLyBhIHVuaXF1ZSBuYW1lIGZvciB0aGlzIGZvcm1cbiAgdmFsaWRhdGUsXG59KShBZGRMaXN0U2V0dGluZ3NGb3JtKTtcblxuLy8gRGVjb3JhdGUgd2l0aCBjb25uZWN0IHRvIHJlYWQgZm9ybSB2YWx1ZXNcbmNvbnN0IHNlbGVjdG9yID0gZm9ybVZhbHVlU2VsZWN0b3IoXCJBZGRMaXN0U2V0dGluZ3NGb3JtXCIpOyAvLyA8LS0gc2FtZSBhcyBmb3JtIG5hbWVcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIHR5cGVJZDogc2VsZWN0b3Ioc3RhdGUsICd0eXBlSWQnKSxcbiAgaW1hZ2U6IHNlbGVjdG9yKHN0YXRlLCAnaW1hZ2UnKVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICBjaGFuZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzLCBidCkoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFkZExpc3RTZXR0aW5nc0Zvcm0pKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgRHJvcHpvbmVDb21wb25lbnQgZnJvbSAncmVhY3QtZHJvcHpvbmUtY29tcG9uZW50Jztcbi8vVG9hc3RyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnIWlzb21vcnBoaWMtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9maWxlcGlja2VyLmNzcyc7XG5cbi8vQ29uZmlnXG5pbXBvcnQgeyBtYXhVcGxvYWRTaXplIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNoYW5nZSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5jbGFzcyBEcm9wem9uZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuc3VjY2Vzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZGVkZmlsZSA9IHRoaXMuYWRkZWRmaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcHpvbmUgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGNvbnN0IGlzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzQnJvd3NlciAmJiBpc0RvY3VtZW50KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1oaWRkZW4taW5wdXRcIikuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1oaWRkZW4taW5wdXRcIikuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VjY2VzcyhmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbmdlLCBmb3JtTmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgZmlsZU5hbWUgPSBmcm9tU2VydmVyLmZpbGUuZmlsZW5hbWU7XG4gICAgICAgIGlmIChmb3JtTmFtZSA9PSAnQWRkTGlzdFNldHRpbmdzRm9ybScpIHtcbiAgICAgICAgICAgIGNoYW5nZSgnQWRkTGlzdFNldHRpbmdzRm9ybScsICdpbWFnZScsIGZpbGVOYW1lKVxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1OYW1lID09ICdFZGl0TGlzdFNldHRpbmdzRm9ybScpIHtcbiAgICAgICAgICAgIGNoYW5nZSgnRWRpdExpc3RTZXR0aW5nc0Zvcm0nLCAnaW1hZ2UnLCBmaWxlTmFtZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGRlZGZpbGUoZmlsZSwgZnJvbVNlcnZlcikge1xuXG4gICAgICAgIGxldCBmaWxlRm9ybWF0ZXMgPSBbXG4gICAgICAgICAgICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vc3FsJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgICAgICAgICAgICd0ZXh0L2NzdicsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi96aXAnLFxuICAgICAgICAgICAgJ3RleHQvcGxhaW4nLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICAgICAgICAgICAndGV4dC90YWItc2VwYXJhdGVkLXZhbHVlcycsXG4gICAgICAgICAgICAndGV4dC9jYWxlbmRhcicsXG5cdFx0XHQnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIF07XG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+ICgxMDI0ICogMTAyNCAqIG1heFVwbG9hZFNpemUpKSB7XG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ01heGltdW0gdXBsb2FkIHNpemUgRXhjZWVkZWQhICcsICdUcnkgYWdhaW4gd2l0aCBhIHNtYWxsZXIgc2l6ZWQgaW1hZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKGZpbGUgJiYgZmlsZS50eXBlID09IFwiaW1hZ2Uvc3ZnK3htbFwiIHx8IGZpbGUudHlwZSA9PSBcImFwcGxpY2F0aW9uL3NxbFwiIHx8IGZpbGUudHlwZSA9PSBcImFwcGxpY2F0aW9uL3BkZlwiKSB7XG4gICAgICAgIGlmIChmaWxlRm9ybWF0ZXMuaW5kZXhPZihmaWxlICYmIGZpbGUudHlwZSkgPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0Vycm9yIScsICdZb3UgYXJlIHRyeWluZyB0byB1cGxvYWQgaW52YWxpZCBpbWFnZSBmaWxlLiBQbGVhc2UgdXBsb2FkIFBORywgSlBHICYgSlBFRyBmb3JtYXQgaW1hZ2UgZmlsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0Vycm9yIScsICdZb3UgYXJlIHRyeWluZyB0byB1cGxvYWQgaW52YWxpZCBpbWFnZSBmaWxlLiBQbGVhc2UgdXBsb2FkIFBORywgSlBHICYgSlBFRyBmb3JtYXQgaW1hZ2UgZmlsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGRqc0NvbmZpZyA9IHtcbiAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogJycsXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogZmFsc2UsXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcnLFxuICAgICAgICAgICAgZGljdE1heEZpbGVzRXhjZWVkZWQ6ICdSZW1vdmUgdGhlIGV4aXN0aW5nIGltYWdlIGFuZCB0cnkgdXBsb2FkIGFnYWluJyxcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGRlbklucHV0Q29udGFpbmVyOiAnLmR6SW5wdXRDb250YWluZXInLFxuICAgICAgICAgICAgbWF4RmlsZXM6IDIwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb25GaWxldHlwZXM6IFsnLmpwZycsICcucG5nJ10sXG4gICAgICAgICAgICBwb3N0VXJsOiAnL3VwbG9hZEFtZW5pdGllcydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGluaXQ6IGR6ID0+IHRoaXMuZHJvcHpvbmUgPSBkeixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc3VjY2VzcyxcbiAgICAgICAgICAgIGFkZGVkZmlsZTogdGhpcy5hZGRlZGZpbGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdkeklucHV0Q29udGFpbmVyJyl9PlxuICAgICAgICAgICAgICAgIDxEcm9wem9uZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e2NvbXBvbmVudENvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAgICAgICAgICAgICAgICAgZGpzQ29uZmlnPXtkanNDb25maWd9XG4gICAgICAgICAgICAgICAgPntkZWZhdWx0TWVzc2FnZX1cbiAgICAgICAgICAgICAgICA8L0Ryb3B6b25lQ29tcG9uZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gICAgY2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKERyb3B6b25lKSkpO1xuIiwiLy8gR2VuZXJhbFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cblxuLy8gUmVkdXggRm9ybVxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSwgZm9ybVZhbHVlU2VsZWN0b3IsIGNoYW5nZSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL3VwZGF0ZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbi8vIFRyYW5zbGF0aW9uXG5pbXBvcnQgeyBpbmplY3RJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZWxldGVMaXN0U2V0dGluZ3MgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9kZWxldGVMaXN0U2V0dGluZ3MnO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9MaXN0U2V0dGluZ3NGb3JtLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGb3JtR3JvdXAsXG4gIENvbCxcbiAgUm93LFxuICBGb3JtQ29udHJvbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUnXG5pbXBvcnQgeyB1cmwgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbi8vIEFzc2V0XG5pbXBvcnQgZGVmYXVsdFBpYyBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmcnO1xuXG5jbGFzcyBFZGl0TGlzdFNldHRpbmdzRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc0VuYWJsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0eXBlSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZmllbGRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlbGV0ZUxpc3RTZXR0aW5nczogUHJvcFR5cGVzLmFueSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmllbGRUeXBlOiBudWxsXG4gICAgfSxcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpZWxkVHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZmllbGRUeXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpZWxkVHlwZTogZmllbGRUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBmaWVsZFR5cGUgfSA9IG5leHRQcm9wcztcbiAgICBpZiAoZmllbGRUeXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpZWxkVHlwZTogZmllbGRUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZvcm1Db250cm9sID0gKHsgaW5wdXQsIGxhYmVsLCB0eXBlLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fT57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPEZvcm1Db250cm9sIHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYSA9ICh7IGlucHV0LCBsYWJlbCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9PntsYWJlbH08L2xhYmVsPlxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUNoYW5nZShlKXtcbiAgICBjb25zdCB7IGNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBhd2FpdCBjaGFuZ2UoJ2ltYWdlJywgbnVsbCkgICAgXG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXJyb3IsIGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZywgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgY29uc3QgeyBpZCwgdHlwZUlkLCBkZWxldGVMaXN0U2V0dGluZ3MsIGltYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZmllbGRUeXBlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmZvcm1NYXhXaWR0aCwgJ21heHdpZHRoY2VudGVyJywgJ2VtcHR5JywgJ2FkbWluUmFkaW9CdG4nKX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodXBkYXRlKX0+XG4gICAgICAgICAge2Vycm9yICYmIDxzdHJvbmc+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Ryb25nPn1cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJpdGVtTmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfVxuICAgICAgICAgICAgICBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5hZGRJdGVtTmV3KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChidC5jb21tb25Db250cm9sSW5wdXQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAodHlwZUlkID09PSAxMSB8fCB0eXBlSWQgPT09IDEwKSAmJlxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17cy5ub1BhZGRpbmd9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuSWNvbkxhYmVsfSAvPjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnBpY0NvbnRhaW5lck1haW59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjeCgnaGlkZGVuLW1kIGhpZGRlbi1sZyBoaWRkZW4tc20nKX0+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICAgICAge2ltYWdlICYmIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvYW1lbml0aWVzLyR7aW1hZ2V9KWAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmJhbm5lckltYWdlQmd9XG4gICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICAgIHtpbWFnZSA9PSBudWxsICYmIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGVmYXVsdFBpY30pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LnByb2ZpbGVJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbWFnZSAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnQudHJhc2hJY29uTmV3fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0RlbGV0ZUljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZTIsIHMuc3BhY2VUb3AyLCBzLm5vUGFkZGluZyl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmZ1bGxXaWR0aCwgYnQuYnRuUHJpbWFyeSwgcy5ub1BhZGRpbmcsICdwaG90b1VwbG9hZEJ0bicpfT5cbiAgICAgICAgICAgICAgICAgIDxEcm9wWm9uZSBmb3JtTmFtZT17J0VkaXRMaXN0U2V0dGluZ3NGb3JtJ30gZGVmYXVsdE1lc3NhZ2U9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuVXBsb2FkSW1hZ2UpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlSWQgPT0gMSAmJiA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiaXRlbURlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5hZGROZXdEZXNjcmlwdGlvbil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChidC5jb21tb25Db250cm9sSW5wdXQsIHMuc3BhY2UzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZFR5cGUgPT0gXCJudW1iZXJUeXBlXCIgJiYgPGRpdj5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlckl0ZW1OYW1lXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmFkZE90aGVySXRlbSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LmNvbW1vbkNvbnRyb2xJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN0YXJ0VmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC5jb21tb25Db250cm9sSW5wdXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZW5kVmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC5jb21tb25Db250cm9sSW5wdXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGRUeXBlICE9IFwibnVtYmVyVHlwZVwiICYmIDxkaXY+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMuYnRuVVBkYXRlLCBidC5jdXJkZXJQb2ludGVyKX0+XG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImlzRW5hYmxlXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiAvPiA8c3BhbiBjbGFzc05hbWU9e3MucmFkaW9CdG59Pntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmVuYWJsZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y3gocy5sYWJlbFRleHROZXcsIHMuYnRuTW9kYWxEZWxldGUsIGJ0LmN1cmRlclBvaW50ZXIsICdhZG1pbkRlbGV0ZScpfT5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiaXNFbmFibGVcIiBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiIC8+IDxzcGFuIGNsYXNzTmFtZT17cy5yYWRpb0J0bn0+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGlzYWJsZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17Y3gocy5zcGFjZTMpfT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3goYnQudGV4dEFsaWduUmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5idG5VUGRhdGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5LCBzLmJ0bldpZHRoKX0gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnVwZGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5idG5Nb2RhbERlbGV0ZSwgJ2FkbWluVXBkYXRlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5Qm9yZGVyLCBzLmJ0bldpZHRoKX0gb25DbGljaz17KCkgPT4gZGVsZXRlTGlzdFNldHRpbmdzKGlkLCB0eXBlSWQpfSBkaXNhYmxlZD17c3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZWxldGUpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZFR5cGUgPT09IFwibnVtYmVyVHlwZVwiICYmIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3goYnQudGV4dEFsaWduUmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2N4KGJ0LmJ0blByaW1hcnksIGJ0LmJ0bkxhcmdlKX0gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMudXBkYXRlKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuRWRpdExpc3RTZXR0aW5nc0Zvcm0gPSByZWR1eEZvcm0oe1xuICBmb3JtOiBcIkVkaXRMaXN0U2V0dGluZ3NGb3JtXCIsIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoaXMgZm9ybVxuICB2YWxpZGF0ZVxufSkoRWRpdExpc3RTZXR0aW5nc0Zvcm0pO1xuXG4vLyBEZWNvcmF0ZSB3aXRoIGNvbm5lY3QgdG8gcmVhZCBmb3JtIHZhbHVlc1xuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcihcIkVkaXRMaXN0U2V0dGluZ3NGb3JtXCIpOyAvLyA8LS0gc2FtZSBhcyBmb3JtIG5hbWVcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIGlzRW5hYmxlOiBzZWxlY3RvcihzdGF0ZSwgJ2lzRW5hYmxlJyksXG4gIGlkOiBzZWxlY3RvcihzdGF0ZSwgJ2lkJyksXG4gIHR5cGVJZDogc2VsZWN0b3Ioc3RhdGUsICd0eXBlSWQnKSxcbiAgaW1hZ2U6IHNlbGVjdG9yKHN0YXRlLCAnaW1hZ2UnKVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICBkZWxldGVMaXN0U2V0dGluZ3MsXG4gIGNoYW5nZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoRWRpdExpc3RTZXR0aW5nc0Zvcm0pKSk7IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9MaXN0U2V0dGluZ3NGb3JtLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9MaXN0U2V0dGluZ3NGb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0xpc3RTZXR0aW5nc0Zvcm0uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8vIEdlbmVyYWxcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBSZWR1eCBGb3JtXG5pbXBvcnQgeyBmb3JtVmFsdWVTZWxlY3RvciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFkZExpc3RTZXR0aW5nc0Zvcm0gZnJvbSAnLi9BZGRMaXN0U2V0dGluZ3NGb3JtJztcbmltcG9ydCBFZGl0TGlzdFNldHRpbmdzRm9ybSBmcm9tICcuL0VkaXRMaXN0U2V0dGluZ3NGb3JtJztcblxuY2xhc3MgTGlzdFNldHRpbmdzRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZihpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj5cbiAgICAgICAgPEVkaXRMaXN0U2V0dGluZ3NGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiPlxuICAgICAgICAgIDxBZGRMaXN0U2V0dGluZ3NGb3JtIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gIH1cblxufVxuXG4vLyBEZWNvcmF0ZSB3aXRoIGNvbm5lY3QgdG8gcmVhZCBmb3JtIHZhbHVlc1xuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcihcIkVkaXRMaXN0U2V0dGluZ3NGb3JtXCIpOyAvLyA8LS0gc2FtZSBhcyBmb3JtIG5hbWVcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIGlkOiBzZWxlY3RvcihzdGF0ZSwgJ2lkJyksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoTGlzdFNldHRpbmdzRm9ybSkpOyIsIi8vIEZldGNoIFJlcXVlc3RcbmltcG9ydCBmZXRjaCBmcm9tICcuLi8uLi8uLi9jb3JlL2ZldGNoJztcblxuXG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgY2xvc2VMaXN0U2V0dGluZ3NNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvc2l0ZWFkbWluL21vZGFsQWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRBZG1pbkxpc3RpbmdTZXR0aW5ncyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvc2l0ZWFkbWluL2dldEFkbWluTGlzdGluZ1NldHRpbmdzJztcblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0KHZhbHVlcywgZGlzcGF0Y2gpIHtcblxuICBjb25zdCBxdWVyeSA9IGBcbiAgICBxdWVyeSAoXG4gICAgICAgICR0eXBlSWQ6SW50LFxuICAgICAgICAkaXRlbU5hbWU6U3RyaW5nLFxuICAgICAgICAkaXRlbURlc2NyaXB0aW9uOlN0cmluZyxcbiAgICAgICAgJG90aGVySXRlbU5hbWU6U3RyaW5nLFxuICAgICAgICAkbWF4aW11bTpJbnQsXG4gICAgICAgICRtaW5pbXVtOkludCxcbiAgICAgIFx0JHN0YXJ0VmFsdWU6SW50LFxuICAgICAgICAkZW5kVmFsdWU6SW50LFxuICAgICAgICAkaXNFbmFibGU6IFN0cmluZyxcbiAgICAgICAgJGltYWdlOiBTdHJpbmdcbiAgICAgICkge1xuICAgICAgICAgIGFkZExpc3RTZXR0aW5ncyAoXG4gICAgICAgICAgICB0eXBlSWQ6JHR5cGVJZCxcbiAgICAgICAgICAgIGl0ZW1OYW1lOiRpdGVtTmFtZSxcbiAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjokaXRlbURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3RoZXJJdGVtTmFtZTokb3RoZXJJdGVtTmFtZSxcbiAgICAgICAgICAgIG1heGltdW06ICRtYXhpbXVtLFxuICAgICAgICAgICAgbWluaW11bTogJG1pbmltdW0sXG4gICAgICAgICAgICBzdGFydFZhbHVlOiAkc3RhcnRWYWx1ZSxcbiAgICAgICAgICAgIGVuZFZhbHVlOiAkZW5kVmFsdWUsXG4gICAgICAgICAgICBpc0VuYWJsZTogJGlzRW5hYmxlLFxuICAgICAgICAgICAgaW1hZ2U6ICRpbWFnZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIGA7XG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHZhcmlhYmxlczogdmFsdWVzXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICBpZiAoZGF0YS5hZGRMaXN0U2V0dGluZ3Muc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgIGRpc3BhdGNoKGNsb3NlTGlzdFNldHRpbmdzTW9kYWwoKSk7XG4gICAgZGlzcGF0Y2goZ2V0QWRtaW5MaXN0aW5nU2V0dGluZ3ModmFsdWVzLnR5cGVJZCkpO1xuICAgIHRvYXN0ci5zdWNjZXNzKFwiQWRkIExpc3QgU2V0dGluZ3NcIiwgXCJMaXN0IFNldHRpbmcgaXMgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICB9IGVsc2Uge1xuICAgIHRvYXN0ci5lcnJvcihcIkFkZCBMaXN0IFNldHRpbmdzXCIsIFwiQ3JlYXRpbmcgTGlzdCBTZXR0aW5nIGlzIGZhaWxlZFwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdDtcbiIsIi8vIEZldGNoIFJlcXVlc3RcbmltcG9ydCBmZXRjaCBmcm9tICcuLi8uLi8uLi9jb3JlL2ZldGNoJztcblxuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNsb3NlTGlzdFNldHRpbmdzTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tb2RhbEFjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWRtaW5MaXN0aW5nU2V0dGluZ3MgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9nZXRBZG1pbkxpc3RpbmdTZXR0aW5ncyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZXMsIGRpc3BhdGNoKSB7XG5cbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgcXVlcnkgKFxuICAgICAgICAkaWQ6SW50LFxuICAgICAgICAkdHlwZUlkOkludCxcbiAgICAgICAgJGl0ZW1OYW1lOlN0cmluZyxcbiAgICAgICAgJGl0ZW1EZXNjcmlwdGlvbjpTdHJpbmcsXG4gICAgICAgICRvdGhlckl0ZW1OYW1lOlN0cmluZyxcbiAgICAgICAgJG1heGltdW06SW50LFxuICAgICAgICAkbWluaW11bTpJbnQsXG4gICAgICBcdCRzdGFydFZhbHVlOkludCxcbiAgICAgICAgJGVuZFZhbHVlOkludCxcbiAgICAgICAgJGlzRW5hYmxlOiBTdHJpbmcsXG4gICAgICAgICRpbWFnZTogU3RyaW5nXG4gICAgICApIHtcbiAgICAgICAgICB1cGRhdGVMaXN0U2V0dGluZ3MgKFxuICAgICAgICAgICAgaWQ6ICRpZCxcbiAgICAgICAgICAgIHR5cGVJZDokdHlwZUlkLFxuICAgICAgICAgICAgaXRlbU5hbWU6JGl0ZW1OYW1lLFxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiRpdGVtRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvdGhlckl0ZW1OYW1lOiAkb3RoZXJJdGVtTmFtZSxcbiAgICAgICAgICAgIG1heGltdW06ICRtYXhpbXVtLFxuICAgICAgICAgICAgbWluaW11bTogJG1pbmltdW0sXG4gICAgICAgICAgICBzdGFydFZhbHVlOiAkc3RhcnRWYWx1ZSxcbiAgICAgICAgICAgIGVuZFZhbHVlOiAkZW5kVmFsdWUsXG4gICAgICAgICAgICBpc0VuYWJsZTogJGlzRW5hYmxlLFxuICAgICAgICAgICAgaW1hZ2U6ICRpbWFnZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIGA7XG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHZhcmlhYmxlczogdmFsdWVzXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICBpZiAoZGF0YS51cGRhdGVMaXN0U2V0dGluZ3Muc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgIGRpc3BhdGNoKGNsb3NlTGlzdFNldHRpbmdzTW9kYWwoKSk7XG4gICAgYXdhaXQgZGlzcGF0Y2goZ2V0QWRtaW5MaXN0aW5nU2V0dGluZ3ModmFsdWVzLnR5cGVJZCkpO1xuICAgIHRvYXN0ci5zdWNjZXNzKFwiVXBkYXRlIExpc3QgU2V0dGluZ3NcIiwgXCJUaGUgbGlzdCBzZXR0aW5nIGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgfSBlbHNlIGlmKGRhdGEudXBkYXRlTGlzdFNldHRpbmdzLnN0YXR1cyA9PT0gXCJ1bmFibGVUb0Rpc2FibGVcIikge1xuICAgIHRvYXN0ci5lcnJvcihcIlVwZGF0ZSBMaXN0IFNldHRpbmdzXCIsIFwiVW5hYmxlIHRvIGRpc2FibGUgdGhlIGxpc3Qgc2V0dGluZy4gQXQgbGVhc3QsIG9uZSBsaXN0IHNldHRpbmcgc2hvdWxkIGJlIGFjdGl2ZS5cIik7XG4gIH0gZWxzZSBpZihkYXRhLnVwZGF0ZUxpc3RTZXR0aW5ncy5zdGF0dXMgPT09IFwibGlzdGluZ1VzZWRcIikge1xuICAgIHRvYXN0ci5lcnJvcihcIlVwZGF0ZSBMaXN0IFNldHRpbmdzXCIsIFwiVW5hYmxlIHRvIGRpc2FibGUgdGhlIGxpc3Qgc2V0dGluZy4gVGhlIGxpc3Qgc2V0dGluZyBpcyB1c2luZyBvbiB0aGUgcHJvcGVydHkuIFBsZWFzZSByZW1vdmUgdGhlIGxpc3Qgc2V0dGluZyBvbiB0aGUgcHJvcGVydGllcyBhbmQgdHJ5IGFnYWluLlwiKTtcbiAgfSBlbHNlIHtcbiAgICB0b2FzdHIuZXJyb3IoXCJVcGRhdGUgTGlzdCBTZXR0aW5nc1wiLCBcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZTtcbiIsImltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XG5cbiAgY29uc3QgZXJyb3JzID0ge31cblxuICBpZiAoIXZhbHVlcy5pdGVtTmFtZSkge1xuICAgIGVycm9ycy5pdGVtTmFtZSA9IG1lc3NhZ2VzLlJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5pdGVtTmFtZSAmJiB2YWx1ZXMuaXRlbU5hbWUudHJpbSgpID09IFwiXCIpIHtcbiAgICBlcnJvcnMuaXRlbU5hbWUgPSBtZXNzYWdlcy5ibGFua1NwYWNlO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5pdGVtTmFtZSAmJiB2YWx1ZXMuaXRlbU5hbWUubGVuZ3RoID4gMjU1KSB7XG4gICAgZXJyb3JzLml0ZW1OYW1lID0gbWVzc2FnZXMuZXhjZWVkTGltaXQ7XG4gIH1cblxuICBpZiAoIXZhbHVlcy5vdGhlckl0ZW1OYW1lKSB7XG4gICAgZXJyb3JzLm90aGVySXRlbU5hbWUgPSBtZXNzYWdlcy5SZXF1aXJlZDtcbiAgfVxuXG4gIGlmICh2YWx1ZXMuc3RhcnRWYWx1ZSAhPSAwICYmIHZhbHVlcy5zdGFydFZhbHVlIDwgMCkge1xuICAgIGlmIChOdW1iZXIodmFsdWVzLnN0YXJ0VmFsdWUpIHx8IE51bWJlcih2YWx1ZXMuc3RhcnRWYWx1ZSkgIT0gcGFyc2VJbnQodmFsdWVzLnN0YXJ0VmFsdWUsIDEwKSkge1xuICAgICAgZXJyb3JzLnN0YXJ0VmFsdWUgPSBtZXNzYWdlcy5zdGFydFZhbHVlSXNJbnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIGlmICghTnVtYmVyKHZhbHVlcy5lbmRWYWx1ZSkgfHwgTnVtYmVyKHZhbHVlcy5lbmRWYWx1ZSkgIT0gcGFyc2VJbnQodmFsdWVzLmVuZFZhbHVlLCAxMCkpIHtcbiAgICBlcnJvcnMuZW5kVmFsdWUgPSBtZXNzYWdlcy5lbmRWYWx1ZUlzSW52YWxpZDtcbiAgfVxuXG4gIGlmIChOdW1iZXIodmFsdWVzLmVuZFZhbHVlKSA8IE51bWJlcih2YWx1ZXMuc3RhcnRWYWx1ZSkpIHtcbiAgICBlcnJvcnMuZW5kVmFsdWUgPSBtZXNzYWdlcy5lbmRWYWx1ZUdyZWF0ZXI7XG4gIH1cblxuICBpZiAodmFsdWVzLml0ZW1EZXNjcmlwdGlvbiAmJiB2YWx1ZXMuaXRlbURlc2NyaXB0aW9uLnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgLy8gZXJyb3JzLml0ZW1EZXNjcmlwdGlvbiA9IG1lc3NhZ2VzLmRlc2NyaXB0aW9uRW1wdHk7XG4gICAgZXJyb3JzLml0ZW1EZXNjcmlwdGlvbiA9IG1lc3NhZ2VzLmJsYW5rU3BhY2U7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFoQ0E7QUFpQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQS9DQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE2QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBbktBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFDQTtBQW1LQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBOUhBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFDQTtBQTZIQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRkE7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQWpDQTtBQWtDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBaERBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE2QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBeE1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBd01BO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7QUNwUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBdEJBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFEQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=