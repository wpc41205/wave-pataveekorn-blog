export function Container({ children, className = "" }) {
  return (
    <section className={`flex flex-col py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto ${className}`}>
      {children}
    </section>
  );
}
