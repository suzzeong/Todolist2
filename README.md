# Todolist를 React-Redux로 만들기
redux와 router 개념을 바탕으로 Todolist 구현해 보았습니다.


## 파일구조
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Form.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜List.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂pages
 ┃ ┣ 📜TodoDetail.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
 ```

### 컴포넌트를 나눈 기준
Header, Form, List(components)는 TodoList(pages)로 전달해주고,

List(components)는 Todo(components)의 부모 컴포넌트다.

redux 파일을 만들어 configStore.js(config)와 todo.js(modules)를 넣어주었다.

Detail(components)을 TodoDetail(pages)로 받은 다음,

Router(shared)에 react-router-dom을 이용하여 새로운 페이지로 가도록 전달해준다.

### 설치하기
```c
// 프로젝트 생성
yarn create react-app foldername

// 스타일컴포넌트
yarn add styled-components

// 리덕스 & 리액트 리덕스
yarn add redux react-redux

// 리액트 라우터 돔
yarn add react-router-dom

// Material UI
yarn add @mui/icons-material

// 프로젝트 구동
yarn start
```

### App.js
```c
import Router from "./shared/Router"
import './App.css';

function App() {
  return <Router />
}

export default App;
```

### index.js
```c
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/config/configStore';
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

