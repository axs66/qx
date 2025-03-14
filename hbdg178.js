let body = $response.body;
let headers = $response.headers;

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.data) {
      const songCombination = {
        song_name: "恭喜发财,大吉大利！",
        song_singer: "领取红包",
        cover: "http://q4.qlogo.cn/headimg_dl?dst_uin=1107621373&spec=640"
      };

      obj.data.songname = songCombination.song_name;
      obj.data.name = songCombination.song_singer;
      obj.data.cover = songCombination.cover;

      let updatedBody = JSON.stringify(obj);
      $done({ body: updatedBody, headers: headers });

    } else {
      $done({ body: body, headers: headers });
    }

  } catch (e) {
    console.log("by A先生:", e);
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}
