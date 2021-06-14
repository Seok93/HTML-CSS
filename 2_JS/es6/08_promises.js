// #8 PROMISES
// #8.1 Introduction to Async
// 자바스크립트는 동기적이고, blocking이며, single-threaded한 언어이다.
// 하지만 이것은 오직 한 연상에서의 특성을 의미하며, 모든 것에서의 특성을 의미하진 않는다.

// 사람들이 js가 비동기 언어라고 오해하는 이유는, js가 비동기식으로 동작하도록 조작할 수 있기 때문이다.

// 비동기적으로 움직이기 위한 방법: callback, promise, async/await
// 멀티 태스킹은 한가지 이상의 것을 한 번에 동시에 생각하는게 아니다
// 단지 작업들을 빠르게 스위칭하면서 진행 하는 것이다.

// 그런데 컴퓨터는 두 가지 일을 동시에 할 수 있다.
// 예를 들어 화면을 녹화하고, 오디오를 녹음하고, WiFi를 켜놓고, 배터리도 충전하고, 시간이 바뀌고 etc
// Promises는 이처럼 여러가지의 일을 동시에 실행 할 수 있도록 도와준다.
// fetch로 부터 반환되는 Promise객체는 HTTP error 상태를 reject하지 않는다.
// 그렇기 때문에 http 요청 중 에러가 발생했더라도 Promise의 catch로 떨어지지 않는다.
// reponse.ok로 확인해봐야한다.
const result = fetch("google.com"); // google.com에 요청을 먼저 실행햇지만, 결과가 가장 나중에 나온다!
console.log("something");
console.log(result);

// #8.2 Creating Promises
// promise는 콜백함수... excutor를 받아서 실행하며, 결과값을 받는다.
// promise의 excutor는 반드시 resolve나 reject를 해야한다.
// resolve는 성공한 반환값
// reject는 실패한 반환값 / 에러 etc

// 앞에서 google을 fetch했을 때, Promise가 reject됐다...
const amISexy = new Promise((resolve, reject) => {});

// resolve나 reject를 설정하지 않으면 promise는 pending 상태에서 계속 대기중이다.
console.log(amISexy); // Promise {<pending>}

const amISexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Yes you are!");
});

console.log(amISexy);
setInterval(console.log, 1000, amISexy);
// Promise {<resolved>: "Yes you are!"}

// #8.3 Using Promises
const amISexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Yes you are!");
});

// then을 사용하면 promise가 resolve로 끝난 이후의 결과 값을 받아냄
amISexy.then((value) => console.log(value)); // "Yes you are!"

// catch를 사용하면 promise가 reject로 끝난 이후의 결과 값을 반아냄
amISexy.catch((value) => console.log(value));

// #8.4 Chaining Promises
const amISexy = new Promise((resolve, reject) => {
  resolve(2);
});

// 가끔 하나의 promise가 아닌 여러개를 사용해야하는 경우도 있다.
// API로 가서 data를 받는다.
// data를 받고서 암호화된 부분을 풀어준다.
// data를 파일로 저장한다.
amISexy
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => number * 2)
  .then((number) => {
    throw new Error("Something is wrong....");
  })
  .then((number) => console.log(number * 2))
  .catch((error) => console.log(error));

new Promise((s, f) => {
  s(1);
})
  .then((num) => {
    console.log(num);
    return new Promise((s, f) => {
      s(2);
    });
  })
  .then((num) => {
    console.log(num);
    return new Promise((s, f) => {
      f(3);
    });
  })
  .then((last) => {
    console.log(last);
  })
  .catch((m) => console.log(`error: ${m}`));

// #8.5 Promise.all
// Promise.all은 주어진 모든 Promise를 실행한 후, 전부 Resolve되면, 모든 return값을 모아서 배열로 반환해준다.
// 하나라도 reject가 되면, Promise.all은 실패한다.
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 10000, "First");
});

const p2 = new Promise((resolve, reject) => {
  // setTimeout(resolve, 5000, "Second");
  setTimeout(reject, 1000, "Second");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

// #8.6 Promise.race
// Promise.race는 사용법은 Promise.all과 같지만, 의미하는 정반대이다.
// Promise.race는 모든 Promise를 실행한 후, 모든 Promise의 resolve값을 배열로 모아서 반환한다. reject시 바로 catch로 넘어간다.
const motherPromise = Promise.race([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// #8.7 .finally
// Promise가 성공하거나 실패하거나 실행하고 싶은게 있으면 finally를 사용한다.
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 10000, "First");
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log("I'm done"));

// #8.8 Real world Promises
// fetch는 promise를 return한다.
// fetch가 하는 일은 원격지에 뭔가를 요청해서 받아오는 것이다.
fetch("http://127.0.0.1:8000/")
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.log(error));

fetch("https://yts.am/api/v2/list_movies.json")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
