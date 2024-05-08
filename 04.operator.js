// 1. String concatencation
console.log('my' + 'car');


//2. 

//3. Increment and decrement operators

//4. Assignement operators


//5. Compa

//6. Logical operators ||(or) &&(and) !(not)
// || or 연산자는 true나오면 연산을 멈추게 된다! 왜? 1개만 true 라도 true 이기 때문에~
// 그래서 expression 이나 함수가 맨 뒤에 오는 것이 좋다

//!(not)



//7. Equality

//== loose equality  : 타입을 변경해서 검사한다. 그래서 Stirng 5 == number 5 같다고 판단


//=== strict equqlity : 타입이 다르면 다르다 라고 판단
//strict 으로 판단하는 것이 좋다.


//object는  메모리에 ref형태로 저장된다.
const student1 = {name:'sam', age:'20'}; //포인터가 ref1을 가리키면
const student2 = {name:'sam', age:'20'}; //포인터가 ref2를 가리키면
const student3 = student1; // student1과 student3은 서로 메모리는 공유하고 있지 않지만, 각 메모리가 가리키는 ref는 같다
// student3는 ref1을 가리키고 있다.

console.log(student1 == student2); // false 각각 저장되어있는 ref가 다르기 때문에
console.log(student1 === student2); // false ref 값이 다르기 때문에
console.log(student1 === student3); // true 같은 ref 값을 가지고 있기 때문에

//quiz 
console.log(0 == false); // true
console.log(0 === false); // false : 0은 boolean 타입이 아니기 때문에
console.log('' == false); // true
console.log('' === false); //false  : '' empty문자열도 booleand 타입이 아니다
console.log(null == undefined); //true : 오 특이하다!
console.log(null === undefined); //false



//8. Conditional operators : if
// if, else if, else
const name = 'sam';
if (name == 'sam') {
    console.log('hi, sam');
} else if (name == 'kim') {
    console.log('hi, kim');   
} else {
    console.log('who are you?');
}


//9. Ternary operator : ?
//if를 간단하게 표현하기
// condition ? value1 : value2;
console.log(name === 'sam' ? 'hi' : 'who are you?');

// 10. Switch statement
// else if 를 여러개 쓴다면 switch를 사용하는 것이 좋다.
// 타입스크립트에서 정해져있는타입을 검사하거나 enum을 검사할 때 switch를 사용하는 것이 가독성이 좋다

// 11. Loop
// while : 조건문이 true 면 블럭을 실행

//do - while  : 블럭을 먼저 실행

// for loop, for(begin; conditionl; step)

//neted loop
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


//break(loop를 완전히 빠져나감), continue(skip하고 다음 step)

//01. 0~10까지 짝수만 프린트 continue 사용 (영상은 다른 코드)
for(let i = 0 ; i < 11 ; i++){
    if(i % 2 == 0) {
        console.log(i);
    } else 
        continue;
}


// 02. 0~10까지 looping하는데 8을 만나면 그만 break 사용
for(let i = 0; i < 11 ; i ++) {
    if (i == 8) {
        break;
    }
    console.log(i);
} 
