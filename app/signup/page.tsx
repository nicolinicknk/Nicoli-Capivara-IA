"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input, SubmitButton, Loader } from "@/components";
import { registerUser, isAuthenticated } from "@/lib/auth";
import { X } from "lucide-react";
import Toast from "@/components/Toast";
import PasswordStrength from "@/components/PasswordStrength";

const Signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [shakeUsername, setShakeUsername] = useState(false);
  const [shakeEmail, setShakeEmail] = useState(false);
  const [shakePassword, setShakePassword] = useState(false);
  const [shakeConfirmPassword, setShakeConfirmPassword] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    if (shakeUsername || shakeEmail || shakePassword || shakeConfirmPassword) {
      const timer = setTimeout(() => {
        setShakeUsername(false);
        setShakeEmail(false);
        setShakePassword(false);
        setShakeConfirmPassword(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [shakeUsername, shakeEmail, shakePassword, shakeConfirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // validações
    if (!username) {
      setError("O campo de usuário é obrigatório.");
      setShakeUsername(true);
      return;
    }

    if (!email) {
      setError("O campo de email é obrigatório.");
      setShakeEmail(true);
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Email inválido.");
      setShakeEmail(true);
      return;
    }

    if (!password) {
      setError("O campo de senha é obrigatório.");
      setShakePassword(true);
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      setShakePassword(true);
      return;
    }

    if (!confirmPassword) {
      setError("O campo de confirmação de senha é obrigatório.");
      setShakeConfirmPassword(true);
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      setShakePassword(true);
      setShakeConfirmPassword(true);
      return;
    }

    setLoading(true);
    try {
      const result = await registerUser(username, password, email);
      if (result) {
        setSuccess(true);
        setToastType("success");
        setToastMessage("Cadastro realizado com sucesso!");
        router.push("/login");
      } else {
        setToastType("error");
        setToastMessage("Usuário ou email já cadastrado.");
      }
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setToastType("error");
      setToastMessage("Erro inesperado ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage("")}
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md space-y-4 animate-fade-in relative"
      >
        <h1 className="text-center font-bold text-[28px] md:text-[32px]">
          Cadastre-se na{" "}
          <span className="gradient-text from-secondary-purple to-primary-purple">
            Capivara AI
          </span>
        </h1>

        <label htmlFor="username-input" className="block mt-8 mb-2 font-medium text-base">
          Usuário
        </label>
        <Input
          id="username-input"
          type="text"
          placeholder="Digite seu usuário"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          state={shakeUsername ? "error" : "default"}
          disabled={loading}
          className={shakeUsername ? "animate-shake" : ""}
        />

        <label htmlFor="email-input" className="block mt-8 mb-2 font-medium text-base">
          Email
        </label>
        <Input
          id="email-input"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          state={shakeEmail ? "error" : "default"}
          disabled={loading}
          className={shakeEmail ? "animate-shake" : ""}
        />

        <label htmlFor="password-input" className="block mt-8 mb-2 font-medium text-base">
          Senha
        </label>
        <Input
          id="password-input"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          state={shakePassword ? "error" : "default"}
          disabled={loading}
          className={shakePassword ? "animate-shake" : ""}
        />

        <PasswordStrength password={password} />

        <label htmlFor="confirm-password-input" className="block mt-8 mb-2 font-medium text-base">
          Confirme a Senha
        </label>
        <Input
          id="confirm-password-input"
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setError("");
          }}
          state={shakeConfirmPassword ? "error" : "default"}
          disabled={loading}
          className={shakeConfirmPassword ? "animate-shake" : ""}
        />

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
            <X size={16} className="text-red-500 flex-shrink-0" />
            <span className="text-red-700 text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <span className="text-green-700 text-sm">
              Cadastro realizado com sucesso! Redirecionando...
            </span>
          </div>
        )}

        <SubmitButton className="mt-8" disabled={loading}>
          Cadastrar
        </SubmitButton>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Já tem uma conta?{" "}
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-primary-purple hover:text-secondary-purple font-medium transition-colors"
          >
            Entrar
          </button>
        </div>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/40 rounded-xl">
            <Loader />
          </div>
        )}
      </form>
    </main>
  );
};

export default Signup;
