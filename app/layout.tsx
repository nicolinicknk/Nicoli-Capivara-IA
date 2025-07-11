// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle"; 

export const metadata = {
  title: "Capivara AI",
  description: "Cadastro e login com tema claro/escuro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body>
        {/* tema  */}
        <Script
          id="theme-loader"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('darkMode');
                if (theme === 'true') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />

        {/* Conteúdo */}
        {children}

        {/* ThemeToggle fixado no canto inferior direito */}
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
