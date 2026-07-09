export default function InfoCard({ label, value }) {
  return (
    <div className="rounded-3xl bg-slate-50 p-5">
      <p className="text-sm font-extrabold uppercase text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xl font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
