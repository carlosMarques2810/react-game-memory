import { Outlet } from "react-router-dom";
import Context from './components/context/Context';

function App() {

  return (
    <Context>
      <Outlet />
    </Context>
  );
}

export default App;