import { BroadcastChannel } from 'broadcast-channel';
import { postRequest } from './httpRequest';
import { getURLComplement } from './urlComplements';

const sessionChannel = new BroadcastChannel('logout');
// let accesWithoutToken = false;

const getURL = getURLComplement();

interface Credentials {
  email: string;
  password: string;
}

const login = (credentials: Credentials, setIsLoadingUser: any, setIsInvalidCredentials: any) => {
  setIsLoadingUser(true);
  setIsInvalidCredentials(false);
  postRequest(credentials, getURL.login()).then(
    ({ jwt }: any) => {
      localStorage.setItem("token", jwt);
      setIsLoadingUser(false);
      sessionChannel.postMessage("Login");
    }
  ).catch((err) => {
    if (err) { setIsInvalidCredentials(true); setIsLoadingUser(false); }
  });
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
      navigateTo();
    }

    if (e === 'Login') {
      navigateTo();
    }
  };
};

export { login, checkToken, logout, checkBroadcastToLogOutInAllTabs };