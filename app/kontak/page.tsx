export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Kontak
          </h1>

          <p className="mt-4 text-xl">
            Hubungi Pengelola Lumbung Data Ekonomi Lebong
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white p-10 rounded-xl shadow">

          <h2 className="text-3xl font-bold mb-8">
            Informasi Kontak
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold">Alamat</h3>
              <p>
                Bagian Perekonomian dan SDA
                Sekretariat Daerah Kabupaten Lebong
              </p>
              <p>
                Tubei, Kabupaten Lebong, Bengkulu
              </p>
            </div>

            <div>
              <h3 className="font-bold">Email</h3>
              <p>
                lumbungdataekonomilebong@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-bold">Jam Pelayanan</h3>
              <p>
                Senin - Jumat
              </p>
              <p>
                08.00 - 16.00 WIB
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}