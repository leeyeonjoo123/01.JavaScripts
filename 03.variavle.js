'use strict';

//[let 으로 변수 선언]
//let을 이용해서 name 변수를 선언하고 'first' 데이터를 넣는다.
let name = 'first';
console.log(name); //first

//변수 name 재정의
name = "hello"
console.log(name); //hello

// Application 을 실행하면, 쓸 수 있는 메모리를 할당하게 된다.
//app마다 쓸 수 있는 메모리는 제한되어있다.
// let 으로 변수를 선언하면 메모리의 위치를 가리키는 포인터가 생성된다.


// Block scope
// { } 을 이용하면 블럭 밖에서는 내용을 볼 수 없다. 그래서 블럭 밖에서 호출하면 호출안됨.
// { } 밖에 선언한 변수는 globalscope 이라고 한다.
// globalscope 는 어디서든지 호출가능. App가 실행되는 순간부터 항상 메모리에 탑재되어있다. 최소한으로 사용하는 것이 좋다.
// 가능하면, class 나 함수 등 필요한 곳에서만 사용하는 것을 추천

{
    let block = 'block scope';
    console.log(block); 
    
    //변수 name 재정의
    block = "block hello"
    console.log(block); //hello
    console.log(name); //globalscope는 어디서든지 호출가능

}



// [var 사용 비추 !! let 으로 변수를 선언 해줘~!]
/* 
사용하면 안되는 이유
1. var는 선언 전에 값을 할당하거나 console.log로 출력이 가능하다 -> 너무 유연하다 -> 이상하다
에러가 발생하지 않고, undefined 으로 뜬다. (let 은 에러가 뜸)
var hoisting 이라고 함.

* hoisting? 선언 위치에 상관없이 제일 위로 선언 위치를 끌어올리는 것

2. var는 {} block scope 이 없다. (블럭을 무시한다)
*/
console.log(age); // undefied
var age;
console.log(age); // undefied
age = 30 ;
console.log(age); // 30



/* [Constant]
const 는 read 만 가능(메모리의 값을 읽기만 가능 그래서 처음 값을 선언해주면 바꿀 수 없다.)
const로 선언하는 것이 좋은 습관! 
Constant : 한번 할당하면 값이 절대 바뀌지 않는 변수
constant는 포인터가 잠겨있다. 그래서 값을 선언함과 동시에 할당한 다음에는 값을 변경할 수 없다.
constant 는 Immutable 데이터 타입이라고 한다.
    - frozen object 는 값을 바꿀 수 없다. 

1. 보안(해커들이 코드를 변경해서 값을 변경하면서 사용하는 것을 방지할 수 있다.)
2. Thread safety. 다양한 쓰레드 동시에 돌아가는데, 다양한 쓰레드들이 동시에 변수에 접근해서 값을 변경할 수 있어서 값이 변하지 않는 것을 사용하는 것이 좋다
3. 실수 방지 가능 

값을 변경할 수 있는 것을 Mutable 데이터 타입이라고 하는데, let 키워드를 통해서 선언 가능

정리.
Javascript 에서 변수 선언 종류는 Mutable 타입의 let, Immutable 타입의 const가 있다.
*/
const maxNumber = 99;
const maxMonth = 12;



/* [Variable types] read/write (메모리의 값을 읽고 쓰기 가능)
Javascript 에서 데이터 타입
어떤 언어에서든지 (primitive type, Object type 두가지로 나뉜다)
1. primitive type (더이상 나눠질 수 없는 single item type)
    - number(숫자), string, boolean, null, undefined, symbol
    - 값 자체가 메모리에 저장된다

2. object type (single item 들을 여러개 묶어서 하나의 단위로 관리할 수 있는 타입)
    - function(함수), first-class function ()
        * first-class functon 이 지원이 된다 => function도 변수에 할당이 가능 하고, 함수의 파라미터로 사용 가능, 함수에서 return 타입으로 function 사용 가능
    - 너무 커서 메모리에 한번에 올라갈 수 없다. 그래서 reference 가 있다. (ref : 실제로 object를 가리키는 곳)
    - 그래서 ref(포인터)가 잠겨있는거라서 데이터는 바꿀 수 있다.

*/


const a = 100; 
const A = 200.0;

// 둘다 typeof 의 결과가 number
console.log(`a는 ${a} 이고 데이터 타입은 ${typeof a}`);
console.log(`a는 ${A} 이고 데이터 타입은 ${typeof A}`);



/* [특별한 숫자값 3가지]- infivity, -infinity, NaN
*/
const infinity = 200/0;  // 양수/0
const minusInfinity = -100/0;   // 음수/0
const nonumDiv = 'Not Number' / 2;  // 숫자가 아닌 값 / 숫자

console.log(infinity); //Infinity
console.log(minusInfinity); //-Infinity
console.log(nonumDiv); //NaN(Not a Number)


/*
bigInt (number의 범위보다 큰값 표현 *number는 -2의 53 ~ 2의 53승 까지 표현 가능)
표현.
const bigInt = 숫자n;
*/
const bigInt = 123456789012345679012345678901234567890n;
console.log(`${bigInt}의 데이터 타입은 ${typeof bigInt}`);


/*
String 
- JavaScript에서는 문자는 모두 String.
- String + 다른data type => String 
- template literals(` 백틱을 이용해서 출력, 작은따옴표보다 사용이 간편하다)
- (bigInt + '의 데이터 타입은' + typeof bigInt + '입니다.')
    = `${bigInt} 의 데이터 타입은 ${typeof bigInt} 입니다`
*/


/*
boolean
false : 0, null, undefined, NaN, ''(비어있는String)
true : 1, String, .. 다른 값들
*/


/*
null
- 너는 텅텅비어있는 empty 값이야!
- 너는 null 값이야!

undefined
- 선언은 했지만, 값이 안들어있을 때, or undefined 으로 선언
*/
let nothing = null;
console.log(`${nothing}의 데이터 타입은 ${typeof nothing}`);

let x;
console.log(`${x}의 데이터 타입은 ${typeof x}}`);


/*
symbol
- map 이나 다른 자료 구조에서 고유한 식별자가 필요하거나, 동시 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을때 사용
- 고유한 식별자를 만들 때 사용
- String 은 동일한 String 을 쓰면 동일한 식별자로 간주하기 때문에 Symbol과 다르다
- 바로 출력하면 error 발생, .description 을 이용해서 출력 가능
*/

// 같은 스트링이라도 다르다
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 같은 스트링으로 같은 symbol 만들기 -> .for 을 붙인다
const aSymbol1 = Symbol.for('pw');
const aSymbol2 = Symbol.for('pw');
console.log(aSymbol1 === aSymbol2);

//symbol값을 출력할 때는 .description 사용
console.log(`value : ${aSymbol1.description}의 타입은 ${typeof symbol1}`);


/*
Dynamic Typing : 변수를 선언할 때 어떤 타입인이 선언하지 않고, runtime에 할당된 값에 따라서
타입이 변할 수 있다.
유연하게 쓸 수 있지만, 규모있는 프로젝트에서는 단점이 있을 수 있다.(타입스크립트 탄생배경)
타입스크립트 = 타입 + 자바스크립트
*/
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`text는 ${text}이고, 데이터 타입은 ${typeof text}`);
text = 1;
console.log(`text는 ${text}이고, 데이터 타입은 ${typeof text}`);
text = '7' + 3 ; // 73 String + number 는 둘 다 String 으로 연산한다.(+ 연산이 Stirng 과 num 둘다 가능해서)
console.log(`text는 ${text}이고, 데이터 타입은 ${typeof text}`);
text = '6' / '2' ; // 3 나누기 연산이 숫자에서 사용하기 때문 + 실제 String 안의 값이 number라서 number로 인식하고 연산함
console.log(`text는 ${text}이고, 데이터 타입은 ${typeof text}`);


/*
object, function 
object = 박스형태
*/

const student = { name: 'sam', age : 30 };
student.age = 40; // const로 선언했지만 값을 바꿀 수 있다.