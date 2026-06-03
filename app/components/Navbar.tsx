import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo-lebong-new.png"
            alt="Logo Lebong"
            width={40}
            height={40}
          />

          <div>
            <div className="font-bold text-blue-900">
              LUMBUNG DATA EKONOMI LEBONG
            </div>

            <div className="text-xs text-gray-500">
              Kabupaten Lebong
            </div>
          </div>

        </div>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="/">Beranda</a>
          <a href="/profil">Profil</a>
          <a href="/lumbung-data">Lumbung Data</a>
          <a href="/arsip-digital">Arsip Digital</a>
          <a href="/data-makro">Data Makro</a>
          <a href="/e-form">E-Form</a>
          <a href="/kontak">Kontak</a>
        </div>

      </div>
    </nav>
  );
}