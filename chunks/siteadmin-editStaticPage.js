require("source-map-support").install();
exports.ids = ["siteadmin-editStaticPage"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/EditStaticPage/EditStaticPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.EditStaticPage-rentAllHeaderAdmin-3Fvs2 {\n  position: fixed !important;\n}\n.EditStaticPage-adminLayout-1uy0P {\n  padding-top: 64px !important;\n}\n.EditStaticPage-box-eNldh h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.EditStaticPage-exportLink-1UWFO {\n  margin-bottom: -29px;\n}\n.EditStaticPage-blockcenter-361Zj {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.EditStaticPage-panelHeader-1jWwH {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.EditStaticPage-currencyselect-1omjk {\n  width: 100%;\n  margin-right: 0px;\n}\n.EditStaticPage-panelHeader-1jWwH {\n  overflow: hidden;\n  position: relative;\n}\n.EditStaticPage-mar0-36-5I {\n  margin-left: 0;\n  margin-right: 0;\n}\n.EditStaticPage-navbar-3o3DW > .EditStaticPage-container-D0xPS .EditStaticPage-navbar-brand-37w54,\n.EditStaticPage-navbar-3o3DW > .EditStaticPage-container-fluid-2h2Bv .EditStaticPage-navbar-brand-37w54 {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .EditStaticPage-blockcenter-361Zj {\n    padding: 0px;\n  }\n  .EditStaticPage-panelHeader-1jWwH {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.EditStaticPage-pagecontentWrapper-1eTes {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.EditStaticPage-headerTitle-371pZ {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.EditStaticPage-panelHeader-1jWwH {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.EditStaticPage-table-1v9cP {\n\tdisplay: table;\n}\n.EditStaticPage-tableRow-3UMD6 {\n\tdisplay: table-row;\n}\n.EditStaticPage-tableCell-1aCO7 {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.EditStaticPage-formGroup-2IHg8 {\n\tmargin-bottom: 6px;\n}\n.EditStaticPage-select-2nq2A {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.EditStaticPage-noMargin-3Ym4v {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.EditStaticPage-exportLink-1UWFO {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.EditStaticPage-labelTextNew-2RdnA {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.EditStaticPage-displayInline-2pp-3 {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.EditStaticPage-btnUPdate-19ZMm {\n\tdisplay: inline-block;\n}\n.EditStaticPage-btnModalDelete-2v_MC {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.EditStaticPage-radioBtn-2EFNG {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.EditStaticPage-btnUPdate-19ZMm {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.EditStaticPage-btnModalDelete-2v_MC {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.EditStaticPage-btnWidth-2oPRg {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.EditStaticPage-bannerImageBg-2ihax {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.EditStaticPage-bannerDelete-1UbKW {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.EditStaticPage-modalRoot-2vjzO {\n\tpadding: 32px;\n}\n.EditStaticPage-modalBorderBottom-2YDSr {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.EditStaticPage-logInModalBody-3UPRE {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.EditStaticPage-exportSection-2F9Hw {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.EditStaticPage-exportSectionGridSub-1hXHs {\n\tgrid-template-columns: 50% 49% !important;\n}\n.EditStaticPage-exportText-11WTe {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.EditStaticPage-exportLinkImg-BaGg8 {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.EditStaticPage-vtrMiddle-3fkSy {\n\tvertical-align: middle;\n}\n.EditStaticPage-exportImg-15OHM {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.EditStaticPage-profileViewlabel-1h_Dm {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.EditStaticPage-profileViewMainContent-2tBJ8 {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.EditStaticPage-profileViewMain-2qv_B {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.EditStaticPage-profileViewInner-3CT4z {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.EditStaticPage-profileImageSection-13Mvk {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.EditStaticPage-lastviewInner-2dpDy {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.EditStaticPage-pagecontentWrapper-1eTes {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.EditStaticPage-exportSection-2F9Hw {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.EditStaticPage-exportText-11WTe {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.EditStaticPage-exportSectionGridSub-1hXHs {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.EditStaticPage-profileViewlabel-1h_Dm {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.EditStaticPage-profileViewMainContent-2tBJ8 {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.EditStaticPage-pagecontentWrapper-1eTes {\n\t\tmargin-left: 0;\n\t}\n}\n.EditStaticPage-ChangeToUpperCase-lM4Rv{\n    text-transform: uppercase\n}\n.EditStaticPage-noBorder-1xFE2 {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.EditStaticPage-errorMessage-1tmwn {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.EditStaticPage-panelHeader-1jWwH{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.EditStaticPage-formGroup-2IHg8 {\n  margin-bottom: 6px;\n}\n.EditStaticPage-select-2nq2A {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.EditStaticPage-labelText-2Hjhz{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.EditStaticPage-space1-3NDE4 {\n\tmargin-bottom: 6px !important;\n}\n.EditStaticPage-space2-dw7DI {\n\tmargin-bottom: 12px !important;\n}\n.EditStaticPage-space3-3V0SA {\n\tmargin-bottom: 18px !important;\n}\n.EditStaticPage-space4-3OFN8 {\n\tmargin-bottom: 24px !important;\n}\n.EditStaticPage-space5-1brCC {\n\tmargin-bottom: 30px !important;\n}\n.EditStaticPage-space6-2uale {\n\tmargin-bottom: 36px !important;\n}\n.EditStaticPage-space7-3sdxl {\n\tmargin-bottom: 42px !important;\n}\n.EditStaticPage-spaceTop8-1YVY6 {\n\tmargin-bottom: 48px !important;\n}\n.EditStaticPage-spaceTop1-1kfqb {\n\tmargin-top: 6px !important;\n}\n.EditStaticPage-spaceTop2-GwURX {\n\tmargin-top: 12px !important;\n}\n.EditStaticPage-spaceTop3-2YuZM {\n\tmargin-top: 18px !important;\n}\n.EditStaticPage-spaceTop4-mYvTF {\n\tmargin-top: 24px !important;\n}\n.EditStaticPage-spaceTop5-11aBZ {\n\tmargin-top: 30px !important;\n}\n.EditStaticPage-spaceTop6-3HtEW {\n\tmargin-top: 36px !important;\n}\n.EditStaticPage-spaceTop7-2LWAs {\n\tmargin-top: 42px !important;\n}\n.EditStaticPage-spaceTop8-1YVY6 {\n\tmargin-top: 48px !important;\n}\n.EditStaticPage-noMargin-3Ym4v {\n\tmargin: 0px !important;\n}\n.EditStaticPage-padding1-3Y6Aj {\n\tpadding-bottom: 6px !important;\n}\n.EditStaticPage-padding2-Gvazs {\n\tpadding-bottom: 12px !important;\n}\n.EditStaticPage-padding3-3wVaZ {\n\tpadding-bottom: 18px !important;\n}\n.EditStaticPage-padding4-20JyF {\n\tpadding-bottom: 24px !important;\n}\n.EditStaticPage-padding5-rwvMY {\n\tpadding-bottom: 30px !important;\n}\n.EditStaticPage-padding6-1_dT5 {\n\tpadding-bottom: 36px !important;\n}\n.EditStaticPage-padding7-1LWqC {\n\tpadding-bottom: 42px !important;\n}\n.EditStaticPage-paddingTop1-1oRgV {\n\tpadding-top: 6px !important;\n}\n.EditStaticPage-paddingTop2-5cFrO {\n\tpadding-top: 12px !important;\n}\n.EditStaticPage-paddingTop3-l5G2z {\n\tpadding-top: 18px !important;\n}\n.EditStaticPage-paddingTop4-2_rWq {\n\tpadding-top: 24px !important;\n}\n.EditStaticPage-paddingTop5-1VYla {\n\tpadding-top: 30px !important;\n}\n.EditStaticPage-paddingTop6-1EzzW {\n\tpadding-top: 36px !important;\n}\n.EditStaticPage-paddingTop7-1JpKC {\n\tpadding-top: 42px !important;\n}\n.EditStaticPage-noPadding-1_G8Q {\n\tpadding: 0px !important;\n}\n.EditStaticPage-textBold-3FKOJ {\n\tfont-weight: 500 !important;\n}\n.EditStaticPage-textBolder-3GzEz {\n\tfont-weight: 700 !important;\n}\n.EditStaticPage-textNormal-2bh0j {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.EditStaticPage-textDarkBlue-gM_yo {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.EditStaticPage-textLightBlue-2-POm {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.EditStaticPage-textLightSandleGreen-1gC84 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.EditStaticPage-textLightBrown-26IG0 {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.EditStaticPage-textMediumMaroon-2tvvi {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.EditStaticPage-textBrown-kqNx1 {\n\tcolor: #B5DC4B !important;\n}\n.EditStaticPage-textMaroon-3TmKW {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.EditStaticPage-textDarkBrown-2i_rA {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.EditStaticPage-textMediumBrown-2HIOJ {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.EditStaticPage-textSkyBlue-1On3y {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.EditStaticPage-textGray-1A5vt {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/EditStaticPage/EditStaticPage.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;CACC,gBAAgB;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"EditStaticPage.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.panelHeader{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.formGroup {\n  margin-bottom: 6px;\n}\n.select {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.labelText{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "EditStaticPage-rentAllHeaderAdmin-3Fvs2",
	"adminLayout": "EditStaticPage-adminLayout-1uy0P",
	"box": "EditStaticPage-box-eNldh",
	"exportLink": "EditStaticPage-exportLink-1UWFO",
	"blockcenter": "EditStaticPage-blockcenter-361Zj",
	"panelHeader": "EditStaticPage-panelHeader-1jWwH",
	"currencyselect": "EditStaticPage-currencyselect-1omjk",
	"mar0": "EditStaticPage-mar0-36-5I",
	"navbar": "EditStaticPage-navbar-3o3DW",
	"container": "EditStaticPage-container-D0xPS",
	"navbar-brand": "EditStaticPage-navbar-brand-37w54",
	"container-fluid": "EditStaticPage-container-fluid-2h2Bv",
	"pagecontentWrapper": "EditStaticPage-pagecontentWrapper-1eTes",
	"headerTitle": "EditStaticPage-headerTitle-371pZ",
	"table": "EditStaticPage-table-1v9cP",
	"tableRow": "EditStaticPage-tableRow-3UMD6",
	"tableCell": "EditStaticPage-tableCell-1aCO7",
	"formGroup": "EditStaticPage-formGroup-2IHg8",
	"select": "EditStaticPage-select-2nq2A",
	"noMargin": "EditStaticPage-noMargin-3Ym4v",
	"labelTextNew": "EditStaticPage-labelTextNew-2RdnA",
	"displayInline": "EditStaticPage-displayInline-2pp-3",
	"btnUPdate": "EditStaticPage-btnUPdate-19ZMm",
	"btnModalDelete": "EditStaticPage-btnModalDelete-2v_MC",
	"radioBtn": "EditStaticPage-radioBtn-2EFNG",
	"btnWidth": "EditStaticPage-btnWidth-2oPRg",
	"bannerImageBg": "EditStaticPage-bannerImageBg-2ihax",
	"bannerDelete": "EditStaticPage-bannerDelete-1UbKW",
	"modalRoot": "EditStaticPage-modalRoot-2vjzO",
	"modalBorderBottom": "EditStaticPage-modalBorderBottom-2YDSr",
	"logInModalBody": "EditStaticPage-logInModalBody-3UPRE",
	"exportSection": "EditStaticPage-exportSection-2F9Hw",
	"exportSectionGridSub": "EditStaticPage-exportSectionGridSub-1hXHs",
	"exportText": "EditStaticPage-exportText-11WTe",
	"exportLinkImg": "EditStaticPage-exportLinkImg-BaGg8",
	"vtrMiddle": "EditStaticPage-vtrMiddle-3fkSy",
	"exportImg": "EditStaticPage-exportImg-15OHM",
	"profileViewlabel": "EditStaticPage-profileViewlabel-1h_Dm",
	"profileViewMainContent": "EditStaticPage-profileViewMainContent-2tBJ8",
	"profileViewMain": "EditStaticPage-profileViewMain-2qv_B",
	"profileViewInner": "EditStaticPage-profileViewInner-3CT4z",
	"profileImageSection": "EditStaticPage-profileImageSection-13Mvk",
	"lastviewInner": "EditStaticPage-lastviewInner-2dpDy",
	"ChangeToUpperCase": "EditStaticPage-ChangeToUpperCase-lM4Rv",
	"noBorder": "EditStaticPage-noBorder-1xFE2",
	"errorMessage": "EditStaticPage-errorMessage-1tmwn",
	"labelText": "EditStaticPage-labelText-2Hjhz",
	"space1": "EditStaticPage-space1-3NDE4",
	"space2": "EditStaticPage-space2-dw7DI",
	"space3": "EditStaticPage-space3-3V0SA",
	"space4": "EditStaticPage-space4-3OFN8",
	"space5": "EditStaticPage-space5-1brCC",
	"space6": "EditStaticPage-space6-2uale",
	"space7": "EditStaticPage-space7-3sdxl",
	"spaceTop8": "EditStaticPage-spaceTop8-1YVY6",
	"spaceTop1": "EditStaticPage-spaceTop1-1kfqb",
	"spaceTop2": "EditStaticPage-spaceTop2-GwURX",
	"spaceTop3": "EditStaticPage-spaceTop3-2YuZM",
	"spaceTop4": "EditStaticPage-spaceTop4-mYvTF",
	"spaceTop5": "EditStaticPage-spaceTop5-11aBZ",
	"spaceTop6": "EditStaticPage-spaceTop6-3HtEW",
	"spaceTop7": "EditStaticPage-spaceTop7-2LWAs",
	"padding1": "EditStaticPage-padding1-3Y6Aj",
	"padding2": "EditStaticPage-padding2-Gvazs",
	"padding3": "EditStaticPage-padding3-3wVaZ",
	"padding4": "EditStaticPage-padding4-20JyF",
	"padding5": "EditStaticPage-padding5-rwvMY",
	"padding6": "EditStaticPage-padding6-1_dT5",
	"padding7": "EditStaticPage-padding7-1LWqC",
	"paddingTop1": "EditStaticPage-paddingTop1-1oRgV",
	"paddingTop2": "EditStaticPage-paddingTop2-5cFrO",
	"paddingTop3": "EditStaticPage-paddingTop3-l5G2z",
	"paddingTop4": "EditStaticPage-paddingTop4-2_rWq",
	"paddingTop5": "EditStaticPage-paddingTop5-1VYla",
	"paddingTop6": "EditStaticPage-paddingTop6-1EzzW",
	"paddingTop7": "EditStaticPage-paddingTop7-1JpKC",
	"noPadding": "EditStaticPage-noPadding-1_G8Q",
	"textBold": "EditStaticPage-textBold-3FKOJ",
	"textBolder": "EditStaticPage-textBolder-3GzEz",
	"textNormal": "EditStaticPage-textNormal-2bh0j",
	"textDarkBlue": "EditStaticPage-textDarkBlue-gM_yo",
	"textLightBlue": "EditStaticPage-textLightBlue-2-POm",
	"textLightSandleGreen": "EditStaticPage-textLightSandleGreen-1gC84",
	"textLightBrown": "EditStaticPage-textLightBrown-26IG0",
	"textMediumMaroon": "EditStaticPage-textMediumMaroon-2tvvi",
	"textBrown": "EditStaticPage-textBrown-kqNx1",
	"textMaroon": "EditStaticPage-textMaroon-3TmKW",
	"textDarkBrown": "EditStaticPage-textDarkBrown-2i_rA",
	"textMediumBrown": "EditStaticPage-textMediumBrown-2HIOJ",
	"textSkyBlue": "EditStaticPage-textSkyBlue-1On3y",
	"textGray": "EditStaticPage-textGray-1A5vt"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/editStaticPage/EditStaticPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.EditStaticPage-rentAllHeaderAdmin-3qYX- {\n  position: fixed !important;\n}\n.EditStaticPage-adminLayout-bqher {\n  padding-top: 64px !important;\n}\n.EditStaticPage-box-3YX2L h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.EditStaticPage-exportLink-1th-a {\n  margin-bottom: -29px;\n}\n.EditStaticPage-blockcenter-2VTOY {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.EditStaticPage-panelHeader-3vp24 {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.EditStaticPage-currencyselect-1KOKo {\n  width: 100%;\n  margin-right: 0px;\n}\n.EditStaticPage-panelHeader-3vp24 {\n  overflow: hidden;\n  position: relative;\n}\n.EditStaticPage-mar0-S5BDA {\n  margin-left: 0;\n  margin-right: 0;\n}\n.EditStaticPage-navbar-2UhrT > .EditStaticPage-container-26C-N .EditStaticPage-navbar-brand-2Fg4n,\n.EditStaticPage-navbar-2UhrT > .EditStaticPage-container-fluid-1q3fT .EditStaticPage-navbar-brand-2Fg4n {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .EditStaticPage-blockcenter-2VTOY {\n    padding: 0px;\n  }\n  .EditStaticPage-panelHeader-3vp24 {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.EditStaticPage-pagecontentWrapper-3nz1A {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.EditStaticPage-headerTitle-2tFEI {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.EditStaticPage-panelHeader-3vp24 {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.EditStaticPage-table-2zD4n {\n\tdisplay: table;\n}\n.EditStaticPage-tableRow-16xCA {\n\tdisplay: table-row;\n}\n.EditStaticPage-tableCell-2cQNX {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.EditStaticPage-formGroup-2_RJb {\n\tmargin-bottom: 6px;\n}\n.EditStaticPage-select-3cZBz {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.EditStaticPage-noMargin-2netb {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.EditStaticPage-exportLink-1th-a {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.EditStaticPage-labelTextNew-oOvB6 {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.EditStaticPage-displayInline-2HMVZ {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.EditStaticPage-btnUPdate-4uZjZ {\n\tdisplay: inline-block;\n}\n.EditStaticPage-btnModalDelete-2hBp_ {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.EditStaticPage-radioBtn-2Tp6Y {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.EditStaticPage-btnUPdate-4uZjZ {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.EditStaticPage-btnModalDelete-2hBp_ {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.EditStaticPage-btnWidth-ffdJ- {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.EditStaticPage-bannerImageBg-3Gjz2 {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.EditStaticPage-bannerDelete-1oiEo {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.EditStaticPage-modalRoot-2kzMG {\n\tpadding: 32px;\n}\n.EditStaticPage-modalBorderBottom-23AUa {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.EditStaticPage-logInModalBody-mnyH3 {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.EditStaticPage-exportSection-1YV-A {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.EditStaticPage-exportSectionGridSub-1Vvna {\n\tgrid-template-columns: 50% 49% !important;\n}\n.EditStaticPage-exportText-1JIlt {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.EditStaticPage-exportLinkImg-X0Yc6 {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.EditStaticPage-vtrMiddle-1EFLm {\n\tvertical-align: middle;\n}\n.EditStaticPage-exportImg-1kzi7 {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.EditStaticPage-profileViewlabel-RvpGL {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.EditStaticPage-profileViewMainContent-3AyNE {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.EditStaticPage-profileViewMain-3XGg4 {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.EditStaticPage-profileViewInner-1ugeu {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.EditStaticPage-profileImageSection-3CLa- {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.EditStaticPage-lastviewInner-3G8zN {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.EditStaticPage-pagecontentWrapper-3nz1A {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.EditStaticPage-exportSection-1YV-A {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.EditStaticPage-exportText-1JIlt {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.EditStaticPage-exportSectionGridSub-1Vvna {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.EditStaticPage-profileViewlabel-RvpGL {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.EditStaticPage-profileViewMainContent-3AyNE {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.EditStaticPage-pagecontentWrapper-3nz1A {\n\t\tmargin-left: 0;\n\t}\n}\n.EditStaticPage-ChangeToUpperCase-1z41X{\n    text-transform: uppercase\n}\n.EditStaticPage-noBorder-1YX4I {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/editStaticPage/EditStaticPage.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"EditStaticPage.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "EditStaticPage-rentAllHeaderAdmin-3qYX-",
	"adminLayout": "EditStaticPage-adminLayout-bqher",
	"box": "EditStaticPage-box-3YX2L",
	"exportLink": "EditStaticPage-exportLink-1th-a",
	"blockcenter": "EditStaticPage-blockcenter-2VTOY",
	"panelHeader": "EditStaticPage-panelHeader-3vp24",
	"currencyselect": "EditStaticPage-currencyselect-1KOKo",
	"mar0": "EditStaticPage-mar0-S5BDA",
	"navbar": "EditStaticPage-navbar-2UhrT",
	"container": "EditStaticPage-container-26C-N",
	"navbar-brand": "EditStaticPage-navbar-brand-2Fg4n",
	"container-fluid": "EditStaticPage-container-fluid-1q3fT",
	"pagecontentWrapper": "EditStaticPage-pagecontentWrapper-3nz1A",
	"headerTitle": "EditStaticPage-headerTitle-2tFEI",
	"table": "EditStaticPage-table-2zD4n",
	"tableRow": "EditStaticPage-tableRow-16xCA",
	"tableCell": "EditStaticPage-tableCell-2cQNX",
	"formGroup": "EditStaticPage-formGroup-2_RJb",
	"select": "EditStaticPage-select-3cZBz",
	"noMargin": "EditStaticPage-noMargin-2netb",
	"labelTextNew": "EditStaticPage-labelTextNew-oOvB6",
	"displayInline": "EditStaticPage-displayInline-2HMVZ",
	"btnUPdate": "EditStaticPage-btnUPdate-4uZjZ",
	"btnModalDelete": "EditStaticPage-btnModalDelete-2hBp_",
	"radioBtn": "EditStaticPage-radioBtn-2Tp6Y",
	"btnWidth": "EditStaticPage-btnWidth-ffdJ-",
	"bannerImageBg": "EditStaticPage-bannerImageBg-3Gjz2",
	"bannerDelete": "EditStaticPage-bannerDelete-1oiEo",
	"modalRoot": "EditStaticPage-modalRoot-2kzMG",
	"modalBorderBottom": "EditStaticPage-modalBorderBottom-23AUa",
	"logInModalBody": "EditStaticPage-logInModalBody-mnyH3",
	"exportSection": "EditStaticPage-exportSection-1YV-A",
	"exportSectionGridSub": "EditStaticPage-exportSectionGridSub-1Vvna",
	"exportText": "EditStaticPage-exportText-1JIlt",
	"exportLinkImg": "EditStaticPage-exportLinkImg-X0Yc6",
	"vtrMiddle": "EditStaticPage-vtrMiddle-1EFLm",
	"exportImg": "EditStaticPage-exportImg-1kzi7",
	"profileViewlabel": "EditStaticPage-profileViewlabel-RvpGL",
	"profileViewMainContent": "EditStaticPage-profileViewMainContent-3AyNE",
	"profileViewMain": "EditStaticPage-profileViewMain-3XGg4",
	"profileViewInner": "EditStaticPage-profileViewInner-1ugeu",
	"profileImageSection": "EditStaticPage-profileImageSection-3CLa-",
	"lastviewInner": "EditStaticPage-lastviewInner-3G8zN",
	"ChangeToUpperCase": "EditStaticPage-ChangeToUpperCase-1z41X",
	"noBorder": "EditStaticPage-noBorder-1YX4I"
};

/***/ }),

/***/ "./src/actions/siteadmin/updateStaticPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStaticPageAction", function() { return updateStaticPageAction; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);

 // Redirection

 // Toaster


const mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
mutation updateStaticPage(
  $id: Int,
  $content: String,
  $metaTitle: String,
  $metaDescription: String,
) {
  updateStaticPage(
    id: $id,
    content: $content,
    metaTitle: $metaTitle,
    metaDescription: $metaDescription,
  ) {
      status
  }
}
`;
const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`query getEditStaticPage ($id: Int!) {
  getEditStaticPage (id: $id) {
      id
      pageName
      content
      metaTitle
      metaDescription
      createdAt
  }
}`;
function updateStaticPageAction(values) {
  return async (dispatch, getState, {
    client
  }) => {
    try {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_UPDATE_STATIC_START"]
      });
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          content: values.content,
          metaTitle: values.metaTitle,
          metaDescription: values.metaDescription,
          id: values.id
        },
        refetchQueries: [{
          query,
          variables: {
            id: values.id
          }
        }]
      });

      if (data.updateStaticPage.status === "success") {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].success("Success!", "Changes are updated!");
        _core_history__WEBPACK_IMPORTED_MODULE_2__["default"].push('/siteadmin/staticpage/management');
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_UPDATE_STATIC_SUCCESS"]
        });
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].error("Error", "Updating failed");
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_UPDATE_STATIC_ERROR"]
        });
      }
    } catch (error) {
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].error("Failed!", "Failed to change  status");
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ADMIN_UPDATE_STATIC_ERROR"]
      });
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/components/siteadmin/EditStaticPage/EditStaticPage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/siteadmin/EditStaticPage/EditStaticPage.css");
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

/***/ "./src/components/siteadmin/EditStaticPage/EditStaticPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/siteadmin/EditStaticPage/EditStaticPage.css");
/* harmony import */ var _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/siteadmin/EditStaticPage/submit.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/siteadmin/EditStaticPage/validate.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/EditStaticPage/EditStaticPage.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style








 // Style


 // Translation




class EditStaticPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderFormControl", ({
      input,
      label,
      placeholder,
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 3,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 9,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], _extends({}, input, {
        type: type,
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.commonControlInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 34
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
      children,
      className
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 3,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 9,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 34
        }
      }, formatMessage(error)))));
    });

    _defineProperty(this, "renderQuill", ({
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
      const ReactQuill = this.ReactQuill;
      let modules = {
        toolbar: [[{
          'header': '1'
        }, {
          'header': '2'
        }], [{
          size: []
        }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }, {
          'indent': '-1'
        }, {
          'indent': '+1'
        }], ['link'] // ['link', 'image'],
        ],
        clipboard: {
          matchVisual: false
        }
      };
      let formats = ['header', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link' // 'link', 'image'
      ];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactQuill, _extends({}, input, {
        onChange: (newValue, delta, source) => {
          if (source === 'user') {
            input.onChange(newValue);
          }
        },
        onBlur: (range, source, quill) => {
          if (quill.getHTML() == '<p><br></p>') {
            input.onBlur('');
          } else {
            input.onBlur(quill.getHTML());
          }
        },
        modules: modules,
        formats: formats,
        theme: "snow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    if (typeof window !== 'undefined') {
      this.ReactQuill = __webpack_require__("react-quill");
    }

    this.state = {
      editorHtml: ''
    }; // You can also pass a Quill Delta here
  }

  render() {
    const {
      error,
      handleSubmit,
      submitting,
      dispatch,
      initialValues
    } = this.props;
    const {
      parentData
    } = this.props;
    const ReactQuill = this.ReactQuill;
    const gobackcss = {
      padding: '10px'
    };
    const {
      formatMessage
    } = this.props.intl;

    if (typeof window !== 'undefined' && ReactQuill) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.pagecontentWrapper, 'pagecontentAR'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.headerTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].editPageDetails, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 46
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.space4, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.textAlignRight, 'textAlignLeftRtl'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        to: "/siteadmin/staticpage/management",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.btnPrimaryBorder, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.btnLarge, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.noTextDecoration, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.btnPrimaryLink),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].goBack, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 19
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Panel"], {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.panelHeader,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_8__["default"]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 29
        }
      }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "metaTitle",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].metaTitleLabel),
        placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].metaTitleLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "metaDescription",
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.textareaInput,
        component: this.renderFormControlTextArea,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].metaDescriptionLabel),
        placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].metaDescriptionLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.space3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 3,
        lg: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].contentLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 60
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 9,
        lg: 9,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "content",
        component: this.renderQuill,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 25
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a.space1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.textAlignRight, 'textAlignLeftRtl'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        bsSize: "small",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a.btnLarge),
        type: "submit",
        disabled: submitting,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].save, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 27
        }
      })))))))))));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 14
        }
      });
    }
  }

}

_defineProperty(EditStaticPage, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

EditStaticPage = Object(redux_form__WEBPACK_IMPORTED_MODULE_7__["reduxForm"])({
  form: 'EditStaticPage',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_9__["default"]
})(EditStaticPage);

const mapState = state => ({});

const mapDispatch = {
  change: redux_form__WEBPACK_IMPORTED_MODULE_7__["change"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_5___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_6___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(EditStaticPage))));

/***/ }),

/***/ "./src/components/siteadmin/EditStaticPage/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_siteadmin_updateStaticPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/actions/siteadmin/updateStaticPage.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
// Action
 // Toaster



async function submit(values, dispatch) {
  if (values.content == null || values.content == '<p><br></p>' || values.content == '<p> </p>') {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Error", "Please Add  Content");
  } else if (values.metaTitle == null || values.metaTitle && values.metaTitle.trim() == '') {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Error", "Please Add  Meta Title");
  } else if (values.metaDescription == null || values.metaDescription && values.metaDescription.trim() == '') {
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Error", "Please Add  Meta Description");
  } else {
    await dispatch(Object(_actions_siteadmin_updateStaticPage__WEBPACK_IMPORTED_MODULE_0__["updateStaticPageAction"])(values));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/components/siteadmin/EditStaticPage/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {};

  if (!values.content) {
    errors.content = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.content && values.content.trim() == '') {
    errors.content = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required.defaultMessage;
  }

  if (!values.metaTitle) {
    errors.metaTitle = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.metaTitle && values.metaTitle.trim() == '') {
    errors.metaTitle = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.metaTitle && values.metaTitle.length > 255) {
    errors.metaTitle = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].metaTitle;
  }

  if (!values.metaDescription) {
    errors.metaDescription = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.metaDescription && values.metaDescription.trim() == '') {
    errors.metaDescription = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.metaDescription && values.metaDescription.length > 255) {
    errors.metaDescription = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].metaDescription;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/routes/siteadmin/editStaticPage/EditStaticPage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/siteadmin/editStaticPage/EditStaticPage.css");
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

/***/ "./src/routes/siteadmin/editStaticPage/EditStaticPage.js":
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
/* harmony import */ var _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/siteadmin/editStaticPage/EditStaticPage.css");
/* harmony import */ var _EditStaticPage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_siteadmin_EditStaticPage_EditStaticPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/siteadmin/EditStaticPage/EditStaticPage.js");
/* harmony import */ var _editStaticPage_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/routes/siteadmin/editStaticPage/editStaticPage.graphql");
/* harmony import */ var _editStaticPage_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editStaticPage_graphql__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _notFound_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/routes/notFound/NotFound.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/editStaticPage/EditStaticPage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style



 // Component

 // Query




class EditStaticPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      editStaticPageData,
      title
    } = this.props;

    if (editStaticPageData && editStaticPageData.getEditStaticPage === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_4___default.a.pagecontentWrapper),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notFound_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 62
        }
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_EditStaticPage_EditStaticPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: title,
      initialValues: editStaticPageData.getEditStaticPage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    });
  }

}

_defineProperty(EditStaticPage, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  blogId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  editStaticPageData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getEditStaticPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_EditStaticPage_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_editStaticPage_graphql__WEBPACK_IMPORTED_MODULE_7___default.a, {
  name: 'editStaticPageData',
  options: props => ({
    variables: {
      id: props.pageId
    },
    fetchPolicy: 'network-only'
  })
}))(EditStaticPage));

/***/ }),

/***/ "./src/routes/siteadmin/editStaticPage/editStaticPage.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEditStaticPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEditStaticPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":183}};

module.exports = doc;

/***/ }),

/***/ "./src/routes/siteadmin/editStaticPage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/AdminLayout.js");
/* harmony import */ var _EditStaticPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/siteadmin/editStaticPage/EditStaticPage.js");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/helpers/adminPrivileges.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/editStaticPage/index.js";




const title = 'Edit Page Details';
async function action({
  store,
  params
}) {
  // From Redux Store
  let isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

  if (!isAdminAuthenticated) {
    return {
      redirect: '/siteadmin/login'
    };
  } // Admin restriction


  if (!Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__["restrictUrls"])('/siteadmin/edit/staticpage/', adminPrivileges)) {
    return {
      redirect: '/siteadmin'
    };
  }

  const pageId = Number(params.pageId);
  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditStaticPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      pageId: pageId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1lZGl0U3RhdGljUGFnZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0VkaXRTdGF0aWNQYWdlL0VkaXRTdGF0aWNQYWdlLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL2VkaXRTdGF0aWNQYWdlL0VkaXRTdGF0aWNQYWdlLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL3NpdGVhZG1pbi91cGRhdGVTdGF0aWNQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9FZGl0U3RhdGljUGFnZS9FZGl0U3RhdGljUGFnZS5jc3M/YWQzMCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9FZGl0U3RhdGljUGFnZS9FZGl0U3RhdGljUGFnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9FZGl0U3RhdGljUGFnZS9zdWJtaXQuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vRWRpdFN0YXRpY1BhZ2UvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaXRlYWRtaW4vZWRpdFN0YXRpY1BhZ2UvRWRpdFN0YXRpY1BhZ2UuY3NzPzBjNzkiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9lZGl0U3RhdGljUGFnZS9FZGl0U3RhdGljUGFnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL2VkaXRTdGF0aWNQYWdlL2VkaXRTdGF0aWNQYWdlLmdyYXBocWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9lZGl0U3RhdGljUGFnZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXJlbnRBbGxIZWFkZXJBZG1pbi0zRnZzMiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWFkbWluTGF5b3V0LTF1eTBQIHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1ib3gtZU5sZGggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWV4cG9ydExpbmstMVVXRk8ge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1ibG9ja2NlbnRlci0zNjFaaiB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFuZWxIZWFkZXItMWpXd0gge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWN1cnJlbmN5c2VsZWN0LTFvbWprIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wYW5lbEhlYWRlci0xald3SCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtbWFyMC0zNi01SSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLW5hdmJhci0zbzNEVyA+IC5FZGl0U3RhdGljUGFnZS1jb250YWluZXItRDB4UFMgLkVkaXRTdGF0aWNQYWdlLW5hdmJhci1icmFuZC0zN3c1NCxcXG4uRWRpdFN0YXRpY1BhZ2UtbmF2YmFyLTNvM0RXID4gLkVkaXRTdGF0aWNQYWdlLWNvbnRhaW5lci1mbHVpZC0yaDJCdiAuRWRpdFN0YXRpY1BhZ2UtbmF2YmFyLWJyYW5kLTM3dzU0IHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkVkaXRTdGF0aWNQYWdlLWJsb2NrY2VudGVyLTM2MVpqIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLkVkaXRTdGF0aWNQYWdlLXBhbmVsSGVhZGVyLTFqV3dIIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5FZGl0U3RhdGljUGFnZS1wYWdlY29udGVudFdyYXBwZXItMWVUZXMge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1oZWFkZXJUaXRsZS0zNzFwWiB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFuZWxIZWFkZXItMWpXd0gge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtdGFibGUtMXY5Y1Age1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtdGFibGVSb3ctM1VNRDYge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRhYmxlQ2VsbC0xYUNPNyB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWZvcm1Hcm91cC0ySUhnOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utc2VsZWN0LTJucTJBIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1ub01hcmdpbi0zWW00diB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtZXhwb3J0TGluay0xVVdGTyB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWxhYmVsVGV4dE5ldy0yUmRuQSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtZGlzcGxheUlubGluZS0ycHAtMyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5FZGl0U3RhdGljUGFnZS1idG5VUGRhdGUtMTlaTW0ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWJ0bk1vZGFsRGVsZXRlLTJ2X01DIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1yYWRpb0J0bi0yRUZORyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkVkaXRTdGF0aWNQYWdlLWJ0blVQZGF0ZS0xOVpNbSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LkVkaXRTdGF0aWNQYWdlLWJ0bk1vZGFsRGVsZXRlLTJ2X01DIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuRWRpdFN0YXRpY1BhZ2UtYnRuV2lkdGgtMm9QUmcge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5FZGl0U3RhdGljUGFnZS1iYW5uZXJJbWFnZUJnLTJpaGF4IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtYmFubmVyRGVsZXRlLTFVYktXIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4uRWRpdFN0YXRpY1BhZ2UtbW9kYWxSb290LTJ2anpPIHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtbW9kYWxCb3JkZXJCb3R0b20tMllEU3Ige1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1sb2dJbk1vZGFsQm9keS0zVVBSRSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5FZGl0U3RhdGljUGFnZS1leHBvcnRTZWN0aW9uLTJGOUh3IHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtZXhwb3J0U2VjdGlvbkdyaWRTdWItMWhYSHMge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtZXhwb3J0VGV4dC0xMVdUZSB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtZXhwb3J0TGlua0ltZy1CYUdnOCB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXZ0ck1pZGRsZS0zZmtTeSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWV4cG9ydEltZy0xNU9ITSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wcm9maWxlVmlld2xhYmVsLTFoX0RtIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdNYWluQ29udGVudC0ydEJKOCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wcm9maWxlVmlld01haW4tMnF2X0Ige1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdJbm5lci0zQ1Q0eiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVJbWFnZVNlY3Rpb24tMTNNdmsge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWxhc3R2aWV3SW5uZXItMmRwRHkge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5FZGl0U3RhdGljUGFnZS1wYWdlY29udGVudFdyYXBwZXItMWVUZXMge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5FZGl0U3RhdGljUGFnZS1leHBvcnRTZWN0aW9uLTJGOUh3IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5FZGl0U3RhdGljUGFnZS1leHBvcnRUZXh0LTExV1RlIHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuRWRpdFN0YXRpY1BhZ2UtZXhwb3J0U2VjdGlvbkdyaWRTdWItMWhYSHMge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdsYWJlbC0xaF9EbSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMnRCSjgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5FZGl0U3RhdGljUGFnZS1wYWdlY29udGVudFdyYXBwZXItMWVUZXMge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkVkaXRTdGF0aWNQYWdlLUNoYW5nZVRvVXBwZXJDYXNlLWxNNFJ2e1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5FZGl0U3RhdGljUGFnZS1ub0JvcmRlci0xeEZFMiB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5FZGl0U3RhdGljUGFnZS1lcnJvck1lc3NhZ2UtMXRtd24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wYW5lbEhlYWRlci0xald3SHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWZvcm1Hcm91cC0ySUhnOCB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zZWxlY3QtMm5xMkEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtbGFiZWxUZXh0LTJIamh6e1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzY3Njc2O1xcbiAgbWFyZ2luOiA2cHggMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNwYWNlMS0zTkRFNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zcGFjZTItZHc3REkge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNwYWNlMy0zVjBTQSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utc3BhY2U0LTNPRk44IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zcGFjZTUtMWJyQ0Mge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNwYWNlNi0ydWFsZSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utc3BhY2U3LTNzZHhsIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zcGFjZVRvcDgtMVlWWTYge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNwYWNlVG9wMS0xa2ZxYiB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zcGFjZVRvcDItR3dVUlgge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNwYWNlVG9wMy0yWXVaTSB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utc3BhY2VUb3A0LW1ZdlRGIHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zcGFjZVRvcDUtMTFhQloge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNwYWNlVG9wNi0zSHRFVyB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utc3BhY2VUb3A3LTJMV0FzIHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1zcGFjZVRvcDgtMVlWWTYge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLW5vTWFyZ2luLTNZbTR2IHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFkZGluZzEtM1k2QWoge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhZGRpbmcyLUd2YXpzIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFkZGluZzMtM3dWYVoge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wYWRkaW5nNC0yMEp5RiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhZGRpbmc1LXJ3dk1ZIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFkZGluZzYtMV9kVDUge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wYWRkaW5nNy0xTFdxQyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhZGRpbmdUb3AxLTFvUmdWIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wYWRkaW5nVG9wMi01Y0ZyTyB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhZGRpbmdUb3AzLWw1RzJ6IHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFkZGluZ1RvcDQtMl9yV3Ege1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wYWRkaW5nVG9wNS0xVllsYSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhZGRpbmdUb3A2LTFFenpXIHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFkZGluZ1RvcDctMUpwS0Mge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1ub1BhZGRpbmctMV9HOFEge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtdGV4dEJvbGQtM0ZLT0oge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRleHRCb2xkZXItM0d6RXoge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRleHROb3JtYWwtMmJoMGoge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLkVkaXRTdGF0aWNQYWdlLXRleHREYXJrQmx1ZS1nTV95byB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtdGV4dExpZ2h0Qmx1ZS0yLVBPbSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRleHRMaWdodFNhbmRsZUdyZWVuLTFnQzg0IHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS10ZXh0TGlnaHRCcm93bi0yNklHMCB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRleHRNZWRpdW1NYXJvb24tMnR2dmkge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRleHRCcm93bi1rcU54MSB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRleHRNYXJvb24tM1RtS1cge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS10ZXh0RGFya0Jyb3duLTJpX3JBIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS10ZXh0TWVkaXVtQnJvd24tMkhJT0oge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS10ZXh0U2t5Qmx1ZS0xT24zeSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS10ZXh0R3JheS0xQTV2dCB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL0VkaXRTdGF0aWNQYWdlL0VkaXRTdGF0aWNQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7QUFDRDs7RUFFRSw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFO0lBQ0UsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNELDhCQUE4QjtBQUM5QjtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1o7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDs7Q0FFQyxnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLHNCQUFzQjtDQUN0QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDO0VBQ0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQjtDQUNEO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjtDQUNEO0VBQ0MsWUFBWTtFQUNaO0NBQ0Q7QUFDRCx1RUFBdUU7QUFDdkUsdUVBQXVFO0FBQ3ZFO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxZQUFZO0NBQ1o7QUFDRCw2REFBNkQ7QUFDN0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDLGlDQUFpQztDQUNqQywrQ0FBK0M7Q0FDL0MsK0JBQStCO0NBQy9CLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsYUFBYTtDQUNiO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsbUNBQW1DO0NBQ25DLDBCQUEwQjtLQUN0Qix1QkFBdUI7U0FDbkIsb0JBQW9CO0NBQzVCLGVBQWU7Q0FDZiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLDBDQUEwQztDQUMxQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixVQUFVO0NBQ1Y7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1g7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGNBQWM7Q0FDZCxpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0M7RUFDQyxvQkFBb0I7UUFDZCxjQUFjO1FBQ2QsZUFBZTtFQUNyQjtDQUNEO0FBQ0Q7Q0FDQztFQUNDLDRCQUE0QjtFQUM1QjtDQUNEO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjtDQUNEO0VBQ0MsdUNBQXVDO0VBQ3ZDO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7Q0FDRDtBQUNELHFFQUFxRTtBQUNyRTtDQUNDO0VBQ0MsZUFBZTtFQUNmO0NBQ0Q7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0QsNEJBQTRCO0FBQzVCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4QjtBQUNEO0NBQ0MsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyx3QkFBd0I7Q0FDeEI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRCwyQkFBMkI7QUFDM0I7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxvQ0FBb0M7Q0FDcEM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQ1wiLFwiZmlsZVwiOlwiRWRpdFN0YXRpY1BhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5yZW50QWxsSGVhZGVyQWRtaW4ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbkxheW91dCB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uYm94IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5leHBvcnRMaW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uYmxvY2tjZW50ZXIge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5jdXJyZW5jeXNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1hcjAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5uYXZiYXIgPiAuY29udGFpbmVyIC5uYXZiYXItYnJhbmQsXFxuLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5ibG9ja2NlbnRlciB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5wYW5lbEhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4ucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLnRhYmxlIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnRhYmxlUm93IHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi50YWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5mb3JtR3JvdXAge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnNlbGVjdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cG9ydExpbmsge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5sYWJlbFRleHROZXcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLmRpc3BsYXlJbmxpbmUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uYnRuVVBkYXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4ucmFkaW9CdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5idG5VUGRhdGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LmJ0bldpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uYmFubmVySW1hZ2VCZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmJhbm5lckRlbGV0ZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLm1vZGFsUm9vdCB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLm1vZGFsQm9yZGVyQm90dG9tIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4ubG9nSW5Nb2RhbEJvZHkge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXhwb3J0U2VjdGlvbiB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLmV4cG9ydFRleHQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLmV4cG9ydExpbmtJbWcge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi52dHJNaWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5leHBvcnRJbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4ucHJvZmlsZVZpZXdNYWluIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnByb2ZpbGVWaWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5wcm9maWxlSW1hZ2VTZWN0aW9uIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sYXN0dmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuZXhwb3J0U2VjdGlvbiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuZXhwb3J0VGV4dCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5DaGFuZ2VUb1VwcGVyQ2FzZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cXG4uZXJyb3JNZXNzYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucGFuZWxIZWFkZXJ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5mb3JtR3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmxhYmVsVGV4dHtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIG1hcmdpbjogNnB4IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIkVkaXRTdGF0aWNQYWdlLXJlbnRBbGxIZWFkZXJBZG1pbi0zRnZzMlwiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiRWRpdFN0YXRpY1BhZ2UtYWRtaW5MYXlvdXQtMXV5MFBcIixcblx0XCJib3hcIjogXCJFZGl0U3RhdGljUGFnZS1ib3gtZU5sZGhcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiRWRpdFN0YXRpY1BhZ2UtZXhwb3J0TGluay0xVVdGT1wiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtYmxvY2tjZW50ZXItMzYxWmpcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIkVkaXRTdGF0aWNQYWdlLXBhbmVsSGVhZGVyLTFqV3dIXCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJFZGl0U3RhdGljUGFnZS1jdXJyZW5jeXNlbGVjdC0xb21qa1wiLFxuXHRcIm1hcjBcIjogXCJFZGl0U3RhdGljUGFnZS1tYXIwLTM2LTVJXCIsXG5cdFwibmF2YmFyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtbmF2YmFyLTNvM0RXXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtY29udGFpbmVyLUQweFBTXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiRWRpdFN0YXRpY1BhZ2UtbmF2YmFyLWJyYW5kLTM3dzU0XCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiRWRpdFN0YXRpY1BhZ2UtY29udGFpbmVyLWZsdWlkLTJoMkJ2XCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcGFnZWNvbnRlbnRXcmFwcGVyLTFlVGVzXCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJFZGl0U3RhdGljUGFnZS1oZWFkZXJUaXRsZS0zNzFwWlwiLFxuXHRcInRhYmxlXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGFibGUtMXY5Y1BcIixcblx0XCJ0YWJsZVJvd1wiOiBcIkVkaXRTdGF0aWNQYWdlLXRhYmxlUm93LTNVTUQ2XCIsXG5cdFwidGFibGVDZWxsXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGFibGVDZWxsLTFhQ083XCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiRWRpdFN0YXRpY1BhZ2UtZm9ybUdyb3VwLTJJSGc4XCIsXG5cdFwic2VsZWN0XCI6IFwiRWRpdFN0YXRpY1BhZ2Utc2VsZWN0LTJucTJBXCIsXG5cdFwibm9NYXJnaW5cIjogXCJFZGl0U3RhdGljUGFnZS1ub01hcmdpbi0zWW00dlwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIkVkaXRTdGF0aWNQYWdlLWxhYmVsVGV4dE5ldy0yUmRuQVwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJFZGl0U3RhdGljUGFnZS1kaXNwbGF5SW5saW5lLTJwcC0zXCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiRWRpdFN0YXRpY1BhZ2UtYnRuVVBkYXRlLTE5Wk1tXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJFZGl0U3RhdGljUGFnZS1idG5Nb2RhbERlbGV0ZS0ydl9NQ1wiLFxuXHRcInJhZGlvQnRuXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcmFkaW9CdG4tMkVGTkdcIixcblx0XCJidG5XaWR0aFwiOiBcIkVkaXRTdGF0aWNQYWdlLWJ0bldpZHRoLTJvUFJnXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIkVkaXRTdGF0aWNQYWdlLWJhbm5lckltYWdlQmctMmloYXhcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJFZGl0U3RhdGljUGFnZS1iYW5uZXJEZWxldGUtMVViS1dcIixcblx0XCJtb2RhbFJvb3RcIjogXCJFZGl0U3RhdGljUGFnZS1tb2RhbFJvb3QtMnZqek9cIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIkVkaXRTdGF0aWNQYWdlLW1vZGFsQm9yZGVyQm90dG9tLTJZRFNyXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJFZGl0U3RhdGljUGFnZS1sb2dJbk1vZGFsQm9keS0zVVBSRVwiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRTZWN0aW9uLTJGOUh3XCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRTZWN0aW9uR3JpZFN1Yi0xaFhIc1wiLFxuXHRcImV4cG9ydFRleHRcIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRUZXh0LTExV1RlXCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIkVkaXRTdGF0aWNQYWdlLWV4cG9ydExpbmtJbWctQmFHZzhcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJFZGl0U3RhdGljUGFnZS12dHJNaWRkbGUtM2ZrU3lcIixcblx0XCJleHBvcnRJbWdcIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRJbWctMTVPSE1cIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdsYWJlbC0xaF9EbVwiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJFZGl0U3RhdGljUGFnZS1wcm9maWxlVmlld01haW5Db250ZW50LTJ0Qko4XCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdNYWluLTJxdl9CXCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVWaWV3SW5uZXItM0NUNHpcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZUltYWdlU2VjdGlvbi0xM012a1wiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJFZGl0U3RhdGljUGFnZS1sYXN0dmlld0lubmVyLTJkcER5XCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJFZGl0U3RhdGljUGFnZS1DaGFuZ2VUb1VwcGVyQ2FzZS1sTTRSdlwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2Utbm9Cb3JkZXItMXhGRTJcIixcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJFZGl0U3RhdGljUGFnZS1lcnJvck1lc3NhZ2UtMXRtd25cIixcblx0XCJsYWJlbFRleHRcIjogXCJFZGl0U3RhdGljUGFnZS1sYWJlbFRleHQtMkhqaHpcIixcblx0XCJzcGFjZTFcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTEtM05ERTRcIixcblx0XCJzcGFjZTJcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTItZHc3RElcIixcblx0XCJzcGFjZTNcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTMtM1YwU0FcIixcblx0XCJzcGFjZTRcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTQtM09GTjhcIixcblx0XCJzcGFjZTVcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTUtMWJyQ0NcIixcblx0XCJzcGFjZTZcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTYtMnVhbGVcIixcblx0XCJzcGFjZTdcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZTctM3NkeGxcIixcblx0XCJzcGFjZVRvcDhcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDgtMVlWWTZcIixcblx0XCJzcGFjZVRvcDFcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDEtMWtmcWJcIixcblx0XCJzcGFjZVRvcDJcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDItR3dVUlhcIixcblx0XCJzcGFjZVRvcDNcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDMtMll1Wk1cIixcblx0XCJzcGFjZVRvcDRcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDQtbVl2VEZcIixcblx0XCJzcGFjZVRvcDVcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDUtMTFhQlpcIixcblx0XCJzcGFjZVRvcDZcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDYtM0h0RVdcIixcblx0XCJzcGFjZVRvcDdcIjogXCJFZGl0U3RhdGljUGFnZS1zcGFjZVRvcDctMkxXQXNcIixcblx0XCJwYWRkaW5nMVwiOiBcIkVkaXRTdGF0aWNQYWdlLXBhZGRpbmcxLTNZNkFqXCIsXG5cdFwicGFkZGluZzJcIjogXCJFZGl0U3RhdGljUGFnZS1wYWRkaW5nMi1HdmF6c1wiLFxuXHRcInBhZGRpbmczXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcGFkZGluZzMtM3dWYVpcIixcblx0XCJwYWRkaW5nNFwiOiBcIkVkaXRTdGF0aWNQYWdlLXBhZGRpbmc0LTIwSnlGXCIsXG5cdFwicGFkZGluZzVcIjogXCJFZGl0U3RhdGljUGFnZS1wYWRkaW5nNS1yd3ZNWVwiLFxuXHRcInBhZGRpbmc2XCI6IFwiRWRpdFN0YXRpY1BhZ2UtcGFkZGluZzYtMV9kVDVcIixcblx0XCJwYWRkaW5nN1wiOiBcIkVkaXRTdGF0aWNQYWdlLXBhZGRpbmc3LTFMV3FDXCIsXG5cdFwicGFkZGluZ1RvcDFcIjogXCJFZGl0U3RhdGljUGFnZS1wYWRkaW5nVG9wMS0xb1JnVlwiLFxuXHRcInBhZGRpbmdUb3AyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcGFkZGluZ1RvcDItNWNGck9cIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkVkaXRTdGF0aWNQYWdlLXBhZGRpbmdUb3AzLWw1RzJ6XCIsXG5cdFwicGFkZGluZ1RvcDRcIjogXCJFZGl0U3RhdGljUGFnZS1wYWRkaW5nVG9wNC0yX3JXcVwiLFxuXHRcInBhZGRpbmdUb3A1XCI6IFwiRWRpdFN0YXRpY1BhZ2UtcGFkZGluZ1RvcDUtMVZZbGFcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkVkaXRTdGF0aWNQYWdlLXBhZGRpbmdUb3A2LTFFenpXXCIsXG5cdFwicGFkZGluZ1RvcDdcIjogXCJFZGl0U3RhdGljUGFnZS1wYWRkaW5nVG9wNy0xSnBLQ1wiLFxuXHRcIm5vUGFkZGluZ1wiOiBcIkVkaXRTdGF0aWNQYWdlLW5vUGFkZGluZy0xX0c4UVwiLFxuXHRcInRleHRCb2xkXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGV4dEJvbGQtM0ZLT0pcIixcblx0XCJ0ZXh0Qm9sZGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGV4dEJvbGRlci0zR3pFelwiLFxuXHRcInRleHROb3JtYWxcIjogXCJFZGl0U3RhdGljUGFnZS10ZXh0Tm9ybWFsLTJiaDBqXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGV4dERhcmtCbHVlLWdNX3lvXCIsXG5cdFwidGV4dExpZ2h0Qmx1ZVwiOiBcIkVkaXRTdGF0aWNQYWdlLXRleHRMaWdodEJsdWUtMi1QT21cIixcblx0XCJ0ZXh0TGlnaHRTYW5kbGVHcmVlblwiOiBcIkVkaXRTdGF0aWNQYWdlLXRleHRMaWdodFNhbmRsZUdyZWVuLTFnQzg0XCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJFZGl0U3RhdGljUGFnZS10ZXh0TGlnaHRCcm93bi0yNklHMFwiLFxuXHRcInRleHRNZWRpdW1NYXJvb25cIjogXCJFZGl0U3RhdGljUGFnZS10ZXh0TWVkaXVtTWFyb29uLTJ0dnZpXCIsXG5cdFwidGV4dEJyb3duXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGV4dEJyb3duLWtxTngxXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkVkaXRTdGF0aWNQYWdlLXRleHRNYXJvb24tM1RtS1dcIixcblx0XCJ0ZXh0RGFya0Jyb3duXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGV4dERhcmtCcm93bi0yaV9yQVwiLFxuXHRcInRleHRNZWRpdW1Ccm93blwiOiBcIkVkaXRTdGF0aWNQYWdlLXRleHRNZWRpdW1Ccm93bi0ySElPSlwiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGV4dFNreUJsdWUtMU9uM3lcIixcblx0XCJ0ZXh0R3JheVwiOiBcIkVkaXRTdGF0aWNQYWdlLXRleHRHcmF5LTFBNXZ0XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1yZW50QWxsSGVhZGVyQWRtaW4tM3FZWC0ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1hZG1pbkxheW91dC1icWhlciB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtYm94LTNZWDJMIGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1leHBvcnRMaW5rLTF0aC1hIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtYmxvY2tjZW50ZXItMlZUT1kge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhbmVsSGVhZGVyLTN2cDI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1jdXJyZW5jeXNlbGVjdC0xS09LbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcGFuZWxIZWFkZXItM3ZwMjQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLW1hcjAtUzVCREEge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1uYXZiYXItMlVoclQgPiAuRWRpdFN0YXRpY1BhZ2UtY29udGFpbmVyLTI2Qy1OIC5FZGl0U3RhdGljUGFnZS1uYXZiYXItYnJhbmQtMkZnNG4sXFxuLkVkaXRTdGF0aWNQYWdlLW5hdmJhci0yVWhyVCA+IC5FZGl0U3RhdGljUGFnZS1jb250YWluZXItZmx1aWQtMXEzZlQgLkVkaXRTdGF0aWNQYWdlLW5hdmJhci1icmFuZC0yRmc0biB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5FZGl0U3RhdGljUGFnZS1ibG9ja2NlbnRlci0yVlRPWSB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5FZGl0U3RhdGljUGFnZS1wYW5lbEhlYWRlci0zdnAyNCB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4uRWRpdFN0YXRpY1BhZ2UtcGFnZWNvbnRlbnRXcmFwcGVyLTNuejFBIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtaGVhZGVyVGl0bGUtMnRGRUkge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXBhbmVsSGVhZGVyLTN2cDI0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRhYmxlLTJ6RDRuIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXRhYmxlUm93LTE2eENBIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5FZGl0U3RhdGljUGFnZS10YWJsZUNlbGwtMmNRTlgge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1mb3JtR3JvdXAtMl9SSmIge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXNlbGVjdC0zY1pCeiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utbm9NYXJnaW4tMm5ldGIge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWV4cG9ydExpbmstMXRoLWEge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1sYWJlbFRleHROZXctb092QjYge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWRpc3BsYXlJbmxpbmUtMkhNVloge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uRWRpdFN0YXRpY1BhZ2UtYnRuVVBkYXRlLTR1WmpaIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1idG5Nb2RhbERlbGV0ZS0yaEJwXyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcmFkaW9CdG4tMlRwNlkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5FZGl0U3RhdGljUGFnZS1idG5VUGRhdGUtNHVaaloge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5FZGl0U3RhdGljUGFnZS1idG5Nb2RhbERlbGV0ZS0yaEJwXyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LkVkaXRTdGF0aWNQYWdlLWJ0bldpZHRoLWZmZEotIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uRWRpdFN0YXRpY1BhZ2UtYmFubmVySW1hZ2VCZy0zR2p6MiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWJhbm5lckRlbGV0ZS0xb2lFbyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLkVkaXRTdGF0aWNQYWdlLW1vZGFsUm9vdC0ya3pNRyB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLW1vZGFsQm9yZGVyQm90dG9tLTIzQVVhIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtbG9nSW5Nb2RhbEJvZHktbW55SDMge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uRWRpdFN0YXRpY1BhZ2UtZXhwb3J0U2VjdGlvbi0xWVYtQSB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTFWdm5hIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWV4cG9ydFRleHQtMUpJbHQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLWV4cG9ydExpbmtJbWctWDBZYzYge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5FZGl0U3RhdGljUGFnZS12dHJNaWRkbGUtMUVGTG0ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1leHBvcnRJbWctMWt6aTcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdsYWJlbC1SdnBHTCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtM0F5TkUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4uRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdNYWluLTNYR2c0IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVWaWV3SW5uZXItMXVnZXUge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1wcm9maWxlSW1hZ2VTZWN0aW9uLTNDTGEtIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5FZGl0U3RhdGljUGFnZS1sYXN0dmlld0lubmVyLTNHOHpOIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuRWRpdFN0YXRpY1BhZ2UtcGFnZWNvbnRlbnRXcmFwcGVyLTNuejFBIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuRWRpdFN0YXRpY1BhZ2UtZXhwb3J0U2VjdGlvbi0xWVYtQSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuRWRpdFN0YXRpY1BhZ2UtZXhwb3J0VGV4dC0xSklsdCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LkVkaXRTdGF0aWNQYWdlLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTFWdm5hIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVWaWV3bGFiZWwtUnZwR0wge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5FZGl0U3RhdGljUGFnZS1wcm9maWxlVmlld01haW5Db250ZW50LTNBeU5FIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuRWRpdFN0YXRpY1BhZ2UtcGFnZWNvbnRlbnRXcmFwcGVyLTNuejFBIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5FZGl0U3RhdGljUGFnZS1DaGFuZ2VUb1VwcGVyQ2FzZS0xejQxWHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4uRWRpdFN0YXRpY1BhZ2Utbm9Cb3JkZXItMVlYNEkge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zaXRlYWRtaW4vZWRpdFN0YXRpY1BhZ2UvRWRpdFN0YXRpY1BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsOEJBQThCO0FBQzlCO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEOztDQUVDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0M7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtBQUNELHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWjtBQUNELDZEQUE2RDtBQUM3RDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsaUNBQWlDO0NBQ2pDLCtDQUErQztDQUMvQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0tBQ3RCLHVCQUF1QjtTQUNuQixvQkFBb0I7Q0FDNUIsZUFBZTtDQUNmLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQztFQUNDLG9CQUFvQjtRQUNkLGNBQWM7UUFDZCxlQUFlO0VBQ3JCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyx1Q0FBdUM7RUFDdkM7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtDQUNEO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0M7RUFDQyxlQUFlO0VBQ2Y7Q0FDRDtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRCw0QkFBNEJcIixcImZpbGVcIjpcIkVkaXRTdGF0aWNQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4ucmVudEFsbEhlYWRlckFkbWluIHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5MYXlvdXQge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLmJveCBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLmJsb2NrY2VudGVyIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uY3VycmVuY3lzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubmF2YmFyID4gLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLFxcbi5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmQge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuYmxvY2tjZW50ZXIge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAucGFuZWxIZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi50YWJsZSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi50YWJsZVJvdyB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4udGFibGVDZWxsIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uZm9ybUdyb3VwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBvcnRMaW5rIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubGFiZWxUZXh0TmV3IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5kaXNwbGF5SW5saW5lIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLmJ0blVQZGF0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuTW9kYWxEZWxldGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLnJhZGlvQnRuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYnRuVVBkYXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuYnRuTW9kYWxEZWxldGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5idG5XaWR0aCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLmJhbm5lckltYWdlQmcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5iYW5uZXJEZWxldGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5tb2RhbFJvb3Qge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5tb2RhbEJvcmRlckJvdHRvbSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLmxvZ0luTW9kYWxCb2R5IHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmV4cG9ydFNlY3Rpb24ge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5leHBvcnRUZXh0IHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5leHBvcnRMaW5rSW1nIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udnRyTWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uZXhwb3J0SW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLnByb2ZpbGVWaWV3TWFpbiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5wcm9maWxlVmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4ucHJvZmlsZUltYWdlU2VjdGlvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubGFzdHZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LmV4cG9ydFNlY3Rpb24ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LmV4cG9ydFRleHQge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5leHBvcnRTZWN0aW9uR3JpZFN1YiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnBhZ2Vjb250ZW50V3JhcHBlciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uQ2hhbmdlVG9VcHBlckNhc2V7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLm5vQm9yZGVyIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIkVkaXRTdGF0aWNQYWdlLXJlbnRBbGxIZWFkZXJBZG1pbi0zcVlYLVwiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiRWRpdFN0YXRpY1BhZ2UtYWRtaW5MYXlvdXQtYnFoZXJcIixcblx0XCJib3hcIjogXCJFZGl0U3RhdGljUGFnZS1ib3gtM1lYMkxcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiRWRpdFN0YXRpY1BhZ2UtZXhwb3J0TGluay0xdGgtYVwiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtYmxvY2tjZW50ZXItMlZUT1lcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIkVkaXRTdGF0aWNQYWdlLXBhbmVsSGVhZGVyLTN2cDI0XCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJFZGl0U3RhdGljUGFnZS1jdXJyZW5jeXNlbGVjdC0xS09Lb1wiLFxuXHRcIm1hcjBcIjogXCJFZGl0U3RhdGljUGFnZS1tYXIwLVM1QkRBXCIsXG5cdFwibmF2YmFyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtbmF2YmFyLTJVaHJUXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtY29udGFpbmVyLTI2Qy1OXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiRWRpdFN0YXRpY1BhZ2UtbmF2YmFyLWJyYW5kLTJGZzRuXCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiRWRpdFN0YXRpY1BhZ2UtY29udGFpbmVyLWZsdWlkLTFxM2ZUXCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcGFnZWNvbnRlbnRXcmFwcGVyLTNuejFBXCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJFZGl0U3RhdGljUGFnZS1oZWFkZXJUaXRsZS0ydEZFSVwiLFxuXHRcInRhYmxlXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGFibGUtMnpENG5cIixcblx0XCJ0YWJsZVJvd1wiOiBcIkVkaXRTdGF0aWNQYWdlLXRhYmxlUm93LTE2eENBXCIsXG5cdFwidGFibGVDZWxsXCI6IFwiRWRpdFN0YXRpY1BhZ2UtdGFibGVDZWxsLTJjUU5YXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiRWRpdFN0YXRpY1BhZ2UtZm9ybUdyb3VwLTJfUkpiXCIsXG5cdFwic2VsZWN0XCI6IFwiRWRpdFN0YXRpY1BhZ2Utc2VsZWN0LTNjWkJ6XCIsXG5cdFwibm9NYXJnaW5cIjogXCJFZGl0U3RhdGljUGFnZS1ub01hcmdpbi0ybmV0YlwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIkVkaXRTdGF0aWNQYWdlLWxhYmVsVGV4dE5ldy1vT3ZCNlwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJFZGl0U3RhdGljUGFnZS1kaXNwbGF5SW5saW5lLTJITVZaXCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiRWRpdFN0YXRpY1BhZ2UtYnRuVVBkYXRlLTR1WmpaXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJFZGl0U3RhdGljUGFnZS1idG5Nb2RhbERlbGV0ZS0yaEJwX1wiLFxuXHRcInJhZGlvQnRuXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcmFkaW9CdG4tMlRwNllcIixcblx0XCJidG5XaWR0aFwiOiBcIkVkaXRTdGF0aWNQYWdlLWJ0bldpZHRoLWZmZEotXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIkVkaXRTdGF0aWNQYWdlLWJhbm5lckltYWdlQmctM0dqejJcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJFZGl0U3RhdGljUGFnZS1iYW5uZXJEZWxldGUtMW9pRW9cIixcblx0XCJtb2RhbFJvb3RcIjogXCJFZGl0U3RhdGljUGFnZS1tb2RhbFJvb3QtMmt6TUdcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIkVkaXRTdGF0aWNQYWdlLW1vZGFsQm9yZGVyQm90dG9tLTIzQVVhXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJFZGl0U3RhdGljUGFnZS1sb2dJbk1vZGFsQm9keS1tbnlIM1wiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRTZWN0aW9uLTFZVi1BXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRTZWN0aW9uR3JpZFN1Yi0xVnZuYVwiLFxuXHRcImV4cG9ydFRleHRcIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRUZXh0LTFKSWx0XCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIkVkaXRTdGF0aWNQYWdlLWV4cG9ydExpbmtJbWctWDBZYzZcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJFZGl0U3RhdGljUGFnZS12dHJNaWRkbGUtMUVGTG1cIixcblx0XCJleHBvcnRJbWdcIjogXCJFZGl0U3RhdGljUGFnZS1leHBvcnRJbWctMWt6aTdcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdsYWJlbC1SdnBHTFwiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJFZGl0U3RhdGljUGFnZS1wcm9maWxlVmlld01haW5Db250ZW50LTNBeU5FXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZVZpZXdNYWluLTNYR2c0XCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIkVkaXRTdGF0aWNQYWdlLXByb2ZpbGVWaWV3SW5uZXItMXVnZXVcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiRWRpdFN0YXRpY1BhZ2UtcHJvZmlsZUltYWdlU2VjdGlvbi0zQ0xhLVwiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJFZGl0U3RhdGljUGFnZS1sYXN0dmlld0lubmVyLTNHOHpOXCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJFZGl0U3RhdGljUGFnZS1DaGFuZ2VUb1VwcGVyQ2FzZS0xejQxWFwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiRWRpdFN0YXRpY1BhZ2Utbm9Cb3JkZXItMVlYNElcIlxufTsiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5pbXBvcnQge1xuICAgIEFETUlOX1VQREFURV9TVEFUSUNfU1RBUlQsXG4gICAgQURNSU5fVVBEQVRFX1NUQVRJQ19TVUNDRVNTLFxuICAgIEFETUlOX1VQREFURV9TVEFUSUNfRVJST1Jcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLy8gUmVkaXJlY3Rpb25cbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2NvcmUvaGlzdG9yeSc7XG5cbi8vIFRvYXN0ZXJcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5cblxuY29uc3QgbXV0YXRpb24gPSBncWxgXG5tdXRhdGlvbiB1cGRhdGVTdGF0aWNQYWdlKFxuICAkaWQ6IEludCxcbiAgJGNvbnRlbnQ6IFN0cmluZyxcbiAgJG1ldGFUaXRsZTogU3RyaW5nLFxuICAkbWV0YURlc2NyaXB0aW9uOiBTdHJpbmcsXG4pIHtcbiAgdXBkYXRlU3RhdGljUGFnZShcbiAgICBpZDogJGlkLFxuICAgIGNvbnRlbnQ6ICRjb250ZW50LFxuICAgIG1ldGFUaXRsZTogJG1ldGFUaXRsZSxcbiAgICBtZXRhRGVzY3JpcHRpb246ICRtZXRhRGVzY3JpcHRpb24sXG4gICkge1xuICAgICAgc3RhdHVzXG4gIH1cbn1cbmA7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYHF1ZXJ5IGdldEVkaXRTdGF0aWNQYWdlICgkaWQ6IEludCEpIHtcbiAgZ2V0RWRpdFN0YXRpY1BhZ2UgKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBwYWdlTmFtZVxuICAgICAgY29udGVudFxuICAgICAgbWV0YVRpdGxlXG4gICAgICBtZXRhRGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICB9XG59YDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRpY1BhZ2VBY3Rpb24odmFsdWVzKSB7XG5cbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9VUERBVEVfU1RBVElDX1NUQVJUIH0pO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdmFsdWVzLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZTogdmFsdWVzLm1ldGFUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uOiB2YWx1ZXMubWV0YURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBpZDogdmFsdWVzLmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZDogdmFsdWVzLmlkIH0gfV1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChkYXRhLnVwZGF0ZVN0YXRpY1BhZ2Uuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2VzcyFcIiwgXCJDaGFuZ2VzIGFyZSB1cGRhdGVkIVwiKTtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9zaXRlYWRtaW4vc3RhdGljcGFnZS9tYW5hZ2VtZW50Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9VUERBVEVfU1RBVElDX1NVQ0NFU1MgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJvclwiLCBcIlVwZGF0aW5nIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFETUlOX1VQREFURV9TVEFUSUNfRVJST1IgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCFcIiwgXCJGYWlsZWQgdG8gY2hhbmdlICBzdGF0dXNcIik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFETUlOX1VQREFURV9TVEFUSUNfRVJST1IgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn0iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0VkaXRTdGF0aWNQYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9FZGl0U3RhdGljUGFnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9FZGl0U3RhdGljUGFnZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gU3R5bGVcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRWRpdFN0YXRpY1BhZ2UuY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtLCBjaGFuZ2UgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBzdWJtaXQgZnJvbSAnLi9zdWJtaXQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBDb2wsXG4gIFJvdyxcbiAgUGFuZWwsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5cbmNsYXNzIEVkaXRTdGF0aWNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5SZWFjdFF1aWxsID0gcmVxdWlyZSgncmVhY3QtcXVpbGwnKVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0geyBlZGl0b3JIdG1sOiAnJyB9IC8vIFlvdSBjYW4gYWxzbyBwYXNzIGEgUXVpbGwgRGVsdGEgaGVyZVxuXG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5pdGlhbFZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICByZW5kZXJGb3JtQ29udHJvbCA9ICh7IGlucHV0LCBsYWJlbCwgcGxhY2Vob2xkZXIsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17M30gbGc9ezN9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17OX0gbGc9ezl9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXtidC5jb21tb25Db250cm9sSW5wdXR9IC8+XG4gICAgICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3MuZXJyb3JNZXNzYWdlfT57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zcGFuPn1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYSA9ICh7IGlucHV0LCBsYWJlbCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17M30gbGc9ezN9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17OX0gbGc9ezl9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPXtcInRleHRhcmVhXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApXG4gIH1cblxuICByZW5kZXJRdWlsbCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIGNvbnN0IFJlYWN0UXVpbGwgPSB0aGlzLlJlYWN0UXVpbGw7XG4gICAgbGV0IG1vZHVsZXMgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIFt7ICdoZWFkZXInOiAnMScgfSwgeyAnaGVhZGVyJzogJzInIH1dLFxuICAgICAgICBbeyBzaXplOiBbXSB9XSxcbiAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICAgICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCcgfSwgeyAnbGlzdCc6ICdidWxsZXQnIH0sXG4gICAgICAgIHsgJ2luZGVudCc6ICctMScgfSwgeyAnaW5kZW50JzogJysxJyB9XSxcbiAgICAgICAgWydsaW5rJ10sXG4gICAgICAgIC8vIFsnbGluaycsICdpbWFnZSddLFxuICAgICAgXSxcbiAgICAgIGNsaXBib2FyZDoge1xuICAgICAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBmb3JtYXRzID0gW1xuICAgICAgJ2hlYWRlcicsICdzaXplJyxcbiAgICAgICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnLFxuICAgICAgJ2xpc3QnLCAnYnVsbGV0JywgJ2luZGVudCcsXG4gICAgICAnbGluaydcbiAgICAgIC8vICdsaW5rJywgJ2ltYWdlJ1xuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsobmV3VmFsdWUsIGRlbHRhLCBzb3VyY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09ICd1c2VyJykge1xuICAgICAgICAgICAgICBpbnB1dC5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkJsdXI9eyhyYW5nZSwgc291cmNlLCBxdWlsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1aWxsLmdldEhUTUwoKSA9PSAnPHA+PGJyPjwvcD4nKSB7XG4gICAgICAgICAgICAgIGlucHV0Lm9uQmx1cignJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXQub25CbHVyKHF1aWxsLmdldEhUTUwoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgdGhlbWU9XCJzbm93XCJcbiAgICAgICAgLz5cbiAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzLmVycm9yTWVzc2FnZX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlcnJvciwgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBkaXNwYXRjaCwgaW5pdGlhbFZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhcmVudERhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgUmVhY3RRdWlsbCA9IHRoaXMuUmVhY3RRdWlsbDtcbiAgICBjb25zdCBnb2JhY2tjc3MgPSB7IHBhZGRpbmc6ICcxMHB4JyB9O1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBSZWFjdFF1aWxsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5wYWdlY29udGVudFdyYXBwZXIsICdwYWdlY29udGVudEFSJyl9PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3MuaGVhZGVyVGl0bGV9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZWRpdFBhZ2VEZXRhaWxzfSAvPjwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnNwYWNlNCwgYnQudGV4dEFsaWduUmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9zaXRlYWRtaW4vc3RhdGljcGFnZS9tYW5hZ2VtZW50XCJ9IGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeUJvcmRlciwgYnQuYnRuTGFyZ2UsIGJ0Lm5vVGV4dERlY29yYXRpb24sIGJ0LmJ0blByaW1hcnlMaW5rKX0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZ29CYWNrfSAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e3MucGFuZWxIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHN0cm9uZz57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zdHJvbmc+fVxuICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJtZXRhVGl0bGVcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMubWV0YVRpdGxlTGFiZWwpfSBwbGFjZWhvbGRlcj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5tZXRhVGl0bGVMYWJlbCl9IC8+XG4gICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm1ldGFEZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17cy50ZXh0YXJlYUlucHV0fSBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMubWV0YURlc2NyaXB0aW9uTGFiZWwpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5tZXRhRGVzY3JpcHRpb25MYWJlbCl9IC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXszfSBsZz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jb250ZW50TGFiZWx9IC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17OX0gbGc9ezl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJjb250ZW50XCIgY29tcG9uZW50PXt0aGlzLnJlbmRlclF1aWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UxfT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChidC50ZXh0QWxpZ25SaWdodCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU2l6ZT1cInNtYWxsXCIgY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5LCBidC5idG5MYXJnZSl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2F2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8dGV4dGFyZWEgLz47XG4gICAgfVxuICB9XG5cbn1cblxuRWRpdFN0YXRpY1BhZ2UgPSByZWR1eEZvcm0oe1xuICBmb3JtOiAnRWRpdFN0YXRpY1BhZ2UnLCAvLyBhIHVuaXF1ZSBuYW1lIGZvciB0aGlzIGZvcm1cbiAgdmFsaWRhdGVcbn0pKEVkaXRTdGF0aWNQYWdlKTtcblxuXG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgY2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocywgYnQpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShFZGl0U3RhdGljUGFnZSkpKTsiLCIvLyBBY3Rpb25cbmltcG9ydCB7IHVwZGF0ZVN0YXRpY1BhZ2VBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi91cGRhdGVTdGF0aWNQYWdlJztcblxuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdCh2YWx1ZXMsIGRpc3BhdGNoKSB7XG4gIGlmICh2YWx1ZXMuY29udGVudCA9PSBudWxsIHx8IHZhbHVlcy5jb250ZW50ID09ICc8cD48YnI+PC9wPicgfHwgdmFsdWVzLmNvbnRlbnQgPT0gJzxwPiA8L3A+Jykge1xuICAgIHRvYXN0ci5lcnJvcihcIkVycm9yXCIsIFwiUGxlYXNlIEFkZCAgQ29udGVudFwiKTtcbiAgfSBlbHNlIGlmICh2YWx1ZXMubWV0YVRpdGxlID09IG51bGwgfHwgdmFsdWVzLm1ldGFUaXRsZSAmJiB2YWx1ZXMubWV0YVRpdGxlLnRyaW0oKSA9PSAnJykge1xuICAgIHRvYXN0ci5lcnJvcihcIkVycm9yXCIsIFwiUGxlYXNlIEFkZCAgTWV0YSBUaXRsZVwiKTtcbiAgfSBlbHNlIGlmICh2YWx1ZXMubWV0YURlc2NyaXB0aW9uID09IG51bGwgfHwgdmFsdWVzLm1ldGFEZXNjcmlwdGlvbiAmJiB2YWx1ZXMubWV0YURlc2NyaXB0aW9uLnRyaW0oKSA9PSAnJykge1xuICAgIHRvYXN0ci5lcnJvcihcIkVycm9yXCIsIFwiUGxlYXNlIEFkZCAgTWV0YSBEZXNjcmlwdGlvblwiKTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBkaXNwYXRjaCh1cGRhdGVTdGF0aWNQYWdlQWN0aW9uKHZhbHVlcykpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VibWl0O1xuIiwiaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcblxuICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmNvbnRlbnQpIHtcbiAgICBlcnJvcnMuY29udGVudCA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5jb250ZW50ICYmIHZhbHVlcy5jb250ZW50LnRyaW0oKSA9PSAnJyApIHtcbiAgICBlcnJvcnMuY29udGVudCA9IG1lc3NhZ2VzLnJlcXVpcmVkLmRlZmF1bHRNZXNzYWdlO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMubWV0YVRpdGxlKSB7XG4gICAgZXJyb3JzLm1ldGFUaXRsZSA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5tZXRhVGl0bGUgJiYgdmFsdWVzLm1ldGFUaXRsZS50cmltKCkgPT0gJycgKSB7XG4gICAgZXJyb3JzLm1ldGFUaXRsZSA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5tZXRhVGl0bGUgJiYgdmFsdWVzLm1ldGFUaXRsZS5sZW5ndGggPiAyNTUpIHtcbiAgICBlcnJvcnMubWV0YVRpdGxlID0gbWVzc2FnZXMubWV0YVRpdGxlO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMubWV0YURlc2NyaXB0aW9uKSB7XG4gICAgZXJyb3JzLm1ldGFEZXNjcmlwdGlvbiA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5tZXRhRGVzY3JpcHRpb24gJiYgdmFsdWVzLm1ldGFEZXNjcmlwdGlvbi50cmltKCkgPT0gJycgKSB7XG4gICAgZXJyb3JzLm1ldGFEZXNjcmlwdGlvbiA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9ZWxzZSBpZiAodmFsdWVzLm1ldGFEZXNjcmlwdGlvbiAmJiB2YWx1ZXMubWV0YURlc2NyaXB0aW9uLmxlbmd0aCA+IDI1NSkge1xuICAgIGVycm9ycy5tZXRhRGVzY3JpcHRpb24gPSBtZXNzYWdlcy5tZXRhRGVzY3JpcHRpb247XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9FZGl0U3RhdGljUGFnZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRWRpdFN0YXRpY1BhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRWRpdFN0YXRpY1BhZ2UuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuLy8gU3R5bGVcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRWRpdFN0YXRpY1BhZ2UuY3NzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgRWRpdFN0YXRpY1BhZ2VNYW5hZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zaXRlYWRtaW4vRWRpdFN0YXRpY1BhZ2UvRWRpdFN0YXRpY1BhZ2UnO1xuXG4vLyBRdWVyeVxuaW1wb3J0IGVkaXRTdGF0aWNQYWdlIGZyb20gJy4vZWRpdFN0YXRpY1BhZ2UuZ3JhcGhxbCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vLi4vbm90Rm91bmQvTm90Rm91bmQnO1xuXG5cbmNsYXNzIEVkaXRTdGF0aWNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGJsb2dJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBlZGl0U3RhdGljUGFnZURhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIGdldEVkaXRTdGF0aWNQYWdlOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgICAgIH0pLFxuICAgIH07XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlZGl0U3RhdGljUGFnZURhdGEsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBcbiAgICAgICAgaWYoZWRpdFN0YXRpY1BhZ2VEYXRhICYmIGVkaXRTdGF0aWNQYWdlRGF0YS5nZXRFZGl0U3RhdGljUGFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChzLnBhZ2Vjb250ZW50V3JhcHBlcil9PjxOb3RGb3VuZCAvPjwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFZGl0U3RhdGljUGFnZU1hbmFnZVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX0gaW5pdGlhbFZhbHVlcz17ZWRpdFN0YXRpY1BhZ2VEYXRhLmdldEVkaXRTdGF0aWNQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBncmFwaHFsKGVkaXRTdGF0aWNQYWdlLCB7XG4gICAgICAgIG5hbWU6ICdlZGl0U3RhdGljUGFnZURhdGEnLFxuICAgICAgICBvcHRpb25zOiAocHJvcHMpID0+ICh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogcHJvcHMucGFnZUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgICB9KVxuICAgIH0pLFxuKShFZGl0U3RhdGljUGFnZSk7IiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEVkaXRTdGF0aWNQYWdlXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0RWRpdFN0YXRpY1BhZ2VcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBhZ2VOYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEF0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm1ldGFUaXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtZXRhRGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTgzfX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXQnO1xuaW1wb3J0IEVkaXRTdGF0aWNQYWdlIGZyb20gJy4vRWRpdFN0YXRpY1BhZ2UnO1xuaW1wb3J0IHsgcmVzdHJpY3RVcmxzIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hZG1pblByaXZpbGVnZXMnO1xuXG5jb25zdCB0aXRsZSA9ICdFZGl0IFBhZ2UgRGV0YWlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHN0b3JlLCBwYXJhbXMgfSkge1xuXG4gICAgLy8gRnJvbSBSZWR1eCBTdG9yZVxuICAgIGxldCBpc0FkbWluQXV0aGVudGljYXRlZCA9IHN0b3JlLmdldFN0YXRlKCkucnVudGltZS5pc0FkbWluQXV0aGVudGljYXRlZDtcbiAgICBsZXQgYWRtaW5Qcml2aWxlZ2VzID0gc3RvcmUuZ2V0U3RhdGUoKS5hZG1pblByZXZpbGVnZXMucHJpdmlsZWdlcyAmJiBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzLnByaXZpbGVnZXM7XG5cbiAgICBpZiAoIWlzQWRtaW5BdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbi9sb2dpbicgfTtcbiAgICB9XG5cbiAgICAvLyBBZG1pbiByZXN0cmljdGlvblxuICAgIGlmICghcmVzdHJpY3RVcmxzKCcvc2l0ZWFkbWluL2VkaXQvc3RhdGljcGFnZS8nLCBhZG1pblByaXZpbGVnZXMpKSB7XG4gICAgICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbicgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlSWQgPSBOdW1iZXIocGFyYW1zLnBhZ2VJZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29tcG9uZW50OiA8QWRtaW5MYXlvdXQ+PEVkaXRTdGF0aWNQYWdlIHRpdGxlPXt0aXRsZX0gcGFnZUlkPXtwYWdlSWR9IC8+PC9BZG1pbkxheW91dD4sXG4gICAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUE5QkE7QUErQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQXBEQTtBQXFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBREE7QUFWQTtBQWVBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWlHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBL0pBO0FBQ0E7QUFEQTtBQVlBO0FBQ0E7QUFGQTtBQUNBO0FBc0pBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7QUM1TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQXpCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUNBO0FBd0JBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFGQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==