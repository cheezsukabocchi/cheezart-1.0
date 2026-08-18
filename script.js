/**
 * CHEEZART - Main Application Logic
 */

// --- DATA MOCKUP: LEARNING HUB DENGAN KONTEN SUPER LENGKAP ---
const learningData = [
    // === BEGINNER ===
    {
        id: 1, title: "Mengenal Garis", level: "Beginner", time: "10 min",
        desc: "Pelajari cara membuat tarikan garis yang percaya diri, halus, dan tidak terputus-putus sebagai fondasi utama.",
        img: "https://placehold.co/400x200/fdf4ff/86198f?text=Mengenal+Garis",
        materi: {
            pengertian: "Garis adalah elemen paling dasar dalam seni rupa. Dalam menggambar, garis bukan sekadar coretan, melainkan cara kita mendefinisikan bentuk, batas, dan arah suatu objek. Garis bisa bersifat tegas, lembut, tebal, atau tipis, tergantung pada tekanan yang kita berikan saat menggambar. Menguasai garis adalah langkah pertama yang paling krusial sebelum kamu mempelajari teknik rumit lainnya.",
            mengapa: "Banyak pemula memulai dengan 'hairy lines' (garis yang terputus-putus dan digores berulang-ulang seperti bulu) karena takut membuat kesalahan secara langsung. Menguasai tarikan garis yang bersih dan sekali jalan (clean lines) akan membuat gambarmu terlihat jauh lebih profesional, rapi, dan mencerminkan rasa percaya diri seorang artist.",
            dasar: "Kamu perlu memahami kontrol tangan. Menggambar garis lurus atau melengkung yang panjang sebaiknya menggunakan poros lengan bawah atau siku, bukan sekadar memutar pergelangan tangan. Ini akan memberikan ruang gerak yang jauh lebih luwes.",
            langkah: [
                "Pegang alat gambarmu (pensil/stylus) dengan rileks. Jangan mencengkeram terlalu kuat.",
                "Posisikan ujung pena di titik awal, lalu lihat ke arah titik akhir tempat garis akan berhenti.",
                "Cobalah menarik garis lurus dari kiri ke kanan dalam satu tarikan napas.",
                "Lakukan hal yang sama untuk membuat garis melengkung atau lingkaran tanpa mengangkat pen/stylus.",
                "Lakukan ini berulang-ulang di kanvas kosong sebagai pemanasan."
            ],
            contoh: "Bayangkan kamu sedang memotong selembar kertas menggunakan gunting tajam dalam satu gerakan lurus (garis percaya diri). Bandingkan dengan menggunting sedikit demi sedikit secara ragu-ragu yang akan menghasilkan tepian kertas yang kasar (hairy lines).",
            tips: "Lakukan teknik 'Ghosting'! Buat gerakan mengambang di atas kanvas (tanpa menyentuhnya) beberapa kali sebelum benar-benar menggoreskan pena. Ini membantu otakmu memetakan arah garis sebelum dieksekusi.",
            kesalahan: [
                "Menggambar dengan cara digesek-gesek pendek (hairy lines).",
                "Memegang pensil terlalu dekat dengan ujungnya sehingga gerakan tangan menjadi sangat terbatas dan kaku.",
                "Mata selalu terpaku pada ujung pensil, bukan pada titik akhir tujuan garis."
            ],
            latihan: "Buka Practice Canvas. Cobalah penuhi kanvas dengan garis lurus vertikal dan horizontal yang sejajar (parallel). Usahakan jarak antar garis konsisten dan ditarik hanya dalam sekali gores."
        }
    },
    {
        id: 2, title: "Bentuk Dasar", level: "Beginner", time: "15 min",
        desc: "Pahami bagaimana segitiga, kotak, dan lingkaran membentuk segala benda di dunia ini.",
        img: "https://placehold.co/400x200/eff6ff/1e3a8a?text=Bentuk+Dasar",
        materi: {
            pengertian: "Bentuk dasar merujuk pada elemen geometri dua dimensi yang paling simpel: lingkaran, persegi, dan segitiga. Di dunia seni, kemampuan untuk memecah objek yang sangat rumit (seperti tubuh manusia atau kendaraan) menjadi kumpulan bentuk-bentuk dasar ini adalah keahlian utama seorang ilustrator.",
            mengapa: "Ketika kamu melihat sebuah objek yang kompleks, wajar jika kamu merasa kewalahan untuk menggambarnya langsung. Dengan menyederhanakannya menjadi susunan bentuk dasar, proses menggambar menjadi sangat masuk akal, terukur, dan tidak lagi menakutkan.",
            dasar: "Setiap benda bisa disederhanakan. Kamu harus melatih matamu untuk melihat hal-hal di sekitarmu bukan sebagai 'benda', melainkan sebagai gabungan bangun datar.",
            langkah: [
                "Mulailah menggambar lingkaran sempurna, persegi, dan segitiga secara terpisah.",
                "Cobalah mengubah proporsinya, misalnya membuat persegi panjang atau oval.",
                "Ambil objek sederhana di sekitarmu, misalnya botol minum.",
                "Pecah objek tersebut di pikiranmu: sebuah persegi panjang panjang di bawah, dan persegi kecil di atas untuk tutupnya.",
                "Gambar bentuk dasar tersebut di kanvas, lalu haluskan garis luarnya perlahan."
            ],
            contoh: "Seekor kucing yang sedang duduk bisa disederhanakan menjadi: satu lingkaran kecil untuk kepala, sebuah oval besar untuk badannya, dan dua segitiga tajam untuk telinganya.",
            tips: "Gunakan opacity tipis atau brush yang sangat transparan saat mensketsa bentuk-bentuk dasar ini. Ini adalah 'kerangka', bukan hasil akhir gambarmu.",
            kesalahan: [
                "Langsung mencoba menggambar detail (seperti mata atau bulu) sebelum bentuk dasar keseluruhannya benar.",
                "Membuat bentuk dasar dengan garis yang terlalu tebal atau ditekan keras sehingga sulit dihapus."
            ],
            latihan: "Di Practice Canvas, gambar 5 objek berbeda dari sekitarmu hanya dengan menggabungkan kotak, lingkaran, dan segitiga. Jangan tambahkan detail apa pun!"
        }
    },
    {
        id: 3, title: "Bentuk 3D Sederhana", level: "Beginner", time: "20 min",
        desc: "Ubah bentuk datar 2D menjadi bentuk bervolume seperti kubus, bola, dan tabung.",
        img: "https://placehold.co/400x200/f0fdf4/14532d?text=Bentuk+3D",
        materi: {
            pengertian: "Bentuk 3D adalah transisi dari bentuk datar menjadi bentuk yang memiliki volume, massa, dan kedalaman. Dalam menggambar, ini berarti mengubah lingkaran menjadi bola (sphere), persegi menjadi kubus (cube), dan segitiga menjadi kerucut (cone) atau tabung (cylinder).",
            mengapa: "Kanvasmu adalah permukaan 2D yang datar. Untuk membuat karyamu terlihat nyata dan hidup, kamu harus memberikan ilusi volume. Semua anatomi karakter, bangunan, dan properti tersusun dari bentuk 3D ini. Jika kamu menguasainya, gambar akan terlihat memiliki 'berat' di dunia nyata.",
            dasar: "Pahami garis kontur (contour lines). Garis kontur adalah garis melengkung imajiner yang membungkus permukaan sebuah objek sehingga kita tahu objek tersebut bulat atau kotak.",
            langkah: [
                "Gambarkan sebuah kotak datar (persegi).",
                "Tarik garis miring dari setiap sudut kotak tersebut ke satu arah yang sama.",
                "Sambungkan ujung garis-garis miring tersebut untuk menutup bentuk kubusnya.",
                "Untuk silinder, buatlah bentuk oval di bagian atas dan bawah, lalu sambungkan dengan dua garis lurus vertikal.",
                "Berlatihlah menggambar bentuk-bentuk ini dari berbagai sudut putaran (angle)."
            ],
            contoh: "Lengan manusia bukan sekadar persegi panjang dua dimensi, melainkan gabungan dari beberapa silinder 3D yang bisa membungkuk dan berputar di dalam ruang.",
            tips: "Bayangkan kamu membuat benda tersebut dari kawat (wireframe). Gambarlah bagian belakang objek yang tertutup atau tidak terlihat seolah-olah objek itu terbuat dari kaca.",
            kesalahan: [
                "Lupa menggambar garis melengkung pada bagian ujung silinder (sering digambar datar begitu saja).",
                "Panjang garis untuk kedalaman kubus tidak konsisten sehingga bentuknya terlihat penyok."
            ],
            latihan: "Buka kanvas dan gambarlah kubus, silinder, dan bola yang bertumpuk satu sama lain. Gunakan bentuk-bentuk 3D."
        }
    },
    {
        id: 4, title: "Proporsi Dasar", level: "Beginner", time: "20 min",
        desc: "Cara mudah memahami perbandingan ukuran tubuh manusia agar terlihat natural.",
        img: "https://placehold.co/400x200/fffbeb/b45309?text=Proporsi+Dasar",
        materi: {
            pengertian: "Proporsi adalah perbandingan ukuran antara satu bagian tubuh dengan bagian tubuh lainnya, serta terhadap ukuran keseluruhan tubuh. Dalam panduan klasik, tubuh manusia dewasa sering kali diukur menggunakan patokan 'ukuran kepala' (head length).",
            mengapa: "Jika proporsinya salah, seindah apa pun detail mata atau shading yang kamu buat, gambar karakternya akan terlihat aneh dan tidak wajar (uncanny). Proporsi adalah pondasi yang menjaga agar karaktermu terlihat seperti manusia normal.",
            dasar: "Umumnya, karakter manusia dewasa digambar dengan tinggi sekitar 7.5 hingga 8 kepala. Titik tengah tubuh manusia (saat berdiri) selalu jatuh tepat pada area pangkal paha/selangkangan.",
            langkah: [
                "Gambarkan sebuah oval sebagai ukuran kepala dasar.",
                "Buat garis vertikal ke bawah, bagilah garis tersebut menjadi 8 bagian yang sama panjang dengan ukuran kepala tadi.",
                "Letakkan bagian tubuh sesuai panduan: Kepala di bagian 1, dada di bagian 2, pusar di bagian 3, paha atas di bagian 4, lutut di bagian 6, dan kaki di bagian 8.",
                "Hubungkan kerangka tersebut dengan silinder untuk membentuk tangan dan kaki.",
                "Cek kembali jarak antara siku dan pergelangan tangan."
            ],
            contoh: "Ketika lengan manusia dibiarkan menggantung lurus ke bawah, ujung jari biasanya akan mencapai pertengahan paha. Jika ujung jari menyentuh lutut, artinya lengan itu terlalu panjang.",
            tips: "Gunakan teknik mengukur dengan pensil: luruskan tanganmu sambil memegang pensil untuk membandingkan jarak kepala ke dada dengan jarak dari dada ke pinggang pada foto referensi.",
            kesalahan: [
                "Membuat kepala terlalu besar dibanding badan (kecuali jika gaya seninya memang chibi/kartun).",
                "Membuat kaki terlalu pendek, atau rentang bahu yang terlalu sempit.",
                "Tangan (telapak) digambar terlalu kecil; padahal panjang telapak tangan sama dengan panjang wajah."
            ],
            latihan: "Gunakan AI Reference Generator untuk mencari 'referensi pose berdiri lurus'. Sketsalah karakter menggunakan panduan 8 bagian kepala di Practice Canvas."
        }
    },
    {
        id: 5, title: "Gesture Dasar", level: "Beginner", time: "15 min",
        desc: "Menangkap energi, gerakan, dan alur tubuh karakter dalam hitungan detik.",
        img: "https://placehold.co/400x200/fef2f2/991b1b?text=Gesture+Dasar",
        materi: {
            pengertian: "Gesture drawing adalah teknik menggambar cepat untuk menangkap 'aksi' atau 'jiwa' dari suatu pose, tanpa memperdulikan detail, proporsi sempurna, atau anatomi. Fokus utamanya adalah ritme dan pergerakan tubuh.",
            mengapa: "Karakter yang digambar dengan anatomi sempurna namun tanpa gesture akan terlihat sangat kaku seperti manekin plastik. Gesture memberikan ilusi kehidupan, keluwesan, dan emosi pada gambar.",
            dasar: "Konsep utama dalam gesture adalah 'Line of Action' (Garis Aksi). Ini adalah satu garis melengkung imajiner yang melewati tulang belakang atau merangkum arah utama dari sebuah gerakan tubuh.",
            langkah: [
                "Lihat gambar referensi (misalnya orang sedang melempar bola).",
                "Temukan Garis Aksinya. Apakah tubuhnya melengkung membentuk huruf C atau S?",
                "Goreskan satu garis halus sebagai Garis Aksi tersebut.",
                "Tentukan arah bahu dan pinggul (biasanya akan saling berlawanan/contrapposto).",
                "Tambahkan garis-garis lengan dan kaki yang mengalir mengikuti Garis Aksi tadi."
            ],
            contoh: "Jika kamu menggambar penari balet, garis aksinya mungkin berbentuk huruf 'S' yang meliuk dari ujung jari tangan hingga ke ujung kaki yang berjinjit.",
            tips: "Batasi waktumu! Lakukan gesture drawing hanya dalam 30 detik hingga 2 menit per pose. Ini akan memaksamu untuk tidak menggambar detail seperti jari atau mata.",
            kesalahan: [
                "Fokus menggambar kerangka yang kaku (stickman kaku) alih-alih garis yang mengalir.",
                "Berhenti di tengah jalan untuk menghapus dan memperbaiki detail.",
                "Membuat garis lurus kaku tanpa memperhitungkan lengkungan tulang belakang manusia."
            ],
            latihan: "Cari 5 pose berbeda di Reference Gallery. Gunakan brush di Practice Canvas, dan buatlah sketsa gesture masing-masing pose dalam waktu kurang dari 1 menit."
        }
    },
    {
        id: 6, title: "Pengenalan Warna", level: "Beginner", time: "15 min",
        desc: "Pahami lingkaran warna (color wheel) dan sifat dasar warna.",
        img: "https://placehold.co/400x200/f5f3ff/4c1d95?text=Pengenalan+Warna",
        materi: {
            pengertian: "Warna tidak hanya tentang merah, biru, atau kuning. Pengenalan warna membahas tiga atribut utama setiap warna: Hue (jenis warnanya), Saturation (intensitas/kecerahan warnanya), dan Value (seberapa gelap atau terangnya warna tersebut).",
            mengapa: "Pemahaman warna yang salah sering kali membuat gambar terlihat 'kotor', pudar, atau justru terlalu menyakitkan mata. Mengetahui cara warna bekerja akan membantumu memilih kombinasi warna yang harmonis.",
            dasar: "Lingkaran warna (Color Wheel) terdiri dari warna Primer (Merah, Biru, Kuning), Sekunder (hijau, oranye, ungu), dan Tersier. Yang paling penting adalah memahami Value (terang-gelap).",
            langkah: [
                "Buka Color Picker di canvas.",
                "Pilih satu warna bebas (Hue).",
                "Coba geser kursor ke arah kiri/putih untuk membuat warna lebih pastel/pudar (Saturation rendah).",
                "Geser ke arah bawah/hitam untuk membuat warna menjadi lebih pekat dan gelap (Value rendah).",
                "Bandingkan bagaimana perbedaan value dapat memberi efek berbeda."
            ],
            contoh: "Warna merah bata muda dan merah darah gelap sebenarnya bisa berasal dari Hue merah yang persis sama, hanya saja Saturation dan Value-nya yang dimodifikasi.",
            tips: "Jika gambarmu diubah menjadi hitam putih (grayscale) dan objeknya tidak terlihat jelas satu sama lain, artinya gambarmu memiliki masalah pada 'Value', bukan Hue-nya.",
            kesalahan: [
                "Selalu menggunakan warna dengan Saturation maksimal (100% cerah) untuk semua benda, yang membuat gambar terlihat tidak natural.",
                "Mencampur terlalu banyak warna acak tanpa memikirkan kecocokannya."
            ],
            latihan: "Gunakan Color Picker. Buat 5 bulatan berjajar di kanvas. Mulailah dari warna biru yang sangat terang (hampir putih), lalu berangsur-angsur bertransisi menjadi biru dongker pekat."
        }
    },
    
    // === INTERMEDIATE ===
    {
        id: 7, title: "Anatomi Tubuh", level: "Intermediate", time: "25 min",
        desc: "Membedah struktur otot dan tulang untuk karakter yang realistis.",
        img: "https://placehold.co/400x200/eff6ff/1e3a8a?text=Anatomi",
        materi: {
            pengertian: "Anatomi adalah studi tentang struktur biologis. Bagi artist, ini berarti mempelajari bentuk tulang utama tengkorak, rusuk, panggul, serta lapisan otot-otot yang menutupi dan memengaruhi bentuk permukaan kulit manusia.",
            mengapa: "Tanpa memahami letak tulang dan otot, tubuh yang digambar akan terlihat seperti balon atau karet tanpa struktur di dalamnya. Memahami anatomi memberikan ketegasan pada lekukan leher, lengan, perut, dan kaki karakter.",
            dasar: "Tulang kerangka adalah patokan utama (landmark). Beberapa tulang menonjol di kulit dan tidak tertutup otot atau lemak tebal, misalnya tulang selangka (clavicle), lutut (patella), dan siku.",
            langkah: [
                "Pahami struktur torso (badan): tulang rusuk (berbentuk seperti sangkar telur) dan tulang panggul (seperti mangkuk).",
                "Pelajari otot bahu (Deltoid) yang berbentuk seperti bantalan segitiga.",
                "Perhatikan otot lengan (Bicep dan Tricep) yang saling terkait.",
                "Gunakan referensi anatomi medis ringan untuk melihat letak sambungan otot.",
                "Cobalah menempelkan bentuk otot ini di atas sketsa bentuk 3D silinder yang sudah kamu buat sebelumnya."
            ],
            contoh: "Ketika kamu menggambar leher, ada satu otot besar berbentuk huruf V dari belakang telinga ke tulang dada bagian depan (Sternocleidomastoid). Menambahkan garis otot ini akan membuat leher terlihat realistis seketika.",
            tips: "Jangan berusaha menghafal nama ilmiah setiap otot. Cukup hafalkan 'bentuk visual'-nya dan di titik mana ujung otot tersebut menempel (misal: bisep menempel dari bahu ke tulang bawah siku).",
            kesalahan: [
                "Menggambar otot seperti gumpalan bola-bola yang simetris penuh, padahal otot saling tumpang tindih secara dinamis.",
                "Lupa menggambar tulang selangka (collarbone), sehingga leher dan bahu terlihat menyatu aneh."
            ],
            latihan: "Cari referensi lengan berotot di Gallery. Sketsalah garis luar (outline) lengannya, lalu tandai di mana letak persendian dan lekukan otot utamanya."
        }
    },
    {
        id: 8, title: "Perspektif 1 & 2 Titik", level: "Intermediate", time: "30 min",
        desc: "Memahami kedalaman ruang pada background, lingkungan, atau benda.",
        img: "https://placehold.co/400x200/f0fdf4/14532d?text=Perspektif",
        materi: {
            pengertian: "Perspektif adalah sistem matematis untuk mewakili ruang 3D pada permukaan datar 2D. Konsep utamanya bergantung pada Garis Horizon (ketinggian mata pengamat) dan Titik Hilang (Vanishing Point), tempat di mana semua garis sejajar tampak bertemu dan menghilang di kejauhan.",
            mengapa: "Perspektif sangat krusial jika kamu ingin menggambar karakter di dalam ruangan, menggambar gedung-gedung kota, atau bahkan sekadar meletakkan kotak di atas lantai agar terlihat membumi. Perspektif menciptakan ilusi jarak.",
            dasar: "Dalam perspektif 1 titik (1-Point Perspective), hanya ada 1 titik hilang di horizon (cocok untuk gambar rel kereta api atau lorong). Dalam 2-Point Perspective, ada dua titik di ujung kiri dan kanan horizon (cocok untuk menggambar ujung sudut gedung).",
            langkah: [
                "Tarik satu garis horizontal lurus mendatar di tengah kanvas (Horizon Line).",
                "Letakkan satu titik (Vanishing Point) tepat di tengah garis tersebut.",
                "Gambar sebuah persegi datar (face) di area bawah garis.",
                "Tarik garis lurus dari setiap sudut persegi tersebut menuju titik hilang di tengah.",
                "Tutup bangunannya untuk mendapatkan sebuah kotak yang terlihat memanjang ke belakang."
            ],
            contoh: "Saat kamu berdiri di tengah jalan raya yang lurus panjang, kedua sisi jalan tampak menyempit dan menyatu pada satu titik kecil di ujung pemandangan.",
            tips: "Gunakan penggaris (atau Line tool) saat belajar ini. Perspektif sangat mengandalkan garis yang akurat. Jika satu garis sedikit saja melenceng dari titik hilangnya, mata kita akan merasakan ada yang 'salah'.",
            kesalahan: [
                "Mencampur sudut perspektif karakter dengan sudut perspektif background (karakter dilihat dari bawah, background dilihat dari atas).",
                "Menaruh Vanishing Point terlalu berdekatan pada perspektif 2 titik, sehingga gambar terlihat sangat terdistorsi (efek fisheye ekstrem)."
            ],
            latihan: "Buat Horizon Line dan satu Vanishing Point. Gambarlah 3 buah kubus melayang di kanvas: satu di bawah horizon, satu tepat di horizon, dan satu melayang tinggi di atas horizon."
        }
    },
    {
        id: 9, title: "Ekspresi Wajah", level: "Intermediate", time: "20 min",
        desc: "Cara menyampaikan emosi hanya dengan alis, mata, dan mulut.",
        img: "https://placehold.co/400x200/fffbeb/b45309?text=Ekspresi",
        materi: {
            pengertian: "Ekspresi wajah dibentuk oleh gerakan otot-otot di bawah kulit wajah. Dalam seni, ekspresi fokus pada manipulasi bentuk dan jarak antara tiga elemen krusial: alis (eyebrows), mata (eyes), dan mulut (mouth).",
            mengapa: "Karakter tanpa ekspresi hanya akan terasa seperti boneka mati. Ekspresi adalah alat penceritaan utama; dari wajah karakter, penonton bisa langsung mengerti apakah karakter sedang marah, ketakutan, gembira, atau meremehkan.",
            dasar: "Alis adalah indikator emosi terkuat. Jika sudut dalam alis turun mendekati hidung = Marah/Intens. Jika sudut dalam alis naik ke atas = Sedih/Khawatir. Mulut melengkapi konteks emosi tersebut.",
            langkah: [
                "Mulai dengan bentuk wajah yang proporsional.",
                "Tentukan emosinya. Misal: Terkejut.",
                "Angkat alis setinggi mungkin di atas mata.",
                "Buat mata membesar secara signifikan sehingga bagian putih matanya terlihat mengelilingi iris.",
                "Buat mulut sedikit terbuka membentuk oval kecil atau besar mengikuti peregangan rahang."
            ],
            contoh: "Untuk ekspresi marah, turunkan sudut dalam alis secara ekstrem (membentuk garis miring ke bawah), buat mata sedikit menyipit tajam, dan tambahkan sedikit kerutan di sela-sela kedua alis.",
            tips: "Gunakan cermin! Sebelum menggambar ekspresi, cobalah peragakan ekspresi itu sendiri di depan cermin. Rasakan bagian otot wajah mana yang menegang atau tertarik.",
            kesalahan: [
                "Hanya mengubah bentuk bibir (tersenyum) tetapi alis dan mata dibiarkan datar, yang justru menghasilkan senyum palsu (creepy smile).",
                "Lupa menggambar garis lipatan mata atau kantung mata saat karakter tersenyum sangat lebar."
            ],
            latihan: "Gunakan AI Reference Generator dengan prompt: 'Berikan ide 3 ekspresi wajah yang berbeda'. Cobalah buat sketsa cepat ketiga ekspresi tersebut berdasarkan panduan AI di Practice Canvas."
        }
    },
    {
        id: 10, title: "Teknik Shading", level: "Intermediate", time: "25 min",
        desc: "Memberikan gelap terang agar benda terlihat bervolume 3D.",
        img: "https://placehold.co/400x200/fdf4ff/86198f?text=Shading",
        materi: {
            pengertian: "Shading atau pengarsiran adalah proses menambahkan nilai (Value/gelap-terang) pada sebuah gambar berdasarkan di mana sumber cahaya mengenai objek tersebut. Shading membedakan antara area yang diterangi (highlight) dan area bayangan (shadow).",
            mengapa: "Sebuah lingkaran hanyalah bentuk datar. Namun jika kamu menambahkan shading dan bayangan di satu sisinya, lingkaran tersebut otomatis akan terlihat seperti bola 3D. Shading membangun realisme.",
            dasar: "Kamu harus memahami istilah cahaya: Highlight (titik paling terang), Midtone (warna asli objek), Core Shadow (area paling gelap di objek), Reflected Light (cahaya pantulan di dalam bayangan), dan Cast Shadow (bayangan yang jatuh ke lantai).",
            langkah: [
                "Pilih satu objek simpel, misalnya bola.",
                "Tentukan dari mana arah cahaya datang (misalnya dari sudut kiri atas).",
                "Biarkan area kiri atas tetap terang.",
                "Arsir secara perlahan (buat gradasi) menuju ke bagian kanan bawah objek.",
                "Buat area kanan bawah menjadi Core Shadow (gelap), tapi sisakan sedikit ruang di tepi paling bawah yang agak terang (Reflected Light).",
                "Gambar bayangan bola yang menempel di lantai pada sisi berlawanan arah cahaya (Cast Shadow)."
            ],
            contoh: "Pikirkan sebuah apel yang diletakkan di meja dekat jendela. Sisi yang menghadap jendela terang benderang, sementara sisi sebaliknya akan gelap gulita dengan sedikit pantulan cahaya tipis dari warna taplak meja.",
            tips: "Jangan gunakan Brush warna HITAM MURNI (pure black) untuk shading. Gunakan warna yang lebih gelap dari base color dengan nada warna (hue) yang sedikit digeser (misal: base merah, shading merah tua yang agak ungu).",
            kesalahan: [
                "Shading dengan efek 'Pillow Shading', yaitu memberikan bayangan di semua pinggiran luar objek sementara tengahnya terang, tanpa memikirkan arah datangnya cahaya.",
                "Lupa memasukkan Reflected Light, membuat bayangan terlihat mati dan datar."
            ],
            latihan: "Gambar satu buah silinder vertikal. Asumsikan cahaya datang dari sebelah kiri lurus. Shading bagian kanan silinder tersebut dan jangan lupa gambar bayangannya di tanah."
        }
    },
    {
        id: 11, title: "Komposisi", level: "Intermediate", time: "25 min",
        desc: "Cara menyusun elemen di dalam kanvas agar enak dilihat dan menarik.",
        img: "https://placehold.co/400x200/eff6ff/1e3a8a?text=Komposisi",
        materi: {
            pengertian: "Komposisi adalah seni mengatur, menyusun, dan menata objek atau karakter di dalam bingkai (frame) kanvas. Ini mengatur ke mana arah mata penonton akan melihat pertama kali dan bagaimana mata mereka menjelajahi seluruh bagian gambar.",
            mengapa: "Karakter yang digambar luar biasa bagus bisa terlihat membosankan jika ditempatkan persis di tengah kanvas secara kaku. Komposisi yang baik menciptakan keseimbangan, harmoni, dan fokus (point of interest) pada ceritamu.",
            dasar: "Aturan paling dasar adalah 'Rule of Thirds'. Jika kamu membagi kanvas menjadi 9 kotak dengan 2 garis vertikal dan 2 garis horizontal, tempatkan objek utama gambarmu di salah satu titik potong (persimpangan) garis tersebut, bukan persis di tengah.",
            langkah: [
                "Buka kanvasmu, bayangkan garis bantu yang membaginya menjadi 3 bagian.",
                "Tentukan apa objek utama gambar (Focal Point). Misalnya: wajah karakter.",
                "Tempatkan wajah tersebut di sudut perpotongan kiri atas atau kanan atas.",
                "Gunakan elemen pendukung (misal: arah pohon, awan, atau lengan) untuk membuat garis penuntun (Leading Lines) yang menunjuk ke Focal Point.",
                "Seimbangkan gambar agar tidak terlalu 'berat' atau padat di satu sisi saja."
            ],
            contoh: "Dalam gambar pemandangan seorang ksatria melawan naga, tempatkan ksatrianya agak di sebelah kiri bawah frame menghadap ke naga besar yang berada di kanan atas frame. Ini menciptakan ruang dan keseimbangan diagonal.",
            tips: "Coba 'Flip Canvas' secara horizontal. Kesalahan komposisi sering kali menjadi sangat jelas jika gambarmu dibalik secara cermin.",
            kesalahan: [
                "Menempatkan semuanya tepat di titik pusat kanvas (Center Bias) membuat gambar terlalu statis seperti foto paspor.",
                "Membuat objek yang terpotong canggung tepat di persendian kaki atau lengan oleh batas tepi kanvas (tangents)."
            ],
            latihan: "Buat 3 buah sketsa persegi panjang kecil (thumbnail). Di setiap kotak, buatlah komposisi pemandangan rumah yang sama namun dari angle dan letak tata letak (Rule of Thirds) yang berbeda."
        }
    },
    {
        id: 12, title: "Lighting", level: "Intermediate", time: "30 min",
        desc: "Skenario pencahayaan kompleks untuk membangun mood.",
        img: "https://placehold.co/400x200/fef2f2/991b1b?text=Lighting",
        materi: {
            pengertian: "Jika Shading membahas gelap terang objek, Lighting (pencahayaan) membahas jenis, arah, dan warna dari sumber cahaya itu sendiri. Lighting dramatis bisa menciptakan berbagai jenis atmosfer (mood).",
            mengapa: "Pencahayaan memengaruhi emosi secara langsung. Cahaya dari bawah wajah (Underlighting) memberikan kesan horor. Cahaya matahari terbenam (Backlighting) memberikan kesan heroik atau romantis.",
            dasar: "Ada 3 skenario lighting dasar: Front Lighting (cahaya dari depan/kamera), Side Lighting (cahaya dari samping untuk tekstur), dan Rim/Back Lighting (cahaya dari belakang objek yang menghasilkan garis tipis bersinar pada tepian karakter).",
            langkah: [
                "Gambarlah bentuk kepala yang sederhana.",
                "Tentukan satu skenario ekstrem, misalnya Top Lighting (cahaya tepat dari atas kepala).",
                "Tempatkan highlight pada puncak kepala, hidung atas, dan tulang pipi atas.",
                "Gelapkan dahi bagian bawah, kantung mata, seluruh leher, dan bagian bawah hidung.",
                "Perhatikan bahwa bayangan leher akan jatuh jauh ke bagian dada bawah."
            ],
            contoh: "Rim light sangat populer di seni digital. Jika karakter berada di lingkungan gelap dengan bulan purnama di belakangnya, tepi rambut, bahu, dan punggungnya akan memiliki garis menyala warna biru terang bulan.",
            tips: "Gunakan mode blending layar (seperti 'Screen', 'Add', atau 'Overlay') pada layer brush saat menambahkan pantulan cahaya (Rim Light) di gambar digitalmu.",
            kesalahan: [
                "Lupa bahwa cahaya memiliki warna. Sumber cahaya matahari sore akan memantulkan warna oranye pada objek, bukan sekadar putih.",
                "Membuat beberapa bayangan yang saling bertentangan satu sama lain tanpa arah cahaya yang jelas."
            ],
            latihan: "Gambar objek bebas. Asumsikan lampu berasal dari sebelah kanan atas benda tersebut, dan lampu itu berwarna merah pekat. Coba aplikasikan cahaya tersebut."
        }
    },
    {
        id: 13, title: "Color Theory", level: "Intermediate", time: "30 min",
        desc: "Kombinasi warna untuk membangun suasana dan menarik perhatian.",
        img: "https://placehold.co/400x200/f5f3ff/4c1d95?text=Color+Theory",
        materi: {
            pengertian: "Teori warna membahas harmoni, kombinasi matematis dalam color wheel, dan efek psikologis warna. Kombinasi warna yang terencana dengan baik disebut 'Skema Warna' (Color Scheme).",
            mengapa: "Warna yang ditata tanpa panduan akan terlihat kacau, layaknya suara alat musik yang dimainkan berantakan. Menguasai Color Theory berarti kamu bisa memanipulasi emosi penonton: warna sejuk (biru/ungu) untuk kedamaian atau kesedihan, warna hangat (merah/oranye) untuk bahaya atau kehangatan.",
            dasar: "Skema warna populer: 1) Monokromatik (satu warna berbeda gelap terang). 2) Komplementer (dua warna berseberangan di color wheel, misal merah-hijau, biru-oranye). 3) Analogus (warna yang bersebelahan di color wheel).",
            langkah: [
                "Sebelum mulai mewarnai karyamu, pilih satu skema warna.",
                "Misalnya kita pilih Komplementer: Biru dan Oranye.",
                "Jadikan Biru (warna dominan) sebagai 80% warna di kanvas untuk mengisi background dan atmosfer.",
                "Gunakan Oranye (warna aksen) hanya pada 20% area yang penting, misalnya pada karakter utama atau efek sihir.",
                "Mata penonton akan langsung tertuju pada warna oranye tersebut karena kontras komplementernya."
            ],
            contoh: "Perhatikan poster film action. Mereka sangat sering menggunakan skema teal (biru kehijauan) untuk background dan orange (warna kulit wajah aktor) agar wajah karakter sangat menonjol.",
            tips: "Batasi palet warnamu! Jangan gunakan lebih dari 3-4 Hue utama pada sebuah gambar. Pembatasan ini ironisnya membuat gambar terlihat lebih menyatu (unified).",
            kesalahan: [
                "Mewarnai setiap elemen gambar dengan warna yang cerah dan mencolok, sehingga mata lelah dan tidak tahu mana yang harus difokuskan.",
                "Mengabaikan warna bayangan lingkungan (ambient color). Kulit putih tidak selalu di-shading dengan peach gelap, jika di ruangan biru bayangannya harus kebiruan."
            ],
            latihan: "Gunakan AI Reference Generator, minta 'berikan kombinasi palet warna Analogus'. Buat komposisi acak di canvas (coretan warna) menggunakan 3 warna hasil AI tersebut."
        }
    },

    // === ADVANCED ===
    {
        id: 14, title: "Dynamic Pose", level: "Advanced", time: "30 min",
        desc: "Mengelevasi pose karakter dari statis menjadi sangat dinamis seperti komik aksi.",
        img: "https://placehold.co/400x200/fef2f2/991b1b?text=Dynamic+Pose",
        materi: {
            pengertian: "Dynamic pose menggabungkan prinsip gesture, anatomi, dan perspektif (foreshortening) ke dalam satu karakter. Ini adalah pose aksi ekstrem yang seolah-olah memiliki daya tolak (force) dan energi momentum besar.",
            mengapa: "Pose berdiri biasa sangat bagus untuk desain karakter awal. Tetapi untuk penceritaan aksi atau sampul komik, pose statis itu membosankan. Dynamic pose memberikan ilusi kecepatan, tenaga, dan intensitas pertarungan/pergerakan.",
            dasar: "Foreshortening (Pemendekan Perspektif) adalah kunci. Saat tangan ditinju ke depan ke arah 'kamera', kepalan tangan akan terlihat lebih besar dari kepala, sementara lengan menjadi sangat pendek. Selain itu, lengkungan sumbu tubuh (Contrapposto ekstrem) harus diterapkan.",
            langkah: [
                "Tentukan titik berat momentum. Apakah karakter sedang melompat? Mendarat? Atau memukul?",
                "Buat Line of Action yang hiperbolis (dibuat lebih lengkung dari seharusnya).",
                "Tentukan persilangan bahu dan pinggul. Sudutnya harus tajam, tidak mendatar.",
                "Aplikasikan Foreshortening pada anggota gerak yang menuju ke arah 'kamera'.",
                "Manfaatkan elemen sekunder (rambut, jubah, atau baju) yang berkibar untuk menguatkan arah gerakan tubuh (flow)."
            ],
            contoh: "Karakter pahlawan yang mendarat dari langit (Superhero Landing): lutut yang membentur tanah di depan digambar besar, satu tangan bertumpu menekan aspal, punggung melengkung tajam, jubah tertahan di udara ke atas akibat gravitasi sesaat.",
            tips: "Teknik membesarkan tangan/kaki yang dekat (overlapping forms) sangat ampuh. Saat menggambar foreshortening lengan, pikirkan lengannya seperti deretan kaleng silinder yang ditumpuk menghadap kameramu.",
            kesalahan: [
                "Ragu-ragu menerapkan foreshortening (ukuran tangan yang dekat dengan kamera masih sama ukurannya dengan yang jauh), membuat tubuh distorsi datar.",
                "Elemen sekunder (rambut, kain) jatuh diam lurus ke bawah meskipun karakternya sedang berlari cepat."
            ],
            latihan: "Pilih referensi 'pose melompat' di Gallery. Cobalah ubah sudutnya agar pose tersebut seolah-olah ditangkap kamera dari sudut bawah (worm-eye view)."
        }
    },
    {
        id: 15, title: "Advanced Anatomy", level: "Advanced", time: "35 min",
        desc: "Detail otot kompleks, lekuk persendian, lipatan kulit, dan asimetri manusia.",
        img: "https://placehold.co/400x200/eff6ff/1e3a8a?text=Adv+Anatomy",
        materi: {
            pengertian: "Anatomi tingkat lanjut melampaui sekadar mengetahui posisi otot. Ini mencakup bagaimana otot saling mengikat tulang (tendon), meregang dan menekan (squash & stretch), interaksi dengan lemak tubuh (subcutaneous fat), serta variasi bentuk tubuh berbagai umur atau jenis kelamin.",
            mengapa: "Jika kamu ingin menjadi ilustrator figuratif atau concept artist monster/manusia realistis, anatomi lanjutan wajib dikuasai. Ini membedakan karya amatir dengan karya master yang benar-benar memahami mekanika sendi manusia.",
            dasar: "Pemahaman titik rotasi (Rotation points) sendi. Engsel bahu (Ball-and-socket joint) memiliki rentang gerak luar biasa rumit yang melibatkan tulang belikat (scapula) dan otot di punggung yang bergeser mengikuti angkatan lengan.",
            langkah: [
                "Fokus pada area yang paling sering digambar salah: punggung atas dan panggul belakang.",
                "Pelajari struktur tulang belikat (Scapula). Saat tangan diangkat tinggi, tulang belikat ikut memutar ke luar.",
                "Pelajari lekukan lutut. Lutut bukanlah lingkaran sederhana, melainkan kotak tulang dengan tonjolan tempurung (patella) dan ligamen tebal.",
                "Pahami bagaimana gaya tarik bumi memengaruhi daging dan otot yang sedang dalam kondisi rileks (daging cenderung menggantung)."
            ],
            contoh: "Bandingkan lengan yang direntangkan lurus dengan lengan yang ditekuk maksimal. Pada lengan ditekuk, otot bisep memendek dan membulat menegang (flex), sedangkan trisep di bawahnya meregang memanjang. Ini adalah konsep anatomi kompleks.",
            tips: "Gunakan pendekatan 'Asimetris'. Otot lengan, paha, atau betis tidak pernah sejajar lurus secara horizontal. Satu sisi otot selalu lebih tinggi atau lebih rendah posisinya dibandingkan lawannya di tulang yang sama.",
            kesalahan: [
                "Simetri tubuh absolut: menggambar lipatan paha dan lutut sejajar bagai balok mesin, padahal anatomi manusia penuh dengan lengkungan meliuk asimetris.",
                "Lupa menggambarkan penumpukan daging dan lipatan kulit akibat rotasi sendi (misal saat leher tertengok ke belakang)."
            ],
            latihan: "Cari referensi kaki (kaki manusia tampak belakang/samping). Gambarlah dari lutut hingga pergelangan kaki, pastikan kamu memberikan perhatian khusus pada asimetri otot betis bagian luar dan dalam."
        }
    },
    {
        id: 16, title: "Complex Perspective", level: "Advanced", time: "40 min",
        desc: "Perspektif 3, 4, hingga 5 Titik, serta karakter dalam foreshortening mendalam.",
        img: "https://placehold.co/400x200/f0fdf4/14532d?text=Adv+Perspective",
        materi: {
            pengertian: "Perspektif kompleks melibatkan grid ruang (spatial grid) yang melengkung atau penglihatan sudut pandang sangat ekstrem. Di level ini, kita masuk ke 3-Point Perspective (seperti memandang pencakar langit tinggi dari bawah tanah) dan 4/5-Point Perspective (Curvilinear/Fisheye view).",
            mengapa: "Perspektif tingkat tinggi sering digunakan dalam pembuatan storyboard film, ilustrasi background epik, atau komik aksi. Perspektif 3 titik wajib dipakai jika kamu ingin memberikan sensasi keagungan, pusing, ancaman, atau kebesaran skala objek secara masif.",
            dasar: "Pada Perspektif 3 Titik, kamu tidak hanya menggunakan 2 titik horizon di kiri dan kanan, tetapi menambahkan Titik Ketiga di atas (untuk mata cacing/worm-eye) atau di bawah (untuk mata burung/bird-eye). Dengan ini, garis tegak lurus benda tidak lagi berdiri sejajar, melainkan mengerucut ke titik atas/bawah.",
            langkah: [
                "Tentukan Horizon Line di kanvas bagian bawah (Worm-eye view).",
                "Tempatkan 2 Vanishing Point di ujung kiri dan kanan horizon tersebut.",
                "Tempatkan Vanishing Point ketiga sangat tinggi di atas (mungkin di luar kanvas).",
                "Saat membuat gedung persegi, garis kiri menunjuk VP kiri, garis kanan menunjuk VP kanan, dan garis DINDING yang seharusnya lurus ke atas vertikal... kini harus miring mengerucut menuju VP atas.",
                "Gambarlah jendela gedung mengikuti garis kemiringan grid kompleks tersebut."
            ],
            contoh: "Berbaringlah di kaki sebuah patung Monas, lalu lihat lurus ke atas ujung emasnya. Badan patung di bagian bawah sangat tebal dan besar, tetapi ujung menaranya tampak mengecil seperti jarum. Itulah Perspektif 3 Titik.",
            tips: "Buatlah 'Perspective Grid' secara terpisah pada layer awal untuk memandumu. Membayangkan letak garis tanpa panduan grid yang sudah ditarik rapi di level ini akan membuat gambarmu berantakan.",
            kesalahan: [
                "Menempatkan Titik Hilang Ketiga terlalu dekat dengan objek. Semakin dekat titik, distorsi akan terlihat sangat aneh dan tidak wajar.",
                "Tidak mengaplikasikan distorsi vertikal pada karakter yang berdiri tepat di depan gedung berskala raksasa tersebut."
            ],
            latihan: "Tarik horizon di garis paling bawah kanvasmu. Buat tiga titik hilang (dua di bawah, satu jauh di atas). Gambar sketsa sebuah menara jam besar (Big Ben) menggunakan pedoman ketiga titik tersebut."
        }
    },
    {
        id: 17, title: "Advanced Composition", level: "Advanced", time: "30 min",
        desc: "Rasio Emas, pembingkaian (framing), dan menuntun pandangan mata pemirsa.",
        img: "https://placehold.co/400x200/eff6ff/1e3a8a?text=Adv+Composition",
        materi: {
            pengertian: "Meninggalkan dasar Rule of Thirds, Komposisi Tingkat Lanjut menggunakan aturan matematika yang lebih natural seperti The Golden Ratio (Deret Fibonacci), Framing within Framing, Tangents avoidance, dan pemanfaatan Positive/Negative Space (Area kosong) secara radikal.",
            mengapa: "Komposisi advanced digunakan oleh pelukis renaissance (seperti Da Vinci) dan sinematografer film untuk mengunci mata pemirsa dalam gambar. Ini menciptakan harmoni visual yang terasa secara alam bawah sadar (subliminal) sebagai 'masterpiece'.",
            dasar: "Salah satu konsep terbaik adalah Leading Lines yang melengkung secara Fibonacci (bentuk cangkang siput) yang berputar mengarahkan mata masuk dari tepi luar gambar, terus menyempit, memandu putaran mata pemirsa tepat ke hidung/mata karakter utama.",
            langkah: [
                "Rencanakan komposisimu dengan sketsa thumbnail super kasar.",
                "Pikirkan tentang 'Negative Space'—ruang kosong tanpa detail (seperti lautan luas atau langit bersih) sama pentingnya dengan bentuk karakter. Biarkan ruang kosong tersebut bernapas.",
                "Gunakan teknik 'Framing'. Gambarkan benda di foreground (seperti siluet ranting pohon, atau ambang jendela gelap) untuk membingkai karakter di background agar mata terkurung menuju mereka.",
                "Gunakan kontras untuk 'mengikat' mata. Beri warna paling cerah dan detail paling padat hanya di titik klimaks/focal point, biarkan sisi lain gambar membaur blur atau minim detail."
            ],
            contoh: "Karakter siluet seseorang yang berdiri di depan gerbang gua yang terang dari luar. Dinding gua di kiri, kanan, dan atas yang gelap menutupi 70% komposisi menjadi bingkai alami (Framing), memaksa mata kita hanya menatap 30% area tengah yang bersinar.",
            tips: "Gunakan teknik Chiaroscuro (Kontras Tinggi Gelap dan Terang). Mata manusia berevolusi untuk merespon titik paling terang dalam kegelapan atau pergerakan kontras tertinggi.",
            kesalahan: [
                "Membuat seluruh inci kanvas penuh dengan tekstur dan detail super rumit (Cluttering), sehingga mengabaikan letak peristirahatan mata (Negative space). Gambar terasa sesak.",
                "Mengabaikan penumpukan kedalaman (hanya memiliki Midground, tanpa Foreground pembingkai dan Background yang buram)."
            ],
            latihan: "Gunakan Canvas. Gambar komposisi abstrak dengan 3 nilai warna (Hitam pekat, abu-abu, Putih). Buatlah Framing yang mengarahkan perhatian pada satu titik putih kecil di dalam area gelap, dikelilingi oleh bentuk abu-abu di tepi frame."
        }
    },
    {
        id: 18, title: "Advanced Lighting", level: "Advanced", time: "35 min",
        desc: "Material dan permukaan (logam, kaca, kulit) beserta pantulan cahaya sekitarnya.",
        img: "https://placehold.co/400x200/fef2f2/991b1b?text=Adv+Lighting",
        materi: {
            pengertian: "Advanced Lighting adalah tentang rendering berbagai jenis material (Texture Rendering) dan Ambient Occlusion (bayangan kontak). Cahaya memantul secara berbeda ketika mengenai besi (krom), kulit berminyak, sutra, kayu kusam, atau kaca tembus pandang.",
            mengapa: "Ketika seorang artist mampu menggambar pedang baja yang terlihat berkilauan layaknya cermin sungguhan (walau hanya gambar 2D) atau kulit manusia yang memendarkan cahaya merah di dalam telinga (Subsurface Scattering), karya seni itu telah mencapai level industri profesional.",
            dasar: "Setiap material dipengaruhi oleh 'Kekasaran' (Roughness) dan 'Reflektivitas'. Material kasar seperti batu bata menyerap cahaya sehingga highlight-nya menyebar kusam. Material licin seperti logam atau kaca, memiliki highlight (kilauan titik putih murni) yang sangat tajam tanpa gradasi lebar, dan memantulkan benda di sekitarnya.",
            langkah: [
                "Untuk Logam/Baja: Gunakan kontras ekstrem. Dekatkan warna highlight yang paling terang persis di sebelah warna shadow tergelap. Logam sangat reflektif.",
                "Untuk Kulit Manusia: Pelajari Subsurface Scattering (SSS). Saat cahaya terang mengenai kulit (seperti cuping telinga atau jari), warna merah daging akan bersinar tembus di tepi batas cahayanya.",
                "Untuk Kain: Pahami bahwa highlight pada kain/beludru sering kali jatuh pada sisi paling tepi lekukannya (bukan di tengah), ini disebut sebagai sheen.",
                "Gunakan Ambient Occlusion: Beri bayangan yang nyaris hitam absolut di titik-titik lipatan sempit yang tidak bisa disentuh cahaya sama sekali (misal celah kancing atau kerah)."
            ],
            contoh: "Menggambar bola besi di padang rumput. Bola besi tidak berwarna perak polos; bagian bawah bola akan memantulkan warna hijau rumput secara nyata, sedangkan bagian atas memantulkan warna biru langit yang melengkung terdistorsi.",
            tips: "Gunakan Hard Brush, BUKAN Soft Airbrush saat menggambar kilap logam atau plastik licin. Soft brush hanya cocok untuk kulit, kain, atau objek yang tidak memantulkan cahaya.",
            kesalahan: [
                "Menggunakan Soft Airbrush untuk me-render semua material benda, sehingga pedang logam terlihat selembut bantal babi (pillowy/plasticky).",
                "Melupakan bahwa benda yang berwarna memantulkan warnanya ke objek terdekat (Bouncing Light Color Bleed)."
            ],
            latihan: "Gunakan warna abu-abu. Gambarlah dua buah bola berdampingan. Warnai bola pertama agar tampak seperti bola karet matte/doff (gradasi sangat lembut), dan bola kedua seperti bola bowling licin (highlight tajam 1 titik putih murni)."
        }
    },
    {
        id: 19, title: "Visual Storytelling", level: "Advanced", time: "40 min",
        desc: "Cara menyampaikan narasi mendalam, emosi, dan sejarah hanya dalam satu ilustrasi.",
        img: "https://placehold.co/400x200/f5f3ff/4c1d95?text=Visual+Storytelling",
        materi: {
            pengertian: "Visual Storytelling (Penceritaan Visual) adalah puncak tertinggi pembuatan sebuah ilustrasi. Ini mengintegrasikan semua teknik yang telah dipelajari—pose, komposisi, anatomi, ekspresi, warna, dan pencahayaan—untuk menceritakan sebuah narasi kompleks tanpa sepatah kata pun tertulis.",
            mengapa: "Keterampilan teknis yang dewa akan selalu kalah oleh gambar dengan 'Pesan' yang kuat. Gambar seorang pahlawan hebat berdiri pose diam mungkin menakjubkan secara teknik, tapi gambar sepatu pahlawan yang lusuh di samping pedang yang patah di padang berumput lebih menyentuh hati dan membuat pemirsa bertanya-tanya.",
            dasar: "Prinsip utama adalah menjawab pertanyaan penonton: 'Apa yang terjadi sebelum momen ini?' dan 'Apa yang akan terjadi setelah ini?'. Kita sedang menangkap satu frame dari sebuah film di tengah konflik yang panjang.",
            langkah: [
                "Sebelum mulai sketsa, tulis 1 kalimat logline ceritamu. Misal: 'Prajurit lelah yang akhirnya menemukan rumahnya hancur.'",
                "Susun Elemen: Jangan gunakan pose pahlawan tegap. Gunakan gesture bahu yang melorot, pedang yang terseret di tanah.",
                "Gunakan Warna & Cahaya: Buat suasana sore kelabu yang hujan untuk mendukung duka, bukan biru cerah yang gembira.",
                "Tambahkan properti kecil (Detail Pencerita): Sebuah mainan anak-anak setengah terbakar yang dipegang erat oleh tangannya yang bergetar. Detail ini berbicara seribu kali lebih keras dari kata-kata.",
                "Posisikan kamera dan komposisi untuk mengelevasi rasa."
            ],
            contoh: "Daripada menggambar monster yang sudah ada di tengah kanvas mengaum, lebih baik gambar karakter yang sedang bersembunyi dengan wajah ketakutan, sementara hanya bayangan monster raksasa itu yang terlihat jatuh di dinding.",
            tips: "Terapkan prinsip 'Show, Don't Tell'. Tunjukkan bahwa dunia tersebut berbahaya melalui bekas luka di wajah karakter atau armor yang penyok, tanpa harus meletakkan teks 'Dunia ini berbahaya' di ilustrasi.",
            kesalahan: [
                "Fokus berlebihan mendesain kostum karakter super detail, tetapi membiarkan karakter berdiri diam menatap ke depan ruang kosong (Pose Paspor/ID Card). Tidak ada cerita.",
                "Menumpuk terlalu banyak kejadian tidak berhubungan di satu gambar hingga pesannya kehilangan fokus inti."
            ],
            latihan: "Gunakan AI Reference Generator dengan prompt: 'Berikan satu ide cerita emosional tentang karakter dan lingkungannya tanpa kata-kata'. Gunakan ide itu untuk membayangkan tata letak kasarnya di Canvas."
        }
    }
];

// --- GALLERY DATA MOCKUP (TETAP) ---
const galleryData = [
    { id: 1, title: "Pose Berdiri Santai", category: "Pose", desc: "Referensi pose berdiri santai sambil memegang tas.", img: "https://placehold.co/300x400/e0e7ff/3730a3?text=Pose+Berdiri" },
    { id: 2, title: "Otot Lengan", category: "Anatomi", desc: "Struktur otot lengan tampak depan dan samping.", img: "https://placehold.co/300x400/fee2e2/991b1b?text=Anatomi+Lengan" },
    { id: 3, title: "Ekspresi Terkejut", category: "Ekspresi", desc: "Bentuk mata dan mulut terkejut.", img: "https://placehold.co/300x400/fef08a/854d0e?text=Ekspresi" },
    { id: 4, title: "Palet Senja", category: "Palet Warna", desc: "Kombinasi oranye, ungu, dan biru tua.", img: "https://placehold.co/300x400/ffedd5/9a3412?text=Palet+Senja" },
    { id: 5, title: "Pose Melompat", category: "Pose", desc: "Action pose saat karakter melompat.", img: "https://placehold.co/300x400/e0e7ff/3730a3?text=Pose+Lompat" },
    { id: 6, title: "Mata Anime", category: "Anatomi", desc: "Berbagai gaya menggambar mata.", img: "https://placehold.co/300x400/fee2e2/991b1b?text=Anatomi+Mata" }
];

// --- APP CONTROLLER ---
const app = {
    init() {
        this.bindEvents();
        this.renderLearningGrid('Beginner');
        this.renderGalleryGrid('All', '');
        drawingApp.init();
        this.checkApiKeyUI();
    },

    bindEvents() {
        document.getElementById('hamburger').addEventListener('click', () => {
            document.getElementById('nav-links').classList.toggle('active');
        });

        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dd => {
            dd.addEventListener('click', () => {
                if(window.innerWidth <= 768) dd.classList.toggle('active');
            });
        });
    },

    navigate(sectionId) {
        document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        document.getElementById('nav-links').classList.remove('active');
        window.scrollTo(0, 0);
    },

    showToast(msg, type="normal") {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.className = `toast show ${type}`;
        setTimeout(() => toast.className = 'toast', 3000);
    },

    // --- LEARNING HUB LOGIC ---
    filterLearning(level) {
        document.querySelectorAll('.tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if(btn.innerText === level) btn.classList.add('active');
        });
        this.renderLearningGrid(level);
    },

    renderLearningGrid(level) {
        const grid = document.getElementById('learning-grid');
        grid.innerHTML = '';
        const filtered = learningData.filter(item => item.level === level);
        
        filtered.forEach(item => {
            const levelClass = item.level.toLowerCase();
            grid.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="${item.title}" class="card-img">
                    <div class="card-content">
                        <span class="badge ${levelClass}">${item.level} • ${item.time}</span>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        <button class="btn-outline w-100 mt-3" onclick="app.openMateri(${item.id})">Pelajari <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            `;
        });
    },

    openMateri(id) {
        const item = learningData.find(i => i.id === id);
        if(!item) return;
        
        const m = item.materi;
        let langkahHtml = m.langkah.map(l => `<li>${l}</li>`).join('');
        let kesalahanHtml = m.kesalahan.map(k => `<li>${k}</li>`).join('');

        const content = document.getElementById('materi-content');
        content.innerHTML = `
            <span class="badge ${item.level.toLowerCase()}" style="margin-bottom:15px;">${item.level} • Estimasi: ${item.time}</span>
            <h2>${item.title}</h2>
            <p class="intro-desc">${item.desc}</p>
            
            <div class="materi-section">
                <h3>Apa itu ${item.title}?</h3>
                <p>${m.pengertian}</p>
            </div>

            <div class="materi-section">
                <h3>Mengapa Materi Ini Penting?</h3>
                <p>${m.mengapa}</p>
            </div>

            <div class="materi-section">
                <h3>Dasar yang Perlu Dipahami</h3>
                <p>${m.dasar}</p>
            </div>

            <div class="materi-section">
                <h3>Langkah-langkah Belajar</h3>
                <ol>${langkahHtml}</ol>
            </div>

            <div class="materi-section highlight-box">
                <strong><i class="fa-solid fa-lightbulb"></i> Contoh Sederhana:</strong>
                ${m.contoh}
            </div>

            <div class="materi-section highlight-box" style="border-left-color: var(--secondary); background: rgba(244, 114, 182, 0.1);">
                <strong><i class="fa-solid fa-star"></i> Tips untuk Pemula:</strong>
                ${m.tips}
            </div>

            <div class="materi-section">
                <h3><i class="fa-solid fa-triangle-exclamation" style="color:var(--danger)"></i> Kesalahan Umum yang Sering Terjadi</h3>
                <ul>${kesalahanHtml}</ul>
            </div>

            <div class="materi-section" style="background:#f8fafc; padding:25px; border-radius:12px; border:2px solid #e2e8f0;">
                <h3><i class="fa-solid fa-dumbbell"></i> Latihan Praktik</h3>
                <p style="margin:0;">${m.latihan}</p>
            </div>

            <div class="mt-3" style="text-align:center; padding-top: 30px; border-top: 2px solid #e2e8f0;">
                <p style="margin-bottom:15px; color:var(--text-light);">Sudah selesai membaca? Yuk, langsung kita praktikkan teorinya!</p>
                <button class="btn-primary btn-large" onclick="app.navigate('canvas'); app.showToast('Selamat berlatih materi: ${item.title}!', 'success')">
                    <i class="fa-solid fa-palette"></i> Mulai Praktik di Canvas
                </button>
            </div>
        `;
        this.navigate('materi');
    },

    // --- GALLERY LOGIC ---
    filterGallery() {
        const search = document.getElementById('gallery-search').value.toLowerCase();
        const category = document.getElementById('gallery-category').value;
        this.renderGalleryGrid(category, search);
    },

    renderGalleryGrid(category, search) {
        const grid = document.getElementById('gallery-grid');
        grid.innerHTML = '';
        
        const filtered = galleryData.filter(item => {
            const matchCat = category === 'All' || item.category === category;
            const matchSearch = item.title.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search);
            return matchCat && matchSearch;
        });

        if(filtered.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">Tidak ada referensi yang ditemukan.</p>`;
            return;
        }

        filtered.forEach(item => {
            grid.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="${item.title}" class="card-img" style="height: 250px;">
                    <div class="card-content">
                        <span class="badge category">${item.category}</span>
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `;
        });
    },

    // --- AI REF HELPER ---
    appendPrompt(text) {
        const textarea = document.getElementById('ai-ref-prompt');
        textarea.value += (textarea.value ? ', ' : '') + text;
        textarea.focus();
    },

    copyText(elementId) {
        const text = document.getElementById(elementId).innerText;
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Teks berhasil disalin!', 'success');
        });
    },

    // --- AI FEEDBACK HELPER ---
    handleImageUpload(event) {
        const file = event.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setFeedbackImage(e.target.result);
        };
        reader.readAsDataURL(file);
    },

    useCanvasImage() {
        const canvas = document.getElementById('drawing-canvas');
        this.setFeedbackImage(canvas.toDataURL("image/png"));
        this.showToast('Gambar dari canvas dimuat!', 'success');
    },

    setFeedbackImage(dataUrl) {
        document.getElementById('upload-placeholder').style.display = 'none';
        const imgEl = document.getElementById('feedback-preview');
        imgEl.src = dataUrl;
        imgEl.style.display = 'block';
        document.getElementById('btn-get-feedback').disabled = false;
        geminiAPI.currentFeedbackImage = dataUrl;
    },

    // --- API KEY CONFIG ---
    saveApiKey() {
        const key = document.getElementById('gemini-api-key').value.trim();
        if(!key) {
            this.showToast('API Key tidak boleh kosong', 'error');
            return;
        }
        sessionStorage.setItem('CHEEZART_GEMINI_KEY', key);
        this.showToast('API Key berhasil disimpan di sesi ini', 'success');
        this.checkApiKeyUI();
    },

    removeApiKey() {
        sessionStorage.removeItem('CHEEZART_GEMINI_KEY');
        document.getElementById('gemini-api-key').value = '';
        this.showToast('API Key telah dihapus', 'normal');
        this.checkApiKeyUI();
    },

    checkApiKeyUI() {
        const key = sessionStorage.getItem('CHEEZART_GEMINI_KEY');
        const statusEl = document.getElementById('api-status');
        if(key) {
            statusEl.innerHTML = `<span style="color:var(--success)"><i class="fa-solid fa-check-circle"></i> API Key disetel</span>`;
        } else {
            statusEl.innerHTML = `<span style="color:var(--danger)"><i class="fa-solid fa-circle-exclamation"></i> API Key belum disetel</span>`;
        }
    }
};

// --- GEMINI API INTEGRATION ---
const geminiAPI = {
    currentFeedbackImage: null,

    getKey() {
        const key = sessionStorage.getItem('CHEEZART_GEMINI_KEY');
        if(!key) {
            app.navigate('api-key');
            app.showToast('API Key Gemini belum tersedia. Masukkan API Key yang valid.', 'error');
            return null;
        }
        return key;
    },

    async generateReference() {
        const key = this.getKey();
        if(!key) return;

        const promptInput = document.getElementById('ai-ref-prompt').value.trim();
        if(!promptInput) {
            app.showToast('Masukkan permintaan inspirasi terlebih dahulu.', 'error');
            return;
        }

        const btn = document.getElementById('btn-generate-ref');
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="loader"></span> Menghasilkan...`;
        btn.disabled = true;

        const systemPrompt = `Kamu adalah AI asisten Cheezart yang ramah. Berikan ide menggambar berdasarkan permintaan pengguna. 
        Gunakan bahasa Indonesia santai. Strukturkan jawaban: Tema, Pose, Mood, Palet Warna, dan Tips Singkat.
        Permintaan pengguna: ${promptInput}`;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${key}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: "user", parts: [{ text: systemPrompt }] }]
                })
            });

            const data = await response.json();
            
            if(data.error) throw new Error(data.error.message || "API Error");

            const resultText = data.candidates[0].content.parts[0].text;
            document.getElementById('ai-ref-result').style.display = 'block';
            let formattedText = resultText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            document.getElementById('ai-ref-content').innerHTML = formattedText;
            
        } catch (error) {
            console.error(error);
            if(error.message.includes('API_KEY_INVALID')) {
                app.showToast('API Key tidak valid. Silakan periksa kembali.', 'error');
            } else {
                app.showToast('Gagal memproses. Cek koneksi atau API Key kamu.', 'error');
            }
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    },

    async getFeedback() {
        const key = this.getKey();
        if(!key || !this.currentFeedbackImage) return;

        const btn = document.getElementById('btn-get-feedback');
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="loader"></span> Menganalisis...`;
        btn.disabled = true;

        const base64Image = this.currentFeedbackImage.split(',')[1];
        const mimeType = this.currentFeedbackImage.split(';')[0].split(':')[1];

        const prompt = `Kamu adalah mentor seni di platform Cheezart. Analisis gambar ini. 
        Gunakan bahasa Indonesia yang ramah, sangat suportif, dan tidak menghakimi (target: pemula/pelajar).
        Berikan feedback terstruktur:
        1. **Yang sudah bagus:** (puji aspek positifnya)
        2. **Yang bisa ditingkatkan:** (berikan saran teknis spesifik misal tentang proporsi, garis, atau warna secara lembut)
        3. **Tips latihan:** (latihan singkat untuk mereka)
        4. **Langkah berikutnya:** (saran belajar lanjutan dari materi Cheezart)`;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${key}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        role: "user",
                        parts: [
                            { text: prompt },
                            { inline_data: { mime_type: mimeType, data: base64Image } }
                        ]
                    }]
                })
            });

            const data = await response.json();
            if(data.error) throw new Error(data.error.message);

            const resultText = data.candidates[0].content.parts[0].text;
            document.getElementById('ai-feedback-result').style.display = 'block';
            let formattedText = resultText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            document.getElementById('ai-feedback-content').innerHTML = formattedText;

        } catch (error) {
            console.error(error);
            app.showToast('Gagal menganalisis gambar. Periksa API Key kamu.', 'error');
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }
};

// --- DRAWING CANVAS APP ---
const drawingApp = {
    canvas: null,
    ctx: null,
    isDrawing: false,
    currentTool: 'brush',
    color: '#1e1b4b',
    brushSize: 5,
    history: [],
    historyStep: -1,

    init() {
        this.canvas = document.getElementById('drawing-canvas');
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.saveHistory();
        this.bindEvents();
    },

    bindEvents() {
        this.canvas.addEventListener('mousedown', this.startPosition.bind(this));
        this.canvas.addEventListener('mouseup', this.endPosition.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseout', this.endPosition.bind(this));

        this.canvas.addEventListener('touchstart', (e) => { e.preventDefault(); this.startPosition(e.touches[0]); }, {passive: false});
        this.canvas.addEventListener('touchend', this.endPosition.bind(this));
        this.canvas.addEventListener('touchmove', (e) => { e.preventDefault(); this.draw(e.touches[0]); }, {passive: false});

        document.getElementById('btn-brush').addEventListener('click', (e) => this.setTool('brush', e.currentTarget));
        document.getElementById('btn-eraser').addEventListener('click', (e) => this.setTool('eraser', e.currentTarget));
        document.getElementById('btn-fill').addEventListener('click', (e) => this.setTool('fill', e.currentTarget));
        
        document.getElementById('brush-size').addEventListener('input', (e) => {
            this.brushSize = e.target.value;
            document.getElementById('brush-size-val').innerText = `${this.brushSize}px`;
        });
        document.getElementById('color-picker').addEventListener('input', (e) => this.setColor(e.target.value));
        
        document.getElementById('btn-clear').addEventListener('click', this.clearCanvas.bind(this));
        document.getElementById('btn-download').addEventListener('click', this.downloadCanvas.bind(this));
        document.getElementById('btn-undo').addEventListener('click', this.undo.bind(this));
        document.getElementById('btn-redo').addEventListener('click', this.redo.bind(this));
    },

    getPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    },

    startPosition(e) {
        const pos = this.getPos(e);
        if (this.currentTool === 'fill') {
            this.floodFill(Math.floor(pos.x), Math.floor(pos.y), this.hexToRgb(this.color));
            this.saveHistory();
            return;
        }
        this.isDrawing = true;
        this.draw(e);
    },

    endPosition() {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        this.ctx.beginPath();
        this.saveHistory();
    },

    draw(e) {
        if (!this.isDrawing) return;
        const pos = this.getPos(e);
        this.ctx.lineWidth = this.brushSize;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = (this.currentTool === 'eraser') ? '#ffffff' : this.color;

        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
    },

    setTool(tool, btnElement) {
        this.currentTool = tool;
        document.querySelectorAll('.tool-group .tool-btn').forEach(btn => btn.classList.remove('active'));
        if(btnElement) btnElement.classList.add('active');
    },

    setColor(colorHex) {
        this.color = colorHex;
        document.getElementById('color-picker').value = colorHex;
        if(this.currentTool === 'eraser') {
            this.setTool('brush', document.getElementById('btn-brush'));
        }
    },

    clearCanvas() {
        if(confirm('Apakah kamu yakin ingin menghapus seluruh gambar?')) {
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.saveHistory();
        }
    },

    downloadCanvas() {
        const link = document.createElement('a');
        link.download = 'cheezart-drawing.png';
        link.href = this.canvas.toDataURL();
        link.click();
    },

    saveHistory() {
        this.historyStep++;
        if (this.historyStep < this.history.length) this.history.length = this.historyStep;
        this.history.push(this.canvas.toDataURL());
    },

    undo() {
        if (this.historyStep > 0) {
            this.historyStep--;
            this.restoreCanvas();
        }
    },

    redo() {
        if (this.historyStep < this.history.length - 1) {
            this.historyStep++;
            this.restoreCanvas();
        }
    },

    restoreCanvas() {
        const img = new Image();
        img.src = this.history[this.historyStep];
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0);
        };
    },

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16), a: 255 } : {r:0, g:0, b:0, a:255};
    },

    floodFill(startX, startY, fillColor) {
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const pixelData = imageData.data;
        
        const startPos = (startY * this.canvas.width + startX) * 4;
        const startR = pixelData[startPos];
        const startG = pixelData[startPos + 1];
        const startB = pixelData[startPos + 2];
        const startA = pixelData[startPos + 3];

        if (startR === fillColor.r && startG === fillColor.g && startB === fillColor.b) return;

        const matchColor = (pos) => pixelData[pos] === startR && pixelData[pos+1] === startG && pixelData[pos+2] === startB && pixelData[pos+3] === startA;

        const colorPixel = (pos) => {
            pixelData[pos] = fillColor.r;
            pixelData[pos+1] = fillColor.g;
            pixelData[pos+2] = fillColor.b;
            pixelData[pos+3] = 255;
        };

        const pixelStack = [[startX, startY]];
        const width = this.canvas.width;
        const height = this.canvas.height;

        while (pixelStack.length) {
            const newPos = pixelStack.pop();
            const x = newPos[0];
            let y = newPos[1];
            
            let pos = (y * width + x) * 4;
            while (y >= 0 && matchColor(pos)) { y--; pos -= width * 4; }
            pos += width * 4; y++;
            
            let reachLeft = false; let reachRight = false;
            
            while (y++ < height && matchColor(pos)) {
                colorPixel(pos);
                if (x > 0) {
                    if (matchColor(pos - 4)) {
                        if (!reachLeft) { pixelStack.push([x - 1, y - 1]); reachLeft = true; }
                    } else if (reachLeft) reachLeft = false;
                }
                if (x < width - 1) {
                    if (matchColor(pos + 4)) {
                        if (!reachRight) { pixelStack.push([x + 1, y - 1]); reachRight = true; }
                    } else if (reachRight) reachRight = false;
                }
                pos += width * 4;
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    }
};

document.addEventListener('DOMContentLoaded', () => { app.init(); });