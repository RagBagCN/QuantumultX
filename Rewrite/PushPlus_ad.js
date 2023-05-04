function removeAd(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const adLink = doc.querySelector('a[href="https://u.qushaia.cn/2a04"]');

  if (adLink) {
    const container = adLink.closest('.container');
    if (container) {
      container.remove();
    }
  }

  return new XMLSerializer().serializeToString(doc);
}

$done({body: removeAd($response.body)});
