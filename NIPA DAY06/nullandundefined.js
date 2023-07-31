// Case 1: 변수가 선언되었지만 아직 값을 할당받지 않았으므로 undefined
let variable1;

// Case 2: 변수에 null 값을 할당하였으므로 null
let variable2 = null;

// Case 3: null을 반환하므로 변수에 할당되는 값은 null
function returnNull() {
  return null;
}

let variable3 = returnNull();

// Case 4: undefined를 반환하므로 변수에 할당되는 값은 undefined
function returnUndefined() {
  return undefined;
}

let variable4 = returnUndefined();

// Case 5: return 문이 없으므로 undefined를 반환하므로 변수에 할당되는 값은 undefined
function noReturnValue() {

}

let variable5 = noReturnValue();

// Case 6: 객체에서 정의되지 않은 속성에 접근하면 그 값은 undefined
let obj = {};
let variable6 = obj.undefinedProperty;

/* ===를 사용하여 null을 확인하면 변수의 값과 타입이 동시에 일치해야 한다. null은 값이지만 타입은 object이다.
따라서 ===를 사용하면 변수가 명시적으로 null인지 확인할 수 있다.*/
if (variable1 === null) {
  console.log("variable1 is null");
} else {
  console.log("variable1 is not null");
}

if (variable2 === null) {
  console.log("variable2 is null");
} else {
  console.log("variable2 is not null");
}

if (variable3 === null) {
  console.log("variable3 is null");
} else {
  console.log("variable3 is not null");
}

if (variable4 === null) {
  console.log("variable4 is null");
} else {
  console.log("variable4 is not null");
}

if (variable5 === null) {
  console.log("variable5 is null");
} else {
  console.log("variable5 is not null");
}

if (variable6 === null) {
  console.log("variable6 is null");
} else {
  console.log("variable6 is not null");
}

/*==를 사용하여 null 또는 undefined를 확인할 수 있다. ==는 값만을 비교하며 타입 변환을 수행한다. 
따라서 null과 undefined는 ==를 사용하면 true로 평가된다.*/
if (variable1 == null) {
  console.log("variable1 is null or undefined");
} else {
  console.log("variable1 has a value");
}

if (variable2 == null) {
  console.log("variable2 is null or undefined");
} else {
  console.log("variable2 has a value");
}

if (variable3 == null) {
  console.log("variable3 is null or undefined");
} else {
  console.log("variable3 has a value");
}

if (variable4 == null) {
  console.log("variable4 is null or undefined");
} else {
  console.log("variable4 has a value");
}

if (variable5 == null) {
  console.log("variable5 is null or undefined");
} else {
  console.log("variable5 has a value");
}

if (variable6 == null) {
  console.log("variable6 is null or undefined");
} else {
  console.log("variable6 has a value");
}