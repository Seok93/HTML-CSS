## 목차
1\) [FLEXBOX](#1-flexbox)

## ✔1 FLEXBOX

### 1.0 Life Before Flexbox

block은 box이기 때문에 한 라인을 다 차지하게 된다.  
inline은 box가 아니라 element이다. 유동적인 거라서 너비와 높이가 없다.  
inline-block은 block의 성질을 유지한채, 옆에 다른 대상이 올 수 잇도록 해준다.

문제는 inline-block성질인데, 이녀석을 사용하면 box들 사이에 우리가 설정하지 않은 이상한 공간을 차지하게된다. 또한 box들에게 margin을 줘서 너비를 맞추는 과정도 힘들고, 여러 플랫폼(웹브라우저, 핸드폰, 블릿 etc)에 따라 디자인 설정이 제각각이기 때문에 너무 어려움을 주는 요소가 된다. 이러한 문제로 inline-block의 사용은 비추천이다.

위의 문제를 간편하게 해결하기 위해 flex라는 성질이 나왔다.

### 1.1~1.3 First Rule of Flexbox, Main Axis and Cross Axis, Column and Row

1\) flexbox에서는 children과 이야기하지 않는다.   

   * flex box에서 대상의 위치를 변경하고 싶으면, flexbox container를 만들어야 한다. flexbox container는 parent가 되고, 내부에 위치한 태그들이 children이 된다.  그렇다고 후손까지 옮겨주는 것은 아니다.   
   * flex box를 설정한 parent에 여러 속성을 설정하면, children들의 위치가 조정된다.   
    
2\) Flexbox는 나열할 방향을 정할 수 있다. : ```flex-direction: row (default) | column | row-reverse … ;```  

   * row일 때 주축: 가로, 교차축: 세로   
   * column일 때 주축: 세로, 교차축: 가로      
    
3\) 주축(main axis)을 기준으로 대상을 움직일 수 있다. : `justify-content: space-evenly | center | … ;   `

4\) 교차축(cross axis)을 기준으로 대상을 움직일 수 있다. : align-items: center | … ;   

   * flex-direction: row; align-items: center; 를 지정할 때에는 flex container의 높이를 신경써야한다.   

### 1.4 align-self and order

지금까지는 부모(flexbox container)가 어떻게 자식을 옮기는가에 대해 설명했다면, 이제는 자식 스스가 자신을 설정하는 2가지 옵션에 대해 배울 것이다.   
부모에 설정하면 모든 자식 요소 전부에 적용되지만, 특정 자식 요소에만 적용하고 싶은 경우 사용한다.

1\) align-items처럼 교차축을 대상으로 스스로를 움직이는 방법: align-self: center | … ;

   * align-items처럼 교차축을 대상으로 움직이기 때문에 flex container의 높이가 설정되어 있지 않으면  
      적용 되지 않는다.
2\) html을 변경할 수 없을 때, 자식들 간의 위치를 변경 할 수 있는 방법: order: 0~xxxx ;

   * flex container의 모든 자식 요소의 order은 기본적으로 0이다. 때문에 전체를 대상으로 순서를  
      정하고 싶다면 모든 요소의 order를 조정해서 순서를 매겨줄 필요가 있다. 하나의 대상면 order을  
      설정해주면 제일 뒤로 갈 것이다.

### 1.5 wrap, nowrap, reverse, align-content

flex container는 자식요소들을 한 줄에 표시하려고 한다. 비록 설정되어 있는 width 크기를 변경하더라도 말이다. 이렇듯 width를 무너뜨리는 것을 방지하기 위해 설정하는 방법이 있다.

flex container 안에서 width의 크기를 보장 받는 방법: flex-wrap: nowrap(default) | wrap … ;  

   * 기본적으로 flex-wrap:nowrap; 이 설정되어 있기 때문에 크기를 보장 받지 못하는 것이다.  
   * flex-wrap:wrap을 사용하면 크기를 보장 받을 수 있다.

flex-wrap을 통해 크기를 보장받으면, 자식 요소들이 크기에 맞춰서 자동으로 개행을 하게 된다.  
문제는 자동으로 개행될 때 자식 요소들 간의 상하 간격이 자동으로 생긴다는 것인데, 이러한 상하 간격을 조절하는 속성도 있다.

flex-wrap 속성에 의해 자동 개행된 자식 요소간의 상하 간격을 조절: align-content: flex-start | … ;
