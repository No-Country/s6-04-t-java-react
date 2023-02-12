import { BroadcastChannel } from 'broadcast-channel';

const sessionChannel = new BroadcastChannel('logout');

const login = () => {
  localStorage.setItem("token", "user_token_from_API");
  sessionChannel.postMessage("Login");

};

const checkToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const logout = () => {
  sessionChannel.postMessage("Logout");
  localStorage.removeItem("token");
};

const checkBroadcastToLogOutInAllTabs = (navigateTo: any) => {

  sessionChannel.onmessage = (e) => {
    if (e === 'Logout') {
      navigateTo();
    }
    // sessionChannel.close();

    if (e === 'Login') {
      navigateTo(0); // (0) means Reload page    
    }
  };
};

export { login, checkToken, logout, checkBroadcastToLogOutInAllTabs };