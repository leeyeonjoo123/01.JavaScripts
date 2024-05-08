/*
function

1. Function declaration
- function name(param1, param2) { body .. return; }
- 하나의 함수 === 하나의 동작
- 명명 => doSomething, command, verb동사형태로 명명하는 것을 권장
- 함수를 깨끗하게 만드는 것을 고민! (하나의 동작이 들어있는지)
- function 은 object이다. 그래서 function을 변수에 할당할 수 있고,
    파라미터로 전달이되고, 함수를 return 할 수 도 있다.

중요요소
- 함수이름, input, output
*/

function log(message) {
    console.log(message);
}
log('HELLO');
log(123);
//타입을 명확하게 표시하지 않는 자바스크립트
//타입을 명확하게 표현하려면 타입스크립트

/*
2. Parameters
premitive parameter : value가 전달된다.
object : 메모리에 ref(reference, 주소값, 참조값)가 저장되고, ref가 전달된다.
*/
//function changeName(obj) {
//    obj.name = 'coder';
//}
const student = { name : 'sam'};
//changeName(student);
console.log(student);