let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
   
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
    
      obj.data.song_name = "恭喜发财"+ ","+ "大吉大利";
      // 将歌手改为固定文本“点击播放—>”
      obj.data.song_singer = "ㅤㅤㅤㅤㅤㅤㅤㅤ";
      // 修改封面为指定链接
      obj.data.cover = "http://q4.qlogo.cn/headimg_dl?dst_uin=1107621373&spec=640";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
