import Image from "next/image";
import StarryBackground from "../components/StarryBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      <StarryBackground />
      <Image className="w-96 rounded-xl shadow-lg relative z-10" src="/alex-athena-1.jpg" alt="Alex and Athena" width={400} height={400}/>
      <h1 className="text-4xl text-slate-50 mt-8 font-bold font-reenieBeanie relative z-10">Coming Soon</h1>
    </main>
  );
}