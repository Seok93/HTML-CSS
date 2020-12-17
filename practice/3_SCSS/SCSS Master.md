# 목차
1\) [FLEXBOX](#1-flexbox)
- [x] [부모요소] flex-direction
- [x] [부모요소] justfy-content
- [x] [부모요소] align-items
- [x] [자식요소] align-self
- [x] [자식요소] order
- [x] [부모요소] flex-wrap
- [x] [부모요소] align-content
- [x] [자식요소] flex-grow
- [x] [자식요소] flex-shrink
- [x] [자식요소] flex-basic
- [x] [부모요소] flex-flow

2\) [GRID](#2-grid)
- [x] [부모요소] grid-template-columns
- [x] [부모요소] grid-template-rows
- [x] [부모요소] column-gap
- [x] [부모요소] row-gap
- [x] [부모요소] gap
- [x] [부모요소] grid-template-area
- [x] [자식요소] grid-area
- [x] [자식요소] grid-column-start
- [x] [자식요소] grid-column-end
- [x] [자식요소] grid-row-start
- [x] [자식요소] grid-row-end
- [x] [자식요소] grid-column
- [x] [자식요소] grid-row
- [x] [부모요소] grid-template

5\) Clone or Practice Site
- [flexbox froggy](http://flexboxfroggy.com/) Flexbox 연습을 위한 사이트


# ✔1 FLEXBOX
## 1.0 Life Before Flexbox

block은 box이기 때문에 한 라인을 다 차지하게 된다.  
inline은 box가 아니라 element이다. 유동적인 거라서 너비와 높이가 없다.  
inline-block은 block의 성질을 유지한채, 옆에 다른 대상이 올 수 잇도록 해준다.

문제는 inline-block성질인데, 이녀석을 사용하면 box들 사이에 우리가 설정하지 않은 이상한 공간을 차지하게된다.   
또한 box들에게 margin을 줘서 너비를 맞추는 과정도 힘들고, 여러 플랫폼(웹브라우저, 핸드폰, 블릿 etc)에 따라   
디자인 설정이 제각각이기 때문에 너무 어려움을 주는 요소가 된다. 이러한 문제로 inline-block의 사용은 비추천한다.

위의 문제를 간편하게 해결하기 위해 flex라는 성질이 나왔다.

## 1.1\~1.3 First Rule of Flexbox, Main Axis and Cross Axis, Column and Row

1\) flexbox에서는 children과 이야기하지 않는다.   

   * flex box에서 대상의 위치를 변경하고 싶으면, flexbox container를 만들어야 한다. flexbox container는 parent가 되고,   
   내부에 위치한 태그들이 children이 된다.  그렇다고 후손까지 옮겨주는 것은 아니다.   
   * flex box를 설정한 parent에 여러 속성을 설정하면, children들의 위치가 조정된다.   
    
2\) Flexbox는 나열할 방향을 정할 수 있다. : `flex-direction: row (default) | column | row-reverse … ;`   

   * row일 때 주축: 가로, 교차축: 세로   
   * column일 때 주축: 세로, 교차축: 가로      
    
3\) 주축(main axis)을 기준으로 대상을 움직일 수 있다. : `justify-content: space-evenly | center | … ;`   

4\) 교차축(cross axis)을 기준으로 대상을 움직일 수 있다. : `align-items: center | … ;`   

   * flex-direction: row; align-items: center; 를 지정할 때에는 flex container의 높이를 신경써야한다.   

## 1.4 align-self and order

지금까지는 부모(flexbox container)가 어떻게 자식을 옮기는가에 대해 설명했다면,   
이제는 자식 스스가 자신을 설정하는 2가지 옵션에 대해 배울 것이다.   
부모에 설정하면 모든 자식 요소 전부에 적용되지만, 특정 자식 요소에만 적용하고 싶은 경우 사용한다.

1\) align-items처럼 교차축을 대상으로 스스로를 움직이는 방법: `align-self: center | … ;`

   * align-items처럼 교차축을 대상으로 움직이기 때문에 flex container의 높이가 설정되어 있지 않으면  
      적용 되지 않는다.
2\) html을 변경할 수 없을 때, 자식들 간의 위치를 변경 할 수 있는 방법: `order: 0 (default) | 양수 | 음수;`

   * flex container의 모든 자식 요소의 order은 기본적으로 0이다. 때문에 전체를 대상으로 순서를  
      정하고 싶다면 모든 요소의 order를 조정해서 순서를 매겨줄 필요가 있다. 하나의 대상면 order을  
      설정해주면 제일 뒤로 갈 것이다.

## 1.5 flex-wrap, align-content

flex container는 자식요소들을 한 줄에 표시하려고 한다. 비록 설정되어 있는 width 크기를 변경하더라도 말이다.    
이렇듯 width를 무너뜨리는 것을 방지하기 위해 설정하는 방법이 있다.

flex container 안에서 width의 크기를 보장 받는 방법: `flex-wrap: nowrap(default) | wrap … ;`  

   * 기본적으로 flex-wrap:nowrap; 이 설정되어 있기 때문에 크기를 보장 받지 못하는 것이다.  
   * flex-wrap:wrap을 사용하면 크기를 보장 받을 수 있다.

flex-wrap을 통해 크기를 보장받으면, 자식 요소들이 크기에 맞춰서 자동으로 개행을 하게 된다.  
문제는 자동으로 개행될 때 자식 요소들 간의 상하 간격이 자동으로 생긴다는 것인데, 이러한 상하 간격을 조절하는 속성도 있다.

flex-wrap 속성에 의해 자동 개행된 자식 요소간의 상하 간격을 조절: `align-content: flex-start | … ;`

## 1.6\~1.7 flex-grow, flex-shrink, flex-basis, flex-flow
align-self, order와 더불어 flex-grow, flex-shrink, flex-basis는 child에게 줄 수 있는 속성이다.   
flex-grow와 flex-shrink는 반응형 디자인(responsive design)을 할 때 유용하게 사용된다.

1\) 줄어드는 웹사이트 너비(width)에 따라 크기가 줄어드는 비율 조절하는 방법 : `flex-shrink: 1(default) | 숫자 ;`

   * flexbox는 `flex-wrap: wrap;`으로 설정하지 않으면 width를 지정해도, 폭에 따라 크기가 조절된다. 
   * 보통은 모든 요소의 flex-shrink의 기본 값이 1이기 때문에 같은 비율로 크기가 조절된다. 
   * 특정 요소에 대해서는 상대적으로 더 많이 줄어들었으면 할 때 flex-shrink 값을 더 크게 지정해주면 된다.

2\) 넓어지는 웹사이트 너비(width)에 따라 크기가 늘어나는 비율을 조절하는 방법: `flew-grow: 0 (default) | 숫자;`

   * flex-grow는 flex-shrink와 비슷하지만 반대로 작용한다.
   * flex-wrap: nowrap상황에서 화면의 폭을 넓힐 때, 요소에 지정된 width보다 커질 경우 넓어진 폭에 맞춰서 child들의 크기가 커지는 비율을 설정하는 것이다.
   * flex-grow의 기본값은 0으로 값을 크게 해줄수록 더 많이 커진다.

3\) width처럼 요소의 초기 크기를 지정해주는 방법:  `flex-basis: 300px`

   * flex-basis은 width설정과 비슷하게 작동한다.
   * **flex-basis는 element에게 처음 크기를 지정**해준다. 
   * **flex-basis은 주축(main axis)을 대상으로 작용**한다.
   * 후에 반응형 디자인에 의해 flex-grow와 flex-shrink에 의해 화면 크기 조절되면서 변경된다.

4\) flex-direction과 flex-wrap을 한 번에 사용하는 방법: `flex-flow: row wrap;`

   * flex-direction과 flex-wrap이 자주 같이 사용되기 때문에, 두개의 역할을 대신하는 flex-flow가 생겼다.
   * 이 속성은 공백문자를 이용하여 두 속성의 값들을 인자로 받는다.

## 1.8\~1.9 FlexboxFroggy 1\~24

[flexbox froggy](http://flexboxfroggy.com/)를 이용하여 연습하기

# ✔2 GRID
## 2.1 Life Before Grid
Box를 옆으로 나열하거나, 가운데로 옮기거나 하는 경우에는 flexbox로 편하게 할 수 있지만
격자 형식으로 요소들을 배치하려고 하면 까다로운 점들이 많다. 이럴 때를 대비하여 격자형식을 지원하는 grid를 지원하게 되었다.

**※ flexbox는 1차원을 다루고 grid는 2차원을 다룬다.**

## 2.2 CSS Grid Basic Concepts
1\) flexbox처럼 grid도 부모요소에 설정하며 기본 규칙도 flexbox와 많이 닮아있다:  `display:  grid;`   

2\) grid column 설정 방법: `grid-template-columns: 100px 25px 100px;`
   * 원하는 column 개수 만큼 설정하면 된다. 만약 똑같은 크기를 설정한다면 repeat()를 이용해도 된다.

3\) grid row 설정 방법: `grid-template-row: repeat(3, 100px);`
   * 원하는 row 개수만큼 설정하면 된다. 반복은 repeat() 사용
  
4\) grid column 사이에 간격 넣는 방법: `column-gap: 10px;`   
5\) grid row 사이에 간격 넣는 방법: `row-gap: 10px;`   
6\) grid column과 row에 동시에 간격 넣는 방법: `gap: 10px;`

## 2.3 Grid Template Areas
css grid에는 `repeat()`라는 함수를 이용하여 반복적인 설정을 한 번에 처리해준다.
```
> repeat( 반복횟수, 지정할 크기);

grid-template-columns: repeat(4, 200px);
grid-template-columns: auto 200px; // auto는 모든 공간을 다 사용한다.
```

1\) 화면의 레이아웃을 설정하는 방법 : `grid-template-area: "대상 나열";`   
2\) grid-template-area에 사용할 자식 요소에 이름을 붙이는 방법:  `grid-area: header;`
   * grid-template-area는 디자인의 layout을 잡아주기 때문에 엄청 유용하다!   
   * grid-template-area은 display:grid가 설정된 부모요소에서 사용한다.
   * grid-area는 자식 요소에 설정하며, 어떤 자식이 어느 위치에 올 것인가   
     grid-template-area나 grid-template에 설정할 때 사용되는 이름을 붙여준다.

**【사용 예시】**

```
# HTML코드
<body>
   <div class="grid">
      <div class="header"></div>
      <div class="content"></div>
      <div class="nav"></div>
      <div class="footer"></div>
   </div>
</body>
```
```
# CSS 코드
.grid {
   display: grid;
   grid-template-columns: repeat(4, 200px);
   grid-template-rows: repeat(4, 200px);
   grid-template-area:
      "header header header header"
      "content content content nav"
      "content content content nav"
      "footer footer footer footer";
}

.header {
   background-color: #2ecc71;
   grid-area: header;
}

.content {
   background-color: #3498db;
   grid-area: content;
}
.nav {
   background-color: #8344ad;
   grid-area: nav;
}

.footer {
   background-color: #f39c12;
   grid-area: footer;
}
```

**【예시 결과이미지】**   
<img src="https://user-images.githubusercontent.com/32609010/102449207-1c98e480-4077-11eb-9143-920b4a71a006.PNG" width="50%" height="50%"/>


## 2.4~2.5 Rows and Columns with Shortcuts
grid-template-area와 grid-area를 이용하면 Layout을 편하게 만들 수 있었다.   
하지만 이렇게 되기까지 다양한 변화가 있었는데, 간편함 뒤에 숨어 있는 이론을 추가적으로 설명하겠다.

1\) grid에서 특정 요소(Header, Content, Nav etc)의 **가로 영역**을 설정하는 방법
```
> grid-column-start: 시작 라인번호 (= Line Number 1~xx);
> grid-column-end: 끝 라인 번호;
```
grid-column-start, grid-column-end는 열의 시작과 열의 끝, 즉 가로의 길이를 설정할 때 사용한다.

2\) grid에서 특정 요소(Header, Content, Nav etc)의 **세로 영역**을 설정하는 방법
```
> grid-row-start: 시작 라인번호 (= Line Number 1~xx);
> grid-row-end: 끝 라인 번호;
```
grid-row-start, grid-row-end는 행의 시작과 행의 끝, 즉 세로의 길이를 설정할 때 사용한다.


grid-column-start/grid-column-end와 grid-row-start/grid-row-end의 설정 방법은 같다.
```
.header {
   background-color: #FAAC6A;
   grid-column-start: 1;
   grid-column-end: 4;
}
```
얼핏 보면 column을 1번부터 4번, 즉 4칸을 할당하는 것처럼 보일 수 있다. 하지만 위의 숫자의 의미는 grid의 경계선인 라인번호를 의미한다. 경계선 라인번호 1~4는 실제로 3칸을 할당한다는 것을 알 수 있다.

3\) start와 end를 한 번에 지정하는 방법
```
> grid-column: 시작 라인번호 / 끝 라인번호 | span 셀 개수;
> grid-row: 시작 라인번호 / 끝 라인번호 | span 셀 개수;
```
grid-column-start/grid-column-end와 grid-row-start/grid-row-end 방법은 속성명이 너무 길고 항상 시작과 끝을 설정해야한다는 단점이 있다. 이것을 보완하기 위한 속성이 grid-column과 grid-row이다.

참고로 grid-column과 grid-row에 지정하는 숫자를 음수로 지정할 수 있다. 음수로 지정하면 끝에서부터 순차적으로 라인 번호를 지정할 수 있다. 그래서 한 행을 전부 차지한다고 표기할 때에는 grid-column: 1/-1; 로 지정해도 된다.


1/-1, 1/5 등 시작과 끝을 라인 번호를 지정했던 것을 span을 이용하여 대체할 수 있다. span에 지정하는 것은 cell의 개수이다. Cell이란 grid로 분할한 영역의 한 칸을 의미한다. 단, span으로 하면 전체를 span으로 설정하는게 좋다. 2/5 등과 라인 번호화 같이 사용하면 레이아웃이 이상하게 보일 수도 있다.

## 2.6 Line Naming
Line에 이름을 붙이는 것이 가능하다.

```
[부모요소]
grid-template-columns: 
   [first-line] 100px [second-line] 100px [third-line] 100px [fourth-line] 100px [fifth-line];

[자식요소]
grid-column: first-line / fourth-line;
```
위와 같이 숫자와 span 대신 이름으로 지정하는 방법도 가능하다.

## 2.7 Grid Template
fr이라는 단위에 대해 알아야한다. fr은 fraction(부분)이라는 단어의 약자로, 여기서는 grid container 영역에서 사용한 가능한 부분 이라는 의미로 생각하면 된다. **fr은 기본적으로 사용 가능한만큼 공간을  차지한다.**

```
[부모요소] grid-template-columns: repeat(4, 1fr);
```
grid container에 width를 지정하지 않은 상태에서 위와 같이 요소의 크기를 1fr로 지정하면 body의 전체 크기를 분할하여 가진다.

```
[부모요소] grid-template-columns: 3fr 1fr 1fr 1fr;
```
영역을 3:1:1:1의 비율로 가지도록 설정하는 방법이다. 즉 비율을 정하여 grid 영역의 크기를 지정할 수 있다.

grid-template-rows: repeat(4, 1fr); 을 설정할 때에는 주위해야할 점이 있는데, fr은 사용가능한만큼 공간을 차지해주는 성질이 있다고 했다. 다르게 말하면, 정확히 자기가 사용가능한 공간을 모르면 설정이 불가능하다는 점이다. 때문에 grid-template-rows를 대상으로 fr을 진행할 때에는 grid-container의 높이가 지정되어 있어야 한다.

* 반응형 앱을 만들 때에는 grid의 cell들의 크기를 100px 등으로 지정하는게 아니라 %나 fr로 입력해야한다.

1\) grid-template-columns과 grid-template-row를 한 번에 설정하는 방법이 : `grid-template: "대상 나열"`


```
[부모요소] 
grid-template: 
	"header header header header" 1fr
	"content content content nav" 2fr
	"footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr;
```
위와 같이 row의 구성, row의 크기를 나열하고 / 기호와 함께 column의 개수와 크기를 지정해주면 된다.   
grid-template-area 처럼 grid-area를 통해  자식요소에 이름일 지어줘야하고, 그것을 활용해서 grid를 구성한다.

참고로 1fr 1fr 1fr 1fr 부분은 repeat(4, 1fr)로 변경이 불가능하다. Grid-template에서는 repeat가 적용되지 않기 때문이다.

```
[부모요소]
grid-template: 
	[header-start] "header header header header" 1fr [header-end]
	[content-start] "content content content nav" 2fr [content-end]
	[footer-start] "footer footer footer footer" 1fr [footer-end] / 1fr 1fr 1fr 1fr;
```

위와 같이 각 row에 이름을 붙일 수도 있다. 명심해야할 것은 이름을 붙일거면 전체에 붙여야하고, 안붙일거면 전체에 안붙여져 있어야한다. 


