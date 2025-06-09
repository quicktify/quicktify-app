
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, AlertCircle, TrendingUp, Code } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fitur Unggulan Quicktify untuk Pertumbuhan Aplikasi Anda
          </h2>
          <p className="text-lg text-muted-foreground">
            Solusi lengkap untuk memahami pengguna dan meningkatkan performa aplikasi Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-quicktify-primary/30 overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-quicktify-primary to-quicktify-accent"></div>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-quicktify-primary/20 p-3 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-quicktify-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Analisis Sentimen & Emosi</h3>
                  <p className="text-muted-foreground mb-4">
                    Pahami perasaan pengguna Anda secara mendalam. Visualisasikan persentase sentimen (positif, negatif, netral) dan emosi (misalnya, gembira, marah, sedih) melalui grafik interaktif dan <em>word cloud</em> yang intuitif.
                  </p>
                  <div className="mt-4 bg-muted/50 rounded-lg p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 text-sm font-medium">Analisis Sentimen</div>
                        <div className="flex gap-2">
                          <div className="h-20 w-1/3 bg-green-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-3/4 bg-green-400/40 rounded-b-lg"></div>
                            <div className="absolute top-2 left-0 right-0 text-center text-xs font-medium">Positif</div>
                          </div>
                          <div className="h-20 w-1/3 bg-yellow-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-1/3 bg-yellow-400/40 rounded-b-lg"></div>
                            <div className="absolute top-2 left-0 right-0 text-center text-xs font-medium">Netral</div>
                          </div>
                          <div className="h-20 w-1/3 bg-red-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-1/5 bg-red-400/40 rounded-b-lg"></div>
                            <div className="absolute top-2 left-0 right-0 text-center text-xs font-medium">Negatif</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-2 text-sm font-medium">Analisis Emosi</div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 bg-blue-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-4/6 bg-blue-400/40 rounded-b-lg"></div>
                            <div className="absolute top-1 left-0 right-0 text-center text-xs">Neutral</div>
                          </div>
                          <div className="h-12 bg-green-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-5/6 bg-green-400/40 rounded-b-lg"></div>
                            <div className="absolute top-1 left-0 right-0 text-center text-xs">Happy</div>
                          </div>
                          <div className="h-12 bg-red-500/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-2/6 bg-red-500/40 rounded-b-lg"></div>
                            <div className="absolute top-1 left-0 right-0 text-center text-xs">Anger</div>
                          </div>
                          <div className="h-12 bg-purple-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-1/6 bg-purple-400/40 rounded-b-lg"></div>
                            <div className="absolute top-1 left-0 right-0 text-center text-xs">Fear</div>
                          </div>
                          <div className="h-12 bg-gray-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-3/6 bg-gray-400/40 rounded-b-lg"></div>
                            <div className="absolute top-1 left-0 right-0 text-center text-xs">Sad</div>
                          </div>
                          <div className="h-12 bg-pink-400/20 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 w-full h-4/6 bg-pink-400/40 rounded-b-lg"></div>
                            <div className="absolute top-1 left-0 right-0 text-center text-xs">Love</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs py-1 px-2 bg-quicktify-primary/20 rounded-full">baik</span>
                        <span className="text-xs py-1 px-2 bg-quicktify-primary/30 rounded-full">keren</span>
                        <span className="text-xs py-1 px-2 bg-quicktify-primary/40 rounded-full">mantap</span>
                        <span className="text-xs py-1 px-2 bg-quicktify-primary/20 rounded-full">bagus</span>
                        <span className="text-xs py-1 px-2 bg-quicktify-primary/30 rounded-full">suka</span>
                        <span className="text-xs py-1 px-2 bg-quicktify-primary/10 rounded-full">berfungsi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-quicktify-primary/30 overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-quicktify-primary to-quicktify-accent"></div>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-quicktify-primary/20 p-3 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-quicktify-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Deteksi Spam</h3>
                  <p className="text-muted-foreground mb-4">
                    Saring kebisingan secara otomatis. Identifikasi dan isolasi ulasan yang berpotensi spam untuk menjaga integritas data analisis Anda.
                  </p>
                  <div className="mt-4 bg-muted/50 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-red-400/20 rounded-lg">
                        <div className="text-xs">solusi masalah keuangan anda! dana cair cepat tanpa jaminan! wa ke 0877xxxxxxxx</div>
                        <div className="text-xs font-medium bg-red-400/30 py-1 px-2 rounded">Explicit Spam</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-orange-400/20 rounded-lg">
                        <div className="text-xs">mengapa lagi ini hmmbikin boros kuota ga ya?</div>
                        <div className="text-xs font-medium bg-orange-400/30 py-1 px-2 rounded">Irrelevant</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-red-400/20 rounded-lg">
                        <div className="text-xs">KERJA SAMPINGAN GAJI HARIAN! CUKUP MAIN GAME BISA DAPET DUIT!</div>
                        <div className="text-xs font-medium bg-red-400/30 py-1 px-2 rounded">Explicit Spam</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-orange-400/20 rounded-lg">
                        <div className="text-xs">enak dipake sambil rebahan hehe</div>
                        <div className="text-xs font-medium bg-orange-400/30 py-1 px-2 rounded">Irrelevant</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-red-400/20 rounded-lg">
                        <div className="text-xs">jual akun netflix premium murah legal garansi! cuma 20rb/bulan!</div>
                        <div className="text-xs font-medium bg-red-400/30 py-1 px-2 rounded">Explicit Spam</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-orange-400/20 rounded-lg">
                        <div className="text-xs">lagi nonton drakor apa nih gaes rekomen dong?</div>
                        <div className="text-xs font-medium bg-orange-400/30 py-1 px-2 rounded">Irrelevant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-quicktify-primary/30 overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-quicktify-primary to-quicktify-accent"></div>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-quicktify-primary/20 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-quicktify-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Estimasi Rating</h3>
                  <p className="text-muted-foreground mb-4">
                    Dapatkan perkiraan rating aplikasi Anda berdasarkan atribut-atribut yang Anda masukkan, tanpa perlu menunggu data historis terkumpul.
                  </p>
                  <div className="mt-4 bg-muted/50 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/20 dark:bg-black/20 p-2 rounded-md">
                          <div className="text-xs mb-1 text-muted-foreground">Feature 1</div>
                          <div className="h-6 w-full rounded bg-quicktify-primary/20"></div>
                        </div>
                        <div className="bg-white/20 dark:bg-black/20 p-2 rounded-md">
                          <div className="text-xs mb-1 text-muted-foreground">Feature 2</div>
                          <div className="h-6 w-full rounded bg-quicktify-primary/20"></div>
                        </div>
                        <div className="bg-white/20 dark:bg-black/20 p-2 rounded-md">
                          <div className="text-xs mb-1 text-muted-foreground">Feature 3</div>
                          <div className="h-6 w-full rounded bg-quicktify-primary/20"></div>
                        </div>
                        <div className="bg-white/20 dark:bg-black/20 p-2 rounded-md">
                          <div className="text-xs mb-1 text-muted-foreground">Feature 4</div>
                          <div className="h-6 w-full rounded bg-quicktify-primary/20"></div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-4 gap-3">
                        <div className="text-center">
                          <div className="text-sm font-medium mb-1">Estimasi Rating</div>
                          <div className="h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-br from-quicktify-accent to-quicktify-primary text-xl font-bold">4.7</div>
                        </div>
                        <div className="flex">
                          <div className="text-yellow-400">★★★★</div>
                          <div className="text-yellow-400">★</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-quicktify-primary/30 overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-quicktify-primary to-quicktify-accent"></div>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-quicktify-primary/20 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-quicktify-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ringkasan Insight Cerdas (didukung Gemini 2.0 Flash)</h3>
                  <p className="text-muted-foreground mb-4">
                    Dapatkan rangkuman eksekutif dari semua temuan analisis. Teknologi AI Gemini kami menyajikan poin-poin penting dan rekomendasi actionable secara otomatis.
                  </p>
                  <div className="mt-4 bg-muted/50 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-quicktify-accent/30 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-quicktify-accent"></div>
                        </div>
                        <div className="h-3 flex-1 bg-quicktify-primary/20 rounded animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-quicktify-accent/30 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-quicktify-accent"></div>
                        </div>
                        <div className="h-3 flex-1 bg-quicktify-primary/20 rounded animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-quicktify-accent/30 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-quicktify-accent"></div>
                        </div>
                        <div className="h-3 flex-1 bg-quicktify-primary/20 rounded animate-pulse"></div>
                      </div>
                      <div className="mt-2 p-2 border border-dashed border-quicktify-accent/40 rounded bg-quicktify-accent/10">
                        <p className="text-xs text-center font-medium">Rekomendasi Perbaikan Aplikasi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
