 #!name=主题盒子兑换码
 #!desc=微信(VCR66T)
 #!openUrl=https://axs66.github.io/repo
 #!author=A先生[https://qq.ios999.vip/axs/Axs.jpg]
 #!homepage=https://axs66.github.io/repo
 #!icon=http://q4.qlogo.cn/headimg_dl?dst_uin=1317208960&spec=640

[Script]
http-response ^ ^https:\/\/theme\.25mao\.com\/.* script-path= https://raw.githubusercontent.com/axs66/qx/refs/heads/main/themebox.js, requires-body=true, timeout=60, tag=mikoto

[MitM]
hostname = theme.25mao.com
