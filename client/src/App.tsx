import "./App.css";
import { useEffect, useState } from "react";
import { Request, Home, Login } from "./pages/index";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { increment } from "./store/slices/counter.slice";
import ExpensesHistory from "./pages/expenses/ExpensesHistory";
import AmenitiesInfo from "./pages/amenities/AmenitiesInfo";
import MessageHistory from "./pages/message/MessageHistory";
import MenuLogin from "./pages/login/MenuLogin";
import NewUser from "./pages/login/NewUser";
import { AuthContext } from "./context/authContext";
import PrivateLayout from "./layouts/PrivateLayout";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const verifyUserFromLocalStorage = () => {    
    return localStorage.getItem("isUserLogged") === "true";
  };
  useEffect(() => {
    if (verifyUserFromLocalStorage()) {
      setIsUserLogged(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isUserLogged, setIsUserLogged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateLayout />}>
            <Route path="/request" element={<Request />} />
            <Route path="/expenses" element={<ExpensesHistory />} />
            <Route path="/amenities" element={<AmenitiesInfo />} />
            <Route path="/message" element={<MessageHistory />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
