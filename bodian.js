// bodian.js
// 波点音乐会员解锁 & 昵称修改 by_Axs

let body = $response.body;

if (body) {
  body = body
    .replace(/"isVip":\d+/g, '"isVip":1')
    .replace(/"vipType":\d+/g, '"vipType":1')
    .replace(/"payVipType":\d+/g, '"payVipType":1')
    .replace(/"expireDate":\d+/g, '"expireDate":31587551944000')
    .replace(/"payExpireDate":\d+/g, '"payExpireDate":31587551944000')
    .replace(/"ctExpireDate":\d+/g, '"ctExpireDate":31587551944000')
    .replace(/"actExpireDate":\d+/g, '"actExpireDate":31587551944000')
    .replace(/"bigExpireDate":\d+/g, '"bigExpireDate":31587551944000')
    .replace(/"nickname":"[^"]*"/g, '"nickname":"Axs技术支持"')
    .replace(/"lowPriceText":"[^"]*"/g, '"lowPriceText":"Axs提供会员服务"')
    .replace(/"text":"[^"]*"/g, '"text":"Axs提供会员服务"')
    .replace(/"fristVipBtnText":"[^"]*"/g, '"fristVipBtnText":"Axs提供会员服务"')
    .replace(/"zcTips":"[^"]*"/g, '"zcTips":"高品质MP3格式，下载后永久拥有。波点大会员每月获赠99999999999999998张珍藏下载券（永久有效，无限累积）"');
}

$done({ body });
