
var body = $response.body.replace(
  /<head>/,
  '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/RagBagCN/QuantumultX/master/Rewrite/PushPlus_ad.ccs" type="text/css">'
);
$done({ body });
