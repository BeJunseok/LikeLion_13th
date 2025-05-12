import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mypage from "./pages/MyPage";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen flex justify-center p-[10px]">
        <div className="w-full max-w-[1200px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows/:id" element={<Detail />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
