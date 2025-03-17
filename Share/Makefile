
#
#  DYYY 魔改～
#  原作者：huami1314
#  魔改：pxx917144686

# 我花了10分钟 ——> 魔改娱乐一下：

# 一、魔改视频水印
# 实现：在 AWEAwemePlayVideoViewController 的 viewDidLoad 中添加水印视图。
# 特性：支持拖动（UIPanGestureRecognizer）、缩放（UIPinchGestureRecognizer）、透明度可调（默认 0.7）。
# 控制：DYYYEnableWatermark 开关，DYYYWatermarkAlpha 设置透明度。

# 二、视频下载（双击下载）
# 实现：在 viewDidLoad 中添加双击手势，触发 handleDoubleTap: 下载。
# 流程：显示“下载中”，用 NSURLSessionDownloadTask 下载，保存到相册，2 秒后提示完成。
# 控制：DYYYEnableDoubleTapDownload 开关。

# 三、视频浮窗模式（画中画）
# 实现：在 viewDidLoad 中添加浮窗按钮，点击调用 enterPipMode。
# 特性：使用 AVPictureInPictureController 实现画中画，需支持 playerLayer。
# 控制：DYYYEnablePiPMode 开关。

# 四、弹窗
# 实现：通过 BottomSheetViewController 在 viewDidAppear: 中弹出。
# 交互：👍 6 小时不会弹出，👎 跳转huami源代码 ，重复弹窗～











# 插件：显示编译成功，显示的信息
PACKAGE_IDENTIFIER = com.huami.dyyy
PACKAGE_NAME = DYYY
PACKAGE_VERSION = 2.0.9++
PACKAGE_ARCHITECTURE = iphoneos-arm64 iphoneos-arm64e
PACKAGE_REVISION = 1
PACKAGE_SECTION = Tweaks
PACKAGE_DEPENDS = firmware (>= 14.0), mobilesubstrate
PACKAGE_DESCRIPTION = DYYY 是一款用于抖音应用的界面定制和功能增强插件，仅供学习交流，请在 24 小时内自觉删除。（原作者：huami1314；魔改：pxx917144686）

# 插件：编译时，引用的信息
define Package/DYYY
  Package: com.huami.dyyy
  Name: DYYY
  Version: 2.0.9++
  Architecture: iphoneos-arm64 iphoneos-arm64e
  Author: huami <huami@example.com>
  Section: Tweaks
  Depends: firmware (>= 14.0), mobilesubstrate
  Description: DYYY 是一款用于抖音应用的界面定制和功能增强插件，仅供学习交流，请在 24 小时内自觉删除。（原作者：huami1314；魔改：pxx917144686）
endef

# 直接输出到根路径
export THEOS_PACKAGE_DIR = $(CURDIR)

# TARGET
ARCHS = arm64 arm64e
TARGET = iphone:clang:latest:15.0

# Rootless 插件配置
export THEOS_PACKAGE_SCHEME = rootless
THEOS_PACKAGE_INSTALL_PREFIX = /var/jb

# 目标进程
INSTALL_TARGET_PROCESSES = Aweme

# 引入 Theos 的通用设置
include $(THEOS)/makefiles/common.mk

# 插件名称
TWEAK_NAME = DYYY

# 源代码文件
DYYY_FILES = DYYY.x DYYYSettingViewController.m CityManager.m

# 编译选项
DYYY_CFLAGS = -fobjc-arc -Wno-error
DYYY_MMFLAGS = -fobjc-arc -Wno-error -std=c++11

# Theos 编译规则
include $(THEOS_MAKE_PATH)/tweak.mk