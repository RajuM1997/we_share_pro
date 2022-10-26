require("source-map-support").install();
exports.ids = ["siteadmin-userEditReviews"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/UserReviewsForm/UserReviewsForm.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.UserReviewsForm-rentAllHeaderAdmin-JsU-g {\n  position: fixed !important;\n}\n.UserReviewsForm-adminLayout-1DmcU {\n  padding-top: 64px !important;\n}\n.UserReviewsForm-box-2Mp2C h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.UserReviewsForm-exportLink-1AE42 {\n  margin-bottom: -29px;\n}\n.UserReviewsForm-blockcenter-2K5sc {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.UserReviewsForm-panelHeader-2Tytf {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.UserReviewsForm-currencyselect-2ia5j {\n  width: 100%;\n  margin-right: 0px;\n}\n.UserReviewsForm-panelHeader-2Tytf {\n  overflow: hidden;\n  position: relative;\n}\n.UserReviewsForm-mar0-3u-hI {\n  margin-left: 0;\n  margin-right: 0;\n}\n.UserReviewsForm-navbar-2lfpH > .UserReviewsForm-container-PeAWR .UserReviewsForm-navbar-brand-km-FP,\n.UserReviewsForm-navbar-2lfpH > .UserReviewsForm-container-fluid-32IOq .UserReviewsForm-navbar-brand-km-FP {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .UserReviewsForm-blockcenter-2K5sc {\n    padding: 0px;\n  }\n  .UserReviewsForm-panelHeader-2Tytf {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.UserReviewsForm-pagecontentWrapper-Po8Pm {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.UserReviewsForm-headerTitle-3QOkS {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.UserReviewsForm-panelHeader-2Tytf {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.UserReviewsForm-table-30UmP {\n\tdisplay: table;\n}\n.UserReviewsForm-tableRow-1a06j {\n\tdisplay: table-row;\n}\n.UserReviewsForm-tableCell-1GCqd {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.UserReviewsForm-formGroup-1fcH6 {\n\tmargin-bottom: 6px;\n}\n.UserReviewsForm-select-_74Lv {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.UserReviewsForm-noMargin-n9j4u {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.UserReviewsForm-exportLink-1AE42 {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.UserReviewsForm-labelTextNew-22CRw {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.UserReviewsForm-displayInline-AoNm4 {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.UserReviewsForm-btnUPdate-przwl {\n\tdisplay: inline-block;\n}\n.UserReviewsForm-btnModalDelete-8tP4S {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.UserReviewsForm-radioBtn-1-J33 {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.UserReviewsForm-btnUPdate-przwl {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.UserReviewsForm-btnModalDelete-8tP4S {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.UserReviewsForm-btnWidth-3fFW_ {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.UserReviewsForm-bannerImageBg-3yhYO {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.UserReviewsForm-bannerDelete-noIdU {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.UserReviewsForm-modalRoot-2VMGa {\n\tpadding: 32px;\n}\n.UserReviewsForm-modalBorderBottom-3RCYq {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.UserReviewsForm-logInModalBody-1ChrF {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.UserReviewsForm-exportSection-o5CVV {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.UserReviewsForm-exportSectionGridSub-20Cdv {\n\tgrid-template-columns: 50% 49% !important;\n}\n.UserReviewsForm-exportText-RiI7R {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.UserReviewsForm-exportLinkImg-1gg16 {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.UserReviewsForm-vtrMiddle-256bt {\n\tvertical-align: middle;\n}\n.UserReviewsForm-exportImg-whqAU {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.UserReviewsForm-profileViewlabel-1SOvU {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.UserReviewsForm-profileViewMainContent-3XcuS {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.UserReviewsForm-profileViewMain-P_rUz {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.UserReviewsForm-profileViewInner-1VFol {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.UserReviewsForm-profileImageSection-23_4E {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.UserReviewsForm-lastviewInner-1Uo2E {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.UserReviewsForm-pagecontentWrapper-Po8Pm {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.UserReviewsForm-exportSection-o5CVV {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.UserReviewsForm-exportText-RiI7R {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.UserReviewsForm-exportSectionGridSub-20Cdv {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.UserReviewsForm-profileViewlabel-1SOvU {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.UserReviewsForm-profileViewMainContent-3XcuS {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.UserReviewsForm-pagecontentWrapper-Po8Pm {\n\t\tmargin-left: 0;\n\t}\n}\n.UserReviewsForm-ChangeToUpperCase-3N5tr{\n    text-transform: uppercase\n}\n.UserReviewsForm-noBorder-17Cbe {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.UserReviewsForm-errorMessage-2lFdA {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.UserReviewsForm-panelHeader-2Tytf{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.UserReviewsForm-formGroup-1fcH6 {\n  margin-bottom: 6px;\n}\n.UserReviewsForm-select-_74Lv {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.UserReviewsForm-labelText-2jr6S{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.UserReviewsForm-space1-3gRHC {\n\tmargin-bottom: 6px !important;\n}\n.UserReviewsForm-space2-o7WTz {\n\tmargin-bottom: 12px !important;\n}\n.UserReviewsForm-space3-3GnyP {\n\tmargin-bottom: 18px !important;\n}\n.UserReviewsForm-space4-Fqmm9 {\n\tmargin-bottom: 24px !important;\n}\n.UserReviewsForm-space5-1gxVr {\n\tmargin-bottom: 30px !important;\n}\n.UserReviewsForm-space6-2B7ww {\n\tmargin-bottom: 36px !important;\n}\n.UserReviewsForm-space7-38IKK {\n\tmargin-bottom: 42px !important;\n}\n.UserReviewsForm-spaceTop8-d1vy8 {\n\tmargin-bottom: 48px !important;\n}\n.UserReviewsForm-spaceTop1-AhuVR {\n\tmargin-top: 6px !important;\n}\n.UserReviewsForm-spaceTop2-1J9gs {\n\tmargin-top: 12px !important;\n}\n.UserReviewsForm-spaceTop3-2VrDC {\n\tmargin-top: 18px !important;\n}\n.UserReviewsForm-spaceTop4-3FxZI {\n\tmargin-top: 24px !important;\n}\n.UserReviewsForm-spaceTop5-37Qha {\n\tmargin-top: 30px !important;\n}\n.UserReviewsForm-spaceTop6-3bvGh {\n\tmargin-top: 36px !important;\n}\n.UserReviewsForm-spaceTop7-1GKWx {\n\tmargin-top: 42px !important;\n}\n.UserReviewsForm-spaceTop8-d1vy8 {\n\tmargin-top: 48px !important;\n}\n.UserReviewsForm-noMargin-n9j4u {\n\tmargin: 0px !important;\n}\n.UserReviewsForm-padding1-1zXlw {\n\tpadding-bottom: 6px !important;\n}\n.UserReviewsForm-padding2-2RUPs {\n\tpadding-bottom: 12px !important;\n}\n.UserReviewsForm-padding3-39pWB {\n\tpadding-bottom: 18px !important;\n}\n.UserReviewsForm-padding4-3kJ4- {\n\tpadding-bottom: 24px !important;\n}\n.UserReviewsForm-padding5-3mlaW {\n\tpadding-bottom: 30px !important;\n}\n.UserReviewsForm-padding6-3C4dF {\n\tpadding-bottom: 36px !important;\n}\n.UserReviewsForm-padding7-39IQX {\n\tpadding-bottom: 42px !important;\n}\n.UserReviewsForm-paddingTop1-1jhBJ {\n\tpadding-top: 6px !important;\n}\n.UserReviewsForm-paddingTop2-Am_zI {\n\tpadding-top: 12px !important;\n}\n.UserReviewsForm-paddingTop3-1mOTN {\n\tpadding-top: 18px !important;\n}\n.UserReviewsForm-paddingTop4-2pzAS {\n\tpadding-top: 24px !important;\n}\n.UserReviewsForm-paddingTop5-35VEO {\n\tpadding-top: 30px !important;\n}\n.UserReviewsForm-paddingTop6-2mssW {\n\tpadding-top: 36px !important;\n}\n.UserReviewsForm-paddingTop7-1DTpB {\n\tpadding-top: 42px !important;\n}\n.UserReviewsForm-noPadding-12Ymv {\n\tpadding: 0px !important;\n}\n.UserReviewsForm-textBold-3BlSi {\n\tfont-weight: 500 !important;\n}\n.UserReviewsForm-textBolder-39k0T {\n\tfont-weight: 700 !important;\n}\n.UserReviewsForm-textNormal-PYd8k {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.UserReviewsForm-textDarkBlue-1woeW {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.UserReviewsForm-textLightBlue-zeaIn {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.UserReviewsForm-textLightSandleGreen-3Qtjt {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.UserReviewsForm-textLightBrown-8p_ug {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.UserReviewsForm-textMediumMaroon-21UP- {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.UserReviewsForm-textBrown-33Mrd {\n\tcolor: #B5DC4B !important;\n}\n.UserReviewsForm-textMaroon-2tRIT {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.UserReviewsForm-textDarkBrown-U9e6w {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.UserReviewsForm-textMediumBrown-133n_ {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.UserReviewsForm-textSkyBlue-ZjeD2 {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.UserReviewsForm-textGray-3yfb6 {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.UserReviewsForm-starSize-3hyvW {\n    font-size: 22px;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/UserReviewsForm/UserReviewsForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;CACC,gBAAgB;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;IACI,gBAAgB;CACnB","file":"UserReviewsForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.panelHeader{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.formGroup {\n  margin-bottom: 6px;\n}\n.select {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.labelText{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.starSize {\n    font-size: 22px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "UserReviewsForm-rentAllHeaderAdmin-JsU-g",
	"adminLayout": "UserReviewsForm-adminLayout-1DmcU",
	"box": "UserReviewsForm-box-2Mp2C",
	"exportLink": "UserReviewsForm-exportLink-1AE42",
	"blockcenter": "UserReviewsForm-blockcenter-2K5sc",
	"panelHeader": "UserReviewsForm-panelHeader-2Tytf",
	"currencyselect": "UserReviewsForm-currencyselect-2ia5j",
	"mar0": "UserReviewsForm-mar0-3u-hI",
	"navbar": "UserReviewsForm-navbar-2lfpH",
	"container": "UserReviewsForm-container-PeAWR",
	"navbar-brand": "UserReviewsForm-navbar-brand-km-FP",
	"container-fluid": "UserReviewsForm-container-fluid-32IOq",
	"pagecontentWrapper": "UserReviewsForm-pagecontentWrapper-Po8Pm",
	"headerTitle": "UserReviewsForm-headerTitle-3QOkS",
	"table": "UserReviewsForm-table-30UmP",
	"tableRow": "UserReviewsForm-tableRow-1a06j",
	"tableCell": "UserReviewsForm-tableCell-1GCqd",
	"formGroup": "UserReviewsForm-formGroup-1fcH6",
	"select": "UserReviewsForm-select-_74Lv",
	"noMargin": "UserReviewsForm-noMargin-n9j4u",
	"labelTextNew": "UserReviewsForm-labelTextNew-22CRw",
	"displayInline": "UserReviewsForm-displayInline-AoNm4",
	"btnUPdate": "UserReviewsForm-btnUPdate-przwl",
	"btnModalDelete": "UserReviewsForm-btnModalDelete-8tP4S",
	"radioBtn": "UserReviewsForm-radioBtn-1-J33",
	"btnWidth": "UserReviewsForm-btnWidth-3fFW_",
	"bannerImageBg": "UserReviewsForm-bannerImageBg-3yhYO",
	"bannerDelete": "UserReviewsForm-bannerDelete-noIdU",
	"modalRoot": "UserReviewsForm-modalRoot-2VMGa",
	"modalBorderBottom": "UserReviewsForm-modalBorderBottom-3RCYq",
	"logInModalBody": "UserReviewsForm-logInModalBody-1ChrF",
	"exportSection": "UserReviewsForm-exportSection-o5CVV",
	"exportSectionGridSub": "UserReviewsForm-exportSectionGridSub-20Cdv",
	"exportText": "UserReviewsForm-exportText-RiI7R",
	"exportLinkImg": "UserReviewsForm-exportLinkImg-1gg16",
	"vtrMiddle": "UserReviewsForm-vtrMiddle-256bt",
	"exportImg": "UserReviewsForm-exportImg-whqAU",
	"profileViewlabel": "UserReviewsForm-profileViewlabel-1SOvU",
	"profileViewMainContent": "UserReviewsForm-profileViewMainContent-3XcuS",
	"profileViewMain": "UserReviewsForm-profileViewMain-P_rUz",
	"profileViewInner": "UserReviewsForm-profileViewInner-1VFol",
	"profileImageSection": "UserReviewsForm-profileImageSection-23_4E",
	"lastviewInner": "UserReviewsForm-lastviewInner-1Uo2E",
	"ChangeToUpperCase": "UserReviewsForm-ChangeToUpperCase-3N5tr",
	"noBorder": "UserReviewsForm-noBorder-17Cbe",
	"errorMessage": "UserReviewsForm-errorMessage-2lFdA",
	"labelText": "UserReviewsForm-labelText-2jr6S",
	"space1": "UserReviewsForm-space1-3gRHC",
	"space2": "UserReviewsForm-space2-o7WTz",
	"space3": "UserReviewsForm-space3-3GnyP",
	"space4": "UserReviewsForm-space4-Fqmm9",
	"space5": "UserReviewsForm-space5-1gxVr",
	"space6": "UserReviewsForm-space6-2B7ww",
	"space7": "UserReviewsForm-space7-38IKK",
	"spaceTop8": "UserReviewsForm-spaceTop8-d1vy8",
	"spaceTop1": "UserReviewsForm-spaceTop1-AhuVR",
	"spaceTop2": "UserReviewsForm-spaceTop2-1J9gs",
	"spaceTop3": "UserReviewsForm-spaceTop3-2VrDC",
	"spaceTop4": "UserReviewsForm-spaceTop4-3FxZI",
	"spaceTop5": "UserReviewsForm-spaceTop5-37Qha",
	"spaceTop6": "UserReviewsForm-spaceTop6-3bvGh",
	"spaceTop7": "UserReviewsForm-spaceTop7-1GKWx",
	"padding1": "UserReviewsForm-padding1-1zXlw",
	"padding2": "UserReviewsForm-padding2-2RUPs",
	"padding3": "UserReviewsForm-padding3-39pWB",
	"padding4": "UserReviewsForm-padding4-3kJ4-",
	"padding5": "UserReviewsForm-padding5-3mlaW",
	"padding6": "UserReviewsForm-padding6-3C4dF",
	"padding7": "UserReviewsForm-padding7-39IQX",
	"paddingTop1": "UserReviewsForm-paddingTop1-1jhBJ",
	"paddingTop2": "UserReviewsForm-paddingTop2-Am_zI",
	"paddingTop3": "UserReviewsForm-paddingTop3-1mOTN",
	"paddingTop4": "UserReviewsForm-paddingTop4-2pzAS",
	"paddingTop5": "UserReviewsForm-paddingTop5-35VEO",
	"paddingTop6": "UserReviewsForm-paddingTop6-2mssW",
	"paddingTop7": "UserReviewsForm-paddingTop7-1DTpB",
	"noPadding": "UserReviewsForm-noPadding-12Ymv",
	"textBold": "UserReviewsForm-textBold-3BlSi",
	"textBolder": "UserReviewsForm-textBolder-39k0T",
	"textNormal": "UserReviewsForm-textNormal-PYd8k",
	"textDarkBlue": "UserReviewsForm-textDarkBlue-1woeW",
	"textLightBlue": "UserReviewsForm-textLightBlue-zeaIn",
	"textLightSandleGreen": "UserReviewsForm-textLightSandleGreen-3Qtjt",
	"textLightBrown": "UserReviewsForm-textLightBrown-8p_ug",
	"textMediumMaroon": "UserReviewsForm-textMediumMaroon-21UP-",
	"textBrown": "UserReviewsForm-textBrown-33Mrd",
	"textMaroon": "UserReviewsForm-textMaroon-2tRIT",
	"textDarkBrown": "UserReviewsForm-textDarkBrown-U9e6w",
	"textMediumBrown": "UserReviewsForm-textMediumBrown-133n_",
	"textSkyBlue": "UserReviewsForm-textSkyBlue-ZjeD2",
	"textGray": "UserReviewsForm-textGray-3yfb6",
	"starSize": "UserReviewsForm-starSize-3hyvW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/userEditReviews/UserEditReviews.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserEditReviews.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/components/siteadmin/AdminStarRating/AdminStarRating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_star_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-star-rating-component");
/* harmony import */ var react_star_rating_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_star_rating_component__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminStarRating/AdminStarRating.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AdminStarRating extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    const {
      change
    } = this.props;
    this.setState({
      rating: nextValue
    });
    change(nextValue);
  }

  render() {
    const {
      rating
    } = this.state;
    const {
      className,
      name,
      editing,
      value
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_star_rating_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
      name: name,
      starCount: 5,
      editing: editing,
      value: value,
      starColor: `#073687`,
      emptyStarColor: `#767676`,
      onStarClick: this.onStarClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }));
  }

}

_defineProperty(AdminStarRating, "propTypes", {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  change: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  editing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});

_defineProperty(AdminStarRating, "defaultProps", {
  editing: true,
  value: 0
});

/* harmony default export */ __webpack_exports__["default"] = (AdminStarRating);

/***/ }),

/***/ "./src/components/siteadmin/UserReviewsForm/UserReviewsForm.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/UserReviewsForm/UserReviewsForm.css");
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

/***/ "./src/components/siteadmin/UserReviewsForm/UserReviewsForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/siteadmin/UserReviewsForm/validate.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/siteadmin/UserReviewsForm/UserReviewsForm.css");
/* harmony import */ var _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _AdminStarRating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/siteadmin/AdminStarRating/AdminStarRating.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _WriteUserReviewMutation_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/components/siteadmin/UserReviewsForm/WriteUserReviewMutation.graphql");
/* harmony import */ var _WriteUserReviewMutation_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_WriteUserReviewMutation_graphql__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/UserReviewsForm/UserReviewsForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Redux



 // Style





 // Translation


 // Component


 // Redirection


 // GraphQL



class UserReviewsForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
      className,
      placeholder
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 3,
        md: 3,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 9,
        md: 9,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        type: type,
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 46
        }
      }, formatMessage(error)))));
    });

    _defineProperty(this, "renderFormControlTextArea", ({
      input,
      label,
      meta: {
        touched,
        error
      },
      className,
      children
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 3,
        md: 3,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 9,
        md: 9,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 46
        }
      }, formatMessage(error)))));
    });

    _defineProperty(this, "renderStarRating", ({
      input,
      label,
      meta: {
        touched,
        error
      },
      className,
      children
    }, value) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 3,
        md: 3,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 9,
        md: 9,
        lg: 9,
        className: "floatLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.starSize,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminStarRating__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: input.name,
        change: input.onChange,
        value: input.value,
        editing: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 29
        }
      }), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 50
        }
      }, formatMessage(error))))));
    });

    this.submitForm = this.submitForm.bind(this);
  }

  async submitForm(values, dispatch) {
    const {
      mutate
    } = this.props;
    const {
      data
    } = await mutate({
      variables: values
    });

    if (data && data.writeUserReview) {
      if (data.writeUserReview.status === '200') {
        if (values.id) {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_13__["toastr"].success("Updated Successfully!", "User review details updated successfully!");
          _core_history__WEBPACK_IMPORTED_MODULE_14__["default"].push('/siteadmin/user-reviews');
        } else {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_13__["toastr"].success("Submitted Successfully!", "User review details submitted successfully!"); //dispatch(reset('UserReviewsForm'));
          //history.push('/siteadmin/user-reviews')
        }
      } else if (data.writeUserReview.status === '404') {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_13__["toastr"].error("Failed to update!", "List ID is not available!");
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_13__["toastr"].error("Failed to update!", "Your changes to admin review is failed!");
      }
    }
  }

  render() {
    const {
      formatMessage
    } = this.props.intl;
    const {
      error,
      handleSubmit,
      submitting,
      initialValues
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.pagecontentWrapper, 'pagecontentAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].managementReviews, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 51
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 12,
      md: 8,
      lg: 8,
      className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.blockcenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
      to: "/siteadmin/user-reviews",
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimaryBorder, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnLarge, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.noTextDecoration, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimaryLink),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].goBack, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.panelHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(this.submitForm),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 43
      }
    }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "reviewContent",
      component: this.renderFormControlTextArea,
      className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.textareaInput,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].reviewContentLabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "rating",
      component: this.renderStarRating,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].reviewRating),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      className: _UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnLarge),
      type: "submit",
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].submit, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 49
      }
    })))))))))));
  }

}

_defineProperty(UserReviewsForm, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

UserReviewsForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'UserReviewsForm',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_4__["default"]
})(UserReviewsForm);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_intl__WEBPACK_IMPORTED_MODULE_10__["injectIntl"], isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_UserReviewsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_WriteUserReviewMutation_graphql__WEBPACK_IMPORTED_MODULE_16___default.a))(UserReviewsForm));

/***/ }),

/***/ "./src/components/siteadmin/UserReviewsForm/WriteUserReviewMutation.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"writeUserReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewContent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rating"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"writeUserReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"listId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reviewContent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewContent"}}},{"kind":"Argument","name":{"kind":"Name","value":"rating"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rating"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":268}};

module.exports = doc;

/***/ }),

/***/ "./src/components/siteadmin/UserReviewsForm/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {}; // if (!values.listId) {
  //     errors.listId = 'Provide list ID';
  // } else if (isNaN(values.listId)) {
  //     errors.listId = 'Only numeric values are allowed';
  // }

  if (!values.reviewContent) {
    errors.reviewContent = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].reviewError1;
  }

  if (!values.rating) {
    errors.rating = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].reviewError2;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/routes/siteadmin/userEditReviews/UserEditReviews.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/userEditReviews/UserEditReviews.css");
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

/***/ "./src/routes/siteadmin/userEditReviews/UserEditReviews.js":
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
/* harmony import */ var _UserEditReviews_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/userEditReviews/UserEditReviews.css");
/* harmony import */ var _UserEditReviews_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UserEditReviews_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_siteadmin_UserReviewsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/UserReviewsForm/UserReviewsForm.js");
/* harmony import */ var _editUserReview_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/routes/siteadmin/userEditReviews/editUserReview.graphql");
/* harmony import */ var _editUserReview_graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editUserReview_graphql__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/userEditReviews/UserEditReviews.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style


 // Component

 // Query



class UserEditReviews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data: {
        loading,
        editUserReviews
      },
      title,
      reviewId
    } = this.props;

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, " Loading... ");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_UserReviewsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: title,
        initialValues: editUserReviews,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      });
    }
  }

}

_defineProperty(UserEditReviews, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  reviewId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
});

_defineProperty(UserEditReviews, "defaultProps", {
  data: {
    loading: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_UserEditReviews_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_editUserReview_graphql__WEBPACK_IMPORTED_MODULE_6___default.a, {
  options: props => ({
    variables: {
      reviewId: props.reviewId
    },
    fetchPolicy: 'network-only'
  })
}))(UserEditReviews));

/***/ }),

/***/ "./src/routes/siteadmin/userEditReviews/editUserReview.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"editUserReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUserReviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reviewContent"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":156}};

module.exports = doc;

/***/ }),

/***/ "./src/routes/siteadmin/userEditReviews/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _UserEditReviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/userEditReviews/UserEditReviews.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/userEditReviews/index.js";



const title = 'Management Reviews';
async function action({
  store,
  params
}) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;

  if (!isAdminAuthenticated) {
    return {
      redirect: '/siteadmin/login'
    };
  }

  const reviewId = Number(params.reviewId);
  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserEditReviews__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      reviewId: reviewId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi11c2VyRWRpdFJldmlld3MuanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9Vc2VyUmV2aWV3c0Zvcm0vVXNlclJldmlld3NGb3JtLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3VzZXJFZGl0UmV2aWV3cy9Vc2VyRWRpdFJldmlld3MuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluU3RhclJhdGluZy9BZG1pblN0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1VzZXJSZXZpZXdzRm9ybS9Vc2VyUmV2aWV3c0Zvcm0uY3NzP2IzMDkiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vVXNlclJldmlld3NGb3JtL1VzZXJSZXZpZXdzRm9ybS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9Vc2VyUmV2aWV3c0Zvcm0vV3JpdGVVc2VyUmV2aWV3TXV0YXRpb24uZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9Vc2VyUmV2aWV3c0Zvcm0vdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaXRlYWRtaW4vdXNlckVkaXRSZXZpZXdzL1VzZXJFZGl0UmV2aWV3cy5jc3M/M2E4ZSIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3VzZXJFZGl0UmV2aWV3cy9Vc2VyRWRpdFJldmlld3MuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi91c2VyRWRpdFJldmlld3MvZWRpdFVzZXJSZXZpZXcuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3VzZXJFZGl0UmV2aWV3cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1yZW50QWxsSGVhZGVyQWRtaW4tSnNVLWcge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tYWRtaW5MYXlvdXQtMURtY1Uge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1ib3gtMk1wMkMgaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1leHBvcnRMaW5rLTFBRTQyIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLWJsb2NrY2VudGVyLTJLNXNjIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tcGFuZWxIZWFkZXItMlR5dGYge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1jdXJyZW5jeXNlbGVjdC0yaWE1aiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhbmVsSGVhZGVyLTJUeXRmIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tbWFyMC0zdS1oSSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1uYXZiYXItMmxmcEggPiAuVXNlclJldmlld3NGb3JtLWNvbnRhaW5lci1QZUFXUiAuVXNlclJldmlld3NGb3JtLW5hdmJhci1icmFuZC1rbS1GUCxcXG4uVXNlclJldmlld3NGb3JtLW5hdmJhci0ybGZwSCA+IC5Vc2VyUmV2aWV3c0Zvcm0tY29udGFpbmVyLWZsdWlkLTMySU9xIC5Vc2VyUmV2aWV3c0Zvcm0tbmF2YmFyLWJyYW5kLWttLUZQIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLlVzZXJSZXZpZXdzRm9ybS1ibG9ja2NlbnRlci0ySzVzYyB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5Vc2VyUmV2aWV3c0Zvcm0tcGFuZWxIZWFkZXItMlR5dGYge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLlVzZXJSZXZpZXdzRm9ybS1wYWdlY29udGVudFdyYXBwZXItUG84UG0ge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0taGVhZGVyVGl0bGUtM1FPa1Mge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYW5lbEhlYWRlci0yVHl0ZiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGFibGUtMzBVbVAge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXRhYmxlUm93LTFhMDZqIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGFibGVDZWxsLTFHQ3FkIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uVXNlclJldmlld3NGb3JtLWZvcm1Hcm91cC0xZmNINiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNlbGVjdC1fNzRMdiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLW5vTWFyZ2luLW45ajR1IHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tZXhwb3J0TGluay0xQUU0MiB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1sYWJlbFRleHROZXctMjJDUncge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1kaXNwbGF5SW5saW5lLUFvTm00IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLlVzZXJSZXZpZXdzRm9ybS1idG5VUGRhdGUtcHJ6d2wge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1idG5Nb2RhbERlbGV0ZS04dFA0UyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXJhZGlvQnRuLTEtSjMzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVXNlclJldmlld3NGb3JtLWJ0blVQZGF0ZS1wcnp3bCB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LlVzZXJSZXZpZXdzRm9ybS1idG5Nb2RhbERlbGV0ZS04dFA0UyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LlVzZXJSZXZpZXdzRm9ybS1idG5XaWR0aC0zZkZXXyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLlVzZXJSZXZpZXdzRm9ybS1iYW5uZXJJbWFnZUJnLTN5aFlPIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLWJhbm5lckRlbGV0ZS1ub0lkVSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLlVzZXJSZXZpZXdzRm9ybS1tb2RhbFJvb3QtMlZNR2Ege1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tbW9kYWxCb3JkZXJCb3R0b20tM1JDWXEge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tbG9nSW5Nb2RhbEJvZHktMUNockYge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uVXNlclJldmlld3NGb3JtLWV4cG9ydFNlY3Rpb24tbzVDVlYge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItMjBDZHYge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLWV4cG9ydFRleHQtUmlJN1Ige1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1leHBvcnRMaW5rSW1nLTFnZzE2IHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXZ0ck1pZGRsZS0yNTZidCB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1leHBvcnRJbWctd2hxQVUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXByb2ZpbGVWaWV3bGFiZWwtMVNPdlUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0zWGN1UyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tcHJvZmlsZVZpZXdNYWluLVBfclV6IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wcm9maWxlVmlld0lubmVyLTFWRm9sIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXByb2ZpbGVJbWFnZVNlY3Rpb24tMjNfNEUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1sYXN0dmlld0lubmVyLTFVbzJFIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuVXNlclJldmlld3NGb3JtLXBhZ2Vjb250ZW50V3JhcHBlci1QbzhQbSB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LlVzZXJSZXZpZXdzRm9ybS1leHBvcnRTZWN0aW9uLW81Q1ZWIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5Vc2VyUmV2aWV3c0Zvcm0tZXhwb3J0VGV4dC1SaUk3UiB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LlVzZXJSZXZpZXdzRm9ybS1leHBvcnRTZWN0aW9uR3JpZFN1Yi0yMENkdiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5Vc2VyUmV2aWV3c0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0xU092VSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LlVzZXJSZXZpZXdzRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LTNYY3VTIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVXNlclJldmlld3NGb3JtLXBhZ2Vjb250ZW50V3JhcHBlci1QbzhQbSB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uVXNlclJldmlld3NGb3JtLUNoYW5nZVRvVXBwZXJDYXNlLTNONXRye1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tbm9Cb3JkZXItMTdDYmUge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uVXNlclJldmlld3NGb3JtLWVycm9yTWVzc2FnZS0ybEZkQSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYW5lbEhlYWRlci0yVHl0ZntcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1mb3JtR3JvdXAtMWZjSDYge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNlbGVjdC1fNzRMdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tbGFiZWxUZXh0LTJqcjZTe1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzY3Njc2O1xcbiAgbWFyZ2luOiA2cHggMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1zcGFjZTEtM2dSSEMge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlMi1vN1dUeiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlMy0zR255UCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlNC1GcW1tOSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlNS0xZ3hWciB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlNi0yQjd3dyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlNy0zOElLSyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlVG9wOC1kMXZ5OCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXNwYWNlVG9wMS1BaHVWUiB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3AyLTFKOWdzIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3AzLTJWckRDIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A0LTNGeFpJIHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A1LTM3UWhhIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A2LTNidkdoIHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A3LTFHS1d4IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A4LWQxdnk4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tbm9NYXJnaW4tbjlqNHUge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tcGFkZGluZzEtMXpYbHcge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nMi0yUlVQcyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nMy0zOXBXQiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nNC0za0o0LSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nNS0zbWxhVyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nNi0zQzRkRiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nNy0zOUlRWCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nVG9wMS0xamhCSiB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3AyLUFtX3pJIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3AzLTFtT1ROIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3A0LTJwekFTIHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3A1LTM1VkVPIHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3A2LTJtc3NXIHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3A3LTFEVHBCIHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLW5vUGFkZGluZy0xMlltdiB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGV4dEJvbGQtM0JsU2kge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS10ZXh0Qm9sZGVyLTM5azBUIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGV4dE5vcm1hbC1QWWQ4ayB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4uVXNlclJldmlld3NGb3JtLXRleHREYXJrQmx1ZS0xd29lVyB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXRleHRMaWdodEJsdWUtemVhSW4ge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGV4dExpZ2h0U2FuZGxlR3JlZW4tM1F0anQge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS10ZXh0TGlnaHRCcm93bi04cF91ZyB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS10ZXh0TWVkaXVtTWFyb29uLTIxVVAtIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGV4dEJyb3duLTMzTXJkIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXRleHRNYXJvb24tMnRSSVQge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGV4dERhcmtCcm93bi1VOWU2dyB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uVXNlclJldmlld3NGb3JtLXRleHRNZWRpdW1Ccm93bi0xMzNuXyB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS10ZXh0U2t5Qmx1ZS1aamVEMiB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5Vc2VyUmV2aWV3c0Zvcm0tdGV4dEdyYXktM3lmYjYge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLlVzZXJSZXZpZXdzRm9ybS1zdGFyU2l6ZS0zaHl2VyB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9Vc2VyUmV2aWV3c0Zvcm0vVXNlclJldmlld3NGb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7QUFDRDs7RUFFRSw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFO0lBQ0UsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNELDhCQUE4QjtBQUM5QjtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1o7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDs7Q0FFQyxnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLHNCQUFzQjtDQUN0QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDO0VBQ0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQjtDQUNEO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjtDQUNEO0VBQ0MsWUFBWTtFQUNaO0NBQ0Q7QUFDRCx1RUFBdUU7QUFDdkUsdUVBQXVFO0FBQ3ZFO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxZQUFZO0NBQ1o7QUFDRCw2REFBNkQ7QUFDN0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDLGlDQUFpQztDQUNqQywrQ0FBK0M7Q0FDL0MsK0JBQStCO0NBQy9CLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsYUFBYTtDQUNiO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsbUNBQW1DO0NBQ25DLDBCQUEwQjtLQUN0Qix1QkFBdUI7U0FDbkIsb0JBQW9CO0NBQzVCLGVBQWU7Q0FDZiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLDBDQUEwQztDQUMxQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixVQUFVO0NBQ1Y7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1g7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGNBQWM7Q0FDZCxpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0M7RUFDQyxvQkFBb0I7UUFDZCxjQUFjO1FBQ2QsZUFBZTtFQUNyQjtDQUNEO0FBQ0Q7Q0FDQztFQUNDLDRCQUE0QjtFQUM1QjtDQUNEO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjtDQUNEO0VBQ0MsdUNBQXVDO0VBQ3ZDO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7Q0FDRDtBQUNELHFFQUFxRTtBQUNyRTtDQUNDO0VBQ0MsZUFBZTtFQUNmO0NBQ0Q7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0QsNEJBQTRCO0FBQzVCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4QjtBQUNEO0NBQ0MsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyx3QkFBd0I7Q0FDeEI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRCwyQkFBMkI7QUFDM0I7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxvQ0FBb0M7Q0FDcEM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CXCIsXCJmaWxlXCI6XCJVc2VyUmV2aWV3c0Zvcm0uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5yZW50QWxsSGVhZGVyQWRtaW4ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbkxheW91dCB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uYm94IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5leHBvcnRMaW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uYmxvY2tjZW50ZXIge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5jdXJyZW5jeXNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1hcjAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5uYXZiYXIgPiAuY29udGFpbmVyIC5uYXZiYXItYnJhbmQsXFxuLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5ibG9ja2NlbnRlciB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5wYW5lbEhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4ucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLnRhYmxlIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnRhYmxlUm93IHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi50YWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5mb3JtR3JvdXAge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnNlbGVjdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cG9ydExpbmsge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5sYWJlbFRleHROZXcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLmRpc3BsYXlJbmxpbmUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uYnRuVVBkYXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4ucmFkaW9CdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5idG5VUGRhdGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LmJ0bldpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uYmFubmVySW1hZ2VCZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmJhbm5lckRlbGV0ZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLm1vZGFsUm9vdCB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLm1vZGFsQm9yZGVyQm90dG9tIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4ubG9nSW5Nb2RhbEJvZHkge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXhwb3J0U2VjdGlvbiB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLmV4cG9ydFRleHQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLmV4cG9ydExpbmtJbWcge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi52dHJNaWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5leHBvcnRJbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4ucHJvZmlsZVZpZXdNYWluIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnByb2ZpbGVWaWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5wcm9maWxlSW1hZ2VTZWN0aW9uIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sYXN0dmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuZXhwb3J0U2VjdGlvbiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuZXhwb3J0VGV4dCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5DaGFuZ2VUb1VwcGVyQ2FzZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uZXJyb3JNZXNzYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucGFuZWxIZWFkZXJ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5mb3JtR3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmxhYmVsVGV4dHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIG1hcmdpbjogNnB4IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnN0YXJTaXplIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicmVudEFsbEhlYWRlckFkbWluXCI6IFwiVXNlclJldmlld3NGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi1Kc1UtZ1wiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiVXNlclJldmlld3NGb3JtLWFkbWluTGF5b3V0LTFEbWNVXCIsXG5cdFwiYm94XCI6IFwiVXNlclJldmlld3NGb3JtLWJveC0yTXAyQ1wiLFxuXHRcImV4cG9ydExpbmtcIjogXCJVc2VyUmV2aWV3c0Zvcm0tZXhwb3J0TGluay0xQUU0MlwiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiVXNlclJldmlld3NGb3JtLWJsb2NrY2VudGVyLTJLNXNjXCIsXG5cdFwicGFuZWxIZWFkZXJcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFuZWxIZWFkZXItMlR5dGZcIixcblx0XCJjdXJyZW5jeXNlbGVjdFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1jdXJyZW5jeXNlbGVjdC0yaWE1alwiLFxuXHRcIm1hcjBcIjogXCJVc2VyUmV2aWV3c0Zvcm0tbWFyMC0zdS1oSVwiLFxuXHRcIm5hdmJhclwiOiBcIlVzZXJSZXZpZXdzRm9ybS1uYXZiYXItMmxmcEhcIixcblx0XCJjb250YWluZXJcIjogXCJVc2VyUmV2aWV3c0Zvcm0tY29udGFpbmVyLVBlQVdSXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiVXNlclJldmlld3NGb3JtLW5hdmJhci1icmFuZC1rbS1GUFwiLFxuXHRcImNvbnRhaW5lci1mbHVpZFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1jb250YWluZXItZmx1aWQtMzJJT3FcIixcblx0XCJwYWdlY29udGVudFdyYXBwZXJcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLVBvOFBtXCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJVc2VyUmV2aWV3c0Zvcm0taGVhZGVyVGl0bGUtM1FPa1NcIixcblx0XCJ0YWJsZVwiOiBcIlVzZXJSZXZpZXdzRm9ybS10YWJsZS0zMFVtUFwiLFxuXHRcInRhYmxlUm93XCI6IFwiVXNlclJldmlld3NGb3JtLXRhYmxlUm93LTFhMDZqXCIsXG5cdFwidGFibGVDZWxsXCI6IFwiVXNlclJldmlld3NGb3JtLXRhYmxlQ2VsbC0xR0NxZFwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1mb3JtR3JvdXAtMWZjSDZcIixcblx0XCJzZWxlY3RcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc2VsZWN0LV83NEx2XCIsXG5cdFwibm9NYXJnaW5cIjogXCJVc2VyUmV2aWV3c0Zvcm0tbm9NYXJnaW4tbjlqNHVcIixcblx0XCJsYWJlbFRleHROZXdcIjogXCJVc2VyUmV2aWV3c0Zvcm0tbGFiZWxUZXh0TmV3LTIyQ1J3XCIsXG5cdFwiZGlzcGxheUlubGluZVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1kaXNwbGF5SW5saW5lLUFvTm00XCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiVXNlclJldmlld3NGb3JtLWJ0blVQZGF0ZS1wcnp3bFwiLFxuXHRcImJ0bk1vZGFsRGVsZXRlXCI6IFwiVXNlclJldmlld3NGb3JtLWJ0bk1vZGFsRGVsZXRlLTh0UDRTXCIsXG5cdFwicmFkaW9CdG5cIjogXCJVc2VyUmV2aWV3c0Zvcm0tcmFkaW9CdG4tMS1KMzNcIixcblx0XCJidG5XaWR0aFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1idG5XaWR0aC0zZkZXX1wiLFxuXHRcImJhbm5lckltYWdlQmdcIjogXCJVc2VyUmV2aWV3c0Zvcm0tYmFubmVySW1hZ2VCZy0zeWhZT1wiLFxuXHRcImJhbm5lckRlbGV0ZVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1iYW5uZXJEZWxldGUtbm9JZFVcIixcblx0XCJtb2RhbFJvb3RcIjogXCJVc2VyUmV2aWV3c0Zvcm0tbW9kYWxSb290LTJWTUdhXCIsXG5cdFwibW9kYWxCb3JkZXJCb3R0b21cIjogXCJVc2VyUmV2aWV3c0Zvcm0tbW9kYWxCb3JkZXJCb3R0b20tM1JDWXFcIixcblx0XCJsb2dJbk1vZGFsQm9keVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1sb2dJbk1vZGFsQm9keS0xQ2hyRlwiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJVc2VyUmV2aWV3c0Zvcm0tZXhwb3J0U2VjdGlvbi1vNUNWVlwiLFxuXHRcImV4cG9ydFNlY3Rpb25HcmlkU3ViXCI6IFwiVXNlclJldmlld3NGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTIwQ2R2XCIsXG5cdFwiZXhwb3J0VGV4dFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1leHBvcnRUZXh0LVJpSTdSXCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIlVzZXJSZXZpZXdzRm9ybS1leHBvcnRMaW5rSW1nLTFnZzE2XCIsXG5cdFwidnRyTWlkZGxlXCI6IFwiVXNlclJldmlld3NGb3JtLXZ0ck1pZGRsZS0yNTZidFwiLFxuXHRcImV4cG9ydEltZ1wiOiBcIlVzZXJSZXZpZXdzRm9ybS1leHBvcnRJbWctd2hxQVVcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiVXNlclJldmlld3NGb3JtLXByb2ZpbGVWaWV3bGFiZWwtMVNPdlVcIixcblx0XCJwcm9maWxlVmlld01haW5Db250ZW50XCI6IFwiVXNlclJldmlld3NGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtM1hjdVNcIixcblx0XCJwcm9maWxlVmlld01haW5cIjogXCJVc2VyUmV2aWV3c0Zvcm0tcHJvZmlsZVZpZXdNYWluLVBfclV6XCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIlVzZXJSZXZpZXdzRm9ybS1wcm9maWxlVmlld0lubmVyLTFWRm9sXCIsXG5cdFwicHJvZmlsZUltYWdlU2VjdGlvblwiOiBcIlVzZXJSZXZpZXdzRm9ybS1wcm9maWxlSW1hZ2VTZWN0aW9uLTIzXzRFXCIsXG5cdFwibGFzdHZpZXdJbm5lclwiOiBcIlVzZXJSZXZpZXdzRm9ybS1sYXN0dmlld0lubmVyLTFVbzJFXCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJVc2VyUmV2aWV3c0Zvcm0tQ2hhbmdlVG9VcHBlckNhc2UtM041dHJcIixcblx0XCJub0JvcmRlclwiOiBcIlVzZXJSZXZpZXdzRm9ybS1ub0JvcmRlci0xN0NiZVwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1lcnJvck1lc3NhZ2UtMmxGZEFcIixcblx0XCJsYWJlbFRleHRcIjogXCJVc2VyUmV2aWV3c0Zvcm0tbGFiZWxUZXh0LTJqcjZTXCIsXG5cdFwic3BhY2UxXCI6IFwiVXNlclJldmlld3NGb3JtLXNwYWNlMS0zZ1JIQ1wiLFxuXHRcInNwYWNlMlwiOiBcIlVzZXJSZXZpZXdzRm9ybS1zcGFjZTItbzdXVHpcIixcblx0XCJzcGFjZTNcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc3BhY2UzLTNHbnlQXCIsXG5cdFwic3BhY2U0XCI6IFwiVXNlclJldmlld3NGb3JtLXNwYWNlNC1GcW1tOVwiLFxuXHRcInNwYWNlNVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1zcGFjZTUtMWd4VnJcIixcblx0XCJzcGFjZTZcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc3BhY2U2LTJCN3d3XCIsXG5cdFwic3BhY2U3XCI6IFwiVXNlclJldmlld3NGb3JtLXNwYWNlNy0zOElLS1wiLFxuXHRcInNwYWNlVG9wOFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1zcGFjZVRvcDgtZDF2eThcIixcblx0XCJzcGFjZVRvcDFcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3AxLUFodVZSXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiVXNlclJldmlld3NGb3JtLXNwYWNlVG9wMi0xSjlnc1wiLFxuXHRcInNwYWNlVG9wM1wiOiBcIlVzZXJSZXZpZXdzRm9ybS1zcGFjZVRvcDMtMlZyRENcIixcblx0XCJzcGFjZVRvcDRcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A0LTNGeFpJXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiVXNlclJldmlld3NGb3JtLXNwYWNlVG9wNS0zN1FoYVwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIlVzZXJSZXZpZXdzRm9ybS1zcGFjZVRvcDYtM2J2R2hcIixcblx0XCJzcGFjZVRvcDdcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc3BhY2VUb3A3LTFHS1d4XCIsXG5cdFwicGFkZGluZzFcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFkZGluZzEtMXpYbHdcIixcblx0XCJwYWRkaW5nMlwiOiBcIlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nMi0yUlVQc1wiLFxuXHRcInBhZGRpbmczXCI6IFwiVXNlclJldmlld3NGb3JtLXBhZGRpbmczLTM5cFdCXCIsXG5cdFwicGFkZGluZzRcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFkZGluZzQtM2tKNC1cIixcblx0XCJwYWRkaW5nNVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nNS0zbWxhV1wiLFxuXHRcInBhZGRpbmc2XCI6IFwiVXNlclJldmlld3NGb3JtLXBhZGRpbmc2LTNDNGRGXCIsXG5cdFwicGFkZGluZzdcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFkZGluZzctMzlJUVhcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nVG9wMS0xamhCSlwiLFxuXHRcInBhZGRpbmdUb3AyXCI6IFwiVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3AyLUFtX3pJXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFkZGluZ1RvcDMtMW1PVE5cIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nVG9wNC0ycHpBU1wiLFxuXHRcInBhZGRpbmdUb3A1XCI6IFwiVXNlclJldmlld3NGb3JtLXBhZGRpbmdUb3A1LTM1VkVPXCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJVc2VyUmV2aWV3c0Zvcm0tcGFkZGluZ1RvcDYtMm1zc1dcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIlVzZXJSZXZpZXdzRm9ybS1wYWRkaW5nVG9wNy0xRFRwQlwiLFxuXHRcIm5vUGFkZGluZ1wiOiBcIlVzZXJSZXZpZXdzRm9ybS1ub1BhZGRpbmctMTJZbXZcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIlVzZXJSZXZpZXdzRm9ybS10ZXh0Qm9sZC0zQmxTaVwiLFxuXHRcInRleHRCb2xkZXJcIjogXCJVc2VyUmV2aWV3c0Zvcm0tdGV4dEJvbGRlci0zOWswVFwiLFxuXHRcInRleHROb3JtYWxcIjogXCJVc2VyUmV2aWV3c0Zvcm0tdGV4dE5vcm1hbC1QWWQ4a1wiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIlVzZXJSZXZpZXdzRm9ybS10ZXh0RGFya0JsdWUtMXdvZVdcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiVXNlclJldmlld3NGb3JtLXRleHRMaWdodEJsdWUtemVhSW5cIixcblx0XCJ0ZXh0TGlnaHRTYW5kbGVHcmVlblwiOiBcIlVzZXJSZXZpZXdzRm9ybS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0zUXRqdFwiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiVXNlclJldmlld3NGb3JtLXRleHRMaWdodEJyb3duLThwX3VnXCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIlVzZXJSZXZpZXdzRm9ybS10ZXh0TWVkaXVtTWFyb29uLTIxVVAtXCIsXG5cdFwidGV4dEJyb3duXCI6IFwiVXNlclJldmlld3NGb3JtLXRleHRCcm93bi0zM01yZFwiLFxuXHRcInRleHRNYXJvb25cIjogXCJVc2VyUmV2aWV3c0Zvcm0tdGV4dE1hcm9vbi0ydFJJVFwiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJVc2VyUmV2aWV3c0Zvcm0tdGV4dERhcmtCcm93bi1VOWU2d1wiLFxuXHRcInRleHRNZWRpdW1Ccm93blwiOiBcIlVzZXJSZXZpZXdzRm9ybS10ZXh0TWVkaXVtQnJvd24tMTMzbl9cIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIlVzZXJSZXZpZXdzRm9ybS10ZXh0U2t5Qmx1ZS1aamVEMlwiLFxuXHRcInRleHRHcmF5XCI6IFwiVXNlclJldmlld3NGb3JtLXRleHRHcmF5LTN5ZmI2XCIsXG5cdFwic3RhclNpemVcIjogXCJVc2VyUmV2aWV3c0Zvcm0tc3RhclNpemUtM2h5dldcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlVzZXJFZGl0UmV2aWV3cy5jc3NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFN0YXJSYXRpbmdDb21wb25lbnQgZnJvbSAncmVhY3Qtc3Rhci1yYXRpbmctY29tcG9uZW50JztcblxuY2xhc3MgQWRtaW5TdGFyUmF0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hhbmdlOiBQcm9wVHlwZXMuYW55LFxuICAgIGVkaXRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlZGl0aW5nOiB0cnVlLFxuICAgIHZhbHVlOiAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJhdGluZzogMFxuICAgIH1cbiAgICB0aGlzLm9uU3RhckNsaWNrID0gdGhpcy5vblN0YXJDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25TdGFyQ2xpY2sobmV4dFZhbHVlLCBwcmV2VmFsdWUsIG5hbWUpIHtcbiAgICBjb25zdCB7IGNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgcmF0aW5nOiBuZXh0VmFsdWUgfSk7XG4gICAgY2hhbmdlKG5leHRWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByYXRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIG5hbWUsIGVkaXRpbmcsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPFN0YXJSYXRpbmdDb21wb25lbnRcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHN0YXJDb3VudD17NX1cbiAgICAgICAgICBlZGl0aW5nPXtlZGl0aW5nfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBzdGFyQ29sb3I9e2AjMDczNjg3YH1cbiAgICAgICAgICBlbXB0eVN0YXJDb2xvcj17YCM3Njc2NzZgfVxuICAgICAgICAgIG9uU3RhckNsaWNrPXt0aGlzLm9uU3RhckNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pblN0YXJSYXRpbmc7XG5cblxuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Vc2VyUmV2aWV3c0Zvcm0uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1VzZXJSZXZpZXdzRm9ybS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Vc2VyUmV2aWV3c0Zvcm0uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0sIHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbi8vIFN0eWxlXG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBGb3JtR3JvdXAsXG4gICAgQ29sLFxuICAgIEZvcm1Db250cm9sLFxuICAgIFBhbmVsLFxuICAgIFJvd1xufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Vc2VyUmV2aWV3c0Zvcm0uY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5cbi8vIFRyYW5zbGF0aW9uXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgQWRtaW5TdGFyUmF0aW5nIGZyb20gJy4uL0FkbWluU3RhclJhdGluZyc7XG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBSZWRpcmVjdGlvblxuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vLi4vY29yZS9oaXN0b3J5JztcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnO1xuXG5cbi8vIEdyYXBoUUxcbmltcG9ydCBXcml0ZVVzZXJSZXZpZXdNdXRhdGlvbiBmcm9tICcuL1dyaXRlVXNlclJldmlld011dGF0aW9uLmdyYXBocWwnO1xuXG5jbGFzcyBVc2VyUmV2aWV3c0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5pdGlhbFZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXJGb3JtQ29udHJvbCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjbGFzc05hbWUsIHBsYWNlaG9sZGVyIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17M30gbWQ9ezN9IGxnPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fSA+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezl9IG1kPXs5fSBsZz17OX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZvcm1Db250cm9sVGV4dEFyZWEgPSAoeyBpbnB1dCwgbGFiZWwsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezN9IG1kPXszfSBsZz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs5fSBtZD17OX0gbGc9ezl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPXtcInRleHRhcmVhXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXJTdGFyUmF0aW5nID0gKHsgaW5wdXQsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSwgdmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXszfSBtZD17M30gbGc9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17OX0gbWQ9ezl9IGxnPXs5fSBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zdGFyU2l6ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkbWluU3RhclJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpbnB1dC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2lucHV0Lm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRpbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3MuZXJyb3JNZXNzYWdlfT57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGFzeW5jIHN1Ym1pdEZvcm0odmFsdWVzLCBkaXNwYXRjaCkge1xuICAgICAgICBjb25zdCB7IG11dGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBtdXRhdGUoeyB2YXJpYWJsZXM6IHZhbHVlcyB9KTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS53cml0ZVVzZXJSZXZpZXcpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLndyaXRlVXNlclJldmlldy5zdGF0dXMgPT09ICcyMDAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlVwZGF0ZWQgU3VjY2Vzc2Z1bGx5IVwiLCBcIlVzZXIgcmV2aWV3IGRldGFpbHMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9zaXRlYWRtaW4vdXNlci1yZXZpZXdzJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Ym1pdHRlZCBTdWNjZXNzZnVsbHkhXCIsIFwiVXNlciByZXZpZXcgZGV0YWlscyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy9kaXNwYXRjaChyZXNldCgnVXNlclJldmlld3NGb3JtJykpO1xuICAgICAgICAgICAgICAgICAgICAvL2hpc3RvcnkucHVzaCgnL3NpdGVhZG1pbi91c2VyLXJldmlld3MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS53cml0ZVVzZXJSZXZpZXcuc3RhdHVzID09PSAnNDA0Jykge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUhXCIsIFwiTGlzdCBJRCBpcyBub3QgYXZhaWxhYmxlIVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSFcIiwgXCJZb3VyIGNoYW5nZXMgdG8gYWRtaW4gcmV2aWV3IGlzIGZhaWxlZCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICAgICAgY29uc3QgeyBlcnJvciwgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCAgaW5pdGlhbFZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnBhZ2Vjb250ZW50V3JhcHBlciwgJ3BhZ2Vjb250ZW50QVInKX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17cy5oZWFkZXJUaXRsZX0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1hbmFnZW1lbnRSZXZpZXdzfSAvPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17OH0gbGc9ezh9IGNsYXNzTmFtZT17cy5ibG9ja2NlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnNwYWNlNCwgYnQudGV4dEFsaWduUmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL3NpdGVhZG1pbi91c2VyLXJldmlld3NcIn0gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5Qm9yZGVyLCBidC5idG5MYXJnZSwgYnQubm9UZXh0RGVjb3JhdGlvbiwgYnQuYnRuUHJpbWFyeUxpbmspfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZ29CYWNrfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e3MucGFuZWxIZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5zdWJtaXRGb3JtKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8c3Ryb25nPntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3N0cm9uZz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicmV2aWV3Q29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy50ZXh0YXJlYUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmV2aWV3Q29udGVudExhYmVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJyYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlclN0YXJSYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZXZpZXdSYXRpbmcpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChidC50ZXh0QWxpZ25SaWdodCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5LCBidC5idG5MYXJnZSl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnN1Ym1pdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuVXNlclJldmlld3NGb3JtID0gcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnVXNlclJldmlld3NGb3JtJywgLy8gYSB1bmlxdWUgbmFtZSBmb3IgdGhpcyBmb3JtXG4gICAgdmFsaWRhdGVcbn0pKFVzZXJSZXZpZXdzRm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoaW5qZWN0SW50bCxcbiAgICB3aXRoU3R5bGVzKHMsIGJ0KSxcbiAgICBncmFwaHFsKFdyaXRlVXNlclJldmlld011dGF0aW9uKVxuKShVc2VyUmV2aWV3c0Zvcm0pOyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJtdXRhdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3cml0ZVVzZXJSZXZpZXdcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19fSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmV2aWV3Q29udGVudFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX19LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyYXRpbmdcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkZsb2F0XCJ9fX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ3cml0ZVVzZXJSZXZpZXdcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX0se1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdElkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXZpZXdDb250ZW50XCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXZpZXdDb250ZW50XCJ9fX0se1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmF0aW5nXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyYXRpbmdcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI2OH19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYzsiLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuXG4gICAgY29uc3QgZXJyb3JzID0ge31cblxuICAgIC8vIGlmICghdmFsdWVzLmxpc3RJZCkge1xuICAgIC8vICAgICBlcnJvcnMubGlzdElkID0gJ1Byb3ZpZGUgbGlzdCBJRCc7XG4gICAgLy8gfSBlbHNlIGlmIChpc05hTih2YWx1ZXMubGlzdElkKSkge1xuICAgIC8vICAgICBlcnJvcnMubGlzdElkID0gJ09ubHkgbnVtZXJpYyB2YWx1ZXMgYXJlIGFsbG93ZWQnO1xuICAgIC8vIH1cblxuICAgIGlmICghdmFsdWVzLnJldmlld0NvbnRlbnQpIHtcbiAgICAgICAgZXJyb3JzLnJldmlld0NvbnRlbnQgPSBtZXNzYWdlcy5yZXZpZXdFcnJvcjE7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZXMucmF0aW5nKSB7XG4gICAgICAgIGVycm9ycy5yYXRpbmcgPSBtZXNzYWdlcy5yZXZpZXdFcnJvcjI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1VzZXJFZGl0UmV2aWV3cy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVXNlckVkaXRSZXZpZXdzLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1VzZXJFZGl0UmV2aWV3cy5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Vc2VyRWRpdFJldmlld3MuY3NzJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgVXNlclJldmlld3NGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2l0ZWFkbWluL1VzZXJSZXZpZXdzRm9ybSc7XG5cbi8vIFF1ZXJ5XG5pbXBvcnQgZWRpdEFkbWluUmV2aWV3c1F1ZXJ5IGZyb20gJy4vZWRpdFVzZXJSZXZpZXcuZ3JhcGhxbCc7XG5cbmNsYXNzIFVzZXJFZGl0UmV2aWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICByZXZpZXdJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBsb2FkaW5nLCBlZGl0VXNlclJldmlld3MgfSwgdGl0bGUsIHJldmlld0lkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PiBMb2FkaW5nLi4uIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFVzZXJSZXZpZXdzRm9ybSB0aXRsZT17dGl0bGV9IGluaXRpYWxWYWx1ZXM9e2VkaXRVc2VyUmV2aWV3c30gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBncmFwaHFsKGVkaXRBZG1pblJldmlld3NRdWVyeSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uczogKHByb3BzKSA9PiAoe1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICByZXZpZXdJZDogcHJvcHMucmV2aWV3SWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICApXG4pKFVzZXJFZGl0UmV2aWV3cyk7IiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVkaXRVc2VyUmV2aWV3c1wifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJldmlld0lkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVkaXRVc2VyUmV2aWV3c1wifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXZpZXdJZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmV2aWV3SWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJldmlld0NvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmF0aW5nXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjE1Nn19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0JztcbmltcG9ydCBVc2VyRWRpdFJldmlld3MgZnJvbSAnLi9Vc2VyRWRpdFJldmlld3MnO1xuXG5jb25zdCB0aXRsZSA9ICdNYW5hZ2VtZW50IFJldmlld3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBzdG9yZSwgcGFyYW1zIH0pIHtcblxuICAgIC8vIEZyb20gUmVkdXggU3RvcmVcbiAgICBsZXQgaXNBZG1pbkF1dGhlbnRpY2F0ZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnJ1bnRpbWUuaXNBZG1pbkF1dGhlbnRpY2F0ZWQ7XG5cbiAgICBpZiAoIWlzQWRtaW5BdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbi9sb2dpbicgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZXZpZXdJZCA9IE51bWJlcihwYXJhbXMucmV2aWV3SWQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbXBvbmVudDogPEFkbWluTGF5b3V0PjxVc2VyRWRpdFJldmlld3MgdGl0bGU9e3RpdGxlfSByZXZpZXdJZD17cmV2aWV3SWR9IC8+PC9BZG1pbkxheW91dD4sXG4gICAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBOUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBSEE7QUFXQTtBQUNBO0FBRkE7QUFDQTtBQXFDQTs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFyQkE7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQTFDQTtBQTJDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQS9EQTtBQUNBO0FBQ0E7QUE4REE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQXRJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRkE7QUFDQTtBQXNJQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7QUNyTEE7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFtQkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFEQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9