# 목차
1\) [FLEXBOX](#1-flexbox):
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

2\) [GRID](#2-grid):
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
- [x] [부모요소] justify-items
- [x] [부모요소] align-items
- [x] [부모요소] place-items
- [x] [부모요소] justify-content
- [x] [부모요소] align-content
- [x] [부모요소] place-content
- [x] [자식요소] justify-self
- [x] [자식요소] align-self
- [x] [자식요소] place-self
- [x] [부모요소] grid-template
- [x] [보무요소] grid-auto-rows
- [x] [부모요소] grid-auto-columns
- [x] [부모요소] grid-auto-flow
- [x] [자식요소] order

3\) Keywords & Functions:
- [x] repeat()
- [x] fr
- [x] minmax
- [x] auto-fit
- [x] auto-fill
- [x] min-content
- [x] max-content

4\) [SCSS](#3-scss):
- [x] Variables
- [x] Nesting
- [x] Partials
- [x] Mixins
- [x] Extend
- [x] Responsive Minxins

5\) Practice flexbox and grid:
- [x] [flexbox froggy](http://flexboxfroggy.com/) Flexbox 연습을 위한 사이트
- [x] [grid garden](http://cssgridgarden.com/) Grid 연습을 위한 사이트

6\) [To Clone](#4-clone):
- [x] [https://besthorrorscenes.com/](https://besthorrorscenes.com/)
- [x] [https://paint-box.com/](https://paint-box.com/)
- [x] [http://10x19.co/](http://10x19.co/)
- [x] [http://www.z-o-o.fr/](http://www.z-o-o.fr/)
- [x] [https://schwartzmedia.com.au/](https://schwartzmedia.com.au/)
- [ ] [https://tolv.dk/](https://tolv.dk/)
- [ ] [https:://rodicdavidson.co.uk/](https:://rodicdavidson.co.uk/)
- [ ] [https://beige.de/](https://beige.de/)
- [ ] [http://donicaida.com/](http://donicaida.com/)
- [ ] [https://canalstreet.market/](https://canalstreet.market/)
- [ ] [https://wonhumdred.com/](https://wonhumdred.com/)


# 🌈1 FLEXBOX
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

## 1.8~1.9 FlexboxFroggy 1\~24

[flexbox froggy](http://flexboxfroggy.com/)를 이용하여 연습하기

# 🌈2 GRID
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
```CSS
> repeat( 반복횟수, 지정할 크기);

[부모요소] grid-template-columns: repeat(4, 200px);
[부모요소] grid-template-columns: auto 200px; // auto는 모든 공간을 다 사용한다.
```

1\) 화면의 레이아웃을 설정하는 방법 : `grid-template-area: "대상 나열";`   
2\) grid-template-area에 사용할 자식 요소에 이름을 붙이는 방법:  `grid-area: header;`
   * grid-template-area는 디자인의 layout을 잡아주기 때문에 엄청 유용하다!   
   * grid-template-area은 display:grid가 설정된 부모요소에서 사용한다.
   * grid-area는 자식 요소에 설정하며, 어떤 자식이 어느 위치에 올 것인가   
     grid-template-area나 grid-template에 설정할 때 사용되는 이름을 붙여준다.

**【사용 예시】**

```HTML
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
```CSS
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
```CSS
[자식요소] grid-column-start: 시작 라인번호 (= Line Number 1~xx);
[자식요소] grid-column-end: 끝 라인 번호;
```
grid-column-start, grid-column-end는 열의 시작과 열의 끝, 즉 가로의 길이를 설정할 때 사용한다.

2\) grid에서 특정 요소(Header, Content, Nav etc)의 **세로 영역**을 설정하는 방법
```CSS
[자식요소] grid-row-start: 시작 라인번호 (= Line Number 1~xx);
[자식요소] grid-row-end: 끝 라인 번호;
```
grid-row-start, grid-row-end는 행의 시작과 행의 끝, 즉 세로의 길이를 설정할 때 사용한다.


grid-column-start/grid-column-end와 grid-row-start/grid-row-end의 설정 방법은 같다.
```CSS
.header {
   background-color: #FAAC6A;
   grid-column-start: 1;
   grid-column-end: 4;
}
```
얼핏 보면 column을 1번부터 4번, 즉 4칸을 할당하는 것처럼 보일 수 있다. 하지만 위의 숫자의 의미는 grid의 경계선인 라인번호를 의미한다. 경계선 라인번호 1~4는 실제로 3칸을 할당한다는 것을 알 수 있다.

3\) start와 end를 한 번에 지정하는 방법
```CSS
[자식요소] grid-column: 시작 라인번호 / 끝 라인번호 | span 셀 개수;
[자식요소] grid-row: 시작 라인번호 / 끝 라인번호 | span 셀 개수;
```
grid-column-start/grid-column-end와 grid-row-start/grid-row-end 방법은 속성명이 너무 길고 항상 시작과 끝을 설정해야한다는 단점이 있다. 이것을 보완하기 위한 속성이 grid-column과 grid-row이다.

참고로 grid-column과 grid-row에 지정하는 숫자를 음수로 지정할 수 있다. 음수로 지정하면 끝에서부터 순차적으로 라인 번호를 지정할 수 있다. 그래서 한 행을 전부 차지한다고 표기할 때에는 grid-column: 1/-1; 로 지정해도 된다.


1/-1, 1/5 등 시작과 끝을 라인 번호를 지정했던 것을 span을 이용하여 대체할 수 있다. span에 지정하는 것은 cell의 개수이다. Cell이란 grid로 분할한 영역의 한 칸을 의미한다. 단, span으로 하면 전체를 span으로 설정하는게 좋다. 2/5 등과 라인 번호화 같이 사용하면 레이아웃이 이상하게 보일 수도 있다.

## 2.6 Line Naming
Line에 이름을 붙이는 것이 가능하다.

```CSS
[부모요소]
grid-template-columns: 
   [first-line] 100px [second-line] 100px [third-line] 100px [fourth-line] 100px [fifth-line];

[자식요소]
grid-column: first-line / fourth-line;
```
위와 같이 숫자와 span 대신 이름으로 지정하는 방법도 가능하다.

## 2.7 Grid Template
fr이라는 단위에 대해 알아야한다. fr은 fraction(부분)이라는 단어의 약자로, 여기서는 grid container 영역에서 사용한 가능한 부분 이라는 의미로 생각하면 된다. **fr은 기본적으로 사용 가능한만큼 공간을  차지한다.**

```CSS
[부모요소] grid-template-columns: repeat(4, 1fr);
```
grid container에 width를 지정하지 않은 상태에서 위와 같이 요소의 크기를 1fr로 지정하면 body의 전체 크기를 분할하여 가진다.

```CSS
[부모요소] grid-template-columns: 3fr 1fr 1fr 1fr;
```
영역을 3:1:1:1의 비율로 가지도록 설정하는 방법이다. 즉 비율을 정하여 grid 영역의 크기를 지정할 수 있다.

grid-template-rows: repeat(4, 1fr); 을 설정할 때에는 주위해야할 점이 있는데, fr은 사용가능한만큼 공간을 차지해주는 성질이 있다고 했다. 다르게 말하면, 정확히 자기가 사용가능한 공간을 모르면 설정이 불가능하다는 점이다. 때문에 grid-template-rows를 대상으로 fr을 진행할 때에는 grid-container의 높이가 지정되어 있어야 한다.

* 반응형 앱을 만들 때에는 grid의 cell들의 크기를 100px 등으로 지정하는게 아니라 %나 fr로 입력해야한다.

1\) grid-template-columns과 grid-template-row를 한 번에 설정하는 방법이 : `grid-template: "대상 나열"`


```CSS
[부모요소] 
grid-template: 
	"header header header header" 1fr
	"content content content nav" 2fr
	"footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr;
```
위와 같이 row의 구성, row의 크기를 나열하고 / 기호와 함께 column의 개수와 크기를 지정해주면 된다.   
grid-template-area 처럼 grid-area를 통해  자식요소에 이름일 지어줘야하고, 그것을 활용해서 grid를 구성한다.

참고로 1fr 1fr 1fr 1fr 부분은 repeat(4, 1fr)로 변경이 불가능하다. Grid-template에서는 repeat가 적용되지 않기 때문이다.

```CSS
[부모요소]
grid-template: 
	[header-start] "header header header header" 1fr [header-end]
	[content-start] "content content content nav" 2fr [content-end]
	[footer-start] "footer footer footer footer" 1fr [footer-end] / 1fr 1fr 1fr 1fr;
```

위와 같이 각 row에 이름을 붙일 수도 있다. 명심해야할 것은 이름을 붙일거면 전체에 붙여야하고, 안붙일거면 전체에 안붙여져 있어야한다. 

## 2.8 Place Items
item의 의미는 grid의 셀 하나를 의미한다. items는 그러한 grid의 전체 셀들을 각각 지칭하고 있다.
때문에 jutify-items나 align-items는 grid의 셀 각각이 내부적으로 어떻게 움직이는지를 정의해준다.

```CSS
[부모요소] justify-items: stretch (default) | start | center | end ... etc
```
grid에서 주축(수평축, 가로축)을 기준으로 움직여준다.
```CSS
[부모요소] align-items: stretch | start | center | end ... etc;
```
grid에서 교차축(수직축, 세로축)을 기준으로 요소를 움직여준다.

```CSS
[부모요소] place-items: center(수직설정) center(수평설정);
```
justify-items와 align-items의 두 개의 속성을 한 번에 적용하는 단축속성이다.

## 2.9 Place Content
content의 의미는 기능을 제공하는 단위로, grid 자체를 의미한다. 때문에 justify-content와 align-content는 grid 전체를 대상으로 어떻게 움직이는지를 정의해준다.

```CSS
[부모요소] justify-content: start(default) | center | space-around ... etc
```
grid 전체를 수평축(가로축)을 기준으로 움직인다.

```CSS
[부모요소] align-content: start(default) | center | end ... etc
```
grid 전체를 수직축(세로축)을 기준으로 움직인다.

```CSS
[부모요소] place-content: center(수직설정) center(수평설정);
```
justify-content와 align-content 두개의 속성을 한 번에 적용하는 단축속성이다.

## 2.10 Auto Columns and Rows

1\) aling-self와 justify-self   
items은 grid 전체에 있는 각각의 셀을 대상으로 적용하고, content는 grid 그 자체를 대상으로 적용했다면 self는 순수하게 grid 셀 하나를 대상으로 적용하는 속성이다. 개별 자식 요소에 적용하는 속성으로 grid의 자식 중 하나를 대상으로 어떻게 움직일까에 대해 정의한다.

```CSS
[자식요소] align-self: start | center | end ... etc
```
지정된 grid 셀 1칸을 수직축(세로축)을 기준으로 독립적으로 움직인다.
```CSS
[자식요소] justify-self: start | center | end ... etc
```
지정된 grid 셀 1칸을 수평축(가로축)을 기준으로 독립적으로 움직인다.

```CSS
[자식요소] place-self: start(수직살장) center(수평설정);
```
align-self와 justify-content의 두 속성을 한 번에 적용하는 단축속성이다.

2\) grid-auto-rows와 grid-auto-columns   
grid-template-columns와 grid-template-rows는 자기들이 가질 행과 열을 고정으로 가지게 되는데, 가끔 DB에서 데이터가 얼마나 올지 몰라서, 고정치를 설정하지 못할 때가 있다. 이럴 때를 대비해서 지정된 범위를 초과할 때 자동으로 설정해주는 속성을 제공해준다.

```CSS
[부모요소] grid-auto-rows : 100px
[부모요소] grid-auto-columns: 100px
```
위의 두 속성은 grid-template-columns와 grid-template-rows에 설정한 행과 열의 개수를 넘어갈 때 넘어간 대상에 대하여 크기를 어떻게 할지 처리해준다.  만약 grid-template-columns와 grid-template-rows를 설정하지 않는다면 처음부터 grid-auto-rows와 grid-auto-columns이 적용된다.


3\) grid-auto-flow
grid는 기본적으로는 위에서 아래로(수직방향)으로 순차적으로 붙는다. 위에서 아래로 붙이기보다 좌에서 우로 붙이고 싶다면 grid-auto-flow를 통해 방향을 바꿔줄 필요가 있다. Flexbox의 flex-direction같은 것이다.

```CSS
[부모요소] grid-auto-flow: column;
```
grid가 그려지는 방향을 변경해준다.

## 2.11 minmax
minmax는 최소크기와 최대크기를 지정하는 방법이다.

```CSS
[부모요소] grid-template-columns: repeat(5, minmax(100px, 500px));
```
화면이 아무리 작아져도 최소크기 100px를 보장하고, 화면이 아무리 커져도 최대 크기는 500px이다. 위의 예시처럼 최소크기와 최대크기를 보장받을 때 사용한다.
최소크기보다 화면이 작아지면 스크롤 바가 생긴다.

## 2.12 auto-fit, auto-fill
CSS grid를 이용해서 responsice 디자인을 만드는 방법으로 auto-fit와 auto-fill을 사용하는 것이다. 이 속성들은repeat function에서 사용할 수 있다.

```CSS
[부모요소] grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
```
auto-fit는 사용가능한 공간에 따라 유동적으로 사이즈를 조절하여 전체 공간에 딱 맞출(fit!) 때 사용한다.

```CSS
[부모요소] grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
```
auto-fill은 정해진 사이즈를 유지한 채(최소크기로 유지), 사이즈 조절시 나머지 공간을 다음 grid 요소가 오도록 여백을 남겨둘 때 사용한다.

반응형 웹을 핸드폰으로 볼 때에는  auto-fit나 auto-fill으로 설정은 같아보이지만, 화면이 커질수록 그 차이는 명확해진다. auto-fit는 화면이 늘어나면 늘어난 공간만큼 grid의 cell들을 늘려준다. 하지만 auto-fill은 최소 크기를 유지한 채, 나머지 공간은 새롭게 grid의 cell 요소가 올 수 있도록 공간을 마련하고 있다.

auto-fill은 보다 정확한 사이즈를 위한 것이고auto-fit은 유동적인 사이즈를 위한 것이다. grid-template-columns에서 auto-fit, auto-fill을 사용하면 column의 개수에 상관없이 받아들인다.

## 2.13 min-content, max-content
min-content와 max-content는 content가 가지는 최소크기와 최대 크기이다. Content는 grid 전체를 가리킨다.

```CSS
grid-template-columns: repeat(5, minmax(max-content, 1fr));
```

## 2.14~2.15 Grid Garden
http://cssgridgarden.com/ 실습하기


# 🌈3 SCSS
## 3.0 CSS Preprocessors and Set Up
SCSS는 CSS preprocessor(전처리기)로 CSS가 동작하기 전에 처리한다.   
CSS preprocessor의 종류로 대표적으로 Scss, Less, Stylus 등이 있다. 

SCSS는 CSS를 프로그래밍 언어처럼 작업할 수 있게 만들어주며, syntax를 개선하는데 사용하기 좋다.
SCSS를 사용하기 위해서는 Compile과 Build하는 단계가 필요하다. 이 단계를 위해 Gulp를 사용하는데, gulp란 compile하거나 transform해주는 nodeJS package이다.

## 3.1 Variables and Nesting
브라우저는 SCSS파일을 이해하지 못하기 때문에 HTML파일에서는 SCSS파일을 link 하는 것이 아니라, SCSS파일을 컴파일해서 만든 CSS파일을 link해야한다.

1\) variables   
CSS는 주로 사용하는 값을 변수(Variable)화하여 가져다 사용하는 기능이 있다. SCSS에서도 이러한 기능을 이용할 수 있다. 보통 SCSS에서 사용할 변수(Variable)들을 관리하기 위해 `_variable.scss파일`을 만든다. 다른 이름으로도 사용가능하나 보통 _variable.scss를 많이 사용한다.  

_variable.scss에서 파일명에 들어간 _에는 의미가 있는데, CSS로 변하지 않았으면 하는 파일들에게 붙인다. _variables.scss에 변수들을 정의할 때에는 `$변수명: 변수값;` 으로 구성해서 넣어준다.

```SCSS
[파일] _variables.scss

$bg: #e7473c;
$title: 32px;
$btn: #ff3421;
.
.
.
```
변수가 필요한 파일에 _variables.scss파일은 import한 후 정의한 `$변수명`로 바로 사용이 가능하다. CSS처럼 var(변수명) 이런식으로 할 필요가 없다. 보통은 styles.scss에 _variables.scss를 import하여 많이 사용한다.   

2\) nesting   
Nesting은 CSS적용을 원하는 element를 더 정확하게 지정할 수 있도록 해준다.
Nesting은 HTML의 코드 구조(부모-자식관계)처럼 CSS를 설정할 수 있는 방법으로,  CSS 설정 안에 CSS설정을 넣는 방법을 말한다.

```CSS
> 기존의 CSS 설정 방식

.box {
    margin-top: 20px;
}
.box:hover {
    background-color: coral;
}
.box h2 {
    color: blue;
}
.box button {
    color: red;
}
```
기존에는 .box 클래스를 같는 요소(element)의 자식 요소 h2, button 등을 지칭하기 위해 .box라는 부분을 중복해서 지정해줘야 했다. 하지만 Nesting을 사용하면 이 중복을 없애고 원하는 대상을 그대로 지칭할 수 있게 된다.

```SCSS
> SCSS의 Nesting

.box {
    margin-top: 20px;

    &:hover {
        background-color: coral;
    }

    h2 {
        color: blue;
    }

    button {
        color: red;
    }
}
```

`&기호`는 Nesting에서 자기 자신(선택자)을 의미한다.

## 3.2 Mixins
Mixin은 SCSS functionality(=기능성)를 재사용할 수 있게 해준다. Mixin은 상황에 따라 다르게 반응하도록 CSS를 조절 하고 싶을 때 사용한다. Mixin은 CSS를 프로그래밍하듯 다룰 수 있게 해주며, 함수처럼 사용하게 해준다.

Nodejs에서 mixin은 HTML코드를 재사용하는데 사용했다면, SCSS에서 mixin은 CSS코드를 재사용하는데 사용한다.

`_mixins.scss파일`을 만들고 재사용할 내용을 정의하면 된다.
Mixin을 정의할 때에는 `@mixin 함수명($변수) { CSS내용 }`의 구조를 가진다.
아래와 같이 if-else문도 사용할 수 있고, $word처럼 변수를 받아올 수 도 있다.
```SCSS
[파일] _mixins.scss

@mixin link($word) {
    text-decoration: none;
    display: block;

    @if $word == "odd" {
        color: blue;
    } @else if $word == "even" {
        color: red;
    } @else {
        color: black;
    }
}
```
_mixins.scss에 정의한 내용을 사용하기 위해서 styles.scss에 추가해야하고, `@include`를 이용하여 _mixins.scss에 정의한 스타일을 함수처럼 호출하여 사용할 수 있다.

```SCSS
[파일] styles.scss

@import "_variables";
@import "_mixins";

a {
    margin-bottom: 10px;
    &:nth-child(odd) {
        @include link("odd");
    }
    &:nth-child(even) {
        @include link("even");
    }
}
```

## 3.3 Extends
Mixin이 상황에 따라 다르게 적용되도록 코딩하고 싶을 때 사용했다면, Extend는 같은 코드를 중복하고 싶지 않을 때 or 다른 코드를 확자앟고 싶을 때 사용한다.
mixin이든 extends든 둘 다 코드의 재사용성을 제공한다.

`_extends_scss파일`에 정리해도 되고,  기능별 고유 파일(_button.scss)로 정리해도 된다. Extend를 정의할 때에는 `%extend명 { 내용 }`구조를 가진다.
```SCSS
[파일] _extends.scss

%button {
    font-family: inherit;
    border-radius: 7px;
    font-size: 12px;
    text-transform: uppercase;
    padding: 5px 10px;
    background-color: peru;
    color: white;
    font-weight: 500;
}
```
_extends.scss를 사용하기 위해서는 사용할 위치에 @import를 하고, `@extend`를 이용하여 _extends.scss에 정의한 스타일을 가져다 사용할 수 있다. 사용할 때에도 %extend명을 통해 사용한다.
```SCSS
@import "_variables";
@import "_mixins";
@import "_extends";

a {
    @extend %button;
    text-decoration: none;
}
button {
    @extend %button;
    border: none;
}
```

## 3.4 Awesome Mixins and Conclusions
Mixin 기능중에 @content라는 아주 awesome한 기능이 있다!
`@content`는 컨텐츠를 그대로 포함한다는 것인데, 여기서 컨텐츠는 css 속성을 말한다.
```SCSS
[파일] _mixin.scss

@mixin responsive {
    @content;
}
```
```SCSS
[파일] styles.scss

@import "_variables";
@import "_mixins";
@import "_extends";

a {
    @include responsive {
        text-decoration: none;
    }
}
```

위의 예시처럼 a태그에서 responsive라는 mixin를 사용할 때 설정한 내용 자유롭게 설정하여 그대로 적용되도록 @content를 설정할 수 있다. A태그에 responsive mixin함수를 불러서 내용을 적으면 @content부분을 대체하여 적용된다.

```SCSS
[파일] _mixin.scss

@mixin responsive($device) {
    @if $device == "iphone" {
        @media screen and (min-width: $minIphone) and (max-width: $maxIphone) {
            @content;
        }
    } @else if $device == "tablet" {
        @media screen and (min-width: $minTablet) and (max-width: $maxTablet) {
            @content;
        }
    } @else if $device == "iphome-l" {
        @media screen 
         and (min-width: $minIphone) 
         and (max-width: $maxIphone) 
         and (orientation: landscape) {
            @content;
        }
    } @else if $device == "ipad-l" {
        @media screen 
         and (min-width: $minTablet) 
         and (max-width: $maxTablet) 
         and (orientation: landscape) {
            @content;
        }
    }
}
```
```SCSS
[파일] styles.scss

@import "_variables";
@import "_mixins";
@import "_extends";

h1 {
    color: red;
    @include responsive("iphone") {
        color: yellow;
    }
    @include responsive("iphone-l") {
        color: orange;
    }
    @include responsive("tablet") {
        color: green;
    }
    @include responsive("ipad-l") {
        color: greenyellow;
    }
}
```
위 처럼 크기에 따라 다양하게 적용하도록 응용하여 사용할 수도 있다.

Awesome scss mixins 검색하면 엄청 많은 라이브러리가 나오는데 Bourbon, Sass MediaQueries, animate.scss 등을 추천한다.


# 🌈4 Clone
## 4.1 [https://besthorrorscenes.com/](https://besthorrorscenes.com/)
<img src="https://user-images.githubusercontent.com/32609010/102862259-299d4580-4474-11eb-9e21-53433446ed1c.gif" width="50%" height="50%">

## 4.2 [https://paint-box.com/](https://paint-box.com/)
<img src="https://user-images.githubusercontent.com/32609010/103049345-e4445980-45d4-11eb-85a6-01b5e7ef61ec.gif" width="50%" height="50%">

## 4.3 [http://10x19.co/](http://10x19.co/)
<img src="https://user-images.githubusercontent.com/32609010/103077699-9bf85c00-4613-11eb-9127-af9cf2f786b9.gif" width="50%" height="50%">

## 4.4 [http://www.z-o-o.fr/](http://www.z-o-o.fr/)
<img src="https://user-images.githubusercontent.com/32609010/103194597-7de86f80-4923-11eb-9cf2-71fd8149d4e9.gif" width="50%" height="50%">

## 4.5 [https://schwartzmedia.com.au/](https://schwartzmedia.com.au/)
<img src="https://user-images.githubusercontent.com/32609010/103340052-7dd4a500-4ac6-11eb-9ddc-6c3cc357c59a.gif" width="50%" height="50%">
