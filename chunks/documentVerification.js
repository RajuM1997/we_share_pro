require("source-map-support").install();
exports.ids = ["documentVerification"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js!./src/components/DocumentUpload/filepicker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Filepicker CSS */\n.filepicker {\n    font-family: inherit;\n}\n\ndiv.filepicker {\n    text-align: center;\n    padding: 5px;\n    background-color: #FFFFFF;\n    border-radius: 5px;\n    min-height: 200px;\n    border: 2px dashed #C7C7C7;\n    margin-bottom: 15px;\n}\n\n/* Icon */\n.filepicker-file-icon\n{\n    position: relative;\n\n    display: inline-block;\n\n    margin: 1.5em 0 2.5em 0;\n    padding-left: 45px;\n\n    color: black;\n}\n.filepicker-file-icon::before\n{\n    position: absolute;\n    top: -7px;\n    left: 0;\n\n    width: 29px;\n    height: 34px;\n\n    content: '';\n\n    border: solid 2px #7F7F7F;\n    border-radius: 2px;\n}\n.filepicker-file-icon::after\n{\n    font-size: 11px;\n    line-height: 1.3;\n\n    position: absolute;\n    top: 9px;\n    left: -4px;\n\n    padding: 0 2px;\n\n    content: 'file';\n    content: attr(data-filetype);\n    text-align: right;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    color: #fff;\n    background-color: #000;\n}\n.filepicker-file-icon .fileCorner\n{\n    position: absolute;\n    top: -7px;\n    left: 22px;\n\n    width: 0;\n    height: 0;\n\n    border-width: 11px 0 0 11px;\n    border-style: solid;\n    border-color: white transparent transparent #920035;\n}\n\n.filepicker .dz-message {\n    margin: 6em auto;\n    color: #767676;\n    font-size: 18px;\n}\n\n.dropzone .dz-preview .dz-image{\n    z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/DocumentList/DocumentList.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.DocumentList-space1-Qi7aO {\n\tmargin-bottom: 6px !important;\n}\n.DocumentList-space2-c9WsR {\n\tmargin-bottom: 12px !important;\n}\n.DocumentList-space3-3YMOH {\n\tmargin-bottom: 18px !important;\n}\n.DocumentList-space4-1jhs3 {\n\tmargin-bottom: 24px !important;\n}\n.DocumentList-space5-3hMO6 {\n\tmargin-bottom: 30px !important;\n}\n.DocumentList-space6-16Srb {\n\tmargin-bottom: 36px !important;\n}\n.DocumentList-space7-pjgDt {\n\tmargin-bottom: 42px !important;\n}\n.DocumentList-spaceTop8-3-KhG {\n\tmargin-bottom: 48px !important;\n}\n.DocumentList-spaceTop1-3RKRQ {\n\tmargin-top: 6px !important;\n}\n.DocumentList-spaceTop2-KTFqR {\n\tmargin-top: 12px !important;\n}\n.DocumentList-spaceTop3-31qoM {\n\tmargin-top: 18px !important;\n}\n.DocumentList-spaceTop4-2CkJ1 {\n\tmargin-top: 24px !important;\n}\n.DocumentList-spaceTop5-16cYY {\n\tmargin-top: 30px !important;\n}\n.DocumentList-spaceTop6-3KSPg {\n\tmargin-top: 36px !important;\n}\n.DocumentList-spaceTop7-1UB4X {\n\tmargin-top: 42px !important;\n}\n.DocumentList-spaceTop8-3-KhG {\n\tmargin-top: 48px !important;\n}\n.DocumentList-noMargin-2dXnb {\n\tmargin: 0px !important;\n}\n.DocumentList-padding1-2Ejkm {\n\tpadding-bottom: 6px !important;\n}\n.DocumentList-padding2-3TQZ6 {\n\tpadding-bottom: 12px !important;\n}\n.DocumentList-padding3--tyYE {\n\tpadding-bottom: 18px !important;\n}\n.DocumentList-padding4-1jhKZ {\n\tpadding-bottom: 24px !important;\n}\n.DocumentList-padding5-2AjWD {\n\tpadding-bottom: 30px !important;\n}\n.DocumentList-padding6-336a9 {\n\tpadding-bottom: 36px !important;\n}\n.DocumentList-padding7-3rnHy {\n\tpadding-bottom: 42px !important;\n}\n.DocumentList-paddingTop1-3gN9k {\n\tpadding-top: 6px !important;\n}\n.DocumentList-paddingTop2-12VkA {\n\tpadding-top: 12px !important;\n}\n.DocumentList-paddingTop3-Jut_I {\n\tpadding-top: 18px !important;\n}\n.DocumentList-paddingTop4-1DDz- {\n\tpadding-top: 24px !important;\n}\n.DocumentList-paddingTop5-1mQ4x {\n\tpadding-top: 30px !important;\n}\n.DocumentList-paddingTop6-2_KD_ {\n\tpadding-top: 36px !important;\n}\n.DocumentList-paddingTop7-2W0Dz {\n\tpadding-top: 42px !important;\n}\n.DocumentList-noPadding-1X_VX {\n\tpadding: 0px !important;\n}\n.DocumentList-textBold-3iNne {\n\tfont-weight: 500 !important;\n}\n.DocumentList-textBolder-3kpcy {\n\tfont-weight: 700 !important;\n}\n.DocumentList-textNormal-3p6A3 {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.DocumentList-textDarkBlue-OVtvk {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.DocumentList-textLightBlue-3alCj {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.DocumentList-textLightSandleGreen-czewa {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.DocumentList-textLightBrown-3S8ut {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.DocumentList-textMediumMaroon-1o_nM {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.DocumentList-textBrown-NGk3M {\n\tcolor: #B5DC4B !important;\n}\n.DocumentList-textMaroon-25Hd3 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.DocumentList-textDarkBrown-2DWNi {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.DocumentList-textMediumBrown-EqIAz {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.DocumentList-textSkyBlue-Vev4q {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.DocumentList-textGray-1ThkG {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.DocumentList-listPhotoCover-65oJ2 {\n    display: block;\n    height: 185px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: relative;\n    vertical-align: bottom;\n    overflow: hidden;\n    background-color: #bbb;\n    text-align: center;\n    margin-top: 15px;\n}\n.DocumentList-listPhotoMedia-1_GqT {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n}\n.DocumentList-imgResponsive-3pTV7 {\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/DocumentList/DocumentList.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;IACI,eAAe;IACf,cAAc;IACd,oCAAoC;YAC5B,4BAA4B;IACpC,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,QAAQ;IACR,UAAU;IACV,OAAO;CACV;AACD;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;CACnB","file":"DocumentList.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.listPhotoCover {\n    display: block;\n    height: 185px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: relative;\n    vertical-align: bottom;\n    overflow: hidden;\n    background-color: #bbb;\n    text-align: center;\n    margin-top: 15px;\n}\n.listPhotoMedia {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n}\n.imgResponsive {\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "DocumentList-space1-Qi7aO",
	"space2": "DocumentList-space2-c9WsR",
	"space3": "DocumentList-space3-3YMOH",
	"space4": "DocumentList-space4-1jhs3",
	"space5": "DocumentList-space5-3hMO6",
	"space6": "DocumentList-space6-16Srb",
	"space7": "DocumentList-space7-pjgDt",
	"spaceTop8": "DocumentList-spaceTop8-3-KhG",
	"spaceTop1": "DocumentList-spaceTop1-3RKRQ",
	"spaceTop2": "DocumentList-spaceTop2-KTFqR",
	"spaceTop3": "DocumentList-spaceTop3-31qoM",
	"spaceTop4": "DocumentList-spaceTop4-2CkJ1",
	"spaceTop5": "DocumentList-spaceTop5-16cYY",
	"spaceTop6": "DocumentList-spaceTop6-3KSPg",
	"spaceTop7": "DocumentList-spaceTop7-1UB4X",
	"noMargin": "DocumentList-noMargin-2dXnb",
	"padding1": "DocumentList-padding1-2Ejkm",
	"padding2": "DocumentList-padding2-3TQZ6",
	"padding3": "DocumentList-padding3--tyYE",
	"padding4": "DocumentList-padding4-1jhKZ",
	"padding5": "DocumentList-padding5-2AjWD",
	"padding6": "DocumentList-padding6-336a9",
	"padding7": "DocumentList-padding7-3rnHy",
	"paddingTop1": "DocumentList-paddingTop1-3gN9k",
	"paddingTop2": "DocumentList-paddingTop2-12VkA",
	"paddingTop3": "DocumentList-paddingTop3-Jut_I",
	"paddingTop4": "DocumentList-paddingTop4-1DDz-",
	"paddingTop5": "DocumentList-paddingTop5-1mQ4x",
	"paddingTop6": "DocumentList-paddingTop6-2_KD_",
	"paddingTop7": "DocumentList-paddingTop7-2W0Dz",
	"noPadding": "DocumentList-noPadding-1X_VX",
	"textBold": "DocumentList-textBold-3iNne",
	"textBolder": "DocumentList-textBolder-3kpcy",
	"textNormal": "DocumentList-textNormal-3p6A3",
	"textDarkBlue": "DocumentList-textDarkBlue-OVtvk",
	"textLightBlue": "DocumentList-textLightBlue-3alCj",
	"textLightSandleGreen": "DocumentList-textLightSandleGreen-czewa",
	"textLightBrown": "DocumentList-textLightBrown-3S8ut",
	"textMediumMaroon": "DocumentList-textMediumMaroon-1o_nM",
	"textBrown": "DocumentList-textBrown-NGk3M",
	"textMaroon": "DocumentList-textMaroon-25Hd3",
	"textDarkBrown": "DocumentList-textDarkBrown-2DWNi",
	"textMediumBrown": "DocumentList-textMediumBrown-EqIAz",
	"textSkyBlue": "DocumentList-textSkyBlue-Vev4q",
	"textGray": "DocumentList-textGray-1ThkG",
	"listPhotoCover": "DocumentList-listPhotoCover-65oJ2",
	"listPhotoMedia": "DocumentList-listPhotoMedia-1_GqT",
	"imgResponsive": "DocumentList-imgResponsive-3pTV7"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/documentVerification/DocumentVerification.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.DocumentVerification-root-2Vq-R {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.DocumentVerification-container-3d-DR {\n  margin: 0 auto;\n  padding-top: 30px;\n  max-width: 1080px;\n  max-width: var(--max-content-width);\n}\n.DocumentVerification-infoTitle-2dD7E {\n    color: #484848;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 0px;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/documentVerification/DocumentVerification.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;CACrC;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;CACnB","file":"DocumentVerification.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.container {\n  margin: 0 auto;\n  padding-top: 30px;\n  max-width: 1080px;\n  max-width: var(--max-content-width);\n}\n.infoTitle {\n    color: #484848;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 0px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "DocumentVerification-root-2Vq-R",
	"container": "DocumentVerification-container-3d-DR",
	"infoTitle": "DocumentVerification-infoTitle-2dD7E"
};

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./src/components/DocumentUpload/filepicker.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js!./src/components/DocumentUpload/filepicker.css");
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

/***/ "./public/SiteIcons/pdf_image.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/SiteIcons/pdf_image.png?dfb7987e";

/***/ }),

/***/ "./src/components/DocumentList/DocumentList.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/DocumentList/DocumentList.css");
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

/***/ "./src/components/DocumentList/DocumentList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DocumentList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/DocumentList/DocumentList.css");
/* harmony import */ var _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DocumentList_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/SiteIcons/pdf_image.png");
/* harmony import */ var _public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/DocumentList/ShowListDocument.graphql");
/* harmony import */ var _ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/DocumentList/RemoveDocumentList.graphql");
/* harmony import */ var _RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/DocumentList/DocumentList.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style




 //pdf image

 //GraphGL


 //toastr

 // Locale



class DocumentList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(id, fileName) {
    const {
      mutate
    } = this.props;
    const {
      data
    } = await mutate({
      RemoveDocumentList: (_RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9___default()),
      variables: {
        id
      },
      refetchQueries: [{
        query: _ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8___default.a
      }]
    });

    if (data && data.RemoveDocumentList && data.RemoveDocumentList.status == "success") {
      const resp = await fetch('/deleteDocuments', {
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
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__["toastr"].success("Success!", "Document has been removed successfully!");
    }
  }

  render() {
    const {
      data: {
        ShowDocumentList
      },
      data
    } = this.props;
    let path = "/images/document/";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('row', _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.space2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    }, ShowDocumentList && ShowDocumentList.map((item, key) => {
      let icon = item.fileType == 'application/pdf' ? _public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7___default.a : path + item.fileName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: key,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: path + item.fileName,
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.listPhotoCover,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.listPhotoMedia,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.imgResponsive,
        src: icon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 23
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: () => this.handleClick(item.id, item.fileName),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].removeFile, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 19
        }
      }))));
    }));
  }

}

_defineProperty(DocumentList, "defaultProps", {
  data: {
    loading: true,
    showDocumentList: []
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
  options: {
    fetchPolicy: 'network-only'
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
  options: {
    fetchPolicy: 'network-only'
  }
}))(DocumentList));

/***/ }),

/***/ "./src/components/DocumentList/RemoveDocumentList.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RemoveDocumentList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photosCount"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":86}};

module.exports = doc;

/***/ }),

/***/ "./src/components/DocumentList/ShowListDocument.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowDocumentList"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowDocumentList"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fileName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fileType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":103}};

module.exports = doc;

/***/ }),

/***/ "./src/components/DocumentUpload/DocumentUpload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-dropzone-component");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./src/components/DocumentUpload/filepicker.css");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DocumentList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/DocumentList/DocumentList.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/DocumentUpload/DocumentUpload.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Style

 // Component

 //compose


const query = react_apollo__WEBPACK_IMPORTED_MODULE_9__["gql"]`query ShowDocumentList {
    ShowDocumentList {
        id
        userId,
        fileName,
        fileType
    }
  }`;

class DocumentUpload extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.complete = this.complete.bind(this);
    this.dropzone = null;
  }

  componentDidMount() {
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
    /*const { listId, createListPhotos } = this.props;
    const { files } = fromServer;
    let fileName = files[0].filename;
    let fileType = files[0].mimetype;
    // Calling Redux action to create a record for uploaded file
    if(listId != undefined) {
      createListPhotos(listId, fileName, fileType);
    }*/
  }

  async complete(file) {
    const {
      mutate
    } = this.props;
    let variables = {};

    if (file && file.xhr) {
      const {
        files
      } = JSON.parse(file.xhr.response);
      let fileName = files[0].filename;
      let fileType = files[0].mimetype;
      variables = {
        fileName,
        fileType
      };
      const {
        data
      } = await mutate({
        variables,
        refetchQueries: [{
          query
        }]
      });

      if (data && data.uploadDocument) {
        if (data.uploadDocument.status === 'success') {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].success("Success!", "Your document has been uploaded successfully!");
        } else {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error("Error!", "Something went wrong!");
        }
      }
    }

    this.dropzone.removeFile(file);
  }

  render() {
    const {
      placeholder,
      listId
    } = this.props;
    const djsConfig = {
      dictDefaultMessage: placeholder,
      addRemoveLinks: false,
      maxFilesize: 10,
      maxFiles: 10,
      acceptedFiles: 'image/*,application/pdf',
      hiddenInputContainer: '.dzInputContainer'
    };
    const componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.pdf'],
      postUrl: '/documents'
    };
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      success: this.success,
      complete: this.complete
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('listPhotoContainer'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('dzInputContainer'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
      config: componentConfig,
      eventHandlers: eventHandlers,
      djsConfig: djsConfig,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DocumentList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }));
  }

}

_defineProperty(DocumentUpload, "propTypes", {});

const mapState = state => ({});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(react_apollo__WEBPACK_IMPORTED_MODULE_9__["gql"]`mutation uploadDocument($fileName: String,$fileType: String,){
     uploadDocument(
       fileName: $fileName,
       fileType: $fileType
     ) {    
         fileName
         fileType
         status        
        }
 }`), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch))(DocumentUpload));

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Layout/Layout.css");
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Header/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Footer/Footer.js");
/* harmony import */ var _CookiesDisclaimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/CookiesDisclaimer/CookiesDisclaimer.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Layout/Layout.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Layout_css__WEBPACK_IMPORTED_MODULE_3___default.a.paddingTop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CookiesDisclaimer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }));
  }

}

_defineProperty(Layout, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Layout));

/***/ }),

/***/ "./src/routes/documentVerification/DocumentVerification.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/documentVerification/DocumentVerification.css");
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

/***/ "./src/routes/documentVerification/DocumentVerification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/documentVerification/DocumentVerification.css");
/* harmony import */ var _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DocumentUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/DocumentUpload/DocumentUpload.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_EditProfileSideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/EditProfileSideMenu/EditProfileSideMenu.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/documentVerification/DocumentVerification.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Translation

 // Locale



class DocumentVerification extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      formatMessage
    } = this.props.intl;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.landingContainer),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 3,
      md: 3,
      lg: 3,
      className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.smPadding,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditProfileSideMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 9,
      md: 9,
      lg: 9,
      className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.smPadding,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.infoTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].documentverificaiton, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentUpload__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].documentUploadPlaceholder),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    })))));
  }

}

_defineProperty(DocumentVerification, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a)(DocumentVerification)));

/***/ }),

/***/ "./src/routes/documentVerification/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/UserLayout.js");
/* harmony import */ var _DocumentVerification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/documentVerification/DocumentVerification.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/documentVerification/index.js";




const title = 'DocumentVerification';
function action({
  store
}) {
  // From Redux Store
  let isAuthenticated = store.getState().runtime.isAuthenticated;

  if (!isAuthenticated) {
    return {
      redirect: '/login'
    };
  }

  let account = store.getState().account;

  if (account) {
    let document = account.data.verification.isIdVerification;

    if (document == true) {
      return {
        redirect: '/user/verification'
      };
    }
  }

  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DocumentVerification__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 28
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2RvY3VtZW50VmVyaWZpY2F0aW9uLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9Eb2N1bWVudFVwbG9hZC9maWxlcGlja2VyLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50TGlzdC9Eb2N1bWVudExpc3QuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9kb2N1bWVudFZlcmlmaWNhdGlvbi9Eb2N1bWVudFZlcmlmaWNhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRVcGxvYWQvZmlsZXBpY2tlci5jc3M/NjI5YSIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9TaXRlSWNvbnMvcGRmX2ltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Eb2N1bWVudExpc3QvRG9jdW1lbnRMaXN0LmNzcz9hMjZlIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0L0RvY3VtZW50TGlzdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50TGlzdC9SZW1vdmVEb2N1bWVudExpc3QuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50TGlzdC9TaG93TGlzdERvY3VtZW50LmdyYXBocWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9Eb2N1bWVudFVwbG9hZC9Eb2N1bWVudFVwbG9hZC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9kb2N1bWVudFZlcmlmaWNhdGlvbi9Eb2N1bWVudFZlcmlmaWNhdGlvbi5jc3M/ZDc5NiIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvZG9jdW1lbnRWZXJpZmljYXRpb24vRG9jdW1lbnRWZXJpZmljYXRpb24uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL2RvY3VtZW50VmVyaWZpY2F0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRmlsZXBpY2tlciBDU1MgKi9cXG4uZmlsZXBpY2tlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5kaXYuZmlsZXBpY2tlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0M3QzdDNztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLyogSWNvbiAqL1xcbi5maWxlcGlja2VyLWZpbGUtaWNvblxcbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIG1hcmdpbjogMS41ZW0gMCAyLjVlbSAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XFxuXFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmZpbGVwaWNrZXItZmlsZS1pY29uOjpiZWZvcmVcXG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB3aWR0aDogMjlweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcblxcbiAgICBjb250ZW50OiAnJztcXG5cXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzdGN0Y3RjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uZmlsZXBpY2tlci1maWxlLWljb246OmFmdGVyXFxue1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA5cHg7XFxuICAgIGxlZnQ6IC00cHg7XFxuXFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcblxcbiAgICBjb250ZW50OiAnZmlsZSc7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1maWxldHlwZSk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuLmZpbGVwaWNrZXItZmlsZS1pY29uIC5maWxlQ29ybmVyXFxue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgbGVmdDogMjJweDtcXG5cXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG5cXG4gICAgYm9yZGVyLXdpZHRoOiAxMXB4IDAgMCAxMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5MjAwMzU7XFxufVxcblxcbi5maWxlcGlja2VyIC5kei1tZXNzYWdlIHtcXG4gICAgbWFyZ2luOiA2ZW0gYXV0bztcXG4gICAgY29sb3I6ICM3Njc2NzY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1pbWFnZXtcXG4gICAgei1pbmRleDogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2UxLVFpN2FPIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTItYzlXc1Ige1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTMtM1lNT0gge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTQtMWpoczMge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTUtM2hNTzYge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTYtMTZTcmIge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTctcGpnRHQge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZVRvcDgtMy1LaEcge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZVRvcDEtM1JLUlEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wMi1LVEZxUiB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wMy0zMXFvTSB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wNC0yQ2tKMSB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wNS0xNmNZWSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wNi0zS1NQZyB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wNy0xVUI0WCB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wOC0zLUtoRyB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LW5vTWFyZ2luLTJkWG5iIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmcxLTJFamttIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzItM1RRWjYge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzMtLXR5WUUge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzQtMWpoS1oge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzUtMkFqV0Qge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzYtMzM2YTkge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzctM3JuSHkge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZ1RvcDEtM2dOOWsge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wMi0xMlZrQSB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wMy1KdXRfSSB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNC0xRER6LSB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNS0xbVE0eCB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNi0yX0tEXyB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNy0yVzBEeiB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1ub1BhZGRpbmctMVhfVlgge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRCb2xkLTNpTm5lIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dEJvbGRlci0za3BjeSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHROb3JtYWwtM3A2QTMge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLkRvY3VtZW50TGlzdC10ZXh0RGFya0JsdWUtT1Z0dmsge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0TGlnaHRCbHVlLTNhbENqIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRMaWdodFNhbmRsZUdyZWVuLWN6ZXdhIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dExpZ2h0QnJvd24tM1M4dXQge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dE1lZGl1bU1hcm9vbi0xb19uTSB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRCcm93bi1OR2szTSB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0TWFyb29uLTI1SGQzIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHREYXJrQnJvd24tMkRXTmkge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0TWVkaXVtQnJvd24tRXFJQXoge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dFNreUJsdWUtVmV2NHEge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRHcmF5LTFUaGtHIHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtbGlzdFBob3RvQ292ZXItNjVvSjIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxODVweDtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLkRvY3VtZW50TGlzdC1saXN0UGhvdG9NZWRpYS0xX0dxVCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiAwO1xcbn1cXG4uRG9jdW1lbnRMaXN0LWltZ1Jlc3BvbnNpdmUtM3BUVjcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9Eb2N1bWVudExpc3QvRG9jdW1lbnRMaXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztBQUNEO0NBQ0MsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyx3QkFBd0I7Q0FDeEI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRCwyQkFBMkI7QUFDM0I7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxvQ0FBb0M7Q0FDcEM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxvQ0FBb0M7WUFDNUIsNEJBQTRCO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztDQUNWO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiRG9jdW1lbnRMaXN0LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uc3BhY2UxIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTQge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U2IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTcge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AxIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMiB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AzIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDQge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A2IHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDcge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzIge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzUge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc3IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDEge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AyIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDMge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNCB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A1IHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDYge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNyB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLm5vUGFkZGluZyB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGRlciB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE5vcm1hbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4udGV4dERhcmtCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0U2FuZGxlR3JlZW4ge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bU1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJyb3duIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLnRleHREYXJrQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1Ccm93biB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRTa3lCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRHcmF5IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5saXN0UGhvdG9Db3ZlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDE4NXB4O1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ubGlzdFBob3RvTWVkaWEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRvcDogMDtcXG59XFxuLmltZ1Jlc3BvbnNpdmUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzcGFjZTFcIjogXCJEb2N1bWVudExpc3Qtc3BhY2UxLVFpN2FPXCIsXG5cdFwic3BhY2UyXCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlMi1jOVdzUlwiLFxuXHRcInNwYWNlM1wiOiBcIkRvY3VtZW50TGlzdC1zcGFjZTMtM1lNT0hcIixcblx0XCJzcGFjZTRcIjogXCJEb2N1bWVudExpc3Qtc3BhY2U0LTFqaHMzXCIsXG5cdFwic3BhY2U1XCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlNS0zaE1PNlwiLFxuXHRcInNwYWNlNlwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZTYtMTZTcmJcIixcblx0XCJzcGFjZTdcIjogXCJEb2N1bWVudExpc3Qtc3BhY2U3LXBqZ0R0XCIsXG5cdFwic3BhY2VUb3A4XCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlVG9wOC0zLUtoR1wiLFxuXHRcInNwYWNlVG9wMVwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZVRvcDEtM1JLUlFcIixcblx0XCJzcGFjZVRvcDJcIjogXCJEb2N1bWVudExpc3Qtc3BhY2VUb3AyLUtURnFSXCIsXG5cdFwic3BhY2VUb3AzXCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlVG9wMy0zMXFvTVwiLFxuXHRcInNwYWNlVG9wNFwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZVRvcDQtMkNrSjFcIixcblx0XCJzcGFjZVRvcDVcIjogXCJEb2N1bWVudExpc3Qtc3BhY2VUb3A1LTE2Y1lZXCIsXG5cdFwic3BhY2VUb3A2XCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlVG9wNi0zS1NQZ1wiLFxuXHRcInNwYWNlVG9wN1wiOiBcIkRvY3VtZW50TGlzdC1zcGFjZVRvcDctMVVCNFhcIixcblx0XCJub01hcmdpblwiOiBcIkRvY3VtZW50TGlzdC1ub01hcmdpbi0yZFhuYlwiLFxuXHRcInBhZGRpbmcxXCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmcxLTJFamttXCIsXG5cdFwicGFkZGluZzJcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZzItM1RRWjZcIixcblx0XCJwYWRkaW5nM1wiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nMy0tdHlZRVwiLFxuXHRcInBhZGRpbmc0XCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmc0LTFqaEtaXCIsXG5cdFwicGFkZGluZzVcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZzUtMkFqV0RcIixcblx0XCJwYWRkaW5nNlwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nNi0zMzZhOVwiLFxuXHRcInBhZGRpbmc3XCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmc3LTNybkh5XCIsXG5cdFwicGFkZGluZ1RvcDFcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZ1RvcDEtM2dOOWtcIixcblx0XCJwYWRkaW5nVG9wMlwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wMi0xMlZrQVwiLFxuXHRcInBhZGRpbmdUb3AzXCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3AzLUp1dF9JXCIsXG5cdFwicGFkZGluZ1RvcDRcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZ1RvcDQtMUREei1cIixcblx0XCJwYWRkaW5nVG9wNVwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNS0xbVE0eFwiLFxuXHRcInBhZGRpbmdUb3A2XCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3A2LTJfS0RfXCIsXG5cdFwicGFkZGluZ1RvcDdcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZ1RvcDctMlcwRHpcIixcblx0XCJub1BhZGRpbmdcIjogXCJEb2N1bWVudExpc3Qtbm9QYWRkaW5nLTFYX1ZYXCIsXG5cdFwidGV4dEJvbGRcIjogXCJEb2N1bWVudExpc3QtdGV4dEJvbGQtM2lObmVcIixcblx0XCJ0ZXh0Qm9sZGVyXCI6IFwiRG9jdW1lbnRMaXN0LXRleHRCb2xkZXItM2twY3lcIixcblx0XCJ0ZXh0Tm9ybWFsXCI6IFwiRG9jdW1lbnRMaXN0LXRleHROb3JtYWwtM3A2QTNcIixcblx0XCJ0ZXh0RGFya0JsdWVcIjogXCJEb2N1bWVudExpc3QtdGV4dERhcmtCbHVlLU9WdHZrXCIsXG5cdFwidGV4dExpZ2h0Qmx1ZVwiOiBcIkRvY3VtZW50TGlzdC10ZXh0TGlnaHRCbHVlLTNhbENqXCIsXG5cdFwidGV4dExpZ2h0U2FuZGxlR3JlZW5cIjogXCJEb2N1bWVudExpc3QtdGV4dExpZ2h0U2FuZGxlR3JlZW4tY3pld2FcIixcblx0XCJ0ZXh0TGlnaHRCcm93blwiOiBcIkRvY3VtZW50TGlzdC10ZXh0TGlnaHRCcm93bi0zUzh1dFwiLFxuXHRcInRleHRNZWRpdW1NYXJvb25cIjogXCJEb2N1bWVudExpc3QtdGV4dE1lZGl1bU1hcm9vbi0xb19uTVwiLFxuXHRcInRleHRCcm93blwiOiBcIkRvY3VtZW50TGlzdC10ZXh0QnJvd24tTkdrM01cIixcblx0XCJ0ZXh0TWFyb29uXCI6IFwiRG9jdW1lbnRMaXN0LXRleHRNYXJvb24tMjVIZDNcIixcblx0XCJ0ZXh0RGFya0Jyb3duXCI6IFwiRG9jdW1lbnRMaXN0LXRleHREYXJrQnJvd24tMkRXTmlcIixcblx0XCJ0ZXh0TWVkaXVtQnJvd25cIjogXCJEb2N1bWVudExpc3QtdGV4dE1lZGl1bUJyb3duLUVxSUF6XCIsXG5cdFwidGV4dFNreUJsdWVcIjogXCJEb2N1bWVudExpc3QtdGV4dFNreUJsdWUtVmV2NHFcIixcblx0XCJ0ZXh0R3JheVwiOiBcIkRvY3VtZW50TGlzdC10ZXh0R3JheS0xVGhrR1wiLFxuXHRcImxpc3RQaG90b0NvdmVyXCI6IFwiRG9jdW1lbnRMaXN0LWxpc3RQaG90b0NvdmVyLTY1b0oyXCIsXG5cdFwibGlzdFBob3RvTWVkaWFcIjogXCJEb2N1bWVudExpc3QtbGlzdFBob3RvTWVkaWEtMV9HcVRcIixcblx0XCJpbWdSZXNwb25zaXZlXCI6IFwiRG9jdW1lbnRMaXN0LWltZ1Jlc3BvbnNpdmUtM3BUVjdcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkRvY3VtZW50VmVyaWZpY2F0aW9uLXJvb3QtMlZxLVIge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuLkRvY3VtZW50VmVyaWZpY2F0aW9uLWNvbnRhaW5lci0zZC1EUiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XFxuLkRvY3VtZW50VmVyaWZpY2F0aW9uLWluZm9UaXRsZS0yZEQ3RSB7XFxuICAgIGNvbG9yOiAjNDg0ODQ4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvZG9jdW1lbnRWZXJpZmljYXRpb24vRG9jdW1lbnRWZXJpZmljYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQ0FBb0M7Q0FDckM7QUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiRG9jdW1lbnRWZXJpZmljYXRpb24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5yb290IHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIG1heC13aWR0aDogMTA4MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcbi5pbmZvVGl0bGUge1xcbiAgICBjb2xvcjogIzQ4NDg0ODtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiRG9jdW1lbnRWZXJpZmljYXRpb24tcm9vdC0yVnEtUlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkRvY3VtZW50VmVyaWZpY2F0aW9uLWNvbnRhaW5lci0zZC1EUlwiLFxuXHRcImluZm9UaXRsZVwiOiBcIkRvY3VtZW50VmVyaWZpY2F0aW9uLWluZm9UaXRsZS0yZEQ3RVwiXG59OyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvU2l0ZUljb25zL3BkZl9pbWFnZS5wbmc/ZGZiNzk4N2VcIjsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50TGlzdC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRG9jdW1lbnRMaXN0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50TGlzdC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuLy8gU3R5bGVcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRG9jdW1lbnRMaXN0LmNzcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbi8vcGRmIGltYWdlXG5pbXBvcnQgcGRmSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvU2l0ZUljb25zL3BkZl9pbWFnZS5wbmcnO1xuXG4vL0dyYXBoR0xcbmltcG9ydCBTaG93RG9jdW1lbnRMaXN0UXVlcnkgZnJvbSAnLi9TaG93TGlzdERvY3VtZW50LmdyYXBocWwnO1xuaW1wb3J0IFJlbW92ZURvY3VtZW50TGlzdCBmcm9tICcuL1JlbW92ZURvY3VtZW50TGlzdC5ncmFwaHFsJztcblxuLy90b2FzdHJcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIERvY3VtZW50TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc2hvd0RvY3VtZW50TGlzdDogW11cbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVDbGljayhpZCwgZmlsZU5hbWUpIHtcbiAgICBjb25zdCB7IG11dGF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbXV0YXRlKHtcbiAgICAgIFJlbW92ZURvY3VtZW50TGlzdCxcbiAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBTaG93RG9jdW1lbnRMaXN0UXVlcnkgfV1cbiAgICB9KTtcblxuXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5SZW1vdmVEb2N1bWVudExpc3QgJiYgZGF0YS5SZW1vdmVEb2N1bWVudExpc3Quc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9kZWxldGVEb2N1bWVudHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlTmFtZSB9KSxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzIVwiLCBcIkRvY3VtZW50IGhhcyBiZWVuIHJlbW92ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGE6IHsgU2hvd0RvY3VtZW50TGlzdCB9LCBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwYXRoID0gXCIvaW1hZ2VzL2RvY3VtZW50L1wiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgncm93Jywgcy5zcGFjZTIpfT5cbiAgICAgICAge1xuICAgICAgICAgIFNob3dEb2N1bWVudExpc3QgJiYgU2hvd0RvY3VtZW50TGlzdC5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IGljb24gPSBpdGVtLmZpbGVUeXBlID09ICdhcHBsaWNhdGlvbi9wZGYnID8gcGRmSWNvbiA6IChwYXRoICsgaXRlbS5maWxlTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e2N4KCdjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTIgdGV4dC1jZW50ZXInKX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cGF0aCArIGl0ZW0uZmlsZU5hbWV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdFBob3RvQ292ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0UGhvdG9NZWRpYX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3MuaW1nUmVzcG9uc2l2ZX0gc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soaXRlbS5pZCwgaXRlbS5maWxlTmFtZSl9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlbW92ZUZpbGV9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3R5bGVzKHMpLFxuICBncmFwaHFsKFNob3dEb2N1bWVudExpc3RRdWVyeSwge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgIH1cbiAgfSksXG4gIGdyYXBocWwoUmVtb3ZlRG9jdW1lbnRMaXN0LCB7XG4gICAgb3B0aW9uczoge1xuICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknXG4gICAgfVxuICB9KSxcbikoRG9jdW1lbnRMaXN0KTtcblxuXG5cblxuXG4iLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwibXV0YXRpb25cIixcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSW50XCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlJlbW92ZURvY3VtZW50TGlzdFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBob3Rvc0NvdW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjg2fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93RG9jdW1lbnRMaXN0XCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dEb2N1bWVudExpc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VySWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlsZU5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlsZVR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTAzfX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBEcm9wem9uZUNvbXBvbmVudCBmcm9tICdyZWFjdC1kcm9wem9uZS1jb21wb25lbnQnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHMgZnJvbSAnIWlzb21vcnBoaWMtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9maWxlcGlja2VyLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IERvY3VtZW50TGlzdCBmcm9tICcuLi9Eb2N1bWVudExpc3QnO1xuXG4vL2NvbXBvc2VcbmltcG9ydCB7IGdyYXBocWwsIGdxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYHF1ZXJ5IFNob3dEb2N1bWVudExpc3Qge1xuICAgIFNob3dEb2N1bWVudExpc3Qge1xuICAgICAgICBpZFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIGZpbGVOYW1lLFxuICAgICAgICBmaWxlVHlwZVxuICAgIH1cbiAgfWA7XG5cbmNsYXNzIERvY3VtZW50VXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuc3VjY2Vzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICBjb25zdCBpc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBpc0RvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1oaWRkZW4taW5wdXRcIikuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1oaWRkZW4taW5wdXRcIikuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIH1cbiAgfVxuXG4gIHN1Y2Nlc3MoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgIC8qY29uc3QgeyBsaXN0SWQsIGNyZWF0ZUxpc3RQaG90b3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWxlcyB9ID0gZnJvbVNlcnZlcjtcbiAgICBsZXQgZmlsZU5hbWUgPSBmaWxlc1swXS5maWxlbmFtZTtcbiAgICBsZXQgZmlsZVR5cGUgPSBmaWxlc1swXS5taW1ldHlwZTtcbiAgICAvLyBDYWxsaW5nIFJlZHV4IGFjdGlvbiB0byBjcmVhdGUgYSByZWNvcmQgZm9yIHVwbG9hZGVkIGZpbGVcbiAgICBpZihsaXN0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjcmVhdGVMaXN0UGhvdG9zKGxpc3RJZCwgZmlsZU5hbWUsIGZpbGVUeXBlKTtcbiAgICB9Ki9cbiAgfVxuXG4gIGFzeW5jIGNvbXBsZXRlKGZpbGUpIHtcbiAgICBjb25zdCB7IG11dGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdmFyaWFibGVzID0ge307XG4gICAgaWYgKGZpbGUgJiYgZmlsZS54aHIpIHtcbiAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IEpTT04ucGFyc2UoZmlsZS54aHIucmVzcG9uc2UpO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZXNbMF0uZmlsZW5hbWU7XG4gICAgICBsZXQgZmlsZVR5cGUgPSBmaWxlc1swXS5taW1ldHlwZTtcbiAgICAgIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgIGZpbGVUeXBlXG4gICAgICB9O1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBtdXRhdGUoe1xuICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEudXBsb2FkRG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGRhdGEudXBsb2FkRG9jdW1lbnQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiWW91ciBkb2N1bWVudCBoYXMgYmVlbiB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycm9yIVwiLCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZmlsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwbGFjZWhvbGRlciwgbGlzdElkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRqc0NvbmZpZyA9IHtcbiAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogcGxhY2Vob2xkZXIsXG4gICAgICBhZGRSZW1vdmVMaW5rczogZmFsc2UsXG4gICAgICBtYXhGaWxlc2l6ZTogMTAsXG4gICAgICBtYXhGaWxlczogMTAsXG4gICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKixhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgaGlkZGVuSW5wdXRDb250YWluZXI6ICcuZHpJbnB1dENvbnRhaW5lcidcbiAgICB9O1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHtcbiAgICAgIGljb25GaWxldHlwZXM6IFsnLmpwZycsICcucG5nJywgJy5wZGYnXSxcbiAgICAgIHBvc3RVcmw6ICcvZG9jdW1lbnRzJ1xuICAgIH07XG4gICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgIGluaXQ6IGR6ID0+IHRoaXMuZHJvcHpvbmUgPSBkeixcbiAgICAgIHN1Y2Nlc3M6IHRoaXMuc3VjY2VzcyxcbiAgICAgIGNvbXBsZXRlOiB0aGlzLmNvbXBsZXRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdsaXN0UGhvdG9Db250YWluZXInKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZHpJbnB1dENvbnRhaW5lcicpfT5cbiAgICAgICAgICA8RHJvcHpvbmVDb21wb25lbnRcbiAgICAgICAgICAgIGNvbmZpZz17Y29tcG9uZW50Q29uZmlnfVxuICAgICAgICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAgICAgICAgIGRqc0NvbmZpZz17ZGpzQ29uZmlnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RG9jdW1lbnRMaXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7fSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aFN0eWxlcyhzKSxcblxuICBncmFwaHFsKGdxbGBtdXRhdGlvbiB1cGxvYWREb2N1bWVudCgkZmlsZU5hbWU6IFN0cmluZywkZmlsZVR5cGU6IFN0cmluZywpe1xuICAgICB1cGxvYWREb2N1bWVudChcbiAgICAgICBmaWxlTmFtZTogJGZpbGVOYW1lLFxuICAgICAgIGZpbGVUeXBlOiAkZmlsZVR5cGVcbiAgICAgKSB7ICAgIFxuICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgIGZpbGVUeXBlXG4gICAgICAgICBzdGF0dXMgICAgICAgIFxuICAgICAgICB9XG4gfWBcbiAgKSxcbiAgKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKSkpXG4gIChEb2N1bWVudFVwbG9hZCk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IHMgZnJvbSBcIi4vTGF5b3V0LmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBDb29raWVzRGlzY2xhaW1lciBmcm9tIFwiLi4vQ29va2llc0Rpc2NsYWltZXJcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucGFkZGluZ1RvcH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENvb2tpZXNEaXNjbGFpbWVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTGF5b3V0KTtcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRG9jdW1lbnRWZXJpZmljYXRpb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50VmVyaWZpY2F0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50VmVyaWZpY2F0aW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRG9jdW1lbnRWZXJpZmljYXRpb24uY3NzJztcblxuaW1wb3J0IERvY3VtZW50VXBsb2FkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRG9jdW1lbnRVcGxvYWQnO1xuXG5pbXBvcnQge1xuICBHcmlkLFxuICBSb3csXG4gIENvbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBFZGl0UHJvZmlsZVNpZGVNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRWRpdFByb2ZpbGVTaWRlTWVudSc7XG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgaW5qZWN0SW50bCwgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgRG9jdW1lbnRWZXJpZmljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxHcmlkIGZsdWlkPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17M30gbWQ9ezN9IGxnPXszfSBjbGFzc05hbWU9e3Muc21QYWRkaW5nfT5cbiAgICAgICAgICAgICAgPEVkaXRQcm9maWxlU2lkZU1lbnUgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs5fSBtZD17OX0gbGc9ezl9IGNsYXNzTmFtZT17cy5zbVBhZGRpbmd9PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzLmluZm9UaXRsZX0+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmRvY3VtZW50dmVyaWZpY2FpdG9ufSAvPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8RG9jdW1lbnRVcGxvYWQgcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZG9jdW1lbnRVcGxvYWRQbGFjZWhvbGRlcil9IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocykoRG9jdW1lbnRWZXJpZmljYXRpb24pKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuaW1wb3J0IFVzZXJMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvVXNlckxheW91dCc7XG5cbmltcG9ydCBEb2N1bWVudFZlcmlmaWNhdGlvbiBmcm9tICcuL0RvY3VtZW50VmVyaWZpY2F0aW9uJztcblxuY29uc3QgdGl0bGUgPSAnRG9jdW1lbnRWZXJpZmljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3Rpb24oeyBzdG9yZSB9KSB7XG5cbiAgLy8gRnJvbSBSZWR1eCBTdG9yZVxuICBsZXQgaXNBdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQXV0aGVudGljYXRlZDtcblxuXG4gIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvbG9naW4nIH07XG4gIH1cblxuXG4gIGxldCBhY2NvdW50ID0gc3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50O1xuXG4gIGlmIChhY2NvdW50KSB7XG4gICAgbGV0IGRvY3VtZW50ID0gYWNjb3VudC5kYXRhLnZlcmlmaWNhdGlvbi5pc0lkVmVyaWZpY2F0aW9uO1xuICAgIGlmIChkb2N1bWVudCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4geyByZWRpcmVjdDogJy91c2VyL3ZlcmlmaWNhdGlvbicgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogPFVzZXJMYXlvdXQ+PERvY3VtZW50VmVyaWZpY2F0aW9uIHRpdGxlPXt0aXRsZX0gLz48L1VzZXJMYXlvdXQ+LFxuICB9O1xufVxuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFwRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBbUVBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFEQTs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQS9GQTtBQUNBO0FBREE7QUFDQTtBQWlHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBakJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQWlCQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQTFCQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==