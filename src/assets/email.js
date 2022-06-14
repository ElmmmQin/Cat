/*
 * @Author: qinyushan
 * @Date: 2022-06-14 16:05:36
 * @LastEditTime: 2022-06-14 17:10:32
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\assets\email.js
 * @Description: 发送邮件模块
 */
export default (templateParams) => {

    emailjs.init("yd_HaLFcgs7oYWAKe");
    emailjs.send('service_0opwp5p', 'template_zm485ff', templateParams)
        .then(function (response) {
            console.log('EMAILSUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('EMAILFAILED...', error);
        });
}