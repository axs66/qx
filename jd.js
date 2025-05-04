# 2025-04-10
# 修复比价接口
# 点击【详情】显示比价(显示在页内)

[rewrite_local]
^https?:\/\/api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/axs66/qx/refs/heads/main/jd.js
^https?:\/\/in\.m\.jd\.com\/product\/graphext\/\d+\.html url script-response-body https://raw.githubusercontent.com/axs66/qx/refs/heads/main/jd.js
[mitm]
hostname = api.m.jd.com, in.m.jd.com
