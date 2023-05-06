const elementSelector = ".container-fluid.fixed-bottom";
const injectedStyle = `
  <style>
    ${elementSelector} { display: none !important; }
  </style>
`;

if ($response && $response.headers && $response.headers["content-type"].includes("text/html")) {
  let body = $response.body;
  body = body.replace(/(<\/head>)/i, `${injectedStyle}$1`);
  $done({ body });
} else {
  $done({});
}

