require("source-map-support").install();
exports.ids = ["siteadmin-adminRoles"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/AdminRolesForm/AdminRolesForm.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.AdminRolesForm-errorMessage-6w2gX {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.AdminRolesForm-rentAllHeaderAdmin-3maJj {\n  position: fixed !important;\n}\n.AdminRolesForm-adminLayout-1UDvL {\n  padding-top: 64px !important;\n}\n.AdminRolesForm-box-3OPJJ h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.AdminRolesForm-exportLink-3kBAo {\n  margin-bottom: -29px;\n}\n.AdminRolesForm-blockcenter-1yUJB {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.AdminRolesForm-panelHeader-1Hwwz {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.AdminRolesForm-currencyselect-1WYOK {\n  width: 100%;\n  margin-right: 0px;\n}\n.AdminRolesForm-panelHeader-1Hwwz {\n  overflow: hidden;\n  position: relative;\n}\n.AdminRolesForm-mar0-5BYjU {\n  margin-left: 0;\n  margin-right: 0;\n}\n.AdminRolesForm-navbar-1y79E > .AdminRolesForm-container-ryQxZ .AdminRolesForm-navbar-brand-3ndkp,\n.AdminRolesForm-navbar-1y79E > .AdminRolesForm-container-fluid-fwYVc .AdminRolesForm-navbar-brand-3ndkp {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .AdminRolesForm-blockcenter-1yUJB {\n    padding: 0px;\n  }\n  .AdminRolesForm-panelHeader-1Hwwz {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.AdminRolesForm-pagecontentWrapper-3ApZP {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.AdminRolesForm-headerTitle-3QYS6 {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.AdminRolesForm-panelHeader-1Hwwz {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.AdminRolesForm-table-3hop7 {\n\tdisplay: table;\n}\n.AdminRolesForm-tableRow-72mu3 {\n\tdisplay: table-row;\n}\n.AdminRolesForm-tableCell-1lwVo {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.AdminRolesForm-formGroup-1vJIl {\n\tmargin-bottom: 6px;\n}\n.AdminRolesForm-select-1Qexw {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.AdminRolesForm-noMargin-2Mqu0 {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.AdminRolesForm-exportLink-3kBAo {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.AdminRolesForm-labelTextNew-3oGjt {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.AdminRolesForm-displayInline-1lILY {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.AdminRolesForm-btnUPdate-bdM_F {\n\tdisplay: inline-block;\n}\n.AdminRolesForm-btnModalDelete-34oA2 {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.AdminRolesForm-radioBtn-WRX23 {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.AdminRolesForm-btnUPdate-bdM_F {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.AdminRolesForm-btnModalDelete-34oA2 {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.AdminRolesForm-btnWidth-3hJrq {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.AdminRolesForm-bannerImageBg-3kdBL {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.AdminRolesForm-bannerDelete-b_5ZB {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.AdminRolesForm-modalRoot-3OTU4 {\n\tpadding: 32px;\n}\n.AdminRolesForm-modalBorderBottom-1jwCu {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.AdminRolesForm-logInModalBody-gzDwF {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.AdminRolesForm-exportSection-2ZvxP {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.AdminRolesForm-exportSectionGridSub-GEjIz {\n\tgrid-template-columns: 50% 49% !important;\n}\n.AdminRolesForm-exportText-3ue0V {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.AdminRolesForm-exportLinkImg-2hMsS {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.AdminRolesForm-vtrMiddle-YIvzB {\n\tvertical-align: middle;\n}\n.AdminRolesForm-exportImg-R1dbR {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.AdminRolesForm-profileViewlabel-3I1v6 {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.AdminRolesForm-profileViewMainContent-16seK {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.AdminRolesForm-profileViewMain-3eNiH {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.AdminRolesForm-profileViewInner-1K0pE {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.AdminRolesForm-profileImageSection-2hq-d {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.AdminRolesForm-lastviewInner-21M1n {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.AdminRolesForm-pagecontentWrapper-3ApZP {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.AdminRolesForm-exportSection-2ZvxP {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.AdminRolesForm-exportText-3ue0V {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.AdminRolesForm-exportSectionGridSub-GEjIz {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.AdminRolesForm-profileViewlabel-3I1v6 {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.AdminRolesForm-profileViewMainContent-16seK {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.AdminRolesForm-pagecontentWrapper-3ApZP {\n\t\tmargin-left: 0;\n\t}\n}\n.AdminRolesForm-ChangeToUpperCase-35-kO{\n    text-transform: uppercase\n}\n.AdminRolesForm-noBorder-3Dk_9 {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.AdminRolesForm-space1-2ninZ {\n\tmargin-bottom: 6px !important;\n}\n.AdminRolesForm-space2-2Hy09 {\n\tmargin-bottom: 12px !important;\n}\n.AdminRolesForm-space3-1CMqX {\n\tmargin-bottom: 18px !important;\n}\n.AdminRolesForm-space4-QeP-n {\n\tmargin-bottom: 24px !important;\n}\n.AdminRolesForm-space5-3Qt3A {\n\tmargin-bottom: 30px !important;\n}\n.AdminRolesForm-space6-1KcAZ {\n\tmargin-bottom: 36px !important;\n}\n.AdminRolesForm-space7-nByh4 {\n\tmargin-bottom: 42px !important;\n}\n.AdminRolesForm-spaceTop8-DGCd3 {\n\tmargin-bottom: 48px !important;\n}\n.AdminRolesForm-spaceTop1-3bQRx {\n\tmargin-top: 6px !important;\n}\n.AdminRolesForm-spaceTop2-2hqZT {\n\tmargin-top: 12px !important;\n}\n.AdminRolesForm-spaceTop3-3BuJA {\n\tmargin-top: 18px !important;\n}\n.AdminRolesForm-spaceTop4-2z8xz {\n\tmargin-top: 24px !important;\n}\n.AdminRolesForm-spaceTop5-2JvNh {\n\tmargin-top: 30px !important;\n}\n.AdminRolesForm-spaceTop6-WwriL {\n\tmargin-top: 36px !important;\n}\n.AdminRolesForm-spaceTop7-2qHR- {\n\tmargin-top: 42px !important;\n}\n.AdminRolesForm-spaceTop8-DGCd3 {\n\tmargin-top: 48px !important;\n}\n.AdminRolesForm-noMargin-2Mqu0 {\n\tmargin: 0px !important;\n}\n.AdminRolesForm-padding1-3gdkU {\n\tpadding-bottom: 6px !important;\n}\n.AdminRolesForm-padding2-1uT6z {\n\tpadding-bottom: 12px !important;\n}\n.AdminRolesForm-padding3-vA1J7 {\n\tpadding-bottom: 18px !important;\n}\n.AdminRolesForm-padding4-2TE_y {\n\tpadding-bottom: 24px !important;\n}\n.AdminRolesForm-padding5-3tX43 {\n\tpadding-bottom: 30px !important;\n}\n.AdminRolesForm-padding6-TXT1D {\n\tpadding-bottom: 36px !important;\n}\n.AdminRolesForm-padding7-FKLSN {\n\tpadding-bottom: 42px !important;\n}\n.AdminRolesForm-paddingTop1-3tYn9 {\n\tpadding-top: 6px !important;\n}\n.AdminRolesForm-paddingTop2-2vVue {\n\tpadding-top: 12px !important;\n}\n.AdminRolesForm-paddingTop3-SsTJl {\n\tpadding-top: 18px !important;\n}\n.AdminRolesForm-paddingTop4-3Y30O {\n\tpadding-top: 24px !important;\n}\n.AdminRolesForm-paddingTop5-3MR3M {\n\tpadding-top: 30px !important;\n}\n.AdminRolesForm-paddingTop6-39SCN {\n\tpadding-top: 36px !important;\n}\n.AdminRolesForm-paddingTop7-2NMpH {\n\tpadding-top: 42px !important;\n}\n.AdminRolesForm-noPadding-JTLXI {\n\tpadding: 0px !important;\n}\n.AdminRolesForm-textBold-3CunN {\n\tfont-weight: 500 !important;\n}\n.AdminRolesForm-textBolder-1sbpZ {\n\tfont-weight: 700 !important;\n}\n.AdminRolesForm-textNormal-1MTio {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.AdminRolesForm-textDarkBlue-qGzK3 {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.AdminRolesForm-textLightBlue-21y6I {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.AdminRolesForm-textLightSandleGreen-2uXom {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.AdminRolesForm-textLightBrown-2esuQ {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.AdminRolesForm-textMediumMaroon-dJz2x {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.AdminRolesForm-textBrown-JNzRw {\n\tcolor: #B5DC4B !important;\n}\n.AdminRolesForm-textMaroon-2wzz6 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.AdminRolesForm-textDarkBrown-vv46S {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.AdminRolesForm-textMediumBrown-5UJuN {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.AdminRolesForm-textSkyBlue-3R848 {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.AdminRolesForm-textGray-3B8Fw {\n\tcolor: rgb(77, 65, 51) !important;\n}\n/** RentAll - Begin **/\n.AdminRolesForm-checkBoxWidth-7J8hS {\n  width: 34px;\n}\n.AdminRolesForm-textWidth-2VD-1 {\n  width: 88%;\n  vertical-align: middle;\n  font-size: 16px;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminRolesForm/AdminRolesForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD,uBAAuB;AACvB;EACE,YAAY;CACb;AACD;EACE,WAAW;EACX,uBAAuB;EACvB,gBAAgB;CACjB","file":"AdminRolesForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n/** RentAll - Begin **/\n.checkBoxWidth {\n  width: 34px;\n}\n.textWidth {\n  width: 88%;\n  vertical-align: middle;\n  font-size: 16px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"errorMessage": "AdminRolesForm-errorMessage-6w2gX",
	"rentAllHeaderAdmin": "AdminRolesForm-rentAllHeaderAdmin-3maJj",
	"adminLayout": "AdminRolesForm-adminLayout-1UDvL",
	"box": "AdminRolesForm-box-3OPJJ",
	"exportLink": "AdminRolesForm-exportLink-3kBAo",
	"blockcenter": "AdminRolesForm-blockcenter-1yUJB",
	"panelHeader": "AdminRolesForm-panelHeader-1Hwwz",
	"currencyselect": "AdminRolesForm-currencyselect-1WYOK",
	"mar0": "AdminRolesForm-mar0-5BYjU",
	"navbar": "AdminRolesForm-navbar-1y79E",
	"container": "AdminRolesForm-container-ryQxZ",
	"navbar-brand": "AdminRolesForm-navbar-brand-3ndkp",
	"container-fluid": "AdminRolesForm-container-fluid-fwYVc",
	"pagecontentWrapper": "AdminRolesForm-pagecontentWrapper-3ApZP",
	"headerTitle": "AdminRolesForm-headerTitle-3QYS6",
	"table": "AdminRolesForm-table-3hop7",
	"tableRow": "AdminRolesForm-tableRow-72mu3",
	"tableCell": "AdminRolesForm-tableCell-1lwVo",
	"formGroup": "AdminRolesForm-formGroup-1vJIl",
	"select": "AdminRolesForm-select-1Qexw",
	"noMargin": "AdminRolesForm-noMargin-2Mqu0",
	"labelTextNew": "AdminRolesForm-labelTextNew-3oGjt",
	"displayInline": "AdminRolesForm-displayInline-1lILY",
	"btnUPdate": "AdminRolesForm-btnUPdate-bdM_F",
	"btnModalDelete": "AdminRolesForm-btnModalDelete-34oA2",
	"radioBtn": "AdminRolesForm-radioBtn-WRX23",
	"btnWidth": "AdminRolesForm-btnWidth-3hJrq",
	"bannerImageBg": "AdminRolesForm-bannerImageBg-3kdBL",
	"bannerDelete": "AdminRolesForm-bannerDelete-b_5ZB",
	"modalRoot": "AdminRolesForm-modalRoot-3OTU4",
	"modalBorderBottom": "AdminRolesForm-modalBorderBottom-1jwCu",
	"logInModalBody": "AdminRolesForm-logInModalBody-gzDwF",
	"exportSection": "AdminRolesForm-exportSection-2ZvxP",
	"exportSectionGridSub": "AdminRolesForm-exportSectionGridSub-GEjIz",
	"exportText": "AdminRolesForm-exportText-3ue0V",
	"exportLinkImg": "AdminRolesForm-exportLinkImg-2hMsS",
	"vtrMiddle": "AdminRolesForm-vtrMiddle-YIvzB",
	"exportImg": "AdminRolesForm-exportImg-R1dbR",
	"profileViewlabel": "AdminRolesForm-profileViewlabel-3I1v6",
	"profileViewMainContent": "AdminRolesForm-profileViewMainContent-16seK",
	"profileViewMain": "AdminRolesForm-profileViewMain-3eNiH",
	"profileViewInner": "AdminRolesForm-profileViewInner-1K0pE",
	"profileImageSection": "AdminRolesForm-profileImageSection-2hq-d",
	"lastviewInner": "AdminRolesForm-lastviewInner-21M1n",
	"ChangeToUpperCase": "AdminRolesForm-ChangeToUpperCase-35-kO",
	"noBorder": "AdminRolesForm-noBorder-3Dk_9",
	"space1": "AdminRolesForm-space1-2ninZ",
	"space2": "AdminRolesForm-space2-2Hy09",
	"space3": "AdminRolesForm-space3-1CMqX",
	"space4": "AdminRolesForm-space4-QeP-n",
	"space5": "AdminRolesForm-space5-3Qt3A",
	"space6": "AdminRolesForm-space6-1KcAZ",
	"space7": "AdminRolesForm-space7-nByh4",
	"spaceTop8": "AdminRolesForm-spaceTop8-DGCd3",
	"spaceTop1": "AdminRolesForm-spaceTop1-3bQRx",
	"spaceTop2": "AdminRolesForm-spaceTop2-2hqZT",
	"spaceTop3": "AdminRolesForm-spaceTop3-3BuJA",
	"spaceTop4": "AdminRolesForm-spaceTop4-2z8xz",
	"spaceTop5": "AdminRolesForm-spaceTop5-2JvNh",
	"spaceTop6": "AdminRolesForm-spaceTop6-WwriL",
	"spaceTop7": "AdminRolesForm-spaceTop7-2qHR-",
	"padding1": "AdminRolesForm-padding1-3gdkU",
	"padding2": "AdminRolesForm-padding2-1uT6z",
	"padding3": "AdminRolesForm-padding3-vA1J7",
	"padding4": "AdminRolesForm-padding4-2TE_y",
	"padding5": "AdminRolesForm-padding5-3tX43",
	"padding6": "AdminRolesForm-padding6-TXT1D",
	"padding7": "AdminRolesForm-padding7-FKLSN",
	"paddingTop1": "AdminRolesForm-paddingTop1-3tYn9",
	"paddingTop2": "AdminRolesForm-paddingTop2-2vVue",
	"paddingTop3": "AdminRolesForm-paddingTop3-SsTJl",
	"paddingTop4": "AdminRolesForm-paddingTop4-3Y30O",
	"paddingTop5": "AdminRolesForm-paddingTop5-3MR3M",
	"paddingTop6": "AdminRolesForm-paddingTop6-39SCN",
	"paddingTop7": "AdminRolesForm-paddingTop7-2NMpH",
	"noPadding": "AdminRolesForm-noPadding-JTLXI",
	"textBold": "AdminRolesForm-textBold-3CunN",
	"textBolder": "AdminRolesForm-textBolder-1sbpZ",
	"textNormal": "AdminRolesForm-textNormal-1MTio",
	"textDarkBlue": "AdminRolesForm-textDarkBlue-qGzK3",
	"textLightBlue": "AdminRolesForm-textLightBlue-21y6I",
	"textLightSandleGreen": "AdminRolesForm-textLightSandleGreen-2uXom",
	"textLightBrown": "AdminRolesForm-textLightBrown-2esuQ",
	"textMediumMaroon": "AdminRolesForm-textMediumMaroon-dJz2x",
	"textBrown": "AdminRolesForm-textBrown-JNzRw",
	"textMaroon": "AdminRolesForm-textMaroon-2wzz6",
	"textDarkBrown": "AdminRolesForm-textDarkBrown-vv46S",
	"textMediumBrown": "AdminRolesForm-textMediumBrown-5UJuN",
	"textSkyBlue": "AdminRolesForm-textSkyBlue-3R848",
	"textGray": "AdminRolesForm-textGray-3B8Fw",
	"checkBoxWidth": "AdminRolesForm-checkBoxWidth-7J8hS",
	"textWidth": "AdminRolesForm-textWidth-2VD-1"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.AdminRolesManagement-rentAllHeaderAdmin-2LNS8 {\n  position: fixed !important;\n}\n.AdminRolesManagement-adminLayout-29OMY {\n  padding-top: 64px !important;\n}\n.AdminRolesManagement-box-1udcD h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.AdminRolesManagement-exportLink-i-L3P {\n  margin-bottom: -29px;\n}\n.AdminRolesManagement-blockcenter-Ouhd4 {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.AdminRolesManagement-panelHeader-3t38o {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.AdminRolesManagement-currencyselect-2wxB8 {\n  width: 100%;\n  margin-right: 0px;\n}\n.AdminRolesManagement-panelHeader-3t38o {\n  overflow: hidden;\n  position: relative;\n}\n.AdminRolesManagement-mar0-FgsxA {\n  margin-left: 0;\n  margin-right: 0;\n}\n.AdminRolesManagement-navbar-1WgQn > .AdminRolesManagement-container-3I222 .AdminRolesManagement-navbar-brand-3Ld5c,\n.AdminRolesManagement-navbar-1WgQn > .AdminRolesManagement-container-fluid-2C0VZ .AdminRolesManagement-navbar-brand-3Ld5c {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .AdminRolesManagement-blockcenter-Ouhd4 {\n    padding: 0px;\n  }\n  .AdminRolesManagement-panelHeader-3t38o {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.AdminRolesManagement-pagecontentWrapper-3Rx7t {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.AdminRolesManagement-headerTitle-1RQox {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.AdminRolesManagement-panelHeader-3t38o {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.AdminRolesManagement-table-35CQj {\n\tdisplay: table;\n}\n.AdminRolesManagement-tableRow-1wysq {\n\tdisplay: table-row;\n}\n.AdminRolesManagement-tableCell-1sHz6 {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.AdminRolesManagement-formGroup-3GTUA {\n\tmargin-bottom: 6px;\n}\n.AdminRolesManagement-select-2dyvw {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.AdminRolesManagement-noMargin-3RjnD {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.AdminRolesManagement-exportLink-i-L3P {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.AdminRolesManagement-labelTextNew-2uUgZ {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.AdminRolesManagement-displayInline-20QFM {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.AdminRolesManagement-btnUPdate-iujHV {\n\tdisplay: inline-block;\n}\n.AdminRolesManagement-btnModalDelete-3HgZS {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.AdminRolesManagement-radioBtn-2_a5h {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.AdminRolesManagement-btnUPdate-iujHV {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.AdminRolesManagement-btnModalDelete-3HgZS {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.AdminRolesManagement-btnWidth-3nF6h {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.AdminRolesManagement-bannerImageBg-1b553 {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.AdminRolesManagement-bannerDelete-1b3gY {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.AdminRolesManagement-modalRoot-36Vkw {\n\tpadding: 32px;\n}\n.AdminRolesManagement-modalBorderBottom-2Lcnl {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.AdminRolesManagement-logInModalBody-evB_C {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.AdminRolesManagement-exportSection-2FF64 {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.AdminRolesManagement-exportSectionGridSub-23EMb {\n\tgrid-template-columns: 50% 49% !important;\n}\n.AdminRolesManagement-exportText-3vk3C {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.AdminRolesManagement-exportLinkImg-3h0_D {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.AdminRolesManagement-vtrMiddle-3aOjD {\n\tvertical-align: middle;\n}\n.AdminRolesManagement-exportImg-q62KQ {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.AdminRolesManagement-profileViewlabel-e61hb {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.AdminRolesManagement-profileViewMainContent-2jDRn {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.AdminRolesManagement-profileViewMain-3ARnb {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.AdminRolesManagement-profileViewInner-1FU87 {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.AdminRolesManagement-profileImageSection-2q7Y_ {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.AdminRolesManagement-lastviewInner-1TAaG {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.AdminRolesManagement-pagecontentWrapper-3Rx7t {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.AdminRolesManagement-exportSection-2FF64 {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.AdminRolesManagement-exportText-3vk3C {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.AdminRolesManagement-exportSectionGridSub-23EMb {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.AdminRolesManagement-profileViewlabel-e61hb {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.AdminRolesManagement-profileViewMainContent-2jDRn {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.AdminRolesManagement-pagecontentWrapper-3Rx7t {\n\t\tmargin-left: 0;\n\t}\n}\n.AdminRolesManagement-ChangeToUpperCase-1WMpM{\n    text-transform: uppercase\n}\n.AdminRolesManagement-noBorder-XXrvB {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.AdminRolesManagement-space1-2c8jt {\n\tmargin-bottom: 6px !important;\n}\n.AdminRolesManagement-space2-3ennO {\n\tmargin-bottom: 12px !important;\n}\n.AdminRolesManagement-space3-ogXFl {\n\tmargin-bottom: 18px !important;\n}\n.AdminRolesManagement-space4-1IG85 {\n\tmargin-bottom: 24px !important;\n}\n.AdminRolesManagement-space5-1XjE_ {\n\tmargin-bottom: 30px !important;\n}\n.AdminRolesManagement-space6-Iho12 {\n\tmargin-bottom: 36px !important;\n}\n.AdminRolesManagement-space7-1hLFS {\n\tmargin-bottom: 42px !important;\n}\n.AdminRolesManagement-spaceTop8-2_9Yk {\n\tmargin-bottom: 48px !important;\n}\n.AdminRolesManagement-spaceTop1-3KFos {\n\tmargin-top: 6px !important;\n}\n.AdminRolesManagement-spaceTop2-2IvLc {\n\tmargin-top: 12px !important;\n}\n.AdminRolesManagement-spaceTop3-2jaxP {\n\tmargin-top: 18px !important;\n}\n.AdminRolesManagement-spaceTop4-1KDTJ {\n\tmargin-top: 24px !important;\n}\n.AdminRolesManagement-spaceTop5-3AvBI {\n\tmargin-top: 30px !important;\n}\n.AdminRolesManagement-spaceTop6-3D9Jp {\n\tmargin-top: 36px !important;\n}\n.AdminRolesManagement-spaceTop7-30813 {\n\tmargin-top: 42px !important;\n}\n.AdminRolesManagement-spaceTop8-2_9Yk {\n\tmargin-top: 48px !important;\n}\n.AdminRolesManagement-noMargin-3RjnD {\n\tmargin: 0px !important;\n}\n.AdminRolesManagement-padding1-Cyvdl {\n\tpadding-bottom: 6px !important;\n}\n.AdminRolesManagement-padding2-b1x8o {\n\tpadding-bottom: 12px !important;\n}\n.AdminRolesManagement-padding3-33GP_ {\n\tpadding-bottom: 18px !important;\n}\n.AdminRolesManagement-padding4-3g83u {\n\tpadding-bottom: 24px !important;\n}\n.AdminRolesManagement-padding5-2DneJ {\n\tpadding-bottom: 30px !important;\n}\n.AdminRolesManagement-padding6-39wYc {\n\tpadding-bottom: 36px !important;\n}\n.AdminRolesManagement-padding7-1CfyG {\n\tpadding-bottom: 42px !important;\n}\n.AdminRolesManagement-paddingTop1-1I8N- {\n\tpadding-top: 6px !important;\n}\n.AdminRolesManagement-paddingTop2-1xgQx {\n\tpadding-top: 12px !important;\n}\n.AdminRolesManagement-paddingTop3-3fCUZ {\n\tpadding-top: 18px !important;\n}\n.AdminRolesManagement-paddingTop4-189hu {\n\tpadding-top: 24px !important;\n}\n.AdminRolesManagement-paddingTop5-3uOX4 {\n\tpadding-top: 30px !important;\n}\n.AdminRolesManagement-paddingTop6-fL8nP {\n\tpadding-top: 36px !important;\n}\n.AdminRolesManagement-paddingTop7-rAq8J {\n\tpadding-top: 42px !important;\n}\n.AdminRolesManagement-noPadding-1btc7 {\n\tpadding: 0px !important;\n}\n.AdminRolesManagement-textBold-ZZFoj {\n\tfont-weight: 500 !important;\n}\n.AdminRolesManagement-textBolder-2aQ2m {\n\tfont-weight: 700 !important;\n}\n.AdminRolesManagement-textNormal-I2Unf {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.AdminRolesManagement-textDarkBlue-2GDgE {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.AdminRolesManagement-textLightBlue-1EUe5 {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.AdminRolesManagement-textLightSandleGreen-3rZj9 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.AdminRolesManagement-textLightBrown-2Ne8Y {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.AdminRolesManagement-textMediumMaroon-2MOT1 {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.AdminRolesManagement-textBrown-1z5dG {\n\tcolor: #B5DC4B !important;\n}\n.AdminRolesManagement-textMaroon-kwmb2 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.AdminRolesManagement-textDarkBrown-3KSc5 {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.AdminRolesManagement-textMediumBrown-2Bre- {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.AdminRolesManagement-textSkyBlue-2FNqH {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.AdminRolesManagement-textGray-8WVAO {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"AdminRolesManagement.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "AdminRolesManagement-rentAllHeaderAdmin-2LNS8",
	"adminLayout": "AdminRolesManagement-adminLayout-29OMY",
	"box": "AdminRolesManagement-box-1udcD",
	"exportLink": "AdminRolesManagement-exportLink-i-L3P",
	"blockcenter": "AdminRolesManagement-blockcenter-Ouhd4",
	"panelHeader": "AdminRolesManagement-panelHeader-3t38o",
	"currencyselect": "AdminRolesManagement-currencyselect-2wxB8",
	"mar0": "AdminRolesManagement-mar0-FgsxA",
	"navbar": "AdminRolesManagement-navbar-1WgQn",
	"container": "AdminRolesManagement-container-3I222",
	"navbar-brand": "AdminRolesManagement-navbar-brand-3Ld5c",
	"container-fluid": "AdminRolesManagement-container-fluid-2C0VZ",
	"pagecontentWrapper": "AdminRolesManagement-pagecontentWrapper-3Rx7t",
	"headerTitle": "AdminRolesManagement-headerTitle-1RQox",
	"table": "AdminRolesManagement-table-35CQj",
	"tableRow": "AdminRolesManagement-tableRow-1wysq",
	"tableCell": "AdminRolesManagement-tableCell-1sHz6",
	"formGroup": "AdminRolesManagement-formGroup-3GTUA",
	"select": "AdminRolesManagement-select-2dyvw",
	"noMargin": "AdminRolesManagement-noMargin-3RjnD",
	"labelTextNew": "AdminRolesManagement-labelTextNew-2uUgZ",
	"displayInline": "AdminRolesManagement-displayInline-20QFM",
	"btnUPdate": "AdminRolesManagement-btnUPdate-iujHV",
	"btnModalDelete": "AdminRolesManagement-btnModalDelete-3HgZS",
	"radioBtn": "AdminRolesManagement-radioBtn-2_a5h",
	"btnWidth": "AdminRolesManagement-btnWidth-3nF6h",
	"bannerImageBg": "AdminRolesManagement-bannerImageBg-1b553",
	"bannerDelete": "AdminRolesManagement-bannerDelete-1b3gY",
	"modalRoot": "AdminRolesManagement-modalRoot-36Vkw",
	"modalBorderBottom": "AdminRolesManagement-modalBorderBottom-2Lcnl",
	"logInModalBody": "AdminRolesManagement-logInModalBody-evB_C",
	"exportSection": "AdminRolesManagement-exportSection-2FF64",
	"exportSectionGridSub": "AdminRolesManagement-exportSectionGridSub-23EMb",
	"exportText": "AdminRolesManagement-exportText-3vk3C",
	"exportLinkImg": "AdminRolesManagement-exportLinkImg-3h0_D",
	"vtrMiddle": "AdminRolesManagement-vtrMiddle-3aOjD",
	"exportImg": "AdminRolesManagement-exportImg-q62KQ",
	"profileViewlabel": "AdminRolesManagement-profileViewlabel-e61hb",
	"profileViewMainContent": "AdminRolesManagement-profileViewMainContent-2jDRn",
	"profileViewMain": "AdminRolesManagement-profileViewMain-3ARnb",
	"profileViewInner": "AdminRolesManagement-profileViewInner-1FU87",
	"profileImageSection": "AdminRolesManagement-profileImageSection-2q7Y_",
	"lastviewInner": "AdminRolesManagement-lastviewInner-1TAaG",
	"ChangeToUpperCase": "AdminRolesManagement-ChangeToUpperCase-1WMpM",
	"noBorder": "AdminRolesManagement-noBorder-XXrvB",
	"space1": "AdminRolesManagement-space1-2c8jt",
	"space2": "AdminRolesManagement-space2-3ennO",
	"space3": "AdminRolesManagement-space3-ogXFl",
	"space4": "AdminRolesManagement-space4-1IG85",
	"space5": "AdminRolesManagement-space5-1XjE_",
	"space6": "AdminRolesManagement-space6-Iho12",
	"space7": "AdminRolesManagement-space7-1hLFS",
	"spaceTop8": "AdminRolesManagement-spaceTop8-2_9Yk",
	"spaceTop1": "AdminRolesManagement-spaceTop1-3KFos",
	"spaceTop2": "AdminRolesManagement-spaceTop2-2IvLc",
	"spaceTop3": "AdminRolesManagement-spaceTop3-2jaxP",
	"spaceTop4": "AdminRolesManagement-spaceTop4-1KDTJ",
	"spaceTop5": "AdminRolesManagement-spaceTop5-3AvBI",
	"spaceTop6": "AdminRolesManagement-spaceTop6-3D9Jp",
	"spaceTop7": "AdminRolesManagement-spaceTop7-30813",
	"padding1": "AdminRolesManagement-padding1-Cyvdl",
	"padding2": "AdminRolesManagement-padding2-b1x8o",
	"padding3": "AdminRolesManagement-padding3-33GP_",
	"padding4": "AdminRolesManagement-padding4-3g83u",
	"padding5": "AdminRolesManagement-padding5-2DneJ",
	"padding6": "AdminRolesManagement-padding6-39wYc",
	"padding7": "AdminRolesManagement-padding7-1CfyG",
	"paddingTop1": "AdminRolesManagement-paddingTop1-1I8N-",
	"paddingTop2": "AdminRolesManagement-paddingTop2-1xgQx",
	"paddingTop3": "AdminRolesManagement-paddingTop3-3fCUZ",
	"paddingTop4": "AdminRolesManagement-paddingTop4-189hu",
	"paddingTop5": "AdminRolesManagement-paddingTop5-3uOX4",
	"paddingTop6": "AdminRolesManagement-paddingTop6-fL8nP",
	"paddingTop7": "AdminRolesManagement-paddingTop7-rAq8J",
	"noPadding": "AdminRolesManagement-noPadding-1btc7",
	"textBold": "AdminRolesManagement-textBold-ZZFoj",
	"textBolder": "AdminRolesManagement-textBolder-2aQ2m",
	"textNormal": "AdminRolesManagement-textNormal-I2Unf",
	"textDarkBlue": "AdminRolesManagement-textDarkBlue-2GDgE",
	"textLightBlue": "AdminRolesManagement-textLightBlue-1EUe5",
	"textLightSandleGreen": "AdminRolesManagement-textLightSandleGreen-3rZj9",
	"textLightBrown": "AdminRolesManagement-textLightBrown-2Ne8Y",
	"textMediumMaroon": "AdminRolesManagement-textMediumMaroon-2MOT1",
	"textBrown": "AdminRolesManagement-textBrown-1z5dG",
	"textMaroon": "AdminRolesManagement-textMaroon-kwmb2",
	"textDarkBrown": "AdminRolesManagement-textDarkBrown-3KSc5",
	"textMediumBrown": "AdminRolesManagement-textMediumBrown-2Bre-",
	"textSkyBlue": "AdminRolesManagement-textSkyBlue-2FNqH",
	"textGray": "AdminRolesManagement-textGray-8WVAO"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/AdminRolesModal/AdminRolesModal.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.AdminRolesModal-rentAllHeaderAdmin-zH9CP {\n  position: fixed !important;\n}\n.AdminRolesModal-adminLayout-2PWgC {\n  padding-top: 64px !important;\n}\n.AdminRolesModal-box-r2-cV h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.AdminRolesModal-exportLink-3El__ {\n  margin-bottom: -29px;\n}\n.AdminRolesModal-blockcenter-h3m5P {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.AdminRolesModal-panelHeader-wC_ec {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.AdminRolesModal-currencyselect-26Nzr {\n  width: 100%;\n  margin-right: 0px;\n}\n.AdminRolesModal-panelHeader-wC_ec {\n  overflow: hidden;\n  position: relative;\n}\n.AdminRolesModal-mar0-1kyx7 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.AdminRolesModal-navbar-3dVfG > .AdminRolesModal-container-2WsNK .AdminRolesModal-navbar-brand-ym0z1,\n.AdminRolesModal-navbar-3dVfG > .AdminRolesModal-container-fluid-32VBX .AdminRolesModal-navbar-brand-ym0z1 {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .AdminRolesModal-blockcenter-h3m5P {\n    padding: 0px;\n  }\n  .AdminRolesModal-panelHeader-wC_ec {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.AdminRolesModal-pagecontentWrapper-2rOsg {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.AdminRolesModal-headerTitle-3kSjV {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.AdminRolesModal-panelHeader-wC_ec {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.AdminRolesModal-table-L1pNO {\n\tdisplay: table;\n}\n.AdminRolesModal-tableRow-t6OSW {\n\tdisplay: table-row;\n}\n.AdminRolesModal-tableCell-1MfD_ {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.AdminRolesModal-formGroup-1H3-Q {\n\tmargin-bottom: 6px;\n}\n.AdminRolesModal-select-2ckZ5 {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.AdminRolesModal-noMargin-1js-w {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.AdminRolesModal-exportLink-3El__ {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.AdminRolesModal-labelTextNew-3fUpN {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.AdminRolesModal-displayInline-3WYf1 {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.AdminRolesModal-btnUPdate-1RAi7 {\n\tdisplay: inline-block;\n}\n.AdminRolesModal-btnModalDelete-1Kifl {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.AdminRolesModal-radioBtn-8eKEs {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.AdminRolesModal-btnUPdate-1RAi7 {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.AdminRolesModal-btnModalDelete-1Kifl {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.AdminRolesModal-btnWidth-2kYGG {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.AdminRolesModal-bannerImageBg-1Dp9P {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.AdminRolesModal-bannerDelete-2b2BC {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.AdminRolesModal-modalRoot-1PVXy {\n\tpadding: 32px;\n}\n.AdminRolesModal-modalBorderBottom-1roZK {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.AdminRolesModal-logInModalBody-4ynsy {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.AdminRolesModal-exportSection-8_CsG {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.AdminRolesModal-exportSectionGridSub-X26ry {\n\tgrid-template-columns: 50% 49% !important;\n}\n.AdminRolesModal-exportText-2bjG7 {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.AdminRolesModal-exportLinkImg-1AMmR {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.AdminRolesModal-vtrMiddle-1N6Yv {\n\tvertical-align: middle;\n}\n.AdminRolesModal-exportImg-tdG7U {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.AdminRolesModal-profileViewlabel-22bLg {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.AdminRolesModal-profileViewMainContent-1KMPD {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.AdminRolesModal-profileViewMain-2_hxP {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.AdminRolesModal-profileViewInner-1xkEr {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.AdminRolesModal-profileImageSection-1ySfc {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.AdminRolesModal-lastviewInner-2iRlm {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.AdminRolesModal-pagecontentWrapper-2rOsg {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.AdminRolesModal-exportSection-8_CsG {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.AdminRolesModal-exportText-2bjG7 {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.AdminRolesModal-exportSectionGridSub-X26ry {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.AdminRolesModal-profileViewlabel-22bLg {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.AdminRolesModal-profileViewMainContent-1KMPD {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.AdminRolesModal-pagecontentWrapper-2rOsg {\n\t\tmargin-left: 0;\n\t}\n}\n.AdminRolesModal-ChangeToUpperCase-38LKm{\n    text-transform: uppercase\n}\n.AdminRolesModal-noBorder-37uX1 {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminRolesModal/AdminRolesModal.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"AdminRolesModal.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "AdminRolesModal-rentAllHeaderAdmin-zH9CP",
	"adminLayout": "AdminRolesModal-adminLayout-2PWgC",
	"box": "AdminRolesModal-box-r2-cV",
	"exportLink": "AdminRolesModal-exportLink-3El__",
	"blockcenter": "AdminRolesModal-blockcenter-h3m5P",
	"panelHeader": "AdminRolesModal-panelHeader-wC_ec",
	"currencyselect": "AdminRolesModal-currencyselect-26Nzr",
	"mar0": "AdminRolesModal-mar0-1kyx7",
	"navbar": "AdminRolesModal-navbar-3dVfG",
	"container": "AdminRolesModal-container-2WsNK",
	"navbar-brand": "AdminRolesModal-navbar-brand-ym0z1",
	"container-fluid": "AdminRolesModal-container-fluid-32VBX",
	"pagecontentWrapper": "AdminRolesModal-pagecontentWrapper-2rOsg",
	"headerTitle": "AdminRolesModal-headerTitle-3kSjV",
	"table": "AdminRolesModal-table-L1pNO",
	"tableRow": "AdminRolesModal-tableRow-t6OSW",
	"tableCell": "AdminRolesModal-tableCell-1MfD_",
	"formGroup": "AdminRolesModal-formGroup-1H3-Q",
	"select": "AdminRolesModal-select-2ckZ5",
	"noMargin": "AdminRolesModal-noMargin-1js-w",
	"labelTextNew": "AdminRolesModal-labelTextNew-3fUpN",
	"displayInline": "AdminRolesModal-displayInline-3WYf1",
	"btnUPdate": "AdminRolesModal-btnUPdate-1RAi7",
	"btnModalDelete": "AdminRolesModal-btnModalDelete-1Kifl",
	"radioBtn": "AdminRolesModal-radioBtn-8eKEs",
	"btnWidth": "AdminRolesModal-btnWidth-2kYGG",
	"bannerImageBg": "AdminRolesModal-bannerImageBg-1Dp9P",
	"bannerDelete": "AdminRolesModal-bannerDelete-2b2BC",
	"modalRoot": "AdminRolesModal-modalRoot-1PVXy",
	"modalBorderBottom": "AdminRolesModal-modalBorderBottom-1roZK",
	"logInModalBody": "AdminRolesModal-logInModalBody-4ynsy",
	"exportSection": "AdminRolesModal-exportSection-8_CsG",
	"exportSectionGridSub": "AdminRolesModal-exportSectionGridSub-X26ry",
	"exportText": "AdminRolesModal-exportText-2bjG7",
	"exportLinkImg": "AdminRolesModal-exportLinkImg-1AMmR",
	"vtrMiddle": "AdminRolesModal-vtrMiddle-1N6Yv",
	"exportImg": "AdminRolesModal-exportImg-tdG7U",
	"profileViewlabel": "AdminRolesModal-profileViewlabel-22bLg",
	"profileViewMainContent": "AdminRolesModal-profileViewMainContent-1KMPD",
	"profileViewMain": "AdminRolesModal-profileViewMain-2_hxP",
	"profileViewInner": "AdminRolesModal-profileViewInner-1xkEr",
	"profileImageSection": "AdminRolesModal-profileImageSection-1ySfc",
	"lastviewInner": "AdminRolesModal-lastviewInner-2iRlm",
	"ChangeToUpperCase": "AdminRolesModal-ChangeToUpperCase-38LKm",
	"noBorder": "AdminRolesModal-noBorder-37uX1"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/adminRoles/AdminRoles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/adminRoles/AdminRoles.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"AdminRoles.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/actions/siteadmin/AdminRoles/manageAdminRoles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdminRole", function() { return createAdminRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAdminRole", function() { return deleteAdminRole; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_siteadmin_adminRoles_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/siteadmin/adminRoles/adminRolesQuery.graphql");
/* harmony import */ var _routes_siteadmin_adminRoles_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes_siteadmin_adminRoles_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/actions/siteadmin/modalActions.js");

 // Toaster




const mutation = react_apollo__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation ($id: Int, $name: String!, $description: String, $privileges: [Int]!) {
        createAdminRole (id: $id, name: $name, description: $description, privileges: $privileges) {
            status
            errorMessage
        }
    }
`;
const deleteMutation = react_apollo__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation ($id: Int!) {
        deleteAdminRole(id: $id) {
            status
            errorMessage
        }
    }
`;
function createAdminRole(id, name, description, privileges) {
  return async (dispatch, getState, {
    client
  }) => {
    await dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["CREATE_ADMIN_ROLES_START"],
      payload: {
        createAdminRoleLoading: true
      }
    });

    try {
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          id,
          name,
          description,
          privileges
        },
        refetchQueries: [{
          query: (_routes_siteadmin_adminRoles_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default())
        }]
      });

      if (data && data.createAdminRole && data.createAdminRole.status === 200) {
        await dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["CREATE_ADMIN_ROLES_SUCCESS"],
          payload: {
            createAdminRoleLoading: false
          }
        });
        dispatch(Object(_modalActions__WEBPACK_IMPORTED_MODULE_4__["closeAdminRolesModal"])());
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].success("Admin Role", "Admin Role has been " + (id ? 'updated' : 'added') + " successfully!");
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error("Admin Role",  true && data.createAdminRole && data.createAdminRole.errorMessage);
        await dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["CREATE_ADMIN_ROLES_ERROR"],
          payload: {
            createAdminRoleLoading: false,
            error: data && data.createAdminRole && data.createAdminRole.errorMessage
          }
        });
      }
    } catch (error) {
      await dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["CREATE_ADMIN_ROLES_ERROR"],
        payload: {
          createAdminRoleLoading: false,
          error
        }
      });
    }
  };
}
function deleteAdminRole(id) {
  return async (dispatch, getState, {
    client
  }) => {
    await dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_ADMIN_ROLES_START"],
      payload: {
        deleteAdminRoleLoading: true
      }
    });

    try {
      const {
        data
      } = await client.mutate({
        mutation: deleteMutation,
        variables: {
          id
        },
        refetchQueries: [{
          query: (_routes_siteadmin_adminRoles_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default())
        }]
      });

      if (data && data.deleteAdminRole && data.deleteAdminRole.status === 200) {
        await dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_ADMIN_ROLES_SUCCESS"],
          payload: {
            deleteAdminRoleLoading: false
          }
        });
        dispatch(Object(_modalActions__WEBPACK_IMPORTED_MODULE_4__["closeAdminRolesModal"])());
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].success("Admin Role", "Admin Role has been deleted successfully!");
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error("Admin Role",  true && data.deleteAdminRole && data.deleteAdminRole.errorMessage);
        await dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_ADMIN_ROLES_ERROR"],
          payload: {
            deleteAdminRoleLoading: false,
            error: data && data.deleteAdminRole && data.deleteAdminRole.errorMessage
          }
        });
      }
    } catch (error) {
      await dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_ADMIN_ROLES_ERROR"],
        payload: {
          deleteAdminRoleLoading: false,
          error
        }
      });
    }
  };
}

/***/ }),

/***/ "./src/components/CustomCheckbox/CustomCheckbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isomorphic_style_loader_css_loader_icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./node_modules/icheck/skins/all.css");
/* harmony import */ var _isomorphic_style_loader_css_loader_icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-icheck");
/* harmony import */ var react_icheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icheck__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/CustomCheckbox/CustomCheckbox.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// General

 // Style


 // External Component



class CustomCheckbox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount() {
    const {
      checked
    } = this.props;
    checked === true ? this.setState({
      isChecked: true
    }) : this.setState({
      isChecked: false
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      checked
    } = nextProps;
    checked === true ? this.setState({
      isChecked: true
    }) : this.setState({
      isChecked: false
    });
  }

  handleOnChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
    return !this.state.isChecked;
  }

  render() {
    const {
      name,
      value,
      onChange,
      checked,
      input,
      className
    } = this.props;
    const {
      isChecked
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icheck__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      checkboxClass: className,
      increaseArea: "20%",
      checked: isChecked,
      name: name,
      value: value,
      onChange: () => onChange(this.handleOnChange()),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    });
  }

}

_defineProperty(CustomCheckbox, "propTypes", {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

_defineProperty(CustomCheckbox, "defaultProps", {
  className: 'icheckbox_minimal-blue'
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_isomorphic_style_loader_css_loader_icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_3___default.a)(CustomCheckbox));

/***/ }),

/***/ "./src/components/siteadmin/AdminRolesForm/AdminRolesForm.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/AdminRolesForm/AdminRolesForm.css");
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

/***/ "./src/components/siteadmin/AdminRolesForm/AdminRolesForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/siteadmin/AdminRolesForm/submit.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/siteadmin/AdminRolesForm/validate.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/siteadmin/AdminRolesForm/AdminRolesForm.css");
/* harmony import */ var _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/helpers/adminPrivileges.js");
/* harmony import */ var _CustomCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/CustomCheckbox/CustomCheckbox.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminRolesForm/AdminRolesForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// General
 // Redux Form



 // Translation


 // Redux

 // Style






 // Internal Components



class AdminRolesForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
          lineNumber: 43,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], _extends({}, input, {
        type: type,
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    _defineProperty(this, "renderCheckbox", ({
      input,
      label,
      meta: {
        touched,
        error
      },
      options,
      className
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      let currentValue = input.value || [];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 30
        }
      }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, options && options.length > 0 && options.map((option, index) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          lg: 6,
          md: 6,
          key: index,
          className: className,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.table,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.tableRow,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.tableCell, _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.checkBoxWidth),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 23
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, input, {
          className: 'icheckbox_square-green',
          value: option.id,
          name: `${input.name}[${index}]`,
          checked: currentValue.indexOf(option.id) !== -1,
          onChange: event => {
            const newValue = [...currentValue] || false;

            if (event === true) {
              newValue.push(option.id);
            } else {
              newValue.splice(newValue.indexOf(option.id), 1);
            }

            return input.onChange(newValue);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.tableCell, _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.textWidth),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 23
          }
        }, ' ' + option.privilege))));
      })));
    });
  }

  render() {
    const {
      error,
      handleSubmit,
      submitting,
      id
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    let privileges = Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_12__["getAllAdminPrivileges"])();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.formMaxWidth, 'maxwidthcenter', 'empty'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_2__["default"]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].roleNameLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 47
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "name",
      type: "text",
      component: this.renderFormControl,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].roleNameLabel),
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.commonControlInput),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].descriptionAdminLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 47
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "description",
      component: this.renderFormControlTextArea,
      label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].descriptionAdminLabel),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.labelTextNew,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].privilagesLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 47
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "privileges",
      component: this.renderCheckbox,
      options: privileges,
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
      className: _AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.textAlignRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnLarge),
      type: "submit",
      disabled: submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }, id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].update, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_5__["default"].addLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 65
      }
    })))))));
  }

}

AdminRolesForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "AdminRolesForm",
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_3__["default"]
})(AdminRolesForm);
const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["formValueSelector"])('AdminRolesForm');

const mapState = state => ({
  id: selector(state, 'id')
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_AdminRolesForm_css__WEBPACK_IMPORTED_MODULE_9___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapState, mapDispatch)(AdminRolesForm))));

/***/ }),

/***/ "./src/components/siteadmin/AdminRolesForm/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_siteadmin_AdminRoles_manageAdminRoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/actions/siteadmin/AdminRoles/manageAdminRoles.js");


async function submit(values, dispatch) {
  dispatch(Object(_actions_siteadmin_AdminRoles_manageAdminRoles__WEBPACK_IMPORTED_MODULE_0__["createAdminRole"])(values.id, values.name, values.description, values.privileges));
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/components/siteadmin/AdminRolesForm/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.name && values.name.toString().trim() == "") {
    errors.name = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.name && values.name.length > 255) {
    errors.name = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].exceedLimit255;
  }

  if (values.description && values.description.toString().trim() == "") {
    errors.description = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  if (!values.privileges || values.privileges && values.privileges.length <= 0) {
    errors.privileges = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.css");
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

/***/ "./src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("reactable");
/* harmony import */ var reactable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.css");
/* harmony import */ var _AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/actions/siteadmin/modalActions.js");
/* harmony import */ var _actions_siteadmin_AdminRoles_manageAdminRoles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/actions/siteadmin/AdminRoles/manageAdminRoles.js");
/* harmony import */ var _AdminRolesModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/siteadmin/AdminRolesModal/AdminRolesModal.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Style




 // Redux Actions


 // Components


 // Translation




class AdminRolesManagement extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data,
      openAdminRolesModal,
      deleteAdminRole
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a.pagecontentWrapper, 'pagecontentAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: _AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].manageAdminRoles, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 42
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminRolesModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a.space4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnLarge),
      onClick: () => openAdminRolesModal('add'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].addNewLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('table-responsive', 'tableBorderRadiusAdmin', 'NewAdminResponsiveTable', 'NewResponsiveTableAdmin'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      className: "table",
      noDataText: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].noRecordFound),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Thead"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].idLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].descriptionAdminLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].editLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Th"], {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].delete))), data && data.length > 0 && data.map((value, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
        key: key,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].idLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].idLabel),
        data: value.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].name),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].name),
        data: value.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].descriptionAdminLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].descriptionAdminLabel),
        data: value.description,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].editLabel),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].editLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        noLink: true,
        onClick: () => openAdminRolesModal('edit', value),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].editLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 89
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactable__WEBPACK_IMPORTED_MODULE_1__["Td"], {
        "data-label": formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].delete),
        column: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].delete),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        noLink: true,
        onClick: () => deleteAdminRole(value.id),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].delete, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 80
        }
      })))));
    })))));
  }

}

_defineProperty(AdminRolesManagement, "defaultProps", {
  data: []
});

const mapState = state => ({});

const mapDispatch = {
  openAdminRolesModal: _actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_8__["openAdminRolesModal"],
  deleteAdminRole: _actions_siteadmin_AdminRoles_manageAdminRoles__WEBPACK_IMPORTED_MODULE_9__["deleteAdminRole"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_12__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_AdminRolesManagement_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(AdminRolesManagement))));

/***/ }),

/***/ "./src/components/siteadmin/AdminRolesModal/AdminRolesModal.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/AdminRolesModal/AdminRolesModal.css");
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

/***/ "./src/components/siteadmin/AdminRolesModal/AdminRolesModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/siteadmin/AdminRolesModal/AdminRolesModal.css");
/* harmony import */ var _AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/actions/siteadmin/modalActions.js");
/* harmony import */ var _AdminRolesForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/siteadmin/AdminRolesForm/AdminRolesForm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/AdminRolesModal/AdminRolesModal.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// General
 // Style




 // Redux


 // Component

 // Translation




class AdminRolesModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      closeAdminRolesModal,
      adminRolesModal,
      adminRolesModalType
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      show: adminRolesModal,
      onHide: closeAdminRolesModal,
      className: 'adminModal',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, adminRolesModalType == 'add' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].addLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 58
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].editLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 104
      }
    })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].adminRoleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 150
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
      bsClass: _AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3___default.a.logInModalBody,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalRoot, _AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3___default.a.modalBorderBottom),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminRolesForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    })))));
  }

}

_defineProperty(AdminRolesModal, "defaultProps", {
  adminRolesModalType: 'add'
});

const mapState = state => ({
  adminRolesModal: state.adminModalStatus.adminRolesModal,
  adminRolesModalType: state.adminModalStatus.adminRolesModalType
});

const mapDispatch = {
  closeAdminRolesModal: _actions_siteadmin_modalActions__WEBPACK_IMPORTED_MODULE_6__["closeAdminRolesModal"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_AdminRolesModal_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapState, mapDispatch)(AdminRolesModal)));

/***/ }),

/***/ "./src/routes/siteadmin/adminRoles/AdminRoles.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/adminRoles/AdminRoles.css");
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

/***/ "./src/routes/siteadmin/adminRoles/AdminRoles.js":
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
/* harmony import */ var _AdminRoles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/adminRoles/AdminRoles.css");
/* harmony import */ var _AdminRoles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AdminRoles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/siteadmin/adminRoles/adminRolesQuery.graphql");
/* harmony import */ var _adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_siteadmin_AdminRolesManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/AdminRolesManagement/AdminRolesManagement.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Loader/Loader.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/adminRoles/AdminRoles.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class AdminRoles extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data: {
        loading,
        getAllAdminRoles
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_AdminRolesManagement__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: getAllAdminRoles,
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

_defineProperty(AdminRoles, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getAllAdminRoles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
});

_defineProperty(AdminRoles, "defaultProps", {
  data: {
    loading: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_AdminRoles_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_adminRolesQuery_graphql__WEBPACK_IMPORTED_MODULE_5___default.a, {
  options: {
    fetchPolicy: 'network-only'
  }
}))(AdminRoles));

/***/ }),

/***/ "./src/routes/siteadmin/adminRoles/adminRolesQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllAdminRoles"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"privileges"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":109}};

module.exports = doc;

/***/ }),

/***/ "./src/routes/siteadmin/adminRoles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _AdminRoles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/adminRoles/AdminRoles.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/adminRoles/index.js";



const title = 'Manage Admin Roles';
async function action({
  store
}) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let isSuperAdmin = store.getState().runtime.isSuperAdmin;

  if (!isAdminAuthenticated) {
    return {
      redirect: '/siteadmin/login'
    };
  }

  if (!isSuperAdmin) {
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
        lineNumber: 23,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminRoles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1hZG1pblJvbGVzLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQWRtaW5Sb2xlc0Zvcm0vQWRtaW5Sb2xlc0Zvcm0uY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluUm9sZXNNYW5hZ2VtZW50L0FkbWluUm9sZXNNYW5hZ2VtZW50LmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9BZG1pblJvbGVzTW9kYWwvQWRtaW5Sb2xlc01vZGFsLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL2FkbWluUm9sZXMvQWRtaW5Sb2xlcy5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vQWRtaW5Sb2xlcy9tYW5hZ2VBZG1pblJvbGVzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ3VzdG9tQ2hlY2tib3gvQ3VzdG9tQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluUm9sZXNGb3JtL0FkbWluUm9sZXNGb3JtLmNzcz83Y2Q4IiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluUm9sZXNGb3JtL0FkbWluUm9sZXNGb3JtLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluUm9sZXNGb3JtL3N1Ym1pdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9BZG1pblJvbGVzRm9ybS92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQWRtaW5Sb2xlc01hbmFnZW1lbnQvQWRtaW5Sb2xlc01hbmFnZW1lbnQuY3NzPzNkMWIiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQWRtaW5Sb2xlc01hbmFnZW1lbnQvQWRtaW5Sb2xlc01hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluUm9sZXNNb2RhbC9BZG1pblJvbGVzTW9kYWwuY3NzPzg0MTMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vQWRtaW5Sb2xlc01vZGFsL0FkbWluUm9sZXNNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3NpdGVhZG1pbi9hZG1pblJvbGVzL0FkbWluUm9sZXMuY3NzPzg5ZmMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9hZG1pblJvbGVzL0FkbWluUm9sZXMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9hZG1pblJvbGVzL2FkbWluUm9sZXNRdWVyeS5ncmFwaHFsIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zaXRlYWRtaW4vYWRtaW5Sb2xlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkFkbWluUm9sZXNGb3JtLWVycm9yTWVzc2FnZS02dzJnWCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi0zbWFKaiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWFkbWluTGF5b3V0LTFVRHZMIHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1ib3gtM09QSkogaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWV4cG9ydExpbmstM2tCQW8ge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1ibG9ja2NlbnRlci0xeVVKQiB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcGFuZWxIZWFkZXItMUh3d3oge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWN1cnJlbmN5c2VsZWN0LTFXWU9LIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wYW5lbEhlYWRlci0xSHd3eiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tbWFyMC01QllqVSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLW5hdmJhci0xeTc5RSA+IC5BZG1pblJvbGVzRm9ybS1jb250YWluZXItcnlReFogLkFkbWluUm9sZXNGb3JtLW5hdmJhci1icmFuZC0zbmRrcCxcXG4uQWRtaW5Sb2xlc0Zvcm0tbmF2YmFyLTF5NzlFID4gLkFkbWluUm9sZXNGb3JtLWNvbnRhaW5lci1mbHVpZC1md1lWYyAuQWRtaW5Sb2xlc0Zvcm0tbmF2YmFyLWJyYW5kLTNuZGtwIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkFkbWluUm9sZXNGb3JtLWJsb2NrY2VudGVyLTF5VUpCIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLkFkbWluUm9sZXNGb3JtLXBhbmVsSGVhZGVyLTFId3d6IHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5BZG1pblJvbGVzRm9ybS1wYWdlY29udGVudFdyYXBwZXItM0FwWlAge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1oZWFkZXJUaXRsZS0zUVlTNiB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcGFuZWxIZWFkZXItMUh3d3oge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGFibGUtM2hvcDcge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGFibGVSb3ctNzJtdTMge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLkFkbWluUm9sZXNGb3JtLXRhYmxlQ2VsbC0xbHdWbyB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWZvcm1Hcm91cC0xdkpJbCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc2VsZWN0LTFRZXh3IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1ub01hcmdpbi0yTXF1MCB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tZXhwb3J0TGluay0za0JBbyB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWxhYmVsVGV4dE5ldy0zb0dqdCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tZGlzcGxheUlubGluZS0xbElMWSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5BZG1pblJvbGVzRm9ybS1idG5VUGRhdGUtYmRNX0Yge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLkFkbWluUm9sZXNGb3JtLWJ0bk1vZGFsRGVsZXRlLTM0b0EyIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1yYWRpb0J0bi1XUlgyMyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkFkbWluUm9sZXNGb3JtLWJ0blVQZGF0ZS1iZE1fRiB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNGb3JtLWJ0bk1vZGFsRGVsZXRlLTM0b0EyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuQWRtaW5Sb2xlc0Zvcm0tYnRuV2lkdGgtM2hKcnEge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5BZG1pblJvbGVzRm9ybS1iYW5uZXJJbWFnZUJnLTNrZEJMIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tYmFubmVyRGVsZXRlLWJfNVpCIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQWRtaW5Sb2xlc0Zvcm0tbW9kYWxSb290LTNPVFU0IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tbW9kYWxCb3JkZXJCb3R0b20tMWp3Q3Uge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1sb2dJbk1vZGFsQm9keS1nekR3RiB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5BZG1pblJvbGVzRm9ybS1leHBvcnRTZWN0aW9uLTJadnhQIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItR0VqSXoge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tZXhwb3J0VGV4dC0zdWUwViB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tZXhwb3J0TGlua0ltZy0yaE1zUyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXZ0ck1pZGRsZS1ZSXZ6QiB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWV4cG9ydEltZy1SMWRiUiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wcm9maWxlVmlld2xhYmVsLTNJMXY2IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0xNnNlSyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wcm9maWxlVmlld01haW4tM2VOaUgge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcHJvZmlsZVZpZXdJbm5lci0xSzBwRSB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXByb2ZpbGVJbWFnZVNlY3Rpb24tMmhxLWQge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLkFkbWluUm9sZXNGb3JtLWxhc3R2aWV3SW5uZXItMjFNMW4ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5BZG1pblJvbGVzRm9ybS1wYWdlY29udGVudFdyYXBwZXItM0FwWlAge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5BZG1pblJvbGVzRm9ybS1leHBvcnRTZWN0aW9uLTJadnhQIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5BZG1pblJvbGVzRm9ybS1leHBvcnRUZXh0LTN1ZTBWIHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuQWRtaW5Sb2xlc0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItR0VqSXoge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuQWRtaW5Sb2xlc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0zSTF2NiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMTZzZUsge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5BZG1pblJvbGVzRm9ybS1wYWdlY29udGVudFdyYXBwZXItM0FwWlAge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkFkbWluUm9sZXNGb3JtLUNoYW5nZVRvVXBwZXJDYXNlLTM1LWtPe1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5BZG1pblJvbGVzRm9ybS1ub0JvcmRlci0zRGtfOSB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5BZG1pblJvbGVzRm9ybS1zcGFjZTEtMm5pbloge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc3BhY2UyLTJIeTA5IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1zcGFjZTMtMUNNcVgge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXNwYWNlNC1RZVAtbiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc3BhY2U1LTNRdDNBIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1zcGFjZTYtMUtjQVoge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXNwYWNlNy1uQnloNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc3BhY2VUb3A4LURHQ2QzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1zcGFjZVRvcDEtM2JRUngge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc3BhY2VUb3AyLTJocVpUIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1zcGFjZVRvcDMtM0J1SkEge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXNwYWNlVG9wNC0yejh4eiB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc3BhY2VUb3A1LTJKdk5oIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1zcGFjZVRvcDYtV3dyaUwge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXNwYWNlVG9wNy0ycUhSLSB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tc3BhY2VUb3A4LURHQ2QzIHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1ub01hcmdpbi0yTXF1MCB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXBhZGRpbmcxLTNnZGtVIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wYWRkaW5nMi0xdVQ2eiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXBhZGRpbmczLXZBMUo3IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZzQtMlRFX3kge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wYWRkaW5nNS0zdFg0MyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXBhZGRpbmc2LVRYVDFEIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZzctRktMU04ge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wYWRkaW5nVG9wMS0zdFluOSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZ1RvcDItMnZWdWUge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wYWRkaW5nVG9wMy1Tc1RKbCB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXBhZGRpbmdUb3A0LTNZMzBPIHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZ1RvcDUtM01SM00ge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS1wYWRkaW5nVG9wNi0zOVNDTiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXBhZGRpbmdUb3A3LTJOTXBIIHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tbm9QYWRkaW5nLUpUTFhJIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXRleHRCb2xkLTNDdW5OIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS10ZXh0Qm9sZGVyLTFzYnBaIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS10ZXh0Tm9ybWFsLTFNVGlvIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5BZG1pblJvbGVzRm9ybS10ZXh0RGFya0JsdWUtcUd6SzMge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXRleHRMaWdodEJsdWUtMjF5Nkkge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0ydVhvbSB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGV4dExpZ2h0QnJvd24tMmVzdVEge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS10ZXh0TWVkaXVtTWFyb29uLWRKejJ4IHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS10ZXh0QnJvd24tSk56Uncge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzRm9ybS10ZXh0TWFyb29uLTJ3eno2IHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGV4dERhcmtCcm93bi12djQ2UyB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGV4dE1lZGl1bUJyb3duLTVVSnVOIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGV4dFNreUJsdWUtM1I4NDgge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc0Zvcm0tdGV4dEdyYXktM0I4Rncge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLyoqIFJlbnRBbGwgLSBCZWdpbiAqKi9cXG4uQWRtaW5Sb2xlc0Zvcm0tY2hlY2tCb3hXaWR0aC03SjhoUyB7XFxuICB3aWR0aDogMzRweDtcXG59XFxuLkFkbWluUm9sZXNGb3JtLXRleHRXaWR0aC0yVkQtMSB7XFxuICB3aWR0aDogODglO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9BZG1pblJvbGVzRm9ybS9BZG1pblJvbGVzRm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QjtBQUM1QjtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRCx1QkFBdUI7QUFDdkI7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCXCIsXCJmaWxlXCI6XCJBZG1pblJvbGVzRm9ybS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLmVycm9yTWVzc2FnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnJlbnRBbGxIZWFkZXJBZG1pbiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLmFkbWluTGF5b3V0IHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmV4cG9ydExpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5ibG9ja2NlbnRlciB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmN1cnJlbmN5c2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFyMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcXG4ubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmJsb2NrY2VudGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLnBhbmVsSGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGFibGUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udGFibGVSb3cge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLnRhYmxlQ2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLmxhYmVsVGV4dE5ldyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uZGlzcGxheUlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5idG5VUGRhdGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5yYWRpb0J0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmJ0blVQZGF0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuYnRuV2lkdGgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5iYW5uZXJJbWFnZUJnIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYmFubmVyRGVsZXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubW9kYWxSb290IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4ubW9kYWxCb3JkZXJCb3R0b20ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5sb2dJbk1vZGFsQm9keSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5leHBvcnRTZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uZXhwb3J0VGV4dCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhwb3J0TGlua0ltZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnZ0ck1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmV4cG9ydEltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4ucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5wcm9maWxlVmlld01haW4ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucHJvZmlsZVZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLnByb2ZpbGVJbWFnZVNlY3Rpb24ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxhc3R2aWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5leHBvcnRTZWN0aW9uIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5leHBvcnRUZXh0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkNoYW5nZVRvVXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5ub0JvcmRlciB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLyoqIFJlbnRBbGwgLSBCZWdpbiAqKi9cXG4uY2hlY2tCb3hXaWR0aCB7XFxuICB3aWR0aDogMzRweDtcXG59XFxuLnRleHRXaWR0aCB7XFxuICB3aWR0aDogODglO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImVycm9yTWVzc2FnZVwiOiBcIkFkbWluUm9sZXNGb3JtLWVycm9yTWVzc2FnZS02dzJnWFwiLFxuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIkFkbWluUm9sZXNGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi0zbWFKalwiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiQWRtaW5Sb2xlc0Zvcm0tYWRtaW5MYXlvdXQtMVVEdkxcIixcblx0XCJib3hcIjogXCJBZG1pblJvbGVzRm9ybS1ib3gtM09QSkpcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tZXhwb3J0TGluay0za0JBb1wiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tYmxvY2tjZW50ZXItMXlVSkJcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIkFkbWluUm9sZXNGb3JtLXBhbmVsSGVhZGVyLTFId3d6XCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJBZG1pblJvbGVzRm9ybS1jdXJyZW5jeXNlbGVjdC0xV1lPS1wiLFxuXHRcIm1hcjBcIjogXCJBZG1pblJvbGVzRm9ybS1tYXIwLTVCWWpVXCIsXG5cdFwibmF2YmFyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tbmF2YmFyLTF5NzlFXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tY29udGFpbmVyLXJ5UXhaXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tbmF2YmFyLWJyYW5kLTNuZGtwXCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tY29udGFpbmVyLWZsdWlkLWZ3WVZjXCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTNBcFpQXCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJBZG1pblJvbGVzRm9ybS1oZWFkZXJUaXRsZS0zUVlTNlwiLFxuXHRcInRhYmxlXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGFibGUtM2hvcDdcIixcblx0XCJ0YWJsZVJvd1wiOiBcIkFkbWluUm9sZXNGb3JtLXRhYmxlUm93LTcybXUzXCIsXG5cdFwidGFibGVDZWxsXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGFibGVDZWxsLTFsd1ZvXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tZm9ybUdyb3VwLTF2SklsXCIsXG5cdFwic2VsZWN0XCI6IFwiQWRtaW5Sb2xlc0Zvcm0tc2VsZWN0LTFRZXh3XCIsXG5cdFwibm9NYXJnaW5cIjogXCJBZG1pblJvbGVzRm9ybS1ub01hcmdpbi0yTXF1MFwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIkFkbWluUm9sZXNGb3JtLWxhYmVsVGV4dE5ldy0zb0dqdFwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJBZG1pblJvbGVzRm9ybS1kaXNwbGF5SW5saW5lLTFsSUxZXCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tYnRuVVBkYXRlLWJkTV9GXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJBZG1pblJvbGVzRm9ybS1idG5Nb2RhbERlbGV0ZS0zNG9BMlwiLFxuXHRcInJhZGlvQnRuXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcmFkaW9CdG4tV1JYMjNcIixcblx0XCJidG5XaWR0aFwiOiBcIkFkbWluUm9sZXNGb3JtLWJ0bldpZHRoLTNoSnJxXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIkFkbWluUm9sZXNGb3JtLWJhbm5lckltYWdlQmctM2tkQkxcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJBZG1pblJvbGVzRm9ybS1iYW5uZXJEZWxldGUtYl81WkJcIixcblx0XCJtb2RhbFJvb3RcIjogXCJBZG1pblJvbGVzRm9ybS1tb2RhbFJvb3QtM09UVTRcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIkFkbWluUm9sZXNGb3JtLW1vZGFsQm9yZGVyQm90dG9tLTFqd0N1XCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJBZG1pblJvbGVzRm9ybS1sb2dJbk1vZGFsQm9keS1nekR3RlwiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJBZG1pblJvbGVzRm9ybS1leHBvcnRTZWN0aW9uLTJadnhQXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJBZG1pblJvbGVzRm9ybS1leHBvcnRTZWN0aW9uR3JpZFN1Yi1HRWpJelwiLFxuXHRcImV4cG9ydFRleHRcIjogXCJBZG1pblJvbGVzRm9ybS1leHBvcnRUZXh0LTN1ZTBWXCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIkFkbWluUm9sZXNGb3JtLWV4cG9ydExpbmtJbWctMmhNc1NcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJBZG1pblJvbGVzRm9ybS12dHJNaWRkbGUtWUl2ekJcIixcblx0XCJleHBvcnRJbWdcIjogXCJBZG1pblJvbGVzRm9ybS1leHBvcnRJbWctUjFkYlJcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0zSTF2NlwiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJBZG1pblJvbGVzRm9ybS1wcm9maWxlVmlld01haW5Db250ZW50LTE2c2VLXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcHJvZmlsZVZpZXdNYWluLTNlTmlIXCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIkFkbWluUm9sZXNGb3JtLXByb2ZpbGVWaWV3SW5uZXItMUswcEVcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcHJvZmlsZUltYWdlU2VjdGlvbi0yaHEtZFwiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJBZG1pblJvbGVzRm9ybS1sYXN0dmlld0lubmVyLTIxTTFuXCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJBZG1pblJvbGVzRm9ybS1DaGFuZ2VUb1VwcGVyQ2FzZS0zNS1rT1wiLFxuXHRcIm5vQm9yZGVyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tbm9Cb3JkZXItM0RrXzlcIixcblx0XCJzcGFjZTFcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTEtMm5pblpcIixcblx0XCJzcGFjZTJcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTItMkh5MDlcIixcblx0XCJzcGFjZTNcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTMtMUNNcVhcIixcblx0XCJzcGFjZTRcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTQtUWVQLW5cIixcblx0XCJzcGFjZTVcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTUtM1F0M0FcIixcblx0XCJzcGFjZTZcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTYtMUtjQVpcIixcblx0XCJzcGFjZTdcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZTctbkJ5aDRcIixcblx0XCJzcGFjZVRvcDhcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDgtREdDZDNcIixcblx0XCJzcGFjZVRvcDFcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDEtM2JRUnhcIixcblx0XCJzcGFjZVRvcDJcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDItMmhxWlRcIixcblx0XCJzcGFjZVRvcDNcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDMtM0J1SkFcIixcblx0XCJzcGFjZVRvcDRcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDQtMno4eHpcIixcblx0XCJzcGFjZVRvcDVcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDUtMkp2TmhcIixcblx0XCJzcGFjZVRvcDZcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDYtV3dyaUxcIixcblx0XCJzcGFjZVRvcDdcIjogXCJBZG1pblJvbGVzRm9ybS1zcGFjZVRvcDctMnFIUi1cIixcblx0XCJwYWRkaW5nMVwiOiBcIkFkbWluUm9sZXNGb3JtLXBhZGRpbmcxLTNnZGtVXCIsXG5cdFwicGFkZGluZzJcIjogXCJBZG1pblJvbGVzRm9ybS1wYWRkaW5nMi0xdVQ2elwiLFxuXHRcInBhZGRpbmczXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZzMtdkExSjdcIixcblx0XCJwYWRkaW5nNFwiOiBcIkFkbWluUm9sZXNGb3JtLXBhZGRpbmc0LTJURV95XCIsXG5cdFwicGFkZGluZzVcIjogXCJBZG1pblJvbGVzRm9ybS1wYWRkaW5nNS0zdFg0M1wiLFxuXHRcInBhZGRpbmc2XCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZzYtVFhUMURcIixcblx0XCJwYWRkaW5nN1wiOiBcIkFkbWluUm9sZXNGb3JtLXBhZGRpbmc3LUZLTFNOXCIsXG5cdFwicGFkZGluZ1RvcDFcIjogXCJBZG1pblJvbGVzRm9ybS1wYWRkaW5nVG9wMS0zdFluOVwiLFxuXHRcInBhZGRpbmdUb3AyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZ1RvcDItMnZWdWVcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkFkbWluUm9sZXNGb3JtLXBhZGRpbmdUb3AzLVNzVEpsXCIsXG5cdFwicGFkZGluZ1RvcDRcIjogXCJBZG1pblJvbGVzRm9ybS1wYWRkaW5nVG9wNC0zWTMwT1wiLFxuXHRcInBhZGRpbmdUb3A1XCI6IFwiQWRtaW5Sb2xlc0Zvcm0tcGFkZGluZ1RvcDUtM01SM01cIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkFkbWluUm9sZXNGb3JtLXBhZGRpbmdUb3A2LTM5U0NOXCIsXG5cdFwicGFkZGluZ1RvcDdcIjogXCJBZG1pblJvbGVzRm9ybS1wYWRkaW5nVG9wNy0yTk1wSFwiLFxuXHRcIm5vUGFkZGluZ1wiOiBcIkFkbWluUm9sZXNGb3JtLW5vUGFkZGluZy1KVExYSVwiLFxuXHRcInRleHRCb2xkXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGV4dEJvbGQtM0N1bk5cIixcblx0XCJ0ZXh0Qm9sZGVyXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGV4dEJvbGRlci0xc2JwWlwiLFxuXHRcInRleHROb3JtYWxcIjogXCJBZG1pblJvbGVzRm9ybS10ZXh0Tm9ybWFsLTFNVGlvXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGV4dERhcmtCbHVlLXFHekszXCIsXG5cdFwidGV4dExpZ2h0Qmx1ZVwiOiBcIkFkbWluUm9sZXNGb3JtLXRleHRMaWdodEJsdWUtMjF5NklcIixcblx0XCJ0ZXh0TGlnaHRTYW5kbGVHcmVlblwiOiBcIkFkbWluUm9sZXNGb3JtLXRleHRMaWdodFNhbmRsZUdyZWVuLTJ1WG9tXCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJBZG1pblJvbGVzRm9ybS10ZXh0TGlnaHRCcm93bi0yZXN1UVwiLFxuXHRcInRleHRNZWRpdW1NYXJvb25cIjogXCJBZG1pblJvbGVzRm9ybS10ZXh0TWVkaXVtTWFyb29uLWRKejJ4XCIsXG5cdFwidGV4dEJyb3duXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGV4dEJyb3duLUpOelJ3XCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkFkbWluUm9sZXNGb3JtLXRleHRNYXJvb24tMnd6ejZcIixcblx0XCJ0ZXh0RGFya0Jyb3duXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGV4dERhcmtCcm93bi12djQ2U1wiLFxuXHRcInRleHRNZWRpdW1Ccm93blwiOiBcIkFkbWluUm9sZXNGb3JtLXRleHRNZWRpdW1Ccm93bi01VUp1TlwiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiQWRtaW5Sb2xlc0Zvcm0tdGV4dFNreUJsdWUtM1I4NDhcIixcblx0XCJ0ZXh0R3JheVwiOiBcIkFkbWluUm9sZXNGb3JtLXRleHRHcmF5LTNCOEZ3XCIsXG5cdFwiY2hlY2tCb3hXaWR0aFwiOiBcIkFkbWluUm9sZXNGb3JtLWNoZWNrQm94V2lkdGgtN0o4aFNcIixcblx0XCJ0ZXh0V2lkdGhcIjogXCJBZG1pblJvbGVzRm9ybS10ZXh0V2lkdGgtMlZELTFcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXJlbnRBbGxIZWFkZXJBZG1pbi0yTE5TOCB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWFkbWluTGF5b3V0LTI5T01ZIHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1ib3gtMXVkY0QgaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWV4cG9ydExpbmstaS1MM1Age1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1ibG9ja2NlbnRlci1PdWhkNCB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFuZWxIZWFkZXItM3QzOG8ge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWN1cnJlbmN5c2VsZWN0LTJ3eEI4IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYW5lbEhlYWRlci0zdDM4byB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtbWFyMC1GZ3N4QSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LW5hdmJhci0xV2dRbiA+IC5BZG1pblJvbGVzTWFuYWdlbWVudC1jb250YWluZXItM0kyMjIgLkFkbWluUm9sZXNNYW5hZ2VtZW50LW5hdmJhci1icmFuZC0zTGQ1YyxcXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtbmF2YmFyLTFXZ1FuID4gLkFkbWluUm9sZXNNYW5hZ2VtZW50LWNvbnRhaW5lci1mbHVpZC0yQzBWWiAuQWRtaW5Sb2xlc01hbmFnZW1lbnQtbmF2YmFyLWJyYW5kLTNMZDVjIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkFkbWluUm9sZXNNYW5hZ2VtZW50LWJsb2NrY2VudGVyLU91aGQ0IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhbmVsSGVhZGVyLTN0MzhvIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWdlY29udGVudFdyYXBwZXItM1J4N3Qge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1oZWFkZXJUaXRsZS0xUlFveCB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFuZWxIZWFkZXItM3QzOG8ge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGFibGUtMzVDUWoge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGFibGVSb3ctMXd5c3Ege1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXRhYmxlQ2VsbC0xc0h6NiB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWZvcm1Hcm91cC0zR1RVQSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc2VsZWN0LTJkeXZ3IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1ub01hcmdpbi0zUmpuRCB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtZXhwb3J0TGluay1pLUwzUCB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWxhYmVsVGV4dE5ldy0ydVVnWiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtZGlzcGxheUlubGluZS0yMFFGTSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1idG5VUGRhdGUtaXVqSFYge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWJ0bk1vZGFsRGVsZXRlLTNIZ1pTIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1yYWRpb0J0bi0yX2E1aCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkFkbWluUm9sZXNNYW5hZ2VtZW50LWJ0blVQZGF0ZS1pdWpIViB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNNYW5hZ2VtZW50LWJ0bk1vZGFsRGVsZXRlLTNIZ1pTIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuQWRtaW5Sb2xlc01hbmFnZW1lbnQtYnRuV2lkdGgtM25GNmgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1iYW5uZXJJbWFnZUJnLTFiNTUzIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtYmFubmVyRGVsZXRlLTFiM2dZIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtbW9kYWxSb290LTM2Vmt3IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtbW9kYWxCb3JkZXJCb3R0b20tMkxjbmwge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1sb2dJbk1vZGFsQm9keS1ldkJfQyB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1leHBvcnRTZWN0aW9uLTJGRjY0IHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtZXhwb3J0U2VjdGlvbkdyaWRTdWItMjNFTWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtZXhwb3J0VGV4dC0zdmszQyB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtZXhwb3J0TGlua0ltZy0zaDBfRCB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXZ0ck1pZGRsZS0zYU9qRCB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWV4cG9ydEltZy1xNjJLUSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wcm9maWxlVmlld2xhYmVsLWU2MWhiIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcHJvZmlsZVZpZXdNYWluQ29udGVudC0yakRSbiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wcm9maWxlVmlld01haW4tM0FSbmIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcHJvZmlsZVZpZXdJbm5lci0xRlU4NyB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXByb2ZpbGVJbWFnZVNlY3Rpb24tMnE3WV8ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LWxhc3R2aWV3SW5uZXItMVRBYUcge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWdlY29udGVudFdyYXBwZXItM1J4N3Qge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5BZG1pblJvbGVzTWFuYWdlbWVudC1leHBvcnRTZWN0aW9uLTJGRjY0IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5BZG1pblJvbGVzTWFuYWdlbWVudC1leHBvcnRUZXh0LTN2azNDIHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuQWRtaW5Sb2xlc01hbmFnZW1lbnQtZXhwb3J0U2VjdGlvbkdyaWRTdWItMjNFTWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuQWRtaW5Sb2xlc01hbmFnZW1lbnQtcHJvZmlsZVZpZXdsYWJlbC1lNjFoYiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNNYW5hZ2VtZW50LXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMmpEUm4ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWdlY29udGVudFdyYXBwZXItM1J4N3Qge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LUNoYW5nZVRvVXBwZXJDYXNlLTFXTXBNe1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1ub0JvcmRlci1YWHJ2QiB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1zcGFjZTEtMmM4anQge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc3BhY2UyLTNlbm5PIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1zcGFjZTMtb2dYRmwge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlNC0xSUc4NSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc3BhY2U1LTFYakVfIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1zcGFjZTYtSWhvMTIge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlNy0xaExGUyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc3BhY2VUb3A4LTJfOVlrIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1zcGFjZVRvcDEtM0tGb3Mge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc3BhY2VUb3AyLTJJdkxjIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1zcGFjZVRvcDMtMmpheFAge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wNC0xS0RUSiB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc3BhY2VUb3A1LTNBdkJJIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1zcGFjZVRvcDYtM0Q5SnAge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wNy0zMDgxMyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtc3BhY2VUb3A4LTJfOVlrIHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1ub01hcmdpbi0zUmpuRCB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmcxLUN5dmRsIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nMi1iMXg4byB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmczLTMzR1BfIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZzQtM2c4M3Uge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nNS0yRG5lSiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmc2LTM5d1ljIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZzctMUNmeUcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nVG9wMS0xSThOLSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZ1RvcDItMXhnUXgge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nVG9wMy0zZkNVWiB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmdUb3A0LTE4OWh1IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZ1RvcDUtM3VPWDQge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nVG9wNi1mTDhuUCB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmdUb3A3LXJBcThKIHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtbm9QYWRkaW5nLTFidGM3IHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXRleHRCb2xkLVpaRm9qIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0Qm9sZGVyLTJhUTJtIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0Tm9ybWFsLUkyVW5mIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0RGFya0JsdWUtMkdEZ0Uge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNYW5hZ2VtZW50LXRleHRMaWdodEJsdWUtMUVVZTUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0TGlnaHRTYW5kbGVHcmVlbi0zclpqOSB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dExpZ2h0QnJvd24tMk5lOFkge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0TWVkaXVtTWFyb29uLTJNT1QxIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0QnJvd24tMXo1ZEcge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0TWFyb29uLWt3bWIyIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dERhcmtCcm93bi0zS1NjNSB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dE1lZGl1bUJyb3duLTJCcmUtIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dFNreUJsdWUtMkZOcUgge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dEdyYXktOFdWQU8ge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9BZG1pblJvbGVzTWFuYWdlbWVudC9BZG1pblJvbGVzTWFuYWdlbWVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QjtBQUM1QjtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbENcIixcImZpbGVcIjpcIkFkbWluUm9sZXNNYW5hZ2VtZW50LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4ucmVudEFsbEhlYWRlckFkbWluIHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5MYXlvdXQge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLmJsb2NrY2VudGVyIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uY3VycmVuY3lzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubmF2YmFyID4gLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLFxcbi5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmQge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuYmxvY2tjZW50ZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAucGFuZWxIZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi50YWJsZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi50YWJsZVJvdyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4udGFibGVDZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uZm9ybUdyb3VwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBvcnRMaW5rIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubGFiZWxUZXh0TmV3IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5kaXNwbGF5SW5saW5lIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLmJ0blVQZGF0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuTW9kYWxEZWxldGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLnJhZGlvQnRuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYnRuVVBkYXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuYnRuTW9kYWxEZWxldGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5idG5XaWR0aCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLmJhbm5lckltYWdlQmcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5iYW5uZXJEZWxldGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5tb2RhbFJvb3Qge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5tb2RhbEJvcmRlckJvdHRvbSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLmxvZ0luTW9kYWxCb2R5IHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmV4cG9ydFNlY3Rpb24ge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5leHBvcnRUZXh0IHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5leHBvcnRMaW5rSW1nIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udnRyTWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZXhwb3J0SW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLnByb2ZpbGVWaWV3TWFpbiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5wcm9maWxlVmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4ucHJvZmlsZUltYWdlU2VjdGlvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubGFzdHZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LmV4cG9ydFNlY3Rpb24ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LmV4cG9ydFRleHQge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uQ2hhbmdlVG9VcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLm5vQm9yZGVyIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicmVudEFsbEhlYWRlckFkbWluXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcmVudEFsbEhlYWRlckFkbWluLTJMTlM4XCIsXG5cdFwiYWRtaW5MYXlvdXRcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1hZG1pbkxheW91dC0yOU9NWVwiLFxuXHRcImJveFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWJveC0xdWRjRFwiLFxuXHRcImV4cG9ydExpbmtcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1leHBvcnRMaW5rLWktTDNQXCIsXG5cdFwiYmxvY2tjZW50ZXJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1ibG9ja2NlbnRlci1PdWhkNFwiLFxuXHRcInBhbmVsSGVhZGVyXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFuZWxIZWFkZXItM3QzOG9cIixcblx0XCJjdXJyZW5jeXNlbGVjdFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWN1cnJlbmN5c2VsZWN0LTJ3eEI4XCIsXG5cdFwibWFyMFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LW1hcjAtRmdzeEFcIixcblx0XCJuYXZiYXJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1uYXZiYXItMVdnUW5cIixcblx0XCJjb250YWluZXJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1jb250YWluZXItM0kyMjJcIixcblx0XCJuYXZiYXItYnJhbmRcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1uYXZiYXItYnJhbmQtM0xkNWNcIixcblx0XCJjb250YWluZXItZmx1aWRcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1jb250YWluZXItZmx1aWQtMkMwVlpcIixcblx0XCJwYWdlY29udGVudFdyYXBwZXJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wYWdlY29udGVudFdyYXBwZXItM1J4N3RcIixcblx0XCJoZWFkZXJUaXRsZVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWhlYWRlclRpdGxlLTFSUW94XCIsXG5cdFwidGFibGVcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10YWJsZS0zNUNRalwiLFxuXHRcInRhYmxlUm93XCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGFibGVSb3ctMXd5c3FcIixcblx0XCJ0YWJsZUNlbGxcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10YWJsZUNlbGwtMXNIejZcIixcblx0XCJmb3JtR3JvdXBcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1mb3JtR3JvdXAtM0dUVUFcIixcblx0XCJzZWxlY3RcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1zZWxlY3QtMmR5dndcIixcblx0XCJub01hcmdpblwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LW5vTWFyZ2luLTNSam5EXCIsXG5cdFwibGFiZWxUZXh0TmV3XCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtbGFiZWxUZXh0TmV3LTJ1VWdaXCIsXG5cdFwiZGlzcGxheUlubGluZVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWRpc3BsYXlJbmxpbmUtMjBRRk1cIixcblx0XCJidG5VUGRhdGVcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1idG5VUGRhdGUtaXVqSFZcIixcblx0XCJidG5Nb2RhbERlbGV0ZVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWJ0bk1vZGFsRGVsZXRlLTNIZ1pTXCIsXG5cdFwicmFkaW9CdG5cIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1yYWRpb0J0bi0yX2E1aFwiLFxuXHRcImJ0bldpZHRoXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtYnRuV2lkdGgtM25GNmhcIixcblx0XCJiYW5uZXJJbWFnZUJnXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtYmFubmVySW1hZ2VCZy0xYjU1M1wiLFxuXHRcImJhbm5lckRlbGV0ZVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWJhbm5lckRlbGV0ZS0xYjNnWVwiLFxuXHRcIm1vZGFsUm9vdFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LW1vZGFsUm9vdC0zNlZrd1wiLFxuXHRcIm1vZGFsQm9yZGVyQm90dG9tXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtbW9kYWxCb3JkZXJCb3R0b20tMkxjbmxcIixcblx0XCJsb2dJbk1vZGFsQm9keVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWxvZ0luTW9kYWxCb2R5LWV2Ql9DXCIsXG5cdFwiZXhwb3J0U2VjdGlvblwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWV4cG9ydFNlY3Rpb24tMkZGNjRcIixcblx0XCJleHBvcnRTZWN0aW9uR3JpZFN1YlwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWV4cG9ydFNlY3Rpb25HcmlkU3ViLTIzRU1iXCIsXG5cdFwiZXhwb3J0VGV4dFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWV4cG9ydFRleHQtM3ZrM0NcIixcblx0XCJleHBvcnRMaW5rSW1nXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtZXhwb3J0TGlua0ltZy0zaDBfRFwiLFxuXHRcInZ0ck1pZGRsZVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXZ0ck1pZGRsZS0zYU9qRFwiLFxuXHRcImV4cG9ydEltZ1wiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWV4cG9ydEltZy1xNjJLUVwiLFxuXHRcInByb2ZpbGVWaWV3bGFiZWxcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wcm9maWxlVmlld2xhYmVsLWU2MWhiXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluQ29udGVudFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMmpEUm5cIixcblx0XCJwcm9maWxlVmlld01haW5cIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wcm9maWxlVmlld01haW4tM0FSbmJcIixcblx0XCJwcm9maWxlVmlld0lubmVyXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcHJvZmlsZVZpZXdJbm5lci0xRlU4N1wiLFxuXHRcInByb2ZpbGVJbWFnZVNlY3Rpb25cIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wcm9maWxlSW1hZ2VTZWN0aW9uLTJxN1lfXCIsXG5cdFwibGFzdHZpZXdJbm5lclwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LWxhc3R2aWV3SW5uZXItMVRBYUdcIixcblx0XCJDaGFuZ2VUb1VwcGVyQ2FzZVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LUNoYW5nZVRvVXBwZXJDYXNlLTFXTXBNXCIsXG5cdFwibm9Cb3JkZXJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1ub0JvcmRlci1YWHJ2QlwiLFxuXHRcInNwYWNlMVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlMS0yYzhqdFwiLFxuXHRcInNwYWNlMlwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlMi0zZW5uT1wiLFxuXHRcInNwYWNlM1wiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlMy1vZ1hGbFwiLFxuXHRcInNwYWNlNFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlNC0xSUc4NVwiLFxuXHRcInNwYWNlNVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlNS0xWGpFX1wiLFxuXHRcInNwYWNlNlwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlNi1JaG8xMlwiLFxuXHRcInNwYWNlN1wiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlNy0xaExGU1wiLFxuXHRcInNwYWNlVG9wOFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wOC0yXzlZa1wiLFxuXHRcInNwYWNlVG9wMVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wMS0zS0Zvc1wiLFxuXHRcInNwYWNlVG9wMlwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wMi0ySXZMY1wiLFxuXHRcInNwYWNlVG9wM1wiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wMy0yamF4UFwiLFxuXHRcInNwYWNlVG9wNFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wNC0xS0RUSlwiLFxuXHRcInNwYWNlVG9wNVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wNS0zQXZCSVwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wNi0zRDlKcFwiLFxuXHRcInNwYWNlVG9wN1wiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXNwYWNlVG9wNy0zMDgxM1wiLFxuXHRcInBhZGRpbmcxXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZzEtQ3l2ZGxcIixcblx0XCJwYWRkaW5nMlwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmcyLWIxeDhvXCIsXG5cdFwicGFkZGluZzNcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nMy0zM0dQX1wiLFxuXHRcInBhZGRpbmc0XCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZzQtM2c4M3VcIixcblx0XCJwYWRkaW5nNVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmc1LTJEbmVKXCIsXG5cdFwicGFkZGluZzZcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nNi0zOXdZY1wiLFxuXHRcInBhZGRpbmc3XCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZzctMUNmeUdcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmdUb3AxLTFJOE4tXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nVG9wMi0xeGdReFwiLFxuXHRcInBhZGRpbmdUb3AzXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZ1RvcDMtM2ZDVVpcIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmdUb3A0LTE4OWh1XCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC1wYWRkaW5nVG9wNS0zdU9YNFwiLFxuXHRcInBhZGRpbmdUb3A2XCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtcGFkZGluZ1RvcDYtZkw4blBcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXBhZGRpbmdUb3A3LXJBcThKXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtbm9QYWRkaW5nLTFidGM3XCIsXG5cdFwidGV4dEJvbGRcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0Qm9sZC1aWkZvalwiLFxuXHRcInRleHRCb2xkZXJcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0Qm9sZGVyLTJhUTJtXCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXRleHROb3JtYWwtSTJVbmZcIixcblx0XCJ0ZXh0RGFya0JsdWVcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0RGFya0JsdWUtMkdEZ0VcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dExpZ2h0Qmx1ZS0xRVVlNVwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dExpZ2h0U2FuZGxlR3JlZW4tM3JaajlcIixcblx0XCJ0ZXh0TGlnaHRCcm93blwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXRleHRMaWdodEJyb3duLTJOZThZXCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIkFkbWluUm9sZXNNYW5hZ2VtZW50LXRleHRNZWRpdW1NYXJvb24tMk1PVDFcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0QnJvd24tMXo1ZEdcIixcblx0XCJ0ZXh0TWFyb29uXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dE1hcm9vbi1rd21iMlwiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0RGFya0Jyb3duLTNLU2M1XCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dE1lZGl1bUJyb3duLTJCcmUtXCIsXG5cdFwidGV4dFNreUJsdWVcIjogXCJBZG1pblJvbGVzTWFuYWdlbWVudC10ZXh0U2t5Qmx1ZS0yRk5xSFwiLFxuXHRcInRleHRHcmF5XCI6IFwiQWRtaW5Sb2xlc01hbmFnZW1lbnQtdGV4dEdyYXktOFdWQU9cIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1yZW50QWxsSGVhZGVyQWRtaW4tekg5Q1Age1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtYWRtaW5MYXlvdXQtMlBXZ0Mge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1ib3gtcjItY1YgaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1leHBvcnRMaW5rLTNFbF9fIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLWJsb2NrY2VudGVyLWgzbTVQIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtcGFuZWxIZWFkZXItd0NfZWMge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1jdXJyZW5jeXNlbGVjdC0yNk56ciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXBhbmVsSGVhZGVyLXdDX2VjIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtbWFyMC0xa3l4NyB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1uYXZiYXItM2RWZkcgPiAuQWRtaW5Sb2xlc01vZGFsLWNvbnRhaW5lci0yV3NOSyAuQWRtaW5Sb2xlc01vZGFsLW5hdmJhci1icmFuZC15bTB6MSxcXG4uQWRtaW5Sb2xlc01vZGFsLW5hdmJhci0zZFZmRyA+IC5BZG1pblJvbGVzTW9kYWwtY29udGFpbmVyLWZsdWlkLTMyVkJYIC5BZG1pblJvbGVzTW9kYWwtbmF2YmFyLWJyYW5kLXltMHoxIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkFkbWluUm9sZXNNb2RhbC1ibG9ja2NlbnRlci1oM201UCB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5BZG1pblJvbGVzTW9kYWwtcGFuZWxIZWFkZXItd0NfZWMge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLkFkbWluUm9sZXNNb2RhbC1wYWdlY29udGVudFdyYXBwZXItMnJPc2cge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtaGVhZGVyVGl0bGUtM2tTalYge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1wYW5lbEhlYWRlci13Q19lYyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtdGFibGUtTDFwTk8ge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXRhYmxlUm93LXQ2T1NXIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtdGFibGVDZWxsLTFNZkRfIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLWZvcm1Hcm91cC0xSDMtUSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXNlbGVjdC0yY2taNSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLW5vTWFyZ2luLTFqcy13IHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtZXhwb3J0TGluay0zRWxfXyB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1sYWJlbFRleHROZXctM2ZVcE4ge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1kaXNwbGF5SW5saW5lLTNXWWYxIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLkFkbWluUm9sZXNNb2RhbC1idG5VUGRhdGUtMVJBaTcge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1idG5Nb2RhbERlbGV0ZS0xS2lmbCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXJhZGlvQnRuLThlS0VzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuQWRtaW5Sb2xlc01vZGFsLWJ0blVQZGF0ZS0xUkFpNyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNNb2RhbC1idG5Nb2RhbERlbGV0ZS0xS2lmbCB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNNb2RhbC1idG5XaWR0aC0ya1lHRyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLkFkbWluUm9sZXNNb2RhbC1iYW5uZXJJbWFnZUJnLTFEcDlQIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLWJhbm5lckRlbGV0ZS0yYjJCQyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLkFkbWluUm9sZXNNb2RhbC1tb2RhbFJvb3QtMVBWWHkge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtbW9kYWxCb3JkZXJCb3R0b20tMXJvWksge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtbG9nSW5Nb2RhbEJvZHktNHluc3kge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQWRtaW5Sb2xlc01vZGFsLWV4cG9ydFNlY3Rpb24tOF9Dc0cge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtZXhwb3J0U2VjdGlvbkdyaWRTdWItWDI2cnkge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLWV4cG9ydFRleHQtMmJqRzcge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1leHBvcnRMaW5rSW1nLTFBTW1SIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXZ0ck1pZGRsZS0xTjZZdiB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1leHBvcnRJbWctdGRHN1Uge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXByb2ZpbGVWaWV3bGFiZWwtMjJiTGcge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5BZG1pblJvbGVzTW9kYWwtcHJvZmlsZVZpZXdNYWluQ29udGVudC0xS01QRCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5BZG1pblJvbGVzTW9kYWwtcHJvZmlsZVZpZXdNYWluLTJfaHhQIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1wcm9maWxlVmlld0lubmVyLTF4a0VyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLXByb2ZpbGVJbWFnZVNlY3Rpb24tMXlTZmMge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLkFkbWluUm9sZXNNb2RhbC1sYXN0dmlld0lubmVyLTJpUmxtIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuQWRtaW5Sb2xlc01vZGFsLXBhZ2Vjb250ZW50V3JhcHBlci0yck9zZyB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LkFkbWluUm9sZXNNb2RhbC1leHBvcnRTZWN0aW9uLThfQ3NHIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5BZG1pblJvbGVzTW9kYWwtZXhwb3J0VGV4dC0yYmpHNyB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNNb2RhbC1leHBvcnRTZWN0aW9uR3JpZFN1Yi1YMjZyeSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5BZG1pblJvbGVzTW9kYWwtcHJvZmlsZVZpZXdsYWJlbC0yMmJMZyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LkFkbWluUm9sZXNNb2RhbC1wcm9maWxlVmlld01haW5Db250ZW50LTFLTVBEIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuQWRtaW5Sb2xlc01vZGFsLXBhZ2Vjb250ZW50V3JhcHBlci0yck9zZyB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uQWRtaW5Sb2xlc01vZGFsLUNoYW5nZVRvVXBwZXJDYXNlLTM4TEtte1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5BZG1pblJvbGVzTW9kYWwtbm9Cb3JkZXItMzd1WDEge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0FkbWluUm9sZXNNb2RhbC9BZG1pblJvbGVzTW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsOEJBQThCO0FBQzlCO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEOztDQUVDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0M7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtBQUNELHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWjtBQUNELDZEQUE2RDtBQUM3RDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsaUNBQWlDO0NBQ2pDLCtDQUErQztDQUMvQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0tBQ3RCLHVCQUF1QjtTQUNuQixvQkFBb0I7Q0FDNUIsZUFBZTtDQUNmLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQztFQUNDLG9CQUFvQjtRQUNkLGNBQWM7UUFDZCxlQUFlO0VBQ3JCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyx1Q0FBdUM7RUFDdkM7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtDQUNEO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0M7RUFDQyxlQUFlO0VBQ2Y7Q0FDRDtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRCw0QkFBNEJcIixcImZpbGVcIjpcIkFkbWluUm9sZXNNb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnJlbnRBbGxIZWFkZXJBZG1pbiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLmFkbWluTGF5b3V0IHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmV4cG9ydExpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5ibG9ja2NlbnRlciB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmN1cnJlbmN5c2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFyMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcXG4ubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmJsb2NrY2VudGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLnBhbmVsSGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGFibGUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udGFibGVSb3cge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLnRhYmxlQ2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLmxhYmVsVGV4dE5ldyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uZGlzcGxheUlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5idG5VUGRhdGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5yYWRpb0J0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmJ0blVQZGF0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuYnRuV2lkdGgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5iYW5uZXJJbWFnZUJnIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYmFubmVyRGVsZXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubW9kYWxSb290IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4ubW9kYWxCb3JkZXJCb3R0b20ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5sb2dJbk1vZGFsQm9keSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5leHBvcnRTZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uZXhwb3J0VGV4dCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhwb3J0TGlua0ltZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnZ0ck1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmV4cG9ydEltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4ucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5wcm9maWxlVmlld01haW4ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucHJvZmlsZVZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLnByb2ZpbGVJbWFnZVNlY3Rpb24ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxhc3R2aWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5leHBvcnRTZWN0aW9uIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5leHBvcnRUZXh0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkNoYW5nZVRvVXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5ub0JvcmRlciB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyZW50QWxsSGVhZGVyQWRtaW5cIjogXCJBZG1pblJvbGVzTW9kYWwtcmVudEFsbEhlYWRlckFkbWluLXpIOUNQXCIsXG5cdFwiYWRtaW5MYXlvdXRcIjogXCJBZG1pblJvbGVzTW9kYWwtYWRtaW5MYXlvdXQtMlBXZ0NcIixcblx0XCJib3hcIjogXCJBZG1pblJvbGVzTW9kYWwtYm94LXIyLWNWXCIsXG5cdFwiZXhwb3J0TGlua1wiOiBcIkFkbWluUm9sZXNNb2RhbC1leHBvcnRMaW5rLTNFbF9fXCIsXG5cdFwiYmxvY2tjZW50ZXJcIjogXCJBZG1pblJvbGVzTW9kYWwtYmxvY2tjZW50ZXItaDNtNVBcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIkFkbWluUm9sZXNNb2RhbC1wYW5lbEhlYWRlci13Q19lY1wiLFxuXHRcImN1cnJlbmN5c2VsZWN0XCI6IFwiQWRtaW5Sb2xlc01vZGFsLWN1cnJlbmN5c2VsZWN0LTI2TnpyXCIsXG5cdFwibWFyMFwiOiBcIkFkbWluUm9sZXNNb2RhbC1tYXIwLTFreXg3XCIsXG5cdFwibmF2YmFyXCI6IFwiQWRtaW5Sb2xlc01vZGFsLW5hdmJhci0zZFZmR1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIkFkbWluUm9sZXNNb2RhbC1jb250YWluZXItMldzTktcIixcblx0XCJuYXZiYXItYnJhbmRcIjogXCJBZG1pblJvbGVzTW9kYWwtbmF2YmFyLWJyYW5kLXltMHoxXCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWNvbnRhaW5lci1mbHVpZC0zMlZCWFwiLFxuXHRcInBhZ2Vjb250ZW50V3JhcHBlclwiOiBcIkFkbWluUm9sZXNNb2RhbC1wYWdlY29udGVudFdyYXBwZXItMnJPc2dcIixcblx0XCJoZWFkZXJUaXRsZVwiOiBcIkFkbWluUm9sZXNNb2RhbC1oZWFkZXJUaXRsZS0za1NqVlwiLFxuXHRcInRhYmxlXCI6IFwiQWRtaW5Sb2xlc01vZGFsLXRhYmxlLUwxcE5PXCIsXG5cdFwidGFibGVSb3dcIjogXCJBZG1pblJvbGVzTW9kYWwtdGFibGVSb3ctdDZPU1dcIixcblx0XCJ0YWJsZUNlbGxcIjogXCJBZG1pblJvbGVzTW9kYWwtdGFibGVDZWxsLTFNZkRfXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWZvcm1Hcm91cC0xSDMtUVwiLFxuXHRcInNlbGVjdFwiOiBcIkFkbWluUm9sZXNNb2RhbC1zZWxlY3QtMmNrWjVcIixcblx0XCJub01hcmdpblwiOiBcIkFkbWluUm9sZXNNb2RhbC1ub01hcmdpbi0xanMtd1wiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIkFkbWluUm9sZXNNb2RhbC1sYWJlbFRleHROZXctM2ZVcE5cIixcblx0XCJkaXNwbGF5SW5saW5lXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWRpc3BsYXlJbmxpbmUtM1dZZjFcIixcblx0XCJidG5VUGRhdGVcIjogXCJBZG1pblJvbGVzTW9kYWwtYnRuVVBkYXRlLTFSQWk3XCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJBZG1pblJvbGVzTW9kYWwtYnRuTW9kYWxEZWxldGUtMUtpZmxcIixcblx0XCJyYWRpb0J0blwiOiBcIkFkbWluUm9sZXNNb2RhbC1yYWRpb0J0bi04ZUtFc1wiLFxuXHRcImJ0bldpZHRoXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWJ0bldpZHRoLTJrWUdHXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIkFkbWluUm9sZXNNb2RhbC1iYW5uZXJJbWFnZUJnLTFEcDlQXCIsXG5cdFwiYmFubmVyRGVsZXRlXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWJhbm5lckRlbGV0ZS0yYjJCQ1wiLFxuXHRcIm1vZGFsUm9vdFwiOiBcIkFkbWluUm9sZXNNb2RhbC1tb2RhbFJvb3QtMVBWWHlcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIkFkbWluUm9sZXNNb2RhbC1tb2RhbEJvcmRlckJvdHRvbS0xcm9aS1wiLFxuXHRcImxvZ0luTW9kYWxCb2R5XCI6IFwiQWRtaW5Sb2xlc01vZGFsLWxvZ0luTW9kYWxCb2R5LTR5bnN5XCIsXG5cdFwiZXhwb3J0U2VjdGlvblwiOiBcIkFkbWluUm9sZXNNb2RhbC1leHBvcnRTZWN0aW9uLThfQ3NHXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJBZG1pblJvbGVzTW9kYWwtZXhwb3J0U2VjdGlvbkdyaWRTdWItWDI2cnlcIixcblx0XCJleHBvcnRUZXh0XCI6IFwiQWRtaW5Sb2xlc01vZGFsLWV4cG9ydFRleHQtMmJqRzdcIixcblx0XCJleHBvcnRMaW5rSW1nXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWV4cG9ydExpbmtJbWctMUFNbVJcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJBZG1pblJvbGVzTW9kYWwtdnRyTWlkZGxlLTFONll2XCIsXG5cdFwiZXhwb3J0SW1nXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWV4cG9ydEltZy10ZEc3VVwiLFxuXHRcInByb2ZpbGVWaWV3bGFiZWxcIjogXCJBZG1pblJvbGVzTW9kYWwtcHJvZmlsZVZpZXdsYWJlbC0yMmJMZ1wiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJBZG1pblJvbGVzTW9kYWwtcHJvZmlsZVZpZXdNYWluQ29udGVudC0xS01QRFwiLFxuXHRcInByb2ZpbGVWaWV3TWFpblwiOiBcIkFkbWluUm9sZXNNb2RhbC1wcm9maWxlVmlld01haW4tMl9oeFBcIixcblx0XCJwcm9maWxlVmlld0lubmVyXCI6IFwiQWRtaW5Sb2xlc01vZGFsLXByb2ZpbGVWaWV3SW5uZXItMXhrRXJcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiQWRtaW5Sb2xlc01vZGFsLXByb2ZpbGVJbWFnZVNlY3Rpb24tMXlTZmNcIixcblx0XCJsYXN0dmlld0lubmVyXCI6IFwiQWRtaW5Sb2xlc01vZGFsLWxhc3R2aWV3SW5uZXItMmlSbG1cIixcblx0XCJDaGFuZ2VUb1VwcGVyQ2FzZVwiOiBcIkFkbWluUm9sZXNNb2RhbC1DaGFuZ2VUb1VwcGVyQ2FzZS0zOExLbVwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiQWRtaW5Sb2xlc01vZGFsLW5vQm9yZGVyLTM3dVgxXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9hZG1pblJvbGVzL0FkbWluUm9sZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DXCIsXCJmaWxlXCI6XCJBZG1pblJvbGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHtcbiAgICBDUkVBVEVfQURNSU5fUk9MRVNfU1RBUlQsXG4gICAgQ1JFQVRFX0FETUlOX1JPTEVTX1NVQ0NFU1MsXG4gICAgQ1JFQVRFX0FETUlOX1JPTEVTX0VSUk9SLFxuICAgIERFTEVURV9BRE1JTl9ST0xFU19TVEFSVCxcbiAgICBERUxFVEVfQURNSU5fUk9MRVNfU1VDQ0VTUyxcbiAgICBERUxFVEVfQURNSU5fUk9MRVNfRVJST1Jcbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcblxuaW1wb3J0IHF1ZXJ5IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9zaXRlYWRtaW4vYWRtaW5Sb2xlcy9hZG1pblJvbGVzUXVlcnkuZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNsb3NlQWRtaW5Sb2xlc01vZGFsIH0gZnJvbSAnLi4vbW9kYWxBY3Rpb25zJztcblxuY29uc3QgbXV0YXRpb24gPSBncWxgXG4gICAgbXV0YXRpb24gKCRpZDogSW50LCAkbmFtZTogU3RyaW5nISwgJGRlc2NyaXB0aW9uOiBTdHJpbmcsICRwcml2aWxlZ2VzOiBbSW50XSEpIHtcbiAgICAgICAgY3JlYXRlQWRtaW5Sb2xlIChpZDogJGlkLCBuYW1lOiAkbmFtZSwgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbiwgcHJpdmlsZWdlczogJHByaXZpbGVnZXMpIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBkZWxldGVNdXRhdGlvbiA9IGdxbGBcbiAgICBtdXRhdGlvbiAoJGlkOiBJbnQhKSB7XG4gICAgICAgIGRlbGV0ZUFkbWluUm9sZShpZDogJGlkKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkbWluUm9sZShcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaXZpbGVnZXNcbikge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENSRUFURV9BRE1JTl9ST0xFU19TVEFSVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVBZG1pblJvbGVMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcml2aWxlZ2VzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmNyZWF0ZUFkbWluUm9sZSAmJiBkYXRhLmNyZWF0ZUFkbWluUm9sZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ1JFQVRFX0FETUlOX1JPTEVTX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFkbWluUm9sZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjbG9zZUFkbWluUm9sZXNNb2RhbCgpKTtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIkFkbWluIFJvbGVcIiwgXCJBZG1pbiBSb2xlIGhhcyBiZWVuIFwiICsgKGlkID8gJ3VwZGF0ZWQnIDogJ2FkZGVkJykgKyBcIiBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJBZG1pbiBSb2xlXCIsIFwiT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGRhdGEgJiYgZGF0YS5jcmVhdGVBZG1pblJvbGUgJiYgZGF0YS5jcmVhdGVBZG1pblJvbGUuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENSRUFURV9BRE1JTl9ST0xFU19FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWRtaW5Sb2xlTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YSAmJiBkYXRhLmNyZWF0ZUFkbWluUm9sZSAmJiBkYXRhLmNyZWF0ZUFkbWluUm9sZS5lcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IENSRUFURV9BRE1JTl9ST0xFU19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFkbWluUm9sZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQWRtaW5Sb2xlKGlkKSB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogREVMRVRFX0FETUlOX1JPTEVTX1NUQVJULFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUFkbWluUm9sZUxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IGRlbGV0ZU11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZGVsZXRlQWRtaW5Sb2xlICYmIGRhdGEuZGVsZXRlQWRtaW5Sb2xlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfQURNSU5fUk9MRVNfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQWRtaW5Sb2xlTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNsb3NlQWRtaW5Sb2xlc01vZGFsKCkpO1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiQWRtaW4gUm9sZVwiLCBcIkFkbWluIFJvbGUgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJBZG1pbiBSb2xlXCIsIFwiT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGRhdGEgJiYgZGF0YS5kZWxldGVBZG1pblJvbGUgJiYgZGF0YS5kZWxldGVBZG1pblJvbGUuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9BRE1JTl9ST0xFU19FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQWRtaW5Sb2xlTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YSAmJiBkYXRhLmRlbGV0ZUFkbWluUm9sZSAmJiBkYXRhLmRlbGV0ZUFkbWluUm9sZS5lcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9BRE1JTl9ST0xFU19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUFkbWluUm9sZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEdlbmVyYWxcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gU3R5bGVcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJyFpc29tb3JwaGljLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIWljaGVjay9za2lucy9hbGwuY3NzJztcblxuLy8gRXh0ZXJuYWwgQ29tcG9uZW50XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ3JlYWN0LWljaGVjayc7XG5cbmNsYXNzIEN1c3RvbUNoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuYW55LFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnaWNoZWNrYm94X21pbmltYWwtYmx1ZSdcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZU9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjaGVja2VkID09PSB0cnVlID8gdGhpcy5zZXRTdGF0ZSh7IGlzQ2hlY2tlZDogdHJ1ZSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBpc0NoZWNrZWQ6IGZhbHNlIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQgfSA9IG5leHRQcm9wcztcbiAgICBjaGVja2VkID09PSB0cnVlID8gdGhpcy5zZXRTdGF0ZSh7IGlzQ2hlY2tlZDogdHJ1ZSB9KSA6IHRoaXMuc2V0U3RhdGUoeyBpc0NoZWNrZWQ6IGZhbHNlIH0pO1xuXG4gIH1cblxuICBoYW5kbGVPbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNDaGVja2VkOiAhdGhpcy5zdGF0ZS5pc0NoZWNrZWQgfSk7XG4gICAgcmV0dXJuICF0aGlzLnN0YXRlLmlzQ2hlY2tlZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBvbkNoYW5nZSwgY2hlY2tlZCwgaW5wdXQsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzQ2hlY2tlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPENoZWNrYm94XG4gICAgICAgIGNoZWNrYm94Q2xhc3M9e2NsYXNzTmFtZX1cbiAgICAgICAgaW5jcmVhc2VBcmVhPVwiMjAlXCJcbiAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSh0aGlzLmhhbmRsZU9uQ2hhbmdlKCkpfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShDdXN0b21DaGVja2JveCk7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0FkbWluUm9sZXNGb3JtLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9BZG1pblJvbGVzRm9ybS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9BZG1pblJvbGVzRm9ybS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLy8gR2VuZXJhbFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gUmVkdXggRm9ybVxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSwgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBzdWJtaXQgZnJvbSAnLi9zdWJtaXQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgaW5qZWN0SW50bCxGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIFN0eWxlXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcyBmcm9tICcuL0FkbWluUm9sZXNGb3JtLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBDb2wsXG4gIFJvdyxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgZ2V0QWxsQWRtaW5Qcml2aWxlZ2VzIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hZG1pblByaXZpbGVnZXMnO1xuXG4vLyBJbnRlcm5hbCBDb21wb25lbnRzXG5pbXBvcnQgQ3VzdG9tQ2hlY2tib3ggZnJvbSAnLi4vLi4vQ3VzdG9tQ2hlY2tib3gnO1xuXG5jbGFzcyBBZG1pblJvbGVzRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXJGb3JtQ29udHJvbCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUNvbnRyb2wgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhID0gKHsgaW5wdXQsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94ID0gKHsgaW5wdXQsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIG9wdGlvbnMsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGlucHV0LnZhbHVlIHx8IFtdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgICA8Um93PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwICYmIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbCBsZz17Nn0gbWQ9ezZ9IGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudGFibGVSb3d9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnRhYmxlQ2VsbCwgcy5jaGVja0JveFdpZHRoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tQ2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpY2hlY2tib3hfc3F1YXJlLWdyZWVuJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YCR7aW5wdXQubmFtZX1bJHtpbmRleH1dYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y3VycmVudFZhbHVlLmluZGV4T2Yob3B0aW9uLmlkKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IFsuLi5jdXJyZW50VmFsdWVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUucHVzaChvcHRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5zcGxpY2UobmV3VmFsdWUuaW5kZXhPZihvcHRpb24uaWQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0Lm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMudGFibGVDZWxsLCBzLnRleHRXaWR0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJyArIG9wdGlvbi5wcml2aWxlZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlcnJvciwgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcblxuICAgIGxldCBwcml2aWxlZ2VzID0gZ2V0QWxsQWRtaW5Qcml2aWxlZ2VzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZm9ybU1heFdpZHRoLCAnbWF4d2lkdGhjZW50ZXInLCAnZW1wdHknKX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XG4gICAgICAgICAge2Vycm9yICYmIDxzdHJvbmc+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Ryb25nPn1cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yb2xlTmFtZUxhYmVsfSAvPjwvbGFiZWw+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH1cbiAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucm9sZU5hbWVMYWJlbCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goYnQuY29tbW9uQ29udHJvbElucHV0KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGVzY3JpcHRpb25BZG1pbkxhYmVsfSAvPjwvbGFiZWw+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sVGV4dEFyZWF9XG4gICAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlc2NyaXB0aW9uQWRtaW5MYWJlbCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnByaXZpbGFnZXNMYWJlbH0gLz48L2xhYmVsPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJwcml2aWxlZ2VzXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckNoZWNrYm94fVxuICAgICAgICAgICAgICBvcHRpb25zPXtwcml2aWxlZ2VzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHMuc3BhY2UzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChidC50ZXh0QWxpZ25SaWdodCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5LCBidC5idG5MYXJnZSl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30+XG4gICAgICAgICAgICAgIHtpZCA/IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy51cGRhdGV9IC8+IDogPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmFkZExhYmVsfSAvPn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuQWRtaW5Sb2xlc0Zvcm0gPSByZWR1eEZvcm0oe1xuICBmb3JtOiBcIkFkbWluUm9sZXNGb3JtXCIsIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoaXMgZm9ybVxuICB2YWxpZGF0ZSxcbn0pKEFkbWluUm9sZXNGb3JtKTtcblxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcignQWRtaW5Sb2xlc0Zvcm0nKTtcblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIGlkOiBzZWxlY3RvcihzdGF0ZSwgJ2lkJylcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocywgYnQpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShBZG1pblJvbGVzRm9ybSkpKTsiLCJpbXBvcnQgeyBjcmVhdGVBZG1pblJvbGUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9BZG1pblJvbGVzL21hbmFnZUFkbWluUm9sZXMnO1xuXG5hc3luYyBmdW5jdGlvbiBzdWJtaXQodmFsdWVzLCBkaXNwYXRjaCkge1xuICBcbiAgZGlzcGF0Y2goY3JlYXRlQWRtaW5Sb2xlKFxuICAgIHZhbHVlcy5pZCxcbiAgICB2YWx1ZXMubmFtZSxcbiAgICB2YWx1ZXMuZGVzY3JpcHRpb24sXG4gICAgdmFsdWVzLnByaXZpbGVnZXNcbiAgKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdDtcbiIsImltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XG5cbiAgY29uc3QgZXJyb3JzID0ge31cblxuICBpZiAoIXZhbHVlcy5uYW1lKSB7XG4gICAgZXJyb3JzLm5hbWUgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfSBlbHNlIGlmICh2YWx1ZXMubmFtZSAmJiB2YWx1ZXMubmFtZS50b1N0cmluZygpLnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgZXJyb3JzLm5hbWUgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfSBlbHNlIGlmICh2YWx1ZXMubmFtZSAmJiB2YWx1ZXMubmFtZS5sZW5ndGggPiAyNTUpIHtcbiAgICBlcnJvcnMubmFtZSA9IG1lc3NhZ2VzLmV4Y2VlZExpbWl0MjU1O1xuICB9XG5cbiAgaWYgKHZhbHVlcy5kZXNjcmlwdGlvbiAmJiB2YWx1ZXMuZGVzY3JpcHRpb24udG9TdHJpbmcoKS50cmltKCkgPT0gXCJcIikge1xuICAgIGVycm9ycy5kZXNjcmlwdGlvbiA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMucHJpdmlsZWdlcyB8fCAodmFsdWVzLnByaXZpbGVnZXMgJiYgdmFsdWVzLnByaXZpbGVnZXMubGVuZ3RoIDw9IDApKSB7XG4gICAgZXJyb3JzLnByaXZpbGVnZXMgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vQWRtaW5Sb2xlc01hbmFnZW1lbnQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0FkbWluUm9sZXNNYW5hZ2VtZW50LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0FkbWluUm9sZXNNYW5hZ2VtZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZSwgVHIsIFRkLCBUaGVhZCwgVGh9IGZyb20gJ3JlYWN0YWJsZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG4vLyBTdHlsZVxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9BZG1pblJvbGVzTWFuYWdlbWVudC5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcblxuLy8gUmVkdXggQWN0aW9uc1xuaW1wb3J0IHsgb3BlbkFkbWluUm9sZXNNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvc2l0ZWFkbWluL21vZGFsQWN0aW9ucyc7XG5pbXBvcnQgeyBkZWxldGVBZG1pblJvbGUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9BZG1pblJvbGVzL21hbmFnZUFkbWluUm9sZXMnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQWRtaW5Sb2xlc01vZGFsIGZyb20gJy4uL0FkbWluUm9sZXNNb2RhbCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBBZG1pblJvbGVzTWFuYWdlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiBbXVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIG9wZW5BZG1pblJvbGVzTW9kYWwsIGRlbGV0ZUFkbWluUm9sZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucGFnZWNvbnRlbnRXcmFwcGVyLCAncGFnZWNvbnRlbnRBUicpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzLmhlYWRlclRpdGxlfT4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1hbmFnZUFkbWluUm9sZXN9IC8+PC9oMT5cbiAgICAgICAgICA8QWRtaW5Sb2xlc01vZGFsIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc3BhY2U0fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5LCBidC5idG5MYXJnZSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5BZG1pblJvbGVzTW9kYWwoJ2FkZCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYWRkTmV3TGFiZWx9IC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3RhYmxlLXJlc3BvbnNpdmUnLCAndGFibGVCb3JkZXJSYWRpdXNBZG1pbicsICdOZXdBZG1pblJlc3BvbnNpdmVUYWJsZScsICdOZXdSZXNwb25zaXZlVGFibGVBZG1pbicpfT5cbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZVwiXG4gICAgICAgICAgICAgIG5vRGF0YVRleHQ9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMubm9SZWNvcmRGb3VuZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5pZExhYmVsKX08L1RoPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5uYW1lKX08L1RoPlxuICAgICAgICAgICAgICA8VGggc2NvcGU9XCJjb2xcIj57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZXNjcmlwdGlvbkFkbWluTGFiZWwpfTwvVGg+XG4gICAgICAgICAgICAgIDxUaCBzY29wZT1cImNvbFwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmVkaXRMYWJlbCl9PC9UaD5cbiAgICAgICAgICAgICAgPFRoIHNjb3BlPVwiY29sXCI+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGVsZXRlKX08L1RoPlxuICAgICAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwICYmIGRhdGEubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmlkTGFiZWwpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaWRMYWJlbCl9IGRhdGE9e3ZhbHVlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm5hbWUpfSBjb2x1bW49e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMubmFtZSl9IGRhdGE9e3ZhbHVlLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPFRkIGRhdGEtbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGVzY3JpcHRpb25BZG1pbkxhYmVsKX0gY29sdW1uPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlc2NyaXB0aW9uQWRtaW5MYWJlbCl9IGRhdGE9e3ZhbHVlLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmVkaXRMYWJlbCl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5lZGl0TGFiZWwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIG5vTGluayBvbkNsaWNrPXsoKSA9PiBvcGVuQWRtaW5Sb2xlc01vZGFsKCdlZGl0JywgdmFsdWUpfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZWRpdExhYmVsfSAvPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBkYXRhLWxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRlbGV0ZSl9IGNvbHVtbj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kZWxldGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIG5vTGluayBvbkNsaWNrPXsoKSA9PiBkZWxldGVBZG1pblJvbGUodmFsdWUuaWQpfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGVsZXRlfSAvPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIG9wZW5BZG1pblJvbGVzTW9kYWwsXG4gIGRlbGV0ZUFkbWluUm9sZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQWRtaW5Sb2xlc01hbmFnZW1lbnQpKSk7IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9BZG1pblJvbGVzTW9kYWwuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0FkbWluUm9sZXNNb2RhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9BZG1pblJvbGVzTW9kYWwuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8vIEdlbmVyYWxcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcyBmcm9tICcuL0FkbWluUm9sZXNNb2RhbC5jc3MnO1xuaW1wb3J0IHtcbiAgTW9kYWxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjbG9zZUFkbWluUm9sZXNNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvc2l0ZWFkbWluL21vZGFsQWN0aW9ucyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEFkbWluUm9sZXNGb3JtIGZyb20gJy4uL0FkbWluUm9sZXNGb3JtJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5cbmNsYXNzIEFkbWluUm9sZXNNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWRtaW5Sb2xlc01vZGFsVHlwZTogJ2FkZCdcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsb3NlQWRtaW5Sb2xlc01vZGFsLCBhZG1pblJvbGVzTW9kYWwsIGFkbWluUm9sZXNNb2RhbFR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE1vZGFsIHNob3c9e2FkbWluUm9sZXNNb2RhbH0gb25IaWRlPXtjbG9zZUFkbWluUm9sZXNNb2RhbH0gY2xhc3NOYW1lPXsnYWRtaW5Nb2RhbCd9PlxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+e2FkbWluUm9sZXNNb2RhbFR5cGUgPT0gJ2FkZCcgPyA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYWRkTGFiZWx9IC8+IDogPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmVkaXRMYWJlbH0gLz59IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5hZG1pblJvbGVMYWJlbH0gLz48L01vZGFsLlRpdGxlPlxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Cb2R5IGJzQ2xhc3M9e3MubG9nSW5Nb2RhbEJvZHl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMubW9kYWxSb290LCBzLm1vZGFsQm9yZGVyQm90dG9tKX0+XG4gICAgICAgICAgICAgICAgPEFkbWluUm9sZXNGb3JtIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgYWRtaW5Sb2xlc01vZGFsOiBzdGF0ZS5hZG1pbk1vZGFsU3RhdHVzLmFkbWluUm9sZXNNb2RhbCxcbiAgYWRtaW5Sb2xlc01vZGFsVHlwZTogc3RhdGUuYWRtaW5Nb2RhbFN0YXR1cy5hZG1pblJvbGVzTW9kYWxUeXBlXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIGNsb3NlQWRtaW5Sb2xlc01vZGFsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShBZG1pblJvbGVzTW9kYWwpKTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0FkbWluUm9sZXMuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0FkbWluUm9sZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vQWRtaW5Sb2xlcy5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vQWRtaW5Sb2xlcy5jc3MnO1xuaW1wb3J0IGFkbWluUm9sZXNRdWVyeSBmcm9tICcuL2FkbWluUm9sZXNRdWVyeS5ncmFwaHFsJztcbmltcG9ydCBBZG1pblJvbGVzTWFuYWdlbWVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NpdGVhZG1pbi9BZG1pblJvbGVzTWFuYWdlbWVudCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyJztcblxuY2xhc3MgQWRtaW5Sb2xlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGdldEFsbEFkbWluUm9sZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB9KVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0YTogeyBsb2FkaW5nLCBnZXRBbGxBZG1pblJvbGVzIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZihsb2FkaW5nKXtcbiAgICAgIHJldHVybiA8TG9hZGVyIHR5cGU9e1widGV4dFwifSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxBZG1pblJvbGVzTWFuYWdlbWVudCBkYXRhPXtnZXRBbGxBZG1pblJvbGVzfSAvPlxuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBncmFwaHFsKGFkbWluUm9sZXNRdWVyeSwge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICAgIH1cbiAgICB9KSxcbikoQWRtaW5Sb2xlcyk7IiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0QWxsQWRtaW5Sb2xlc1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEF0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcml2aWxlZ2VzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEwOX19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0JztcbmltcG9ydCBBZG1pblJvbGVzIGZyb20gJy4vQWRtaW5Sb2xlcyc7XG5cbmNvbnN0IHRpdGxlID0gJ01hbmFnZSBBZG1pbiBSb2xlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHN0b3JlIH0pIHtcblxuICAvLyBGcm9tIFJlZHV4IFN0b3JlXG4gIGxldCBpc0FkbWluQXV0aGVudGljYXRlZCA9IHN0b3JlLmdldFN0YXRlKCkucnVudGltZS5pc0FkbWluQXV0aGVudGljYXRlZDtcbiAgbGV0IGlzU3VwZXJBZG1pbiA9IHN0b3JlLmdldFN0YXRlKCkucnVudGltZS5pc1N1cGVyQWRtaW47XG5cbiAgaWYgKCFpc0FkbWluQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbi9sb2dpbicgfTtcbiAgfVxuXG4gIGlmICghaXNTdXBlckFkbWluKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluL2xvZ2luJyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IDxBZG1pbkxheW91dD48QWRtaW5Sb2xlcyB0aXRsZT17dGl0bGV9IC8+PC9BZG1pbkxheW91dD4sXG4gIH07XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQWxEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7QUFRQTtBQURBO0FBQ0E7QUE0Q0E7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBYkE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUE3QkE7QUE4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBS0E7QUF4RUE7QUFDQTtBQXlFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBOUhBO0FBQ0E7QUFnSUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7O0FDL0tBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBT0E7QUFDQTtBQXpEQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBQ0E7QUF3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQTNCQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUE0QkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBSEE7QUFXQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBaUJBO0FBR0E7QUFDQTtBQURBO0FBREE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9