const url = `https://image.pushplus.plus/pc/css/message-7cdc817e188747c4.css`;
const method = `GET`;
const headers = {
  'Cookie': `pushToken=20eb99b3f26447148da3c8d53dfa967b; Hm_lvt_1c61e24eff639e825f5a3d7f957635c6=1681863985,1683172429`,
  'Accept': `text/css,*/*;q=0.1`,
  'Connection': `keep-alive`,
  'Referer': `https://www.pushplus.plus/shortMessage/1c50535ef3e947528030316817cc73be`,
  'Accept-Encoding': `gzip, deflate, br`,
  'Host': `image.pushplus.plus`,
  'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN`,
  'If-None-Match': `"FnleMe8k9bdZwbiGePAbVo2g-VJb.gz"`,
  'Accept-Language': `zh-cn`,
  'If-Modified-Since': `Tue, 19 Apr 2022 00:39:11 GMT`
};
const body = ``;

const myRequest = {
  url: url,
  method: method,
  headers: headers,
  body: body
};

$task.fetch(myRequest).then(response => {
  if (response.statusCode === 200) {
    const originalCss = response.body;
    const modifiedCss = originalCss + "\n\n.container-fluid.fixed-bottom { display: none !important; }";

    console.log(response.statusCode + "\n\n" + modifiedCss);
  } else {
    console.log(response.statusCode + "\n\n" + response.body);
  }
  $done();
}, reason => {
  console.log(reason.error);
  $done();
});
