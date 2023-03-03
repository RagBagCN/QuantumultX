const updateCheckUrl = 'https://loggw-ex.alipay.com/antfarm/updates.json?appName=tb&appVersion=9.10.0.20001485';

$task.fetch({
  url: updateCheckUrl,
  headers: {
    'User-Agent': 'TB9.10.0.20001485 CFNetwork/1220.1 Darwin/20.3.0',
    'Accept-Language': 'zh-cn'
  }
}).then(response => {
  const data = JSON.parse(response.body);
  if (data.isNewVersion === 'NO') {
    $notify('淘宝', '已经是最新版本', '');
  }
  else {
    console.log(`发现新版本：${data.updateVersion}`);
    $notify('淘宝', `发现新版本：${data.updateVersion}`, '');
  }
}, reason => {
  console.log(reason.error);
});
