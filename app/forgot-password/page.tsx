// app/forgot-password/page.tsx
"use client";
import { useState } from "react";
import { Input, SubmitButton } from "@/components";
import ThemeToggle from "@/components/ThemeToggle";
import { X } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Digite um email válido.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center relative transition-colors">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md animate-fade-in space-y-6"
      >
        <h1 className="text-center font-bold text-[28px] md:text-[32px] hover:scale-[1.03] transition-all duration-500 cursor-default">
          Recuperar acesso na{" "}
          <span className="gradient-text from-secondary-purple to-primary-purple">
            Capivara AI
          </span>
        </h1>

        {!submitted ? (
          <>
            <label className="block text-base font-medium mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              title="Insira o email cadastrado"
              state={error ? "error" : "default"}
            />

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-800/20 border border-red-200 dark:border-red-500 rounded-lg flex items-center gap-2">
                <X size={16} className="text-red-500 flex-shrink-0" />
                <span className="text-red-700 dark:text-red-300 text-sm">
                  {error}
                </span>
              </div>
            )}

            <SubmitButton>Enviar link de recuperação</SubmitButton>
          </>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 dark:text-green-400 text-base font-medium">
              Enviamos instruções para o seu email, se ele estiver cadastrado.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Verifique sua caixa de entrada ou spam.
            </p>
          </div>
        )}
      </form>

      {/* Botão de tema no canto inferior direito */}
      <div className="absolute bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ForgotPassword;
