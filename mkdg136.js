let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      const songCombinations = [
        {
          song_name: "恭喜发财,大吉大利！",
          song_singer: "领取红包",
          cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__934190a1-8b9f-4eea-b8ee-04fd82211d31_1741878745602.jpg"
        }
      ];

      let randomCombination = songCombinations[0];  // 使用第一个歌曲组合

      obj.data.song_name = randomCombination.song_name;
      obj.data.song_singer = randomCombination.song_singer;
      obj.data.cover = randomCombination.cover;
    }
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("解析失败by_A先生:", e);
    $done({ body });
  }
} else {
  $done({});
}
