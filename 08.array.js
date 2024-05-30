/*
바구니에 담는 것 처럼
비슷한 데이터를 한 곳에 묶어서 보관하는것을 자료구조라고 한다.

비슷한 타입의 object 들을 묶어놓는 것이 자료구조.

*/

'use strict';

//Array 

//1. Declaration(선언)
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['사과', '바나나', '망고'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 index 받아올때는 length -1


//3. Looping over an array

//a. for 
for(let i = 0 ; i < fruits.length ; i++) {
    console.log(`a 방법`);
    console.log(fruits[i]);
    
};

//b. for of 
for(let fruit of fruits) {
    console.log(`b 방법`);
    console.log(fruit);
}

// c. for each : callback 함수를 받아온다.
fruits.forEach(function() {
    console.log('ge'); // 배열이 3개라서 3번 반복
})

fruits.forEach((fruit) => console.log(fruit)); //

//4. Addition, deletion, copy
//push : add an item from the end 제일 뒤에 넣기
fruits.push('딸기','복숭아');
console.log(fruits); // (5) ['사과', '바나나', '망고', '딸기', '복숭아']

// pop : remove an item from the end 제일 뒤에서 빼기
fruits.pop();  // 맨 마지막 1개 빼기
console.log(fruits); //['사과', '바나나', '망고', '딸기']

// unshift : add an item to the beginning
fruits.unshift('과일들');
console.log(fruits); //(5) ['과일들', '사과', '바나나', '망고', '딸기']

// shift : remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // (3) ['바나나', '망고', '딸기']

// shift, unshift는 pop, push 보다 엄청엄청 느리다! 
// 왜? 기존의 idex를 건들지 않고 마지막만 수정하기 때문에 pop, push는 빠르고
// shift, unshift는 index를 뒤로 다 ~ 떙겨서 0번째를 빈칸으로 만들고 수정하기 때문에 속도가 느리다

//splice : 지정된 포지션에서 item삭제하기(삭제하고 새로운 데이터 삽입도 가능)
fruits.push('레몬','딸기2','배');
console.log(fruits); // (6) ['바나나', '망고', '딸기', '레몬', '딸기2', '배']
fruits.splice(2,2); //시작index, 시작index로부터 몇개, 원하는 갯수 안적으면 index부터 모든 데이터를 다 지움
console.log(fruits); // (4) ['바나나', '망고', '딸기2', '배']

// '바나나', '망고' ->  '딸기100', '배100' 이렇게 지우고 그 자리에 새로운 데이터 넣기
fruits.splice(0,2, '딸기100', '배100');
console.log(fruits); // (4) ['딸기100', '배100', '딸기2', '배']

// 배열 두개를 합쳐보자 -> concat
// 새로운 배열 선언
const person = ['학생', '직장인'];
const fruitsPerson = fruits.concat(person); //fruits 배열 + person 배열
console.log(fruitsPerson); //(6) ['딸기100', '배100', '딸기2', '배', '학생', '직장인']


// 5. Searching
//find the index : 배열안에 어떤값이 몇번쨰인덱스에 있는지 알고싶을때

console.clear();
console.log(fruits); //(4) ['딸기100', '배100', '딸기2', '배']
//indexOf 로 해당데이터가 몇번째 index에 있는지 숫자 출력
console.log(fruits.indexOf('배')); //3 
console.log(fruits.indexOf('배200')); // -1 : 없는 값에 대해서 index를 알려달라고하면 -1 출력

//includes로 배열안에 해당하는 값이 있는지 없는지 true/false 출력
console.log(fruits.includes('배100'));  //true
console.log(fruits.includes('배200'));  //false

//lastIndexOf : 증복되는 값이 있을 경우 마지막에 있는 데이터ㅣ의 index 값 출력
console.clear();
fruits.push('배100');
console.log(fruits);
console.log(fruits.indexOf('배100')); //1
console.log(fruits.lastIndexOf('배100')); //4
