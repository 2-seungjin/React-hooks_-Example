import React  from "react";
import MainLayout from './layout/layout'

const App = () => {
   return (
    < MainLayout />
   );
 }

 export default App;


// useEffect3 화면 가리기, 보이기 렌더링 직후 특정값 변경시 이벤트
//function App() {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={() => {setVisible(!visible)}}>
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr/>
//       {visible && <Effect3 />}
//     </div>
//   );
// }
// export default App