/*
Primitive type(원시타입)
- 실제 데이터 값을 저장
- stack 메모리에 저장
- 사용하기 전에 선언 되어야 하며, 자료형의 길이는 독립적이며 변하지 않음
- null : 불가능
- 변수 하나당 , 값을 하나만 담을 수 있다.

Reference type(참조타입)
- 메모리 주소값을 통해 객체를 참조
- Object 클래스를 상속하는 모든 클래스를 말하며,
- 실제 객체는 HEAP 메모리에 저장되며, 참조 타입 변수는 Stack 메모리에 실제 객체의 주소값을 저장.
- null : 가능

*/

/*
object 는 key와 value 의 집합체
object = {key : value};
*/


/*
properties : key : value 형태로 저장된 객체 ?

javascript는 Runtime(프로그램이 동작하고 있을 떄)에 dynamically typed language



*/


//1. Literals and properties
function print(person) {
    console.log(person.name); //eva
    console.log(person.age); //5
}

const eva = { name: 'eva', age:5};
print(eva);

// object를 만드는 방법
const obj1 = {} ; //'object literal' syntax. class가 없어도 { } 를 통해서 object를 바로 생성할 수 있다.
const obj2 = new Object(); // 'object constructor' syntax : new 키워드를 통해서 Object클래스로 객체생성


eva.hasJob = true;
console.log(eva.hasJob); //true
delete eva.hasJob; // object를 삭제할 수 도 있다..! 
// console.log(eva.hasJob); //undefined(delete 하면)


//2. Computed properties : 계산된 properties. 실시간으로 원하는 값을 받아올 때

// 방법1 : 코딩하는 그 순간 접근하고 싶을 때 사용. 보통의 경우에 사용
//보통 object.변수명 형태로 접근
console.log(eva.name);

// 방법2 : 정확하게 어떤 key가 필요한지 모를 때, runtime에서 결정될 때 사용.
//object 안에 있는 name 이라는 변수의 값을 String 형태로 접근.
// 배열에서 데이터를 받아오는 것 처럼 접근 가능, 이것을 computed properties
// 그냥 name 이라고 하면 안되고 String 타입으로 작성 ('name')해서 접근해야함.
console.log(eva['name']);
eva['hasJob'] = true ;
console.log(eva.hasJob);


// 3. Property value shorthand
// javascript에서는 key와 value 가 동일하다면 생략할 수 있다.
const person1 = {name : 'apple', age : 10};
const person2 = {name : 'banana', age : 20};
const person3 = {name : 'circle', age : 30};
// object를 만들때마다 동일한 key, value 값을 반복해서 작성하는 문제 발생..
// 그래서 함수를 이용해서 값만 전달해서 object를 만들 수 있다.
// makePerson이 마치 class 처럼 작동한다.
const person4 = makePerson('Drain', 40);
console.log(person4);
function makePerson(name, age) {
    return {
        name, // == name : name
        age, // == age : age
     };
}

//4. Constructor function
function Person(name, age) {
    //  this = {};
     this.name = name;
     this.age = age;
     return this;
}

