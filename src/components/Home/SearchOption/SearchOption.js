import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./SearchOption.css";
import cx from "classnames";
import * as FontAwesome from "react-icons/lib/fa";
class SearchOption extends Component {
  render() {
    return (
      <div className={s.search_main_container}>
        <div
          className={
            cx(s.icon_text)
            //    "active_icon_text text-center px-0"
          }
        >
          <div
            className={
              cx(s.margin, s.selector)
              //  : "active_selector margin ms-1"
            }
          >
            <select name="" id="">
              <option
                style={{ background: "#fff", padding: "20px" }}
                id="red"
                value=""
              >
                What
              </option>
              {/* <FontAwesome.IoIosArrowDown /> */}
              {/* <option
              style={{ background: "#fff", padding: "20px" }}
              id="red"
              value=""
            >
              What
            </option> */}
            </select>
          </div>
          <div className={cx(s.margin, s.borderRight)}></div>
          <div
            className={
              cx(s.margin, s.selector)
              //   : "active_selector margin"
            }
          >
            <select>
              <option id="red" value="">
                Where
              </option>
              {/* <FontAwesome.IoIosArrowDown /> */}
            </select>
            {/* <FormControl
              componentClass="select"
              className={cx(
                s.formControlSelect,
                s.input,
                s.inputPadding,
                "inputPaddingAR"
              )}
              onChange={(e) =>
                setPersonalizedValues({
                  name: "personCapacity",
                  value: Number(e.target.value),
                })
              }
              defaultValue={"what"}
            >
              <option value="">what</option>
            </FormControl> */}
          </div>
          <div className={cx(s.margin, s.borderRight)}></div>

          <div
            className={
              cx(s.margin, s.selector)
              //   : "active_selector margin"
            }
          >
            <select>
              <option id="red" value="">
                When
              </option>
              {/* <FontAwesome.IoIosArrowDown /> */}
              {/* <option value="fa fa-angle-down">When&#xf107;</option> */}

              {/* <option value="">When</option> */}
            </select>
          </div>
          <div
            className={
              cx(s.rightBorder, s.search_icon)
              // : "active_search_icon rightBorder"
            }
          >
            {/* <i className="fas fa-search"></i> */}
            <FontAwesome.FaSearch />
          </div>
        </div>
        <div
          className={
            cx(s.list_items_btn)
            //    : "list_items_btn_active "
          }
        >
          <button>List An Item</button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SearchOption);
