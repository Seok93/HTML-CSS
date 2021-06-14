// #10 classes

// #10.1 introduction to classes
// class는 보통 내가 만들어서 쓰는 경우보다, 남들이 만들어둔 class를 사용하는 경우가 많다.
// class는 보통 많은 사람들이 라이브러리나 리액트 같은 것을 만들 때
// classes를 export해서 classes를 가져다 사용한다.

// class는 기본적으로 blueprint(청사진)이다.
// class는 constructor(생성자)를 가지고 있다.
// constructor는 class를 구성해준다.(멤버변수 설정... etc)
// class 내부에 함수도 만들수 있다. 이를 멤버함수, 메소드라고 한다.
class User {
  constructor(name) {
    this._username = name;
  }
  get username() {
    return this._username;
  }
  set username(name) {
    this._username = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this._username}`);
  }
}

class Test {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  set name(name) {
    console.log("set name!");
    this._name = name;
  }
  set age(age) {
    console.log("set age!");
    this._age = age;
  }
  get name() {
    console.log("get name!");
    return this._name;
  }
  get age() {
    console.log("get age!");
    return this._age;
  }
  test = () => {
    console.log("test");
    console.log(`${this._name} ${this._age}`);
  };
}
// class를 통해 instance를 만드는 방법
const sexyUser = new User("Nicolas");
console.log(sexyUser.username);
setTimeout(sexyUser.sayHello, 4000);

// #10.2 extending classes
// #10.3 super
class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}`);
  }
  getProfile() {
    console.log(
      `${this.username} ${this.lastName} ${this.email}, ${this.password}`
    );
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password.");
    }
  }
}

const sexyUser = new User({
  username: "Nicolas",
  lastName: "Serrano",
  email: "nico@naver.com",
  password: "1234",
});

// class의 상속
class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting the whole website....");
  }
}
const sexyAdmin = new Admin({
  username: "Nicolas",
  lastName: "Serrano",
  email: "nico@naver.com",
  password: "1234",
  superAdmin: true,
  isActive: true,
});
sexyAdmin.deleteWebsite();

//================================================================
// arrow function을 쓰는 이유는 this가 addEventListener에서 변경되기 때문에, thisBinding을 하지 않기 위해 그렇다.
class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter.innerHTML = initialNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count += 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count -= 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "count", plusId: "add", minusId: "minus" });

// #10.3 WTF is this
