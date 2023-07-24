//while 문
var i = 1;
while (i < 10){
    console.log(i);
    i++;
}

//for 문
for (var i = 0; i < 10; i++){
    console.log(i)
}

//for-in 문
var arr = [3,4,5];
for (var i = 0; i < arr.length; i++){
    console.log(i)
}

for (var i in arr){
    console.log(i)
}

var obj = { name : "이순신", age : 20 };
for (var i in obj){
    console.log(i)
    console.log(obj[i])
}

//continue
var except = 3;
for (var i = 0; i <=100 ; i++){
    if (i % except == 0){
        continue;
    }
    console.log(i);
}

//break
var stop_num = 10;
var i = 0;
while (true){
    if (i >= stop_num) {
        break
    }

    console.log(i)
    i++;
}