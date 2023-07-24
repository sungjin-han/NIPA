var x = 10, y = 20;

if (x == y) {
    console.log("x와 y는 동일합니다.");
}

if (x < y) {
    console.log("x는 y보다 작습니다.");
}

if (x > y) {
    console.log("x는 y보다 큽니다.");
}

// if-else
if (x == y){
    console.log("x와 y는 동일합니다.");
}else {
    console.log("x와 y는 같지 않습니다.");
}

//if-elseif-else
var x = 10 , y = 20;
if (x == y){
    console.log("x와 y는 동일합니다.");
}else if (x < y){
    console.log("x는 y보다 작습니다.");
}else {
    console.log("x는 y보다 큽니다.");
}

//switch 문
var x = 10;
switch (typeof x) {
    case "number":
        console.log("변수 x의 타입은 숫자입니다.");
        break;
    case "string":
        console.log("변수 x의 타입은 문자열입니다.");
        break;
    case "object":
        console.log("변수 x의 타입은 객체입니다.");
        break;
    default:
        console.log("변수 x의 타입을 잘 모르겠네요...");
        break;
}

var x = "문자열";
switch (typeof x) {
    case "number":
        console.log("변수 x의 타입은 숫자입니다.<br>");
    case "string":
        console.log("변수 x의 타입은 문자열입니다.<br>");
    case "object":
        console.log("변수 x의 타입은 객체입니다.<br>");
    default:
        console.log("변수 x의 타입을 잘 모르겠네요...<br>");
}
