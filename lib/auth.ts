// lib/auth.ts

// Simulação de banco de dados
const credentials = {
  users: [
    {
      username: "admin",
      password: "admin123",
      email: "admin@example.com",
    },
    {
      username: "user",
      password: "user123",
      email: "user@example.com",
    },
    {
      username: "teste",
      password: "teste123",
      email: "teste@example.com",
    },
  ],
};

export interface User {
  username: string;
  password: string;
  email: string;
}

// Autenticação do usuário
export const authenticateUser = async (
  username: string,
  password: string
): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = credentials.users.find(
    (u) => u.username === username && u.password === password
  );

  return !!user;
};

// Registro de novo usuário
export const registerUser = async (
  username: string,
  password: string,
  email: string
): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const existingUser = credentials.users.find(
    (u) => u.username === username || u.email === email
  );

  if (existingUser) return false;

  credentials.users.push({ username, password, email });
  console.log("Novo usuário cadastrado:", { username, email });


  return true;
};

// Verifica se está autenticado
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("auth_token");
};

// Realiza login e salva nome do usuário
export const login = (token: string, username: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("auth_token", token);
  localStorage.setItem("auth_user", username);
};

// Logout
export const logout = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("auth_token");
  localStorage.removeItem("auth_user");
};

// Recupera o nome do usuário logado
export const getLoggedUser = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_user");
};
