//LINE Developersで取得したアクセストークンを入れる
var CHANNEL_ACCESS_TOKEN = 'CHANNEL_ACCESS_TOKEN'; 
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';

//ポストで送られてくるので、送られてきたJSONをパース
function doPost(e) {

  var json = JSON.parse(e.postData.contents);

  //返信するためのトークン取得
  var reply_token= json.events[0].replyToken;

  //送られたメッセージ内容を取得
  var message = json.events[0].message.text;

  if(message === 'こんにちわ') {
    greeding(CHANNEL_ACCESS_TOKEN, line_endpoint, reply_token)
}
}