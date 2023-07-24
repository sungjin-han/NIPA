var arrLit = [1, true, "JavaScript"];             // 배열 리터럴을 이용하는 방법
var arrObj = Array(1, true, "JavaScript");        // Array 객체의 생성자를 이용하는 방법
var arrNewObj = new Array(1, true, "JavaScript"); // new 연산자를 이용한 Array 객체 생성 방법

//index
var arr = ["JavaScript"]; // 요소가 하나뿐인 배열을 생성함.
var element = arr[0];     // 배열의 첫 번째 요소를 읽어서 대입함.
 
arr[1] = 10;      // 배열의 두 번째 요소에 숫자 10을 대입함. 배열의 길이는 1에서 2로 늘어남.
arr[2] = element; // 배열의 세 번째 요소에 변수 element의 값을 대입함. 배열의 길이는 2에서 3으로 늘어남.

//Adding elements
arr.push("추가할 요소");         // push() 메소드를 이용하는 방법
arr[arr.length] = "추가할 요소"; // length 프로퍼티를 이용하는 방법
arr["특정인덱스"] = "추가할 요소"; // 특정 인덱스를 지정하여 추가하는 방법

//다차원 배열
var arr = new Array(3);      // 3개의 요소를 가지는 배열을 생성함.
for (var row = 0; row < 3; row++) {
    arr[row] = new Array(4); // 각각의 요소마다 또다시 4개의 요소를 가지는 배열을 생성함.
    for (var column = 0; column < 4; column++) {
        arr[row][column] = "[" + row + "," + column + "]"; // 각각의 배열 요소를 생성함.
        console.log(arr[row][column] + " ");            // 각 배열 요소에 접근함.
    }
}

//문자열을 배열처럼 접근
var str = "안녕하세요!"; 
str.charAt(2)
str[2]

//map을 이용하여 배열의 요소들을 접근 (callback 함수)
arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
})