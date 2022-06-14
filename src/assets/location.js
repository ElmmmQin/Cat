/*
 * @Author: qinyushan
 * @Date: 2022-06-14 16:15:04
 * @LastEditTime: 2022-06-14 17:04:00
 * @LastEditors: qinyushan
 * @FilePath: \Cat\src\assets\location.js
 * @Description: 百度地图定位
 */
// let baiduMap = require('baidumap');
// let BMap = baiduMap.create({ 'ak': '8tmLINbhCmz0hCPo1u10eih5L7p5Xk9C' });

export default () => {
    return new Promise(resolve => {
        let geolocation = new BMap.Geolocation({
            maximumAge: 10  // 清除缓存
        });

        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function (r) {
            console.log("经纬度坐标：", r.point);
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                // map.addOverlay(mk);//标出所在地
                // map.panTo(r.point);//地图中心移动
                //alert('您的位置：'+r.point.lng+','+r.point.lat);
                var point = new BMap.Point(r.point.lng, r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                var gc = new BMap.Geocoder();
                gc.getLocation(point, function (rs) {
                    resolve(rs.address)
                });
            } else {
                alert("failed" + this.getStatus());
            }
        }, { enableHighAccuracy: true });

    })

};
