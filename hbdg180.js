let body = $response.body; 
let headers = $response.headers;  

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj) { 
      const songCombination = {
        song_name: "恭喜发财,大吉大利！",
        song_singer: "领取红包",
        cover: "http://q4.qlogo.cn/headimg_dl?dst_uin=1107621373&spec=640"
      };

      // 更新歌曲信息
      obj.title = songCombination.song_name;
      obj.singer = songCombination.song_singer;
      obj.cover = songCombination.cover;

      let updatedBody = JSON.stringify(obj);
      $done({ body: updatedBody, headers: headers });

    } else {
      $done({ body: body, headers: headers });
    }

  } catch (e) {
    console.log("by A先生180:", e);
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}
