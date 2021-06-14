// #9 ASYNC/AWAIT
// #9.1 Async Await

// async/await는 promise의 진화 버전이다.
// 이것을 만든 이유는 더 보기 좋은 코드를 만들기 위해서이다.
// promise의 문제점은 사용하다보면 결국 많은 then을 사용해야하는 문제가 있었다.
// 또한 async/await는 promise 밖에 값을 가져올 수 있는 방법이다!
// async와 await는 언제나 한쌍이다.

const getMoviesPromise = () => {
  fetch("https://yts.am/api/v2/list_movies.json")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const getMoviesAsync = async () => {
  // resolve된 값을 response에 넣는다.
  // reject된 값은 try-catch로 잡는다.
  // await는 Promise가 끝날 때까지 기다려준다.
  const response = await fetch("https://yts.am/api/v2/list_movies.json");
  const json = response.json();
  console.log(json);
};

getMoviesAsync();

// #9.2 Try catch finally
const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.am/api/v2/list_movies.json");
    const json = response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Finally we are done!");
  }
};

getMoviesAsync();

// #9.3 Parallel Async Await
// Async Parallel:
const getMoviesAsync = async () => {
  try {
    const [moviesResponse, suggestionResponse] = await Promise.all([
      fetch("https://yts.am/api/v2/list_movies.json"),
      fetch("https://yts.am/api/v2/movie_suggestions.json?movie_id=100"),
    ]);
    const [movies, suggestion] = await Promise.all([
      moviesResponse.json(),
      suggestionResponse.json(),
    ]);
    console.log(movies, suggestion);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Finally we are done!");
  }
};
