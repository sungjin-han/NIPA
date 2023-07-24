//Number 객체
var num = 256;
num.toString(2);       //  2진법으로 변환 : 100000000
num.toString(8);       //  8진법으로 변환 : 400
num.toString(10);      // 10진법으로 변환 : 256
num.toString(16);      // 16진법으로 변환 : 100
// 2진수로 변환한 결괏값을 문자열로 반환함.
num.toString(2);       // 100000000
// 문자열을 숫자로 나눴기 때문에 자동으로 10진수로 변환되어 산술 연산된 결괏값
(num.toString(2) / 2); // 50000000


var x = 100;             // 숫자 리터럴
var y = new Number(100); // Number 객체
x;                       // 100
y;                       // 100
typeof x;                // number 타입
typeof y;                // object 타입

var x = 100;             // 숫자 리터럴 100
var y = new Number(100); // Number 객체 100
x == y;                  // 값이 같으므로 true
x === y;                 // 서로 다른 객체이므로 false

Number.parseInt("12");         // 12
Number.parseInt("12.34");      // 12
Number.parseInt("12문자열");   // 12
Number.parseInt("12 34 56");   // 12
Number.parseInt("문자열 56"); // NaN


//Math 객체
Math.min();                              // Infinity
Math.min(1, 10, -100, -10, 1000, 0);     // -100
Math.min(1, 10, -100, -10, "-1000", 0);  // -1000
Math.min(1, 10, -100, -10, "문자열", 0); // NaN

Math.max();                              // -Infinity
Math.max(1, 10, -100, -10, 100, 0);      // 100
Math.max(1, 10, -100, -10, "1000", 0);   // 1000
Math.max(1, 10, -100, -10, "문자열", 0); // NaN

var min = 10, max = 20;
Math.random();                     // [0, 1)
Math.random() * (max - min) + min; // [min, max)

Math.round(10.49);  // 10
Math.round(10.5);   // 11
Math.round(-10.5);  // -10
Math.round(-10.51); // -11

Math.floor(10.95);  // 10
Math.floor(11.01);  // 11
Math.floor(-10.95); // -11
Math.floor(-11.01); // -12

Math.ceil(10.95);  // 11
Math.ceil(11.01);  // 12
Math.ceil(11);     // 11
Math.ceil(-10.95); // -10
Math.ceil(-11.01); // -11

//Date 객체
var nowMiliSec = Date.now();
nowMiliSec;           // 1970년 1월 1일 00:00:00부터 현재까지의 밀리초
new Date(nowMiliSec); // new Date()와 같은 결과를 반환함.
new Date();

var date = new Date();
var day;
switch (date.getDay()) { // 현재 요일을 반환함.
    case 0:
        day = "일";
        break;
    case 1:
        day = "월";
        break;
    case 2:
        day = "화";
        break;
    case 3:
        day = "수";
        break;
    case 4:
        day = "목";
        break;
    case 5:
        day = "금";
        break;
    case 6:
        day = "토";
        break;
}
console.log("오늘은 " + day + "요일입니다.");

//ISO 날짜 양식
/*
YYYY-MM-DDTHH:MM:SS // T는 UTC(협정세계시)를 나타내는 문자로 시간까지 표현할 때에는 반드시 사용해야 함.
YYYY-MM-DD
YYYY-MM
YYYY
*/
new Date("1977-12-14T13:30:00"); // 날짜와 시간까지 표현함.
new Date("1977-12-14");          // 시간이 생략되면 자동으로 09:00:00으로 설정됨.
new Date("1977-12");             // 일이 생략되면 자동으로 1일로 설정됨.

//Long 날짜 양식
// MMM DD YYYY
// DD MMM YYYY
new Date("Feb 19 1982");        // MMM DD YYYY
new Date("19 Feb 1982");        // DD MMM YYYY
new Date("February 19 1982");   // 월의 축약형 뿐만 아니라 전체 단어도 인식함.
new Date("FEBRUARY, 19, 1982"); // 쉼표는 무시되며, 대소문자의 구분은 없음.

//Short 날짜 양식
// MM/DD/YYYY
// YYYY/MM/DD
new Date("02/19/1982"); // MM/DD/YYYY
new Date("1982/02/19"); // YYYY/MM/DD

//String object
var str = "JavaScript";
var strObj = new String("JavaScript");
str;              // "JavaScript"
strObj;           // "JavaScript"
typeof str;       // string
typeof strObj;    // object
(str == strObj);  // 문자열 값이 같으므로, true를 반환함.
(str === strObj); // 문자열 값은 같지만 타입이 다르므로, false를 반환함.

var str = "abcDEFabc";
str.indexOf('abc');     // 0  -> 자바스크립트에서 인덱스는 0부터 시작함.
str.indexOf('abcd');    // -1 -> 문자열을 비교할 때 문자의 대소문자를 구분함.

str.indexOf('abc', 3);  // 6  -> 인덱스 3부터 'abc'를 찾기 시작함.
str.lastIndexOf('abc'); // 6
str.lastIndexOf('d');   // -1
str.lastIndexOf('c');   // 8

var str = "abcDEFabc";
str.charAt(0);      // a
str.charAt(10);     // 빈 문자열 -> 전달받은 인덱스가 문자열의 길이보다 클 경우에는 빈 문자열을 반환함.
str.charCodeAt(0);  // 97        -> 'a'에 해당하는 UTF-16 코드를 반환함.

var str = "abcDEFabc";
str.slice(2, 6);     // cDEF     -> 인덱스 2부터 인덱스 5까지의 문자열을 추출함.
str.slice(-4, -2);   // Fa       -> 음수로 전달된 인덱스는 문자열의 뒤에서부터 시작함.
str.substring(2, 6); // cDEF

var str = "자바스크립트는 너무 멋져요! 그리고 유용해요.";
str.split();    // 구분자를 명시하지 않으면 아무런 동작도 하지 않음.
str.split("");  // 한 문자("")씩 나눔.
str.split(" "); // 띄어쓰기(" ")를 기준으로 나눔.
str.split("!"); // 느낌표("!")를 기준으로 나눔.

var str = "자바스크립트";
str;                                                // 자바스크립트
str.concat("는 너무 멋져요!");                      // 자바스크립트는 너무 멋져요!
str.concat("는 너무 멋져요!", " 그리고 유용해요."); // 자바스크립트는 너무 멋져요! 그리고 유용해요!
str;                                                // 자바스크립트

var str = "JavaScript";
str.toUpperCase(); // JAVASCRIPT
str.toLowerCase(); // javascript


//Array 객체
var arr = [1, true, "JavaScript"];
arr.length;               // 3
arr.push("자바스크립트");
arr.length;               // 4
arr;                      // [1,true,JavaScript,자바스크립트]
arr.push(2, "거짓");
arr.length;               // 6
arr;                      // [1,true,JavaScript,자바스크립트,2,거짓]

var arr = [1, true, "JavaScript", "자바스크립트"];
arr.length;  // 4
arr.pop();   // 자바스크립트
arr.length;  // 3
arr.pop();   // JavaScript
arr.length; // 2
arr;         // [1,true]

var strArr = ["로마", "나라", "감자", "다람쥐"]; // 한글은 ㄱ,ㄴ,ㄷ순으로 정렬됨.
var numArr = [10, 21, 1, 2, 3];                  // 숫자는 각 자릿수 별로 비교된 후 정렬됨.
strArr.sort(); // [감자,나라,다람쥐,로마]
numArr.sort(); // [1,10,2,21,3]

var arr = [1, true, "JavaScript"];
arr.join();      // 1,true,JavaScript
arr.join(' + '); // 1 + true + JavaScript
arr.join(' ');   // 1 true JavaScript
arr.join('');    // 1trueJavaScript

var arr = [1, true, "JavaScript"];
arr.toString(); // '1,true,JavaScript'

//string의 forEach 메소드
var arr = [1, true, "JavaScript"];
function printArr(value, index, array) {
    console.log("arr[" + index + "] = " + value + "<br>");
}
arr.forEach(printArr); // 배열 arr의 각 요소마다 printArr() 함수가 호출됨.

//string의 map 메소드
var arr = [1, -2, 3, -4];
// 배열 arr의 각 요소마다 Math.abs() 함수가 호출되고 그 결괏값이 배열로 저장됨.
var absoluteValues = arr.map(Math.abs);
absoluteValues; // [1,2,3,4]


//string의 filter 메소드
var arr = [-10, 5, 100, -20, 40];
function compareValue(value) {
    return value < 10;
}
var lessTen = arr.filter(compareValue);
lessTen; // [-10,5,-20]