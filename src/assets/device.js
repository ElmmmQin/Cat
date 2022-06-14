/*
 * @Author: qinyushan
 * @Date: 2022-06-14 16:19:56
 * @LastEditTime: 2022-06-14 16:20:06
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\assets\device.js
 * @Description: 获取设备信息
 */
export default () => {
    function plusReady() {
        alert("IMEI: " + plus.device.imei);
    }
    if (window.plus) {
        plusReady();
    } else {
        document.addEventListener("plusready", plusReady, false);
    }
}
