var body = $response.body;
body = JSON.parse(body);
if (body && body.data && body.data.match && body.data.match.upgrade && body.data.match.upgrade.prompt_type) {
    body.data.match.upgrade.prompt_type = 2;
    body.data.match.upgrade.is_show_btn = false;
    body.data.match.upgrade.upgrade_button_info = {};
    body.data.match.upgrade.upgrade_button_info.upgrade_button_text = "";
    body.data.match.upgrade.upgrade_button_info.upgrade_button_schema = "";
}
body = JSON.stringify(body);
$done({body});
