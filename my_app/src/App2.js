import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created!");
    // Cleanup function. 자주 쓰는 기능은 아님.
    return () => console.log("destroyed!");
    // component가 destroy될 때 뭔가 할 수 있도록 해준다.
    // useEffect의 첫 번째 argument는 function인데, 기존의 function을 작동시킨 뒤
    // 새로운 function을 return해 주는 것!!!!
  }, []);
  return <h1>Hello</h1>;
}

function App2() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App2;
