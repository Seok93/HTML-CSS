// #5 Destructuring

// #5.1 Object Destructuring
// Object, array, function destructuring에 대해 배워보자
// Destructuring은 object나 array, 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 해준다.

const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

// 과거는 아래와 같이 시작부터 끝까지 모든 경로를 다 써야했다.
if (settings.notifications.follow) {
  // send email
}

// Destructuring이 생긴 이후 접근 방법
// 큰 object에서 특정 변수나, 그 안에 속한 작은 object에 접근할 수 있도록 해준다.
// follow = false는 default 값을 설정한 것으로 follow가 없다면 follow를 false로 선언해준다.
const { notifications: { follow = false } = {}, color } = settings;
console.log(follow, color);

// #5.2 Array Destructuring
// array destructuring은 가져온 정보를 조작하지 않을 때 쓰기 좋다.?
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 앞의 3개만 가져오려고 한다면 어떻게 하겠는가?
// 내가 생각한  방법1
console.log(days.slice(0, 3));

// 내가 생각한 방법 2
const slice = ([mon, tue, wed, ...rest]) => {
  return [mon, tue, wed];
};
console.log(slice(days));

// 니코가 말한 방법 1
// 참고로 배열도 default 값 설정 가능
const [mon, tue, wed = "Wed"] = days;
console.log(mon, tue, wed);

// #5.3 Renaming
// api에서 데이터를 받았다고 가정하고 변수명을 보면, python의 기본 규격인 snake_case로 오는 경우도 있다.
// js는 보통 camel-case를 사용함으로 이를 새롭게 이름 지어서 전체적인 규칙을 지켜주고자 할 때
// destructuring을 이용해서 alias를 부여할 수 있다.
const settings = {
  color: {
    chosen_color: "dark",
  },
};

// destructuring이 없었을 때
const chosenColor = settings.color.chosen_color || "lights";

// // destructuring이 생긴 이후
const {
  color: { chosen_color: chosenColor = "ligtht" },
} = settings;
console.log(chosenColor);

// 니코의 꿀팁
// let으로 선언된 변수명와 destructuring에 선언한 변수명이 같은 경우 어떻게 해야할까?
let chosenColor = "blue";
console.log(chosenColor);

// 잘못된 예제 - Uncaught SyntaxError: Identifier 'chosenColor' has already been declared
let {
  color: { chosen_color: chosenColor = "ligtht" },
} = settings;
console.log(chosenColor);

// 좋은 예제
({
  color: { chosen_color: chosenColor = "ligtht" },
} = settings);
console.log(chosenColor);

// #5.4 Function Destructuring
// 변수의 가독성을 확보하고
// 각 변수의 기본 값을 설정해줄 수 있음
function saveSettings({ follow, unfollow, mkt, themeColor = "blue" }) {}
saveSettings({
  follow: true,
  unfollow: true,
  mkt: true,
  themeColor: "green",
});

// #5.5 Value Shortands
// 변수명 단축: 객체 생성시 key와 value의 이름이 같다면, 한 쪽만 적어도 된다.

// 보통 객체 선언시
const follow = checkFollow();
const alert = checkAlert();
const settings = {
  notifications: {
    follow: follow,
    alert: alert,
  },
};

// 변수명 축약을 사용했을 시
const follow = checkFollow();
const alert = checkAlert();
const settings = {
  notifications: {
    follow,
    alert,
  },
};

// #5.6 Swapping and Skipping
// variable swapping
let mon = "Sat";
let sat = "Mon";

// destructuring을 이용한 트릭!
[mon, sat] = [sat, mon];

// variable skipping
const days = ["mon", "tue", "wed", "thu", "fri"];
const [, , , the, fri] = days;
