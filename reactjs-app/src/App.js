import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/App.css';
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/adminpage" element={<AdminPage />}></Route>
        <Route exact path="/detail/:id" element={<DetailPage />}></Route>
        <Route exact path="/edit/:id" element={<EditPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
