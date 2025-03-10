// Loon HTTP 响应修改脚本
$httpClient.get($request.url, function (error, response, data) {
    if (error) {
        console.log("请求出错: " + error);
        $done({});
    } else {
        try {
            let obj = JSON.parse(data);
            
            // 合并歌名和歌手
            obj.data.song_name = `${obj.data.song_name}-${obj.data.song_singer}`;
            
            // 固定歌手显示
            obj.data.song_singer = "Axs电台      播放 ▶▶";
            
            // 更换封面
            obj.data.cover = "http://q4.qlogo.cn/headimg_dl?dst_uin=1317208960&spec=640";
            
            console.log("修改后的数据: " + JSON.stringify(obj));
            $done({ body: JSON.stringify(obj) });
        } catch (err) {
            console.log("JSON 解析错误: " + err);
            $done({});
        }
    }
});
