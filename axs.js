 #!name=点歌卡片
 #!desc=黄白选网易，mikoto选qq
 #!openUrl=https://axs66.github.io/repo
 #!author=A先生[https://qq.ios999.vip/axs/Axs.jpg]
 #!homepage=https://axs66.github.io/repo
 #!icon=http://q4.qlogo.cn/headimg_dl?dst_uin=1317208960&spec=640

[Script]
http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/mkqqyy.js, requires-body=true, timeout=60, tag=mikoto

[MitM]
hostname = api.dragonlongzhu.cn
