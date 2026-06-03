export default function DataMakroPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Informasi Data Makro BPS
          </h1>

          <p className="mt-4 text-xl">
            Referensi Data Statistik Kabupaten Lebong
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white p-10 rounded-xl shadow">

          <h2 className="text-3xl font-bold mb-4">
            Data Makro Kabupaten Lebong
          </h2>

          <p className="mb-8 text-lg">
            Informasi data makro resmi yang bersumber dari
            Badan Pusat Statistik Kabupaten Lebong.
          </p>

          <a
            href="https://docs.google.com/spreadsheets/d/1zpreStwapLftb2LrQXiFZK15IK7LJ4rpe-sGOagSUSk/edit?usp=sharing"
            target="_blank"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            Buka Data Makro BPS
          </a>

        </div>

      </section>

    </main>
  );
}