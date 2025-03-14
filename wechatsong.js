 #!name=点歌卡片
 #!desc=黄白选网易，mikoto选qq，微信[VCR66T]
 #!openUrl=https://axs66.github.io/repo
 #!author=A先生[https://qq.ios999.vip/axs/Axs.jpg],祁厅长[https://h5.clewm.net/?url=qr61.cn%2FoMuCi0%2FqHe9QuO]
 #!homepage=https://axs66.github.io/repo
 #!icon=http://q4.qlogo.cn/headimg_dl?dst_uin=1317208960&spec=640

[Script]

http-response ^https://www.hhlqilongzhu.cn/.*$ script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/hbdg180.js, requires-body=true, timeout=60, tag=黄白
http-response ^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/hbdg178.js, requires-body=true, timeout=60, tag=黄白

http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* script-path=https://raw.githubusercontent.com/axs66/qx/refs/heads/main/mkdg136.js, requires-body=true, timeout=60, tag=mikoto

[MitM]
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn
