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
        lineNumber: 75,
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
        lineNumber: 85,
        columnNumber: 11
      }
    }), superSymbol && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3ZpZXdNZXNzYWdlLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3ZpZXdNZXNzYWdlL1ZpZXdNZXNzYWdlLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9TaXRlSWNvbnMvY2hhdC5wbmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9SZXNlcnZhdGlvbi91cGRhdGVSZXNlcnZhdGlvbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2Jvb2tpbmcvYm9va2luZ1Byb2Nlc3MuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9tZXNzYWdlL3NlbmRNZXNzYWdlQWN0aW9uLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvQ291bnREb3duL0NvdW50RG93bi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0NvdW50RG93bi9EYXRlQmV0d2Vlbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5Q29udmVydGVyL0N1cnJlbmN5Q29udmVydGVyLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL0FjdGlvbkJsb2NrL0FjdGlvbkJsb2NrLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvQWN0aW9uQmxvY2svR3Vlc3RBY3Rpb25zLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvQWN0aW9uQmxvY2svSG9zdEFjdGlvbnMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9HZXRNb3JlVGhyZWFkSXRlbXNRdWVyeS5ncmFwaHFsIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvR2V0VGhyZWFkUXVlcnkuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL0d1ZXN0SG9zdERldGFpbHMvR3Vlc3RIb3N0RGV0YWlscy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1NlbmRNZXNzYWdlL1NlbmRNZXNzYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvU2VuZE1lc3NhZ2Uvc3VibWl0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvU2VuZE1lc3NhZ2UvdmFsaWRhdGUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9UaHJlYWRJdGVtcy9Gcm9tTWVzc2FnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1RocmVhZEl0ZW1zL1N0YXR1cy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1RocmVhZEl0ZW1zL1RocmVhZEl0ZW1zLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVGhyZWFkSXRlbXMvVG9NZXNzYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVHJpcERldGFpbHMvQ2FuY2VsRGV0YWlscy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1ZpZXdNZXNzYWdlL1RyaXBEZXRhaWxzL1BheW1lbnREZXRhaWxzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVHJpcERldGFpbHMvVHJpcERldGFpbHMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9Vc2VyRGV0YWlsL1VzZXJEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVmlld01lc3NhZ2UuY3NzPzNiNjYiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9WaWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3ZpZXdNZXNzYWdlL1ZpZXdNZXNzYWdlLmNzcz8zMmVjIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy92aWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvdmlld01lc3NhZ2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5WaWV3TWVzc2FnZS1lcnJvck1lc3NhZ2UtMXMwOE4ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZTEtMjBGc2kge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2UyLTJNdXh5IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZTMtMkJFbjQge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlNC1ZLVl6eiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2U1LWk3R0tFIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZTYtM2JLSjkge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlNy0yQ0kyMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3A4LWlGcllMIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZVRvcDEtMjI0cVoge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3AyLTJXNmtSIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZVRvcDMtMVNCRGcge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlVG9wNC0xOVZoaCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3A1LTJCczMtIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1zcGFjZVRvcDYtM3lEcWIge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXNwYWNlVG9wNy1jcm8tVyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utc3BhY2VUb3A4LWlGcllMIHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1ub01hcmdpbi1DVVMxciB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmcxLWctM0FhIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nMi0xR0lFWiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmczLTFvOU9yIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZzQtM3FOdkIge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nNS1uaVR4RSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmc2LTFHR0hrIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZzctMlMwMTIge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nVG9wMS0xU3B6SyB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZ1RvcDItMlduVUUge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nVG9wMy0zQV9PdiB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmdUb3A0LXhxd1ZZIHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFkZGluZ1RvcDUtLVZtUjgge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nVG9wNi0xcHVBLSB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhZGRpbmdUb3A3LTJ5OE9lIHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2Utbm9QYWRkaW5nLTE4Q2NqIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRCb2xkLVY0LXFDIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Qm9sZGVyLWVjZkxOIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Tm9ybWFsLTFVeklrIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5WaWV3TWVzc2FnZS10ZXh0RGFya0JsdWUtMVRZbHQge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRMaWdodEJsdWUtM29XMHoge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0yOHFLeSB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dExpZ2h0QnJvd24tM0VfbUUge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0TWVkaXVtTWFyb29uLWVmRC1XIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0QnJvd24tMmFLMm0ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0TWFyb29uLTJQTUxSIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dERhcmtCcm93bi0zMFZMTyB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dE1lZGl1bUJyb3duLVppeENUIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dFNreUJsdWUtMUFjTVEge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEdyYXktMXRqZ00ge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDb21tb24gU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1idG5SYWRpdXMtM1oxMUkge1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLlZpZXdNZXNzYWdlLWxpbmtCdG4tM1dBR0oge1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRwYWRkaW5nOiA5cHggMjFweDtcXG59XFxuLlZpZXdNZXNzYWdlLW5vTWFyZ2luLUNVUzFyIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuLlZpZXdNZXNzYWdlLW5vQm9yZGVyLTFCZC12IHtcXG5cXHRib3JkZXI6IDBweCBub25lICFpbXBvcnRhbnQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQ29tbW9uIFN0eWxlcyBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipTaWRlbmF2aWdhdGlvbiBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLlZpZXdNZXNzYWdlLXNpZGViYXJEZXNpZ24tM3pkMXUge1xcblxcdHBhZGRpbmc6IDUwcHggMCAzMHB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbi5WaWV3TWVzc2FnZS1zaWRlYmFyQ29udGFpbmVyLTFZeWNQIHtcXG5cXHRwYWRkaW5nOiAwIDM1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Q2VudGVyLTM2Y0lUIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5WaWV3TWVzc2FnZS1wcm9maWxlQXZhdGFyU2VjdGlvbi1RSkQ2YyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhckxpbmstcTNIZTYge1xcblxcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdCAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZU5hbWUtM3VhWV8ge1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG59XFxuLlZpZXdNZXNzYWdlLXByb2ZpbGVEZXRhaWwtMlRYamUge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRjb2xvcjogIzc2NzY3NjtcXG59XFxuLlZpZXdNZXNzYWdlLWhvcml6b250YWxMaW5lLTJ4NU9qIHtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCAjOWI5YjliO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEdyYXktMXRqZ00ge1xcblxcdGNvbG9yOiAjOWI5YjliO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEJvbGQtVjQtcUMge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dExlZnQtM2twMzQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0UmlnaHQtMUF1OUsge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlNpZGVuYXZpZ2F0aW9uIFN0eWxlcyBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipNZXNzYWdlIFN0eWxlcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uVmlld01lc3NhZ2UtY29udGV4dFBhZGRpbmctM01SSUgge1xcblxcdHBhZGRpbmctdG9wOiA4cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDE0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuLlZpZXdNZXNzYWdlLXJvd0NvbmRlbnNlZC0xbVkwSSB7XFxuXFx0bWFyZ2luLWxlZnQ6IC02cHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAtNnB4O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dEJvZHktM2F5ZU0ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5WaWV3TWVzc2FnZS1ib3R0b21CdXR0b24tMzNUQmkge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0Qm94LVotT0tjIHtcXG5cXHRoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5WaWV3TWVzc2FnZS1idG5SaWdodC0xNV9EWCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5WaWV3TWVzc2FnZS1wYW5lbERhcmstMVBxbGYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlY2YwZWM7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG4uVmlld01lc3NhZ2UtdGltZVRleHQtMk1yUE0ge1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcbn1cXG4uVmlld01lc3NhZ2UtdGltZVRleHQtMk1yUE06aG92ZXIsXFxuLlZpZXdNZXNzYWdlLXRpbWVUZXh0LTJNclBNOmZvY3VzIHtcXG5cXHRjb2xvcjogIzc2NzY3NjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDaGF0IGJ1YmJsZSBSaWdodCAmIExlZnQgU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1wYW5lbFF1b3RlLTE3ZElyIHtcXG5cXHRtYXJnaW4tbGVmdDogMDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhbmVsQnViYmxlLW5JTVdZIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5WaWV3TWVzc2FnZS1wYW5lbEJ1YmJsZUxlZnQtM1NJNlM6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdGJvdHRvbTogYXV0bztcXG5cXHRib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWxlZnQ6IDA7XFxuXFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xcblxcdHRvcDogMHB4O1xcblxcdGxlZnQ6IGluaXRpYWw7XFxuXFx0cmlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDI0cHggMjRweCAwO1xcblxcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLlZpZXdNZXNzYWdlLXBhbmVsQnViYmxlTGVmdC0zU0k2Uzo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdGxlZnQ6IC0yMHB4O1xcblxcdHJpZ2h0OiBhdXRvO1xcblxcdHRvcDogMHB4O1xcblxcdGJvdHRvbTogYXV0bztcXG5cXHRib3JkZXItd2lkdGg6IDAgMjJweCAyMnB4IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoUzo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAtMzNweDtcXG5cXHR0b3A6IDBweDtcXG5cXHRsZWZ0OiAxMDAlO1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItd2lkdGg6IDI1cHggMjVweCAwIDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoUzo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcgJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdGxlZnQ6IC0yMHB4O1xcblxcdHJpZ2h0OiBhdXRvO1xcblxcdHRvcDogMHB4O1xcblxcdGJvdHRvbTogYXV0bztcXG5cXHRib3JkZXItd2lkdGg6IDAgMjVweCAyNXB4IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZGNlMGUwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4uVmlld01lc3NhZ2UtcmFkaXVzQ29sb3ItM2ptdkI6OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IC00M3B4O1xcblxcdHRvcDogLTFweDtcXG5cXHRsZWZ0OiBhdXRvO1xcblxcdHdpZHRoOiA0M3B4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRiYWNrZ3JvdW5kOiAjRjdGQUZGO1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XFxuXFx0ei1pbmRleDogMztcXG59XFxuLlZpZXdNZXNzYWdlLXJhZGl1c0NvbG9yVHdvLTVoYXBlOjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IC0zN3B4O1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogYXV0bztcXG5cXHR3aWR0aDogMzhweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0YmFja2dyb3VuZDogI0Y3RkFGRjtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xcblxcdHotaW5kZXg6IDM7XFxufVxcbi5WaWV3TWVzc2FnZS1wYW5lbFRleHQtM1RBMkMge1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkNoYXQgYnViYmxlIFJpZ2h0ICYgTGVmdCBTdHlsZXMgZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqTm90aWZpY2F0aW9uIE1lc3NhZ2UgU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1pbmxpbmVTdGF0dXMtMU45ZGwge1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5WaWV3TWVzc2FnZS1ob3Jpem9udGFsVGV4dC0zOEkxViB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0V3JhcHBlci0ySEN6cSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dFdyYXBwZXItMkhDenE6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRyaWdodDogMTAwJTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS10ZXh0V3JhcHBlci0ySEN6cTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogMTAwJTtcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipOb3RpZmljYXRpb24gTWVzc2FnZSBTdHlsZXMgZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5WaWV3TWVzc2FnZS1ob3Jpem9uZGFsTGluZS0zVDlNZCB7XFxuXFx0bWFyZ2luLXRvcDogMTVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRMZWZ0LTNrcDM0IHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uVmlld01lc3NhZ2UtdGV4dFJpZ2h0LTFBdTlLIHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLlZpZXdNZXNzYWdlLXRleHRHcmF5LTF0amdNIHtcXG5cXHRjb2xvcjogIzliOWI5YjtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1jaGV2cm9uSWNvbi0ycEY5WCB7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4uVmlld01lc3NhZ2UtdGltZXJJY29uLTNWdW9zIHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4uVmlld01lc3NhZ2UtY2hlY2tJbkRhdGUtM1EtNDQge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG59XFxuLlZpZXdNZXNzYWdlLXB1bGxMZWZ0LTIwMVhFIHtcXG5cXHRmbG9hdDogbGVmdDtcXG59XFxuLlZpZXdNZXNzYWdlLXB1bGxSaWdodC0yVjJQMyB7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4vKiogRGlzY291bnQgKiovXFxuLlZpZXdNZXNzYWdlLWRpc2NvdW50VGV4dC0yQTFXdSB7XFxuXFx0Y29sb3I6ICMzZmIzNGY7XFxufVxcbmEsXFxuYTpob3ZlcixcXG5hOmZvY3VzLFxcbmE6YWN0aXZlIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5WaWV3TWVzc2FnZS1wYWRkaW5nUmlnaHQtMlFaWEIge1xcblxcdHBhZGRpbmc6IDAgMCAwIDM1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGUtMW5HSkwge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlUm93LTJ2YllLIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVDZWxsLTJJbTlhIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aC1SUlZkdSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhclNlY3Rpb24tUUpENmMge1xcblxcdG1hcmdpbjogMCAwIDAgNnB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG4uVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlQ2VsbFRvcC0xNEkwRyB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhclNlY3Rpb25MZWZ0LTJNZFdYIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNTtcXG5cXHRtYXJnaW46IDBweCA2cHggMCAwcHg7XFxufVxcbi5WaWV3TWVzc2FnZS1ndWVzdEhvc3QtMWpiMU8ge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweCAwO1xcbn1cXG4uVmlld01lc3NhZ2UtaG9zdENoYXQtM2t3U2wge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uVmlld01lc3NhZ2UtaG9zdENoYXQtM2t3U2wgaW1nIHtcXG5cXHR3aWR0aDogMTEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi5WaWV3TWVzc2FnZS1jZW50ZXJDaGF0SWNvbi0yMkFVYyB7XFxuXFx0aGVpZ2h0OiA0NXB4O1xcblxcdHdpZHRoOiA0NXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAtMjBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlZpZXdNZXNzYWdlLWljb25CRy0ydW44QiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuXFx0Ym9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0d2lkdGg6IDQ1cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1pY29uQkctMnVuOEIgaW1nIHtcXG5cXHR3aWR0aDogNjUlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwYWRkaW5nOiA5cHggMCAwIDBcXG59XFxuLlZpZXdNZXNzYWdlLWhvc3ROYW1lLU84MUc3IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdHdpZHRoOiAyMCU7XFxuXFx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0ICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uVmlld01lc3NhZ2UtaW5zdGFudEljb24tMjhoZjIge1xcblxcdG1hcmdpbi10b3A6IC00cHg7XFxufVxcbi5WaWV3TWVzc2FnZS1wb3NpdGlvblItMm1aTWEge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LlZpZXdNZXNzYWdlLW5vUGFkZGluZ1JpZ2h0LTNPOTZ4IHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtaG9zdENoYXQtM2t3U2wgaW1nIHtcXG5cXHRcXHR3aWR0aDogOTVweDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWljb25CRy0ydW44QiBpbWcge1xcblxcdFxcdHBhZGRpbmc6IDhweCAwIDAgMDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWljb25CRy0ydW44QiB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtY2VudGVyQ2hhdEljb24tMjJBVWMge1xcblxcdFxcdGhlaWdodDogNDBweDtcXG5cXHRcXHR3aWR0aDogNDBweDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWhvc3ROYW1lLU84MUc3IHtcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcdFxcdC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdFxcdCAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLWhvc3ROYW1lQ29sb3ItMWgwZ3cge1xcblxcdFxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVmlld01lc3NhZ2UtcGFkZGluZ1JpZ2h0LTJRWlhCIHtcXG5cXHRcXHRwYWRkaW5nOiAwIDAgMCAwO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoUzo6YmVmb3JlIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcGFuZWxCdWJibGVMZWZ0LTNTSTZTOjpiZWZvcmUge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1wYW5lbEJ1YmJsZVJpZ2h0LTlGMmhTOjphZnRlciB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLXBhbmVsQnViYmxlTGVmdC0zU0k2Uzo6YWZ0ZXIge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1wcm9maWxlQXZhdGFyTGluay1xM0hlNiBpbWcge1xcblxcdFxcdHdpZHRoOiA2MHB4O1xcblxcdFxcdGhlaWdodDogNjBweDtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLXByb2ZpbGVBdmF0YXJTZWN0aW9uLVFKRDZjIHtcXG5cXHRcXHRtYXJnaW46IDAgMCAwIDEzcHg7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aC1SUlZkdSB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdC5WaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aFR3by0yN2FYYyB7XFxuXFx0XFx0d2lkdGg6IDIwJTtcXG5cXHR9XFxuXFx0LlZpZXdNZXNzYWdlLXByb2ZpbGVBdmF0YXJTZWN0aW9uTGVmdC0yTWRXWCB7XFxuXFx0XFx0bWFyZ2luOiAwIDEwcHggMCAwO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR6LWluZGV4OiA1O1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcmFkaXVzQ29sb3ItM2ptdkI6OmFmdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtcmFkaXVzQ29sb3JUd28tNWhhcGU6OmFmdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQuVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlQ2VsbC0ySW05YSB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRcXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQuVmlld01lc3NhZ2UtaGlkZVNtLTFGTi1TIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG5cXHQuVmlld01lc3NhZ2Utc2lkZWJhckNvbnRhaW5lci0xWXljUCB7XFxuXFx0XFx0cGFkZGluZzogMCAyNXB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuXFx0LlZpZXdNZXNzYWdlLW5vUGFkZGluZ1JpZ2h0LTNPOTZ4IHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAwO1xcblxcdH1cXG59XFxuLlZpZXdNZXNzYWdlLWRpc3BsYXlGbGV4LWtSSUpSIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvVmlld01lc3NhZ2UvVmlld01lc3NhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNELDJCQUEyQjtBQUMzQjtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Qsd0ZBQXdGO0FBQ3hGO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNELHNGQUFzRjtBQUN0RixnR0FBZ0c7QUFDaEc7Q0FDQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZjtBQUNEO0NBQ0Msb0NBQW9DO1NBQzVCLDRCQUE0QjtDQUNwQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Y7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Y7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsVUFBVTtDQUNWLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCO0FBQ0QsOEZBQThGO0FBQzlGLHlGQUF5RjtBQUN6RjtDQUNDLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsVUFBVTtDQUNWLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Q7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osY0FBYztDQUNkLHlCQUF5QjtTQUNqQixpQkFBaUI7Q0FDekI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLFVBQVU7Q0FDVjtBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7O0NBRUMsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2Q7QUFDRCwwR0FBMEc7QUFDMUc7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsVUFBVTtDQUNWLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1QsY0FBYztDQUNkLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsdURBQXVEO0NBQ3ZEO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsWUFBWTtDQUNaLFlBQVk7Q0FDWixTQUFTO0NBQ1QsYUFBYTtDQUNiLDRCQUE0QjtDQUM1Qix1REFBdUQ7Q0FDdkQ7QUFDRDtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixTQUFTO0NBQ1QsV0FBVztDQUNYLCtCQUErQjtDQUMvQix3QkFBd0I7Q0FDeEIsNEJBQTRCO0NBQzVCLDJDQUEyQztDQUMzQztBQUNEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsVUFBVTtDQUNWLFlBQVk7Q0FDWixZQUFZO0NBQ1osU0FBUztDQUNULGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsMERBQTBEO0NBQzFEO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3QixpQ0FBaUM7Q0FDakMsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixPQUFPO0NBQ1AsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLDhCQUE4QjtDQUM5QixnQ0FBZ0M7Q0FDaEMsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakM7QUFDRCx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYixTQUFTO0NBQ1QsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCO0FBQ0Qsb0dBQW9HO0FBQ3BHO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixVQUFVO0NBQ1YsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCxnQkFBZ0I7QUFDaEI7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDs7OztDQUlDLHNCQUFzQjtDQUN0QjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWDtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1o7QUFDRDtDQUNDLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsMkJBQTJCO0lBQ3hCLHdCQUF3QjtDQUMzQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaO0NBQ0Q7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaO0NBQ0Q7RUFDQyxXQUFXO0VBQ1gsMkJBQTJCO0tBQ3hCLHdCQUF3QjtFQUMzQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQywwQkFBMEI7RUFDMUI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtFQUNDLFdBQVc7RUFDWDtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1g7Q0FDRDtFQUNDLGNBQWM7RUFDZDtDQUNEO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCO0NBQ0Q7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsY0FBYztDQUNkXCIsXCJmaWxlXCI6XCJWaWV3TWVzc2FnZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLmVycm9yTWVzc2FnZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkNvbW1vbiBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmJ0blJhZGl1cyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4ubGlua0J0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdHBhZGRpbmc6IDlweCAyMXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDb21tb24gU3R5bGVzIGVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlNpZGVuYXZpZ2F0aW9uIFN0eWxlcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uc2lkZWJhckRlc2lnbiB7XFxuXFx0cGFkZGluZzogNTBweCAwIDMwcHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuLnNpZGViYXJDb250YWluZXIge1xcblxcdHBhZGRpbmc6IDAgMzVweDtcXG59XFxuLnRleHRDZW50ZXIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByb2ZpbGVBdmF0YXJTZWN0aW9uIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcbi5wcm9maWxlQXZhdGFyTGluayB7XFxuXFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0ICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi5wcm9maWxlTmFtZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4ucHJvZmlsZURldGFpbCB7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcbn1cXG4uaG9yaXpvbnRhbExpbmUge1xcblxcdG1hcmdpbi10b3A6IDE1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICM5YjliOWI7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6ICM5YjliOWI7XFxufVxcbi50ZXh0Qm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50ZXh0TGVmdCB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnRleHRSaWdodCB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqU2lkZW5hdmlnYXRpb24gU3R5bGVzIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKk1lc3NhZ2UgU3R5bGVzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jb250ZXh0UGFkZGluZyB7XFxuXFx0cGFkZGluZy10b3A6IDhweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTRweDtcXG5cXHRib3JkZXItcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG4ucm93Q29uZGVuc2VkIHtcXG5cXHRtYXJnaW4tbGVmdDogLTZweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IC02cHg7XFxufVxcbi50ZXh0Qm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmJvdHRvbUJ1dHRvbiB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuLnRleHRCb3gge1xcblxcdGhlaWdodDogODBweCAhaW1wb3J0YW50O1xcblxcdGJvcmRlcjogMHB4O1xcblxcdG1hcmdpbi10b3A6IDA7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcblxcdCAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmJ0blJpZ2h0IHtcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLnBhbmVsRGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZjBlYztcXG5cXHRtYXJnaW46IDA7XFxufVxcbi50aW1lVGV4dCB7XFxuXFx0Y29sb3I6ICM3Njc2NzY7XFxufVxcbi50aW1lVGV4dDpob3ZlcixcXG4udGltZVRleHQ6Zm9jdXMge1xcblxcdGNvbG9yOiAjNzY3Njc2O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkNoYXQgYnViYmxlIFJpZ2h0ICYgTGVmdCBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnBhbmVsUXVvdGUge1xcblxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdG1hcmdpbi1yaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4ucGFuZWxCdWJibGUge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnBhbmVsQnViYmxlTGVmdDo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiAnICc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0Ym90dG9tOiBhdXRvO1xcblxcdGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItbGVmdDogMDtcXG5cXHRib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XFxuXFx0dG9wOiAwcHg7XFxuXFx0bGVmdDogaW5pdGlhbDtcXG5cXHRyaWdodDogMTAwJTtcXG5cXHRib3JkZXItd2lkdGg6IDAgMjRweCAyNHB4IDA7XFxuXFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG4ucGFuZWxCdWJibGVMZWZ0OjphZnRlciB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0bGVmdDogLTIwcHg7XFxuXFx0cmlnaHQ6IGF1dG87XFxuXFx0dG9wOiAwcHg7XFxuXFx0Ym90dG9tOiBhdXRvO1xcblxcdGJvcmRlci13aWR0aDogMCAyMnB4IDIycHggMDtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5wYW5lbEJ1YmJsZVJpZ2h0OjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IC0zM3B4O1xcblxcdHRvcDogMHB4O1xcblxcdGxlZnQ6IDEwMCU7XFxuXFx0Ym9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci13aWR0aDogMjVweCAyNXB4IDAgMDtcXG5cXHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5wYW5lbEJ1YmJsZVJpZ2h0OjphZnRlciB7XFxuXFx0Y29udGVudDogJyAnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0bGVmdDogLTIwcHg7XFxuXFx0cmlnaHQ6IGF1dG87XFxuXFx0dG9wOiAwcHg7XFxuXFx0Ym90dG9tOiBhdXRvO1xcblxcdGJvcmRlci13aWR0aDogMCAyNXB4IDI1cHggMDtcXG5cXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNkY2UwZTAgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5yYWRpdXNDb2xvcjo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogLTQzcHg7XFxuXFx0dG9wOiAtMXB4O1xcblxcdGxlZnQ6IGF1dG87XFxuXFx0d2lkdGg6IDQzcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJhY2tncm91bmQ6ICNGN0ZBRkY7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcXG5cXHR6LWluZGV4OiAzO1xcbn1cXG4ucmFkaXVzQ29sb3JUd286OmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogLTM3cHg7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiBhdXRvO1xcblxcdHdpZHRoOiAzOHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRiYWNrZ3JvdW5kOiAjRjdGQUZGO1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XFxuXFx0ei1pbmRleDogMztcXG59XFxuLnBhbmVsVGV4dCB7XFxuXFx0d29yZC1icmVhazogYnJlYWstYWxsICFpbXBvcnRhbnQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqQ2hhdCBidWJibGUgUmlnaHQgJiBMZWZ0IFN0eWxlcyBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKipOb3RpZmljYXRpb24gTWVzc2FnZSBTdHlsZXMgc3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmlubGluZVN0YXR1cyB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmhvcml6b250YWxUZXh0IHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRleHRXcmFwcGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZXh0V3JhcHBlcjo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdHRvcDogNTAlO1xcblxcdHJpZ2h0OiAxMDAlO1xcblxcdG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLnRleHRXcmFwcGVyOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiAxMDAlO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKk5vdGlmaWNhdGlvbiBNZXNzYWdlIFN0eWxlcyBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmhvcml6b25kYWxMaW5lIHtcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGV4dExlZnQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi50ZXh0UmlnaHQge1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiAjOWI5YjliO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNoZXZyb25JY29uIHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi50aW1lckljb24ge1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5jaGVja0luRGF0ZSB7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4ucHVsbExlZnQge1xcblxcdGZsb2F0OiBsZWZ0O1xcbn1cXG4ucHVsbFJpZ2h0IHtcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi8qKiBEaXNjb3VudCAqKi9cXG4uZGlzY291bnRUZXh0IHtcXG5cXHRjb2xvcjogIzNmYjM0ZjtcXG59XFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnBhZGRpbmdSaWdodCB7XFxuXFx0cGFkZGluZzogMCAwIDAgMzVweDtcXG59XFxuLmRpc3BsYXlUYWJsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5kaXNwbGF5VGFibGVSb3cge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLmRpc3BsYXlUYWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmRpc3BsYXlUYWJsZVdpZHRoIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9maWxlQXZhdGFyU2VjdGlvbiB7XFxuXFx0bWFyZ2luOiAwIDAgMCA2cHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDU7XFxufVxcbi5kaXNwbGF5VGFibGVDZWxsVG9wIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5wcm9maWxlQXZhdGFyU2VjdGlvbkxlZnQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA1O1xcblxcdG1hcmdpbjogMHB4IDZweCAwIDBweDtcXG59XFxuLmd1ZXN0SG9zdCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDI1cHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5ob3N0Q2hhdCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5ob3N0Q2hhdCBpbWcge1xcblxcdHdpZHRoOiAxMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuLmNlbnRlckNoYXRJY29uIHtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0d2lkdGg6IDQ1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xcblxcdG1hcmdpbi1yaWdodDogLTIwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uaWNvbkJHIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2NjYztcXG5cXHRib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGhlaWdodDogNDVweDtcXG5cXHR3aWR0aDogNDVweDtcXG59XFxuLmljb25CRyBpbWcge1xcblxcdHdpZHRoOiA2NSU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBhZGRpbmc6IDlweCAwIDAgMFxcbn1cXG4uaG9zdE5hbWUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0d2lkdGg6IDIwJTtcXG5cXHQtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHQgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5pbnN0YW50SWNvbiB7XFxuXFx0bWFyZ2luLXRvcDogLTRweDtcXG59XFxuLnBvc2l0aW9uUiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQubm9QYWRkaW5nUmlnaHQge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0fVxcblxcdC5ob3N0Q2hhdCBpbWcge1xcblxcdFxcdHdpZHRoOiA5NXB4O1xcblxcdH1cXG5cXHQuaWNvbkJHIGltZyB7XFxuXFx0XFx0cGFkZGluZzogOHB4IDAgMCAwO1xcblxcdH1cXG5cXHQuaWNvbkJHIHtcXG5cXHRcXHRoZWlnaHQ6IDQwcHg7XFxuXFx0XFx0d2lkdGg6IDQwcHg7XFxuXFx0fVxcblxcdC5jZW50ZXJDaGF0SWNvbiB7XFxuXFx0XFx0aGVpZ2h0OiA0MHB4O1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdH1cXG5cXHQuaG9zdE5hbWUge1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFx0XFx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0XFx0ICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdH1cXG5cXHQuaG9zdE5hbWVDb2xvciB7XFxuXFx0XFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWRkaW5nUmlnaHQge1xcblxcdFxcdHBhZGRpbmc6IDAgMCAwIDA7XFxuXFx0fVxcblxcdC5wYW5lbEJ1YmJsZVJpZ2h0OjpiZWZvcmUge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5wYW5lbEJ1YmJsZUxlZnQ6OmJlZm9yZSB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0LnBhbmVsQnViYmxlUmlnaHQ6OmFmdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXHQucGFuZWxCdWJibGVMZWZ0OjphZnRlciB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFx0LnByb2ZpbGVBdmF0YXJMaW5rIGltZyB7XFxuXFx0XFx0d2lkdGg6IDYwcHg7XFxuXFx0XFx0aGVpZ2h0OiA2MHB4O1xcblxcdH1cXG5cXHQucHJvZmlsZUF2YXRhclNlY3Rpb24ge1xcblxcdFxcdG1hcmdpbjogMCAwIDAgMTNweDtcXG5cXHR9XFxuXFx0LmRpc3BsYXlUYWJsZVdpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0LmRpc3BsYXlUYWJsZVdpZHRoVHdvIHtcXG5cXHRcXHR3aWR0aDogMjAlO1xcblxcdH1cXG5cXHQucHJvZmlsZUF2YXRhclNlY3Rpb25MZWZ0IHtcXG5cXHRcXHRtYXJnaW46IDAgMTBweCAwIDA7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHotaW5kZXg6IDU7XFxuXFx0fVxcblxcdC5yYWRpdXNDb2xvcjo6YWZ0ZXIge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5yYWRpdXNDb2xvclR3bzo6YWZ0ZXIge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcdC5kaXNwbGF5VGFibGVDZWxsIHtcXG5cXHRcXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdFxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC5oaWRlU20ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xcblxcdC5zaWRlYmFyQ29udGFpbmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwIDI1cHg7XFxuXFx0fVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcXG5cXHQubm9QYWRkaW5nUmlnaHQge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0fVxcbn1cXG4uZGlzcGxheUZsZXgge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJWaWV3TWVzc2FnZS1lcnJvck1lc3NhZ2UtMXMwOE5cIixcblx0XCJzcGFjZTFcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTEtMjBGc2lcIixcblx0XCJzcGFjZTJcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTItMk11eHlcIixcblx0XCJzcGFjZTNcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTMtMkJFbjRcIixcblx0XCJzcGFjZTRcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTQtWS1ZenpcIixcblx0XCJzcGFjZTVcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTUtaTdHS0VcIixcblx0XCJzcGFjZTZcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTYtM2JLSjlcIixcblx0XCJzcGFjZTdcIjogXCJWaWV3TWVzc2FnZS1zcGFjZTctMkNJMjFcIixcblx0XCJzcGFjZVRvcDhcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDgtaUZyWUxcIixcblx0XCJzcGFjZVRvcDFcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDEtMjI0cVpcIixcblx0XCJzcGFjZVRvcDJcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDItMlc2a1JcIixcblx0XCJzcGFjZVRvcDNcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDMtMVNCRGdcIixcblx0XCJzcGFjZVRvcDRcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDQtMTlWaGhcIixcblx0XCJzcGFjZVRvcDVcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDUtMkJzMy1cIixcblx0XCJzcGFjZVRvcDZcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDYtM3lEcWJcIixcblx0XCJzcGFjZVRvcDdcIjogXCJWaWV3TWVzc2FnZS1zcGFjZVRvcDctY3JvLVdcIixcblx0XCJub01hcmdpblwiOiBcIlZpZXdNZXNzYWdlLW5vTWFyZ2luLUNVUzFyXCIsXG5cdFwicGFkZGluZzFcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nMS1nLTNBYVwiLFxuXHRcInBhZGRpbmcyXCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZzItMUdJRVpcIixcblx0XCJwYWRkaW5nM1wiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmczLTFvOU9yXCIsXG5cdFwicGFkZGluZzRcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nNC0zcU52QlwiLFxuXHRcInBhZGRpbmc1XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZzUtbmlUeEVcIixcblx0XCJwYWRkaW5nNlwiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmc2LTFHR0hrXCIsXG5cdFwicGFkZGluZzdcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nNy0yUzAxMlwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1RvcDEtMVNwektcIixcblx0XCJwYWRkaW5nVG9wMlwiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmdUb3AyLTJXblVFXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nVG9wMy0zQV9PdlwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1RvcDQteHF3VllcIixcblx0XCJwYWRkaW5nVG9wNVwiOiBcIlZpZXdNZXNzYWdlLXBhZGRpbmdUb3A1LS1WbVI4XCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJWaWV3TWVzc2FnZS1wYWRkaW5nVG9wNi0xcHVBLVwiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1RvcDctMnk4T2VcIixcblx0XCJub1BhZGRpbmdcIjogXCJWaWV3TWVzc2FnZS1ub1BhZGRpbmctMThDY2pcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIlZpZXdNZXNzYWdlLXRleHRCb2xkLVY0LXFDXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIlZpZXdNZXNzYWdlLXRleHRCb2xkZXItZWNmTE5cIixcblx0XCJ0ZXh0Tm9ybWFsXCI6IFwiVmlld01lc3NhZ2UtdGV4dE5vcm1hbC0xVXpJa1wiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIlZpZXdNZXNzYWdlLXRleHREYXJrQmx1ZS0xVFlsdFwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJWaWV3TWVzc2FnZS10ZXh0TGlnaHRCbHVlLTNvVzB6XCIsXG5cdFwidGV4dExpZ2h0U2FuZGxlR3JlZW5cIjogXCJWaWV3TWVzc2FnZS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0yOHFLeVwiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiVmlld01lc3NhZ2UtdGV4dExpZ2h0QnJvd24tM0VfbUVcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiVmlld01lc3NhZ2UtdGV4dE1lZGl1bU1hcm9vbi1lZkQtV1wiLFxuXHRcInRleHRCcm93blwiOiBcIlZpZXdNZXNzYWdlLXRleHRCcm93bi0yYUsybVwiLFxuXHRcInRleHRNYXJvb25cIjogXCJWaWV3TWVzc2FnZS10ZXh0TWFyb29uLTJQTUxSXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIlZpZXdNZXNzYWdlLXRleHREYXJrQnJvd24tMzBWTE9cIixcblx0XCJ0ZXh0TWVkaXVtQnJvd25cIjogXCJWaWV3TWVzc2FnZS10ZXh0TWVkaXVtQnJvd24tWml4Q1RcIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIlZpZXdNZXNzYWdlLXRleHRTa3lCbHVlLTFBY01RXCIsXG5cdFwidGV4dEdyYXlcIjogXCJWaWV3TWVzc2FnZS10ZXh0R3JheS0xdGpnTVwiLFxuXHRcImJ0blJhZGl1c1wiOiBcIlZpZXdNZXNzYWdlLWJ0blJhZGl1cy0zWjExSVwiLFxuXHRcImxpbmtCdG5cIjogXCJWaWV3TWVzc2FnZS1saW5rQnRuLTNXQUdKXCIsXG5cdFwibm9Cb3JkZXJcIjogXCJWaWV3TWVzc2FnZS1ub0JvcmRlci0xQmQtdlwiLFxuXHRcInNpZGViYXJEZXNpZ25cIjogXCJWaWV3TWVzc2FnZS1zaWRlYmFyRGVzaWduLTN6ZDF1XCIsXG5cdFwic2lkZWJhckNvbnRhaW5lclwiOiBcIlZpZXdNZXNzYWdlLXNpZGViYXJDb250YWluZXItMVl5Y1BcIixcblx0XCJ0ZXh0Q2VudGVyXCI6IFwiVmlld01lc3NhZ2UtdGV4dENlbnRlci0zNmNJVFwiLFxuXHRcInByb2ZpbGVBdmF0YXJTZWN0aW9uXCI6IFwiVmlld01lc3NhZ2UtcHJvZmlsZUF2YXRhclNlY3Rpb24tUUpENmNcIixcblx0XCJwcm9maWxlQXZhdGFyTGlua1wiOiBcIlZpZXdNZXNzYWdlLXByb2ZpbGVBdmF0YXJMaW5rLXEzSGU2XCIsXG5cdFwicHJvZmlsZU5hbWVcIjogXCJWaWV3TWVzc2FnZS1wcm9maWxlTmFtZS0zdWFZX1wiLFxuXHRcInByb2ZpbGVEZXRhaWxcIjogXCJWaWV3TWVzc2FnZS1wcm9maWxlRGV0YWlsLTJUWGplXCIsXG5cdFwiaG9yaXpvbnRhbExpbmVcIjogXCJWaWV3TWVzc2FnZS1ob3Jpem9udGFsTGluZS0yeDVPalwiLFxuXHRcInRleHRMZWZ0XCI6IFwiVmlld01lc3NhZ2UtdGV4dExlZnQtM2twMzRcIixcblx0XCJ0ZXh0UmlnaHRcIjogXCJWaWV3TWVzc2FnZS10ZXh0UmlnaHQtMUF1OUtcIixcblx0XCJjb250ZXh0UGFkZGluZ1wiOiBcIlZpZXdNZXNzYWdlLWNvbnRleHRQYWRkaW5nLTNNUklIXCIsXG5cdFwicm93Q29uZGVuc2VkXCI6IFwiVmlld01lc3NhZ2Utcm93Q29uZGVuc2VkLTFtWTBJXCIsXG5cdFwidGV4dEJvZHlcIjogXCJWaWV3TWVzc2FnZS10ZXh0Qm9keS0zYXllTVwiLFxuXHRcImJvdHRvbUJ1dHRvblwiOiBcIlZpZXdNZXNzYWdlLWJvdHRvbUJ1dHRvbi0zM1RCaVwiLFxuXHRcInRleHRCb3hcIjogXCJWaWV3TWVzc2FnZS10ZXh0Qm94LVotT0tjXCIsXG5cdFwiYnRuUmlnaHRcIjogXCJWaWV3TWVzc2FnZS1idG5SaWdodC0xNV9EWFwiLFxuXHRcInBhbmVsRGFya1wiOiBcIlZpZXdNZXNzYWdlLXBhbmVsRGFyay0xUHFsZlwiLFxuXHRcInRpbWVUZXh0XCI6IFwiVmlld01lc3NhZ2UtdGltZVRleHQtMk1yUE1cIixcblx0XCJwYW5lbFF1b3RlXCI6IFwiVmlld01lc3NhZ2UtcGFuZWxRdW90ZS0xN2RJclwiLFxuXHRcInBhbmVsQnViYmxlXCI6IFwiVmlld01lc3NhZ2UtcGFuZWxCdWJibGUtbklNV1lcIixcblx0XCJwYW5lbEJ1YmJsZUxlZnRcIjogXCJWaWV3TWVzc2FnZS1wYW5lbEJ1YmJsZUxlZnQtM1NJNlNcIixcblx0XCJwYW5lbEJ1YmJsZVJpZ2h0XCI6IFwiVmlld01lc3NhZ2UtcGFuZWxCdWJibGVSaWdodC05RjJoU1wiLFxuXHRcInJhZGl1c0NvbG9yXCI6IFwiVmlld01lc3NhZ2UtcmFkaXVzQ29sb3ItM2ptdkJcIixcblx0XCJyYWRpdXNDb2xvclR3b1wiOiBcIlZpZXdNZXNzYWdlLXJhZGl1c0NvbG9yVHdvLTVoYXBlXCIsXG5cdFwicGFuZWxUZXh0XCI6IFwiVmlld01lc3NhZ2UtcGFuZWxUZXh0LTNUQTJDXCIsXG5cdFwiaW5saW5lU3RhdHVzXCI6IFwiVmlld01lc3NhZ2UtaW5saW5lU3RhdHVzLTFOOWRsXCIsXG5cdFwiaG9yaXpvbnRhbFRleHRcIjogXCJWaWV3TWVzc2FnZS1ob3Jpem9udGFsVGV4dC0zOEkxVlwiLFxuXHRcInRleHRXcmFwcGVyXCI6IFwiVmlld01lc3NhZ2UtdGV4dFdyYXBwZXItMkhDenFcIixcblx0XCJob3Jpem9uZGFsTGluZVwiOiBcIlZpZXdNZXNzYWdlLWhvcml6b25kYWxMaW5lLTNUOU1kXCIsXG5cdFwiY2hldnJvbkljb25cIjogXCJWaWV3TWVzc2FnZS1jaGV2cm9uSWNvbi0ycEY5WFwiLFxuXHRcInRpbWVySWNvblwiOiBcIlZpZXdNZXNzYWdlLXRpbWVySWNvbi0zVnVvc1wiLFxuXHRcImNoZWNrSW5EYXRlXCI6IFwiVmlld01lc3NhZ2UtY2hlY2tJbkRhdGUtM1EtNDRcIixcblx0XCJwdWxsTGVmdFwiOiBcIlZpZXdNZXNzYWdlLXB1bGxMZWZ0LTIwMVhFXCIsXG5cdFwicHVsbFJpZ2h0XCI6IFwiVmlld01lc3NhZ2UtcHVsbFJpZ2h0LTJWMlAzXCIsXG5cdFwiZGlzY291bnRUZXh0XCI6IFwiVmlld01lc3NhZ2UtZGlzY291bnRUZXh0LTJBMVd1XCIsXG5cdFwicGFkZGluZ1JpZ2h0XCI6IFwiVmlld01lc3NhZ2UtcGFkZGluZ1JpZ2h0LTJRWlhCXCIsXG5cdFwiZGlzcGxheVRhYmxlXCI6IFwiVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlLTFuR0pMXCIsXG5cdFwiZGlzcGxheVRhYmxlUm93XCI6IFwiVmlld01lc3NhZ2UtZGlzcGxheVRhYmxlUm93LTJ2YllLXCIsXG5cdFwiZGlzcGxheVRhYmxlQ2VsbFwiOiBcIlZpZXdNZXNzYWdlLWRpc3BsYXlUYWJsZUNlbGwtMkltOWFcIixcblx0XCJkaXNwbGF5VGFibGVXaWR0aFwiOiBcIlZpZXdNZXNzYWdlLWRpc3BsYXlUYWJsZVdpZHRoLVJSVmR1XCIsXG5cdFwiZGlzcGxheVRhYmxlQ2VsbFRvcFwiOiBcIlZpZXdNZXNzYWdlLWRpc3BsYXlUYWJsZUNlbGxUb3AtMTRJMEdcIixcblx0XCJwcm9maWxlQXZhdGFyU2VjdGlvbkxlZnRcIjogXCJWaWV3TWVzc2FnZS1wcm9maWxlQXZhdGFyU2VjdGlvbkxlZnQtMk1kV1hcIixcblx0XCJndWVzdEhvc3RcIjogXCJWaWV3TWVzc2FnZS1ndWVzdEhvc3QtMWpiMU9cIixcblx0XCJob3N0Q2hhdFwiOiBcIlZpZXdNZXNzYWdlLWhvc3RDaGF0LTNrd1NsXCIsXG5cdFwiY2VudGVyQ2hhdEljb25cIjogXCJWaWV3TWVzc2FnZS1jZW50ZXJDaGF0SWNvbi0yMkFVY1wiLFxuXHRcImljb25CR1wiOiBcIlZpZXdNZXNzYWdlLWljb25CRy0ydW44QlwiLFxuXHRcImhvc3ROYW1lXCI6IFwiVmlld01lc3NhZ2UtaG9zdE5hbWUtTzgxRzdcIixcblx0XCJpbnN0YW50SWNvblwiOiBcIlZpZXdNZXNzYWdlLWluc3RhbnRJY29uLTI4aGYyXCIsXG5cdFwicG9zaXRpb25SXCI6IFwiVmlld01lc3NhZ2UtcG9zaXRpb25SLTJtWk1hXCIsXG5cdFwibm9QYWRkaW5nUmlnaHRcIjogXCJWaWV3TWVzc2FnZS1ub1BhZGRpbmdSaWdodC0zTzk2eFwiLFxuXHRcImhvc3ROYW1lQ29sb3JcIjogXCJWaWV3TWVzc2FnZS1ob3N0TmFtZUNvbG9yLTFoMGd3XCIsXG5cdFwiZGlzcGxheVRhYmxlV2lkdGhUd29cIjogXCJWaWV3TWVzc2FnZS1kaXNwbGF5VGFibGVXaWR0aFR3by0yN2FYY1wiLFxuXHRcImhpZGVTbVwiOiBcIlZpZXdNZXNzYWdlLWhpZGVTbS0xRk4tU1wiLFxuXHRcImRpc3BsYXlGbGV4XCI6IFwiVmlld01lc3NhZ2UtZGlzcGxheUZsZXgta1JJSlJcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuIC5WaWV3TWVzc2FnZS1yb290LTI1NjNnIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuIC5WaWV3TWVzc2FnZS1jb250YWluZXItMUFfSFQge1xcblxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0cGFkZGluZy10b3A6IDMwcHg7XFxuXFx0bWF4LXdpZHRoOiAxMDgwcHg7XFxuXFx0bWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcbiBhLFxcbmE6aG92ZXIge1xcblxcdGNvbG9yOiAjMDczNjg3O1xcbn1cXG4gLlZpZXdNZXNzYWdlLWJnQ29sb3ItMmN3ZzMge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQ6ICNGN0ZBRkY7XFxufVxcbiBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuVmlld01lc3NhZ2UtYmdDb2xvci0yY3dnMyB7XFxuXFx0XFx0cGFkZGluZzogMCAxMHB4O1xcblxcdH1cXG59XFxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5WaWV3TWVzc2FnZS1iZ0NvbG9yLTJjd2czIHtcXG5cXHRcXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0fVxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy92aWV3TWVzc2FnZS9WaWV3TWVzc2FnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7Q0FDQTtDQUNBLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEI7Q0FDQTtDQUNBLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLG9DQUFvQztDQUNwQztDQUNBOztDQUVBLGVBQWU7Q0FDZjtDQUNBO0NBQ0EsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQjtDQUNBO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRDtDQUNBO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRFwiLFwiZmlsZVwiOlwiVmlld01lc3NhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbiAucm9vdCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbiAuY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDBweCBhdXRvO1xcblxcdHBhZGRpbmctdG9wOiAzMHB4O1xcblxcdG1heC13aWR0aDogMTA4MHB4O1xcblxcdG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG4gYSxcXG5hOmhvdmVyIHtcXG5cXHRjb2xvcjogIzA3MzY4NztcXG59XFxuIC5iZ0NvbG9yIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjRjdGQUZGO1xcbn1cXG4gQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LmJnQ29sb3Ige1xcblxcdFxcdHBhZGRpbmc6IDAgMTBweDtcXG5cXHR9XFxufVxcbiBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuYmdDb2xvciB7XFxuXFx0XFx0cGFkZGluZzogMCAxMHB4O1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJWaWV3TWVzc2FnZS1yb290LTI1NjNnXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVmlld01lc3NhZ2UtY29udGFpbmVyLTFBX0hUXCIsXG5cdFwiYmdDb2xvclwiOiBcIlZpZXdNZXNzYWdlLWJnQ29sb3ItMmN3ZzNcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvU2l0ZUljb25zL2NoYXQucG5nP2M4OTc3M2M3XCI7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2NvcmUvaGlzdG9yeSc7XG5cblxuaW1wb3J0IHtcbiAgVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX1NUQVJULFxuICBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfU1VDQ0VTUyxcbiAgVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldEFsbFJlc2VydmF0aW9uUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGdldEFsbFJlc2VydmF0aW9uICgkdXNlclR5cGU6IFN0cmluZyl7XG4gICAgZ2V0QWxsUmVzZXJ2YXRpb24odXNlclR5cGU6ICR1c2VyVHlwZSl7XG4gICAgICByZXNlcnZhdGlvbkRhdGEge1xuICAgICAgICBpZFxuICAgICAgICByZXNlcnZhdGlvblN0YXRlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb25JZCwgYWN0aW9uVHlwZSwgdXNlclR5cGUsIHRocmVhZElkKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiB1cGRhdGVSZXNlcnZhdGlvbihcbiAgICAgICAgICAgICRyZXNlcnZhdGlvbklkOiBJbnQhLCBcbiAgICAgICAgICAgICRhY3Rpb25UeXBlOiBTdHJpbmchLFxuICAgICAgICAgICAgJHRocmVhZElkOiBJbnRcbiAgICAgICAgICApe1xuICAgICAgICAgICAgICB1cGRhdGVSZXNlcnZhdGlvbihcbiAgICAgICAgICAgICAgICByZXNlcnZhdGlvbklkOiAkcmVzZXJ2YXRpb25JZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25UeXBlOiAkYWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICB0aHJlYWRJZDogJHRocmVhZElkXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgcmVzZXJ2YXRpb25JZCxcbiAgICAgICAgICBhY3Rpb25UeXBlLFxuICAgICAgICAgIHRocmVhZElkXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IGdldEFsbFJlc2VydmF0aW9uUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdXNlclR5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS51cGRhdGVSZXNlcnZhdGlvbiAmJiBkYXRhLnVwZGF0ZVJlc2VydmF0aW9uLnN0YXR1cyA9PT0gJzIwMCcpIHtcblxuICAgICAgICBpZih1c2VyVHlwZSA9PSAnaG9zdCcpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2goJy9yZXNlcnZhdGlvbi9jdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvdHJpcHMvY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9jb3JlL2hpc3RvcnknO1xuaW1wb3J0IHtcbiAgQk9PS0lOR19QUk9DRVNTX1NUQVJULFxuICBCT09LSU5HX1BST0NFU1NfU1VDQ0VTUyxcbiAgQk9PS0lOR19QUk9DRVNTX0VSUk9SLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYm9va2luZ1Byb2Nlc3MobGlzdElkLCBndWVzdHMsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcHJlQXBwcm92ZSwgdGF4UmF0ZSkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBCT09LSU5HX1BST0NFU1NfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGJvb2tpbmdMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgcXVlcnkgPSBncWxgXG4gICAgICAgICAgcXVlcnkgVXNlckxpc3RpbmcoJGxpc3RJZDpTdHJpbmchKSB7XG4gICAgICAgICAgICBVc2VyTGlzdGluZyAobGlzdElkOiRsaXN0SWQpIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgdXNlcklkXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGNvdmVyUGhvdG9cbiAgICAgICAgICAgICAgY291bnRyeVxuICAgICAgICAgICAgICBjaXR5XG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICAgIHBlcnNvbkNhcGFjaXR5XG4gICAgICAgICAgICAgIGJvb2tpbmdUeXBlXG4gICAgICAgICAgICAgIGxpc3RQaG90b3N7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdXNlciB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgIHByb2ZpbGV7XG4gICAgICAgICAgICAgICAgICBwcm9maWxlSWRcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgICAgICAgICAgIHBpY3R1cmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHNldHRpbmdzSWRcbiAgICAgICAgICAgICAgICBsaXN0c2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nc1R5cGUge1xuICAgICAgICAgICAgICAgICAgICB0eXBlTmFtZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBob3VzZVJ1bGVzIHtcbiAgICAgICAgICAgICAgICBob3VzZVJ1bGVzSWRcbiAgICAgICAgICAgICAgICBsaXN0c2V0dGluZ3N7XG4gICAgICAgICAgICAgICAgICBpdGVtTmFtZVxuICAgICAgICAgICAgICAgICAgaXNFbmFibGVcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzVHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpc3RpbmdEYXRhIHtcbiAgICAgICAgICAgICAgICBjaGVja0luU3RhcnQsXG4gICAgICAgICAgICAgICAgY2hlY2tJbkVuZCxcbiAgICAgICAgICAgICAgICBiYXNlUHJpY2UsXG4gICAgICAgICAgICAgICAgY2xlYW5pbmdQcmljZSxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgICAgICAgICB3ZWVrbHlEaXNjb3VudCxcbiAgICAgICAgICAgICAgICBtb250aGx5RGlzY291bnQsXG4gICAgICAgICAgICAgICAgdGF4UmF0ZVxuICAgICAgICAgICAgICAgIGNhbmNlbGxhdGlvbiB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaXN0QmxvY2tlZFByaWNlIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGxpc3RJZFxuICAgICAgICAgICAgICAgIGlzU3BlY2lhbFByaWNlXG4gICAgICAgICAgICAgICAgYmxvY2tlZERhdGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbGlzdElkXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5Vc2VyTGlzdGluZykge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQk9PS0lOR19QUk9DRVNTX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgZGF0YTogZGF0YS5Vc2VyTGlzdGluZyxcbiAgICAgICAgICAgIGJvb2tEZXRhaWxzOiB7XG4gICAgICAgICAgICAgIGd1ZXN0cyxcbiAgICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgICAgICBwcmVBcHByb3ZlLFxuICAgICAgICAgICAgICAvLyB0YXhSYXRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvb2tpbmdMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2Jvb2svJyArIGxpc3RJZCk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBCT09LSU5HX1BST0NFU1NfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBib29raW5nTG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBTRU5EX01FU1NBR0VfU1RBUlQsXG4gIFNFTkRfTUVTU0FHRV9TVUNDRVNTLFxuICBTRU5EX01FU1NBR0VfRVJST1IsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uL1Jlc2VydmF0aW9uL3VwZGF0ZVJlc2VydmF0aW9uJztcblxuY29uc3QgVGhyZWFkSXRlbXNRdWVyeSA9IGdxbGBcbnF1ZXJ5IGdldFRocmVhZCgkdGhyZWFkVHlwZTogU3RyaW5nLCAkdGhyZWFkSWQ6IEludCl7XG4gIGdldFRocmVhZCh0aHJlYWRUeXBlOiAkdGhyZWFkVHlwZSwgdGhyZWFkSWQ6ICR0aHJlYWRJZCkge1xuICAgIGlkXG4gICAgbGlzdElkXG4gICAgZ3Vlc3RcbiAgICBob3N0XG4gICAgbGlzdERhdGEge1xuICAgICAgdGl0bGVcbiAgICAgIGNpdHlcbiAgICAgIHN0YXRlXG4gICAgICBjb3VudHJ5XG4gICAgICBsaXN0aW5nRGF0YSB7XG4gICAgICAgIGJhc2VQcmljZVxuICAgICAgICBjbGVhbmluZ1ByaWNlXG4gICAgICAgIGN1cnJlbmN5XG4gICAgICAgIG1vbnRobHlEaXNjb3VudFxuICAgICAgICB3ZWVrbHlEaXNjb3VudFxuICAgICAgfVxuICAgIH1cbiAgICB0aHJlYWRJdGVtRm9yVHlwZSB7XG4gICAgICBpZFxuICAgICAgdGhyZWFkSWRcbiAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgIGNvbnRlbnRcbiAgICAgIHNlbnRCeVxuICAgICAgdHlwZVxuICAgICAgc3RhcnREYXRlXG4gICAgICBlbmREYXRlXG4gICAgICBwZXJzb25DYXBhY2l0eVxuICAgICAgY3JlYXRlZEF0XG4gICAgICBjYW5jZWxEYXRhIHtcbiAgICAgICAgaWRcbiAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICBjYW5jZWxsYXRpb25Qb2xpY3lcbiAgICAgICAgZ3Vlc3RTZXJ2aWNlRmVlXG4gICAgICAgIGhvc3RTZXJ2aWNlRmVlXG4gICAgICAgIHJlZnVuZFRvR3Vlc3RcbiAgICAgICAgcGF5b3V0VG9Ib3N0XG4gICAgICAgIHRvdGFsIFxuICAgICAgICBjdXJyZW5jeVxuICAgICAgfVxuICAgICAgcmVzZXJ2YXRpb24ge1xuICAgICAgICBpZFxuICAgICAgICBsaXN0SWRcbiAgICAgICAgaG9zdElkXG4gICAgICAgIGd1ZXN0SWRcbiAgICAgICAgY2hlY2tJblxuICAgICAgICBjaGVja091dFxuICAgICAgICBiYXNlUHJpY2VcbiAgICAgICAgY2xlYW5pbmdQcmljZVxuICAgICAgICB0b3RhbFxuICAgICAgICBjdXJyZW5jeVxuICAgICAgICBndWVzdHNcbiAgICAgICAgY29uZmlybWF0aW9uQ29kZVxuICAgICAgICBndWVzdFNlcnZpY2VGZWVcbiAgICAgICAgZGlzY291bnRcbiAgICAgICAgZGlzY291bnRUeXBlXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgaG9zdFNlcnZpY2VGZWVcbiAgICAgICAgYm9va2luZ1NwZWNpYWxQcmljaW5nIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICAgICBibG9ja2VkRGF0ZXNcbiAgICAgICAgICBpc1NwZWNpYWxQcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocmVhZEl0ZW1zIHtcbiAgICAgIGlkXG4gICAgICB0aHJlYWRJZFxuICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgY29udGVudFxuICAgICAgc2VudEJ5XG4gICAgICB0eXBlXG4gICAgICBzdGFydERhdGVcbiAgICAgIGVuZERhdGVcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgICB0aHJlYWRJdGVtc0NvdW50XG4gICAgZ3Vlc3RQcm9maWxlIHtcbiAgICAgIHByb2ZpbGVJZFxuICAgICAgZGlzcGxheU5hbWVcbiAgICAgIGZpcnN0TmFtZVxuICAgICAgbG9jYXRpb25cbiAgICAgIHJldmlld3NDb3VudFxuICAgICAgdXNlclZlcmlmaWNhdGlvbiB7XG4gICAgICAgIGlkXG4gICAgICAgIGlzRW1haWxDb25maXJtZWRcbiAgICAgICAgaXNGYWNlYm9va0Nvbm5lY3RlZFxuICAgICAgICBpc0dvb2dsZUNvbm5lY3RlZFxuICAgICAgICBpc0lkVmVyaWZpY2F0aW9uXG4gICAgICB9XG4gICAgfVxuICAgIGd1ZXN0VXNlckRhdGEge1xuICAgICAgZW1haWxcbiAgICAgIHVzZXJCYW5TdGF0dXNcbiAgICB9XG4gICAgaG9zdFByb2ZpbGUge1xuICAgICAgcHJvZmlsZUlkXG4gICAgICBkaXNwbGF5TmFtZVxuICAgICAgZmlyc3ROYW1lXG4gICAgICBwaWN0dXJlXG4gICAgICBsb2NhdGlvblxuICAgICAgcmV2aWV3c0NvdW50XG4gICAgICB1c2VyVmVyaWZpY2F0aW9uIHtcbiAgICAgICAgaWRcbiAgICAgICAgaXNFbWFpbENvbmZpcm1lZFxuICAgICAgICBpc0ZhY2Vib29rQ29ubmVjdGVkXG4gICAgICAgIGlzR29vZ2xlQ29ubmVjdGVkXG4gICAgICAgIGlzSWRWZXJpZmljYXRpb25cbiAgICAgIH1cbiAgICB9XG4gICAgaG9zdFVzZXJEYXRhIHtcbiAgICAgIGVtYWlsXG4gICAgfVxuICAgIHN0YXR1c1xuICB9XG59XG5gO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlQWN0aW9uKFxuICB0aHJlYWRJZCxcbiAgdGhyZWFkVHlwZSxcbiAgY29udGVudCxcbiAgdHlwZSxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxuICBwZXJzb25DYXBhY2l0eSxcbiAgcmVzZXJ2YXRpb25JZCxcbiAgcmVjZWl2ZXJOYW1lLFxuICBzZW5kZXJOYW1lLFxuICByZWNlaXZlclR5cGUsXG4gIHJlY2VpdmVyRW1haWxcbikge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFTkRfTUVTU0FHRV9TVEFSVCxcbiAgICB9KTtcbiAgICB0cnkge1xuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgbXV0YXRpb24gc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgJHRocmVhZElkOiBJbnQhLCBcbiAgICAgICAgICAkY29udGVudDogU3RyaW5nLCBcbiAgICAgICAgICAkdHlwZTogU3RyaW5nLFxuICAgICAgICAgICRzdGFydERhdGU6IFN0cmluZyxcbiAgICAgICAgICAkZW5kRGF0ZTogU3RyaW5nLFxuICAgICAgICAgICRwZXJzb25DYXBhY2l0eTogSW50LFxuICAgICAgICAgICRyZXNlcnZhdGlvbklkOiBJbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgdGhyZWFkSWQ6ICR0aHJlYWRJZCwgXG4gICAgICAgICAgICBjb250ZW50OiAkY29udGVudCwgXG4gICAgICAgICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6ICRlbmREYXRlLFxuICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHk6ICRwZXJzb25DYXBhY2l0eSxcbiAgICAgICAgICAgIHJlc2VydmF0aW9uSWQ6ICRyZXNlcnZhdGlvbklkXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBzZW50QnlcbiAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICAgICAgICAgc3RhcnREYXRlXG4gICAgICAgICAgICAgIGVuZERhdGVcbiAgICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHlcbiAgICAgICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICAvLyBTZW5kIE1lc3NhZ2VcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgcGVyc29uQ2FwYWNpdHksXG4gICAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBUaHJlYWRJdGVtc1F1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICB0aHJlYWRUeXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnNlbmRNZXNzYWdlICYmIGRhdGEuc2VuZE1lc3NhZ2Uuc3RhdHVzICE9ICd1c2VyYmFubmVkJykge1xuICAgICAgICBpZiAocmVzZXJ2YXRpb25JZCAhPSBudWxsICYmIHJlc2VydmF0aW9uSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2godXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb25JZCwgdHlwZSwgdGhyZWFkVHlwZSwgdGhyZWFkSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogU0VORF9NRVNTQUdFX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFTkRfTUVTU0FHRV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEYXRlQmV0d2VlbiBmcm9tICcuL0RhdGVCZXR3ZWVuJztcblxuY2xhc3MgQ291bnREb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH07XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0geyByZW1haW5pbmc6IG51bGwgfVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy50aWNrKClcblx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cdH1cblxuXHR0aWNrKCkge1xuXHRcdGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZSgpXG5cdFx0bGV0IGVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLm9wdGlvbnMuZW5kRGF0ZSlcblx0XHRsZXQgcmVtYWluaW5nID0gRGF0ZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKVxuXG5cdFx0aWYgKHJlbWFpbmluZyA9PT0gZmFsc2UpIHtcblx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cdFx0XHR0aGlzLnByb3BzLm9wdGlvbnNbJ2NiJ10gPyB0aGlzLnByb3BzLm9wdGlvbnMuY2IoKSA6IGZhbHNlXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyZW1haW5pbmc6IHJlbWFpbmluZyA/IHJlbWFpbmluZyA6IG51bGxcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+IHt0aGlzLnN0YXRlLnJlbWFpbmluZ308L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd247XG4iLCJsZXQgRGF0ZUJldHdlZW4gPSBmdW5jdGlvbiAoc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGxldCBzZWNvbmQgPSAxMDAwO1xuICBsZXQgbWludXRlID0gc2Vjb25kICogNjA7XG4gIGxldCBob3VyID0gbWludXRlICogNjA7XG4gIGxldCBkYXkgPSBob3VyICogMjQ7XG4gIGxldCBkaXN0YW5jZSA9IGVuZERhdGUgLSBzdGFydERhdGU7XG5cbiAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIGRheSk7XG4gIGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgZGF5KSAvIGhvdXIpO1xuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgaG91cikgLyBtaW51dGUpO1xuICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgbWludXRlKSAvIHNlY29uZCk7XG5cblxuICBsZXQgYmV0d2VlbiA9IFtdO1xuXG4gIC8vZGF5cyA+IDAgPyBiZXR3ZWVuLnB1c2goYCR7ZGF5c30gOiBgKSA6IGZhbHNlO1xuICBob3VycyA+IDAgPyBiZXR3ZWVuLnB1c2goYCR7aG91cnN9IDogYCkgOiBiZXR3ZWVuLnB1c2goYDAwYCk7XG4gIG1pbnV0ZXMgPiAwID8gYmV0d2Vlbi5wdXNoKGAke21pbnV0ZXN9IDogYCkgOiBiZXR3ZWVuLnB1c2goYDAwYCk7XG4gIHNlY29uZHMgPiAwID8gYmV0d2Vlbi5wdXNoKGAke3NlY29uZHN9YCkgOiBiZXR3ZWVuLnB1c2goYDAwYCk7XG5cbiAgcmV0dXJuIGJldHdlZW4uam9pbignICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVCZXR3ZWVuOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IGluamVjdEludGwsIEZvcm1hdHRlZE51bWJlciB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5cbi8vIEhlbHBlclxuaW1wb3J0IHsgY29udmVydCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cnJlbmN5Q29udmVydGlvblwiO1xuaW1wb3J0IHsgaXNSVEwgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mb3JtYXRMb2NhbGVcIjtcbmNsYXNzIEN1cnJlbmN5Q29udmVydGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFtb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJhdGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN1cGVyU3ltYm9sOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9DdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFtb3VudDogMCxcbiAgICBzdXBlclN5bWJvbDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJhc2U6IG51bGwsXG4gICAgICByYXRlczogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgYmFzZSwgcmF0ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGJhc2UgIT0gdW5kZWZpbmVkICYmIHJhdGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhc2U6IGJhc2UsIHJhdGVzOiByYXRlcyB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgYmFzZSwgcmF0ZXMgfSA9IG5leHRQcm9wcztcbiAgICBpZiAoYmFzZSAhPSB1bmRlZmluZWQgJiYgcmF0ZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFzZTogYmFzZSwgcmF0ZXM6IHJhdGVzIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmcm9tLFxuICAgICAgYW1vdW50LFxuICAgICAgc3VwZXJTeW1ib2wsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB0b0N1cnJlbmN5LFxuICAgICAgbG9jYWxlLFxuICAgICAgaXNDdXJyZW5jeSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGJhc2UsIHJhdGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IHRhcmdldEN1cnJlbmN5O1xuICAgIGxldCBjb252ZXJ0ZWRBbW91bnQgPSBhbW91bnQ7XG4gICAgbGV0IGZyb21DdXJyZW5jeSA9IGZyb20gfHwgYmFzZTtcblxuICAgIGlmIChyYXRlcyAhPSBudWxsKSB7XG4gICAgICBjb252ZXJ0ZWRBbW91bnQgPSBjb252ZXJ0KGJhc2UsIHJhdGVzLCBhbW91bnQsIGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSk7XG4gICAgfVxuXG4gICAgaWYgKHRvQ3VycmVuY3kpIHtcbiAgICAgIHRhcmdldEN1cnJlbmN5ID0gdG9DdXJyZW5jeTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0Q3VycmVuY3kgPSBiYXNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7aXNSVEwobG9jYWxlKSA/IChcbiAgICAgICAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgY3VycmVuY3k6IHRhcmdldEN1cnJlbmN5LFxuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBjb252ZXJ0ZWRBbW91bnQgJSAxID09PSAwID8gMCA6IDIsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGNvbnZlcnRlZEFtb3VudCAlIDEgPT09IDAgPyAwIDogMixcbiAgICAgICAgICAgIGN1cnJlbmN5RGlzcGxheTogXCJzeW1ib2xcIixcbiAgICAgICAgICB9KS5mb3JtYXQoY29udmVydGVkQW1vdW50KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxGb3JtYXR0ZWROdW1iZXJcbiAgICAgICAgICAgIHZhbHVlPXtjb252ZXJ0ZWRBbW91bnR9XG4gICAgICAgICAgICBzdHlsZT1cImN1cnJlbmN5XCJcbiAgICAgICAgICAgIGN1cnJlbmN5PXt0YXJnZXRDdXJyZW5jeX1cbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0cz17Y29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyfVxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzPXtjb252ZXJ0ZWRBbW91bnQgJSAxID09PSAwID8gMCA6IDJ9XG4gICAgICAgICAgICBjdXJyZW5jeURpc3BsYXk9e1wic3ltYm9sXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N1cGVyU3ltYm9sICYmIDxzdXA+e3RhcmdldEN1cnJlbmN5fTwvc3VwPn1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBiYXNlOiBzdGF0ZS5jdXJyZW5jeS5iYXNlLFxuICB0b0N1cnJlbmN5OiBzdGF0ZS5jdXJyZW5jeS50byxcbiAgcmF0ZXM6IHN0YXRlLmN1cnJlbmN5LnJhdGVzLFxuICBsb2NhbGU6IHN0YXRlLmludGwubG9jYWxlLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEN1cnJlbmN5Q29udmVydGVyKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBzIGZyb20gXCIuL0xheW91dC5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgQ29va2llc0Rpc2NsYWltZXIgZnJvbSBcIi4uL0Nvb2tpZXNEaXNjbGFpbWVyXCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBhZGRpbmdUb3B9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb29raWVzRGlzY2xhaW1lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExheW91dCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgR3Vlc3RBY3Rpb25zIGZyb20gJy4vR3Vlc3RBY3Rpb25zJztcbmltcG9ydCBIb3N0QWN0aW9ucyBmcm9tICcuL0hvc3RBY3Rpb25zJztcbmltcG9ydCB7IGdldERhdGVSYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2RhdGVSYW5nZSc7XG5cbmNsYXNzIEFjdGlvbkJsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aHJlYWRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWN0aW9uVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbGlzdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcmVzZXJ2YXRpb25JZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlbmREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGVyc29uQ2FwYWNpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBob3N0RGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBndWVzdERpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjdGlvblR5cGU6IG51bGxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRocmVhZFR5cGUsIGFjdGlvblR5cGUsIHRocmVhZElkLCBsaXN0SWQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcGVyc29uQ2FwYWNpdHksIGNyZWF0ZWRBdCwgY291bnRyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGhvc3REaXNwbGF5TmFtZSwgZ3Vlc3REaXNwbGF5TmFtZSwgcmVzZXJ2YXRpb25JZCwgZ3Vlc3RFbWFpbCwgdGl0bGUsIGxpc3RQdWJsaXNoU3RhdHVzLCByZXNlcnZhdGlvbkRhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgaXNDYW5jZWxCdXR0b25TaG93biA9IGZhbHNlO1xuICAgIGlmIChyZXNlcnZhdGlvbkRhdGEgJiYgcmVzZXJ2YXRpb25EYXRhLmNoZWNrSW4gJiYgcmVzZXJ2YXRpb25EYXRhLmNoZWNrT3V0KSB7XG4gICAgICBjb25zdCB7IG5pZ2h0cywgaW50ZXJ2YWwgfSA9IGdldERhdGVSYW5nZXMoeyBjaGVja0luOiByZXNlcnZhdGlvbkRhdGEuY2hlY2tJbiwgY2hlY2tPdXQ6IHJlc2VydmF0aW9uRGF0YS5jaGVja091dCwgY291bnRyeTogY291bnRyeSB9KTtcblxuICAgICAgLy9IaWRlIGlmIHRoZSAoY3VycmVudCBkYXRlKSBpcyBlcXVhbCBvciBncmVhdGVyIHRoYW4gdGhlIChvbmUgZGF5IGJlZm9yZSBjaGVja291dCBkYXRlKSBcbiAgICAgIGlzQ2FuY2VsQnV0dG9uU2hvd24gPSAoLWludGVydmFsKSA8IChuaWdodHMgLSAxKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uVHlwZSAhPSBudWxsKSB7XG4gICAgICBpZiAodGhyZWFkVHlwZSA9PT0gJ2hvc3QnKSB7XG4gICAgICAgIHJldHVybiA8SG9zdEFjdGlvbnNcbiAgICAgICAgICBhY3Rpb25UeXBlPXthY3Rpb25UeXBlfVxuICAgICAgICAgIHRocmVhZElkPXt0aHJlYWRJZH1cbiAgICAgICAgICByZXNlcnZhdGlvbklkPXtyZXNlcnZhdGlvbklkfVxuICAgICAgICAgIHRocmVhZFR5cGU9e3RocmVhZFR5cGV9XG4gICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XG4gICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cbiAgICAgICAgICBwZXJzb25DYXBhY2l0eT17cGVyc29uQ2FwYWNpdHl9XG4gICAgICAgICAgY3JlYXRlZEF0PXtjcmVhdGVkQXR9XG4gICAgICAgICAgZ3Vlc3REaXNwbGF5TmFtZT17Z3Vlc3REaXNwbGF5TmFtZX1cbiAgICAgICAgICBob3N0RGlzcGxheU5hbWU9e2hvc3REaXNwbGF5TmFtZX1cbiAgICAgICAgICBndWVzdEVtYWlsPXtndWVzdEVtYWlsfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBsaXN0UHVibGlzaFN0YXR1cz17bGlzdFB1Ymxpc2hTdGF0dXN9XG4gICAgICAgICAgaXNDYW5jZWxCdXR0b25TaG93bj17aXNDYW5jZWxCdXR0b25TaG93bn1cbiAgICAgICAgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8R3Vlc3RBY3Rpb25zXG4gICAgICAgICAgYWN0aW9uVHlwZT17YWN0aW9uVHlwZX1cbiAgICAgICAgICB0aHJlYWRJZD17dGhyZWFkSWR9XG4gICAgICAgICAgbGlzdElkPXtsaXN0SWR9XG4gICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XG4gICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cbiAgICAgICAgICBwZXJzb25DYXBhY2l0eT17cGVyc29uQ2FwYWNpdHl9XG4gICAgICAgICAgcmVzZXJ2YXRpb25JZD17cmVzZXJ2YXRpb25JZH1cbiAgICAgICAgICBob3N0RGlzcGxheU5hbWU9e2hvc3REaXNwbGF5TmFtZX1cbiAgICAgICAgICBjcmVhdGVkQXQ9e2NyZWF0ZWRBdH1cbiAgICAgICAgICBsaXN0UHVibGlzaFN0YXR1cz17bGlzdFB1Ymxpc2hTdGF0dXN9XG4gICAgICAgICAgaXNDYW5jZWxCdXR0b25TaG93bj17aXNDYW5jZWxCdXR0b25TaG93bn1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXYgLz5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShBY3Rpb25CbG9jayk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBSZWR1eFxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ29sLFxuICAgIFBhbmVsLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5pbXBvcnQgeyBib29raW5nUHJvY2VzcyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYm9va2luZy9ib29raW5nUHJvY2Vzcyc7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IENvdW50RG93biBmcm9tICcuLi8uLi9Db3VudERvd24nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vLi4vLi4vY29yZS9mZXRjaCc7XG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG5jbGFzcyBHdWVzdEFjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFjdGlvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaG9zdERpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBwZXJzb25DYXBhY2l0eTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBsaXN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgcmVzZXJ2YXRpb25JZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnByZUJvb2sgPSB0aGlzLnByZUJvb2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVCb29rKCkge1xuICAgICAgICBjb25zdCB7IGJvb2tpbmdQcm9jZXNzLCBsaXN0SWQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcGVyc29uQ2FwYWNpdHksIGxpc3RQdWJsaXNoU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwcmVBcHByb3ZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gYHF1ZXJ5IGNoZWNrUmVzZXJ2YXRpb24gKCRjaGVja0luOiBTdHJpbmcsJGNoZWNrT3V0OiBTdHJpbmcsJGxpc3RJZDogSW50ICl7XG4gICAgICAgICAgICBjaGVja1Jlc2VydmF0aW9uKGNoZWNrSW46ICRjaGVja0luLCBjaGVja091dDokY2hlY2tPdXQsIGxpc3RJZDokbGlzdElkICl7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxpc3RJZFxuICAgICAgICAgICAgICBob3N0SWRcbiAgICAgICAgICAgICAgZ3Vlc3RJZFxuICAgICAgICAgICAgICBjaGVja0luXG4gICAgICAgICAgICAgIGNoZWNrT3V0XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1gO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGxpc3RJZDogbGlzdElkLFxuICAgICAgICAgICAgY2hlY2tJbjogc3RhcnREYXRlLFxuICAgICAgICAgICAgY2hlY2tPdXQ6IGVuZERhdGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogcGFyYW1zLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmNoZWNrUmVzZXJ2YXRpb24pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmNoZWNrUmVzZXJ2YXRpb24uc3RhdHVzID09IFwiMjAwXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFB1Ymxpc2hTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ1Byb2Nlc3MobGlzdElkLCBwZXJzb25DYXBhY2l0eSwgc3RhcnREYXRlLCBlbmREYXRlLCBwcmVBcHByb3ZlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlNvcnJ5IVwiLCBcIlRoZSBsaXN0aW5nIGhhZCB1bnB1Ymxpc2hlZCBvciBkZWxldGVkIGJ5IEhvc3QvQWRtaW4uIFBsZWFzZSB0cnkgYW5vdGhlci5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiQm9va2luZyBGYWlsZWRcIiwgXCJUaGUgZGF0ZXMgYXJlIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5xdWlyeVxuICAgIGlucXVpcnkoaG9zdERpc3BsYXlOYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdElkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUFjdGlvbjF9IC8+IHtob3N0RGlzcGxheU5hbWV9IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlQWN0aW9uMn0gLz48L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUFjdGlvbkluZm99IC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AyLCBzLm5vUGFkZGluZyl9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IGNsYXNzTmFtZT17Y3gocy5saW5rQnRuLCBidC5idG5QcmltYXJ5KX0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLlJlcXVlc3RUb0Jvb2t9IC8+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXF1ZXN0IHRvIGJvb2tcbiAgICByZXF1ZXN0VG9Cb29rKGhvc3REaXNwbGF5TmFtZSkge1xuICAgICAgICBjb25zdCB7IHJlc2VydmF0aW9uSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlQWN0aW9uM30gLz4ge2hvc3REaXNwbGF5TmFtZX0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VBY3Rpb240fSAvPjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2FuY2VsSW5mb30gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5jYW5jZWxJbmZvQm9va2luZ30gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlcXVlc3QgdG8gYm9vay8gSW5xdWlyeSBkZWNsaW5lZFxuICAgIGRlY2xpbmVkKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVxdWVzdERlY2xpbmVkfSAvPjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmd1ZXN0RGVjbGluZWRJbmZvfSAvPjwvcD5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmVxdWVzdCB0byBib29rIC8gUHJlLWFwcHJvdmVkIGJ5IGhvc3RcbiAgICBhcHByb3ZlZChob3N0RGlzcGxheU5hbWUpIHtcbiAgICAgICAgY29uc3QgeyBjcmVhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzdGFydERhdGUgPSBtb21lbnQoKTtcbiAgICAgICAgbGV0IG5leHQyNEhvdXJzID0gbW9tZW50KGNyZWF0ZWRBdCkuYWRkKDIzLCAnaG91cnMnKS5hZGQoNTksICdtaW51dGVzJyk7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE51bWJlcihuZXh0MjRIb3VycyAtIHN0YXJ0RGF0ZSk7XG4gICAgICAgIGxldCBvcHRpb25zID0geyBlbmREYXRlOiBuZXh0MjRIb3VycyB9O1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBpcmVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZXF1ZXN0QXBwcm92ZWRBY3Rpb24xfSAvPiB7aG9zdERpc3BsYXlOYW1lfSA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUFjdGlvbjR9IC8+PC9zdHJvbmc+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVxdWVzdFRpbWVJbmZvMX0gLz4gPENvdW50RG93biBvcHRpb25zPXtvcHRpb25zfSAvPiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVxdWVzdFRpbWVJbmZvMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMiwgcy5ub1BhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtidC5idG5QcmltYXJ5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByZUJvb2soKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCb29raW5nIGNvbmZpcm1lZCBieSBob3N0LyBpbnN0YW50IGJvb2tpbmdcbiAgICBib29raW5nQ29uZmlybWVkKGhvc3REaXNwbGF5TmFtZSkge1xuICAgICAgICBjb25zdCB7IHJlc2VydmF0aW9uSWQsIGlzQ2FuY2VsQnV0dG9uU2hvd24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghaXNDYW5jZWxCdXR0b25TaG93bikgcmV0dXJuIDxzcGFuPjwvc3Bhbj47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ0NvbmZpcm1lZEluZm8xfSAvPiB7aG9zdERpc3BsYXlOYW1lfSA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUFjdGlvbjR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nQ2FuY2VsZWRJbmZvfSAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMiwgcy5ub1BhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL2NhbmNlbC9cIiArIHJlc2VydmF0aW9uSWQgKyBcIi9ndWVzdFwifSBjbGFzc05hbWU9e2N4KHMubGlua0J0biwgYnQuYnRuUHJpbWFyeSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNhbmNlbFJlc2VydmF0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFByZS1hcHByb3ZlZCBvciBhcHByb3ZlZCBieSBob3N0IGlzIGV4cGlyZWRcbiAgICBleHBpcmVkKCkge1xuICAgICAgICBjb25zdCB7IGxpc3RJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdFeHBpcmVkVGl0bGV9IC8+PC9zdHJvbmc+PC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdFeHBpcmVkSW5mb30gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZVRvcDIsIHMubm9QYWRkaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9yb29tcy9cIiArIGxpc3RJZH0gY2xhc3NOYW1lPXtjeChzLmxpbmtCdG4sIGJ0LmJ0blByaW1hcnkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5nb3RvTGlzdGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBCb29raW5nIGlzIGNhbmNlbGxlZCBieSBob3N0XG4gICAgY2FuY2VsbGVkKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cbiAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ1JlcXVlc3RDYW5jZWwxfSAvPjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ib29raW5nUmVxdWVzdENhbmNlbDJ9IC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy50cmlwQ29tcGxldGVkfSAvPjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy50cmlwQ29tcGxldGVkfSAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFjdGlvblR5cGUsIGhvc3REaXNwbGF5TmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gJ2lucXVpcnknKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnF1aXJ5KGhvc3REaXNwbGF5TmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ3ByZUFwcHJvdmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwcm92ZWQoaG9zdERpc3BsYXlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnZGVjbGluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNsaW5lZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdpbnRhbnRCb29raW5nJyB8fCBhY3Rpb25UeXBlID09PSAnYXBwcm92ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib29raW5nQ29uZmlybWVkKGhvc3REaXNwbGF5TmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ3JlcXVlc3RUb0Jvb2snKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VG9Cb29rKGhvc3REaXNwbGF5TmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2V4cGlyZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBpcmVkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2NhbmNlbGxlZEJ5SG9zdCcgfHwgYWN0aW9uVHlwZSA9PT0gJ2NhbmNlbGxlZEJ5R3Vlc3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW5jZWxsZWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnY29tcGxldGVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgICBib29raW5nUHJvY2Vzcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocywgYnQpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHdWVzdEFjdGlvbnMpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0Q29sLFxuXHRQYW5lbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBGb250QXdlc29tZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEnO1xuXG4vLyBSZWR1eCBhY3Rpb25cbmltcG9ydCB7IHNlbmRNZXNzYWdlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlL3NlbmRNZXNzYWdlQWN0aW9uJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgQ291bnREb3duIGZyb20gJy4uLy4uL0NvdW50RG93bic7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgSG9zdEFjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGFjdGlvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRzZW5kTWVzc2FnZUFjdGlvbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuXHRcdHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0cmVzZXJ2YXRpb25JZDogUHJvcFR5cGVzLm51bWJlcixcblx0XHR0aHJlYWRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0ZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHBlcnNvbkNhcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0Z3Vlc3REaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG5cdFx0aG9zdERpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdH07XG5cblx0YXN5bmMgc2VuZE1lc3NhZ2UodHlwZSkge1xuXHRcdGNvbnN0IHsgc2VuZE1lc3NhZ2VBY3Rpb24sIHRocmVhZElkLCB0aHJlYWRUeXBlLCBzdGFydERhdGUsIGVuZERhdGUsIHBlcnNvbkNhcGFjaXR5LCByZXNlcnZhdGlvbklkIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0c2VuZE1lc3NhZ2VBY3Rpb24odGhyZWFkSWQsIHRocmVhZFR5cGUsIG51bGwsIHR5cGUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcGVyc29uQ2FwYWNpdHksIHJlc2VydmF0aW9uSWQsIG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xuXHR9XG5cblx0Ly8gSW5xdWlyeVxuXHRpbnF1aXJ5KGd1ZXN0RGlzcGxheU5hbWUpIHtcblx0XHRjb25zdCB7IGNyZWF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgc3RhcnREYXRlID0gbW9tZW50KCk7XG5cdFx0bGV0IG5leHQyNEhvdXJzID0gbW9tZW50KGNyZWF0ZWRBdCkuYWRkKDIzLCAnaG91cnMnKS5hZGQoNTksICdtaW51dGVzJyk7XG5cdFx0bGV0IGRpc3RhbmNlID0gbmV4dDI0SG91cnMgLSBzdGFydERhdGU7XG5cdFx0bGV0IG9wdGlvbnMgPSB7IGVuZERhdGU6IG5leHQyNEhvdXJzIH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG5cdFx0XHRcdDxoND5cblx0XHRcdFx0XHQ8c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0QWN0aW9uMX0gLz4ge2d1ZXN0RGlzcGxheU5hbWV9IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0QWN0aW9uMn0gLz48L3N0cm9uZz5cblx0XHRcdFx0PC9oND5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzLnNwYWNlVG9wMn0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3RBY3Rpb24zfSAvPiB7Z3Vlc3REaXNwbGF5TmFtZX0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3RBY3Rpb240fSAvPjwvcD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRpc3RhbmNlID4gMCAmJiA8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHRcdDxGb250QXdlc29tZS5GYUNsb2NrTyBjbGFzc05hbWU9e2N4KHMudGV4dEdyYXksIHMudGltZXJJY29uKX0gLz5cblx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0UmVzcG9uc2VUaW1lMX0gLz4gPENvdW50RG93biBvcHRpb25zPXtvcHRpb25zfSAvPiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuaG9zdFJlc3BvbnNlVGltZTJ9IC8+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxDb2wgbWQ9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AyLCBzLm5vUGFkZGluZyl9PlxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPXtidC5idG5QcmltYXJ5fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRNZXNzYWdlKCdwcmVBcHByb3ZlZCcpfT5cblx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5wcmVBcHByb3ZlfSAvPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeUJvcmRlciwgcy5idG5SaWdodCl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZE1lc3NhZ2UoJ2RlY2xpbmVkJyl9PlxuXHRcdFx0XHRcdFx0PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmRlY2xpbmV9IC8+XG5cdFx0XHRcdFx0PC9CdXR0b24+ICovfVxuXHRcdFx0XHQ8L0NvbD5cblx0XHRcdDwvUGFuZWw+XG5cdFx0KTtcblx0fVxuXG5cdC8vIFJlcXVlc3QgdG8gYm9va1xuXHRyZXF1ZXN0VG9Cb29rKGd1ZXN0RGlzcGxheU5hbWUpIHtcblx0XHRjb25zdCB7IGNyZWF0ZWRBdCwgbGlzdFB1Ymxpc2hTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IHN0YXJ0RGF0ZSA9IG1vbWVudCgpO1xuXHRcdC8vbGV0IG5leHQyNEhvdXJzID0gbW9tZW50KGNyZWF0ZWRBdCkuYWRkKDI0LCAnaG91cnMnKTtcblx0XHRsZXQgbmV4dDI0SG91cnMgPSBtb21lbnQoY3JlYXRlZEF0KS5hZGQoMjMsICdob3VycycpLmFkZCg1OSwgJ21pbnV0ZXMnKTtcblx0XHRsZXQgZGlzdGFuY2UgPSBuZXh0MjRIb3VycyAtIHN0YXJ0RGF0ZTtcblx0XHRsZXQgb3B0aW9ucyA9IHsgZW5kRGF0ZTogbmV4dDI0SG91cnMgfTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuXHRcdFx0XHQ8aDQ+PHN0cm9uZz57Z3Vlc3REaXNwbGF5TmFtZX0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmd1ZXN0UmVxdWVzdH0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGlzdGFuY2UgPiAwICYmIDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuXHRcdFx0XHRcdFx0PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmhvc3RSZXNwb25zZVRpbWUxfSAvPiA8Q291bnREb3duIG9wdGlvbnM9e29wdGlvbnN9IC8+IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ob3N0UmVzcG9uc2VUaW1lMn0gLz5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxpc3RQdWJsaXNoU3RhdHVzICYmIDxDb2wgbWQ9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AyLCBzLm5vUGFkZGluZyl9PlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9e2N4KGJ0LmJ0blByaW1hcnkpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRNZXNzYWdlKCdhcHByb3ZlZCcpfT5cblx0XHRcdFx0XHRcdFx0PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmFwcHJvdmV9IC8+XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5Qm9yZGVyLCBzLmJ0blJpZ2h0LCAncmVxdWVzdEJvb2tCdG4nKX0gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kTWVzc2FnZSgnZGVjbGluZWQnKX0+XG5cdFx0XHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5kZWNsaW5lfSAvPlxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdH1cblx0XHRcdDwvUGFuZWw+XG5cdFx0KTtcblx0fVxuXG5cdC8vIElucXVpcnkgcHJlLWFwcHJvdmVkXG5cdGFwcHJvdmVkKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuXHRcdFx0XHQ8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVxdWVzdEFwcHJvdmVkfSAvPjwvc3Ryb25nPjwvaDQ+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuXHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy50aW1lVG9FeHBpcmV9IC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvUGFuZWw+XG5cdFx0KTtcblx0fVxuXG5cdC8vIFJlcXVlc3QgdG8gYm9vay8gSW5xdWlyeSBkZWNsaW5lZFxuXHRkZWNsaW5lZCgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cblx0XHRcdFx0PGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnJlcXVlc3REZWNsaW5lZH0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGVjbGluZWRJbmZvfSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHQvLyBCb29raW5nIGNvbmZpcm1lZCBieSBob3N0LyBpbnN0YW50IGJvb2tpbmdcblx0Ym9va2luZ0NvbmZpcm1lZCgpIHtcblx0XHRjb25zdCB7IHJlc2VydmF0aW9uSWQsIGlzQ2FuY2VsQnV0dG9uU2hvd24gfSA9IHRoaXMucHJvcHM7XG5cdFx0aWYgKCFpc0NhbmNlbEJ1dHRvblNob3duKSByZXR1cm4gPHNwYW4+PC9zcGFuPjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cblx0XHRcdFx0PGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdJc0NvbmZpcm1lZH0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHQ8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY29udGFjdEd1ZXN0fSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxDb2wgbWQ9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AyLCBzLm5vUGFkZGluZyl9PlxuXHRcdFx0XHRcdDxMaW5rIHRvPXtcIi9jYW5jZWwvXCIgKyByZXNlcnZhdGlvbklkICsgXCIvaG9zdFwifSBjbGFzc05hbWU9e2N4KHMubGlua0J0biwgYnQuYnRuUHJpbWFyeSl9PlxuXHRcdFx0XHRcdFx0PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNhbmNlbFJlc2VydmF0aW9ufSAvPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9Db2w+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHQvLyBQcmUtYXBwcm92ZWQgb3IgYXBwcm92ZWQgYnkgaG9zdCBpcyBleHBpcmVkXG5cdGV4cGlyZWQoZ3Vlc3REaXNwbGF5TmFtZSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnNwYWNlNiwgcy5jb250ZXh0UGFkZGluZyl9PlxuXHRcdFx0XHQ8aDQ+PHN0cm9uZz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ0lzRXhwaXJlZH0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHR7Z3Vlc3REaXNwbGF5TmFtZX0ncyA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ0lzRXhwaXJlZDF9IC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvUGFuZWw+XG5cdFx0KTtcblx0fVxuXG5cdC8vIEJvb2tpbmcgaXMgY2FuY2VsbGVkIGJ5IGhvc3Rcblx0Y2FuY2VsbGVkKGd1ZXN0RGlzcGxheU5hbWUpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsIGNsYXNzTmFtZT17Y3gocy5zcGFjZTYsIHMuY29udGV4dFBhZGRpbmcpfT5cblx0XHRcdFx0PGg0PjxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdSZXF1ZXN0Q2FuY2VsMX0gLz48L3N0cm9uZz48L2g0PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3Muc3BhY2VUb3AyfT5cblx0XHRcdFx0XHR7Z3Vlc3REaXNwbGF5TmFtZX0ncyA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYm9va2luZ1JlcXVlc3RDYW5jZWwzfSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdCk7XG5cdH1cblxuXHRjb21wbGV0ZWQoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbCBjbGFzc05hbWU9e2N4KHMuc3BhY2U2LCBzLmNvbnRleHRQYWRkaW5nKX0+XG5cdFx0XHRcdDxoND48c3Ryb25nPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZXNlcnZhdGlvbklzQ29tcGxldGVkfSAvPjwvc3Ryb25nPjwvaDQ+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17cy5zcGFjZVRvcDJ9PlxuXHRcdFx0XHRcdDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZXNlcnZhdGlvbklzQ29tcGxldGVkRGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvUGFuZWw+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFjdGlvblR5cGUsIGd1ZXN0RGlzcGxheU5hbWUgfSA9IHRoaXMucHJvcHM7XG5cdFx0aWYgKGFjdGlvblR5cGUgPT09ICdpbnF1aXJ5Jykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5xdWlyeShndWVzdERpc3BsYXlOYW1lKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdwcmVBcHByb3ZlZCcpIHtcblx0XHRcdHJldHVybiB0aGlzLmFwcHJvdmVkKCk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAnZGVjbGluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZWNsaW5lZCgpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2ludGFudEJvb2tpbmcnIHx8IGFjdGlvblR5cGUgPT09ICdhcHByb3ZlZCcpIHtcblx0XHRcdHJldHVybiB0aGlzLmJvb2tpbmdDb25maXJtZWQoKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdyZXF1ZXN0VG9Cb29rJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVxdWVzdFRvQm9vayhndWVzdERpc3BsYXlOYW1lKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdleHBpcmVkJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXhwaXJlZChndWVzdERpc3BsYXlOYW1lKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdjYW5jZWxsZWRCeUhvc3QnIHx8IGFjdGlvblR5cGUgPT09ICdjYW5jZWxsZWRCeUd1ZXN0Jykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FuY2VsbGVkKGd1ZXN0RGlzcGxheU5hbWUpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gJ2NvbXBsZXRlZCcpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbXBsZXRlZCgpO1xuXHRcdH1cblxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuXHRzZW5kTWVzc2FnZUFjdGlvbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocywgYnQpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShIb3N0QWN0aW9ucykpOyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRNb3JlVGhyZWFkSXRlbXNcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJvZmZzZXRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19fSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0QWxsVGhyZWFkSXRlbXNcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwib2Zmc2V0XCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJvZmZzZXRcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb250ZW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNlbnRCeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0eXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXJ0RGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbmREYXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNSZWFkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI1NH19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYzsiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ2V0VGhyZWFkXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkVHlwZVwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRUaHJlYWRcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkVHlwZVwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkVHlwZVwifX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJZFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZ3Vlc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0RGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNpdHlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY291bnRyeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc1B1Ymxpc2hlZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0QXBwcm92YWxTdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGlzdGluZ0RhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJiYXNlUHJpY2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2xlYW5pbmdQcmljZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJtb250aGx5RGlzY291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwid2Vla2x5RGlzY291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSXRlbUZvclR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXNlcnZhdGlvbklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2VudEJ5XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhcnREYXRlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVuZERhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGVyc29uQ2FwYWNpdHlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEF0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNhbmNlbERhdGFcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXNlcnZhdGlvbklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNhbmNlbGxhdGlvblBvbGljeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVmdW5kVG9HdWVzdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwYXlvdXRUb0hvc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidG90YWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3VycmVuY3lcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImd1ZXN0SWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2hlY2tJblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjaGVja091dFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJiYXNlUHJpY2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY2xlYW5pbmdQcmljZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0b3RhbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjdXJyZW5jeVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdHNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29uZmlybWF0aW9uQ29kZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGlzY291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGlzY291bnRUeXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaG9zdFNlcnZpY2VGZWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYm9va2luZ1NwZWNpYWxQcmljaW5nXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmVzZXJ2YXRpb25JZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJibG9ja2VkRGF0ZXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNTcGVjaWFsUHJpY2VcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGF4UmF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHJlYWRJdGVtc1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRocmVhZElkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlc2VydmF0aW9uSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29udGVudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzZW50QnlcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzdGFydERhdGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZW5kRGF0ZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGhyZWFkSXRlbXNDb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdFByb2ZpbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwcm9maWxlSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGlzcGxheU5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlyc3ROYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBpY3R1cmVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibG9jYXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicmV2aWV3c0NvdW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJWZXJpZmljYXRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0VtYWlsQ29uZmlybWVkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzRmFjZWJvb2tDb25uZWN0ZWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNHb29nbGVDb25uZWN0ZWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNJZFZlcmlmaWNhdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJndWVzdFVzZXJEYXRhXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZW1haWxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlckJhblN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob3N0UHJvZmlsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInByb2ZpbGVJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkaXNwbGF5TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJmaXJzdE5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGljdHVyZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsb2NhdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJyZXZpZXdzQ291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlclZlcmlmaWNhdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlzRW1haWxDb25maXJtZWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNGYWNlYm9va0Nvbm5lY3RlZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0dvb2dsZUNvbm5lY3RlZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc0lkVmVyaWZpY2F0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImhvc3RVc2VyRGF0YVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVtYWlsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJCYW5TdGF0dXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic3RhdHVzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjIxMjJ9fTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG4vLyBIZWxwZXJcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJztcblxuaW1wb3J0IHtcbiAgSW1hZ2UsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluayc7XG5pbXBvcnQgY2hhdEljb24gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL1NpdGVJY29ucy9jaGF0LnBuZyc7XG5pbXBvcnQgZGVmYXVsdFBpYyBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvU2l0ZUltYWdlcy9kZWZhdWx0UGljLnBuZyc7XG5cbmNsYXNzIEd1ZXN0SG9zdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgcHJvZmlsZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJldmlld3NDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2ZXJpZmljYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaXNFbWFpbENvbmZpcm1lZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpc0ZhY2Vib29rQ29ubmVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzR29vZ2xlQ29ubmVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9KSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyVHlwZSwgdGhyZWFkSWQsIGdldFRocmVhZCwgYWNjb3VudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBndWVzdEltYWdlRGF0YSA9IGdldFRocmVhZCAmJiBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnBpY3R1cmU7XG4gICAgbGV0IGd1ZXN0Rmlyc3ROYW1lID0gZ2V0VGhyZWFkICYmIGdldFRocmVhZC5ndWVzdFByb2ZpbGUuZmlyc3ROYW1lO1xuICAgIGxldCBndWVzdFByb2ZpbGVOdW1iZXIgPSBnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5wcm9maWxlSWQ7XG4gICAgbGV0IGhvc3RJbWFnZURhdGEgPSBnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnBpY3R1cmU7XG4gICAgbGV0IGhvc3RGaXJzdE5hbWUgPSBnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLmhvc3RQcm9maWxlLmZpcnN0TmFtZTtcbiAgICBsZXQgaG9zdFByb2ZpbGVOdW1iZXIgPSBnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnByb2ZpbGVJZDtcblxuICAgIGxldCBob3NOYW1lID0gdXNlclR5cGUgPT0gJ2hvc3QnID8gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGhvc3RGaXJzdE5hbWUpIDogY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGd1ZXN0Rmlyc3ROYW1lKTtcbiAgICBsZXQgZ3Vlc3ROYW1lID0gdXNlclR5cGUgIT0gJ2hvc3QnID8gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGhvc3RGaXJzdE5hbWUpIDogY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGd1ZXN0Rmlyc3ROYW1lKTtcbiAgICBsZXQgaG9zdEltYWdlID0gdXNlclR5cGUgPT0gJ2hvc3QnID8gaG9zdEltYWdlRGF0YSA6IGd1ZXN0SW1hZ2VEYXRhO1xuICAgIGxldCBndWVzdEltYWdlID0gdXNlclR5cGUgIT0gJ2hvc3QnID8gaG9zdEltYWdlRGF0YSA6IGd1ZXN0SW1hZ2VEYXRhO1xuICAgIGxldCBob3N0UHJvZmlsZUlkID0gdXNlclR5cGUgPT0gJ2hvc3QnID8gaG9zdFByb2ZpbGVOdW1iZXIgOiBndWVzdFByb2ZpbGVOdW1iZXI7XG4gICAgbGV0IGd1ZXN0UHJvZmlsZUlkID0gdXNlclR5cGUgIT0gJ2hvc3QnID8gaG9zdFByb2ZpbGVOdW1iZXIgOiBndWVzdFByb2ZpbGVOdW1iZXI7XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ndWVzdEhvc3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5ob3N0TmFtZSwgJ2hvc3ROYW1lQ29sb3InKX0+XG4gICAgICAgICAgPExpbmsgdG89eycvdXNlcnMvc2hvdy8nICsgZ3Vlc3RQcm9maWxlSWR9ID5cbiAgICAgICAgICAgIHtndWVzdE5hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaG9zdENoYXR9PlxuICAgICAgICAgIDxMaW5rIHRvPXsnL3VzZXJzL3Nob3cvJyArIGd1ZXN0UHJvZmlsZUlkfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZ3Vlc3RJbWFnZSAmJiA8SW1hZ2Ugc3JjPXsnL2ltYWdlcy9hdmF0YXIvbWVkaXVtXycgKyBndWVzdEltYWdlfSByZXNwb25zaXZlIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICFndWVzdEltYWdlICYmIDxJbWFnZSBzcmM9e2RlZmF1bHRQaWN9IHJlc3BvbnNpdmUgLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNlbnRlckNoYXRJY29ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pY29uQkd9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Y2hhdEljb259IHJlc3BvbnNpdmUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhvc3RDaGF0fT5cbiAgICAgICAgICA8TGluayB0bz17Jy91c2Vycy9zaG93LycgKyBob3N0UHJvZmlsZUlkfT5cbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXsnL2ltYWdlcy9hdmF0YXIvbWVkaXVtXycgKyBob3N0SW1hZ2V9IHJlc3BvbnNpdmUgLz4gKi99XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvc3RJbWFnZSAmJiA8SW1hZ2Ugc3JjPXsnL2ltYWdlcy9hdmF0YXIvbWVkaXVtXycgKyBob3N0SW1hZ2V9IHJlc3BvbnNpdmUgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIWhvc3RJbWFnZSAmJiA8SW1hZ2Ugc3JjPXtkZWZhdWx0UGljfSByZXNwb25zaXZlIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuaG9zdE5hbWUsICdob3N0TmFtZUNvbG9yJyl9PlxuICAgICAgICAgIDxMaW5rIHRvPXsnL3VzZXJzL3Nob3cvJyArIGhvc3RQcm9maWxlSWR9PlxuICAgICAgICAgICAge2hvc05hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKEd1ZXN0SG9zdERldGFpbHMpKTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgUGFuZWwsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHN1Ym1pdCBmcm9tICcuL3N1Ym1pdCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9BdmF0YXInO1xuXG4vL0xvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIFNlbmRNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICB9O1xuXG4gIHJlbmRlckZvcm1Db250cm9sVGV4dEFyZWEgPSAoeyBpbnB1dCwgbGFiZWwsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e2N4KHMuZXJyb3JNZXNzYWdlLCAnZXJyb3JNZXNzYWdlRmllbGRSVEwnKX0+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvZmlsZUlkLCBwaWN0dXJlLCBkaXNwbGF5TmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVycm9yLCBoYW5kbGVTdWJtaXQsIHN1Ym1pdHRpbmcsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxSb3cgY2xhc3NOYW1lPXtjeChzLnNwYWNlNil9PlxuICAgICAgLy8gICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17OX0gbGc9ezEwfT5cbiAgICAgIC8vICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnBhbmVsQnViYmxlLCBzLnBhbmVsQnViYmxlUmlnaHQsIFwibWVzc2FnZVRleHRBcmVhXCIpfT5cbiAgICAgIC8vICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XG4gICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRleHRCb2R5fT5cbiAgICAgIC8vICAgICAgICAgICA8RmllbGRcbiAgICAgIC8vICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT17cy50ZXh0Qm94fVxuICAgICAgLy8gICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sVGV4dEFyZWF9XG4gICAgICAvLyAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy53cml0ZU1lc3NhZ2UpfVxuICAgICAgLy8gICAgICAgICAgIC8+XG4gICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5wYW5lbERhcmspfT5cbiAgICAgIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ib3R0b21CdXR0b259PlxuICAgICAgLy8gICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2J0LmJ0blByaW1hcnl9IHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBlcnJvcn0+XG4gICAgICAvLyAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zZW5kTWVzc2FnZX0gLz5cbiAgICAgIC8vICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgLy8gICAgICAgICAgIDwvZGl2PlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICAgIDwvZm9ybT5cbiAgICAgIC8vICAgICA8L1BhbmVsPlxuICAgICAgLy8gICA8L0NvbD5cbiAgICAgIC8vICAgPENvbCBtZD17M30gbGc9ezJ9IGNsYXNzTmFtZT17Y3goJ3RleHQtcmlnaHQnKX0+XG4gICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZUF2YXRhclNlY3Rpb24sIHMuaGlkZVNtKX0+XG4gICAgICAvLyAgICAgICA8QXZhdGFyXG4gICAgICAvLyAgICAgICAgIHNvdXJjZT17cGljdHVyZX1cbiAgICAgIC8vICAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgIC8vICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgLy8gICAgICAgICB0aXRsZT17ZGlzcGxheU5hbWV9XG4gICAgICAvLyAgICAgICAgIGNsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyfVxuICAgICAgLy8gICAgICAgICB3aXRoTGlua1xuICAgICAgLy8gICAgICAgICBsaW5rQ2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJMaW5rfVxuICAgICAgLy8gICAgICAgICBwcm9maWxlSWQ9e3Byb2ZpbGVJZH1cbiAgICAgIC8vICAgICAgIC8+XG4gICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAvLyAgIDwvQ29sPlxuICAgICAgLy8gPC9Sb3c+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuc3BhY2U2KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGlzcGxheVRhYmxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRpc3BsYXlUYWJsZVJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmRpc3BsYXlUYWJsZUNlbGwsIHMuZGlzcGxheVRhYmxlV2lkdGgsIHMucmFkaXVzQ29sb3IsICdzZW5kTWVzc2FnZVJhZGl1cycpfT5cbiAgICAgICAgICAgICAgICA8UGFuZWwgY2xhc3NOYW1lPXtjeChzLnBhbmVsQnViYmxlLCBzLnBhbmVsQnViYmxlUmlnaHQsIFwibWVzc2FnZVRleHRBcmVhXCIsICdWaWV3QnViYmxlUmlnaHQnKX0+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50ZXh0Qm9keX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MudGV4dEJveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMud3JpdGVNZXNzYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucGFuZWxEYXJrKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuYm90dG9tQnV0dG9uLCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjeChidC5idG5QcmltYXJ5KX0gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IGVycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnNlbmRNZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5kaXNwbGF5VGFibGVDZWxsVG9wLCBzLmRpc3BsYXlUYWJsZVdpZHRoVHdvKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZUF2YXRhclNlY3Rpb24sIHMuaGlkZVNtLCAncHJvZmlsZUF2YXRhclJpZ2h0Jyl9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgd2l0aExpbmtcbiAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyTGlua31cbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtwcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cblNlbmRNZXNzYWdlID0gcmVkdXhGb3JtKHtcbiAgZm9ybTogJ1NlbmRNZXNzYWdlJywgLy8gYSB1bmlxdWUgbmFtZSBmb3IgdGhpcyBmb3JtXG4gIHZhbGlkYXRlXG59KShTZW5kTWVzc2FnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzLCBidCkoU2VuZE1lc3NhZ2UpKTsiLCIvLyBSZWR1eCBGb3JtXG5pbXBvcnQgeyByZXNldCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG4vLyBSZWR1eCBhY3Rpb25cbmltcG9ydCB7IHNlbmRNZXNzYWdlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlL3NlbmRNZXNzYWdlQWN0aW9uJztcblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0KHZhbHVlcywgZGlzcGF0Y2gpIHtcblxuXHRsZXQgdGhyZWFkSWQgPSB2YWx1ZXMudGhyZWFkSWQ7XG5cdGxldCB0aHJlYWRUeXBlID0gdmFsdWVzLnRocmVhZFR5cGU7XG5cdGxldCB0eXBlID0gdmFsdWVzLnR5cGU7XG5cdGxldCBjb250ZW50ID0gdmFsdWVzLmNvbnRlbnQ7XG5cdGRpc3BhdGNoKHNlbmRNZXNzYWdlQWN0aW9uKFxuXHRcdHRocmVhZElkLFxuXHRcdHRocmVhZFR5cGUsXG5cdFx0Y29udGVudCxcblx0XHR0eXBlLFxuXHRcdHVuZGVmaW5lZCxcblx0XHR1bmRlZmluZWQsXG5cdFx0MCxcblx0XHR1bmRlZmluZWQsXG5cdFx0dmFsdWVzLnJlY2VpdmVyTmFtZSxcblx0XHR2YWx1ZXMuc2VuZGVyTmFtZSxcblx0XHR2YWx1ZXMucmVjZWl2ZXJUeXBlLFxuXHRcdHZhbHVlcy5yZWNlaXZlckVtYWlsXG5cdCkpO1xuXHRkaXNwYXRjaChyZXNldCgnU2VuZE1lc3NhZ2UnKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdDsiLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuXG4gIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCF2YWx1ZXMuY29udGVudCkge1xuICAgIGVycm9ycy5jb250ZW50ID0gbWVzc2FnZXMucmVxdWlyZWQ7XG4gIH0gZWxzZSBpZiAodmFsdWVzLmNvbnRlbnQgJiYgdmFsdWVzLmNvbnRlbnQudG9TdHJpbmcoKS50cmltKCkgPT0gJycpIHtcbiAgICBlcnJvcnMuY29udGVudCA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtcbiAgUGFuZWxcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9BdmF0YXInO1xuXG5jbGFzcyBGcm9tTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcHJvZmlsZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNyZWF0ZWRBdDogbnVsbFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2ZpbGVJZCwgcGljdHVyZSwgZGlzcGxheU5hbWUsIGNvbnRlbnQsIGNyZWF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgZGF0ZSA9IGNyZWF0ZWRBdCAhPSBudWxsID8gbW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdEIE1NTSBZWVlZJykgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5zcGFjZTYpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5VGFibGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGlzcGxheVRhYmxlUm93fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5kaXNwbGF5VGFibGVXaWR0aFR3byl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnByb2ZpbGVBdmF0YXJTZWN0aW9uTGVmdCwgJ3Byb2ZpbGVBdmF0YXJTZWN0aW9uTGVmdEFyJyl9PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgd2l0aExpbmtcbiAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyTGlua31cbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtwcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5kaXNwbGF5VGFibGVXaWR0aCwgcy5yYWRpdXNDb2xvclR3bywgJ3JhZGl1c0NvbG9yVHdvJyl9PlxuICAgICAgICAgICAgICAgIDxQYW5lbCBjbGFzc05hbWU9e2N4KHMucGFuZWxCdWJibGUsIHMucGFuZWxEYXJrLCBzLnBhbmVsQnViYmxlTGVmdCwgJ3ZpZXdNZXNzYWdlQnViYmxlJyl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ICYmIChjb250ZW50LnRyaW0oKSkuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW19PGJyIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy50aW1lVGV4dCwgcy5zcGFjZVRvcDIpfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRnJvbU1lc3NhZ2UpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIFN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICBjcmVhdGVkQXQ6IG51bGxcbiAgICB9O1xuXG4gICAgbGFiZWwoc3RhdHVzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlICdpbnF1aXJ5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXMxfS8+O1xuICAgICAgICAgICAgY2FzZSAncHJlQXBwcm92ZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czJ9Lz47XG4gICAgICAgICAgICBjYXNlICdkZWNsaW5lZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzM30vPjtcbiAgICAgICAgICAgIGNhc2UgJ2FwcHJvdmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXM0fS8+O1xuICAgICAgICAgICAgY2FzZSAncGVuZGluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzNX0vPjtcbiAgICAgICAgICAgIGNhc2UgJ2NhbmNlbGxlZEJ5SG9zdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzNn0vPjtcbiAgICAgICAgICAgIGNhc2UgJ2NhbmNlbGxlZEJ5R3Vlc3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czd9Lz47XG4gICAgICAgICAgICBjYXNlICdpbnRhbnRCb29raW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXM4fS8+O1xuICAgICAgICAgICAgY2FzZSAnY29uZmlybWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJvb2tpbmdDb25maXJtZWR9Lz47XG4gICAgICAgICAgICBjYXNlICdleHBpcmVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXM5fS8+O1xuICAgICAgICAgICAgY2FzZSAncmVxdWVzdFRvQm9vayc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzMTB9Lz47XG4gICAgICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucGFuZWxIZWFkZXIyfS8+O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIGNyZWF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGRhdGUgPSBjcmVhdGVkQXQgIT0gbnVsbCA/IG1vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnTU0vRC9ZWVlZJykgOiAnJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmlubGluZVN0YXR1cywgcy5zcGFjZTYpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5ob3Jpem9udGFsVGV4dCl9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudGV4dFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMubGFiZWwodHlwZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHtkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFN0YXR1cyk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFN0YXR1cyBmcm9tICcuL1N0YXR1cyc7XG5pbXBvcnQgVG9NZXNzYWdlIGZyb20gJy4vVG9NZXNzYWdlJztcbmltcG9ydCBGcm9tTWVzc2FnZSBmcm9tICcuL0Zyb21NZXNzYWdlJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgVGhyZWFkSXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBndWVzdFByb2ZpbGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBwaWN0dXJlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgfSksXG4gICAgICBob3N0UHJvZmlsZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgcHJvZmlsZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB9KSxcbiAgICAgIHRocmVhZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBzZW50Qnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIH0pKSxcbiAgICAgIHRocmVhZEl0ZW1zQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHRocmVhZEl0ZW1zOiBbXSxcbiAgICAgIHRocmVhZEl0ZW1zQ291bnQ6IDAsXG4gICAgfSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBkYXRhOiB7IHRocmVhZEl0ZW1zLCB0aHJlYWRJdGVtc0NvdW50IH0sIHVzZXJUeXBlLCBsb2FkTW9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aHJlYWRJdGVtcyAhPSBudWxsICYmIHRocmVhZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aHJlYWRJdGVtcyAhPSBudWxsICYmIHRocmVhZEl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhyZWFkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSAmJiBpdGVtLnR5cGUgIT0gJ21lc3NhZ2UnICYmIDxTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2l0ZW0uY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXNlclR5cGUgPT09ICdndWVzdCcgJiYgaXRlbS5zZW50QnkgPT09IGRhdGEuaG9zdCAmJiBpdGVtLmNvbnRlbnQgIT0gbnVsbCAmJiA8RnJvbU1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXtkYXRhLmhvc3RQcm9maWxlLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZT17ZGF0YS5ob3N0UHJvZmlsZS5waWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZT17ZGF0YS5ob3N0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2l0ZW0uY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXNlclR5cGUgPT09ICdndWVzdCcgJiYgaXRlbS5zZW50QnkgPT09IGRhdGEuZ3Vlc3QgJiYgaXRlbS5jb250ZW50ICE9IG51bGwgJiYgPFRvTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e2RhdGEuZ3Vlc3RQcm9maWxlLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZT17ZGF0YS5ndWVzdFByb2ZpbGUucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU9e2RhdGEuZ3Vlc3RQcm9maWxlLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17aXRlbS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIGl0ZW0uc2VudEJ5ID09PSBkYXRhLmd1ZXN0ICYmIGl0ZW0uY29udGVudCAhPSBudWxsICYmIDxGcm9tTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e2RhdGEuZ3Vlc3RQcm9maWxlLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZT17ZGF0YS5ndWVzdFByb2ZpbGUucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU9e2RhdGEuZ3Vlc3RQcm9maWxlLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17aXRlbS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIGl0ZW0uc2VudEJ5ID09PSBkYXRhLmhvc3QgJiYgaXRlbS5jb250ZW50ICE9IG51bGwgJiYgPFRvTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e2RhdGEuaG9zdFByb2ZpbGUucHJvZmlsZUlkfVxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlPXtkYXRhLmhvc3RQcm9maWxlLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXtkYXRhLmhvc3RQcm9maWxlLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17aXRlbS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhICYmIHRocmVhZEl0ZW1zICYmIHRocmVhZEl0ZW1zLmxlbmd0aCA8IHRocmVhZEl0ZW1zQ291bnQgJiYgPGRpdiBjbGFzc05hbWU9e3MudGV4dENlbnRlcn0+XG4gICAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlKCl9IGNsYXNzTmFtZT17Y3gocy5idG5SYWRpdXMsIGJ0LmJ0blByaW1hcnkpfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubG9hZE1vcmVNc2d9IC8+PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm5vSXRtZXNGb3VuZH0gLz4gPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMsIGJ0KShUaHJlYWRJdGVtcykgO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQge1xuICBQYW5lbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uL0F2YXRhcic7XG5cbmNsYXNzIFRvTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcHJvZmlsZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNyZWF0ZWRBdDogbnVsbFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2ZpbGVJZCwgcGljdHVyZSwgZGlzcGxheU5hbWUsIGNvbnRlbnQsIGNyZWF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgZGF0ZSA9IGNyZWF0ZWRBdCAhPSBudWxsID8gbW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdEIE1NTSBZWVlZJykgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5zcGFjZTYpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRpc3BsYXlUYWJsZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRpc3BsYXlUYWJsZVJvd30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5kaXNwbGF5VGFibGVXaWR0aCwgcy5yYWRpdXNDb2xvciwgJ3NlbmRNZXNzYWdlUmFkaXVzJyl9PlxuICAgICAgICAgICAgICAgICAgPFBhbmVsIGNsYXNzTmFtZT17Y3gocy5wYW5lbERhcmssIHMucGFuZWxCdWJibGUsIHMucGFuZWxUZXh0LCBzLnBhbmVsQnViYmxlUmlnaHQsICdWaWV3QnViYmxlUmlnaHQnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudCAmJiAoY29udGVudC50cmltKCkpLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PntpdGVtfTxiciAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMudGltZVRleHQsIHMuc3BhY2VUb3AyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5kaXNwbGF5VGFibGVXaWR0aFR3byl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMucHJvZmlsZUF2YXRhclNlY3Rpb24sICdwcm9maWxlQXZhdGFyUmlnaHQnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzTmFtZT17cy5wcm9maWxlQXZhdGFyTGlua31cbiAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e3Byb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUb01lc3NhZ2UpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuXHRSb3csXG5cdENvbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbi8vIENvbXBvbmVudFxuaW1wb3J0IEN1cnJlbmN5Q29udmVydGVyIGZyb20gJy4uLy4uL0N1cnJlbmN5Q29udmVydGVyJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgQ2FuY2VsRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0dXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuXHRcdGNhbmNlbERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRndWVzdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRob3N0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlcixcblx0XHRcdHJlZnVuZFRvR3Vlc3Q6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRwYXlvdXRUb0hvc3Q6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHR0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcblx0XHRcdGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdH0pXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdXNlclR5cGUgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBjYW5jZWxEYXRhOiB7IGNhbmNlbGxhdGlvblBvbGljeSwgZ3Vlc3RTZXJ2aWNlRmVlLCByZWZ1bmRUb0d1ZXN0LCBwYXlvdXRUb0hvc3QsIGN1cnJlbmN5IH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IGVhcm5lZEFtb3VudCA9IDAsIG1pc3NlZEVhcm5pbmdzID0gMCwgcmVmdW5kID0gMDtcblx0XHRlYXJuZWRBbW91bnQgPSBwYXlvdXRUb0hvc3Q7XG5cdFx0Ly8gbWlzc2VkRWFybmluZ3MgPSByZWZ1bmRUb0d1ZXN0IC0gZ3Vlc3RTZXJ2aWNlRmVlO1xuXHRcdHJlZnVuZCA9IHJlZnVuZFRvR3Vlc3Q7XG5cdFx0Y29uc3QgeyByZXNlcnZhdGlvbkRhdGE6IHsgdG90YWwsIGhvc3RTZXJ2aWNlRmVlIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0bWlzc2VkRWFybmluZ3MgPSAodG90YWwgLSBob3N0U2VydmljZUZlZSkgLSBlYXJuZWRBbW91bnRcblxuXHRcdC8vIGlmKGNhbmNlbGxhdGlvblBvbGljeSA9PSAnRmxleGlhYmxlJykge1xuXHRcdC8vIFx0bWlzc2VkRWFybmluZ3MgPSByZWZ1bmRUb0d1ZXN0O1xuXHRcdC8vIFx0ZWFybmVkQW1vdW50ID0gcGF5b3V0VG9Ib3N0O1xuXHRcdC8vIH0gZWxzZSBpZihjYW5jZWxsYXRpb25Qb2xpY3kgPT0gJ01vZGVyYXRlJykge1xuXHRcdC8vIFx0bWlzc2VkRWFybmluZ3MgPSByZWZ1bmRUb0d1ZXN0IC0gZ3Vlc3RTZXJ2aWNlRmVlO1xuXHRcdC8vIFx0ZWFybmVkQW1vdW50ID0gcGF5b3V0VG9Ib3N0O1xuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHRtaXNzZWRFYXJuaW5ncyA9IHJlZnVuZFRvR3Vlc3Q7XG5cdFx0Ly8gXHRlYXJuZWRBbW91bnQgPSBwYXlvdXRUb0hvc3Q7XG5cdFx0Ly8gfVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnNwYWNlVG9wOH0+XG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9e3Muc3BhY2U0fT5cblx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucGF5bWVudH0gLz48L3NwYW4+XG5cdFx0XHRcdDwvaDQ+XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXJUeXBlID09PSAnaG9zdCcgJiYgZWFybmVkQW1vdW50ID4gMCAmJiA8Um93IGNsYXNzTmFtZT17cy50ZXh0Qm9sZH0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs3fSBzbT17N30gY2xhc3NOYW1lPXtzLnRleHRMZWZ0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmVhcm5lZEFtb3VudH0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e3MudGV4dFJpZ2h0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e2Vhcm5lZEFtb3VudH1cblx0XHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXJUeXBlID09PSAnaG9zdCcgJiYgbWlzc2VkRWFybmluZ3MgPiAwICYmIDxSb3cgY2xhc3NOYW1lPXtjeChzLnRleHRCb2xkLCBzLnNwYWNlVG9wMil9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17N30gc209ezd9IGNsYXNzTmFtZT17cy50ZXh0TGVmdH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5taXNzZWRFYXJuaW5nc30gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e3MudGV4dFJpZ2h0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e21pc3NlZEVhcm5pbmdzfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlclR5cGUgPT09ICdndWVzdCcgJiYgcmVmdW5kID4gMCAmJiA8Um93IGNsYXNzTmFtZT17Y3gocy50ZXh0Qm9sZCwgcy5zcGFjZVRvcDIpfT5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezd9IHNtPXs3fSBjbGFzc05hbWU9e3MudGV4dExlZnR9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucmVmdW5kQW1vdW50fSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17NX0gc209ezV9IGNsYXNzTmFtZT17cy50ZXh0UmlnaHR9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lDb252ZXJ0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdGFtb3VudD17cmVmdW5kfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhbmNlbERldGFpbHMpKTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyBSZWR1eFxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG5cdFJvdyxcblx0Q29sLFxuXHRUb29sdGlwLFxuXHRPdmVybGF5VHJpZ2dlclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi4vVmlld01lc3NhZ2UuY3NzJztcbmltcG9ydCAqIGFzIEZvbnRBd2Vzb21lIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYSc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IEN1cnJlbmN5Q29udmVydGVyIGZyb20gJy4uLy4uL0N1cnJlbmN5Q29udmVydGVyJztcblxuLy8gSGVscGVyXG5pbXBvcnQgeyBjb252ZXJ0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jdXJyZW5jeUNvbnZlcnRpb24nO1xuXG4vLyBMb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBQYXltZW50RGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Zm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcblx0XHR1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGJhc2VQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdGNsZWFuaW5nUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRtb250aGx5RGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0d2Vla2x5RGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRlbmREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0c2VydmljZUZlZXM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRndWVzdDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0XHR2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdFx0XHRjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG5cdFx0XHR9KS5pc1JlcXVpcmVkLFxuXHRcdFx0aG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0XHR2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdFx0XHRjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG5cdFx0XHR9KS5pc1JlcXVpcmVkXG5cdFx0fSkuaXNSZXF1aXJlZCxcblx0XHRiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0cmF0ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0c3RhcnREYXRlOiBudWxsLFxuXHRcdGVuZERhdGU6IG51bGwsXG5cdFx0YmFzZVByaWNlOiAwLFxuXHRcdGNsZWFuaW5nUHJpY2U6IDAsXG5cdFx0bW9udGhseURpc2NvdW50OiAwLFxuXHRcdHdlZWtseURpc2NvdW50OiAwXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlLCBiYXNlUHJpY2UsIGNsZWFuaW5nUHJpY2UsIGN1cnJlbmN5LCBtb250aGx5RGlzY291bnQsIHdlZWtseURpc2NvdW50LCB1c2VyVHlwZSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHNlcnZpY2VGZWVzLCBiYXNlLCByYXRlcyB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHJlc2VydmF0aW9uRGF0YSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcblxuXHRcdGZ1bmN0aW9uIExpbmtXaXRoVG9vbHRpcCh7IGlkLCBjaGlsZHJlbiwgaHJlZiwgdG9vbHRpcCB9KSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8T3ZlcmxheVRyaWdnZXJcblx0XHRcdFx0XHRvdmVybGF5PXs8VG9vbHRpcCBjbGFzc05hbWU9e3MudG9vbHRpcH0gaWQ9e2lkfT57dG9vbHRpcH08L1Rvb2x0aXA+fVxuXHRcdFx0XHRcdHBsYWNlbWVudD1cInRvcFwiXG5cdFx0XHRcdFx0ZGVsYXlTaG93PXszMDB9XG5cdFx0XHRcdFx0ZGVsYXlIaWRlPXsxNTB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7LyogPGEgaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT4gKi99XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L092ZXJsYXlUcmlnZ2VyPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvL2xldCBndWVzdFNlcnZpY2VGZWUgPSAxMDtcblx0XHQvL2xldCBob3N0U2VydmljZUZlZSA9IDIwO1xuXHRcdGxldCBndWVzdFNlcnZpY2VGZWUgPSAwLCBob3N0U2VydmljZUZlZSA9IDA7XG5cdFx0bGV0IGN1cnJlbnREYXksIGJvb2tpbmdTcGVjaWFsUHJpY2luZyA9IFtdLCBpc1NwZWNpYWxQcmljZUFzc2lnbmVkID0gZmFsc2U7XG5cdFx0bGV0IGlzU3BlY2lhbFByaWNpbmdBc3NpbmdlZCA9IChyZXNlcnZhdGlvbkRhdGEgJiYgcmVzZXJ2YXRpb25EYXRhLmJvb2tpbmdTcGVjaWFsUHJpY2luZy5sZW5ndGggPiAwKSA/IHRydWUgOiBmYWxzZTtcblx0XHRsZXQgaXNTcGVjaWFsUHJpY2UsIGlzRGF5VG90YWwgPSAwLCBpc0NsZWFuaW5nUHJpY2UgPSAwLCB0YXhSYXRlRmVlID0gMDtcblx0XHRsZXQgaXNEaXNjb3VudCwgaXNEaXNjb3VudFR5cGU7XG5cblxuXG5cdFx0bGV0IG1vbWVudFN0YXJ0RGF0ZSwgbW9tZW50RW5kRGF0ZSwgZGF5RGlmZmVyZW5jZSwgcHJpY2VGb3JEYXlzID0gMCwgdG90YWxXaXRob3V0U2VydmljZUZlZSA9IDA7XG5cdFx0bGV0IGRpc2NvdW50ID0gMCwgZGlzY291bnRUeXBlLCB0b3RhbCA9IDAsIGhvc3RFYXJuaW5ncyA9IDAsIGlzQXZlcmFnZSA9IDA7XG5cblx0XHRpZiAoc3RhcnREYXRlICE9IG51bGwgJiYgZW5kRGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRtb21lbnRTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKTtcblx0XHRcdG1vbWVudEVuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSk7XG5cdFx0XHRkYXlEaWZmZXJlbmNlID0gbW9tZW50RW5kRGF0ZS5kaWZmKG1vbWVudFN0YXJ0RGF0ZSwgJ2RheXMnKTtcblxuXHRcdFx0aWYgKGRheURpZmZlcmVuY2UgPiAwKSB7XG5cdFx0XHRcdGlmIChpc1NwZWNpYWxQcmljaW5nQXNzaW5nZWQpIHtcblx0XHRcdFx0XHRyZXNlcnZhdGlvbkRhdGEgJiYgcmVzZXJ2YXRpb25EYXRhLmJvb2tpbmdTcGVjaWFsUHJpY2luZyAmJiByZXNlcnZhdGlvbkRhdGEuYm9va2luZ1NwZWNpYWxQcmljaW5nLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHByaWNlRm9yRGF5cyA9IHByaWNlRm9yRGF5cyArIE51bWJlcihpdGVtLmlzU3BlY2lhbFByaWNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcmljZUZvckRheXMgPSBOdW1iZXIoYmFzZVByaWNlKSAqIE51bWJlcihkYXlEaWZmZXJlbmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlzQXZlcmFnZSA9IE51bWJlcihwcmljZUZvckRheXMpIC8gTnVtYmVyKGRheURpZmZlcmVuY2UpO1xuXHRcdGlzRGF5VG90YWwgPSBpc0F2ZXJhZ2UudG9GaXhlZCgyKSAqIGRheURpZmZlcmVuY2U7XG5cdFx0cHJpY2VGb3JEYXlzID0gaXNEYXlUb3RhbDtcblxuXHRcdGlzRGlzY291bnQgPSByZXNlcnZhdGlvbkRhdGEgJiYgcmVzZXJ2YXRpb25EYXRhLmRpc2NvdW50O1xuXHRcdGlzRGlzY291bnRUeXBlID0gcmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS5kaXNjb3VudFR5cGU7XG5cdFx0aXNDbGVhbmluZ1ByaWNlID0gcmVzZXJ2YXRpb25EYXRhICYmIHJlc2VydmF0aW9uRGF0YS5jbGVhbmluZ1ByaWNlO1xuXHRcdHRheFJhdGVGZWUgPSByZXNlcnZhdGlvbkRhdGEgJiYgcmVzZXJ2YXRpb25EYXRhLnRheFJhdGUgJiYgcmVzZXJ2YXRpb25EYXRhLnRheFJhdGUgPiAwID8gcmVzZXJ2YXRpb25EYXRhLnRheFJhdGUgOiAwO1xuXG5cdFx0aWYgKGRheURpZmZlcmVuY2UgPj0gNykge1xuXHRcdFx0aWYgKG1vbnRobHlEaXNjb3VudCA+IDAgJiYgZGF5RGlmZmVyZW5jZSA+PSAyOCkge1xuXHRcdFx0XHRkaXNjb3VudCA9IGlzRGlzY291bnQ7XG5cdFx0XHRcdGRpc2NvdW50VHlwZSA9IGlzRGlzY291bnRUeXBlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdlZWtseURpc2NvdW50ID4gMCkge1xuXHRcdFx0XHRcdGRpc2NvdW50ID0gaXNEaXNjb3VudDtcblx0XHRcdFx0XHRkaXNjb3VudFR5cGUgPSBpc0Rpc2NvdW50VHlwZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHRvdGFsV2l0aG91dFNlcnZpY2VGZWUgPSAocHJpY2VGb3JEYXlzICsgaXNDbGVhbmluZ1ByaWNlICsgdGF4UmF0ZUZlZSkgLSBkaXNjb3VudDtcblx0XHR0b3RhbFdpdGhvdXRTZXJ2aWNlRmVlID0gKHByaWNlRm9yRGF5cyArIGlzQ2xlYW5pbmdQcmljZSkgLSBkaXNjb3VudDtcblxuXHRcdGlmIChzZXJ2aWNlRmVlcykge1xuXHRcdFx0aWYgKHNlcnZpY2VGZWVzLmd1ZXN0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuXHRcdFx0XHRndWVzdFNlcnZpY2VGZWUgPSB0b3RhbFdpdGhvdXRTZXJ2aWNlRmVlICogKE51bWJlcihzZXJ2aWNlRmVlcy5ndWVzdC52YWx1ZSkgLyAxMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z3Vlc3RTZXJ2aWNlRmVlID0gY29udmVydChiYXNlLCByYXRlcywgc2VydmljZUZlZXMuZ3Vlc3QudmFsdWUsIHNlcnZpY2VGZWVzLmd1ZXN0LmN1cnJlbmN5LCBjdXJyZW5jeSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZXJ2aWNlRmVlcy5ob3N0LnR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuXHRcdFx0XHRob3N0U2VydmljZUZlZSA9IHRvdGFsV2l0aG91dFNlcnZpY2VGZWUgKiAoTnVtYmVyKHNlcnZpY2VGZWVzLmhvc3QudmFsdWUpIC8gMTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvc3RTZXJ2aWNlRmVlID0gY29udmVydChiYXNlLCByYXRlcywgc2VydmljZUZlZXMuaG9zdC52YWx1ZSwgc2VydmljZUZlZXMuaG9zdC5jdXJyZW5jeSwgY3VycmVuY3kpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cblx0XHRpZiAodXNlclR5cGUgPT09ICdob3N0Jykge1xuXHRcdFx0dG90YWwgPSAocHJpY2VGb3JEYXlzICsgaXNDbGVhbmluZ1ByaWNlKSAtIGRpc2NvdW50O1xuXHRcdFx0Ly8gdG90YWwgPSAocHJpY2VGb3JEYXlzICsgaXNDbGVhbmluZ1ByaWNlICsgdGF4UmF0ZUZlZSkgLSBkaXNjb3VudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG90YWwgPSAocHJpY2VGb3JEYXlzICsgZ3Vlc3RTZXJ2aWNlRmVlICsgaXNDbGVhbmluZ1ByaWNlKSAtIGRpc2NvdW50O1xuXHRcdFx0Ly8gdG90YWwgPSAocHJpY2VGb3JEYXlzICsgZ3Vlc3RTZXJ2aWNlRmVlICsgaXNDbGVhbmluZ1ByaWNlICsgdGF4UmF0ZUZlZSkgLSBkaXNjb3VudDtcblx0XHR9XG5cblx0XHRob3N0RWFybmluZ3MgPSB0b3RhbCAtIGhvc3RTZXJ2aWNlRmVlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9e3Muc3BhY2U0fT5cblx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMucGF5bWVudH0gLz48L3NwYW4+XG5cdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT17cy50ZXh0R3JheX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs3fSBzbT17N30gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmRpc3BsYXlGbGV4fT5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NwZWNpYWxQcmljaW5nQXNzaW5nZWQgJiYgPExpbmtXaXRoVG9vbHRpcFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0b29sdGlwPVwiQXZlcmFnZSByYXRlIHBlciBuaWdodCBmb3IgeW91ciB0cmlwLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJ0b29sdGlwLTFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KHMuaWNvblNlY3Rpb24sIHMudG9vbFRpcENvbG9yKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lLkZhUXVlc3Rpb24gY2xhc3NOYW1lPXtzLmluc3RhbnRJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbmtXaXRoVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RpcmVjdGlvbkx0cic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9hbW91bnQ9e2Jhc2VQcmljZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e2lzQXZlcmFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7JyB4J30ge2RheURpZmZlcmVuY2V9IHtkYXlEaWZmZXJlbmNlID4gMSA/IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMubmlnaHRzKSA6IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMubmlnaHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17NX0gc209ezV9IGNsYXNzTmFtZT17Y3gocy50ZXh0UmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lDb252ZXJ0ZXJcblx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e3ByaWNlRm9yRGF5c31cblx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlzQ2xlYW5pbmdQcmljZSA+IDAgJiYgPFJvdyBjbGFzc05hbWU9e3MudGV4dEdyYXl9PlxuXHRcdFx0XHRcdFx0PENvbCB4cz17N30gc209ezd9IGNsYXNzTmFtZT17Y3gocy50ZXh0TGVmdCwgJ3RleHRBbGlnblJpZ2h0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2xlYW5pbmdQcmljZX0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e2N4KHMudGV4dFJpZ2h0LCAndGV4dEFsaWduTGVmdFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBhbW91bnQ9e2NsZWFuaW5nUHJpY2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e2lzQ2xlYW5pbmdQcmljZX1cblx0XHRcdFx0XHRcdFx0XHRcdGZyb209e2N1cnJlbmN5fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsvKiBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRheFJhdGVGZWUgPiAwICYmIDxSb3cgY2xhc3NOYW1lPXtzLnRleHRHcmF5fT5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezd9IHNtPXs3fSBjbGFzc05hbWU9e3MudGV4dExlZnR9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudGF4UmF0ZX0gLz48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e3MudGV4dFJpZ2h0fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e3RheFJhdGVGZWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0fSAqL31cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGlzY291bnQgPiAwICYmIDxSb3cgY2xhc3NOYW1lPXtzLnRleHRHcmF5fT5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezd9IHNtPXs3fSBjbGFzc05hbWU9e2N4KHMudGV4dExlZnQsICd0ZXh0QWxpZ25SaWdodFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rpc2NvdW50VHlwZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezV9IHNtPXs1fSBjbGFzc05hbWU9e2N4KHMudGV4dFJpZ2h0LCBzLmRpc2NvdW50VGV4dCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdC0gPEN1cnJlbmN5Q29udmVydGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbW91bnQ9e2Rpc2NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlclR5cGUgPT09ICdndWVzdCcgJiYgZ3Vlc3RTZXJ2aWNlRmVlID4gMCAmJiA8Um93IGNsYXNzTmFtZT17cy50ZXh0R3JheX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs3fSBzbT17N30gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zZXJ2aWNlRmVlfSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17NX0gc209ezV9IGNsYXNzTmFtZT17Y3gocy50ZXh0UmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8Q3VycmVuY3lDb252ZXJ0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdGFtb3VudD17Z3Vlc3RTZXJ2aWNlRmVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlclR5cGUgPT09ICdndWVzdCcgJiYgPGhyIGNsYXNzTmFtZT17cy5ob3Jpem9udGFsTGluZX0gLz5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPXtjeChzLnRleHRCb2xkLCBzLnNwYWNlVG9wMil9PlxuXHRcdFx0XHRcdDxDb2wgeHM9ezZ9IHNtPXs2fSBjbGFzc05hbWU9e2N4KHMudGV4dExlZnQsICd0ZXh0QWxpZ25SaWdodFJ0bCcpfT5cblx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zdWJUb3RhbH0gLz48L3NwYW4+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCB4cz17Nn0gc209ezZ9IGNsYXNzTmFtZT17Y3gocy50ZXh0UmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuXHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdGFtb3VudD17dG90YWx9XG5cdFx0XHRcdFx0XHRcdFx0ZnJvbT17Y3VycmVuY3l9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIGhvc3RTZXJ2aWNlRmVlID4gMCAmJiA8Um93IGNsYXNzTmFtZT17cy50ZXh0R3JheX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs2fSBzbT17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRMZWZ0LCAndGV4dEFsaWduUmlnaHRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zZXJ2aWNlRmVlfSAvPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17Nn0gc209ezZ9IGNsYXNzTmFtZT17Y3gocy50ZXh0UmlnaHQsICd0ZXh0QWxpZ25MZWZ0UnRsJyl9PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQtXG5cdFx0XHQgICAgICAgICAgICAgICAgXHQ8Q3VycmVuY3lDb252ZXJ0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdGFtb3VudD17aG9zdFNlcnZpY2VGZWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIDxociBjbGFzc05hbWU9e3MuaG9yaXpvbnRhbExpbmV9IC8+XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIDxSb3cgY2xhc3NOYW1lPXtjeChzLnRleHRCb2xkLCBzLnNwYWNlVG9wMiwgcy5zcGFjZTMpfT5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezZ9IHNtPXs2fSBjbGFzc05hbWU9e2N4KHMudGV4dExlZnQsICd0ZXh0QWxpZ25SaWdodFJ0bCcpfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnlvdUVhcm59IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs2fSBzbT17Nn0gY2xhc3NOYW1lPXtjeChzLnRleHRSaWdodCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxDdXJyZW5jeUNvbnZlcnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0YW1vdW50PXtob3N0RWFybmluZ3N9XG5cdFx0XHRcdFx0XHRcdFx0XHRmcm9tPXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcblx0c2VydmljZUZlZXM6IHN0YXRlLmJvb2suc2VydmljZUZlZXMsXG5cdGJhc2U6IHN0YXRlLmN1cnJlbmN5LmJhc2UsXG5cdHJhdGVzOiBzdGF0ZS5jdXJyZW5jeS5yYXRlc1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShQYXltZW50RGV0YWlscykpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHtcblx0Um93LFxuXHRDb2xcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4uL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgKiBhcyBGb250QXdlc29tZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEnO1xuXG4vL0NvbXBvbmVudFxuaW1wb3J0IFBheW1lbnREZXRhaWxzIGZyb20gJy4vUGF5bWVudERldGFpbHMnO1xuaW1wb3J0IENhbmNlbERldGFpbHMgZnJvbSAnLi9DYW5jZWxEZXRhaWxzJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgVHJpcERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG5cdFx0bGlzdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0dXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHN0YXJ0RGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdGVuZERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRwZXJzb25DYXBhY2l0eTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdGJhc2VQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdGNsZWFuaW5nUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdG1vbnRobHlEaXNjb3VudDogUHJvcFR5cGVzLm51bWJlcixcblx0XHR3ZWVrbHlEaXNjb3VudDogUHJvcFR5cGVzLm51bWJlcixcblx0XHRjYW5jZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0Z3Vlc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0aG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRyZWZ1bmRUb0d1ZXN0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0cGF5b3V0VG9Ib3N0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFx0dG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0XHRjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHR9KSxcblx0XHRyZXNlcnZhdGlvbkRhdGE6IFByb3BUeXBlcy5hbnksXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHR0aXRsZTogJycsXG5cdFx0c3RhcnREYXRlOiBudWxsLFxuXHRcdGVuZERhdGU6IG51bGwsXG5cdFx0cGVyc29uQ2FwYWNpdHk6IDAsXG5cdFx0cmVzZXJ2YXRpb25EYXRhOiBudWxsXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdGl0bGUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcGVyc29uQ2FwYWNpdHksIGxpc3RJZCwgcmVzZXJ2YXRpb25EYXRhIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuXHRcdGNvbnN0IHsgYmFzZVByaWNlLCBjbGVhbmluZ1ByaWNlLCB3ZWVrbHlEaXNjb3VudCwgbW9udGhseURpc2NvdW50LCB1c2VyVHlwZSwgY3VycmVuY3ksIGNhbmNlbERhdGEgfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IGNoZWNrSW4gPSBzdGFydERhdGUgIT0gbnVsbCA/IG1vbWVudChzdGFydERhdGUpLmZvcm1hdCgnZGRkLCBEbyBNTU0nKSA6ICcnO1xuXHRcdGxldCBjaGVja091dCA9IHN0YXJ0RGF0ZSAhPSBudWxsID8gbW9tZW50KGVuZERhdGUpLmZvcm1hdCgnZGRkLCBEbyBNTU0nKSA6ICcnO1xuXG5cdFx0bGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG5cdFx0aWYgKGNhbmNlbERhdGEpIHtcblx0XHRcdGlzQ2FuY2VsbGVkID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChzLnNwYWNlNCwgcy5zcGFjZVRvcDYsIHMuc2lkZWJhckNvbnRhaW5lcil9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZTR9PlxuXHRcdFx0XHRcdDxoND48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudHJpcERldGFpbHN9IC8+PC9oND5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnNwYWNlNH0+XG5cdFx0XHRcdFx0ey8qIDxMaW5rIHRvPXtcIi9yb29tcy9cIiArIGxpc3RJZH0gY2xhc3NOYW1lPXtzLnRpbWVUZXh0fT4gKi99XG5cdFx0XHRcdFx0PGEgaHJlZj17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0PGg0Pnt0aXRsZX08L2g0PlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHR7LyogPC9MaW5rPiAqL31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnNwYWNlMn0+XG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT17cy5ob3Jpem9uZGFsTGluZX0gLz5cblx0XHRcdFx0XHQ8Um93IGNsYXNzTmFtZT17Y3gocy5zcGFjZVRvcDMsIHMuc3BhY2UzKX0+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtzLm5vUGFkZGluZ1JpZ2h0fT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KHMudGV4dEdyYXksIHMuc3BhY2UxKX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmNoZWNrSW59IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY2hlY2tJbkRhdGV9PntjaGVja0lufTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXsxfSBzbT17MX0+XG5cdFx0XHRcdFx0XHRcdDxGb250QXdlc29tZS5GYUNoZXZyb25SaWdodCBjbGFzc05hbWU9e2N4KHMudGV4dEdyYXksIHMuY2hldnJvbkljb24pfSAvPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXs1fSBzbT17NX0gY2xhc3NOYW1lPXtjeChzLnB1bGxSaWdodCwgcy50ZXh0TGVmdCwgJ3ZpZXdNZXNzYWdlQ2hlY2tPdXRTZWN0aW9uJyl9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3gocy50ZXh0R3JheSwgcy5zcGFjZTEpfT5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2hlY2tPdXR9IC8+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY2hlY2tJbkRhdGV9PntjaGVja091dH08L2Rpdj5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9e3MuaG9yaXpvbmRhbExpbmV9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zcGFjZTJ9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChzLnRleHRHcmF5LCBzLnNwYWNlMSl9PlxuXHRcdFx0XHRcdFx0PHNwYW4+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmd1ZXN0c30gLz48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Muc3BhY2UzfT5cblx0XHRcdFx0XHRcdDxzcGFuPntwZXJzb25DYXBhY2l0eX0ge3BlcnNvbkNhcGFjaXR5ID4gMSA/IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZ3Vlc3RzQ2FwY2l0eSkgOiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmd1ZXN0Q2FwY2l0eSl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9e3MuaG9yaXpvbmRhbExpbmV9IC8+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IWlzQ2FuY2VsbGVkICYmIHJlc2VydmF0aW9uRGF0YSAmJiA8UGF5bWVudERldGFpbHNcblx0XHRcdFx0XHRcdFx0dXNlclR5cGU9e3VzZXJUeXBlfVxuXHRcdFx0XHRcdFx0XHRzdGFydERhdGU9e3N0YXJ0RGF0ZX1cblx0XHRcdFx0XHRcdFx0ZW5kRGF0ZT17ZW5kRGF0ZX1cblx0XHRcdFx0XHRcdFx0YmFzZVByaWNlPXtiYXNlUHJpY2V9XG5cdFx0XHRcdFx0XHRcdGNsZWFuaW5nUHJpY2U9e2NsZWFuaW5nUHJpY2V9XG5cdFx0XHRcdFx0XHRcdHdlZWtseURpc2NvdW50PXt3ZWVrbHlEaXNjb3VudH1cblx0XHRcdFx0XHRcdFx0bW9udGhseURpc2NvdW50PXttb250aGx5RGlzY291bnR9XG5cdFx0XHRcdFx0XHRcdGN1cnJlbmN5PXtjdXJyZW5jeX1cblx0XHRcdFx0XHRcdFx0cmVzZXJ2YXRpb25EYXRhPXtyZXNlcnZhdGlvbkRhdGF9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlzQ2FuY2VsbGVkICYmIDxDYW5jZWxEZXRhaWxzXG5cdFx0XHRcdFx0XHRcdHVzZXJUeXBlPXt1c2VyVHlwZX1cblx0XHRcdFx0XHRcdFx0Y2FuY2VsRGF0YT17Y2FuY2VsRGF0YX1cblx0XHRcdFx0XHRcdFx0cmVzZXJ2YXRpb25EYXRhPXtyZXNlcnZhdGlvbkRhdGF9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKFRyaXBEZXRhaWxzKSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuLi9WaWV3TWVzc2FnZS5jc3MnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vQXZhdGFyJztcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnO1xuXG4vLyBMb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBVc2VyRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZXZpZXdzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmVyaWZpY2F0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlzRW1haWxDb25maXJtZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaXNGYWNlYm9va0Nvbm5lY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpc0dvb2dsZUNvbm5lY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwaWN0dXJlOiBudWxsLFxuICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICBsb2NhdGlvbjogJycsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvZmlsZUlkLCBwaWN0dXJlLCBkaXNwbGF5TmFtZSwgbG9jYXRpb24sIHZlcmlmaWNhdGlvbnMsIHJldmlld3NDb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICBsZXQgdG90YWxWZXJpZmljYXRpb24gPSAwO1xuICAgIGlmICh2ZXJpZmljYXRpb25zKSB7XG4gICAgICBpZiAodmVyaWZpY2F0aW9ucy5pc0VtYWlsQ29uZmlybWVkKSB7IHRvdGFsVmVyaWZpY2F0aW9uICs9IDE7IH1cbiAgICAgIGlmICh2ZXJpZmljYXRpb25zLmlzRmFjZWJvb2tDb25uZWN0ZWQpIHsgdG90YWxWZXJpZmljYXRpb24gKz0gMTsgfVxuICAgICAgaWYgKHZlcmlmaWNhdGlvbnMuaXNHb29nbGVDb25uZWN0ZWQpIHsgdG90YWxWZXJpZmljYXRpb24gKz0gMTsgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuc2lkZWJhckNvbnRhaW5lciwgcy50ZXh0Q2VudGVyKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJTZWN0aW9ufT5cbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIHdpZHRoPXsxNTB9XG4gICAgICAgICAgICB0aXRsZT17ZGlzcGxheU5hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3MucHJvZmlsZUF2YXRhcn1cbiAgICAgICAgICAgIHdpdGhMaW5rXG4gICAgICAgICAgICBsaW5rQ2xhc3NOYW1lPXtzLnByb2ZpbGVBdmF0YXJMaW5rfVxuICAgICAgICAgICAgcHJvZmlsZUlkPXtwcm9maWxlSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNwYWNlVG9wM30+XG4gICAgICAgICAgPExpbmsgdG89e1wiL3VzZXJzL3Nob3cvXCIgKyBwcm9maWxlSWR9PjxoNCBjbGFzc05hbWU9e3MucHJvZmlsZU5hbWV9PntkaXNwbGF5TmFtZX08L2g0PjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnNwYWNlVG9wMSwgcy5wcm9maWxlRGV0YWlsKX0+XG4gICAgICAgICAgPHNwYW4+e2xvY2F0aW9ufTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICA8c3Bhbj57dG90YWxWZXJpZmljYXRpb259IHt0b3RhbFZlcmlmaWNhdGlvbiA+IDEgPyBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnZlcmlmaWNhdGlvbnMpIDogZm9ybWF0TWVzc2FnZShtZXNzYWdlcy52ZXJpZmljYXRpb24pfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4mbmJzcDsuJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntyZXZpZXdzQ291bnR9IHtyZXZpZXdzQ291bnQgPiAxID8gZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZXZpZXdzKSA6IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMucmV2aWV3KX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocykoVXNlckRldGFpbCkpO1xuXG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1ZpZXdNZXNzYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3TWVzc2FnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3TWVzc2FnZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbi8vIFJlZHV4XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgUm93LFxuICBDb2wsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1ZpZXdNZXNzYWdlLmNzcyc7XG4vLyBDb21wb25lbnRcbmltcG9ydCBVc2VyRGV0YWlsIGZyb20gJy4vVXNlckRldGFpbCc7XG5pbXBvcnQgVHJpcERldGFpbHMgZnJvbSAnLi9UcmlwRGV0YWlscyc7XG5pbXBvcnQgQWN0aW9uQmxvY2sgZnJvbSAnLi9BY3Rpb25CbG9jayc7XG5pbXBvcnQgU2VuZE1lc3NhZ2UgZnJvbSAnLi9TZW5kTWVzc2FnZSc7XG5pbXBvcnQgVGhyZWFkSXRlbXMgZnJvbSAnLi9UaHJlYWRJdGVtcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5pbXBvcnQgR3Vlc3RIb3N0RGV0YWlscyBmcm9tICcuL0d1ZXN0SG9zdERldGFpbHMnO1xuLy8gR3JhcGhxbFxuaW1wb3J0IEdldFRocmVhZFF1ZXJ5IGZyb20gJy4vR2V0VGhyZWFkUXVlcnkuZ3JhcGhxbCc7XG5pbXBvcnQgR2V0TW9yZVRocmVhZEl0ZW1zUXVlcnkgZnJvbSAnLi9HZXRNb3JlVGhyZWFkSXRlbXNRdWVyeS5ncmFwaHFsJztcbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5jbGFzcyBWaWV3TWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0TWVzc2FnZTogUHJvcFR5cGVzLmFueSxcbiAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGhyZWFkSXRlbXNEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIGdldFRocmVhZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZ3Vlc3RQcm9maWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBmaXJzdHlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgcmV2aWV3c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgIHVzZXJWZXJpZmljYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIH0pLFxuICAgICAgICBndWVzdFVzZXJEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgdXNlckJhblN0YXR1czogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgfSksXG4gICAgICAgIGhvc3RQcm9maWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHByb2ZpbGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBmaXJzdHlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgcmV2aWV3c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgIHVzZXJWZXJpZmljYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIH0pLFxuICAgICAgICBob3N0VXNlckRhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICB1c2VyQmFuU3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB9KSxcbiAgICAgICAgdGhyZWFkSXRlbUZvclR5cGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgcmVzZXJ2YXRpb25JZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBlbmREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgcGVyc29uQ2FwYWNpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBjYW5jZWxEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgZ3Vlc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICByZWZ1bmRUb0d1ZXN0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgcGF5b3V0VG9Ib3N0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbGlzdERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICBsaXN0aW5nRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGJhc2VQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgY2xlYW5pbmdQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICB9KSxcbiAgICB9KSxcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aHJlYWRJZDogbnVsbCxcbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5sb2FkTW9yZSA9IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgfVxuICBsb2FkTW9yZSgpIHtcbiAgICBjb25zdCB7IHRocmVhZEl0ZW1zRGF0YTogeyBsb2FkaW5nLCBnZXRUaHJlYWQ6IHsgdGhyZWFkSXRlbXMgfSwgZmV0Y2hNb3JlIH0sIHRocmVhZElkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZmV0Y2hNb3JlKHtcbiAgICAgIHF1ZXJ5OiBHZXRNb3JlVGhyZWFkSXRlbXNRdWVyeSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgb2Zmc2V0OiB0aHJlYWRJdGVtcy5sZW5ndGgsXG4gICAgICB9LFxuICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgeyByZXR1cm4gcHJldmlvdXNSZXN1bHQ7IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXRUaHJlYWQ6IHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzUmVzdWx0LmdldFRocmVhZCxcbiAgICAgICAgICAgIHRocmVhZEl0ZW1zOiBbLi4ucHJldmlvdXNSZXN1bHQuZ2V0VGhyZWFkLnRocmVhZEl0ZW1zLCAuLi5mZXRjaE1vcmVSZXN1bHQuZ2V0QWxsVGhyZWFkSXRlbXNdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRocmVhZEl0ZW1zRGF0YTogeyBsb2FkaW5nLCBnZXRUaHJlYWQgfSwgdXNlclR5cGUsIHRocmVhZElkLCBpc0FkbWluQXV0aGVudGljYXRlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFjY291bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGVyIHR5cGU9eyd0ZXh0J30gLz47XG4gICAgfVxuICAgIGlmIChnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlICYmIGdldFRocmVhZC5ob3N0UHJvZmlsZSAmJiBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlKSB7XG4gICAgICBsZXQgcmVjZWl2ZXJOYW1lID0gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5maXJzdE5hbWU7XG4gICAgICBsZXQgaG9zdFVzZXJCYW5TdGF0dXMgPSBnZXRUaHJlYWQuaG9zdFVzZXJEYXRhLnVzZXJCYW5TdGF0dXM7XG4gICAgICBsZXQgZ3Vlc3RVc2VyQmFuU3RhdHVzID0gZ2V0VGhyZWFkLmd1ZXN0VXNlckRhdGEudXNlckJhblN0YXR1cztcbiAgICAgIGxldCBzZW5kZXJOYW1lID0gZ2V0VGhyZWFkLmhvc3RQcm9maWxlLmZpcnN0TmFtZTtcbiAgICAgIGxldCByZWNlaXZlclR5cGUgPSAnZ3Vlc3QnLCBpc0xpc3RBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIGxldCByZWNlaXZlckVtYWlsID0gZ2V0VGhyZWFkLmd1ZXN0VXNlckRhdGEuZW1haWw7XG4gICAgICBpZiAodXNlclR5cGUgPT09IFwiZ3Vlc3RcIikge1xuICAgICAgICByZWNlaXZlck5hbWUgPSBnZXRUaHJlYWQuaG9zdFByb2ZpbGUuZmlyc3ROYW1lO1xuICAgICAgICBzZW5kZXJOYW1lID0gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5maXJzdE5hbWU7XG4gICAgICAgIHJlY2VpdmVyVHlwZSA9ICdob3N0JztcbiAgICAgICAgcmVjZWl2ZXJFbWFpbCA9IGdldFRocmVhZC5ob3N0VXNlckRhdGEuZW1haWw7XG4gICAgICB9XG4gICAgICBsZXQgbGlzdFB1Ymxpc2hTdGF0dXM7XG4gICAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgdGhyZWFkVHlwZTogdXNlclR5cGUsXG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgcmVjZWl2ZXJOYW1lLFxuICAgICAgICBzZW5kZXJOYW1lLFxuICAgICAgICByZWNlaXZlclR5cGUsXG4gICAgICAgIHJlY2VpdmVyRW1haWxcbiAgICAgIH07XG5cbiAgICAgIGlmIChnZXRUaHJlYWQgJiYgZ2V0VGhyZWFkLmxpc3REYXRhKSB7XG4gICAgICAgIGlzTGlzdEF2YWlsYWJsZSA9IHRydWVcbiAgICAgIH1cblxuXG4gICAgICBpZiAoZ2V0VGhyZWFkICYmIGdldFRocmVhZC5saXN0RGF0YSkge1xuICAgICAgICBsaXN0UHVibGlzaFN0YXR1cyA9IGdldFRocmVhZC5saXN0RGF0YS5pc1B1Ymxpc2hlZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezV9IHhzPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNpZGViYXJEZXNpZ24sIHMuc3BhY2U0LCAnaGlkZGVuLXhzJyl9PlxuICAgICAgICAgICAgICA8VXNlckRldGFpbFxuICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUucHJvZmlsZUlkIDogZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICBwaWN0dXJlPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5waWN0dXJlIDogZ2V0VGhyZWFkLmhvc3RQcm9maWxlLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLmRpc3BsYXlOYW1lIDogZ2V0VGhyZWFkLmhvc3RQcm9maWxlLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5sb2NhdGlvbiA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICByZXZpZXdzQ291bnQ9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnJldmlld3NDb3VudCA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5yZXZpZXdzQ291bnR9XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9ucz17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUudXNlclZlcmlmaWNhdGlvbiA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS51c2VyVmVyaWZpY2F0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNMaXN0QXZhaWxhYmxlICYmIDxUcmlwRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgbGlzdElkPXtnZXRUaHJlYWQubGlzdElkfVxuICAgICAgICAgICAgICAgICAgdXNlclR5cGU9e3VzZXJUeXBlfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2dldFRocmVhZC5saXN0RGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGJhc2VQcmljZT17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLmJhc2VQcmljZX1cbiAgICAgICAgICAgICAgICAgIGNsZWFuaW5nUHJpY2U9e2dldFRocmVhZC5saXN0RGF0YS5saXN0aW5nRGF0YS5jbGVhbmluZ1ByaWNlfVxuICAgICAgICAgICAgICAgICAgbW9udGhseURpc2NvdW50PXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEubW9udGhseURpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgd2Vla2x5RGlzY291bnQ9e2dldFRocmVhZC5saXN0RGF0YS5saXN0aW5nRGF0YS53ZWVrbHlEaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEuY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5zdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgIHBlcnNvbkNhcGFjaXR5PXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUucGVyc29uQ2FwYWNpdHl9XG4gICAgICAgICAgICAgICAgICBjYW5jZWxEYXRhPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuY2FuY2VsRGF0YX1cbiAgICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uRGF0YT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLnJlc2VydmF0aW9uIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhaXNMaXN0QXZhaWxhYmxlICYmIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ub0xpc3R9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezh9IHNtPXs3fSB4cz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZTQsIHMucGFkZGluZ1JpZ2h0LCAncGFkZGluZ1JpZ2h0QVInKX0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhaXNBZG1pbkF1dGhlbnRpY2F0ZWQgJiYgIWd1ZXN0VXNlckJhblN0YXR1cyAmJiAhaG9zdFVzZXJCYW5TdGF0dXMgJiYgPEFjdGlvbkJsb2NrXG4gICAgICAgICAgICAgICAgICB0aHJlYWRUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgIGFjdGlvblR5cGU9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS50eXBlfVxuICAgICAgICAgICAgICAgICAgdGhyZWFkSWQ9e3RocmVhZElkfVxuICAgICAgICAgICAgICAgICAgbGlzdElkPXtnZXRUaHJlYWQubGlzdElkfVxuICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25JZD17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLnJlc2VydmF0aW9uSWR9XG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5zdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgIHBlcnNvbkNhcGFjaXR5PXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUucGVyc29uQ2FwYWNpdHl9XG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICBob3N0RGlzcGxheU5hbWU9e2dldFRocmVhZC5ob3N0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgIGd1ZXN0RGlzcGxheU5hbWU9e2dldFRocmVhZC5ndWVzdFByb2ZpbGUuZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICBndWVzdEVtYWlsPXtnZXRUaHJlYWQuZ3Vlc3RVc2VyRGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtnZXRUaHJlYWQubGlzdERhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBsaXN0UHVibGlzaFN0YXR1cz17bGlzdFB1Ymxpc2hTdGF0dXN9XG4gICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbkRhdGE9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5yZXNlcnZhdGlvbiB8fCB7fX1cbiAgICAgICAgICAgICAgICAgIGNvdW50cnk9e2dldFRocmVhZC5saXN0RGF0YS5jb3VudHJ5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5cbiAgICAgICAgICAgICAgICA8R3Vlc3RIb3N0RGV0YWlsc1xuICAgICAgICAgICAgICAgICAgdXNlclR5cGU9e3VzZXJUeXBlfVxuICAgICAgICAgICAgICAgICAgdGhyZWFkSWQ9e3RocmVhZElkfVxuICAgICAgICAgICAgICAgICAgZ2V0VGhyZWFkPXtnZXRUaHJlYWR9XG4gICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIWlzQWRtaW5BdXRoZW50aWNhdGVkICYmIDxTZW5kTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cbiAgICAgICAgICAgICAgICAgIHRocmVhZElkPXt0aHJlYWRJZH1cbiAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ob3N0UHJvZmlsZS5wcm9maWxlSWQgOiBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnByb2ZpbGVJZH1cbiAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuaG9zdFByb2ZpbGUucGljdHVyZSA6IGdldFRocmVhZC5ndWVzdFByb2ZpbGUucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmhvc3RQcm9maWxlLmRpc3BsYXlOYW1lIDogZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxUaHJlYWRJdGVtc1xuICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICB0aHJlYWRJZD17dGhyZWFkSWR9XG4gICAgICAgICAgICAgICAgZGF0YT17Z2V0VGhyZWFkfVxuICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIGxnPXs0fSBtZD17NH0gc209ezR9IHhzPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNpZGViYXJEZXNpZ24sIHMuc3BhY2U0LCAndmlzaWJsZS14cycpfT5cbiAgICAgICAgICAgICAgPFVzZXJEZXRhaWxcbiAgICAgICAgICAgICAgICBwcm9maWxlSWQ9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnByb2ZpbGVJZCA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgcGljdHVyZT17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUucGljdHVyZSA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5waWN0dXJlfVxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5kaXNwbGF5TmFtZSA6IGdldFRocmVhZC5ob3N0UHJvZmlsZS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbj17dXNlclR5cGUgPT09ICdob3N0JyA/IGdldFRocmVhZC5ndWVzdFByb2ZpbGUubG9jYXRpb24gOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUubG9jYXRpb259XG4gICAgICAgICAgICAgICAgcmV2aWV3c0NvdW50PXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZ2V0VGhyZWFkLmd1ZXN0UHJvZmlsZS5yZXZpZXdzQ291bnQgOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUucmV2aWV3c0NvdW50fVxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbnM9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBnZXRUaHJlYWQuZ3Vlc3RQcm9maWxlLnVzZXJWZXJpZmljYXRpb24gOiBnZXRUaHJlYWQuaG9zdFByb2ZpbGUudXNlclZlcmlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzTGlzdEF2YWlsYWJsZSAmJiA8VHJpcERldGFpbHNcbiAgICAgICAgICAgICAgICAgIGxpc3RJZD17Z2V0VGhyZWFkLmxpc3RJZH1cbiAgICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtnZXRUaHJlYWQubGlzdERhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICBiYXNlUHJpY2U9e2dldFRocmVhZC5saXN0RGF0YS5saXN0aW5nRGF0YS5iYXNlUHJpY2V9XG4gICAgICAgICAgICAgICAgICBjbGVhbmluZ1ByaWNlPXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEuY2xlYW5pbmdQcmljZX1cbiAgICAgICAgICAgICAgICAgIG1vbnRobHlEaXNjb3VudD17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLm1vbnRobHlEaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgIHdlZWtseURpc2NvdW50PXtnZXRUaHJlYWQubGlzdERhdGEubGlzdGluZ0RhdGEud2Vla2x5RGlzY291bnR9XG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeT17Z2V0VGhyZWFkLmxpc3REYXRhLmxpc3RpbmdEYXRhLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtnZXRUaHJlYWQudGhyZWFkSXRlbUZvclR5cGUuc3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICBwZXJzb25DYXBhY2l0eT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLnBlcnNvbkNhcGFjaXR5fVxuICAgICAgICAgICAgICAgICAgY2FuY2VsRGF0YT17Z2V0VGhyZWFkLnRocmVhZEl0ZW1Gb3JUeXBlLmNhbmNlbERhdGF9XG4gICAgICAgICAgICAgICAgICByZXNlcnZhdGlvbkRhdGE9e2dldFRocmVhZC50aHJlYWRJdGVtRm9yVHlwZS5yZXNlcnZhdGlvbiB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIWlzTGlzdEF2YWlsYWJsZSAmJiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9MaXN0fSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBtZD17N30gbWRQdXNoPXs1fSBjbGFzc05hbWU9e3Muc3BhY2U0fT5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ub1RocmVhZEZvdW5kfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgaXNBZG1pbkF1dGhlbnRpY2F0ZWQ6IHN0YXRlLnJ1bnRpbWUuaXNBZG1pbkF1dGhlbnRpY2F0ZWQsXG4gIGFjY291bnQ6IHN0YXRlLmFjY291bnQuZGF0YSxcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdHlsZXMocyksXG4gIGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKSxcbiAgZ3JhcGhxbChHZXRUaHJlYWRRdWVyeSwge1xuICAgIG5hbWU6ICd0aHJlYWRJdGVtc0RhdGEnLFxuICAgIG9wdGlvbnM6IHByb3BzID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgdGhyZWFkSWQ6IHByb3BzLnRocmVhZElkLFxuICAgICAgICB0aHJlYWRUeXBlOiBwcm9wcy51c2VyVHlwZSxcbiAgICAgIH0sXG4gICAgICBzc3I6IGZhbHNlLFxuICAgICAgLy9wb2xsSW50ZXJ2YWw6IDUwMDAsXG4gICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgfSksXG4gIH0pLFxuKShWaWV3TWVzc2FnZSk7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1ZpZXdNZXNzYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3TWVzc2FnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9WaWV3TWVzc2FnZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1ZpZXdNZXNzYWdlLmNzcyc7XG5pbXBvcnQgVmlld01lc3NhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWV3TWVzc2FnZSc7XG5cbmNsYXNzIFZpZXdNZXNzYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aHJlYWRJZCwgdXNlclR5cGUgfSA9IHRoaXMucHJvcHM7XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5iZ0NvbG9yfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgICAgIDxWaWV3TWVzc2FnZSB0aHJlYWRJZD17dGhyZWFkSWR9IHVzZXJUeXBlPXt1c2VyVHlwZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVmlld01lc3NhZ2VDb250YWluZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L1VzZXJMYXlvdXQnO1xuaW1wb3J0IFZpZXdNZXNzYWdlIGZyb20gJy4vVmlld01lc3NhZ2UnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vbm90Rm91bmQvTm90Rm91bmQnO1xuaW1wb3J0IHsgbG9hZEFjY291bnQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgcmVzdHJpY3RVcmxzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hZG1pblByaXZpbGVnZXMnO1xuXG5jb25zdCB0aXRsZSA9ICdWaWV3TWVzc2FnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHN0b3JlLCBwYXJhbXMgfSkge1xuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChsb2FkQWNjb3VudCgpKTtcbiAgLy8gRnJvbSBSZWR1eCBTdG9yZVxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBzdG9yZS5nZXRTdGF0ZSgpLnJ1bnRpbWUuaXNBdXRoZW50aWNhdGVkO1xuICBjb25zdCBpc0FkbWluQXV0aGVudGljYXRlZCA9IHN0b3JlLmdldFN0YXRlKCkucnVudGltZS5pc0FkbWluQXV0aGVudGljYXRlZDtcbiAgY29uc3QgaXNBY2NvdW50ID0gc3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50LmRhdGE7XG4gIGxldCBhZG1pblByaXZpbGVnZXMgPSBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzICYmIHN0b3JlLmdldFN0YXRlKCkuYWRtaW5QcmV2aWxlZ2VzLnByaXZpbGVnZXMucHJpdmlsZWdlcztcblxuICBsZXQgdXNlckJhblN0YXR1cztcbiAgaWYgKGlzQWNjb3VudCkge1xuICAgIHVzZXJCYW5TdGF0dXMgPSBpc0FjY291bnQudXNlckJhblN0YXR1cztcbiAgfVxuICAvLyBGcm9tIFVSTFxuICBjb25zdCB0aHJlYWRJZCA9IE51bWJlcihwYXJhbXMudGhyZWFkSWQpO1xuICBjb25zdCB1c2VyVHlwZSA9IHBhcmFtcy50eXBlO1xuXG4gIGlmICghaXNBZG1pbkF1dGhlbnRpY2F0ZWQgJiYgIWlzQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL2xvZ2luJyB9O1xuICB9XG5cbiAgLy8gQWRtaW4gcmVzdHJpY3Rpb25cbiAgaWYgKGlzQWRtaW5BdXRoZW50aWNhdGVkICYmICFyZXN0cmljdFVybHMoJy9tZXNzYWdlLycsIGFkbWluUHJpdmlsZWdlcykpIHtcbiAgICByZXR1cm4geyByZWRpcmVjdDogJy9zaXRlYWRtaW4nIH07XG4gIH1cblxuICBpZiAodXNlclR5cGUgIT0gJ2hvc3QnICYmIHVzZXJUeXBlICE9ICdndWVzdCcgfHwgdXNlckJhblN0YXR1cykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGNvbXBvbmVudDogPExheW91dD48Tm90Rm91bmQgdGl0bGU9e3RpdGxlfSAvPjwvTGF5b3V0PixcbiAgICAgIHN0YXR1czogNDA0XG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogPFVzZXJMYXlvdXQ+PFZpZXdNZXNzYWdlXG4gICAgICB0aHJlYWRJZD17dGhyZWFkSWR9XG4gICAgICB1c2VyVHlwZT17dXNlclR5cGV9XG4gICAgLz5cbiAgICA8L1VzZXJMYXlvdXQ+LFxuICB9O1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVJBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBVEE7QUFGQTtBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25JQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFaQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQXZDQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUF1Q0E7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBdkZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUZBO0FBWUE7QUFDQTtBQUZBO0FBQ0E7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFqQkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQUZBO0FBZ0JBO0FBREE7QUFDQTtBQXNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpOQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBeU5BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdkxBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUF1TEE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7O0FDN05BO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQTNFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFDQTtBQTJFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBeEJBO0FBQ0E7QUF5QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqRUE7QUFvRkE7QUFDQTtBQXBIQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQW9IQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7O0FDckpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQTlEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUZBO0FBVUE7QUFEQTtBQUNBO0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQXREQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUFpREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQXJHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFqQkE7QUFKQTtBQUNBO0FBRkE7QUEyQkE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBNEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQ0E7QUE1REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFGQTtBQVVBO0FBREE7QUFDQTtBQW9EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQTVGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBQ0E7QUE0RkE7QUFDQTtBQUVBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBb0NBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFHQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBN1NBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVlBO0FBQ0E7QUF2QkE7QUFDQTtBQUZBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFtUkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQS9HQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFyQkE7QUFDQTtBQUZBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBdUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQXhEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFDQTtBQUZBO0FBZ0JBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUEwQ0E7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFNQTtBQWRBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQXhQQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU5BO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQTFDQTtBQUZBO0FBSkE7QUFDQTtBQUZBO0FBNkRBO0FBREE7QUFDQTtBQTRMQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBRkE7Ozs7Ozs7QUM1UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFRQTs7OztBIiwic291cmNlUm9vdCI6IiJ9