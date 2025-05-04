// ==UserScript==
// @name         商品比价+订阅提醒
// @compatible   Quantumult X, Loon, Surge
// @version      1.0.0
// @author       axs66
// ==/UserScript==

/**
 * 用户配置区
 */
const settings = {
  trigger: 'click', // 支持 'click', 'scroll', 'auto'
  platforms: ['jd', 'taobao', 'pdd'],
  apiEndpoint: 'https://api.manmanbuy.com/HistoryLowestPrice', // 可换其他 API
  webhookURL: 'https://your-subscribe-endpoint.example.com/track',
};

/**
 * 平台兼容函数
 */
const isQuanX = typeof $task !== "undefined";
const isSurge = typeof $httpClient !== "undefined" && typeof $loon === "undefined";
const isLoon = typeof $loon !== "undefined";

function notify(title, subtitle, body) {
  if (isQuanX) $notify(title, subtitle, body);
  if (isSurge || isLoon) $notification.post(title, subtitle, body);
}

function getURL() {
  if (isQuanX) return $request.url;
  if (isSurge || isLoon) return $request.url;
  return '';
}

/**
 * 注入 HTML 和 JS 脚本
 */
function inject(html) {
  const chartHtml = `
    <style>
      #price-chart { position: fixed; bottom: 10px; left: 10px; z-index: 99999; background: white; border: 1px solid #ccc; padding: 10px; border-radius: 12px; box-shadow: 0 0 8px rgba(0,0,0,0.2); }
      #price-chart canvas { width: 300px; height: 200px; }
      #subscribe-btn { margin-top: 8px; padding: 6px 12px; background: #007aff; color: white; border: none; border-radius: 6px; }
    </style>
    <div id="price-chart" style="display:none">
      <canvas id="chart"></canvas>
      <button id="subscribe-btn">🔔 订阅历史最低提醒</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
      const triggerMode = '${settings.trigger}';
      const chartData = {
        labels: ['4/1','4/10','4/18','4/25','5/2'],
        prices: [259, 249, 239, 219, 249]
      };

      function showChart() {
        document.getElementById('price-chart').style.display = 'block';
        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: chartData.labels,
            datasets: [{
              label: '价格 (元)',
              data: chartData.prices,
              borderColor: '#007aff',
              backgroundColor: 'rgba(0,122,255,0.1)'
            }]
          }
        });
      }

      function setupTrigger() {
        if (triggerMode === 'click') {
          document.addEventListener('click', () => showChart(), { once: true });
        } else if (triggerMode === 'scroll') {
          window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
              showChart();
            }
          }, { once: true });
        } else {
          window.addEventListener('load', showChart);
        }
      }

      document.getElementById('subscribe-btn').addEventListener('click', () => {
        fetch('${settings.webhookURL}', {
          method: 'POST',
          body: JSON.stringify({ url: location.href, date: new Date() }),
          headers: { 'Content-Type': 'application/json' }
        }).then(() => {
          alert('✅ 已订阅该商品价格提醒');
        });
      });

      setupTrigger();
    </script>
  `;
  return html.replace('</body>', `${chartHtml}</body>`);
}

/**
 * 主逻辑入口
 */
if ($response && $response.body) {
  const body = inject($response.body);
  if (isQuanX) $done({ body });
  if (isSurge || isLoon) $done({ body });
} else {
  $done({});
}
