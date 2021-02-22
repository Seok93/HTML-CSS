# 1-1. Why JS?

JS는 웹(프론트엔드)에서 쓰이는 유일한 프로그래밍 언어이다.
웹은 계속 빠르게 변화하기 때문에 JS의 변화도 빠르고, 영향력도 점점 커지고 있다.

JS를 이용하면 웹 뿐만 아니라 앱이나 모바일 어플리케이션도 만들 수 있다.
Native Application들이랑 비디오 게임, 데스크톱 앱도 가능하다... 즉 무궁무진하다.

잔 세계의 컴퓨터는 브라우저를 사용하고, 브라우저는 JS를 해석할 수 있도록 내장하고 있기 때문에 JS로 만든 프로그램은 어디서든 사용할 수 있다고 말해도 과언이 아니다. (전 세계의 컴퓨터가 이 언어를 사용하고 있다고 해도 과언이 아닐지도....)

# 1-2. Super Powers of JS

Realtime 기능을 만들 수 있고, Socket io를 이용하여 통신 프로그램도 만들 수 있다.
Three JS를 이용하면 웹 상에서 3D입체를 만들 수도 있다.
Impact JS에는 JS로 만든 게임들도 있다.

# 1-3. ES5, ES6 ... WTF?

JS는 Specification으로 구글 크롬, 파이어폭스, 익스플로러 등이 JS에 추가된 것을 받아들여 자기들의 방식대로 실행한다.

JS는 언어, ECMAScript는 Specification이라는 것만 알아두면 된다.

# 1-4. VanillaJS

VanillaJS는 라이브러리없이 순수한 JS코드를 사용하는 것을 말한다.
프레임워크에만 의존하면 실제 필드에서는 개발을 할 수 없기 때문에 처음 입문은 VanillaJS로 하는 것이 좋다!

# 1-5. Hello World with Javascript

-

# 1-6. What are we learning

-

# 1-7. Variable

Variable(변수)란 변경이 가능한 수로 메모리 공간을 할당 받아 저장되어 유지되며, 필요에 따라서는 변경한다.

JS는 프로그래밍 언어로 정해진 절차와 규칙이 있지만...
JS의 문제점은 프로그래머가 규칙에 어긋난 핸동을 해도 이해해서 출력을 해준다는 점이다.

변수를 선언하는 방법에는 2가지 방법(지역변수, 전역변수)이 있다.

# 1-8. let, const, var

let과 var는 변수 선언에 사용하고
const는 상수 선언에 사용한다.

# 1-9. Data Types on JS

데이터의 종류로 6개를 가지고 있다.
String, Number, Boolean, Undefined, Symbol, Object(NULL, Array, Class), function,

# 1-10. Organizing Data With Arrays

우리가 가진 데이터를 정렬하는 방법으로 2가지가 있다.

1. array : 값들의 나열로 이루어져 있다. [] 안에 넣음
2. Object : 키와 값의 쌍으로 이루어져 나열되어있다. {} 안에 넣음

# 1-11. Organizing Data With Objects

-

# 2-1 Your first JS Function

Web APIs들은 build-in function(내장함수)으로 웹브라우저에서 제공하며 자연스럽게 포함되어 있기에 사용이 가능하다.
console.log();의 형태를 잘보면 console라는 Object에 log라는 함수를 이용하여 기능을 사용함을 알 수 있다.
console.log(consol);을 찍어보면 Object의 구조를 간략하게 볼 수 있다.

JS에서 함수를 만들기 위한 시그니쳐

```
// 함수의 정의와 인수(parameter) 설정
function sayHello(name) {
    console.log("Hello! "+ name);
}

sayHello('Woo'); // 함수의 호출, 인자(argument) 전달
```

# 2-2 More Function Func

과거에는 문자열의 결합이나 문자열과 변수의 결합을 위해 + 연산을 많이 했었다.

```
ex) console.log("Hello "+name);
```

하지만 ES6에서 백틱(`)이 추가 되어 변수와 문자열을 혼합하여 사용할 수 있게 되었다.

```
ex) console.log(`Hello ${name} you are ${age} years old`)
```

# 2-3 JS Dom Functions

document 라는 Web API가 있다.
document를 이용하여 id나 class를 통해 HTML 태그를 찾을 수 있다.

```
ex)
let title = document.getElementById("title");
title.innerHTML = "Hi!"
```

DOM이란 Document Object Model로, HTML 등 Document에 있는 모든 대상을 Object Model로 만들어서 Module처럼 다루겠다는 의미이다.
때문에 Object.method, Object.property 처럼 다양하게 가져다가 사용할 수 있게 해준다.
자바스크립트는 html에 있는 모든 요소를 가지고 와 그것을 Object로 바꾼다.

# 2-4 Modifying the DOM with JS

```
let title = document.getElementById("title");
console.dir(title); // dir 함수를 사용하면 title 변수 안에 어떠한 내용이 들어있는지 확인 할 수 있다.
title.style.color = "red";
```

document.querySelector는 document의 모든 문서에서 찾아보라는 의미?이다.

```
ex) document.querySelecot("#title");
```

# 2-5 Events and Event Handlers

Event란 웹 안에서 발생하는 동작들을 말한다. (click, resize, submit, input, change, load, before, closing, printing etc)

```
ex1)

function handleResize(event) {
    console.log(event);
    console.log("I have been resized");
}

// 웹브라우저?에서 resize 이벤트를 받기를 기다린다.
window.addEventListener("resize", handelResize);
```

```
ex2)

function handleClick(event) {
    console.log(event);
    title.style.color = "blue";
}

const title = document.querySelector("#title");

title.addEventListener("click", handleClick);
```

# 2.6 if, else, and, or

if는 조건문으로 특정 조건에 부합하는지 확인하여, 부합할 경우 실행시킬 코드를 실행시켜준다.
else는 if와 같이 딸려오는데, if 조건문에 부합할경우 실행할 코드를 넣는다.
&& and연산자로 모든 조건을 만족해야만 참이 된다.
|| or연산자로 모든 조건중 하나 이상만 만족하면 참이 된다.

# 2.7 DOM - if else - Function Practice 1

-

# 2.8 DOM - if else - Function Practice 2

자바스크립트로 로직을 만들어 처리할 수 있지만, 보통 css나 html의 변경을 하는 것은
