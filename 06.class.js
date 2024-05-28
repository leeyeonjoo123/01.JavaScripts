/*
class
- 속성 (fieds), method, 연관이 있는 데이터들이 묶여있음(fields, methods)
- 관련있는 변수, 함수를 묶어 놓은 것
- 클래스를 통해서 상속, 다양성이 일어남
- 클래스 = 템플릿 = 청사진 = 틀
- class 자체에는 데이터는 들어있지 않고, 틀, 템플릿만 정의되어있다.
- 클래스에는 이런이런 데이터가 들어올 수 있어라고 선언하는 것
- class 는 정의만 한 것이라, 실제로 메모리에 올라가지 않는다. 

- 클래스를 이용해서 실제 데이터를 넣어서 만드는 것이 object
-  class를 이용해서 새로운 인스턴스를 생성하면 object가 된다.

object
- 실제로 데이터를 넣은 object는 메모리에 올라간다.
- 
*/

/*
항상 개발 전에는 'use strict'; 을 이용해서 모던하게 개발하는 것을 권장.
*/

'use strict';

//1. Class declarations (클래스 선언)
class Person {
    //constructor(생성자)를 이용해서 오브젝트를 만들때 필요한 파라메타를 전달한다.
    constructor(name, age) {
        //fields
        this.name = name ;
        this.age = age;
        }

    speak() {
        console.log(`${this.name} : hello`);
    }
}

const eva = new Person('eva', 30); 
eva.speak();
console.log(eva.name);
console.log(eva.age);


//2. Getter and Setters
/*
사용자가 자판기의 커피숫자를 -1이라고 지정해도 setter에서 0으로 만들어준다!! 그래서 getter setter 를 쓴다?
다른 개발자가 잘못 사용해도 방어적으로 만들어주는 것이 getter setter
*/

class User {
    constructor(fiststName, lastName, age) {
        this.fiststName = fiststName;
        this.lastName = lastName;
        this.age = age;
    }
    //값을 리턴
    // get ager() 를 정의하면, this.age 는 메모리의 값을 읽어오는 것이 아니라, getter 를 호출하게됨
    get age() {
        return this._age;
    }
    //값을 설정. 설정하기 때문에 value를 받아와야한다.
    // = 으로 값을 저장할 때, 메모리에 바로 저장하는 것이 아니라, setter를 호출한다. 
    // 이때 함수명이 같으면, 무한정 호출하게 되어서 getter, setter 안에서 쓰는 변수는 다르게 해준다. 
    set age(value) {
        // if(value < 0) {
        //     throw Error ('age can not be negative'); //이렇게 표현하는 방법 1.
        // }

        // this._age = value;

        // 표현하는 방법2.
        this._age = value < 0 ? 0 : value;
    }

}
const user1 = new User('Steve', 'Jobs', -1); // age를 -1이라고 해놨음.. -> 말이 안된다~ 
//이렇게 클래스를 사용할 때, 잘못사용할 때 방어적인 자세로 사용하게 만들어주는 것이 getter , setter
console.log(user1.age);



// 3. Fiedls(public, private)
// constructor 생성자를 쓰지 않고, filed 를 정의할 수 있다.
// field : class에 포함된 변수

class Experiment {
    publicField = 2;
    //private 는 class 외부에서는 값을 읽고 쓰고 불가
    // private 는 #을 붙여서 표현
    #privateFiled = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined로 표기됨

// 4. Static
// - static 키워드를 사용하면, object 마다 값이 할당되어지는 것이 아니라,
// - class 자체에 붙어있다. 그래서 호출시에 object.변수명 (x)  class.변수명(o)
// - object에 상관없이(들어오는 데이터에 상관없이) 공통적으로 클래스에서 사용하는 것이라면
// - static을 사용하는 것이 메모리를 절약할 수 있다.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // 'Dream Coding'
Article.printPublisher();


// 상속 & 다형성
// 5. Inheritance
// a way for one class to extend another class

// 공통적인 내용을 한 번에 정의. -> 재사용이 가능하기 때문에, 유지보수가 쉽다.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color~`);
    }

    getArea () {
        console.log( `사각형 넓이는 ${this.width * this.height} `);
    }
    
}

class Rectangle extends Shape {} // (상속)extends Shape : Shape 에서 정의한 fields와 methods 를 사용할 수 있다.
class Triangle extends Shape { // 재정의(오버라이딩) : 필요한 함수만 재정의 해서 사용 가능하다
    
    
    getArea() { // 함수를 재정의 하게 되면, 부모함수를 호출하지 않고, 재정의한 함수를 호출하게 된다.
        //근데, 부모의 함수를 호출하고 싶다면?
        //super 를 사용하자!. 이때 return 그러니깐 재정의된 함수 뒤에 올 수 는 없다. ? (좀더 공부해야할 듯)
        // super.getArea();
        console.log( `삼각형 넓이는 ${this.width * this.height / 2}`);
    }

    getArea_super() {
        super.getArea();
    };

}

const rectangle = new Rectangle(20, 20, 'Red');
rectangle.draw();
rectangle.getArea();

const triangle = new Triangle(20, 20,'Blue');
triangle.draw();
triangle.getArea();
triangle.getArea_super();



//클래스를 이용해서 만들어진 새로운 instance
// 6. Class cheking : instanceOf
// 인스턴스가 해당 class 를 이용해서 만들어졌는지 확인하는 것. 그래서 return 이 true/ false .
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(rectangle instanceof Shape); //true. 상속했으니깐 맞다.
console.log(rectangle instanceof Object); //true. Object는 최상위 클래스!! 모든 클래스는 Object를 상속받는다.


//https://developer.mozilla.org/ko/docs/Web/JavaScript
// javascript에 포함된 object를 category로 살펴 볼 수 있다.


