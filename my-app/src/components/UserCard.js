import Image from "next/image";
import Link from "next/link";

export default function UserCard({ user }) {
  const query = new URLSearchParams({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    cell: user.cell,
    city: user.city,
    state: user.state,
    country: user.country,
    nationality: user.nationality,
    age: String(user.age),
    image: user.imageLarge,
  }).toString();

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-4">
        <Image
          src={user.imageMedium}
          alt={`Foto de ${user.fullName}`}
          width={80}
          height={80}
          className="h-20 w-20 rounded-2xl object-cover"
        />

        <div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-blue-600">
            {user.nationality}
          </span>

          <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900">
            {user.fullName}
          </h3>

          <p className="mt-1 break-all text-sm text-slate-600">{user.email}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
        <span className="rounded-full bg-slate-100 px-3 py-1">{user.city}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{user.state}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{user.age} anos</span>
      </div>

      <Link
        href={`/users/${user.id}?${query}`}
        className="mt-5 inline-flex text-sm font-extrabold text-blue-600 hover:text-blue-800"
      >
        Ver perfil
      </Link>
    </article>
  );
}
