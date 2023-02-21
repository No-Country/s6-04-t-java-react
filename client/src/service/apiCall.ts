import client from "./client";

interface Credentials {
  email: string;
  password: string;
}

const loginToAPI =  async (credentials: Credentials) => {
  const { email, password } = credentials;
  const response = await client.post('/auth/login', { email, password });
  return response;
};

export { loginToAPI };