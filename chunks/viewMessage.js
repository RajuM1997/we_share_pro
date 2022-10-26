require("source-map-support").install();
exports.ids = ["viewMessage"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/ViewMessage/ViewMessage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.ViewMessage-errorMessage-1s08N {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.ViewMessage-space1-20Fsi {\n\tmargin-bottom: 6px !important;\n}\n.ViewMessage-space2-2Muxy {\n\tmargin-bottom: 12px !important;\n}\n.ViewMessage-space3-2BEn4 {\n\tmargin-bottom: 18px !important;\n}\n.ViewMessage-space4-Y-Yzz {\n\tmargin-bottom: 24px !important;\n}\n.ViewMessage-space5-i7GKE {\n\tmargin-bottom: 30px !important;\n}\n.ViewMessage-space6-3bKJ9 {\n\tmargin-bottom: 36px !important;\n}\n.ViewMessage-space7-2CI21 {\n\tmargin-bottom: 42px !important;\n}\n.ViewMessage-spaceTop8-iFrYL {\n\tmargin-bottom: 48px !important;\n}\n.ViewMessage-spaceTop1-224qZ {\n\tmargin-top: 6px !important;\n}\n.ViewMessage-spaceTop2-2W6kR {\n\tmargin-top: 12px !important;\n}\n.ViewMessage-spaceTop3-1SBDg {\n\tmargin-top: 18px !important;\n}\n.ViewMessage-spaceTop4-19Vhh {\n\tmargin-top: 24px !important;\n}\n.ViewMessage-spaceTop5-2Bs3- {\n\tmargin-top: 30px !important;\n}\n.ViewMessage-spaceTop6-3yDqb {\n\tmargin-top: 36px !important;\n}\n.ViewMessage-spaceTop7-cro-W {\n\tmargin-top: 42px !important;\n}\n.ViewMessage-spaceTop8-iFrYL {\n\tmargin-top: 48px !important;\n}\n.ViewMessage-noMargin-CUS1r {\n\tmargin: 0px !important;\n}\n.ViewMessage-padding1-g-3Aa {\n\tpadding-bottom: 6px !important;\n}\n.ViewMessage-padding2-1GIEZ {\n\tpadding-bottom: 12px !important;\n}\n.ViewMessage-padding3-1o9Or {\n\tpadding-bottom: 18px !important;\n}\n.ViewMessage-padding4-3qNvB {\n\tpadding-bottom: 24px !important;\n}\n.ViewMessage-padding5-niTxE {\n\tpadding-bottom: 30px !important;\n}\n.ViewMessage-padding6-1GGHk {\n\tpadding-bottom: 36px !important;\n}\n.ViewMessage-padding7-2S012 {\n\tpadding-bottom: 42px !important;\n}\n.ViewMessage-paddingTop1-1SpzK {\n\tpadding-top: 6px !important;\n}\n.ViewMessage-paddingTop2-2WnUE {\n\tpadding-top: 12px !important;\n}\n.ViewMessage-paddingTop3-3A_Ov {\n\tpadding-top: 18px !important;\n}\n.ViewMessage-paddingTop4-xqwVY {\n\tpadding-top: 24px !important;\n}\n.ViewMessage-paddingTop5--VmR8 {\n\tpadding-top: 30px !important;\n}\n.ViewMessage-paddingTop6-1puA- {\n\tpadding-top: 36px !important;\n}\n.ViewMessage-paddingTop7-2y8Oe {\n\tpadding-top: 42px !important;\n}\n.ViewMessage-noPadding-18Ccj {\n\tpadding: 0px !important;\n}\n.ViewMessage-textBold-V4-qC {\n\tfont-weight: 500 !important;\n}\n.ViewMessage-textBolder-ecfLN {\n\tfont-weight: 700 !important;\n}\n.ViewMessage-textNormal-1UzIk {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.ViewMessage-textDarkBlue-1TYlt {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.ViewMessage-textLightBlue-3oW0z {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.ViewMessage-textLightSandleGreen-28qKy {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.ViewMessage-textLightBrown-3E_mE {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.ViewMessage-textMediumMaroon-efD-W {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.ViewMessage-textBrown-2aK2m {\n\tcolor: #B5DC4B !important;\n}\n.ViewMessage-textMaroon-2PMLR {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.ViewMessage-textDarkBrown-30VLO {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.ViewMessage-textMediumBrown-ZixCT {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.ViewMessage-textSkyBlue-1AcMQ {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.ViewMessage-textGray-1tjgM {\n\tcolor: rgb(77, 65, 51) !important;\n}\n/*************************Common Styles start******************************************/\n.ViewMessage-btnRadius-3Z11I {\n\tborder-radius: 0px;\n}\n.ViewMessage-linkBtn-3WAGJ {\n\tborder-radius: 4px;\n\tpadding: 9px 21px;\n}\n.ViewMessage-noMargin-CUS1r {\n\tmargin: 0px;\n}\n.ViewMessage-noBorder-1Bd-v {\n\tborder: 0px none !important;\n}\n/*************************Common Styles end******************************************/\n/*************************Sidenavigation Styles start******************************************/\n.ViewMessage-sidebarDesign-3zd1u {\n\tpadding: 50px 0 30px;\n\tbackground: #ffffff;\n}\n.ViewMessage-sidebarContainer-1YycP {\n\tpadding: 0 35px;\n}\n.ViewMessage-textCenter-36cIT {\n\ttext-align: center;\n}\n.ViewMessage-profileAvatarSection-QJD6c {\n\tposition: relative;\n\tmargin: 0 auto;\n}\n.ViewMessage-profileAvatarLink-q3He6 {\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground-color: #bbb;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n}\n.ViewMessage-profileName-3uaY_ {\n\tfont-size: 18px;\n\tfont-weight: bold;\n\tcolor: #484848;\n}\n.ViewMessage-profileDetail-2TXje {\n\tfont-size: 14px;\n\tcolor: #767676;\n}\n.ViewMessage-horizontalLine-2x5Oj {\n\tmargin-top: 15px;\n\tmargin-bottom: 15px;\n\tborder: 0;\n\tborder-top: 2px solid #9b9b9b;\n}\n.ViewMessage-textGray-1tjgM {\n\tcolor: #9b9b9b;\n}\n.ViewMessage-textBold-V4-qC {\n\tfont-weight: bold;\n}\n.ViewMessage-textLeft-3kp34 {\n\ttext-align: left;\n}\n.ViewMessage-textRight-1Au9K {\n\ttext-align: right;\n}\n/*************************Sidenavigation Styles End******************************************/\n/*************************Message Styles start******************************************/\n.ViewMessage-contextPadding-3MRIH {\n\tpadding-top: 8px;\n\tpadding-bottom: 14px;\n\tborder-radius: 0px;\n\tborder: none;\n}\n.ViewMessage-rowCondensed-1mY0I {\n\tmargin-left: -6px;\n\tmargin-right: -6px;\n}\n.ViewMessage-textBody-3ayeM {\n\tmargin: 0;\n\tpadding: 20px;\n\ttext-align: left;\n}\n.ViewMessage-bottomButton-33TBi {\n\ttext-align: right;\n\tpadding: 20px;\n}\n.ViewMessage-textBox-Z-OKc {\n\theight: 80px !important;\n\tborder: 0px;\n\tmargin-top: 0;\n\t-webkit-box-shadow: none;\n\t        box-shadow: none;\n}\n.ViewMessage-btnRight-15_DX {\n\tmargin-left: 10px;\n}\n.ViewMessage-panelDark-1Pqlf {\n\tbackground-color: #ecf0ec;\n\tmargin: 0;\n}\n.ViewMessage-timeText-2MrPM {\n\tcolor: #767676;\n}\n.ViewMessage-timeText-2MrPM:hover,\n.ViewMessage-timeText-2MrPM:focus {\n\tcolor: #767676;\n\ttext-decoration: none;\n\toutline: none;\n}\n/*************************Chat bubble Right & Left Styles start******************************************/\n.ViewMessage-panelQuote-17dIr {\n\tmargin-left: 0;\n\tmargin-right: 0;\n\tposition: relative;\n\tborder-radius: 0px;\n}\n.ViewMessage-panelBubble-nIMWY {\n\tdisplay: block;\n\tposition: relative;\n\theight: auto;\n\tborder-radius: 0;\n\tborder: none;\n\tbackground: #fff;\n}\n.ViewMessage-panelBubbleLeft-3SI6S::before {\n\tcontent: ' ';\n\tposition: absolute;\n\tdisplay: inline-block;\n\twidth: 0;\n\theight: 0;\n\tbottom: auto;\n\tborder: 10px solid transparent;\n\tborder-left: 0;\n\tborder-right-color: #fff;\n\ttop: 0px;\n\tleft: initial;\n\tright: 100%;\n\tborder-width: 0 24px 24px 0;\n\tborder-color: transparent #fff transparent transparent;\n}\n.ViewMessage-panelBubbleLeft-3SI6S::after {\n\tcontent: ' ';\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tleft: -20px;\n\tright: auto;\n\ttop: 0px;\n\tbottom: auto;\n\tborder-width: 0 22px 22px 0;\n\tborder-color: transparent #fff transparent transparent;\n}\n.ViewMessage-panelBubbleRight-9F2hS::before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: -33px;\n\ttop: 0px;\n\tleft: 100%;\n\tborder: 10px solid transparent;\n\tborder-left-color: #fff;\n\tborder-width: 25px 25px 0 0;\n\tborder-color: #fff transparent transparent;\n}\n.ViewMessage-panelBubbleRight-9F2hS::after {\n\tcontent: ' ';\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tleft: -20px;\n\tright: auto;\n\ttop: 0px;\n\tbottom: auto;\n\tborder-width: 0 25px 25px 0;\n\tborder-color: transparent #dce0e0 transparent transparent;\n}\n.ViewMessage-radiusColor-3jmvB::after {\n\tcontent: '';\n\tposition: absolute;\n\tright: -43px;\n\ttop: -1px;\n\tleft: auto;\n\twidth: 43px;\n\theight: 40px;\n\tbackground: #F7FAFF;\n\tborder-top-left-radius: 30px;\n\tborder-bottom-right-radius: 30px;\n\tz-index: 3;\n}\n.ViewMessage-radiusColorTwo-5hape::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: -37px;\n\ttop: 0;\n\tright: auto;\n\twidth: 38px;\n\theight: 40px;\n\tbackground: #F7FAFF;\n\tborder-top-right-radius: 30px;\n\tborder-bottom-left-radius: 30px;\n\tz-index: 3;\n}\n.ViewMessage-panelText-3TA2C {\n\tword-break: break-all !important;\n}\n/*************************Chat bubble Right & Left Styles end******************************************/\n/*************************Notification Message Styles start******************************************/\n.ViewMessage-inlineStatus-1N9dl {\n\ttext-transform: uppercase;\n}\n.ViewMessage-horizontalText-38I1V {\n\toverflow: hidden;\n\ttext-align: center;\n}\n.ViewMessage-textWrapper-2HCzq {\n\tposition: relative;\n}\n.ViewMessage-textWrapper-2HCzq::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tborder-bottom: 1px solid #dce0e0;\n\twidth: 500px;\n\ttop: 50%;\n\tright: 100%;\n\tmargin-right: 15px;\n}\n.ViewMessage-textWrapper-2HCzq::after {\n\tcontent: \"\";\n\tposition: absolute;\n\tborder-bottom: 1px solid #dce0e0;\n\twidth: 500px;\n\ttop: 50%;\n\tleft: 100%;\n\tmargin-left: 15px;\n}\n/*************************Notification Message Styles end******************************************/\n.ViewMessage-horizondalLine-3T9Md {\n\tmargin-top: 15px;\n\tmargin-bottom: 15px;\n\tborder: 0;\n\tborder-top: 1px solid #dce0e0;\n}\n.ViewMessage-textLeft-3kp34 {\n\ttext-align: left;\n}\n.ViewMessage-textRight-1Au9K {\n\ttext-align: right;\n}\n.ViewMessage-textGray-1tjgM {\n\tcolor: #9b9b9b;\n\tfont-size: 14px;\n}\n.ViewMessage-chevronIcon-2pF9X {\n\tfont-size: 1.5em;\n\tmargin-top: 10px;\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n.ViewMessage-timerIcon-3Vuos {\n\tfont-size: 1.5em;\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n.ViewMessage-checkInDate-3Q-44 {\n\tfont-size: 14px;\n\tcolor: #484848;\n}\n.ViewMessage-pullLeft-201XE {\n\tfloat: left;\n}\n.ViewMessage-pullRight-2V2P3 {\n\tfloat: right;\n}\n/** Discount **/\n.ViewMessage-discountText-2A1Wu {\n\tcolor: #3fb34f;\n}\na,\na:hover,\na:focus,\na:active {\n\ttext-decoration: none;\n}\n.ViewMessage-paddingRight-2QZXB {\n\tpadding: 0 0 0 35px;\n}\n.ViewMessage-displayTable-1nGJL {\n\twidth: 100%;\n\tdisplay: table;\n}\n.ViewMessage-displayTableRow-2vbYK {\n\twidth: 100%;\n\tdisplay: table-row;\n}\n.ViewMessage-displayTableCell-2Im9a {\n\tdisplay: table-cell;\n\tvertical-align: top;\n}\n.ViewMessage-displayTableWidth-RRVdu {\n\twidth: 100%;\n\tposition: relative;\n}\n.ViewMessage-profileAvatarSection-QJD6c {\n\tmargin: 0 0 0 6px;\n\tposition: relative;\n\tz-index: 5;\n}\n.ViewMessage-displayTableCellTop-14I0G {\n\tdisplay: table-cell;\n\tvertical-align: top;\n}\n.ViewMessage-profileAvatarSectionLeft-2MdWX {\n\tposition: relative;\n\tz-index: 5;\n\tmargin: 0px 6px 0 0px;\n}\n.ViewMessage-guestHost-1jb1O {\n\ttext-align: center;\n\tmargin-bottom: 25px;\n\tbackground: #fff;\n\tpadding: 10px 0;\n}\n.ViewMessage-hostChat-3kwSl {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.ViewMessage-hostChat-3kwSl img {\n\twidth: 110px;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n}\n.ViewMessage-centerChatIcon-22AUc {\n\theight: 45px;\n\twidth: 45px;\n\tmargin-left: -20px;\n\tmargin-right: -20px;\n\tposition: relative;\n\tz-index: 2;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.ViewMessage-iconBG-2un8B {\n\tborder-radius: 50%;\n\tborder: 2px solid #ccc;\n\tborder-width: 2px !important;\n\tbackground-color: #fff;\n\ttext-align: center;\n\theight: 45px;\n\twidth: 45px;\n}\n.ViewMessage-iconBG-2un8B img {\n\twidth: 65%;\n\tdisplay: inline-block;\n\tpadding: 9px 0 0 0\n}\n.ViewMessage-hostName-O81G7 {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground: #fff;\n\tpadding: 10px;\n\tcolor: #484848;\n\tfont-size: 15px;\n\twidth: 20%;\n\t-o-text-overflow: ellipsis;\n\t   text-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n.ViewMessage-instantIcon-28hf2 {\n\tmargin-top: -4px;\n}\n.ViewMessage-positionR-2mZMa {\n\tposition: relative;\n}\n@media (max-width: 1023px) and (min-width: 768px) {\n\t.ViewMessage-noPaddingRight-3O96x {\n\t\tpadding-right: 0;\n\t}\n\t.ViewMessage-hostChat-3kwSl img {\n\t\twidth: 95px;\n\t}\n\t.ViewMessage-iconBG-2un8B img {\n\t\tpadding: 8px 0 0 0;\n\t}\n\t.ViewMessage-iconBG-2un8B {\n\t\theight: 40px;\n\t\twidth: 40px;\n\t}\n\t.ViewMessage-centerChatIcon-22AUc {\n\t\theight: 40px;\n\t\twidth: 40px;\n\t}\n\t.ViewMessage-hostName-O81G7 {\n\t\twidth: 25%;\n\t\t-o-text-overflow: ellipsis;\n\t\t   text-overflow: ellipsis;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t}\n\t.ViewMessage-hostNameColor-1h0gw {\n\t\tcolor: #484848 !important;\n\t}\n}\n@media (max-width: 767px) {\n\t.ViewMessage-paddingRight-2QZXB {\n\t\tpadding: 0 0 0 0;\n\t}\n\t.ViewMessage-panelBubbleRight-9F2hS::before {\n\t\tdisplay: none;\n\t}\n\t.ViewMessage-panelBubbleLeft-3SI6S::before {\n\t\tdisplay: none;\n\t}\n\t.ViewMessage-panelBubbleRight-9F2hS::after {\n\t\tdisplay: none;\n\t}\n\t.ViewMessage-panelBubbleLeft-3SI6S::after {\n\t\tdisplay: none;\n\t}\n\t.ViewMessage-profileAvatarLink-q3He6 img {\n\t\twidth: 60px;\n\t\theight: 60px;\n\t}\n\t.ViewMessage-profileAvatarSection-QJD6c {\n\t\tmargin: 0 0 0 13px;\n\t}\n\t.ViewMessage-displayTableWidth-RRVdu {\n\t\twidth: 100%;\n\t}\n\t.ViewMessage-displayTableWidthTwo-27aXc {\n\t\twidth: 20%;\n\t}\n\t.ViewMessage-profileAvatarSectionLeft-2MdWX {\n\t\tmargin: 0 10px 0 0;\n\t\tposition: relative;\n\t\tz-index: 5;\n\t}\n\t.ViewMessage-radiusColor-3jmvB::after {\n\t\tdisplay: none;\n\t}\n\t.ViewMessage-radiusColorTwo-5hape::after {\n\t\tdisplay: none;\n\t}\n\t.ViewMessage-displayTableCell-2Im9a {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n}\n@media screen and (max-width: 768px) {\n\t.ViewMessage-hideSm-1FN-S {\n\t\tdisplay: none;\n\t}\n}\n@media screen and (max-width: 640px) {\n\t.ViewMessage-sidebarContainer-1YycP {\n\t\tpadding: 0 25px;\n\t}\n}\n@media (max-width: 320px) {\n\t.ViewMessage-noPaddingRight-3O96x {\n\t\tpadding-right: 0;\n\t}\n}\n.ViewMessage-displayFlex-kRIJR {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ViewMessage.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD,wFAAwF;AACxF;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;CACC,4BAA4B;CAC5B;AACD,sFAAsF;AACtF,gGAAgG;AAChG;CACC,qBAAqB;CACrB,oBAAoB;CACpB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,eAAe;CACf;AACD;CACC,oCAAoC;SAC5B,4BAA4B;CACpC,mBAAmB;CACnB,sBAAsB;CACtB,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB,uBAAuB;CACvB;AACD;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf;AACD;CACC,gBAAgB;CAChB,eAAe;CACf;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,UAAU;CACV,8BAA8B;CAC9B;AACD;CACC,eAAe;CACf;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD,8FAA8F;AAC9F,yFAAyF;AACzF;CACC,iBAAiB;CACjB,qBAAqB;CACrB,mBAAmB;CACnB,aAAa;CACb;AACD;CACC,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,UAAU;CACV,cAAc;CACd,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB,cAAc;CACd;AACD;CACC,wBAAwB;CACxB,YAAY;CACZ,cAAc;CACd,yBAAyB;SACjB,iBAAiB;CACzB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,0BAA0B;CAC1B,UAAU;CACV;AACD;CACC,eAAe;CACf;AACD;;CAEC,eAAe;CACf,sBAAsB;CACtB,cAAc;CACd;AACD,0GAA0G;AAC1G;CACC,eAAe;CACf,gBAAgB;CAChB,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,eAAe;CACf,mBAAmB;CACnB,aAAa;CACb,iBAAiB;CACjB,aAAa;CACb,iBAAiB;CACjB;AACD;CACC,aAAa;CACb,mBAAmB;CACnB,sBAAsB;CACtB,SAAS;CACT,UAAU;CACV,aAAa;CACb,+BAA+B;CAC/B,eAAe;CACf,yBAAyB;CACzB,SAAS;CACT,cAAc;CACd,YAAY;CACZ,4BAA4B;CAC5B,uDAAuD;CACvD;AACD;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,YAAY;CACZ,YAAY;CACZ,SAAS;CACT,aAAa;CACb,4BAA4B;CAC5B,uDAAuD;CACvD;AACD;CACC,YAAY;CACZ,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;CACb,SAAS;CACT,WAAW;CACX,+BAA+B;CAC/B,wBAAwB;CACxB,4BAA4B;CAC5B,2CAA2C;CAC3C;AACD;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,UAAU;CACV,YAAY;CACZ,YAAY;CACZ,SAAS;CACT,aAAa;CACb,4BAA4B;CAC5B,0DAA0D;CAC1D;AACD;CACC,YAAY;CACZ,mBAAmB;CACnB,aAAa;CACb,UAAU;CACV,WAAW;CACX,YAAY;CACZ,aAAa;CACb,oBAAoB;CACpB,6BAA6B;CAC7B,iCAAiC;CACjC,WAAW;CACX;AACD;CACC,YAAY;CACZ,mBAAmB;CACnB,YAAY;CACZ,OAAO;CACP,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,oBAAoB;CACpB,8BAA8B;CAC9B,gCAAgC;CAChC,WAAW;CACX;AACD;CACC,iCAAiC;CACjC;AACD,wGAAwG;AACxG,sGAAsG;AACtG;CACC,0BAA0B;CAC1B;AACD;CACC,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,YAAY;CACZ,mBAAmB;CACnB,iCAAiC;CACjC,aAAa;CACb,SAAS;CACT,YAAY;CACZ,mBAAmB;CACnB;AACD;CACC,YAAY;CACZ,mBAAmB;CACnB,iCAAiC;CACjC,aAAa;CACb,SAAS;CACT,WAAW;CACX,kBAAkB;CAClB;AACD,oGAAoG;AACpG;CACC,iBAAiB;CACjB,oBAAoB;CACpB,UAAU;CACV,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,eAAe;CACf,gBAAgB;CAChB;AACD;CACC,iBAAiB;CACjB,iBAAiB;CACjB,oBAAoB;CACpB,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD,gBAAgB;AAChB;CACC,eAAe;CACf;AACD;;;;CAIC,sBAAsB;CACtB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ,eAAe;CACf;AACD;CACC,YAAY;CACZ,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ,mBAAmB;CACnB;AACD;CACC,kBAAkB;CAClB,mBAAmB;CACnB,WAAW;CACX;AACD;CACC,oBAAoB;CACpB,oBAAoB;CACpB;AACD;CACC,mBAAmB;CACnB,WAAW;CACX,sBAAsB;CACtB;AACD;CACC,mBAAmB;CACnB,oBAAoB;CACpB,iBAAiB;CACjB,gBAAgB;CAChB;AACD;CACC,sBAAsB;CACtB,uBAAuB;CACvB;AACD;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB;AACD;CACC,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,oBAAoB;CACpB,mBAAmB;CACnB,WAAW;CACX,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB;AACD;CACC,mBAAmB;CACnB,uBAAuB;CACvB,6BAA6B;CAC7B,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,YAAY;CACZ;AACD;CACC,WAAW;CACX,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB,uBAAuB;CACvB,iBAAiB;CACjB,cAAc;CACd,eAAe;CACf,gBAAgB;CAChB,WAAW;CACX,2BAA2B;IACxB,wBAAwB;CAC3B,iBAAiB;CACjB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC;EACC,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;EACC,mBAAmB;EACnB;CACD;EACC,aAAa;EACb,YAAY;EACZ;CACD;EACC,aAAa;EACb,YAAY;EACZ;CACD;EACC,WAAW;EACX,2BAA2B;KACxB,wBAAwB;EAC3B,iBAAiB;EACjB,oBAAoB;EACpB;CACD;EACC,0BAA0B;EAC1B;CACD;AACD;CACC;EACC,iBAAiB;EACjB;CACD;EACC,cAAc;EACd;CACD;EACC,cAAc;EACd;CACD;EACC,cAAc;EACd;CACD;EACC,cAAc;EACd;CACD;EACC,YAAY;EACZ,aAAa;EACb;CACD;EACC,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ;CACD;EACC,WAAW;EACX;CACD;EACC,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX;CACD;EACC,cAAc;EACd;CACD;EACC,cAAc;EACd;CACD;EACC,oBAAoB;EACpB,uBAAuB;EACvB;CACD;AACD;CACC;EACC,cAAc;EACd;CACD;AACD;CACC;EACC,gBAAgB;EAChB;CACD;AACD;CACC;EACC,iBAAiB;EACjB;CACD;AACD;CACC,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd","file":"ViewMessage.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n/*************************Common Styles start******************************************/\n.btnRadius {\n\tborder-radius: 0px;\n}\n.linkBtn {\n\tborder-radius: 4px;\n\tpadding: 9px 21px;\n}\n.noMargin {\n\tmargin: 0px;\n}\n.noBorder {\n\tborder: 0px none !important;\n}\n/*************************Common Styles end******************************************/\n/*************************Sidenavigation Styles start******************************************/\n.sidebarDesign {\n\tpadding: 50px 0 30px;\n\tbackground: #ffffff;\n}\n.sidebarContainer {\n\tpadding: 0 35px;\n}\n.textCenter {\n\ttext-align: center;\n}\n.profileAvatarSection {\n\tposition: relative;\n\tmargin: 0 auto;\n}\n.profileAvatarLink {\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tbackground-color: #bbb;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n}\n.profileName {\n\tfont-size: 18px;\n\tfont-weight: bold;\n\tcolor: #484848;\n}\n.profileDetail {\n\tfont-size: 14px;\n\tcolor: #767676;\n}\n.horizontalLine {\n\tmargin-top: 15px;\n\tmargin-bottom: 15px;\n\tborder: 0;\n\tborder-top: 2px solid #9b9b9b;\n}\n.textGray {\n\tcolor: #9b9b9b;\n}\n.textBold {\n\tfont-weight: bold;\n}\n.textLeft {\n\ttext-align: left;\n}\n.textRight {\n\ttext-align: right;\n}\n/*************************Sidenavigation Styles End******************************************/\n/*************************Message Styles start******************************************/\n.contextPadding {\n\tpadding-top: 8px;\n\tpadding-bottom: 14px;\n\tborder-radius: 0px;\n\tborder: none;\n}\n.rowCondensed {\n\tmargin-left: -6px;\n\tmargin-right: -6px;\n}\n.textBody {\n\tmargin: 0;\n\tpadding: 20px;\n\ttext-align: left;\n}\n.bottomButton {\n\ttext-align: right;\n\tpadding: 20px;\n}\n.textBox {\n\theight: 80px !important;\n\tborder: 0px;\n\tmargin-top: 0;\n\t-webkit-box-shadow: none;\n\t        box-shadow: none;\n}\n.btnRight {\n\tmargin-left: 10px;\n}\n.panelDark {\n\tbackground-color: #ecf0ec;\n\tmargin: 0;\n}\n.timeText {\n\tcolor: #767676;\n}\n.timeText:hover,\n.timeText:focus {\n\tcolor: #767676;\n\ttext-decoration: none;\n\toutline: none;\n}\n/*************************Chat bubble Right & Left Styles start******************************************/\n.panelQuote {\n\tmargin-left: 0;\n\tmargin-right: 0;\n\tposition: relative;\n\tborder-radius: 0px;\n}\n.panelBubble {\n\tdisplay: block;\n\tposition: relative;\n\theight: auto;\n\tborder-radius: 0;\n\tborder: none;\n\tbackground: #fff;\n}\n.panelBubbleLeft::before {\n\tcontent: ' ';\n\tposition: absolute;\n\tdisplay: inline-block;\n\twidth: 0;\n\theight: 0;\n\tbottom: auto;\n\tborder: 10px solid transparent;\n\tborder-left: 0;\n\tborder-right-color: #fff;\n\ttop: 0px;\n\tleft: initial;\n\tright: 100%;\n\tborder-width: 0 24px 24px 0;\n\tborder-color: transparent #fff transparent transparent;\n}\n.panelBubbleLeft::after {\n\tcontent: ' ';\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tleft: -20px;\n\tright: auto;\n\ttop: 0px;\n\tbottom: auto;\n\tborder-width: 0 22px 22px 0;\n\tborder-color: transparent #fff transparent transparent;\n}\n.panelBubbleRight::before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: -33px;\n\ttop: 0px;\n\tleft: 100%;\n\tborder: 10px solid transparent;\n\tborder-left-color: #fff;\n\tborder-width: 25px 25px 0 0;\n\tborder-color: #fff transparent transparent;\n}\n.panelBubbleRight::after {\n\tcontent: ' ';\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tleft: -20px;\n\tright: auto;\n\ttop: 0px;\n\tbottom: auto;\n\tborder-width: 0 25px 25px 0;\n\tborder-color: transparent #dce0e0 transparent transparent;\n}\n.radiusColor::after {\n\tcontent: '';\n\tposition: absolute;\n\tright: -43px;\n\ttop: -1px;\n\tleft: auto;\n\twidth: 43px;\n\theight: 40px;\n\tbackground: #F7FAFF;\n\tborder-top-left-radius: 30px;\n\tborder-bottom-right-radius: 30px;\n\tz-index: 3;\n}\n.radiusColorTwo::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: -37px;\n\ttop: 0;\n\tright: auto;\n\twidth: 38px;\n\theight: 40px;\n\tbackground: #F7FAFF;\n\tborder-top-right-radius: 30px;\n\tborder-bottom-left-radius: 30px;\n\tz-index: 3;\n}\n.panelText {\n\tword-break: break-all !important;\n}\n/*************************Chat bubble Right & Left Styles end******************************************/\n/*************************Notification Message Styles start******************************************/\n.inlineStatus {\n\ttext-transform: uppercase;\n}\n.horizontalText {\n\toverflow: hidden;\n\ttext-align: center;\n}\n.textWrapper {\n\tposition: relative;\n}\n.textWrapper::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tborder-bottom: 1px solid #dce0e0;\n\twidth: 500px;\n\ttop: 50%;\n\tright: 100%;\n\tmargin-right: 15px;\n}\n.textWrapper::after {\n\tcontent: \"\";\n\tposition: absolute;\n\tborder-bottom: 1px solid #dce0e0;\n\twidth: 500px;\n\ttop: 50%;\n\tleft: 100%;\n\tmargin-left: 15px;\n}\n/*************************Notification Message Styles end******************************************/\n.horizondalLine {\n\tmargin-top: 15px;\n\tmargin-bottom: 15px;\n\tborder: 0;\n\tborder-top: 1px solid #dce0e0;\n}\n.textLeft {\n\ttext-align: left;\n}\n.textRight {\n\ttext-align: right;\n}\n.textGray {\n\tcolor: #9b9b9b;\n\tfont-size: 14px;\n}\n.chevronIcon {\n\tfont-size: 1.5em;\n\tmargin-top: 10px;\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n.timerIcon {\n\tfont-size: 1.5em;\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n.checkInDate {\n\tfont-size: 14px;\n\tcolor: #484848;\n}\n.pullLeft {\n\tfloat: left;\n}\n.pullRight {\n\tfloat: right;\n}\n/** Discount **/\n.discountText {\n\tcolor: #3fb34f;\n}\na,\na:hover,\na:focus,\na:active {\n\ttext-decoration: none;\n}\n.paddingRight {\n\tpadding: 0 0 0 35px;\n}\n.displayTable {\n\twidth: 100%;\n\tdisplay: table;\n}\n.displayTableRow {\n\twidth: 100%;\n\tdisplay: table-row;\n}\n.displayTableCell {\n\tdisplay: table-cell;\n\tvertical-align: top;\n}\n.displayTableWidth {\n\twidth: 100%;\n\tposition: relative;\n}\n.profileAvatarSection {\n\tmargin: 0 0 0 6px;\n\tposition: relative;\n\tz-index: 5;\n}\n.displayTableCellTop {\n\tdisplay: table-cell;\n\tvertical-align: top;\n}\n.profileAvatarSectionLeft {\n\tposition: relative;\n\tz-index: 5;\n\tmargin: 0px 6px 0 0px;\n}\n.guestHost {\n\ttext-align: center;\n\tmargin-bottom: 25px;\n\tbackground: #fff;\n\tpadding: 10px 0;\n}\n.hostChat {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.hostChat img {\n\twidth: 110px;\n\tborder-radius: 50%;\n\tborder: 2px solid #fff;\n}\n.centerChatIcon {\n\theight: 45px;\n\twidth: 45px;\n\tmargin-left: -20px;\n\tmargin-right: -20px;\n\tposition: relative;\n\tz-index: 2;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.iconBG {\n\tborder-radius: 50%;\n\tborder: 2px solid #ccc;\n\tborder-width: 2px !important;\n\tbackground-color: #fff;\n\ttext-align: center;\n\theight: 45px;\n\twidth: 45px;\n}\n.iconBG img {\n\twidth: 65%;\n\tdisplay: inline-block;\n\tpadding: 9px 0 0 0\n}\n.hostName {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground: #fff;\n\tpadding: 10px;\n\tcolor: #484848;\n\tfont-size: 15px;\n\twidth: 20%;\n\t-o-text-overflow: ellipsis;\n\t   text-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n.instantIcon {\n\tmargin-top: -4px;\n}\n.positionR {\n\tposition: relative;\n}\n@media (max-width: 1023px) and (min-width: 768px) {\n\t.noPaddingRight {\n\t\tpadding-right: 0;\n\t}\n\t.hostChat img {\n\t\twidth: 95px;\n\t}\n\t.iconBG img {\n\t\tpadding: 8px 0 0 0;\n\t}\n\t.iconBG {\n\t\theight: 40px;\n\t\twidth: 40px;\n\t}\n\t.centerChatIcon {\n\t\theight: 40px;\n\t\twidth: 40px;\n\t}\n\t.hostName {\n\t\twidth: 25%;\n\t\t-o-text-overflow: ellipsis;\n\t\t   text-overflow: ellipsis;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t}\n\t.hostNameColor {\n\t\tcolor: #484848 !important;\n\t}\n}\n@media (max-width: 767px) {\n\t.paddingRight {\n\t\tpadding: 0 0 0 0;\n\t}\n\t.panelBubbleRight::before {\n\t\tdisplay: none;\n\t}\n\t.panelBubbleLeft::before {\n\t\tdisplay: none;\n\t}\n\t.panelBubbleRight::after {\n\t\tdisplay: none;\n\t}\n\t.panelBubbleLeft::after {\n\t\tdisplay: none;\n\t}\n\t.profileAvatarLink img {\n\t\twidth: 60px;\n\t\theight: 60px;\n\t}\n\t.profileAvatarSection {\n\t\tmargin: 0 0 0 13px;\n\t}\n\t.displayTableWidth {\n\t\twidth: 100%;\n\t}\n\t.displayTableWidthTwo {\n\t\twidth: 20%;\n\t}\n\t.profileAvatarSectionLeft {\n\t\tmargin: 0 10px 0 0;\n\t\tposition: relative;\n\t\tz-index: 5;\n\t}\n\t.radiusColor::after {\n\t\tdisplay: none;\n\t}\n\t.radiusColorTwo::after {\n\t\tdisplay: none;\n\t}\n\t.displayTableCell {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n}\n@media screen and (max-width: 768px) {\n\t.hideSm {\n\t\tdisplay: none;\n\t}\n}\n@media screen and (max-width: 640px) {\n\t.sidebarContainer {\n\t\tpadding: 0 25px;\n\t}\n}\n@media (max-width: 320px) {\n\t.noPaddingRight {\n\t\tpadding-right: 0;\n\t}\n}\n.displayFlex {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"errorMessage": "ViewMessage-errorMessage-1s08N",
	"space1": "ViewMessage-space1-20Fsi",
	"space2": "ViewMessage-space2-2Muxy",
	"space3": "ViewMessage-space3-2BEn4",
	"space4": "ViewMessage-space4-Y-Yzz",
	"space5": "ViewMessage-space5-i7GKE",
	"space6": "ViewMessage-space6-3bKJ9",
	"space7": "ViewMessage-space7-2CI21",
	"spaceTop8": "ViewMessage-spaceTop8-iFrYL",
	"spaceTop1": "ViewMessage-spaceTop1-224qZ",
	"spaceTop2": "ViewMessage-spaceTop2-2W6kR",
	"spaceTop3": "ViewMessage-spaceTop3-1SBDg",
	"spaceTop4": "ViewMessage-spaceTop4-19Vhh",
	"spaceTop5": "ViewMessage-spaceTop5-2Bs3-",
	"spaceTop6": "ViewMessage-spaceTop6-3yDqb",
	"spaceTop7": "ViewMessage-spaceTop7-cro-W",
	"noMargin": "ViewMessage-noMargin-CUS1r",
	"padding1": "ViewMessage-padding1-g-3Aa",
	"padding2": "ViewMessage-padding2-1GIEZ",
	"padding3": "ViewMessage-padding3-1o9Or",
	"padding4": "ViewMessage-padding4-3qNvB",
	"padding5": "ViewMessage-padding5-niTxE",
	"padding6": "ViewMessage-padding6-1GGHk",
	"padding7": "ViewMessage-padding7-2S012",
	"paddingTop1": "ViewMessage-paddingTop1-1SpzK",
	"paddingTop2": "ViewMessage-paddingTop2-2WnUE",
	"paddingTop3": "ViewMessage-paddingTop3-3A_Ov",
	"paddingTop4": "ViewMessage-paddingTop4-xqwVY",
	"paddingTop5": "ViewMessage-paddingTop5--VmR8",
	"paddingTop6": "ViewMessage-paddingTop6-1puA-",
	"paddingTop7": "ViewMessage-paddingTop7-2y8Oe",
	"noPadding": "ViewMessage-noPadding-18Ccj",
	"textBold": "ViewMessage-textBold-V4-qC",
	"textBolder": "ViewMessage-textBolder-ecfLN",
	"textNormal": "ViewMessage-textNormal-1UzIk",
	"textDarkBlue": "ViewMessage-textDarkBlue-1TYlt",
	"textLightBlue": "ViewMessage-textLightBlue-3oW0z",
	"textLightSandleGreen": "ViewMessage-textLightSandleGreen-28qKy",
	"textLightBrown": "ViewMessage-textLightBrown-3E_mE",
	"textMediumMaroon": "ViewMessage-textMediumMaroon-efD-W",
	"textBrown": "ViewMessage-textBrown-2aK2m",
	"textMaroon": "ViewMessage-textMaroon-2PMLR",
	"textDarkBrown": "ViewMessage-textDarkBrown-30VLO",
	"textMediumBrown": "ViewMessage-textMediumBrown-ZixCT",
	"textSkyBlue": "ViewMessage-textSkyBlue-1AcMQ",
	"textGray": "ViewMessage-textGray-1tjgM",
	"btnRadius": "ViewMessage-btnRadius-3Z11I",
	"linkBtn": "ViewMessage-linkBtn-3WAGJ",
	"noBorder": "ViewMessage-noBorder-1Bd-v",
	"sidebarDesign": "ViewMessage-sidebarDesign-3zd1u",
	"sidebarContainer": "ViewMessage-sidebarContainer-1YycP",
	"textCenter": "ViewMessage-textCenter-36cIT",
	"profileAvatarSection": "ViewMessage-profileAvatarSection-QJD6c",
	"profileAvatarLink": "ViewMessage-profileAvatarLink-q3He6",
	"profileName": "ViewMessage-profileName-3uaY_",
	"profileDetail": "ViewMessage-profileDetail-2TXje",
	"horizontalLine": "ViewMessage-horizontalLine-2x5Oj",
	"textLeft": "ViewMessage-textLeft-3kp34",
	"textRight": "ViewMessage-textRight-1Au9K",
	"contextPadding": "ViewMessage-contextPadding-3MRIH",
	"rowCondensed": "ViewMessage-rowCondensed-1mY0I",
	"textBody": "ViewMessage-textBody-3ayeM",
	"bottomButton": "ViewMessage-bottomButton-33TBi",
	"textBox": "ViewMessage-textBox-Z-OKc",
	"btnRight": "ViewMessage-btnRight-15_DX",
	"panelDark": "ViewMessage-panelDark-1Pqlf",
	"timeText": "ViewMessage-timeText-2MrPM",
	"panelQuote": "ViewMessage-panelQuote-17dIr",
	"panelBubble": "ViewMessage-panelBubble-nIMWY",
	"panelBubbleLeft": "ViewMessage-panelBubbleLeft-3SI6S",
	"panelBubbleRight": "ViewMessage-panelBubbleRight-9F2hS",
	"radiusColor": "ViewMessage-radiusColor-3jmvB",
	"radiusColorTwo": "ViewMessage-radiusColorTwo-5hape",
	"panelText": "ViewMessage-panelText-3TA2C",
	"inlineStatus": "ViewMessage-inlineStatus-1N9dl",
	"horizontalText": "ViewMessage-horizontalText-38I1V",
	"textWrapper": "ViewMessage-textWrapper-2HCzq",
	"horizondalLine": "ViewMessage-horizondalLine-3T9Md",
	"chevronIcon": "ViewMessage-chevronIcon-2pF9X",
	"timerIcon": "ViewMessage-timerIcon-3Vuos",
	"checkInDate": "ViewMessage-checkInDate-3Q-44",
	"pullLeft": "ViewMessage-pullLeft-201XE",
	"pullRight": "ViewMessage-pullRight-2V2P3",
	"discountText": "ViewMessage-discountText-2A1Wu",
	"paddingRight": "ViewMessage-paddingRight-2QZXB",
	"displayTable": "ViewMessage-displayTable-1nGJL",
	"displayTableRow": "ViewMessage-displayTableRow-2vbYK",
	"displayTableCell": "ViewMessage-displayTableCell-2Im9a",
	"displayTableWidth": "ViewMessage-displayTableWidth-RRVdu",
	"displayTableCellTop": "ViewMessage-displayTableCellTop-14I0G",
	"profileAvatarSectionLeft": "ViewMessage-profileAvatarSectionLeft-2MdWX",
	"guestHost": "ViewMessage-guestHost-1jb1O",
	"hostChat": "ViewMessage-hostChat-3kwSl",
	"centerChatIcon": "ViewMessage-centerChatIcon-22AUc",
	"iconBG": "ViewMessage-iconBG-2un8B",
	"hostName": "ViewMessage-hostName-O81G7",
	"instantIcon": "ViewMessage-instantIcon-28hf2",
	"positionR": "ViewMessage-positionR-2mZMa",
	"noPaddingRight": "ViewMessage-noPaddingRight-3O96x",
	"hostNameColor": "ViewMessage-hostNameColor-1h0gw",
	"displayTableWidthTwo": "ViewMessage-displayTableWidthTwo-27aXc",
	"hideSm": "ViewMessage-hideSm-1FN-S",
	"displayFlex": "ViewMessage-displayFlex-kRIJR"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/viewMessage/ViewMessage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n .ViewMessage-root-2563g {\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n}\n .ViewMessage-container-1A_HT {\n\tmargin: 0px auto;\n\tpadding-top: 30px;\n\tmax-width: 1080px;\n\tmax-width: var(--max-content-width);\n}\n a,\na:hover {\n\tcolor: #073687;\n}\n .ViewMessage-bgColor-2cwg3 {\n\twidth: 100%;\n\tbackground: #F7FAFF;\n}\n @media (max-width: 1023px) and (min-width: 768px) {\n\t.ViewMessage-bgColor-2cwg3 {\n\t\tpadding: 0 10px;\n\t}\n}\n @media (max-width: 767px) {\n\t.ViewMessage-bgColor-2cwg3 {\n\t\tpadding: 0 10px;\n\t}\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/viewMessage/ViewMessage.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;CACA;CACA,mBAAmB;CACnB,oBAAoB;CACpB;CACA;CACA,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;CAClB,oCAAoC;CACpC;CACA;;CAEA,eAAe;CACf;CACA;CACA,YAAY;CACZ,oBAAoB;CACpB;CACA;CACA;EACC,gBAAgB;EAChB;CACD;CACA;CACA;EACC,gBAAgB;EAChB;CACD","file":"ViewMessage.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n .root {\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n}\n .container {\n\tmargin: 0px auto;\n\tpadding-top: 30px;\n\tmax-width: 1080px;\n\tmax-width: var(--max-content-width);\n}\n a,\na:hover {\n\tcolor: #073687;\n}\n .bgColor {\n\twidth: 100%;\n\tbackground: #F7FAFF;\n}\n @media (max-width: 1023px) and (min-width: 768px) {\n\t.bgColor {\n\t\tpadding: 0 10px;\n\t}\n}\n @media (max-width: 767px) {\n\t.bgColor {\n\t\tpadding: 0 10px;\n\t}\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "ViewMessage-root-2563g",
	"container": "ViewMessage-container-1A_HT",
	"bgColor": "ViewMessage-bgColor-2cwg3"
};

/***/ }),

/***/ "./public/SiteIcons/chat.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/SiteIcons/chat.png?c89773c7";

/***/ }),

/***/ "./src/actions/Reservation/updateReservation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");



const getAllReservationQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getAllReservation ($userType: String){
    getAllReservation(userType: $userType){
      reservationData {
        id
        reservationState
      }
    }
  }
`;
function updateReservation(reservationId, actionType, userType, threadId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          mutation updateReservation(
            $reservationId: Int!, 
            $actionType: String!,
            $threadId: Int
          ){
              updateReservation(
                reservationId: $reservationId,
                actionType: $actionType,
                threadId: $threadId
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
          actionType,
          threadId
        },
        refetchQueries: [{
          query: getAllReservationQuery,
          variables: {
            userType
          }
        }]
      });

      if (data && data.updateReservation && data.updateReservation.status === '200') {
        if (userType == 'host') {
          _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/reservation/current');
        } else {
          _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/trips/current');
        }

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_SUCCESS"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_ERROR"],
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

/***/ "./src/actions/booking/bookingProcess.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingProcess", function() { return bookingProcess; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");



function bookingProcess(listId, guests, startDate, endDate, preApprove, taxRate) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["BOOKING_PROCESS_START"],
      payload: {
        bookingLoading: true
      }
    });

    try {
      let query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          query UserListing($listId:String!) {
            UserListing (listId:$listId) {
              id
              userId
              title
              coverPhoto
              country
              city
              state
              personCapacity
              bookingType
              listPhotos{
                id
                name
              }
              user {
                id
                email
                profile{
                  profileId
                  displayName
                  firstName
                  picture
                }
              }
              settingsData {
                id
                settingsId
                listsettings {
                  id
                  itemName
                  settingsType {
                    typeName
                  }
                }
              }
              houseRules {
                houseRulesId
                listsettings{
                  itemName
                  isEnable
                  settingsType {
                    typeName
                  }
                }
              }
              listingData {
                checkInStart,
                checkInEnd,
                basePrice,
                cleaningPrice,
                currency,
                weeklyDiscount,
                monthlyDiscount,
                taxRate
                cancellation {
                  id
                  policyName
                }
              }
              listBlockedPrice {
                id
                listId
                isSpecialPrice
                blockedDates
              }
            }
        }
      `;
      const {
        data
      } = await client.query({
        query,
        variables: {
          listId
        }
      });

      if (data && data.UserListing) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["BOOKING_PROCESS_SUCCESS"],
          payload: {
            data: data.UserListing,
            bookDetails: {
              guests,
              startDate,
              endDate,
              preApprove // taxRate,

            },
            bookingLoading: false
          }
        });
        _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/book/' + listId);
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["BOOKING_PROCESS_ERROR"],
        payload: {
          error,
          bookingLoading: false
        }
      });
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/actions/message/sendMessageAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageAction", function() { return sendMessageAction; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _Reservation_updateReservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/actions/Reservation/updateReservation.js");



const ThreadItemsQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query getThread($threadType: String, $threadId: Int){
  getThread(threadType: $threadType, threadId: $threadId) {
    id
    listId
    guest
    host
    listData {
      title
      city
      state
      country
      listingData {
        basePrice
        cleaningPrice
        currency
        monthlyDiscount
        weeklyDiscount
      }
    }
    threadItemForType {
      id
      threadId
      reservationId
      content
      sentBy
      type
      startDate
      endDate
      personCapacity
      createdAt
      cancelData {
        id
        reservationId
        cancellationPolicy
        guestServiceFee
        hostServiceFee
        refundToGuest
        payoutToHost
        total 
        currency
      }
      reservation {
        id
        listId
        hostId
        guestId
        checkIn
        checkOut
        basePrice
        cleaningPrice
        total
        currency
        guests
        confirmationCode
        guestServiceFee
        discount
        discountType
        createdAt
        updatedAt
        hostServiceFee
        bookingSpecialPricing {
          id
          reservationId
          blockedDates
          isSpecialPrice
        }
      }
    }
    threadItems {
      id
      threadId
      reservationId
      content
      sentBy
      type
      startDate
      endDate
      createdAt
    }
    threadItemsCount
    guestProfile {
      profileId
      displayName
      firstName
      location
      reviewsCount
      userVerification {
        id
        isEmailConfirmed
        isFacebookConnected
        isGoogleConnected
        isIdVerification
      }
    }
    guestUserData {
      email
      userBanStatus
    }
    hostProfile {
      profileId
      displayName
      firstName
      picture
      location
      reviewsCount
      userVerification {
        id
        isEmailConfirmed
        isFacebookConnected
        isGoogleConnected
        isIdVerification
      }
    }
    hostUserData {
      email
    }
    status
  }
}
`;
function sendMessageAction(threadId, threadType, content, type, startDate, endDate, personCapacity, reservationId, receiverName, senderName, receiverType, receiverEmail) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          mutation sendMessage(
          $threadId: Int!, 
          $content: String, 
          $type: String,
          $startDate: String,
          $endDate: String,
          $personCapacity: Int,
          $reservationId: Int
          ) {
            sendMessage(
            threadId: $threadId, 
            content: $content, 
            type: $type,
            startDate: $startDate,
            endDate: $endDate,
            personCapacity: $personCapacity,
            reservationId: $reservationId
            ){
              id
              sentBy
              content
              type
              reservationId
              startDate
              endDate
              personCapacity
              createdAt
              status
            }
          }
      `; // Send Message

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          threadId,
          content,
          type,
          startDate,
          endDate,
          personCapacity,
          reservationId
        },
        refetchQueries: [{
          query: ThreadItemsQuery,
          variables: {
            threadId,
            threadType
          }
        }]
      });

      if (data && data.sendMessage && data.sendMessage.status != 'userbanned') {
        if (reservationId != null && reservationId != undefined) {
          dispatch(Object(_Reservation_updateReservation__WEBPACK_IMPORTED_MODULE_2__["updateReservation"])(reservationId, type, threadType, threadId));
        }

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_SUCCESS"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_ERROR"],
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

/***/ "./src/components/CountDown/CountDown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DateBetween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/CountDown/DateBetween.js");
/* harmony import */ var _DateBetween__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateBetween__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/CountDown/CountDown.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CountDown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      remaining: null
    };
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    let startDate = new Date();
    let endDate = new Date(this.props.options.endDate);
    let remaining = _DateBetween__WEBPACK_IMPORTED_MODULE_2___default()(startDate, endDate);

    if (remaining === false) {
      window.clearInterval(this.interval);
      this.props.options['cb'] ? this.props.options.cb() : false;
    }

    this.setState({
      remaining: remaining ? remaining : null
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    }, " ", this.state.remaining);
  }

}

_defineProperty(CountDown, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

/* harmony default export */ __webpack_exports__["default"] = (CountDown);

/***/ }),

/***/ "./src/components/CountDown/DateBetween.js":
/***/ (function(module, exports) {

let DateBetween = function (startDate, endDate) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return false;
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor(distance % day / hour);
  let minutes = Math.floor(distance % hour / minute);
  let seconds = Math.floor(distance % minute / second);
  let between = []; //days > 0 ? between.push(`${days} : `) : false;

  hours > 0 ? between.push(`${hours} : `) : between.push(`00`);
  minutes > 0 ? between.push(`${minutes} : `) : between.push(`00`);
  seconds > 0 ? between.push(`${seconds}`) : between.push(`00`);
  return between.join(' ');
};

module.exports = DateBetween;

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

/***/ "./src/components/ViewMessage/ActionBlock/ActionBlock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GuestActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ViewMessage/ActionBlock/GuestActions.js");
/* harmony import */ var _HostActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/ViewMessage/ActionBlock/HostActions.js");
/* harmony import */ var _helpers_dateRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/helpers/dateRange.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ActionBlock/ActionBlock.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Component





class ActionBlock extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      threadType,
      actionType,
      threadId,
      listId,
      startDate,
      endDate,
      personCapacity,
      createdAt,
      country
    } = this.props;
    const {
      hostDisplayName,
      guestDisplayName,
      reservationId,
      guestEmail,
      title,
      listPublishStatus,
      reservationData
    } = this.props;
    let isCancelButtonShown = false;

    if (reservationData && reservationData.checkIn && reservationData.checkOut) {
      const {
        nights,
        interval
      } = Object(_helpers_dateRange__WEBPACK_IMPORTED_MODULE_6__["getDateRanges"])({
        checkIn: reservationData.checkIn,
        checkOut: reservationData.checkOut,
        country: country
      }); //Hide if the (current date) is equal or greater than the (one day before checkout date) 

      isCancelButtonShown = -interval < nights - 1;
    }

    if (actionType != null) {
      if (threadType === 'host') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HostActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
          actionType: actionType,
          threadId: threadId,
          reservationId: reservationId,
          threadType: threadType,
          startDate: startDate,
          endDate: endDate,
          personCapacity: personCapacity,
          createdAt: createdAt,
          guestDisplayName: guestDisplayName,
          hostDisplayName: hostDisplayName,
          guestEmail: guestEmail,
          title: title,
          listPublishStatus: listPublishStatus,
          isCancelButtonShown: isCancelButtonShown,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 16
          }
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuestActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
          actionType: actionType,
          threadId: threadId,
          listId: listId,
          startDate: startDate,
          endDate: endDate,
          personCapacity: personCapacity,
          reservationId: reservationId,
          hostDisplayName: hostDisplayName,
          createdAt: createdAt,
          listPublishStatus: listPublishStatus,
          isCancelButtonShown: isCancelButtonShown,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 16
          }
        });
      }
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 14
        }
      });
    }
  }

}

_defineProperty(ActionBlock, "propTypes", {
  threadType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  actionType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  personCapacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hostDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guestDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

_defineProperty(ActionBlock, "defaultProps", {
  actionType: null
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default.a)(ActionBlock));

/***/ }),

/***/ "./src/components/ViewMessage/ActionBlock/GuestActions.js":
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_booking_bookingProcess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/actions/booking/bookingProcess.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/CountDown/CountDown.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ActionBlock/GuestActions.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux







 // Locale

 // Component






class GuestActions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.preBook = this.preBook.bind(this);
  }

  async preBook() {
    const {
      bookingProcess,
      listId,
      startDate,
      endDate,
      personCapacity,
      listPublishStatus
    } = this.props;
    const preApprove = true;
    let query = `query checkReservation ($checkIn: String,$checkOut: String,$listId: Int ){
            checkReservation(checkIn: $checkIn, checkOut:$checkOut, listId:$listId ){
              id
              listId
              hostId
              guestId
              checkIn
              checkOut
              status
            }
          }`;
    const params = {
      listId: listId,
      checkIn: startDate,
      checkOut: endDate
    };
    const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_14__["default"])('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: params
      }),
      credentials: 'include'
    });
    const {
      data
    } = await resp.json();

    if (data && data.checkReservation) {
      if (data.checkReservation.status == "200") {
        if (listPublishStatus) {
          bookingProcess(listId, personCapacity, startDate, endDate, preApprove);
        } else {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_15__["toastr"].error("Sorry!", "The listing had unpublished or deleted by Host/Admin. Please try another.");
        }
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_15__["toastr"].error("Booking Failed", "The dates are not available!");
      }
    }
  } // Inquiry


  inquiry(hostDisplayName) {
    const {
      listId
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageAction1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    })), " ", hostDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageAction2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 97
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageActionInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
      to: "/rooms/" + listId,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.linkBtn, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].RequestToBook, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 92
      }
    })))));
  } // Request to book


  requestToBook(hostDisplayName) {
    const {
      reservationId
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageAction3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    })), " ", hostDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageAction4, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 97
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].cancelInfoBooking, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }))));
  } // Request to book/ Inquiry declined


  declined() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].requestDeclined, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].guestDeclinedInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 44
      }
    }))));
  } // Request to book / Pre-approved by host


  approved(hostDisplayName) {
    const {
      createdAt
    } = this.props;
    let startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    let next24Hours = moment__WEBPACK_IMPORTED_MODULE_2___default()(createdAt).add(23, 'hours').add(59, 'minutes');
    let distance = Number(next24Hours - startDate);
    let options = {
      endDate: next24Hours
    };

    if (distance < 0) {
      return this.expired();
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].requestApprovedAction1, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 33
        }
      })), " ", hostDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageAction4, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 109
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].requestTimeInfo1, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 25
        }
      })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 77
        }
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].requestTimeInfo2, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 109
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary,
        onClick: () => this.preBook(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].book, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      })))));
    }
  } // Booking confirmed by host/ instant booking


  bookingConfirmed(hostDisplayName) {
    const {
      reservationId,
      isCancelButtonShown
    } = this.props;
    if (!isCancelButtonShown) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 42
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].bookingConfirmedInfo1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    })), " ", hostDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].messageAction4, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 104
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].bookingCanceledInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
      to: "/cancel/" + reservationId + "/guest",
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.linkBtn, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].cancelReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    })))));
  } // Pre-approved or approved by host is expired


  expired() {
    const {
      listId
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].bookingExpiredTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].bookingExpiredInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
      to: "/rooms/" + listId,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.linkBtn, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].gotoListing, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    })))));
  } // Booking is cancelled by host


  cancelled() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].bookingRequestCancel1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].bookingRequestCancel2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }))));
  }

  completed() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].tripCompleted, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 29
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].tripCompleted, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }
    }))));
  }

  render() {
    const {
      actionType,
      hostDisplayName
    } = this.props;

    if (actionType === 'inquiry') {
      return this.inquiry(hostDisplayName);
    } else if (actionType === 'preApproved') {
      return this.approved(hostDisplayName);
    } else if (actionType === 'declined') {
      return this.declined();
    } else if (actionType === 'intantBooking' || actionType === 'approved') {
      return this.bookingConfirmed(hostDisplayName);
    } else if (actionType === 'requestToBook') {
      return this.requestToBook(hostDisplayName);
    } else if (actionType === 'expired') {
      return this.expired();
    } else if (actionType === 'cancelledByHost' || actionType === 'cancelledByGuest') {
      return this.cancelled();
    } else if (actionType === 'completed') {
      return this.completed();
    }
  }

}

_defineProperty(GuestActions, "propTypes", {
  actionType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  hostDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  personCapacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

const mapState = state => ({});

const mapDispatch = {
  bookingProcess: _actions_booking_bookingProcess__WEBPACK_IMPORTED_MODULE_10__["bookingProcess"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(GuestActions)));

/***/ }),

/***/ "./src/components/ViewMessage/ActionBlock/HostActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_message_sendMessageAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/actions/message/sendMessageAction.js");
/* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/CountDown/CountDown.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ActionBlock/HostActions.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux







 // Redux action

 // Component


 // Locale



class HostActions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  async sendMessage(type) {
    const {
      sendMessageAction,
      threadId,
      threadType,
      startDate,
      endDate,
      personCapacity,
      reservationId
    } = this.props;
    sendMessageAction(threadId, threadType, null, type, startDate, endDate, personCapacity, reservationId, null, null, null, null);
  } // Inquiry


  inquiry(guestDisplayName) {
    const {
      createdAt
    } = this.props;
    let startDate = moment__WEBPACK_IMPORTED_MODULE_3___default()();
    let next24Hours = moment__WEBPACK_IMPORTED_MODULE_3___default()(createdAt).add(23, 'hours').add(59, 'minutes');
    let distance = next24Hours - startDate;
    let options = {
      endDate: next24Hours
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostAction1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 14
      }
    })), " ", guestDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostAction2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 80
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostAction3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 32
      }
    })), " ", guestDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostAction4, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 98
      }
    }))), distance > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 22
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_10__["FaClockO"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textGray, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.timerIcon),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostResponseTime1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: options,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 60
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostResponseTime2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 92
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary,
      onClick: () => this.sendMessage('preApproved'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].preApprove, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    })))));
  } // Request to book


  requestToBook(guestDisplayName) {
    const {
      createdAt,
      listPublishStatus
    } = this.props;
    let startDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(); //let next24Hours = moment(createdAt).add(24, 'hours');

    let next24Hours = moment__WEBPACK_IMPORTED_MODULE_3___default()(createdAt).add(23, 'hours').add(59, 'minutes');
    let distance = next24Hours - startDate;
    let options = {
      endDate: next24Hours
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, guestDisplayName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].guestRequest, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 36
      }
    })))), distance > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 22
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostResponseTime1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }
    })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: options,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 60
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].hostResponseTime2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 92
      }
    }))), listPublishStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary),
      onClick: () => this.sendMessage('approved'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].approve, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 8
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimaryBorder, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnRight, 'requestBookBtn'),
      onClick: () => this.sendMessage('declined'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].decline, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 8
      }
    })))));
  } // Inquiry pre-approved


  approved() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].requestApproved, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].timeToExpire, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 6
      }
    }))));
  } // Request to book/ Inquiry declined


  declined() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].requestDeclined, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].declinedInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 6
      }
    }))));
  } // Booking confirmed by host/ instant booking


  bookingConfirmed() {
    const {
      reservationId,
      isCancelButtonShown
    } = this.props;
    if (!isCancelButtonShown) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 36
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].bookingIsConfirmed, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].contactGuest, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 6
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 12,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
      to: "/cancel/" + reservationId + "/host",
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.linkBtn, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].cancelReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }
    })))));
  } // Pre-approved or approved by host is expired


  expired(guestDisplayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].bookingIsExpired, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 5
      }
    }, guestDisplayName, "'s ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].bookingIsExpired1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 27
      }
    }))));
  } // Booking is cancelled by host


  cancelled(guestDisplayName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].bookingRequestCancel1, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 5
      }
    }, guestDisplayName, "'s ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].bookingRequestCancel3, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 27
      }
    }))));
  }

  completed() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.contextPadding),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].reservationIsCompleted, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].reservationIsCompletedDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 6
      }
    }))));
  }

  render() {
    const {
      actionType,
      guestDisplayName
    } = this.props;

    if (actionType === 'inquiry') {
      return this.inquiry(guestDisplayName);
    } else if (actionType === 'preApproved') {
      return this.approved();
    } else if (actionType === 'declined') {
      return this.declined();
    } else if (actionType === 'intantBooking' || actionType === 'approved') {
      return this.bookingConfirmed();
    } else if (actionType === 'requestToBook') {
      return this.requestToBook(guestDisplayName);
    } else if (actionType === 'expired') {
      return this.expired(guestDisplayName);
    } else if (actionType === 'cancelledByHost' || actionType === 'cancelledByGuest') {
      return this.cancelled(guestDisplayName);
    } else if (actionType === 'completed') {
      return this.completed();
    }
  }

}

_defineProperty(HostActions, "propTypes", {
  actionType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  sendMessageAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  threadType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  personCapacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  guestDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  hostDisplayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

const mapState = state => ({});

const mapDispatch = {
  sendMessageAction: _actions_message_sendMessageAction__WEBPACK_IMPORTED_MODULE_11__["sendMessageAction"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(HostActions)));

/***/ }),

/***/ "./src/components/ViewMessage/GetMoreThreadItemsQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMoreThreadItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllThreadItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"threadId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sentBy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"endDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isRead"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":254}};

module.exports = doc;

/***/ }),

/***/ "./src/components/ViewMessage/GetThreadQuery.graphql":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadType"}}},{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guest"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"host"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"state"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPublished"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listApprovalStatus"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listingData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"basePrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cleaningPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"monthlyDiscount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"weeklyDiscount"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadItemForType"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"threadId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sentBy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"endDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"personCapacity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cancelData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cancellationPolicy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"refundToGuest"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payoutToHost"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"reservation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"listId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkIn"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"basePrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"cleaningPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guests"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"confirmationCode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"discount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"discountType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostServiceFee"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"bookingSpecialPricing"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"blockedDates"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSpecialPrice"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"taxRate"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadItems"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"threadId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reservationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sentBy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"endDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"threadItemsCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"guestProfile"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userVerification"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isEmailConfirmed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isFacebookConnected"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isGoogleConnected"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isIdVerification"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"guestUserData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userBanStatus"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"hostProfile"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userVerification"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isEmailConfirmed"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isFacebookConnected"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isGoogleConnected"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isIdVerification"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hostUserData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userBanStatus"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":2122}};

module.exports = doc;

/***/ }),

/***/ "./src/components/ViewMessage/GuestHostDetails/GuestHostDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/helpers/capitalizeFirstLetter.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _public_SiteIcons_chat_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/SiteIcons/chat.png");
/* harmony import */ var _public_SiteIcons_chat_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_SiteIcons_chat_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_SiteImages_defaultPic_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/SiteImages/defaultPic.png");
/* harmony import */ var _public_SiteImages_defaultPic_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_SiteImages_defaultPic_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/GuestHostDetails/GuestHostDetails.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Helper


 // Component





class GuestHostDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      userType,
      threadId,
      getThread,
      account
    } = this.props;
    let guestImageData = getThread && getThread.guestProfile.picture;
    let guestFirstName = getThread && getThread.guestProfile.firstName;
    let guestProfileNumber = getThread && getThread.guestProfile.profileId;
    let hostImageData = getThread && getThread.hostProfile.picture;
    let hostFirstName = getThread && getThread.hostProfile.firstName;
    let hostProfileNumber = getThread && getThread.hostProfile.profileId;
    let hosName = userType == 'host' ? Object(_helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_6__["capitalizeFirstLetter"])(hostFirstName) : Object(_helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_6__["capitalizeFirstLetter"])(guestFirstName);
    let guestName = userType != 'host' ? Object(_helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_6__["capitalizeFirstLetter"])(hostFirstName) : Object(_helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_6__["capitalizeFirstLetter"])(guestFirstName);
    let hostImage = userType == 'host' ? hostImageData : guestImageData;
    let guestImage = userType != 'host' ? hostImageData : guestImageData;
    let hostProfileId = userType == 'host' ? hostProfileNumber : guestProfileNumber;
    let guestProfileId = userType != 'host' ? hostProfileNumber : guestProfileNumber;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.guestHost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.hostName, 'hostNameColor'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      to: '/users/show/' + guestProfileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, guestName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.hostChat,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      to: '/users/show/' + guestProfileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, guestImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
      src: '/images/avatar/medium_' + guestImage,
      responsive: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }), !guestImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
      src: _public_SiteImages_defaultPic_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      responsive: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 30
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.centerChatIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconBG,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
      src: _public_SiteIcons_chat_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      responsive: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.hostChat,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      to: '/users/show/' + hostProfileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, hostImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
      src: '/images/avatar/medium_' + hostImage,
      responsive: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 28
      }
    }), !hostImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Image"], {
      src: _public_SiteImages_defaultPic_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      responsive: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.hostName, 'hostNameColor'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      to: '/users/show/' + hostProfileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, hosName)));
  }

}

_defineProperty(GuestHostDetails, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reviewsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  verifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    isEmailConfirmed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    isFacebookConnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    isGoogleConnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a)(GuestHostDetails)));

/***/ }),

/***/ "./src/components/ViewMessage/SendMessage/SendMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ViewMessage/SendMessage/submit.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ViewMessage/SendMessage/validate.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/Avatar/Avatar.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/SendMessage/SendMessage.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Helpers


 // Component

 //Locale



class SendMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
      className,
      placeholder
    }) => {
      const {
        formatMessage
      } = this.props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        placeholder: placeholder,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.errorMessage, 'errorMessageFieldRTL'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });
  }

  render() {
    const {
      profileId,
      picture,
      displayName
    } = this.props;
    const {
      error,
      handleSubmit,
      submitting,
      dispatch
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    return (
      /*#__PURE__*/
      // <Row className={cx(s.space6)}>
      //   <Col xs={12} sm={12} md={9} lg={10}>
      //     <Panel className={cx(s.panelBubble, s.panelBubbleRight, "messageTextArea")}>
      //       <form onSubmit={handleSubmit(submit)}>
      //         <div className={s.textBody}>
      //           <Field
      //             name="content"
      //             className={s.textBox}
      //             component={this.renderFormControlTextArea}
      //             placeholder={formatMessage(messages.writeMessage)}
      //           />
      //         </div>
      //         <div className={cx(s.panelDark)}>
      //           <div className={s.bottomButton}>
      //             <Button className={bt.btnPrimary} type="submit" disabled={submitting || error}>
      //               <FormattedMessage {...messages.sendMessage} />
      //             </Button>
      //           </div>
      //         </div>
      //       </form>
      //     </Panel>
      //   </Col>
      //   <Col md={3} lg={2} className={cx('text-right')}>
      //     <div className={cx(s.profileAvatarSection, s.hideSm)}>
      //       <Avatar
      //         source={picture}
      //         height={70}
      //         width={70}
      //         title={displayName}
      //         className={s.profileAvatar}
      //         withLink
      //         linkClassName={s.profileAvatarLink}
      //         profileId={profileId}
      //       />
      //     </div>
      //   </Col>
      // </Row>
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space6),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTable,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableRow,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCell, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableWidth, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.radiusColor, 'sendMessageRadius'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.panelBubble, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.panelBubbleRight, "messageTextArea", 'ViewBubbleRight'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_9__["default"]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textBody,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "content",
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textBox,
        component: this.renderFormControlTextArea,
        placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].writeMessage),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.panelDark),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.bottomButton, 'textAlignLeftRtl'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnPrimary),
        type: "submit",
        disabled: submitting || error,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].sendMessage, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 27
        }
      })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCellTop, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableWidthTwo),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileAvatarSection, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.hideSm, 'profileAvatarRight'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        source: picture,
        height: 70,
        width: 70,
        title: displayName,
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileAvatar,
        withLink: true,
        linkClassName: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileAvatarLink,
        profileId: profileId,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 19
        }
      })))))))
    );
  }

}

_defineProperty(SendMessage, "propTypes", {
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

SendMessage = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'SendMessage',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_10__["default"]
})(SendMessage);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a)(SendMessage)));

/***/ }),

/***/ "./src/components/ViewMessage/SendMessage/submit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_message_sendMessageAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/actions/message/sendMessageAction.js");
// Redux Form
 // Redux action



async function submit(values, dispatch) {
  let threadId = values.threadId;
  let threadType = values.threadType;
  let type = values.type;
  let content = values.content;
  dispatch(Object(_actions_message_sendMessageAction__WEBPACK_IMPORTED_MODULE_1__["sendMessageAction"])(threadId, threadType, content, type, undefined, undefined, 0, undefined, values.receiverName, values.senderName, values.receiverType, values.receiverEmail));
  dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_0__["reset"])('SendMessage'));
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "./src/components/ViewMessage/SendMessage/validate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/locale/messages.js");


const validate = values => {
  const errors = {};

  if (!values.content) {
    errors.content = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.content && values.content.toString().trim() == '') {
    errors.content = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./src/components/ViewMessage/ThreadItems/FromMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Avatar/Avatar.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ThreadItems/FromMessage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Component



class FromMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      profileId,
      picture,
      displayName,
      content,
      createdAt
    } = this.props;
    let date = createdAt != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(createdAt).format('D MMM YYYY') : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.space6),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableCell, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableWidthTwo),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.profileAvatarSectionLeft, 'profileAvatarSectionLeftAr'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      source: picture,
      height: 70,
      width: 70,
      title: displayName,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.profileAvatar,
      withLink: true,
      linkClassName: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.profileAvatarLink,
      profileId: profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableCell, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableWidth, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.radiusColorTwo, 'radiusColorTwo'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelBubble, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelDark, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelBubbleLeft, 'viewMessageBubble'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, content && content.trim().split("\n").map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 27
        }
      }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 51
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.timeText, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, date))))))));
  }

}

_defineProperty(FromMessage, "propTypes", {
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

_defineProperty(FromMessage, "defaultProps", {
  createdAt: null
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a)(FromMessage));

/***/ }),

/***/ "./src/components/ViewMessage/ThreadItems/Status.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ThreadItems/Status.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Status extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  label(status) {
    switch (status) {
      case 'inquiry':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus1, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 24
          }
        }));

      case 'preApproved':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus2, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 24
          }
        }));

      case 'declined':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus3, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 24
          }
        }));

      case 'approved':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus4, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 24
          }
        }));

      case 'pending':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus5, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 24
          }
        }));

      case 'cancelledByHost':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus6, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 24
          }
        }));

      case 'cancelledByGuest':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus7, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 24
          }
        }));

      case 'intantBooking':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus8, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 24
          }
        }));

      case 'confirmed':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].bookingConfirmed, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 24
          }
        }));

      case 'expired':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus9, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 24
          }
        }));

      case 'requestToBook':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].messageStatus10, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 24
          }
        }));

      case 'completed':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_7__["default"].panelHeader2, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 24
          }
        }));
    }
  }

  render() {
    const {
      type,
      createdAt
    } = this.props;
    let date = createdAt != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(createdAt).format('MM/D/YYYY') : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a.inlineStatus, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a.space6),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a.horizontalText),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a.textWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, this.label(type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, " ", date))));
  }

}

_defineProperty(Status, "propTypes", {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

_defineProperty(Status, "defaultProps", {
  type: null,
  createdAt: null
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a)(Status));

/***/ }),

/***/ "./src/components/ViewMessage/ThreadItems/ThreadItems.js":
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
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ViewMessage/ThreadItems/Status.js");
/* harmony import */ var _ToMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ViewMessage/ThreadItems/ToMessage.js");
/* harmony import */ var _FromMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ViewMessage/ThreadItems/FromMessage.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ThreadItems/ThreadItems.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Components



 // Locale



class ThreadItems extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      data,
      data: {
        threadItems,
        threadItemsCount
      },
      userType,
      loadMore
    } = this.props;

    if (threadItems != null && threadItems.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, threadItems != null && threadItems.length > 0 && threadItems.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, item.type && item.type != 'message' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Status__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: item.type,
        createdAt: item.createdAt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 58
        }
      }), userType === 'guest' && item.sentBy === data.host && item.content != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FromMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        profileId: data.hostProfile.profileId,
        picture: data.hostProfile.picture,
        displayName: data.hostProfile.displayName,
        content: item.content,
        createdAt: item.createdAt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 96
        }
      }), userType === 'guest' && item.sentBy === data.guest && item.content != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        profileId: data.guestProfile.profileId,
        picture: data.guestProfile.picture,
        displayName: data.guestProfile.displayName,
        content: item.content,
        createdAt: item.createdAt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 97
        }
      }), userType === 'host' && item.sentBy === data.guest && item.content != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FromMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        profileId: data.guestProfile.profileId,
        picture: data.guestProfile.picture,
        displayName: data.guestProfile.displayName,
        content: item.content,
        createdAt: item.createdAt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 96
        }
      }), userType === 'host' && item.sentBy === data.host && item.content != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        profileId: data.hostProfile.profileId,
        picture: data.hostProfile.picture,
        displayName: data.hostProfile.displayName,
        content: item.content,
        createdAt: item.createdAt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 95
        }
      }))), data && threadItems && threadItems.length < threadItemsCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 77
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        href: "javascript:void(0)",
        onClick: () => loadMore(),
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a.btnRadius, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].loadMoreMsg, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 119
        }
      })))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].noItmesFound, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    })), " ");
  }

}

_defineProperty(ThreadItems, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    guestProfile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    hostProfile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    threadItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      sentBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })),
    threadItemsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })
});

_defineProperty(ThreadItems, "defaultProps", {
  data: {
    threadItems: [],
    threadItemsCount: 0
  }
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_5___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a)(ThreadItems));

/***/ }),

/***/ "./src/components/ViewMessage/ThreadItems/ToMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Avatar/Avatar.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ThreadItems/ToMessage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Component



class ToMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      profileId,
      picture,
      displayName,
      content,
      createdAt
    } = this.props;
    let date = createdAt != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(createdAt).format('D MMM YYYY') : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.space6),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableCell, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableWidth, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.radiusColor, 'sendMessageRadius'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelDark, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelBubble, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelText, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.panelBubbleRight, 'ViewBubbleRight'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, content && content.trim().split("\n").map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 27
        }
      }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 51
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.timeText, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 23
      }
    }, date)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableCell, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.displayTableWidthTwo),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.profileAvatarSection, 'profileAvatarRight'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      source: picture,
      height: 70,
      width: 70,
      title: displayName,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.profileAvatar,
      withLink: true,
      linkClassName: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a.profileAvatarLink,
      profileId: profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }))))))));
  }

}

_defineProperty(ToMessage, "propTypes", {
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

_defineProperty(ToMessage, "defaultProps", {
  createdAt: null
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_6___default.a)(ToMessage));

/***/ }),

/***/ "./src/components/ViewMessage/TripDetails/CancelDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/TripDetails/CancelDetails.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Redux





 // Component

 // Locale



class CancelDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      userType
    } = this.props;
    const {
      cancelData: {
        cancellationPolicy,
        guestServiceFee,
        refundToGuest,
        payoutToHost,
        currency
      }
    } = this.props;
    let earnedAmount = 0,
        missedEarnings = 0,
        refund = 0;
    earnedAmount = payoutToHost; // missedEarnings = refundToGuest - guestServiceFee;

    refund = refundToGuest;
    const {
      reservationData: {
        total,
        hostServiceFee
      }
    } = this.props;
    missedEarnings = total - hostServiceFee - earnedAmount; // if(cancellationPolicy == 'Flexiable') {
    // 	missedEarnings = refundToGuest;
    // 	earnedAmount = payoutToHost;
    // } else if(cancellationPolicy == 'Moderate') {
    // 	missedEarnings = refundToGuest - guestServiceFee;
    // 	earnedAmount = payoutToHost;
    // } else {
    // 	missedEarnings = refundToGuest;
    // 	earnedAmount = payoutToHost;
    // }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].payment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 12
      }
    })))), userType === 'host' && earnedAmount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textBold,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 7,
      sm: 7,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textLeft,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].earnedAmount, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 5,
      sm: 5,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_8__["default"], {
      amount: earnedAmount,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    })))), userType === 'host' && missedEarnings > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textBold, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 51
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 7,
      sm: 7,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textLeft,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].missedEarnings, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 5,
      sm: 5,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_8__["default"], {
      amount: missedEarnings,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    })))), userType === 'guest' && refund > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textBold, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 44
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 7,
      sm: 7,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textLeft,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].refundAmount, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 5,
      sm: 5,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_8__["default"], {
      amount: refund,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    })))));
  }

}

_defineProperty(CancelDetails, "propTypes", {
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    refundToGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    payoutToHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
});

const mapState = state => ({});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch)(CancelDetails)));

/***/ }),

/***/ "./src/components/ViewMessage/TripDetails/PaymentDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/helpers/currencyConvertion.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/TripDetails/PaymentDetails.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux






 // Component

 // Helper

 // Locale



class PaymentDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      startDate,
      endDate,
      basePrice,
      cleaningPrice,
      currency,
      monthlyDiscount,
      weeklyDiscount,
      userType
    } = this.props;
    const {
      serviceFees,
      base,
      rates
    } = this.props;
    const {
      reservationData
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;

    function LinkWithTooltip({
      id,
      children,
      href,
      tooltip
    }) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["OverlayTrigger"], {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.tooltip,
          id: id,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }
        }, tooltip),
        placement: "top",
        delayShow: 300,
        delayHide: 150,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 5
        }
      }, children);
    } //let guestServiceFee = 10;
    //let hostServiceFee = 20;


    let guestServiceFee = 0,
        hostServiceFee = 0;
    let currentDay,
        bookingSpecialPricing = [],
        isSpecialPriceAssigned = false;
    let isSpecialPricingAssinged = reservationData && reservationData.bookingSpecialPricing.length > 0 ? true : false;
    let isSpecialPrice,
        isDayTotal = 0,
        isCleaningPrice = 0,
        taxRateFee = 0;
    let isDiscount, isDiscountType;
    let momentStartDate,
        momentEndDate,
        dayDifference,
        priceForDays = 0,
        totalWithoutServiceFee = 0;
    let discount = 0,
        discountType,
        total = 0,
        hostEarnings = 0,
        isAverage = 0;

    if (startDate != null && endDate != null) {
      momentStartDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate);
      momentEndDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate);
      dayDifference = momentEndDate.diff(momentStartDate, 'days');

      if (dayDifference > 0) {
        if (isSpecialPricingAssinged) {
          reservationData && reservationData.bookingSpecialPricing && reservationData.bookingSpecialPricing.map((item, index) => {
            priceForDays = priceForDays + Number(item.isSpecialPrice);
          });
        } else {
          priceForDays = Number(basePrice) * Number(dayDifference);
        }
      }
    }

    isAverage = Number(priceForDays) / Number(dayDifference);
    isDayTotal = isAverage.toFixed(2) * dayDifference;
    priceForDays = isDayTotal;
    isDiscount = reservationData && reservationData.discount;
    isDiscountType = reservationData && reservationData.discountType;
    isCleaningPrice = reservationData && reservationData.cleaningPrice;
    taxRateFee = reservationData && reservationData.taxRate && reservationData.taxRate > 0 ? reservationData.taxRate : 0;

    if (dayDifference >= 7) {
      if (monthlyDiscount > 0 && dayDifference >= 28) {
        discount = isDiscount;
        discountType = isDiscountType;
      } else {
        if (weeklyDiscount > 0) {
          discount = isDiscount;
          discountType = isDiscountType;
        }
      }
    } // totalWithoutServiceFee = (priceForDays + isCleaningPrice + taxRateFee) - discount;


    totalWithoutServiceFee = priceForDays + isCleaningPrice - discount;

    if (serviceFees) {
      if (serviceFees.guest.type === 'percentage') {
        guestServiceFee = totalWithoutServiceFee * (Number(serviceFees.guest.value) / 100);
      } else {
        guestServiceFee = Object(_helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_11__["convert"])(base, rates, serviceFees.guest.value, serviceFees.guest.currency, currency);
      }

      if (serviceFees.host.type === 'percentage') {
        hostServiceFee = totalWithoutServiceFee * (Number(serviceFees.host.value) / 100);
      } else {
        hostServiceFee = Object(_helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_11__["convert"])(base, rates, serviceFees.host.value, serviceFees.host.currency, currency);
      }
    }

    if (userType === 'host') {
      total = priceForDays + isCleaningPrice - discount; // total = (priceForDays + isCleaningPrice + taxRateFee) - discount;
    } else {
      total = priceForDays + guestServiceFee + isCleaningPrice - discount; // total = (priceForDays + guestServiceFee + isCleaningPrice + taxRateFee) - discount;
    }

    hostEarnings = total - hostServiceFee;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].payment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 12
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textGray,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 7,
      sm: 7,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.displayFlex,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 8
      }
    }, isSpecialPricingAssinged && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkWithTooltip, {
      tooltip: "Average rate per night for your trip." // href="#"
      ,
      id: "tooltip-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 38
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.iconSection, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.toolTipColor),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_9__["FaQuestion"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.instantIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 12
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "directionLtr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"] //amount={basePrice}
    , {
      amount: isAverage,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 10
      }
    }, ' x', " ", dayDifference, " ", dayDifference > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].nights) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].night))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 5,
      sm: 5,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      amount: priceForDays,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 8
      }
    }))), isCleaningPrice > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textGray,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 7,
      sm: 7,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].cleaningPrice, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 5,
      sm: 5,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"] // amount={cleaningPrice}
    , {
      amount: isCleaningPrice,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }
    })))), discount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textGray,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 22
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 7,
      sm: 7,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 8
      }
    }, discountType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 5,
      sm: 5,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.discountText, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 8
      }
    }, "- ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      amount: discount,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }
    })))), userType === 'guest' && guestServiceFee > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textGray,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 53
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 7,
      sm: 7,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].serviceFee, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 5,
      sm: 5,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      amount: guestServiceFee,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }
    })))), userType === 'guest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.horizontalLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 30
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textBold, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      sm: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].subTotal, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      sm: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      amount: total,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 8
      }
    })))), userType === 'host' && hostServiceFee > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textGray,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 51
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      sm: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].serviceFee, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      sm: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 8
      }
    }, "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      amount: hostServiceFee,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 21
      }
    })))), userType === 'host' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.horizontalLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 29
      }
    }), userType === 'host' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textBold, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      sm: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textLeft, 'textAlignRightRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].youEarn, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 14
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      sm: 6,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.textRight, 'textAlignLeftRtl'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      amount: hostEarnings,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 9
      }
    })))));
  }

}

_defineProperty(PaymentDetails, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cleaningPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  monthlyDiscount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  weeklyDiscount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  serviceFees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    guest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }).isRequired,
    host: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }).isRequired
  }).isRequired,
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  rates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

_defineProperty(PaymentDetails, "defaultProps", {
  startDate: null,
  endDate: null,
  basePrice: 0,
  cleaningPrice: 0,
  monthlyDiscount: 0,
  weeklyDiscount: 0
});

const mapState = state => ({
  serviceFees: state.book.serviceFees,
  base: state.currency.base,
  rates: state.currency.rates
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(PaymentDetails))));

/***/ }),

/***/ "./src/components/ViewMessage/TripDetails/TripDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-icons/lib/fa");
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PaymentDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ViewMessage/TripDetails/PaymentDetails.js");
/* harmony import */ var _CancelDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ViewMessage/TripDetails/CancelDetails.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/TripDetails/TripDetails.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 //Component


 // Locale



class TripDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      startDate,
      endDate,
      personCapacity,
      listId,
      reservationData
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    const {
      basePrice,
      cleaningPrice,
      weeklyDiscount,
      monthlyDiscount,
      userType,
      currency,
      cancelData
    } = this.props;
    let checkIn = startDate != null ? moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('ddd, Do MMM') : '';
    let checkOut = startDate != null ? moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('ddd, Do MMM') : '';
    let isCancelled = false;

    if (cancelData) {
      isCancelled = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space4, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop6, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.sidebarContainer),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].tripDetails, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 10
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + listId,
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.horizondalLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 6
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop3, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 5,
      sm: 5,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPaddingRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textGray, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].checkIn, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.checkInDate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 8
      }
    }, checkIn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 1,
      sm: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__["FaChevronRight"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textGray, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.chevronIcon),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 8
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 5,
      sm: 5,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.pullRight, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textLeft, 'viewMessageCheckOutSection'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textGray, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].checkOut, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.checkInDate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 8
      }
    }, checkOut))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.horizondalLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 6
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.textGray, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].guests, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.space3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }
    }, personCapacity, " ", personCapacity > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].guestsCapcity) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].guestCapcity))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a.horizondalLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 6
      }
    }), !isCancelled && reservationData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaymentDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
      userType: userType,
      startDate: startDate,
      endDate: endDate,
      basePrice: basePrice,
      cleaningPrice: cleaningPrice,
      weeklyDiscount: weeklyDiscount,
      monthlyDiscount: monthlyDiscount,
      currency: currency,
      reservationData: reservationData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 42
      }
    }), isCancelled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CancelDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
      userType: userType,
      cancelData: cancelData,
      reservationData: reservationData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 22
      }
    })));
  }

}

_defineProperty(TripDetails, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  personCapacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cleaningPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  monthlyDiscount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  weeklyDiscount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    refundToGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    payoutToHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  reservationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

_defineProperty(TripDetails, "defaultProps", {
  title: '',
  startDate: null,
  endDate: null,
  personCapacity: 0,
  reservationData: null
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_7___default.a)(TripDetails)));

/***/ }),

/***/ "./src/components/ViewMessage/UserDetail/UserDetail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Avatar/Avatar.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/UserDetail/UserDetail.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Component


 // Locale



class UserDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      profileId,
      picture,
      displayName,
      location,
      verifications,
      reviewsCount
    } = this.props;
    const {
      formatMessage
    } = this.props.intl;
    let totalVerification = 0;

    if (verifications) {
      if (verifications.isEmailConfirmed) {
        totalVerification += 1;
      }

      if (verifications.isFacebookConnected) {
        totalVerification += 1;
      }

      if (verifications.isGoogleConnected) {
        totalVerification += 1;
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.sidebarContainer, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.textCenter),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileAvatarSection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      source: picture,
      height: 150,
      width: 150,
      title: displayName,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileAvatar,
      withLink: true,
      linkClassName: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileAvatarLink,
      profileId: profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaceTop3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
      to: "/users/show/" + profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 49
      }
    }, displayName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaceTop1, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileDetail),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 34
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, totalVerification, " ", totalVerification > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].verifications) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].verification)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, "\xA0.\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, reviewsCount, " ", reviewsCount > 1 ? formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].reviews) : formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_8__["default"].review))));
  }

}

_defineProperty(UserDetail, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reviewsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  verifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    isEmailConfirmed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    isFacebookConnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    isGoogleConnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  })
});

_defineProperty(UserDetail, "defaultProps", {
  picture: null,
  displayName: '',
  location: ''
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_4___default.a)(UserDetail)));

/***/ }),

/***/ "./src/components/ViewMessage/ViewMessage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/ViewMessage/ViewMessage.css");
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

/***/ "./src/components/ViewMessage/ViewMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UserDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ViewMessage/UserDetail/UserDetail.js");
/* harmony import */ var _TripDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ViewMessage/TripDetails/TripDetails.js");
/* harmony import */ var _ActionBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ViewMessage/ActionBlock/ActionBlock.js");
/* harmony import */ var _SendMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ViewMessage/SendMessage/SendMessage.js");
/* harmony import */ var _ThreadItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ViewMessage/ThreadItems/ThreadItems.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/Loader/Loader.js");
/* harmony import */ var _GuestHostDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/ViewMessage/GuestHostDetails/GuestHostDetails.js");
/* harmony import */ var _GetThreadQuery_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/components/ViewMessage/GetThreadQuery.graphql");
/* harmony import */ var _GetThreadQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_GetThreadQuery_graphql__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _GetMoreThreadItemsQuery_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/components/ViewMessage/GetMoreThreadItemsQuery.graphql");
/* harmony import */ var _GetMoreThreadItemsQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_GetMoreThreadItemsQuery_graphql__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/ViewMessage/ViewMessage.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux





 // Component







 // Graphql


 // Locale



class ViewMessage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    const {
      threadItemsData: {
        loading,
        getThread: {
          threadItems
        },
        fetchMore
      },
      threadId
    } = this.props;
    fetchMore({
      query: _GetMoreThreadItemsQuery_graphql__WEBPACK_IMPORTED_MODULE_17___default.a,
      variables: {
        threadId,
        offset: threadItems.length
      },
      updateQuery: (previousResult, {
        fetchMoreResult
      }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        return {
          getThread: { ...previousResult.getThread,
            threadItems: [...previousResult.getThread.threadItems, ...fetchMoreResult.getAllThreadItems]
          }
        };
      }
    });
  }

  render() {
    const {
      threadItemsData: {
        loading,
        getThread
      },
      userType,
      threadId,
      isAdminAuthenticated
    } = this.props;
    const {
      account
    } = this.props;

    if (loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
        type: 'text',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 14
        }
      });
    }

    if (getThread && getThread.threadItemForType && getThread.hostProfile && getThread.guestProfile) {
      let receiverName = getThread.guestProfile.firstName;
      let hostUserBanStatus = getThread.hostUserData.userBanStatus;
      let guestUserBanStatus = getThread.guestUserData.userBanStatus;
      let senderName = getThread.hostProfile.firstName;
      let receiverType = 'guest',
          isListAvailable = false;
      let receiverEmail = getThread.guestUserData.email;

      if (userType === "guest") {
        receiverName = getThread.hostProfile.firstName;
        senderName = getThread.guestProfile.firstName;
        receiverType = 'host';
        receiverEmail = getThread.hostUserData.email;
      }

      let listPublishStatus;
      const initialValues = {
        threadId,
        threadType: userType,
        type: 'message',
        receiverName,
        senderName,
        receiverType,
        receiverEmail
      };

      if (getThread && getThread.listData) {
        isListAvailable = true;
      }

      if (getThread && getThread.listData) {
        listPublishStatus = getThread.listData.isPublished;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 4,
        md: 4,
        sm: 5,
        xs: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.sidebarDesign, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4, 'hidden-xs'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
        profileId: userType === 'host' ? getThread.guestProfile.profileId : getThread.hostProfile.profileId,
        picture: userType === 'host' ? getThread.guestProfile.picture : getThread.hostProfile.picture,
        displayName: userType === 'host' ? getThread.guestProfile.displayName : getThread.hostProfile.displayName,
        location: userType === 'host' ? getThread.guestProfile.location : getThread.hostProfile.location,
        reviewsCount: userType === 'host' ? getThread.guestProfile.reviewsCount : getThread.hostProfile.reviewsCount,
        verifications: userType === 'host' ? getThread.guestProfile.userVerification : getThread.hostProfile.userVerification,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }
      }), isListAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TripDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
        listId: getThread.listId,
        userType: userType,
        title: getThread.listData.title,
        basePrice: getThread.listData.listingData.basePrice,
        cleaningPrice: getThread.listData.listingData.cleaningPrice,
        monthlyDiscount: getThread.listData.listingData.monthlyDiscount,
        weeklyDiscount: getThread.listData.listingData.weeklyDiscount,
        currency: getThread.listData.listingData.currency,
        startDate: getThread.threadItemForType.startDate,
        endDate: getThread.threadItemForType.endDate,
        personCapacity: getThread.threadItemForType.personCapacity,
        cancelData: getThread.threadItemForType.cancelData,
        reservationData: getThread.threadItemForType.reservation || undefined,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 36
        }
      }), !isListAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_18__["default"].noList, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 37
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 8,
        md: 8,
        sm: 7,
        xs: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.paddingRight, 'paddingRightAR'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }
      }, !isAdminAuthenticated && !guestUserBanStatus && !hostUserBanStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
        threadType: userType,
        actionType: getThread.threadItemForType.type,
        threadId: threadId,
        listId: getThread.listId,
        reservationId: getThread.threadItemForType.reservationId,
        startDate: getThread.threadItemForType.startDate,
        endDate: getThread.threadItemForType.endDate,
        personCapacity: getThread.threadItemForType.personCapacity,
        createdAt: getThread.threadItemForType.createdAt,
        hostDisplayName: getThread.hostProfile.displayName,
        guestDisplayName: getThread.guestProfile.displayName,
        guestEmail: getThread.guestUserData.email,
        title: getThread.listData.title,
        listPublishStatus: listPublishStatus,
        reservationData: getThread.threadItemForType.reservation || {},
        country: getThread.listData.country,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 87
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden-xs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuestHostDetails__WEBPACK_IMPORTED_MODULE_15__["default"], {
        userType: userType,
        threadId: threadId,
        getThread: getThread,
        account: account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      })), !isAdminAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SendMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        initialValues: initialValues,
        threadId: threadId,
        profileId: userType === 'host' ? getThread.hostProfile.profileId : getThread.guestProfile.profileId,
        picture: userType === 'host' ? getThread.hostProfile.picture : getThread.guestProfile.picture,
        displayName: userType === 'host' ? getThread.hostProfile.displayName : getThread.guestProfile.displayName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 42
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThreadItems__WEBPACK_IMPORTED_MODULE_13__["default"], {
        userType: userType,
        threadId: threadId,
        data: getThread,
        loadMore: this.loadMore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 4,
        md: 4,
        sm: 4,
        xs: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.sidebarDesign, _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4, 'visible-xs'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
        profileId: userType === 'host' ? getThread.guestProfile.profileId : getThread.hostProfile.profileId,
        picture: userType === 'host' ? getThread.guestProfile.picture : getThread.hostProfile.picture,
        displayName: userType === 'host' ? getThread.guestProfile.displayName : getThread.hostProfile.displayName,
        location: userType === 'host' ? getThread.guestProfile.location : getThread.hostProfile.location,
        reviewsCount: userType === 'host' ? getThread.guestProfile.reviewsCount : getThread.hostProfile.reviewsCount,
        verifications: userType === 'host' ? getThread.guestProfile.userVerification : getThread.hostProfile.userVerification,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }), isListAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TripDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
        listId: getThread.listId,
        userType: userType,
        title: getThread.listData.title,
        basePrice: getThread.listData.listingData.basePrice,
        cleaningPrice: getThread.listData.listingData.cleaningPrice,
        monthlyDiscount: getThread.listData.listingData.monthlyDiscount,
        weeklyDiscount: getThread.listData.listingData.weeklyDiscount,
        currency: getThread.listData.listingData.currency,
        startDate: getThread.threadItemForType.startDate,
        endDate: getThread.threadItemForType.endDate,
        personCapacity: getThread.threadItemForType.personCapacity,
        cancelData: getThread.threadItemForType.cancelData,
        reservationData: getThread.threadItemForType.reservation || undefined,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 36
        }
      }), !isListAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_18__["default"].noList, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 37
        }
      })))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      md: 7,
      mdPush: 5,
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_18__["default"].noThreadFound, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 13
      }
    })))));
  }

}

_defineProperty(ViewMessage, "propTypes", {
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  threadItemsData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    getThread: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      guestProfile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
        picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        firstyName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        reviewsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
        userVerification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
      }),
      guestUserData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        userBanStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
      }),
      hostProfile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
        picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        firstyName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        reviewsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
        userVerification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
      }),
      hostUserData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        userBanStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
      }),
      threadItemForType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
        startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        personCapacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
        createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        cancelData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
          guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          refundToGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          payoutToHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
        })
      }),
      listData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        listingData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
          basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          cleaningPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
          currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
        })
      })
    })
  })
});

_defineProperty(ViewMessage, "defaultProps", {
  threadId: null
});

const mapState = state => ({
  isAdminAuthenticated: state.runtime.isAdminAuthenticated,
  account: state.account.data
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_8___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_GetThreadQuery_graphql__WEBPACK_IMPORTED_MODULE_16___default.a, {
  name: 'threadItemsData',
  options: props => ({
    variables: {
      threadId: props.threadId,
      threadType: props.userType
    },
    ssr: false,
    //pollInterval: 5000,
    fetchPolicy: 'network-only'
  })
}))(ViewMessage));

/***/ }),

/***/ "./src/routes/viewMessage/ViewMessage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/routes/viewMessage/ViewMessage.css");
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

/***/ "./src/routes/viewMessage/ViewMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/viewMessage/ViewMessage.css");
/* harmony import */ var _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ViewMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ViewMessage/ViewMessage.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/viewMessage/ViewMessage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ViewMessageContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      threadId,
      userType
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default.a.bgColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ViewMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      threadId: threadId,
      userType: userType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }))));
  }

}

_defineProperty(ViewMessageContainer, "propTypes", {
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMessage_css__WEBPACK_IMPORTED_MODULE_3___default.a)(ViewMessageContainer));

/***/ }),

/***/ "./src/routes/viewMessage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/UserLayout.js");
/* harmony import */ var _ViewMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/viewMessage/ViewMessage.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _notFound_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/notFound/NotFound.js");
/* harmony import */ var _actions_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/actions/account.js");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/helpers/adminPrivileges.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/viewMessage/index.js";







const title = 'ViewMessage';
async function action({
  store,
  params
}) {
  await store.dispatch(Object(_actions_account__WEBPACK_IMPORTED_MODULE_5__["loadAccount"])()); // From Redux Store

  const isAuthenticated = store.getState().runtime.isAuthenticated;
  const isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
  const isAccount = store.getState().account.data;
  let adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;
  let userBanStatus;

  if (isAccount) {
    userBanStatus = isAccount.userBanStatus;
  } // From URL


  const threadId = Number(params.threadId);
  const userType = params.type;

  if (!isAdminAuthenticated && !isAuthenticated) {
    return {
      redirect: '/login'
    };
  } // Admin restriction


  if (isAdminAuthenticated && !Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_6__["restrictUrls"])('/message/', adminPrivileges)) {
    return {
      redirect: '/siteadmin'
    };
  }

  if (userType != 'host' && userType != 'guest' || userBanStatus) {
    return {
      title,
      component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notFound_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 26
        }
      })),
      status: 404
    };
  }

  return {
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ViewMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      threadId: threadId,
      userType: userType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 28
      }
    }))
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3ZpZXdNZXNzYWdlLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3ZpZXdNZXNzYWdlL1ZpZXdNZXNzYWdlLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9TaXRlSWNvbnMvY2hhdC5wbmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9SZXNlcnZhdGlvbi91cGRhdGVSZXNlcnZhdGlvbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2Jvb2tpbmcvYm9va2luZ1Byb2Nlc3MuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9tZXNzYWdlL3NlbmRNZXNzYWdlQWN0aW9uLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ291bnREb3duL0NvdW50RG93bi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0NvdW50RG93bi9EYXRlQmV0d2Vlbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5Q29udmVydGVyL0N1cnJlbmN5Q29udmVydGVyLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL0FjdGlvbkJsb2NrL0FjdGlvbkJsb2NrLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvQWN0aW9uQmxvY2svR3Vlc3RBY3Rpb25zLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvQWN0aW9uQmxvY2svSG9zdEFjdGlvbnMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9HZXRNb3JlVGhyZWFkSXRlbXNRdWVyeS5ncmFwaHFsIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvR2V0VGhyZWFkUXVlcnkuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL0d1ZXN0SG9zdERldGFpbHMvR3Vlc3RIb3N0RGV0YWlscy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1NlbmRNZXNzYWdlL1NlbmRNZXNzYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvU2VuZE1lc3NhZ2Uvc3VibWl0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvU2VuZE1lc3NhZ2UvdmFsaWRhdGUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9UaHJlYWRJdGVtcy9Gcm9tTWVzc2FnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1RocmVhZEl0ZW1zL1N0YXR1cy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1RocmVhZEl0ZW1zL1RocmVhZEl0ZW1zLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVGhyZWFkSXRlbXMvVG9NZXNzYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVHJpcERldGFpbHMvQ2FuY2VsRGV0YWlscy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1RyaXBEZXRhaWxzL1BheW1lbnREZXRhaWxzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVHJpcERldGFpbHMvVHJpcERldGFpbHMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9Vc2VyRGV0YWlsL1VzZXJEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVmlld01lc3NhZ2UuY3NzPzNiNjYiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3ZpZXdNZXNzYWdlL1ZpZXdNZXNzYWdlLmNzcz8zMmVjIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy92aWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvdmlld01lc3NhZ2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5WaWV3TWVzc2FnZS1lcnJvck1lc3NhZ2UtMXMwOE4ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZTEtMjBGc2kge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2UyLTJNdXh5IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZTMtMkJFbjQge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlNC1ZLVl6eiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2U1LWk3R0tFIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZTYtM2JLSjkge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlNy0yQ0kyMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3A4LWlGcllMIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZVRvcDEtMjI0cVoge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3AyLTJXNmtSIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZVRvcDMtMVNCRGcge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlVG9wNC0xOVZoaCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3A1LTJCczMtIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZVRvcDYtM3lEcWIge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlVG9wNy1jcm8tVyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3A4LWlGcllMIHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1ub01hcmdpbi1DVVMxciB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmcxLWctM0FhIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nMi0xR0lFWiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmczLTFvOU9yIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZzQtM3FOdkIge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nNS1uaVR4RSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmc2LTFHR0hrIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZzctMlMwMTIge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nVG9wMS0xU3B6SyB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZ1RvcDItMlduVUUge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nVG9wMy0zQV9PdiB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmdUb3A0LXhxd1ZZIHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZ1RvcDUtLVZtUjgge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nVG9wNi0xcHVBLSB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmdUb3A3LTJ5OE9lIHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utbm9QYWRkaW5nLTE4Q2NqIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRCb2xkLVY0LXFDIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Qm9sZGVyLWVjZkxOIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Tm9ybWFsLTFVeklrIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5WaWV3TWVzc2FnZS10ZXh0RGFya0JsdWUtMVRZbHQge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRMaWdodEJsdWUtM29XMHoge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0yOHFLeSB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dExpZ2h0QnJvd24tM0VfbUUge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0TWVkaXVtTWFyb29uLWVmRC1XIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0QnJvd24tMmFLMm0ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0TWFyb29uLTJQTUxSIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dERhcmtCcm93bi0zMFZMTyB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dE1lZGl1bUJyb3duLVppeENUIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dFNreUJsdWUtMUFjTVEge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEdyYXktMXRqZ00ge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDb21tb24gU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1idG5SYWRpdXMtM1oxMUkge1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLlZpZXdNZXNzYWdlLWxpbmtCdG4tM1dBR0oge1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRwYWRkaW5nOiA5cHggMjFweDtcXG59XFxuLlZpZXdNZXNzYWdlLW5vTWFyZ2luLUNVUzFyIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuLlZpZXdNZXNzYWdlLW5vQm9yZGVyLTFCZC12IHtcXG5cXHRib3JkZXI6IDBweCBub25lICFpbXBvcnRhbnQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQ29tbW9uIFN0eWxlcyBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipTaWRlbmF2aWdhdGlvbiBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLlZpZXdNZXNzYWdlLXNpZGViYXJEZXNpZ24tM3pkMXUge1xcblxcdHBhZGRpbmc6IDUwcHggMCAzMHB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbi5WaWV3TWVzc2FnZS1zaWRlYmFyQ29udGFpbmVyLTFZeWNQIHtcXG5cXHRwYWRkaW5nOiAwIDM1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Q2VudGVyLTM2Y0lUIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5WaWV3TWVzc2FnZS1wcm9maWxlQXZhdGFyU2VjdGlvbi1RSkQ2YyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhckxpbmstcTNIZTYge1xcblxcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdCAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZU5hbWUtM3VhWV8ge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG59XFxuLlZpZXdNZXNzYWdlLXByb2ZpbGVEZXRhaWwtMlRYamUge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRjb2xvcjogIzc2NzY3NjtcXG59XFxuLlZpZXdNZXNzYWdlLWhvcml6b250YWxMaW5lLTJ4NU9qIHtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCAjOWI5YjliO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEdyYXktMXRqZ00ge1xcblxcdGNvbG9yOiAjOWI5YjliO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEJvbGQtVjQtcUMge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dExlZnQtM2twMzQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0UmlnaHQtMUF1OUsge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlNpZGVuYXZpZ2F0aW9uIFN0eWxlcyBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipNZXNzYWdlIFN0eWxlcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uVmlld01lc3NhZ2UtY29udGV4dFBhZGRpbmctM01SSUgge1xcblxcdHBhZGRpbmctdG9wOiA4cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDE0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuLlZpZXdNZXNzYWdlLXJvd0NvbmRlbnNlZC0xbVkwSSB7XFxuXFx0bWFyZ2luLWxlZnQ6IC02cHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAtNnB4O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEJvZHktM2F5ZU0ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1ib3R0b21CdXR0b24tMzNUQmkge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Qm94LVotT0tjIHtcXG5cXHRoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5WaWV3TWVzc2FnZS1idG5SaWdodC0xNV9EWCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5WaWV3TWVzc2FnZS1wYW5lbERhcmstMVBxbGYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlY2YwZWM7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG4uVmlld01lc3NhZ2UtdGltZVRleHQtMk1yUE0ge1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcbn1cXG4uVmlld01lc3NhZ2UtdGltZVRleHQtMk1yUE06aG92ZXIsXFxuLlZpZXdNZXNzYWdlLXRpbWVUZXh0LTJNclBNOmZvY3VzIHtcXG5cXHRjb2xvcjogIzc2NzY3NjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDaGF0IGJ1YmJsZSBSaWdodCAmIExlZnQgU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1wYW5lbFF1b3RlLTE3ZElyIHtcXG5cXHRtYXJnaW4tbGVmdDogMDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhbmVsQnViYmxlLW5JTVdZIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5WaWV3TWVzc2FnZS1wYW5lbEJ1YmJsZUxlZnQtM1NJNlM6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdGJvdHRvbTogYXV0bztcXG5cXHRib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWxlZnQ6IDA7XFxuXFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xcblxcdHRvcDogMHB4O1xcblxcdGxlZnQ6IGluaXRpYWw7XFxuXFx0cmlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDI0cHggMjRweCAwO1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhbmVsQnViYmxlTGVmdC0zU0k2Uzo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdGxlZnQ6IC0yMHB4O1xcblxcdHJpZ2h0OiBhdXRvO1xcblxcdHRvcDogMHB4O1xcblxcdGJvdHRvbTogYXV0bztcXG5cXHRib3JkZXItd2lkdGg6IDAgMjJweCAyMnB4IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoUzo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAtMzNweDtcXG5cXHR0b3A6IDBweDtcXG5cXHRsZWZ0OiAxMDAlO1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItd2lkdGg6IDI1cHggMjVweCAwIDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoUzo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdGxlZnQ6IC0yMHB4O1xcblxcdHJpZ2h0OiBhdXRvO1xcblxcdHRvcDogMHB4O1xcblxcdGJvdHRvbTogYXV0bztcXG5cXHRib3JkZXItd2lkdGg6IDAgMjVweCAyNXB4IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZGNlMGUwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcmFkaXVzQ29sb3ItM2ptdkI6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IC00M3B4O1xcblxcdHRvcDogLTFweDtcXG5cXHRsZWZ0OiBhdXRvO1xcblxcdHdpZHRoOiA0M3B4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRiYWNrZ3JvdW5kOiAjRjdGQUZGO1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XFxuXFx0ei1pbmRleDogMztcXG59XFxuLlZpZXdNZXNzYWdlLXJhZGl1c0NvbG9yVHdvLTVoYXBlOjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IC0zN3B4O1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogYXV0bztcXG5cXHR3aWR0aDogMzhweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0YmFja2dyb3VuZDogI0Y3RkFGRjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xcblxcdHotaW5kZXg6IDM7XFxufVxcbi5WaWV3TWVzc2FnZS1wYW5lbFRleHQtM1RBMkMge1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkNoYXQgYnViYmxlIFJpZ2h0ICYgTGVmdCBTdHlsZXMgZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqTm90aWZpY2F0aW9uIE1lc3NhZ2UgU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1pbmxpbmVTdGF0dXMtMU45ZGwge1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5WaWV3TWVzc2FnZS1ob3Jpem9udGFsVGV4dC0zOEkxViB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0V3JhcHBlci0ySEN6cSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dFdyYXBwZXItMkhDenE6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRyaWdodDogMTAwJTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0V3JhcHBlci0ySEN6cTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogMTAwJTtcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipOb3RpZmljYXRpb24gTWVzc2FnZSBTdHlsZXMgZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1ob3Jpem9uZGFsTGluZS0zVDlNZCB7XFxuXFx0bWFyZ2luLXRvcDogMTVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRMZWZ0LTNrcDM0IHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dFJpZ2h0LTFBdTlLIHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRHcmF5LTF0amdNIHtcXG5cXHRjb2xvcjogIzliOWI5YjtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1jaGV2cm9uSWNvbi0ycEY5WCB7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4uVmlld01lc3NhZ2UtdGltZXJJY29uLTNWdW9zIHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4uVmlld01lc3NhZ2UtY2hlY2tJbkRhdGUtM1EtNDQge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG59XFxuLlZpZXdNZXNzYWdlLXB1bGxMZWZ0LTIwMVhFIHtcXG5cXHRmbG9hdDogbGVmdDtcXG59XFxuLlZpZXdNZXNzYWdlLXB1bGxSaWdodC0yVjJQMyB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4vKiogRGlzY291bnQgKiovXFxuLlZpZXdNZXNzYWdlLWRpc2NvdW50VGV4dC0yQTFXdSB7XFxuXFx0Y29sb3I6ICMzZmIzNGY7XFxufVxcbmEsXFxuYTpob3ZlcixcXG5hOmZvY3VzLFxcbmE6YWN0aXZlIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nUmlnaHQtMlFaWEIge1xcblxcdHBhZGRpbmc6IDAgMCAwIDM1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGUtMW5HSkwge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlUm93LTJ2YllLIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVDZWxsLTJJbTlhIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aC1SUlZkdSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhclNlY3Rpb24tUUpENmMge1xcblxcdG1hcmdpbjogMCAwIDAgNnB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG4uVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlQ2VsbFRvcC0xNEkwRyB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhclNlY3Rpb25MZWZ0LTJNZFdYIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNTtcXG5cXHRtYXJnaW46IDBweCA2cHggMCAwcHg7XFxufVxcbi5WaWV3TWVzc2FnZS1ndWVzdEhvc3QtMWpiMU8ge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweCAwO1xcbn1cXG4uVmlld01lc3NhZ2UtaG9zdENoYXQtM2t3U2wge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uVmlld01lc3NhZ2UtaG9zdENoYXQtM2t3U2wgaW1nIHtcXG5cXHR3aWR0aDogMTEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi5WaWV3TWVzc2FnZS1jZW50ZXJDaGF0SWNvbi0yMkFVYyB7XFxuXFx0aGVpZ2h0OiA0NXB4O1xcblxcdHdpZHRoOiA0NXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAtMjBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlZpZXdNZXNzYWdlLWljb25CRy0ydW44QiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuXFx0Ym9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0d2lkdGg6IDQ1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1pY29uQkctMnVuOEIgaW1nIHtcXG5cXHR3aWR0aDogNjUlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwYWRkaW5nOiA5cHggMCAwIDBcXG59XFxuLlZpZXdNZXNzYWdlLWhvc3ROYW1lLU84MUc3IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0ICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uVmlld01lc3NhZ2UtaW5zdGFudEljb24tMjhoZjIge1xcblxcdG1hcmdpbi10b3A6IC00cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1wb3NpdGlvblItMm1aTWEge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LlZpZXdNZXNzYWdlLW5vUGFkZGluZ1JpZ2h0LTNPOTZ4IHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtaG9zdENoYXQtM2t3U2wgaW1nIHtcXG5cXHRcXHR3aWR0aDogOTVweDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWljb25CRy0ydW44QiBpbWcge1xcblxcdFxcdHBhZGRpbmc6IDhweCAwIDAgMDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWljb25CRy0ydW44QiB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtY2VudGVyQ2hhdEljb24tMjJBVWMge1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHRcXHR3aWR0aDogNDBweDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWhvc3ROYW1lLU84MUc3IHtcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcdFxcdC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdFxcdCAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWhvc3ROYW1lQ29sb3ItMWgwZ3cge1xcblxcdFxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVmlld01lc3NhZ2UtcGFkZGluZ1JpZ2h0LTJRWlhCIHtcXG5cXHRcXHRwYWRkaW5nOiAwIDAgMCAwO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoUzo6YmVmb3JlIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcGFuZWxCdWJibGVMZWZ0LTNTSTZTOjpiZWZvcmUge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1wYW5lbEJ1YmJsZVJpZ2h0LTlGMmhTOjphZnRlciB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLXBhbmVsQnViYmxlTGVmdC0zU0k2Uzo6YWZ0ZXIge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1wcm9maWxlQXZhdGFyTGluay1xM0hlNiBpbWcge1xcblxcdFxcdHdpZHRoOiA2MHB4O1xcblxcdFxcdGhlaWdodDogNjBweDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLXByb2ZpbGVBdmF0YXJTZWN0aW9uLVFKRDZjIHtcXG5cXHRcXHRtYXJnaW46IDAgMCAwIDEzcHg7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aC1SUlZkdSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aFR3by0yN2FYYyB7XFxuXFx0XFx0d2lkdGg6IDIwJTtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLXByb2ZpbGVBdmF0YXJTZWN0aW9uTGVmdC0yTWRXWCB7XFxuXFx0XFx0bWFyZ2luOiAwIDEwcHggMCAwO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR6LWluZGV4OiA1O1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcmFkaXVzQ29sb3ItM2ptdkI6OmFmdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcmFkaXVzQ29sb3JUd28tNWhhcGU6OmFmdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlQ2VsbC0ySW05YSB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRcXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQuVmlld01lc3NhZ2UtaGlkZVNtLTFGTi1TIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG5cXHQuVmlld01lc3NhZ2Utc2lkZWJhckNvbnRhaW5lci0xWXljUCB7XFxuXFx0XFx0cGFkZGluZzogMCAyNXB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuXFx0LlZpZXdNZXNzYWdlLW5vUGFkZGluZ1JpZ2h0LTNPOTZ4IHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdH1cXG59XFxuLlZpZXdNZXNzYWdlLWRpc3BsYXlGbGV4LWtSSUpSIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVmlld01lc3NhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNELDJCQUEyQjtBQUMzQjtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Qsd0ZBQXdGO0FBQ3hGO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNELHNGQUFzRjtBQUN0RixnR0FBZ0c7QUFDaEc7Q0FDQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZjtBQUNEO0NBQ0Msb0NBQW9DO1NBQzVCLDRCQUE0QjtDQUNwQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Y7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Y7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsVUFBVTtDQUNWLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCO0FBQ0QsOEZBQThGO0FBQzlGLHlGQUF5RjtBQUN6RjtDQUNDLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsVUFBVTtDQUNWLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Q7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osY0FBYztDQUNkLHlCQUF5QjtTQUNqQixpQkFBaUI7Q0FDekI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLFVBQVU7Q0FDVjtBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7O0NBRUMsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2Q7QUFDRCwwR0FBMEc7QUFDMUc7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsVUFBVTtDQUNWLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1QsY0FBYztDQUNkLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsdURBQXVEO0NBQ3ZEO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsWUFBWTtDQUNaLFlBQVk7Q0FDWixTQUFTO0NBQ1QsYUFBYTtDQUNiLDRCQUE0QjtDQUM1Qix1REFBdUQ7Q0FDdkQ7QUFDRDtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixTQUFTO0NBQ1QsV0FBVztDQUNYLCtCQUErQjtDQUMvQix3QkFBd0I7Q0FDeEIsNEJBQTRCO0NBQzVCLDJDQUEyQztDQUMzQztBQUNEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsVUFBVTtDQUNWLFlBQVk7Q0FDWixZQUFZO0NBQ1osU0FBUztDQUNULGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsMERBQTBEO0NBQzFEO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3QixpQ0FBaUM7Q0FDakMsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixPQUFPO0NBQ1AsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLDhCQUE4QjtDQUM5QixnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakM7QUFDRCx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYixTQUFTO0NBQ1QsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCO0FBQ0Qsb0dBQW9HO0FBQ3BHO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixVQUFVO0NBQ1YsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCxnQkFBZ0I7QUFDaEI7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDs7OztDQUlDLHNCQUFzQjtDQUN0QjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWDtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1o7QUFDRDtDQUNDLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsMkJBQTJCO0lBQ3hCLHdCQUF3QjtDQUMzQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaO0NBQ0Q7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaO0NBQ0Q7RUFDQyxXQUFXO0VBQ1gsMkJBQTJCO0tBQ3hCLHdCQUF3QjtFQUMzQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQywwQkFBMEI7RUFDMUI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtFQUNDLFdBQVc7RUFDWDtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1g7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCO0NBQ0Q7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkXCIsXCJmaWxlXCI6XCJWaWV3TWVzc2FnZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLmVycm9yTWVzc2FnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkNvbW1vbiBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmJ0blJhZGl1cyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4ubGlua0J0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdHBhZGRpbmc6IDlweCAyMXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDb21tb24gU3R5bGVzIGVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlNpZGVuYXZpZ2F0aW9uIFN0eWxlcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uc2lkZWJhckRlc2lnbiB7XFxuXFx0cGFkZGluZzogNTBweCAwIDMwcHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuLnNpZGViYXJDb250YWluZXIge1xcblxcdHBhZGRpbmc6IDAgMzVweDtcXG59XFxuLnRleHRDZW50ZXIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByb2ZpbGVBdmF0YXJTZWN0aW9uIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcbi5wcm9maWxlQXZhdGFyTGluayB7XFxuXFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0ICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi5wcm9maWxlTmFtZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4ucHJvZmlsZURldGFpbCB7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcbn1cXG4uaG9yaXpvbnRhbExpbmUge1xcblxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICM5YjliOWI7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6ICM5YjliOWI7XFxufVxcbi50ZXh0Qm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50ZXh0TGVmdCB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnRleHRSaWdodCB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqU2lkZW5hdmlnYXRpb24gU3R5bGVzIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKk1lc3NhZ2UgU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jb250ZXh0UGFkZGluZyB7XFxuXFx0cGFkZGluZy10b3A6IDhweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTRweDtcXG5cXHRib3JkZXItcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG4ucm93Q29uZGVuc2VkIHtcXG5cXHRtYXJnaW4tbGVmdDogLTZweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IC02cHg7XFxufVxcbi50ZXh0Qm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmJvdHRvbUJ1dHRvbiB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuLnRleHRCb3gge1xcblxcdGhlaWdodDogODBweCAhaW1wb3J0YW50O1xcblxcdGJvcmRlcjogMHB4O1xcblxcdG1hcmdpbi10b3A6IDA7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcblxcdCAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmJ0blJpZ2h0IHtcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLnBhbmVsRGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZjBlYztcXG5cXHRtYXJnaW46IDA7XFxufVxcbi50aW1lVGV4dCB7XFxuXFx0Y29sb3I6ICM3Njc2NzY7XFxufVxcbi50aW1lVGV4dDpob3ZlcixcXG4udGltZVRleHQ6Zm9jdXMge1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkNoYXQgYnViYmxlIFJpZ2h0ICYgTGVmdCBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnBhbmVsUXVvdGUge1xcblxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdG1hcmdpbi1yaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4ucGFuZWxCdWJibGUge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnBhbmVsQnViYmxlTGVmdDo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnICc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0Ym90dG9tOiBhdXRvO1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItbGVmdDogMDtcXG5cXHRib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XFxuXFx0dG9wOiAwcHg7XFxuXFx0bGVmdDogaW5pdGlhbDtcXG5cXHRyaWdodDogMTAwJTtcXG5cXHRib3JkZXItd2lkdGg6IDAgMjRweCAyNHB4IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4ucGFuZWxCdWJibGVMZWZ0OjphZnRlciB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0bGVmdDogLTIwcHg7XFxuXFx0cmlnaHQ6IGF1dG87XFxuXFx0dG9wOiAwcHg7XFxuXFx0Ym90dG9tOiBhdXRvO1xcblxcdGJvcmRlci13aWR0aDogMCAyMnB4IDIycHggMDtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5wYW5lbEJ1YmJsZVJpZ2h0OjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IC0zM3B4O1xcblxcdHRvcDogMHB4O1xcblxcdGxlZnQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci13aWR0aDogMjVweCAyNXB4IDAgMDtcXG5cXHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5wYW5lbEJ1YmJsZVJpZ2h0OjphZnRlciB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0bGVmdDogLTIwcHg7XFxuXFx0cmlnaHQ6IGF1dG87XFxuXFx0dG9wOiAwcHg7XFxuXFx0Ym90dG9tOiBhdXRvO1xcblxcdGJvcmRlci13aWR0aDogMCAyNXB4IDI1cHggMDtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNkY2UwZTAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5yYWRpdXNDb2xvcjo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogLTQzcHg7XFxuXFx0dG9wOiAtMXB4O1xcblxcdGxlZnQ6IGF1dG87XFxuXFx0d2lkdGg6IDQzcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJhY2tncm91bmQ6ICNGN0ZBRkY7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcXG5cXHR6LWluZGV4OiAzO1xcbn1cXG4ucmFkaXVzQ29sb3JUd286OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogLTM3cHg7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiBhdXRvO1xcblxcdHdpZHRoOiAzOHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRiYWNrZ3JvdW5kOiAjRjdGQUZGO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XFxuXFx0ei1pbmRleDogMztcXG59XFxuLnBhbmVsVGV4dCB7XFxuXFx0d29yZC1icmVhazogYnJlYWstYWxsICFpbXBvcnRhbnQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQ2hhdCBidWJibGUgUmlnaHQgJiBMZWZ0IFN0eWxlcyBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipOb3RpZmljYXRpb24gTWVzc2FnZSBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmlubGluZVN0YXR1cyB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmhvcml6b250YWxUZXh0IHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHRXcmFwcGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZXh0V3JhcHBlcjo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdHRvcDogNTAlO1xcblxcdHJpZ2h0OiAxMDAlO1xcblxcdG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLnRleHRXcmFwcGVyOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiAxMDAlO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKk5vdGlmaWNhdGlvbiBNZXNzYWdlIFN0eWxlcyBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmhvcml6b25kYWxMaW5lIHtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGV4dExlZnQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi50ZXh0UmlnaHQge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiAjOWI5YjliO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNoZXZyb25JY29uIHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi50aW1lckljb24ge1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5jaGVja0luRGF0ZSB7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4ucHVsbExlZnQge1xcblxcdGZsb2F0OiBsZWZ0O1xcbn1cXG4ucHVsbFJpZ2h0IHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi8qKiBEaXNjb3VudCAqKi9cXG4uZGlzY291bnRUZXh0IHtcXG5cXHRjb2xvcjogIzNmYjM0ZjtcXG59XFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnBhZGRpbmdSaWdodCB7XFxuXFx0cGFkZGluZzogMCAwIDAgMzVweDtcXG59XFxuLmRpc3BsYXlUYWJsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5kaXNwbGF5VGFibGVSb3cge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLmRpc3BsYXlUYWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmRpc3BsYXlUYWJsZVdpZHRoIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9maWxlQXZhdGFyU2VjdGlvbiB7XFxuXFx0bWFyZ2luOiAwIDAgMCA2cHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDU7XFxufVxcbi5kaXNwbGF5VGFibGVDZWxsVG9wIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5wcm9maWxlQXZhdGFyU2VjdGlvbkxlZnQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA1O1xcblxcdG1hcmdpbjogMHB4IDZweCAwIDBweDtcXG59XFxuLmd1ZXN0SG9zdCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDI1cHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5ob3N0Q2hhdCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5ob3N0Q2hhdCBpbWcge1xcblxcdHdpZHRoOiAxMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuLmNlbnRlckNoYXRJY29uIHtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0d2lkdGg6IDQ1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xcblxcdG1hcmdpbi1yaWdodDogLTIwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uaWNvbkJHIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2NjYztcXG5cXHRib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGhlaWdodDogNDVweDtcXG5cXHR3aWR0aDogNDVweDtcXG59XFxuLmljb25CRyBpbWcge1xcblxcdHdpZHRoOiA2NSU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBhZGRpbmc6IDlweCAwIDAgMFxcbn1cXG4uaG9zdE5hbWUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0d2lkdGg6IDIwJTtcXG5cXHQtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHQgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5pbnN0YW50SWNvbiB7XFxuXFx0bWFyZ2luLXRvcDogLTRweDtcXG59XFxuLnBvc2l0aW9uUiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQubm9QYWRkaW5nUmlnaHQge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0fVxcblxcdC5ob3N0Q2hhdCBpbWcge1xcblxcdFxcdHdpZHRoOiA5NXB4O1xcblxcdH1cXG5cXHQuaWNvbkJHIGltZyB7XFxuXFx0XFx0cGFkZGluZzogOHB4IDAgMCAwO1xcblxcdH1cXG5cXHQuaWNvbkJHIHtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0XFx0d2lkdGg6IDQwcHg7XFxuXFx0fVxcblxcdC5jZW50ZXJDaGF0SWNvbiB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdH1cXG5cXHQuaG9zdE5hbWUge1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFx0XFx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0XFx0ICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdH1cXG5cXHQuaG9zdE5hbWVDb2xvciB7XFxuXFx0XFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWRkaW5nUmlnaHQge1xcblxcdFxcdHBhZGRpbmc6IDAgMCAwIDA7XFxuXFx0fVxcblxcdC5wYW5lbEJ1YmJsZVJpZ2h0OjpiZWZvcmUge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5wYW5lbEJ1YmJsZUxlZnQ6OmJlZm9yZSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0LnBhbmVsQnViYmxlUmlnaHQ6OmFmdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQucGFuZWxCdWJibGVMZWZ0OjphZnRlciB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0LnByb2ZpbGVBdmF0YXJMaW5rIGltZyB7XFxuXFx0XFx0d2lkdGg6IDYwcHg7XFxuXFx0XFx0aGVpZ2h0OiA2MHB4O1xcblxcdH1cXG5cXHQucHJvZmlsZUF2YXRhclNlY3Rpb24ge1xcblxcdFxcdG1hcmdpbjogMCAwIDAgMTNweDtcXG5cXHR9XFxuXFx0LmRpc3BsYXlUYWJsZVdpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0LmRpc3BsYXlUYWJsZVdpZHRoVHdvIHtcXG5cXHRcXHR3aWR0aDogMjAlO1xcblxcdH1cXG5cXHQucHJvZmlsZUF2YXRhclNlY3Rpb25MZWZ0IHtcXG5cXHRcXHRtYXJnaW46IDAgMTBweCAwIDA7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHotaW5kZXg6IDU7XFxuXFx0fVxcblxcdC5yYWRpdXNDb2xvcjo6YWZ0ZXIge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5yYWRpdXNDb2xvclR3bzo6YWZ0ZXIge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5kaXNwbGF5VGFibGVDZWxsIHtcXG5cXHRcXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdFxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC5oaWRlU20ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xcblxcdC5zaWRlYmFyQ29udGFpbmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwIDI1cHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcXG5cXHQubm9QYWRkaW5nUmlnaHQge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0fVxcbn1cXG4uZGlzcGxheUZsZXgge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJWaWV3TWVzc2FnZS1lcnJvck1lc3NhZ2UtMXMwOE5cIixcblx0XCJzcGFjZTFcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTEtMjBGc2lcIixcblx0XCJzcGFjZTJcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTItMk11eHlcIixcblx0XCJzcGFjZTNcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTMtMkJFbjRcIixcblx0XCJzcGFjZTRcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTQtWS1ZenpcIixcblx0XCJzcGFjZTVcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTUtaTdHS0VcIixcblx0XCJzcGFjZTZcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTYtM2JLSjlcIixcblx0XCJzcGFjZTdcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTctMkNJMjFcIixcblx0XCJzcGFjZVRvcDhcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDgtaUZyWUxcIixcblx0XCJzcGFjZVRvcDFcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDEtMjI0cVpcIixcblx0XCJzcGFjZVRvcDJcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDItMlc2a1JcIixcblx0XCJzcGFjZVRvcDNcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDMtMVNCRGdcIixcblx0XCJzcGFjZVRvcDRcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDQtMTlWaGhcIixcblx0XCJzcGFjZVRvcDVcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDUtMkJzMy1cIixcblx0XCJzcGFjZVRvcDZcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDYtM3lEcWJcIixcblx0XCJzcGFjZVRvcDdcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDctY3JvLVdcIixcblx0XCJub01hcmdpblwiOiBcIlZpZXdNZXNzYWdlLW5vTWFyZ2luLUNVUzFyXCIsXG5cdFwicGFkZGluZzFcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nMS1nLTNBYVwiLFxuXHRcInBhZGRpbmcyXCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZzItMUdJRVpcIixcblx0XCJwYWRkaW5nM1wiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmczLTFvOU9yXCIsXG5cdFwicGFkZGluZzRcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nNC0zcU52QlwiLFxuXHRcInBhZGRpbmc1XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZzUtbmlUeEVcIixcblx0XCJwYWRkaW5nNlwiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmc2LTFHR0hrXCIsXG5cdFwicGFkZGluZzdcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nNy0yUzAxMlwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1RvcDEtMVNwektcIixcblx0XCJwYWRkaW5nVG9wMlwiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmdUb3AyLTJXblVFXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nVG9wMy0zQV9PdlwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1RvcDQteHF3VllcIixcblx0XCJwYWRkaW5nVG9wNVwiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmdUb3A1LS1WbVI4XCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nVG9wNi0xcHVBLVwiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1RvcDctMnk4T2VcIixcblx0XCJub1BhZGRpbmdcIjogXCJWaWV3TWVzc2FnZS1ub1BhZGRpbmctMThDY2pcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIlZpZXdNZXNzYWdlLXRleHRCb2xkLVY0LXFDXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIlZpZXdNZXNzYWdlLXRleHRCb2xkZXItZWNmTE5cIixcblx0XCJ0ZXh0Tm9ybWFsXCI6IFwiVmlld01lc3NhZ2UtdGV4dE5vcm1hbC0xVXpJa1wiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIlZpZXdNZXNzYWdlLXRleHREYXJrQmx1ZS0xVFlsdFwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJWaWV3TWVzc2FnZS10ZXh0TGlnaHRCbHVlLTNvVzB6XCIsXG5cdFwidGV4dExpZ2h0U2FuZGxlR3JlZW5cIjogXCJWaWV3TWVzc2FnZS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0yOHFLeVwiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiVmlld01lc3NhZ2UtdGV4dExpZ2h0QnJvd24tM0VfbUVcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiVmlld01lc3NhZ2UtdGV4dE1lZGl1bU1hcm9vbi1lZkQtV1wiLFxuXHRcInRleHRCcm93blwiOiBcIlZpZXdNZXNzYWdlLXRleHRCcm93bi0yYUsybVwiLFxuXHRcInRleHRNYXJvb25cIjogXCJWaWV3TWVzc2FnZS10ZXh0TWFyb29uLTJQTUxSXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIlZpZXdNZXNzYWdlLXRleHREYXJrQnJvd24tMzBWTE9cIixcblx0XCJ0ZXh0TWVkaXVtQnJvd25cIjogXCJWaWV3TWVzc2FnZS10ZXh0TWVkaXVtQnJvd24tWml4Q1RcIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIlZpZXdNZXNzYWdlLXRleHRTa3lCbHVlLTFBY01RXCIsXG5cdFwidGV4dEdyYXlcIjogXCJWaWV3TWVzc2FnZS10ZXh0R3JheS0xdGpnTVwiLFxuXHRcImJ0blJhZGl1c1wiOiBcIlZpZXdNZXNzYWdlLWJ0blJhZGl1cy0zWjExSVwiLFxuXHRcImxpbmtCdG5cIjogXCJWaWV3TWVzc2FnZS1saW5rQnRuLTNXQUdKXCIsXG5cdFwibm9Cb3JkZXJcIjogXCJWaWV3TWVzc2FnZS1ub0JvcmRlci0xQmQtdlwiLFxuXHRcInNpZGViYXJEZXNpZ25cIjogXCJWaWV3TWVzc2FnZS1zaWRlYmFyRGVzaWduLTN6ZDF1XCIsXG5cdFwic2lkZWJhckNvbnRhaW5lclwiOiBcIlZpZXdNZXNzYWdlLXNpZGViYXJDb250YWluZXItMVl5Y1BcIixcblx0XCJ0ZXh0Q2VudGVyXCI6IFwiVmlld01lc3NhZ2UtdGV4dENlbnRlci0zNmNJVFwiLFxuXHRcInByb2ZpbGVBdmF0YXJTZWN0aW9uXCI6IFwiVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhclNlY3Rpb24tUUpENmNcIixcblx0XCJwcm9maWxlQXZhdGFyTGlua1wiOiBcIlZpZXdNZXNzYWdlLXByb2ZpbGVBdmF0YXJMaW5rLXEzSGU2XCIsXG5cdFwicHJvZmlsZU5hbWVcIjogXCJWaWV3TWVzc2FnZS1wcm9maWxlTmFtZS0zdWFZX1wiLFxuXHRcInByb2ZpbGVEZXRhaWxcIjogXCJWaWV3TWVzc2FnZS1wcm9maWxlRGV0YWlsLTJUWGplXCIsXG5cdFwiaG9yaXpvbnRhbExpbmVcIjogXCJWaWV3TWVzc2FnZS1ob3Jpem9udGFsTGluZS0yeDVPalwiLFxuXHRcInRleHRMZWZ0XCI6IFwiVmlld01lc3NhZ2UtdGV4dExlZnQtM2twMzRcIixcblx0XCJ0ZXh0UmlnaHRcIjogXCJWaWV3TWVzc2FnZS10ZXh0UmlnaHQtMUF1OUtcIixcblx0XCJjb250ZXh0UGFkZGluZ1wiOiBcIlZpZXdNZXNzYWdlLWNvbnRleHRQYWRkaW5nLTNNUklIXCIsXG5cdFwicm93Q29uZGVuc2VkXCI6IFwiVmlld01lc3NhZ2Utcm93Q29uZGVuc2VkLTFtWTBJXCIsXG5cdFwidGV4dEJvZHlcIjogXCJWaWV3TWVzc2FnZS10ZXh0Qm9keS0zYXllTVwiLFxuXHRcImJvdHRvbUJ1dHRvblwiOiBcIlZpZXdNZXNzYWdlLWJvdHRvbUJ1dHRvbi0zM1RCaVwiLFxuXHRcInRleHRCb3hcIjogXCJWaWV3TWVzc2FnZS10ZXh0Qm94LVotT0tjXCIsXG5cdFwiYnRuUmlnaHRcIjogXCJWaWV3TWVzc2FnZS1idG5SaWdodC0xNV9EWFwiLFxuXHRcInBhbmVsRGFya1wiOiBcIlZpZXdNZXNzYWdlLXBhbmVsRGFyay0xUHFsZlwiLFxuXHRcInRpbWVUZXh0XCI6IFwiVmlld01lc3NhZ2UtdGltZVRleHQtMk1yUE1cIixcblx0XCJwYW5lbFF1b3RlXCI6IFwiVmlld01lc3NhZ2UtcGFuZWxRdW90ZS0xN2RJclwiLFxuXHRcInBhbmVsQnViYmxlXCI6IFwiVmlld01lc3NhZ2UtcGFuZWxCdWJibGUtbklNV1lcIixcblx0XCJwYW5lbEJ1YmJsZUxlZnRcIjogXCJWaWV3TWVzc2FnZS1wYW5lbEJ1YmJsZUxlZnQtM1NJNlNcIixcblx0XCJwYW5lbEJ1YmJsZVJpZ2h0XCI6IFwiVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoU1wiLFxuXHRcInJhZGl1c0NvbG9yXCI6IFwiVmlld01lc3NhZ2UtcmFkaXVzQ29sb3ItM2ptdkJcIixcblx0XCJyYWRpdXNDb2xvclR3b1wiOiBcIlZpZXdNZXNzYWdlLXJhZGl1c0NvbG9yVHdvLTVoYXBlXCIsXG5cdFwicGFuZWxUZXh0XCI6IFwiVmlld01lc3NhZ2UtcGFuZWxUZXh0LTNUQTJDXCIsXG5cdFwiaW5saW5lU3RhdHVzXCI6IFwiVmlld01lc3NhZ2UtaW5saW5lU3RhdHVzLTFOOWRsXCIsXG5cdFwiaG9yaXpvbnRhbFRleHRcIjogXCJWaWV3TWVzc2FnZS1ob3Jpem9udGFsVGV4dC0zOEkxVlwiLFxuXHRcInRleHRXcmFwcGVyXCI6IFwiVmlld01lc3NhZ2UtdGV4dFdyYXBwZXItMkhDenFcIixcblx0XCJob3Jpem9uZGFsTGluZVwiOiBcIlZpZXdNZXNzYWdlLWhvcml6b25kYWxMaW5lLTNUOU1kXCIsXG5cdFwiY2hldnJvbkljb25cIjogXCJWaWV3TWVzc2FnZS1jaGV2cm9uSWNvbi0ycEY5WFwiLFxuXHRcInRpbWVySWNvblwiOiBcIlZpZXdNZXNzYWdlLXRpbWVySWNvbi0zVnVvc1wiLFxuXHRcImNoZWNrSW5EYXRlXCI6IFwiVmlld01lc3NhZ2UtY2hlY2tJbkRhdGUtM1EtNDRcIixcblx0XCJwdWxsTGVmdFwiOiBcIlZpZXdNZXNzYWdlLXB1bGxMZWZ0LTIwMVhFXCIsXG5cdFwicHVsbFJpZ2h0XCI6IFwiVmlld01lc3NhZ2UtcHVsbFJpZ2h0LTJWMlAzXCIsXG5cdFwiZGlzY291bnRUZXh0XCI6IFwiVmlld01lc3NhZ2UtZGlzY291bnRUZXh0LTJBMVd1XCIsXG5cdFwicGFkZGluZ1JpZ2h0XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1JpZ2h0LTJRWlhCXCIsXG5cdFwiZGlzcGxheVRhYmxlXCI6IFwiVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlLTFuR0pMXCIsXG5cdFwiZGlzcGxheVRhYmxlUm93XCI6IFwiVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlUm93LTJ2YllLXCIsXG5cdFwiZGlzcGxheVRhYmxlQ2VsbFwiOiBcIlZpZXdNZXNzYWdlLWRpc3BsYXlUYWJsZUNlbGwtMkltOWFcIixcblx0XCJkaXNwbGF5VGFibGVXaWR0aFwiOiBcIlZpZXdNZXNzYWdlLWRpc3BsYXlUYWJsZVdpZHRoLVJSVmR1XCIsXG5cdFwiZGlzcGxheVRhYmxlQ2VsbFRvcFwiOiBcIlZpZXdNZXNzYWdlLWRpc3BsYXlUYWJsZUNlbGxUb3AtMTRJMEdcIixcblx0XCJwcm9maWxlQXZhdGFyU2VjdGlvbkxlZnRcIjogXCJWaWV3TWVzc2FnZS1wcm9maWxlQXZhdGFyU2VjdGlvbkxlZnQtMk1kV1hcIixcblx0XCJndWVzdEhvc3RcIjogXCJWaWV3TWVzc2FnZS1ndWVzdEhvc3QtMWpiMU9cIixcblx0XCJob3N0Q2hhdFwiOiBcIlZpZXdNZXNzYWdlLWhvc3RDaGF0LTNrd1NsXCIsXG5cdFwiY2VudGVyQ2hhdEljb25cIjogXCJWaWV3TWVzc2FnZS1jZW50ZXJDaGF0SWNvbi0yMkFVY1wiLFxuXHRcImljb25CR1wiOiBcIlZpZXdNZXNzYWdlLWljb25CRy0ydW44QlwiLFxuXHRcImhvc3ROYW1lXCI6IFwiVmlld01lc3NhZ2UtaG9zdE5hbWUtTzgxRzdcIixcblx0XCJpbnN0YW50SWNvblwiOiBcIlZpZXdNZXNzYWdlLWluc3RhbnRJY29uLTI4aGYyXCIsXG5cdFwicG9zaXRpb25SXCI6IFwiVmlld01lc3NhZ2UtcG9zaXRpb25SLTJtWk1hXCIsXG5cdFwibm9QYWRkaW5nUmlnaHRcIjogXCJWaWV3TWVzc2FnZS1ub1BhZGRpbmdSaWdodC0zTzk2eFwiLFxuXHRcImhvc3ROYW1lQ29sb3JcIjogXCJWaWV3TWVzc2FnZS1ob3N0TmFtZUNvbG9yLTFoMGd3XCIsXG5cdFwiZGlzcGxheVRhYmxlV2lkdGhUd29cIjogXCJWaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aFR3by0yN2FYY1wiLFxuXHRcImhpZGVTbVwiOiBcIlZpZXdNZXNzYWdlLWhpZGVTbS0xRk4tU1wiLFxuXHRcImRpc3BsYXlGbGV4XCI6IFwiVmlld01lc3NhZ2UtZGlzcGxheUZsZXgta1JJSlJcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuIC5WaWV3TWVzc2FnZS1yb290LTI1NjNnIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuIC5WaWV3TWVzc2FnZS1jb250YWluZXItMUFfSFQge1xcblxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0cGFkZGluZy10b3A6IDMwcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDgwcHg7XFxuXFx0bWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcbiBhLFxcbmE6aG92ZXIge1xcblxcdGNvbG9yOiAjMDczNjg3O1xcbn1cXG4gLlZpZXdNZXNzYWdlLWJnQ29sb3ItMmN3ZzMge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6ICNGN0ZBRkY7XFxufVxcbiBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuVmlld01lc3NhZ2UtYmdDb2xvci0yY3dnMyB7XFxuXFx0XFx0cGFkZGluZzogMCAxMHB4O1xcblxcdH1cXG59XFxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5WaWV3TWVzc2FnZS1iZ0NvbG9yLTJjd2czIHtcXG5cXHRcXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0fVxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy92aWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7Q0FDQTtDQUNBLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEI7Q0FDQTtDQUNBLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLG9DQUFvQztDQUNwQztDQUNBOztDQUVBLGVBQWU7Q0FDZjtDQUNBO0NBQ0EsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQjtDQUNBO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRDtDQUNBO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRFwiLFwiZmlsZVwiOlwiVmlld01lc3NhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbiAucm9vdCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbiAuY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDBweCBhdXRvO1xcblxcdHBhZGRpbmctdG9wOiAzMHB4O1xcblxcdG1heC13aWR0aDogMTA4MHB4O1xcblxcdG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG4gYSxcXG5hOmhvdmVyIHtcXG5cXHRjb2xvcjogIzA3MzY4NztcXG59XFxuIC5iZ0NvbG9yIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjRjdGQUZGO1xcbn1cXG4gQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LmJnQ29sb3Ige1xcblxcdFxcdHBhZGRpbmc6IDAgMTBweDtcXG5cXHR9XFxufVxcbiBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYmdDb2xvciB7XFxuXFx0XFx0cGFkZGluZzogMCAxMHB4O1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJWaWV3TWVzc2FnZS1yb290LTI1NjNnXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVmlld01lc3NhZ2UtY29udGFpbmVyLTFBX0hUXCIsXG5cdFwiYmdDb2xvclwiOiBcIlZpZXdNZXNzYWdlLWJnQ29sb3ItMmN3ZzNcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvU2l0ZUljb25zL2NoYXQucG5nP2M4OTc3M2M3XCI7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2NvcmUvaGlzdG9yeSc7XG5cblxuaW1wb3J0IHtcbiAgVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX1NUQVJULFxuICBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfU1VDQ0VTUyxcbiAgVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldEFsbFJlc2VydmF0aW9uUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGdldEFsbFJlc2VydmF0aW9uICgkdXNlclR5cGU6IFN0cmluZyl7XG4gICAgZ2V0QWxsUmVzZXJ2YXRpb24odXNlclR5cGU6ICR1c2VyVHlwZSl7XG4gICAgICByZXNlcnZhdGlvbkRhdGEge1xuICAgICAgICBpZFxuICAgICAgICByZXNlcnZhdGlvblN0YXRlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb25JZCwgYWN0aW9uVHlwZSwgdXNlclR5cGUsIHRocmVhZElkKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiB1cGRhdGVSZXNlcnZhdGlvbihcbiAgICAgICAgICAgICRyZXNlcnZhdGlvbklkOiBJbnQhLCBcbiAgICAgICAgICAgICRhY3Rpb25UeXBlOiBTdHJpbmchLFxuICAgICAgICAgICAgJHRocmVhZElkOiBJbnRcbiAgICAgICAgICApe1xuICAgICAgICAgICAgICB1cGRhdGVSZXNlcnZhdGlvbihcbiAgICAgICAgICAgICAgICByZXNlcnZhdGlvbklkOiAkcmVzZXJ2YXRpb25JZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25UeXBlOiAkYWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICB0aHJlYWRJZDogJHRocmVhZElkXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgcmVzZXJ2YXRpb25JZCxcbiAgICAgICAgICBhY3Rpb25UeXBlLFxuICAgICAgICAgIHRocmVhZElkXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IGdldEFsbFJlc2VydmF0aW9uUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdXNlclR5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS51cGRhdGVSZXNlcnZhdGlvbiAmJiBkYXRhLnVwZGF0ZVJlc2VydmF0aW9uLnN0YXR1cyA9PT0gJzIwMCcpIHtcblxuICAgICAgICBpZih1c2VyVHlwZSA9PSAnaG9zdCcpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2goJy9yZXNlcnZhdGlvbi9jdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvdHJpcHMvY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9jb3JlL2hpc3RvcnknO1xuaW1wb3J0IHtcbiAgQk9PS0lOR19QUk9DRVNTX1NUQVJULFxuICBCT09LSU5HX1BST0NFU1NfU1VDQ0VTUyxcbiAgQk9PS0lOR19QUk9DRVNTX0VSUk9SLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYm9va2luZ1Byb2Nlc3MobGlzdElkLCBndWVzdHMsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcHJlQXBwcm92ZSwgdGF4UmF0ZSkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBCT09LSU5HX1BST0NFU1NfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGJvb2tpbmdMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgcXVlcnkgPSBncWxgXG4gICAgICAgICAgcXVlcnkgVXNlckxpc3RpbmcoJGxpc3RJZDpTdHJpbmchKSB7XG4gICAgICAgICAgICBVc2VyTGlzdGluZyAobGlzdElkOiRsaXN0SWQpIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgdXNlcklkXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGNvdmVyUGhvdG9cbiAgICAgICAgICAgICAgY291bnRyeVxuICAgICAgICAgICAgICBjaXR5XG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICAgIHBlcnNvbkNhcGFjaXR5XG4gICAgICAgICAgICAgIGJvb2tpbmdUeXBlXG4gICAgICAgICAgICAgIGxpc3RQaG90b3N7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdXNlciB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgIHByb2ZpbGV7XG4gICAgICAgICAgICAgICAgICBwcm9maWxlSWRcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgICAgICAgICAgIHBpY3R1cmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHNldHRpbmdzSWRcbiAgICAgICAgICAgICAgICBsaXN0c2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nc1R5cGUge1xuICAgICAgICAgICAgICAgICAgICB0eXBlTmFtZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBob3VzZVJ1bGVzIHtcbiAgICAgICAgICAgICAgICBob3VzZVJ1bGVzSWRcbiAgICAgICAgICAgICAgICBsaXN0c2V0dGluZ3N7XG4gICAgICAgICAgICAgICAgICBpdGVtTmFtZVxuICAgICAgICAgICAgICAgICAgaXNFbmFibGVcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzVHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpc3RpbmdEYXRhIHtcbiAgICAgICAgICAgICAgICBjaGVja0luU3RhcnQsXG4gICAgICAgICAgICAgICAgY2hlY2tJbkVuZCxcbiAgICAgICAgICAgICAgICBiYXNlUHJpY2UsXG4gICAgICAgICAgICAgICAgY2xlYW5pbmdQcmljZSxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgICAgICAgICB3ZWVrbHlEaXNjb3VudCxcbiAgICAgICAgICAgICAgICBtb250aGx5RGlzY291bnQsXG4gICAgICAgICAgICAgICAgdGF4UmF0ZVxuICAgICAgICAgICAgICAgIGNhbmNlbGxhdGlvbiB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaXN0QmxvY2tlZFByaWNlIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxpc3RJZFxuICAgICAgICAgICAgICAgIGlzU3BlY2lhbFByaWNlXG4gICAgICAgICAgICAgICAgYmxvY2tlZERhdGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbGlzdElkXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5Vc2VyTGlzdGluZykge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQk9PS0lOR19QUk9DRVNTX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgZGF0YTogZGF0YS5Vc2VyTGlzdGluZyxcbiAgICAgICAgICAgIGJvb2tEZXRhaWxzOiB7XG4gICAgICAgICAgICAgIGd1ZXN0cyxcbiAgICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgICAgICBwcmVBcHByb3ZlLFxuICAgICAgICAgICAgICAvLyB0YXhSYXRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvb2tpbmdMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2Jvb2svJyArIGxpc3RJZCk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBCT09LSU5HX1BST0NFU1NfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBib29raW5nTG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBTRU5EX01FU1NBR0VfU1RBUlQsXG4gIFNFTkRfTUVTU0FHRV9TVUNDRVNTLFxuICBTRU5EX01FU1NBR0VfRVJST1IsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uL1Jlc2VydmF0aW9uL3VwZGF0ZVJlc2VydmF0aW9uJztcblxuY29uc3QgVGhyZWFkSXRlbXNRdWVyeSA9IGdxbGBcbnF1ZXJ5IGdldFRocmVhZCgkdGhyZWFkVHlwZTogU3RyaW5nLCAkdGhyZWFkSWQ6IEludCl7XG4gIGdldFRocmVhZCh0aHJlYWRUeXBlOiAkdGhyZWFkVHlwZSwgdGhyZWFkSWQ6ICR0aHJlYWRJZCkge1xuICAgIGlkXG4gICAgbGlzdElkXG4gICAgZ3Vlc3RcbiAgICBob3N0XG4gICAgbGlzdERhdGEge1xuICAgICAgdGl0bGVcbiAgICAgIGNpdHlcbiAgICAgIHN0YXRlXG4gICAgICBjb3VudHJ5XG4gICAgICBsaXN0aW5nRGF0YSB7XG4gICAgICAgIGJhc2VQcmljZVxuICAgICAgICBjbGVhbmluZ1ByaWNlXG4gICAgICAgIGN1cnJlbmN5XG4gICAgICAgIG1vbnRobHlEaXNjb3VudFxuICAgICAgICB3ZWVrbHlEaXNjb3VudFxuICAgICAgfVxuICAgIH1cbiAgICB0aHJlYWRJdGVtRm9yVHlwZSB7XG4gICAgICBpZFxuICAgICAgdGhyZWFkSWRcbiAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgIGNvbnRlbnRcbiAgICAgIHNlbnRCeVxuICAgICAgdHlwZVxuICAgICAgc3RhcnREYXRlXG4gICAgICBlbmREYXRlXG4gICAgICBwZXJzb25DYXBhY2l0eVxuICAgICAgY3JlYXRlZEF0XG4gICAgICBjYW5jZWxEYXRhIHtcbiAgICAgICAgaWRcbiAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICBjYW5jZWxsYXRpb25Qb2xpY3lcbiAgICAgICAgZ3Vlc3RTZXJ2aWNlRmVlXG4gICAgICAgIGhvc3RTZXJ2aWNlRmVlXG4gICAgICAgIHJlZnVuZFRvR3Vlc3RcbiAgICAgICAgcGF5b3V0VG9Ib3N0XG4gICAgICAgIHRvdGFsIFxuICAgICAgICBjdXJyZW5jeVxuICAgICAgfVxuICAgICAgcmVzZXJ2YXRpb24ge1xuICAgICAgICBpZFxuICAgICAgICBsaXN0SWRcbiAgICAgICAgaG9zdElkXG4gICAgICAgIGd1ZXN0SWRcbiAgICAgICAgY2hlY2tJblxuICAgICAgICBjaGVja091dFxuICAgICAgICBiYXNlUHJpY2VcbiAgICAgICAgY2xlYW5pbmdQcmljZVxuICAgICAgICB0b3RhbFxuICAgICAgICBjdXJyZW5jeVxuICAgICAgICBndWVzdHNcbiAgICAgICAgY29uZmlybWF0aW9uQ29kZVxuICAgICAgICBndWVzdFNlcnZpY2VGZWVcbiAgICAgICAgZGlzY291bnRcbiAgICAgICAgZGlzY291bnRUeXBlXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgaG9zdFNlcnZpY2VGZWVcbiAgICAgICAgYm9va2luZ1NwZWNpYWxQcmljaW5nIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICAgICBibG9ja2VkRGF0ZXNcbiAgICAgICAgICBpc1NwZWNpYWxQcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocmVhZEl0ZW1zIHtcbiAgICAgIGlkXG4gICAgICB0aHJlYWRJZFxuICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgY29udGVudFxuICAgICAgc2VudEJ5XG4gICAgICB0eXBlXG4gICAgICBzdGFydERhdGVcbiAgICAgIGVuZERhdGVcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgICB0aHJlYWRJdGVtc0NvdW50XG4gICAgZ3Vlc3RQcm9maWxlIHtcbiAgICAgIHByb2ZpbGVJZFxuICAgICAgZGlzcGxheU5hbWVcbiAgICAgIGZpcnN0TmFtZVxuICAgICAgbG9jYXRpb25cbiAgICAgIHJldmlld3NDb3VudFxuICAgICAgdXNlclZlcmlmaWNhdGlvbiB7XG4gICAgICAgIGlkXG4gICAgICAgIGlzRW1haWxDb25maXJtZWRcbiAgICAgICAgaXNGYWNlYm9va0Nvbm5lY3RlZFxuICAgICAgICBpc0dvb2dsZUNvbm5lY3RlZFxuICAgICAgICBpc0lkVmVyaWZpY2F0aW9uXG4gICAgICB9XG4gICAgfVxuICAgIGd1ZXN0VXNlckRhdGEge1xuICAgICAgZW1haWxcbiAgICAgIHVzZXJCYW5TdGF0dXNcbiAgICB9XG4gICAgaG9zdFByb2ZpbGUge1xuICAgICAgcHJvZmlsZUlkXG4gICAgICBkaXNwbGF5TmFtZVxuICAgICAgZmlyc3ROYW1lXG4gICAgICBwaWN0dXJlXG4gICAgICBsb2NhdGlvblxuICAgICAgcmV2aWV3c0NvdW50XG4gICAgICB1c2VyVmVyaWZpY2F0aW9uIHtcbiAgICAgICAgaWRcbiAgICAgICAgaXNFbWFpbENvbmZpcm1lZFxuICAgICAgICBpc0ZhY2Vib29rQ29ubmVjdGVkXG4gICAgICAgIGlzR29vZ2xlQ29ubmVjdGVkXG4gICAgICAgIGlzSWRWZXJpZmljYXRpb25cbiAgICAgIH1cbiAgICB9XG4gICAgaG9zdFVzZXJEYXRhIHtcbiAgICAgIGVtYWlsXG4gICAgfVxuICAgIHN0YXR1c1xuICB9XG59XG5gO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlQWN0aW9uKFxuICB0aHJlYWRJZCxcbiAgdGhyZWFkVHlwZSxcbiAgY29udGVudCxcbiAgdHlwZSxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxuICBwZXJzb25DYXBhY2l0eSxcbiAgcmVzZXJ2YXRpb25JZCxcbiAgcmVjZWl2ZXJOYW1lLFxuICBzZW5kZXJOYW1lLFxuICByZWNlaXZlclR5cGUsXG4gIHJlY2VpdmVyRW1haWxcbikge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFTkRfTUVTU0FHRV9TVEFSVCxcbiAgICB9KTtcbiAgICB0cnkge1xuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgbXV0YXRpb24gc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgJHRocmVhZElkOiBJbnQhLCBcbiAgICAgICAgICAkY29udGVudDogU3RyaW5nLCBcbiAgICAgICAgICAkdHlwZTogU3RyaW5nLFxuICAgICAgICAgICRzdGFydERhdGU6IFN0cmluZyxcbiAgICAgICAgICAkZW5kRGF0ZTogU3RyaW5nLFxuICAgICAgICAgICRwZXJzb25DYXBhY2l0eTogSW50LFxuICAgICAgICAgICRyZXNlcnZhdGlvbklkOiBJbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgdGhyZWFkSWQ6ICR0aHJlYWRJZCwgXG4gICAgICAgICAgICBjb250ZW50OiAkY29udGVudCwgXG4gICAgICAgICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6ICRlbmREYXRlLFxuICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHk6ICRwZXJzb25DYXBhY2l0eSxcbiAgICAgICAgICAgIHJlc2VydmF0aW9uSWQ6ICRyZXNlcnZhdGlvbklkXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBzZW50QnlcbiAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICAgICAgICAgc3RhcnREYXRlXG4gICAgICAgICAgICAgIGVuZERhdGVcbiAgICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHlcbiAgICAgICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICAvLyBTZW5kIE1lc3NhZ2VcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgcGVyc29uQ2FwYWNpdHksXG4gICAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBUaHJlYWRJdGVtc1F1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICB0aHJlYWRUeXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnNlbmRNZXNzYWdlICYmIGRhdGEuc2VuZE1lc3NhZ2Uuc3RhdHVzICE9ICd1c2VyYmFubmVkJykge1xuICAgICAgICBpZiAocmVzZXJ2YXRpb25JZCAhPSBudWxsICYmIHJlc2VydmF0aW9uSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2godXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb25JZCwgdHlwZSwgdGhyZWFkVHlwZSwgdGhyZWFkSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogU0VORF9NRVNTQUdFX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFTkRfTUVTU0FHRV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEYXRlQmV0d2VlbiBmcm9tICcuL0RhdGVCZXR3ZWVuJztcblxuY2xhc3MgQ291bnREb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH07XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0geyByZW1haW5pbmc6IG51bGwgfVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy50aWNrKClcblx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cdH1cblxuXHR0aWNrKCkge1xuXHRcdGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZSgpXG5cdFx0bGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLm9wdGlvbnMuZW5kRGF0ZSlcblx0XHRsZXQgcmVtYWluaW5nID0gRGF0ZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKVxuXG5cdFx0aWYgKHJlbWFpbmluZyA9PT0gZmFsc2UpIHtcblx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cdFx0XHR0aGlzLnByb3BzLm9wdGlvbnNbJ2NiJ10gPyB0aGlzLnByb3BzLm9wdGlvbnMuY2IoKSA6IGZhbHNlXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyZW1haW5pbmc6IHJlbWFpbmluZyA/IHJlbWFpbmluZyA6IG51bGxcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+IHt0aGlzLnN0YXRlLnJlbWFpbmluZ308L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd247XG4iLCJsZXQgRGF0ZUJldHdlZW4gPSBmdW5jdGlvbiAoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGxldCBzZWNvbmQgPSAxMDAwO1xuICBsZXQgbWludXRlID0gc2Vjb25kICogNjA7XG4gIGxldCBob3VyID0gbWludXRlICogNjA7XG4gIGxldCBkYXkgPSBob3VyICogMjQ7XG4gIGxldCBkaXN0YW5jZSA9IGVuZERhdGUgLSBzdGFydERhdGU7XG5cbiAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIGRheSk7XG4gIGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgZGF5KSAvIGhvdXIpO1xuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgaG91cikgLyBtaW51dGUpO1xuICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgbWludXRlKSAvIHNlY29uZCk7XG5cblxuICBsZXQgYmV0d2VlbiA9IFtdO1xuXG4gIC8vZGF5cyA+IDAgPyBiZXR3ZWVuLnB1c2goYCR7ZGF5c30gOiBgKSA6IGZhbHNlO1xuICBob3VycyA+IDAgPyBiZXR3ZWVuLnB1c2goYCR7aG91cnN9IDogYCkgOiBiZXR3ZWVuLnB1c2goYDAwYCk7XG4gIG1pbnV0ZXMgPiAwID8gYmV0d2Vlbi5wdXNoKGAke21pbnV0ZXN9IDogYCkgOiBiZXR3ZWVuLnB1c2goYDAwYCk7XG4gIHNlY29uZHMgPiAwID8gYmV0d2Vlbi5wdXNoKGAke3NlY29uZHN9YCkgOiBiZXR3ZWVuLnB1c2goYDAwYCk7XG5cbiAgcmV0dXJuIGJldHdlZW4uam9pbignICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVCZXR3ZWVuOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IGluamVjdEludGwsIEZvcm1hdHRlZE51bWJlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBIZWxwZXJcbmltcG9ydCB7IGNvbnZlcnQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2N1cnJlbmN5Q29udmVydGlvbic7XG5pbXBvcnQgeyBpc1JUTCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0TG9jYWxlJztcbmNsYXNzIEN1cnJlbmN5Q29udmVydGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZyb206IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGJhc2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmF0ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3VwZXJTeW1ib2w6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0b0N1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYW1vdW50OiAwLFxuICAgIHN1cGVyU3ltYm9sOiBmYWxzZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBiYXNlOiBudWxsLFxuICAgICAgcmF0ZXM6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBiYXNlLCByYXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoYmFzZSAhPSB1bmRlZmluZWQgJiYgcmF0ZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFzZTogYmFzZSwgcmF0ZXM6IHJhdGVzIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBiYXNlLCByYXRlcyB9ID0gbmV4dFByb3BzO1xuICAgIGlmIChiYXNlICE9IHVuZGVmaW5lZCAmJiByYXRlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYXNlOiBiYXNlLCByYXRlczogcmF0ZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZnJvbSwgYW1vdW50LCBzdXBlclN5bWJvbCwgY2xhc3NOYW1lLCB0b0N1cnJlbmN5LCBsb2NhbGUsIGlzQ3VycmVuY3kgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBiYXNlLCByYXRlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCB0YXJnZXRDdXJyZW5jeTtcbiAgICBsZXQgY29udmVydGVkQW1vdW50ID0gYW1vdW50O1xuICAgIGxldCBmcm9tQ3VycmVuY3kgPSBmcm9tIHx8IGJhc2U7XG5cbiAgICBpZiAocmF0ZXMgIT0gbnVsbCkge1xuICAgICAgY29udmVydGVkQW1vdW50ID0gY29udmVydChiYXNlLCByYXRlcywgYW1vdW50LCBmcm9tQ3VycmVuY3ksIHRvQ3VycmVuY3kpO1xuICAgIH1cblxuICAgIGlmICh0b0N1cnJlbmN5KSB7XG4gICAgICB0YXJnZXRDdXJyZW5jeSA9IHRvQ3VycmVuY3k7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEN1cnJlbmN5ID0gYmFzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge1xuICAgICAgICAgIGlzUlRMKGxvY2FsZSkgP1xuICAgICAgICAgICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogdGFyZ2V0Q3VycmVuY3ksXG4gICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogY29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyLFxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGNvbnZlcnRlZEFtb3VudCAlIDEgPT09IDAgPyAwIDogMixcbiAgICAgICAgICAgICAgY3VycmVuY3lEaXNwbGF5OiBcInN5bWJvbFwiXG4gICAgICAgICAgICB9KS5mb3JtYXQoY29udmVydGVkQW1vdW50KVxuICAgICAgICAgICAgOiA8Rm9ybWF0dGVkTnVtYmVyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb252ZXJ0ZWRBbW91bnR9XG4gICAgICAgICAgICAgIHN0eWxlPVwiY3VycmVuY3lcIlxuICAgICAgICAgICAgICBjdXJyZW5jeT17dGFyZ2V0Q3VycmVuY3l9XG4gICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0cz17Y29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyfVxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM9e2NvbnZlcnRlZEFtb3VudCAlIDEgPT09IDAgPyAwIDogMn1cbiAgICAgICAgICAgICAgY3VycmVuY3lEaXNwbGF5PXtcInN5bWJvbFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgc3VwZXJTeW1ib2wgJiYgPHN1cD57dGFyZ2V0Q3VycmVuY3l9PC9zdXA+XG4gICAgICAgIH1cblxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgYmFzZTogc3RhdGUuY3VycmVuY3kuYmFzZSxcbiAgdG9DdXJyZW5jeTogc3RhdGUuY3VycmVuY3kudG8sXG4gIHJhdGVzOiBzdGF0ZS5jdXJyZW5jeS5yYXRlcyxcbiAgbG9jYWxlOiBzdGF0ZS5pbnRsLmxvY2FsZVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEN1cnJlbmN5Q29udmVydGVyKSk7XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzXCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9MYXlvdXQuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IENvb2tpZXNEaXNjbGFpbWVyIGZyb20gXCIuLi9Db29raWVzRGlzY2xhaW1lclwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wYWRkaW5nVG9wfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q29va2llc0Rpc2NsYWltZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShMYXlvdXQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEd1ZXN0QWN0aW9ucyBmcm9tICcuL0d1ZXN0QWN0aW9ucyc7XG5pbXBvcnQgSG9zdEFjdGlvbnMgZnJvbSAnLi9Ib3N0QWN0aW9ucyc7XG5pbXBvcnQgeyBnZXREYXRlUmFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9kYXRlUmFuZ2UnO1xuXG5jbGFzcyBBY3Rpb25CbG9jayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGhyZWFkVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFjdGlvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxpc3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBlcnNvbkNhcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaG9zdERpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ3Vlc3REaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhY3Rpb25UeXBlOiBudWxsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aHJlYWRUeXBlLCBhY3Rpb25UeXBlLCB0aHJlYWRJZCwgbGlzdElkLCBzdGFydERhdGUsIGVuZERhdGUsIHBlcnNvbkNhcGFjaXR5LCBjcmVhdGVkQXQsIGNvdW50cnkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBob3N0RGlzcGxheU5hbWUsIGd1ZXN0RGlzcGxheU5hbWUsIHJlc2VydmF0aW9uSWQsIGd1ZXN0RW1haWwsIHRpdGxlLCBsaXN0UHVibGlzaFN0YXR1cywgcmVzZXJ2YXRpb25EYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGlzQ2FuY2VsQnV0dG9uU2hvd24gPSBmYWxzZTtcbiAgICBpZiAocmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS5jaGVja0luICYmIHJlc2VydmF0aW9uRGF0YS5jaGVja091dCkge1xuICAgICAgY29uc3QgeyBuaWdodHMsIGludGVydmFsIH0gPSBnZXREYXRlUmFuZ2VzKHsgY2hlY2tJbjogcmVzZXJ2YXRpb25EYXRhLmNoZWNrSW4sIGNoZWNrT3V0OiByZXNlcnZhdGlvbkRhdGEuY2hlY2tPdXQsIGNvdW50cnk6IGNvdW50cnkgfSk7XG5cbiAgICAgIC8vSGlkZSBpZiB0aGUgKGN1cnJlbnQgZGF0ZSkgaXMgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIHRoZSAob25lIGRheSBiZWZvcmUgY2hlY2tvdXQgZGF0ZSkgXG4gICAgICBpc0NhbmNlbEJ1dHRvblNob3duID0gKC1pbnRlcnZhbCkgPCAobmlnaHRzIC0gMSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvblR5cGUgIT0gbnVsbCkge1xuICAgICAgaWYgKHRocmVhZFR5cGUgPT09ICdob3N0Jykge1xuICAgICAgICByZXR1cm4gPEhvc3RBY3Rpb25zXG4gICAgICAgICAgYWN0aW9uVHlwZT17YWN0aW9uVHlwZX1cbiAgICAgICAgICB0aHJlYWRJZD17dGhyZWFkSWR9XG4gICAgICAgICAgcmVzZXJ2YXRpb25JZD17cmVzZXJ2YXRpb25JZH1cbiAgICAgICAgICB0aHJlYWRUeXBlPXt0aHJlYWRUeXBlfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxuICAgICAgICAgIGVuZERhdGU9e2VuZERhdGV9XG4gICAgICAgICAgcGVyc29uQ2FwYWNpdHk9e3BlcnNvbkNhcGFjaXR5fVxuICAgICAgICAgIGNyZWF0ZWRBdD17Y3JlYXRlZEF0fVxuICAgICAgICAgIGd1ZXN0RGlzcGxheU5hbWU9e2d1ZXN0RGlzcGxheU5hbWV9XG4gICAgICAgICAgaG9zdERpc3BsYXlOYW1lPXtob3N0RGlzcGxheU5hbWV9XG4gICAgICAgICAgZ3Vlc3RFbWFpbD17Z3Vlc3RFbWFpbH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgbGlzdFB1Ymxpc2hTdGF0dXM9e2xpc3RQdWJsaXNoU3RhdHVzfVxuICAgICAgICAgIGlzQ2FuY2VsQnV0dG9uU2hvd249e2lzQ2FuY2VsQnV0dG9uU2hvd259XG4gICAgICAgIC8+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPEd1ZXN0QWN0aW9uc1xuICAgICAgICAgIGFjdGlvblR5cGU9e2FjdGlvblR5cGV9XG4gICAgICAgICAgdGhyZWFkSWQ9e3RocmVhZElkfVxuICAgICAgICAgIGxpc3RJZD17bGlzdElkfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxuICAgICAgICAgIGVuZERhdGU9e2VuZERhdGV9XG4gICAgICAgICAgcGVyc29uQ2FwYWNpdHk9e3BlcnNvbkNhcGFjaXR5fVxuICAgICAgICAgIHJlc2VydmF0aW9uSWQ9e3Jlc2VydmF0aW9uSWR9XG4gICAgICAgICAgaG9zdERpc3BsYXlOYW1lPXtob3N0RGlzcGxheU5hbWV9XG4gICAgICAgICAgY3JlYXRlZEF0PXtjcmVhdGVkQXR9XG4gICAgICAgICAgbGlzdFB1Ymxpc2hTdGF0dXM9e2xpc3RQdWJsaXNoU3RhdHVzfVxuICAgICAgICAgIGlzQ2FuY2VsQnV0dG9uU2hvd249e2lzQ2FuY2VsQnV0dG9uU2hvd259XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQWN0aW9uQmxvY2spO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENvbCxcbiAgICBQYW5lbCxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0IHsgYm9va2luZ1Byb2Nlc3MgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2Jvb2tpbmcvYm9va2luZ1Byb2Nlc3MnO1xuXG4vLyBMb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBDb3VudERvd24gZnJvbSAnLi4vLi4vQ291bnREb3duJztcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uLy4uL2NvcmUvZmV0Y2gnO1xuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcblxuY2xhc3MgR3Vlc3RBY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY3Rpb25UeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGhvc3REaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGVuZERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgcGVyc29uQ2FwYWNpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgbGlzdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5wcmVCb29rID0gdGhpcy5wcmVCb29rLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlQm9vaygpIHtcbiAgICAgICAgY29uc3QgeyBib29raW5nUHJvY2VzcywgbGlzdElkLCBzdGFydERhdGUsIGVuZERhdGUsIHBlcnNvbkNhcGFjaXR5LCBsaXN0UHVibGlzaFN0YXR1cyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcHJlQXBwcm92ZSA9IHRydWU7XG4gICAgICAgIGxldCBxdWVyeSA9IGBxdWVyeSBjaGVja1Jlc2VydmF0aW9uICgkY2hlY2tJbjogU3RyaW5nLCRjaGVja091dDogU3RyaW5nLCRsaXN0SWQ6IEludCApe1xuICAgICAgICAgICAgY2hlY2tSZXNlcnZhdGlvbihjaGVja0luOiAkY2hlY2tJbiwgY2hlY2tPdXQ6JGNoZWNrT3V0LCBsaXN0SWQ6JGxpc3RJZCApe1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBsaXN0SWRcbiAgICAgICAgICAgICAgaG9zdElkXG4gICAgICAgICAgICAgIGd1ZXN0SWRcbiAgICAgICAgICAgICAgY2hlY2tJblxuICAgICAgICAgICAgICBjaGVja091dFxuICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9YDtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBsaXN0SWQ6IGxpc3RJZCxcbiAgICAgICAgICAgIGNoZWNrSW46IHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGNoZWNrT3V0OiBlbmREYXRlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHBhcmFtcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5jaGVja1Jlc2VydmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5jaGVja1Jlc2VydmF0aW9uLnN0YXR1cyA9PSBcIjIwMFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RQdWJsaXNoU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdQcm9jZXNzKGxpc3RJZCwgcGVyc29uQ2FwYWNpdHksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcHJlQXBwcm92ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJTb3JyeSFcIiwgXCJUaGUgbGlzdGluZyBoYWQgdW5wdWJsaXNoZWQgb3IgZGVsZXRlZCBieSBIb3N0L0FkbWluLiBQbGVhc2UgdHJ5IGFub3RoZXIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkJvb2tpbmcgRmFpbGVkXCIsIFwiVGhlIGRhdGVzIGFyZSBub3QgYXZhaWxhYmxlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElucXVpcnlcbiAgICBpbnF1aXJ5KGhvc3REaXNwbGF5TmFtZSkge1xuICAgICAgICBjb25zdCB7IGxpc3RJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VBY3Rpb24xfSAvPiB7aG9zdERpc3BsYXlOYW1lfSA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUFjdGlvbjJ9IC8+PC9zdHJvbmc+PC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VBY3Rpb25JbmZvfSAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMiwgcy5ub1BhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL3Jvb21zL1wiICsgbGlzdElkfSBjbGFzc05hbWU9e2N4KHMubGlua0J0biwgYnQuYnRuUHJpbWFyeSl9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5SZXF1ZXN0VG9Cb29rfSAvPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmVxdWVzdCB0byBib29rXG4gICAgcmVxdWVzdFRvQm9vayhob3N0RGlzcGxheU5hbWUpIHtcbiAgICAgICAgY29uc3QgeyByZXNlcnZhdGlvbklkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUFjdGlvbjN9IC8+IHtob3N0RGlzcGxheU5hbWV9IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlQWN0aW9uNH0gLz48L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuICAgICAgICAgICAgICAgICAgICB7LyogPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNhbmNlbEluZm99IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2FuY2VsSW5mb0Jvb2tpbmd9IC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXF1ZXN0IHRvIGJvb2svIElucXVpcnkgZGVjbGluZWRcbiAgICBkZWNsaW5lZCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlcXVlc3REZWNsaW5lZH0gLz48L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ndWVzdERlY2xpbmVkSW5mb30gLz48L3A+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlcXVlc3QgdG8gYm9vayAvIFByZS1hcHByb3ZlZCBieSBob3N0XG4gICAgYXBwcm92ZWQoaG9zdERpc3BsYXlOYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgY3JlYXRlZEF0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc3RhcnREYXRlID0gbW9tZW50KCk7XG4gICAgICAgIGxldCBuZXh0MjRIb3VycyA9IG1vbWVudChjcmVhdGVkQXQpLmFkZCgyMywgJ2hvdXJzJykuYWRkKDU5LCAnbWludXRlcycpO1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBOdW1iZXIobmV4dDI0SG91cnMgLSBzdGFydERhdGUpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHsgZW5kRGF0ZTogbmV4dDI0SG91cnMgfTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVxdWVzdEFwcHJvdmVkQWN0aW9uMX0gLz4ge2hvc3REaXNwbGF5TmFtZX0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VBY3Rpb240fSAvPjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlcXVlc3RUaW1lSW5mbzF9IC8+IDxDb3VudERvd24gb3B0aW9ucz17b3B0aW9uc30gLz4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlcXVlc3RUaW1lSW5mbzJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZVRvcDIsIHMubm9QYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17YnQuYnRuUHJpbWFyeX0gb25DbGljaz17KCkgPT4gdGhpcy5wcmVCb29rKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29rfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQm9va2luZyBjb25maXJtZWQgYnkgaG9zdC8gaW5zdGFudCBib29raW5nXG4gICAgYm9va2luZ0NvbmZpcm1lZChob3N0RGlzcGxheU5hbWUpIHtcbiAgICAgICAgY29uc3QgeyByZXNlcnZhdGlvbklkLCBpc0NhbmNlbEJ1dHRvblNob3duIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWlzQ2FuY2VsQnV0dG9uU2hvd24pIHJldHVybiA8c3Bhbj48L3NwYW4+O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdDb25maXJtZWRJbmZvMX0gLz4ge2hvc3REaXNwbGF5TmFtZX0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VBY3Rpb240fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ0NhbmNlbGVkSW5mb30gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZVRvcDIsIHMubm9QYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9jYW5jZWwvXCIgKyByZXNlcnZhdGlvbklkICsgXCIvZ3Vlc3RcIn0gY2xhc3NOYW1lPXtjeChzLmxpbmtCdG4sIGJ0LmJ0blByaW1hcnkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxSZXNlcnZhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBQcmUtYXBwcm92ZWQgb3IgYXBwcm92ZWQgYnkgaG9zdCBpcyBleHBpcmVkXG4gICAgZXhwaXJlZCgpIHtcbiAgICAgICAgY29uc3QgeyBsaXN0SWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nRXhwaXJlZFRpdGxlfSAvPjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nRXhwaXJlZEluZm99IC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AyLCBzLm5vUGFkZGluZyl9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IGNsYXNzTmFtZT17Y3gocy5saW5rQnRuLCBidC5idG5QcmltYXJ5KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZ290b0xpc3Rpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQm9va2luZyBpcyBjYW5jZWxsZWQgYnkgaG9zdFxuICAgIGNhbmNlbGxlZCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdSZXF1ZXN0Q2FuY2VsMX0gLz48L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ1JlcXVlc3RDYW5jZWwyfSAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudHJpcENvbXBsZXRlZH0gLz48L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudHJpcENvbXBsZXRlZH0gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhY3Rpb25UeXBlLCBob3N0RGlzcGxheU5hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09ICdpbnF1aXJ5Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5xdWlyeShob3N0RGlzcGxheU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdwcmVBcHByb3ZlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcHJvdmVkKGhvc3REaXNwbGF5TmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2RlY2xpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjbGluZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnaW50YW50Qm9va2luZycgfHwgYWN0aW9uVHlwZSA9PT0gJ2FwcHJvdmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ0NvbmZpcm1lZChob3N0RGlzcGxheU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdyZXF1ZXN0VG9Cb29rJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFRvQm9vayhob3N0RGlzcGxheU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdleHBpcmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdjYW5jZWxsZWRCeUhvc3QnIHx8IGFjdGlvblR5cGUgPT09ICdjYW5jZWxsZWRCeUd1ZXN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsbGVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gICAgYm9va2luZ1Byb2Nlc3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoR3Vlc3RBY3Rpb25zKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbi8vIFJlZHV4XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQge1xuXHRCdXR0b24sXG5cdENvbCxcblx0UGFuZWxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgRm9udEF3ZXNvbWUgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhJztcblxuLy8gUmVkdXggYWN0aW9uXG5pbXBvcnQgeyBzZW5kTWVzc2FnZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZS9zZW5kTWVzc2FnZUFjdGlvbic7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IENvdW50RG93biBmcm9tICcuLi8uLi9Db3VudERvd24nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluayc7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIEhvc3RBY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRhY3Rpb25UeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c2VuZE1lc3NhZ2VBY3Rpb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcblx0XHR0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0dGhyZWFkVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHN0YXJ0RGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGVuZERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRwZXJzb25DYXBhY2l0eTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdGd1ZXN0RGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuXHRcdGhvc3REaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHR9O1xuXG5cdGFzeW5jIHNlbmRNZXNzYWdlKHR5cGUpIHtcblx0XHRjb25zdCB7IHNlbmRNZXNzYWdlQWN0aW9uLCB0aHJlYWRJZCwgdGhyZWFkVHlwZSwgc3RhcnREYXRlLCBlbmREYXRlLCBwZXJzb25DYXBhY2l0eSwgcmVzZXJ2YXRpb25JZCB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHNlbmRNZXNzYWdlQWN0aW9uKHRocmVhZElkLCB0aHJlYWRUeXBlLCBudWxsLCB0eXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHBlcnNvbkNhcGFjaXR5LCByZXNlcnZhdGlvbklkLCBudWxsLCBudWxsLCBudWxsLCBudWxsKTtcblx0fVxuXG5cdC8vIElucXVpcnlcblx0aW5xdWlyeShndWVzdERpc3BsYXlOYW1lKSB7XG5cdFx0Y29uc3QgeyBjcmVhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IHN0YXJ0RGF0ZSA9IG1vbWVudCgpO1xuXHRcdGxldCBuZXh0MjRIb3VycyA9IG1vbWVudChjcmVhdGVkQXQpLmFkZCgyMywgJ2hvdXJzJykuYWRkKDU5LCAnbWludXRlcycpO1xuXHRcdGxldCBkaXN0YW5jZSA9IG5leHQyNEhvdXJzIC0gc3RhcnREYXRlO1xuXHRcdGxldCBvcHRpb25zID0geyBlbmREYXRlOiBuZXh0MjRIb3VycyB9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuXHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuaG9zdEFjdGlvbjF9IC8+IHtndWVzdERpc3BsYXlOYW1lfSA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuaG9zdEFjdGlvbjJ9IC8+PC9zdHJvbmc+XG5cdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0QWN0aW9uM30gLz4ge2d1ZXN0RGlzcGxheU5hbWV9IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0QWN0aW9uNH0gLz48L3A+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkaXN0YW5jZSA+IDAgJiYgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWUuRmFDbG9ja08gY2xhc3NOYW1lPXtjeChzLnRleHRHcmF5LCBzLnRpbWVySWNvbil9IC8+XG5cdFx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuaG9zdFJlc3BvbnNlVGltZTF9IC8+IDxDb3VudERvd24gb3B0aW9ucz17b3B0aW9uc30gLz4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3RSZXNwb25zZVRpbWUyfSAvPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8Q29sIG1kPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMiwgcy5ub1BhZGRpbmcpfT5cblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT17YnQuYnRuUHJpbWFyeX0gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kTWVzc2FnZSgncHJlQXBwcm92ZWQnKX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucHJlQXBwcm92ZX0gLz5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR7LyogPEJ1dHRvbiBjbGFzc05hbWU9e2N4KGJ0LmJ0blByaW1hcnlCb3JkZXIsIHMuYnRuUmlnaHQpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRNZXNzYWdlKCdkZWNsaW5lZCcpfT5cblx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5kZWNsaW5lfSAvPlxuXHRcdFx0XHRcdDwvQnV0dG9uPiAqL31cblx0XHRcdFx0PC9Db2w+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHQvLyBSZXF1ZXN0IHRvIGJvb2tcblx0cmVxdWVzdFRvQm9vayhndWVzdERpc3BsYXlOYW1lKSB7XG5cdFx0Y29uc3QgeyBjcmVhdGVkQXQsIGxpc3RQdWJsaXNoU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBzdGFydERhdGUgPSBtb21lbnQoKTtcblx0XHQvL2xldCBuZXh0MjRIb3VycyA9IG1vbWVudChjcmVhdGVkQXQpLmFkZCgyNCwgJ2hvdXJzJyk7XG5cdFx0bGV0IG5leHQyNEhvdXJzID0gbW9tZW50KGNyZWF0ZWRBdCkuYWRkKDIzLCAnaG91cnMnKS5hZGQoNTksICdtaW51dGVzJyk7XG5cdFx0bGV0IGRpc3RhbmNlID0gbmV4dDI0SG91cnMgLSBzdGFydERhdGU7XG5cdFx0bGV0IG9wdGlvbnMgPSB7IGVuZERhdGU6IG5leHQyNEhvdXJzIH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cblx0XHRcdFx0PGg0PjxzdHJvbmc+e2d1ZXN0RGlzcGxheU5hbWV9IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ndWVzdFJlcXVlc3R9IC8+PC9zdHJvbmc+PC9oND5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpc3RhbmNlID4gMCAmJiA8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0UmVzcG9uc2VUaW1lMX0gLz4gPENvdW50RG93biBvcHRpb25zPXtvcHRpb25zfSAvPiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuaG9zdFJlc3BvbnNlVGltZTJ9IC8+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsaXN0UHVibGlzaFN0YXR1cyAmJiA8Q29sIG1kPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMiwgcy5ub1BhZGRpbmcpfT5cblx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5KX0gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kTWVzc2FnZSgnYXBwcm92ZWQnKX0+XG5cdFx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5hcHByb3ZlfSAvPlxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeUJvcmRlciwgcy5idG5SaWdodCwgJ3JlcXVlc3RCb29rQnRuJyl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZE1lc3NhZ2UoJ2RlY2xpbmVkJyl9PlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGVjbGluZX0gLz5cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHQvLyBJbnF1aXJ5IHByZS1hcHByb3ZlZFxuXHRhcHByb3ZlZCgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cblx0XHRcdFx0PGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlcXVlc3RBcHByb3ZlZH0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudGltZVRvRXhwaXJlfSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHQvLyBSZXF1ZXN0IHRvIGJvb2svIElucXVpcnkgZGVjbGluZWRcblx0ZGVjbGluZWQoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG5cdFx0XHRcdDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZXF1ZXN0RGVjbGluZWR9IC8+PC9zdHJvbmc+PC9oND5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG5cdFx0XHRcdFx0PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmRlY2xpbmVkSW5mb30gLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9QYW5lbD5cblx0XHQpO1xuXHR9XG5cblx0Ly8gQm9va2luZyBjb25maXJtZWQgYnkgaG9zdC8gaW5zdGFudCBib29raW5nXG5cdGJvb2tpbmdDb25maXJtZWQoKSB7XG5cdFx0Y29uc3QgeyByZXNlcnZhdGlvbklkLCBpc0NhbmNlbEJ1dHRvblNob3duIH0gPSB0aGlzLnByb3BzO1xuXHRcdGlmICghaXNDYW5jZWxCdXR0b25TaG93bikgcmV0dXJuIDxzcGFuPjwvc3Bhbj47XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG5cdFx0XHRcdDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nSXNDb25maXJtZWR9IC8+PC9zdHJvbmc+PC9oND5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG5cdFx0XHRcdFx0PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNvbnRhY3RHdWVzdH0gLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8Q29sIG1kPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMiwgcy5ub1BhZGRpbmcpfT5cblx0XHRcdFx0XHQ8TGluayB0bz17XCIvY2FuY2VsL1wiICsgcmVzZXJ2YXRpb25JZCArIFwiL2hvc3RcIn0gY2xhc3NOYW1lPXtjeChzLmxpbmtCdG4sIGJ0LmJ0blByaW1hcnkpfT5cblx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxSZXNlcnZhdGlvbn0gLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvQ29sPlxuXHRcdFx0PC9QYW5lbD5cblx0XHQpO1xuXHR9XG5cblx0Ly8gUHJlLWFwcHJvdmVkIG9yIGFwcHJvdmVkIGJ5IGhvc3QgaXMgZXhwaXJlZFxuXHRleHBpcmVkKGd1ZXN0RGlzcGxheU5hbWUpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cblx0XHRcdFx0PGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdJc0V4cGlyZWR9IC8+PC9zdHJvbmc+PC9oND5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG5cdFx0XHRcdFx0e2d1ZXN0RGlzcGxheU5hbWV9J3MgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdJc0V4cGlyZWQxfSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHQvLyBCb29raW5nIGlzIGNhbmNlbGxlZCBieSBob3N0XG5cdGNhbmNlbGxlZChndWVzdERpc3BsYXlOYW1lKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG5cdFx0XHRcdDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nUmVxdWVzdENhbmNlbDF9IC8+PC9zdHJvbmc+PC9oND5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG5cdFx0XHRcdFx0e2d1ZXN0RGlzcGxheU5hbWV9J3MgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdSZXF1ZXN0Q2FuY2VsM30gLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9QYW5lbD5cblx0XHQpO1xuXHR9XG5cblx0Y29tcGxldGVkKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuXHRcdFx0XHQ8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVzZXJ2YXRpb25Jc0NvbXBsZXRlZH0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVzZXJ2YXRpb25Jc0NvbXBsZXRlZERlc2NyaXB0aW9ufSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBhY3Rpb25UeXBlLCBndWVzdERpc3BsYXlOYW1lIH0gPSB0aGlzLnByb3BzO1xuXHRcdGlmIChhY3Rpb25UeXBlID09PSAnaW5xdWlyeScpIHtcblx0XHRcdHJldHVybiB0aGlzLmlucXVpcnkoZ3Vlc3REaXNwbGF5TmFtZSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAncHJlQXBwcm92ZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hcHByb3ZlZCgpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2RlY2xpbmVkJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGVjbGluZWQoKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdpbnRhbnRCb29raW5nJyB8fCBhY3Rpb25UeXBlID09PSAnYXBwcm92ZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ib29raW5nQ29uZmlybWVkKCk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAncmVxdWVzdFRvQm9vaycpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlcXVlc3RUb0Jvb2soZ3Vlc3REaXNwbGF5TmFtZSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnZXhwaXJlZCcpIHtcblx0XHRcdHJldHVybiB0aGlzLmV4cGlyZWQoZ3Vlc3REaXNwbGF5TmFtZSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnY2FuY2VsbGVkQnlIb3N0JyB8fCBhY3Rpb25UeXBlID09PSAnY2FuY2VsbGVkQnlHdWVzdCcpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhbmNlbGxlZChndWVzdERpc3BsYXlOYW1lKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdjb21wbGV0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wbGV0ZWQoKTtcblx0XHR9XG5cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcblx0c2VuZE1lc3NhZ2VBY3Rpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMsIGJ0KShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoSG9zdEFjdGlvbnMpKTsiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0TW9yZVRocmVhZEl0ZW1zXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwib2Zmc2V0XCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSW50XCJ9fX0se1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldEFsbFRocmVhZEl0ZW1zXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm9mZnNldFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwib2Zmc2V0XCJ9fX0se1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc2VydmF0aW9uSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29udGVudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzZW50QnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGFydERhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZW5kRGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzUmVhZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoyNTR9fTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7IiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdldFRocmVhZFwifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZFR5cGVcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0VGhyZWFkXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZFR5cGVcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZFR5cGVcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjaXR5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvdW50cnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNQdWJsaXNoZWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdEFwcHJvdmFsU3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxpc3RpbmdEYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYmFzZVByaWNlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNsZWFuaW5nUHJpY2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVuY3lcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibW9udGhseURpc2NvdW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIndlZWtseURpc2NvdW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZEl0ZW1Gb3JUeXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb250ZW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNlbnRCeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0eXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXJ0RGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbmREYXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBlcnNvbkNhcGFjaXR5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjYW5jZWxEYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjYW5jZWxsYXRpb25Qb2xpY3lcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlZnVuZFRvR3Vlc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGF5b3V0VG9Ib3N0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvdGFsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImN1cnJlbmN5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc2VydmF0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNoZWNrSW5cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2hlY2tPdXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYmFzZVByaWNlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNsZWFuaW5nUHJpY2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidG90YWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVuY3lcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbmZpcm1hdGlvbkNvZGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRpc2NvdW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRpc2NvdW50VHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlZEF0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RTZXJ2aWNlRmVlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImJvb2tpbmdTcGVjaWFsUHJpY2luZ1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc2VydmF0aW9uSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYmxvY2tlZERhdGVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzU3BlY2lhbFByaWNlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRheFJhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSXRlbXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXNlcnZhdGlvbklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2VudEJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhcnREYXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVuZERhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEF0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZEl0ZW1zQ291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RQcm9maWxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicHJvZmlsZUlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRpc3BsYXlOYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpcnN0TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwaWN0dXJlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImxvY2F0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJldmlld3NDb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyVmVyaWZpY2F0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNFbWFpbENvbmZpcm1lZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0ZhY2Vib29rQ29ubmVjdGVkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzR29vZ2xlQ29ubmVjdGVkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzSWRWZXJpZmljYXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RVc2VyRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJCYW5TdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFByb2ZpbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcm9maWxlSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGlzcGxheU5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlyc3ROYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBpY3R1cmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibG9jYXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmV2aWV3c0NvdW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJWZXJpZmljYXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0VtYWlsQ29uZmlybWVkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzRmFjZWJvb2tDb25uZWN0ZWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNHb29nbGVDb25uZWN0ZWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNJZFZlcmlmaWNhdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0VXNlckRhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbWFpbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyQmFuU3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoyMTIyfX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuLy8gSGVscGVyXG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NhcGl0YWxpemVGaXJzdExldHRlcic7XG5cbmltcG9ydCB7XG4gIEltYWdlLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnO1xuaW1wb3J0IGNoYXRJY29uIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9TaXRlSWNvbnMvY2hhdC5wbmcnO1xuaW1wb3J0IGRlZmF1bHRQaWMgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL1NpdGVJbWFnZXMvZGVmYXVsdFBpYy5wbmcnO1xuXG5jbGFzcyBHdWVzdEhvc3REZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZXZpZXdzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmVyaWZpY2F0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlzRW1haWxDb25maXJtZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaXNGYWNlYm9va0Nvbm5lY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpc0dvb2dsZUNvbm5lY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgfSksXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlclR5cGUsIHRocmVhZElkLCBnZXRUaHJlYWQsIGFjY291bnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZ3Vlc3RJbWFnZURhdGEgPSBnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5waWN0dXJlO1xuICAgIGxldCBndWVzdEZpcnN0TmFtZSA9IGdldFRocmVhZCAmJiBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLmZpcnN0TmFtZTtcbiAgICBsZXQgZ3Vlc3RQcm9maWxlTnVtYmVyID0gZ2V0VGhyZWFkICYmIGdldFRocmVhZC5ndWVzdFByb2ZpbGUucHJvZmlsZUlkO1xuICAgIGxldCBob3N0SW1hZ2VEYXRhID0gZ2V0VGhyZWFkICYmIGdldFRocmVhZC5ob3N0UHJvZmlsZS5waWN0dXJlO1xuICAgIGxldCBob3N0Rmlyc3ROYW1lID0gZ2V0VGhyZWFkICYmIGdldFRocmVhZC5ob3N0UHJvZmlsZS5maXJzdE5hbWU7XG4gICAgbGV0IGhvc3RQcm9maWxlTnVtYmVyID0gZ2V0VGhyZWFkICYmIGdldFRocmVhZC5ob3N0UHJvZmlsZS5wcm9maWxlSWQ7XG5cbiAgICBsZXQgaG9zTmFtZSA9IHVzZXJUeXBlID09ICdob3N0JyA/IGNhcGl0YWxpemVGaXJzdExldHRlcihob3N0Rmlyc3ROYW1lKSA6IGNhcGl0YWxpemVGaXJzdExldHRlcihndWVzdEZpcnN0TmFtZSk7XG4gICAgbGV0IGd1ZXN0TmFtZSA9IHVzZXJUeXBlICE9ICdob3N0JyA/IGNhcGl0YWxpemVGaXJzdExldHRlcihob3N0Rmlyc3ROYW1lKSA6IGNhcGl0YWxpemVGaXJzdExldHRlcihndWVzdEZpcnN0TmFtZSk7XG4gICAgbGV0IGhvc3RJbWFnZSA9IHVzZXJUeXBlID09ICdob3N0JyA/IGhvc3RJbWFnZURhdGEgOiBndWVzdEltYWdlRGF0YTtcbiAgICBsZXQgZ3Vlc3RJbWFnZSA9IHVzZXJUeXBlICE9ICdob3N0JyA/IGhvc3RJbWFnZURhdGEgOiBndWVzdEltYWdlRGF0YTtcbiAgICBsZXQgaG9zdFByb2ZpbGVJZCA9IHVzZXJUeXBlID09ICdob3N0JyA/IGhvc3RQcm9maWxlTnVtYmVyIDogZ3Vlc3RQcm9maWxlTnVtYmVyO1xuICAgIGxldCBndWVzdFByb2ZpbGVJZCA9IHVzZXJUeXBlICE9ICdob3N0JyA/IGhvc3RQcm9maWxlTnVtYmVyIDogZ3Vlc3RQcm9maWxlTnVtYmVyO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZ3Vlc3RIb3N0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuaG9zdE5hbWUsICdob3N0TmFtZUNvbG9yJyl9PlxuICAgICAgICAgIDxMaW5rIHRvPXsnL3VzZXJzL3Nob3cvJyArIGd1ZXN0UHJvZmlsZUlkfSA+XG4gICAgICAgICAgICB7Z3Vlc3ROYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhvc3RDaGF0fT5cbiAgICAgICAgICA8TGluayB0bz17Jy91c2Vycy9zaG93LycgKyBndWVzdFByb2ZpbGVJZH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGd1ZXN0SW1hZ2UgJiYgPEltYWdlIHNyYz17Jy9pbWFnZXMvYXZhdGFyL21lZGl1bV8nICsgZ3Vlc3RJbWFnZX0gcmVzcG9uc2l2ZSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAhZ3Vlc3RJbWFnZSAmJiA8SW1hZ2Ugc3JjPXtkZWZhdWx0UGljfSByZXNwb25zaXZlIC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jZW50ZXJDaGF0SWNvbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaWNvbkJHfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NoYXRJY29ufSByZXNwb25zaXZlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ob3N0Q2hhdH0+XG4gICAgICAgICAgPExpbmsgdG89eycvdXNlcnMvc2hvdy8nICsgaG9zdFByb2ZpbGVJZH0+XG4gICAgICAgICAgICB7LyogPEltYWdlIHNyYz17Jy9pbWFnZXMvYXZhdGFyL21lZGl1bV8nICsgaG9zdEltYWdlfSByZXNwb25zaXZlIC8+ICovfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3N0SW1hZ2UgJiYgPEltYWdlIHNyYz17Jy9pbWFnZXMvYXZhdGFyL21lZGl1bV8nICsgaG9zdEltYWdlfSByZXNwb25zaXZlIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICFob3N0SW1hZ2UgJiYgPEltYWdlIHNyYz17ZGVmYXVsdFBpY30gcmVzcG9uc2l2ZSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmhvc3ROYW1lLCAnaG9zdE5hbWVDb2xvcicpfT5cbiAgICAgICAgICA8TGluayB0bz17Jy91c2Vycy9zaG93LycgKyBob3N0UHJvZmlsZUlkfT5cbiAgICAgICAgICAgIHtob3NOYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzKShHdWVzdEhvc3REZXRhaWxzKSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIFBhbmVsLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5cbi8vIEhlbHBlcnNcbmltcG9ydCBzdWJtaXQgZnJvbSAnLi9zdWJtaXQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vQXZhdGFyJztcblxuLy9Mb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBTZW5kTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBwaWN0dXJlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcbiAgfTtcblxuICByZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhID0gKHsgaW5wdXQsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNoaWxkcmVuLCBjbGFzc05hbWUsIHBsYWNlaG9sZGVyIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtjeChzLmVycm9yTWVzc2FnZSwgJ2Vycm9yTWVzc2FnZUZpZWxkUlRMJyl9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2ZpbGVJZCwgcGljdHVyZSwgZGlzcGxheU5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlcnJvciwgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcblxuICAgIHJldHVybiAoXG4gICAgICAvLyA8Um93IGNsYXNzTmFtZT17Y3gocy5zcGFjZTYpfT5cbiAgICAgIC8vICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezl9IGxnPXsxMH0+XG4gICAgICAvLyAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5wYW5lbEJ1YmJsZSwgcy5wYW5lbEJ1YmJsZVJpZ2h0LCBcIm1lc3NhZ2VUZXh0QXJlYVwiKX0+XG4gICAgICAvLyAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxuICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50ZXh0Qm9keX0+XG4gICAgICAvLyAgICAgICAgICAgPEZpZWxkXG4gICAgICAvLyAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9e3MudGV4dEJveH1cbiAgICAgIC8vICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhfVxuICAgICAgLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMud3JpdGVNZXNzYWdlKX1cbiAgICAgIC8vICAgICAgICAgICAvPlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucGFuZWxEYXJrKX0+XG4gICAgICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm90dG9tQnV0dG9ufT5cbiAgICAgIC8vICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtidC5idG5QcmltYXJ5fSB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgZXJyb3J9PlxuICAgICAgLy8gICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2VuZE1lc3NhZ2V9IC8+XG4gICAgICAvLyAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIC8vICAgICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgICA8L2Zvcm0+XG4gICAgICAvLyAgICAgPC9QYW5lbD5cbiAgICAgIC8vICAgPC9Db2w+XG4gICAgICAvLyAgIDxDb2wgbWQ9ezN9IGxnPXsyfSBjbGFzc05hbWU9e2N4KCd0ZXh0LXJpZ2h0Jyl9PlxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVBdmF0YXJTZWN0aW9uLCBzLmhpZGVTbSl9PlxuICAgICAgLy8gICAgICAgPEF2YXRhclxuICAgICAgLy8gICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAvLyAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAvLyAgICAgICAgIHdpZHRoPXs3MH1cbiAgICAgIC8vICAgICAgICAgdGl0bGU9e2Rpc3BsYXlOYW1lfVxuICAgICAgLy8gICAgICAgICBjbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhcn1cbiAgICAgIC8vICAgICAgICAgd2l0aExpbmtcbiAgICAgIC8vICAgICAgICAgbGlua0NsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyTGlua31cbiAgICAgIC8vICAgICAgICAgcHJvZmlsZUlkPXtwcm9maWxlSWR9XG4gICAgICAvLyAgICAgICAvPlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgLy8gICA8L0NvbD5cbiAgICAgIC8vIDwvUm93PlxuICAgICAgPGRpdiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnNwYWNlNil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRpc3BsYXlUYWJsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5VGFibGVSb3d9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5kaXNwbGF5VGFibGVDZWxsLCBzLmRpc3BsYXlUYWJsZVdpZHRoLCBzLnJhZGl1c0NvbG9yLCAnc2VuZE1lc3NhZ2VSYWRpdXMnKX0+XG4gICAgICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5wYW5lbEJ1YmJsZSwgcy5wYW5lbEJ1YmJsZVJpZ2h0LCBcIm1lc3NhZ2VUZXh0QXJlYVwiLCAnVmlld0J1YmJsZVJpZ2h0Jyl9PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudGV4dEJvZHl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnRleHRCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLndyaXRlTWVzc2FnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnBhbmVsRGFyayl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmJvdHRvbUJ1dHRvbiwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeSl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBlcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zZW5kTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbFRvcCwgcy5kaXNwbGF5VGFibGVXaWR0aFR3byl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVBdmF0YXJTZWN0aW9uLCBzLmhpZGVTbSwgJ3Byb2ZpbGVBdmF0YXJSaWdodCcpfT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlPXtwaWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtkaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rXG4gICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17cHJvZmlsZUlkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufVxuXG5TZW5kTWVzc2FnZSA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdTZW5kTWVzc2FnZScsIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoaXMgZm9ybVxuICB2YWxpZGF0ZVxufSkoU2VuZE1lc3NhZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocywgYnQpKFNlbmRNZXNzYWdlKSk7IiwiLy8gUmVkdXggRm9ybVxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuLy8gUmVkdXggYWN0aW9uXG5pbXBvcnQgeyBzZW5kTWVzc2FnZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZS9zZW5kTWVzc2FnZUFjdGlvbic7XG5cbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdCh2YWx1ZXMsIGRpc3BhdGNoKSB7XG5cblx0bGV0IHRocmVhZElkID0gdmFsdWVzLnRocmVhZElkO1xuXHRsZXQgdGhyZWFkVHlwZSA9IHZhbHVlcy50aHJlYWRUeXBlO1xuXHRsZXQgdHlwZSA9IHZhbHVlcy50eXBlO1xuXHRsZXQgY29udGVudCA9IHZhbHVlcy5jb250ZW50O1xuXHRkaXNwYXRjaChzZW5kTWVzc2FnZUFjdGlvbihcblx0XHR0aHJlYWRJZCxcblx0XHR0aHJlYWRUeXBlLFxuXHRcdGNvbnRlbnQsXG5cdFx0dHlwZSxcblx0XHR1bmRlZmluZWQsXG5cdFx0dW5kZWZpbmVkLFxuXHRcdDAsXG5cdFx0dW5kZWZpbmVkLFxuXHRcdHZhbHVlcy5yZWNlaXZlck5hbWUsXG5cdFx0dmFsdWVzLnNlbmRlck5hbWUsXG5cdFx0dmFsdWVzLnJlY2VpdmVyVHlwZSxcblx0XHR2YWx1ZXMucmVjZWl2ZXJFbWFpbFxuXHQpKTtcblx0ZGlzcGF0Y2gocmVzZXQoJ1NlbmRNZXNzYWdlJykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJtaXQ7IiwiaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcblxuICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmNvbnRlbnQpIHtcbiAgICBlcnJvcnMuY29udGVudCA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5jb250ZW50ICYmIHZhbHVlcy5jb250ZW50LnRvU3RyaW5nKCkudHJpbSgpID09ICcnKSB7XG4gICAgZXJyb3JzLmNvbnRlbnQgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7XG4gIFBhbmVsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vQXZhdGFyJztcblxuY2xhc3MgRnJvbU1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjcmVhdGVkQXQ6IG51bGxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9maWxlSWQsIHBpY3R1cmUsIGRpc3BsYXlOYW1lLCBjb250ZW50LCBjcmVhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGRhdGUgPSBjcmVhdGVkQXQgIT0gbnVsbCA/IG1vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnRCBNTU0gWVlZWScpIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuc3BhY2U2KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGlzcGxheVRhYmxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRpc3BsYXlUYWJsZVJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmRpc3BsYXlUYWJsZUNlbGwsIHMuZGlzcGxheVRhYmxlV2lkdGhUd28pfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5wcm9maWxlQXZhdGFyU2VjdGlvbkxlZnQsICdwcm9maWxlQXZhdGFyU2VjdGlvbkxlZnRBcicpfT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlPXtwaWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtkaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rXG4gICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhckxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17cHJvZmlsZUlkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmRpc3BsYXlUYWJsZUNlbGwsIHMuZGlzcGxheVRhYmxlV2lkdGgsIHMucmFkaXVzQ29sb3JUd28sICdyYWRpdXNDb2xvclR3bycpfT5cbiAgICAgICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnBhbmVsQnViYmxlLCBzLnBhbmVsRGFyaywgcy5wYW5lbEJ1YmJsZUxlZnQsICd2aWV3TWVzc2FnZUJ1YmJsZScpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudCAmJiAoY29udGVudC50cmltKCkpLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PntpdGVtfTxiciAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMudGltZVRleHQsIHMuc3BhY2VUb3AyKX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEZyb21NZXNzYWdlKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBTdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgY3JlYXRlZEF0OiBudWxsXG4gICAgfTtcblxuICAgIGxhYmVsKHN0YXR1cykge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSAnaW5xdWlyeSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzMX0vPjtcbiAgICAgICAgICAgIGNhc2UgJ3ByZUFwcHJvdmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXMyfS8+O1xuICAgICAgICAgICAgY2FzZSAnZGVjbGluZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czN9Lz47XG4gICAgICAgICAgICBjYXNlICdhcHByb3ZlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzNH0vPjtcbiAgICAgICAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czV9Lz47XG4gICAgICAgICAgICBjYXNlICdjYW5jZWxsZWRCeUhvc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czZ9Lz47XG4gICAgICAgICAgICBjYXNlICdjYW5jZWxsZWRCeUd1ZXN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXM3fS8+O1xuICAgICAgICAgICAgY2FzZSAnaW50YW50Qm9va2luZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzOH0vPjtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpcm1lZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nQ29uZmlybWVkfS8+O1xuICAgICAgICAgICAgY2FzZSAnZXhwaXJlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzOX0vPjtcbiAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3RUb0Jvb2snOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czEwfS8+O1xuICAgICAgICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnBhbmVsSGVhZGVyMn0vPjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBjcmVhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBkYXRlID0gY3JlYXRlZEF0ICE9IG51bGwgPyBtb21lbnQoY3JlYXRlZEF0KS5mb3JtYXQoJ01NL0QvWVlZWScpIDogJyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5pbmxpbmVTdGF0dXMsIHMuc3BhY2U2KX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuaG9yaXpvbnRhbFRleHQpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnRleHRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLmxhYmVsKHR5cGUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShTdGF0dXMpO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcbi8vIENvbXBvbmVudHNcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi9TdGF0dXMnO1xuaW1wb3J0IFRvTWVzc2FnZSBmcm9tICcuL1RvTWVzc2FnZSc7XG5pbXBvcnQgRnJvbU1lc3NhZ2UgZnJvbSAnLi9Gcm9tTWVzc2FnZSc7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIFRocmVhZEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ3Vlc3RQcm9maWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIH0pLFxuICAgICAgaG9zdFByb2ZpbGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBwaWN0dXJlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSksXG4gICAgICB0aHJlYWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgc2VudEJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB9KSksXG4gICAgICB0aHJlYWRJdGVtc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aHJlYWRJdGVtczogW10sXG4gICAgICB0aHJlYWRJdGVtc0NvdW50OiAwLFxuICAgIH0sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZGF0YTogeyB0aHJlYWRJdGVtcywgdGhyZWFkSXRlbXNDb3VudCB9LCB1c2VyVHlwZSwgbG9hZE1vcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhyZWFkSXRlbXMgIT0gbnVsbCAmJiB0aHJlYWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhyZWFkSXRlbXMgIT0gbnVsbCAmJiB0aHJlYWRJdGVtcy5sZW5ndGggPiAwICYmIHRocmVhZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgJiYgaXRlbS50eXBlICE9ICdtZXNzYWdlJyAmJiA8U3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtpdGVtLmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHVzZXJUeXBlID09PSAnZ3Vlc3QnICYmIGl0ZW0uc2VudEJ5ID09PSBkYXRhLmhvc3QgJiYgaXRlbS5jb250ZW50ICE9IG51bGwgJiYgPEZyb21NZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17ZGF0YS5ob3N0UHJvZmlsZS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e2RhdGEuaG9zdFByb2ZpbGUucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU9e2RhdGEuaG9zdFByb2ZpbGUuZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtpdGVtLmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHVzZXJUeXBlID09PSAnZ3Vlc3QnICYmIGl0ZW0uc2VudEJ5ID09PSBkYXRhLmd1ZXN0ICYmIGl0ZW0uY29udGVudCAhPSBudWxsICYmIDxUb01lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtkYXRhLmd1ZXN0UHJvZmlsZS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e2RhdGEuZ3Vlc3RQcm9maWxlLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXtkYXRhLmd1ZXN0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2l0ZW0uY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXNlclR5cGUgPT09ICdob3N0JyAmJiBpdGVtLnNlbnRCeSA9PT0gZGF0YS5ndWVzdCAmJiBpdGVtLmNvbnRlbnQgIT0gbnVsbCAmJiA8RnJvbU1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtkYXRhLmd1ZXN0UHJvZmlsZS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e2RhdGEuZ3Vlc3RQcm9maWxlLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXtkYXRhLmd1ZXN0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2l0ZW0uY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXNlclR5cGUgPT09ICdob3N0JyAmJiBpdGVtLnNlbnRCeSA9PT0gZGF0YS5ob3N0ICYmIGl0ZW0uY29udGVudCAhPSBudWxsICYmIDxUb01lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtkYXRhLmhvc3RQcm9maWxlLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZT17ZGF0YS5ob3N0UHJvZmlsZS5waWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZT17ZGF0YS5ob3N0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2l0ZW0uY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YSAmJiB0aHJlYWRJdGVtcyAmJiB0aHJlYWRJdGVtcy5sZW5ndGggPCB0aHJlYWRJdGVtc0NvdW50ICYmIDxkaXYgY2xhc3NOYW1lPXtzLnRleHRDZW50ZXJ9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZSgpfSBjbGFzc05hbWU9e2N4KHMuYnRuUmFkaXVzLCBidC5idG5QcmltYXJ5KX0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmxvYWRNb3JlTXNnfSAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ub0l0bWVzRm91bmR9IC8+IDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzLCBidCkoVGhyZWFkSXRlbXMpIDtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtcbiAgUGFuZWxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9BdmF0YXInO1xuXG5jbGFzcyBUb01lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjcmVhdGVkQXQ6IG51bGxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9maWxlSWQsIHBpY3R1cmUsIGRpc3BsYXlOYW1lLCBjb250ZW50LCBjcmVhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGRhdGUgPSBjcmVhdGVkQXQgIT0gbnVsbCA/IG1vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnRCBNTU0gWVlZWScpIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuc3BhY2U2KX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5VGFibGV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5VGFibGVSb3d9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmRpc3BsYXlUYWJsZUNlbGwsIHMuZGlzcGxheVRhYmxlV2lkdGgsIHMucmFkaXVzQ29sb3IsICdzZW5kTWVzc2FnZVJhZGl1cycpfT5cbiAgICAgICAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMucGFuZWxEYXJrLCBzLnBhbmVsQnViYmxlLCBzLnBhbmVsVGV4dCwgcy5wYW5lbEJ1YmJsZVJpZ2h0LCAnVmlld0J1YmJsZVJpZ2h0Jyl9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgJiYgKGNvbnRlbnQudHJpbSgpKS5zcGxpdChcIlxcblwiKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT57aXRlbX08YnIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnRpbWVUZXh0LCBzLnNwYWNlVG9wMil9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmRpc3BsYXlUYWJsZUNlbGwsIHMuZGlzcGxheVRhYmxlV2lkdGhUd28pfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVBdmF0YXJTZWN0aW9uLCAncHJvZmlsZUF2YXRhclJpZ2h0Jyl9PlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtwaWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtkaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICB3aXRoTGlua1xuICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhckxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtwcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVG9NZXNzYWdlKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbi8vIFJlZHV4XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcblx0Um93LFxuXHRDb2xcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG4vLyBDb21wb25lbnRcbmltcG9ydCBDdXJyZW5jeUNvbnZlcnRlciBmcm9tICcuLi8uLi9DdXJyZW5jeUNvbnZlcnRlcic7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIENhbmNlbERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0Zm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcblx0XHRjYW5jZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0Z3Vlc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0aG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRyZWZ1bmRUb0d1ZXN0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0cGF5b3V0VG9Ib3N0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0dG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHR9KVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHVzZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgY2FuY2VsRGF0YTogeyBjYW5jZWxsYXRpb25Qb2xpY3ksIGd1ZXN0U2VydmljZUZlZSwgcmVmdW5kVG9HdWVzdCwgcGF5b3V0VG9Ib3N0LCBjdXJyZW5jeSB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBlYXJuZWRBbW91bnQgPSAwLCBtaXNzZWRFYXJuaW5ncyA9IDAsIHJlZnVuZCA9IDA7XG5cdFx0ZWFybmVkQW1vdW50ID0gcGF5b3V0VG9Ib3N0O1xuXHRcdC8vIG1pc3NlZEVhcm5pbmdzID0gcmVmdW5kVG9HdWVzdCAtIGd1ZXN0U2VydmljZUZlZTtcblx0XHRyZWZ1bmQgPSByZWZ1bmRUb0d1ZXN0O1xuXHRcdGNvbnN0IHsgcmVzZXJ2YXRpb25EYXRhOiB7IHRvdGFsLCBob3N0U2VydmljZUZlZSB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdG1pc3NlZEVhcm5pbmdzID0gKHRvdGFsIC0gaG9zdFNlcnZpY2VGZWUpIC0gZWFybmVkQW1vdW50XG5cblx0XHQvLyBpZihjYW5jZWxsYXRpb25Qb2xpY3kgPT0gJ0ZsZXhpYWJsZScpIHtcblx0XHQvLyBcdG1pc3NlZEVhcm5pbmdzID0gcmVmdW5kVG9HdWVzdDtcblx0XHQvLyBcdGVhcm5lZEFtb3VudCA9IHBheW91dFRvSG9zdDtcblx0XHQvLyB9IGVsc2UgaWYoY2FuY2VsbGF0aW9uUG9saWN5ID09ICdNb2RlcmF0ZScpIHtcblx0XHQvLyBcdG1pc3NlZEVhcm5pbmdzID0gcmVmdW5kVG9HdWVzdCAtIGd1ZXN0U2VydmljZUZlZTtcblx0XHQvLyBcdGVhcm5lZEFtb3VudCA9IHBheW91dFRvSG9zdDtcblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0bWlzc2VkRWFybmluZ3MgPSByZWZ1bmRUb0d1ZXN0O1xuXHRcdC8vIFx0ZWFybmVkQW1vdW50ID0gcGF5b3V0VG9Ib3N0O1xuXHRcdC8vIH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZVRvcDh9PlxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtzLnNwYWNlNH0+XG5cdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnBheW1lbnR9IC8+PC9zcGFuPlxuXHRcdFx0XHQ8L2g0PlxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIGVhcm5lZEFtb3VudCA+IDAgJiYgPFJvdyBjbGFzc05hbWU9e3MudGV4dEJvbGR9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17N30gc209ezd9IGNsYXNzTmFtZT17cy50ZXh0TGVmdH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5lYXJuZWRBbW91bnR9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtzLnRleHRSaWdodH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXtlYXJuZWRBbW91bnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIG1pc3NlZEVhcm5pbmdzID4gMCAmJiA8Um93IGNsYXNzTmFtZT17Y3gocy50ZXh0Qm9sZCwgcy5zcGFjZVRvcDIpfT5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezd9IHNtPXs3fSBjbGFzc05hbWU9e3MudGV4dExlZnR9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWlzc2VkRWFybmluZ3N9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtzLnRleHRSaWdodH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXttaXNzZWRFYXJuaW5nc31cblx0XHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXJUeXBlID09PSAnZ3Vlc3QnICYmIHJlZnVuZCA+IDAgJiYgPFJvdyBjbGFzc05hbWU9e2N4KHMudGV4dEJvbGQsIHMuc3BhY2VUb3AyKX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs3fSBzbT17N30gY2xhc3NOYW1lPXtzLnRleHRMZWZ0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlZnVuZEFtb3VudH0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e3MudGV4dFJpZ2h0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e3JlZnVuZH1cblx0XHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYW5jZWxEZXRhaWxzKSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuXHRSb3csXG5cdENvbCxcblx0VG9vbHRpcCxcblx0T3ZlcmxheVRyaWdnZXJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgKiBhcyBGb250QXdlc29tZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBDdXJyZW5jeUNvbnZlcnRlciBmcm9tICcuLi8uLi9DdXJyZW5jeUNvbnZlcnRlcic7XG5cbi8vIEhlbHBlclxuaW1wb3J0IHsgY29udmVydCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY3VycmVuY3lDb252ZXJ0aW9uJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgUGF5bWVudERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG5cdFx0dXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRiYXNlUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRjbGVhbmluZ1ByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0bW9udGhseURpc2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdHdlZWtseURpc2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0ZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHNlcnZpY2VGZWVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0Z3Vlc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRcdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdFx0dmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRcdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuXHRcdFx0fSkuaXNSZXF1aXJlZCxcblx0XHRcdGhvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRcdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdFx0dmFsdWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRcdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuXHRcdFx0fSkuaXNSZXF1aXJlZFxuXHRcdH0pLmlzUmVxdWlyZWQsXG5cdFx0YmFzZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHJhdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdHN0YXJ0RGF0ZTogbnVsbCxcblx0XHRlbmREYXRlOiBudWxsLFxuXHRcdGJhc2VQcmljZTogMCxcblx0XHRjbGVhbmluZ1ByaWNlOiAwLFxuXHRcdG1vbnRobHlEaXNjb3VudDogMCxcblx0XHR3ZWVrbHlEaXNjb3VudDogMFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgYmFzZVByaWNlLCBjbGVhbmluZ1ByaWNlLCBjdXJyZW5jeSwgbW9udGhseURpc2NvdW50LCB3ZWVrbHlEaXNjb3VudCwgdXNlclR5cGUgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBzZXJ2aWNlRmVlcywgYmFzZSwgcmF0ZXMgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyByZXNlcnZhdGlvbkRhdGEgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG5cblx0XHRmdW5jdGlvbiBMaW5rV2l0aFRvb2x0aXAoeyBpZCwgY2hpbGRyZW4sIGhyZWYsIHRvb2x0aXAgfSkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE92ZXJsYXlUcmlnZ2VyXG5cdFx0XHRcdFx0b3ZlcmxheT17PFRvb2x0aXAgY2xhc3NOYW1lPXtzLnRvb2x0aXB9IGlkPXtpZH0+e3Rvb2x0aXB9PC9Ub29sdGlwPn1cblx0XHRcdFx0XHRwbGFjZW1lbnQ9XCJ0b3BcIlxuXHRcdFx0XHRcdGRlbGF5U2hvdz17MzAwfVxuXHRcdFx0XHRcdGRlbGF5SGlkZT17MTUwfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0ey8qIDxhIGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+ICovfVxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9PdmVybGF5VHJpZ2dlcj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly9sZXQgZ3Vlc3RTZXJ2aWNlRmVlID0gMTA7XG5cdFx0Ly9sZXQgaG9zdFNlcnZpY2VGZWUgPSAyMDtcblx0XHRsZXQgZ3Vlc3RTZXJ2aWNlRmVlID0gMCwgaG9zdFNlcnZpY2VGZWUgPSAwO1xuXHRcdGxldCBjdXJyZW50RGF5LCBib29raW5nU3BlY2lhbFByaWNpbmcgPSBbXSwgaXNTcGVjaWFsUHJpY2VBc3NpZ25lZCA9IGZhbHNlO1xuXHRcdGxldCBpc1NwZWNpYWxQcmljaW5nQXNzaW5nZWQgPSAocmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS5ib29raW5nU3BlY2lhbFByaWNpbmcubGVuZ3RoID4gMCkgPyB0cnVlIDogZmFsc2U7XG5cdFx0bGV0IGlzU3BlY2lhbFByaWNlLCBpc0RheVRvdGFsID0gMCwgaXNDbGVhbmluZ1ByaWNlID0gMCwgdGF4UmF0ZUZlZSA9IDA7XG5cdFx0bGV0IGlzRGlzY291bnQsIGlzRGlzY291bnRUeXBlO1xuXG5cblxuXHRcdGxldCBtb21lbnRTdGFydERhdGUsIG1vbWVudEVuZERhdGUsIGRheURpZmZlcmVuY2UsIHByaWNlRm9yRGF5cyA9IDAsIHRvdGFsV2l0aG91dFNlcnZpY2VGZWUgPSAwO1xuXHRcdGxldCBkaXNjb3VudCA9IDAsIGRpc2NvdW50VHlwZSwgdG90YWwgPSAwLCBob3N0RWFybmluZ3MgPSAwLCBpc0F2ZXJhZ2UgPSAwO1xuXG5cdFx0aWYgKHN0YXJ0RGF0ZSAhPSBudWxsICYmIGVuZERhdGUgIT0gbnVsbCkge1xuXHRcdFx0bW9tZW50U3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSk7XG5cdFx0XHRtb21lbnRFbmREYXRlID0gbW9tZW50KGVuZERhdGUpO1xuXHRcdFx0ZGF5RGlmZmVyZW5jZSA9IG1vbWVudEVuZERhdGUuZGlmZihtb21lbnRTdGFydERhdGUsICdkYXlzJyk7XG5cblx0XHRcdGlmIChkYXlEaWZmZXJlbmNlID4gMCkge1xuXHRcdFx0XHRpZiAoaXNTcGVjaWFsUHJpY2luZ0Fzc2luZ2VkKSB7XG5cdFx0XHRcdFx0cmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS5ib29raW5nU3BlY2lhbFByaWNpbmcgJiYgcmVzZXJ2YXRpb25EYXRhLmJvb2tpbmdTcGVjaWFsUHJpY2luZy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRwcmljZUZvckRheXMgPSBwcmljZUZvckRheXMgKyBOdW1iZXIoaXRlbS5pc1NwZWNpYWxQcmljZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJpY2VGb3JEYXlzID0gTnVtYmVyKGJhc2VQcmljZSkgKiBOdW1iZXIoZGF5RGlmZmVyZW5jZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpc0F2ZXJhZ2UgPSBOdW1iZXIocHJpY2VGb3JEYXlzKSAvIE51bWJlcihkYXlEaWZmZXJlbmNlKTtcblx0XHRpc0RheVRvdGFsID0gaXNBdmVyYWdlLnRvRml4ZWQoMikgKiBkYXlEaWZmZXJlbmNlO1xuXHRcdHByaWNlRm9yRGF5cyA9IGlzRGF5VG90YWw7XG5cblx0XHRpc0Rpc2NvdW50ID0gcmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS5kaXNjb3VudDtcblx0XHRpc0Rpc2NvdW50VHlwZSA9IHJlc2VydmF0aW9uRGF0YSAmJiByZXNlcnZhdGlvbkRhdGEuZGlzY291bnRUeXBlO1xuXHRcdGlzQ2xlYW5pbmdQcmljZSA9IHJlc2VydmF0aW9uRGF0YSAmJiByZXNlcnZhdGlvbkRhdGEuY2xlYW5pbmdQcmljZTtcblx0XHR0YXhSYXRlRmVlID0gcmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS50YXhSYXRlICYmIHJlc2VydmF0aW9uRGF0YS50YXhSYXRlID4gMCA/IHJlc2VydmF0aW9uRGF0YS50YXhSYXRlIDogMDtcblxuXHRcdGlmIChkYXlEaWZmZXJlbmNlID49IDcpIHtcblx0XHRcdGlmIChtb250aGx5RGlzY291bnQgPiAwICYmIGRheURpZmZlcmVuY2UgPj0gMjgpIHtcblx0XHRcdFx0ZGlzY291bnQgPSBpc0Rpc2NvdW50O1xuXHRcdFx0XHRkaXNjb3VudFR5cGUgPSBpc0Rpc2NvdW50VHlwZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3ZWVrbHlEaXNjb3VudCA+IDApIHtcblx0XHRcdFx0XHRkaXNjb3VudCA9IGlzRGlzY291bnQ7XG5cdFx0XHRcdFx0ZGlzY291bnRUeXBlID0gaXNEaXNjb3VudFR5cGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyB0b3RhbFdpdGhvdXRTZXJ2aWNlRmVlID0gKHByaWNlRm9yRGF5cyArIGlzQ2xlYW5pbmdQcmljZSArIHRheFJhdGVGZWUpIC0gZGlzY291bnQ7XG5cdFx0dG90YWxXaXRob3V0U2VydmljZUZlZSA9IChwcmljZUZvckRheXMgKyBpc0NsZWFuaW5nUHJpY2UpIC0gZGlzY291bnQ7XG5cblx0XHRpZiAoc2VydmljZUZlZXMpIHtcblx0XHRcdGlmIChzZXJ2aWNlRmVlcy5ndWVzdC50eXBlID09PSAncGVyY2VudGFnZScpIHtcblx0XHRcdFx0Z3Vlc3RTZXJ2aWNlRmVlID0gdG90YWxXaXRob3V0U2VydmljZUZlZSAqIChOdW1iZXIoc2VydmljZUZlZXMuZ3Vlc3QudmFsdWUpIC8gMTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGd1ZXN0U2VydmljZUZlZSA9IGNvbnZlcnQoYmFzZSwgcmF0ZXMsIHNlcnZpY2VGZWVzLmd1ZXN0LnZhbHVlLCBzZXJ2aWNlRmVlcy5ndWVzdC5jdXJyZW5jeSwgY3VycmVuY3kpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VydmljZUZlZXMuaG9zdC50eXBlID09PSAncGVyY2VudGFnZScpIHtcblx0XHRcdFx0aG9zdFNlcnZpY2VGZWUgPSB0b3RhbFdpdGhvdXRTZXJ2aWNlRmVlICogKE51bWJlcihzZXJ2aWNlRmVlcy5ob3N0LnZhbHVlKSAvIDEwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3N0U2VydmljZUZlZSA9IGNvbnZlcnQoYmFzZSwgcmF0ZXMsIHNlcnZpY2VGZWVzLmhvc3QudmFsdWUsIHNlcnZpY2VGZWVzLmhvc3QuY3VycmVuY3ksIGN1cnJlbmN5KTtcblx0XHRcdH1cblxuXHRcdH1cblxuXG5cdFx0aWYgKHVzZXJUeXBlID09PSAnaG9zdCcpIHtcblx0XHRcdHRvdGFsID0gKHByaWNlRm9yRGF5cyArIGlzQ2xlYW5pbmdQcmljZSkgLSBkaXNjb3VudDtcblx0XHRcdC8vIHRvdGFsID0gKHByaWNlRm9yRGF5cyArIGlzQ2xlYW5pbmdQcmljZSArIHRheFJhdGVGZWUpIC0gZGlzY291bnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvdGFsID0gKHByaWNlRm9yRGF5cyArIGd1ZXN0U2VydmljZUZlZSArIGlzQ2xlYW5pbmdQcmljZSkgLSBkaXNjb3VudDtcblx0XHRcdC8vIHRvdGFsID0gKHByaWNlRm9yRGF5cyArIGd1ZXN0U2VydmljZUZlZSArIGlzQ2xlYW5pbmdQcmljZSArIHRheFJhdGVGZWUpIC0gZGlzY291bnQ7XG5cdFx0fVxuXG5cdFx0aG9zdEVhcm5pbmdzID0gdG90YWwgLSBob3N0U2VydmljZUZlZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtzLnNwYWNlNH0+XG5cdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnBheW1lbnR9IC8+PC9zcGFuPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9e3MudGV4dEdyYXl9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17N30gc209ezd9IGNsYXNzTmFtZT17Y3gocy50ZXh0TGVmdCwgJ3RleHRBbGlnblJpZ2h0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5RmxleH0+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNTcGVjaWFsUHJpY2luZ0Fzc2luZ2VkICYmIDxMaW5rV2l0aFRvb2x0aXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0dG9vbHRpcD1cIkF2ZXJhZ2UgcmF0ZSBwZXIgbmlnaHQgZm9yIHlvdXIgdHJpcC5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwidG9vbHRpcC0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeChzLmljb25TZWN0aW9uLCBzLnRvb2xUaXBDb2xvcil9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxGb250QXdlc29tZS5GYVF1ZXN0aW9uIGNsYXNzTmFtZT17cy5pbnN0YW50SWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rV2l0aFRvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXJlY3Rpb25MdHInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vYW1vdW50PXtiYXNlUHJpY2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXtpc0F2ZXJhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eycgeCd9IHtkYXlEaWZmZXJlbmNlfSB7ZGF5RGlmZmVyZW5jZSA+IDEgPyBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm5pZ2h0cykgOiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm5pZ2h0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e2N4KHMudGV4dFJpZ2h0LCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0YW1vdW50PXtwcmljZUZvckRheXN9XG5cdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpc0NsZWFuaW5nUHJpY2UgPiAwICYmIDxSb3cgY2xhc3NOYW1lPXtzLnRleHRHcmF5fT5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezd9IHNtPXs3fSBjbGFzc05hbWU9e2N4KHMudGV4dExlZnQsICd0ZXh0QWxpZ25SaWdodFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNsZWFuaW5nUHJpY2V9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtjeChzLnRleHRSaWdodCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW1vdW50PXtjbGVhbmluZ1ByaWNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXtpc0NsZWFuaW5nUHJpY2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7LyogXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YXhSYXRlRmVlID4gMCAmJiA8Um93IGNsYXNzTmFtZT17cy50ZXh0R3JheX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs3fSBzbT17N30gY2xhc3NOYW1lPXtzLnRleHRMZWZ0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnRheFJhdGV9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtzLnRleHRSaWdodH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXt0YXhSYXRlRmVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH0gKi99XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpc2NvdW50ID4gMCAmJiA8Um93IGNsYXNzTmFtZT17cy50ZXh0R3JheX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs3fSBzbT17N30gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPntkaXNjb3VudFR5cGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtjeChzLnRleHRSaWdodCwgcy5kaXNjb3VudFRleHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQtIDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXtkaXNjb3VudH1cblx0XHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXJUeXBlID09PSAnZ3Vlc3QnICYmIGd1ZXN0U2VydmljZUZlZSA+IDAgJiYgPFJvdyBjbGFzc05hbWU9e3MudGV4dEdyYXl9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17N30gc209ezd9IGNsYXNzTmFtZT17Y3gocy50ZXh0TGVmdCwgJ3RleHRBbGlnblJpZ2h0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2VydmljZUZlZX0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e2N4KHMudGV4dFJpZ2h0LCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e2d1ZXN0U2VydmljZUZlZX1cblx0XHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXJUeXBlID09PSAnZ3Vlc3QnICYmIDxociBjbGFzc05hbWU9e3MuaG9yaXpvbnRhbExpbmV9IC8+XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT17Y3gocy50ZXh0Qm9sZCwgcy5zcGFjZVRvcDIpfT5cblx0XHRcdFx0XHQ8Q29sIHhzPXs2fSBzbT17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc3ViVG90YWx9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgeHM9ezZ9IHNtPXs2fSBjbGFzc05hbWU9e2N4KHMudGV4dFJpZ2h0LCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cblx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lDb252ZXJ0ZXJcblx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e3RvdGFsfVxuXHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlclR5cGUgPT09ICdob3N0JyAmJiBob3N0U2VydmljZUZlZSA+IDAgJiYgPFJvdyBjbGFzc05hbWU9e3MudGV4dEdyYXl9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17Nn0gc209ezZ9IGNsYXNzTmFtZT17Y3gocy50ZXh0TGVmdCwgJ3RleHRBbGlnblJpZ2h0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2VydmljZUZlZX0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezZ9IHNtPXs2fSBjbGFzc05hbWU9e2N4KHMudGV4dFJpZ2h0LCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0LVxuXHRcdFx0ICAgICAgICAgICAgICAgIFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e2hvc3RTZXJ2aWNlRmVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlclR5cGUgPT09ICdob3N0JyAmJiA8aHIgY2xhc3NOYW1lPXtzLmhvcml6b250YWxMaW5lfSAvPlxuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlclR5cGUgPT09ICdob3N0JyAmJiA8Um93IGNsYXNzTmFtZT17Y3gocy50ZXh0Qm9sZCwgcy5zcGFjZVRvcDIsIHMuc3BhY2UzKX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs2fSBzbT17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy55b3VFYXJufSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17Nn0gc209ezZ9IGNsYXNzTmFtZT17Y3gocy50ZXh0UmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lDb252ZXJ0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdGFtb3VudD17aG9zdEVhcm5pbmdzfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG5cdHNlcnZpY2VGZWVzOiBzdGF0ZS5ib29rLnNlcnZpY2VGZWVzLFxuXHRiYXNlOiBzdGF0ZS5jdXJyZW5jeS5iYXNlLFxuXHRyYXRlczogc3RhdGUuY3VycmVuY3kucmF0ZXNcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzKShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoUGF5bWVudERldGFpbHMpKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7XG5cdFJvdyxcblx0Q29sXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0ICogYXMgRm9udEF3ZXNvbWUgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhJztcblxuLy9Db21wb25lbnRcbmltcG9ydCBQYXltZW50RGV0YWlscyBmcm9tICcuL1BheW1lbnREZXRhaWxzJztcbmltcG9ydCBDYW5jZWxEZXRhaWxzIGZyb20gJy4vQ2FuY2VsRGV0YWlscyc7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIFRyaXBEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuXHRcdGxpc3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRlbmREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0cGVyc29uQ2FwYWNpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRiYXNlUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRjbGVhbmluZ1ByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRtb250aGx5RGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0d2Vla2x5RGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0Y2FuY2VsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGd1ZXN0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlcixcblx0XHRcdGhvc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0cmVmdW5kVG9HdWVzdDogUHJvcFR5cGVzLm51bWJlcixcblx0XHRcdHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlcixcblx0XHRcdHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0fSksXG5cdFx0cmVzZXJ2YXRpb25EYXRhOiBQcm9wVHlwZXMuYW55LFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0dGl0bGU6ICcnLFxuXHRcdHN0YXJ0RGF0ZTogbnVsbCxcblx0XHRlbmREYXRlOiBudWxsLFxuXHRcdHBlcnNvbkNhcGFjaXR5OiAwLFxuXHRcdHJlc2VydmF0aW9uRGF0YTogbnVsbFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHRpdGxlLCBzdGFydERhdGUsIGVuZERhdGUsIHBlcnNvbkNhcGFjaXR5LCBsaXN0SWQsIHJlc2VydmF0aW9uRGF0YSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcblx0XHRjb25zdCB7IGJhc2VQcmljZSwgY2xlYW5pbmdQcmljZSwgd2Vla2x5RGlzY291bnQsIG1vbnRobHlEaXNjb3VudCwgdXNlclR5cGUsIGN1cnJlbmN5LCBjYW5jZWxEYXRhIH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBjaGVja0luID0gc3RhcnREYXRlICE9IG51bGwgPyBtb21lbnQoc3RhcnREYXRlKS5mb3JtYXQoJ2RkZCwgRG8gTU1NJykgOiAnJztcblx0XHRsZXQgY2hlY2tPdXQgPSBzdGFydERhdGUgIT0gbnVsbCA/IG1vbWVudChlbmREYXRlKS5mb3JtYXQoJ2RkZCwgRG8gTU1NJykgOiAnJztcblxuXHRcdGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xuXHRcdGlmIChjYW5jZWxEYXRhKSB7XG5cdFx0XHRpc0NhbmNlbGxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3gocy5zcGFjZTQsIHMuc3BhY2VUb3A2LCBzLnNpZGViYXJDb250YWluZXIpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Muc3BhY2U0fT5cblx0XHRcdFx0XHQ8aDQ+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnRyaXBEZXRhaWxzfSAvPjwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZTR9PlxuXHRcdFx0XHRcdHsvKiA8TGluayB0bz17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IGNsYXNzTmFtZT17cy50aW1lVGV4dH0+ICovfVxuXHRcdFx0XHRcdDxhIGhyZWY9e1wiL3Jvb21zL1wiICsgbGlzdElkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdDxoND57dGl0bGV9PC9oND5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0ey8qIDwvTGluaz4gKi99XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZTJ9PlxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9e3MuaG9yaXpvbmRhbExpbmV9IC8+XG5cdFx0XHRcdFx0PFJvdyBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AzLCBzLnNwYWNlMyl9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17NX0gc209ezV9IGNsYXNzTmFtZT17cy5ub1BhZGRpbmdSaWdodH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChzLnRleHRHcmF5LCBzLnNwYWNlMSl9PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jaGVja0lufSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmNoZWNrSW5EYXRlfT57Y2hlY2tJbn08L2Rpdj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17MX0gc209ezF9PlxuXHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWUuRmFDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPXtjeChzLnRleHRHcmF5LCBzLmNoZXZyb25JY29uKX0gLz5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17NX0gc209ezV9IGNsYXNzTmFtZT17Y3gocy5wdWxsUmlnaHQsIHMudGV4dExlZnQsICd2aWV3TWVzc2FnZUNoZWNrT3V0U2VjdGlvbicpfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KHMudGV4dEdyYXksIHMuc3BhY2UxKX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNoZWNrT3V0fSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmNoZWNrSW5EYXRlfT57Y2hlY2tPdXR9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPXtzLmhvcml6b25kYWxMaW5lfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Muc3BhY2UyfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3gocy50ZXh0R3JheSwgcy5zcGFjZTEpfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ndWVzdHN9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57cGVyc29uQ2FwYWNpdHl9IHtwZXJzb25DYXBhY2l0eSA+IDEgPyBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmd1ZXN0c0NhcGNpdHkpIDogZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ndWVzdENhcGNpdHkpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPXtzLmhvcml6b25kYWxMaW5lfSAvPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCFpc0NhbmNlbGxlZCAmJiByZXNlcnZhdGlvbkRhdGEgJiYgPFBheW1lbnREZXRhaWxzXG5cdFx0XHRcdFx0XHRcdHVzZXJUeXBlPXt1c2VyVHlwZX1cblx0XHRcdFx0XHRcdFx0c3RhcnREYXRlPXtzdGFydERhdGV9XG5cdFx0XHRcdFx0XHRcdGVuZERhdGU9e2VuZERhdGV9XG5cdFx0XHRcdFx0XHRcdGJhc2VQcmljZT17YmFzZVByaWNlfVxuXHRcdFx0XHRcdFx0XHRjbGVhbmluZ1ByaWNlPXtjbGVhbmluZ1ByaWNlfVxuXHRcdFx0XHRcdFx0XHR3ZWVrbHlEaXNjb3VudD17d2Vla2x5RGlzY291bnR9XG5cdFx0XHRcdFx0XHRcdG1vbnRobHlEaXNjb3VudD17bW9udGhseURpc2NvdW50fVxuXHRcdFx0XHRcdFx0XHRjdXJyZW5jeT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdHJlc2VydmF0aW9uRGF0YT17cmVzZXJ2YXRpb25EYXRhfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpc0NhbmNlbGxlZCAmJiA8Q2FuY2VsRGV0YWlsc1xuXHRcdFx0XHRcdFx0XHR1c2VyVHlwZT17dXNlclR5cGV9XG5cdFx0XHRcdFx0XHRcdGNhbmNlbERhdGE9e2NhbmNlbERhdGF9XG5cdFx0XHRcdFx0XHRcdHJlc2VydmF0aW9uRGF0YT17cmVzZXJ2YXRpb25EYXRhfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzKShUcmlwRGV0YWlscykpO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbmltcG9ydCB7IGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL0F2YXRhcic7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgVXNlckRldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcbiAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBwaWN0dXJlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmV2aWV3c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZlcmlmaWNhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpc0VtYWlsQ29uZmlybWVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzRmFjZWJvb2tDb25uZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaXNHb29nbGVDb25uZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcGljdHVyZTogbnVsbCxcbiAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgbG9jYXRpb246ICcnLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2ZpbGVJZCwgcGljdHVyZSwgZGlzcGxheU5hbWUsIGxvY2F0aW9uLCB2ZXJpZmljYXRpb25zLCByZXZpZXdzQ291bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgbGV0IHRvdGFsVmVyaWZpY2F0aW9uID0gMDtcbiAgICBpZiAodmVyaWZpY2F0aW9ucykge1xuICAgICAgaWYgKHZlcmlmaWNhdGlvbnMuaXNFbWFpbENvbmZpcm1lZCkgeyB0b3RhbFZlcmlmaWNhdGlvbiArPSAxOyB9XG4gICAgICBpZiAodmVyaWZpY2F0aW9ucy5pc0ZhY2Vib29rQ29ubmVjdGVkKSB7IHRvdGFsVmVyaWZpY2F0aW9uICs9IDE7IH1cbiAgICAgIGlmICh2ZXJpZmljYXRpb25zLmlzR29vZ2xlQ29ubmVjdGVkKSB7IHRvdGFsVmVyaWZpY2F0aW9uICs9IDE7IH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnNpZGViYXJDb250YWluZXIsIHMudGV4dENlbnRlcil9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyU2VjdGlvbn0+XG4gICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgc291cmNlPXtwaWN0dXJlfVxuICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICB3aWR0aD17MTUwfVxuICAgICAgICAgICAgdGl0bGU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJ9XG4gICAgICAgICAgICB3aXRoTGlua1xuICAgICAgICAgICAgbGlua0NsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyTGlua31cbiAgICAgICAgICAgIHByb2ZpbGVJZD17cHJvZmlsZUlkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZVRvcDN9PlxuICAgICAgICAgIDxMaW5rIHRvPXtcIi91c2Vycy9zaG93L1wiICsgcHJvZmlsZUlkfT48aDQgY2xhc3NOYW1lPXtzLnByb2ZpbGVOYW1lfT57ZGlzcGxheU5hbWV9PC9oND48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5zcGFjZVRvcDEsIHMucHJvZmlsZURldGFpbCl9PlxuICAgICAgICAgIDxzcGFuPntsb2NhdGlvbn08L3NwYW4+PGJyIC8+XG4gICAgICAgICAgPHNwYW4+e3RvdGFsVmVyaWZpY2F0aW9ufSB7dG90YWxWZXJpZmljYXRpb24gPiAxID8gZm9ybWF0TWVzc2FnZShtZXNzYWdlcy52ZXJpZmljYXRpb25zKSA6IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMudmVyaWZpY2F0aW9uKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+Jm5ic3A7LiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57cmV2aWV3c0NvdW50fSB7cmV2aWV3c0NvdW50ID4gMSA/IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmV2aWV3cykgOiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnJldmlldyl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKFVzZXJEZXRhaWwpKTtcblxuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3TWVzc2FnZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVmlld01lc3NhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVmlld01lc3NhZ2UuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG4vLyBSZWR1eFxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIEdyaWQsXG4gIFJvdyxcbiAgQ29sLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9WaWV3TWVzc2FnZS5jc3MnO1xuLy8gQ29tcG9uZW50XG5pbXBvcnQgVXNlckRldGFpbCBmcm9tICcuL1VzZXJEZXRhaWwnO1xuaW1wb3J0IFRyaXBEZXRhaWxzIGZyb20gJy4vVHJpcERldGFpbHMnO1xuaW1wb3J0IEFjdGlvbkJsb2NrIGZyb20gJy4vQWN0aW9uQmxvY2snO1xuaW1wb3J0IFNlbmRNZXNzYWdlIGZyb20gJy4vU2VuZE1lc3NhZ2UnO1xuaW1wb3J0IFRocmVhZEl0ZW1zIGZyb20gJy4vVGhyZWFkSXRlbXMnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuaW1wb3J0IEd1ZXN0SG9zdERldGFpbHMgZnJvbSAnLi9HdWVzdEhvc3REZXRhaWxzJztcbi8vIEdyYXBocWxcbmltcG9ydCBHZXRUaHJlYWRRdWVyeSBmcm9tICcuL0dldFRocmVhZFF1ZXJ5LmdyYXBocWwnO1xuaW1wb3J0IEdldE1vcmVUaHJlYWRJdGVtc1F1ZXJ5IGZyb20gJy4vR2V0TW9yZVRocmVhZEl0ZW1zUXVlcnkuZ3JhcGhxbCc7XG4vLyBMb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuY2xhc3MgVmlld01lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRocmVhZEl0ZW1zRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICBnZXRUaHJlYWQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGd1ZXN0UHJvZmlsZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICBwaWN0dXJlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgZmlyc3R5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIHJldmlld3NDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICB1c2VyVmVyaWZpY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB9KSxcbiAgICAgICAgZ3Vlc3RVc2VyRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgIHVzZXJCYW5TdGF0dXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIH0pLFxuICAgICAgICBob3N0UHJvZmlsZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICBwaWN0dXJlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgZmlyc3R5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIHJldmlld3NDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICB1c2VyVmVyaWZpY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB9KSxcbiAgICAgICAgaG9zdFVzZXJEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgdXNlckJhblN0YXR1czogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgfSksXG4gICAgICAgIHRocmVhZEl0ZW1Gb3JUeXBlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgIHBlcnNvbkNhcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgY2FuY2VsRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGd1ZXN0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICAgIGhvc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgcmVmdW5kVG9HdWVzdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICAgIHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIGxpc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgbGlzdGluZ0RhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBiYXNlUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGNsZWFuaW5nUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgfSksXG4gICAgfSksXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhyZWFkSWQ6IG51bGwsXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubG9hZE1vcmUgPSB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcyk7XG4gIH1cbiAgbG9hZE1vcmUoKSB7XG4gICAgY29uc3QgeyB0aHJlYWRJdGVtc0RhdGE6IHsgbG9hZGluZywgZ2V0VGhyZWFkOiB7IHRocmVhZEl0ZW1zIH0sIGZldGNoTW9yZSB9LCB0aHJlYWRJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGZldGNoTW9yZSh7XG4gICAgICBxdWVyeTogR2V0TW9yZVRocmVhZEl0ZW1zUXVlcnksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgIG9mZnNldDogdGhyZWFkSXRlbXMubGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHsgcmV0dXJuIHByZXZpb3VzUmVzdWx0OyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0VGhyZWFkOiB7XG4gICAgICAgICAgICAuLi5wcmV2aW91c1Jlc3VsdC5nZXRUaHJlYWQsXG4gICAgICAgICAgICB0aHJlYWRJdGVtczogWy4uLnByZXZpb3VzUmVzdWx0LmdldFRocmVhZC50aHJlYWRJdGVtcywgLi4uZmV0Y2hNb3JlUmVzdWx0LmdldEFsbFRocmVhZEl0ZW1zXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aHJlYWRJdGVtc0RhdGE6IHsgbG9hZGluZywgZ2V0VGhyZWFkIH0sIHVzZXJUeXBlLCB0aHJlYWRJZCwgaXNBZG1pbkF1dGhlbnRpY2F0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhY2NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRlciB0eXBlPXsndGV4dCd9IC8+O1xuICAgIH1cbiAgICBpZiAoZ2V0VGhyZWFkICYmIGdldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZSAmJiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUgJiYgZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZSkge1xuICAgICAgbGV0IHJlY2VpdmVyTmFtZSA9IGdldFRocmVhZC5ndWVzdFByb2ZpbGUuZmlyc3ROYW1lO1xuICAgICAgbGV0IGhvc3RVc2VyQmFuU3RhdHVzID0gZ2V0VGhyZWFkLmhvc3RVc2VyRGF0YS51c2VyQmFuU3RhdHVzO1xuICAgICAgbGV0IGd1ZXN0VXNlckJhblN0YXR1cyA9IGdldFRocmVhZC5ndWVzdFVzZXJEYXRhLnVzZXJCYW5TdGF0dXM7XG4gICAgICBsZXQgc2VuZGVyTmFtZSA9IGdldFRocmVhZC5ob3N0UHJvZmlsZS5maXJzdE5hbWU7XG4gICAgICBsZXQgcmVjZWl2ZXJUeXBlID0gJ2d1ZXN0JywgaXNMaXN0QXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICBsZXQgcmVjZWl2ZXJFbWFpbCA9IGdldFRocmVhZC5ndWVzdFVzZXJEYXRhLmVtYWlsO1xuICAgICAgaWYgKHVzZXJUeXBlID09PSBcImd1ZXN0XCIpIHtcbiAgICAgICAgcmVjZWl2ZXJOYW1lID0gZ2V0VGhyZWFkLmhvc3RQcm9maWxlLmZpcnN0TmFtZTtcbiAgICAgICAgc2VuZGVyTmFtZSA9IGdldFRocmVhZC5ndWVzdFByb2ZpbGUuZmlyc3ROYW1lO1xuICAgICAgICByZWNlaXZlclR5cGUgPSAnaG9zdCc7XG4gICAgICAgIHJlY2VpdmVyRW1haWwgPSBnZXRUaHJlYWQuaG9zdFVzZXJEYXRhLmVtYWlsO1xuICAgICAgfVxuICAgICAgbGV0IGxpc3RQdWJsaXNoU3RhdHVzO1xuICAgICAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgIHRocmVhZFR5cGU6IHVzZXJUeXBlLFxuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHJlY2VpdmVyTmFtZSxcbiAgICAgICAgc2VuZGVyTmFtZSxcbiAgICAgICAgcmVjZWl2ZXJUeXBlLFxuICAgICAgICByZWNlaXZlckVtYWlsXG4gICAgICB9O1xuXG4gICAgICBpZiAoZ2V0VGhyZWFkICYmIGdldFRocmVhZC5saXN0RGF0YSkge1xuICAgICAgICBpc0xpc3RBdmFpbGFibGUgPSB0cnVlXG4gICAgICB9XG5cblxuICAgICAgaWYgKGdldFRocmVhZCAmJiBnZXRUaHJlYWQubGlzdERhdGEpIHtcbiAgICAgICAgbGlzdFB1Ymxpc2hTdGF0dXMgPSBnZXRUaHJlYWQubGlzdERhdGEuaXNQdWJsaXNoZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezR9IHNtPXs1fSB4cz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zaWRlYmFyRGVzaWduLCBzLnNwYWNlNCwgJ2hpZGRlbi14cycpfT5cbiAgICAgICAgICAgICAgPFVzZXJEZXRhaWxcbiAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnByb2ZpbGVJZCA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgcGljdHVyZT17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUucGljdHVyZSA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5waWN0dXJlfVxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5kaXNwbGF5TmFtZSA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbj17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUubG9jYXRpb24gOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUubG9jYXRpb259XG4gICAgICAgICAgICAgICAgcmV2aWV3c0NvdW50PXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5yZXZpZXdzQ291bnQgOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUucmV2aWV3c0NvdW50fVxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbnM9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnVzZXJWZXJpZmljYXRpb24gOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUudXNlclZlcmlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzTGlzdEF2YWlsYWJsZSAmJiA8VHJpcERldGFpbHNcbiAgICAgICAgICAgICAgICAgIGxpc3RJZD17Z2V0VGhyZWFkLmxpc3RJZH1cbiAgICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtnZXRUaHJlYWQubGlzdERhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBiYXNlUHJpY2U9e2dldFRocmVhZC5saXN0RGF0YS5saXN0aW5nRGF0YS5iYXNlUHJpY2V9XG4gICAgICAgICAgICAgICAgICBjbGVhbmluZ1ByaWNlPXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEuY2xlYW5pbmdQcmljZX1cbiAgICAgICAgICAgICAgICAgIG1vbnRobHlEaXNjb3VudD17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLm1vbnRobHlEaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgIHdlZWtseURpc2NvdW50PXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEud2Vla2x5RGlzY291bnR9XG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeT17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuc3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICBwZXJzb25DYXBhY2l0eT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLnBlcnNvbkNhcGFjaXR5fVxuICAgICAgICAgICAgICAgICAgY2FuY2VsRGF0YT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLmNhbmNlbERhdGF9XG4gICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbkRhdGE9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5yZXNlcnZhdGlvbiB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIWlzTGlzdEF2YWlsYWJsZSAmJiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9MaXN0fSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXs4fSBzbT17N30geHM9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2U0LCBzLnBhZGRpbmdSaWdodCwgJ3BhZGRpbmdSaWdodEFSJyl9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIWlzQWRtaW5BdXRoZW50aWNhdGVkICYmICFndWVzdFVzZXJCYW5TdGF0dXMgJiYgIWhvc3RVc2VyQmFuU3RhdHVzICYmIDxBY3Rpb25CbG9ja1xuICAgICAgICAgICAgICAgICAgdGhyZWFkVHlwZT17dXNlclR5cGV9XG4gICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUudHlwZX1cbiAgICAgICAgICAgICAgICAgIHRocmVhZElkPXt0aHJlYWRJZH1cbiAgICAgICAgICAgICAgICAgIGxpc3RJZD17Z2V0VGhyZWFkLmxpc3RJZH1cbiAgICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uSWQ9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5yZXNlcnZhdGlvbklkfVxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuc3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICBwZXJzb25DYXBhY2l0eT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLnBlcnNvbkNhcGFjaXR5fVxuICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgaG9zdERpc3BsYXlOYW1lPXtnZXRUaHJlYWQuaG9zdFByb2ZpbGUuZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICBndWVzdERpc3BsYXlOYW1lPXtnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgZ3Vlc3RFbWFpbD17Z2V0VGhyZWFkLmd1ZXN0VXNlckRhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17Z2V0VGhyZWFkLmxpc3REYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgbGlzdFB1Ymxpc2hTdGF0dXM9e2xpc3RQdWJsaXNoU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25EYXRhPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUucmVzZXJ2YXRpb24gfHwge319XG4gICAgICAgICAgICAgICAgICBjb3VudHJ5PXtnZXRUaHJlYWQubGlzdERhdGEuY291bnRyeX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+XG4gICAgICAgICAgICAgICAgPEd1ZXN0SG9zdERldGFpbHNcbiAgICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgIHRocmVhZElkPXt0aHJlYWRJZH1cbiAgICAgICAgICAgICAgICAgIGdldFRocmVhZD17Z2V0VGhyZWFkfVxuICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFpc0FkbWluQXV0aGVudGljYXRlZCAmJiA8U2VuZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICB0aHJlYWRJZD17dGhyZWFkSWR9XG4gICAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuaG9zdFByb2ZpbGUucHJvZmlsZUlkIDogZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICBwaWN0dXJlPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnBpY3R1cmUgOiBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZT17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ob3N0UHJvZmlsZS5kaXNwbGF5TmFtZSA6IGdldFRocmVhZC5ndWVzdFByb2ZpbGUuZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8VGhyZWFkSXRlbXNcbiAgICAgICAgICAgICAgICB1c2VyVHlwZT17dXNlclR5cGV9XG4gICAgICAgICAgICAgICAgdGhyZWFkSWQ9e3RocmVhZElkfVxuICAgICAgICAgICAgICAgIGRhdGE9e2dldFRocmVhZH1cbiAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBsZz17NH0gbWQ9ezR9IHNtPXs0fSB4cz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zaWRlYmFyRGVzaWduLCBzLnNwYWNlNCwgJ3Zpc2libGUteHMnKX0+XG4gICAgICAgICAgICAgIDxVc2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgcHJvZmlsZUlkPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5wcm9maWxlSWQgOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUucHJvZmlsZUlkfVxuICAgICAgICAgICAgICAgIHBpY3R1cmU9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnBpY3R1cmUgOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUucGljdHVyZX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZT17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUuZGlzcGxheU5hbWUgOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUuZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgbG9jYXRpb249e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLmxvY2F0aW9uIDogZ2V0VGhyZWFkLmhvc3RQcm9maWxlLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIHJldmlld3NDb3VudD17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUucmV2aWV3c0NvdW50IDogZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnJldmlld3NDb3VudH1cbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25zPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS51c2VyVmVyaWZpY2F0aW9uIDogZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnVzZXJWZXJpZmljYXRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc0xpc3RBdmFpbGFibGUgJiYgPFRyaXBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICBsaXN0SWQ9e2dldFRocmVhZC5saXN0SWR9XG4gICAgICAgICAgICAgICAgICB1c2VyVHlwZT17dXNlclR5cGV9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17Z2V0VGhyZWFkLmxpc3REYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYmFzZVByaWNlPXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEuYmFzZVByaWNlfVxuICAgICAgICAgICAgICAgICAgY2xlYW5pbmdQcmljZT17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLmNsZWFuaW5nUHJpY2V9XG4gICAgICAgICAgICAgICAgICBtb250aGx5RGlzY291bnQ9e2dldFRocmVhZC5saXN0RGF0YS5saXN0aW5nRGF0YS5tb250aGx5RGlzY291bnR9XG4gICAgICAgICAgICAgICAgICB3ZWVrbHlEaXNjb3VudD17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLndlZWtseURpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgY3VycmVuY3k9e2dldFRocmVhZC5saXN0RGF0YS5saXN0aW5nRGF0YS5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5lbmREYXRlfVxuICAgICAgICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHk9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5wZXJzb25DYXBhY2l0eX1cbiAgICAgICAgICAgICAgICAgIGNhbmNlbERhdGE9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5jYW5jZWxEYXRhfVxuICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25EYXRhPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUucmVzZXJ2YXRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFpc0xpc3RBdmFpbGFibGUgJiYgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm5vTGlzdH0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbWQ9ezd9IG1kUHVzaD17NX0gY2xhc3NOYW1lPXtzLnNwYWNlNH0+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9UaHJlYWRGb3VuZH0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIGlzQWRtaW5BdXRoZW50aWNhdGVkOiBzdGF0ZS5ydW50aW1lLmlzQWRtaW5BdXRoZW50aWNhdGVkLFxuICBhY2NvdW50OiBzdGF0ZS5hY2NvdW50LmRhdGEsXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoID0ge307XG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3R5bGVzKHMpLFxuICBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCksXG4gIGdyYXBocWwoR2V0VGhyZWFkUXVlcnksIHtcbiAgICBuYW1lOiAndGhyZWFkSXRlbXNEYXRhJyxcbiAgICBvcHRpb25zOiBwcm9wcyA9PiAoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHRocmVhZElkOiBwcm9wcy50aHJlYWRJZCxcbiAgICAgICAgdGhyZWFkVHlwZTogcHJvcHMudXNlclR5cGUsXG4gICAgICB9LFxuICAgICAgc3NyOiBmYWxzZSxcbiAgICAgIC8vcG9sbEludGVydmFsOiA1MDAwLFxuICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgIH0pLFxuICB9KSxcbikoVmlld01lc3NhZ2UpO1xuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3TWVzc2FnZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVmlld01lc3NhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVmlld01lc3NhZ2UuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0IFZpZXdNZXNzYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlld01lc3NhZ2UnO1xuXG5jbGFzcyBWaWV3TWVzc2FnZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhyZWFkSWQsIHVzZXJUeXBlIH0gPSB0aGlzLnByb3BzO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYmdDb2xvcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgICAgICA8Vmlld01lc3NhZ2UgdGhyZWFkSWQ9e3RocmVhZElkfSB1c2VyVHlwZT17dXNlclR5cGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFZpZXdNZXNzYWdlQ29udGFpbmVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlckxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9Vc2VyTGF5b3V0JztcbmltcG9ydCBWaWV3TWVzc2FnZSBmcm9tICcuL1ZpZXdNZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL25vdEZvdW5kL05vdEZvdW5kJztcbmltcG9ydCB7IGxvYWRBY2NvdW50IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHJlc3RyaWN0VXJscyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYWRtaW5Qcml2aWxlZ2VzJztcblxuY29uc3QgdGl0bGUgPSAnVmlld01lc3NhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBzdG9yZSwgcGFyYW1zIH0pIHtcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2gobG9hZEFjY291bnQoKSk7XG4gIC8vIEZyb20gUmVkdXggU3RvcmVcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQXV0aGVudGljYXRlZDtcbiAgY29uc3QgaXNBZG1pbkF1dGhlbnRpY2F0ZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnJ1bnRpbWUuaXNBZG1pbkF1dGhlbnRpY2F0ZWQ7XG4gIGNvbnN0IGlzQWNjb3VudCA9IHN0b3JlLmdldFN0YXRlKCkuYWNjb3VudC5kYXRhO1xuICBsZXQgYWRtaW5Qcml2aWxlZ2VzID0gc3RvcmUuZ2V0U3RhdGUoKS5hZG1pblByZXZpbGVnZXMucHJpdmlsZWdlcyAmJiBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzLnByaXZpbGVnZXM7XG5cbiAgbGV0IHVzZXJCYW5TdGF0dXM7XG4gIGlmIChpc0FjY291bnQpIHtcbiAgICB1c2VyQmFuU3RhdHVzID0gaXNBY2NvdW50LnVzZXJCYW5TdGF0dXM7XG4gIH1cbiAgLy8gRnJvbSBVUkxcbiAgY29uc3QgdGhyZWFkSWQgPSBOdW1iZXIocGFyYW1zLnRocmVhZElkKTtcbiAgY29uc3QgdXNlclR5cGUgPSBwYXJhbXMudHlwZTtcblxuICBpZiAoIWlzQWRtaW5BdXRoZW50aWNhdGVkICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdDogJy9sb2dpbicgfTtcbiAgfVxuXG4gIC8vIEFkbWluIHJlc3RyaWN0aW9uXG4gIGlmIChpc0FkbWluQXV0aGVudGljYXRlZCAmJiAhcmVzdHJpY3RVcmxzKCcvbWVzc2FnZS8nLCBhZG1pblByaXZpbGVnZXMpKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluJyB9O1xuICB9XG5cbiAgaWYgKHVzZXJUeXBlICE9ICdob3N0JyAmJiB1c2VyVHlwZSAhPSAnZ3Vlc3QnIHx8IHVzZXJCYW5TdGF0dXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBjb21wb25lbnQ6IDxMYXlvdXQ+PE5vdEZvdW5kIHRpdGxlPXt0aXRsZX0gLz48L0xheW91dD4sXG4gICAgICBzdGF0dXM6IDQwNFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IDxVc2VyTGF5b3V0PjxWaWV3TWVzc2FnZVxuICAgICAgdGhyZWFkSWQ9e3RocmVhZElkfVxuICAgICAgdXNlclR5cGU9e3VzZXJUeXBlfVxuICAgIC8+XG4gICAgPC9Vc2VyTGF5b3V0PixcbiAgfTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFSQTtBQUNBO0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVRBO0FBRkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBWkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUF2Q0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBdUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQW5GQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFIQTtBQWFBO0FBQ0E7QUFGQTtBQUNBO0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBakJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFGQTtBQWdCQTtBQURBO0FBQ0E7QUFzREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6TkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQXlOQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXZMQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBdUxBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUEzRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQ0E7QUEyRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQXhCQTtBQUNBO0FBeUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakVBO0FBb0ZBO0FBQ0E7QUFwSEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFvSEE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBOzs7Ozs7OztBQ3JKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUE5REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFGQTtBQVVBO0FBREE7QUFDQTtBQXNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUF0REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBaURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFyR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBakJBO0FBSkE7QUFDQTtBQUZBO0FBMkJBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQTRFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBNURBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBRkE7QUFVQTtBQURBO0FBQ0E7QUFvREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUE1RkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQUNBO0FBNEZBO0FBQ0E7QUFFQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQW9DQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQTdTQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFZQTtBQUNBO0FBdkJBO0FBQ0E7QUFGQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBbVJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xWQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUEvR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBckJBO0FBQ0E7QUFGQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQXVGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUF4REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBQ0E7QUFGQTtBQWdCQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBMENBOzs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFkQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUF4UEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFOQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUExQ0E7QUFGQTtBQUpBO0FBQ0E7QUFGQTtBQTZEQTtBQURBO0FBQ0E7QUE0TEE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQUZBOzs7Ozs7O0FDNVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBUUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==