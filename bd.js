[rewrite_local]

# 波点音乐会员解锁 JS 脚本
^https?:\/\/.+\/(getUserInfo|profile|getVipInfo|queryUserDetail|queryUserInfo) url script-response-body https://raw.githubusercontent.com/axs66/qx/refs/heads/main/bodian.js

[mitm]
hostname = %APPEND% *.kuwo.cn, *.bdapi.com, *.bdstatic.com
