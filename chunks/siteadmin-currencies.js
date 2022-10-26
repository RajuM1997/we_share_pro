require("source-map-support").install();
exports.ids = ["siteadmin-currencies"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/CurrencyManagement/CurrencyManagement.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.CurrencyManagement-rentAllHeaderAdmin-MALFU {\n  position: fixed !important;\n}\n.CurrencyManagement-adminLayout-CQ8YG {\n  padding-top: 64px !important;\n}\n.CurrencyManagement-box-3GQd9 h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.CurrencyManagement-exportLink-1wVVV {\n  margin-bottom: -29px;\n}\n.CurrencyManagement-blockcenter-2LGPZ {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.CurrencyManagement-panelHeader-2iH1K {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.CurrencyManagement-currencyselect-3vOQY {\n  width: 100%;\n  margin-right: 0px;\n}\n.CurrencyManagement-panelHeader-2iH1K {\n  overflow: hidden;\n  position: relative;\n}\n.CurrencyManagement-mar0-1gYTj {\n  margin-left: 0;\n  margin-right: 0;\n}\n.CurrencyManagement-navbar-7p1se > .CurrencyManagement-container-WOv5m .CurrencyManagement-navbar-brand-qcgzQ,\n.CurrencyManagement-navbar-7p1se > .CurrencyManagement-container-fluid-Cntw_ .CurrencyManagement-navbar-brand-qcgzQ {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .CurrencyManagement-blockcenter-2LGPZ {\n    padding: 0px;\n  }\n  .CurrencyManagement-panelHeader-2iH1K {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.CurrencyManagement-pagecontentWrapper-3Fqui {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.CurrencyManagement-headerTitle-19xGh {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.CurrencyManagement-panelHeader-2iH1K {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.CurrencyManagement-table-1n7Ul {\n\tdisplay: table;\n}\n.CurrencyManagement-tableRow-3pt2C {\n\tdisplay: table-row;\n}\n.CurrencyManagement-tableCell-3OOkl {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.CurrencyManagement-formGroup-Wkglx {\n\tmargin-bottom: 6px;\n}\n.CurrencyManagement-select-2-Ntp {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.CurrencyManagement-noMargin-2Jt9O {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.CurrencyManagement-exportLink-1wVVV {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.CurrencyManagement-labelTextNew-3xmgz {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.CurrencyManagement-displayInline-34xvR {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.CurrencyManagement-btnUPdate-sZ_ry {\n\tdisplay: inline-block;\n}\n.CurrencyManagement-btnModalDelete-2gcnr {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.CurrencyManagement-radioBtn-2wtsF {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.CurrencyManagement-btnUPdate-sZ_ry {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.CurrencyManagement-btnModalDelete-2gcnr {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.CurrencyManagement-btnWidth-nFoMf {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.CurrencyManagement-bannerImageBg-166T5 {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.CurrencyManagement-bannerDelete-1oXam {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.CurrencyManagement-modalRoot-1AnvL {\n\tpadding: 32px;\n}\n.CurrencyManagement-modalBorderBottom-3gL7U {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.CurrencyManagement-logInModalBody-_vSML {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.CurrencyManagement-exportSection-Cy4_i {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.CurrencyManagement-exportSectionGridSub-2vU5f {\n\tgrid-template-columns: 50% 49% !important;\n}\n.CurrencyManagement-exportText-1OPVP {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.CurrencyManagement-exportLinkImg-ipa21 {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.CurrencyManagement-vtrMiddle-3K0Kg {\n\tvertical-align: middle;\n}\n.CurrencyManagement-exportImg-3F6RE {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.CurrencyManagement-profileViewlabel-2IIJF {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.CurrencyManagement-profileViewMainContent-1xRDm {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.CurrencyManagement-profileViewMain-l4nMa {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.CurrencyManagement-profileViewInner-QHVbY {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.CurrencyManagement-profileImageSection-yOsSj {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.CurrencyManagement-lastviewInner-3FNj_ {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.CurrencyManagement-pagecontentWrapper-3Fqui {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.CurrencyManagement-exportSection-Cy4_i {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.CurrencyManagement-exportText-1OPVP {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.CurrencyManagement-exportSectionGridSub-2vU5f {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.CurrencyManagement-profileViewlabel-2IIJF {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.CurrencyManagement-profileViewMainContent-1xRDm {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.CurrencyManagement-pagecontentWrapper-3Fqui {\n\t\tmargin-left: 0;\n\t}\n}\n.CurrencyManagement-ChangeToUpperCase-uORmt{\n    text-transform: uppercase\n}\n.CurrencyManagement-noBorder-3Gviy {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/CurrencyManagement/CurrencyManagement.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"CurrencyManagement.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "CurrencyManagement-rentAllHeaderAdmin-MALFU",
	"adminLayout": "CurrencyManagement-adminLayout-CQ8YG",
	"box": "CurrencyManagement-box-3GQd9",
	"exportLink": "CurrencyManagement-exportLink-1wVVV",
	"blockcenter": "CurrencyManagement-blockcenter-2LGPZ",
	"panelHeader": "CurrencyManagement-panelHeader-2iH1K",
	"currencyselect": "CurrencyManagement-currencyselect-3vOQY",
	"mar0": "CurrencyManagement-mar0-1gYTj",
	"navbar": "CurrencyManagement-navbar-7p1se",
	"container": "CurrencyManagement-container-WOv5m",
	"navbar-brand": "CurrencyManagement-navbar-brand-qcgzQ",
	"container-fluid": "CurrencyManagement-container-fluid-Cntw_",
	"pagecontentWrapper": "CurrencyManagement-pagecontentWrapper-3Fqui",
	"headerTitle": "CurrencyManagement-headerTitle-19xGh",
	"table": "CurrencyManagement-table-1n7Ul",
	"tableRow": "CurrencyManagement-tableRow-3pt2C",
	"tableCell": "CurrencyManagement-tableCell-3OOkl",
	"formGroup": "CurrencyManagement-formGroup-Wkglx",
	"select": "CurrencyManagement-select-2-Ntp",
	"noMargin": "CurrencyManagement-noMargin-2Jt9O",
	"labelTextNew": "CurrencyManagement-labelTextNew-3xmgz",
	"displayInline": "CurrencyManagement-displayInline-34xvR",
	"btnUPdate": "CurrencyManagement-btnUPdate-sZ_ry",
	"btnModalDelete": "CurrencyManagement-btnModalDelete-2gcnr",
	"radioBtn": "CurrencyManagement-radioBtn-2wtsF",
	"btnWidth": "CurrencyManagement-btnWidth-nFoMf",
	"bannerImageBg": "CurrencyManagement-bannerImageBg-166T5",
	"bannerDelete": "CurrencyManagement-bannerDelete-1oXam",
	"modalRoot": "CurrencyManagement-modalRoot-1AnvL",
	"modalBorderBottom": "CurrencyManagement-modalBorderBottom-3gL7U",
	"logInModalBody": "CurrencyManagement-logInModalBody-_vSML",
	"exportSection": "CurrencyManagement-exportSection-Cy4_i",
	"exportSectionGridSub": "CurrencyManagement-exportSectionGridSub-2vU5f",
	"exportText": "CurrencyManagement-exportText-1OPVP",
	"exportLinkImg": "CurrencyManagement-exportLinkImg-ipa21",
	"vtrMiddle": "CurrencyManagement-vtrMiddle-3K0Kg",
	"exportImg": "CurrencyManagement-exportImg-3F6RE",
	"profileViewlabel": "CurrencyManagement-profileViewlabel-2IIJF",
	"profileViewMainContent": "CurrencyManagement-profileViewMainContent-1xRDm",
	"profileViewMain": "CurrencyManagement-profileViewMain-l4nMa",
	"profileViewInner": "CurrencyManagement-profileViewInner-QHVbY",
	"profileImageSection": "CurrencyManagement-profileImageSection-yOsSj",
	"lastviewInner": "CurrencyManagement-lastviewInner-3FNj_",
	"ChangeToUpperCase": "CurrencyManagement-ChangeToUpperCase-uORmt",
	"noBorder": "CurrencyManagement-noBorder-3Gviy"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/currencies/Currency.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/currencies/Currency.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"Currency.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/actions/siteadmin/CurrencyManagement/currencyManagement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrencyStatus", function() { return updateCurrencyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseCurrency", function() { return setBaseCurrency; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/siteadmin/CurrencyManagement/getAllCurrency.graphql");
/* harmony import */ var _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3__);




function updateCurrencyStatus(id, isEnable) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CHANGE_CURRENCY_STATUS_START"]
    });

    try {
      let baseCurrencyId; // Get Base currency data

      let subQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          {
              getBaseCurrency{
                id
                symbol
              }
          }
        `; //const {data} = await graphqlRequest(getBaseCurrency, {}, {skipCache: true});

      const {
        data
      } = await client.query({
        query: subQuery,
        fetchPolicy: 'network-only'
      });

      if (data && data.getBaseCurrency) {
        baseCurrencyId = data.getBaseCurrency.id;
      } // Warn admind if he/she try to disable the base currency


      if (baseCurrencyId === id) {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed!", "Sorry, you can't disable the base currency. Try to set a different base currency and disable this one");
      } else {
        let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                mutation currencyManagement ($id: Int, $isEnable: Boolean){
                    currencyManagement(id: $id, isEnable: $isEnable){
                        status
                    }
                }
            `;
        const {
          data
        } = await client.mutate({
          mutation,
          variables: {
            id,
            isEnable
          },
          refetchQueries: [{
            query: _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3___default.a
          }]
        });

        if (data.currencyManagement.status === "success") {
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["CHANGE_CURRENCY_STATUS_SUCCESS"]
          });
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Success!", "Currency status has changed");
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["CHANGE_CURRENCY_STATUS_ERROR"],
        payload: {
          error
        }
      });
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed!", "Failed to change Currency status");
      return false;
    }

    return true;
  };
}
function setBaseCurrency(id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_BASE_CURRENCY_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation setBaseCurrency($id: Int){
                baseCurrency(id: $id){
                    status
                }
            }
        `;
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          id
        },
        refetchQueries: [{
          query: _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3___default.a
        }]
      });

      if (data.baseCurrency.status === "success") {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_BASE_CURRENCY_SUCCESS"]
        });
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Success!", "Base Currency is set successfully");
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["SET_BASE_CURRENCY_ERROR"],
        payload: {
          error
        }
      });
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed!", "Failed to set Base Currency");
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/actions/siteadmin/CurrencyManagement/getAllCurrency.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCurrencies"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requestedFrom"},"value":{"kind":"StringValue","value":"siteadmin","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isEnable"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPayment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isBaseCurrency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":178}};

module.exports = doc;

/***/ }),

/***/ "./src/actions/siteadmin/CurrencyManagement/managePaymentCurrency.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managePaymentCurrency", function() { return managePaymentCurrency; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/siteadmin/CurrencyManagement/getAllCurrency.graphql");
/* harmony import */ var _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3__);




function managePaymentCurrency(currencyId, type) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_MANAGE_PAYMENT_CURRENCY_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          mutation managePaymentCurrency(
            $currencyId: Int!, 
            $type: String!
          ){
              managePaymentCurrency(
                currencyId: $currencyId, 
                type: $type
              ) {
                  status
              }
          }
      `;
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          currencyId,
          type
        },
        refetchQueries: [{
          query: _getAllCurrency_graphql__WEBPACK_IMPORTED_MODULE_3___default.a
        }]
      });

      if (data && data.managePaymentCurrency) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_MANAGE_PAYMENT_CURRENCY_SUCCESS"],
          payload: {
            status: data.managePaymentCurrency.status
          }
        });
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Success!", "Payment Currency changes are done");
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_MANAGE_PAYMENT_CURRENCY_ERROR"],
        payload: {
          error
        }
      });
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed!", "Failed to change Payment Currency status");
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/components/siteadmin/CurrencyManagement/CurrencyManagement.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/CurrencyManagement/CurrencyManagement.css");
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

/***/ "./src/components/siteadmin/CurrencyManagement/CurrencyManagement.js":
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CurrencyManagement_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/CurrencyManagement/CurrencyManagement.css");
/* harmony import */ var _CurrencyManagement_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CurrencyManagement_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _actions_siteadmin_CurrencyManagement_currencyManagement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/actions/siteadmin/CurrencyManagement/currencyManagement.js");
/* harmony import */ var _actions_siteadmin_CurrencyManagement_managePaymentCurrency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/actions/siteadmin/CurrencyManagement/managePaymentCurrency.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/CurrencyManagement/CurrencyManagement.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Style



 // Translation


 // Redux Actions




class CurrencyManagement extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  handleUpdateStatus(id, status) {
    const {
      updateCurrencyStatus
    } = this.props;
    updateCurrencyStatus(id, status);
  }

  handleBaseCurrency(id) {
    const {
      setBaseCurrency
    } = this.props;
    setBaseCurrency(id);
  }

  render() {
    const {
      data,
      managePaymentCurrency
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_CurrencyManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a.pagecontentWrapper, 'pagecontentAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _CurrencyManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].currencyManagement, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 41
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('table-responsive', 'tableBorderRadiusAdmin', 'NewAdminResponsiveTable', 'NewResponsiveTableAdmin'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      className: "table",
      noDataText: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].noRecordFound),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Thead"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].idLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].symbolLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].baseCurrencyLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setEnableDisable)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setCurrencyLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].allowedPaymentCurrency))), data && data.length > 0 && data.map((value, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Tr"], {
        key: key,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].idLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].idLabel),
        data: value.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].symbolLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].symbolLabel),
        data: value.symbol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].baseCurrencyLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].baseCurrencyLabel),
        data: value.isBaseCurrency === true ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].active) : "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].status),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].status),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 47
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].enabledLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 54
        }
      })), " "), !value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 48
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].disabledLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 55
        }
      })), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setEnableDisable),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setEnableDisable),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: () => this.handleUpdateStatus(value.id, value.isEnable),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 47
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].disableLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 54
        }
      })), " "), !value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 48
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].enableLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 55
        }
      })), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setCurrencyLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setCurrencyLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, !value.isBaseCurrency && value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: () => this.handleBaseCurrency(value.id),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 72
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].setBaseCurrency, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 31
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_2__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].allowedPaymentCurrency),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].allowedPaymentCurrency),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }
      }, !value.isPayment && value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: () => managePaymentCurrency(value.id, "add"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 67
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].addLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 31
        }
      }))), value.isPayment && value.isEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: () => managePaymentCurrency(value.id, "remove"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 66
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].remove, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 31
        }
      }))))));
    })))));
  }

}

_defineProperty(CurrencyManagement, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    isEnable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    isPayment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    isBaseCurrency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
  })),
  updateCurrencyStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  setBaseCurrency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  managePaymentCurrency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

_defineProperty(CurrencyManagement, "defaultProps", {
  data: []
});

const mapState = state => ({});

const mapDispatch = {
  updateCurrencyStatus: _actions_siteadmin_CurrencyManagement_currencyManagement__WEBPACK_IMPORTED_MODULE_9__["updateCurrencyStatus"],
  setBaseCurrency: _actions_siteadmin_CurrencyManagement_currencyManagement__WEBPACK_IMPORTED_MODULE_9__["setBaseCurrency"],
  managePaymentCurrency: _actions_siteadmin_CurrencyManagement_managePaymentCurrency__WEBPACK_IMPORTED_MODULE_10__["managePaymentCurrency"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_CurrencyManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch)(CurrencyManagement))));

/***/ }),

/***/ "./src/routes/siteadmin/currencies/Currency.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/currencies/Currency.css");
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

/***/ "./src/routes/siteadmin/currencies/Currency.js":
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
/* harmony import */ var _Currency_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/currencies/Currency.css");
/* harmony import */ var _Currency_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Currency_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _currenciesQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/siteadmin/currencies/currenciesQuery.graphql");
/* harmony import */ var _currenciesQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_currenciesQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_siteadmin_CurrencyManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/CurrencyManagement/CurrencyManagement.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Loader/Loader.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/currencies/Currency.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Currency extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data: {
        loading,
        getCurrencies
      }
    } = this.props;

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 14
        }
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_CurrencyManagement__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: getCurrencies,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 14
        }
      });
    }
  }

}

_defineProperty(Currency, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getCurrencies: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
});

_defineProperty(Currency, "defaultProps", {
  data: {
    loading: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_Currency_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_currenciesQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a))(Currency));

/***/ }),

/***/ "./src/routes/siteadmin/currencies/currenciesQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requestedFrom"},"value":{"kind":"StringValue","value":"siteadmin","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isEnable"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPayment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isBaseCurrency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":155}};

module.exports = doc;

/***/ }),

/***/ "./src/routes/siteadmin/currencies/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/currencies/Currency.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/currencies/index.js";



const title = 'Currency Management';
async function action({
  store
}) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let isSuperAdmin = store.getState().runtime.isSuperAdmin;

  if (!isAdminAuthenticated || !isSuperAdmin) {
    return {
      redirect: '/siteadmin/login'
    };
  }

  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Currency__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1jdXJyZW5jaWVzLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQ3VycmVuY3lNYW5hZ2VtZW50L0N1cnJlbmN5TWFuYWdlbWVudC5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9jdXJyZW5jaWVzL0N1cnJlbmN5LmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL3NpdGVhZG1pbi9DdXJyZW5jeU1hbmFnZW1lbnQvY3VycmVuY3lNYW5hZ2VtZW50LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL0N1cnJlbmN5TWFuYWdlbWVudC9nZXRBbGxDdXJyZW5jeS5ncmFwaHFsIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL0N1cnJlbmN5TWFuYWdlbWVudC9tYW5hZ2VQYXltZW50Q3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0N1cnJlbmN5TWFuYWdlbWVudC9DdXJyZW5jeU1hbmFnZW1lbnQuY3NzPzcwY2UiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQ3VycmVuY3lNYW5hZ2VtZW50L0N1cnJlbmN5TWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3NpdGVhZG1pbi9jdXJyZW5jaWVzL0N1cnJlbmN5LmNzcz9kMDdiIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zaXRlYWRtaW4vY3VycmVuY2llcy9DdXJyZW5jeS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL2N1cnJlbmNpZXMvY3VycmVuY2llc1F1ZXJ5LmdyYXBocWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9jdXJyZW5jaWVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LXJlbnRBbGxIZWFkZXJBZG1pbi1NQUxGVSB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1hZG1pbkxheW91dC1DUThZRyB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWJveC0zR1FkOSBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydExpbmstMXdWVlYge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtYmxvY2tjZW50ZXItMkxHUFoge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1wYW5lbEhlYWRlci0yaUgxSyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWN1cnJlbmN5c2VsZWN0LTN2T1FZIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtcGFuZWxIZWFkZXItMmlIMUsge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1tYXIwLTFnWVRqIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LW5hdmJhci03cDFzZSA+IC5DdXJyZW5jeU1hbmFnZW1lbnQtY29udGFpbmVyLVdPdjVtIC5DdXJyZW5jeU1hbmFnZW1lbnQtbmF2YmFyLWJyYW5kLXFjZ3pRLFxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtbmF2YmFyLTdwMXNlID4gLkN1cnJlbmN5TWFuYWdlbWVudC1jb250YWluZXItZmx1aWQtQ250d18gLkN1cnJlbmN5TWFuYWdlbWVudC1uYXZiYXItYnJhbmQtcWNnelEge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuQ3VycmVuY3lNYW5hZ2VtZW50LWJsb2NrY2VudGVyLTJMR1BaIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLkN1cnJlbmN5TWFuYWdlbWVudC1wYW5lbEhlYWRlci0yaUgxSyB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LXBhZ2Vjb250ZW50V3JhcHBlci0zRnF1aSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1oZWFkZXJUaXRsZS0xOXhHaCB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LXBhbmVsSGVhZGVyLTJpSDFLIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC10YWJsZS0xbjdVbCB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtdGFibGVSb3ctM3B0MkMge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC10YWJsZUNlbGwtM09Pa2wge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtZm9ybUdyb3VwLVdrZ2x4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtc2VsZWN0LTItTnRwIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtbm9NYXJnaW4tMkp0OU8ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1leHBvcnRMaW5rLTF3VlZWIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWxhYmVsVGV4dE5ldy0zeG1neiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWRpc3BsYXlJbmxpbmUtMzR4dlIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWJ0blVQZGF0ZS1zWl9yeSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWJ0bk1vZGFsRGVsZXRlLTJnY25yIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtcmFkaW9CdG4tMnd0c0Yge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5DdXJyZW5jeU1hbmFnZW1lbnQtYnRuVVBkYXRlLXNaX3J5IHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuQ3VycmVuY3lNYW5hZ2VtZW50LWJ0bk1vZGFsRGVsZXRlLTJnY25yIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuQ3VycmVuY3lNYW5hZ2VtZW50LWJ0bldpZHRoLW5Gb01mIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWJhbm5lckltYWdlQmctMTY2VDUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtYmFubmVyRGVsZXRlLTFvWGFtIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LW1vZGFsUm9vdC0xQW52TCB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1tb2RhbEJvcmRlckJvdHRvbS0zZ0w3VSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1sb2dJbk1vZGFsQm9keS1fdlNNTCB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5DdXJyZW5jeU1hbmFnZW1lbnQtZXhwb3J0U2VjdGlvbi1DeTRfaSB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1leHBvcnRTZWN0aW9uR3JpZFN1Yi0ydlU1ZiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtZXhwb3J0VGV4dC0xT1BWUCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydExpbmtJbWctaXBhMjEge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtdnRyTWlkZGxlLTNLMEtnIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydEltZy0zRjZSRSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtcHJvZmlsZVZpZXdsYWJlbC0ySUlKRiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1wcm9maWxlVmlld01haW5Db250ZW50LTF4UkRtIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1wcm9maWxlVmlld01haW4tbDRuTWEge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LXByb2ZpbGVWaWV3SW5uZXItUUhWYlkge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtcHJvZmlsZUltYWdlU2VjdGlvbi15T3NTaiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uQ3VycmVuY3lNYW5hZ2VtZW50LWxhc3R2aWV3SW5uZXItM0ZOal8ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5DdXJyZW5jeU1hbmFnZW1lbnQtcGFnZWNvbnRlbnRXcmFwcGVyLTNGcXVpIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydFNlY3Rpb24tQ3k0X2kge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LkN1cnJlbmN5TWFuYWdlbWVudC1leHBvcnRUZXh0LTFPUFZQIHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydFNlY3Rpb25HcmlkU3ViLTJ2VTVmIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkN1cnJlbmN5TWFuYWdlbWVudC1wcm9maWxlVmlld2xhYmVsLTJJSUpGIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuQ3VycmVuY3lNYW5hZ2VtZW50LXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMXhSRG0ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5DdXJyZW5jeU1hbmFnZW1lbnQtcGFnZWNvbnRlbnRXcmFwcGVyLTNGcXVpIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5DdXJyZW5jeU1hbmFnZW1lbnQtQ2hhbmdlVG9VcHBlckNhc2UtdU9SbXR7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLkN1cnJlbmN5TWFuYWdlbWVudC1ub0JvcmRlci0zR3ZpeSB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1wiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQ3VycmVuY3lNYW5hZ2VtZW50L0N1cnJlbmN5TWFuYWdlbWVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QlwiLFwiZmlsZVwiOlwiQ3VycmVuY3lNYW5hZ2VtZW50LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4ucmVudEFsbEhlYWRlckFkbWluIHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5MYXlvdXQge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLmJsb2NrY2VudGVyIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uY3VycmVuY3lzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubmF2YmFyID4gLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLFxcbi5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmQge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuYmxvY2tjZW50ZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAucGFuZWxIZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi50YWJsZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi50YWJsZVJvdyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4udGFibGVDZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uZm9ybUdyb3VwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBvcnRMaW5rIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubGFiZWxUZXh0TmV3IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5kaXNwbGF5SW5saW5lIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLmJ0blVQZGF0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuTW9kYWxEZWxldGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLnJhZGlvQnRuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYnRuVVBkYXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuYnRuTW9kYWxEZWxldGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5idG5XaWR0aCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLmJhbm5lckltYWdlQmcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5iYW5uZXJEZWxldGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5tb2RhbFJvb3Qge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5tb2RhbEJvcmRlckJvdHRvbSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLmxvZ0luTW9kYWxCb2R5IHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmV4cG9ydFNlY3Rpb24ge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5leHBvcnRUZXh0IHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5leHBvcnRMaW5rSW1nIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udnRyTWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZXhwb3J0SW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLnByb2ZpbGVWaWV3TWFpbiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5wcm9maWxlVmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4ucHJvZmlsZUltYWdlU2VjdGlvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubGFzdHZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LmV4cG9ydFNlY3Rpb24ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LmV4cG9ydFRleHQge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uQ2hhbmdlVG9VcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLm5vQm9yZGVyIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1yZW50QWxsSGVhZGVyQWRtaW4tTUFMRlVcIixcblx0XCJhZG1pbkxheW91dFwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1hZG1pbkxheW91dC1DUThZR1wiLFxuXHRcImJveFwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1ib3gtM0dRZDlcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydExpbmstMXdWVlZcIixcblx0XCJibG9ja2NlbnRlclwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1ibG9ja2NlbnRlci0yTEdQWlwiLFxuXHRcInBhbmVsSGVhZGVyXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LXBhbmVsSGVhZGVyLTJpSDFLXCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtY3VycmVuY3lzZWxlY3QtM3ZPUVlcIixcblx0XCJtYXIwXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LW1hcjAtMWdZVGpcIixcblx0XCJuYXZiYXJcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtbmF2YmFyLTdwMXNlXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LWNvbnRhaW5lci1XT3Y1bVwiLFxuXHRcIm5hdmJhci1icmFuZFwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1uYXZiYXItYnJhbmQtcWNnelFcIixcblx0XCJjb250YWluZXItZmx1aWRcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtY29udGFpbmVyLWZsdWlkLUNudHdfXCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LXBhZ2Vjb250ZW50V3JhcHBlci0zRnF1aVwiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LWhlYWRlclRpdGxlLTE5eEdoXCIsXG5cdFwidGFibGVcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtdGFibGUtMW43VWxcIixcblx0XCJ0YWJsZVJvd1wiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC10YWJsZVJvdy0zcHQyQ1wiLFxuXHRcInRhYmxlQ2VsbFwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC10YWJsZUNlbGwtM09Pa2xcIixcblx0XCJmb3JtR3JvdXBcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtZm9ybUdyb3VwLVdrZ2x4XCIsXG5cdFwic2VsZWN0XCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LXNlbGVjdC0yLU50cFwiLFxuXHRcIm5vTWFyZ2luXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LW5vTWFyZ2luLTJKdDlPXCIsXG5cdFwibGFiZWxUZXh0TmV3XCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LWxhYmVsVGV4dE5ldy0zeG1nelwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtZGlzcGxheUlubGluZS0zNHh2UlwiLFxuXHRcImJ0blVQZGF0ZVwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1idG5VUGRhdGUtc1pfcnlcIixcblx0XCJidG5Nb2RhbERlbGV0ZVwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1idG5Nb2RhbERlbGV0ZS0yZ2NuclwiLFxuXHRcInJhZGlvQnRuXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LXJhZGlvQnRuLTJ3dHNGXCIsXG5cdFwiYnRuV2lkdGhcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtYnRuV2lkdGgtbkZvTWZcIixcblx0XCJiYW5uZXJJbWFnZUJnXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LWJhbm5lckltYWdlQmctMTY2VDVcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtYmFubmVyRGVsZXRlLTFvWGFtXCIsXG5cdFwibW9kYWxSb290XCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LW1vZGFsUm9vdC0xQW52TFwiLFxuXHRcIm1vZGFsQm9yZGVyQm90dG9tXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LW1vZGFsQm9yZGVyQm90dG9tLTNnTDdVXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtbG9nSW5Nb2RhbEJvZHktX3ZTTUxcIixcblx0XCJleHBvcnRTZWN0aW9uXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LWV4cG9ydFNlY3Rpb24tQ3k0X2lcIixcblx0XCJleHBvcnRTZWN0aW9uR3JpZFN1YlwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1leHBvcnRTZWN0aW9uR3JpZFN1Yi0ydlU1ZlwiLFxuXHRcImV4cG9ydFRleHRcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtZXhwb3J0VGV4dC0xT1BWUFwiLFxuXHRcImV4cG9ydExpbmtJbWdcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtZXhwb3J0TGlua0ltZy1pcGEyMVwiLFxuXHRcInZ0ck1pZGRsZVwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC12dHJNaWRkbGUtM0swS2dcIixcblx0XCJleHBvcnRJbWdcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtZXhwb3J0SW1nLTNGNlJFXCIsXG5cdFwicHJvZmlsZVZpZXdsYWJlbFwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1wcm9maWxlVmlld2xhYmVsLTJJSUpGXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluQ29udGVudFwiOiBcIkN1cnJlbmN5TWFuYWdlbWVudC1wcm9maWxlVmlld01haW5Db250ZW50LTF4UkRtXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LXByb2ZpbGVWaWV3TWFpbi1sNG5NYVwiLFxuXHRcInByb2ZpbGVWaWV3SW5uZXJcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtcHJvZmlsZVZpZXdJbm5lci1RSFZiWVwiLFxuXHRcInByb2ZpbGVJbWFnZVNlY3Rpb25cIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtcHJvZmlsZUltYWdlU2VjdGlvbi15T3NTalwiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtbGFzdHZpZXdJbm5lci0zRk5qX1wiLFxuXHRcIkNoYW5nZVRvVXBwZXJDYXNlXCI6IFwiQ3VycmVuY3lNYW5hZ2VtZW50LUNoYW5nZVRvVXBwZXJDYXNlLXVPUm10XCIsXG5cdFwibm9Cb3JkZXJcIjogXCJDdXJyZW5jeU1hbmFnZW1lbnQtbm9Cb3JkZXItM0d2aXlcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL2N1cnJlbmNpZXMvQ3VycmVuY3kuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DXCIsXCJmaWxlXCI6XCJDdXJyZW5jeS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG5pbXBvcnQge1xuICBDSEFOR0VfQ1VSUkVOQ1lfU1RBVFVTX1NUQVJULFxuICBDSEFOR0VfQ1VSUkVOQ1lfU1RBVFVTX1NVQ0NFU1MsXG4gIENIQU5HRV9DVVJSRU5DWV9TVEFUVVNfRVJST1IsXG4gIFNFVF9CQVNFX0NVUlJFTkNZX1NUQVJULFxuICBTRVRfQkFTRV9DVVJSRU5DWV9TVUNDRVNTLFxuICBTRVRfQkFTRV9DVVJSRU5DWV9FUlJPUlxufSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgZ2V0QWxsQ3VycmVuY3lRdWVyeSBmcm9tICcuL2dldEFsbEN1cnJlbmN5LmdyYXBocWwnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW5jeVN0YXR1cyhpZCwgaXNFbmFibGUpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0hBTkdFX0NVUlJFTkNZX1NUQVRVU19TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgYmFzZUN1cnJlbmN5SWQ7XG4gICAgICAvLyBHZXQgQmFzZSBjdXJyZW5jeSBkYXRhXG4gICAgICBsZXQgc3ViUXVlcnkgPSBncWxgXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBnZXRCYXNlQ3VycmVuY3l7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgIC8vY29uc3Qge2RhdGF9ID0gYXdhaXQgZ3JhcGhxbFJlcXVlc3QoZ2V0QmFzZUN1cnJlbmN5LCB7fSwge3NraXBDYWNoZTogdHJ1ZX0pO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoeyBxdWVyeTogc3ViUXVlcnksIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyB9KTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuZ2V0QmFzZUN1cnJlbmN5KSB7XG4gICAgICAgIGJhc2VDdXJyZW5jeUlkID0gZGF0YS5nZXRCYXNlQ3VycmVuY3kuaWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFdhcm4gYWRtaW5kIGlmIGhlL3NoZSB0cnkgdG8gZGlzYWJsZSB0aGUgYmFzZSBjdXJyZW5jeVxuICAgICAgaWYgKGJhc2VDdXJyZW5jeUlkID09PSBpZCkge1xuICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQhXCIsIFwiU29ycnksIHlvdSBjYW4ndCBkaXNhYmxlIHRoZSBiYXNlIGN1cnJlbmN5LiBUcnkgdG8gc2V0IGEgZGlmZmVyZW50IGJhc2UgY3VycmVuY3kgYW5kIGRpc2FibGUgdGhpcyBvbmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgICAgICAgbXV0YXRpb24gY3VycmVuY3lNYW5hZ2VtZW50ICgkaWQ6IEludCwgJGlzRW5hYmxlOiBCb29sZWFuKXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lNYW5hZ2VtZW50KGlkOiAkaWQsIGlzRW5hYmxlOiAkaXNFbmFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgdmFyaWFibGVzOiB7IGlkLCBpc0VuYWJsZSB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogZ2V0QWxsQ3VycmVuY3lRdWVyeSB9XVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGF0YS5jdXJyZW5jeU1hbmFnZW1lbnQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9DVVJSRU5DWV9TVEFUVVNfU1VDQ0VTUyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiQ3VycmVuY3kgc3RhdHVzIGhhcyBjaGFuZ2VkXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IENIQU5HRV9DVVJSRU5DWV9TVEFUVVNfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCFcIiwgXCJGYWlsZWQgdG8gY2hhbmdlIEN1cnJlbmN5IHN0YXR1c1wiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEJhc2VDdXJyZW5jeShpZCkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfQkFTRV9DVVJSRU5DWV9TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIHNldEJhc2VDdXJyZW5jeSgkaWQ6IEludCl7XG4gICAgICAgICAgICAgICAgYmFzZUN1cnJlbmN5KGlkOiAkaWQpe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBnZXRBbGxDdXJyZW5jeVF1ZXJ5IH1dXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEuYmFzZUN1cnJlbmN5LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNFVF9CQVNFX0NVUlJFTkNZX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiQmFzZSBDdXJyZW5jeSBpcyBzZXQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX0JBU0VfQ1VSUkVOQ1lfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCFcIiwgXCJGYWlsZWQgdG8gc2V0IEJhc2UgQ3VycmVuY3lcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEFsbEN1cnJlbmNpZXNcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0Q3VycmVuY2llc1wifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXF1ZXN0ZWRGcm9tXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJTdHJpbmdWYWx1ZVwiLFwidmFsdWVcIjpcInNpdGVhZG1pblwiLFwiYmxvY2tcIjpmYWxzZX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzeW1ib2xcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNFbmFibGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNQYXltZW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzQmFzZUN1cnJlbmN5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxNzh9fTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5cbmltcG9ydCB7XG4gIEFETUlOX01BTkFHRV9QQVlNRU5UX0NVUlJFTkNZX1NUQVJULFxuICBBRE1JTl9NQU5BR0VfUEFZTUVOVF9DVVJSRU5DWV9TVUNDRVNTLFxuICBBRE1JTl9NQU5BR0VfUEFZTUVOVF9DVVJSRU5DWV9FUlJPUixcbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IGdldEFsbEN1cnJlbmN5UXVlcnkgZnJvbSAnLi9nZXRBbGxDdXJyZW5jeS5ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hbmFnZVBheW1lbnRDdXJyZW5jeShjdXJyZW5jeUlkLCB0eXBlKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFETUlOX01BTkFHRV9QQVlNRU5UX0NVUlJFTkNZX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgIG11dGF0aW9uIG1hbmFnZVBheW1lbnRDdXJyZW5jeShcbiAgICAgICAgICAgICRjdXJyZW5jeUlkOiBJbnQhLCBcbiAgICAgICAgICAgICR0eXBlOiBTdHJpbmchXG4gICAgICAgICAgKXtcbiAgICAgICAgICAgICAgbWFuYWdlUGF5bWVudEN1cnJlbmN5KFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5SWQ6ICRjdXJyZW5jeUlkLCBcbiAgICAgICAgICAgICAgICB0eXBlOiAkdHlwZVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGN1cnJlbmN5SWQsXG4gICAgICAgICAgdHlwZVxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IGdldEFsbEN1cnJlbmN5UXVlcnkgfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLm1hbmFnZVBheW1lbnRDdXJyZW5jeSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQURNSU5fTUFOQUdFX1BBWU1FTlRfQ1VSUkVOQ1lfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdGF0dXM6IGRhdGEubWFuYWdlUGF5bWVudEN1cnJlbmN5LnN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2VzcyFcIiwgXCJQYXltZW50IEN1cnJlbmN5IGNoYW5nZXMgYXJlIGRvbmVcIik7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRE1JTl9NQU5BR0VfUEFZTUVOVF9DVVJSRU5DWV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIVwiLCBcIkZhaWxlZCB0byBjaGFuZ2UgUGF5bWVudCBDdXJyZW5jeSBzdGF0dXNcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9DdXJyZW5jeU1hbmFnZW1lbnQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0N1cnJlbmN5TWFuYWdlbWVudC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9DdXJyZW5jeU1hbmFnZW1lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBUYWJsZSwgVHIsIFRkLCBUaGVhZCwgVGh9IGZyb20gJ3JlYWN0YWJsZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyBTdHlsZVxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9DdXJyZW5jeU1hbmFnZW1lbnQuY3NzJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG4vLyBSZWR1eCBBY3Rpb25zXG5pbXBvcnQgeyB1cGRhdGVDdXJyZW5jeVN0YXR1cywgc2V0QmFzZUN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9zaXRlYWRtaW4vQ3VycmVuY3lNYW5hZ2VtZW50L2N1cnJlbmN5TWFuYWdlbWVudCc7XG5pbXBvcnQgeyBtYW5hZ2VQYXltZW50Q3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9DdXJyZW5jeU1hbmFnZW1lbnQvbWFuYWdlUGF5bWVudEN1cnJlbmN5JztcblxuY2xhc3MgQ3VycmVuY3lNYW5hZ2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBpc0VuYWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIGlzUGF5bWVudDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIGlzQmFzZUN1cnJlbmN5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4gICAgfSkpLFxuICAgIHVwZGF0ZUN1cnJlbmN5U3RhdHVzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgc2V0QmFzZUN1cnJlbmN5OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgbWFuYWdlUGF5bWVudEN1cnJlbmN5OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IFtdXG4gIH07XG5cbiAgaGFuZGxlVXBkYXRlU3RhdHVzKGlkLCBzdGF0dXMpIHtcbiAgICBjb25zdCB7IHVwZGF0ZUN1cnJlbmN5U3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuICAgIHVwZGF0ZUN1cnJlbmN5U3RhdHVzKGlkLCBzdGF0dXMpO1xuICB9XG5cbiAgaGFuZGxlQmFzZUN1cnJlbmN5KGlkKSB7XG4gICAgY29uc3QgeyBzZXRCYXNlQ3VycmVuY3kgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0QmFzZUN1cnJlbmN5KGlkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIG1hbmFnZVBheW1lbnRDdXJyZW5jeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucGFnZWNvbnRlbnRXcmFwcGVyLCAncGFnZWNvbnRlbnRBUicpfT5cbiAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3MuaGVhZGVyVGl0bGV9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jdXJyZW5jeU1hbmFnZW1lbnR9IC8+PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3RhYmxlLXJlc3BvbnNpdmUnLCAndGFibGVCb3JkZXJSYWRpdXNBZG1pbicsICdOZXdBZG1pblJlc3BvbnNpdmVUYWJsZScsICdOZXdSZXNwb25zaXZlVGFibGVBZG1pbicpfT5cbiAgICAgICAgICAgIDxUYWJsZSAgY2xhc3NOYW1lPVwidGFibGVcIiAgbm9EYXRhVGV4dD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ub1JlY29yZEZvdW5kKX0+XG4gICAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICAgIDxUaCBzY29wZT1cImNvbFwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmlkTGFiZWwpfTwvVGg+XG4gICAgICAgICAgICAgIDxUaCBzY29wZT1cImNvbFwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN5bWJvbExhYmVsKX08L1RoPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5iYXNlQ3VycmVuY3lMYWJlbCl9PC9UaD5cbiAgICAgICAgICAgICAgPFRoIHNjb3BlPVwiY29sXCI+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc3RhdHVzKX08L1RoPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5zZXRFbmFibGVEaXNhYmxlKX08L1RoPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5zZXRDdXJyZW5jeUxhYmVsKX08L1RoPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5hbGxvd2VkUGF5bWVudEN1cnJlbmN5KX08L1RoPlxuICAgICAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIGRhdGEubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmlkTGFiZWwpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaWRMYWJlbCl9IGRhdGE9e3ZhbHVlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN5bWJvbExhYmVsKX0gY29sdW1uPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN5bWJvbExhYmVsKX0gZGF0YT17dmFsdWUuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmJhc2VDdXJyZW5jeUxhYmVsKX0gY29sdW1uPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmJhc2VDdXJyZW5jeUxhYmVsKX0gZGF0YT17dmFsdWUuaXNCYXNlQ3VycmVuY3kgPT09IHRydWUgPyBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmFjdGl2ZSkgOiBcIlwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN0YXR1cyl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5zdGF0dXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuaXNFbmFibGUgJiYgPHNwYW4+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5lbmFibGVkTGFiZWx9IC8+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlLmlzRW5hYmxlICYmIDxzcGFuPiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGlzYWJsZWRMYWJlbH0gLz4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnNldEVuYWJsZURpc2FibGUpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc2V0RW5hYmxlRGlzYWJsZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlU3RhdHVzKHZhbHVlLmlkLCB2YWx1ZS5pc0VuYWJsZSl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmlzRW5hYmxlICYmIDxzcGFuPiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGlzYWJsZUxhYmVsfSAvPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlLmlzRW5hYmxlICYmIDxzcGFuPiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZW5hYmxlTGFiZWx9IC8+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRkIGRhdGEtbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc2V0Q3VycmVuY3lMYWJlbCl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5zZXRDdXJyZW5jeUxhYmVsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF2YWx1ZS5pc0Jhc2VDdXJyZW5jeSAmJiB2YWx1ZS5pc0VuYWJsZSAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVCYXNlQ3VycmVuY3kodmFsdWUuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zZXRCYXNlQ3VycmVuY3l9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmFsbG93ZWRQYXltZW50Q3VycmVuY3kpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuYWxsb3dlZFBheW1lbnRDdXJyZW5jeSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsdWUuaXNQYXltZW50ICYmIHZhbHVlLmlzRW5hYmxlICYmIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbkNsaWNrPXsoKSA9PiBtYW5hZ2VQYXltZW50Q3VycmVuY3kodmFsdWUuaWQsIFwiYWRkXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5hZGRMYWJlbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmlzUGF5bWVudCAmJiB2YWx1ZS5pc0VuYWJsZSAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25DbGljaz17KCkgPT4gbWFuYWdlUGF5bWVudEN1cnJlbmN5KHZhbHVlLmlkLCBcInJlbW92ZVwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVtb3ZlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7fSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICB1cGRhdGVDdXJyZW5jeVN0YXR1cyxcbiAgc2V0QmFzZUN1cnJlbmN5LFxuICBtYW5hZ2VQYXltZW50Q3VycmVuY3lcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzKShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ3VycmVuY3lNYW5hZ2VtZW50KSkpOyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vQ3VycmVuY3kuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0N1cnJlbmN5LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0N1cnJlbmN5LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Z3JhcGhxbCwgY29tcG9zZX0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vQ3VycmVuY3kuY3NzJztcbmltcG9ydCBjdXJyZW5jaWVzUXVlcnkgZnJvbSAnLi9jdXJyZW5jaWVzUXVlcnkuZ3JhcGhxbCc7XG5pbXBvcnQgQ3VycmVuY3lNYW5hZ2VtZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2l0ZWFkbWluL0N1cnJlbmN5TWFuYWdlbWVudCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyJztcblxuY2xhc3MgQ3VycmVuY3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBnZXRDdXJyZW5jaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgfSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGE6IHsgbG9hZGluZywgZ2V0Q3VycmVuY2llcyB9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYobG9hZGluZyl7XG4gICAgICByZXR1cm4gPExvYWRlciB0eXBlPXtcInRleHRcIn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8Q3VycmVuY3lNYW5hZ2VtZW50IGRhdGE9e2dldEN1cnJlbmNpZXN9IC8+XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgICB3aXRoU3R5bGVzKHMpLFxuICAgIGdyYXBocWwoY3VycmVuY2llc1F1ZXJ5KSxcbikoQ3VycmVuY3kpOyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwidmFyaWFibGVEZWZpbml0aW9uc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEN1cnJlbmNpZXNcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVxdWVzdGVkRnJvbVwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiU3RyaW5nVmFsdWVcIixcInZhbHVlXCI6XCJzaXRlYWRtaW5cIixcImJsb2NrXCI6ZmFsc2V9fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3ltYm9sXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzRW5hYmxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzUGF5bWVudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0Jhc2VDdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTU1fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXQnO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gJy4vQ3VycmVuY3knO1xuXG5jb25zdCB0aXRsZSA9ICdDdXJyZW5jeSBNYW5hZ2VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgc3RvcmUgfSkge1xuXG4gIC8vIEZyb20gUmVkdXggU3RvcmVcbiAgbGV0IGlzQWRtaW5BdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQWRtaW5BdXRoZW50aWNhdGVkO1xuICBsZXQgaXNTdXBlckFkbWluID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzU3VwZXJBZG1pblxuXG4gIGlmICghaXNBZG1pbkF1dGhlbnRpY2F0ZWQgfHwgIWlzU3VwZXJBZG1pbikge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbi9sb2dpbicgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiA8QWRtaW5MYXlvdXQ+PEN1cnJlbmN5IHRpdGxlPXt0aXRsZX0gLz48L0FkbWluTGF5b3V0PixcbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBU0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFvQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFPQTtBQUNBO0FBL0dBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBSEE7QUFpQkE7QUFEQTtBQUNBO0FBaUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7Ozs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFIQTtBQVdBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFpQkE7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9