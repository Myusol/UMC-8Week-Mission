import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ProgramDetail from "./pages/ProgramDetail";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { Provider } from 'react-redux'; // Redux의 Provider를 임포트
import store from './pages/redux/store'; // Redux 스토어를 임포트

function App() {
  return (
    <Provider store={store}>
      <div className="root-wrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />          
            <Route path="/Movies/:title" element={<ProgramDetail />} />
            <Route path="/TV" element={<TV />} />
            <Route path="/Tvs/:title" element={<ProgramDetail />} />
            <Route path="/Celebrity" element={<Celebrity />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;