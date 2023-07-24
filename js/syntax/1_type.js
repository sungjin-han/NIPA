//숫자
var firstNum = 10;     // 소수점을 사용하지 않은 표현
var secondNum = 10.00; // 소수점을 사용한 표현
var thirdNum = 10e6;   // 10000000
var fourthNum = 10e-6; // 0.00001

//문자열
var firstStr = "이것도 문자열입니다.";      // 큰따옴표를 사용한 문자열
var secondStr = '이것도 문자열입니다.';     // 작은따옴표를 사용한 문자열
var thirdStr = "나의 이름은 '홍길동'이야."  // 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var fourthStr = '나의 이름은 "홍길동"이야.' // 큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있음.

//불리언
var firstNum = 10;
var secondNum = 11;
var bool_val = firstNum == secondNum;

//Typeof 연산자
typeof 10;        // number 타입
typeof "문자열";  // string 타입
typeof true;      // boolean 타입
typeof undefined; // undefined 타입
typeof null;      // object 타입

//null과 undefined
/*
자바스크립트에서 null이란 object 타입이며, 아직 '값'이 정해지지 않은 것을 의미합니다.
또한, undefined란 null과는 달리 '타입'이 정해지지 않은 것을 의미합니다.
따라서 자바스크립트에서 undefined는 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환됩니다.
*/

var num;          // 초기화하지 않았으므로 undefined 값을 반환함.
var str = null;   // object 타입의 null 값
typeof secondNum; // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.

// 동등 연산자와 일치 연산자
// null과 undefined는 동등 연산자(==)와 일치 연산자(===)로 비교할 때 그 결괏값이 다름
null ==  undefined; // true
null === undefined; // false


//객체 (object)
/*
자바스크립트의 기본 타입은 객체(object)입니다.
객체(object)란 실생활에서 우리가 인식할 수 있는 사물로 이해할 수 있습니다.
*/
var dog = { name: "해피", age: 3 }; // 객체의 생성