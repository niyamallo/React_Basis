import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // useEffect는 코드가 딱 한번만 실행될 수 있도록 보호해줌. 무슨일이 일어나더라도!
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // 특정 부분이 변화할 때만 코드를 실행시키고 싶으면 useEffect의 []에 변화하는 부분을 넣어주자.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
      console.log("I run when 'counter' changes.");
    }, [counter]);
  useEffect(() => {
      console.log("I run when 'keyword' & 'counter' changes.");
    }, [keyword, counter]);
  // dependency는 array의 형태이기 때문에 여러개의 값을 줄 수 있고,
    // array의 값 중 하나라도 변하면 useEffect의 함수가 실행된다.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search..."
      />
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text="안뇽" />
      <hr />
      <button onClick={onClick}>click me</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
