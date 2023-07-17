import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  // useEffect는 코드가 딱 한번만 실행될 수 있도록 보호해줌. 무슨일이 일어나더라도!
  useEffect(iRunOnlyOnce, []);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text="안뇽" />
      <hr />
      <button onClick={onClick}>click me</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
