export default function Section({ id, children }) {
  return (
    <section 
      id={id} 
      className="relative min-h-screen flex flex-col items-center justify-center box-border font-reenieBeanie overflow-hidden space-y-10 py-8 md:py-16 lg:py-24 xl:py-32"
    >
      {children}
    </section>
  );
} 