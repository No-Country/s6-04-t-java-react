import { BroadcastChannel } from 'broadcast-channel';

const sessionChannel = new BroadcastChannel('logout');
let accesWithoutToken = false;

const login = () => {
  localStorage.setItem("token", "user_token_from_API");
  sessionChannel.postMessage("Login");

};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (!token) { accesWithoutToken = true; sessionChannel.postMessage("Logout"); }
  return token;
};

const logout = () => {
  sessionChannel.postMessage("Logout");
  localStorage.removeItem("token");
};

const checkBroadcastToLogOutInAllTabs = (navigateTo: any) => {

  sessionChannel.onmessage = (e) => {
    if (e === 'Logout') {
      if (accesWithoutToken) { return; }
      navigateTo(0);
    }

    if (e === 'Login') {
      navigateTo(0);  
    }
  };
};

export { login, checkToken, logout, checkBroadcastToLogOutInAllTabs };