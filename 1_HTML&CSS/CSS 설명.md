# 📚1 CSS 기초
## 스타일과 스타일 시트

1. style이란 HTML문서에서 겉모습을 결정 짓는 것을 말하며, 그러한 스타일을 모아놓은 것을 style sheet라고 한다.
2. 웹표준에선 HTML을 이용해 웹 사이트의 내용의 뼈대를 마련하고, CSS를 통해 웹 문서를 디자인 하도록 구성되어있다.
3. CSS 스타일을 입력하는 방법은 아래와 같다.
    ```
    ex)
       선택지시자 { 속성: 속성값; }
       p {
          color: blue;
          font-size: 16px;
       }
    ```
4. CSS의 주석은 /\* \*/ 사이에 입력한다.
5. 내부 스타일 시트는 사용할 스타일을 HTML문서 안에 같이 정리한 것을 말하며, 외부 스타일 시트는 CSS를 관리하는 별도의 파일을 만들어 둔 것을 말한다.
6. 일반적으로 여러 웹 문서에서 사용할 스타일을 별도의 파일로 저장 해놓고 필요할 때마다 파일에서 가져와 사용한다.

## 주요 선택자

1. 전체 선택자(_): 모든 요소에 스타일을 적용할 때 사용한다.  
   ```ex) _ {속성: 속성값;} ➔ \* { text-align: center; }```
2. 태그 선택자: 특정 태그에 스타일을 적용할 때 사용한다.  
   `ex) 태그명 {속성: 속성값;} ➔ p { font-size: 12px; }`
3. class 선택자(.): 클래스 이름을 통해 스타일을 적용할 때 사용한다.  
   `ex) .클래스명 {속성: 속성값;} ➔ .bluetext { color: blue; }`
4. id 선택자(#): id속성의 이름을 통해 스타일을 적용할 때 사용한다. class와는 다르게 id는 한 문서에 한 번만 적용할 수 있다.  
   `ex) #id명 {속성: 속성값;} ➔ #container { height: 400px; }`
5. 그룹 선택자(,): 여러 선택자에 동일한 스타일을 사용하고 싶은 경우 사용한다.  
   `ex) 지시자명, 지시자명 {속성:속성값;} ➔ h1, h2 { text-align: center; }`

## CSS의 의미와 적용 우선순위 결정방법

1. CSS는 Cascading Style Sheet의 약자로, 위에서 아래로 흐르는 스타일 시트라는 뜻이다. 위에서 아래로 흐른다는 Cascading은 수 많은 선택자에 적용된 많은 스타일 중에 어떤 스타일을 적용해야할지 결정함을 뜻한다.
2. 스타일 간의 충돌을 막기 위한 방법을 위한 2가지 원칙이 있다.  
   ① 스타일 우선순위: 중요도와 명시도, 코드 순서  
   ② 스타일 상속
3. 우선 순위의 결정 요소인 중요도(importance)란 스타일이 어디서 선언되었는가를 따진다.  
   ① 사용자 스타일 시트 > 개발자 스타일 시트 > 브라우저 기본 스타일 시트  
   ② 중요스타일(!important) > 일반스타일
    ```
    ∴ 사용자 스타일 시트 중요 스타일 > 개발자 스타일 시트 중요 스타일 >
       개발자 스타일 시트 일반 스타일 > 사용자 스타일 시트 일반 스타일 > 브라우저 기본 스타일 시트
    ```
4. 우선 순위의 결정 요소인 명시도(Specificity)란 스타일의 적용 범위에 따라 우선순위를 적용한다. 스타일 적용 범위가 좁을수록 우선순위가 높아진다.  
   ① 인라인 스타일 : style 속성을 사용해 해당 태그에만 스타일을 적용  
   ② id 스타일: 한 문서에서 한 번만 적용 가능한 id속성을 하여 스타일을 적용  
   ③ class 스타일: 한 문서에 여러 번 적용 가능한 class 속성을 이용하여 스타일 적용  
   ④ tag 스타일: 특정 태그를 대상으로 스타일 적용  
   `∴ 인라인스타일 > id 스타일 > class 스타일 > tag 스타일`
5. 중요도와 명시도가 같을 경우 소스의 순서에 따라 스타일이 적용된다. 나중에 온 스타일이 먼저 온 스타일을 덮어 씌운다.
6. 스타일 상속이란 자식요소에 별도로 스타일을 지정하지 않으면 부모 요소에 있는 스타일 속성들이 자식 요소로 전달되는 것을 말한다. 주의 해야할 점은 스타일의 모든 속성이 부모 요소에서 자식 요소로 상속되는 것은 아니라는 점이다.

## CSS3와 CSS 모듈

1. CSS는 CSS1, CSS2, CSS3 등 다양한 CSS모듈을 가지고 있으며, 모듈별로 진행 속도도 다르고 필요에 따라 새로운 모듈이 생기기 때문에 CSS3는 한 번에 표준 규약이 결정되지 않는다.
2. 표준 규약이 아닌 속성들은 브라우저에 따라 다른 방식으로 지원되기 때문에 속성 이름 앞에 접두사를 붙여 브라우저 별로 구분해야 한다.  
   | 접두사 | 설명 |
   |:--------:|:----------------------------------------|
   | -webkit- |웹키드 방식 브라우저용(사파리, 크롬 등) |
   | -moz- |게코 방식 브라우저용(모질라, 파이어폭스 등)|
   | -o- |오페라 브라우저 |
   | -ms- |마이크로소프트 인터넷익스플로러 |
3. -prefix-free 라는 자바스크립트 파일 이용하면 브라우저 접두사를 자동으로 붙여 번거로움 없앨 수 있다.    
   [ -prefix-free 자바스크립트 파일 다운로드URL](http://projects.verou.me/prefixfree/)
    ```
    ex)
       <head>
          <script src="prefixfree.min.js"></script>
          <style>
             .box:hober {
                transform: rotate(15deg);
             }
          </style>
       </head>
    ```
    
# 📚 2 텍스트 관련 스타일
## 글꼴 관련 스타일

1. font-family 속성은 글꼴을 지정할 때 사용한다. font-family는 상속되기 때문에 `<body>`태그 스타일에서 일단 한 번 정의하면 문서 전체에 적용되는 효과가 있다.  
    ```
    사용법) font-family: <글꼴 이름>[, <글꼴이름>, <글꼴이름>]
    ```
    ```
    예제 1) font-family: "맑은 고딕", 돋움, 굴림;
    ```
2. font-size 속성은 글자의 크기를 조절할 때 사용한다. 주로 크기값을 직접 지정하는 방법을 많이 사용하며 단위는 px를 많이 사용한다. (별도로 지정하지 않으면 default가 16px이다.)  
    ```
    사용법) font-size: <크기: px, em etc> | <백분율: 0~100%>
    ```
    ```
    예제 1) font-size: 10px;
    ```
3. font-weight 속성은 글자의 굵기를 지정할 때 사용한다. 400은 normal, 700은 bold에 해당하며, 100~900 사이의 수치를 입력할 수 있다.  
    ```
    사용법) font-weight: normal | bold | bolder | lighter | 100~900
    ```
    ```
    예제 1) font-weight: 700;
    ```
4. font-style 속성은 글자를 이탤릭체로 표현할지 여부를 결정할 때 사용한다.  
    ```
    사용법) font-style: normal | italic | oblique
    ```
    ```
    예제 1) font-style: italic;
    ```
5. font-variant 속성은 작은 대문자(대문자를 소문자 크기로 표시)를 지정할 때 사용한다.  
    ```
    사용법) font-variant: normal | small-caps
    ```
    ```
    예제 1) font-vaariant: small-caps;
    ```
6. font 속성을 이용하면 위의 성질들을 묶어서 약식으로 표현이 가능하다.  
    ```
    사용법) font: <font-style> <font-variant> <font-weight> <font-size>/<line-height> <font-family> | caption | icon | menu | message-box | small-caption | status-bar
    ```
    ```
    예제 1) font: italic 12px/24px 돋움;
    ```
7. @font-face 속성은 웹 폰트를 지정할 때 사용한다. 웹 폰트란 웹 문서 안에 글꼴 정보도 함께 저장했다가 사용자가 웹 문서에 접속하면 글꼴을 사용자 시스템으로 다운로드 시키는 방식을 말한다. 우리가 글꼴을 지정해둬도 사용자가 해당 글꼴을 가지고 있지 않으면, 글꼴이 적용이 되지 않으므로 추가된 속성이다.  
   ① 구글 웹 폰트를 사용하여 무료 웹폰트를 링크를 통해 사용하는 방법
    - [구글 웹 폰트](https://fonts.google.com/earlyaccess) 에서 import링크를 가져다 style에 넣어두면된다.  
      ② 직접 웹 폰트를 업로드해 사용하는 방법
    - \*.ttf 글꼴 파일을 \*.woff나 \*.eot파일로 변환하여 서버에 업로드하고, 해당 링크를 추가해주면 된다. (\*.ttf은 용량이 크기 때문에 그냥 사용하는걸 권장하지 않는다.)
    ```
    사용법)
       @font-face {
          font-family: 글꼴이름;
          src:url(글꼴 파일 경로) format(파일 유형);
       }
    ```
    ```
    에제 1)
       <style>
          @font-face {
             font-family: 'trana';
             src: local('trana'),
                 url('trana.eot'),
                 url('trana.woff') format('woff'),
                 url('trana.ttf') format('truetype'),;
          }
       </style>
    ```

## 텍스트 스타일

1. color 속성은 글자 색을 바꿀 때 사용한다.  
    ```
    사용법) color: <색상: #ff0000 | blue | rgb(0, 255, 0)>
    ```
    ```
    예제 1) color: blue;
    ```
2. text-decoration 속성은 텍스트에 밑줄을 긋거나 취소선을 표시할 때 사용한다.  
    ```
    사용법) text-decoration: none | underline | overline | line-through
    ```
    ```
    예제 1) text-decoration: none;
    ```
3. text-transform 속성은 텍스트 대・소문자 또는 전각 문자로 변환할 때 사용한다.  
    ```
    사용법) text-transform: none | capitalize | uppercase | lowercase | full-width
    ```
    ```
    예제 1) text-transform: capitalize;
    ```
4. text-shadow 속성은 텍스트에 그림자 효과를 추가해 입체적으로 보이게할 때 사용한다.  
    ```
    사용법) text-shadow: none | <가로거리> <세로거리> <번짐정도> <색상>
    ```
    ```
    예제 1) text-shadow: 7px -7px 5px #ffffff;
    ```
5. white-space 속성은 텍스트와 함께 연속적으로 입력된 공백을 어떻게 처리할지 지정할 때 사용한다.  
    ```
    사용법) white-space: normal | nowrap | pre | pre-line | pre-wrap
    ```
    ```
    예제 1) white-space:  pre-wrap;
    ```
6. letter-spacing 속성은 낱 글자 사이 사이의 간격을 조절할 때 사용한다.  
    ```
    사용법) letter-spacing: normal | <크기>
    ```
    ```
    예제 1) letter-spacing: 0.2em;
    ```
7. word-spacing 속성은 단어와 단어 사이 간격을 조절할 때 사용한다.  
    ```
    사용법) word-spacing: normal | <크기>
    ```
    ```
    예제 1) word-spacing: 0.5em;
    ```

## 문단 스타일

1. direction 속성은 텍스트를 어느 방향으로 쓰기 시작해 화면에 표시할지를 결정할 때 사용한다.  
    ```
    사용법) direction: ltr | rtl
    ```
    ```
    예제 1) direction: ltr; // Left to Right
    ```
2. text-align 속성은 문단의 텍스트 정렬 방법을 지정할 때 사용한다.  
    ```
    사용법) text-align: right | left | center | start | end | justify | match-parent
    ```
    ```
    예제 1) text-align: center;
    ```
3. line-height 속성은 원하는 만큼 줄 간격을 조절할 때 사용한다. 보통 줄간격은 글자 크기의 1.5~2배면 적당하다.  
    ```
    사용법) line-height: normal | <크기> | <백분율> | inherit
    ```
    ```
    예제 1) line-height: 2.0; // 글자 크기 2배의 줄간격
    ```
4. text-indent 속성은 문단의 첫 글자를 얼마나 들여쓸지를 지정한다.  
    ```
    사용법) text-indent: <크기> | <백분율>
    ```
    ```
    예제 1) text-indent: 15px;
    ```
    5.text-justify 속성은 text-align이 justify일 경우, 간격을 어떻게 조절해 정렬할지 지정할 때 사용한다.  
    ```
    사용법) text-justify: auto | none | inter-word | distribute
    ```
    ```
    예제 1) text-justify: auto;
    ```
5. text-overflow 속성은 기준선을 벗어난 텍스트를 어떻게 처리할지 지정할 때 사용한다. 단 사용하기 위해서 2가지 조건이 충족 되어야한다.  
   ① overflow 속성 값이 scroll, auto, hidden 중 하나일 것  
   ② white-space 속성 값이 nowrap 일것  
    ```
    사용법) text-overflow: clip | ellipsis
    ```
    ```
    예제 1)
       .content {
          white-space: nowrap; // 줄바꿈 안함
          overflow: hidden;  // 넘치는 부분 감춤
          text-overflow: ellipsis; // 말줄임표 표시
       }
       .content:hover {
          overflow: vosible; // 마우스 오버하면 넘치는 부분을 표사
       }
    ```

## 목록 스타일

1. list-style-type 속성은 순서 없는 목록(`<ul>`)이나 순서 있는 목록(`<ol>`)의 불릿과 번호 스타일을 지정할 때 사용한다.  
   ① 순서 목록이 없는 경우  
    ```
    사용법) list-style-type: none | disc | circle | square
    ```
    ```
    예제 1) list-style-type: square;
    ```
    ② 순서 있는 목록인 경우  
    ```
    사용법) llist-style-type: decimal | lower-roman | upper-roman | lower-alpha | upper-alpha
    ```
    ```
    예제 1) list-style-type: upper-roman;
    ```
2. list-style-image 속성은 순서 없는 목록에서 지원하지 않는 불릿을 이미지를 통해 추가할 때 사용한다.  
    ```
    사용법) list-style-image: <이미지> | none
    ```
    ```
    예제 1) list-style-image: url('images/dot.png');
    ```
3. list-style-position 속성은 리스트 목록을 좀 더 안쪽으로 배치할지, 바깥으로 배치할지 지정할 때 사용한다.  
    ```
    사용법) list-style-position: inside | outside
    ```
    ```
    예제 1) list-style-position: inside;
    ```
4. list-style 속성은 위의 속성을 묶어서 약식으로 사용할 때 사용한다.  
    ```
    사용법) list-style: <list-style-type> <list-style-image> <list-style-position>
    ```
    ```
    예제 1) list-style: lower-alpha, inside;
    ```
