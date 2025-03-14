let body = $response.body; 
let headers = $response.headers;  

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj) { 
      const songCombination = {
        song_name: "恭喜发财,大吉大利！",
        song_singer: "领取红包",
        cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__934190a1-8b9f-4eea-b8ee-04fd82211d31_1741878745602.jpg"
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
