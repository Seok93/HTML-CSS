// 크롬 개발자 도구 콘솔에서 실험해보기!

// #6.1 Introduction to Spread
// SPREAD는 기본적으로 변수(array, object)를 가져와서 풀어 해쳐서 전개하는 역할(unpack)을 말한다.

const friends = [1, 2, 3, 4];

// friends를 그냥 출력하면 배열형태를 유지한채 출력이 되지만, Spread 연산자(...)를 이용하면, 배열을 해체한 후 전개해준다.
// 즉 배열이나 객체의 내부의 요소를 추출하기 원할 때 사용한다.
console.log(friends); // [1, 2, 3, 4]
console.log(...friends); // 1, 2, 3, 4

// Spread활용: 서로 다른 두 배열 합치기
const family = ["a", "b", "c"];

// 아래의 연산은 두 개의 배열의 요소들이 모두 합쳐진 문자열이 된다.
console.log(friends + family); // "1, 2, 3, 4a, b, c"

// 아래의 연산은 배열 안에 배열이 묶인 걸로 표현된다.
console.log([friends, family]); // [Array(4), Array(3)]

// 중요) 아래의 연산은 Spread를 통해 각 요소들이 분리된 후에 배열에 들어가므로, 모든 요소를 담고 있는 하나의 배열을 얻을 수 있다.
console.log([...friends, ...family]); // [1, 2, 3, 4, "a", "b", "c"]

// Spread는 객체에도 적용이 된다.
const sexy = {
  name: "nico",
  age: 24,
};

console.log(sexy); // {name: "nico", age: 24}

// 객체를 해체하는 것은 불가능하다.
console.log(...sexy); // Uncaught TypeError: Found non-callable @@iterator

const hello = {
  sexy: true,
  hello: "Hello",
};

// 대신 분할해서 새로운 객체를 만드는 것은 가능하다.
console.log({ ...sexy, ...hello }); // {name: "nico", age: 24, sexy: true, hello: "Hello"}

// #6.2 Spread Applications
// 1. array|object merge
const friends = ["nico", "lynn"];
// 새로운 배열을 만들면서 데이터를 추가 했다. push를 통해 데이터를 추가하면 friends 원본을 변경하지만, 아래의 방법은 원본을 유지한채 새로운 배열을 만들 때 사용하기 좋다.
// 정리) 기존 데이터를 복사해서 새로운 데이터를 만들고 싶을 때 사용할 수 있는 방법
const newFriends = [...friends, "dal"];
console.log(newFriends); // ["nico", "lynn", "dal"]

const nico = {
  username: "nico",
};
console.log({ ...nico, password: 123 });

const first = ["mon", "tue", "wed"];
const weeked = ["sat", "sun"];
const fullWeek = [...first, "thu", "fri", weeked];
console.log(fullWeek);

// 어떻게 하면 object에 속성을 조건부로 추가할 수 있는가?
// 잘못된 예제
const lastName = prompt("Last Name");
const user = {
  username: "nico",
  age: 24,
  lastName: lastName !== "" ? lastName : undefined, // 정보가 없어도 lastName이 포함되어 있다.
};
console.log(user);

// 좋은 예제
const lastName = prompt("Last Name");
const user = {
  username: "nico",
  age: 24,
  ...(lastName !== "" && { lastName }), // 정보가 없으면 lastName을 포함하지 않는다.
};

/*
변경 과정
...(lastName !== "" && {lastName})
...(true && {lastName})
...({lastName})
lastName
lastName: lastName
*/

// #6.3  Introduction to Rest Parameters
// Spread가 전개해서 펼쳐준다면(extand), Rest는 묶어서 압축(contact)해준다.
// Rest는 모든 값을 하나의 변수로 축소(Contact) 시켜준다.
const infiniteArgs = (...rest) => console.log(rest); // ["1", 2, true, "lalala", Array(4)]

infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);

// 이 기능의 핵심은!
const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
};
bestFriendMaker("nico", "lynn", "dal", "guy");

// 배열 구조를 분할할당하여 나머지를 압축할 수도 있다.
const arr = [1, 2, 3, 4];
const arrFunc = ([one, two, ...rest]) => {
  console.log(one);
  console.log(two);
  console.log(rest);
};

// 객체 구조를 분할할당하여 나머지를 압축할 수도 있다.
const obj = {
  name: "woo",
  age: 29,
  phone: "010-xxxx-xxxx",
  color: "green",
};
const objFunc = ({ test, age, ...rest }) => {
  console.log(test); // undefined가 들어감, 즉 분할할당할 때 이름을 꼭 맞춰줘야함!
  console.log(age);
  console.log(rest);
};

// #6.4 Rest + Spread + Destructure Magic!!!
// 1. 특정 속성값(property)을 제외시키기!
// 안좋은 예제
const user = {
  name: "nico",
  age: 24,
  password: 12345,
};
user["password"] = null;
console.log(user); // {name: "nico", age: 24, password: null}

// 좋은 예제
const killPassword = ({ password, ...rest }) => rest;
const cleanUser = killPassword(user);
console.log(cleanUser); // {name: "nico", age: 24}

// 2. 특정 속성값 삽입시키기
const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
console.log(setCountry(user)); // {country: "KR", name: "nico", age: 24, password: 12345}

// 3. 속성값 이름 다시 만들기 (rename property)
const user = {
  NAME: "nico",
  age: 24,
  password: 12345,
};
const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
console.log(rename(user)); // {name: "nico", age: 24, password: 12345}

// rest, spread, destructuring을 콤보로 쓰면 아름답게 코딩할 수 있다.
