"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";

import { isAuthenticated, logout, getLoggedUser } from "@/lib/auth";

const Dashboard = () => {
  const { push } = useRouter();
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // Evita execução do lado do servidor
    if (typeof window !== "undefined") {
      if (!isAuthenticated()) {
        push("/");
      } else {
        const storedUsername = getLoggedUser();
        setUsername(storedUsername || "Usuário");
      }
    }
  }, [push]);

  const handleLogout = () => {
    logout();
    push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="gradient-text from-secondary-purple to-primary-purple">
                Capivara AI
              </span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                <User size={20} />
                <span>{username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-purple transition-colors"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Bem-vindo ao Dashboard{username ? `, ${username}` : ""}!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Você está logado com sucesso. Esta é uma página protegida.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 text-blue-800 dark:text-blue-200">
              Aproveite a Capivara AI!
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
