var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return this.birthday + this.pId;
    }
};
person.name    // 홍길동
person["name"] // 홍길동

var person = {
    name: "홍길동",
    birthday: "030219",
    pId: "1234567",
    fullId: function() {
        return this.birthday + this.pId;
    }
};
person.fullId() // 0302191234567
person.fullId;  // function () { return this.birthday + this.pId; } 

//생성자(constructor)를 이용한 객체 생성
var day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성함.
console.log("올해는 " + day.getFullYear() + "년입니다.");