import React,{useState} from "react";
import Effect3 from "./hooks/Effect3";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => {setVisible(!visible)}}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Effect3 />}
    </div>
  );
}

export default App;
