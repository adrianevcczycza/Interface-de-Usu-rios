import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-2xl font-extrabold text-slate-900">
          UserList
        </Link>

        <nav className="flex items-center gap-6 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-blue-600">
            Usuários
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            Sobre o Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}
