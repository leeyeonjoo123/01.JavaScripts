'use strict';
/*
1. 동기(sync)와 비동기(async)차이

JavaScript는 동기적이다.
= 호이스팅된 이후 부터, 코드는 작성한 순서대로 하나씩 동기적으로 실행된다
- 호이스팅 : var 변수와 function declaration(함수 선언 들이 자동 제일 위에서 실행되는 것
- 그래서 호이스팅 된 이후로부터 코드가 작성 순서대로 실행된다.

콜백함수 : 우리가 전달해준 함수를 나중에 니가 불러줘!!

*/

console.log('1');
//브라우저에서 제공하는 API로 지정된 시간이 지나면 callback함수를 부른다
// 비동기적인 실행 방법 
setTimeout(function() {
    console.log('25')
}, 2000)
console.log('2'); //setTimeout 이 브라우저에 응답을 요청하는데 응답을 기다리지 않고, 다음줄로 넘어가기때문에
console.log('3'); // 1 2 3 25 순으로 출력됨 (2초 뒤에 야! 콜백함수 실행해 해서 35가 출력됨)

//뒤에 코드를 arrowfunction으로 표현하기
setTimeout(() => console.log('35'), 2000); 
console.log('2'); 
console.log('3'); 

// 그렇다면 콜백함수는 항상 비동기로만 쓸 수 있나? 
// No ! 


// 1. Synchronous(동기) callback : 즉각적으로 바로 실행
// 아래의 코드는 위에 코드 보다 밑에 있지만, 호이스팅으로 인해서
// Javascript는 제일 위에 이 코드를 보낸상태! 그래서 
// setTimeout 보다 먼저 실행되어짐!!! 
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));


// 2. Asynchronous (비동기) callback : 언제 실행될지 예측할 수 없다? 시간을 준다?
// setTimeout : 브라우저 api, print라는 함수를 출력하고, timeout 인자를 전달한다..
// 그러니깐 전달받은 printWithDelay로 print, timeout 인자를 전달받으면,
// setTimeout 에 요청한다.
// 마찬가지로 호이스팅되면서(함수의 선언이 맨위로 올라간다)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printImmediately( () => console.log('async callback'), 1000);


//callback 지옥 예제(콜백함수 내에서 또 콜백함수를 쓰고 쓰고... )

//backend에서 사용자 정보를 받아오는 class 생성
class UserStorage {
    // id, pw를 받아오고 정상적으로 로그인 되면 onSuccess라는 콜백함수 호출 ..
    loginUser(id, pw, onSuccess, onError) {
        setTimeout( ()=> {
            if(
                (id === 'eva' && pw === 'eva-pw') ||
                (id === 'nana' && pw === 'nana-pw')           
            ) {
                onSuccess(id); //onSuccess 에 id를 전달해준다
            } else{
                onError(new Error('CAN NOT LOGIN : not found id'));
            }
        }, 10000) ; // 10초 뒤에 if~ 코드 블럭이 실행된다. 10초 뒤에 실행되는것이 의미있나? 
        // 10초 뒤에 에러 메세지 뜸.. 
    }

    //사용자데이터 user를 받아서 서버에서 사용자 정보(role)을 백엔드에서 받아오는 api
    getRoles(user, onSuccess, onError) {
        setTimeout( () => {
            if (user === 'eva') {
                onSuccess( {name : 'eva', role : 'admin'});
            }
            else if ( user === 'nana') {
                onSuccess( { name : 'nana', role : 'ROOT'})
            }
            else {
                onError( new Error('no access : you are not admin'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage() ;
// promt() : 브라우저 api
const id = prompt('enter your id');
const pw = prompt('enter your pw');
userStorage.loginUser(
    id,
    pw,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`hi, ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error.message);
            }
        );
    },
    error => {
        console.log(error.message)
    }
);