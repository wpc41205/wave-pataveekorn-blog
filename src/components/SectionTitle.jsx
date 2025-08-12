export function SectionTitle({ children, className = "" }) {
  return (
    <h1 className={`text-2xl font-bold mb-6 text-center sm:text-left ${className}`}>
      {children}
    </h1>
  );
}
