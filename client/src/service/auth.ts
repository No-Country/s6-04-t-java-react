import { BroadcastChannel } from 'broadcast-channel';
import { loginToAPI } from './apiCall';

const sessionChannel = new BroadcastChannel('logout');
// let accesWithoutToken = false;

interface Credentials {
  email: string;
  password: string;
}

const login = (credentials: Credentials, setIsLoadingUser: any) => {
  setIsLoadingUser(true);
  loginToAPI(credentials).then(
    ({ jwt }) => {
      localStorage.setItem("token", jwt);
      setIsLoadingUser(false);
      sessionChannel.postMessage("Login");
    }
  );
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  // if (!token) { accesWithoutToken = true; sessionChannel.postMessage("Logout"); }
  return token;
};

const logout = () => {
  sessionChannel.postMessage("Logout");
  localStorage.removeItem("token");
};

const checkBroadcastToLogOutInAllTabs = (navigateTo: any) => {

  sessionChannel.onmessage = (e) => {
    if (e === 'Logout') {
      // if (accesWithoutToken) { return }
      navigateTo(0);
    }

    if (e === 'Login') {
      navigateTo(0);
    }
  };
};

export { login, checkToken, logout, checkBroadcastToLogOutInAllTabs };