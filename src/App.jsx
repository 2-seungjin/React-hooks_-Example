import React from 'react';
import MainLayout from './layout/layout';
import { Route, Routes } from 'react-router';
import StateCounter from './hooks/useState/StateCounter';
import Home from './pages';
import StateInputs from './hooks/useState/StateInputs';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/state/1'} element={<StateCounter />} />
        <Route path={'/state/2'} element={<StateInputs />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

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
