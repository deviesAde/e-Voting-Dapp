import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LucideVote, Shield, BarChart, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
     
      <section className="hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                RAKYAT MEMILIH
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium">
                Platform E-Voting Modern untuk Indonesia
              </h2>
              <p className="text-lg md:text-xl">
                Wujudkan demokrasi digital yang aman, transparan, dan dapat diakses oleh seluruh rakyat Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-white text-primary">
                    Daftar Sekarang
                  </Button>
                </Link>
                <Link href="/elections">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Lihat Pemilu Aktif
                  </Button>
                </Link>
              </div>
            </div>
          <div className="flex justify-center">
          <div className="relative h-72 w-72 md:h-96 md:w-96 group">
            <Image
              src="https://images.pexels.com/photos/8851517/pexels-photo-8851517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Voting illustration"
              fill
              className="object-cover rounded-full shadow-lg group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Platform e-voting kami dirancang dengan mengutamakan keamanan, transparansi, dan kemudahan penggunaan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/30 dark:bg-secondary/10 rounded-lg p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Keamanan Blockchain</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Menggunakan teknologi blockchain untuk menjamin keamanan, transparansi, dan integritas data suara.
              </p>
            </div>
            
            <div className="bg-secondary/30 dark:bg-secondary/10 rounded-lg p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Akses Universal</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Platform yang mudah diakses semua orang, termasuk pengguna dengan kebutuhan khusus atau keterbatasan akses internet.
              </p>
            </div>
            
            <div className="bg-secondary/30 dark:bg-secondary/10 rounded-lg p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <BarChart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hasil Realtime</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Visualisasi hasil perhitungan suara secara real-time dengan data yang terverifikasi dan transparant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cara Kerja
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proses pemilihan yang mudah dan aman dalam beberapa langkah sederhana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
                <div className="bg-primary text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Daftar</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Buat akun dengan NIK dan data diri yang valid.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
                <div className="bg-primary text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Verifikasi</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Verifikasi identitas melalui sistem keamanan berlapis.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
                <div className="bg-primary text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Pilih</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pilih kandidat secara rahasia dan aman.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary"></div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
                <div className="bg-primary text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Konfirmasi</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Terima konfirmasi bahwa suara Anda telah tercatat dengan aman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siap untuk Berpartisipasi?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Jadilah bagian dari revolusi demokrasi digital di Indonesia. Suara Anda adalah amanah untuk masa depan bangsa.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}