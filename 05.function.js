/*
function = sub-program

1. Function declaration
- function name(param1, param2) { body .. return; }
- 하나의 함수 === 하나의 동작
- 명명 => doSomething, command, verb동사형태로 명명하는 것을 권장
- 함수를 깨끗하게 만드는 것을 고민! (하나의 동작이 들어있는지)
- function 은 object이 다. 그래서 function을 변수에 할당할 수 있고,
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
premitive parameter : 메모리에 value가 그대로 저장되고, value가 전달된다.
object : 메모리에 ref(reference, 주소값, 참조값)가 저장되고, ref가 전달된다.
*/
function changeName(obj) {
    obj.name = 'coder'; //
}
const student = { name : 'sam'};
changeName(student);
console.log(student);

/*
3. Default parameters (add in ES6)
*/
function showMessage(message, from) {
    console.log( `${message} by${from}`);
}
showMessage('Hi'); //message parameter는 전달되었지만 from이 없다. 그래서 undefined
// 옛날에는 파라메타가 없을 경우를 대비해서 if 문을 작성했지만, 지금은 undified 되기 때문에 안써도됨

//4. Rest parameters (added in ES6) // ... : 배열형태
function printAll(...args) { // ...은 배열이다
    for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
    }

    // 같은 의미1 (간결한 표현)
    for(const arg of args) { //arg에 있는 모든 값들이 하나씩 출력되어라 라는 의미
        console.log(arg);
    }

    // 같은 의미2
    args.forEach((arg) => console.log(arg));
}
printAll('one', 'two','three');

// 함수를 object 라고 보는 이유? 라고 보기 때문에
//" 함수.파라메타 "로 그 값을 불러올 수 있다.
// printAll.length 이렇게



// 5. Local scope 
/*
javascript 에서 scope 란?
밖에서는 안이 보이지 않고
안에서는 밖을 볼 수 있다

{ } 안에 선언한 변수는 안에서만 쓸 수 있다.

*/

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
// bad

//Arrow function
//always anomymous



const add102 = (a,b) => a + b;

// 같은 표현(위, 아래)

const add101 = function (a,b ) {
    return a + b;
};



//IIFE : Immediately Invoked Function Expression
// 함수의 선언과 동시에 실행시키고 싶을 때


 (function hello() {
    console.log('IIFE');
})();

//Quiz
// function cals(command, a, b)
// command : add, substract, divide, multiply, remainder

function cals(command, a, b){
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error ('unknown command');
    }
}

console.log(cals('add', 5, 100));