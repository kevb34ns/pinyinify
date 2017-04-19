var toneMarks = {
	a: ["a", "\u0101", "\u00e1", "\u01ce", "\u00e0", "a"],
	e: ["e", "\u0113", "\u00e9", "\u011b", "\u00e8", "e"],
	i: ["i", "\u012b", "\u00ed", "\u01d0", "\u00ec", "i"],
	o: ["o", "\u014d", "\u00f3", "\u01d2", "\u00f2", "o"],
	u: ["u", "\u016b", "\u00fa", "\u01d4", "\u00f9", "u"],
	v: ["\u00fc", "\u01d6", "\u01d8", "\u01da", "\u01dc", "\u00fc"]
};

String.prototype.isAlpha = function() {

	return /^[A-Za-z]$/.test(this);
}

String.prototype.isPinyinVowel = function() {

	return /^[aeiouv\u00fc]$/.test(this);
}

String.prototype.lastIndexOfRegex = function(regExp) {

	var lastIndex = -1;
	for (var i = 0; i < this.length; i++) {

		if (regExp.test(this.charAt(i))) {

			lastIndex = i;
		}
	}

	return lastIndex;
}

String.prototype.replaceAt = function(index, replacement) {

	//TODO
}

/**
 * Takes a single pinyin word using tone numbers and converts to tone symbols.
 */
String.prototype.convertPinyin = function() {

	var str = this.toLocaleLowerCase();

	var toneNumIndex = str.search(/[1-5]/);
	var firstVowelIndex = str.search(/[aeiouv\u00fc]/);
	if (str.length > 7 || toneNumIndex < 1 || 
	    toneNumIndex !== str.length - 1 ||
	    firstVowelIndex < 0) {

		console.log("String.prototype.convertPinyin:" + this + 
		            " is not a valid pinyin word.")
		return this;
	}

	var toneNum = parseInt(str[toneNumIndex]);
	if (/[ae]/.test(str)) {

		var index = str.search(/[ae]/);
		str = str.replaceAt(index, toneMarks[str.charAt(index)][toneNum]);
	} else if (/ou/.test(str)) {

		var index = str.search(/ou/);
		str = str.replaceAt(index, toneMarks[str.charAt(index)][toneNum]);
	} else {

		var index = str.lastIndexOfRegex(/[aeiouv\u00fc]/);
		var vowel = str.charAt(index);
		if (vowel == "\u00fc") {

			vowel = "v";
		}
		str = str.replaceAt(index, toneMarks[vowel][toneNum]);
	}

	return str;
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

			if (i !== 0) {

				res += str.substring(0, i);
				str = str.substring(i);
				i = 0;
			}
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
