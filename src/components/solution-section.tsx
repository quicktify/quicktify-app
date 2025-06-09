export function SolutionSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quicktify: Solusi Cerdas untuk Analisis Ulasan Aplikasi Anda
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Platform yang dirancang khusus untuk membantu pengembang aplikasi
            mendapatkan insight berharga tanpa effort berlebih.
          </p>

          <div className="relative p-6 rounded-lg glass-effect mb-12">
            <p className="text-lg md:text-xl">
              Hanya dengan memasukkan{' '}
              <span className="font-semibold text-quicktify-primary">
                link aplikasi Google Play Store
              </span>
              ,
              <span className="font-semibold text-quicktify-primary">
                {' '}
                ID aplikasi
              </span>
              , atau
              <span className="font-semibold text-quicktify-primary">
                {' '}
                file CSV ulasan
              </span>{' '}
              Anda, dapatkan analisis komprehensif secara otomatis dan cepat.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <div className="flex-1 w-full md:w-auto">
              <div className="h-full flex flex-col justify-center p-6 rounded-lg bg-secondary/50">
                <div className="mx-auto my-4 w-16 h-16 flex items-center justify-center rounded-full bg-quicktify-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-quicktify-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Cepat
                </h3>
                <p className="text-center text-muted-foreground">
                  Analisis ratusan ulasan dalam hitungan detik
                </p>
              </div>
            </div>

            <div className="flex-1 w-full md:w-auto">
              <div className="h-full flex flex-col justify-center p-6 rounded-lg bg-secondary/50">
                <div className="mx-auto my-4 w-16 h-16 flex items-center justify-center rounded-full bg-quicktify-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-quicktify-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Akurat
                </h3>
                <p className="text-center text-muted-foreground">
                  Didukung teknologi AI dan machine learning canggih
                </p>
              </div>
            </div>

            <div className="flex-1 w-full md:w-auto">
              <div className="h-full flex flex-col justify-center p-6 rounded-lg bg-secondary/50">
                <div className="mx-auto my-4 w-16 h-16 flex items-center justify-center rounded-full bg-quicktify-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-quicktify-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Actionable
                </h3>
                <p className="text-center text-muted-foreground">
                  Rekomendasi langkah yang dapat diambil untuk peningkatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
