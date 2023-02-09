import client from "./client";

interface Credentials {
    username: string;
    password: string;
}

const login = (credentials: Credentials) => {
    const { username, password } = credentials;
    return client.post('/login/', { username, password }
    );
};

export {login}