function throwException () {
    try {
        throw new Error("예외가 발생하였습니다.")
    }catch (ex) {
        console.log(ex);
    }finally {
        console.log("Finally 구문이 실행되었습니다.");
    }
}
throwException()