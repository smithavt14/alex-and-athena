export default function Section({ id, children }) {
  return (
    <section 
      id={id} 
      className="min-h-screen flex flex-col items-center justify-center relative box-border font-reenieBeanie overflow-hidden space-y-4"
    >
      {children}
    </section>
  );
} 