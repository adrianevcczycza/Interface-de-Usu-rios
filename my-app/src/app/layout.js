import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "UserList",
  description: "Perfis fictícios com Next.js e Random User API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
