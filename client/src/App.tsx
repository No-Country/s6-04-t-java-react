import "./App.css";
import { useEffect, useState } from "react";
import { Request, Home, Login } from "./pages/index";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { increment } from "./store/slices/counter.slice";
import ExpensesHistory from "./pages/expenses/ExpensesHistory";
import AmenitiesInfo from "./pages/amenities/AmenitiesInfo";
import MessageHistory from "./pages/message/MessageHistory";
import MenuLogin from "./pages/login/MenuLogin";
import NewUser from "./pages/login/NewUser";
import { AuthContext } from "./context/authContext";
import PrivateLayout from "./layouts/PrivateLayout";
import Main from "./pages/main/Main";
import { checkBroadcastToLogOutInAllTabs, checkToken } from "./service/auth";

function App() {
  const navigate = useNavigate();
  const checkUserToken = checkToken();

  useEffect(() => {
    checkBroadcastToLogOutInAllTabs((url: any) => navigate(url));
  }, []);

  return (
    <AuthContext.Provider value={{ checkUserToken }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateLayout />}>
          <Route path="/request" element={<Request />} />
          <Route path="/main" element={<Main />} />
          <Route path="/expenses" element={<ExpensesHistory />} />
          <Route path="/amenities" element={<AmenitiesInfo />} />
          <Route path="/message" element={<MessageHistory />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
