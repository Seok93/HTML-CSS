// #11 SYMBOL, SET AND MAP
// #11.1 Introduction
// 11장부터의 내용은 자주 사용하지 않을 뿐더러, 특정 문제를 해결하기 위한 것으로 협소한 문제를 해결할 때 쓴다.

// #11.2 Symbols
// 심볼은 새로운 데이터 타입이다.
// 심볼은 고유한 성질을 가지게 할 때 사용한다.
const hello = Symbol("hello");
const bye = Symbol("hello");
console.log(hello === bye); // false

// 니코가 찾은 use case는 2가지이다.
// 1. Uniqueness (key의 유니크성을 만들 때 사용)
const superBig = {
  [Symbol("nico")]: {
    handsome: true,
  },
};

// 2. Privacy
// 위와 같이 Symbol("nico")가 있음에도, key에서 출력되지 않는다.
// 때문에 어느정도 은닉성이 보장된다.
Object.keys(superBig); // []

// Symbol을 꺼내기 위해서는 아래와 같이 사용할 수 있다.
const s = Object.getOwnPropertySymbols(superBig); // Object에서 심볼을 꺼내온다.
s.forEach((symbol) => console.log(superBig[symbol]));

// #11.3 Sets
// Object를 이용해서 property를 삭제하고, 있는지 확인하고, 모든 property를 얻을 수 있고, Property를 추가할수도 있다.
// 그렇지만 Object는 추가, 삭제, 존재여부 등을 메소드로써 제공하지는 않는다...
// Set은 Object와 비슷하게 동작하면서, 추가, 삭제, 존재여부까지 확인 가능한
const user = {
  age: 12,
  name: "nico",
};
// object 데이터 삽입 1
user.oneMore = true;
// object 데이터 삭제 1
const deleteName = ({ name, ...rest }) => rest;
deleteName(user);

// SET을 사용하면 어떤 타입의 고유한 value든 저장할 수 있게 해준다.
// 값의 중복을 허용하지 않는다.(unique!), 순서를 보장한다.
// Object와 Map과 다르게 key와 value의 구조를 가지는게 아니라, Value만 넣어서 관리한다.
const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8]);
console.log(sexySet); // Set(8) {1, 2, 3, 4, 5, 6, 7, 8};   // 7의 중복이 사라짐

console.log(sexySet.has(9)); // true, 특정 요소 존재 확인
consolee.log(sexySet.delete(1)); // true, 특정 요소 삭제
sexySet.clear(); // 모든 요소 삭제
sexySet.add("Hi"); // 요소 추가

// #11.4 WeakSet
// WeakSet은 Set과 비슷하지만 다른 점이 존재한다.
// WeakSet은 오직 Object들만 저장할 수 있다.
// add, delete, has 말고는 특별한 메소드도 없다...

// JS는 GC를 제공한다.
// WeakSet은 메모리 Weakly held(약하게 붙들려 있다.)
// 즉, WeakSet에 넣은 Object를 가르키는 것이 없다면, 바로 지워버릴거야! 라는 의미란다..
const weakSet = new WeakSet();
const sexy = {
  im: true,
};
weakSet.add(sexy); // sexy는 다른 변수가 가르키고 있어서 GC의 대상이 아니지만
weakSet.add({ hello: true }); // {hello:true} 같이 내부에서 생성한 객체는 GC의 대상이 된다.

// #11.5 Map and WeakMap
// Map은 Set과 비슷하지만 차이점은 key-value구조를 가진다는 점이다.
// WeakMap은 WeakSet과 비슷하다.

const map = new Map();
// set, get, set, delete, clear ..... 등의 메소드 등이 있다.
map.set("age", 18);
console.log(map.get("age")); // 18
console.log(map.entries()); // MapIterator
console.log(map.has("age")); // true
