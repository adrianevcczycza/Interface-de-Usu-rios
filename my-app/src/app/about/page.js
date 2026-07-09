export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">
            Sobre o projeto
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Aplicação de perfis fictícios com Next.js
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600">
            Esta aplicação foi desenvolvida como prática de Front-End com
            Next.js. O objetivo do projeto é consumir a API pública Random User
            Generator e exibir perfis fictícios em uma interface organizada,
            responsiva e baseada em componentes reutilizáveis.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                O que foi praticado
              </h2>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Estruturação de páginas e rotas com Next.js</li>
                <li>• Consumo de API pública</li>
                <li>• Componentização da interface</li>
                <li>• Renderização de listas dinâmicas</li>
                <li>• Página de detalhes por usuário</li>
                <li>• Organização visual com Tailwind CSS</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Tecnologias utilizadas
              </h2>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Next.js</li>
                <li>• React</li>
                <li>• Tailwind CSS</li>
                <li>• Random User Generator API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
