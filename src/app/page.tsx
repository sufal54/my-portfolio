import Baner from "@/components/Baner";
import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-x-hidden select-none">
      <header className="w-full h-16 fixed top-0 bg-slate-900 z-50 overflow-hidden">
        <Navbar />
      </header>
      <main className="w-full h-full overflow-hidden">
        <Baner />
        <DashBoard />
      </main>
      <footer className="w-full h-60 mt-4 p-4 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <Footer />
      </footer>
    </div>
  );
}
