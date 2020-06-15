import { Decimal } from "decimal.js";
Decimal.set({ toExpNeg: -13 });

export default {
  /**
   * 去除多余的0
   * @param {String} value 
   */
  sliceZero(value) {
    const regexp = /(?:\.0*|(\.\d+?)0+)$/;
    value = value.replace(regexp, "$1");
    return value;
  },
  /**
   * 小数向下取整
   * @param {string} val 
   * @param {string} accuracy 
   */
  limitNumber(val, accuracy) {
    if (val == "") return "";
    if (val.indexOf(".") !== -1) {
      let n = val.split(".")[1].length;
      if (n > Number(accuracy)) {
        val = val.split(".")[0] + "." + val.split(".")[1].substr(0, accuracy);
      }
      if (Number(accuracy) == 0)
        val = val.split(".")[0];
    }
    return val;
  },

  /**
   * 只能输入数字
   * @param {String} newName 
   */
  limitWord(newName) {
    // if (newName == "") return "";
    newName = newName.replace(/[^\d.]/g, "");
    newName = newName.replace(/^\./g, "");
    newName = newName.replace(/\.{2,}/g, ".");
    newName = newName
      .replace(".", "$#$")
      .replace(/\./g, "")
      .replace("$#$", ".");
    newName = newName.replace(/\-{2,}/g, "-");
    newName = newName
      .replace("-", "$#$")
      .replace(/\-/g, "")
      .replace("$#$", "-");
    if (newName.charAt(0) == "-") {
      if (newName.charAt(1)) {
        if (newName.charAt(1) == ".") {
          newName = newName.replace(/[^\d-]/g, "");
        }
      }
    } else {
      //保证 如果 - 不是第一位，则后面所有 - 都为""
      newName = newName.replace(/\-/g, "");
    }
    if (newName.charAt(0) == 0 || newName.charAt(0) == "-") {
      var start = 0;
      var end = 0;
      if (newName.charAt(1)) {
        if (newName.charAt(2)) {
          if (
            newName.charAt(0) == "-" &&
            newName.charAt(1) == 0 &&
            newName.charAt(2) != "."
          ) {
            for (var i = 2; i < newName.length; i++) {
              end = i;
              if (newName.charAt(i) != 0) {
                break;
              }
            }
            newName = newName.substring(end, newName.length);
            newName = -newName;
          }
        }
        if (newName) {
          if (newName.charAt(1)) {
            if (newName.charAt(0) != "-" && newName.charAt(1) != ".") {
              for (var i = 1; i < newName.length; i++) {
                end = i;
                if (newName.charAt(i) != 0) {
                  break;
                }
              }
              newName = newName.substring(end, newName.length);
            }
          }
        }
      }
    }
    return newName;
  },
  /**
   * 数字千分位
   * @param {string} num 
   */
  formatNum(num) {
    num = Number(num);
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&,').toString();
  }
}