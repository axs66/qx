[rewrite_local]
^https:\/\/item\.jd\.com\/\d+\.html$ script-response-body https://raw.githubusercontent.com/axs66/qx/refs/heads/main/compare-price.js

[mitm]
hostname = item.jd.com,api.m.jd.com, in.m.jd.com
