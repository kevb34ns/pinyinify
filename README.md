# pinyinify
A simple JavaScript function for converting pinyin containing tone numbers (`pin4yin1`) to pinyin using standard Unicode tone marks (<code>pi&#768;nyi&#772;n</code>).

## Usage
The function `pinyinify()` takes a string parameter, which can be one of the following:

+ A single character, which must be one of: `a`, `e`, `i`, `o`, `u`, or <code>&#252;</code>, followed by a tone mark. `v` is an acceptable substitute for <code>&#252;</code>.
+ A pinyin word or phrase using tone numbers. Examples: `mao1`, `chi1fan4`, `wo3 men5`. For simplicity's sake, the function will process most words with tone numbers, including ones that may not be valid pinyin.
+ A string containing both pinyin words and non-pinyin words, characters, or symbols. Example: `My Chinese name is yang2kai3wen2.` **Be careful:** any word that resembles the structure of pinyin (has a number at the end of it, for example) may be given tone marks. Therefore, it is recommended that you avoid this option if possible.

If you pass a string that meets one of the requirements above, the function will return a string with the tone numbers converted to tone marks. Otherwise, it will return an unchanged string.

## Limitations
<!-- TODO lowercase only, incomplete validation, etc.-->