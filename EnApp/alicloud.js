// ScriptName        阿里云盘净化+解锁本地会员功能[倍速、码率]
// Author            @ddgksf2013
// UpdateTime        2023-02-16
// ScriptURL         https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js


[rewrite_local]

# > 阿里云盘_首页设置@ddgksf2013
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/(apps|home)\/widgets$ url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_欢迎语设置@ddgksf2013
https://api.aliyundrive.com/apps/v1/users/apps/welcome url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_我的页面VIP卡片@ddgksf2013
https://api.aliyundrive.com/business/v1/users/me/vip/info url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_我的页面处理@ddgksf2013
https://member.aliyundrive.com/v1/users/tools url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_我的信息@ddgksf2013
https://member.aliyundrive.com/v1/users/me url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_会员信息@ddgksf2013
https://api.aliyundrive.com/business/v1.0/users/vip/info url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_个人信息@ddgksf2013
https://api.aliyundrive.com/v2/databox/get_personal_info url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
# > 阿里云盘_列表属性@ddgksf2013
https://api.aliyundrive.com/business/v1.0/users/feature/list url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js

[mitm] 

hostname = api.aliyundrive.com, member.aliyundrive.com

