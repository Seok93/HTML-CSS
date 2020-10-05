# 출처

[노마드코더 코코아톡 클론코딩](https://nomadcoders.co/)
[노마드코더 공식 유튜브](https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ)

kokoa-clone은 노마드코더 공식홈페이지의 코코아톡 클론코딩 강의를 수강하며 배운 내용과 실습코드를 정리한 내용이다.

좀 더 자세한 내용과 실습 영상을 보고 싶으면 공식홈페이지에서 코코아톡 클론코딩을 보는 것을 추천한다.

# 코코아톡 클론 코딩 강의 내용 요약

kokoa-clone 코딩은 카카오톡 UI를 웹으로 표현해보는 연습이다.

## html

### 1.3 what makes a website

웹사이트는 단지 텍스트 파일일 뿐이다.
브라우저가 웹사이트의 텍스트들을 읽어서, 평소 우리가 보는 웹사이트를 만들어준다.

우린 정확한 위치에 정확한 content가 나오도록 텍스트로 명령을 내리고
브라우저는 개발자가 적어둔 텍스트를 해석하면 웹페이지를 만든다.

### 1.4 what is HTML

웹사이트는 최소 2가지 최대 3가지의 language로 구성되어 있다.

1. HTML
2. CSS
3. JS

브라우저는 멍청하다... 인간의 언어를 이해하지 못하기 때문에
브라우저에게 content가 무엇인지 알려줘야하는데, 그것을 HTML을 통해 설명해준다.

브라우저는 content의 모음이고
HTML으로 브라우저에게 content 구조가 어떤지를 설명해주는 것이다.

HTML은 markup language이다. markup이란 content이다.

예를 들어!
브라우저야 여기는 header야
브라우저야 여기는 link야
브라우저야 여기는 sidebar야
브라우저야 여기는 article이야!
하나하나 mark해서 표시한다.

위와 같이 브라우저에게 우리 웹사이트에 대해서 뭐가 뭔지 말해줘야한다.
브라우저는 우리의 content를 이해 못하기 때문에 HTML을 통해 이해하도록 설명해야한다.

오직 HTML만이 브라우저에게 content가 어떻게 구성되었는지에 대해 설명할 수 있다.

### 1.5 what is CSS

CSS(Cascading Style Sheets)
CSS는 HTML과 함께 사용한다.
절대로 CSS 혼자만 쓰일 수 없다. 혼자서는 디자인을 바꿀 것이 아무것도 없기 때문이다.

CSS는 브라우저에게 웹사이트(content의 모음)가 어떻게 보여야하는지에 대해 알려준다.

예를들어서
HTML: 브라우저야~ 그건 title이야!
CSS: 브라우저야! 그 title은 녹색이어야해!
HTML: 브라우저야~ 그건 image야
CSS: 브라우저야! 그 image는 가로 25px, 세로 100px 크기를 가져야해!

다르게 비유하면
HTML은 뼈대이고
CSS는 그 뼈대에 근욱을 붙이는 것과 같다.

HTML만으로 웹 페이지를 만들면 절대 이쁘지 않다, CSS를 이용해야 이쁜 웹사이트를 만들 수 있다.

### 1.6 what is JavaScript

JS는 웹사이트가 무언가를 하게끔 지시하는 뇌의 역할을 한다.
JS는 interactivity(동적 상호작용성)이라는 특징이 있다.
쉽게말해 어떤 것을 클릭하면 어떤 일이 생기는지를 지시할 수 있다.

모든 웹사이트에서 뇌가 필요한건 아니다.

정리하면,
HTML: 뼈대 : 기본 content을 갖춘다.
CSS: 근육 : content을 디자인 해준다.
JS: 뇌 : HTML과 CSS가 어떻게 반응(interactivity)할지 알려준다.

### 1.7 Recap

HTML은 Markup Language이고, Markup이란 content이다.
HTML은 브라우저에게 웹사이트에 어떤 content가 있는지를 알려준다.

CSS는 브라우저에게 그러한 content들이 어떻게 보여야하는지 설명한다.
JS는 웹사이트를 똑똑하게 동적으로 만들어주는 것이다.

3가지 언어중 프로그래밍 언어는 JS 뿐이다.
HTML, CSS는 프로그래밍 언어가 아니다.

HTML: Makeup Language
CSS: Style Language or Design Language

### 2.0 our First HTML File

폴더명, 파일명은 항상 소문자로 작성한다.

HTML파일의 확장자명은 \*.html이다.

### 2.1 Setup and Errors

VSC는 텍스트 편집기이다.
VSC를 사용하는 이유는 좋은 확장 프로그램을 가지고 있기 때문이다.

설치할 확장 프로그램 목록

1. Community Material Theme: VSC의 디자인 테마
2. Material Icon Theme : 파일 아이콘 표시 테마
3. Prettier-Code Format: 들여쓰기, HTML문법 검사 etc

브라우저는 HTML에 관해서는 아무런 오류를 출력해주지 않는다....
HTML 규칙을 따르지 않더라도 보인다는 의미이다.

다르게 해석하면, 내가 만든 페이지가 뭐가 잘못됐는지 알려주지 않는다는 것이다.

### 2.2 Our First HTML Tag

HTML은 브라우저에게 content의 위치와 무엇인지에 대해 설명해주는데 그때 사용하는 것이 tag이다.

태그는 <>를 이용하여 만든다.
태그는 시작태그와 끝태그(=content 종류)로 이루어져 있고, 시작태그와 끝태그 사이에 있는 것이 태그의 대상(=content 내용)이 된다.

의미없는 태그를 작성해도 아무런 오류가 발생하지 않는다.

```
ex)
<food>김치</food>
<name>nicolas</name>
```

태그를 작성할 때 올바른 text와 올바른 위치에 그에 맞는 tag를 사용하면 브라우저가 보여주는 방식이 달라짐을 알 수 있다.

### 2.3 More Tags and Prettier

`<h1>~<h6>`는 제목을 표시할 때 사용하는 태그이다.

`<ol></ol>`는 ordered list로 순서가 있는 리스트 태그이다.
`<ul></ul>`는 unordered list로 순서가 없는 리스트 태그이다.

`<ol>`과 `<ul>` 태그는 `<li>`태그와 같이 사용해야한다.

```
ex)
   <ul>
      <li>bear</li>
      <li>김치</li>
      <li>meat</li>
      <li>milk</li>
   </ul>
```

### 2.4 Tag Attributes

`<a></a>`태그는 anchor로 다른 웹사이트로 이동하거나, 현재 페이지에서 원하는 위치로 이동할 때 사용한다.
`<img>` 태그는 이미지를 표현할 때 사용한다.
`<img>`태그는 self-closing tag여서 끝태그가 필요없다. 때문에 `<img>`태그 사이에 content가 없다.

```
ex)
   <a href="http://www.google.com">Go to Google.com</a>
```

Tag의 속성(= Attribute)은 태그에 부가적인 정보를 줄 때 사용한다.
attribute또한 부가적인 정보이기 때문에, 마음대로 작성할 수 있다. 단지 브라우저가 이해하지 못하면 작동하지 않을 뿐이다.

```
ex)
   <h1 saram="김OO"> 브라우저가 모르는 <a>태그의 속성 부여</h1>
```

수 많은 tag들은 수 많은 attribute를 가지고 있다.

### 2.5 More Tags and head

`<img>` 태그는 인터넷에 있는 이미지 url를 통해서도 표현가능하고  
local에 가지고 있는 이미지 경로를 지정해 보여줄 수 도 있다.

이미지 경로는, 현재 이미지를 사용하려는 \*.html파일을 기준으로 찾아간다.

HTML 문서의 기본 구조

```
<!DOCTYPE html>     // 해당 파일이 html문서임을 알려준다.
<html lang="kr">    // html태그 사이에 html코드를 넣는다. kr은 한국어 페이지라는 정보이며, 검색엔진에 도움을 준다.
    <head>
        <title> Home - My first website.</title>
        <meta charset="utf-8"></meta>
    </head>
    <body></body>
</html>
```

웹사이트는 2가지 부분으로 이루어져있다. (head와 body로 구성된다.)  
head는 웹사이트의 환경을 설정한다. 외부적으로 보여지지 않는 설정이다.  
body는 사용자가 볼 수 있는 content를 설정한다.

### 2.6 Its All About the HEAD

`<head>` 태그 사이에는 웹 페에지의 환경을 설정하는데, 사용하는 태그들은 외부적으로 보여지지 않는 설정들이기 때문에 웹페이지에 표시되지 않는다.

<`head>` 태그에 들어가는 태그들

1. `<title></title>`: 웹페이지 제목 설정
2. `<meta>`: meta는 부가적인 정보라는 뜻으로, 웹페이지 설정을 위한 정보를 제공

```
<meta charset="utf-8">   // 웹페이지의 문자 해석정보
<meta name="description" content="Watch Netflix movies & TV shows online or stream right to your samrt TV ....."> // 웹페에지 검색시 페이지 설명을 위한 정보 (google에서 name="description"을 보고 설명을 작성해줌)
<meta property="og:image" content="https://~~~~~~~~~/home2.jpg">    // 카카오톡 등에 공유할 때 사용되는 이미지
```

3. `<link>` 태그를 통한 파일 연결

```
<link rel="shortcut icon" size="16x16 32x32 64x64" href="/m.png">  // shortcut icon을 표시하기 위해 이미지 링크
<link href="style.css" rel="stylesheet">
```

### 2.7 More Tags

html tag, CSS의 property, JS등 웹에 관련된 내용을 찾을 때에는 mdn을 붙여서 검색하는게 좋다.  
mdn은 Mozilla Developer Network로 많은 정보가 잘 정리되어 있다.

```
<addr></addr>: 마우스 올리면 약자 용어의 풀 용어가 나옴
<cite></cite>: 이탤릭체
<code></code>: 코드 설명용
<mark></mark>: 노란색 형광펜칠
<strong></strong> 글자를 뚱뚱하게!
<sub></sub>: 글자를 살짝 아래로
<sup></sup>: 글자를 살짝 위로
<audio controls="enabled" src="url"></audio>
```

### 2.8 Form Tags

form을 만들고, 해당 form에 필요한 요소들을 넣어준다.
form은 양식을 넣어줄 틀을 만들어주고, 양식은 input을 사용해 넣어준다.

```
<form>
    <input type="text" placeholder="Name" minlength="2" required/>
    <input type="text" placeholder="Last Name"/>
    <input type="text" placeholder="User Name"/>
    <input type="password" placeholder="Password" minlength="10" required/>
    <input type="file" accecpt=".doc, .pdf, .xls, image/*">
    <input type="submit" value="Create Account"/>
    <input type="color" disabled/>
    <input type="button" dosabled/>
</form>
```

### 2.9 More Tags and IDs

`<label>`은 form 요소에 question을 만들거나 이름을 붙여줄 때 사용한다.

```
<form>
    <label for="profile">Profile Photo</label>
    <input id="profile" type="file" accecpt=".doc, .pdf, .xls, image/*">
    <label for="first-name"> First Name </label>
    <input id="first-name" type="text" placeholder="First Name" minlength="2" required/>
    <label for="website">Website URL</label>
    <input id="website" type="url" required/>
    <input type="range"/>
    <input type="date"/>
</form>
```

id 속성은 어느 태그에도 들어가는데, id 는 unique identifier이다. element당 하나의 id만 가질 수 있다.

### 2.10 semantic HTML

html문서를 만들 때의 철학

div 태그는 박스이다. 기본적으로 box들은 옆에 아무것도 올 수 없는 block의 성질을 가진다.
문제는 div라는 태그는 태그 그 자체만으로 어떤 역할을 하고 있는지 의미가 와닿지 않는다.

```
<form>
    <div>
        <label for="profile">Profile Photo</label>
        <input id="profile" type="file" accecpt=".doc, .pdf, .xls, image/*">
    </div>
    <div>
        <label for="first-name"> First Name </label>
        <input id="first-name" type="text" placeholder="First Name" minlength="2" required/>
    </div>
</form>
```

HTML문서를 작성할 때에는 기본적으로 태그들을 보고 어떤 구조를 가지겠구나 확 와닿아야한다.
이것을 semantic HTML이라고 한다.

semantic이란 문서를 보기만해도 그 의미를 짐작할 수 있는 것을 말한다.
div와 같은 박스 역할을 하면서 의미를 전달해주는 또 다른 태그들이 있다.

```
<header></header>   // 웹 사이트의 머리 부분임을 바로 알수 있음
<main></main>       // 웹 사이트의 주요 컨텐츠 부분임을 알 수 있다.
<footer></footer>   // 웹 사이트의 마지막 부분임을 알 수 있다.
<nav></nav>         // 네비게이션바 역할
```

위에 있는 것은 전부 box이며 다른 말로는 container라고도 한다.

기능상으론 div와 같지만, 위의 태그들을 사용하면 코드를 단번에 이해할 수 있는 장점이 있다.
때문에 HTML을 작성할 때에는 semantic tag를 이용해서 만드는 것이 좋다.

semantic tag는 mdn문서의 content sectioning 부분을 참고하면 좋다.

## CSS

### 3.0 How to Add CSS to HTML

CSS는 2가지 방법으로 추가가능하다.

1. HTML파일에 HTML코드와 CSS코드를 놓는 방법 (inline CSS)

```
<head>
    <style>
        body {
            backgrout-color:red;
        }
    </style>
</head>
```

2. HTML과 CSS를 분리한 후, 파일을 불러와 추가하는 방법 (external CSS)(이 방법을 권장)

```
<head>
    <link href="style.css" rel="stylesheet"/>
</head>
```

HTML과 CSS파일을 분리하는 것을 권장하는데, CSS파일을 분리해두면 필요한 곳에 언제든 추가해서 스타일을 적용할 수 있으며 코드의 중복을 줄이는데 효과적이다.

### 3.1 Writing Our First CSS Lines

CSS를 작성할 때에는 3가지를 기억하면 된다.

1. selector(선택자)
2. property(style 속성)
3. value (설정할 값)

```
selector {
    property: value;
}
```

```
<style>
    h1 {
        color: blue;
        font-size: 25px;
    }
    address {
        text-align: center;
        color: tomato;
    }
</style>
```

property는 엄청나게 다양하므로 외우지 않는게 좋다.
필요할 때 어떤 property가 있는지 찾아보고 적용하는게 더 좋다.

h1 property mdn!

### 3.2 What Does Cascading Mean

1. CSS는 Cascading Style Sheet라는 의미이다.
2. Cascading이란 위에서부터 아래로 순차적으로 적용한다는 뜻으로, CSS 적용의 메카니즘이 된다.

```
// style1.css
body {
    backgroud-color: red;
    font-size: 20px;
}
```

```
// style2.css
body {
    background-color: blue;
    color: white;
}
```

```
// home.html
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
```

style1과 style2에서 body에 대해 backgrout-color를 적용하고 있는데,
style2를 마지막에 읽었으므로 style1의 backgrout-color의 값을 덮어 씌운다. (Cascading적 성질)
style1에 적어둔 font-size와 style2에 적어둔 color은 모두 적용된다.

### 3.3 Block and Inlines

웹 사이트는 모두 box(= container)로 이루어져 있다.

block은 한 줄을 모두 차지하기 때문에 옆에 다른 요소가 올 수 없다.
대부분의 box는 block 성질을 가진다.
inline(= in the same line)은 옆에 다른 인라인요소가 올 수 있다.
inline 요소로는 `<span>`, `<img>`, `<a>` 등이 대표적이다.

### 3.4 Margin Part One

display 속성을 이용하면 inline, block 등으로 변경이 가능하다.
inline는 height, width 크기를 지정할 수 없고, 내용물의 크기 값을 토대로 만들어진다.
block은 height, width 크기를 지정할 수 있다.

block은 box의 역할을 하며, boxd는 margin, padding, border의 속성을 특징으로 가진다.
margin은 경계의 바깥 부분을 의미한다.
padding은 경계의 안쪽 부분을 의미한다.
border은 경계 부분이다.

브라우저가 기본적으로 부여하는 style이 있다.
F12를 통해 보면 uer agent stylesheet라고 적혀있다.

### 3.5 Margin Part Two

margin: 20px; // 상하좌우 전부
margin: 20px 15px; // 20px: 상하, 15px: 좌우
margin 20px 15px 10px 5px; // 위 오른쪽 아래 왼쪽 (시계방향)

collapsing-margins (margin의 붕괴, 여백 상쇄)이란
block 성질을 가진 box안에 다시 block 성질을 가진 box가 있다고 가정하자 (ex body안에 div태그)
바깥에 있는 block 박스에서 padding을 성질하지 않으면 밖에 있는 블록과 안에 있는 블록의 위, 아래가 맞닿게 되는데, 이때 collapsing-margin이 일어난다. 즉 위, 아래의 margin 값을 공유하게 되어, 제일 큰 값을 적용하게 된다.

### 3.6 paddings and ids

collapsing-margins을 없애기 위해서는 바깥쪽 block 박스에 padding을 설정하면 된다.
padding은 box의 경계로부터 안쪽 부분을 말한다.

id 선택자를 이용해 css style 성질을 부여할 수 있다. id는 고유한 값으로, 단 하나의 요소에만 설정되어야 한다.
id 선택자를 사용하기 위해서는 #기호를 사용한다.

block의 height, width를 px로 고정한 상태에서, block 내부에 어떤 컨텐츠 (ex) div를 넣고 상위 블록과 같은 height와 width을 주면 겹쳐지거나, 기존의 block보다 큰 사이즈를 입력하면, 경계를 넘어가는 문제가 있다.

### 3.7 border

border은 box의 경계이다.
border-style속성을 설정할 때.... 이쁘지 않기 때문에... 하나만 쓸거야 solid (border style mdn참고)

border: 2px solid black;

질문: border은 inline에도 적용되는데, inline은 margin이랑 padding 설정은 불가능한가?
답: inline에 padding 적용 가능, margin은 좌우만 적용 가능하다.

### 3.8 Classes

inline요소는 높이와 너비가 없으며, margin은 좌우만 적용 가능하다.  
그 외의 border, padding은 다 적용이 가능하다.

id는 유니크하기 때문에 한 문서, 한 요소에 지어지는 선택자인데,  
class는 한 문서에 여러 요소에 같은 성질을 적용하기 위해 만들어진 선택자이다.

CSS에서 class를 지정하기 위해 .를 사용한다.  
#tomato = id="tomato"  
.tomato = class="tomato"

하나의 요소는 다수의 class명을 가질 수 있다.  
`<span class="tomato potato honey">`

### 3.9 Inline-Block

display속성 중 inline-block이 있는데,  
inline성질과 block의 성질을 둘다 가지도록 설정해주는 방법이다.

때문에 block의 성질로 높이와 너비를 가지며, margin이 상하좌우 다 적용되며, inline의 성질로 옆에 다른 요소가 올 수 있다.

근데... inline-block은 별로 좋은 선택지가 아니다.  
여러가지 문제점을 가지고 있기 때문이다.

① default로 margin 값이 적용된 것처럼 요소 사이에 공간이 생긴다. 그런데 개발자툴로 확인해보면, margin값이 적용된게 아니다...  
② inline-block 사용을 위한 정해진 형식이 없다.  
③ 웹페이지에 요소를 계속 추가하다보면, 공간이 애매하게 남아서, 좌우의 폭이 달라보이는 문제가 있다.  
④ inline-block은 responsive design(반응형 디자인)을 지원하지 않는다. 즉 창 크기가 달라지면 영향을 받아 요소들이 들쭉날쭉해진다.

### 3.10 Flexbox Part One

flexbox는 박스들을 어떤 곳이든 둘 수 있어서 디자인을 구성하기에 좋다.  
이름 그대로 엄청나게 유연하게 대응이 가능한 display 성질이다.

flexbox를 사용하기 위해 지켜야할 규칙들이 3가지 있는데, 정말 중요하기 때문에 꼭 기억해야한다.  
① flexbox에 관현 속성은 부모에만 지정하고, 자식 요소에는 어떤 것도 적지 말아야 한다. 즉, 부모요소가 자식요소를 통제하는 것이다.  
②
③

```
ex)
    body {
        height: 100vh; // vh는 viewport height의 약자이며, viewport는 screen이라눈 멀ㅀ 생각해도 된다.
        display: flex;
        justify-content: center | flex-end | flex-start | space-evenly | space-around etc;  // 주축에 적용하는 성질
        align-items: center | flex-end | flex-start | space-evenly | space-around etc;      // 교차축에 적용하는 성질
        flex-direction: row | row-reverse | column | column-reverse etc;   // 주축과 교차축의 방향 설정
        flex-wrap: nowrap | wrap | wrap-reverse etc;       // 브라우저 크기 변화에 따른 자식 요소의 크기 변환 유지 여부 설정
    }

    <body>
        <div></div>
        <div></div>
        <div></div>
    </body>
```

space-evenly는 빈 공간을 같은 크리골 나누어서 배치할 때 사용한다.

flexbox는 주축(main axis)과 교차축(cross axis)을 가진다.  
주축의 기본값은 수평이며, 교차축은 수직이다.

justify-content 속성은 주축을 대상으로 적용되는 성질이다.  
align-items 속성은 교차축을 대상으로 적용되는 성질이다.  
justify-content와 align-items 속성을 적용하기 위해서는 먼저 display: flex;가 선행되어야 한다.

만약에 body에 height가 없고, 박스 크기만큼만 큰 경우, align-items를 설정하더라도 바뀌지 않을 것이다. 이미 맨 위부터 아래까지 전부 차지하고 중심에 있기 때문이다.

### 3.11 Flexbox Part Two

flex-direction을 이용하면 주축과 교차축을 변경할 때 사용한다.  
디폴트로는 수평선이 주축, 수직선이 교차축이지만, 변경을 통해 수평선을 교차축, 수직선을 주축으로 만들 수 있다.

```
flex-direction: row | column etc;
```

flex성질을 가진 부모요소의 자식요소를 다시 flex로 만들수 있다.

flex-wrap의 기본값은 nowrap으로, 처음에 설정한 width는 참조값이고, 나머지는 브라우저의 크기에 따라 width가 변경되는 성질을 가진다. 그러나 flex-wrap을 wrap으로 설정하면 설정한 width가 유지되어 브라우저를 작게 했을 때, 한 줄에 유지할 수 없으면 다음줄로 옮겨서 보여준다.

```
flex-wrap: nowrap | wrap | wrap-reverse | initial etc;
```

## 3.12 Fixed (positioning)

position 속성을 이용하면 요소들을 다양한 위치에 둘 수 있다.  
position 속성은 레이아웃보다는 위치를 아주 조금 위로, 아주 조금 오른쪽으로 올믹고 싶을 때 사용하는 것이다...

대부분의 요소의 position의 기본값은 static으로 처음 정해진 위치에 정적(고정)으로 존재한다.

position: fixed를 이용하면, 요소를 해당 위치에 계속 고정시켜둘 수 있다.  
보통 팝업광고나 네비게이션이 스크롤바와 같이 이동하면서 고정되어 있는 것을 볼 수 있는데, 위의 속성값을 사용하고 있다.

position: fixed를 사용할 때 알아야할 점은 위치를 특별히 지정하지 않으면, 레이아웃 상에서 그려진 처음 위치에 고정되어 있다는 점이다. 혹시라도 위치를 변경하고 싶으면... top, bottom, right, left 속성 등을 이용해 위치를 지정해줄 필요가 있다.

보통 요소들은 같은 레이어에 존재 하기 때문에, 명시한 사이즈만큼 크기를 가지며
서로 맞닿아서 표현이 되지만, position: fixed를 설정하면, 요소는 독립적인 레이어를 가지게 되므로 block이든 margin이든 신경쓰지 않고 지정한 취치에 고정되게 된다.  
단... top, bottom, right, left를 별도로 지정하지 않으면, 초기 위치가 다른 요소와 겹치지 않게 표시되고 해당 위치에 고정되게 된다. 때문에 원하는 위치에 조정하기 위해서는 바로 top, bottom, rigth, left 등을 지정할 필요가 있다.

### 3.13 Relative Absolute (positioning)

position: relative는 상대적인 위치로, 부모요소로부터 처음 놓여진 위치를 기준으로 상하좌우로 움직이도록 지정할 때 사용한다.  
top, bottom, left, right 속성을 통해 위치를 지정할 수 있다.

position: absolute는 절대적인 위치로, 부모요소를 기준으로 하는 것이 아니라, 가장 가까운 relative성질을 가진 부모를 기준으로 이동한다. 때문에 전제조건으로 relative 성질을 가진 부모요소를 지정할 필요가 있다. 지정하지 않으면 body를 기준으로 움직인다.

### 3.14 Pseudo Selectors part One

pseudo selectors란 좀 더 세부적으로 요소를 선택할 때 사용하는 선택자이다.  
지금까지는 선택자로 tag명, class명, id명을 사용했다.

선택자 옆에 :를 이용하면 많은 옵션들이 나오는데, 이것들이 pseudo selector 들이다.  
태그명에 pseudo selector를 사용하는 방법이 class나 id를 사용하는 방법보다 좋은  
html코드를 건드리지 않아도 됐고, 순수하게 css에서 설정이 가능해서 독립성을 유지하기 때문이다.  
단점이라면... 여러 페이지에 공통적인 속성을 적용하려면 기본 틀이 같아야 한다는 점이다...

```
ex)
    div:last-child {
        backgroud-color: teal;
    }
```

```
ex)
:first-child {}
:last-child {}

:nth-child(2),
:nth-child(4), {}

:nth-child(even) {}
:nth-child(2n + 1) {}
```

### 3.15 Combinators (연결자)

복합선택자란, 특정 요소를 지정하기 위해서 여러 선택자를 지정하는 방법을 말한다.

```
ex)
    p span > .mark {
        background-color: tomato;
    }
```

후손 선택자 (= Descendant Combinator, Descemdamt Selector)  
` `기호(=공백문자)를 이용하여 표시하며, 부모요소에 속해 있는 모든 자식, 후손 요소들을 대상으로 선택할 때 사용한다.

```
ex)
    div p {
        color: teal;
    }
```

자식 선택자 (= Child Combinator, Child Selector)  
`>` 기호를 이용하여 표시하며, 부모 요소에 직계 자손요소를 대상으로 선택할 때 사용한다.

```
ex)
    div > p {
        color: red;
    }
```

형제(= 동위) 선택자 (= Sibling Combinator, Sibling Selector)  
형제 선택자는 같은 부모를 가진 요소들을 대상으로 선택할 때 사용한다.

① `+`기호는 인접 형제 선택자로 지정한 형제의 바로 뒤에 오는 요소를 선택할 때 사용한다. (바로 뒤가 아니라면 적용되지 않음)

```
ex)
   p + span { // 부모요소가 같은 p태그 바로 뒤에 오는 span태그를 대상으로 적용
       text-decoration: underline;
   }

   <body>
      <div>
         <span> hello </span>
         <p> ... </p>
         <span> bye </span>  // 여기에만 적용된다.
      </div>
   </body>
```

### 3.16 Pseudo Selectors part Two

② `~`기호는 일반 형제 선택자로 지정한 형제의 뒤 어딘가에 있는 요소를 선택할 때 사용한다.  
인접혈제 선택자는 바로 뒤에 있어야 적용되지만, 일반형제 선택자는 바로 뒤가 아니더라도 형제 요소라면 적용이 된다.

```
ex)
   p ~ span { // p태그와 같은 부모를 둔 모든 span을 대상으로 적용
       text-decoration: underline;
   }

   <body>
      <div>
         <span> hello </span> // 적용됨
         <p> ... </p>
         <span> bye </span>   // 적용됨
      </div>
   </body>
```

input:required를 이용하면 required 속성을 가진 요소만 선택할 수 있다.  
input:optional를 이용하여 required 속성을 가지지 않은 요소를 선택할 수 있다.

```
   ex)
      input:optional {
          border: 1px solid wheat;
      }
      input:required {
          border: 1px solid tomato;
      }

      <body>
         <form>
            <input type="text" placeholder="username">
            <input type="password" placeholder="password" required>
         </form>
      </body>
```

속성 선택자 (= Attribute Selector)  
요소에 지정한 속성을 이용하여 선택할 수도 있다.  
태그맹[속성명="속성값"] { style 내용} 과 같은 형태로 지정하여 사용한다.

`~=` 는 특정 값이 포함되어있으면 적용한다는 의미이다.  
`*=` 는 특정 단어를 포함하는가에 따라 적용하기 위해 사용한다.  
`^=` 는 특정 단어가 맨 앞에 포함되어 있는지에 따라 적용하기 위해 사용한다.  
`$=` 는 특정 단어가 맨 뒤에 들어가 있는지에 따라 적용하기 위해 사용한다.

```
ex)
    input[type="password"] {
        background-color: wheat;
    }

    input[placeholder="username"] {
        background-color: teal;
    }

    input[placeholder~="Name"] {
        color: white;
    }

    <body>
       <form>
           <input type="text" placeholder="username">
           <input type="text" placeholder="First Name">
           <input type="text" placeholder="Last Name">
           <input type="password" placeholder="password" required>
        </form>
    </body>
```

### 3.17 States

:active는 마우스로 특정 요소를 클릭한 상태 등 무언가 활성화되어 있을 때 작동한다.  
:hover는 마우스가 올라가면 반응하도록 만든다.  
:visited는 클릭했거나 방문한적 있는 링크의 색상을 변경하는 등에 쓰인다.  
:focus 는 focused인 상태의 요소에 적용된다.  
:focus-within은 focused인 자식을 가진 부모 요소에 적용된다.

## 3.18 Recap

::placeholder는 placeholder 속성이 설정되어 있을 때 적용해주는 pseudo selector이다.  
::selection은 마우스를 이용해 선택했을 때 반응하도록 만들 때 사용하는 pseudo selector이다.  
::first-letter은 첫번째 문자  
::first-line은 첫번째 문장

### 3.19 Colors and Variables(custom property)

색상을 지정하는 방법으로 3가지를 제공한다.  
① 16진수를 통한 지정: #ffffff  
② RGB를 통한 지정: rgb(252, 206, 0);, rgba(252, 206, 0, 0.7)  
③ 색상이름을 통한 지정: teal, tomato;

CSS에서도 Variables(=custom property)를 선언하고 사용할 수 있다.  
:root는 기본적으로 모든 document의 뿌리가 된다.  
아래와 같이 :root에 추가하면, document의 root에 저장하게 되므로 어디서든 사용이 가능해진다.

```
:root {
    --main-color: #fcce00;
    --default-border: 1px solid var(--main-color);
}

span {
    color: var(--main-color);
    border: var(--default-border);
}
```
