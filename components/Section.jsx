export default function Section({ id, children }) {
  return (
    <section 
      id={id} 
      className="relative min-h-screen flex flex-col items-center justify-center box-border font-reenieBeanie overflow-hidden space-y-10"
    >
      {children}
    </section>
  );
} 