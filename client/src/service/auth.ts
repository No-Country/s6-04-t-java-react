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
interface NewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  apartmentNumber: number;
  floor: string;
}

const signUp = (newUser: NewUser, setUserCreated: any, setIsRegisteringUser: any, setIsError: any) => {
  setIsRegisteringUser(true);
  setIsError(false);
  postRequest(newUser, getURL.register()).then(
    (res: any) => {
      setUserCreated(res.email, res.firstName, res.lastName, res.apartmentNumber, res.floor);
      setIsRegisteringUser(false);
    }
  ).catch((err) => {
    if (err) { setIsError(true); setIsRegisteringUser(false); }
  });
};

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

export { signUp, login, checkToken, logout, checkBroadcastToLogOutInAllTabs };