require("source-map-support").install();
exports.ids = ["siteadmin-homeBanner"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js!./src/components/siteadmin/HomeBannerForm/filepicker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/HomeBannerForm/HomeBannerForm.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.HomeBannerForm-rentAllHeaderAdmin-36Dt_ {\n  position: fixed !important;\n}\n.HomeBannerForm-adminLayout-1_rlF {\n  padding-top: 64px !important;\n}\n.HomeBannerForm-box-1vKc1 h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.HomeBannerForm-exportLink-1NoxO {\n  margin-bottom: -29px;\n}\n.HomeBannerForm-blockcenter-3M4aO {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.HomeBannerForm-panelHeader-2Cy8d {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.HomeBannerForm-currencyselect-2plTK {\n  width: 100%;\n  margin-right: 0px;\n}\n.HomeBannerForm-panelHeader-2Cy8d {\n  overflow: hidden;\n  position: relative;\n}\n.HomeBannerForm-mar0-3ilX_ {\n  margin-left: 0;\n  margin-right: 0;\n}\n.HomeBannerForm-navbar-2JLfq > .HomeBannerForm-container-223Tp .HomeBannerForm-navbar-brand-2BCDa,\n.HomeBannerForm-navbar-2JLfq > .HomeBannerForm-container-fluid-lJwYr .HomeBannerForm-navbar-brand-2BCDa {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .HomeBannerForm-blockcenter-3M4aO {\n    padding: 0px;\n  }\n  .HomeBannerForm-panelHeader-2Cy8d {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.HomeBannerForm-pagecontentWrapper-3O5ht {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.HomeBannerForm-headerTitle-2oVYX {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.HomeBannerForm-panelHeader-2Cy8d {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.HomeBannerForm-table-3Iu-X {\n\tdisplay: table;\n}\n.HomeBannerForm-tableRow-2EgW7 {\n\tdisplay: table-row;\n}\n.HomeBannerForm-tableCell-DZQau {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.HomeBannerForm-formGroup-1xiY- {\n\tmargin-bottom: 6px;\n}\n.HomeBannerForm-select-1DsBE {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.HomeBannerForm-noMargin-o9Ony {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.HomeBannerForm-exportLink-1NoxO {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.HomeBannerForm-labelTextNew-1KbGF {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.HomeBannerForm-displayInline-3MALj {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.HomeBannerForm-btnUPdate-3ej4e {\n\tdisplay: inline-block;\n}\n.HomeBannerForm-btnModalDelete-NtUY8 {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.HomeBannerForm-radioBtn-JrKzc {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.HomeBannerForm-btnUPdate-3ej4e {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.HomeBannerForm-btnModalDelete-NtUY8 {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.HomeBannerForm-btnWidth-1kRz- {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.HomeBannerForm-bannerImageBg-32atC {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.HomeBannerForm-bannerDelete-3Iub_ {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.HomeBannerForm-modalRoot-uNqNF {\n\tpadding: 32px;\n}\n.HomeBannerForm-modalBorderBottom-3BGZC {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.HomeBannerForm-logInModalBody-12txI {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.HomeBannerForm-exportSection-3NGHY {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.HomeBannerForm-exportSectionGridSub-3pkFO {\n\tgrid-template-columns: 50% 49% !important;\n}\n.HomeBannerForm-exportText-3sgDx {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.HomeBannerForm-exportLinkImg-1-5d1 {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.HomeBannerForm-vtrMiddle-3t1KG {\n\tvertical-align: middle;\n}\n.HomeBannerForm-exportImg-3z5br {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.HomeBannerForm-profileViewlabel-2b_rs {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.HomeBannerForm-profileViewMainContent-PkvG4 {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.HomeBannerForm-profileViewMain-uTmiD {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.HomeBannerForm-profileViewInner-3Xuzn {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.HomeBannerForm-profileImageSection-RsTte {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.HomeBannerForm-lastviewInner-2qKni {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.HomeBannerForm-pagecontentWrapper-3O5ht {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.HomeBannerForm-exportSection-3NGHY {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.HomeBannerForm-exportText-3sgDx {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.HomeBannerForm-exportSectionGridSub-3pkFO {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.HomeBannerForm-profileViewlabel-2b_rs {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.HomeBannerForm-profileViewMainContent-PkvG4 {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.HomeBannerForm-pagecontentWrapper-3O5ht {\n\t\tmargin-left: 0;\n\t}\n}\n.HomeBannerForm-ChangeToUpperCase-27eRp{\n    text-transform: uppercase\n}\n.HomeBannerForm-noBorder-3vzQJ {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.HomeBannerForm-errorMessage-1CL9z {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.HomeBannerForm-panelHeader-2Cy8d{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.HomeBannerForm-formGroup-1xiY- {\n  margin-bottom: 6px;\n}\n.HomeBannerForm-select-1DsBE {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.HomeBannerForm-labelText-1IcJr{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.HomeBannerForm-space1-3sJtC {\n\tmargin-bottom: 6px !important;\n}\n.HomeBannerForm-space2-2Uwc_ {\n\tmargin-bottom: 12px !important;\n}\n.HomeBannerForm-space3-2eDXw {\n\tmargin-bottom: 18px !important;\n}\n.HomeBannerForm-space4-1bk5a {\n\tmargin-bottom: 24px !important;\n}\n.HomeBannerForm-space5-2QKw2 {\n\tmargin-bottom: 30px !important;\n}\n.HomeBannerForm-space6-Ssrbr {\n\tmargin-bottom: 36px !important;\n}\n.HomeBannerForm-space7-3Na7L {\n\tmargin-bottom: 42px !important;\n}\n.HomeBannerForm-spaceTop8-20GoG {\n\tmargin-bottom: 48px !important;\n}\n.HomeBannerForm-spaceTop1-3nfBu {\n\tmargin-top: 6px !important;\n}\n.HomeBannerForm-spaceTop2-xKL8j {\n\tmargin-top: 12px !important;\n}\n.HomeBannerForm-spaceTop3-3yiK_ {\n\tmargin-top: 18px !important;\n}\n.HomeBannerForm-spaceTop4-2y2WJ {\n\tmargin-top: 24px !important;\n}\n.HomeBannerForm-spaceTop5-2KTRl {\n\tmargin-top: 30px !important;\n}\n.HomeBannerForm-spaceTop6-1Pbmd {\n\tmargin-top: 36px !important;\n}\n.HomeBannerForm-spaceTop7-U0J3I {\n\tmargin-top: 42px !important;\n}\n.HomeBannerForm-spaceTop8-20GoG {\n\tmargin-top: 48px !important;\n}\n.HomeBannerForm-noMargin-o9Ony {\n\tmargin: 0px !important;\n}\n.HomeBannerForm-padding1-1kCg6 {\n\tpadding-bottom: 6px !important;\n}\n.HomeBannerForm-padding2-wcEzl {\n\tpadding-bottom: 12px !important;\n}\n.HomeBannerForm-padding3-2Ctdj {\n\tpadding-bottom: 18px !important;\n}\n.HomeBannerForm-padding4-1jCHo {\n\tpadding-bottom: 24px !important;\n}\n.HomeBannerForm-padding5-27aDB {\n\tpadding-bottom: 30px !important;\n}\n.HomeBannerForm-padding6-25efX {\n\tpadding-bottom: 36px !important;\n}\n.HomeBannerForm-padding7-23Keg {\n\tpadding-bottom: 42px !important;\n}\n.HomeBannerForm-paddingTop1-1_EN0 {\n\tpadding-top: 6px !important;\n}\n.HomeBannerForm-paddingTop2-1O8zA {\n\tpadding-top: 12px !important;\n}\n.HomeBannerForm-paddingTop3-2wVSG {\n\tpadding-top: 18px !important;\n}\n.HomeBannerForm-paddingTop4-3jRuF {\n\tpadding-top: 24px !important;\n}\n.HomeBannerForm-paddingTop5-1Vhp3 {\n\tpadding-top: 30px !important;\n}\n.HomeBannerForm-paddingTop6-1BndY {\n\tpadding-top: 36px !important;\n}\n.HomeBannerForm-paddingTop7-3Pf85 {\n\tpadding-top: 42px !important;\n}\n.HomeBannerForm-noPadding-3sRwI {\n\tpadding: 0px !important;\n}\n.HomeBannerForm-textBold-18Ew_ {\n\tfont-weight: 500 !important;\n}\n.HomeBannerForm-textBolder-s1oaN {\n\tfont-weight: 700 !important;\n}\n.HomeBannerForm-textNormal-wAGaF {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.HomeBannerForm-textDarkBlue-1Zc1I {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.HomeBannerForm-textLightBlue-24Pow {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.HomeBannerForm-textLightSandleGreen-iM1RH {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.HomeBannerForm-textLightBrown-1Xy7c {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.HomeBannerForm-textMediumMaroon-ADwFB {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.HomeBannerForm-textBrown-12-Xc {\n\tcolor: #B5DC4B !important;\n}\n.HomeBannerForm-textMaroon-23hF0 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.HomeBannerForm-textDarkBrown-2NfbQ {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.HomeBannerForm-textMediumBrown-35FPw {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.HomeBannerForm-textSkyBlue-2Nolx {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.HomeBannerForm-textGray-39ig5 {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.HomeBannerForm-bannerPadding-1u0Vx {\n    padding: 50px 30px !important;\n}\n@media screen and (max-width: 767px) {\n    .HomeBannerForm-bannerPadding-1u0Vx {\n        padding: 12px 0px 0px !important;\n    }\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/HomeBannerForm/HomeBannerForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;CACC,gBAAgB;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;IACI,8BAA8B;CACjC;AACD;IACI;QACI,iCAAiC;KACpC;CACJ","file":"HomeBannerForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.panelHeader{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.formGroup {\n  margin-bottom: 6px;\n}\n.select {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.labelText{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.bannerPadding {\n    padding: 50px 30px !important;\n}\n@media screen and (max-width: 767px) {\n    .bannerPadding {\n        padding: 12px 0px 0px !important;\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "HomeBannerForm-rentAllHeaderAdmin-36Dt_",
	"adminLayout": "HomeBannerForm-adminLayout-1_rlF",
	"box": "HomeBannerForm-box-1vKc1",
	"exportLink": "HomeBannerForm-exportLink-1NoxO",
	"blockcenter": "HomeBannerForm-blockcenter-3M4aO",
	"panelHeader": "HomeBannerForm-panelHeader-2Cy8d",
	"currencyselect": "HomeBannerForm-currencyselect-2plTK",
	"mar0": "HomeBannerForm-mar0-3ilX_",
	"navbar": "HomeBannerForm-navbar-2JLfq",
	"container": "HomeBannerForm-container-223Tp",
	"navbar-brand": "HomeBannerForm-navbar-brand-2BCDa",
	"container-fluid": "HomeBannerForm-container-fluid-lJwYr",
	"pagecontentWrapper": "HomeBannerForm-pagecontentWrapper-3O5ht",
	"headerTitle": "HomeBannerForm-headerTitle-2oVYX",
	"table": "HomeBannerForm-table-3Iu-X",
	"tableRow": "HomeBannerForm-tableRow-2EgW7",
	"tableCell": "HomeBannerForm-tableCell-DZQau",
	"formGroup": "HomeBannerForm-formGroup-1xiY-",
	"select": "HomeBannerForm-select-1DsBE",
	"noMargin": "HomeBannerForm-noMargin-o9Ony",
	"labelTextNew": "HomeBannerForm-labelTextNew-1KbGF",
	"displayInline": "HomeBannerForm-displayInline-3MALj",
	"btnUPdate": "HomeBannerForm-btnUPdate-3ej4e",
	"btnModalDelete": "HomeBannerForm-btnModalDelete-NtUY8",
	"radioBtn": "HomeBannerForm-radioBtn-JrKzc",
	"btnWidth": "HomeBannerForm-btnWidth-1kRz-",
	"bannerImageBg": "HomeBannerForm-bannerImageBg-32atC",
	"bannerDelete": "HomeBannerForm-bannerDelete-3Iub_",
	"modalRoot": "HomeBannerForm-modalRoot-uNqNF",
	"modalBorderBottom": "HomeBannerForm-modalBorderBottom-3BGZC",
	"logInModalBody": "HomeBannerForm-logInModalBody-12txI",
	"exportSection": "HomeBannerForm-exportSection-3NGHY",
	"exportSectionGridSub": "HomeBannerForm-exportSectionGridSub-3pkFO",
	"exportText": "HomeBannerForm-exportText-3sgDx",
	"exportLinkImg": "HomeBannerForm-exportLinkImg-1-5d1",
	"vtrMiddle": "HomeBannerForm-vtrMiddle-3t1KG",
	"exportImg": "HomeBannerForm-exportImg-3z5br",
	"profileViewlabel": "HomeBannerForm-profileViewlabel-2b_rs",
	"profileViewMainContent": "HomeBannerForm-profileViewMainContent-PkvG4",
	"profileViewMain": "HomeBannerForm-profileViewMain-uTmiD",
	"profileViewInner": "HomeBannerForm-profileViewInner-3Xuzn",
	"profileImageSection": "HomeBannerForm-profileImageSection-RsTte",
	"lastviewInner": "HomeBannerForm-lastviewInner-2qKni",
	"ChangeToUpperCase": "HomeBannerForm-ChangeToUpperCase-27eRp",
	"noBorder": "HomeBannerForm-noBorder-3vzQJ",
	"errorMessage": "HomeBannerForm-errorMessage-1CL9z",
	"labelText": "HomeBannerForm-labelText-1IcJr",
	"space1": "HomeBannerForm-space1-3sJtC",
	"space2": "HomeBannerForm-space2-2Uwc_",
	"space3": "HomeBannerForm-space3-2eDXw",
	"space4": "HomeBannerForm-space4-1bk5a",
	"space5": "HomeBannerForm-space5-2QKw2",
	"space6": "HomeBannerForm-space6-Ssrbr",
	"space7": "HomeBannerForm-space7-3Na7L",
	"spaceTop8": "HomeBannerForm-spaceTop8-20GoG",
	"spaceTop1": "HomeBannerForm-spaceTop1-3nfBu",
	"spaceTop2": "HomeBannerForm-spaceTop2-xKL8j",
	"spaceTop3": "HomeBannerForm-spaceTop3-3yiK_",
	"spaceTop4": "HomeBannerForm-spaceTop4-2y2WJ",
	"spaceTop5": "HomeBannerForm-spaceTop5-2KTRl",
	"spaceTop6": "HomeBannerForm-spaceTop6-1Pbmd",
	"spaceTop7": "HomeBannerForm-spaceTop7-U0J3I",
	"padding1": "HomeBannerForm-padding1-1kCg6",
	"padding2": "HomeBannerForm-padding2-wcEzl",
	"padding3": "HomeBannerForm-padding3-2Ctdj",
	"padding4": "HomeBannerForm-padding4-1jCHo",
	"padding5": "HomeBannerForm-padding5-27aDB",
	"padding6": "HomeBannerForm-padding6-25efX",
	"padding7": "HomeBannerForm-padding7-23Keg",
	"paddingTop1": "HomeBannerForm-paddingTop1-1_EN0",
	"paddingTop2": "HomeBannerForm-paddingTop2-1O8zA",
	"paddingTop3": "HomeBannerForm-paddingTop3-2wVSG",
	"paddingTop4": "HomeBannerForm-paddingTop4-3jRuF",
	"paddingTop5": "HomeBannerForm-paddingTop5-1Vhp3",
	"paddingTop6": "HomeBannerForm-paddingTop6-1BndY",
	"paddingTop7": "HomeBannerForm-paddingTop7-3Pf85",
	"noPadding": "HomeBannerForm-noPadding-3sRwI",
	"textBold": "HomeBannerForm-textBold-18Ew_",
	"textBolder": "HomeBannerForm-textBolder-s1oaN",
	"textNormal": "HomeBannerForm-textNormal-wAGaF",
	"textDarkBlue": "HomeBannerForm-textDarkBlue-1Zc1I",
	"textLightBlue": "HomeBannerForm-textLightBlue-24Pow",
	"textLightSandleGreen": "HomeBannerForm-textLightSandleGreen-iM1RH",
	"textLightBrown": "HomeBannerForm-textLightBrown-1Xy7c",
	"textMediumMaroon": "HomeBannerForm-textMediumMaroon-ADwFB",
	"textBrown": "HomeBannerForm-textBrown-12-Xc",
	"textMaroon": "HomeBannerForm-textMaroon-23hF0",
	"textDarkBrown": "HomeBannerForm-textDarkBrown-2NfbQ",
	"textMediumBrown": "HomeBannerForm-textMediumBrown-35FPw",
	"textSkyBlue": "HomeBannerForm-textSkyBlue-2Nolx",
	"textGray": "HomeBannerForm-textGray-39ig5",
	"bannerPadding": "HomeBannerForm-bannerPadding-1u0Vx"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/homeBanner/HomeBanner.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/homeBanner/HomeBanner.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"HomeBanner.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./src/components/siteadmin/HomeBannerForm/filepicker.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js!./src/components/siteadmin/HomeBannerForm/filepicker.css");
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

/***/ "./src/actions/getHomeBannerImages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeBannerImages", function() { return getHomeBannerImages; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");


const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query($userType: String) {
    getHomeBanner(userType: $userType) {
      id
      name
    }
  }
`;
function getHomeBannerImages() {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_HOME_BANNER_START"]
    });
    let isAdmin = getState().runtime.isAdminAuthenticated ? "admin" : "";

    try {
      // Send Request to get listing data
      const {
        data
      } = await client.query({
        query,
        variables: {
          userType: isAdmin
        },
        fetchPolicy: "network-only"
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_HOME_BANNER_SUCCESS"],
          data: data
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_HOME_BANNER_ERROR"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_HOME_BANNER_ERROR"],
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

/***/ "./src/actions/siteadmin/deleteHomeBanner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHomeBanner", function() { return deleteHomeBanner; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/getHomeBannerImages.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manageHomeBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/actions/siteadmin/manageHomeBanner.js");

 // Redirection


 // Toaster



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    {
        getHomeBanner {
            id
            name
        }
    }
`;
const mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deleteHomeBanner ($id: Int!) {
    deleteHomeBanner (id: $id) {
        status
      }
    }
  `;
function deleteHomeBanner(id, name) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_START"],
      data: id
    });

    try {
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          id
        },
        refetchQueries: [{
          query
        }]
      });

      if (data.deleteHomeBanner.status == "200") {
        await dispatch(Object(_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__["getHomeBannerImages"])());
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_SUCCESS"]
        });
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Delete Home Banner ", "Deleted successfully!");

        if (name != null) {
          await Object(_manageHomeBanner__WEBPACK_IMPORTED_MODULE_5__["doRemoveHomeBanner"])(name);
        }
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_ERROR"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_ERROR"],
        payload: {
          error
        }
      });
    }
  };
}

/***/ }),

/***/ "./src/actions/siteadmin/manageHomeBanner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBannerUploaderLoader", function() { return startBannerUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endBannerUploaderLoader", function() { return endBannerUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadHomeBanner", function() { return doUploadHomeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveHomeBanner", function() { return doRemoveHomeBanner; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/getHomeBannerImages.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);



 // Toaster

 // To Refresh the verification status

const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    {
        getHomeBanner {
            id
            name
        }
    }
`;
function startBannerUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_BANNER_UPLOAD_LOADER_START"],
      payload: {
        bannerUploaderLoading: true
      }
    });
  };
}
function endBannerUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_BANNER_UPLOAD_LOADER_END"],
      payload: {
        bannerUploaderLoading: false
      }
    });
  };
}
function doUploadHomeBanner(name, oldImage) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_START"]
    });
    let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation addHomeBanner($name: String!){
                addHomeBanner(name: $name) {
                    status
                }
            }
        `;

    try {
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          name
        },
        refetchQueries: [{
          query
        }]
      });

      if (data.addHomeBanner.status === "success") {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Upload Home Banner", "Image Upload successfully!");
        await dispatch(Object(_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__["getHomeBannerImages"])());
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_SUCCESS"],
          payload: {
            bannerUploaderLoading: false
          }
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_ERROR"],
          payload: {
            status: data.addHomeBanner.status,
            bannerUploaderLoading: false
          }
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_ERROR"],
        payload: {
          error,
          bannerUploaderLoading: false
        }
      });
    }
  };
}
async function doRemoveHomeBanner(fileName) {
  try {
    const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/deleteHomeBanner', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fileName
      }),
      credentials: 'include'
    });
    const {
      status
    } = await resp.json();

    if (status) {
      return true;
    }
  } catch (error) {
    console.log('error', error);
  }
}

/***/ }),

/***/ "./src/actions/siteadmin/manageImageBanner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBannerUploaderLoader", function() { return startBannerUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateImageBanner", function() { return doUpdateImageBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadImageBanner", function() { return doUploadImageBanner; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);


 // Toaster

 // To Refresh the verification status

const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  {
    getImageBanner {
      id
      title
      description
      buttonLabel
      image
    }
  }
`;
function startBannerUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_BANNER_UPLOAD_LOADER_START"],
      payload: {
        bannerUploaderLoading: true
      }
    });
  };
}
function doUpdateImageBanner(values) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_START"]
    });
    let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      mutation updateImageBanner(
        $title: String!
        $description: String!
        $buttonLabel: String!
      ) {
        updateImageBanner(
          title: $title
          description: $description
          buttonLabel: $buttonLabel
        ) {
          status
        }
      }
    `;

    try {
      const {
        data
      } = await client.mutate({
        mutation,
        variables: values,
        refetchQueries: [{
          query
        }]
      });

      if (data.updateImageBanner.status === "success") {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].success("Update Banner Settings", "Changes are updated successfully!");
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_SUCCESS"]
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_ERROR"],
          payload: {
            status: data.updateImageBanner.status
          }
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_ERROR"],
        payload: {
          error
        }
      });
    }
  };
}
function doUploadImageBanner(image, oldImage) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_START"]
    });
    let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      mutation uploadImageBanner($image: String!) {
        uploadImageBanner(image: $image) {
          status
        }
      }
    `;

    try {
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image
        },
        refetchQueries: [{
          query
        }]
      });

      if (data.uploadImageBanner.status === "success") {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_SUCCESS"],
          payload: {
            bannerUploaderLoading: false
          }
        });

        if (oldImage != null) {
          await doRemoveImageBanner(oldImage);
        }
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_ERROR"],
          payload: {
            status: data.uploadImageBanner.status,
            bannerUploaderLoading: false
          }
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_ERROR"],
        payload: {
          error,
          bannerUploaderLoading: false
        }
      });
    }
  };
}

async function doRemoveImageBanner(fileName) {
  try {
    const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/deleteBanner", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fileName
      }),
      credentials: "include"
    });
    const {
      status
    } = await resp.json();

    if (status) {
      return true;
    }
  } catch (error) {
    console.log("error", error);
  }
}

/***/ }),

/***/ "./src/components/siteadmin/HomeBannerForm/DropZone.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-dropzone-component");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./src/components/siteadmin/HomeBannerForm/filepicker.css");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_siteadmin_manageHomeBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/actions/siteadmin/manageHomeBanner.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/config.js");
/* harmony import */ var _actions_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/actions/getHomeBannerImages.js");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/adminIcons/defaultAdmin.svg");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/HomeBannerForm/DropZone.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 //Images



class Dropzone extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.addedfile = this.addedfile.bind(this);
    this.dropzone = null;
    this.state = {
      djsConfig: {}
    };
  }

  componentDidMount() {
    const {
      placeholder
    } = this.props;
    const isBrowser = typeof window !== "undefined";
    const isDocument = typeof document !== undefined;

    if (isBrowser && isDocument) {
      document.querySelector(".dz-hidden-input").style.visibility = "visible";
      document.querySelector(".dz-hidden-input").style.opacity = "0";
      document.querySelector(".dz-hidden-input").style.height = "100%";
      document.querySelector(".dz-hidden-input").style.width = "100%";
      document.querySelector(".dz-hidden-input").style.cursor = "pointer";
    }

    if (placeholder) {
      this.setState({
        djsConfig: {
          dictDefaultMessage: placeholder,
          addRemoveLinks: false,
          maxFilesize: 10,
          maxFiles: 20,
          acceptedFiles: "image/jpeg,image/png",
          hiddenInputContainer: ".dzInputContainer" // dictFileTooBig: '',

        }
      });
    }
  }

  componentWillMount() {
    const {
      placeholder
    } = this.props;

    if (placeholder) {
      this.setState({
        djsConfig: {
          dictDefaultMessage: placeholder,
          addRemoveLinks: false,
          maxFilesize: 10,
          maxFiles: 20,
          acceptedFiles: "image/jpeg,image/png",
          hiddenInputContainer: ".dzInputContainer" // dictFileTooBig: '',

        }
      });
    }
  }

  async success(file, fromServer) {
    const {
      doUploadHomeBanner,
      data,
      getHomeBannerImages
    } = this.props;
    console.log("hello");
    let fileName = fromServer.file.filename;
    let oldImage = data != undefined ? data : null;
    doUploadHomeBanner(fileName, oldImage);
    this.dropzone.removeFile(file);
    getHomeBannerImages();
  }

  addedfile(file, fromServer) {
    const {
      startBannerUploaderLoader
    } = this.props;
    let fileFormates = ["image/svg+xml", "application/sql", "application/pdf", "application/vnd.oasis.opendocument.presentation", "text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/epub+zip", "application/zip", "text/plain", "application/rtf", "application/vnd.oasis.opendocument.text", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.oasis.opendocument.spreadsheet", "text/tab-separated-values", "text/calendar", "application/json"];

    if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_9__["maxUploadSize"]) {
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].error("Maximum upload size Exceeded! ", "Try again with a smaller sized image");
      this.dropzone.removeFile(file);
    } else if (fileFormates.indexOf(file && file.type) > 0) {
      setTimeout(() => {
        if (file && file.accepted === false) {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].error("Error!", "You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.");
          this.dropzone.removeFile(file.name);
        }
      }, 1000);
    } else if (file && file.accepted === false) {
      setTimeout(() => {
        if (file && file.accepted === false) {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].error("Error!", "You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.");
          this.dropzone.removeFile(file.name);
        }
      }, 1000);
    } else {
      startBannerUploaderLoader();
    }
  }

  render() {
    const {
      djsConfig
    } = this.state;
    const componentConfig = {
      iconFiletypes: [".jpg", ".png"],
      postUrl: "/uploadHomeBanner"
    };
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      success: this.success,
      addedfile: this.addedfile
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listPhotoContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("adminPhotoUplod", "dzInputContainer"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
      config: componentConfig,
      eventHandlers: eventHandlers,
      djsConfig: djsConfig,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
      className: "photoUploadImg",
      alt: "PictureImage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }
    })));
  }

}

_defineProperty(Dropzone, "propTypes", {
  doUploadHomeBanner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  startBannerUploaderLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

const mapState = state => ({});

const mapDispatch = {
  doUploadHomeBanner: _actions_siteadmin_manageHomeBanner__WEBPACK_IMPORTED_MODULE_8__["doUploadHomeBanner"],
  startBannerUploaderLoader: _actions_siteadmin_manageHomeBanner__WEBPACK_IMPORTED_MODULE_8__["startBannerUploaderLoader"],
  getHomeBannerImages: _actions_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_10__["getHomeBannerImages"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(Dropzone)));

/***/ }),

/***/ "./src/components/siteadmin/HomeBannerForm/HomeBannerForm.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/HomeBannerForm/HomeBannerForm.css");
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

/***/ "./src/components/siteadmin/HomeBannerForm/HomeBannerForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/siteadmin/HomeBannerForm/submit.js");
/* harmony import */ var _actions_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/actions/getHomeBannerImages.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/siteadmin/HomeBannerForm/HomeBannerForm.css");
/* harmony import */ var _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/siteadmin/HomeBannerForm/DropZone.js");
/* harmony import */ var _actions_siteadmin_deleteHomeBanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/actions/siteadmin/deleteHomeBanner.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/adminIcons/dlt.png");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/HomeBannerForm/HomeBannerForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Style





 // Component


 // Translation


 // Images



class HomeBannerForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      error,
      handleSubmit,
      image,
      bannerUploaderLoading,
      homeBannerImages,
      deleteHomeBanner
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.pagecontentWrapper, "pagecontentAR"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].homeBannerLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 8,
      lg: 8,
      className: _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.blockcenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.panelHeader, _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.bannerPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_4__["default"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 27
      }
    }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: image,
      placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].photosPlaceholder),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("row"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, homeBannerImages && homeBannerImages.data.length > 0 && homeBannerImages.data.map((item, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: key,
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center", _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.listPhotoMedia,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.bannerImageBg,
        style: {
          backgroundImage: `url(/images/home/${item.name})`
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: () => deleteHomeBanner(item.id, item.name),
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.bannerDelete, "trashIconNewRTL"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "Delete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 31
        }
      }))));
    })))))));
  }

}

_defineProperty(HomeBannerForm, "propTypes", {
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  bannerUploaderLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});

HomeBannerForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: "HomeBannerForm" // a unique name for this form
  // validate

})(HomeBannerForm);

const mapState = state => ({
  bannerUploaderLoading: state.siteSettings.bannerUploaderLoading,
  homeBannerImages: state.homeBannerImages
});

const mapDispatch = {
  getHomeBannerImages: _actions_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_5__["getHomeBannerImages"],
  deleteHomeBanner: _actions_siteadmin_deleteHomeBanner__WEBPACK_IMPORTED_MODULE_12__["deleteHomeBanner"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_13__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_HomeBannerForm_css__WEBPACK_IMPORTED_MODULE_9___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(HomeBannerForm))));

/***/ }),

/***/ "./src/components/siteadmin/HomeBannerForm/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_siteadmin_manageImageBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/actions/siteadmin/manageImageBanner.js");


async function submit(values, dispatch) {// await dispatch(doUpdateImageBanner(values));
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/routes/siteadmin/homeBanner/HomeBanner.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/homeBanner/HomeBanner.css");
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

/***/ "./src/routes/siteadmin/homeBanner/HomeBanner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HomeBanner_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/homeBanner/HomeBanner.css");
/* harmony import */ var _HomeBanner_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_HomeBanner_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_siteadmin_HomeBannerForm_HomeBannerForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/HomeBannerForm/HomeBannerForm.js");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Loader/Loader.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/homeBanner/HomeBanner.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style


 // Component




class HomeBanner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data: {
        loading,
        getImageBanner
      }
    } = this.props;

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_HomeBannerForm_HomeBannerForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        initialValues: getImageBanner,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 14
        }
      });
    }
  }

}

_defineProperty(HomeBanner, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getImageBanner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
});

_defineProperty(HomeBanner, "defaultProps", {
  data: {
    loading: true,
    image: null
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_HomeBanner_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"]`
        {
            getImageBanner {
                id
                title
                description
                buttonLabel
                image
            }
        }
      `))(HomeBanner));

/***/ }),

/***/ "./src/routes/siteadmin/homeBanner/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _HomeBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/homeBanner/HomeBanner.js");
/* harmony import */ var _actions_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/getHomeBannerImages.js");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/helpers/adminPrivileges.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/homeBanner/index.js";





const title = 'Home Banner';
async function action({
  store,
  dispatch
}) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;
  await store.dispatch(Object(_actions_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__["getHomeBannerImages"])());

  if (!isAdminAuthenticated) {
    return {
      redirect: '/siteadmin/login'
    };
  } // Admin restriction


  if (!Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_4__["restrictUrls"])('/siteadmin/home/home-banner', adminPrivileges)) {
    return {
      redirect: '/siteadmin'
    };
  }

  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1ob21lQmFubmVyLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vSG9tZUJhbm5lckZvcm0vZmlsZXBpY2tlci5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vSG9tZUJhbm5lckZvcm0vSG9tZUJhbm5lckZvcm0uY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zaXRlYWRtaW4vaG9tZUJhbm5lci9Ib21lQmFubmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vSG9tZUJhbm5lckZvcm0vZmlsZXBpY2tlci5jc3M/M2VjZCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9wdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvZ2V0SG9tZUJhbm5lckltYWdlcy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL3NpdGVhZG1pbi9kZWxldGVIb21lQmFubmVyLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUhvbWVCYW5uZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlSW1hZ2VCYW5uZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vSG9tZUJhbm5lckZvcm0vRHJvcFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0hvbWVCYW5uZXJGb3JtL0hvbWVCYW5uZXJGb3JtLmNzcz9kMThiIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0hvbWVCYW5uZXJGb3JtL0hvbWVCYW5uZXJGb3JtLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0hvbWVCYW5uZXJGb3JtL3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3NpdGVhZG1pbi9ob21lQmFubmVyL0hvbWVCYW5uZXIuY3NzPzdlZWIiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9ob21lQmFubmVyL0hvbWVCYW5uZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9ob21lQmFubmVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1yZW50QWxsSGVhZGVyQWRtaW4tMzZEdF8ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1hZG1pbkxheW91dC0xX3JsRiB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tYm94LTF2S2MxIGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1leHBvcnRMaW5rLTFOb3hPIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tYmxvY2tjZW50ZXItM000YU8ge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhbmVsSGVhZGVyLTJDeThkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1jdXJyZW5jeXNlbGVjdC0ycGxUSyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcGFuZWxIZWFkZXItMkN5OGQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLW1hcjAtM2lsWF8ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1uYXZiYXItMkpMZnEgPiAuSG9tZUJhbm5lckZvcm0tY29udGFpbmVyLTIyM1RwIC5Ib21lQmFubmVyRm9ybS1uYXZiYXItYnJhbmQtMkJDRGEsXFxuLkhvbWVCYW5uZXJGb3JtLW5hdmJhci0ySkxmcSA+IC5Ib21lQmFubmVyRm9ybS1jb250YWluZXItZmx1aWQtbEp3WXIgLkhvbWVCYW5uZXJGb3JtLW5hdmJhci1icmFuZC0yQkNEYSB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5Ib21lQmFubmVyRm9ybS1ibG9ja2NlbnRlci0zTTRhTyB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5Ib21lQmFubmVyRm9ybS1wYW5lbEhlYWRlci0yQ3k4ZCB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4uSG9tZUJhbm5lckZvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNPNWh0IHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0taGVhZGVyVGl0bGUtMm9WWVgge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhbmVsSGVhZGVyLTJDeThkIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXRhYmxlLTNJdS1YIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXRhYmxlUm93LTJFZ1c3IHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10YWJsZUNlbGwtRFpRYXUge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1mb3JtR3JvdXAtMXhpWS0ge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXNlbGVjdC0xRHNCRSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tbm9NYXJnaW4tbzlPbnkge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWV4cG9ydExpbmstMU5veE8ge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1sYWJlbFRleHROZXctMUtiR0Yge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWRpc3BsYXlJbmxpbmUtM01BTGoge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uSG9tZUJhbm5lckZvcm0tYnRuVVBkYXRlLTNlajRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1idG5Nb2RhbERlbGV0ZS1OdFVZOCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcmFkaW9CdG4tSnJLemMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5Ib21lQmFubmVyRm9ybS1idG5VUGRhdGUtM2VqNGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5Ib21lQmFubmVyRm9ybS1idG5Nb2RhbERlbGV0ZS1OdFVZOCB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LkhvbWVCYW5uZXJGb3JtLWJ0bldpZHRoLTFrUnotIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uSG9tZUJhbm5lckZvcm0tYmFubmVySW1hZ2VCZy0zMmF0QyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWJhbm5lckRlbGV0ZS0zSXViXyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLkhvbWVCYW5uZXJGb3JtLW1vZGFsUm9vdC11TnFORiB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLW1vZGFsQm9yZGVyQm90dG9tLTNCR1pDIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tbG9nSW5Nb2RhbEJvZHktMTJ0eEkge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uSG9tZUJhbm5lckZvcm0tZXhwb3J0U2VjdGlvbi0zTkdIWSB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTNwa0ZPIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWV4cG9ydFRleHQtM3NnRHgge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWV4cG9ydExpbmtJbWctMS01ZDEge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5Ib21lQmFubmVyRm9ybS12dHJNaWRkbGUtM3QxS0cge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1leHBvcnRJbWctM3o1YnIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcHJvZmlsZVZpZXdsYWJlbC0yYl9ycyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtUGt2RzQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcHJvZmlsZVZpZXdNYWluLXVUbWlEIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXByb2ZpbGVWaWV3SW5uZXItM1h1em4ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1wcm9maWxlSW1hZ2VTZWN0aW9uLVJzVHRlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1sYXN0dmlld0lubmVyLTJxS25pIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuSG9tZUJhbm5lckZvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNPNWh0IHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuSG9tZUJhbm5lckZvcm0tZXhwb3J0U2VjdGlvbi0zTkdIWSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuSG9tZUJhbm5lckZvcm0tZXhwb3J0VGV4dC0zc2dEeCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LkhvbWVCYW5uZXJGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTNwa0ZPIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkhvbWVCYW5uZXJGb3JtLXByb2ZpbGVWaWV3bGFiZWwtMmJfcnMge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5Ib21lQmFubmVyRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LVBrdkc0IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuSG9tZUJhbm5lckZvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNPNWh0IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5Ib21lQmFubmVyRm9ybS1DaGFuZ2VUb1VwcGVyQ2FzZS0yN2VScHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4uSG9tZUJhbm5lckZvcm0tbm9Cb3JkZXItM3Z6UUoge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uSG9tZUJhbm5lckZvcm0tZXJyb3JNZXNzYWdlLTFDTDl6IHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcGFuZWxIZWFkZXItMkN5OGR7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1mb3JtR3JvdXAtMXhpWS0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc2VsZWN0LTFEc0JFIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWxhYmVsVGV4dC0xSWNKcntcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIG1hcmdpbjogNnB4IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1zcGFjZTEtM3NKdEMge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc3BhY2UyLTJVd2NfIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1zcGFjZTMtMmVEWHcge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXNwYWNlNC0xYms1YSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc3BhY2U1LTJRS3cyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1zcGFjZTYtU3NyYnIge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXNwYWNlNy0zTmE3TCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc3BhY2VUb3A4LTIwR29HIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1zcGFjZVRvcDEtM25mQnUge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc3BhY2VUb3AyLXhLTDhqIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1zcGFjZVRvcDMtM3lpS18ge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXNwYWNlVG9wNC0yeTJXSiB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc3BhY2VUb3A1LTJLVFJsIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1zcGFjZVRvcDYtMVBibWQge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXNwYWNlVG9wNy1VMEozSSB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tc3BhY2VUb3A4LTIwR29HIHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1ub01hcmdpbi1vOU9ueSB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhZGRpbmcxLTFrQ2c2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1wYWRkaW5nMi13Y0V6bCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhZGRpbmczLTJDdGRqIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcGFkZGluZzQtMWpDSG8ge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1wYWRkaW5nNS0yN2FEQiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhZGRpbmc2LTI1ZWZYIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcGFkZGluZzctMjNLZWcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1wYWRkaW5nVG9wMS0xX0VOMCB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcGFkZGluZ1RvcDItMU84ekEge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1wYWRkaW5nVG9wMy0yd1ZTRyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhZGRpbmdUb3A0LTNqUnVGIHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tcGFkZGluZ1RvcDUtMVZocDMge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS1wYWRkaW5nVG9wNi0xQm5kWSB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXBhZGRpbmdUb3A3LTNQZjg1IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tbm9QYWRkaW5nLTNzUndJIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXRleHRCb2xkLTE4RXdfIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10ZXh0Qm9sZGVyLXMxb2FOIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10ZXh0Tm9ybWFsLXdBR2FGIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5Ib21lQmFubmVyRm9ybS10ZXh0RGFya0JsdWUtMVpjMUkge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLXRleHRMaWdodEJsdWUtMjRQb3cge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10ZXh0TGlnaHRTYW5kbGVHcmVlbi1pTTFSSCB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tdGV4dExpZ2h0QnJvd24tMVh5N2Mge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10ZXh0TWVkaXVtTWFyb29uLUFEd0ZCIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10ZXh0QnJvd24tMTItWGMge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lQmFubmVyRm9ybS10ZXh0TWFyb29uLTIzaEYwIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tdGV4dERhcmtCcm93bi0yTmZiUSB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tdGV4dE1lZGl1bUJyb3duLTM1RlB3IHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tdGV4dFNreUJsdWUtMk5vbHgge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZUJhbm5lckZvcm0tdGV4dEdyYXktMzlpZzUge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkhvbWVCYW5uZXJGb3JtLWJhbm5lclBhZGRpbmctMXUwVngge1xcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLkhvbWVCYW5uZXJGb3JtLWJhbm5lclBhZGRpbmctMXUwVngge1xcbiAgICAgICAgcGFkZGluZzogMTJweCAwcHggMHB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9Ib21lQmFubmVyRm9ybS9Ib21lQmFubmVyRm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QjtBQUM1QjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGlDQUFpQztDQUNqQztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0k7UUFDSSxpQ0FBaUM7S0FDcEM7Q0FDSlwiLFwiZmlsZVwiOlwiSG9tZUJhbm5lckZvcm0uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5yZW50QWxsSGVhZGVyQWRtaW4ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbkxheW91dCB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uYm94IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5leHBvcnRMaW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uYmxvY2tjZW50ZXIge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5jdXJyZW5jeXNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1hcjAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5uYXZiYXIgPiAuY29udGFpbmVyIC5uYXZiYXItYnJhbmQsXFxuLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5ibG9ja2NlbnRlciB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5wYW5lbEhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4ucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLnRhYmxlIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnRhYmxlUm93IHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi50YWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5mb3JtR3JvdXAge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnNlbGVjdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cG9ydExpbmsge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5sYWJlbFRleHROZXcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLmRpc3BsYXlJbmxpbmUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uYnRuVVBkYXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4ucmFkaW9CdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5idG5VUGRhdGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LmJ0bldpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uYmFubmVySW1hZ2VCZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmJhbm5lckRlbGV0ZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLm1vZGFsUm9vdCB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLm1vZGFsQm9yZGVyQm90dG9tIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4ubG9nSW5Nb2RhbEJvZHkge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXhwb3J0U2VjdGlvbiB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLmV4cG9ydFRleHQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLmV4cG9ydExpbmtJbWcge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi52dHJNaWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5leHBvcnRJbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4ucHJvZmlsZVZpZXdNYWluIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnByb2ZpbGVWaWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5wcm9maWxlSW1hZ2VTZWN0aW9uIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sYXN0dmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuZXhwb3J0U2VjdGlvbiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuZXhwb3J0VGV4dCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5DaGFuZ2VUb1VwcGVyQ2FzZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uZXJyb3JNZXNzYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucGFuZWxIZWFkZXJ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5mb3JtR3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmxhYmVsVGV4dHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIG1hcmdpbjogNnB4IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLmJhbm5lclBhZGRpbmcge1xcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLmJhbm5lclBhZGRpbmcge1xcbiAgICAgICAgcGFkZGluZzogMTJweCAwcHggMHB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIkhvbWVCYW5uZXJGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi0zNkR0X1wiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiSG9tZUJhbm5lckZvcm0tYWRtaW5MYXlvdXQtMV9ybEZcIixcblx0XCJib3hcIjogXCJIb21lQmFubmVyRm9ybS1ib3gtMXZLYzFcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiSG9tZUJhbm5lckZvcm0tZXhwb3J0TGluay0xTm94T1wiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiSG9tZUJhbm5lckZvcm0tYmxvY2tjZW50ZXItM000YU9cIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIkhvbWVCYW5uZXJGb3JtLXBhbmVsSGVhZGVyLTJDeThkXCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJIb21lQmFubmVyRm9ybS1jdXJyZW5jeXNlbGVjdC0ycGxUS1wiLFxuXHRcIm1hcjBcIjogXCJIb21lQmFubmVyRm9ybS1tYXIwLTNpbFhfXCIsXG5cdFwibmF2YmFyXCI6IFwiSG9tZUJhbm5lckZvcm0tbmF2YmFyLTJKTGZxXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZUJhbm5lckZvcm0tY29udGFpbmVyLTIyM1RwXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiSG9tZUJhbm5lckZvcm0tbmF2YmFyLWJyYW5kLTJCQ0RhXCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiSG9tZUJhbm5lckZvcm0tY29udGFpbmVyLWZsdWlkLWxKd1lyXCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiSG9tZUJhbm5lckZvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNPNWh0XCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJIb21lQmFubmVyRm9ybS1oZWFkZXJUaXRsZS0yb1ZZWFwiLFxuXHRcInRhYmxlXCI6IFwiSG9tZUJhbm5lckZvcm0tdGFibGUtM0l1LVhcIixcblx0XCJ0YWJsZVJvd1wiOiBcIkhvbWVCYW5uZXJGb3JtLXRhYmxlUm93LTJFZ1c3XCIsXG5cdFwidGFibGVDZWxsXCI6IFwiSG9tZUJhbm5lckZvcm0tdGFibGVDZWxsLURaUWF1XCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiSG9tZUJhbm5lckZvcm0tZm9ybUdyb3VwLTF4aVktXCIsXG5cdFwic2VsZWN0XCI6IFwiSG9tZUJhbm5lckZvcm0tc2VsZWN0LTFEc0JFXCIsXG5cdFwibm9NYXJnaW5cIjogXCJIb21lQmFubmVyRm9ybS1ub01hcmdpbi1vOU9ueVwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIkhvbWVCYW5uZXJGb3JtLWxhYmVsVGV4dE5ldy0xS2JHRlwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJIb21lQmFubmVyRm9ybS1kaXNwbGF5SW5saW5lLTNNQUxqXCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiSG9tZUJhbm5lckZvcm0tYnRuVVBkYXRlLTNlajRlXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJIb21lQmFubmVyRm9ybS1idG5Nb2RhbERlbGV0ZS1OdFVZOFwiLFxuXHRcInJhZGlvQnRuXCI6IFwiSG9tZUJhbm5lckZvcm0tcmFkaW9CdG4tSnJLemNcIixcblx0XCJidG5XaWR0aFwiOiBcIkhvbWVCYW5uZXJGb3JtLWJ0bldpZHRoLTFrUnotXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIkhvbWVCYW5uZXJGb3JtLWJhbm5lckltYWdlQmctMzJhdENcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJIb21lQmFubmVyRm9ybS1iYW5uZXJEZWxldGUtM0l1Yl9cIixcblx0XCJtb2RhbFJvb3RcIjogXCJIb21lQmFubmVyRm9ybS1tb2RhbFJvb3QtdU5xTkZcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIkhvbWVCYW5uZXJGb3JtLW1vZGFsQm9yZGVyQm90dG9tLTNCR1pDXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJIb21lQmFubmVyRm9ybS1sb2dJbk1vZGFsQm9keS0xMnR4SVwiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJIb21lQmFubmVyRm9ybS1leHBvcnRTZWN0aW9uLTNOR0hZXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJIb21lQmFubmVyRm9ybS1leHBvcnRTZWN0aW9uR3JpZFN1Yi0zcGtGT1wiLFxuXHRcImV4cG9ydFRleHRcIjogXCJIb21lQmFubmVyRm9ybS1leHBvcnRUZXh0LTNzZ0R4XCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIkhvbWVCYW5uZXJGb3JtLWV4cG9ydExpbmtJbWctMS01ZDFcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJIb21lQmFubmVyRm9ybS12dHJNaWRkbGUtM3QxS0dcIixcblx0XCJleHBvcnRJbWdcIjogXCJIb21lQmFubmVyRm9ybS1leHBvcnRJbWctM3o1YnJcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiSG9tZUJhbm5lckZvcm0tcHJvZmlsZVZpZXdsYWJlbC0yYl9yc1wiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJIb21lQmFubmVyRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LVBrdkc0XCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiSG9tZUJhbm5lckZvcm0tcHJvZmlsZVZpZXdNYWluLXVUbWlEXCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIkhvbWVCYW5uZXJGb3JtLXByb2ZpbGVWaWV3SW5uZXItM1h1em5cIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiSG9tZUJhbm5lckZvcm0tcHJvZmlsZUltYWdlU2VjdGlvbi1Sc1R0ZVwiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJIb21lQmFubmVyRm9ybS1sYXN0dmlld0lubmVyLTJxS25pXCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJIb21lQmFubmVyRm9ybS1DaGFuZ2VUb1VwcGVyQ2FzZS0yN2VScFwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiSG9tZUJhbm5lckZvcm0tbm9Cb3JkZXItM3Z6UUpcIixcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJIb21lQmFubmVyRm9ybS1lcnJvck1lc3NhZ2UtMUNMOXpcIixcblx0XCJsYWJlbFRleHRcIjogXCJIb21lQmFubmVyRm9ybS1sYWJlbFRleHQtMUljSnJcIixcblx0XCJzcGFjZTFcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTEtM3NKdENcIixcblx0XCJzcGFjZTJcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTItMlV3Y19cIixcblx0XCJzcGFjZTNcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTMtMmVEWHdcIixcblx0XCJzcGFjZTRcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTQtMWJrNWFcIixcblx0XCJzcGFjZTVcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTUtMlFLdzJcIixcblx0XCJzcGFjZTZcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTYtU3NyYnJcIixcblx0XCJzcGFjZTdcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZTctM05hN0xcIixcblx0XCJzcGFjZVRvcDhcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDgtMjBHb0dcIixcblx0XCJzcGFjZVRvcDFcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDEtM25mQnVcIixcblx0XCJzcGFjZVRvcDJcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDIteEtMOGpcIixcblx0XCJzcGFjZVRvcDNcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDMtM3lpS19cIixcblx0XCJzcGFjZVRvcDRcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDQtMnkyV0pcIixcblx0XCJzcGFjZVRvcDVcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDUtMktUUmxcIixcblx0XCJzcGFjZVRvcDZcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDYtMVBibWRcIixcblx0XCJzcGFjZVRvcDdcIjogXCJIb21lQmFubmVyRm9ybS1zcGFjZVRvcDctVTBKM0lcIixcblx0XCJwYWRkaW5nMVwiOiBcIkhvbWVCYW5uZXJGb3JtLXBhZGRpbmcxLTFrQ2c2XCIsXG5cdFwicGFkZGluZzJcIjogXCJIb21lQmFubmVyRm9ybS1wYWRkaW5nMi13Y0V6bFwiLFxuXHRcInBhZGRpbmczXCI6IFwiSG9tZUJhbm5lckZvcm0tcGFkZGluZzMtMkN0ZGpcIixcblx0XCJwYWRkaW5nNFwiOiBcIkhvbWVCYW5uZXJGb3JtLXBhZGRpbmc0LTFqQ0hvXCIsXG5cdFwicGFkZGluZzVcIjogXCJIb21lQmFubmVyRm9ybS1wYWRkaW5nNS0yN2FEQlwiLFxuXHRcInBhZGRpbmc2XCI6IFwiSG9tZUJhbm5lckZvcm0tcGFkZGluZzYtMjVlZlhcIixcblx0XCJwYWRkaW5nN1wiOiBcIkhvbWVCYW5uZXJGb3JtLXBhZGRpbmc3LTIzS2VnXCIsXG5cdFwicGFkZGluZ1RvcDFcIjogXCJIb21lQmFubmVyRm9ybS1wYWRkaW5nVG9wMS0xX0VOMFwiLFxuXHRcInBhZGRpbmdUb3AyXCI6IFwiSG9tZUJhbm5lckZvcm0tcGFkZGluZ1RvcDItMU84ekFcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkhvbWVCYW5uZXJGb3JtLXBhZGRpbmdUb3AzLTJ3VlNHXCIsXG5cdFwicGFkZGluZ1RvcDRcIjogXCJIb21lQmFubmVyRm9ybS1wYWRkaW5nVG9wNC0zalJ1RlwiLFxuXHRcInBhZGRpbmdUb3A1XCI6IFwiSG9tZUJhbm5lckZvcm0tcGFkZGluZ1RvcDUtMVZocDNcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkhvbWVCYW5uZXJGb3JtLXBhZGRpbmdUb3A2LTFCbmRZXCIsXG5cdFwicGFkZGluZ1RvcDdcIjogXCJIb21lQmFubmVyRm9ybS1wYWRkaW5nVG9wNy0zUGY4NVwiLFxuXHRcIm5vUGFkZGluZ1wiOiBcIkhvbWVCYW5uZXJGb3JtLW5vUGFkZGluZy0zc1J3SVwiLFxuXHRcInRleHRCb2xkXCI6IFwiSG9tZUJhbm5lckZvcm0tdGV4dEJvbGQtMThFd19cIixcblx0XCJ0ZXh0Qm9sZGVyXCI6IFwiSG9tZUJhbm5lckZvcm0tdGV4dEJvbGRlci1zMW9hTlwiLFxuXHRcInRleHROb3JtYWxcIjogXCJIb21lQmFubmVyRm9ybS10ZXh0Tm9ybWFsLXdBR2FGXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiSG9tZUJhbm5lckZvcm0tdGV4dERhcmtCbHVlLTFaYzFJXCIsXG5cdFwidGV4dExpZ2h0Qmx1ZVwiOiBcIkhvbWVCYW5uZXJGb3JtLXRleHRMaWdodEJsdWUtMjRQb3dcIixcblx0XCJ0ZXh0TGlnaHRTYW5kbGVHcmVlblwiOiBcIkhvbWVCYW5uZXJGb3JtLXRleHRMaWdodFNhbmRsZUdyZWVuLWlNMVJIXCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJIb21lQmFubmVyRm9ybS10ZXh0TGlnaHRCcm93bi0xWHk3Y1wiLFxuXHRcInRleHRNZWRpdW1NYXJvb25cIjogXCJIb21lQmFubmVyRm9ybS10ZXh0TWVkaXVtTWFyb29uLUFEd0ZCXCIsXG5cdFwidGV4dEJyb3duXCI6IFwiSG9tZUJhbm5lckZvcm0tdGV4dEJyb3duLTEyLVhjXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkhvbWVCYW5uZXJGb3JtLXRleHRNYXJvb24tMjNoRjBcIixcblx0XCJ0ZXh0RGFya0Jyb3duXCI6IFwiSG9tZUJhbm5lckZvcm0tdGV4dERhcmtCcm93bi0yTmZiUVwiLFxuXHRcInRleHRNZWRpdW1Ccm93blwiOiBcIkhvbWVCYW5uZXJGb3JtLXRleHRNZWRpdW1Ccm93bi0zNUZQd1wiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiSG9tZUJhbm5lckZvcm0tdGV4dFNreUJsdWUtMk5vbHhcIixcblx0XCJ0ZXh0R3JheVwiOiBcIkhvbWVCYW5uZXJGb3JtLXRleHRHcmF5LTM5aWc1XCIsXG5cdFwiYmFubmVyUGFkZGluZ1wiOiBcIkhvbWVCYW5uZXJGb3JtLWJhbm5lclBhZGRpbmctMXUwVnhcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL2hvbWVCYW5uZXIvSG9tZUJhbm5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkNcIixcImZpbGVcIjpcIkhvbWVCYW5uZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2Zz8wY2I2NWFkNlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hZG1pbkljb25zL2RsdC5wbmc/YjM2MmNhZTBcIjsiLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5cbmltcG9ydCB7XG4gIEdFVF9IT01FX0JBTk5FUl9TVEFSVCxcbiAgR0VUX0hPTUVfQkFOTkVSX1NVQ0NFU1MsXG4gIEdFVF9IT01FX0JBTk5FUl9FUlJPUixcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkoJHVzZXJUeXBlOiBTdHJpbmcpIHtcbiAgICBnZXRIb21lQmFubmVyKHVzZXJUeXBlOiAkdXNlclR5cGUpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG9tZUJhbm5lckltYWdlcygpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHRVRfSE9NRV9CQU5ORVJfU1RBUlQsXG4gICAgfSk7XG5cbiAgICBsZXQgaXNBZG1pbiA9IGdldFN0YXRlKCkucnVudGltZS5pc0FkbWluQXV0aGVudGljYXRlZCA/IFwiYWRtaW5cIiA6IFwiXCI7XG5cbiAgICB0cnkge1xuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGdldCBsaXN0aW5nIGRhdGFcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHZhcmlhYmxlczogeyB1c2VyVHlwZTogaXNBZG1pbiB9LFxuICAgICAgICBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIixcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX0hPTUVfQkFOTkVSX1NVQ0NFU1MsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX0hPTUVfQkFOTkVSX0VSUk9SLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHRVRfSE9NRV9CQU5ORVJfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuaW1wb3J0IHtcbiAgICBERUxFVEVfSE9NRV9CQU5ORVJfU1RBUlQsXG4gICAgREVMRVRFX0hPTUVfQkFOTkVSX1NVQ0NFU1MsXG4gICAgREVMRVRFX0hPTUVfQkFOTkVSX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8vIFJlZGlyZWN0aW9uXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9jb3JlL2hpc3RvcnknO1xuaW1wb3J0IHsgZ2V0SG9tZUJhbm5lckltYWdlcyB9IGZyb20gJy4uL2dldEhvbWVCYW5uZXJJbWFnZXMnO1xuXG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuaW1wb3J0IHsgZG9SZW1vdmVIb21lQmFubmVyIH0gZnJvbSAnLi9tYW5hZ2VIb21lQmFubmVyJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gICAge1xuICAgICAgICBnZXRIb21lQmFubmVyIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlSG9tZUJhbm5lciAoJGlkOiBJbnQhKSB7XG4gICAgZGVsZXRlSG9tZUJhbm5lciAoaWQ6ICRpZCkge1xuICAgICAgICBzdGF0dXNcbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVIb21lQmFubmVyKGlkLCBuYW1lKSB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogREVMRVRFX0hPTUVfQkFOTkVSX1NUQVJULFxuICAgICAgICAgICAgZGF0YTogaWRcbiAgICAgICAgfSk7XG4gICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5IH1dXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZGVsZXRlSG9tZUJhbm5lci5zdGF0dXMgPT0gXCIyMDBcIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldEhvbWVCYW5uZXJJbWFnZXMoKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfSE9NRV9CQU5ORVJfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIkRlbGV0ZSBIb21lIEJhbm5lciBcIiwgXCJEZWxldGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgICAgICAgICAgICAgaWYobmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZG9SZW1vdmVIb21lQmFubmVyKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfSE9NRV9CQU5ORVJfRVJST1IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfSE9NRV9CQU5ORVJfRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG59XG5cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vLi4vY29yZS9mZXRjaCc7XG5cbmltcG9ydCB7XG4gICAgVVBMT0FEX0hPTUVfQkFOTkVSX1NUQVJULFxuICAgIFVQTE9BRF9IT01FX0JBTk5FUl9TVUNDRVNTLFxuICAgIFVQTE9BRF9IT01FX0JBTk5FUl9FUlJPUixcbiAgICBJTUFHRV9CQU5ORVJfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICBJTUFHRV9CQU5ORVJfVVBMT0FEX0xPQURFUl9FTkRcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEhvbWVCYW5uZXJJbWFnZXMgfSBmcm9tICcuLi9nZXRIb21lQmFubmVySW1hZ2VzJztcbi8vIFRvYXN0ZXJcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5cbi8vIFRvIFJlZnJlc2ggdGhlIHZlcmlmaWNhdGlvbiBzdGF0dXNcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICAgIHtcbiAgICAgICAgZ2V0SG9tZUJhbm5lciB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QmFubmVyVXBsb2FkZXJMb2FkZXIoKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogSU1BR0VfQkFOTkVSX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRCYW5uZXJVcGxvYWRlckxvYWRlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBJTUFHRV9CQU5ORVJfVVBMT0FEX0xPQURFUl9FTkQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRIb21lQmFubmVyKG5hbWUsIG9sZEltYWdlKSB7XG5cbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVVBMT0FEX0hPTUVfQkFOTkVSX1NUQVJUIH0pO1xuXG4gICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIGFkZEhvbWVCYW5uZXIoJG5hbWU6IFN0cmluZyEpe1xuICAgICAgICAgICAgICAgIGFkZEhvbWVCYW5uZXIobmFtZTogJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRIb21lQmFubmVyLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlVwbG9hZCBIb21lIEJhbm5lclwiLCBcIkltYWdlIFVwbG9hZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldEhvbWVCYW5uZXJJbWFnZXMoKSlcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9IT01FX0JBTk5FUl9TVUNDRVNTLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJVcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUExPQURfSE9NRV9CQU5ORVJfRVJST1IsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5hZGRIb21lQmFubmVyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lclVwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9IT01FX0JBTk5FUl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBiYW5uZXJVcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb1JlbW92ZUhvbWVCYW5uZXIoZmlsZU5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9kZWxldGVIb21lQmFubmVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZU5hbWUgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCIuLi8uLi9jb3JlL2ZldGNoXCI7XG5cbmltcG9ydCB7XG4gIFVQREFURV9JTUFHRV9CQU5ORVJfU1RBUlQsXG4gIFVQREFURV9JTUFHRV9CQU5ORVJfU1VDQ0VTUyxcbiAgVVBEQVRFX0lNQUdFX0JBTk5FUl9FUlJPUixcbiAgSU1BR0VfQkFOTkVSX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gIFVQTE9BRF9JTUFHRV9CQU5ORVJfU1RBUlQsXG4gIFVQTE9BRF9JTUFHRV9CQU5ORVJfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFX0JBTk5FUl9FUlJPUixcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tIFwicmVhY3QtcmVkdXgtdG9hc3RyXCI7XG5cbi8vIFRvIFJlZnJlc2ggdGhlIHZlcmlmaWNhdGlvbiBzdGF0dXNcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICB7XG4gICAgZ2V0SW1hZ2VCYW5uZXIge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgYnV0dG9uTGFiZWxcbiAgICAgIGltYWdlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRCYW5uZXJVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBJTUFHRV9CQU5ORVJfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBkYXRlSW1hZ2VCYW5uZXIodmFsdWVzKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfSU1BR0VfQkFOTkVSX1NUQVJUIH0pO1xuXG4gICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgbXV0YXRpb24gdXBkYXRlSW1hZ2VCYW5uZXIoXG4gICAgICAgICR0aXRsZTogU3RyaW5nIVxuICAgICAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcbiAgICAgICAgJGJ1dHRvbkxhYmVsOiBTdHJpbmchXG4gICAgICApIHtcbiAgICAgICAgdXBkYXRlSW1hZ2VCYW5uZXIoXG4gICAgICAgICAgdGl0bGU6ICR0aXRsZVxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICAgICAgICBidXR0b25MYWJlbDogJGJ1dHRvbkxhYmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB2YWx1ZXMsXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XSxcbiAgICAgIH0pO1xuICAgICAgaWYgKGRhdGEudXBkYXRlSW1hZ2VCYW5uZXIuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICB0b2FzdHIuc3VjY2VzcyhcbiAgICAgICAgICBcIlVwZGF0ZSBCYW5uZXIgU2V0dGluZ3NcIixcbiAgICAgICAgICBcIkNoYW5nZXMgYXJlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgICk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX0lNQUdFX0JBTk5FUl9TVUNDRVNTIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFVQREFURV9JTUFHRV9CQU5ORVJfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnVwZGF0ZUltYWdlQmFubmVyLnN0YXR1cyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVUERBVEVfSU1BR0VfQkFOTkVSX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1VwbG9hZEltYWdlQmFubmVyKGltYWdlLCBvbGRJbWFnZSkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogVVBMT0FEX0lNQUdFX0JBTk5FUl9TVEFSVCB9KTtcblxuICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgIG11dGF0aW9uIHVwbG9hZEltYWdlQmFubmVyKCRpbWFnZTogU3RyaW5nISkge1xuICAgICAgICB1cGxvYWRJbWFnZUJhbm5lcihpbWFnZTogJGltYWdlKSB7XG4gICAgICAgICAgc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpbWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5IH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLnVwbG9hZEltYWdlQmFubmVyLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRV9CQU5ORVJfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBiYW5uZXJVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2xkSW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IGRvUmVtb3ZlSW1hZ2VCYW5uZXIob2xkSW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFX0JBTk5FUl9FUlJPUixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdGF0dXM6IGRhdGEudXBsb2FkSW1hZ2VCYW5uZXIuc3RhdHVzLFxuICAgICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VfQkFOTkVSX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZG9SZW1vdmVJbWFnZUJhbm5lcihmaWxlTmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcIi9kZWxldGVCYW5uZXJcIiwge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlTmFtZSB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCBEcm9wem9uZUNvbXBvbmVudCBmcm9tIFwicmVhY3QtZHJvcHpvbmUtY29tcG9uZW50XCI7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IHMgZnJvbSBcIiFpc29tb3JwaGljLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vZmlsZXBpY2tlci5jc3NcIjtcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gXCJyZWFjdC1yZWR1eC10b2FzdHJcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICBzdGFydEJhbm5lclVwbG9hZGVyTG9hZGVyLFxuICBkb1VwbG9hZEhvbWVCYW5uZXIsXG59IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VIb21lQmFubmVyXCI7XG5pbXBvcnQgeyBtYXhVcGxvYWRTaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0SG9tZUJhbm5lckltYWdlcyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2dldEhvbWVCYW5uZXJJbWFnZXNcIjtcblxuLy9JbWFnZXNcbmltcG9ydCBQaWN0dXJlSW1hZ2UgZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmdcIjtcblxuY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRvVXBsb2FkSG9tZUJhbm5lcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHN0YXJ0QmFubmVyVXBsb2FkZXJMb2FkZXI6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSB0aGlzLnN1Y2Nlc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZGVkZmlsZSA9IHRoaXMuYWRkZWRmaWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRqc0NvbmZpZzoge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBjb25zdCBpc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBpc0RvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB9XG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGpzQ29uZmlnOiB7XG4gICAgICAgICAgZGljdERlZmF1bHRNZXNzYWdlOiBwbGFjZWhvbGRlcixcbiAgICAgICAgICBhZGRSZW1vdmVMaW5rczogZmFsc2UsXG4gICAgICAgICAgbWF4RmlsZXNpemU6IDEwLFxuICAgICAgICAgIG1heEZpbGVzOiAyMCxcbiAgICAgICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlL2pwZWcsaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgaGlkZGVuSW5wdXRDb250YWluZXI6IFwiLmR6SW5wdXRDb250YWluZXJcIixcbiAgICAgICAgICAvLyBkaWN0RmlsZVRvb0JpZzogJycsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRqc0NvbmZpZzoge1xuICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IGZhbHNlLFxuICAgICAgICAgIG1heEZpbGVzaXplOiAxMCxcbiAgICAgICAgICBtYXhGaWxlczogMjAsXG4gICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS9qcGVnLGltYWdlL3BuZ1wiLFxuICAgICAgICAgIGhpZGRlbklucHV0Q29udGFpbmVyOiBcIi5keklucHV0Q29udGFpbmVyXCIsXG4gICAgICAgICAgLy8gZGljdEZpbGVUb29CaWc6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3VjY2VzcyhmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgY29uc3QgeyBkb1VwbG9hZEhvbWVCYW5uZXIsIGRhdGEsIGdldEhvbWVCYW5uZXJJbWFnZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgIGxldCBmaWxlTmFtZSA9IGZyb21TZXJ2ZXIuZmlsZS5maWxlbmFtZTtcbiAgICBsZXQgb2xkSW1hZ2UgPSBkYXRhICE9IHVuZGVmaW5lZCA/IGRhdGEgOiBudWxsO1xuICAgIGRvVXBsb2FkSG9tZUJhbm5lcihmaWxlTmFtZSwgb2xkSW1hZ2UpO1xuICAgIHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcbiAgICBnZXRIb21lQmFubmVySW1hZ2VzKCk7XG4gIH1cblxuICBhZGRlZGZpbGUoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgIGNvbnN0IHsgc3RhcnRCYW5uZXJVcGxvYWRlckxvYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBmaWxlRm9ybWF0ZXMgPSBbXG4gICAgICBcImltYWdlL3N2Zyt4bWxcIixcbiAgICAgIFwiYXBwbGljYXRpb24vc3FsXCIsXG4gICAgICBcImFwcGxpY2F0aW9uL3BkZlwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvblwiLFxuICAgICAgXCJ0ZXh0L2NzdlwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldFwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi9lcHViK3ppcFwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi96aXBcIixcbiAgICAgIFwidGV4dC9wbGFpblwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi9ydGZcIixcbiAgICAgIFwiYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0XCIsXG4gICAgICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50XCIsXG4gICAgICBcImFwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXRcIixcbiAgICAgIFwidGV4dC90YWItc2VwYXJhdGVkLXZhbHVlc1wiLFxuICAgICAgXCJ0ZXh0L2NhbGVuZGFyXCIsXG4gICAgICBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBdO1xuXG4gICAgaWYgKGZpbGUgJiYgZmlsZS5zaXplID4gMTAyNCAqIDEwMjQgKiBtYXhVcGxvYWRTaXplKSB7XG4gICAgICB0b2FzdHIuZXJyb3IoXG4gICAgICAgIFwiTWF4aW11bSB1cGxvYWQgc2l6ZSBFeGNlZWRlZCEgXCIsXG4gICAgICAgIFwiVHJ5IGFnYWluIHdpdGggYSBzbWFsbGVyIHNpemVkIGltYWdlXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZmlsZSk7XG4gICAgfSBlbHNlIGlmIChmaWxlRm9ybWF0ZXMuaW5kZXhPZihmaWxlICYmIGZpbGUudHlwZSkgPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS5hY2NlcHRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXG4gICAgICAgICAgICBcIkVycm9yIVwiLFxuICAgICAgICAgICAgXCJZb3UgYXJlIHRyeWluZyB0byB1cGxvYWQgaW52YWxpZCBpbWFnZSBmaWxlLiBQbGVhc2UgdXBsb2FkIFBORywgSlBHICYgSlBFRyBmb3JtYXQgaW1hZ2UgZmlsZS5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9hc3RyLmVycm9yKFxuICAgICAgICAgICAgXCJFcnJvciFcIixcbiAgICAgICAgICAgIFwiWW91IGFyZSB0cnlpbmcgdG8gdXBsb2FkIGludmFsaWQgaW1hZ2UgZmlsZS4gUGxlYXNlIHVwbG9hZCBQTkcsIEpQRyAmIEpQRUcgZm9ybWF0IGltYWdlIGZpbGUuXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRCYW5uZXJVcGxvYWRlckxvYWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRqc0NvbmZpZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHtcbiAgICAgIGljb25GaWxldHlwZXM6IFtcIi5qcGdcIiwgXCIucG5nXCJdLFxuICAgICAgcG9zdFVybDogXCIvdXBsb2FkSG9tZUJhbm5lclwiLFxuICAgIH07XG4gICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgIGluaXQ6IChkeikgPT4gKHRoaXMuZHJvcHpvbmUgPSBkeiksXG4gICAgICBzdWNjZXNzOiB0aGlzLnN1Y2Nlc3MsXG4gICAgICBhZGRlZGZpbGU6IHRoaXMuYWRkZWRmaWxlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibGlzdFBob3RvQ29udGFpbmVyXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJhZG1pblBob3RvVXBsb2RcIiwgXCJkeklucHV0Q29udGFpbmVyXCIpfT5cbiAgICAgICAgICA8RHJvcHpvbmVDb21wb25lbnRcbiAgICAgICAgICAgIGNvbmZpZz17Y29tcG9uZW50Q29uZmlnfVxuICAgICAgICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAgICAgICAgIGRqc0NvbmZpZz17ZGpzQ29uZmlnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtQaWN0dXJlSW1hZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wicGhvdG9VcGxvYWRJbWdcIn1cbiAgICAgICAgICAgIGFsdD1cIlBpY3R1cmVJbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgZG9VcGxvYWRIb21lQmFubmVyLFxuICBzdGFydEJhbm5lclVwbG9hZGVyTG9hZGVyLFxuICBnZXRIb21lQmFubmVySW1hZ2VzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoRHJvcHpvbmUpKTtcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZUJhbm5lckZvcm0uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hvbWVCYW5uZXJGb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hvbWVCYW5uZXJGb3JtLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgc3VibWl0IGZyb20gXCIuL3N1Ym1pdFwiO1xuaW1wb3J0IHsgZ2V0SG9tZUJhbm5lckltYWdlcyB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL2dldEhvbWVCYW5uZXJJbWFnZXNcIjtcblxuLy8gU3R5bGVcbmltcG9ydCB7IFJvdywgRm9ybUdyb3VwLCBDb2wsIFBhbmVsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBzIGZyb20gXCIuL0hvbWVCYW5uZXJGb3JtLmNzc1wiO1xuaW1wb3J0IGJ0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBEcm9wWm9uZSBmcm9tIFwiLi9Ecm9wWm9uZVwiO1xuaW1wb3J0IHsgZGVsZXRlSG9tZUJhbm5lciB9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9kZWxldGVIb21lQmFubmVyXCI7XG5cbi8vIFRyYW5zbGF0aW9uXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzXCI7XG5cbi8vIEltYWdlc1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmdcIjtcblxuY2xhc3MgSG9tZUJhbm5lckZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiYW5uZXJVcGxvYWRlckxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvcixcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGltYWdlLFxuICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nLFxuICAgICAgaG9tZUJhbm5lckltYWdlcyxcbiAgICAgIGRlbGV0ZUhvbWVCYW5uZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnBhZ2Vjb250ZW50V3JhcHBlciwgXCJwYWdlY29udGVudEFSXCIpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzLmhlYWRlclRpdGxlfT5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob21lQmFubmVyTGFiZWx9IC8+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17OH0gbGc9ezh9IGNsYXNzTmFtZT17cy5ibG9ja2NlbnRlcn0+XG4gICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnBhbmVsSGVhZGVyLCBzLmJhbm5lclBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHN0cm9uZz57ZXJyb3J9PC9zdHJvbmc+fVxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wWm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMucGhvdG9zUGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93XCIpfT5cbiAgICAgICAgICAgICAgICAgIHtob21lQmFubmVySW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgIGhvbWVCYW5uZXJJbWFnZXMuZGF0YS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgIGhvbWVCYW5uZXJJbWFnZXMuZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTEyIHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zcGFjZTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdFBob3RvTWVkaWF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5iYW5uZXJJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvaG9tZS8ke2l0ZW0ubmFtZX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSG9tZUJhbm5lcihpdGVtLmlkLCBpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHMuYmFubmVyRGVsZXRlLCBcInRyYXNoSWNvbk5ld1JUTFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17RGVsZXRlSWNvbn0gYWx0PVwiRGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib21lQmFubmVyRm9ybSA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06IFwiSG9tZUJhbm5lckZvcm1cIiwgLy8gYSB1bmlxdWUgbmFtZSBmb3IgdGhpcyBmb3JtXG4gIC8vIHZhbGlkYXRlXG59KShIb21lQmFubmVyRm9ybSk7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBiYW5uZXJVcGxvYWRlckxvYWRpbmc6IHN0YXRlLnNpdGVTZXR0aW5ncy5iYW5uZXJVcGxvYWRlckxvYWRpbmcsXG4gIGhvbWVCYW5uZXJJbWFnZXM6IHN0YXRlLmhvbWVCYW5uZXJJbWFnZXMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIGdldEhvbWVCYW5uZXJJbWFnZXMsXG4gIGRlbGV0ZUhvbWVCYW5uZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKFxuICB3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoSG9tZUJhbm5lckZvcm0pKVxuKTtcbiIsImltcG9ydCB7ZG9VcGRhdGVJbWFnZUJhbm5lcn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlSW1hZ2VCYW5uZXInO1xuXG5hc3luYyBmdW5jdGlvbiBzdWJtaXQodmFsdWVzLCBkaXNwYXRjaCkge1xuICAvLyBhd2FpdCBkaXNwYXRjaChkb1VwZGF0ZUltYWdlQmFubmVyKHZhbHVlcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJtaXQ7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hvbWVCYW5uZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hvbWVCYW5uZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZUJhbm5lci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ib21lQmFubmVyLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEhvbWVCYW5uZXJGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2l0ZWFkbWluL0hvbWVCYW5uZXJGb3JtL0hvbWVCYW5uZXJGb3JtJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyJztcblxuY2xhc3MgSG9tZUJhbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGdldEltYWdlQmFubmVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIH0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgaW1hZ2U6IG51bGxcbiAgICB9XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhOiB7IGxvYWRpbmcsIGdldEltYWdlQmFubmVyIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGVyIHR5cGU9e1widGV4dFwifSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxIb21lQmFubmVyRm9ybSBpbml0aWFsVmFsdWVzPXtnZXRJbWFnZUJhbm5lcn0gLz5cbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3R5bGVzKHMpLFxuICBncmFwaHFsKGdxbGBcbiAgICAgICAge1xuICAgICAgICAgICAgZ2V0SW1hZ2VCYW5uZXIge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCksXG4pKEhvbWVCYW5uZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dC9BZG1pbkxheW91dCc7XG5pbXBvcnQgSG9tZUJhbm5lciBmcm9tICcuL0hvbWVCYW5uZXInO1xuaW1wb3J0IHsgZ2V0SG9tZUJhbm5lckltYWdlcyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2V0SG9tZUJhbm5lckltYWdlcyc7XG5pbXBvcnQgeyByZXN0cmljdFVybHMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FkbWluUHJpdmlsZWdlcyc7XG5cbmNvbnN0IHRpdGxlID0gJ0hvbWUgQmFubmVyJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgc3RvcmUsIGRpc3BhdGNoIH0pIHtcblxuICAvLyBGcm9tIFJlZHV4IFN0b3JlXG4gIGxldCBpc0FkbWluQXV0aGVudGljYXRlZCA9IHN0b3JlLmdldFN0YXRlKCkucnVudGltZS5pc0FkbWluQXV0aGVudGljYXRlZDtcbiAgbGV0IGFkbWluUHJpdmlsZWdlcyA9IHN0b3JlLmdldFN0YXRlKCkuYWRtaW5QcmV2aWxlZ2VzLnByaXZpbGVnZXMgJiYgc3RvcmUuZ2V0U3RhdGUoKS5hZG1pblByZXZpbGVnZXMucHJpdmlsZWdlcy5wcml2aWxlZ2VzO1xuXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldEhvbWVCYW5uZXJJbWFnZXMoKSlcblxuICBpZiAoIWlzQWRtaW5BdXRoZW50aWNhdGVkKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluL2xvZ2luJyB9O1xuICB9XG5cbiAgLy8gQWRtaW4gcmVzdHJpY3Rpb25cbiAgaWYgKCFyZXN0cmljdFVybHMoJy9zaXRlYWRtaW4vaG9tZS9ob21lLWJhbm5lcicsIGFkbWluUHJpdmlsZWdlcykpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdDogJy9zaXRlYWRtaW4nIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogPEFkbWluTGF5b3V0PjxIb21lQmFubmVyIHRpdGxlPXt0aXRsZX0gLz48L0FkbWluTGF5b3V0PixcbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7O0FDN0JBOzs7Ozs7O0FDQUE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBRUE7QUFDQTs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWtCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBMUpBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBMEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7Ozs7QUN6TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFHQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFRQTtBQUNBO0FBakZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7O0FDNUhBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBa0JBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9