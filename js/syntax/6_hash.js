//Hash 생성
var human = {"name": "홍길동", "age": 30 };
var hash = new Map();

//object 값 설정
human["name"] = "김철수"
human["height"] = 180

console.log(human)
console.log(human["name"], human.name)

//Map value 설정
hash.set("height", 170)
height = hash.get("height")
hash.has("height")
hash.delete("height")
console.log(hash.size)
