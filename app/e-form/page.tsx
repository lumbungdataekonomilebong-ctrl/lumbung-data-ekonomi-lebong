export default function EFormPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            E-Form
          </h1>

          <p className="mt-4 text-xl">
            Layanan Permintaan Data dan Informasi
            Lumbung Data Ekonomi Lebong
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white p-10 rounded-2xl shadow-md">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Form Permintaan Data
          </h2>

          <p className="text-gray-700 leading-8 mb-8">
            Pengguna dapat mengajukan permintaan data melalui
            formulir online yang telah disediakan. Setiap
            permohonan akan diverifikasi dan diproses oleh
            pengelola Lumbung Data Ekonomi Lebong.
          </p>

          {/* FORM */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">

            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Formulir Online
            </h3>

            <p className="text-gray-700 mb-6">
              Klik tombol berikut untuk mengakses formulir
              permintaan data.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0YUDZ545eKmX-CMvsyeG1NVH-iJMHCr1OMd1xA6XaV1tajw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
            >
              📝 Isi Formulir Permintaan Data
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}