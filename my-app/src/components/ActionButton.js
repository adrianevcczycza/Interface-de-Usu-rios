import Link from "next/link";

export default function ActionButton({
  href,
 children,
  variant = "primary",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
    link: "px-0 py-0 text-blue-600 hover:text-blue-800",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
