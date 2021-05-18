# book-todo-app
'리액트를 다루는 기술(저자:김민준)'의 10장 Todo Application 예제


## Build


## 컴포넌트 구조 및 역할
- TodoTemplate : 화면을 가운데 정렬, 앱 타이틀(일정 관리) 출력. children으로 내부 JSX를 props로 받아와서 렌더링.
- TodoInsert : 새로운 항목을 입력 및 추가하는 컴포넌트. state를 통해 input의 상태관리.
- TodoListItem : 각 할 일 항목 정보 출력. todo 객제를 props로 받아서 상태에 따라 다른 스타일의 UI출력.
- TodoList : todos 배열을 props로 받아 map으로 여러개의 TodoListItem 컴포넌트로 변환해서 출력

## 복습을 통한 파일 및 컴포넌트 구조
1. 첫번째 : App.js - component folder
2. 두번째 : newApp.js - newComponent folder
3. 세번째 : testApp.js - testComponet folder

## React storybook
