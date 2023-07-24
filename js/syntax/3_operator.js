//산술 연산자
var x = 10, y = 4;

x + y // 14
x - y // 6
x * y // 40
x / y // 2.5
x % y // 2

//대입 연산자
var x = 10, y = 10, z = 10;
x = x - 5;
y -= 5; // y = y - 5 와 같은 표현임.
z =- 5; // z = -5 와 같은 표현임.

//비교 연산자
var x = 3, y = 5;
var a = "abc", b = "bcd";
x > y
a <= b

var x = 3, y = '3', z = 3;
x == y
x === y


//논리 연산자
var x = true, y = false;
x && y
x || y
!x

//삼항 연산자
var x = 3, y = 5;
var result = (x > y) ? x : y 

//typeof 연산자
typeof "문자열"   // string
typeof 10         // number
typeof NaN        // number
typeof false      // boolean
typeof undefined  // undefined
typeof new Date() // object
typeof null       // object

//instanceof 연산자
var str = new String("이것은 문자열입니다.");
 
str instanceof Object;  // true
str instanceof String;  // true
str instanceof Array;   // false
str instanceof Number;  // false
str instanceof Boolean; // false

