# 📚 3 this


### 📖 상황에 따라 달라지는 this
자바스크립트에서 this는 기본적으로 실행 컨텍스트가 생성될 때 함께 결정된다. 실행 컨텍스트는 함수를 호출할 때 생성되므로, 바꿔말하면 **this는 함수를 호출할 때 결정된다**고 할 수 있다. 함수를 어떤 방식으로 호출하느냐에 따라 this의 값이 달라진다. 지금부터 다양한 상황과 각 상황별로 this가 어떤 값을 가지게 되는지를 살펴보자.

#### 1\) 전역 공간에서의 this
**전역 공간에서 this는 전역 객체를 가리킨다.** 개념상 전역 컨텍스트를 생성하는 주체가 바로 전역 객체이기 때문이다. 브라우저 환경에서 전역 객체는 window이고, Node.js환경에서는 global이다.

```js
// (브라우저 환경) 전역공간에서의 this
console.log(this);              // Window {...}
console.log(window);            // Window {...}
console.log(this === window);   // true
```
```js
// (Node.js 환경) 전역공간에서의 this
console.log(this);              // Global{...}
console.log(global);            // Global{...}
console.log(this === global);   // true
```


#### 2\) 메서드 내부에서의 this
**메소드를 호출하면 this에는 호출한 주체에 대한 정보가 담긴다.** 호출한 주체는 .메소드명 바로 앞에 있는 객체이다. 
```js
var obj = {
    methodA: function() {
        console.log(this);
    },
    inner: {
        methodB: function() {
            console.log(this);
        }
    }
};

obj.methodA();          // Object{methodA:f(), inner:{...}, ...} (=== obj)
obj.inner.methodB();    // Object{methodB:f(), ...}  (=== obj.inner)
```

#### 3\) 함수 내부에서의 this
**함수로서 호출할 경우에는 this가 지정되지 않는다.** this에는 호출한 주체에 대한 정보가 담기는데, 함수로서 호출하면 호출 주체를 명시하지 않고 개발자 코드에 직접 관여해서 실행한 것이기 때문에 호출 주체의 정보를 알 수 없다. **실행 컨텍스트를 활성화할 당시에 this가 지정되지 않는 경우 this는 전역객체를 가리킨다.**
```js
function a() {
    console.log(this);
}
a();    // Window{...} (=== window)
```

**※ 메서드의 내부 함수에서의 this?**
메서드의 내부함수 역시 이를 함수로서 호출했는지, 메서드로서 호출했는지만 파악하면 this의 값을 정확히 맞출 수 있다. 함수로서 호출했다면 this가 지정되지 않았으므로, 전역객체를 가리키고, 메서드로서 호출했다면 .메서드명 앞의 객체가 주체로서 this에 연결된다.

```js
let obj1 = {
    outer: function() {
        console.log(this);      // (1) obj1 {outer:f(), ...}
        let innerFunc = function() {
            console.log(this);  //(2) Window {...}, (3) obj2{inner:f(), ...}
        }
        innerFunc();    // (2) 함수로서의 호출

        let obj2 = {
            inner: innerFunc
        };
        obj2.inner();   // (3)메서드로서의 호출
    }
};
obj1.outer();   // (1)메서드로서의 호출
```

this 바인딩에 관해서는 함수를 실행하는 당시의 주변 환경(메서드 내부인지, 함수 내부인지 등)은 중요하지 않고, 오직 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지 없는지가 관건이다.

**※ this를 바인딩하지 않는 함수**
ES6에서 추가된 화살표 함수(arrow function)는 실행 컨텍스트를 생성할 때, this 바인딩 과정 자체가 빠지게 되어, 스코프 체인에 의해 상위 스코프의 this를 그대로 활용할 수 있다.

```js
let obj = {
  outer: function () {
    console.log(this);
    let inner = () => {
      console.log(this);
    };
    inner();  // obj {outer:f(), ...}
  },
};
obj.outer();  // obj {outer:f(), ...}
```

#### 4\) 콜백함수 내부에서의 this
콜백함수란 함수의 제어권들 양도한 함수를 말한다. 예를들어 함수 A의 제어권을 다른 함수(또는 메서드) B에게 넘겨주는 경우 함수 A를 콜백함수라고 한다. **콜백함수도 함수이기 때문에 기본적으로 this가 전역 객체(window)를 참조하지만, 제어권을 받은 함수에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조하게 된다.**

```js
// (1) setTimeout 함수에게 넘겨준 함수(=콜백함수), 300ms 후에 호출한다.
setTimeout(function () {
  console.log(this); // Window{...}
}, 300);

// (2) forEach 메서드는 배열의 각 요소를 하나씩 가져와, 넘겨준 함수(=콜백함수)에 의해 출력된다.
[1, 2, 3, 4, 5].forEach(function (item) {
  console.log(this, item); // Window{...}
});

// (3) addEventListener메서드는 콜백 함수를 호출할 때, 자신의 this를 상속하도록 정의돼 있다.
document.body.innerHTML = += '<button id="a">클릭</button>'
document.body.querySelector('#a').addEventListener('click', function(e) {
    console.log(this, e);   //  MouseEvent{...}
});

```

콜백 함수를 인자로 받는 메서드 중 일부는 추가로 this로 지정할 객체(thisArg)를 인자로 지정할 수 있는 경우가 있다. Array에서도 제법 있고, ES6에서 새로 등장한 Set, Map 등의 메서에도 일부 존재한다.

```js
Array.prototype.forEach(callback[, thisArg])
Array.prototype.map(callback[, thisArg])
Array.prototype.filter(callback[, thisArg])
Array.prototype.some(callback[, thisArg])
Array.prototype.every(callback[, thisArg])
Array.prototype.find(callback[, thisArg])
Array.prototype.findIndex(callback[, thisArg])
Array.prototype.flatMap(callback[, thisArg])
Set.prototype.forEach(callback[, thisArg])
Map.prototype.forEach(callback[, thisArg])
```

#### 5\) 생성자 함수 내부에서의 this
JS는 함수에 생성자로서의 역할을 부여했다. new 명령어와 함께 함수를 호출하면 해당 함수가 생성자로서 동작하게 된다. **어떤 함수가 생성자 함수로서 호출된 경우 내부에서의 this는 곧 새로 만들 인스턴스 자신을 가리킨다.** 생성자 함수를 new 명령어와 함쎄 호출하면, 우선 생성자의 prototype 프로퍼티를 참조하는 __proto__라는 프로퍼티가 있는 객체를 만들고, 미리 준비된 공통 속성 및 개성을 해당 객체(this)에 부여한다.

```js
let Cat = function (name, age) {
    this.bark = "야옹";
    this.name = name;
    this.age = age;
}

let choco = new Cat("초코", 7);
let nabi = new Cat("나비", 5);

console.log(choco);     // Cat {bark: "야옹", name: "초코", age: 7}
console.log(nabi);      // Cat {bark: "야옹", name: "나비", age: 5}
```

### 📖 명시적으로 this를 바인딩하는 방법
#### 1\) call 메서드
> Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])

call은 this을 명시적으로 바인딩할 때 사용하는 메서드이다. 첫 번째 인자를 this로 바인딩하고, 이후의 인자들은 호출할 함수의 매개변수로 전달한다. 또한 call 메서드는 메서드의 호출 주체인 함수를 즉시 실행한다.

```js
// 함수 대상의 call 메서드
let func = function(a, b, c) {
    console.log(this, a, b, c);
}

func(1, 2, 3);              // Window {...} 1 2 3
func.bind({x: 1}, 4, 5, 6)  // Object {x:1} 4 5 6
```

```js
// 메서드 대상의 call 메서드
let obj = {
  a: 1,
  method: function (b, c) {
    console.log(this, this.a, b, c);
  },
};
let obj2 = { a: 4 };

obj.method(2, 3);                   // Object {a:1, method:f()} 1 2 3   (=== obj)
obj.method.call(obj2, 5, 6);        // Object {a:4} 4 5 6               (=== obj2)
```
#### 2\) apply 메서드
>  Function.prototype.apply(thisArg[, argsArray])

apply 메서드는 call 메서드와 기능적으로는 완전히 동일하지만, apply 메서드는 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다는 점만 차이가 있다.
```js
// 함수 대상의 apply 메서드
let func = function(a, b, c) {
    console.log(this, a, b, c);
}

func(1, 2, 3);              // Window {...} 1 2 3
func.apply({x: 1}, [4, 5, 6])  // Object {x:1} 4 5 6
```
```js
// 메서드 대상의 apply 메서드
let obj = {
  a: 1,
  method: function (b, c) {
    console.log(this, this.a, b, c);
  },
};
let obj2 = { a: 4 };

obj.method(2, 3);                   // Object {a:1, method:f()} 1 2 3   (=== obj)
obj.method.apply(obj2, [5, 6]);     // Object {a:4} 4 5 6               (=== obj2)
```

※ 유사배열객체에는 call/apply 메서드를 이용해 모든 배열 메서드를 적용할 수 있다.
유사배열 객체란 키가 0 또는 양의 정수인 프로퍼티가 존재하고, length 프로퍼티의 값이 0 또는 양의 정수인 객체를 말한다.
```js
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

Array.prototype.push.call(obj, 'd');
console.log(obj);   // {0:'a', 1:'b', 2:'c', 3:'d', length: 4}
```

※ ES6에서는 유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환하는 Array.from 메서드를 새로 도입했다.
```js
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

let arr = Array.from(obj);
console.log(arr);       // ["a", "b", "c"]
```

#### 3\) bind 메서드
> Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])

bind 메서드는 ES5에서 추가된 기능으로 call과 비슷하지만 즉시 호출하지는 않고, 넘겨 받은 this 및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드이다.

```js
let func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
}
func(1, 2, 3, 4);       // Window{...} 1 2 3 4

let bindFunc = func.bind({x:1});
bindFunc(5, 6, 7, 8);   // Object{x:1} 5 6 7 8

let bindFunc2 = func.bind({x:2}, 4, 5);
bindFunc2(6, 7);   // Object{x:2} 4 5 6 7 
bindFunc2(8, 9);   // Object{x:2} 4 5 8 9
```

※ bind 메서드를 적용하여 만든 새로운 함수는 name 프로퍼티가 일정한 규칙에 의해 설정된다. 어떤 함수의 name 프로퍼티가 'bound xxx'라면 함수명 xxx인 원본 함수에 bind 메서드를 적용한 새로운 함수라는 의미이다.
```js
let func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
let bindFunc = func.bind({x:1}, 4, 5);

console.log(func.name);         // func
console.log(bindFunc.name);     // bound func
```

### 📖 정리
다음 규칙은 명시적 this 바인딩이 없는 한 늘 성립한다.   
1\) 전역 공간에서의 this는 전역 객체를 참조한다.   
2\) 어떤 함수를 메서드로서 호출한 경우, this는 메서드 호출 주체를 참조한다.   
3\) 어떤 함수를 함수로서 호출한 경우, this는 전역 객체를 참조한다.   
4\) 콜백함수 내부에서의 this는 해당 콜백함수의 제어권을 넘겨 받은 함수가 정의한 바에 따르며, 정의하지 않은 경우에는 전역 객체를 참조한다.   
5\) 생성자 함수에서의 this는 생성될 인스턴스를 참조한다.   

다음은 명시적 this 바인딩에 관한 내용이다.   
1\) call, apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출한다.   
2\) bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만든다.   
3\) 요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 this를 받기도 한다.
