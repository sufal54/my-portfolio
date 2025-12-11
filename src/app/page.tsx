"use client";

import Baner from "@/components/Baner";
import DashBoard from "@/components/DashBoard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 select-none">
      <header className="w-full h-16 fixed top-0 bg-slate-900 z-50">
        <Navbar />
      </header>

      <main className="pt-16">
        <Baner />
        <DashBoard />
      </main>

      <footer className="w-full h-60 mt-10 p-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <Footer />
      </footer>
    </div>
  );
}
