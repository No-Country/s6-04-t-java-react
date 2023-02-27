import "./App.css";
import { useEffect, useState } from "react";
import { Request, Home, Login, Expenses } from "./pages/index";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { increment } from "./store/slices/counter.slice";
import { Amenities } from "./pages/index";
import MessageHistory from "./pages/message/MessageHistory";
import MenuLogin from "./pages/login/MenuLogin";
import { AuthContext } from "./context/authContext";
import PrivateLayout from "./layouts/PrivateLayout";
import Main from "./pages/main/Main";
import { checkBroadcastToLogOutInAllTabs, checkToken } from "./service/auth";
import Statistics from "./pages/statistics/Statistics";
import Billing from "./pages/billing/Billing";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUp from "./pages/signup/SignUp";

function App() {
  const navigate = useNavigate();
  const checkUserToken = checkToken();
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  useEffect(() => {
    checkBroadcastToLogOutInAllTabs((url: any) => navigate(url));
  }, []);
  const queryclient = new QueryClient();
  return (
    <AuthContext.Provider
      value={{ checkUserToken, isLoadingUser, setIsLoadingUser }}
    >
      <QueryClientProvider client={queryclient}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
            <Route path="/billing" element={<Billing />} />
          <Route element={<PrivateLayout />}>
            <Route path="/request" element={<Request />} />
            <Route path="/main" element={<Main />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/message" element={<MessageHistory />} />
            <Route path="/statistics" element={<Statistics />} />

            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
