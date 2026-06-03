export default function ArsipDigitalPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Arsip Digital
          </h1>

          <p className="mt-4 text-xl">
            Penyimpanan dan Arsip Dokumen Perekonomian Kabupaten Lebong
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Data Tahun 2026
            </h2>

            <a
              href="https://drive.google.com/drive/folders/15OMg27RnCLz-K_ccteBj6-0YdhbN-cbi"
              target="_blank"
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Buka Arsip
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Data Tahun 2025
            </h2>

            <a
              href="https://drive.google.com/drive/folders/1J-jvqd155Csaws1SnfGapKzQPgtlzx9-"
              target="_blank"
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Buka Arsip
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Data Tahun 2024
            </h2>

            <a
              href="https://drive.google.com/drive/folders/1_m9EikREyR270R_ltExJ6QITggTXZ9vc"
              target="_blank"
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Buka Arsip
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Sebelum Tahun 2024
            </h2>

            <a
              href="https://drive.google.com/drive/folders/1wNkQO5VGR897I7ygqNbFczNVjb23SYn8"
              target="_blank"
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Buka Arsip
            </a>
          </div>

        </div>

      </section>

    </main>
  );
}