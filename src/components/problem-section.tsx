
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kewalahan Menganalisis Ribuan Ulasan Secara Manual?
          </h2>
          <p className="text-lg text-muted-foreground">
            Mayoritas pengembang aplikasi menghadapi tantangan yang sama dalam mengelola dan menganalisis feedback pengguna.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-quicktify-primary/30">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Analisis Manual yang Melelahkan</h3>
              <p className="text-muted-foreground">
                Apakah Anda kesulitan memahami sentimen pengguna dari ratusan komentar setiap hari? Proses manual membutuhkan waktu berjam-jam dan rentan terhadap kesalahan.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-quicktify-primary/30">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Ulasan Spam Merusak Data</h3>
              <p className="text-muted-foreground">
                Bingung membedakan ulasan asli dan spam yang merusak reputasi aplikasi Anda? Tanpa filter otomatis, analisis Anda bisa menjadi tidak akurat.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-quicktify-primary/30">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Prediksi Performa Kompleks</h3>
              <p className="text-muted-foreground">
                Ingin tahu bagaimana performa aplikasi Anda di masa depan tanpa analisis yang rumit? Prediksi manual hampir mustahil dilakukan tanpa AI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
