const customTitle = "微信号：VCR66T";
const customArtist = "恭喜发财，大吉大利";
const customCover = `https://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__9c0d1d90-5215-4e6d-90e9-33e3f9233fc6_1741840087731.jpg?param=130y130&_ts=${Date.now()}`;

let body = $response.body;

try {
    let obj = JSON.parse(body);

    if (obj.data) {
        // 强制覆盖封面字段
        obj.data.cover = customCover;
        obj.data.picUrl = customCover;
        if (obj.data.album) {
            obj.data.album.picUrl = customCover;
        }

        // 修改其他信息
        obj.data.songname = customTitle;
        obj.data.name = customArtist;

        // 调试日志
        console.log(`封面已强制替换：${customCover}`);
        console.log(`完整响应：${JSON.stringify(obj, null, 2)}`);
    }

    $done({ body: JSON.stringify(obj) });
} catch (e) {
    console.log("JSON 解析失败:", e);
    $done({});
}
