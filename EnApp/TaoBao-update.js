var body = $response.body;
var obj = JSON.parse(body);

// 检查是否需要更新版本
if (obj.data && obj.data.isUpgrade) {
  obj.data.isUpgrade = false;
  obj.data.upgradePrompt = '';
  obj.data.upgradeType = '';
}

$done({body: JSON.stringify(obj)});
