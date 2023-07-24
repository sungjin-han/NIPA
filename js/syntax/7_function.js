// addNum라는 이름의 함수를 정의함.
function addNum(x, y) {    // x, y는 이 함수의 매개변수임.
    console.log(x + y);
}
addNum(2, 3);  


function multiNum(x, y) {
    return x * y;         // x와 y를 곱한 결과를 반환함.
}
var num = multiNum(3, 4); // multiNum() 함수가 호출된 후, 그 반환값이 변수 num에 저장됨.
console.log(num);


// 제곱의 값을 구하는 함수 sqr를 정의함.
function sqr(x) {
    return x * x;
}
var sqrNum = sqr;
sqred = sqrNum(4)
console.log(sqred)

//local variable
function localNum() {
    var num = 10; // 지역 변수 num에 숫자 10을 대입함.
    console.log("함수 내부에서 변수 num의 타입은 " + typeof num + "입니다.<br>"); // number
}
localNum();       // 함수 localNum()을 호출함.
console.log("함수의 호출이 끝난 뒤 변수 num의 타입은 " + typeof num + "입니다."); // undefined

//global variable
var num = 10; // 전역 변수 num을 선언함.
function globalNum() {
    console.log("함수 내부에서 변수 num의 값은 " + num + "입니다.<br>"); // 10
    num = 20; // 전역 변수 num의 값을 함수 내부에서 변경함.
}
globalNum();  // 함수 globalNum()을 호출함.
console.log("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 20


//함수 호이스팅(hoisting)
var globalNum = 10;     // globalNum을 전역 변수로 선언함.
function printNum() {
    console.log("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>"); // ①
    var globalNum = 20; // globalNum을 지역 변수로 선언함. // ②
    console.log("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
}
printNum();

//함수 호이스팅 후
var globalNum = 10;
function printNum() {
    var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동됨.
    console.log("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>");
    globalNum = 20;
    console.log("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
}
printNum();