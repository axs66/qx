//  mikoto - 修改点歌卡片的封面By_Axs
//使用方法：圈x添加主机名  api.dragonlongzhu.cn
//修改本配置的文件名为mkqqyy.js
//把这个配置放到文件app-quantumultx-Scripts
//修改本配置显示文本和封面链接
//然后点歌


let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
   
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
      //By_Axs
    
      obj.data.song_name = originalName + "-" + originalSinger;
      // 将歌手改为固定文本“点击播放—>”
      obj.data.song_singer = "Axs电台      播放 >>>";
      // 修改封面为指定链接
      obj.data.cover = "https://ipaxxs.cn/yibazhan/images/axs.jpg";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败By_Axs:", e);
    $done({body});
  }
} else {
  $done({});
}
//By_Axs
