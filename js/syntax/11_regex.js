var targetStr = "간장 공장 공장장은 강 공장장이고, 된장 공장 공장장은 장 공장장이다."
var strReg1 = /공장/;
var strReg2 = /장공/;
 
targetStr.search(strReg1); // 3
targetStr.search(strReg2); // -1

//flags를 이용한 정규식
var targetStr = "bcabcAB";
var strReg = /AB/;              // 검색 패턴 비교 시 기본 설정으로 대소문자를 구분함.
var strUsingFlag = /AB/i;       // new RegExp("AB", "i")와 동일함.
targetStr.search(strReg);       // 5
targetStr.search(strUsingFlag); // 2 -> 대소문자를 구분하지 않고 검색함.

//특수문자 정규식
var targetStr = "ab1bc2cd3de";
var reg1 = /\d/;    // 2 -> 0부터 9까지의 숫자를 검색함.
var reg2 = /[3-9]/; // 8 -> 3부터 9까지의 숫자를 검색함.

//괄호 정규식
var targetStr = "abc 123 abc 123";
var oneReg = /(\w+) (\d+)/;
var anotherReg = /(\w+) (\d+) \1 \2/;
 
targetStr.match(oneReg);     // abc 123, abc, 123
targetStr.match(anotherReg); // abc 123 abc 123, abc, 123