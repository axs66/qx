 #!name=点歌卡片
 #!desc=黄白选网易，mikoto选qq
 #!openUrl= https://axs66.github.io/repo
 #!author=A先生[https://qq.ios999.vip/axs/Axs.jpg]
 #!homepage=https://github.com/axs66/repo
 #!icon=http://q4.qlogo.cn/headimg_dl?dst_uin=1107621373&spec=640

[Script]

http-response ^https?:\/\/www\.hhlqilongzhu\.cn\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/hbdg.js, requires-body=true, timeout=60, tag=黄白180

http-response ^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/hbdg.js, requires-body=true, timeout=60, tag=黄白178

http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/mkqqyy.js, requires-body=true, timeout=60, tag=mikoto136

[MitM]
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn
