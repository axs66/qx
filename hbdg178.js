let body = $response.body;
let headers = $response.headers;

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.data) {
      const songCombination = {
        song_name: "恭喜发财,大吉大利！",
        song_singer: "领取红包",
        cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__934190a1-8b9f-4eea-b8ee-04fd82211d31_1741878745602.jpg"
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
