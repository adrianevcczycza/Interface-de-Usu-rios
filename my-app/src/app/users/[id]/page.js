import Image from "next/image";
import ActionButton from "../../../components/ActionButton";
import InfoCard from "../../../components/InfoCard";

export default async function UserDetailsPage({ searchParams }) {
  const params = await searchParams;

  const user = {
    fullName: params.fullName || "Usuário não encontrado",
    email: params.email || "-",
    phone: params.phone || "-",
    cell: params.cell || "-",
    city: params.city || "-",
    state: params.state || "-",
    country: params.country || "-",
    nationality: params.nationality || "-",
    age: params.age || "-",
    image: params.image || "https://via.placeholder.com/200",
  };

  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <ActionButton href="/" variant="link">
            ← Voltar para usuários
          </ActionButton>

          <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Image
                src={user.image}
                alt={`Foto de ${user.fullName}`}
                width={160}
                height={160}
                className="h-40 w-40 rounded-[28px] object-cover"
              />

              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">
                Nacionalidade {user.nationality}
              </p>

              <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-slate-900">
                {user.fullName}
              </h1>

              <p className="mt-5 break-all text-lg text-slate-600">
                {user.email}
              </p>
            </aside>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Informações do perfil
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <InfoCard label="Telefone" value={user.phone} />
                <InfoCard label="Celular" value={user.cell} />
                <InfoCard label="Cidade" value={user.city} />
                <InfoCard label="Estado" value={user.state} />
                <InfoCard label="País" value={user.country} />
                <InfoCard label="Idade" value={`${user.age} anos`} />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

