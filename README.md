# pinyinify
A simple JavaScript function for converting pinyin containing tone numbers (`pin4yin1`) to pinyin using standard Unicode tone marks (<code>pi&#768;nyi&#772;n</code>). A list of Unicode tone marks for HTML can be found [here](http://pinyin.info/unicode/unicode_test.html).

## Usage
The function `pinyinify()` takes a string parameter, which can be one of the following:

+ A single character, which must be one of: `a`, `e`, `i`, `o`, `u`, or <code>&#252;</code>, followed by a tone mark. `v` is an acceptable substitute for <code>&#252;</code>.
+ A pinyin word or phrase using tone numbers. Examples: `mao1`, `chi1fan4`, `wo3 men5`. For simplicity's sake, the function will process most words with tone numbers, including ones that may not be valid pinyin.
+ A string containing both pinyin words and non-pinyin words, characters, or symbols. Pinyin must be separated from non-pinyin words by whitespace, but pinyin can have symbols/punctuation adjacent to it. Example: `My Chinese name is yang2kai3wen2.` **Be careful:** any word that resembles the structure of pinyin (has a number at the end of it, for example) may be given tone marks. Therefore, it is recommended that you avoid this option if possible.

If you pass a string that meets one of the requirements above, the function will return a string with the tone numbers converted to tone marks. Otherwise, it will return an unchanged string.

## Limitations
These are some current limitations, which may be addressed in the future should the need arise.

+ **Lowercase Pinyin Only:** since some typefaces have trouble displaying uppercase pinyin symbols, any pinyin words will be converted to lowercase. Non-pinyin words are not affected.
+ **Incomplete Validation:** Right now, `pinyinify()` does not ensure that words are valid pinyin words before conversion. It performs several checks to eliminate obviously incorrect cases:
   - Words that are longer than 6 characters (without the tone number) are ignored, since no pinyin words are longer than that.
   - There must be a tone number from 1-5 at the end.
   - There must be at least one pinyin vowel in the word. The placement of tone marks is correct for any valid pinyin word.

## Test Page
The included HTML test page allows you to test the function without writing any of your code. Simply open `test.html`, located in the `test/` directory, in your browser, and type some text into the text box to see the result.

## Bugs
Feel free to report bugs on the issue tracker. I will do my best to get around to them in a timely manner. If you want to contribute improvements to the code, let me know by [sending me an email](mailto:yangkevi@usc.edu) or opening an issue.

## License
This code is licensed under the MIT License. This means you are free to use and change this code however you want, as long as you include the proper copyright notice and attribution. View the full terms [here](https://github.com/kevinkyang/pinyinify/blob/master/LICENSE).