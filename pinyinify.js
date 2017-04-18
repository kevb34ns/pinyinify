
var isAlpha = function(char) {
	return /^[A-Za-z]$/.test(char);
}

var pinyinify = function(str) {

	var res = "";
	for (var i = 0; i < str.length; i++) {
		var char = str.charAt(i);
		if (isAlpha(char)) {
			//TODO look for index of tone number
		} else {
			res += char;
		}
	}

	return res;
}
