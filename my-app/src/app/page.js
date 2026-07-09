import UserCard from "../components/UserCard";
import ActionButton from "../components/ActionButton";
import { getUsers } from "../lib/users";

export default async function HomePage() {
  const users = await getUsers();

  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">
              Prática com API
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Perfis fictícios para praticar Next.js
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Esta aplicação consome a API Random User Generator para exibir
              perfis fictícios de usuários. O projeto foi desenvolvido para
              praticar rotas, componentização, consumo de API e organização de
              interface com Next.js.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ActionButton href="#usuarios" variant="primary">
                Ver usuários
              </ActionButton>

              <ActionButton href="/about" variant="secondary">
                Sobre o projeto
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" id="usuarios">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">
            Usuários
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Lista de perfis
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Os cards abaixo são gerados dinamicamente a partir da API Random
            User Generator.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
    </main>
  );
}
