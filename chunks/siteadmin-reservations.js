require("source-map-support").install();
exports.ids = ["siteadmin-reservations"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ReservationManagement/ReservationManagement.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.ReservationManagement-rentAllHeaderAdmin-Fqflu {\n  position: fixed !important;\n}\n.ReservationManagement-adminLayout-1K3b8 {\n  padding-top: 64px !important;\n}\n.ReservationManagement-box-3bMzz h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.ReservationManagement-exportLink-3fzrh {\n  margin-bottom: -29px;\n}\n.ReservationManagement-blockcenter-1tPk2 {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.ReservationManagement-panelHeader-iIe9y {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.ReservationManagement-currencyselect-3kk-q {\n  width: 100%;\n  margin-right: 0px;\n}\n.ReservationManagement-panelHeader-iIe9y {\n  overflow: hidden;\n  position: relative;\n}\n.ReservationManagement-mar0-1mjum {\n  margin-left: 0;\n  margin-right: 0;\n}\n.ReservationManagement-navbar-1obuH > .ReservationManagement-container-2u6xC .ReservationManagement-navbar-brand-pR189,\n.ReservationManagement-navbar-1obuH > .ReservationManagement-container-fluid-2TsjL .ReservationManagement-navbar-brand-pR189 {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .ReservationManagement-blockcenter-1tPk2 {\n    padding: 0px;\n  }\n  .ReservationManagement-panelHeader-iIe9y {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.ReservationManagement-pagecontentWrapper-1HCKr {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.ReservationManagement-headerTitle-Les56 {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.ReservationManagement-panelHeader-iIe9y {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.ReservationManagement-table-365yz {\n\tdisplay: table;\n}\n.ReservationManagement-tableRow-2JFC2 {\n\tdisplay: table-row;\n}\n.ReservationManagement-tableCell-FctaB {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.ReservationManagement-formGroup-22xaO {\n\tmargin-bottom: 6px;\n}\n.ReservationManagement-select-nwwGV {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.ReservationManagement-noMargin-cp4X0 {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.ReservationManagement-exportLink-3fzrh {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.ReservationManagement-labelTextNew-3AOGh {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.ReservationManagement-displayInline-2n8RP {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.ReservationManagement-btnUPdate-2AOOU {\n\tdisplay: inline-block;\n}\n.ReservationManagement-btnModalDelete-23qWT {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.ReservationManagement-radioBtn-n8_m4 {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.ReservationManagement-btnUPdate-2AOOU {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.ReservationManagement-btnModalDelete-23qWT {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.ReservationManagement-btnWidth-3CuWO {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.ReservationManagement-bannerImageBg-WQyZC {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.ReservationManagement-bannerDelete-1axrg {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.ReservationManagement-modalRoot-1N-LK {\n\tpadding: 32px;\n}\n.ReservationManagement-modalBorderBottom-3y_Wy {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.ReservationManagement-logInModalBody-1_OFn {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.ReservationManagement-exportSection-2hhW6 {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.ReservationManagement-exportSectionGridSub-2ySr9 {\n\tgrid-template-columns: 50% 49% !important;\n}\n.ReservationManagement-exportText-2lnDD {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.ReservationManagement-exportLinkImg-33ZfA {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.ReservationManagement-vtrMiddle-3FkUm {\n\tvertical-align: middle;\n}\n.ReservationManagement-exportImg-3qmcG {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.ReservationManagement-profileViewlabel-1Nv26 {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.ReservationManagement-profileViewMainContent-1A_ZO {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.ReservationManagement-profileViewMain-3Z-Ur {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.ReservationManagement-profileViewInner-1ml69 {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.ReservationManagement-profileImageSection-2QU96 {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.ReservationManagement-lastviewInner-rCuvO {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.ReservationManagement-pagecontentWrapper-1HCKr {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.ReservationManagement-exportSection-2hhW6 {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.ReservationManagement-exportText-2lnDD {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.ReservationManagement-exportSectionGridSub-2ySr9 {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.ReservationManagement-profileViewlabel-1Nv26 {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.ReservationManagement-profileViewMainContent-1A_ZO {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.ReservationManagement-pagecontentWrapper-1HCKr {\n\t\tmargin-left: 0;\n\t}\n}\n.ReservationManagement-ChangeToUpperCase-3YfBX{\n    text-transform: uppercase\n}\n.ReservationManagement-noBorder-2ptJT {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ReservationManagement/ReservationManagement.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"ReservationManagement.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "ReservationManagement-rentAllHeaderAdmin-Fqflu",
	"adminLayout": "ReservationManagement-adminLayout-1K3b8",
	"box": "ReservationManagement-box-3bMzz",
	"exportLink": "ReservationManagement-exportLink-3fzrh",
	"blockcenter": "ReservationManagement-blockcenter-1tPk2",
	"panelHeader": "ReservationManagement-panelHeader-iIe9y",
	"currencyselect": "ReservationManagement-currencyselect-3kk-q",
	"mar0": "ReservationManagement-mar0-1mjum",
	"navbar": "ReservationManagement-navbar-1obuH",
	"container": "ReservationManagement-container-2u6xC",
	"navbar-brand": "ReservationManagement-navbar-brand-pR189",
	"container-fluid": "ReservationManagement-container-fluid-2TsjL",
	"pagecontentWrapper": "ReservationManagement-pagecontentWrapper-1HCKr",
	"headerTitle": "ReservationManagement-headerTitle-Les56",
	"table": "ReservationManagement-table-365yz",
	"tableRow": "ReservationManagement-tableRow-2JFC2",
	"tableCell": "ReservationManagement-tableCell-FctaB",
	"formGroup": "ReservationManagement-formGroup-22xaO",
	"select": "ReservationManagement-select-nwwGV",
	"noMargin": "ReservationManagement-noMargin-cp4X0",
	"labelTextNew": "ReservationManagement-labelTextNew-3AOGh",
	"displayInline": "ReservationManagement-displayInline-2n8RP",
	"btnUPdate": "ReservationManagement-btnUPdate-2AOOU",
	"btnModalDelete": "ReservationManagement-btnModalDelete-23qWT",
	"radioBtn": "ReservationManagement-radioBtn-n8_m4",
	"btnWidth": "ReservationManagement-btnWidth-3CuWO",
	"bannerImageBg": "ReservationManagement-bannerImageBg-WQyZC",
	"bannerDelete": "ReservationManagement-bannerDelete-1axrg",
	"modalRoot": "ReservationManagement-modalRoot-1N-LK",
	"modalBorderBottom": "ReservationManagement-modalBorderBottom-3y_Wy",
	"logInModalBody": "ReservationManagement-logInModalBody-1_OFn",
	"exportSection": "ReservationManagement-exportSection-2hhW6",
	"exportSectionGridSub": "ReservationManagement-exportSectionGridSub-2ySr9",
	"exportText": "ReservationManagement-exportText-2lnDD",
	"exportLinkImg": "ReservationManagement-exportLinkImg-33ZfA",
	"vtrMiddle": "ReservationManagement-vtrMiddle-3FkUm",
	"exportImg": "ReservationManagement-exportImg-3qmcG",
	"profileViewlabel": "ReservationManagement-profileViewlabel-1Nv26",
	"profileViewMainContent": "ReservationManagement-profileViewMainContent-1A_ZO",
	"profileViewMain": "ReservationManagement-profileViewMain-3Z-Ur",
	"profileViewInner": "ReservationManagement-profileViewInner-1ml69",
	"profileImageSection": "ReservationManagement-profileImageSection-2QU96",
	"lastviewInner": "ReservationManagement-lastviewInner-rCuvO",
	"ChangeToUpperCase": "ReservationManagement-ChangeToUpperCase-3YfBX",
	"noBorder": "ReservationManagement-noBorder-2ptJT"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/reservations/Reservations.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/reservations/Reservations.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"Reservations.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./public/adminIcons/export.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/export.png?12472769";

/***/ }),

/***/ "./src/components/siteadmin/ReservationManagement/Payout.js":
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
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/ReservationManagement.css");
/* harmony import */ var _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_Reservation_payoutModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/actions/Reservation/payoutModal.js");
/* harmony import */ var _helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/helpers/queryEncryption.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _helpers_dateRange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/helpers/dateRange.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ReservationManagement/Payout.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Redux Action


 // Translation

 //Helper



class Payout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      hostId,
      id,
      hostPayout,
      amount,
      currency,
      openReservationModal,
      reservationState,
      cancelData,
      hostServiceFee
    } = this.props;
    const {
      transactionData,
      hostData
    } = this.props;
    let hostServiceFeeAmount = hostServiceFee ? hostServiceFee : 0;
    let amountPaytoHost = amount - hostServiceFeeAmount;
    let amountCurrency = currency;
    let hostEmail;

    if (reservationState === 'cancelled' && cancelData) {
      amountPaytoHost = cancelData.payoutToHost;
      amountCurrency = cancelData.currency;
    }

    if (hostData && hostData.userData) {
      hostEmail = Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_8__["decode"])(hostData.userData.email);
    }

    const formName = 'ReservationPaymentForm';
    const initialData = {
      type: 'host',
      hostId,
      reservationId: id,
      receiverEmail: hostPayout.payEmail,
      payoutId: hostPayout.id,
      amount: amountPaytoHost,
      currency: amountCurrency,
      paymentMethodId: hostPayout.methodId,
      payoutCurrency: hostPayout.currency,
      last4Digits: hostPayout.last4Digits,
      hostEmail
    };
    openReservationModal(formName, initialData);
  }

  render() {
    const {
      checkIn,
      loading,
      reservationId,
      reservationState,
      completed,
      cancelData,
      country
    } = this.props;
    const {
      id,
      amount,
      currency,
      hostPayout,
      hostTransaction,
      openReservationModal
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    let amountPaytoHost = 0;

    if (hostPayout === null || hostPayout.payEmail === undefined) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 14
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noPayoutMethod));
    }

    if (cancelData) {
      amountPaytoHost = cancelData.payoutToHost;
    }

    if (reservationState === 'expired' || reservationState === 'declined' || reservationState === 'cancelled' && amountPaytoHost <= 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 14
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].closedLabel));
    }

    if (loading && reservationId === id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_5___default.a.processingtext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 14
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].processingLabel));
    }

    if (hostTransaction != null && hostTransaction.id != undefined || completed && reservationId === id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 14
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].completedLabel));
    }

    let nextDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).add(1, 'days');
    let today = Object(_helpers_dateRange__WEBPACK_IMPORTED_MODULE_10__["getDateUsingTimeZone"])(country, false);
    let dayDifference = nextDay.diff(today, 'days');
    let status = formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].messageStatus5);
    let action = false;

    if (reservationState === 'completed' || reservationState === 'cancelled') {
      status = formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].readyTopay);
      action = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }, status), !action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 22
      }
    }, status));
  }

}

_defineProperty(Payout, "propTypes", {
  hostId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hostPayout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    payEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    methodId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    last4Digits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
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
  }),
  transactionData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hostData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  }),
  hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});

_defineProperty(Payout, "defaultProps", {
  hostPayout: null,
  loading: false,
  completed: false,
  reservationId: 0
});

const mapState = state => ({
  loading: state.reservation.payoutLoading,
  reservationId: state.reservation.reservationId,
  completed: state.reservation.payoutCompleted
});

const mapDispatch = {
  openReservationModal: _actions_Reservation_payoutModal__WEBPACK_IMPORTED_MODULE_7__["openReservationModal"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_5___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch)(Payout))));

/***/ }),

/***/ "./src/components/siteadmin/ReservationManagement/Refund.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/ReservationManagement.css");
/* harmony import */ var _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_Reservation_payoutModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/actions/Reservation/payoutModal.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ReservationManagement/Refund.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Redux Action


 // Translation



class Refund extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      id,
      transactionData,
      openReservationModal,
      reservationState,
      cancelData
    } = this.props;
    const formName = 'ReservationPaymentForm';
    let amount = transactionData.total;
    let currency = transactionData.currency;

    if (reservationState === 'cancelled' && cancelData) {
      amount = cancelData.refundToGuest;
      currency = cancelData.currency;
    }

    const initialData = {
      type: 'guest',
      reservationId: id,
      receiverEmail: transactionData.payerEmail,
      receiverId: transactionData.payerId,
      payerEmail: transactionData.receiverEmail,
      payerId: transactionData.receiverId,
      amount,
      currency,
      paymentMethodId: transactionData.paymentMethodId,
      transactionId: transactionData.transactionId
    };
    openReservationModal(formName, initialData);
  }

  render() {
    const {
      formatMessage
    } = this.props.intl;
    const {
      id,
      transactionData,
      refundData,
      reservationState,
      cancelData
    } = this.props;
    const {
      openReservationModal,
      loading,
      reservationId,
      completed
    } = this.props;
    let amountPaytoGuest = 0;

    if (cancelData) {
      amountPaytoGuest = cancelData.refundToGuest;
    }

    if (transactionData === null || transactionData === undefined) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 14
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].transactionNotfound));
    }

    if (reservationState === 'expired' || reservationState === 'cancelled' || reservationState === 'declined') {
      if (reservationState === 'cancelled' && amountPaytoGuest === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 16
          }
        }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].notEligible));
      }

      if (loading && reservationId === id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_4___default.a.processingtext,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 16
          }
        }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].processingLabel));
      }

      if (refundData != null && refundData.id != undefined || completed && reservationId === id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 16
          }
        }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].completedLabel));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.handleClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, " ", formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].proceedRefund), " "));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 14
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].notEligible));
    }
  }

}

_defineProperty(Refund, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  reservationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  completed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  openReservationModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  transactionData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    payerEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    paymentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    paymentMethodId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    transactionId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }),
  refundData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    receiverEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }),
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    refundToGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

_defineProperty(Refund, "defaultProps", {
  transactionData: null,
  refundData: null,
  cancelData: null
});

const mapState = state => ({
  loading: state.reservation.refundLoading,
  reservationId: state.reservation.reservationId,
  completed: state.reservation.refundCompleted
});

const mapDispatch = {
  openReservationModal: _actions_Reservation_payoutModal__WEBPACK_IMPORTED_MODULE_5__["openReservationModal"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_4___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(Refund))));

/***/ }),

/***/ "./src/components/siteadmin/ReservationManagement/ReservationManagement.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/ReservationManagement/ReservationManagement.css");
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

/***/ "./src/components/siteadmin/ReservationManagement/ReservationManagement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("reactable");
/* harmony import */ var reactable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_Reservation_viewReceiptAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/actions/Reservation/viewReceiptAdmin.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/ReservationManagement.css");
/* harmony import */ var _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Payout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/Payout.js");
/* harmony import */ var _Refund__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/Refund.js");
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _ModalForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/ModalForm/ModalForm.js");
/* harmony import */ var _CustomPagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/CustomPagination/CustomPagination.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/reservationsQuery.graphql");
/* harmony import */ var _reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_adminIcons_export_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/adminIcons/export.png");
/* harmony import */ var _public_adminIcons_export_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_export_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _helpers_formatReservationState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/helpers/formatReservationState.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/ReservationManagement/ReservationManagement.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Redux Action

 // Style



 // Components






 // Translation


 //graphql

 //Images

 //Helper



class ReservationManagement extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSearchChange", e => {
      const self = this;

      if (self.state.typingTimeout) {
        clearTimeout(self.state.typingTimeout);
      }

      self.setState({
        searchList: e.target.value,
        typing: false,
        typingTimeout: setTimeout(function () {
          self.handleClick(self.state.searchList);
        }, 450)
      });
    });

    this.state = {
      currentPage: 1,
      searchList: '',
      typing: false,
      typingTimeout: 0
    }, this.paginationData = this.paginationData.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      getAllReservations: {
        completed,
        loading
      }
    } = nextProps;
    const {
      searchList,
      currentPage
    } = this.state;
    const {
      getAllReservations: {
        refetch
      }
    } = this.props;
    let variables = {
      currentPage,
      searchList
    };

    if (completed && !loading) {
      refetch(variables);
    }
  }

  paginationData(currentPage) {
    const {
      getAllReservations: {
        refetch
      }
    } = this.props;
    let variables = {
      currentPage
    };
    this.setState({
      currentPage
    });
    refetch(variables);
  }

  handleClick(searchList) {
    const {
      getAllReservations: {
        refetch
      }
    } = this.props;
    const {
      currentPage
    } = this.state;
    let variables = {
      currentPage: 1,
      searchList: searchList
    };
    this.setState({
      currentPage: 1
    });
    refetch(variables);
  }

  render() {
    const {
      data,
      title,
      viewReceiptAdmin,
      getAllReservations
    } = this.props;
    const {
      getAllReservations: {
        loading,
        getAllReservationAdmin,
        refetch
      }
    } = this.props;
    const {
      currentPage,
      searchList
    } = this.state;
    let userType = 'host';
    const {
      formatMessage
    } = this.props.intl;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.pagecontentWrapper, 'pagecontentAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].panelReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.exportSection, _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.exportSectionGridSub),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
      type: "text",
      placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].search),
      onChange: e => this.handleSearchChange(e),
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('searchInputControl', 'searchInputControlWidth', 'searchInputControlAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, getAllReservationAdmin && getAllReservationAdmin.reservationData && getAllReservationAdmin.reservationData.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: `/export-admin-data?type=reservations&keyword=${searchList}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.exportText, 'commonFloatLeft'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 138
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.vtrMiddle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].exportDataIntoCSV, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 49
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.exportLinkImg, 'exportLinkImgCommon'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_adminIcons_export_png__WEBPACK_IMPORTED_MODULE_19___default.a,
      className: _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.exportImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('table-responsive', 'NewAdminResponsiveTable', 'NewResponsiveTableAdmin'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      className: "table",
      noDataText: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].noRecordFound) // filterable={['Code']}
      ,
      sortable: true // itemsPerPage={20}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Thead"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].reservationId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].codeLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].adminListTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].refundToGuest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].subTotalLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].payoutLabelAdmin)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].details))), getAllReservationAdmin && getAllReservationAdmin.reservationData && getAllReservationAdmin.reservationData.length > 0 && getAllReservationAdmin.reservationData.map(function (value, index) {
      let subTotal = value.total + value.guestServiceFee;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Tr"], {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].reservationId),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].reservationId),
        data: value.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].codeLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].codeLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 23
        }
      }, value.confirmationCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        className: _ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a.ChangeToUpperCase,
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].status),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].status),
        data: Object(_helpers_formatReservationState__WEBPACK_IMPORTED_MODULE_20__["default"])(value.reservationState),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 23
        }
      }), value.listData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].adminListTitle),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].adminListTitle),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 43
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/rooms/" + value.listId,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 27
        }
      }, value.listData.title)), !value.listData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].adminListTitle),
        data: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].dataMissing),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 44
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].refundToGuest),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].refundToGuest),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Refund__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: value.id,
        reservationState: value.reservationState,
        transactionData: value.transaction,
        refundData: value.refundStatus,
        cancelData: value.cancellationDetails,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].subTotalLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].subTotalLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_12__["default"], {
        amount: subTotal,
        from: value.currency,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].payoutLabelAdmin),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].payoutLabelAdmin),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Payout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        hostId: value.hostId,
        checkIn: value.checkIn,
        id: value.id,
        hostPayout: value.hostPayout,
        amount: value.total,
        currency: value.currency,
        hostTransaction: value.hostTransaction,
        reservationState: value.reservationState,
        cancelData: value.cancellationDetails,
        hostData: value.hostData,
        hostServiceFee: value.hostServiceFee,
        country: value.listData ? value.listData.country : '',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].details),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].details),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
        to: "/siteadmin/viewreservation/" + value.id + '/reservation',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].viewLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 27
        }
      })))));
    }))), getAllReservationAdmin && getAllReservationAdmin.reservationData && getAllReservationAdmin.reservationData.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomPagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
      total: getAllReservationAdmin.count,
      currentPage: currentPage,
      defaultCurrent: 1,
      defaultPageSize: 10,
      change: this.paginationData,
      paginationLabel: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_17__["default"].panelReservation),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 15
      }
    }))));
  }

}

_defineProperty(ReservationManagement, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    refetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
    getTransactionHistory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      reservationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
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
          payEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
          methodId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
          last4Digits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
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
          currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
          paymentMethodId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
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
          hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
        })
      }))
    })
  }).isRequired,
  viewReceiptAdmin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(ReservationManagement, "defaultProps", {
  getAllReservations: {
    loading: true,
    getAllReservationAdmin: {
      count: null,
      reservationData: []
    }
  }
});

const mapState = state => ({
  completed: state.reservation.completed,
  loading: state.reservation.loading
});

const mapDispatch = {
  viewReceiptAdmin: _actions_Reservation_viewReceiptAdmin__WEBPACK_IMPORTED_MODULE_6__["viewReceiptAdmin"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["compose"])(react_intl__WEBPACK_IMPORTED_MODULE_16__["injectIntl"], isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_ReservationManagement_css__WEBPACK_IMPORTED_MODULE_9___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["graphql"])(_reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_18___default.a, {
  name: 'getAllReservations',
  options: {
    variables: {
      currentPage: 1,
      searchList: ''
    },
    fetchPolicy: 'network-only'
  }
}))(ReservationManagement));

/***/ }),

/***/ "./src/components/siteadmin/ReservationManagement/reservationsQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllReservationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchList"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllReservationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"currentPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchList"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationState"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"confirmationCode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hostPayout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"methodId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last4Digits"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostTransaction"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"guestData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payerId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payerEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"receiverEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"receiverId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paymentType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"transactionId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"refundStatus"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"receiverEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"cancellationDetails"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"refundToGuest"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payoutToHost"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"threadData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"threadId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":1234}};

module.exports = doc;

/***/ }),

/***/ "./src/helpers/formatReservationState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatReservationState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/helpers/formatReservationState.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const reservationState = [{
  type: 'pending',
  key: 'messageStatus5'
}, {
  type: 'expired',
  key: 'messageStatus9'
}, {
  type: 'approved',
  key: 'messageStatus4'
}, {
  type: 'declined',
  key: 'messageStatus3'
}, {
  type: 'completed',
  key: 'completedLabel'
}, {
  type: 'cancelled',
  key: 'messageStatus11'
}];
function formatReservationState(type) {
  let state = reservationState.find(element => element.type === type);
  if (!state || !state.key) return type;else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_2__["default"][state.key], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }));
}

/***/ }),

/***/ "./src/routes/siteadmin/reservations/Reservations.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/reservations/Reservations.css");
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

/***/ "./src/routes/siteadmin/reservations/Reservations.js":
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
/* harmony import */ var _Reservations_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/reservations/Reservations.css");
/* harmony import */ var _Reservations_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Reservations_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/siteadmin/reservations/reservationsQuery.graphql");
/* harmony import */ var _reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_siteadmin_ReservationManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/ReservationManagement/ReservationManagement.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Loader/Loader.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/reservations/Reservations.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style


 // Query

 // Component




class Reservations extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data: {
        loading
      }
    } = this.props;

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 14
        }
      });
    }

    const {
      data,
      data: {
        getAllReservationAdmin,
        refetch
      }
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_ReservationManagement__WEBPACK_IMPORTED_MODULE_6__["default"] // data={data} 
    // refetch={refetch} 
    , {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 12
      }
    });
  }

}

_defineProperty(Reservations, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getAllReservationAdmin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_Reservations_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_reservationsQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a, {
  options: {
    variables: {
      currentPage: 1,
      searchList: ''
    },
    fetchPolicy: 'network-only',
    ssr: false
  }
}))(Reservations));

/***/ }),

/***/ "./src/routes/siteadmin/reservations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _Reservations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/reservations/Reservations.js");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/helpers/adminPrivileges.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/reservations/index.js";




const title = 'Reservations';
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


  if (!Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__["restrictUrls"])('/siteadmin/reservations', adminPrivileges)) {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Reservations__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ }),

/***/ "./src/routes/siteadmin/reservations/reservationsQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllReservationAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchList"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllReservationAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"currentPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchList"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationState"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"confirmationCode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"taxRate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hostPayout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"methodId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last4Digits"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostTransaction"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"guestData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payerId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payerEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"receiverEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"receiverId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paymentType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"transactionId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"refundStatus"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"receiverEmail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"cancellationDetails"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"refundToGuest"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payoutToHost"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"threadData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"threadId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":1246}};

module.exports = doc;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1yZXNlcnZhdGlvbnMuanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9SZXNlcnZhdGlvbk1hbmFnZW1lbnQvUmVzZXJ2YXRpb25NYW5hZ2VtZW50LmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3Jlc2VydmF0aW9ucy9SZXNlcnZhdGlvbnMuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZXhwb3J0LnBuZyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9SZXNlcnZhdGlvbk1hbmFnZW1lbnQvUGF5b3V0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1Jlc2VydmF0aW9uTWFuYWdlbWVudC9SZWZ1bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1Jlc2VydmF0aW9uTWFuYWdlbWVudC9SZXNlcnZhdGlvbk1hbmFnZW1lbnQuY3NzPzE4ODIiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vUmVzZXJ2YXRpb25NYW5hZ2VtZW50L1Jlc2VydmF0aW9uTWFuYWdlbWVudC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9SZXNlcnZhdGlvbk1hbmFnZW1lbnQvcmVzZXJ2YXRpb25zUXVlcnkuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9oZWxwZXJzL2Zvcm1hdFJlc2VydmF0aW9uU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaXRlYWRtaW4vcmVzZXJ2YXRpb25zL1Jlc2VydmF0aW9ucy5jc3M/Yzc4OCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3Jlc2VydmF0aW9ucy9SZXNlcnZhdGlvbnMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9yZXNlcnZhdGlvbnMvaW5kZXguanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zUXVlcnkuZ3JhcGhxbCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1yZW50QWxsSGVhZGVyQWRtaW4tRnFmbHUge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtYWRtaW5MYXlvdXQtMUszYjgge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1ib3gtM2JNenogaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRMaW5rLTNmenJoIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWJsb2NrY2VudGVyLTF0UGsyIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtcGFuZWxIZWFkZXItaUllOXkge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1jdXJyZW5jeXNlbGVjdC0za2stcSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXBhbmVsSGVhZGVyLWlJZTl5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtbWFyMC0xbWp1bSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1uYXZiYXItMW9idUggPiAuUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWNvbnRhaW5lci0ydTZ4QyAuUmVzZXJ2YXRpb25NYW5hZ2VtZW50LW5hdmJhci1icmFuZC1wUjE4OSxcXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LW5hdmJhci0xb2J1SCA+IC5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtY29udGFpbmVyLWZsdWlkLTJUc2pMIC5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtbmF2YmFyLWJyYW5kLXBSMTg5IHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLlJlc2VydmF0aW9uTWFuYWdlbWVudC1ibG9ja2NlbnRlci0xdFBrMiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtcGFuZWxIZWFkZXItaUllOXkge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1wYWdlY29udGVudFdyYXBwZXItMUhDS3Ige1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtaGVhZGVyVGl0bGUtTGVzNTYge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1wYW5lbEhlYWRlci1pSWU5eSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtdGFibGUtMzY1eXoge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXRhYmxlUm93LTJKRkMyIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtdGFibGVDZWxsLUZjdGFCIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWZvcm1Hcm91cC0yMnhhTyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXNlbGVjdC1ud3dHViB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LW5vTWFyZ2luLWNwNFgwIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtZXhwb3J0TGluay0zZnpyaCB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1sYWJlbFRleHROZXctM0FPR2gge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1kaXNwbGF5SW5saW5lLTJuOFJQIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1idG5VUGRhdGUtMkFPT1Uge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1idG5Nb2RhbERlbGV0ZS0yM3FXVCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXJhZGlvQnRuLW44X200IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWJ0blVQZGF0ZS0yQU9PVSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LlJlc2VydmF0aW9uTWFuYWdlbWVudC1idG5Nb2RhbERlbGV0ZS0yM3FXVCB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LlJlc2VydmF0aW9uTWFuYWdlbWVudC1idG5XaWR0aC0zQ3VXTyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1iYW5uZXJJbWFnZUJnLVdReVpDIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWJhbm5lckRlbGV0ZS0xYXhyZyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1tb2RhbFJvb3QtMU4tTEsge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtbW9kYWxCb3JkZXJCb3R0b20tM3lfV3kge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtbG9nSW5Nb2RhbEJvZHktMV9PRm4ge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWV4cG9ydFNlY3Rpb24tMmhoVzYge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtZXhwb3J0U2VjdGlvbkdyaWRTdWItMnlTcjkge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWV4cG9ydFRleHQtMmxuREQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRMaW5rSW1nLTMzWmZBIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXZ0ck1pZGRsZS0zRmtVbSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRJbWctM3FtY0cge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXByb2ZpbGVWaWV3bGFiZWwtMU52MjYge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtcHJvZmlsZVZpZXdNYWluQ29udGVudC0xQV9aTyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtcHJvZmlsZVZpZXdNYWluLTNaLVVyIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1wcm9maWxlVmlld0lubmVyLTFtbDY5IHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXByb2ZpbGVJbWFnZVNlY3Rpb24tMlFVOTYge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLlJlc2VydmF0aW9uTWFuYWdlbWVudC1sYXN0dmlld0lubmVyLXJDdXZPIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXBhZ2Vjb250ZW50V3JhcHBlci0xSENLciB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRTZWN0aW9uLTJoaFc2IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtZXhwb3J0VGV4dC0ybG5ERCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRTZWN0aW9uR3JpZFN1Yi0yeVNyOSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtcHJvZmlsZVZpZXdsYWJlbC0xTnYyNiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LlJlc2VydmF0aW9uTWFuYWdlbWVudC1wcm9maWxlVmlld01haW5Db250ZW50LTFBX1pPIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXBhZ2Vjb250ZW50V3JhcHBlci0xSENLciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uUmVzZXJ2YXRpb25NYW5hZ2VtZW50LUNoYW5nZVRvVXBwZXJDYXNlLTNZZkJYe1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5SZXNlcnZhdGlvbk1hbmFnZW1lbnQtbm9Cb3JkZXItMnB0SlQge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1Jlc2VydmF0aW9uTWFuYWdlbWVudC9SZXNlcnZhdGlvbk1hbmFnZW1lbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsOEJBQThCO0FBQzlCO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEOztDQUVDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0M7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtBQUNELHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWjtBQUNELDZEQUE2RDtBQUM3RDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsaUNBQWlDO0NBQ2pDLCtDQUErQztDQUMvQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0tBQ3RCLHVCQUF1QjtTQUNuQixvQkFBb0I7Q0FDNUIsZUFBZTtDQUNmLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQztFQUNDLG9CQUFvQjtRQUNkLGNBQWM7UUFDZCxlQUFlO0VBQ3JCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyx1Q0FBdUM7RUFDdkM7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtDQUNEO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0M7RUFDQyxlQUFlO0VBQ2Y7Q0FDRDtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRCw0QkFBNEJcIixcImZpbGVcIjpcIlJlc2VydmF0aW9uTWFuYWdlbWVudC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnJlbnRBbGxIZWFkZXJBZG1pbiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLmFkbWluTGF5b3V0IHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmV4cG9ydExpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5ibG9ja2NlbnRlciB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmN1cnJlbmN5c2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFyMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcXG4ubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmJsb2NrY2VudGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLnBhbmVsSGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGFibGUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udGFibGVSb3cge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLnRhYmxlQ2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLmxhYmVsVGV4dE5ldyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uZGlzcGxheUlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5idG5VUGRhdGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5yYWRpb0J0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmJ0blVQZGF0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuYnRuV2lkdGgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5iYW5uZXJJbWFnZUJnIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYmFubmVyRGVsZXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubW9kYWxSb290IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4ubW9kYWxCb3JkZXJCb3R0b20ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5sb2dJbk1vZGFsQm9keSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5leHBvcnRTZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uZXhwb3J0VGV4dCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhwb3J0TGlua0ltZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnZ0ck1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmV4cG9ydEltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4ucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5wcm9maWxlVmlld01haW4ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucHJvZmlsZVZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLnByb2ZpbGVJbWFnZVNlY3Rpb24ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxhc3R2aWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5leHBvcnRTZWN0aW9uIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5leHBvcnRUZXh0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkNoYW5nZVRvVXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5ub0JvcmRlciB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyZW50QWxsSGVhZGVyQWRtaW5cIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtcmVudEFsbEhlYWRlckFkbWluLUZxZmx1XCIsXG5cdFwiYWRtaW5MYXlvdXRcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtYWRtaW5MYXlvdXQtMUszYjhcIixcblx0XCJib3hcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtYm94LTNiTXp6XCIsXG5cdFwiZXhwb3J0TGlua1wiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRMaW5rLTNmenJoXCIsXG5cdFwiYmxvY2tjZW50ZXJcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtYmxvY2tjZW50ZXItMXRQazJcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1wYW5lbEhlYWRlci1pSWU5eVwiLFxuXHRcImN1cnJlbmN5c2VsZWN0XCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWN1cnJlbmN5c2VsZWN0LTNray1xXCIsXG5cdFwibWFyMFwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1tYXIwLTFtanVtXCIsXG5cdFwibmF2YmFyXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LW5hdmJhci0xb2J1SFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1jb250YWluZXItMnU2eENcIixcblx0XCJuYXZiYXItYnJhbmRcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtbmF2YmFyLWJyYW5kLXBSMTg5XCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWNvbnRhaW5lci1mbHVpZC0yVHNqTFwiLFxuXHRcInBhZ2Vjb250ZW50V3JhcHBlclwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1wYWdlY29udGVudFdyYXBwZXItMUhDS3JcIixcblx0XCJoZWFkZXJUaXRsZVwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1oZWFkZXJUaXRsZS1MZXM1NlwiLFxuXHRcInRhYmxlXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXRhYmxlLTM2NXl6XCIsXG5cdFwidGFibGVSb3dcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtdGFibGVSb3ctMkpGQzJcIixcblx0XCJ0YWJsZUNlbGxcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtdGFibGVDZWxsLUZjdGFCXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWZvcm1Hcm91cC0yMnhhT1wiLFxuXHRcInNlbGVjdFwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1zZWxlY3Qtbnd3R1ZcIixcblx0XCJub01hcmdpblwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1ub01hcmdpbi1jcDRYMFwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1sYWJlbFRleHROZXctM0FPR2hcIixcblx0XCJkaXNwbGF5SW5saW5lXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWRpc3BsYXlJbmxpbmUtMm44UlBcIixcblx0XCJidG5VUGRhdGVcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtYnRuVVBkYXRlLTJBT09VXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtYnRuTW9kYWxEZWxldGUtMjNxV1RcIixcblx0XCJyYWRpb0J0blwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1yYWRpb0J0bi1uOF9tNFwiLFxuXHRcImJ0bldpZHRoXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWJ0bldpZHRoLTNDdVdPXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1iYW5uZXJJbWFnZUJnLVdReVpDXCIsXG5cdFwiYmFubmVyRGVsZXRlXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWJhbm5lckRlbGV0ZS0xYXhyZ1wiLFxuXHRcIm1vZGFsUm9vdFwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1tb2RhbFJvb3QtMU4tTEtcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1tb2RhbEJvcmRlckJvdHRvbS0zeV9XeVwiLFxuXHRcImxvZ0luTW9kYWxCb2R5XCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWxvZ0luTW9kYWxCb2R5LTFfT0ZuXCIsXG5cdFwiZXhwb3J0U2VjdGlvblwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1leHBvcnRTZWN0aW9uLTJoaFc2XCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtZXhwb3J0U2VjdGlvbkdyaWRTdWItMnlTcjlcIixcblx0XCJleHBvcnRUZXh0XCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWV4cG9ydFRleHQtMmxuRERcIixcblx0XCJleHBvcnRMaW5rSW1nXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWV4cG9ydExpbmtJbWctMzNaZkFcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtdnRyTWlkZGxlLTNGa1VtXCIsXG5cdFwiZXhwb3J0SW1nXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWV4cG9ydEltZy0zcW1jR1wiLFxuXHRcInByb2ZpbGVWaWV3bGFiZWxcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtcHJvZmlsZVZpZXdsYWJlbC0xTnYyNlwiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJSZXNlcnZhdGlvbk1hbmFnZW1lbnQtcHJvZmlsZVZpZXdNYWluQ29udGVudC0xQV9aT1wiLFxuXHRcInByb2ZpbGVWaWV3TWFpblwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1wcm9maWxlVmlld01haW4tM1otVXJcIixcblx0XCJwcm9maWxlVmlld0lubmVyXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXByb2ZpbGVWaWV3SW5uZXItMW1sNjlcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LXByb2ZpbGVJbWFnZVNlY3Rpb24tMlFVOTZcIixcblx0XCJsYXN0dmlld0lubmVyXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LWxhc3R2aWV3SW5uZXItckN1dk9cIixcblx0XCJDaGFuZ2VUb1VwcGVyQ2FzZVwiOiBcIlJlc2VydmF0aW9uTWFuYWdlbWVudC1DaGFuZ2VUb1VwcGVyQ2FzZS0zWWZCWFwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiUmVzZXJ2YXRpb25NYW5hZ2VtZW50LW5vQm9yZGVyLTJwdEpUXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9yZXNlcnZhdGlvbnMvUmVzZXJ2YXRpb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQ1wiLFwiZmlsZVwiOlwiUmVzZXJ2YXRpb25zLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FkbWluSWNvbnMvZXhwb3J0LnBuZz8xMjQ3Mjc2OVwiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vUmVzZXJ2YXRpb25NYW5hZ2VtZW50LmNzcyc7XG5pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbi8vIFJlZHV4IEFjdGlvblxuaW1wb3J0IHsgb3BlblJlc2VydmF0aW9uTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL1Jlc2VydmF0aW9uL3BheW91dE1vZGFsJztcbmltcG9ydCB7IGRlY29kZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvcXVlcnlFbmNyeXB0aW9uJ1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vSGVscGVyXG5pbXBvcnQgeyBnZXREYXRlVXNpbmdUaW1lWm9uZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZGF0ZVJhbmdlJztcbmNsYXNzIFBheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG9zdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBob3N0UGF5b3V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHBheUVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXRob2RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhc3Q0RGlnaXRzOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG4gICAgaG9zdFRyYW5zYWN0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJlc2VydmF0aW9uU3RhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wZW5SZXNlcnZhdGlvbk1vZGFsOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgY2FuY2VsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgICB0cmFuc2FjdGlvbkRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaG9zdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB1c2VyRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIH0pXG4gICAgfSksXG4gICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXJcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhvc3RQYXlvdXQ6IG51bGwsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICByZXNlcnZhdGlvbklkOiAwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCB7IGhvc3RJZCwgaWQsIGhvc3RQYXlvdXQsIGFtb3VudCwgY3VycmVuY3ksIG9wZW5SZXNlcnZhdGlvbk1vZGFsLCByZXNlcnZhdGlvblN0YXRlLCBjYW5jZWxEYXRhLCBob3N0U2VydmljZUZlZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRyYW5zYWN0aW9uRGF0YSwgaG9zdERhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGhvc3RTZXJ2aWNlRmVlQW1vdW50ID0gaG9zdFNlcnZpY2VGZWUgPyBob3N0U2VydmljZUZlZSA6IDA7XG4gICAgbGV0IGFtb3VudFBheXRvSG9zdCA9IGFtb3VudCAtIGhvc3RTZXJ2aWNlRmVlQW1vdW50O1xuXG4gICAgbGV0IGFtb3VudEN1cnJlbmN5ID0gY3VycmVuY3k7XG4gICAgbGV0IGhvc3RFbWFpbDtcbiAgICBpZiAocmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2NhbmNlbGxlZCcgJiYgY2FuY2VsRGF0YSkge1xuICAgICAgYW1vdW50UGF5dG9Ib3N0ID0gY2FuY2VsRGF0YS5wYXlvdXRUb0hvc3Q7XG4gICAgICBhbW91bnRDdXJyZW5jeSA9IGNhbmNlbERhdGEuY3VycmVuY3k7XG4gICAgfVxuICAgIGlmIChob3N0RGF0YSAmJiBob3N0RGF0YS51c2VyRGF0YSkge1xuICAgICAgaG9zdEVtYWlsID0gZGVjb2RlKGhvc3REYXRhLnVzZXJEYXRhLmVtYWlsKTtcbiAgICB9XG4gICAgY29uc3QgZm9ybU5hbWUgPSAnUmVzZXJ2YXRpb25QYXltZW50Rm9ybSc7XG4gICAgY29uc3QgaW5pdGlhbERhdGEgPSB7XG4gICAgICB0eXBlOiAnaG9zdCcsXG4gICAgICBob3N0SWQsXG4gICAgICByZXNlcnZhdGlvbklkOiBpZCxcbiAgICAgIHJlY2VpdmVyRW1haWw6IGhvc3RQYXlvdXQucGF5RW1haWwsXG4gICAgICBwYXlvdXRJZDogaG9zdFBheW91dC5pZCxcbiAgICAgIGFtb3VudDogYW1vdW50UGF5dG9Ib3N0LFxuICAgICAgY3VycmVuY3k6IGFtb3VudEN1cnJlbmN5LFxuICAgICAgcGF5bWVudE1ldGhvZElkOiBob3N0UGF5b3V0Lm1ldGhvZElkLFxuICAgICAgcGF5b3V0Q3VycmVuY3k6IGhvc3RQYXlvdXQuY3VycmVuY3ksXG4gICAgICBsYXN0NERpZ2l0czogaG9zdFBheW91dC5sYXN0NERpZ2l0cyxcbiAgICAgIGhvc3RFbWFpbFxuICAgIH07XG4gICAgb3BlblJlc2VydmF0aW9uTW9kYWwoZm9ybU5hbWUsIGluaXRpYWxEYXRhKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrSW4sIGxvYWRpbmcsIHJlc2VydmF0aW9uSWQsIHJlc2VydmF0aW9uU3RhdGUsIGNvbXBsZXRlZCwgY2FuY2VsRGF0YSwgY291bnRyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlkLCBhbW91bnQsIGN1cnJlbmN5LCBob3N0UGF5b3V0LCBob3N0VHJhbnNhY3Rpb24sIG9wZW5SZXNlcnZhdGlvbk1vZGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuXG4gICAgbGV0IGFtb3VudFBheXRvSG9zdCA9IDA7XG5cbiAgICBpZiAoaG9zdFBheW91dCA9PT0gbnVsbCB8fCBob3N0UGF5b3V0LnBheUVtYWlsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA8c3Bhbj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ub1BheW91dE1ldGhvZCl9PC9zcGFuPlxuICAgIH1cbiAgICBpZiAoY2FuY2VsRGF0YSkge1xuICAgICAgYW1vdW50UGF5dG9Ib3N0ID0gY2FuY2VsRGF0YS5wYXlvdXRUb0hvc3Q7XG4gICAgfVxuICAgIGlmIChyZXNlcnZhdGlvblN0YXRlID09PSAnZXhwaXJlZCcgfHwgcmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2RlY2xpbmVkJyB8fCAocmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2NhbmNlbGxlZCcgJiYgYW1vdW50UGF5dG9Ib3N0IDw9IDApKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY2xvc2VkTGFiZWwpfTwvc3Bhbj5cbiAgICB9XG5cbiAgICBpZiAobG9hZGluZyAmJiByZXNlcnZhdGlvbklkID09PSBpZCkge1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5wcm9jZXNzaW5ndGV4dH0+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucHJvY2Vzc2luZ0xhYmVsKX08L3NwYW4+O1xuICAgIH1cblxuICAgIGlmICgoaG9zdFRyYW5zYWN0aW9uICE9IG51bGwgJiYgaG9zdFRyYW5zYWN0aW9uLmlkICE9IHVuZGVmaW5lZCkgfHwgKGNvbXBsZXRlZCAmJiByZXNlcnZhdGlvbklkID09PSBpZCkpIHtcbiAgICAgIHJldHVybiA8c3Bhbj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jb21wbGV0ZWRMYWJlbCl9PC9zcGFuPlxuICAgIH1cblxuICAgIGxldCBuZXh0RGF5ID0gbW9tZW50KGNoZWNrSW4pLmFkZCgxLCAnZGF5cycpO1xuICAgIGxldCB0b2RheSA9IGdldERhdGVVc2luZ1RpbWVab25lKGNvdW50cnksIGZhbHNlKTtcbiAgICBsZXQgZGF5RGlmZmVyZW5jZSA9IG5leHREYXkuZGlmZih0b2RheSwgJ2RheXMnKTtcbiAgICBsZXQgc3RhdHVzID0gZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5tZXNzYWdlU3RhdHVzNSk7XG4gICAgbGV0IGFjdGlvbiA9IGZhbHNlO1xuICAgIGlmIChyZXNlcnZhdGlvblN0YXRlID09PSAnY29tcGxldGVkJyB8fCByZXNlcnZhdGlvblN0YXRlID09PSAnY2FuY2VsbGVkJykge1xuICAgICAgc3RhdHVzID0gZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZWFkeVRvcGF5KTtcbiAgICAgIGFjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBhY3Rpb24gJiYgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgIWFjdGlvbiAmJiA8c3Bhbj57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5yZXNlcnZhdGlvbi5wYXlvdXRMb2FkaW5nLFxuICByZXNlcnZhdGlvbklkOiBzdGF0ZS5yZXNlcnZhdGlvbi5yZXNlcnZhdGlvbklkLFxuICBjb21wbGV0ZWQ6IHN0YXRlLnJlc2VydmF0aW9uLnBheW91dENvbXBsZXRlZFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICBvcGVuUmVzZXJ2YXRpb25Nb2RhbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShQYXlvdXQpKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9SZXNlcnZhdGlvbk1hbmFnZW1lbnQuY3NzJztcbi8vIFJlZHV4IEFjdGlvblxuaW1wb3J0IHsgb3BlblJlc2VydmF0aW9uTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL1Jlc2VydmF0aW9uL3BheW91dE1vZGFsJztcbmltcG9ydCB7IGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBSZWZ1bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzZXJ2YXRpb25JZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXNlcnZhdGlvblN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuUmVzZXJ2YXRpb25Nb2RhbDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHRyYW5zYWN0aW9uRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHBheWVyRW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBheW1lbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBheW1lbnRNZXRob2RJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRyYW5zYWN0aW9uSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIHJlZnVuZERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcmVjZWl2ZXJFbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSxcbiAgICBjYW5jZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcmVmdW5kVG9HdWVzdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRyYW5zYWN0aW9uRGF0YTogbnVsbCxcbiAgICByZWZ1bmREYXRhOiBudWxsLFxuICAgIGNhbmNlbERhdGE6IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBpZCwgdHJhbnNhY3Rpb25EYXRhLCBvcGVuUmVzZXJ2YXRpb25Nb2RhbCwgcmVzZXJ2YXRpb25TdGF0ZSwgY2FuY2VsRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtTmFtZSA9ICdSZXNlcnZhdGlvblBheW1lbnRGb3JtJztcbiAgICBsZXQgYW1vdW50ID0gdHJhbnNhY3Rpb25EYXRhLnRvdGFsO1xuICAgIGxldCBjdXJyZW5jeSA9IHRyYW5zYWN0aW9uRGF0YS5jdXJyZW5jeTtcbiAgICBpZiAocmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2NhbmNlbGxlZCcgJiYgY2FuY2VsRGF0YSkge1xuICAgICAgYW1vdW50ID0gY2FuY2VsRGF0YS5yZWZ1bmRUb0d1ZXN0O1xuICAgICAgY3VycmVuY3kgPSBjYW5jZWxEYXRhLmN1cnJlbmN5O1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxEYXRhID0ge1xuICAgICAgdHlwZTogJ2d1ZXN0JyxcbiAgICAgIHJlc2VydmF0aW9uSWQ6IGlkLFxuICAgICAgcmVjZWl2ZXJFbWFpbDogdHJhbnNhY3Rpb25EYXRhLnBheWVyRW1haWwsXG4gICAgICByZWNlaXZlcklkOiB0cmFuc2FjdGlvbkRhdGEucGF5ZXJJZCxcbiAgICAgIHBheWVyRW1haWw6IHRyYW5zYWN0aW9uRGF0YS5yZWNlaXZlckVtYWlsLFxuICAgICAgcGF5ZXJJZDogdHJhbnNhY3Rpb25EYXRhLnJlY2VpdmVySWQsXG4gICAgICBhbW91bnQsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIHBheW1lbnRNZXRob2RJZDogdHJhbnNhY3Rpb25EYXRhLnBheW1lbnRNZXRob2RJZCxcbiAgICAgIHRyYW5zYWN0aW9uSWQ6IHRyYW5zYWN0aW9uRGF0YS50cmFuc2FjdGlvbklkXG4gICAgfTtcbiAgICBvcGVuUmVzZXJ2YXRpb25Nb2RhbChmb3JtTmFtZSwgaW5pdGlhbERhdGEpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIGNvbnN0IHsgaWQsIHRyYW5zYWN0aW9uRGF0YSwgcmVmdW5kRGF0YSwgcmVzZXJ2YXRpb25TdGF0ZSwgY2FuY2VsRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG9wZW5SZXNlcnZhdGlvbk1vZGFsLCBsb2FkaW5nLCByZXNlcnZhdGlvbklkLCBjb21wbGV0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFtb3VudFBheXRvR3Vlc3QgPSAwO1xuXG5cbiAgICBpZiAoY2FuY2VsRGF0YSkge1xuICAgICAgYW1vdW50UGF5dG9HdWVzdCA9IGNhbmNlbERhdGEucmVmdW5kVG9HdWVzdDtcbiAgICB9XG4gICAgaWYgKHRyYW5zYWN0aW9uRGF0YSA9PT0gbnVsbCB8fCB0cmFuc2FjdGlvbkRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDxzcGFuPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnRyYW5zYWN0aW9uTm90Zm91bmQpfTwvc3Bhbj47XG4gICAgfVxuXG4gICAgaWYgKHJlc2VydmF0aW9uU3RhdGUgPT09ICdleHBpcmVkJyB8fCByZXNlcnZhdGlvblN0YXRlID09PSAnY2FuY2VsbGVkJyB8fCByZXNlcnZhdGlvblN0YXRlID09PSAnZGVjbGluZWQnKSB7XG5cbiAgICAgIGlmIChyZXNlcnZhdGlvblN0YXRlID09PSAnY2FuY2VsbGVkJyAmJiBhbW91bnRQYXl0b0d1ZXN0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiA8c3Bhbj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ub3RFbGlnaWJsZSl9PC9zcGFuPjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxvYWRpbmcgJiYgcmVzZXJ2YXRpb25JZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5wcm9jZXNzaW5ndGV4dH0+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucHJvY2Vzc2luZ0xhYmVsKX08L3NwYW4+O1xuICAgICAgfVxuXG4gICAgICBpZiAoKHJlZnVuZERhdGEgIT0gbnVsbCAmJiByZWZ1bmREYXRhLmlkICE9IHVuZGVmaW5lZCkgfHwgKGNvbXBsZXRlZCAmJiByZXNlcnZhdGlvbklkID09PSBpZCkpIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNvbXBsZXRlZExhYmVsKX08L3NwYW4+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PiB7Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5wcm9jZWVkUmVmdW5kKX0gPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8c3Bhbj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ub3RFbGlnaWJsZSl9PC9zcGFuPlxuICAgIH1cblxuICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLnJlc2VydmF0aW9uLnJlZnVuZExvYWRpbmcsXG4gIHJlc2VydmF0aW9uSWQ6IHN0YXRlLnJlc2VydmF0aW9uLnJlc2VydmF0aW9uSWQsXG4gIGNvbXBsZXRlZDogc3RhdGUucmVzZXJ2YXRpb24ucmVmdW5kQ29tcGxldGVkXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIG9wZW5SZXNlcnZhdGlvbk1vZGFsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKFJlZnVuZCkpKTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1Jlc2VydmF0aW9uTWFuYWdlbWVudC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vUmVzZXJ2YXRpb25NYW5hZ2VtZW50LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1Jlc2VydmF0aW9uTWFuYWdlbWVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFRhYmxlLCBUciwgVGQsIFRoZWFkLCBUaCB9IGZyb20gJ3JlYWN0YWJsZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuLy8gUmVkdXggQWN0aW9uXG5pbXBvcnQgeyB2aWV3UmVjZWlwdEFkbWluIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9SZXNlcnZhdGlvbi92aWV3UmVjZWlwdEFkbWluJztcblxuLy8gU3R5bGVcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vUmVzZXJ2YXRpb25NYW5hZ2VtZW50LmNzcyc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBQYXlvdXQgZnJvbSAnLi9QYXlvdXQnO1xuaW1wb3J0IFJlZnVuZCBmcm9tICcuL1JlZnVuZCc7XG5pbXBvcnQgQ3VycmVuY3lDb252ZXJ0ZXIgZnJvbSAnLi4vLi4vQ3VycmVuY3lDb252ZXJ0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluayc7XG5pbXBvcnQgTW9kYWxGb3JtIGZyb20gJy4vTW9kYWxGb3JtJztcbmltcG9ydCBDdXN0b21QYWdpbmF0aW9uIGZyb20gJy4uLy4uL0N1c3RvbVBhZ2luYXRpb24nO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vZ3JhcGhxbFxuaW1wb3J0IHJlc2VydmF0aW9uc1F1ZXJ5IGZyb20gJy4vcmVzZXJ2YXRpb25zUXVlcnkuZ3JhcGhxbCc7XG5cbi8vSW1hZ2VzXG5pbXBvcnQgRXhwb3J0SW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2FkbWluSWNvbnMvZXhwb3J0LnBuZyc7XG5cbi8vSGVscGVyXG5pbXBvcnQgZm9ybWF0UmVzZXJ2YXRpb25TdGF0ZSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2Zvcm1hdFJlc2VydmF0aW9uU3RhdGUnO1xuY2xhc3MgUmVzZXJ2YXRpb25NYW5hZ2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICByZWZldGNoOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICBnZXRUcmFuc2FjdGlvbkhpc3Rvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIHJlc2VydmF0aW9uRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgIGxpc3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgIGhvc3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgIGd1ZXN0SWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgY2hlY2tPdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBndWVzdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICBob3N0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICByZXNlcnZhdGlvblN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgbGlzdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaG9zdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaG9zdFBheW91dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBwYXlFbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgbWV0aG9kSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBsYXN0NERpZ2l0czogUHJvcFR5cGVzLm51bWJlclxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhvc3RUcmFuc2FjdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZ3Vlc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgcHJvZmlsZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRyYW5zYWN0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgcGF5ZXJFbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgcGF5bWVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZElkOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVmdW5kU3RhdHVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHJlY2VpdmVyRW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2FuY2VsbGF0aW9uRGV0YWlsczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIHJlZnVuZFRvR3Vlc3Q6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBndWVzdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGhvc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pKSxcbiAgICAgIH0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgdmlld1JlY2VpcHRBZG1pbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZ2V0QWxsUmVzZXJ2YXRpb25zOiB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZ2V0QWxsUmVzZXJ2YXRpb25BZG1pbjoge1xuICAgICAgICBjb3VudDogbnVsbCxcbiAgICAgICAgcmVzZXJ2YXRpb25EYXRhOiBbXVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICBzZWFyY2hMaXN0OiAnJyxcbiAgICAgIHR5cGluZzogZmFsc2UsXG4gICAgICB0eXBpbmdUaW1lb3V0OiAwXG4gICAgfSxcbiAgICAgIHRoaXMucGFnaW5hdGlvbkRhdGEgPSB0aGlzLnBhZ2luYXRpb25EYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGdldEFsbFJlc2VydmF0aW9uczogeyBjb21wbGV0ZWQsIGxvYWRpbmcgfSB9ID0gbmV4dFByb3BzO1xuICAgIGNvbnN0IHsgc2VhcmNoTGlzdCwgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBnZXRBbGxSZXNlcnZhdGlvbnM6IHsgcmVmZXRjaCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB2YXJpYWJsZXMgPSB7IGN1cnJlbnRQYWdlLCBzZWFyY2hMaXN0IH07XG4gICAgaWYgKGNvbXBsZXRlZCAmJiAhbG9hZGluZykge1xuICAgICAgcmVmZXRjaCh2YXJpYWJsZXMpO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2luYXRpb25EYXRhKGN1cnJlbnRQYWdlKSB7XG4gICAgY29uc3QgeyBnZXRBbGxSZXNlcnZhdGlvbnM6IHsgcmVmZXRjaCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB2YXJpYWJsZXMgPSB7IGN1cnJlbnRQYWdlIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlIH0pO1xuICAgIHJlZmV0Y2godmFyaWFibGVzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHNlYXJjaExpc3QpIHtcbiAgICBjb25zdCB7IGdldEFsbFJlc2VydmF0aW9uczogeyByZWZldGNoIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgdmFyaWFibGVzID0ge1xuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICBzZWFyY2hMaXN0OiBzZWFyY2hMaXN0XG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2U6IDEgfSk7XG4gICAgcmVmZXRjaCh2YXJpYWJsZXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5zdGF0ZS50eXBpbmdUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi5zdGF0ZS50eXBpbmdUaW1lb3V0KTtcbiAgICB9XG4gICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hMaXN0OiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIHR5cGluZzogZmFsc2UsXG4gICAgICB0eXBpbmdUaW1lb3V0OiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5oYW5kbGVDbGljayhzZWxmLnN0YXRlLnNlYXJjaExpc3QpO1xuICAgICAgfSwgNDUwKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgdGl0bGUsIHZpZXdSZWNlaXB0QWRtaW4sIGdldEFsbFJlc2VydmF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdldEFsbFJlc2VydmF0aW9uczogeyBsb2FkaW5nLCBnZXRBbGxSZXNlcnZhdGlvbkFkbWluLCByZWZldGNoIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSwgc2VhcmNoTGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgdXNlclR5cGUgPSAnaG9zdCc7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucGFnZWNvbnRlbnRXcmFwcGVyLCAncGFnZWNvbnRlbnRBUicpfT5cbiAgICAgICAgPE1vZGFsRm9ybSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3MuaGVhZGVyVGl0bGV9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5wYW5lbFJlc2VydmF0aW9ufSAvPjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZXhwb3J0U2VjdGlvbiwgcy5leHBvcnRTZWN0aW9uR3JpZFN1Yil9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnNlYXJjaCl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZShlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdzZWFyY2hJbnB1dENvbnRyb2wnLCAnc2VhcmNoSW5wdXRDb250cm9sV2lkdGgnLCAnc2VhcmNoSW5wdXRDb250cm9sQVInKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdldEFsbFJlc2VydmF0aW9uQWRtaW4gJiYgZ2V0QWxsUmVzZXJ2YXRpb25BZG1pbi5yZXNlcnZhdGlvbkRhdGEgJiYgZ2V0QWxsUmVzZXJ2YXRpb25BZG1pbi5yZXNlcnZhdGlvbkRhdGEubGVuZ3RoID4gMCAmJiA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9leHBvcnQtYWRtaW4tZGF0YT90eXBlPXJlc2VydmF0aW9ucyZrZXl3b3JkPSR7c2VhcmNoTGlzdH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzLmV4cG9ydFRleHQsICdjb21tb25GbG9hdExlZnQnKX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudnRyTWlkZGxlfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZXhwb3J0RGF0YUludG9DU1Z9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmV4cG9ydExpbmtJbWcsICdleHBvcnRMaW5rSW1nQ29tbW9uJyl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17RXhwb3J0SW1hZ2V9IGNsYXNzTmFtZT17cy5leHBvcnRJbWd9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3RhYmxlLXJlc3BvbnNpdmUnLCAnTmV3QWRtaW5SZXNwb25zaXZlVGFibGUnLCAnTmV3UmVzcG9uc2l2ZVRhYmxlQWRtaW4nKX0+XG4gICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwidGFibGVcIlxuICAgICAgICAgICAgICBub0RhdGFUZXh0PXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm5vUmVjb3JkRm91bmQpfVxuICAgICAgICAgICAgICAvLyBmaWx0ZXJhYmxlPXtbJ0NvZGUnXX1cbiAgICAgICAgICAgICAgc29ydGFibGU9e3RydWV9XG4gICAgICAgICAgICAvLyBpdGVtc1BlclBhZ2U9ezIwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICAgICAgPFRoIHNjb3BlPVwiY29sXCI+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVzZXJ2YXRpb25JZCl9PC9UaD5cbiAgICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jb2RlTGFiZWwpfTwvVGg+XG4gICAgICAgICAgICAgICAgPFRoIHNjb3BlPVwiY29sXCI+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc3RhdHVzKX08L1RoPlxuICAgICAgICAgICAgICAgIDxUaCBzY29wZT1cImNvbFwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmFkbWluTGlzdFRpdGxlKX08L1RoPlxuICAgICAgICAgICAgICAgIDxUaCBzY29wZT1cImNvbFwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlZnVuZFRvR3Vlc3QpfTwvVGg+XG4gICAgICAgICAgICAgICAgPFRoIHNjb3BlPVwiY29sXCI+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc3ViVG90YWxMYWJlbCl9PC9UaD5cbiAgICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5wYXlvdXRMYWJlbEFkbWluKX08L1RoPlxuICAgICAgICAgICAgICAgIDxUaCBzY29wZT1cImNvbFwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRldGFpbHMpfTwvVGg+XG4gICAgICAgICAgICAgIDwvVGhlYWQ+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnZXRBbGxSZXNlcnZhdGlvbkFkbWluICYmIGdldEFsbFJlc2VydmF0aW9uQWRtaW4ucmVzZXJ2YXRpb25EYXRhICYmIGdldEFsbFJlc2VydmF0aW9uQWRtaW4ucmVzZXJ2YXRpb25EYXRhLmxlbmd0aCA+IDAgJiYgZ2V0QWxsUmVzZXJ2YXRpb25BZG1pbi5yZXNlcnZhdGlvbkRhdGEubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBzdWJUb3RhbCA9IHZhbHVlLnRvdGFsICsgdmFsdWUuZ3Vlc3RTZXJ2aWNlRmVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJlc2VydmF0aW9uSWQpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVzZXJ2YXRpb25JZCl9IGRhdGE9e3ZhbHVlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNvZGVMYWJlbCl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jb2RlTGFiZWwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5jb25maXJtYXRpb25Db2RlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRkIGNsYXNzTmFtZT17cy5DaGFuZ2VUb1VwcGVyQ2FzZX0gZGF0YS1sYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5zdGF0dXMpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc3RhdHVzKX0gZGF0YT17Zm9ybWF0UmVzZXJ2YXRpb25TdGF0ZSh2YWx1ZS5yZXNlcnZhdGlvblN0YXRlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5saXN0RGF0YSAmJiA8VGQgZGF0YS1sYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5hZG1pbkxpc3RUaXRsZSl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5hZG1pbkxpc3RUaXRsZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9yb29tcy9cIiArIHZhbHVlLmxpc3RJZH0gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5saXN0RGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlLmxpc3REYXRhICYmIDxUZCBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuYWRtaW5MaXN0VGl0bGUpfSBkYXRhPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRhdGFNaXNzaW5nKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPFRkIGRhdGEtbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmVmdW5kVG9HdWVzdCl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZWZ1bmRUb0d1ZXN0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVmdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt2YWx1ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25TdGF0ZT17dmFsdWUucmVzZXJ2YXRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25EYXRhPXt2YWx1ZS50cmFuc2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmdW5kRGF0YT17dmFsdWUucmVmdW5kU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxEYXRhPXt2YWx1ZS5jYW5jZWxsYXRpb25EZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN1YlRvdGFsTGFiZWwpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc3ViVG90YWxMYWJlbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5Q29udmVydGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17c3ViVG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb209e3ZhbHVlLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnBheW91dExhYmVsQWRtaW4pfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucGF5b3V0TGFiZWxBZG1pbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBheW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0SWQ9e3ZhbHVlLmhvc3RJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJbj17dmFsdWUuY2hlY2tJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3ZhbHVlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0UGF5b3V0PXt2YWx1ZS5ob3N0UGF5b3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3ZhbHVlLnRvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeT17dmFsdWUuY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RUcmFuc2FjdGlvbj17dmFsdWUuaG9zdFRyYW5zYWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvblN0YXRlPXt2YWx1ZS5yZXNlcnZhdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxEYXRhPXt2YWx1ZS5jYW5jZWxsYXRpb25EZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0RGF0YT17dmFsdWUuaG9zdERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RTZXJ2aWNlRmVlPXt2YWx1ZS5ob3N0U2VydmljZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT17dmFsdWUubGlzdERhdGEgPyB2YWx1ZS5saXN0RGF0YS5jb3VudHJ5IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRkIGRhdGEtbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGV0YWlscyl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZXRhaWxzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvc2l0ZWFkbWluL3ZpZXdyZXNlcnZhdGlvbi9cIiArIHZhbHVlLmlkICsgJy9yZXNlcnZhdGlvbid9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnZpZXdMYWJlbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZ2V0QWxsUmVzZXJ2YXRpb25BZG1pbiAmJiBnZXRBbGxSZXNlcnZhdGlvbkFkbWluLnJlc2VydmF0aW9uRGF0YSAmJiBnZXRBbGxSZXNlcnZhdGlvbkFkbWluLnJlc2VydmF0aW9uRGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAmJiA8ZGl2PlxuICAgICAgICAgICAgICA8Q3VzdG9tUGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIHRvdGFsPXtnZXRBbGxSZXNlcnZhdGlvbkFkbWluLmNvdW50fVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVudD17MX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZVNpemU9ezEwfVxuICAgICAgICAgICAgICAgIGNoYW5nZT17dGhpcy5wYWdpbmF0aW9uRGF0YX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucGFuZWxSZXNlcnZhdGlvbil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBjb21wbGV0ZWQ6IHN0YXRlLnJlc2VydmF0aW9uLmNvbXBsZXRlZCxcbiAgbG9hZGluZzogc3RhdGUucmVzZXJ2YXRpb24ubG9hZGluZyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgdmlld1JlY2VpcHRBZG1pbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoaW5qZWN0SW50bCxcbiAgd2l0aFN0eWxlcyhzKSxcbiAgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpLFxuICBncmFwaHFsKHJlc2VydmF0aW9uc1F1ZXJ5LCB7XG4gICAgbmFtZTogJ2dldEFsbFJlc2VydmF0aW9ucycsXG4gICAgb3B0aW9uczoge1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBzZWFyY2hMaXN0OiAnJ1xuICAgICAgfSxcbiAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICB9XG4gIH0pXG4pKFJlc2VydmF0aW9uTWFuYWdlbWVudCk7IiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEFsbFJlc2VydmF0aW9uQWRtaW5cIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW50UGFnZVwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzZWFyY2hMaXN0XCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEFsbFJlc2VydmF0aW9uQWRtaW5cIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVudFBhZ2VcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImN1cnJlbnRQYWdlXCJ9fX0se1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2VhcmNoTGlzdFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2VhcmNoTGlzdFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXNlcnZhdGlvbkRhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjaGVja091dFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25TdGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb25maXJtYXRpb25Db2RlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb3VudHJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3REYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJvZmlsZUlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpcnN0TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RQYXlvdXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXlFbWFpbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtZXRob2RJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsYXN0NERpZ2l0c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0VHJhbnNhY3Rpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcm9maWxlSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlyc3ROYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRyYW5zYWN0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGF5ZXJJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXllckVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlY2VpdmVyRW1haWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVjZWl2ZXJJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXltZW50VHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXltZW50TWV0aG9kSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHJhbnNhY3Rpb25JZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZWZ1bmRTdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZWNlaXZlckVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvdGFsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImN1cnJlbmN5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNhbmNlbGxhdGlvbkRldGFpbHNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXNlcnZhdGlvbklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlZnVuZFRvR3Vlc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGF5b3V0VG9Ib3N0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0U2VydmljZUZlZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0U2VydmljZUZlZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxMjM0fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY29uc3QgcmVzZXJ2YXRpb25TdGF0ZSA9IFtcbiAgICB7IHR5cGU6ICdwZW5kaW5nJywga2V5OiAnbWVzc2FnZVN0YXR1czUnIH0sXG4gICAgeyB0eXBlOiAnZXhwaXJlZCcsIGtleTogJ21lc3NhZ2VTdGF0dXM5JyB9LFxuICAgIHsgdHlwZTogJ2FwcHJvdmVkJywga2V5OiAnbWVzc2FnZVN0YXR1czQnIH0sXG4gICAgeyB0eXBlOiAnZGVjbGluZWQnLCBrZXk6ICdtZXNzYWdlU3RhdHVzMycgfSxcbiAgICB7IHR5cGU6ICdjb21wbGV0ZWQnLCBrZXk6ICdjb21wbGV0ZWRMYWJlbCcgfSxcbiAgICB7IHR5cGU6ICdjYW5jZWxsZWQnLCBrZXk6ICdtZXNzYWdlU3RhdHVzMTEnIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlc2VydmF0aW9uU3RhdGUodHlwZSkge1xuICAgIGxldCBzdGF0ZSA9IHJlc2VydmF0aW9uU3RhdGUuZmluZChlbGVtZW50ID0+IGVsZW1lbnQudHlwZSA9PT0gdHlwZSk7XG4gICAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUua2V5KSByZXR1cm4gdHlwZTtcbiAgICBlbHNlIHJldHVybiAoPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzW3N0YXRlLmtleV19IC8+KTtcbn0iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1Jlc2VydmF0aW9ucy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vUmVzZXJ2YXRpb25zLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1Jlc2VydmF0aW9ucy5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2dyYXBocWwsIGNvbXBvc2V9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbi8vIFN0eWxlXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1Jlc2VydmF0aW9ucy5jc3MnO1xuXG4vLyBRdWVyeVxuaW1wb3J0IHJlc2VydmF0aW9uc1F1ZXJ5IGZyb20gJy4vcmVzZXJ2YXRpb25zUXVlcnkuZ3JhcGhxbCc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IFJlc2VydmF0aW9uTWFuYWdlbWVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NpdGVhZG1pbi9SZXNlcnZhdGlvbk1hbmFnZW1lbnQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRlcic7XG5cbmNsYXNzIFJlc2VydmF0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGdldEFsbFJlc2VydmF0aW9uQWRtaW46IFByb3BUeXBlcy5hcnJheSxcbiAgICB9KVxuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBkYXRhOiB7IGxvYWRpbmcgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZihsb2FkaW5nKXtcbiAgICAgIHJldHVybiA8TG9hZGVyIHR5cGU9e1widGV4dFwifSAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGRhdGE6IHsgZ2V0QWxsUmVzZXJ2YXRpb25BZG1pbiwgcmVmZXRjaCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIHJldHVybiA8UmVzZXJ2YXRpb25NYW5hZ2VtZW50IFxuICAgICAgLy8gZGF0YT17ZGF0YX0gXG4gICAgICAvLyByZWZldGNoPXtyZWZldGNofSBcbiAgICAvPlxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgICB3aXRoU3R5bGVzKHMpLFxuICAgIGdyYXBocWwocmVzZXJ2YXRpb25zUXVlcnksXG4gICAge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICBzZWFyY2hMaXN0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgICAgIHNzcjogZmFsc2VcbiAgICAgIH1cbiAgICB9KSxcbikoUmVzZXJ2YXRpb25zKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXQnO1xuaW1wb3J0IFJlc2VydmF0aW9ucyBmcm9tICcuL1Jlc2VydmF0aW9ucyc7XG5pbXBvcnQgeyByZXN0cmljdFVybHMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FkbWluUHJpdmlsZWdlcyc7XG5cblxuY29uc3QgdGl0bGUgPSAnUmVzZXJ2YXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgc3RvcmUgfSkge1xuXG5cbiAgLy8gRnJvbSBSZWR1eCBTdG9yZVxuICBsZXQgaXNBZG1pbkF1dGhlbnRpY2F0ZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnJ1bnRpbWUuaXNBZG1pbkF1dGhlbnRpY2F0ZWQ7XG4gIGxldCBhZG1pblByaXZpbGVnZXMgPSBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzICYmIHN0b3JlLmdldFN0YXRlKCkuYWRtaW5QcmV2aWxlZ2VzLnByaXZpbGVnZXMucHJpdmlsZWdlcztcblxuXG4gIGlmICghaXNBZG1pbkF1dGhlbnRpY2F0ZWQpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdDogJy9zaXRlYWRtaW4vbG9naW4nIH07XG4gIH1cblxuICAvLyBBZG1pbiByZXN0cmljdGlvblxuICBpZiAoIXJlc3RyaWN0VXJscygnL3NpdGVhZG1pbi9yZXNlcnZhdGlvbnMnLCBhZG1pblByaXZpbGVnZXMpKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluJyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IDxBZG1pbkxheW91dD48UmVzZXJ2YXRpb25zIHRpdGxlPXt0aXRsZX0gLz48L0FkbWluTGF5b3V0PixcbiAgfTtcbn1cbiIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRBbGxSZXNlcnZhdGlvbkFkbWluXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVudFBhZ2VcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19fSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2VhcmNoTGlzdFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRBbGxSZXNlcnZhdGlvbkFkbWluXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImN1cnJlbnRQYWdlXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW50UGFnZVwifX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNlYXJjaExpc3RcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNlYXJjaExpc3RcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25EYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2hlY2tPdXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc2VydmF0aW9uU3RhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidG90YWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVuY3lcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29uZmlybWF0aW9uQ29kZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0YXhSYXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb3VudHJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3REYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJvZmlsZUlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpcnN0TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RQYXlvdXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXlFbWFpbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtZXRob2RJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsYXN0NERpZ2l0c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0VHJhbnNhY3Rpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcm9maWxlSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlyc3ROYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRyYW5zYWN0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGF5ZXJJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXllckVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlY2VpdmVyRW1haWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVjZWl2ZXJJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXltZW50VHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXltZW50TWV0aG9kSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHJhbnNhY3Rpb25JZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZWZ1bmRTdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZWNlaXZlckVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvdGFsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImN1cnJlbmN5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNhbmNlbGxhdGlvbkRldGFpbHNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXNlcnZhdGlvbklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlZnVuZFRvR3Vlc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGF5b3V0VG9Ib3N0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0U2VydmljZUZlZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0U2VydmljZUZlZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxMjQ2fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQS9IQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQS9CQTtBQUNBO0FBRkE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUF0R0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBckJBO0FBQ0E7QUFGQTtBQTZCQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBNEVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQStFQTtBQUNBO0FBQ0E7QUFGQTtBQTRDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUF0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQTFRQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUE5Q0E7QUFGQTtBQUhBO0FBOERBO0FBaEVBO0FBQ0E7QUFIQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQURBO0FBQ0E7QUF1TUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQUZBOzs7Ozs7O0FDN1RBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUF2QkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUF1QkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9