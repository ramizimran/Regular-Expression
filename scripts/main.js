// 🚀 First Try

// let string =
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.";

// let regex = /write/;
// let isMatch = regex.test(string);
// console.log("isMatch", isMatch);

// 🚀 Using or matching

// let regex = /code|com/;
// let isMatch = regex.test(string);
// console.log("isOrMatch", isMatch);

// 🚀 Case Insensitive
// i => flag: caseInsensitive

// let regex = /COmpUtEr|CoDe|wRite/i;
// let isMatch = regex.test(string);
// console.log("isOrMatch", isMatch);

// 🚀 .match()

// let regex = /code/;
// let isMatch = string.match(regex);
// console.log("isMatch", isMatch);

// 🚀 global global flag

// let regex = /code/g;
// let isMatch = string.match(regex);
// console.log("isMatch", isMatch);

// 🚀 with `.` wildcard matching
// let hum = "I'll hum a song";
// let hug = "Bear hug";
// let regex = /hu./;
// console.log(regex.test(hum));
// console.log(regex.test(hug));

// 🚀 with [ and ]
// let big = "big";
// let bag = "bag";
// let bug = "bug";
// let bog = "bog";
// let regex = /b[aiu]g/;
// big.match(regex);
// bag.match(regex);
// bug.match(regex);
// bog.match(regex);

// let cat = "cat";
// let bat = "bat";
// let mat = "mat";
// let Regex = /[a-e]at/;
// console.log(cat.match(Regex));
// console.log(bat.match(Regex));
// console.log(mat.match(Regex));

// 🚀 with range [ - ] and number

// let jenny = "Jenny8675309";
// let regex = /[a-z0-9]/gi;
// console.log(jenny.match(regex));

// 🚀 Match everything except

// let s = "9 strong mice.";
// let regex = /[^0-9|aeiou]/gi;
// let isMatch = s.match(regex);
// console.log(isMatch);

// 🚀 Match Characters that Occur One or More Times

// let s = "Mississippi";
// let regex = /ss+/g;
// console.log(s.match(regex));

// 🚀 With *

// let string = "gooooooooal!";
// let goRegex = /go*/;
// console.log(string.match(goRegex));

// 🚀 Lazy Matching

// let string = "titanic";
// let regex = /t[a-z]*i/;
// let regexLazy = /t[a-z]*?i/;

// console.log(string.match(regex));
// console.log(string.match(regexLazy));

// 🚀 Match Beginning String Patterns

// let string = "Cal and Ricky both like racing.";
// let regex = /^Cal/;
// console.log(regex.test(string));
// console.log(string.match(regex));

// 🚀 Match End String Patterns

// let string = "Cal and Ricky both like racing";
// let regex = /racing$/;
// console.log(regex.test(string));
// console.log(string.match(regex));

// 🚀 Match All Letters and Numbers
// let string = "How vexingly quick daft zebras jump!";
// let regex = /\w/g;
// console.log(string.match(regex));
// console.log(string.match(regex).length);

// 🚀 Match Everything But Letters and Numbers
// let string = "How vexingly quick daft zebras jump!";
// let regex = /\W/g;
// console.log(string.match(regex));
// console.log(string.match(regex).length);

/* 
Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i

^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
---

/^[a-z]([0-9]{2,}|[a-z]+\d*)$/i

^ - start of input
[a-z] - first character is a letter
[0-9]{2,} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
*/

// 🚀 Match Whitespace

// let string = "How vexingly quick daft zebras jump!";
// let regex = /\s/g;
// let regexNotSpaces = /\S/g;
// console.log(string.match(regex));
// console.log(string.match(regexNotSpaces));

// 🚀Quantity specifiers

// let string = "Ohhhh no";
// let regex = /oh{3,6}\sno/i;
// console.log(string.match(regex));

// 🚀 LookHead
// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex));
// console.log(noquit.match(qRegex));
