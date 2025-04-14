//盒子多并发兑换by夕颜


const wxids = [
  "wxid_hgqmipseiwn422",//自行修改wxid
  "wxid_2le1oemieho722",//by夕颜
  "wxid_x8houkgmb23o22",
  "wxid_pcqtj6uxr1ax12",
  "wxid_tiaq73nnpz6v41",
  "wxid_j0ed0j10atzq12",
  "wxid_27xrp23bf3s122"
];

let body = $request.body;
let input;

try {
  input = JSON.parse(body);
} catch (e) {
  console.log("请求体解析失败:", body);
  $notify("兑换失败", "请求体不是JSON", body);
  $done({});
  return;
}

let { code, wxid: defaultWxid } = input;

if (!code) {
  console.log("未提供兑换码字段");
  $notify("兑换失败", "未提供兑换码", "");
  $done({});
  return;
}

let rawCodes = code.split(/[\n]/);
let codes = rawCodes.map(c => c.trim().replace(/[^A-Za-z0-9]/g, ''))
  .filter(c => c.length > 0)
  .map(c => (c.startsWith("TB") ? c : "TB" + c));

console.log("原始兑换码：", rawCodes);
console.log("清洗后的兑换码：", codes);

// by夕颜
const tasks = codes.slice(0, wxids.length).map((code, idx) => {
  return redeem(wxids[idx], code);
});

Promise.all(tasks).then(results => {
  const success = results.filter(r => r.success).length;
  const failed = results.length - success;

  const detail = results.map((r, i) => 
    `主题兑换by夕颜 第 ${i + 1}个任务:\nwxid: ${r.wxid}\n兑换码: ${r.code}\n状态: ${r.success ? "✅ 成功" : "❌ 失败"}\n信息: ${r.message}`
  ).join("\n\n");

  console.log("兑换完成：", JSON.stringify(results, null, 2));
  $notify(`✅${success} ❌${failed}   by夕颜`, "", detail);
  $done({});
});

// 发起兑换请求
function redeem(wxid, code) {
  const url = "https://theme.25mao.com/index/redeem";
  const headers = {
    "Content-Type": "application/json",
    "Origin": "https://theme.25mao.com",
    "Referer": "https://theme.25mao.com/",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1"
  };
  const body = JSON.stringify({ wxid, code });

  console.log(`发起请求 => wxid: ${wxid}, code: ${code}`);

  return new Promise(resolve => {
    $task.fetch({ url, method: "POST", headers, body }).then(resp => {
      try {
        const json = JSON.parse(resp.body);
        console.log(`返回结果 <= wxid: ${wxid}, code: ${code}, body: ${resp.body}`);
        resolve({
          wxid,
          code,
          success: json.code === 200,
          message: json.message || "未知响应"
        });
      } catch (e) {
        console.log(`响应解析失败 <= wxid: ${wxid}, code: ${code}`);
        resolve({ wxid, code, success: false, message: "响应解析失败" });
      }
    }).catch(err => {
      console.log(`请求异常 <= wxid: ${wxid}, code: ${code}, 错误: ${err}`);
      resolve({ wxid, code, success: false, message: "请求异常" });
    });
  });
}
//by夕颜
