[rewrite_local]
^https:\/\/item\.jd\.com\/\d+\.html$ script-response-body compare-price.js

[mitm]
hostname = item.jd.com
