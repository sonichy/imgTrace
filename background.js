chrome.browserAction.setBadgeBackgroundColor({color:[0, 0, 0, 130]});

function imageOnClick(info, tab) {
	var a = document.createElement('a');
	a.href = info.srcUrl;
	if(a.host.indexOf('sinaimg.cn') != -1){
		sid = info.srcUrl.substr(info.srcUrl.lastIndexOf('/')+1, 8);
		var id;
		if(sid.indexOf('005')==0 || sid.indexOf('006')==0){
			id = string62to10(sid);
		}else{
			id = parseInt(sid, 2);
		}
		window.open('http://photo.weibo.com/' + id);
	}
}

var image = chrome.contextMenus.create({ "id" : "imageTrace", "title" : "图片追踪", "contexts" : ["image"], "onclick" : imageOnClick });

// http://www.jb51.net/article/53061.htm
function string62to10(number_code) {
	var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',
	radix = chars.length,
	number_code = String(number_code),
	len = number_code.length,
	i = 0,
	origin_number = 0;
	while (i < len) {
		origin_number += Math.pow(radix, i++) * chars.indexOf(number_code.charAt(len - i) || 0);
	}
	return origin_number;
}