"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [nama, setNama] = useState("");
  const [tema, setTema] = useState("Luar Angkasa");
  const router = useRouter();

  const handleMasuk = (e) => {
    e.preventDefault();
    if (nama.trim() !== "") {
      localStorage.setItem("nama_peserta", nama);
      localStorage.setItem("tema_bg", tema);
      router.push("/lobby");
    }
  };

  return (
    <main className={`min-h-screen flex items-center justify-center relative overflow-hidden font-sans text-gray-800 transition-colors duration-1000 ${
      tema === "Luar Angkasa" ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-black" :
      tema === "Samudra" ? "bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-900" :
      "bg-gradient-to-t from-orange-300 via-pink-200 to-blue-200"
    }`}>
      {/* Background Animasi Sederhana */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>

      <div className="relative z-10 bg-white/90 backdrop-blur-md p-10 rounded-[40px] shadow-[12px_12px_24px_rgba(0,0,0,0.1),-12px_-12px_24px_rgba(255,255,255,0.8)] w-full max-w-md text-center border-4 border-white">
        <h1 className="text-4xl font-black text-indigo-500 mb-2">LabMath 🎮</h1>
        <p className="text-gray-500 font-bold mb-8">Masuk ke Arena Pembelajaran</p>

        <form onSubmit={handleMasuk} className="flex flex-col gap-6 text-left">
          <div>
            <label className="block font-bold text-gray-600 mb-2 ml-2">Nama Komandan</label>
            <input 
              type="text" 
              value={nama} 
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-4 rounded-3xl bg-[#f4f7fe] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] border-none outline-none font-bold text-gray-700 focus:shadow-[inset_8px_8px_16px_#c3cce0,inset_-8px_-8px_16px_#ffffff] transition-all"
              placeholder="Contoh: Budi Geming"
              maxLength={12}
              required
            />
          </div>

          <div>
            <label className="block font-bold text-gray-600 mb-2 ml-2">Pilih Dunia</label>
            <select 
              value={tema} 
              onChange={(e) => setTema(e.target.value)}
              className="w-full p-4 rounded-3xl bg-[#f4f7fe] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] border-none outline-none font-bold text-gray-700"
            >
              <option value="Luar Angkasa">🚀 Luar Angkasa</option>
              <option value="Samudra">🌊 Samudra Dalam</option>
              <option value="City">🏙️ Clay City</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full mt-2 bg-indigo-400 hover:bg-indigo-500 text-white py-4 rounded-3xl font-black text-lg active:scale-90 transition-all shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.8)]"
          >
            
            MULAI PETUALANGAN
          </button>
        </form>
      </div>
    </main>
  );
}