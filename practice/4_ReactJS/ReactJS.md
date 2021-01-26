# Movie App 2019
React JS Fundamentals Course 2019 update!

# 목차
0\) [Preparation](#0-preparation)   
1\) [Create React Project](#1-create-react-project)   
2\) [JSX & Props](#2-jsx--props)   
3\) [State](#3-state)   
4\) [Life Cycle & Data Fetch](#4-life-cycle--data-fetch)   
5\) [Make Simple Movie App](#5-make-simple-movie-app)   
6\) [Routing](#6-routing)   

# 🌈0 PREPARATION
## 0.1 설치항목
- [x] [NVM](https://github.com/nvm-sh/nvm)
- [x] NodeJS
- [x] NPM
- [x] [NPX](https://github.com/npm/npx)
- [x] Git
- [x] [VSCode](https://code.visualstudio.com/)
- [x] [React Developer Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related)

```sh
1) NVM 설치
    [설치 명령어] 
    : curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash

    [버전 확인 명령어]
    : nvm --version

    [설치가능한 NodeJS 확인 명령어] 
    : nvm ls-remote

2) NodeJS, NPM 설치
    [NVM을 이용하여 NodeJS 설치 명령어]
    : nvm install [버전]

    [NodeJS 버전, NPM 버전 확인 명령어]
    : node -v
    : npm -v

3) NPX 설치
    [설치 명령어]
    : npm install npx -g

    [NPX버전 확인 명령어]
    : npx -v

4) Git 설치
    [설치 명령어]
    : npm install git

    [Git 버전 확인 명령어]
    : git --version

5) React Devtools 설치
    [설치 명령어]
    : npm install -g react-devtools
```  

## 0.2 General Module & React Module
- [x] [creat-react-app](https://github.com/facebook/create-react-app)
- [x] [axios](https://github.com/axios/axios)
- [x] [prop-types](https://github.com/facebook/prop-types)
- [x] [react-route-dom](https://github.com/ReactTraining/react-router)

```sh
1) create-react-app
    별도로 설치할 필요 없이, npx 명령어를 이용하여 이용만하면 된다.

2) axios 설치
    [설치 명령어]
    : npm install axios

3) prop-types 설치
    [설치 명령어]
    : npm install prop-types

4) react-route-dom 설치
    [설치 명령어]
    : npm install react-route-dom
```

# 🌈1 CREATE REACT PROJECT
## 1.0 Creating your first React App
2016년 이전까지만 해도 ReactJS를 이용하여 프로젝트를 생성하기 위해서는 webpack, babel 등 별도로 설치를 하여 설정을 해줬어야 했다고 한다. 그렇지만 최근에는 Facebook에서 create-react-app 이라는 패키지를 제공해주므로써 한 번에 프로젝트를 생성할 수 있게 되었다.

```sh
[ReactJS 프로젝트 생성 명령어]
: npx create-react-app [프로젝트명]

[ReactJS 프로젝트 실행] ※pakage.json의 scripts를 확인해보자.
: cd [프로젝트명]
: npm start

※ React Sever Host 설정하여 실행하여 실행하는 방법
: HOST=192.168.33.14 react-scripts start (pakage.json의 scripts에 추기)
```

## 1.1 Creating a Github Repository
create-react-app 모듈을 이용하여 ReactJS 프로젝트를 생성했다면, 형상관리를 위해 GitHub에 연동해주는 것이 좋다.

```sh
[Git 초기화]
: git init

[git 원격저장소 연결]
: git remote add origin [git주소]

[git 변경 내용 추가]
: git add .

[git 로컬저장소 저장]
: git commit -m "형상관리 메시지 내용"

[git 원격저장소 저장]
: git push origin HEAD
```

## 1.2 How does React work?
create-react-app 모듈로 프로젝트를 생성하면 기본적으로 3개의 디렉터리(node_module, public, src)가 생성된다. node_modules 디렉터리는 npm install을 통해 모듈들을 저장해놓은 디렉터리이기 때문에 신경 쓰지 않아도 된다.

src폴더에는 CSS, JS 등 다양한 것들이 들어가 있지만, React의 작동원리를 이해하기 위해 app.js와 index.js만 사용해보기로 한다. (나머지 파일은 삭제해도 된다.)

React는 content가 비어있는 HTML을 받아오도록 하며, 실제 내용은 virtual DOM을 이용하여 넣어주는 방법을 통해 작동한다. 때문에 content가 빈 HTML파일을 로드하게 되고, 그런 다음에 react가 HTML을 밀어 넣어주기 때문에 속도가 빠르다. 

React는 우리가 만든 Component를 생성하여, React Render에 설정한 HTML 태그에 전부 넣어서 페이지를 완성해준다.

`Virtual DOM : Virtual Document Object Model`   
react가 지원하는 가상의 DOM으로써  브라우저의 DOM처럼 역할을 수행해준다. 그래서 원하는 위치에 원하는 component를 Rendering하거나 삭제할 수 있고, 한 페이지 내에서 모든 것을 관리하기에 속도가 빠르다. 실제로 devtools의 source에 가서 index.html 코드를 보면 원형 코드엔 component에 관련된 코드는 하나도 없지만, 결과를 이루는 페이지 source를 보면, Virtual DOM에 의해 추가된 component들이 보이는걸 확인 할 수 있다.

# 🌈2 JSX & PROPS
## 2.0 Creating your first React Component
React는 Component와 함께 동작하며, 모든 것은 Component로 구성되어 있다고 말할 수 있다.
React에서 만든 Component를 살펴보면 HTML을 반환하는 함수임을 알 수 있다.

``` jsx
/**
 * App.js
 * App Component
 */
function App() {
  return <div>Hello World!</div>;
}

export default App;
```

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />             // App Component 호출
  </React.StrictMode>,
  document.getElementById("root")   // 원하는 HTML태그에 Component 주입
);
```

위의 <App />과 같이 HTML형태로 사용하는 Javascript 문법을 **JSX**라고 한다. (쉽게 생각하면 Javascript 안의 HTML이다.) 이것은 React에서 소개하고 사용하는 개념으로, HTML형태에 JS표현식을 사용하여 얼마든지 원하는 동작을 꾸밀 수 있다. 나머지 사용방법은 JS의 문법을 사용할 예정이기에, React를 학습함에 있어 JS와 ES6~11의 문법을 익히는 것은 필수이다. (variables, classes, arrays, maps, returns, functions, async/await etc…)


Component를 만드는 가장 기본적인 순서   
1\) src 디렉터리에 Component명.js 파일을 만든다. (ex) Movie.js)   
2\) Component명.js 파일에 react 모듈을 추가하고, 파일명과 같은 function을 정의하거나, React.Component를 확장한 class를 만든다.   
3\) function으로 만든 경우 return으로 JSX와 HTML코드로 이루어진 Component를 반환하면 되고,
class로 만든 경우 render() 메소드를 이용하여 JSX와 HTML코드를 반환해주면 된다.   
4\) export default를 선언하여 다른 파일에서 사용할 수 있도록 해준다.   
5\) Component명.js를 꾸며줄 Component.css파일을 만든다. (ex) Movie.css)   

```jsx
// Movie.js
import React from "react";

function Movie() {
  return <div>Hello World!</div>;
}

export default Movie;
```
※ React Application은 하나의 component만을 redering해야하기 때문에 ReactDOM.render()함수에 2개의 component를 2개이상 넣을 수 없다.
```jsx
// Index.js (잘못된 방법)
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Movie from "./Movie";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Movie />
  </React.StrictMode>,
  document.getElementById("root")
);
```

만약에 2개의 component를 사용하고 싶다면 ReactDOM.render()에서 직접 사용하는 것이 아니라 다른 component에 추가하려는 component를 포함해서 사용해야한다.

```jsx
// App.js
import React from "react";
import Movie from "./Movie";
function App() {
  return (
    <div>Hello!</div>
    <Movie />
    );
}

export default App;
```

## 2.1 Reusable Components with JSX+Props
JSX에서 두 번째로 이해해야 하는 것은, Component에 정보(parameter)를 보낼 수 있다는 점이다.
React의 멋진 점은 재사용 가능한 component를 만들 수 있다는 점이다. 이 말은 component를 계속해서 반복해서 사용할 수 있다는 말인데, 상황에 따라 다른 역할을 수행하기 위해 정보를 받을 수 있게 해준다.

Component에게 정보를 보내는 방법을 **Props**를 설정한다고 한다. 사용 방법은 JSX 문법을 따르는데, HTML의 property를 설정하는 방법과 유사하다.

```jsx
// App.js
import React from "react";

function Food(props) {
  return <h1>I like Potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" someting={true} arr={["Hello", 1, 2, 3, true]} />
    </div>
  );
}

export default App;
```

위 처럼 Food JSX에 `fav="kimchi" someting={true} arr={["Hello", 1, 2, 3, true]}`들을 설정하여 전달하는 것을 props(=propertys)라고 한다. 받은 쪽에서는 함수 선언의 매개변수 부분(`function Food(props)`)을 통해 받아올 수 있다. 또한 잘 봐야할 점은 JSX에서 JS문법을 사용하기 위해 { }를 열어준다는 점이다.

Props를 console.log로 찍어보면 object로 전달됨(`{fav: "kimchi", someting: true …}`)을 알 수 있다. Object에 들어있는 데이터를 한 번에 사용하는 방법으론 ES6의 방법을 사용하면 된다.
```jsx
// App.js
import React from "react";

function Food({fav, someting, arr}}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" someting={true} arr={["Hello", 1, 2, 3, true]} />
    </div>
  );
}

export default App;
```

## 2.2~2.3 Dynamic Component Generation, Map Recap
React에서 동적데이터에 따라 Component를 추가하는 방법에 대해 알아보자.

Javascript에는 array자료형에 제공하는 map함수가 있는데, map을 이용하여 동적으로 rendering을 할 수 있다. 기본적으로 map함수가 하는 역할은, array로부터 map함수를 실행하고, map함수에서 가공한 array를 반환해주는 역할을 한다.

```jsx
// App.js (아래의 사용법은 에러를 하나 발생 시킨다.)
import React from "react";

function Food({fav, someting, arr}}) {
  return <h1>I like Potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {arr_datas.map(dish => <Food name={dish.name} image={dish.image} />)}
    </div>
  );
}
export default App;
```

**Map을 통해 같은 Component를 여러 개 만들 때에는 반드시 key라는 prop를 줘야한다.** 그렇지 않으면 에러가 발생한다. React는 Component들을 unique(유일)하게 관리하기 때문에,  각 Component들이 구별되도록 하기 위함이다.

```jsx
// App.js
import React from "react";

function Food({fav, someting, arr}}) {
  return <h1>I like Potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {arr_datas.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}
export default App;
```

Key로 전달한 내용은 props에 별도로 지정할 필요가 없는데, 그 이유는 react 내부에서 사용하기 위한 데이터이기 때문이다.

## 2.4 Protection with Prop Types
Component에 props를 설정하여 데이터를 전달할 때, 해당 데이터가 원하는 형태로 제대로 넘어왔는지 점검할 필요가 있다.

이러한 기능을 제공하는 prop-types라는 모듈이 있다.
> npm i prop-types or npm install prop-types

```jsx
// App.js
import React from "react";
import PropTypes from "prop-types";

function Food({ fav, something, arr }) {
  return (
    <div>
      <h1>I like {fav}</h1>
      <h1>{something}</h1>
      <h1>{arr}</h1>
    </div>
  );
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  something: PropTypes.bool.isRequired,
  arr: PropTypes.array,
};

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" something={true} arr={["Hello", 1, 2, 3, true]} />
    </div>
  );
}
export default App;
```

prop-types 모듈을 통해 Food Component의 예상되는 타입을 지정할 수 있다. 전달 받은 데이터가 지정한 타입과 다른 경우 에러를 일으켜준다.

# 🌈3 STATE
## 3.0 Class Components and State
**State**는 보통 우리가 동적 데이터와 함께 작업할 때 만들어진다. Props는 정적인 데이터(한 번 정해지면 그대로 유지되는...)를 다룰 때 좋다면, State는 동적 데이터(상황에 따라 값이 달라지는...)를 다룰 때 좋다.

Class component를 만드는 순서   
1\) component명.js 파일을 만든다.      
2\) component명.js파일의 component명을 class명으로 지정하여 class를 생성하되, React.Componet를 상속하도록한다. (React의 사이클주기와 state 등 다양한 기능을 위해)   
3\) render 메소드를 통해 component를 반환한다.   

※ function component는 return을 통해 component를 반환했다면, class component는 render메소드를 통해 component 반환한다.   

React는 자동적으로 class component의 render 메소드를 실행한다. 그런데 function component가 더 구성하기 간단했던 것 같은데 class component를 사용하는 이유는 무엇일까? 그 이유는 state와 react의 사이클 주기를 이용하기 위해서이다.

**State**는 object이고, component에서 활용하는 동적데이터를 저장하여 사용할 수 있게 해준다.
```jsx
// App.js
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
```
위와 같이 React.Component를 상속받아 state를 object로 정의하면 된다.
Class이기 때문에 add, minus같은 추가적인 메소드를 정의할 수 있다.
또한 state와 메소드에 접근하기 위해 자기 자신을 나타내는 this를 사용함을 알 수 있다.
onClick prop는 react에서 제공해주는 기능으로 정의한 메소드와 연결할 때 사용한다.

**※ state에 this를 통해 직접 접근하는 방법은 좋은 방법이 아니다. **

## 3.1 All you need to know about State
**절대로 state에 직접 접근하여 변경하면 안된다! (Do not mutate state directly)**   
State의 값을 변경할 때에는 React.Component에서 상속 받은 `setState()`메소드를 이용해야한다.
그 이유는 setState를 이용해서 변경하지 않으면 react는 render 메소드를 재호출하지 않기 때문에 변경된 데이터로 refresh되지 않기 때문이다.

```jsx
// App.js (권장하지 않는 방법)
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: this.state.count+1 });
  };
  minus = () => {
    this.setState({ count: this.state.count-1 });
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
```
State는 object이므로, setState또한 전달하는 대상을 object로 구성한다.
위에서 setState에 this.state.count를 통해 접근하여 사용하고 있지만, 가능은 하나 좋은 방법은 아니다. setState메소드 내에서 처리하는게 아니라, 외부의 state에 직접 접근해서 처리하려고 하기 때문이다. 
```jsx
// App.js (권장하는 방법)
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
        const {count} = this.state;
    return (
      <div>
        <h1>The number is : {count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
export default App;
```
setState에서 외부의 state에 직접 의존하는 것이 아니라, setState의 매개변수를 함수로 구성하므로써, state값을 전달 받아 사용하는 방법이 더 좋은 방법이다. setState의 매개변수로 함수를 구성하면, 해당 함수의 매개변수로 state를 전달해준다.


# 🌈4 LIFE CYCLE & DATA FETCH
## 4.0 Component Life Cycle
[【 Life Cycle 참고 문서 】](https://ko.reactjs.org/docs/react-component.html)   
React.Component를 상속받으면 React Component가 생성되어 화면에 표시되기까지, 혹은 삭제하기까지의 `Life Cycle`메소드들을 사용할 수 있게 된다.

```
[Mount시 생명주기]
1) constructor()   
2) getDerivedStateFromProps()   
3) render()   
4) componentDidMount()   
```

```
[Update시 생명주기]
1) getDerivedStateFromProps()   
2) shouldComponentUpdate()   
3) render()   
4) getSnapshotBeforeUpdate()   
5) componentDidUpdate()   
```

※ componentDidMount랑 componentDidUpdate를 많이 씀


## 4.1 Planning the Movie Component
`데이터를 수정(fetch)`은 Life Cycle 메소드를 통해 할 수 있다.
```jsx
// App.js
import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!"}</div>;
  }
}
export default App;
```
componentDidMount()에서 isLoading의 데이터를 fetch하고 있음을 알 수 있다.

## 4.2 Fetching Movies from API
보통 JS에서 데이터를 fetch 할 때에는 fetch() 함수를 사용하지만, fetch보다 더 편한 axios를 사용하는 방법도 있다. Axios를 사용하기 위해서는 추가적으로 모듈을 설치해야 한다.
> npm install axios

```jsx
// App.js
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!"}</div>;
  }
}
export default App;
```
Movie api로 YTS의 api를 사용했다.
Axios를 통해 데이터를 긁어온 후, state 데이터를 변경할 예정이다.
async와 await를 통해 axios.get()이 끝날 때까지 다음 기능을 실행하지 않도록 대기해준다.


# 🌈5 MAKE SIMPLE MOVIE APP
# 5.1 Rendering the Movies
```jsx
// Movie.js
import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
```
Movie를 표시하기 위한 component작성하고, component에 사용할 props 들 타입들을 prop-types 모듈을 이용하여 정의하기

```jsx
// App.js
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}
export default App;
```
YTS에서 받아온 movie list들의 정보 array를 통해 map을 사용하고, props 들을 Movie component에 전달하여 필요한만큼 추가하고 있음

## 5.2 Styling the Movies, Adding Genres, Styles Timelapse, Cutting the summary
```jsx
// Movie.js
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```
JS의 array타입의 map함수는 첫 번째 인자로 item을, 두 번째 인자로 index 값을 반환해준다. 이것을 이용하면 key값에 대신 넣어주므로써 식별코드로 사용할 수 있다.


```jsx
// App.js
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
```


# 🌈6 ROUTING
## 6.0 Getting Ready for the Router
react-router-dom 을 이용하여 navigation을 구현할 수 있다.
> npm install react-router-dom

## 6.1 Building the Router
React-router-dom에는 다양한 종류의 라우터(BrowserRouter, HashRouter etc)들이 있다.
우린 그 중에서 HashRouter를 사용할 것이다.

Route JSX에 설정하는 Prop중 기억해야할 3가지가 있다. 해당 Props는 경로와 경로에 해당하는 Component를 처리하도록 도와준다.   
```
1) path : router용 경로를 지정한다.   
2) component: path가 일치했을 때 그려줄 컴포넌트 파일을 지정한다.   
3) exact: 완벽하게 route가 일치할 때 그려줄지 설정한다.   
```
```jsx
// App.js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;
```
ReactJS는 Router를 통해 어떤 Component를 Rendering을 할 때, 기본적으로는 path property에 부합하면 모두 rendering하려고 한다. 때문에 URL에 `/about`을 검색하면 `/`와 `/about`에 전부 부합하기 때문에 2개의 component를 그려준다.

위와 같이 특별한 설정이 없으면 기본적으로 router에 부합하는 모든 component를 그려주는데, Route가 정확하게 부합할 때에만 Rendering하도록 설정하기 위해서는 `exact={true}`를 설정해주면 된다.

위와 같이 react-route-dom을 이용하면 Router 설정을 할 수 있다.

## 6.2 Building the Navigation
Router 설정이 가능하니, 나머지는 Router 설정에 맞게 Navigation을 만들어주는 작업이 필요하다.

Html의 a태그를 이용하면 항상 새로운 요청을 보내고, 페이지 자체를 refresh하기 때문에, react가 죽고 새페이지가 새로고침된다. 하지만 react를 사용하는 우린 그걸 원하지 않는다.

때문에 **React에서는 a태그 대신 Link라는 component를 추가해서 사용한다.**
Link Component는 react-route-dom 모듈에 들어있다. 또한 Link Component는 href대신 to property를 이용하여 path를 설정한다. 

Link Component는 반드시 react-rout-dom모듈의 Router(= HashRouter, BrowserRouter etc…) 태그 안에서 사용해야한다. 그렇지 않으면 작동하지 않는다.
```jsx
// App.js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;
```
```jsx
// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigation;
```

## 6.3 Sharing Props Between
모든 컴포넌트에는 props가 있다. Movie.js를 참고하면 활용한 예제가 있다.
React-route-dom의 Router들을 사용하면 component의 props(매개변수)에 값을 전달해준다. 

```jsx
import React from "react";
import "./About.css";

function About(props) {
  console.log(props);

  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}
export default About;
```
props를 console에 찍어보면 history, location, match, staticContext 등의 데이터가 나온다.
history는 이전페이지, 다음페이지, 현재 페이지 등 다양한 데이터를 가지고 있다. 때문에 `histroy.push("/")`를 사용하면 redirect를 할 때 유용하게 사용할 수 있다.

location에는 우리가 전달하는 Data들이 들어있다. location.state 안에 모두 저장되어 전달되기 때문에 내부적으로 location.state를 이용하여 접근하여 사용함녀 된다.
