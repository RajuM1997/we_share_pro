require("source-map-support").install();
exports.ids = ["siteadmin-serviceFeesSettings"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.ServiceFeesForm-rentAllHeaderAdmin-1ZY7G {\n  position: fixed !important;\n}\n.ServiceFeesForm-adminLayout-2HP3q {\n  padding-top: 64px !important;\n}\n.ServiceFeesForm-box-2F4D_ h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.ServiceFeesForm-exportLink-64qMW {\n  margin-bottom: -29px;\n}\n.ServiceFeesForm-blockcenter-aD8nS {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.ServiceFeesForm-panelHeader-1OGCA {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.ServiceFeesForm-currencyselect-2EMWS {\n  width: 100%;\n  margin-right: 0px;\n}\n.ServiceFeesForm-panelHeader-1OGCA {\n  overflow: hidden;\n  position: relative;\n}\n.ServiceFeesForm-mar0-3i8hE {\n  margin-left: 0;\n  margin-right: 0;\n}\n.ServiceFeesForm-navbar-2eWz7 > .ServiceFeesForm-container-3dnHS .ServiceFeesForm-navbar-brand-1ja6H,\n.ServiceFeesForm-navbar-2eWz7 > .ServiceFeesForm-container-fluid-5xrVJ .ServiceFeesForm-navbar-brand-1ja6H {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .ServiceFeesForm-blockcenter-aD8nS {\n    padding: 0px;\n  }\n  .ServiceFeesForm-panelHeader-1OGCA {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.ServiceFeesForm-pagecontentWrapper-3WFtq {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.ServiceFeesForm-headerTitle-2FLT1 {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.ServiceFeesForm-panelHeader-1OGCA {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.ServiceFeesForm-table-1rs5M {\n\tdisplay: table;\n}\n.ServiceFeesForm-tableRow-3GeV7 {\n\tdisplay: table-row;\n}\n.ServiceFeesForm-tableCell-2oyEI {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.ServiceFeesForm-formGroup-27mFe {\n\tmargin-bottom: 6px;\n}\n.ServiceFeesForm-select-2r9_- {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.ServiceFeesForm-noMargin-KF7pO {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.ServiceFeesForm-exportLink-64qMW {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.ServiceFeesForm-labelTextNew-3iZJf {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.ServiceFeesForm-displayInline-3Lzni {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.ServiceFeesForm-btnUPdate-3s1zV {\n\tdisplay: inline-block;\n}\n.ServiceFeesForm-btnModalDelete-3rGif {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.ServiceFeesForm-radioBtn-1yZKO {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.ServiceFeesForm-btnUPdate-3s1zV {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.ServiceFeesForm-btnModalDelete-3rGif {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.ServiceFeesForm-btnWidth-31xTZ {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.ServiceFeesForm-bannerImageBg-36rjh {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.ServiceFeesForm-bannerDelete-XasYL {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.ServiceFeesForm-modalRoot-14I6S {\n\tpadding: 32px;\n}\n.ServiceFeesForm-modalBorderBottom-1NQmU {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.ServiceFeesForm-logInModalBody-2Jx5B {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.ServiceFeesForm-exportSection-2t9X- {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.ServiceFeesForm-exportSectionGridSub-372XD {\n\tgrid-template-columns: 50% 49% !important;\n}\n.ServiceFeesForm-exportText-1bY2N {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.ServiceFeesForm-exportLinkImg-zfl-R {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.ServiceFeesForm-vtrMiddle-2wyJI {\n\tvertical-align: middle;\n}\n.ServiceFeesForm-exportImg-15kuZ {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.ServiceFeesForm-profileViewlabel-1NrAy {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.ServiceFeesForm-profileViewMainContent-10Fdn {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.ServiceFeesForm-profileViewMain-252Mp {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.ServiceFeesForm-profileViewInner-2i9Gs {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.ServiceFeesForm-profileImageSection-1Uhu0 {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.ServiceFeesForm-lastviewInner-fyGdA {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.ServiceFeesForm-pagecontentWrapper-3WFtq {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.ServiceFeesForm-exportSection-2t9X- {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.ServiceFeesForm-exportText-1bY2N {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.ServiceFeesForm-exportSectionGridSub-372XD {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.ServiceFeesForm-profileViewlabel-1NrAy {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.ServiceFeesForm-profileViewMainContent-10Fdn {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.ServiceFeesForm-pagecontentWrapper-3WFtq {\n\t\tmargin-left: 0;\n\t}\n}\n.ServiceFeesForm-ChangeToUpperCase-3eohl{\n    text-transform: uppercase\n}\n.ServiceFeesForm-noBorder-3K3eW {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.ServiceFeesForm-errorMessage-3U7x1 {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.ServiceFeesForm-panelHeader-1OGCA{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.ServiceFeesForm-formGroup-27mFe {\n  margin-bottom: 6px;\n}\n.ServiceFeesForm-select-2r9_- {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.ServiceFeesForm-labelText-1Eo-j{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;CACC,gBAAgB;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;CACxB","file":"ServiceFeesForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.panelHeader{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.formGroup {\n  margin-bottom: 6px;\n}\n.select {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.labelText{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "ServiceFeesForm-rentAllHeaderAdmin-1ZY7G",
	"adminLayout": "ServiceFeesForm-adminLayout-2HP3q",
	"box": "ServiceFeesForm-box-2F4D_",
	"exportLink": "ServiceFeesForm-exportLink-64qMW",
	"blockcenter": "ServiceFeesForm-blockcenter-aD8nS",
	"panelHeader": "ServiceFeesForm-panelHeader-1OGCA",
	"currencyselect": "ServiceFeesForm-currencyselect-2EMWS",
	"mar0": "ServiceFeesForm-mar0-3i8hE",
	"navbar": "ServiceFeesForm-navbar-2eWz7",
	"container": "ServiceFeesForm-container-3dnHS",
	"navbar-brand": "ServiceFeesForm-navbar-brand-1ja6H",
	"container-fluid": "ServiceFeesForm-container-fluid-5xrVJ",
	"pagecontentWrapper": "ServiceFeesForm-pagecontentWrapper-3WFtq",
	"headerTitle": "ServiceFeesForm-headerTitle-2FLT1",
	"table": "ServiceFeesForm-table-1rs5M",
	"tableRow": "ServiceFeesForm-tableRow-3GeV7",
	"tableCell": "ServiceFeesForm-tableCell-2oyEI",
	"formGroup": "ServiceFeesForm-formGroup-27mFe",
	"select": "ServiceFeesForm-select-2r9_-",
	"noMargin": "ServiceFeesForm-noMargin-KF7pO",
	"labelTextNew": "ServiceFeesForm-labelTextNew-3iZJf",
	"displayInline": "ServiceFeesForm-displayInline-3Lzni",
	"btnUPdate": "ServiceFeesForm-btnUPdate-3s1zV",
	"btnModalDelete": "ServiceFeesForm-btnModalDelete-3rGif",
	"radioBtn": "ServiceFeesForm-radioBtn-1yZKO",
	"btnWidth": "ServiceFeesForm-btnWidth-31xTZ",
	"bannerImageBg": "ServiceFeesForm-bannerImageBg-36rjh",
	"bannerDelete": "ServiceFeesForm-bannerDelete-XasYL",
	"modalRoot": "ServiceFeesForm-modalRoot-14I6S",
	"modalBorderBottom": "ServiceFeesForm-modalBorderBottom-1NQmU",
	"logInModalBody": "ServiceFeesForm-logInModalBody-2Jx5B",
	"exportSection": "ServiceFeesForm-exportSection-2t9X-",
	"exportSectionGridSub": "ServiceFeesForm-exportSectionGridSub-372XD",
	"exportText": "ServiceFeesForm-exportText-1bY2N",
	"exportLinkImg": "ServiceFeesForm-exportLinkImg-zfl-R",
	"vtrMiddle": "ServiceFeesForm-vtrMiddle-2wyJI",
	"exportImg": "ServiceFeesForm-exportImg-15kuZ",
	"profileViewlabel": "ServiceFeesForm-profileViewlabel-1NrAy",
	"profileViewMainContent": "ServiceFeesForm-profileViewMainContent-10Fdn",
	"profileViewMain": "ServiceFeesForm-profileViewMain-252Mp",
	"profileViewInner": "ServiceFeesForm-profileViewInner-2i9Gs",
	"profileImageSection": "ServiceFeesForm-profileImageSection-1Uhu0",
	"lastviewInner": "ServiceFeesForm-lastviewInner-fyGdA",
	"ChangeToUpperCase": "ServiceFeesForm-ChangeToUpperCase-3eohl",
	"noBorder": "ServiceFeesForm-noBorder-3K3eW",
	"errorMessage": "ServiceFeesForm-errorMessage-3U7x1",
	"labelText": "ServiceFeesForm-labelText-1Eo-j"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"ServiceFeesSettings.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/actions/ServiceFees/updateServiceFees.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServiceFees", function() { return updateServiceFees; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
 // Toaster



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getServiceFees{
    getServiceFees{
        id
        guestType
        guestValue
        hostType
        hostValue
        currency
        status
    }
  }
`;
function updateServiceFees(guestType, guestValue, hostType, hostValue, currency) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_UPDATE_SERVICE_FEES_START"]
    });

    try {
      const mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          mutation updateServiceFees(
            $guestType: String!, 
            $guestValue: Float!,
            $hostType: String!,
            $hostValue: Float!,
            $currency: String,
          ){
              updateServiceFees(
                guestType: $guestType,
                guestValue: $guestValue,
                hostType: $hostType,
                hostValue: $hostValue,
                currency: $currency
              ) {
                  id
                  guestType
                  guestValue
                  hostType
                  hostValue
                  currency
                  status
              }
          }
      `; // If admin didn't provide currency, use the base currency

      let baseCurrency = getState().currency.base;
      let currencyData = currency ? currency : baseCurrency;
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          guestType,
          guestValue,
          hostType,
          hostValue,
          currency: currencyData
        },
        refetchQueries: [{
          query
        }]
      });
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_UPDATE_SERVICE_FEES_SUCCESS"]
      });
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Update Service Fees", "Service Fees updated successfully!");
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_UPDATE_SERVICE_FEES_ERROR"],
        payload: {
          error
        }
      });
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update Service Fees", "Update Service Fees is failed!");
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.css");
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

/***/ "./src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.js":
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
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/siteadmin/ServiceFeesForm/submit.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/ServiceFeesForm/validate.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.css");
/* harmony import */ var _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Redux




 // Style





 // Translation




class ServiceFeesForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormControl"], _extends({}, input, {
        placeholder: placeholder,
        type: type,
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.commonControlInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 34
        }
      }, formatMessage(error)))));
    });

    _defineProperty(this, "renderFormControlSelect", ({
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.select, _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.currencyselect),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormControl"], _extends({
        componentClass: "select"
      }, input, {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.commonControlSelect, 'commonAdminSelect'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }), children)), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 34
        }
      }, formatMessage(error)))));
    });
  }

  render() {
    const {
      formatMessage
    } = this.props.intl;
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      initialValues
    } = this.props;
    const {
      base,
      availableCurrencies
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.pagecontentWrapper, 'adminRadioBtn', 'pagecontentAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].servicefeesSettings, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 8,
      lg: 8,
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.blockcenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.panelHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_4__["default"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 27
      }
    }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].guestFeeType, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 57
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 9,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew, _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnUPdate, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.curderPointer, 'curderPointerRTL'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "guestType",
      component: "input",
      type: "radio",
      value: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 117
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.radioBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 189
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].fixedPrice, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 218
      }
    }))), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew, _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnModalDelete, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.curderPointer, 'adminDelete'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "guestType",
      component: "input",
      type: "radio",
      value: "percentage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 112
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.radioBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 189
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].percentage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 218
      }
    }))), " ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "guestValue",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].guestServiceFee),
      placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].guestServiceFeePlacehold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].hostFeeType, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 57
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 9,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew, _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnUPdate, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.curderPointer, 'curderPointerRTL'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "hostType",
      component: "input",
      type: "radio",
      value: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 112
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.radioBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 183
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].fixedPrice, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 212
      }
    })), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew, _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnModalDelete, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.curderPointer, 'adminDelete'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "hostType",
      component: "input",
      type: "radio",
      value: "percentage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 112
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.radioBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 188
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].percentage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 217
      }
    }))), " ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "hostValue",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].hostServiceFeeType),
      placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].guestServiceFeePlacehold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "currency",
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.commonControlSelect, 'commonAdminSelect'),
      component: this.renderFormControlSelect,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].currency),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].chooseCurrency, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 36
      }
    }))), availableCurrencies.map((currency, key) => {
      if (currency.isEnable === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: key,
          value: currency.symbol,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 32
          }
        }, currency.symbol);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: _ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnLarge),
      type: "submit",
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].save, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    })))))))))));
  }

}

_defineProperty(ServiceFeesForm, "propTypes", {
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  availableCurrencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired
});

ServiceFeesForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'ServiceFeesForm',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_5__["default"]
})(ServiceFeesForm);

const mapState = state => ({
  availableCurrencies: state.currency.availableCurrencies,
  base: state.currency.base
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_11__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_ServiceFeesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(ServiceFeesForm))));

/***/ }),

/***/ "./src/components/siteadmin/ServiceFeesForm/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_ServiceFees_updateServiceFees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/actions/ServiceFees/updateServiceFees.js");


async function submit(values, dispatch) {
  dispatch(Object(_actions_ServiceFees_updateServiceFees__WEBPACK_IMPORTED_MODULE_0__["updateServiceFees"])(values.guestType, values.guestValue, values.hostType, values.hostValue, values.currency));
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/components/siteadmin/ServiceFeesForm/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {};

  if ((!values.guestValue || !values.guestValue.toString().trim()) && values.guestValue !== 0) {
    errors.guestValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].provideFixedGuestFee;
  }

  if ((!values.hostValue || !values.hostValue.toString().trim()) && values.hostValue !== 0) {
    errors.hostValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].provideFixedHostFee;
  }

  if (values.guestType === 'fixed' || values.hostType === 'fixed') {
    if (!values.currency) {
      errors.currency = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].currencyRequiredLabel;
    }
  }

  if (isNaN(values.guestValue)) {
    errors.guestValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].onlyNumericKey;
  }

  if (isNaN(values.hostValue)) {
    errors.hostValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].onlyNumericKey;
  }

  if (values.guestType === 'fixed') {
    if (values.guestValue && parseInt(values.guestValue, 10) < 0) {
      errors.guestValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].invalid;
    }
  }

  if (values.hostType === 'fixed') {
    if (values.hostValue && parseInt(values.hostValue, 10) < 0) {
      errors.hostValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].invalid;
    }
  }

  if (values.guestType === 'percentage') {
    if (values.guestValue && (parseInt(values.guestValue, 10) < 0 || parseInt(values.guestValue, 10) > 99)) {
      errors.guestValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].choosePresentageValue;
    }
  }

  if (values.hostType === 'percentage') {
    if (values.hostValue && (parseInt(values.hostValue, 10) < 0 || parseInt(values.hostValue, 10) > 99)) {
      errors.hostValue = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].choosePresentageValue;
    }
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.css");
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

/***/ "./src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.js":
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
/* harmony import */ var _ServiceFeesSettings_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.css");
/* harmony import */ var _ServiceFeesSettings_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ServiceFeesSettings_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_siteadmin_ServiceFeesForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/ServiceFeesForm/ServiceFeesForm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Loader/Loader.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style


 // Component




class ServiceFeesSettings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data: {
        loading,
        getServiceFees
      }
    } = this.props;
    let settingsCollection = {};

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 14
        }
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_ServiceFeesForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        initialValues: getServiceFees,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 14
        }
      });
    }
  }

}

_defineProperty(ServiceFeesSettings, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getServiceFees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      guestType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      guestValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      hostType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      hostValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  })
});

_defineProperty(ServiceFeesSettings, "defaultProps", {
  data: {
    loading: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_ServiceFeesSettings_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"]`
        query getServiceFees{
          getServiceFees{
              id
              guestType
              guestValue
              hostType
              hostValue
              currency
              status
          }
        }
      `))(ServiceFeesSettings));

/***/ }),

/***/ "./src/routes/siteadmin/serviceFeesSettings/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _ServiceFeesSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/serviceFeesSettings/ServiceFeesSettings.js");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/helpers/adminPrivileges.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/serviceFeesSettings/index.js";




const title = 'Service Fees Settings';
async function action({
  store
}) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return {
      redirect: '/siteadmin/login'
    };
  } // Admin restriction


  if (!Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__["restrictUrls"])('/siteadmin/settings/servicefees', adminPrivileges)) {
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
        lineNumber: 27,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceFeesSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1zZXJ2aWNlRmVlc1NldHRpbmdzLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2VydmljZUZlZXNGb3JtL1NlcnZpY2VGZWVzRm9ybS5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9zZXJ2aWNlRmVlc1NldHRpbmdzL1NlcnZpY2VGZWVzU2V0dGluZ3MuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvU2VydmljZUZlZXMvdXBkYXRlU2VydmljZUZlZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NlcnZpY2VGZWVzRm9ybS9TZXJ2aWNlRmVlc0Zvcm0uY3NzPzkzYTUiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2VydmljZUZlZXNGb3JtL1NlcnZpY2VGZWVzRm9ybS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TZXJ2aWNlRmVlc0Zvcm0vc3VibWl0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NlcnZpY2VGZWVzRm9ybS92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3NpdGVhZG1pbi9zZXJ2aWNlRmVlc1NldHRpbmdzL1NlcnZpY2VGZWVzU2V0dGluZ3MuY3NzPzhhNjQiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9zZXJ2aWNlRmVlc1NldHRpbmdzL1NlcnZpY2VGZWVzU2V0dGluZ3MuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9zZXJ2aWNlRmVlc1NldHRpbmdzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi0xWlk3RyB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1hZG1pbkxheW91dC0ySFAzcSB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWJveC0yRjREXyBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWV4cG9ydExpbmstNjRxTVcge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tYmxvY2tjZW50ZXItYUQ4blMge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1wYW5lbEhlYWRlci0xT0dDQSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWN1cnJlbmN5c2VsZWN0LTJFTVdTIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tcGFuZWxIZWFkZXItMU9HQ0Ege1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1tYXIwLTNpOGhFIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLW5hdmJhci0yZVd6NyA+IC5TZXJ2aWNlRmVlc0Zvcm0tY29udGFpbmVyLTNkbkhTIC5TZXJ2aWNlRmVlc0Zvcm0tbmF2YmFyLWJyYW5kLTFqYTZILFxcbi5TZXJ2aWNlRmVlc0Zvcm0tbmF2YmFyLTJlV3o3ID4gLlNlcnZpY2VGZWVzRm9ybS1jb250YWluZXItZmx1aWQtNXhyVkogLlNlcnZpY2VGZWVzRm9ybS1uYXZiYXItYnJhbmQtMWphNkgge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuU2VydmljZUZlZXNGb3JtLWJsb2NrY2VudGVyLWFEOG5TIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLlNlcnZpY2VGZWVzRm9ybS1wYW5lbEhlYWRlci0xT0dDQSB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4uU2VydmljZUZlZXNGb3JtLXBhZ2Vjb250ZW50V3JhcHBlci0zV0Z0cSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1oZWFkZXJUaXRsZS0yRkxUMSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLXBhbmVsSGVhZGVyLTFPR0NBIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS10YWJsZS0xcnM1TSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tdGFibGVSb3ctM0dlVjcge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS10YWJsZUNlbGwtMm95RUkge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tZm9ybUdyb3VwLTI3bUZlIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tc2VsZWN0LTJyOV8tIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tbm9NYXJnaW4tS0Y3cE8ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1leHBvcnRMaW5rLTY0cU1XIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWxhYmVsVGV4dE5ldy0zaVpKZiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWRpc3BsYXlJbmxpbmUtM0x6bmkge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uU2VydmljZUZlZXNGb3JtLWJ0blVQZGF0ZS0zczF6ViB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWJ0bk1vZGFsRGVsZXRlLTNyR2lmIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tcmFkaW9CdG4tMXlaS08ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5TZXJ2aWNlRmVlc0Zvcm0tYnRuVVBkYXRlLTNzMXpWIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuU2VydmljZUZlZXNGb3JtLWJ0bk1vZGFsRGVsZXRlLTNyR2lmIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuU2VydmljZUZlZXNGb3JtLWJ0bldpZHRoLTMxeFRaIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uU2VydmljZUZlZXNGb3JtLWJhbm5lckltYWdlQmctMzZyamgge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tYmFubmVyRGVsZXRlLVhhc1lMIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4uU2VydmljZUZlZXNGb3JtLW1vZGFsUm9vdC0xNEk2UyB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1tb2RhbEJvcmRlckJvdHRvbS0xTlFtVSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1sb2dJbk1vZGFsQm9keS0ySng1QiB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5TZXJ2aWNlRmVlc0Zvcm0tZXhwb3J0U2VjdGlvbi0ydDlYLSB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1leHBvcnRTZWN0aW9uR3JpZFN1Yi0zNzJYRCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tZXhwb3J0VGV4dC0xYlkyTiB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWV4cG9ydExpbmtJbWctemZsLVIge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tdnRyTWlkZGxlLTJ3eUpJIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWV4cG9ydEltZy0xNWt1WiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0xTnJBeSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LTEwRmRuIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1wcm9maWxlVmlld01haW4tMjUyTXAge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLXByb2ZpbGVWaWV3SW5uZXItMmk5R3Mge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tcHJvZmlsZUltYWdlU2VjdGlvbi0xVWh1MCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWxhc3R2aWV3SW5uZXItZnlHZEEge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5TZXJ2aWNlRmVlc0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNXRnRxIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuU2VydmljZUZlZXNGb3JtLWV4cG9ydFNlY3Rpb24tMnQ5WC0ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LlNlcnZpY2VGZWVzRm9ybS1leHBvcnRUZXh0LTFiWTJOIHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuU2VydmljZUZlZXNGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTM3MlhEIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LlNlcnZpY2VGZWVzRm9ybS1wcm9maWxlVmlld2xhYmVsLTFOckF5IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuU2VydmljZUZlZXNGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMTBGZG4ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5TZXJ2aWNlRmVlc0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNXRnRxIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tQ2hhbmdlVG9VcHBlckNhc2UtM2VvaGx7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1ub0JvcmRlci0zSzNlVyB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5TZXJ2aWNlRmVlc0Zvcm0tZXJyb3JNZXNzYWdlLTNVN3gxIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLXBhbmVsSGVhZGVyLTFPR0NBe1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uU2VydmljZUZlZXNGb3JtLWZvcm1Hcm91cC0yN21GZSB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5TZXJ2aWNlRmVlc0Zvcm0tc2VsZWN0LTJyOV8tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLlNlcnZpY2VGZWVzRm9ybS1sYWJlbFRleHQtMUVvLWp7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM3Njc2NzY7XFxuICBtYXJnaW46IDZweCAwcHg7XFxuICBsaW5lLWhlaWdodDogMS40MztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NlcnZpY2VGZWVzRm9ybS9TZXJ2aWNlRmVlc0Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsOEJBQThCO0FBQzlCO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEOztDQUVDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0M7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtBQUNELHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWjtBQUNELDZEQUE2RDtBQUM3RDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsaUNBQWlDO0NBQ2pDLCtDQUErQztDQUMvQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0tBQ3RCLHVCQUF1QjtTQUNuQixvQkFBb0I7Q0FDNUIsZUFBZTtDQUNmLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQztFQUNDLG9CQUFvQjtRQUNkLGNBQWM7UUFDZCxlQUFlO0VBQ3JCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyx1Q0FBdUM7RUFDdkM7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtDQUNEO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0M7RUFDQyxlQUFlO0VBQ2Y7Q0FDRDtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRCw0QkFBNEI7QUFDNUI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCXCIsXCJmaWxlXCI6XCJTZXJ2aWNlRmVlc0Zvcm0uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5yZW50QWxsSGVhZGVyQWRtaW4ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbkxheW91dCB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uYm94IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5leHBvcnRMaW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uYmxvY2tjZW50ZXIge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5jdXJyZW5jeXNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1hcjAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5uYXZiYXIgPiAuY29udGFpbmVyIC5uYXZiYXItYnJhbmQsXFxuLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5ibG9ja2NlbnRlciB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5wYW5lbEhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4ucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLnRhYmxlIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnRhYmxlUm93IHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi50YWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5mb3JtR3JvdXAge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnNlbGVjdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cG9ydExpbmsge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5sYWJlbFRleHROZXcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLmRpc3BsYXlJbmxpbmUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uYnRuVVBkYXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4ucmFkaW9CdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5idG5VUGRhdGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LmJ0bldpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uYmFubmVySW1hZ2VCZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmJhbm5lckRlbGV0ZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLm1vZGFsUm9vdCB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLm1vZGFsQm9yZGVyQm90dG9tIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4ubG9nSW5Nb2RhbEJvZHkge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXhwb3J0U2VjdGlvbiB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLmV4cG9ydFRleHQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLmV4cG9ydExpbmtJbWcge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi52dHJNaWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5leHBvcnRJbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4ucHJvZmlsZVZpZXdNYWluIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnByb2ZpbGVWaWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5wcm9maWxlSW1hZ2VTZWN0aW9uIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sYXN0dmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuZXhwb3J0U2VjdGlvbiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuZXhwb3J0VGV4dCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5DaGFuZ2VUb1VwcGVyQ2FzZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uZXJyb3JNZXNzYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucGFuZWxIZWFkZXJ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5mb3JtR3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmxhYmVsVGV4dHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIG1hcmdpbjogNnB4IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyZW50QWxsSGVhZGVyQWRtaW5cIjogXCJTZXJ2aWNlRmVlc0Zvcm0tcmVudEFsbEhlYWRlckFkbWluLTFaWTdHXCIsXG5cdFwiYWRtaW5MYXlvdXRcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tYWRtaW5MYXlvdXQtMkhQM3FcIixcblx0XCJib3hcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tYm94LTJGNERfXCIsXG5cdFwiZXhwb3J0TGlua1wiOiBcIlNlcnZpY2VGZWVzRm9ybS1leHBvcnRMaW5rLTY0cU1XXCIsXG5cdFwiYmxvY2tjZW50ZXJcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tYmxvY2tjZW50ZXItYUQ4blNcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIlNlcnZpY2VGZWVzRm9ybS1wYW5lbEhlYWRlci0xT0dDQVwiLFxuXHRcImN1cnJlbmN5c2VsZWN0XCI6IFwiU2VydmljZUZlZXNGb3JtLWN1cnJlbmN5c2VsZWN0LTJFTVdTXCIsXG5cdFwibWFyMFwiOiBcIlNlcnZpY2VGZWVzRm9ybS1tYXIwLTNpOGhFXCIsXG5cdFwibmF2YmFyXCI6IFwiU2VydmljZUZlZXNGb3JtLW5hdmJhci0yZVd6N1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNlcnZpY2VGZWVzRm9ybS1jb250YWluZXItM2RuSFNcIixcblx0XCJuYXZiYXItYnJhbmRcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tbmF2YmFyLWJyYW5kLTFqYTZIXCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiU2VydmljZUZlZXNGb3JtLWNvbnRhaW5lci1mbHVpZC01eHJWSlwiLFxuXHRcInBhZ2Vjb250ZW50V3JhcHBlclwiOiBcIlNlcnZpY2VGZWVzRm9ybS1wYWdlY29udGVudFdyYXBwZXItM1dGdHFcIixcblx0XCJoZWFkZXJUaXRsZVwiOiBcIlNlcnZpY2VGZWVzRm9ybS1oZWFkZXJUaXRsZS0yRkxUMVwiLFxuXHRcInRhYmxlXCI6IFwiU2VydmljZUZlZXNGb3JtLXRhYmxlLTFyczVNXCIsXG5cdFwidGFibGVSb3dcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tdGFibGVSb3ctM0dlVjdcIixcblx0XCJ0YWJsZUNlbGxcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tdGFibGVDZWxsLTJveUVJXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiU2VydmljZUZlZXNGb3JtLWZvcm1Hcm91cC0yN21GZVwiLFxuXHRcInNlbGVjdFwiOiBcIlNlcnZpY2VGZWVzRm9ybS1zZWxlY3QtMnI5Xy1cIixcblx0XCJub01hcmdpblwiOiBcIlNlcnZpY2VGZWVzRm9ybS1ub01hcmdpbi1LRjdwT1wiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIlNlcnZpY2VGZWVzRm9ybS1sYWJlbFRleHROZXctM2laSmZcIixcblx0XCJkaXNwbGF5SW5saW5lXCI6IFwiU2VydmljZUZlZXNGb3JtLWRpc3BsYXlJbmxpbmUtM0x6bmlcIixcblx0XCJidG5VUGRhdGVcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tYnRuVVBkYXRlLTNzMXpWXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tYnRuTW9kYWxEZWxldGUtM3JHaWZcIixcblx0XCJyYWRpb0J0blwiOiBcIlNlcnZpY2VGZWVzRm9ybS1yYWRpb0J0bi0xeVpLT1wiLFxuXHRcImJ0bldpZHRoXCI6IFwiU2VydmljZUZlZXNGb3JtLWJ0bldpZHRoLTMxeFRaXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIlNlcnZpY2VGZWVzRm9ybS1iYW5uZXJJbWFnZUJnLTM2cmpoXCIsXG5cdFwiYmFubmVyRGVsZXRlXCI6IFwiU2VydmljZUZlZXNGb3JtLWJhbm5lckRlbGV0ZS1YYXNZTFwiLFxuXHRcIm1vZGFsUm9vdFwiOiBcIlNlcnZpY2VGZWVzRm9ybS1tb2RhbFJvb3QtMTRJNlNcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIlNlcnZpY2VGZWVzRm9ybS1tb2RhbEJvcmRlckJvdHRvbS0xTlFtVVwiLFxuXHRcImxvZ0luTW9kYWxCb2R5XCI6IFwiU2VydmljZUZlZXNGb3JtLWxvZ0luTW9kYWxCb2R5LTJKeDVCXCIsXG5cdFwiZXhwb3J0U2VjdGlvblwiOiBcIlNlcnZpY2VGZWVzRm9ybS1leHBvcnRTZWN0aW9uLTJ0OVgtXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItMzcyWERcIixcblx0XCJleHBvcnRUZXh0XCI6IFwiU2VydmljZUZlZXNGb3JtLWV4cG9ydFRleHQtMWJZMk5cIixcblx0XCJleHBvcnRMaW5rSW1nXCI6IFwiU2VydmljZUZlZXNGb3JtLWV4cG9ydExpbmtJbWctemZsLVJcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tdnRyTWlkZGxlLTJ3eUpJXCIsXG5cdFwiZXhwb3J0SW1nXCI6IFwiU2VydmljZUZlZXNGb3JtLWV4cG9ydEltZy0xNWt1WlwiLFxuXHRcInByb2ZpbGVWaWV3bGFiZWxcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0xTnJBeVwiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJTZXJ2aWNlRmVlc0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0xMEZkblwiLFxuXHRcInByb2ZpbGVWaWV3TWFpblwiOiBcIlNlcnZpY2VGZWVzRm9ybS1wcm9maWxlVmlld01haW4tMjUyTXBcIixcblx0XCJwcm9maWxlVmlld0lubmVyXCI6IFwiU2VydmljZUZlZXNGb3JtLXByb2ZpbGVWaWV3SW5uZXItMmk5R3NcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiU2VydmljZUZlZXNGb3JtLXByb2ZpbGVJbWFnZVNlY3Rpb24tMVVodTBcIixcblx0XCJsYXN0dmlld0lubmVyXCI6IFwiU2VydmljZUZlZXNGb3JtLWxhc3R2aWV3SW5uZXItZnlHZEFcIixcblx0XCJDaGFuZ2VUb1VwcGVyQ2FzZVwiOiBcIlNlcnZpY2VGZWVzRm9ybS1DaGFuZ2VUb1VwcGVyQ2FzZS0zZW9obFwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiU2VydmljZUZlZXNGb3JtLW5vQm9yZGVyLTNLM2VXXCIsXG5cdFwiZXJyb3JNZXNzYWdlXCI6IFwiU2VydmljZUZlZXNGb3JtLWVycm9yTWVzc2FnZS0zVTd4MVwiLFxuXHRcImxhYmVsVGV4dFwiOiBcIlNlcnZpY2VGZWVzRm9ybS1sYWJlbFRleHQtMUVvLWpcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3NlcnZpY2VGZWVzU2V0dGluZ3MvU2VydmljZUZlZXNTZXR0aW5ncy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkNcIixcImZpbGVcIjpcIlNlcnZpY2VGZWVzU2V0dGluZ3MuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG5pbXBvcnQge1xuICBBRE1JTl9VUERBVEVfU0VSVklDRV9GRUVTX1NUQVJULFxuICBBRE1JTl9VUERBVEVfU0VSVklDRV9GRUVTX1NVQ0NFU1MsXG4gIEFETUlOX1VQREFURV9TRVJWSUNFX0ZFRVNfRVJST1IsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBnZXRTZXJ2aWNlRmVlc3tcbiAgICBnZXRTZXJ2aWNlRmVlc3tcbiAgICAgICAgaWRcbiAgICAgICAgZ3Vlc3RUeXBlXG4gICAgICAgIGd1ZXN0VmFsdWVcbiAgICAgICAgaG9zdFR5cGVcbiAgICAgICAgaG9zdFZhbHVlXG4gICAgICAgIGN1cnJlbmN5XG4gICAgICAgIHN0YXR1c1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNlcnZpY2VGZWVzKGd1ZXN0VHlwZSwgZ3Vlc3RWYWx1ZSwgaG9zdFR5cGUsIGhvc3RWYWx1ZSwgY3VycmVuY3kpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQURNSU5fVVBEQVRFX1NFUlZJQ0VfRkVFU19TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgIG11dGF0aW9uIHVwZGF0ZVNlcnZpY2VGZWVzKFxuICAgICAgICAgICAgJGd1ZXN0VHlwZTogU3RyaW5nISwgXG4gICAgICAgICAgICAkZ3Vlc3RWYWx1ZTogRmxvYXQhLFxuICAgICAgICAgICAgJGhvc3RUeXBlOiBTdHJpbmchLFxuICAgICAgICAgICAgJGhvc3RWYWx1ZTogRmxvYXQhLFxuICAgICAgICAgICAgJGN1cnJlbmN5OiBTdHJpbmcsXG4gICAgICAgICAgKXtcbiAgICAgICAgICAgICAgdXBkYXRlU2VydmljZUZlZXMoXG4gICAgICAgICAgICAgICAgZ3Vlc3RUeXBlOiAkZ3Vlc3RUeXBlLFxuICAgICAgICAgICAgICAgIGd1ZXN0VmFsdWU6ICRndWVzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGhvc3RUeXBlOiAkaG9zdFR5cGUsXG4gICAgICAgICAgICAgICAgaG9zdFZhbHVlOiAkaG9zdFZhbHVlLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAkY3VycmVuY3lcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgZ3Vlc3RUeXBlXG4gICAgICAgICAgICAgICAgICBndWVzdFZhbHVlXG4gICAgICAgICAgICAgICAgICBob3N0VHlwZVxuICAgICAgICAgICAgICAgICAgaG9zdFZhbHVlXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeVxuICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBJZiBhZG1pbiBkaWRuJ3QgcHJvdmlkZSBjdXJyZW5jeSwgdXNlIHRoZSBiYXNlIGN1cnJlbmN5XG4gICAgICBsZXQgYmFzZUN1cnJlbmN5ID0gZ2V0U3RhdGUoKS5jdXJyZW5jeS5iYXNlO1xuICAgICAgbGV0IGN1cnJlbmN5RGF0YSA9IGN1cnJlbmN5ID8gY3VycmVuY3kgOiBiYXNlQ3VycmVuY3k7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBndWVzdFR5cGUsXG4gICAgICAgICAgZ3Vlc3RWYWx1ZSxcbiAgICAgICAgICBob3N0VHlwZSxcbiAgICAgICAgICBob3N0VmFsdWUsXG4gICAgICAgICAgY3VycmVuY3k6IGN1cnJlbmN5RGF0YVxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV1cbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFETUlOX1VQREFURV9TRVJWSUNFX0ZFRVNfU1VDQ0VTUyxcbiAgICAgIH0pO1xuXG4gICAgICB0b2FzdHIuc3VjY2VzcyhcIlVwZGF0ZSBTZXJ2aWNlIEZlZXNcIiwgXCJTZXJ2aWNlIEZlZXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQURNSU5fVVBEQVRFX1NFUlZJQ0VfRkVFU19FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdG9hc3RyLmVycm9yKFwiVXBkYXRlIFNlcnZpY2UgRmVlc1wiLCBcIlVwZGF0ZSBTZXJ2aWNlIEZlZXMgaXMgZmFpbGVkIVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1NlcnZpY2VGZWVzRm9ybS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vU2VydmljZUZlZXNGb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1NlcnZpY2VGZWVzRm9ybS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIFJlZHV4XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgc3VibWl0IGZyb20gJy4vc3VibWl0JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLy8gU3R5bGVcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgUm93LFxuICBGb3JtR3JvdXAsXG4gIENvbCxcbiAgRm9ybUNvbnRyb2wsXG4gIFBhbmVsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1NlcnZpY2VGZWVzRm9ybS5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBTZXJ2aWNlRmVlc0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5pdGlhbFZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJhc2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhdmFpbGFibGVDdXJyZW5jaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlckZvcm1Db250cm9sID0gKHsgaW5wdXQsIGxhYmVsLCB0eXBlLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezN9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs5fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB7Li4uaW5wdXR9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXtidC5jb21tb25Db250cm9sSW5wdXR9IC8+XG4gICAgICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3MuZXJyb3JNZXNzYWdlfT57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zcGFuPn1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2xTZWxlY3QgPSAoeyBpbnB1dCwgbGFiZWwsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17M30+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuc2VsZWN0LCBzLmN1cnJlbmN5c2VsZWN0KX0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiIHsuLi5pbnB1dH0gY2xhc3NOYW1lPXtjeChidC5jb21tb25Db250cm9sU2VsZWN0LCAnY29tbW9uQWRtaW5TZWxlY3QnKX0gPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIGNvbnN0IHsgZXJyb3IsIGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZywgZGlzcGF0Y2gsIGluaXRpYWxWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBiYXNlLCBhdmFpbGFibGVDdXJyZW5jaWVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnBhZ2Vjb250ZW50V3JhcHBlciwgJ2FkbWluUmFkaW9CdG4nLCAncGFnZWNvbnRlbnRBUicpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzLmhlYWRlclRpdGxlfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2VydmljZWZlZXNTZXR0aW5nc30gLz48L2gxPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs4fSBsZz17OH0gY2xhc3NOYW1lPXtzLmJsb2NrY2VudGVyfT5cbiAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e3MucGFuZWxIZWFkZXJ9PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8c3Ryb25nPntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3N0cm9uZz59XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZ3Vlc3RGZWVUeXBlfSAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs5fT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5idG5VUGRhdGUsIGJ0LmN1cmRlclBvaW50ZXIsICdjdXJkZXJQb2ludGVyUlRMJyl9PnsnICd9PEZpZWxkIG5hbWU9XCJndWVzdFR5cGVcIiBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiZml4ZWRcIiAvPiA8c3BhbiBjbGFzc05hbWU9e3MucmFkaW9CdG59PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5maXhlZFByaWNlfSAvPjwvc3Bhbj4gPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjeChzLmxhYmVsVGV4dE5ldywgcy5idG5Nb2RhbERlbGV0ZSwgYnQuY3VyZGVyUG9pbnRlciwgJ2FkbWluRGVsZXRlJyl9PjxGaWVsZCBuYW1lPVwiZ3Vlc3RUeXBlXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInBlcmNlbnRhZ2VcIiAvPiA8c3BhbiBjbGFzc05hbWU9e3MucmFkaW9CdG59PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5wZXJjZW50YWdlfSAvPjwvc3Bhbj4gPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImd1ZXN0VmFsdWVcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZ3Vlc3RTZXJ2aWNlRmVlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmd1ZXN0U2VydmljZUZlZVBsYWNlaG9sZCl9IC8+XG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuaG9zdEZlZVR5cGV9IC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLmJ0blVQZGF0ZSwgYnQuY3VyZGVyUG9pbnRlciwgJ2N1cmRlclBvaW50ZXJSVEwnKX0+PEZpZWxkIG5hbWU9XCJob3N0VHlwZVwiIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJmaXhlZFwiIC8+IDxzcGFuIGNsYXNzTmFtZT17cy5yYWRpb0J0bn0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmZpeGVkUHJpY2V9IC8+IDwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2N4KHMubGFiZWxUZXh0TmV3LCBzLmJ0bk1vZGFsRGVsZXRlLCBidC5jdXJkZXJQb2ludGVyLCAnYWRtaW5EZWxldGUnKX0+PEZpZWxkIG5hbWU9XCJob3N0VHlwZVwiIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwZXJjZW50YWdlXCIgLz4gPHNwYW4gY2xhc3NOYW1lPXtzLnJhZGlvQnRufT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucGVyY2VudGFnZX0gLz48L3NwYW4+IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJob3N0VmFsdWVcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG9zdFNlcnZpY2VGZWVUeXBlKX0gcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZ3Vlc3RTZXJ2aWNlRmVlUGxhY2Vob2xkKX0gLz5cbiAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImN1cnJlbmN5XCIgY2xhc3NOYW1lPXtjeChidC5jb21tb25Db250cm9sU2VsZWN0LCAnY29tbW9uQWRtaW5TZWxlY3QnKX0gY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sU2VsZWN0fSBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jdXJyZW5jeSl9ID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2hvb3NlQ3VycmVuY3l9IC8+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUN1cnJlbmNpZXMubWFwKChjdXJyZW5jeSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbmN5LmlzRW5hYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2N1cnJlbmN5LnN5bWJvbH0+e2N1cnJlbmN5LnN5bWJvbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3goYnQudGV4dEFsaWduUmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5LCBidC5idG5MYXJnZSl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnNhdmV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblNlcnZpY2VGZWVzRm9ybSA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdTZXJ2aWNlRmVlc0Zvcm0nLCAvLyBhIHVuaXF1ZSBuYW1lIGZvciB0aGlzIGZvcm1cbiAgdmFsaWRhdGVcbn0pKFNlcnZpY2VGZWVzRm9ybSk7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBhdmFpbGFibGVDdXJyZW5jaWVzOiBzdGF0ZS5jdXJyZW5jeS5hdmFpbGFibGVDdXJyZW5jaWVzLFxuICBiYXNlOiBzdGF0ZS5jdXJyZW5jeS5iYXNlLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoU2VydmljZUZlZXNGb3JtKSkpOyIsImltcG9ydCB7IHVwZGF0ZVNlcnZpY2VGZWVzIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9TZXJ2aWNlRmVlcy91cGRhdGVTZXJ2aWNlRmVlcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdCh2YWx1ZXMsIGRpc3BhdGNoKSB7XG5cblx0ZGlzcGF0Y2goXG5cdFx0dXBkYXRlU2VydmljZUZlZXMoXG5cdFx0XHR2YWx1ZXMuZ3Vlc3RUeXBlLFxuXHRcdFx0dmFsdWVzLmd1ZXN0VmFsdWUsXG5cdFx0XHR2YWx1ZXMuaG9zdFR5cGUsXG5cdFx0XHR2YWx1ZXMuaG9zdFZhbHVlLFxuXHRcdFx0dmFsdWVzLmN1cnJlbmN5XG5cdFx0KVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJtaXQ7XG4iLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuXG4gIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCghdmFsdWVzLmd1ZXN0VmFsdWUgfHwgIXZhbHVlcy5ndWVzdFZhbHVlLnRvU3RyaW5nKCkudHJpbSgpKSAmJiB2YWx1ZXMuZ3Vlc3RWYWx1ZSAhPT0gMCkge1xuICAgIGVycm9ycy5ndWVzdFZhbHVlID0gbWVzc2FnZXMucHJvdmlkZUZpeGVkR3Vlc3RGZWU7XG4gIH1cblxuICBpZiAoKCF2YWx1ZXMuaG9zdFZhbHVlIHx8ICF2YWx1ZXMuaG9zdFZhbHVlLnRvU3RyaW5nKCkudHJpbSgpKSAmJiB2YWx1ZXMuaG9zdFZhbHVlICE9PSAwKSB7XG4gICAgZXJyb3JzLmhvc3RWYWx1ZSA9IG1lc3NhZ2VzLnByb3ZpZGVGaXhlZEhvc3RGZWU7XG4gIH1cblxuICBpZiAodmFsdWVzLmd1ZXN0VHlwZSA9PT0gJ2ZpeGVkJyB8fCB2YWx1ZXMuaG9zdFR5cGUgPT09ICdmaXhlZCcpIHtcbiAgICBpZiAoIXZhbHVlcy5jdXJyZW5jeSkge1xuICAgICAgZXJyb3JzLmN1cnJlbmN5ID0gbWVzc2FnZXMuY3VycmVuY3lSZXF1aXJlZExhYmVsO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc05hTih2YWx1ZXMuZ3Vlc3RWYWx1ZSkpIHtcbiAgICBlcnJvcnMuZ3Vlc3RWYWx1ZSA9IG1lc3NhZ2VzLm9ubHlOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKGlzTmFOKHZhbHVlcy5ob3N0VmFsdWUpKSB7XG4gICAgZXJyb3JzLmhvc3RWYWx1ZSA9IG1lc3NhZ2VzLm9ubHlOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKHZhbHVlcy5ndWVzdFR5cGUgPT09ICdmaXhlZCcpIHtcbiAgICBpZiAodmFsdWVzLmd1ZXN0VmFsdWUgJiYgcGFyc2VJbnQodmFsdWVzLmd1ZXN0VmFsdWUsIDEwKSA8IDApIHtcbiAgICAgIGVycm9ycy5ndWVzdFZhbHVlID0gbWVzc2FnZXMuaW52YWxpZDtcbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWVzLmhvc3RUeXBlID09PSAnZml4ZWQnKSB7XG4gICAgaWYgKHZhbHVlcy5ob3N0VmFsdWUgJiYgcGFyc2VJbnQodmFsdWVzLmhvc3RWYWx1ZSwgMTApIDwgMCkge1xuICAgICAgZXJyb3JzLmhvc3RWYWx1ZSA9IG1lc3NhZ2VzLmludmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlcy5ndWVzdFR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgIGlmICh2YWx1ZXMuZ3Vlc3RWYWx1ZSAmJiAocGFyc2VJbnQodmFsdWVzLmd1ZXN0VmFsdWUsIDEwKSA8IDAgfHwgcGFyc2VJbnQodmFsdWVzLmd1ZXN0VmFsdWUsIDEwKSA+IDk5KSkge1xuICAgICAgZXJyb3JzLmd1ZXN0VmFsdWUgPSBtZXNzYWdlcy5jaG9vc2VQcmVzZW50YWdlVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlcy5ob3N0VHlwZSA9PT0gJ3BlcmNlbnRhZ2UnKSB7XG4gICAgaWYgKHZhbHVlcy5ob3N0VmFsdWUgJiYgKHBhcnNlSW50KHZhbHVlcy5ob3N0VmFsdWUsIDEwKSA8IDAgfHwgcGFyc2VJbnQodmFsdWVzLmhvc3RWYWx1ZSwgMTApID4gOTkpKSB7XG4gICAgICBlcnJvcnMuaG9zdFZhbHVlID0gbWVzc2FnZXMuY2hvb3NlUHJlc2VudGFnZVZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9TZXJ2aWNlRmVlc1NldHRpbmdzLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9TZXJ2aWNlRmVlc1NldHRpbmdzLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1NlcnZpY2VGZWVzU2V0dGluZ3MuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtncmFwaHFsLCBncWwsIGNvbXBvc2V9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbi8vIFN0eWxlXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1NlcnZpY2VGZWVzU2V0dGluZ3MuY3NzJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgU2VydmljZUZlZXNGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NlcnZpY2VGZWVzRm9ybSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyJztcblxuY2xhc3MgU2VydmljZUZlZXNTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGdldFNlcnZpY2VGZWVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBndWVzdFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgZ3Vlc3RWYWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBob3N0VHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBob3N0VmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgIH0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBsb2FkaW5nOiB0cnVlXG4gICAgfVxuICB9O1xuXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGE6IHsgbG9hZGluZywgZ2V0U2VydmljZUZlZXMgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc2V0dGluZ3NDb2xsZWN0aW9uID0ge307XG4gICAgaWYobG9hZGluZyl7XG4gICAgICByZXR1cm4gPExvYWRlciB0eXBlPXtcInRleHRcIn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8U2VydmljZUZlZXNGb3JtIGluaXRpYWxWYWx1ZXM9e2dldFNlcnZpY2VGZWVzfSAvPlxuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBncmFwaHFsKGdxbCBgXG4gICAgICAgIHF1ZXJ5IGdldFNlcnZpY2VGZWVze1xuICAgICAgICAgIGdldFNlcnZpY2VGZWVze1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBndWVzdFR5cGVcbiAgICAgICAgICAgICAgZ3Vlc3RWYWx1ZVxuICAgICAgICAgICAgICBob3N0VHlwZVxuICAgICAgICAgICAgICBob3N0VmFsdWVcbiAgICAgICAgICAgICAgY3VycmVuY3lcbiAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgKSxcbikoU2VydmljZUZlZXNTZXR0aW5ncyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0JztcbmltcG9ydCBTZXJ2aWNlRmVlc1NldHRpbmdzIGZyb20gJy4vU2VydmljZUZlZXNTZXR0aW5ncyc7XG5pbXBvcnQgeyByZXN0cmljdFVybHMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FkbWluUHJpdmlsZWdlcyc7XG5cblxuY29uc3QgdGl0bGUgPSAnU2VydmljZSBGZWVzIFNldHRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgc3RvcmUgfSkge1xuXG4gIC8vIEZyb20gUmVkdXggU3RvcmVcbiAgbGV0IGlzQWRtaW5BdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQWRtaW5BdXRoZW50aWNhdGVkO1xuICBsZXQgYWRtaW5Qcml2aWxlZ2VzID0gc3RvcmUuZ2V0U3RhdGUoKS5hZG1pblByZXZpbGVnZXMucHJpdmlsZWdlcyAmJiBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzLnByaXZpbGVnZXM7XG5cblxuICBpZiAoIWlzQWRtaW5BdXRoZW50aWNhdGVkKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluL2xvZ2luJyB9O1xuICB9XG5cbiAgLy8gQWRtaW4gcmVzdHJpY3Rpb25cbiAgaWYgKCFyZXN0cmljdFVybHMoJy9zaXRlYWRtaW4vc2V0dGluZ3Mvc2VydmljZWZlZXMnLCBhZG1pblByaXZpbGVnZXMpKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluJyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IDxBZG1pbkxheW91dD48U2VydmljZUZlZXNTZXR0aW5ncyB0aXRsZT17dGl0bGV9IC8+PC9BZG1pbkxheW91dD4sXG4gIH07XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQTNCQTtBQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQS9DQTtBQUNBO0FBZ0RBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBakhBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFpSEE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBR0E7Ozs7Ozs7O0FDN0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBRkE7QUFDQTtBQUhBO0FBaUJBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFrQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=