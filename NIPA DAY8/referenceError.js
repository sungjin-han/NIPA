var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    age: 30,
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        return this.birthday + this.pId;
    },
};

/*객체의 메서드로 호출되는 경우, this는 해당 메서드가 속한 객체를 가리키게 되는데 보통은 잘 동작하게 됩니다. 
하지만 해당 객체에 birthday와 pId 프로퍼티가 없는 경우에도 마찬가지로 undefined를 반환될 수 있어 주의해야합니다.*/