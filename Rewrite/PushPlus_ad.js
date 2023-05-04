const url = $request.url;
if (!$response.body) $done({});

const parser = new DOMParser();
const doc = parser.parseFromString($response.body, 'text/html');
const adLink = doc.querySelector('a[href="https://u.qushaia.cn/2a04"]');

if (adLink) {
  const container = adLink.closest('.container');
  if (container) {
    container.remove();
  }
}

const newBody = new XMLSerializer().serializeToString(doc);
$done({ body: newBody });

