/*
 * @Author: qinyushan
 * @Date: 2022-04-08 15:20:25
 * @LastEditTime: 2022-06-14 17:20:04
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\index.js
 * @Description:
 */
import getLocation from './assets/location'
import sendEmail from './assets/email'
import './style.css'

window.onload = function () {

    getLocation().then(res => {

        sendEmail({
            location: res
        })
    })

};
