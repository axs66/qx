let body = $response.body;

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj?.data) {
      // 读取原始歌曲名和歌手名，并提供默认值
      let originalName = obj.data.song_name?.trim() || "未知歌曲";
      let originalSinger = obj.data.song_singer?.trim() || "未知歌手";

      // 修改歌曲名称（格式：歌曲名 - 歌手名）
      obj.data.song_name = `${originalName} - ${originalSinger}`;

      // 修改歌手名为固定文本
      obj.data.song_singer = "Axs电台播放 >>>";

      // 替换封面图片链接
      obj.data.cover = "https://api.yujn.cn/api/upload_tx.php?url=img.xiyan.pro/i/2025/03/08/1171xqi.jpeg";
    }

    $done({ body: JSON.stringify(obj) });

  } catch (error) {
    console.log("【Axs电台】解析失败:", error.message);
    $done({ body });
  }
} else {
  $done({});
}
