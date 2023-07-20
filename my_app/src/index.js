import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
import App3 from './App3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 컴포넌트가 여러 엘리먼트를 return 할때 jsx규칙상 하나의 태그로 묶어서 return 해줘야 한다.
    // 이때 fragment를 사용하면 dom에 별도의 노드를 추가하지 않고 여러자식을 그룹화 할 수 있다.
    <React.Fragment>
        {/* <App />
        <App2 /> */}
        <App3 />
    </React.Fragment>
);