require("source-map-support").install();
exports.ids = ["cancel"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js!./node_modules/react-geosuggest/module/geosuggest.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * The geosuggest module\n * NOTE: duplicated font-sizes' are for browsers which don't support rem (only IE 8)\n */\n.geosuggest {\n  font-size: 18px;\n  font-size: 1rem;\n  position: relative;\n  width: 50%;\n  margin: 1em auto;\n  text-align: left;\n}\n.geosuggest__input {\n  width: 100%;\n  border: 2px solid transparent;\n  box-shadow: 0 0 1px #3d464d;\n  padding: .5em 1em;\n  -webkit-transition: border 0.2s, box-shadow 0.2s;\n          transition: border 0.2s, box-shadow 0.2s;\n}\n.geosuggest__input:focus {\n  border-color: #267dc0;\n  box-shadow: 0 0 0 transparent;\n}\n.geosuggest__suggests {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  max-height: 25em;\n  padding: 0;\n  margin-top: -1px;\n  background: #fff;\n  border: 2px solid #267dc0;\n  border-top-width: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  list-style: none;\n  z-index: 5;\n  -webkit-transition: max-height 0.2s, border 0.2s;\n          transition: max-height 0.2s, border 0.2s;\n}\n.geosuggest__suggests--hidden {\n  max-height: 0;\n  overflow: hidden;\n  border-width: 0;\n}\n\n/**\n * A geosuggest item\n */\n.geosuggest__item {\n  font-size: 18px;\n  font-size: 1rem;\n  padding: .5em .65em;\n  cursor: pointer;\n}\n.geosuggest__item:hover,\n.geosuggest__item:focus {\n  background: #f5f5f5;\n}\n.geosuggest__item--active {\n  background: #267dc0;\n  color: #fff;\n}\n.geosuggest__item--active:hover,\n.geosuggest__item--active:focus {\n  background: #ccc;\n}\n.geosuggest__item__matched-text {\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Cancellation/Cancellation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.Cancellation-errorMessage-UuUgl {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.Cancellation-space1-gNtrq {\n\tmargin-bottom: 6px !important;\n}\n.Cancellation-space2-yyGyV {\n\tmargin-bottom: 12px !important;\n}\n.Cancellation-space3-1Ex3- {\n\tmargin-bottom: 18px !important;\n}\n.Cancellation-space4-2qDzh {\n\tmargin-bottom: 24px !important;\n}\n.Cancellation-space5-2ReQW {\n\tmargin-bottom: 30px !important;\n}\n.Cancellation-space6-3iK34 {\n\tmargin-bottom: 36px !important;\n}\n.Cancellation-space7-3K-vG {\n\tmargin-bottom: 42px !important;\n}\n.Cancellation-spaceTop8-3ihIY {\n\tmargin-bottom: 48px !important;\n}\n.Cancellation-spaceTop1-1JQqP {\n\tmargin-top: 6px !important;\n}\n.Cancellation-spaceTop2-1f_cg {\n\tmargin-top: 12px !important;\n}\n.Cancellation-spaceTop3-9tN-G {\n\tmargin-top: 18px !important;\n}\n.Cancellation-spaceTop4-14zoU {\n\tmargin-top: 24px !important;\n}\n.Cancellation-spaceTop5-Lnjyu {\n\tmargin-top: 30px !important;\n}\n.Cancellation-spaceTop6-3A1-W {\n\tmargin-top: 36px !important;\n}\n.Cancellation-spaceTop7-3kSDg {\n\tmargin-top: 42px !important;\n}\n.Cancellation-spaceTop8-3ihIY {\n\tmargin-top: 48px !important;\n}\n.Cancellation-noMargin-2EwdH {\n\tmargin: 0px !important;\n}\n.Cancellation-padding1-1gein {\n\tpadding-bottom: 6px !important;\n}\n.Cancellation-padding2-2iAQR {\n\tpadding-bottom: 12px !important;\n}\n.Cancellation-padding3-31gRF {\n\tpadding-bottom: 18px !important;\n}\n.Cancellation-padding4-2iTzD {\n\tpadding-bottom: 24px !important;\n}\n.Cancellation-padding5-1SnFd {\n\tpadding-bottom: 30px !important;\n}\n.Cancellation-padding6-qV5B6 {\n\tpadding-bottom: 36px !important;\n}\n.Cancellation-padding7-KOEky {\n\tpadding-bottom: 42px !important;\n}\n.Cancellation-paddingTop1-3pAUa {\n\tpadding-top: 6px !important;\n}\n.Cancellation-paddingTop2-3zIg8 {\n\tpadding-top: 12px !important;\n}\n.Cancellation-paddingTop3-2vnKb {\n\tpadding-top: 18px !important;\n}\n.Cancellation-paddingTop4-1NTOp {\n\tpadding-top: 24px !important;\n}\n.Cancellation-paddingTop5-2CDik {\n\tpadding-top: 30px !important;\n}\n.Cancellation-paddingTop6-3-y4r {\n\tpadding-top: 36px !important;\n}\n.Cancellation-paddingTop7-8Rl-5 {\n\tpadding-top: 42px !important;\n}\n.Cancellation-noPadding-2uOqM {\n\tpadding: 0px !important;\n}\n.Cancellation-textBold-11eya {\n\tfont-weight: 500 !important;\n}\n.Cancellation-textBolder-48wz9 {\n\tfont-weight: 700 !important;\n}\n.Cancellation-textNormal-_sIow {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.Cancellation-textDarkBlue-3URu1 {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.Cancellation-textLightBlue-1aCyK {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.Cancellation-textLightSandleGreen-3WLuv {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.Cancellation-textLightBrown-1o6Ug {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.Cancellation-textMediumMaroon-1Drq7 {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.Cancellation-textBrown-19_-j {\n\tcolor: #B5DC4B !important;\n}\n.Cancellation-textMaroon-MZ11y {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.Cancellation-textDarkBrown-m_cSo {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.Cancellation-textMediumBrown-BEAwg {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.Cancellation-textSkyBlue-3OGHp {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.Cancellation-textGray-3yjZx {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.Cancellation-landingContentTitle-sVcQH {\n\tfont-size: 24px;\n\tcolor: #484848;\n\tfont-weight: bold;\n}\n.Cancellation-landingSubTitle-1vM9- {\n\tfont-size: 20px;\n\tcolor: #484848;\n}\n.Cancellation-textareaInput-1TK5W {\n\theight: 80px !important;\n\tpadding: 20px;\n\tborder-color: #dce0e0;\n\tborder-radius: 2px;\n\tfont-size: 14px;\n\tbackground-color: #fff;\n\tcolor: #767676;\n}\n.Cancellation-textHigh-2gvx2 {\n\tfont-size: 18px;\n\tcolor: #484848;\n\tline-height: 1.43;\n}\n.Cancellation-textTruncate-1AyjP {\n\toverflow: hidden;\n\twhite-space: nowrap;\n\t-o-text-overflow: ellipsis;\n\t   text-overflow: ellipsis;\n}\n.Cancellation-textLine-xJO8Y {\n\ttext-decoration: line-through;\n}\na,\na:hover,\na:focus,\na:active {\n\tcolor: #073687;\n\tcolor: var(--btn-secondary-bg);\n\ttext-decoration: none;\n}\n.Cancellation-textBold-11eya {\n\tfont-weight: bold;\n}\n.Cancellation-formGroup-KzM_X {\n\tmargin-bottom: 6px;\n}\n.Cancellation-landingStep-2E3px {\n\tfont-size: 16px;\n\tcolor: #767676;\n\tline-height: 1.43;\n\tfont-weight: normal;\n}\n.Cancellation-horizontalLineThrough-vxv7Z {\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: block;\n\tmargin: 15px 1px;\n\twidth: 100%;\n\tcolor: #767676;\n\ttext-align: center;\n\tfont-size: 14px;\n}\n.Cancellation-panelHeader-IqH-N {\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tpadding-bottom: 0px;\n\tborder-bottom: 1px solid #dce0e0;\n\tborder-radius: 0px;\n\tborder: none;\n\t-webkit-box-shadow: 0 8px 20px 5px #eeebeb;\n\t        box-shadow: 0 8px 20px 5px #eeebeb;\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n.Cancellation-profileAvatarSection-3Dg5T {\n\tposition: relative;\n\tmargin: 0 auto;\n\tmargin-top: -50px;\n}\n.Cancellation-profileAvatarLink-1v1dx {\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground-color: #bbb;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n}\n.Cancellation-textRight-3H3VK {\n\ttext-align: right;\n}\n.Cancellation-textLeft-KcDCZ {\n\ttext-align: left;\n}\n.Cancellation-pullRight-Oxnw3 {\n\tfloat: right;\n}\n.Cancellation-pullLeft-3pXeT {\n\tfloat: left;\n}\n.Cancellation-cancelBg-1Jekf {\n\twidth: 100%;\n\theight: 140px;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tborder-top-right-radius: 4px;\n\tborder-top-left-radius: 4px;\n}\n.Cancellation-cancelLeftBg-AM7Nc {\n\tbackground: #fff;\n\tborder-radius: 4px;\n\tpadding: 1px 22px 5px;\n\t-webkit-box-shadow: 0 5px 15px 5px #eeebeb;\n\t        box-shadow: 0 5px 15px 5px #eeebeb;\n}\n.Cancellation-cancellation-3Hrfc a {\n\tfont-size: 16px;\n\tcolor: #767676;\n\tline-height: 1.43;\n\tfont-weight: normal;\n\ttext-decoration: none;\n}\n.Cancellation-greenColor-TRz5o {\n\tfont-weight: bold;\n\tcolor: #007d73 !important;\n}\n@media screen and (max-width: 991px) {\n\t.Cancellation-textHigh-2gvx2 {\n\t\tfont-size: 14px;\n\t\tcolor: #484848;\n\t\tline-height: 1.43;\n\t}\n}\n@media screen and (max-width: 640px) {\n\t.Cancellation-pullLeft-3pXeT {\n\t\tfloat: none;\n\t}\n\t.Cancellation-pullRight-Oxnw3 {\n\t\tfloat: none;\n\t}\n\t.Cancellation-btnWidth-3wOMN {\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t\tmargin-bottom: 12px;\n\t}\n}\n@media (max-width: 360px) {\n\t.Cancellation-textHigh-2gvx2 {\n\t\tfont-size: 12px;\n\t}\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Cancellation/Cancellation.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,gBAAgB;CAChB,eAAe;CACf,kBAAkB;CAClB;AACD;CACC,gBAAgB;CAChB,eAAe;CACf;AACD;CACC,wBAAwB;CACxB,cAAc;CACd,sBAAsB;CACtB,mBAAmB;CACnB,gBAAgB;CAChB,uBAAuB;CACvB,eAAe;CACf;AACD;CACC,gBAAgB;CAChB,eAAe;CACf,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,2BAA2B;IACxB,wBAAwB;CAC3B;AACD;CACC,8BAA8B;CAC9B;AACD;;;;CAIC,eAAe;CACf,+BAA+B;CAC/B,sBAAsB;CACtB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,eAAe;CACf,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,mBAAmB;CACnB,WAAW;CACX,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,mBAAmB;CACnB,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,oBAAoB;CACpB,iCAAiC;CACjC,mBAAmB;CACnB,aAAa;CACb,2CAA2C;SACnC,mCAAmC;CAC3C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,mBAAmB;CACnB,eAAe;CACf,kBAAkB;CAClB;AACD;CACC,oCAAoC;SAC5B,4BAA4B;CACpC,mBAAmB;CACnB,sBAAsB;CACtB,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB,uBAAuB;CACvB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,aAAa;CACb;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ,cAAc;CACd,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,6BAA6B;CAC7B,4BAA4B;CAC5B;AACD;CACC,iBAAiB;CACjB,mBAAmB;CACnB,sBAAsB;CACtB,2CAA2C;SACnC,mCAAmC;CAC3C;AACD;CACC,gBAAgB;CAChB,eAAe;CACf,kBAAkB;CAClB,oBAAoB;CACpB,sBAAsB;CACtB;AACD;CACC,kBAAkB;CAClB,0BAA0B;CAC1B;AACD;CACC;EACC,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB;CACD;AACD;CACC;EACC,YAAY;EACZ;CACD;EACC,YAAY;EACZ;CACD;EACC,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB;CACD;AACD;CACC;EACC,gBAAgB;EAChB;CACD","file":"Cancellation.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.landingContentTitle {\n\tfont-size: 24px;\n\tcolor: #484848;\n\tfont-weight: bold;\n}\n.landingSubTitle {\n\tfont-size: 20px;\n\tcolor: #484848;\n}\n.textareaInput {\n\theight: 80px !important;\n\tpadding: 20px;\n\tborder-color: #dce0e0;\n\tborder-radius: 2px;\n\tfont-size: 14px;\n\tbackground-color: #fff;\n\tcolor: #767676;\n}\n.textHigh {\n\tfont-size: 18px;\n\tcolor: #484848;\n\tline-height: 1.43;\n}\n.textTruncate {\n\toverflow: hidden;\n\twhite-space: nowrap;\n\t-o-text-overflow: ellipsis;\n\t   text-overflow: ellipsis;\n}\n.textLine {\n\ttext-decoration: line-through;\n}\na,\na:hover,\na:focus,\na:active {\n\tcolor: #073687;\n\tcolor: var(--btn-secondary-bg);\n\ttext-decoration: none;\n}\n.textBold {\n\tfont-weight: bold;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.landingStep {\n\tfont-size: 16px;\n\tcolor: #767676;\n\tline-height: 1.43;\n\tfont-weight: normal;\n}\n.horizontalLineThrough {\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: block;\n\tmargin: 15px 1px;\n\twidth: 100%;\n\tcolor: #767676;\n\ttext-align: center;\n\tfont-size: 14px;\n}\n.panelHeader {\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tpadding-bottom: 0px;\n\tborder-bottom: 1px solid #dce0e0;\n\tborder-radius: 0px;\n\tborder: none;\n\t-webkit-box-shadow: 0 8px 20px 5px #eeebeb;\n\t        box-shadow: 0 8px 20px 5px #eeebeb;\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n.profileAvatarSection {\n\tposition: relative;\n\tmargin: 0 auto;\n\tmargin-top: -50px;\n}\n.profileAvatarLink {\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground-color: #bbb;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n}\n.textRight {\n\ttext-align: right;\n}\n.textLeft {\n\ttext-align: left;\n}\n.pullRight {\n\tfloat: right;\n}\n.pullLeft {\n\tfloat: left;\n}\n.cancelBg {\n\twidth: 100%;\n\theight: 140px;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tborder-top-right-radius: 4px;\n\tborder-top-left-radius: 4px;\n}\n.cancelLeftBg {\n\tbackground: #fff;\n\tborder-radius: 4px;\n\tpadding: 1px 22px 5px;\n\t-webkit-box-shadow: 0 5px 15px 5px #eeebeb;\n\t        box-shadow: 0 5px 15px 5px #eeebeb;\n}\n.cancellation a {\n\tfont-size: 16px;\n\tcolor: #767676;\n\tline-height: 1.43;\n\tfont-weight: normal;\n\ttext-decoration: none;\n}\n.greenColor {\n\tfont-weight: bold;\n\tcolor: #007d73 !important;\n}\n@media screen and (max-width: 991px) {\n\t.textHigh {\n\t\tfont-size: 14px;\n\t\tcolor: #484848;\n\t\tline-height: 1.43;\n\t}\n}\n@media screen and (max-width: 640px) {\n\t.pullLeft {\n\t\tfloat: none;\n\t}\n\t.pullRight {\n\t\tfloat: none;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t\tmargin-bottom: 12px;\n\t}\n}\n@media (max-width: 360px) {\n\t.textHigh {\n\t\tfont-size: 12px;\n\t}\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"errorMessage": "Cancellation-errorMessage-UuUgl",
	"space1": "Cancellation-space1-gNtrq",
	"space2": "Cancellation-space2-yyGyV",
	"space3": "Cancellation-space3-1Ex3-",
	"space4": "Cancellation-space4-2qDzh",
	"space5": "Cancellation-space5-2ReQW",
	"space6": "Cancellation-space6-3iK34",
	"space7": "Cancellation-space7-3K-vG",
	"spaceTop8": "Cancellation-spaceTop8-3ihIY",
	"spaceTop1": "Cancellation-spaceTop1-1JQqP",
	"spaceTop2": "Cancellation-spaceTop2-1f_cg",
	"spaceTop3": "Cancellation-spaceTop3-9tN-G",
	"spaceTop4": "Cancellation-spaceTop4-14zoU",
	"spaceTop5": "Cancellation-spaceTop5-Lnjyu",
	"spaceTop6": "Cancellation-spaceTop6-3A1-W",
	"spaceTop7": "Cancellation-spaceTop7-3kSDg",
	"noMargin": "Cancellation-noMargin-2EwdH",
	"padding1": "Cancellation-padding1-1gein",
	"padding2": "Cancellation-padding2-2iAQR",
	"padding3": "Cancellation-padding3-31gRF",
	"padding4": "Cancellation-padding4-2iTzD",
	"padding5": "Cancellation-padding5-1SnFd",
	"padding6": "Cancellation-padding6-qV5B6",
	"padding7": "Cancellation-padding7-KOEky",
	"paddingTop1": "Cancellation-paddingTop1-3pAUa",
	"paddingTop2": "Cancellation-paddingTop2-3zIg8",
	"paddingTop3": "Cancellation-paddingTop3-2vnKb",
	"paddingTop4": "Cancellation-paddingTop4-1NTOp",
	"paddingTop5": "Cancellation-paddingTop5-2CDik",
	"paddingTop6": "Cancellation-paddingTop6-3-y4r",
	"paddingTop7": "Cancellation-paddingTop7-8Rl-5",
	"noPadding": "Cancellation-noPadding-2uOqM",
	"textBold": "Cancellation-textBold-11eya",
	"textBolder": "Cancellation-textBolder-48wz9",
	"textNormal": "Cancellation-textNormal-_sIow",
	"textDarkBlue": "Cancellation-textDarkBlue-3URu1",
	"textLightBlue": "Cancellation-textLightBlue-1aCyK",
	"textLightSandleGreen": "Cancellation-textLightSandleGreen-3WLuv",
	"textLightBrown": "Cancellation-textLightBrown-1o6Ug",
	"textMediumMaroon": "Cancellation-textMediumMaroon-1Drq7",
	"textBrown": "Cancellation-textBrown-19_-j",
	"textMaroon": "Cancellation-textMaroon-MZ11y",
	"textDarkBrown": "Cancellation-textDarkBrown-m_cSo",
	"textMediumBrown": "Cancellation-textMediumBrown-BEAwg",
	"textSkyBlue": "Cancellation-textSkyBlue-3OGHp",
	"textGray": "Cancellation-textGray-3yjZx",
	"landingContentTitle": "Cancellation-landingContentTitle-sVcQH",
	"landingSubTitle": "Cancellation-landingSubTitle-1vM9-",
	"textareaInput": "Cancellation-textareaInput-1TK5W",
	"textHigh": "Cancellation-textHigh-2gvx2",
	"textTruncate": "Cancellation-textTruncate-1AyjP",
	"textLine": "Cancellation-textLine-xJO8Y",
	"formGroup": "Cancellation-formGroup-KzM_X",
	"landingStep": "Cancellation-landingStep-2E3px",
	"horizontalLineThrough": "Cancellation-horizontalLineThrough-vxv7Z",
	"panelHeader": "Cancellation-panelHeader-IqH-N",
	"profileAvatarSection": "Cancellation-profileAvatarSection-3Dg5T",
	"profileAvatarLink": "Cancellation-profileAvatarLink-1v1dx",
	"textRight": "Cancellation-textRight-3H3VK",
	"textLeft": "Cancellation-textLeft-KcDCZ",
	"pullRight": "Cancellation-pullRight-Oxnw3",
	"pullLeft": "Cancellation-pullLeft-3pXeT",
	"cancelBg": "Cancellation-cancelBg-1Jekf",
	"cancelLeftBg": "Cancellation-cancelLeftBg-AM7Nc",
	"cancellation": "Cancellation-cancellation-3Hrfc",
	"greenColor": "Cancellation-greenColor-TRz5o",
	"btnWidth": "Cancellation-btnWidth-3wOMN"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/cancel/Cancel.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.Cancel-root-2dvDR {\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.Cancel-container-1VRb7 {\n  margin: 0px auto;\n  padding: 0 0 40px;\n  margin-top: 30px;\n  max-width: 1080px;\n  max-width: var(--max-content-width);\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/cancel/Cancel.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,kBAAkB;CAClB,mBAAmB;CACnB;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;CACrC","file":"Cancel.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.root {\n\tpadding-left: 0px;\n\tpadding-right: 0px;\n}\n.container {\n  margin: 0px auto;\n  padding: 0 0 40px;\n  margin-top: 30px;\n  max-width: 1080px;\n  max-width: var(--max-content-width);\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Cancel-root-2dvDR",
	"container": "Cancel-container-1VRb7"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./node_modules/react-geosuggest/module/geosuggest.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/react-geosuggest/module/geosuggest.css");
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

/***/ "./public/SiteImages/large_no_image.jpeg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/SiteImages/large_no_image.jpeg?63dc6a2f";

/***/ }),

/***/ "./src/actions/Reservation/cancelReservation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _getAllReservationQuery_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/actions/Reservation/getAllReservationQuery.graphql");
/* harmony import */ var _getAllReservationQuery_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_getAllReservationQuery_graphql__WEBPACK_IMPORTED_MODULE_4__);
 // Toaster





function cancel(reservationId, cancellationPolicy, refundToGuest, payoutToHost, guestServiceFee, hostServiceFee, total, currency, threadId, cancelledBy, message, checkIn, checkOut, guests, listTitle, confirmationCode, hostName, guestName, hostEmail, guestEmail, userType) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CANCEL_RESERVATION_START"]
    });

    try {
      const mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation cancelReservation(
		  $reservationId: Int!,
		  $cancellationPolicy: String!,
		  $refundToGuest: Float!,
		  $payoutToHost: Float!,
		  $guestServiceFee: Float!,
		  $hostServiceFee: Float!,
		  $total: Float!,
		  $currency: String!,
		  $threadId: Int!,
		  $cancelledBy: String!,
		  $message: String!,
		  $checkIn: String!,
      	  $checkOut: String!,
      	  $guests: Int!
		){
		    cancelReservation(
		      reservationId: $reservationId,
		      cancellationPolicy: $cancellationPolicy,
		      refundToGuest: $refundToGuest,
		      payoutToHost: $payoutToHost,
		      guestServiceFee: $guestServiceFee,
		      hostServiceFee: $hostServiceFee,
		      total: $total,
		      currency: $currency,
		      threadId: $threadId,
		      cancelledBy: $cancelledBy,
		      message: $message,
		      checkIn: $checkIn,
		      checkOut: $checkOut,
		      guests: $guests
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
          reservationId,
          cancellationPolicy,
          refundToGuest,
          payoutToHost,
          guestServiceFee,
          hostServiceFee,
          total,
          currency,
          threadId,
          cancelledBy,
          message,
          checkIn,
          checkOut,
          guests
        },
        refetchQueries: [{
          query: _getAllReservationQuery_graphql__WEBPACK_IMPORTED_MODULE_4___default.a,
          variables: {
            userType,
            currentPage: 1,
            dateFilter: 'current'
          }
        }]
      });

      if (data && data.cancelReservation && data.cancelReservation.status === '200') {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["CANCEL_RESERVATION_SUCCESS"]
        });
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Cancel Reservation", "Reservation cancelled successfully");

        if (cancelledBy === 'host') {
          window.location.replace('/reservation/current');
        } else {
          window.location.replace('/trips/current');
        }
      }

      if (data && data.cancelReservation && data.cancelReservation.status === '400') {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["CANCEL_RESERVATION_SUCCESS"]
        });
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Cancel Reservation", "It looks like your reservation is already updated!");
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["CANCEL_RESERVATION_STATE_ERROR"],
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

/***/ "./src/actions/Reservation/getAllReservationQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}},{"kind":"Argument","name":{"kind":"Name","value":"currentPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateFilter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateFilter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guests"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationState"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"messageData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"listData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"street"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"zipcode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"guestData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currentPage"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":890}};

module.exports = doc;

/***/ }),

/***/ "./src/components/Cancellation/Cancellation.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Cancellation/Cancellation.css");
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

/***/ "./src/components/Cancellation/Cancellation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Cancellation/Cancellation.css");
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Cancellation_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Cancellation/Summary.js");
/* harmony import */ var _DetailsForHost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/Cancellation/DetailsForHost.js");
/* harmony import */ var _DetailsForGuest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Cancellation/DetailsForGuest.js");
/* harmony import */ var _routes_notFound_NotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/routes/notFound/NotFound.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/Cancellation/validate.js");
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/Cancellation/submit.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _helpers_dateRange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/helpers/dateRange.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Cancellation/Cancellation.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux Form





 // Components




 // Helpers


 // Locale

 //Helpers



class CancellationPolicy extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        placeholder: label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });
  }

  calculateCancellation(interval, nights) {
    const {
      data,
      data: {
        listData: {
          listingData
        }
      }
    } = this.props;
    let accomodation,
        guestFees,
        remainingNights,
        policyName,
        priorDays,
        policyId,
        cancellation,
        nonRefundableNights,
        type = 'priorCheckIn';
    cancellation = data && data.cancellation ? data && data.cancellation : listingData && listingData.cancellation;
    let cancellationRuleObj = {
      accomodation,
      guestFees,
      nonRefundableNights,
      priorDays,
      policyName,
      remainingNights,
      interval,
      nights
    };

    if (interval > cancellation.priorDays) {
      type = 'priorCheckIn';
    } else if (interval <= cancellation.priorDays && interval > 0) {
      type = 'beforeCheckIn';
    } else {
      type = 'duringCheckIn';
    }

    if (type == 'priorCheckIn') {
      cancellationRuleObj = {
        accomodation: cancellation.accommodationPriorCheckIn,
        guestFees: cancellation.guestFeePriorCheckIn,
        nonRefundableNights: cancellation.nonRefundableNightsPriorCheckIn,
        priorDays: cancellation.priorDays,
        policyName: cancellation.policyName,
        interval,
        nights,
        cleaningFeePercent: 100
      };
    } else if (type == 'beforeCheckIn') {
      cancellationRuleObj = {
        accomodation: cancellation.accommodationBeforeCheckIn,
        guestFees: cancellation.guestFeeBeforeCheckIn,
        nonRefundableNights: cancellation.nonRefundableNightsBeforeCheckIn,
        priorDays: cancellation.priorDays,
        policyName: cancellation.policyName,
        interval,
        nights,
        cleaningFeePercent: 100
      };
      if (cancellation.id === 3) cancellationRuleObj['cleaningFeePercent'] = 0;
    } else {
      cancellationRuleObj = {
        accomodation: cancellation.accommodationDuringCheckIn,
        guestFees: cancellation.guestFeeDuringCheckIn,
        nonRefundableNights: cancellation.nonRefundableNightsDuringCheckIn,
        priorDays: cancellation.priorDays,
        policyName: cancellation.policyName,
        //If interval is zero, then check-in date is today
        //If interval is not zero, it should be negative value. To include check in date, subtract 1 from the nights.
        remainingNights: nights - 1 + interval,
        interval,
        nights,
        cleaningFeePercent: 0
      };
    }

    return {
      cancellationRuleObj
    };
  }

  render() {
    const {
      formatMessage
    } = this.props.intl;
    const {
      userType,
      data,
      data: {
        guestData,
        hostData,
        messageData,
        listData
      }
    } = this.props;
    let cancelData = {},
        placeholder;
    const {
      nights,
      interval
    } = Object(_helpers_dateRange__WEBPACK_IMPORTED_MODULE_16__["getDateRanges"])({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      country: listData.country
    }); //(-interval) < (nights - 1) Block if the (current date) is equal or greater than the (one day before checkout date)

    if (guestData && hostData && messageData && listData && data.checkIn && data.checkOut && -interval < nights - 1) {
      cancelData = this.calculateCancellation(interval, nights);
      const {
        handleSubmit,
        submitting,
        error,
        pristine
      } = this.props;

      if (userType === 'host') {
        placeholder = formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_15__["default"].cancellationNote) + ' ' + guestData.firstName + ' ' + formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_15__["default"].cancellationNoteForHost);
      } else {
        placeholder = formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_15__["default"].cancellationNote) + ' ' + hostData.firstName + ' ' + formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_15__["default"].cancellationNoteForGuest);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a.landingContaiconfirmationCodener,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_14__["default"]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 7,
        md: 7,
        lg: 7,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a.cancelLeftBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_9__["default"], {
        userType: userType,
        firstName: userType === 'host' ? guestData.firstName : hostData.firstName,
        guests: data.guests,
        nights: nights,
        interval: interval,
        cancelData: cancelData && cancelData.cancellationRuleObj || {},
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__["Field"], {
        className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a.textareaInput,
        name: "message",
        component: this.renderFormControlTextArea,
        label: placeholder,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a.landingStep, _Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a.space3),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_15__["default"].reservationCancel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 29
        }
      })))))), userType === 'host' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailsForHost__WEBPACK_IMPORTED_MODULE_10__["default"], {
        userType: userType,
        firstName: guestData.firstName,
        guestEmail: guestData.userData.id,
        hostName: hostData.firstName,
        profileId: guestData.profileId,
        picture: guestData.picture,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        guests: data.guests,
        title: listData.title,
        listId: data.listId,
        basePrice: data.basePrice,
        cleaningPrice: data.cleaningPrice,
        guestServiceFee: data.guestServiceFee,
        hostServiceFee: data.hostServiceFee,
        total: data.total,
        currency: data.currency,
        cancelData: cancelData,
        reservationId: data.id,
        threadId: data.messageData.id,
        confirmationCode: data.confirmationCode,
        holdeData: data,
        taxRate: data.taxRate,
        interval: interval,
        hostServiceFeeType: data.hostServiceFeeType,
        hostServiceFeeValue: data.hostServiceFeeValue,
        isSpecialPriceAverage: data.isSpecialPriceAverage,
        discount: data.discount ? data.discount : 0,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 42
        }
      }), userType === 'guest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailsForGuest__WEBPACK_IMPORTED_MODULE_11__["default"], {
        userType: userType,
        firstName: hostData.firstName,
        hostEmail: hostData.userData.id,
        guestName: guestData.firstName,
        profileId: hostData.profileId,
        picture: hostData.picture,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        guests: data.guests,
        title: listData.title,
        listId: data.listId,
        basePrice: data.basePrice,
        cleaningPrice: data.cleaningPrice,
        guestServiceFee: data.guestServiceFee,
        hostServiceFee: data.hostServiceFee,
        total: data.total,
        currency: data.currency,
        cancelData: cancelData,
        reservationId: data.id,
        threadId: data.messageData.id,
        confirmationCode: data.confirmationCode,
        discount: data.discount ? data.discount : 0,
        holdeData: data,
        taxRate: data.taxRate,
        interval: interval,
        hostServiceFeeType: data.hostServiceFeeType,
        hostServiceFeeValue: data.hostServiceFeeValue,
        isSpecialPriceAverage: data.isSpecialPriceAverage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 43
        }
      })))));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_notFound_NotFound__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 14
        }
      });
    }
  }

}

_defineProperty(CancellationPolicy, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    cleaningPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    reservationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      country: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      listingData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        cancellation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
          id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          policyName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
          priorDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          accommodationPriorCheckIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          accommodationBeforeCheckIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          accommodationDuringCheckIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          guestFeePriorCheckIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          guestFeeBeforeCheckIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          guestFeeDuringCheckIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
        })
      })
    }),
    messageData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }),
    hostData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }),
    guestData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  })
});

_defineProperty(CancellationPolicy, "defaultProps", {
  data: {
    checkIn: null,
    checkOut: null
  }
});

CancellationPolicy = Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'CancellationForm',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_13__["default"],
  onSubmit: _submit__WEBPACK_IMPORTED_MODULE_14__["default"]
})(CancellationPolicy);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_8___default.a)(CancellationPolicy)));

/***/ }),

/***/ "./src/components/Cancellation/DetailsForGuest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Cancellation/Cancellation.css");
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/Avatar/Avatar.js");
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/SiteImages/large_no_image.jpeg");
/* harmony import */ var _public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helpers_cancellationData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/helpers/cancellationData.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Cancellation/DetailsForGuest.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux







 // Components



 // Locale

 // Images




class DetailsForGuest extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  async handleCancel(cancellationData) {
    const {
      initialize,
      submit
    } = this.props;
    await initialize('CancellationForm', cancellationData, true);
    await submit('CancellationForm');
  }

  render() {
    const {
      reservationId,
      userType,
      firstName,
      hostEmail,
      checkIn,
      checkOut,
      guests,
      title,
      listId,
      picture,
      profileId,
      guestName
    } = this.props;
    const {
      basePrice,
      cleaningPrice,
      guestServiceFee,
      hostServiceFee,
      total,
      currency,
      threadId,
      hostId,
      confirmationCode,
      taxRate,
      isSpecialPriceAverage
    } = this.props;
    const {
      cancelData,
      cancelData: {
        cancellationRuleObj: {
          policyName,
          accomodation,
          guestFees,
          remainingNights,
          interval,
          nights,
          priorDays,
          nonRefundableNights,
          cleaningFeePercent
        }
      }
    } = this.props;
    const {
      message,
      discount,
      holdeData,
      hostServiceFeeType,
      hostServiceFeeValue,
      base,
      rates,
      serviceFees
    } = this.props;
    let coverImage = holdeData && holdeData.listData && holdeData.listData.listPhotos.find(o => o.id == holdeData.listData.coverPhoto);
    let path = '/images/upload/x_medium_';
    let showImage;

    if (coverImage) {
      showImage = path + coverImage.name;
    } else if (!coverImage && holdeData.listData && holdeData.listData.listPhotos.length > 0) {
      showImage = path + (holdeData.listData && holdeData.listData.listPhotos[0].name);
    } else {
      showImage = _public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15___default.a;
    }

    let isDisabled = true,
        cancellationData = {};
    let checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('Do MMM YYYY') : '';
    let checkOutDate = checkOut != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut).format('Do MMM YYYY') : '';
    let refundableNightPrice = 0,
        nonRefundableNightPrice = 0,
        refundWithoutGuestFee = 0;
    let updatedGuestFee = 0,
        updatedHostFee = 0,
        payoutToHost = 0,
        subtotal = 0;
    let isCleaingPrice = 0;

    if (cleaningPrice) {
      isCleaingPrice = cleaningPrice;
    } else {
      isCleaingPrice = 0;
    }

    let bookingSpecialPricing = [],
        isSpecialPriceAssigned = false;
    let priceForDays = 0,
        cancellationGuestObj = {},
        finalPrice = 0;
    holdeData.bookingSpecialPricing && holdeData.bookingSpecialPricing.map((item, key) => {
      let pricingRow, currentPrice;

      if (item.blockedDates) {
        isSpecialPriceAssigned = true;
        currentPrice = Number(item.isSpecialPrice);
      } else {
        currentPrice = Number(basePrice);
      }

      pricingRow = {
        blockedDates: item,
        isSpecialPrice: currentPrice
      };
      bookingSpecialPricing.push(pricingRow);
    });

    if (isSpecialPriceAssigned) {
      bookingSpecialPricing.map((item, index) => {
        priceForDays = Number(priceForDays) + Number(item.isSpecialPrice);
      });
    } else {
      if (interval <= 1) {
        priceForDays = Number(basePrice) * Number(nights - nonRefundableNights);
      } else {
        priceForDays = Number(basePrice) * Number(nights);
      }
    }

    finalPrice = Object(_helpers_cancellationData__WEBPACK_IMPORTED_MODULE_16__["getPriceWithDiscount"])({
      basePrice: isSpecialPriceAverage || basePrice,
      discount,
      nights
    });
    cancellationGuestObj = Object(_helpers_cancellationData__WEBPACK_IMPORTED_MODULE_16__["cancellationGuestData"])(remainingNights, nights, priceForDays, accomodation, isCleaingPrice, taxRate, guestServiceFee, guestFees, discount, hostServiceFee, finalPrice, total, policyName, interval, priorDays, nonRefundableNights, hostServiceFeeType, hostServiceFeeValue, currency, base, rates, serviceFees, cleaningFeePercent);
    refundableNightPrice = cancellationGuestObj.refundableNightPrice;
    refundWithoutGuestFee = cancellationGuestObj.refundWithoutGuestFee;
    nonRefundableNightPrice = cancellationGuestObj.nonRefundableNightPrice;
    updatedGuestFee = cancellationGuestObj.updatedGuestFee;
    payoutToHost = cancellationGuestObj.payoutToHost;
    updatedHostFee = cancellationGuestObj.updatedHostFee;
    updatedGuestFee = cancellationGuestObj.updatedGuestFee;
    subtotal = total + guestServiceFee;
    cancellationData = {
      reservationId,
      cancellationPolicy: policyName,
      refundToGuest: refundableNightPrice,
      payoutToHost: payoutToHost,
      guestServiceFee: updatedGuestFee,
      hostServiceFee: updatedHostFee,
      total: subtotal,
      currency,
      threadId,
      cancelledBy: 'guest',
      checkIn,
      checkOut,
      guests,
      guestName,
      hostName: firstName,
      listTitle: title,
      confirmationCode,
      hostEmail,
      userType
    };

    if (message) {
      isDisabled = false;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 5,
      md: 5,
      lg: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.bgCover,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + listId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.cancelBg,
      style: {
        backgroundImage: `url(${showImage})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.panelHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 8,
      sm: 8,
      md: 8,
      lg: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textTruncate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 19
      }
    }, firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 82
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + listId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 19
      }
    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 19
      }
    }, checkInDate, " - ", checkOutDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileAvatarSection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      source: picture,
      height: 65,
      width: 65,
      title: firstName,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileAvatar,
      withLink: true,
      linkClassName: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileAvatarLink,
      profileId: profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 19
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 13
      }
    }), nonRefundableNightPrice > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 46
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].nonRefundable, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 26
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textLine),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      amount: nonRefundableNightPrice,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 21
      }
    })))), refundableNightPrice > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 43
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].refundable, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 26
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      amount: refundableNightPrice,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 21
      }
    })))), refundableNightPrice > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.spaceTop3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 42
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.landingStep),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 48
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].refundCost, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 54
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.cancellation,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: '/cancellation-policies/' + policyName,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].cancellationPolicy, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 80
      }
    })), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.greenColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 135
      }
    }, policyName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      lg: 12,
      md: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.horizontalLineThrough, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.spaceTop4),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 7,
      lg: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnPrimaryBorder, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnLarge, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.pullLeft, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnWidth),
      to: "/trips/current",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].keepReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnLarge, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.pullRight, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnWidth),
      onClick: () => this.handleCancel(cancellationData),
      disabled: isDisabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].cancelYourReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 15
      }
    }))))));
  }

}

_defineProperty(DetailsForGuest, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hostEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cleaningPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    policyName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    accomodation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    guestFees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    remainingNights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    nights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  initialize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

_defineProperty(DetailsForGuest, "defaultProps", {});

const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_5__["formValueSelector"])('CancellationForm'); // <-- same as form name

const mapState = state => ({
  message: selector(state, 'message'),
  serviceFees: state.book.serviceFees,
  base: state && state.currency && state.currency.base,
  rates: state && state.currency && state.currency.rates
});

const mapDispatch = {
  initialize: redux_form__WEBPACK_IMPORTED_MODULE_5__["initialize"],
  submit: redux_form__WEBPACK_IMPORTED_MODULE_5__["submit"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(DetailsForGuest)));

/***/ }),

/***/ "./src/components/Cancellation/DetailsForHost.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Cancellation/Cancellation.css");
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/Avatar/Avatar.js");
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/SiteImages/large_no_image.jpeg");
/* harmony import */ var _public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helpers_cancellationData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/helpers/cancellationData.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Cancellation/DetailsForHost.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux







 // Components



 // Locale

 // Images




class DetailsForHost extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  async handleCancel(cancellationData) {
    const {
      initialize,
      submit
    } = this.props;
    await initialize('CancellationForm', cancellationData, true);
    await submit('CancellationForm');
  }

  render() {
    const {
      reservationId,
      userType,
      firstName,
      guestEmail,
      checkIn,
      checkOut,
      guests,
      title,
      listId,
      picture,
      profileId,
      hostName
    } = this.props;
    const {
      discount,
      basePrice,
      cleaningPrice,
      guestServiceFee,
      hostServiceFee,
      total,
      currency,
      threadId,
      confirmationCode,
      taxRate,
      isSpecialPriceAverage
    } = this.props;
    const {
      cancelData,
      cancelData: {
        cancellationRuleObj: {
          policyName,
          accomodation,
          guestFees,
          remainingNights,
          interval,
          nights,
          priorDays,
          nonRefundableNights
        }
      }
    } = this.props;
    const {
      message,
      holdeData,
      serviceFees,
      hostServiceFeeType,
      hostServiceFeeValue,
      base,
      rates
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    let checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('Do MMM YYYY') : '';
    let checkOutDate = checkOut != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut).format('Do MMM YYYY') : '';
    let subtotal = 0,
        totalNights = 0;
    let isDisabled = true,
        cancellationHostObj = {};
    let coverImage = holdeData && holdeData.listData && holdeData.listData.listPhotos.find(o => o.id == holdeData.listData.coverPhoto);
    let path = '/images/upload/x_medium_';
    let showImage;

    if (coverImage) {
      showImage = path + coverImage.name;
    } else if (!coverImage && holdeData.listData && holdeData.listData.listPhotos.length > 0) {
      showImage = path + (holdeData.listData && holdeData.listData.listPhotos[0].name);
    } else {
      showImage = _public_SiteImages_large_no_image_jpeg__WEBPACK_IMPORTED_MODULE_15___default.a;
    }

    let isCleaingPrice = 0;

    if (cleaningPrice) {
      isCleaingPrice = cleaningPrice;
    } else {
      isCleaingPrice = 0;
    }

    let bookingSpecialPricing = [],
        isSpecialPriceAssigned = false;
    let priceForDays = 0,
        totalPrice = 0;
    holdeData.bookingSpecialPricing && holdeData.bookingSpecialPricing.map((item, key) => {
      let pricingRow, currentPrice;

      if (item.blockedDates) {
        isSpecialPriceAssigned = true;
        currentPrice = Number(item.isSpecialPrice);
      } else {
        currentPrice = Number(basePrice);
      }

      pricingRow = {
        blockedDates: item,
        isSpecialPrice: currentPrice
      };
      bookingSpecialPricing.push(pricingRow);
    });

    if (isSpecialPriceAssigned) {
      bookingSpecialPricing.map((item, index) => {
        priceForDays = Number(priceForDays) + Number(item.isSpecialPrice);
      });
    } else {
      priceForDays = Number(basePrice) * Number(nights - nonRefundableNights);
    }

    totalPrice = Object(_helpers_cancellationData__WEBPACK_IMPORTED_MODULE_16__["getPriceWithDiscount"])({
      basePrice: isSpecialPriceAverage || basePrice,
      discount,
      nights
    });
    const {
      refundAmount,
      nonPayoutAmount,
      payoutAmount,
      refundDays,
      updatedHostFee,
      updatedGuestFee
    } = Object(_helpers_cancellationData__WEBPACK_IMPORTED_MODULE_16__["calculateHostCancellation"])({
      total,
      basePrice: totalPrice,
      isCleaingPrice,
      nights,
      remainingNights,
      guestServiceFee,
      hostServiceFee,
      hostServiceFeeType,
      hostServiceFeeValue,
      interval
    });
    subtotal = total + guestServiceFee;
    let cancellationData = {
      reservationId,
      cancellationPolicy: policyName,
      refundToGuest: refundAmount,
      payoutToHost: payoutAmount,
      guestServiceFee: updatedGuestFee,
      hostServiceFee: updatedHostFee,
      total: subtotal,
      currency,
      threadId,
      cancelledBy: 'host',
      checkIn,
      checkOut,
      guests,
      hostName,
      guestName: firstName,
      listTitle: title,
      confirmationCode,
      guestEmail,
      userType
    };

    if (message) {
      isDisabled = false;
    }

    totalNights = nights - refundDays;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 5,
      md: 5,
      lg: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.bgCover,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + listId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.cancelBg,
      style: {
        backgroundImage: `url(${showImage})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.panelHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 8,
      sm: 8,
      md: 8,
      lg: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textTruncate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }, firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 82
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + listId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 19
      }
    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileAvatarSection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      source: picture,
      height: 65,
      width: 65,
      title: firstName,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileAvatar,
      withLink: true,
      linkClassName: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileAvatarLink,
      profileId: profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 19
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 8,
      md: 8,
      lg: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 19
      }
    }, checkInDate, " - ", checkOutDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 13
      }
    }), refundDays > 0 && nonPayoutAmount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 56
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].missedEarnings, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 26
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "directionLtr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      amount: totalPrice,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 23
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 28
      }
    }, " ", ' x', " ", refundDays, " ", refundDays > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].nights) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].night))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textLine),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      amount: nonPayoutAmount,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 21
      }
    })))), payoutAmount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 35
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].earnings, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 26
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      amount: totalPrice,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 21
      }
    })), totalNights > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 39
      }
    }, " x ", totalNights, " ", formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"][totalNights > 1 ? 'nights' : 'night']), ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textHigh, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.textBold),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      amount: payoutAmount,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 21
      }
    })))), payoutAmount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.space3, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.spaceTop3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 34
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.landingStep),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }
    }, firstName, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].willBeRefund, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 19
      }
    })), ' ', ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].reservationCost, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 19
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.cancellation,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: '/cancellation-policies/' + policyName,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].cancellationPolicy, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 80
      }
    })), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.greenColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 135
      }
    }, policyName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      lg: 12,
      md: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.horizontalLineThrough, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.spaceTop4),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
      xs: 12,
      sm: 12,
      md: 7,
      lg: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnPrimaryBorder, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnLarge, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.pullLeft, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnWidth),
      to: "/reservation/current",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].keepReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.btnLarge, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.pullRight, _Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnWidth),
      onClick: () => this.handleCancel(cancellationData),
      disabled: isDisabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].cancelYourReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 15
      }
    }))))));
  }

}

_defineProperty(DetailsForHost, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guestEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cleaningPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    policyName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    accomodation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    guestFees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    remainingNights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    nights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  initialize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

const selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_5__["formValueSelector"])('CancellationForm'); // <-- same as form name

const mapState = state => ({
  message: selector(state, 'message'),
  serviceFees: state.book.serviceFees,
  base: state && state.currency && state.currency.base,
  rates: state && state.currency && state.currency.rates
});

const mapDispatch = {
  initialize: redux_form__WEBPACK_IMPORTED_MODULE_5__["initialize"],
  submit: redux_form__WEBPACK_IMPORTED_MODULE_5__["submit"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_9___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(DetailsForHost))));

/***/ }),

/***/ "./src/components/Cancellation/Summary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Cancellation/Cancellation.css");
/* harmony import */ var _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Cancellation/Summary.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Locale



class Summary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      userType,
      firstName,
      guests,
      nights,
      interval
    } = this.props;
    const {
      cancelData: {
        remainingNights
      }
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, userType === 'guest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.landingContentTitle, _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.space5),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].cancelYourTrip, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }))), userType === 'host' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 34
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.landingContentTitle, _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.space5),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].cancelYourReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.landingSubTitle, _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.space5),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].consider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    })), ' ', firstName, "'s", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].tripBeforeCanceling, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.landingStep, _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.space3, _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].cancellingInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.textBold,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"][interval <= 0 ? 'started' : 'startIn'], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 44
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 124
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, interval, " ", formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"][interval < -1 || interval > 1 ? 'howManydays' : 'howManyday']) + (interval <= 0 ? ' ago' : ''), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.textBold,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].travelingWith, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 42
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 97
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, guests, " ", guests > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].howManyGuest) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].guest)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.space4, _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.textBold,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].stayingFor, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 42
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 94
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, nights, " ", nights > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].nights) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].night)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a.landingSubTitle),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].contactHostinfo2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    })), ' ', firstName, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].needToCancel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    })))));
  }

}

_defineProperty(Summary, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  nights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    remainingNights: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired
});

_defineProperty(Summary, "defaultProps", {});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_Cancellation_css__WEBPACK_IMPORTED_MODULE_6___default.a)(Summary)));

/***/ }),

/***/ "./src/components/Cancellation/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_Reservation_cancelReservation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/actions/Reservation/cancelReservation.js");


async function submit(values, dispatch) {
  dispatch(Object(_actions_Reservation_cancelReservation__WEBPACK_IMPORTED_MODULE_0__["cancel"])(values.reservationId, values.cancellationPolicy, values.refundToGuest, values.payoutToHost, values.guestServiceFee, values.hostServiceFee, values.total, values.currency, values.threadId, values.cancelledBy, values.message, values.checkIn, values.checkOut, values.guests, values.listTitle, values.confirmationCode, values.hostName, values.guestName, values.hostEmail, values.guestEmail));
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/components/Cancellation/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {};

  if (!values.message) {
    errors.message = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.message && values.message.toString().trim() == '') {
    errors.message = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/components/CurrencyConverter/CurrencyConverter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/helpers/currencyConvertion.js");
/* harmony import */ var _helpers_formatLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/helpers/formatLocale.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/CurrencyConverter/CurrencyConverter.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Translation

 // Helper




class CurrencyConverter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      base: null,
      rates: null
    };
  }

  componentWillMount() {
    const {
      base,
      rates
    } = this.props;

    if (base != undefined && rates != undefined) {
      this.setState({
        base: base,
        rates: rates
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      base,
      rates
    } = nextProps;

    if (base != undefined && rates != undefined) {
      this.setState({
        base: base,
        rates: rates
      });
    }
  }

  render() {
    const {
      from,
      amount,
      superSymbol,
      className,
      toCurrency,
      locale,
      isCurrency
    } = this.props;
    const {
      base,
      rates
    } = this.state;
    let targetCurrency;
    let convertedAmount = amount;
    let fromCurrency = from || base;

    if (rates != null) {
      convertedAmount = Object(_helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_4__["convert"])(base, rates, amount, fromCurrency, toCurrency);
    }

    if (toCurrency) {
      targetCurrency = toCurrency;
    } else {
      targetCurrency = base;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, Object(_helpers_formatLocale__WEBPACK_IMPORTED_MODULE_5__["isRTL"])(locale) ? new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      currencyDisplay: "symbol"
    }).format(convertedAmount) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedNumber"], {
      value: convertedAmount,
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      currencyDisplay: "symbol",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }), superSymbol && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 26
      }
    }, targetCurrency));
  }

}

_defineProperty(CurrencyConverter, "propTypes", {
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  superSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toCurrency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(CurrencyConverter, "defaultProps", {
  amount: 0,
  superSymbol: false
});

const mapState = state => ({
  base: state.currency.base,
  toCurrency: state.currency.to,
  rates: state.currency.rates,
  locale: state.intl.locale
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(CurrencyConverter)));

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

/***/ "./src/helpers/cancellationData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceWithDiscount", function() { return getPriceWithDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFixedValue", function() { return getFixedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancellationGuestData", function() { return cancellationGuestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHostCancellation", function() { return calculateHostCancellation; });
//Discount calculation
function getPriceWithDiscount({
  basePrice,
  discount,
  nights
}) {
  if (discount > 0) {
    let singleNightDiscount = discount / nights;
    basePrice = basePrice - singleNightDiscount;
  }

  return basePrice;
}
function getFixedValue(value) {
  if (!value) return value;
  return Number(value.toFixed(2));
}
function cancellationGuestData(remainingNights, nights, priceForDays, accomodation, isCleaingPrice, taxRate, guestServiceFee, guestFees, discount, hostServiceFee, basePrice, // Either special price average or base price from reserveration with discount is set
total, policyName, interval, priorDays, nonRefunableNights, hostServiceFeeType, hostServiceFeeValue, currency, base, rates, serviceFees, cleaningFeePercent) {
  let refundableNightPrice = 0,
      nonRefundableNightPrice = 0,
      refundWithoutGuestFee = 0;
  let updatedHostFee = 0,
      payoutToHost = 0,
      hostRefund = 0;
  let checkInNights = remainingNights == 0 || remainingNights > 0 ? remainingNights : nights;
  let totalNights = checkInNights - nonRefunableNights; //Based on the policy, update the guest fee

  let updatedGuestFee = guestServiceFee * (guestFees / 100),
      //This variable stores refunded guest fee value.
  paidAmount = total + guestServiceFee; //Based on the policy, update the cleaning price

  isCleaingPrice = isCleaingPrice * (cleaningFeePercent / 100); //Refund amount without considering guest service fee

  refundableNightPrice = getFixedValue(totalNights * basePrice * (accomodation / 100) + isCleaingPrice); //Host Payout amount without subtracting host service fee. total has cleaning Fee with in it.

  hostRefund = getFixedValue(total - refundableNightPrice); //Adding guest service fee, if it could be refunded

  refundableNightPrice = refundableNightPrice + updatedGuestFee; //Payout amount calculated with host service fee

  if (hostRefund > 0) {
    updatedHostFee = getFixedValue(hostServiceFeeType === 'percentage' ? hostRefund * (Number(hostServiceFeeValue) / 100) : hostServiceFeeValue);
    payoutToHost = getFixedValue(hostRefund - updatedHostFee);
  } //Non refundable amount calculated based on the total amount guest paid and the refundable amount with guest service fee


  nonRefundableNightPrice = getFixedValue(paidAmount - refundableNightPrice);
  return {
    refundableNightPrice,
    refundWithoutGuestFee,
    nonRefundableNightPrice,
    //If this updatedGuestFee with in object is 0, admin won't get guest service fee after cancellation
    updatedGuestFee: guestServiceFee - updatedGuestFee,
    //Either whole guest service is refunded or none based on the policy
    payoutToHost,
    updatedHostFee
  };
}
function calculateHostCancellation({
  total,
  basePrice,
  // Either special price average or base price from reserveration with discount is set
  isCleaingPrice,
  nights,
  remainingNights,
  guestServiceFee,
  //Guest service fee value, when the reservation is created
  hostServiceFee,
  //Host service fee value, when the reservation is created
  hostServiceFeeType,
  //Host service fee set by admin at the time of creating reservation
  hostServiceFeeValue,
  //Host service fee type set by admin at the time of creating reservation
  interval
}) {
  let refundAmount = 0,
      nonPayoutAmount = 0,
      payoutAmount = 0,
      hostRefund = 0,
      refundDays = nights;
  let updatedHostFee = hostServiceFee,
      updatedGuestFee = guestServiceFee; //If the cancellation is done after or during check in date

  if (interval <= 0 && remainingNights < nights) {
    refundDays = remainingNights;
    isCleaingPrice = 0;
    guestServiceFee = 0;
  } //Refund amount to guest


  refundAmount = getFixedValue(refundDays * basePrice + isCleaingPrice); //Host Payout amount without subtracting host service fee. total has cleaning Fee with in it.

  hostRefund = getFixedValue(total - refundAmount); //Payout amount calculated with host service fee

  if (hostRefund > 0) {
    nonPayoutAmount = refundAmount; //guest service fee and cleaning fee won't be here
    //New host service fee calculated based on the host refund amount.

    updatedHostFee = getFixedValue(hostServiceFeeType === 'percentage' ? hostRefund * (Number(hostServiceFeeValue) / 100) : hostServiceFeeValue);
    payoutAmount = getFixedValue(hostRefund - updatedHostFee);
  } else {
    //Payout amount of host is zero
    nonPayoutAmount = getFixedValue(total - updatedHostFee);
    updatedGuestFee = 0; //Guest fee refunded

    updatedHostFee = 0;
  } //Adding guest service fee, if it could be refunded


  refundAmount = refundAmount + guestServiceFee;
  return {
    refundAmount,
    nonPayoutAmount,
    payoutAmount,
    refundDays,
    updatedHostFee,
    updatedGuestFee //If this value is 0, admin won't get guest service fee after cancellation

  };
}

/***/ }),

/***/ "./src/routes/cancel/Cancel.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/cancel/Cancel.css");
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

/***/ "./src/routes/cancel/Cancel.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cancellationData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelReservationData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userType"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guests"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"basePrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cleaningPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"confirmationCode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationState"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"discount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cancellationPolicy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"taxRate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFeeType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFeeValue"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPriceAverage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"bookingSpecialPricing"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"blockedDates"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPrice"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"cancellation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"policyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priorDays"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accommodationPriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accommodationBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accommodationDuringCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestFeePriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestFeeBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestFeeDuringCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostFeePriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostFeeBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostFeeDuringCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isEnable"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nonRefundableNightsPriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nonRefundableNightsBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nonRefundableNightsDuringCheckIn"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"listData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listingData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancellation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"policyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priorDays"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accommodationPriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accommodationBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accommodationDuringCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestFeePriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestFeeBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestFeeDuringCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostFeePriorCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostFeeBeforeCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostFeeDuringCheckIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isEnable"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"listPhotos"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"messageData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"guestData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":1924}};

module.exports = doc;

/***/ }),

/***/ "./src/routes/cancel/Cancel.js":
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
/* harmony import */ var _Cancel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/cancel/Cancel.css");
/* harmony import */ var _Cancel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Cancel_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Loader/Loader.js");
/* harmony import */ var _notFound_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/routes/notFound/NotFound.js");
/* harmony import */ var _components_Cancellation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Cancellation/Cancellation.js");
/* harmony import */ var _Cancel_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/routes/cancel/Cancel.graphql");
/* harmony import */ var _Cancel_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Cancel_graphql__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/cancel/Cancel.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Component



 // Graphql



class Cancel extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      cancellationData: {
        loading,
        cancelReservationData
      },
      userType
    } = this.props;

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Cancel_css__WEBPACK_IMPORTED_MODULE_4___default.a.space4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }
      }));
    }

    if (cancelReservationData === null || cancelReservationData === undefined) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notFound_NotFound__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancel_css__WEBPACK_IMPORTED_MODULE_4___default.a.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Cancel_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cancellation__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userType: userType,
      data: cancelReservationData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }
    })));
  }

}

_defineProperty(Cancel, "propTypes", {
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cancellationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    cancelReservationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired
});

_defineProperty(Cancel, "defaultProps", {
  cancellationData: {
    loading: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_Cancel_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_Cancel_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
  name: 'cancellationData',
  options: props => ({
    variables: {
      reservationId: props.reservationId,
      userType: props.userType
    },
    fetchPolicy: 'network-only'
  })
}))(Cancel));

/***/ }),

/***/ "./src/routes/cancel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _Cancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/cancel/Cancel.js");
/* harmony import */ var _notFound_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/notFound/NotFound.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/cancel/index.js";




const title = 'Cancel';
function action({
  store,
  params
}) {
  // From Redux Store
  const isAuthenticated = store.getState().runtime.isAuthenticated; // From URL

  const reservationId = params.reservationId;
  const userType = params.type;

  if (!isAuthenticated) {
    return {
      redirect: '/login'
    };
  }

  if (reservationId === undefined || isNaN(reservationId) || userType != 'host' && userType != 'guest') {
    return {
      title,
      component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notFound_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 26
        }
      })),
      status: 404
    };
  }

  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cancel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      reservationId: Number(reservationId),
      userType: userType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 24
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NhbmNlbC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvbm9kZV9tb2R1bGVzL3JlYWN0LWdlb3N1Z2dlc3QvbW9kdWxlL2dlb3N1Z2dlc3QuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ2FuY2VsbGF0aW9uL0NhbmNlbGxhdGlvbi5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL2NhbmNlbC9DYW5jZWwuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdlb3N1Z2dlc3QvbW9kdWxlL2dlb3N1Z2dlc3QuY3NzP2EzMmUiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9wdWJsaWMvU2l0ZUltYWdlcy9sYXJnZV9ub19pbWFnZS5qcGVnIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvUmVzZXJ2YXRpb24vY2FuY2VsUmVzZXJ2YXRpb24uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9SZXNlcnZhdGlvbi9nZXRBbGxSZXNlcnZhdGlvblF1ZXJ5LmdyYXBocWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FuY2VsbGF0aW9uL0NhbmNlbGxhdGlvbi5jc3M/NjBkOCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0NhbmNlbGxhdGlvbi9DYW5jZWxsYXRpb24uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9DYW5jZWxsYXRpb24vRGV0YWlsc0Zvckd1ZXN0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ2FuY2VsbGF0aW9uL0RldGFpbHNGb3JIb3N0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ2FuY2VsbGF0aW9uL1N1bW1hcnkuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9DYW5jZWxsYXRpb24vc3VibWl0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ2FuY2VsbGF0aW9uL3ZhbGlkYXRlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ3VycmVuY3lDb252ZXJ0ZXIvQ3VycmVuY3lDb252ZXJ0ZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2hlbHBlcnMvY2FuY2VsbGF0aW9uRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhbmNlbC9DYW5jZWwuY3NzPzBlYzMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL2NhbmNlbC9DYW5jZWwuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvY2FuY2VsL0NhbmNlbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvY2FuY2VsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBUaGUgZ2Vvc3VnZ2VzdCBtb2R1bGVcXG4gKiBOT1RFOiBkdXBsaWNhdGVkIGZvbnQtc2l6ZXMnIGFyZSBmb3IgYnJvd3NlcnMgd2hpY2ggZG9uJ3Qgc3VwcG9ydCByZW0gKG9ubHkgSUUgOClcXG4gKi9cXG4uZ2Vvc3VnZ2VzdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5nZW9zdWdnZXN0X19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjM2Q0NjRkO1xcbiAgcGFkZGluZzogLjVlbSAxZW07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxufVxcbi5nZW9zdWdnZXN0X19pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMyNjdkYzA7XFxuICBib3gtc2hhZG93OiAwIDAgMCB0cmFuc3BhcmVudDtcXG59XFxuLmdlb3N1Z2dlc3RfX3N1Z2dlc3RzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1heC1oZWlnaHQ6IDI1ZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjY3ZGMwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgei1pbmRleDogNTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzLCBib3JkZXIgMC4ycztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzLCBib3JkZXIgMC4ycztcXG59XFxuLmdlb3N1Z2dlc3RfX3N1Z2dlc3RzLS1oaWRkZW4ge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi8qKlxcbiAqIEEgZ2Vvc3VnZ2VzdCBpdGVtXFxuICovXFxuLmdlb3N1Z2dlc3RfX2l0ZW0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogLjVlbSAuNjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdlb3N1Z2dlc3RfX2l0ZW06aG92ZXIsXFxuLmdlb3N1Z2dlc3RfX2l0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG59XFxuLmdlb3N1Z2dlc3RfX2l0ZW0tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMjY3ZGMwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5nZW9zdWdnZXN0X19pdGVtLS1hY3RpdmU6aG92ZXIsXFxuLmdlb3N1Z2dlc3RfX2l0ZW0tLWFjdGl2ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbn1cXG4uZ2Vvc3VnZ2VzdF9faXRlbV9fbWF0Y2hlZC10ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkNhbmNlbGxhdGlvbi1lcnJvck1lc3NhZ2UtVXVVZ2wge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5DYW5jZWxsYXRpb24tc3BhY2UxLWdOdHJxIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZTIteXlHeVYge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZTMtMUV4My0ge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZTQtMnFEemgge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZTUtMlJlUVcge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZTYtM2lLMzQge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZTctM0stdkcge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZVRvcDgtM2loSVkge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1zcGFjZVRvcDEtMUpRcVAge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wMi0xZl9jZyB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wMy05dE4tRyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wNC0xNHpvVSB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wNS1Mbmp5dSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wNi0zQTEtVyB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wNy0za1NEZyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXNwYWNlVG9wOC0zaWhJWSB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLW5vTWFyZ2luLTJFd2RIIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXBhZGRpbmcxLTFnZWluIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZzItMmlBUVIge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZzMtMzFnUkYge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZzQtMmlUekQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZzUtMVNuRmQge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZzYtcVY1QjYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZzctS09Fa3kge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcGFkZGluZ1RvcDEtM3BBVWEge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wMi0zeklnOCB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wMy0ydm5LYiB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wNC0xTlRPcCB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wNS0yQ0RpayB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wNi0zLXk0ciB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wNy04UmwtNSB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi1ub1BhZGRpbmctMnVPcU0ge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRCb2xkLTExZXlhIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tdGV4dEJvbGRlci00OHd6OSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHROb3JtYWwtX3NJb3cge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLkNhbmNlbGxhdGlvbi10ZXh0RGFya0JsdWUtM1VSdTEge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi10ZXh0TGlnaHRCbHVlLTFhQ3lLIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRMaWdodFNhbmRsZUdyZWVuLTNXTHV2IHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tdGV4dExpZ2h0QnJvd24tMW82VWcge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tdGV4dE1lZGl1bU1hcm9vbi0xRHJxNyB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRCcm93bi0xOV8taiB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi10ZXh0TWFyb29uLU1aMTF5IHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHREYXJrQnJvd24tbV9jU28ge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLkNhbmNlbGxhdGlvbi10ZXh0TWVkaXVtQnJvd24tQkVBd2cge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tdGV4dFNreUJsdWUtM09HSHAge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRHcmF5LTN5alp4IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tbGFuZGluZ0NvbnRlbnRUaXRsZS1zVmNRSCB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uQ2FuY2VsbGF0aW9uLWxhbmRpbmdTdWJUaXRsZS0xdk05LSB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRhcmVhSW5wdXQtMVRLNVcge1xcblxcdGhlaWdodDogODBweCAhaW1wb3J0YW50O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRjb2xvcjogIzc2NzY3NjtcXG59XFxuLkNhbmNlbGxhdGlvbi10ZXh0SGlnaC0yZ3Z4MiB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRUcnVuY2F0ZS0xQXlqUCB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdCAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRMaW5lLXhKTzhZIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcblxcdGNvbG9yOiAjMDczNjg3O1xcblxcdGNvbG9yOiB2YXIoLS1idG4tc2Vjb25kYXJ5LWJnKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5DYW5jZWxsYXRpb24tdGV4dEJvbGQtMTFleWEge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uQ2FuY2VsbGF0aW9uLWZvcm1Hcm91cC1Lek1fWCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLWxhbmRpbmdTdGVwLTJFM3B4IHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Y29sb3I6ICM3Njc2NzY7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLkNhbmNlbGxhdGlvbi1ob3Jpem9udGFsTGluZVRocm91Z2gtdnh2N1oge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1hcmdpbjogMTVweCAxcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Y29sb3I6ICM3Njc2NzY7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLkNhbmNlbGxhdGlvbi1wYW5lbEhlYWRlci1JcUgtTiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDIwcHggNXB4ICNlZWViZWI7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IDVweCAjZWVlYmViO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXByb2ZpbGVBdmF0YXJTZWN0aW9uLTNEZzVUIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0bWFyZ2luLXRvcDogLTUwcHg7XFxufVxcbi5DYW5jZWxsYXRpb24tcHJvZmlsZUF2YXRhckxpbmstMXYxZHgge1xcblxcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdCAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4uQ2FuY2VsbGF0aW9uLXRleHRSaWdodC0zSDNWSyB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5DYW5jZWxsYXRpb24tdGV4dExlZnQtS2NEQ1oge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcHVsbFJpZ2h0LU94bnczIHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5DYW5jZWxsYXRpb24tcHVsbExlZnQtM3BYZVQge1xcblxcdGZsb2F0OiBsZWZ0O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLWNhbmNlbEJnLTFKZWtmIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDE0MHB4O1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbn1cXG4uQ2FuY2VsbGF0aW9uLWNhbmNlbExlZnRCZy1BTTdOYyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0cGFkZGluZzogMXB4IDIycHggNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTVweCA1cHggI2VlZWJlYjtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggNXB4ICNlZWViZWI7XFxufVxcbi5DYW5jZWxsYXRpb24tY2FuY2VsbGF0aW9uLTNIcmZjIGEge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRjb2xvcjogIzc2NzY3NjtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLkNhbmNlbGxhdGlvbi1ncmVlbkNvbG9yLVRSejVvIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogIzAwN2Q3MyAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5DYW5jZWxsYXRpb24tdGV4dEhpZ2gtMmd2eDIge1xcblxcdFxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRcXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS40MztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxuXFx0LkNhbmNlbGxhdGlvbi1wdWxsTGVmdC0zcFhlVCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0fVxcblxcdC5DYW5jZWxsYXRpb24tcHVsbFJpZ2h0LU94bnczIHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHR9XFxuXFx0LkNhbmNlbGxhdGlvbi1idG5XaWR0aC0zd09NTiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcXG5cXHQuQ2FuY2VsbGF0aW9uLXRleHRIaWdoLTJndngyIHtcXG5cXHRcXHRmb250LXNpemU6IDEycHg7XFxuXFx0fVxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ2FuY2VsbGF0aW9uL0NhbmNlbGxhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyx3QkFBd0I7Q0FDeEIsY0FBYztDQUNkLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2Y7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLDJCQUEyQjtJQUN4Qix3QkFBd0I7Q0FDM0I7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEOzs7O0NBSUMsZUFBZTtDQUNmLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsaUNBQWlDO0NBQ2pDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsMkNBQTJDO1NBQ25DLG1DQUFtQztDQUMzQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msb0NBQW9DO1NBQzVCLDRCQUE0QjtDQUNwQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLDJDQUEyQztTQUNuQyxtQ0FBbUM7Q0FDM0M7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCO0NBQ0RcIixcImZpbGVcIjpcIkNhbmNlbGxhdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLmVycm9yTWVzc2FnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4ubGFuZGluZ0NvbnRlbnRUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubGFuZGluZ1N1YlRpdGxlIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxufVxcbi50ZXh0YXJlYUlucHV0IHtcXG5cXHRoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0Y29sb3I6ICM3Njc2NzY7XFxufVxcbi50ZXh0SGlnaCB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4udGV4dFRydW5jYXRlIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0ICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi50ZXh0TGluZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbmEsXFxuYTpob3ZlcixcXG5hOmZvY3VzLFxcbmE6YWN0aXZlIHtcXG5cXHRjb2xvcjogIzA3MzY4NztcXG5cXHRjb2xvcjogdmFyKC0tYnRuLXNlY29uZGFyeS1iZyk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZm9ybUdyb3VwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5sYW5kaW5nU3RlcCB7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5ob3Jpem9udGFsTGluZVRocm91Z2gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1hcmdpbjogMTVweCAxcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Y29sb3I6ICM3Njc2NzY7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMjBweCA1cHggI2VlZWJlYjtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggNXB4ICNlZWViZWI7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcbi5wcm9maWxlQXZhdGFyU2VjdGlvbiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdG1hcmdpbi10b3A6IC01MHB4O1xcbn1cXG4ucHJvZmlsZUF2YXRhckxpbmsge1xcblxcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdCAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4udGV4dFJpZ2h0IHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnRleHRMZWZ0IHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucHVsbFJpZ2h0IHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5wdWxsTGVmdCB7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxufVxcbi5jYW5jZWxCZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxNDBweDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuLmNhbmNlbExlZnRCZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0cGFkZGluZzogMXB4IDIycHggNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTVweCA1cHggI2VlZWJlYjtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggNXB4ICNlZWViZWI7XFxufVxcbi5jYW5jZWxsYXRpb24gYSB7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uZ3JlZW5Db2xvciB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICMwMDdkNzMgIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQudGV4dEhpZ2gge1xcblxcdFxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRcXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS40MztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxuXFx0LnB1bGxMZWZ0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHR9XFxuXFx0LnB1bGxSaWdodCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0fVxcblxcdC5idG5XaWR0aCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcXG5cXHQudGV4dEhpZ2gge1xcblxcdFxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJDYW5jZWxsYXRpb24tZXJyb3JNZXNzYWdlLVV1VWdsXCIsXG5cdFwic3BhY2UxXCI6IFwiQ2FuY2VsbGF0aW9uLXNwYWNlMS1nTnRycVwiLFxuXHRcInNwYWNlMlwiOiBcIkNhbmNlbGxhdGlvbi1zcGFjZTIteXlHeVZcIixcblx0XCJzcGFjZTNcIjogXCJDYW5jZWxsYXRpb24tc3BhY2UzLTFFeDMtXCIsXG5cdFwic3BhY2U0XCI6IFwiQ2FuY2VsbGF0aW9uLXNwYWNlNC0ycUR6aFwiLFxuXHRcInNwYWNlNVwiOiBcIkNhbmNlbGxhdGlvbi1zcGFjZTUtMlJlUVdcIixcblx0XCJzcGFjZTZcIjogXCJDYW5jZWxsYXRpb24tc3BhY2U2LTNpSzM0XCIsXG5cdFwic3BhY2U3XCI6IFwiQ2FuY2VsbGF0aW9uLXNwYWNlNy0zSy12R1wiLFxuXHRcInNwYWNlVG9wOFwiOiBcIkNhbmNlbGxhdGlvbi1zcGFjZVRvcDgtM2loSVlcIixcblx0XCJzcGFjZVRvcDFcIjogXCJDYW5jZWxsYXRpb24tc3BhY2VUb3AxLTFKUXFQXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiQ2FuY2VsbGF0aW9uLXNwYWNlVG9wMi0xZl9jZ1wiLFxuXHRcInNwYWNlVG9wM1wiOiBcIkNhbmNlbGxhdGlvbi1zcGFjZVRvcDMtOXROLUdcIixcblx0XCJzcGFjZVRvcDRcIjogXCJDYW5jZWxsYXRpb24tc3BhY2VUb3A0LTE0em9VXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiQ2FuY2VsbGF0aW9uLXNwYWNlVG9wNS1Mbmp5dVwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIkNhbmNlbGxhdGlvbi1zcGFjZVRvcDYtM0ExLVdcIixcblx0XCJzcGFjZVRvcDdcIjogXCJDYW5jZWxsYXRpb24tc3BhY2VUb3A3LTNrU0RnXCIsXG5cdFwibm9NYXJnaW5cIjogXCJDYW5jZWxsYXRpb24tbm9NYXJnaW4tMkV3ZEhcIixcblx0XCJwYWRkaW5nMVwiOiBcIkNhbmNlbGxhdGlvbi1wYWRkaW5nMS0xZ2VpblwiLFxuXHRcInBhZGRpbmcyXCI6IFwiQ2FuY2VsbGF0aW9uLXBhZGRpbmcyLTJpQVFSXCIsXG5cdFwicGFkZGluZzNcIjogXCJDYW5jZWxsYXRpb24tcGFkZGluZzMtMzFnUkZcIixcblx0XCJwYWRkaW5nNFwiOiBcIkNhbmNlbGxhdGlvbi1wYWRkaW5nNC0yaVR6RFwiLFxuXHRcInBhZGRpbmc1XCI6IFwiQ2FuY2VsbGF0aW9uLXBhZGRpbmc1LTFTbkZkXCIsXG5cdFwicGFkZGluZzZcIjogXCJDYW5jZWxsYXRpb24tcGFkZGluZzYtcVY1QjZcIixcblx0XCJwYWRkaW5nN1wiOiBcIkNhbmNlbGxhdGlvbi1wYWRkaW5nNy1LT0VreVwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiQ2FuY2VsbGF0aW9uLXBhZGRpbmdUb3AxLTNwQVVhXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJDYW5jZWxsYXRpb24tcGFkZGluZ1RvcDItM3pJZzhcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wMy0ydm5LYlwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiQ2FuY2VsbGF0aW9uLXBhZGRpbmdUb3A0LTFOVE9wXCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJDYW5jZWxsYXRpb24tcGFkZGluZ1RvcDUtMkNEaWtcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkNhbmNlbGxhdGlvbi1wYWRkaW5nVG9wNi0zLXk0clwiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiQ2FuY2VsbGF0aW9uLXBhZGRpbmdUb3A3LThSbC01XCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiQ2FuY2VsbGF0aW9uLW5vUGFkZGluZy0ydU9xTVwiLFxuXHRcInRleHRCb2xkXCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRCb2xkLTExZXlhXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIkNhbmNlbGxhdGlvbi10ZXh0Qm9sZGVyLTQ4d3o5XCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIkNhbmNlbGxhdGlvbi10ZXh0Tm9ybWFsLV9zSW93XCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiQ2FuY2VsbGF0aW9uLXRleHREYXJrQmx1ZS0zVVJ1MVwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJDYW5jZWxsYXRpb24tdGV4dExpZ2h0Qmx1ZS0xYUN5S1wiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRMaWdodFNhbmRsZUdyZWVuLTNXTHV2XCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJDYW5jZWxsYXRpb24tdGV4dExpZ2h0QnJvd24tMW82VWdcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRNZWRpdW1NYXJvb24tMURycTdcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJDYW5jZWxsYXRpb24tdGV4dEJyb3duLTE5Xy1qXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkNhbmNlbGxhdGlvbi10ZXh0TWFyb29uLU1aMTF5XCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIkNhbmNlbGxhdGlvbi10ZXh0RGFya0Jyb3duLW1fY1NvXCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRNZWRpdW1Ccm93bi1CRUF3Z1wiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRTa3lCbHVlLTNPR0hwXCIsXG5cdFwidGV4dEdyYXlcIjogXCJDYW5jZWxsYXRpb24tdGV4dEdyYXktM3lqWnhcIixcblx0XCJsYW5kaW5nQ29udGVudFRpdGxlXCI6IFwiQ2FuY2VsbGF0aW9uLWxhbmRpbmdDb250ZW50VGl0bGUtc1ZjUUhcIixcblx0XCJsYW5kaW5nU3ViVGl0bGVcIjogXCJDYW5jZWxsYXRpb24tbGFuZGluZ1N1YlRpdGxlLTF2TTktXCIsXG5cdFwidGV4dGFyZWFJbnB1dFwiOiBcIkNhbmNlbGxhdGlvbi10ZXh0YXJlYUlucHV0LTFUSzVXXCIsXG5cdFwidGV4dEhpZ2hcIjogXCJDYW5jZWxsYXRpb24tdGV4dEhpZ2gtMmd2eDJcIixcblx0XCJ0ZXh0VHJ1bmNhdGVcIjogXCJDYW5jZWxsYXRpb24tdGV4dFRydW5jYXRlLTFBeWpQXCIsXG5cdFwidGV4dExpbmVcIjogXCJDYW5jZWxsYXRpb24tdGV4dExpbmUteEpPOFlcIixcblx0XCJmb3JtR3JvdXBcIjogXCJDYW5jZWxsYXRpb24tZm9ybUdyb3VwLUt6TV9YXCIsXG5cdFwibGFuZGluZ1N0ZXBcIjogXCJDYW5jZWxsYXRpb24tbGFuZGluZ1N0ZXAtMkUzcHhcIixcblx0XCJob3Jpem9udGFsTGluZVRocm91Z2hcIjogXCJDYW5jZWxsYXRpb24taG9yaXpvbnRhbExpbmVUaHJvdWdoLXZ4djdaXCIsXG5cdFwicGFuZWxIZWFkZXJcIjogXCJDYW5jZWxsYXRpb24tcGFuZWxIZWFkZXItSXFILU5cIixcblx0XCJwcm9maWxlQXZhdGFyU2VjdGlvblwiOiBcIkNhbmNlbGxhdGlvbi1wcm9maWxlQXZhdGFyU2VjdGlvbi0zRGc1VFwiLFxuXHRcInByb2ZpbGVBdmF0YXJMaW5rXCI6IFwiQ2FuY2VsbGF0aW9uLXByb2ZpbGVBdmF0YXJMaW5rLTF2MWR4XCIsXG5cdFwidGV4dFJpZ2h0XCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRSaWdodC0zSDNWS1wiLFxuXHRcInRleHRMZWZ0XCI6IFwiQ2FuY2VsbGF0aW9uLXRleHRMZWZ0LUtjRENaXCIsXG5cdFwicHVsbFJpZ2h0XCI6IFwiQ2FuY2VsbGF0aW9uLXB1bGxSaWdodC1PeG53M1wiLFxuXHRcInB1bGxMZWZ0XCI6IFwiQ2FuY2VsbGF0aW9uLXB1bGxMZWZ0LTNwWGVUXCIsXG5cdFwiY2FuY2VsQmdcIjogXCJDYW5jZWxsYXRpb24tY2FuY2VsQmctMUpla2ZcIixcblx0XCJjYW5jZWxMZWZ0QmdcIjogXCJDYW5jZWxsYXRpb24tY2FuY2VsTGVmdEJnLUFNN05jXCIsXG5cdFwiY2FuY2VsbGF0aW9uXCI6IFwiQ2FuY2VsbGF0aW9uLWNhbmNlbGxhdGlvbi0zSHJmY1wiLFxuXHRcImdyZWVuQ29sb3JcIjogXCJDYW5jZWxsYXRpb24tZ3JlZW5Db2xvci1UUno1b1wiLFxuXHRcImJ0bldpZHRoXCI6IFwiQ2FuY2VsbGF0aW9uLWJ0bldpZHRoLTN3T01OXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5DYW5jZWwtcm9vdC0yZHZEUiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMHB4O1xcbn1cXG4uQ2FuY2VsLWNvbnRhaW5lci0xVlJiNyB7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvY2FuY2VsL0NhbmNlbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQ0FBb0M7Q0FDckNcIixcImZpbGVcIjpcIkNhbmNlbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnJvb3Qge1xcblxcdHBhZGRpbmctbGVmdDogMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDBweDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJDYW5jZWwtcm9vdC0yZHZEUlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNhbmNlbC1jb250YWluZXItMVZSYjdcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2Vvc3VnZ2VzdC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2Vvc3VnZ2VzdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2Vvc3VnZ2VzdC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL1NpdGVJbWFnZXMvbGFyZ2Vfbm9faW1hZ2UuanBlZz82M2RjNmEyZlwiOyIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuaW1wb3J0IHtcbiAgQ0FOQ0VMX1JFU0VSVkFUSU9OX1NUQVJULFxuICBDQU5DRUxfUkVTRVJWQVRJT05fU1VDQ0VTUyxcbiAgQ0FOQ0VMX1JFU0VSVkFUSU9OX1NUQVRFX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9jb3JlL2hpc3RvcnknO1xuaW1wb3J0IGdldEFsbFJlc2VydmF0aW9uUXVlcnkgZnJvbSAnLi9nZXRBbGxSZXNlcnZhdGlvblF1ZXJ5LmdyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsKFxuICByZXNlcnZhdGlvbklkLFxuICBjYW5jZWxsYXRpb25Qb2xpY3ksXG4gIHJlZnVuZFRvR3Vlc3QsXG4gIHBheW91dFRvSG9zdCxcbiAgZ3Vlc3RTZXJ2aWNlRmVlLFxuICBob3N0U2VydmljZUZlZSxcbiAgdG90YWwsXG4gIGN1cnJlbmN5LFxuICB0aHJlYWRJZCxcbiAgY2FuY2VsbGVkQnksXG4gIG1lc3NhZ2UsXG4gIGNoZWNrSW4sXG4gIGNoZWNrT3V0LFxuICBndWVzdHMsXG4gIGxpc3RUaXRsZSxcbiAgY29uZmlybWF0aW9uQ29kZSxcbiAgaG9zdE5hbWUsXG4gIGd1ZXN0TmFtZSxcbiAgaG9zdEVtYWlsLFxuICBndWVzdEVtYWlsLFxuICB1c2VyVHlwZVxuKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENBTkNFTF9SRVNFUlZBVElPTl9TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiBjYW5jZWxSZXNlcnZhdGlvbihcblx0XHQgICRyZXNlcnZhdGlvbklkOiBJbnQhLFxuXHRcdCAgJGNhbmNlbGxhdGlvblBvbGljeTogU3RyaW5nISxcblx0XHQgICRyZWZ1bmRUb0d1ZXN0OiBGbG9hdCEsXG5cdFx0ICAkcGF5b3V0VG9Ib3N0OiBGbG9hdCEsXG5cdFx0ICAkZ3Vlc3RTZXJ2aWNlRmVlOiBGbG9hdCEsXG5cdFx0ICAkaG9zdFNlcnZpY2VGZWU6IEZsb2F0ISxcblx0XHQgICR0b3RhbDogRmxvYXQhLFxuXHRcdCAgJGN1cnJlbmN5OiBTdHJpbmchLFxuXHRcdCAgJHRocmVhZElkOiBJbnQhLFxuXHRcdCAgJGNhbmNlbGxlZEJ5OiBTdHJpbmchLFxuXHRcdCAgJG1lc3NhZ2U6IFN0cmluZyEsXG5cdFx0ICAkY2hlY2tJbjogU3RyaW5nISxcbiAgICAgIFx0ICAkY2hlY2tPdXQ6IFN0cmluZyEsXG4gICAgICBcdCAgJGd1ZXN0czogSW50IVxuXHRcdCl7XG5cdFx0ICAgIGNhbmNlbFJlc2VydmF0aW9uKFxuXHRcdCAgICAgIHJlc2VydmF0aW9uSWQ6ICRyZXNlcnZhdGlvbklkLFxuXHRcdCAgICAgIGNhbmNlbGxhdGlvblBvbGljeTogJGNhbmNlbGxhdGlvblBvbGljeSxcblx0XHQgICAgICByZWZ1bmRUb0d1ZXN0OiAkcmVmdW5kVG9HdWVzdCxcblx0XHQgICAgICBwYXlvdXRUb0hvc3Q6ICRwYXlvdXRUb0hvc3QsXG5cdFx0ICAgICAgZ3Vlc3RTZXJ2aWNlRmVlOiAkZ3Vlc3RTZXJ2aWNlRmVlLFxuXHRcdCAgICAgIGhvc3RTZXJ2aWNlRmVlOiAkaG9zdFNlcnZpY2VGZWUsXG5cdFx0ICAgICAgdG90YWw6ICR0b3RhbCxcblx0XHQgICAgICBjdXJyZW5jeTogJGN1cnJlbmN5LFxuXHRcdCAgICAgIHRocmVhZElkOiAkdGhyZWFkSWQsXG5cdFx0ICAgICAgY2FuY2VsbGVkQnk6ICRjYW5jZWxsZWRCeSxcblx0XHQgICAgICBtZXNzYWdlOiAkbWVzc2FnZSxcblx0XHQgICAgICBjaGVja0luOiAkY2hlY2tJbixcblx0XHQgICAgICBjaGVja091dDogJGNoZWNrT3V0LFxuXHRcdCAgICAgIGd1ZXN0czogJGd1ZXN0c1xuXHRcdCAgICApIHtcblx0XHQgICAgICAgIHN0YXR1c1xuXHRcdCAgICB9XG5cdFx0fVxuICAgICAgYDtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHJlc2VydmF0aW9uSWQsXG4gICAgICAgICAgY2FuY2VsbGF0aW9uUG9saWN5LFxuICAgICAgICAgIHJlZnVuZFRvR3Vlc3QsXG4gICAgICAgICAgcGF5b3V0VG9Ib3N0LFxuICAgICAgICAgIGd1ZXN0U2VydmljZUZlZSxcbiAgICAgICAgICBob3N0U2VydmljZUZlZSxcbiAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICBjYW5jZWxsZWRCeSxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIGNoZWNrSW4sXG4gICAgICAgICAgY2hlY2tPdXQsXG4gICAgICAgICAgZ3Vlc3RzXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IGdldEFsbFJlc2VydmF0aW9uUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdXNlclR5cGUsXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgICBkYXRlRmlsdGVyOiAnY3VycmVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5jYW5jZWxSZXNlcnZhdGlvbiAmJiBkYXRhLmNhbmNlbFJlc2VydmF0aW9uLnN0YXR1cyA9PT0gJzIwMCcpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IENBTkNFTF9SRVNFUlZBVElPTl9TVUNDRVNTLFxuICAgICAgICB9KTtcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJDYW5jZWwgUmVzZXJ2YXRpb25cIiwgXCJSZXNlcnZhdGlvbiBjYW5jZWxsZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkQnkgPT09ICdob3N0Jykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvcmVzZXJ2YXRpb24vY3VycmVudCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvdHJpcHMvY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEuY2FuY2VsUmVzZXJ2YXRpb24gJiYgZGF0YS5jYW5jZWxSZXNlcnZhdGlvbi5zdGF0dXMgPT09ICc0MDAnKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBDQU5DRUxfUkVTRVJWQVRJT05fU1VDQ0VTUyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkNhbmNlbCBSZXNlcnZhdGlvblwiLCBcIkl0IGxvb2tzIGxpa2UgeW91ciByZXNlcnZhdGlvbiBpcyBhbHJlYWR5IHVwZGF0ZWQhXCIpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQ0FOQ0VMX1JFU0VSVkFUSU9OX1NUQVRFX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59IiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEFsbFJlc2VydmF0aW9uXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlclR5cGVcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVudFBhZ2VcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19fSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGF0ZUZpbHRlclwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRBbGxSZXNlcnZhdGlvblwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyVHlwZVwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlclR5cGVcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW50UGFnZVwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVudFBhZ2VcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkYXRlRmlsdGVyXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkYXRlRmlsdGVyXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc2VydmF0aW9uRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpc3RJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNoZWNrT3V0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25TdGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibWVzc2FnZURhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0RGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0cmVldFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjaXR5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvdW50cnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiemlwY29kZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0RGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByb2ZpbGVJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkaXNwbGF5TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwaWN0dXJlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBob25lTnVtYmVyXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJEYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZW1haWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3REYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJvZmlsZUlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRpc3BsYXlOYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBpY3R1cmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGhvbmVOdW1iZXJcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlckRhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbWFpbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW50UGFnZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo4OTB9fTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9DYW5jZWxsYXRpb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0NhbmNlbGxhdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9DYW5jZWxsYXRpb24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG4vLyBSZWR1eCBGb3JtXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7XG4gIEdyaWQsXG4gIFJvdyxcbiAgRm9ybUdyb3VwLFxuICBDb2wsXG4gIEZvcm1Db250cm9sXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0NhbmNlbGxhdGlvbi5jc3MnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuL1N1bW1hcnknO1xuaW1wb3J0IERldGFpbHNGb3JIb3N0IGZyb20gJy4vRGV0YWlsc0Zvckhvc3QnO1xuaW1wb3J0IERldGFpbHNGb3JHdWVzdCBmcm9tICcuL0RldGFpbHNGb3JHdWVzdCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vLi4vcm91dGVzL25vdEZvdW5kL05vdEZvdW5kJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuaW1wb3J0IHN1Ym1pdCBmcm9tICcuL3N1Ym1pdCc7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vSGVscGVyc1xuaW1wb3J0IHsgZ2V0RGF0ZVJhbmdlcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZGF0ZVJhbmdlJztcblxuY2xhc3MgQ2FuY2VsbGF0aW9uUG9saWN5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgdXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGxpc3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tPdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgaG9zdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBiYXNlUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGNsZWFuaW5nUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY29uZmlybWF0aW9uQ29kZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcmVzZXJ2YXRpb25TdGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGlzdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGNvdW50cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxpc3RpbmdEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIGNhbmNlbGxhdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBwb2xpY3lOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBwcmlvckRheXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGFjY29tbW9kYXRpb25QcmlvckNoZWNrSW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGFjY29tbW9kYXRpb25CZWZvcmVDaGVja0luOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBhY2NvbW1vZGF0aW9uRHVyaW5nQ2hlY2tJbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgZ3Vlc3RGZWVQcmlvckNoZWNrSW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGd1ZXN0RmVlQmVmb3JlQ2hlY2tJbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgZ3Vlc3RGZWVEdXJpbmdDaGVja0luOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgbWVzc2FnZURhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB9KSxcbiAgICAgIGhvc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgICAgZ3Vlc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB9KSxcbiAgICB9KVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgY2hlY2tJbjogbnVsbCxcbiAgICAgIGNoZWNrT3V0OiBudWxsXG4gICAgfVxuICB9O1xuXG4gIHJlbmRlckZvcm1Db250cm9sVGV4dEFyZWEgPSAoeyBpbnB1dCwgbGFiZWwsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWx9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNhbmNlbGxhdGlvbihpbnRlcnZhbCwgbmlnaHRzKSB7XG4gICAgY29uc3QgeyBkYXRhLCBkYXRhOiB7IGxpc3REYXRhOiB7IGxpc3RpbmdEYXRhIH0gfSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBhY2NvbW9kYXRpb24sIGd1ZXN0RmVlcywgcmVtYWluaW5nTmlnaHRzLCBwb2xpY3lOYW1lLCBwcmlvckRheXMsIHBvbGljeUlkLCBjYW5jZWxsYXRpb24sIG5vblJlZnVuZGFibGVOaWdodHMsIHR5cGUgPSAncHJpb3JDaGVja0luJztcbiAgICBjYW5jZWxsYXRpb24gPSBkYXRhICYmIGRhdGEuY2FuY2VsbGF0aW9uID8gZGF0YSAmJiBkYXRhLmNhbmNlbGxhdGlvbiA6IGxpc3RpbmdEYXRhICYmIGxpc3RpbmdEYXRhLmNhbmNlbGxhdGlvbjtcblxuICAgIGxldCBjYW5jZWxsYXRpb25SdWxlT2JqID0ge1xuICAgICAgYWNjb21vZGF0aW9uLFxuICAgICAgZ3Vlc3RGZWVzLFxuICAgICAgbm9uUmVmdW5kYWJsZU5pZ2h0cyxcbiAgICAgIHByaW9yRGF5cyxcbiAgICAgIHBvbGljeU5hbWUsXG4gICAgICByZW1haW5pbmdOaWdodHMsXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIG5pZ2h0cyxcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJ2YWwgPiBjYW5jZWxsYXRpb24ucHJpb3JEYXlzKSB7XG4gICAgICB0eXBlID0gJ3ByaW9yQ2hlY2tJbidcbiAgICB9IGVsc2UgaWYgKGludGVydmFsIDw9IGNhbmNlbGxhdGlvbi5wcmlvckRheXMgJiYgaW50ZXJ2YWwgPiAwKSB7XG4gICAgICB0eXBlID0gJ2JlZm9yZUNoZWNrSW4nXG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSAnZHVyaW5nQ2hlY2tJbidcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAncHJpb3JDaGVja0luJykge1xuICAgICAgY2FuY2VsbGF0aW9uUnVsZU9iaiA9IHtcbiAgICAgICAgYWNjb21vZGF0aW9uOiBjYW5jZWxsYXRpb24uYWNjb21tb2RhdGlvblByaW9yQ2hlY2tJbixcbiAgICAgICAgZ3Vlc3RGZWVzOiBjYW5jZWxsYXRpb24uZ3Vlc3RGZWVQcmlvckNoZWNrSW4sXG4gICAgICAgIG5vblJlZnVuZGFibGVOaWdodHM6IGNhbmNlbGxhdGlvbi5ub25SZWZ1bmRhYmxlTmlnaHRzUHJpb3JDaGVja0luLFxuICAgICAgICBwcmlvckRheXM6IGNhbmNlbGxhdGlvbi5wcmlvckRheXMsXG4gICAgICAgIHBvbGljeU5hbWU6IGNhbmNlbGxhdGlvbi5wb2xpY3lOYW1lLFxuICAgICAgICBpbnRlcnZhbCxcbiAgICAgICAgbmlnaHRzLFxuICAgICAgICBjbGVhbmluZ0ZlZVBlcmNlbnQ6IDEwMFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnYmVmb3JlQ2hlY2tJbicpIHtcbiAgICAgIGNhbmNlbGxhdGlvblJ1bGVPYmogPSB7XG4gICAgICAgIGFjY29tb2RhdGlvbjogY2FuY2VsbGF0aW9uLmFjY29tbW9kYXRpb25CZWZvcmVDaGVja0luLFxuICAgICAgICBndWVzdEZlZXM6IGNhbmNlbGxhdGlvbi5ndWVzdEZlZUJlZm9yZUNoZWNrSW4sXG4gICAgICAgIG5vblJlZnVuZGFibGVOaWdodHM6IGNhbmNlbGxhdGlvbi5ub25SZWZ1bmRhYmxlTmlnaHRzQmVmb3JlQ2hlY2tJbixcbiAgICAgICAgcHJpb3JEYXlzOiBjYW5jZWxsYXRpb24ucHJpb3JEYXlzLFxuICAgICAgICBwb2xpY3lOYW1lOiBjYW5jZWxsYXRpb24ucG9saWN5TmFtZSxcbiAgICAgICAgaW50ZXJ2YWwsXG4gICAgICAgIG5pZ2h0cyxcbiAgICAgICAgY2xlYW5pbmdGZWVQZXJjZW50OiAxMDBcbiAgICAgIH1cbiAgICAgIGlmIChjYW5jZWxsYXRpb24uaWQgPT09IDMpIGNhbmNlbGxhdGlvblJ1bGVPYmpbJ2NsZWFuaW5nRmVlUGVyY2VudCddID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsbGF0aW9uUnVsZU9iaiA9IHtcbiAgICAgICAgYWNjb21vZGF0aW9uOiBjYW5jZWxsYXRpb24uYWNjb21tb2RhdGlvbkR1cmluZ0NoZWNrSW4sXG4gICAgICAgIGd1ZXN0RmVlczogY2FuY2VsbGF0aW9uLmd1ZXN0RmVlRHVyaW5nQ2hlY2tJbixcbiAgICAgICAgbm9uUmVmdW5kYWJsZU5pZ2h0czogY2FuY2VsbGF0aW9uLm5vblJlZnVuZGFibGVOaWdodHNEdXJpbmdDaGVja0luLFxuICAgICAgICBwcmlvckRheXM6IGNhbmNlbGxhdGlvbi5wcmlvckRheXMsXG4gICAgICAgIHBvbGljeU5hbWU6IGNhbmNlbGxhdGlvbi5wb2xpY3lOYW1lLFxuICAgICAgICAvL0lmIGludGVydmFsIGlzIHplcm8sIHRoZW4gY2hlY2staW4gZGF0ZSBpcyB0b2RheVxuICAgICAgICAvL0lmIGludGVydmFsIGlzIG5vdCB6ZXJvLCBpdCBzaG91bGQgYmUgbmVnYXRpdmUgdmFsdWUuIFRvIGluY2x1ZGUgY2hlY2sgaW4gZGF0ZSwgc3VidHJhY3QgMSBmcm9tIHRoZSBuaWdodHMuXG4gICAgICAgIHJlbWFpbmluZ05pZ2h0czogKG5pZ2h0cyAtIDEpICsgaW50ZXJ2YWwsXG4gICAgICAgIGludGVydmFsLFxuICAgICAgICBuaWdodHMsXG4gICAgICAgIGNsZWFuaW5nRmVlUGVyY2VudDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGNhbmNlbGxhdGlvblJ1bGVPYmogfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICBjb25zdCB7IHVzZXJUeXBlLCBkYXRhLCBkYXRhOiB7IGd1ZXN0RGF0YSwgaG9zdERhdGEsIG1lc3NhZ2VEYXRhLCBsaXN0RGF0YSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjYW5jZWxEYXRhID0ge30sIHBsYWNlaG9sZGVyO1xuXG4gICAgY29uc3QgeyBuaWdodHMsIGludGVydmFsIH0gPSBnZXREYXRlUmFuZ2VzKHsgY2hlY2tJbjogZGF0YS5jaGVja0luLCBjaGVja091dDogZGF0YS5jaGVja091dCwgY291bnRyeTogbGlzdERhdGEuY291bnRyeSB9KTtcblxuICAgIC8vKC1pbnRlcnZhbCkgPCAobmlnaHRzIC0gMSkgQmxvY2sgaWYgdGhlIChjdXJyZW50IGRhdGUpIGlzIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiB0aGUgKG9uZSBkYXkgYmVmb3JlIGNoZWNrb3V0IGRhdGUpXG5cbiAgICBpZiAoZ3Vlc3REYXRhICYmIGhvc3REYXRhICYmIG1lc3NhZ2VEYXRhICYmIGxpc3REYXRhICYmIGRhdGEuY2hlY2tJbiAmJiBkYXRhLmNoZWNrT3V0ICYmICgtaW50ZXJ2YWwpIDwgKG5pZ2h0cyAtIDEpKSB7XG4gICAgICBjYW5jZWxEYXRhID0gdGhpcy5jYWxjdWxhdGVDYW5jZWxsYXRpb24oaW50ZXJ2YWwsIG5pZ2h0cyk7XG4gICAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZywgZXJyb3IsIHByaXN0aW5lIH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKHVzZXJUeXBlID09PSAnaG9zdCcpIHtcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNhbmNlbGxhdGlvbk5vdGUpICsgJyAnICsgZ3Vlc3REYXRhLmZpcnN0TmFtZSArICcgJyArIGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY2FuY2VsbGF0aW9uTm90ZUZvckhvc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNhbmNlbGxhdGlvbk5vdGUpICsgJyAnICsgaG9zdERhdGEuZmlyc3ROYW1lICsgJyAnICsgZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jYW5jZWxsYXRpb25Ob3RlRm9yR3Vlc3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtzLmxhbmRpbmdDb250YWljb25maXJtYXRpb25Db2RlbmVyfT5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezd9IG1kPXs3fSBsZz17N30gPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FuY2VsTGVmdEJnfT5cbiAgICAgICAgICAgICAgICAgICAgPFN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyVHlwZT17dXNlclR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ3Vlc3REYXRhLmZpcnN0TmFtZSA6IGhvc3REYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBndWVzdHM9e2RhdGEuZ3Vlc3RzfVxuICAgICAgICAgICAgICAgICAgICAgIG5pZ2h0cz17bmlnaHRzfVxuICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsPXtpbnRlcnZhbH1cbiAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxEYXRhPXtjYW5jZWxEYXRhICYmIGNhbmNlbERhdGEuY2FuY2VsbGF0aW9uUnVsZU9iaiB8fCB7fX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnRleHRhcmVhSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdTdGVwLCBzLnNwYWNlMyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZXNlcnZhdGlvbkNhbmNlbH0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHVzZXJUeXBlID09PSAnaG9zdCcgJiYgPERldGFpbHNGb3JIb3N0XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtndWVzdERhdGEuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBndWVzdEVtYWlsPXtndWVzdERhdGEudXNlckRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgIGhvc3ROYW1lPXtob3N0RGF0YS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17Z3Vlc3REYXRhLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZT17Z3Vlc3REYXRhLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrSW49e2RhdGEuY2hlY2tJbn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tPdXQ9e2RhdGEuY2hlY2tPdXR9XG4gICAgICAgICAgICAgICAgICAgIGd1ZXN0cz17ZGF0YS5ndWVzdHN9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtsaXN0RGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdElkPXtkYXRhLmxpc3RJZH1cbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlPXtkYXRhLmJhc2VQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgY2xlYW5pbmdQcmljZT17ZGF0YS5jbGVhbmluZ1ByaWNlfVxuICAgICAgICAgICAgICAgICAgICBndWVzdFNlcnZpY2VGZWU9e2RhdGEuZ3Vlc3RTZXJ2aWNlRmVlfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZT17ZGF0YS5ob3N0U2VydmljZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgdG90YWw9e2RhdGEudG90YWx9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtkYXRhLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxEYXRhPXtjYW5jZWxEYXRhfVxuICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbklkPXtkYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZD17ZGF0YS5tZXNzYWdlRGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9uQ29kZT17ZGF0YS5jb25maXJtYXRpb25Db2RlfVxuICAgICAgICAgICAgICAgICAgICBob2xkZURhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIHRheFJhdGU9e2RhdGEudGF4UmF0ZX1cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWw9e2ludGVydmFsfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZVR5cGU9e2RhdGEuaG9zdFNlcnZpY2VGZWVUeXBlfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZVZhbHVlPXtkYXRhLmhvc3RTZXJ2aWNlRmVlVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGlzU3BlY2lhbFByaWNlQXZlcmFnZT17ZGF0YS5pc1NwZWNpYWxQcmljZUF2ZXJhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50PXtkYXRhLmRpc2NvdW50ID8gZGF0YS5kaXNjb3VudCA6IDB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB1c2VyVHlwZSA9PT0gJ2d1ZXN0JyAmJiA8RGV0YWlsc0Zvckd1ZXN0XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtob3N0RGF0YS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGhvc3RFbWFpbD17aG9zdERhdGEudXNlckRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgIGd1ZXN0TmFtZT17Z3Vlc3REYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtob3N0RGF0YS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e2hvc3REYXRhLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrSW49e2RhdGEuY2hlY2tJbn1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tPdXQ9e2RhdGEuY2hlY2tPdXR9XG4gICAgICAgICAgICAgICAgICAgIGd1ZXN0cz17ZGF0YS5ndWVzdHN9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtsaXN0RGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdElkPXtkYXRhLmxpc3RJZH1cbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlPXtkYXRhLmJhc2VQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgY2xlYW5pbmdQcmljZT17ZGF0YS5jbGVhbmluZ1ByaWNlfVxuICAgICAgICAgICAgICAgICAgICBndWVzdFNlcnZpY2VGZWU9e2RhdGEuZ3Vlc3RTZXJ2aWNlRmVlfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZT17ZGF0YS5ob3N0U2VydmljZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgdG90YWw9e2RhdGEudG90YWx9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtkYXRhLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxEYXRhPXtjYW5jZWxEYXRhfVxuICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbklkPXtkYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZD17ZGF0YS5tZXNzYWdlRGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9uQ29kZT17ZGF0YS5jb25maXJtYXRpb25Db2RlfVxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD17ZGF0YS5kaXNjb3VudCA/IGRhdGEuZGlzY291bnQgOiAwfVxuICAgICAgICAgICAgICAgICAgICBob2xkZURhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIHRheFJhdGU9e2RhdGEudGF4UmF0ZX1cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWw9e2ludGVydmFsfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZVR5cGU9e2RhdGEuaG9zdFNlcnZpY2VGZWVUeXBlfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZVZhbHVlPXtkYXRhLmhvc3RTZXJ2aWNlRmVlVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGlzU3BlY2lhbFByaWNlQXZlcmFnZT17ZGF0YS5pc1NwZWNpYWxQcmljZUF2ZXJhZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8Tm90Rm91bmQgLz5cbiAgICB9XG5cbiAgfVxufVxuXG5DYW5jZWxsYXRpb25Qb2xpY3kgPSByZWR1eEZvcm0oe1xuICBmb3JtOiAnQ2FuY2VsbGF0aW9uRm9ybScsIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoaXMgZm9ybVxuICB2YWxpZGF0ZSxcbiAgb25TdWJtaXQ6IHN1Ym1pdFxufSkoQ2FuY2VsbGF0aW9uUG9saWN5KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKENhbmNlbGxhdGlvblBvbGljeSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmb3JtVmFsdWVTZWxlY3RvciwgaW5pdGlhbGl6ZSwgc3VibWl0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7XG4gIFJvdyxcbiAgQ29sLFxuICBQYW5lbCxcbiAgRm9ybUdyb3VwLFxuICBCdXR0b25cbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vQ2FuY2VsbGF0aW9uLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCBDdXJyZW5jeUNvbnZlcnRlciBmcm9tICcuLi9DdXJyZW5jeUNvbnZlcnRlcic7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vIEltYWdlc1xuaW1wb3J0IGRlZmF1bHRQaWMgZnJvbSAnLi4vLi4vLi4vcHVibGljL1NpdGVJbWFnZXMvbGFyZ2Vfbm9faW1hZ2UuanBlZyc7XG5pbXBvcnQgeyBjYW5jZWxsYXRpb25HdWVzdERhdGEsIGdldFByaWNlV2l0aERpc2NvdW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9jYW5jZWxsYXRpb25EYXRhJztcbmNsYXNzIERldGFpbHNGb3JHdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGlzdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrT3V0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ3Vlc3RzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcHJvZmlsZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaG9zdEVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiYXNlUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjbGVhbmluZ1ByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZ3Vlc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2FuY2VsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHBvbGljeU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhY2NvbW9kYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBndWVzdEZlZXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICByZW1haW5pbmdOaWdodHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBpbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG5pZ2h0czogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5pdGlhbGl6ZTogUHJvcFR5cGVzLmFueSxcbiAgICBzdWJtaXQ6IFByb3BUeXBlcy5hbnlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQ2FuY2VsKGNhbmNlbGxhdGlvbkRhdGEpIHtcbiAgICBjb25zdCB7IGluaXRpYWxpemUsIHN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcbiAgICBhd2FpdCBpbml0aWFsaXplKCdDYW5jZWxsYXRpb25Gb3JtJywgY2FuY2VsbGF0aW9uRGF0YSwgdHJ1ZSk7XG4gICAgYXdhaXQgc3VibWl0KCdDYW5jZWxsYXRpb25Gb3JtJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXNlcnZhdGlvbklkLCB1c2VyVHlwZSwgZmlyc3ROYW1lLCBob3N0RW1haWwsIGNoZWNrSW4sIGNoZWNrT3V0LCBndWVzdHMsIHRpdGxlLCBsaXN0SWQsIHBpY3R1cmUsIHByb2ZpbGVJZCwgZ3Vlc3ROYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYmFzZVByaWNlLCBjbGVhbmluZ1ByaWNlLCBndWVzdFNlcnZpY2VGZWUsIGhvc3RTZXJ2aWNlRmVlLCB0b3RhbCwgY3VycmVuY3ksIHRocmVhZElkLCBob3N0SWQsIGNvbmZpcm1hdGlvbkNvZGUsIHRheFJhdGUsIGlzU3BlY2lhbFByaWNlQXZlcmFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNhbmNlbERhdGEsIGNhbmNlbERhdGE6IHsgY2FuY2VsbGF0aW9uUnVsZU9iajogeyBwb2xpY3lOYW1lLCBhY2NvbW9kYXRpb24sIGd1ZXN0RmVlcywgcmVtYWluaW5nTmlnaHRzLCBpbnRlcnZhbCwgbmlnaHRzLCBwcmlvckRheXMsIG5vblJlZnVuZGFibGVOaWdodHMsIGNsZWFuaW5nRmVlUGVyY2VudCB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBkaXNjb3VudCwgaG9sZGVEYXRhLCBob3N0U2VydmljZUZlZVR5cGUsIGhvc3RTZXJ2aWNlRmVlVmFsdWUsIGJhc2UsIHJhdGVzLCBzZXJ2aWNlRmVlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb3ZlckltYWdlID0gaG9sZGVEYXRhICYmIGhvbGRlRGF0YS5saXN0RGF0YSAmJiBob2xkZURhdGEubGlzdERhdGEubGlzdFBob3Rvcy5maW5kKG8gPT4gby5pZCA9PSBob2xkZURhdGEubGlzdERhdGEuY292ZXJQaG90byk7XG5cbiAgICBsZXQgcGF0aCA9ICcvaW1hZ2VzL3VwbG9hZC94X21lZGl1bV8nO1xuICAgIGxldCBzaG93SW1hZ2U7XG4gICAgaWYgKGNvdmVySW1hZ2UpIHtcbiAgICAgIHNob3dJbWFnZSA9IHBhdGggKyBjb3ZlckltYWdlLm5hbWU7XG4gICAgfSBlbHNlIGlmICghY292ZXJJbWFnZSAmJiBob2xkZURhdGEubGlzdERhdGEgJiYgaG9sZGVEYXRhLmxpc3REYXRhLmxpc3RQaG90b3MubGVuZ3RoID4gMCkge1xuICAgICAgc2hvd0ltYWdlID0gcGF0aCArIChob2xkZURhdGEubGlzdERhdGEgJiYgaG9sZGVEYXRhLmxpc3REYXRhLmxpc3RQaG90b3NbMF0ubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dJbWFnZSA9IGRlZmF1bHRQaWM7XG4gICAgfVxuXG5cblxuICAgIGxldCBpc0Rpc2FibGVkID0gdHJ1ZSwgY2FuY2VsbGF0aW9uRGF0YSA9IHt9O1xuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ0RvIE1NTSBZWVlZJykgOiAnJztcbiAgICBsZXQgY2hlY2tPdXREYXRlID0gY2hlY2tPdXQgIT0gbnVsbCA/IG1vbWVudChjaGVja091dCkuZm9ybWF0KCdEbyBNTU0gWVlZWScpIDogJyc7XG5cbiAgICBsZXQgcmVmdW5kYWJsZU5pZ2h0UHJpY2UgPSAwLCBub25SZWZ1bmRhYmxlTmlnaHRQcmljZSA9IDAsIHJlZnVuZFdpdGhvdXRHdWVzdEZlZSA9IDA7XG4gICAgbGV0IHVwZGF0ZWRHdWVzdEZlZSA9IDAsIHVwZGF0ZWRIb3N0RmVlID0gMCwgcGF5b3V0VG9Ib3N0ID0gMCwgc3VidG90YWwgPSAwO1xuXG4gICAgbGV0IGlzQ2xlYWluZ1ByaWNlID0gMFxuICAgIGlmIChjbGVhbmluZ1ByaWNlKSB7XG4gICAgICBpc0NsZWFpbmdQcmljZSA9IGNsZWFuaW5nUHJpY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQ2xlYWluZ1ByaWNlID0gMDtcbiAgICB9XG5cbiAgICBsZXQgYm9va2luZ1NwZWNpYWxQcmljaW5nID0gW10sIGlzU3BlY2lhbFByaWNlQXNzaWduZWQgPSBmYWxzZTtcbiAgICBsZXQgcHJpY2VGb3JEYXlzID0gMCwgY2FuY2VsbGF0aW9uR3Vlc3RPYmogPSB7fSwgZmluYWxQcmljZSA9IDA7XG5cbiAgICBob2xkZURhdGEuYm9va2luZ1NwZWNpYWxQcmljaW5nICYmIGhvbGRlRGF0YS5ib29raW5nU3BlY2lhbFByaWNpbmcubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgIGxldCBwcmljaW5nUm93LCBjdXJyZW50UHJpY2U7XG4gICAgICBpZiAoaXRlbS5ibG9ja2VkRGF0ZXMpIHtcbiAgICAgICAgaXNTcGVjaWFsUHJpY2VBc3NpZ25lZCA9IHRydWU7XG4gICAgICAgIGN1cnJlbnRQcmljZSA9IE51bWJlcihpdGVtLmlzU3BlY2lhbFByaWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRQcmljZSA9IE51bWJlcihiYXNlUHJpY2UpO1xuICAgICAgfVxuICAgICAgcHJpY2luZ1JvdyA9IHtcbiAgICAgICAgYmxvY2tlZERhdGVzOiBpdGVtLFxuICAgICAgICBpc1NwZWNpYWxQcmljZTogY3VycmVudFByaWNlLFxuICAgICAgfTtcbiAgICAgIGJvb2tpbmdTcGVjaWFsUHJpY2luZy5wdXNoKHByaWNpbmdSb3cpO1xuICAgIH0pXG5cbiAgICBpZiAoaXNTcGVjaWFsUHJpY2VBc3NpZ25lZCkge1xuICAgICAgYm9va2luZ1NwZWNpYWxQcmljaW5nLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcHJpY2VGb3JEYXlzID0gTnVtYmVyKHByaWNlRm9yRGF5cykgKyBOdW1iZXIoaXRlbS5pc1NwZWNpYWxQcmljZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGludGVydmFsIDw9IDEpIHtcbiAgICAgICAgcHJpY2VGb3JEYXlzID0gTnVtYmVyKGJhc2VQcmljZSkgKiBOdW1iZXIobmlnaHRzIC0gbm9uUmVmdW5kYWJsZU5pZ2h0cylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByaWNlRm9yRGF5cyA9IE51bWJlcihiYXNlUHJpY2UpICogTnVtYmVyKG5pZ2h0cylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5hbFByaWNlID0gZ2V0UHJpY2VXaXRoRGlzY291bnQoeyBiYXNlUHJpY2U6IChpc1NwZWNpYWxQcmljZUF2ZXJhZ2UgfHwgYmFzZVByaWNlKSwgZGlzY291bnQsIG5pZ2h0cyB9KTtcblxuICAgIGNhbmNlbGxhdGlvbkd1ZXN0T2JqID0gY2FuY2VsbGF0aW9uR3Vlc3REYXRhKHJlbWFpbmluZ05pZ2h0cyxcbiAgICAgIG5pZ2h0cyxcbiAgICAgIHByaWNlRm9yRGF5cyxcbiAgICAgIGFjY29tb2RhdGlvbixcbiAgICAgIGlzQ2xlYWluZ1ByaWNlLFxuICAgICAgdGF4UmF0ZSxcbiAgICAgIGd1ZXN0U2VydmljZUZlZSxcbiAgICAgIGd1ZXN0RmVlcyxcbiAgICAgIGRpc2NvdW50LFxuICAgICAgaG9zdFNlcnZpY2VGZWUsXG4gICAgICBmaW5hbFByaWNlLFxuICAgICAgdG90YWwsXG4gICAgICBwb2xpY3lOYW1lLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBwcmlvckRheXMsXG4gICAgICBub25SZWZ1bmRhYmxlTmlnaHRzLFxuICAgICAgaG9zdFNlcnZpY2VGZWVUeXBlLFxuICAgICAgaG9zdFNlcnZpY2VGZWVWYWx1ZSxcbiAgICAgIGN1cnJlbmN5LFxuICAgICAgYmFzZSxcbiAgICAgIHJhdGVzLFxuICAgICAgc2VydmljZUZlZXMsXG4gICAgICBjbGVhbmluZ0ZlZVBlcmNlbnRcbiAgICApO1xuXG4gICAgcmVmdW5kYWJsZU5pZ2h0UHJpY2UgPSBjYW5jZWxsYXRpb25HdWVzdE9iai5yZWZ1bmRhYmxlTmlnaHRQcmljZTtcbiAgICByZWZ1bmRXaXRob3V0R3Vlc3RGZWUgPSBjYW5jZWxsYXRpb25HdWVzdE9iai5yZWZ1bmRXaXRob3V0R3Vlc3RGZWU7XG4gICAgbm9uUmVmdW5kYWJsZU5pZ2h0UHJpY2UgPSBjYW5jZWxsYXRpb25HdWVzdE9iai5ub25SZWZ1bmRhYmxlTmlnaHRQcmljZTtcbiAgICB1cGRhdGVkR3Vlc3RGZWUgPSBjYW5jZWxsYXRpb25HdWVzdE9iai51cGRhdGVkR3Vlc3RGZWU7XG4gICAgcGF5b3V0VG9Ib3N0ID0gY2FuY2VsbGF0aW9uR3Vlc3RPYmoucGF5b3V0VG9Ib3N0O1xuICAgIHVwZGF0ZWRIb3N0RmVlID0gY2FuY2VsbGF0aW9uR3Vlc3RPYmoudXBkYXRlZEhvc3RGZWU7XG4gICAgdXBkYXRlZEd1ZXN0RmVlID0gY2FuY2VsbGF0aW9uR3Vlc3RPYmoudXBkYXRlZEd1ZXN0RmVlO1xuXG4gICAgc3VidG90YWwgPSB0b3RhbCArIGd1ZXN0U2VydmljZUZlZTtcblxuXG4gICAgY2FuY2VsbGF0aW9uRGF0YSA9IHtcbiAgICAgIHJlc2VydmF0aW9uSWQsXG4gICAgICBjYW5jZWxsYXRpb25Qb2xpY3k6IHBvbGljeU5hbWUsXG4gICAgICByZWZ1bmRUb0d1ZXN0OiByZWZ1bmRhYmxlTmlnaHRQcmljZSxcbiAgICAgIHBheW91dFRvSG9zdDogcGF5b3V0VG9Ib3N0LFxuICAgICAgZ3Vlc3RTZXJ2aWNlRmVlOiB1cGRhdGVkR3Vlc3RGZWUsXG4gICAgICBob3N0U2VydmljZUZlZTogdXBkYXRlZEhvc3RGZWUsXG4gICAgICB0b3RhbDogc3VidG90YWwsXG4gICAgICBjdXJyZW5jeSxcbiAgICAgIHRocmVhZElkLFxuICAgICAgY2FuY2VsbGVkQnk6ICdndWVzdCcsXG4gICAgICBjaGVja0luLFxuICAgICAgY2hlY2tPdXQsXG4gICAgICBndWVzdHMsXG4gICAgICBndWVzdE5hbWUsXG4gICAgICBob3N0TmFtZTogZmlyc3ROYW1lLFxuICAgICAgbGlzdFRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbmZpcm1hdGlvbkNvZGUsXG4gICAgICBob3N0RW1haWwsXG4gICAgICB1c2VyVHlwZVxuICAgIH07XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs1fSBtZD17NX0gbGc9ezV9ID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5iZ0NvdmVyfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e1wiL3Jvb21zL1wiICsgbGlzdElkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FuY2VsQmd9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Nob3dJbWFnZX0pYCB9fT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17cy5wYW5lbEhlYWRlcn0+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBzbT17OH0gbWQ9ezh9IGxnPXs4fSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudGV4dFRydW5jYXRlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy50ZXh0SGlnaCwgcy50ZXh0Qm9sZCl9PntmaXJzdE5hbWV9PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGVja0luRGF0ZX0gLSB7Y2hlY2tPdXREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezR9IHNtPXs0fSBtZD17NH0gbGc9ezR9IGNsYXNzTmFtZT17cy50ZXh0UmlnaHR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlPXtwaWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezY1fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjV9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICB3aXRoTGlua1xuICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e3Byb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbm9uUmVmdW5kYWJsZU5pZ2h0UHJpY2UgPiAwICYmIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMudGV4dEhpZ2gsIHMudGV4dEJvbGQpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm5vblJlZnVuZGFibGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtzLnRleHRSaWdodH0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMudGV4dEhpZ2gsIHMudGV4dEJvbGQsIHMudGV4dExpbmUpfT5cbiAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5Q29udmVydGVyXG4gICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtub25SZWZ1bmRhYmxlTmlnaHRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXtjdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmdW5kYWJsZU5pZ2h0UHJpY2UgPiAwICYmIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMudGV4dEhpZ2gsIHMudGV4dEJvbGQpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlZnVuZGFibGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtzLnRleHRSaWdodH0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMudGV4dEhpZ2gsIHMudGV4dEJvbGQpfT5cbiAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5Q29udmVydGVyXG4gICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZWZ1bmRhYmxlTmlnaHRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXtjdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtyZWZ1bmRhYmxlTmlnaHRQcmljZSA+IDAgJiYgPGRpdiBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AzKX0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y3gocy5sYW5kaW5nU3RlcCl9PjxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZWZ1bmRDb3N0fSAvPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYW5jZWxsYXRpb259PlxuICAgICAgICAgICAgICA8YSBocmVmPXsnL2NhbmNlbGxhdGlvbi1wb2xpY2llcy8nICsgcG9saWN5TmFtZX0gdGFyZ2V0PVwiX2JsYW5rXCI+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNhbmNlbGxhdGlvblBvbGljeX0gLz46IDxzcGFuIGNsYXNzTmFtZT17cy5ncmVlbkNvbG9yfT57cG9saWN5TmFtZX08L3NwYW4+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IGxnPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtjeChzLmhvcml6b250YWxMaW5lVGhyb3VnaCwgcy5zcGFjZVRvcDQpfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17N30gbGc9ezd9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzLmJ1dHRvbiwgYnQuYnRuUHJpbWFyeUJvcmRlciwgYnQuYnRuTGFyZ2UsIHMucHVsbExlZnQsIHMuYnRuV2lkdGgpfVxuICAgICAgICAgICAgICB0bz17XCIvdHJpcHMvY3VycmVudFwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMua2VlcFJlc2VydmF0aW9ufSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHMuYnV0dG9uLCBidC5idG5QcmltYXJ5LCBidC5idG5MYXJnZSwgcy5wdWxsUmlnaHQsIHMuYnRuV2lkdGgpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNhbmNlbChjYW5jZWxsYXRpb25EYXRhKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxZb3VyUmVzZXJ2YXRpb259IC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L2RpdiA+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzZWxlY3RvciA9IGZvcm1WYWx1ZVNlbGVjdG9yKCdDYW5jZWxsYXRpb25Gb3JtJyk7IC8vIDwtLSBzYW1lIGFzIGZvcm0gbmFtZVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgbWVzc2FnZTogc2VsZWN0b3Ioc3RhdGUsICdtZXNzYWdlJyksXG4gIHNlcnZpY2VGZWVzOiBzdGF0ZS5ib29rLnNlcnZpY2VGZWVzLFxuICBiYXNlOiBzdGF0ZSAmJiBzdGF0ZS5jdXJyZW5jeSAmJiBzdGF0ZS5jdXJyZW5jeS5iYXNlLFxuICByYXRlczogc3RhdGUgJiYgc3RhdGUuY3VycmVuY3kgJiYgc3RhdGUuY3VycmVuY3kucmF0ZXNcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgaW5pdGlhbGl6ZSxcbiAgc3VibWl0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoRGV0YWlsc0Zvckd1ZXN0KSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmb3JtVmFsdWVTZWxlY3RvciwgaW5pdGlhbGl6ZSwgc3VibWl0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7XG4gIFJvdyxcbiAgQ29sLFxuICBQYW5lbCxcbiAgRm9ybUdyb3VwLFxuICBCdXR0b25cbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vQ2FuY2VsbGF0aW9uLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCBDdXJyZW5jeUNvbnZlcnRlciBmcm9tICcuLi9DdXJyZW5jeUNvbnZlcnRlcic7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vIEltYWdlc1xuaW1wb3J0IGRlZmF1bHRQaWMgZnJvbSAnLi4vLi4vLi4vcHVibGljL1NpdGVJbWFnZXMvbGFyZ2Vfbm9faW1hZ2UuanBlZyc7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZUhvc3RDYW5jZWxsYXRpb24sIGdldFByaWNlV2l0aERpc2NvdW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy9jYW5jZWxsYXRpb25EYXRhJztcblxuY2xhc3MgRGV0YWlsc0Zvckhvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcbiAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29uZmlybWF0aW9uQ29kZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxpc3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGVja091dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGd1ZXN0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZpcnN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGd1ZXN0RW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFzZVByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY2xlYW5pbmdQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGd1ZXN0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGhvc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNhbmNlbERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBwb2xpY3lOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYWNjb21vZGF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgZ3Vlc3RGZWVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgcmVtYWluaW5nTmlnaHRzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgaW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBuaWdodHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGluaXRpYWxpemU6IFByb3BUeXBlcy5hbnksXG4gICAgc3VibWl0OiBQcm9wVHlwZXMuYW55XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQ2FuY2VsKGNhbmNlbGxhdGlvbkRhdGEpIHtcbiAgICBjb25zdCB7IGluaXRpYWxpemUsIHN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcbiAgICBhd2FpdCBpbml0aWFsaXplKCdDYW5jZWxsYXRpb25Gb3JtJywgY2FuY2VsbGF0aW9uRGF0YSwgdHJ1ZSk7XG4gICAgYXdhaXQgc3VibWl0KCdDYW5jZWxsYXRpb25Gb3JtJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXNlcnZhdGlvbklkLCB1c2VyVHlwZSwgZmlyc3ROYW1lLCBndWVzdEVtYWlsLCBjaGVja0luLCBjaGVja091dCwgZ3Vlc3RzLCB0aXRsZSwgbGlzdElkLCBwaWN0dXJlLCBwcm9maWxlSWQsIGhvc3ROYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGlzY291bnQsIGJhc2VQcmljZSwgY2xlYW5pbmdQcmljZSwgZ3Vlc3RTZXJ2aWNlRmVlLCBob3N0U2VydmljZUZlZSwgdG90YWwsIGN1cnJlbmN5LCB0aHJlYWRJZCwgY29uZmlybWF0aW9uQ29kZSwgdGF4UmF0ZSwgaXNTcGVjaWFsUHJpY2VBdmVyYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2FuY2VsRGF0YSwgY2FuY2VsRGF0YTogeyBjYW5jZWxsYXRpb25SdWxlT2JqOiB7IHBvbGljeU5hbWUsIGFjY29tb2RhdGlvbiwgZ3Vlc3RGZWVzLCByZW1haW5pbmdOaWdodHMsIGludGVydmFsLCBuaWdodHMsIHByaW9yRGF5cywgbm9uUmVmdW5kYWJsZU5pZ2h0cyB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBob2xkZURhdGEsIHNlcnZpY2VGZWVzLCBob3N0U2VydmljZUZlZVR5cGUsIGhvc3RTZXJ2aWNlRmVlVmFsdWUsIGJhc2UsIHJhdGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ0RvIE1NTSBZWVlZJykgOiAnJztcbiAgICBsZXQgY2hlY2tPdXREYXRlID0gY2hlY2tPdXQgIT0gbnVsbCA/IG1vbWVudChjaGVja091dCkuZm9ybWF0KCdEbyBNTU0gWVlZWScpIDogJyc7XG4gICAgbGV0IHN1YnRvdGFsID0gMCwgdG90YWxOaWdodHMgPSAwO1xuICAgIGxldCBpc0Rpc2FibGVkID0gdHJ1ZSwgY2FuY2VsbGF0aW9uSG9zdE9iaiA9IHt9O1xuXG4gICAgbGV0IGNvdmVySW1hZ2UgPSBob2xkZURhdGEgJiYgaG9sZGVEYXRhLmxpc3REYXRhICYmIGhvbGRlRGF0YS5saXN0RGF0YS5saXN0UGhvdG9zLmZpbmQobyA9PiBvLmlkID09IGhvbGRlRGF0YS5saXN0RGF0YS5jb3ZlclBob3RvKTtcblxuICAgIGxldCBwYXRoID0gJy9pbWFnZXMvdXBsb2FkL3hfbWVkaXVtXyc7XG4gICAgbGV0IHNob3dJbWFnZTtcbiAgICBpZiAoY292ZXJJbWFnZSkge1xuICAgICAgc2hvd0ltYWdlID0gcGF0aCArIGNvdmVySW1hZ2UubmFtZTtcbiAgICB9IGVsc2UgaWYgKCFjb3ZlckltYWdlICYmIGhvbGRlRGF0YS5saXN0RGF0YSAmJiBob2xkZURhdGEubGlzdERhdGEubGlzdFBob3Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICBzaG93SW1hZ2UgPSBwYXRoICsgKGhvbGRlRGF0YS5saXN0RGF0YSAmJiBob2xkZURhdGEubGlzdERhdGEubGlzdFBob3Rvc1swXS5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0ltYWdlID0gZGVmYXVsdFBpYztcbiAgICB9XG5cbiAgICBsZXQgaXNDbGVhaW5nUHJpY2UgPSAwXG4gICAgaWYgKGNsZWFuaW5nUHJpY2UpIHtcbiAgICAgIGlzQ2xlYWluZ1ByaWNlID0gY2xlYW5pbmdQcmljZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDbGVhaW5nUHJpY2UgPSAwO1xuICAgIH1cblxuICAgIGxldCBib29raW5nU3BlY2lhbFByaWNpbmcgPSBbXSwgaXNTcGVjaWFsUHJpY2VBc3NpZ25lZCA9IGZhbHNlO1xuICAgIGxldCBwcmljZUZvckRheXMgPSAwLCB0b3RhbFByaWNlID0gMDtcblxuICAgIGhvbGRlRGF0YS5ib29raW5nU3BlY2lhbFByaWNpbmcgJiYgaG9sZGVEYXRhLmJvb2tpbmdTcGVjaWFsUHJpY2luZy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgbGV0IHByaWNpbmdSb3csIGN1cnJlbnRQcmljZTtcbiAgICAgIGlmIChpdGVtLmJsb2NrZWREYXRlcykge1xuICAgICAgICBpc1NwZWNpYWxQcmljZUFzc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgY3VycmVudFByaWNlID0gTnVtYmVyKGl0ZW0uaXNTcGVjaWFsUHJpY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFByaWNlID0gTnVtYmVyKGJhc2VQcmljZSk7XG4gICAgICB9XG4gICAgICBwcmljaW5nUm93ID0ge1xuICAgICAgICBibG9ja2VkRGF0ZXM6IGl0ZW0sXG4gICAgICAgIGlzU3BlY2lhbFByaWNlOiBjdXJyZW50UHJpY2UsXG4gICAgICB9O1xuICAgICAgYm9va2luZ1NwZWNpYWxQcmljaW5nLnB1c2gocHJpY2luZ1Jvdyk7XG4gICAgfSlcblxuICAgIGlmIChpc1NwZWNpYWxQcmljZUFzc2lnbmVkKSB7XG4gICAgICBib29raW5nU3BlY2lhbFByaWNpbmcubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBwcmljZUZvckRheXMgPSBOdW1iZXIocHJpY2VGb3JEYXlzKSArIE51bWJlcihpdGVtLmlzU3BlY2lhbFByaWNlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmljZUZvckRheXMgPSBOdW1iZXIoYmFzZVByaWNlKSAqIE51bWJlcihuaWdodHMgLSBub25SZWZ1bmRhYmxlTmlnaHRzKVxuICAgIH1cblxuICAgIHRvdGFsUHJpY2UgPSBnZXRQcmljZVdpdGhEaXNjb3VudCh7IGJhc2VQcmljZTogKGlzU3BlY2lhbFByaWNlQXZlcmFnZSB8fCBiYXNlUHJpY2UpLCBkaXNjb3VudCwgbmlnaHRzIH0pO1xuXG4gICAgY29uc3Qge1xuICAgICAgcmVmdW5kQW1vdW50LFxuICAgICAgbm9uUGF5b3V0QW1vdW50LFxuICAgICAgcGF5b3V0QW1vdW50LFxuICAgICAgcmVmdW5kRGF5cyxcbiAgICAgIHVwZGF0ZWRIb3N0RmVlLFxuICAgICAgdXBkYXRlZEd1ZXN0RmVlXG4gICAgfSA9IGNhbGN1bGF0ZUhvc3RDYW5jZWxsYXRpb24oe1xuICAgICAgdG90YWwsXG4gICAgICBiYXNlUHJpY2U6IHRvdGFsUHJpY2UsXG4gICAgICBpc0NsZWFpbmdQcmljZSxcbiAgICAgIG5pZ2h0cyxcbiAgICAgIHJlbWFpbmluZ05pZ2h0cyxcbiAgICAgIGd1ZXN0U2VydmljZUZlZSxcbiAgICAgIGhvc3RTZXJ2aWNlRmVlLFxuICAgICAgaG9zdFNlcnZpY2VGZWVUeXBlLFxuICAgICAgaG9zdFNlcnZpY2VGZWVWYWx1ZSxcbiAgICAgIGludGVydmFsXG4gICAgfSlcblxuICAgIHN1YnRvdGFsID0gdG90YWwgKyBndWVzdFNlcnZpY2VGZWU7XG5cbiAgICBsZXQgY2FuY2VsbGF0aW9uRGF0YSA9IHtcbiAgICAgIHJlc2VydmF0aW9uSWQsXG4gICAgICBjYW5jZWxsYXRpb25Qb2xpY3k6IHBvbGljeU5hbWUsXG4gICAgICByZWZ1bmRUb0d1ZXN0OiByZWZ1bmRBbW91bnQsXG4gICAgICBwYXlvdXRUb0hvc3Q6IHBheW91dEFtb3VudCxcbiAgICAgIGd1ZXN0U2VydmljZUZlZTogdXBkYXRlZEd1ZXN0RmVlLFxuICAgICAgaG9zdFNlcnZpY2VGZWU6IHVwZGF0ZWRIb3N0RmVlLFxuICAgICAgdG90YWw6IHN1YnRvdGFsLFxuICAgICAgY3VycmVuY3ksXG4gICAgICB0aHJlYWRJZCxcbiAgICAgIGNhbmNlbGxlZEJ5OiAnaG9zdCcsXG4gICAgICBjaGVja0luLFxuICAgICAgY2hlY2tPdXQsXG4gICAgICBndWVzdHMsXG4gICAgICBob3N0TmFtZSxcbiAgICAgIGd1ZXN0TmFtZTogZmlyc3ROYW1lLFxuICAgICAgbGlzdFRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbmZpcm1hdGlvbkNvZGUsXG4gICAgICBndWVzdEVtYWlsLFxuICAgICAgdXNlclR5cGVcbiAgICB9O1xuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdG90YWxOaWdodHMgPSBuaWdodHMgLSByZWZ1bmREYXlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17NX0gbWQ9ezV9IGxnPXs1fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5iZ0NvdmVyfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e1wiL3Jvb21zL1wiICsgbGlzdElkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FuY2VsQmd9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Nob3dJbWFnZX0pYCB9fT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17cy5wYW5lbEhlYWRlcn0+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBzbT17OH0gbWQ9ezh9IGxnPXs4fSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudGV4dFRydW5jYXRlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy50ZXh0SGlnaCwgcy50ZXh0Qm9sZCl9PntmaXJzdE5hbWV9PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPXtcIi9yb29tcy9cIiArIGxpc3RJZH0+ICovfVxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17NH0gc209ezR9IG1kPXs0fSBsZz17NH0gY2xhc3NOYW1lPXtzLnRleHRSaWdodH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhclNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NjV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2NX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rXG4gICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17cHJvZmlsZUlkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17OH0gbWQ9ezh9IGxnPXs4fSA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGVja0luRGF0ZX0gLSB7Y2hlY2tPdXREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWZ1bmREYXlzID4gMCAmJiBub25QYXlvdXRBbW91bnQgPiAwICYmIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHMudGV4dEhpZ2gsIHMudGV4dEJvbGQpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1pc3NlZEVhcm5pbmdzfSAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpcmVjdGlvbkx0cic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeUNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0b3RhbFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbT17Y3VycmVuY3l9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuPiB7JyB4J30ge3JlZnVuZERheXN9IHtyZWZ1bmREYXlzID4gMSA/IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMubmlnaHRzKSA6IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMubmlnaHQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PjxiciAvPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs2fSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17cy50ZXh0UmlnaHR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnRleHRIaWdoLCBzLnRleHRCb2xkLCBzLnRleHRMaW5lKX0+XG4gICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeUNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17bm9uUGF5b3V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e2N1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF5b3V0QW1vdW50ID4gMCAmJiA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs2fSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17Y3gocy50ZXh0TGVmdCwgJ3RleHRBbGlnblJpZ2h0UnRsJyl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnRleHRIaWdoLCBzLnRleHRCb2xkKX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5lYXJuaW5nc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3lDb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RvdGFsUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17Y3VycmVuY3l9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7dG90YWxOaWdodHMgPiAwICYmIDxzcGFuPiB4IHt0b3RhbE5pZ2h0c30ge2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXNbdG90YWxOaWdodHMgPiAxID8gJ25pZ2h0cycgOiAnbmlnaHQnXSl9LDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2xlYW5pbmdQbHVzU2VydmljZUZlZX0gLz48L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs2fSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17cy50ZXh0UmlnaHR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLnRleHRIaWdoLCBzLnRleHRCb2xkKX0+XG4gICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeUNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cGF5b3V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e2N1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtwYXlvdXRBbW91bnQgPiAwICYmIDxkaXYgY2xhc3NOYW1lPXtjeChzLnNwYWNlMywgcy5zcGFjZVRvcDMpfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdTdGVwKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0TmFtZX17JyAnfVxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLndpbGxCZVJlZnVuZH0gLz57JyAnfXsnICd9XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVzZXJ2YXRpb25Db3N0fSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY2FuY2VsbGF0aW9ufT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17Jy9jYW5jZWxsYXRpb24tcG9saWNpZXMvJyArIHBvbGljeU5hbWV9IHRhcmdldD1cIl9ibGFua1wiPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxsYXRpb25Qb2xpY3l9IC8+OiA8c3BhbiBjbGFzc05hbWU9e3MuZ3JlZW5Db2xvcn0+e3BvbGljeU5hbWV9PC9zcGFuPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBsZz17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT17Y3gocy5ob3Jpem9udGFsTGluZVRocm91Z2gsIHMuc3BhY2VUb3A0KX0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezd9IGxnPXs3fT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3gocy5idXR0b24sIGJ0LmJ0blByaW1hcnlCb3JkZXIsIGJ0LmJ0bkxhcmdlLCBzLnB1bGxMZWZ0LCBzLmJ0bldpZHRoKX1cbiAgICAgICAgICAgICAgdG89e1wiL3Jlc2VydmF0aW9uL2N1cnJlbnRcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmtlZXBSZXNlcnZhdGlvbn0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzLmJ1dHRvbiwgYnQuYnRuUHJpbWFyeSwgYnQuYnRuTGFyZ2UsIHMucHVsbFJpZ2h0LCBzLmJ0bldpZHRoKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDYW5jZWwoY2FuY2VsbGF0aW9uRGF0YSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2FuY2VsWW91clJlc2VydmF0aW9ufSAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzZWxlY3RvciA9IGZvcm1WYWx1ZVNlbGVjdG9yKCdDYW5jZWxsYXRpb25Gb3JtJyk7IC8vIDwtLSBzYW1lIGFzIGZvcm0gbmFtZVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgbWVzc2FnZTogc2VsZWN0b3Ioc3RhdGUsICdtZXNzYWdlJyksXG4gIHNlcnZpY2VGZWVzOiBzdGF0ZS5ib29rLnNlcnZpY2VGZWVzLFxuICBiYXNlOiBzdGF0ZSAmJiBzdGF0ZS5jdXJyZW5jeSAmJiBzdGF0ZS5jdXJyZW5jeS5iYXNlLFxuICByYXRlczogc3RhdGUgJiYgc3RhdGUuY3VycmVuY3kgJiYgc3RhdGUuY3VycmVuY3kucmF0ZXNcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgaW5pdGlhbGl6ZSxcbiAgc3VibWl0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocywgYnQpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShEZXRhaWxzRm9ySG9zdCkpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7XG4gIFJvdyxcbiAgQ29sXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0NhbmNlbGxhdGlvbi5jc3MnO1xuXG4vLyBMb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuY2xhc3MgU3VtbWFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ3Vlc3RzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbmlnaHRzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjYW5jZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcmVtYWluaW5nTmlnaHRzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlclR5cGUsIGZpcnN0TmFtZSwgZ3Vlc3RzLCBuaWdodHMsIGludGVydmFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY2FuY2VsRGF0YTogeyByZW1haW5pbmdOaWdodHMgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdXNlclR5cGUgPT09ICdndWVzdCcgJiZcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdDb250ZW50VGl0bGUsIHMuc3BhY2U1KX0+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2FuY2VsWW91clRyaXB9IC8+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdDb250ZW50VGl0bGUsIHMuc3BhY2U1KX0+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxZb3VyUmVzZXJ2YXRpb259IC8+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdTdWJUaXRsZSwgcy5zcGFjZTUpfT5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNvbnNpZGVyfSAvPnsnICd9e2ZpcnN0TmFtZX0nc3snICd9XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy50cmlwQmVmb3JlQ2FuY2VsaW5nfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjeChzLmxhbmRpbmdTdGVwLCBzLnNwYWNlMywgcy5zcGFjZVRvcDIpfT5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNhbmNlbGxpbmdJbmZvfSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17Nn0gbWQ9ezZ9IGxnPXs2fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy50ZXh0Qm9sZH0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzW2ludGVydmFsIDw9IDAgPyAnc3RhcnRlZCcgOiAnc3RhcnRJbiddfSAvPjwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+e2ludGVydmFsfSB7Zm9ybWF0TWVzc2FnZShtZXNzYWdlc1soaW50ZXJ2YWwgPCAtMSB8fCBpbnRlcnZhbCA+IDEpID8gJ2hvd01hbnlkYXlzJyA6ICdob3dNYW55ZGF5J10pICsgKGludGVydmFsIDw9IDAgPyAnIGFnbycgOiAnJyl9IDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezZ9IHNtPXs2fSBtZD17Nn0gbGc9ezZ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnRleHRCb2xkfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudHJhdmVsaW5nV2l0aH0gLz48L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj57Z3Vlc3RzfSB7Z3Vlc3RzID4gMSA/IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG93TWFueUd1ZXN0KSA6IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZ3Vlc3QpfTwvc3Bhbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPXtjeChzLnNwYWNlNCwgcy5zcGFjZVRvcDMpfT5cbiAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17Nn0gbWQ9ezZ9IGxnPXs2fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy50ZXh0Qm9sZH0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnN0YXlpbmdGb3J9IC8+PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgPHNwYW4+e25pZ2h0c30ge25pZ2h0cyA+IDEgPyBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm5pZ2h0cykgOiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm5pZ2h0KX08L3NwYW4+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5sYW5kaW5nU3ViVGl0bGUpfT5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jb250YWN0SG9zdGluZm8yfSAvPnsnICd9e2ZpcnN0TmFtZX17JyAnfVxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm5lZWRUb0NhbmNlbH0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocykoU3VtbWFyeSkpO1xuIiwiaW1wb3J0IHsgY2FuY2VsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9SZXNlcnZhdGlvbi9jYW5jZWxSZXNlcnZhdGlvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdCh2YWx1ZXMsIGRpc3BhdGNoKSB7XG4gIGRpc3BhdGNoKGNhbmNlbChcbiAgICB2YWx1ZXMucmVzZXJ2YXRpb25JZCxcbiAgICB2YWx1ZXMuY2FuY2VsbGF0aW9uUG9saWN5LFxuICAgIHZhbHVlcy5yZWZ1bmRUb0d1ZXN0LFxuICAgIHZhbHVlcy5wYXlvdXRUb0hvc3QsXG4gICAgdmFsdWVzLmd1ZXN0U2VydmljZUZlZSxcbiAgICB2YWx1ZXMuaG9zdFNlcnZpY2VGZWUsXG4gICAgdmFsdWVzLnRvdGFsLFxuICAgIHZhbHVlcy5jdXJyZW5jeSxcbiAgICB2YWx1ZXMudGhyZWFkSWQsXG4gICAgdmFsdWVzLmNhbmNlbGxlZEJ5LFxuICAgIHZhbHVlcy5tZXNzYWdlLFxuICAgIHZhbHVlcy5jaGVja0luLFxuICAgIHZhbHVlcy5jaGVja091dCxcbiAgICB2YWx1ZXMuZ3Vlc3RzLFxuICAgIHZhbHVlcy5saXN0VGl0bGUsXG4gICAgdmFsdWVzLmNvbmZpcm1hdGlvbkNvZGUsXG4gICAgdmFsdWVzLmhvc3ROYW1lLFxuICAgIHZhbHVlcy5ndWVzdE5hbWUsXG4gICAgdmFsdWVzLmhvc3RFbWFpbCxcbiAgICB2YWx1ZXMuZ3Vlc3RFbWFpbFxuICApXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdDsiLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuXG4gIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCF2YWx1ZXMubWVzc2FnZSkge1xuICAgIGVycm9ycy5tZXNzYWdlID0gbWVzc2FnZXMucmVxdWlyZWQ7XG4gIH0gZWxzZSBpZiAodmFsdWVzLm1lc3NhZ2UgJiYgdmFsdWVzLm1lc3NhZ2UudG9TdHJpbmcoKS50cmltKCkgPT0gJycpIHtcbiAgICBlcnJvcnMubWVzc2FnZSA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgaW5qZWN0SW50bCwgRm9ybWF0dGVkTnVtYmVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbi8vIEhlbHBlclxuaW1wb3J0IHsgY29udmVydCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY3VycmVuY3lDb252ZXJ0aW9uJztcbmltcG9ydCB7IGlzUlRMIH0gZnJvbSAnLi4vLi4vaGVscGVycy9mb3JtYXRMb2NhbGUnO1xuY2xhc3MgQ3VycmVuY3lDb252ZXJ0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYmFzZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByYXRlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdXBlclN5bWJvbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvQ3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbW91bnQ6IDAsXG4gICAgc3VwZXJTeW1ib2w6IGZhbHNlLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJhc2U6IG51bGwsXG4gICAgICByYXRlczogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGJhc2UsIHJhdGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChiYXNlICE9IHVuZGVmaW5lZCAmJiByYXRlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYXNlOiBiYXNlLCByYXRlczogcmF0ZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGJhc2UsIHJhdGVzIH0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGJhc2UgIT0gdW5kZWZpbmVkICYmIHJhdGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhc2U6IGJhc2UsIHJhdGVzOiByYXRlcyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmcm9tLCBhbW91bnQsIHN1cGVyU3ltYm9sLCBjbGFzc05hbWUsIHRvQ3VycmVuY3ksIGxvY2FsZSwgaXNDdXJyZW5jeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGJhc2UsIHJhdGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IHRhcmdldEN1cnJlbmN5O1xuICAgIGxldCBjb252ZXJ0ZWRBbW91bnQgPSBhbW91bnQ7XG4gICAgbGV0IGZyb21DdXJyZW5jeSA9IGZyb20gfHwgYmFzZTtcblxuICAgIGlmIChyYXRlcyAhPSBudWxsKSB7XG4gICAgICBjb252ZXJ0ZWRBbW91bnQgPSBjb252ZXJ0KGJhc2UsIHJhdGVzLCBhbW91bnQsIGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSk7XG4gICAgfVxuXG4gICAgaWYgKHRvQ3VycmVuY3kpIHtcbiAgICAgIHRhcmdldEN1cnJlbmN5ID0gdG9DdXJyZW5jeTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0Q3VycmVuY3kgPSBiYXNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7XG4gICAgICAgICAgaXNSVEwobG9jYWxlKSA/XG4gICAgICAgICAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiB0YXJnZXRDdXJyZW5jeSxcbiAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBjb252ZXJ0ZWRBbW91bnQgJSAxID09PSAwID8gMCA6IDIsXG4gICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogY29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyLFxuICAgICAgICAgICAgICBjdXJyZW5jeURpc3BsYXk6IFwic3ltYm9sXCJcbiAgICAgICAgICAgIH0pLmZvcm1hdChjb252ZXJ0ZWRBbW91bnQpXG4gICAgICAgICAgICA6IDxGb3JtYXR0ZWROdW1iZXJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnZlcnRlZEFtb3VudH1cbiAgICAgICAgICAgICAgc3R5bGU9XCJjdXJyZW5jeVwiXG4gICAgICAgICAgICAgIGN1cnJlbmN5PXt0YXJnZXRDdXJyZW5jeX1cbiAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzPXtjb252ZXJ0ZWRBbW91bnQgJSAxID09PSAwID8gMCA6IDJ9XG4gICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cz17Y29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyfVxuICAgICAgICAgICAgICBjdXJyZW5jeURpc3BsYXk9e1wic3ltYm9sXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBzdXBlclN5bWJvbCAmJiA8c3VwPnt0YXJnZXRDdXJyZW5jeX08L3N1cD5cbiAgICAgICAgfVxuXG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBiYXNlOiBzdGF0ZS5jdXJyZW5jeS5iYXNlLFxuICB0b0N1cnJlbmN5OiBzdGF0ZS5jdXJyZW5jeS50byxcbiAgcmF0ZXM6IHN0YXRlLmN1cnJlbmN5LnJhdGVzLFxuICBsb2NhbGU6IHN0YXRlLmludGwubG9jYWxlXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ3VycmVuY3lDb252ZXJ0ZXIpKTtcblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBzIGZyb20gXCIuL0xheW91dC5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgQ29va2llc0Rpc2NsYWltZXIgZnJvbSBcIi4uL0Nvb2tpZXNEaXNjbGFpbWVyXCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBhZGRpbmdUb3B9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb29raWVzRGlzY2xhaW1lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExheW91dCk7XG4iLCIvL0Rpc2NvdW50IGNhbGN1bGF0aW9uXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpY2VXaXRoRGlzY291bnQoeyBiYXNlUHJpY2UsIGRpc2NvdW50LCBuaWdodHMgfSkge1xuICBpZiAoZGlzY291bnQgPiAwKSB7XG4gICAgbGV0IHNpbmdsZU5pZ2h0RGlzY291bnQgPSBkaXNjb3VudCAvIG5pZ2h0cztcbiAgICBiYXNlUHJpY2UgPSBiYXNlUHJpY2UgLSBzaW5nbGVOaWdodERpc2NvdW50O1xuICB9XG4gIHJldHVybiBiYXNlUHJpY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXhlZFZhbHVlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZS50b0ZpeGVkKDIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsbGF0aW9uR3Vlc3REYXRhKHJlbWFpbmluZ05pZ2h0cyxcbiAgbmlnaHRzLFxuICBwcmljZUZvckRheXMsXG4gIGFjY29tb2RhdGlvbixcbiAgaXNDbGVhaW5nUHJpY2UsXG4gIHRheFJhdGUsXG4gIGd1ZXN0U2VydmljZUZlZSxcbiAgZ3Vlc3RGZWVzLFxuICBkaXNjb3VudCxcbiAgaG9zdFNlcnZpY2VGZWUsXG4gIGJhc2VQcmljZSwgLy8gRWl0aGVyIHNwZWNpYWwgcHJpY2UgYXZlcmFnZSBvciBiYXNlIHByaWNlIGZyb20gcmVzZXJ2ZXJhdGlvbiB3aXRoIGRpc2NvdW50IGlzIHNldFxuICB0b3RhbCxcbiAgcG9saWN5TmFtZSxcbiAgaW50ZXJ2YWwsXG4gIHByaW9yRGF5cyxcbiAgbm9uUmVmdW5hYmxlTmlnaHRzLFxuICBob3N0U2VydmljZUZlZVR5cGUsXG4gIGhvc3RTZXJ2aWNlRmVlVmFsdWUsXG4gIGN1cnJlbmN5LFxuICBiYXNlLFxuICByYXRlcyxcbiAgc2VydmljZUZlZXMsXG4gIGNsZWFuaW5nRmVlUGVyY2VudCkge1xuXG4gIGxldCByZWZ1bmRhYmxlTmlnaHRQcmljZSA9IDAsIG5vblJlZnVuZGFibGVOaWdodFByaWNlID0gMCwgcmVmdW5kV2l0aG91dEd1ZXN0RmVlID0gMDtcbiAgbGV0IHVwZGF0ZWRIb3N0RmVlID0gMCwgcGF5b3V0VG9Ib3N0ID0gMCwgaG9zdFJlZnVuZCA9IDA7XG4gIGxldCBjaGVja0luTmlnaHRzID0gKHJlbWFpbmluZ05pZ2h0cyA9PSAwIHx8IHJlbWFpbmluZ05pZ2h0cyA+IDApID8gcmVtYWluaW5nTmlnaHRzIDogbmlnaHRzO1xuICBsZXQgdG90YWxOaWdodHMgPSBjaGVja0luTmlnaHRzIC0gbm9uUmVmdW5hYmxlTmlnaHRzO1xuXG4gIC8vQmFzZWQgb24gdGhlIHBvbGljeSwgdXBkYXRlIHRoZSBndWVzdCBmZWVcbiAgbGV0IHVwZGF0ZWRHdWVzdEZlZSA9IChndWVzdFNlcnZpY2VGZWUgKiAoZ3Vlc3RGZWVzIC8gMTAwKSksIC8vVGhpcyB2YXJpYWJsZSBzdG9yZXMgcmVmdW5kZWQgZ3Vlc3QgZmVlIHZhbHVlLlxuICAgIHBhaWRBbW91bnQgPSB0b3RhbCArIGd1ZXN0U2VydmljZUZlZTtcblxuICAvL0Jhc2VkIG9uIHRoZSBwb2xpY3ksIHVwZGF0ZSB0aGUgY2xlYW5pbmcgcHJpY2VcbiAgaXNDbGVhaW5nUHJpY2UgPSAoaXNDbGVhaW5nUHJpY2UgKiAoY2xlYW5pbmdGZWVQZXJjZW50IC8gMTAwKSk7XG5cbiAgLy9SZWZ1bmQgYW1vdW50IHdpdGhvdXQgY29uc2lkZXJpbmcgZ3Vlc3Qgc2VydmljZSBmZWVcbiAgcmVmdW5kYWJsZU5pZ2h0UHJpY2UgPSBnZXRGaXhlZFZhbHVlKCgodG90YWxOaWdodHMgKiBiYXNlUHJpY2UpICogKGFjY29tb2RhdGlvbiAvIDEwMCkpICsgaXNDbGVhaW5nUHJpY2UpO1xuXG4gIC8vSG9zdCBQYXlvdXQgYW1vdW50IHdpdGhvdXQgc3VidHJhY3RpbmcgaG9zdCBzZXJ2aWNlIGZlZS4gdG90YWwgaGFzIGNsZWFuaW5nIEZlZSB3aXRoIGluIGl0LlxuICBob3N0UmVmdW5kID0gZ2V0Rml4ZWRWYWx1ZSh0b3RhbCAtIHJlZnVuZGFibGVOaWdodFByaWNlKTtcblxuICAvL0FkZGluZyBndWVzdCBzZXJ2aWNlIGZlZSwgaWYgaXQgY291bGQgYmUgcmVmdW5kZWRcbiAgcmVmdW5kYWJsZU5pZ2h0UHJpY2UgPSByZWZ1bmRhYmxlTmlnaHRQcmljZSArIHVwZGF0ZWRHdWVzdEZlZTtcblxuICAvL1BheW91dCBhbW91bnQgY2FsY3VsYXRlZCB3aXRoIGhvc3Qgc2VydmljZSBmZWVcbiAgaWYgKGhvc3RSZWZ1bmQgPiAwKSB7XG4gICAgdXBkYXRlZEhvc3RGZWUgPSBnZXRGaXhlZFZhbHVlKGhvc3RTZXJ2aWNlRmVlVHlwZSA9PT0gJ3BlcmNlbnRhZ2UnID8gaG9zdFJlZnVuZCAqIChOdW1iZXIoaG9zdFNlcnZpY2VGZWVWYWx1ZSkgLyAxMDApIDogaG9zdFNlcnZpY2VGZWVWYWx1ZSk7XG4gICAgcGF5b3V0VG9Ib3N0ID0gZ2V0Rml4ZWRWYWx1ZShob3N0UmVmdW5kIC0gdXBkYXRlZEhvc3RGZWUpO1xuICB9XG5cbiAgLy9Ob24gcmVmdW5kYWJsZSBhbW91bnQgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgdG90YWwgYW1vdW50IGd1ZXN0IHBhaWQgYW5kIHRoZSByZWZ1bmRhYmxlIGFtb3VudCB3aXRoIGd1ZXN0IHNlcnZpY2UgZmVlXG4gIG5vblJlZnVuZGFibGVOaWdodFByaWNlID0gZ2V0Rml4ZWRWYWx1ZShwYWlkQW1vdW50IC0gcmVmdW5kYWJsZU5pZ2h0UHJpY2UpO1xuXG4gIHJldHVybiB7XG4gICAgcmVmdW5kYWJsZU5pZ2h0UHJpY2UsXG4gICAgcmVmdW5kV2l0aG91dEd1ZXN0RmVlLFxuICAgIG5vblJlZnVuZGFibGVOaWdodFByaWNlLFxuICAgIC8vSWYgdGhpcyB1cGRhdGVkR3Vlc3RGZWUgd2l0aCBpbiBvYmplY3QgaXMgMCwgYWRtaW4gd29uJ3QgZ2V0IGd1ZXN0IHNlcnZpY2UgZmVlIGFmdGVyIGNhbmNlbGxhdGlvblxuICAgIHVwZGF0ZWRHdWVzdEZlZTogZ3Vlc3RTZXJ2aWNlRmVlIC0gdXBkYXRlZEd1ZXN0RmVlLCAvL0VpdGhlciB3aG9sZSBndWVzdCBzZXJ2aWNlIGlzIHJlZnVuZGVkIG9yIG5vbmUgYmFzZWQgb24gdGhlIHBvbGljeVxuICAgIHBheW91dFRvSG9zdCxcbiAgICB1cGRhdGVkSG9zdEZlZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSG9zdENhbmNlbGxhdGlvbih7XG4gIHRvdGFsLFxuICBiYXNlUHJpY2UsIC8vIEVpdGhlciBzcGVjaWFsIHByaWNlIGF2ZXJhZ2Ugb3IgYmFzZSBwcmljZSBmcm9tIHJlc2VydmVyYXRpb24gd2l0aCBkaXNjb3VudCBpcyBzZXRcbiAgaXNDbGVhaW5nUHJpY2UsXG4gIG5pZ2h0cyxcbiAgcmVtYWluaW5nTmlnaHRzLFxuICBndWVzdFNlcnZpY2VGZWUsIC8vR3Vlc3Qgc2VydmljZSBmZWUgdmFsdWUsIHdoZW4gdGhlIHJlc2VydmF0aW9uIGlzIGNyZWF0ZWRcbiAgaG9zdFNlcnZpY2VGZWUsICAvL0hvc3Qgc2VydmljZSBmZWUgdmFsdWUsIHdoZW4gdGhlIHJlc2VydmF0aW9uIGlzIGNyZWF0ZWRcbiAgaG9zdFNlcnZpY2VGZWVUeXBlLCAvL0hvc3Qgc2VydmljZSBmZWUgc2V0IGJ5IGFkbWluIGF0IHRoZSB0aW1lIG9mIGNyZWF0aW5nIHJlc2VydmF0aW9uXG4gIGhvc3RTZXJ2aWNlRmVlVmFsdWUsIC8vSG9zdCBzZXJ2aWNlIGZlZSB0eXBlIHNldCBieSBhZG1pbiBhdCB0aGUgdGltZSBvZiBjcmVhdGluZyByZXNlcnZhdGlvblxuICBpbnRlcnZhbFxufSkge1xuICBsZXQgcmVmdW5kQW1vdW50ID0gMCwgbm9uUGF5b3V0QW1vdW50ID0gMCwgcGF5b3V0QW1vdW50ID0gMCwgaG9zdFJlZnVuZCA9IDAsIHJlZnVuZERheXMgPSBuaWdodHM7XG4gIGxldCB1cGRhdGVkSG9zdEZlZSA9IGhvc3RTZXJ2aWNlRmVlLCB1cGRhdGVkR3Vlc3RGZWUgPSBndWVzdFNlcnZpY2VGZWU7XG5cbiAgLy9JZiB0aGUgY2FuY2VsbGF0aW9uIGlzIGRvbmUgYWZ0ZXIgb3IgZHVyaW5nIGNoZWNrIGluIGRhdGVcbiAgaWYgKGludGVydmFsIDw9IDAgJiYgcmVtYWluaW5nTmlnaHRzIDwgbmlnaHRzKSB7XG4gICAgcmVmdW5kRGF5cyA9IHJlbWFpbmluZ05pZ2h0cztcbiAgICBpc0NsZWFpbmdQcmljZSA9IDA7XG4gICAgZ3Vlc3RTZXJ2aWNlRmVlID0gMDtcbiAgfVxuXG4gIC8vUmVmdW5kIGFtb3VudCB0byBndWVzdFxuICByZWZ1bmRBbW91bnQgPSBnZXRGaXhlZFZhbHVlKChyZWZ1bmREYXlzICogYmFzZVByaWNlKSArIGlzQ2xlYWluZ1ByaWNlKTtcblxuICAvL0hvc3QgUGF5b3V0IGFtb3VudCB3aXRob3V0IHN1YnRyYWN0aW5nIGhvc3Qgc2VydmljZSBmZWUuIHRvdGFsIGhhcyBjbGVhbmluZyBGZWUgd2l0aCBpbiBpdC5cbiAgaG9zdFJlZnVuZCA9IGdldEZpeGVkVmFsdWUodG90YWwgLSByZWZ1bmRBbW91bnQpO1xuXG4gIC8vUGF5b3V0IGFtb3VudCBjYWxjdWxhdGVkIHdpdGggaG9zdCBzZXJ2aWNlIGZlZVxuICBpZiAoaG9zdFJlZnVuZCA+IDApIHtcbiAgICBub25QYXlvdXRBbW91bnQgPSByZWZ1bmRBbW91bnQ7IC8vZ3Vlc3Qgc2VydmljZSBmZWUgYW5kIGNsZWFuaW5nIGZlZSB3b24ndCBiZSBoZXJlXG4gICAgLy9OZXcgaG9zdCBzZXJ2aWNlIGZlZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBob3N0IHJlZnVuZCBhbW91bnQuXG4gICAgdXBkYXRlZEhvc3RGZWUgPSBnZXRGaXhlZFZhbHVlKGhvc3RTZXJ2aWNlRmVlVHlwZSA9PT0gJ3BlcmNlbnRhZ2UnID8gaG9zdFJlZnVuZCAqIChOdW1iZXIoaG9zdFNlcnZpY2VGZWVWYWx1ZSkgLyAxMDApIDogaG9zdFNlcnZpY2VGZWVWYWx1ZSk7XG4gICAgcGF5b3V0QW1vdW50ID0gZ2V0Rml4ZWRWYWx1ZShob3N0UmVmdW5kIC0gdXBkYXRlZEhvc3RGZWUpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vUGF5b3V0IGFtb3VudCBvZiBob3N0IGlzIHplcm9cbiAgICBub25QYXlvdXRBbW91bnQgPSBnZXRGaXhlZFZhbHVlKHRvdGFsIC0gdXBkYXRlZEhvc3RGZWUpO1xuICAgIHVwZGF0ZWRHdWVzdEZlZSA9IDA7IC8vR3Vlc3QgZmVlIHJlZnVuZGVkXG4gICAgdXBkYXRlZEhvc3RGZWUgPSAwO1xuICB9XG5cbiAgLy9BZGRpbmcgZ3Vlc3Qgc2VydmljZSBmZWUsIGlmIGl0IGNvdWxkIGJlIHJlZnVuZGVkXG4gIHJlZnVuZEFtb3VudCA9IHJlZnVuZEFtb3VudCArIGd1ZXN0U2VydmljZUZlZTtcblxuICByZXR1cm4ge1xuICAgIHJlZnVuZEFtb3VudCxcbiAgICBub25QYXlvdXRBbW91bnQsXG4gICAgcGF5b3V0QW1vdW50LFxuICAgIHJlZnVuZERheXMsXG4gICAgdXBkYXRlZEhvc3RGZWUsXG4gICAgdXBkYXRlZEd1ZXN0RmVlIC8vSWYgdGhpcyB2YWx1ZSBpcyAwLCBhZG1pbiB3b24ndCBnZXQgZ3Vlc3Qgc2VydmljZSBmZWUgYWZ0ZXIgY2FuY2VsbGF0aW9uXG4gIH07XG59IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9DYW5jZWwuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0NhbmNlbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9DYW5jZWwuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjYW5jZWxsYXRpb25EYXRhXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSW50XCJ9fX19LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyVHlwZVwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjYW5jZWxSZXNlcnZhdGlvbkRhdGFcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJUeXBlXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyVHlwZVwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjaGVja091dFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdHNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYmFzZVByaWNlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNsZWFuaW5nUHJpY2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvdGFsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImN1cnJlbmN5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbmZpcm1hdGlvbkNvZGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25TdGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkaXNjb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjYW5jZWxsYXRpb25Qb2xpY3lcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGF4UmF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0U2VydmljZUZlZVR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFNlcnZpY2VGZWVWYWx1ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc1NwZWNpYWxQcmljZUF2ZXJhZ2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYm9va2luZ1NwZWNpYWxQcmljaW5nXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImJsb2NrZWREYXRlc1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc1NwZWNpYWxQcmljZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjYW5jZWxsYXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwb2xpY3lOYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByaW9yRGF5c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhY2NvbW1vZGF0aW9uUHJpb3JDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFjY29tbW9kYXRpb25CZWZvcmVDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFjY29tbW9kYXRpb25EdXJpbmdDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0RmVlUHJpb3JDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0RmVlQmVmb3JlQ2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdEZlZUR1cmluZ0NoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdEZlZVByaW9yQ2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0RmVlQmVmb3JlQ2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0RmVlRHVyaW5nQ2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0VuYWJsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJub25SZWZ1bmRhYmxlTmlnaHRzUHJpb3JDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm5vblJlZnVuZGFibGVOaWdodHNCZWZvcmVDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm5vblJlZnVuZGFibGVOaWdodHNEdXJpbmdDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpc3REYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY291bnRyeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0aW5nRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNhbmNlbGxhdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBvbGljeU5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJpb3JEYXlzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFjY29tbW9kYXRpb25QcmlvckNoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWNjb21tb2RhdGlvbkJlZm9yZUNoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWNjb21tb2RhdGlvbkR1cmluZ0NoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RGZWVQcmlvckNoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RGZWVCZWZvcmVDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0RmVlRHVyaW5nQ2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0RmVlUHJpb3JDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RGZWVCZWZvcmVDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RGZWVEdXJpbmdDaGVja0luXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzRW5hYmxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpc3RQaG90b3NcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0eXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm1lc3NhZ2VEYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcm9maWxlSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlyc3ROYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBpY3R1cmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlckRhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcm9maWxlSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlyc3ROYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBpY3R1cmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlckRhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxOTI0fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vQ2FuY2VsLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vbm90Rm91bmQvTm90Rm91bmQnO1xuaW1wb3J0IENhbmNlbGxhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbmNlbGxhdGlvbic7XG5cbi8vIEdyYXBocWxcbmltcG9ydCBDYW5jZWxRdWVyeSBmcm9tICcuL0NhbmNlbC5ncmFwaHFsJztcblxuY2xhc3MgQ2FuY2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRyZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0dXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjYW5jZWxsYXRpb25EYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0bG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cdFx0XHRjYW5jZWxSZXNlcnZhdGlvbkRhdGE6IFByb3BUeXBlcy5vYmplY3Rcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjYW5jZWxsYXRpb25EYXRhOiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNhbmNlbGxhdGlvbkRhdGE6IHsgbG9hZGluZywgY2FuY2VsUmVzZXJ2YXRpb25EYXRhIH0sIHVzZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKGxvYWRpbmcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnNwYWNlNH0+XG5cdFx0XHRcdFx0PExvYWRlciB0eXBlPVwidGV4dFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoY2FuY2VsUmVzZXJ2YXRpb25EYXRhID09PSBudWxsIHx8IGNhbmNlbFJlc2VydmF0aW9uRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gPE5vdEZvdW5kIC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cblx0XHRcdFx0XHQ8Q2FuY2VsbGF0aW9uIHVzZXJUeXBlPXt1c2VyVHlwZX0gZGF0YT17Y2FuY2VsUmVzZXJ2YXRpb25EYXRhfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFN0eWxlcyhzKSxcblx0Z3JhcGhxbChDYW5jZWxRdWVyeSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnY2FuY2VsbGF0aW9uRGF0YScsXG5cdFx0XHRvcHRpb25zOiAocHJvcHMpID0+ICh7XG5cdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdHJlc2VydmF0aW9uSWQ6IHByb3BzLnJlc2VydmF0aW9uSWQsXG5cdFx0XHRcdFx0dXNlclR5cGU6IHByb3BzLnVzZXJUeXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5Jyxcblx0XHRcdH0pXG5cdFx0fVxuXHQpLFxuKShDYW5jZWwpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYW5jZWwgZnJvbSAnLi9DYW5jZWwnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL25vdEZvdW5kL05vdEZvdW5kJztcblxuY29uc3QgdGl0bGUgPSAnQ2FuY2VsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aW9uKHsgc3RvcmUsIHBhcmFtcyB9KSB7XG5cbiAgLy8gRnJvbSBSZWR1eCBTdG9yZVxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnJ1bnRpbWUuaXNBdXRoZW50aWNhdGVkO1xuXG4gIC8vIEZyb20gVVJMXG4gIGNvbnN0IHJlc2VydmF0aW9uSWQgPSBwYXJhbXMucmVzZXJ2YXRpb25JZDtcbiAgY29uc3QgdXNlclR5cGUgPSBwYXJhbXMudHlwZTtcblxuICBpZiAoIWlzQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL2xvZ2luJyB9O1xuICB9XG5cbiAgaWYgKHJlc2VydmF0aW9uSWQgPT09IHVuZGVmaW5lZCB8fCBpc05hTihyZXNlcnZhdGlvbklkKSB8fCAodXNlclR5cGUgIT0gJ2hvc3QnICYmIHVzZXJUeXBlICE9ICdndWVzdCcpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgY29tcG9uZW50OiA8TGF5b3V0PjxOb3RGb3VuZCB0aXRsZT17dGl0bGV9IC8+PC9MYXlvdXQ+LFxuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiA8TGF5b3V0PjxDYW5jZWwgcmVzZXJ2YXRpb25JZD17TnVtYmVyKHJlc2VydmF0aW9uSWQpfSB1c2VyVHlwZT17dXNlclR5cGV9IC8+PC9MYXlvdXQ+LFxuICB9O1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQXdCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFuQkE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUE2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBNUVBO0FBQ0E7QUE2RUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQXRRQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFEQTtBQUhBO0FBaUJBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBekNBO0FBSEE7QUFDQTtBQUhBO0FBdURBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQWlOQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQTNSQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBaENBO0FBQ0E7QUFIQTtBQUNBO0FBNFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUE5UkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQWhDQTtBQUNBO0FBNlJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9VQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQXpFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQUNBO0FBSEE7QUFDQTtBQTBFQTs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBbkZBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUhBO0FBYUE7QUFDQTtBQUZBO0FBQ0E7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFqQkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBaUJBOzs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVFBOzs7Ozs7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBdkNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBQ0E7QUFGQTtBQVdBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUE4QkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9