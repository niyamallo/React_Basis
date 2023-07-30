import { useState, useEffect } from "react";

function App3() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; // 비어있으면 함수가 작동되지 않도록.
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    // ...를 붙이면 array에서 element들이 빠져나옴.
    // ...를 붙이지 않는다면 toDo와 기존의 Array가 들어있는 이중의 Array가 만들어질 것
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="Text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App3;
