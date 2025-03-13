// const customTitle = "微信号：VCR66T";
const customArtist = "恭喜发财，大吉大利";
// const customCover = `https://q4.qlogo.cn/headimg_dl?dst_uin=1317208960&spec=640&_ts=${Date.now()}`;
const customCover = `http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__9c0d1d90-5215-4e6d-90e9-33e3f9233fc6_1741840087731.jpg?param=130y130&_ts=${Date.now()}`;


let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {
    // 强制覆盖所有可能的封面字段
    obj.data.cover = customCover;  // 主字段
    obj.data.picUrl = customCover; // 备用字段
    obj.data.album && (obj.data.album.picUrl = customCover);
    
    // 修改其他信息
    obj.data.songname = customTitle;
    obj.data.name = customArtist;
    
    // 调试日志
    console.log(`封面已强制替换：${customCover}`);
    console.log(`完整响应：${JSON.stringify(obj, null, 2)}`);
}

$done({body: JSON.stringify(obj)});
