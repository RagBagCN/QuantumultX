(function () {
  function blockUpdate() {
    const originalFetch = fetch;
    fetch = function (input, init) {
      if (typeof input === 'string' && input.includes('api.m.taobao.com') && input.includes('mtop.upgrade.Upgrade')) {
        console.log('[TaobaoBlock.js] Blocked update check request:', input);
        return new Promise(() => {});
      } else {
        return originalFetch.apply(this, arguments);
      }
    };
    console.log('[TaobaoBlock.js] Update check blocking enabled.');
  }

  if (window.fetch) {
    blockUpdate();
  } else {
    document.addEventListener('DOMContentLoaded', blockUpdate);
  }
})();
