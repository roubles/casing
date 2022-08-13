const casing = require('./casing');
const {readFileSync} = require('fs');

test('Camel Case No Digits Negative', () => {
	const contents = readFileSync('./phrases/camelCaseNoDigitsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseNoDigits().exec(phrase)).toBe(null);
	}
});

test('Camel Case No Digits Positive', () => {
	const contents = readFileSync('./phrases/camelCaseNoDigitsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseNoDigits().exec(phrase)).not.toBe(null);
	}
});

test('Camel Case Digits Negative', () => {
	const contents = readFileSync('./phrases/camelCaseDigitsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseDigits().exec(phrase)).toBe(null);
	}
});

test('Camel Case Digits Positive', () => {
	const contents = readFileSync('./phrases/camelCaseDigitsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseDigits().exec(phrase)).not.toBe(null);
	}
});

test('Camel Case No Digits Upto 3 Upper Case Chars Negative', () => {
	const contents = readFileSync('./phrases/camelCaseNoDigitsUpto3UpperCaseCharsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseNoDigitsUpto3UpperCaseChars().exec(phrase)).toBe(null);
	}
});

test('Camel Case No Digits Upto 3 Upper Case Chars Positive', () => {
	const contents = readFileSync('./phrases/camelCaseNoDigitsUpto3UpperCaseCharsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseNoDigitsUpto3UpperCaseChars().exec(phrase)).not.toBe(null);
	}
});

test('Camel Case Digits Upto 3 Upper Case Chars Negative', () => {
	const contents = readFileSync('./phrases/camelCaseDigitsUpto3UpperCaseCharsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseDigitsUpto3UpperCaseChars().exec(phrase)).toBe(null);
	}
});

test('Camel Case Digits Upto 3 Upper Case Chars Positive', () => {
	const contents = readFileSync('./phrases/camelCaseDigitsUpto3UpperCaseCharsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.camelCaseDigitsUpto3UpperCaseChars().exec(phrase)).not.toBe(null);
	}
});

test('Pascal Case No Digits Negative', () => {
	const contents = readFileSync('./phrases/pascalCaseNoDigitsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseNoDigits().exec(phrase)).toBe(null);
	}
});

test('Pascal Case No Digits Positive', () => {
	const contents = readFileSync('./phrases/pascalCaseNoDigitsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseNoDigits().exec(phrase)).not.toBe(null);
	}
});

test('Pascal Case Digits Negative', () => {
	const contents = readFileSync('./phrases/pascalCaseDigitsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseDigits().exec(phrase)).toBe(null);
	}
});

test('Pascal Case Digits Positive', () => {
	const contents = readFileSync('./phrases/pascalCaseDigitsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseDigits().exec(phrase)).not.toBe(null);
	}
});

test('Pascal Case No Digits Upto 3 Upper Case Chars Negative', () => {
	const contents = readFileSync('./phrases/pascalCaseNoDigitsUpto3UpperCaseCharsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseNoDigitsUpto3UpperCaseChars().exec(phrase)).toBe(null);
	}
});

test('Pascal Case No Digits Upto 3 Upper Case Chars Positive', () => {
	const contents = readFileSync('./phrases/pascalCaseNoDigitsUpto3UpperCaseCharsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseNoDigitsUpto3UpperCaseChars().exec(phrase)).not.toBe(null);
	}
});

test('Pascal Case Digits Upto 3 Upper Case Chars Negative', () => {
	const contents = readFileSync('./phrases/pascalCaseDigitsUpto3UpperCaseCharsNegative.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseDigitsUpto3UpperCaseChars().exec(phrase)).toBe(null);
	}
});

test('Pascal Case Digits Upto 3 Upper Case Chars Positive', () => {
	const contents = readFileSync('./phrases/pascalCaseDigitsUpto3UpperCaseCharsPositive.txt', 'utf-8');
	const phrases = contents.split(/\r?\n/);

	for (const phrase of phrases) {
		//console.log(`Working on ${phrase}`)
	    expect(casing.pascalCaseDigitsUpto3UpperCaseChars().exec(phrase)).not.toBe(null);
	}
});