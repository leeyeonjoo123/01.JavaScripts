/*
HTTP
request <-> response
- Hypertext, doc, image 포함

AJAX
- Asynchroncous Javascript XML

XHR
- XMLhttpRequest

fetch() API

- 서버와데이터를 주고 받을 때는 다양한 파일포맷을 사용할 수 있다.
요즘에는 JSON 을 많이 사용한다.

- XML은 불필요한 tag 떄문에 파일크기가 커짐 & 가독성 떨어짐

- JSON(JavaScript Object Notation)을 많이 쓴다
- {key : value} 
- 데이터를 주고 받을 때 사용할 수 있느 가장 간단한 포맷
- 읽기 편하다
- 데이터를 서버와 주고 받을 때 직렬화(serialization)를 위해 사용
- 언어에 상관없이 사용 가능


json 공부 point
1. 데이터 직렬화 serialization 하는 방법
2. 직렬화된 json 을 deserialize 로 object로 변환할 것인지
*/

//1. Object to JSON
//object -> json : stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['사과', '배', '딸기']); // ["사과","배","딸기"] " 큰따옴표에 집중! 이게 JSON이라는 표시"
console.log(json);

const rabbit = {
    name: 'meme',
    size : null,
    color : 'white',
    birthDay : new Date(),
    //jump는 json 형태가 아니라서 출력안됨
    jump: () => { 
        console.log( `${name} can jump`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); //name 만 전달하고싶다. 원하는 properties만 전달 가능
console.log(json);

//callback 함수를이용해서 세심하게 control 
// rabbit을 싸고 있는 제일 큰 object가 먼저 전달되서
// 첫줄은 key : , value : [object Object] 이렇게 출력됨
json = JSON.stringify(rabbit, (key, value) => {
    console.log( `key : ${key}, value : ${value}`); 
    //return value;
    return key === 'name' ? 'yoyo' : value ; // key값이 name 이면 yoyo를 출력하고 아니면 value값 출력
}); 

console.log(json);

console.clear();

//2. parse(json) : JSON to Object .. string 으로 
json = JSON.stringify(rabbit); //rabbit을 json 으로 만들었지
const obj = JSON.parse(json);
console.log(obj); // 출력된 값이 "큰따옴표가 없으니, json 형식이 아니라 object다

rabbit.jump(); // can jump 출력! 처음 만든 object 안에 method 있어서 method 출력됨
//obj.jump(); // ERROR! json으로 변화시키면서 method 빼고 변화됨. 그걸 다시 object로 변환하니깐 method 가 없는 상태임

//String이 된 Date를 다시 살려보자!
console.log(rabbit.birthDay.getDate()); //29. 당연히 Date 객체라서. 출력됨 
//console.log(obj.birthDay.getDate); //undifind . string이기 떄문에 getDate 가 안됨.
//되게 해볼까? 콜백함수 써보자

// json을 다시 string 형태의 obj2라는 object로 만들기
// 그 다음에 birthDay 라는 key 값이 나오면 value를 가지고 Date() 객체 생성
const obj2 = JSON.parse(json, (key, value) => { 
    console.log( `key : ${key}, value : ${value}`); 
    // return value;
    return key === 'birthDay' ? new Date(value) : value ; // key값이 birthday 이면 value값으로 Date를 생성하고 아니면 value값 출력
}); 


console.log(obj2.birthDay); //undifind . string이기 떄문에 getDate 가 안됨.





/*

JSON에 대해 조금더 공부를 하고 싶으시면: 
MDN ➡️ https://developer.mozilla.org/en-US/d...
JavaScript.info ➡️ https://javascript.info/json
JavaScript.info 한국어 ➡️ https://ko.javascript.info/json 

유용한 사이트:
JSON Diff checker: http://www.jsondiff.com/
JSON Beautifier/editor: https://jsonbeautifier.org/
JSON Parser: https://jsonparser.org/
JSON Validator: https://tools.learningcontainer.com/j...

*/