
String.prototype.isAlpha = function() {

	return /^[A-Za-z]$/.test(this);
}

String.prototype.isPinyinVowel = function() {

	return /^[aeiouv\u00fc]$/.test(this);
}

/**
 * Unicode tone marks (in order)
 * a: u0101 u00e1 u01ce u00e0
 * e: u0113 u00e9 u011b u00e8
 * i: u012b u00ed u01d0 u00ec
 * o: u014d u00f3 u01d2 u00f2
 * u: u016b u00fa u01d4 u00f9
 * v: u01d6 u01d8 u01da u01dc
 */
String.prototype.convertPinyin = function() {

	//TODO
}

var pinyinify = function(str) {

	if (typeof str !== 'string') {

		return str;
	}

	var res = "";
	var i = 0;
	while (str.length > 0) {

		var char = str.charAt(i);
		if (char.isAlpha()) {

			res += str.substring(0, i);
			str = str.substring(i);
			i = 0;
			var toneNumIndex = str.search(/[1-5]/);
			if (toneNumIndex > 0 && toneNumIndex < 7) {
				res += str.substring(0, toneNumIndex + 1).convertPinyin();
				str = str.substring(toneNumIndex + 1);

			} else {

				var whitespaceIndex = str.search(/\s/);
				if (whitespaceIndex < 0) {

					res += str.substring(0);
					str = "";
				} else {

					res += str.substring(0, whitespaceIndex + 1);
					str = str.substring(whitespaceIndex + 1);
				}
			}

		} else {

			i++;
		}
	}

	return res;
}
