import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
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

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,76,129,0.75), rgba(15,76,129,0.75)), url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <Image
            src="/images/logo-lebong-new.png"
            alt="Logo Lebong"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />

          <h1 className="text-5xl md:text-7xl font-bold">
            LUMBUNG DATA
          </h1>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            EKONOMI LEBONG
          </h2>

          <p className="text-xl md:text-2xl">
            Data Terintegrasi, Kebijakan Berkualitas
          </p>

          <p className="mt-4 max-w-3xl mx-auto">
            Pusat Data Terpadu Bagian Perekonomian dan
            Sumber Daya Alam Kabupaten Lebong
          </p>

        </div>
      </section>
      {/* TENTANG PORTAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Tentang Portal
          </h2>

          <p className="text-lg leading-8">
            Lumbung Data Ekonomi Lebong adalah platform data resmi
            milik Pemerintah Kabupaten Lebong yang dikelola oleh
            Bagian Perekonomian dan SDA Sekretariat Daerah
            Kabupaten Lebong.
          </p>
        </div>
      </section>

      {/* LAYANAN UTAMA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Layanan Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <a href="/lumbung-data">
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold">
                  Lumbung Data
                </h3>
              </div>
            </a>

            <a href="/arsip-digital">
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold">
                  Arsip Digital
                </h3>
              </div>
            </a>

            <a href="/data-makro">
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold">
                  Data Makro
                </h3>
              </div>
            </a>

            <a href="/e-form">
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold">
                  E-Form
                </h3>
              </div>
            </a>

            <a
  href="https://drive.google.com/file/d/1DK6hz6EzxGvWBJ_jgizxk2w-ytFHCRGk/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
    <div className="text-5xl mb-4">🎥</div>
    <h3 className="text-xl font-bold">
      Video Tutorial
    </h3>
  </div>
</a>

      
          </div>
        </div>
      </section>
    </main>
  );
}