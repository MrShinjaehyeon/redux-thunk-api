import "./App.css";
import { Routes, Route } from "react-router-dom";
import MemberInfoPage from "./pages/MemberInfoPage";
import MemberListPage from "./pages/MemberListPage";
import MemberUpdatePage from "./pages/MemberUpdatePage";
import MemberCreatePage from "./pages/MemberCraete";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MemberListPage />} />
        <Route path="/member/:id" element={<MemberInfoPage />} />
        <Route path="/member/update/:id" element={<MemberUpdatePage />} />
        <Route path="/member/create" element={<MemberCreatePage />} />
      </Routes>
    </>
  );
}

export default App;
