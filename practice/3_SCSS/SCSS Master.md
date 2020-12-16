# 목차
1\) [FLEXBOX](#1-flexbox)
- [x] flex-direction
- [x] justfy-content
- [x] align-items
- [x] align-self
- [x] order
- [x] align-content
- [x] flex-wrap
- [x] flex-grow
- [x] flex-shrink
- [x] flex-basic
- [x] flex-flow

2\) [GRID](#2-grid)
- [x] grid-template-columns
- [x] grid-template-rows
- [x] column-gap
- [x] row-gap
- [x] gap

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

## 1.1~1.3 First Rule of Flexbox, Main Axis and Cross Axis, Column and Row

1\) flexbox에서는 children과 이야기하지 않는다.   

   * flex box에서 대상의 위치를 변경하고 싶으면, flexbox container를 만들어야 한다. flexbox container는 parent가 되고, 내부에 위치한 태그들이 children이 된다.  그렇다고 후손까지 옮겨주는 것은 아니다.   
   * flex box를 설정한 parent에 여러 속성을 설정하면, children들의 위치가 조정된다.   
    
2\) Flexbox는 나열할 방향을 정할 수 있다. : `flex-direction: row (default) | column | row-reverse … ;`   

   * row일 때 주축: 가로, 교차축: 세로   
   * column일 때 주축: 세로, 교차축: 가로      
    
3\) 주축(main axis)을 기준으로 대상을 움직일 수 있다. : `justify-content: space-evenly | center | … ;`   

4\) 교차축(cross axis)을 기준으로 대상을 움직일 수 있다. : `align-items: center | … ;`   

   * flex-direction: row; align-items: center; 를 지정할 때에는 flex container의 높이를 신경써야한다.   

## 1.4 align-self and order

지금까지는 부모(flexbox container)가 어떻게 자식을 옮기는가에 대해 설명했다면, 이제는 자식 스스가 자신을 설정하는 2가지 옵션에 대해 배울 것이다.   
부모에 설정하면 모든 자식 요소 전부에 적용되지만, 특정 자식 요소에만 적용하고 싶은 경우 사용한다.

1\) align-items처럼 교차축을 대상으로 스스로를 움직이는 방법: `align-self: center | … ;`

   * align-items처럼 교차축을 대상으로 움직이기 때문에 flex container의 높이가 설정되어 있지 않으면  
      적용 되지 않는다.
2\) html을 변경할 수 없을 때, 자식들 간의 위치를 변경 할 수 있는 방법: `order: 0 (default) | 양수 | 음수;`

   * flex container의 모든 자식 요소의 order은 기본적으로 0이다. 때문에 전체를 대상으로 순서를  
      정하고 싶다면 모든 요소의 order를 조정해서 순서를 매겨줄 필요가 있다. 하나의 대상면 order을  
      설정해주면 제일 뒤로 갈 것이다.

## 1.5 flex-wrap, align-content

flex container는 자식요소들을 한 줄에 표시하려고 한다. 비록 설정되어 있는 width 크기를 변경하더라도 말이다. 이렇듯 width를 무너뜨리는 것을 방지하기 위해 설정하는 방법이 있다.

flex container 안에서 width의 크기를 보장 받는 방법: `flex-wrap: nowrap(default) | wrap … ;`  

   * 기본적으로 flex-wrap:nowrap; 이 설정되어 있기 때문에 크기를 보장 받지 못하는 것이다.  
   * flex-wrap:wrap을 사용하면 크기를 보장 받을 수 있다.

flex-wrap을 통해 크기를 보장받으면, 자식 요소들이 크기에 맞춰서 자동으로 개행을 하게 된다.  
문제는 자동으로 개행될 때 자식 요소들 간의 상하 간격이 자동으로 생긴다는 것인데, 이러한 상하 간격을 조절하는 속성도 있다.

flex-wrap 속성에 의해 자동 개행된 자식 요소간의 상하 간격을 조절: `align-content: flex-start | … ;`

## 1.6~1.7 flex-grow, flex-shrink, flex-basis, flex-flow
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


## 1.8~1.9 Flexbox Froggy 1~24
[flexbox froggy](http://flexboxfroggy.com/)를 이용하여 연습하기

# ✔2 GRID
## 2.1 Life Before Grid
Box를 옆으로 나열하거나, 가운데로 옮기거나 하는 경우에는 flexbox로 편하게 할 수 있지만
격자 형식으로 요소들을 배치하려고 하면 까다로운 점들이 많다. 이럴 때를 대비하여 격자형식을 지원하는 grid를 지원하게 되었다.

## 2.2 CSS Grid Basic Concepts
flexbox처럼 grid도 부모요소에 설정하며 기본 규칙도 flexbox와 많이 닮아있다:  `display: grid;`

1\) Grid column 설정 방법: `grid-template-columns: 100px 25px 100px;`
   * 원하는 column 개수 만큼 설정하면 된다. 만약 똑같은 크기를 설정한다면 repeat()를 이용해도 된다.

2\) Grid row 설정 방법: `grid-template-row: repeat(3, 100px);`
   * 원하는 row 개수만큼 설정하면 된다. 반복은 repeat() 사용
  
3\) Grid column 사이에 간격 넣는 방법: `column-gap: 10px;`   
4\) Grid row 사이에 간격 넣는 방법: `row-gap: 10px;`   
5\) Grid column과 row에 동시에 간격 넣는 방법: `gap: 10px;`