const pages = {

  // Di dalam pages di dataset.js
  home: [
        {
            section: 'hero',
            title: 'Fullstack Web Development<br>with DonatJS MVC',
            tagline: 'Membangun Masa Depan Web yang Ringan & Efisien',
            description: 'Program intensif yang dirancang untuk mencetak Web Developer profesional dengan penguasaan arsitektur minimalis, zero-dependency, dan performa tinggi.',
            imgClass: 'di-sls',
            badges: ['Batch 1 - 2026', 'Level: Intermediate', 'Metode: Project-Based Learning'],
            cta: { text: 'Mulai Belajar Sekarang &raquo;', link: 'learn' }
        },

        {
            section: 'features',
            items: [
                {
                    icon: 'di-person',
                    title: 'Target Peserta',
                    content: 'Mahasiswa Informatika, Web Developer junior, atau akademisi yang ingin mendalami **Clean Code** dan arsitektur framework mandiri.',
                    linkText: '+ Prasyarat',
                    linkTarget: 'home/visi'
                },
                {
                    icon: 'di-save',
                    title: 'Kurikulum Unggulan',
                    content: 'Kurikulum mencakup: Dasar JavaScript Modern, Arsitektur MVC, Keamanan Web (OWASP), hingga Deployment Static-First.',
                    linkText: '+ Lihat Silabus',
                    linkTarget: 'learn'
                },
                {
                    icon: 'di-setting',
                    title: 'Output Kursus',
                    content: 'Peserta akan memiliki portofolio aplikasi web nyata, sertifikat kompetensi BNSP (via asesmen), dan akses ke komunitas pengembang.',
                    linkText: '+ Detail Output',
                    linkTarget: 'home/biografi'
                }
            ]
        },

        {
            section: 'article',
            title: 'Informasi Akademik',
            layout: 'split',
            leftCol: {
                subtitle: 'Struktur Kurikulum',
                lines: [
                    '### Capaian Pembelajaran',
                    '1. Memahami filosofi **Minimal Web Infrastructure**.',
                    '2. Mampu membangun framework MVC dari nol.',
                    '3. Mengimplementasikan liveness detection (OpenCV/MediaPipe) di web.',
                    '---',
                    '### Jadwal Kelas',
                    '**Sesi Sinkronus:** Setiap Sabtu, 09.00 - 12.00 WIB',
                    '**Mentoring Mandiri:** Akses portal 24/7 melalui piawai.id.',
                    'link:Lihat Detail Kurikulum:home/visi'
                ]
            },
            rightCol: {
                subtitle: 'Profil Pengampu',
                lines: [
                    'Kursus ini dipandu langsung oleh:',
                    '**Wawan Sismadi, S.Kom., M.Kom.**',
                    '---',
                    'Dosen Tetap Universitas IPWIJA dan PhD Candidate di Universitas Ahmad Dahlan (UAD). Pendiri PT Sismadi Langit Solusi dan kreator **DonatJS**.',
                    '&bull; **Keahlian:** Software Architecture, Cybersecurity, IoT.',
                    '&bull; **SINTA ID:** 6848496 (Score: 259).',
                    '&bull; **Visi:** Menjembatani riset akademis dengan kebutuhan praktis industri.',
                    '---',
                    'link:Lihat Portofolio Lengkap:expertise'
                ]
            }
        },

// --- SUB-PAGE: BIOGRAFI PENGAMPU (?home/biografi) ---
        {
          id: 'biografi',
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Wawan Sismadi, S.Kom., M.Kom.',
              lines: [
                  '### Scholar-Entrepreneur',
                  'badge:Dosen Tetap IPWIJA',
                  'badge:PhD Candidate UAD',
                  '---',
                  'fokus pada penjembatanan antara riset akademis dan kebutuhan industri teknologi informasi.',
                  'link:Kembali ke Home:home'
              ]
          },
          rightCol: {
              subtitle: 'Latar Belakang',
              lines: [
                  'Sebagai Founder **PT Sismadi Langit Solusi**, beliau aktif mengembangkan solusi digital yang efisien.',
                  'table:[{"Sektor":"Pendidikan","Peran":"Dosen & Peneliti"},{"Sektor":"Industri","Peran":"Solution Architect"},{"Sektor":"Sertifikasi","Peran":"Asesor BNSP IT"}]',
                  '---',
                  'SINTA ID: 6848496'
              ]
          }
      },

      // --- SUB-PAGE: VISI TEKNOLOGI (?home/visi) ---
      {
          id: 'visi',
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Minimal Web Infrastructure',
              lines: [
                  '### Mengapa Zero-Dependency?',
                  'Di era modern, ketergantungan pada library pihak ketiga seringkali membuat aplikasi menjadi "gemuk" dan rentan keamanan.',
                  '---',
                  'link:Kembali ke Home:home'
              ]
          },
          rightCol: {
              subtitle: 'Pilar Utama',
              lines: [
                  'step:01:Efisiensi:Resource yang kecil berarti load time yang instan.',
                  'step:02:Keamanan:Meminimalisir celah dari library eksternal yang tidak terverifikasi.',
                  'step:03:Kemandirian:Memahami setiap baris kode yang ditulis (Clean Code).',
                  '---',
                  'Prinsip ini diterapkan sepenuhnya dalam pengembangan **DonatJS**.'
              ]
          }
      }

    ],


  learn: {
          categories: [
              {
                  name: 'Bagian 1: Fondasi & Arsitektur',
                  items: [
                      {
                          id: 'intro-js',
                          title: 'Pertemuan 1: Dasar JavaScript Modern',
                          lines: [
                              'JavaScript adalah motor utama di balik **DonatJS**. Kita akan fokus pada sintaks modern yang efisien.',
                              '---',
                              '### Materi Utama',
                              '1. **Variabel & Scope**: Perbedaan mendalam `let` vs `const`.',
                              '2. **Arrow Functions**: Penulisan fungsi yang ringkas untuk callback.',
                              '3. **DOM Manipulation**: Cara DonatJS berinteraksi dengan elemen HTML tanpa library luar.',
                              '---',
                              'skill:100%:Memahami ES6+ Syntax,Wajib',
                              'skill:100%:Event Listener Handling,Dasar'
                          ]
                      },
                      {
                          id: 'modul-02',
                          title: 'Pertemuan 2: Arsitektur MVC & Routing',
                          lines: [
                              'Mengenal pola **Model-View-Controller** yang digunakan dalam DonatJS untuk memisahkan data dan tampilan.',
                              '---',
                              '### Materi Utama',
                              '1. **Folder Structure**: Organisasi file di DonatJS.',
                              '2. **State Management**: Bagaimana data dikelola di `dataset.js`.',
                              '3. **Hash-based Routing**: Navigasi SPA (Single Page Application) tanpa reload.',
                              '---',
                              'step:2026:Arsitektur:Memahami alur data dari Dataset ke UI'
                          ]
                      }
                  ]
              },
              {
                  name: 'Kursus Web Desain — Slide',
                  items: [
                      {
                          id: 'slide-pengantar',
                          title: 'Pertemuan 1: Pengantar Web Desain',
                          lines: ['slide:pengantar-web-desain']
                      },
                      {
                          id: 'slide-prinsip',
                          title: 'Pertemuan 2: Prinsip Desain Visual',
                          lines: ['slide:prinsip-desain-visual']
                      },
                      {
                          id: 'slide-warna',
                          title: 'Pertemuan 3: Teori Warna',
                          lines: ['slide:teori-warna']
                      },
                      {
                          id: 'slide-tipografi',
                          title: 'Pertemuan 4: Tipografi Web',
                          lines: ['slide:tipografi-web']
                      },
                      {
                          id: 'slide-layout',
                          title: 'Pertemuan 5: Layout & Grid',
                          lines: ['slide:layout-grid']
                      },
                      {
                          id: 'slide-components',
                          title: 'Pertemuan 6: UI Components & Design System',
                          lines: ['slide:ui-components']
                      },
                      {
                          id: 'slide-ux',
                          title: 'Pertemuan 7: UX & User Research',
                          lines: ['slide:ux-research']
                      },
                      {
                          id: 'slide-wireframe',
                          title: 'Pertemuan 8: Wireframing & Prototyping',
                          lines: ['slide:wireframing']
                      }
                  ]
              },
              {
                  name: 'Bagian 2: UI & UX Implementation',
                  items: [
                      {
                          id: 'modul-04',
                          title: 'Pertemuan 4: Manipulasi Layout & Komponen',
                          lines: [
                              '**Manipulasi Layout & Komponen Antarmuka Dinamis**',
                              'Komponen yang baik terasa *invisible* — pengguna fokus pada konten, bukan cara menggunakannya.',
                              'Mempelajari teknik manipulasi visual untuk mendukung alur kerja CRUD. Fokus pada Modal, Toast Notification, dan transisi CSS.',
                              '---',
                              '### Mengapa Kita Butuh Komponen Ini?',
                              'card:Modal = Edit Tanpa Pindah Halaman:Mempertahankan konteks pengguna saat melakukan perubahan data.',
                              'card:Toast = Konfirmasi Real-time:Memberikan umpan balik aksi (sukses/gagal) secara elegan tanpa memblokir interaksi.',
                              '---',
                              '### Target Capaian Praktikum',
                              'skill:84%:HTML struktur modal dengan ID sistematis,Wajib',
                              'skill:84%:CSS modal overlay dengan opacity transition,Animasi',
                              'skill:84%:CSS toast dengan auto-hide concept,UX Modern',
                              'skill:84%:Responsivitas modal menggunakan min(),Mobile-Safe',
                              '---',
                              '### Aktivitas Praktikum',
                              'table:[{"Aktivitas": "Struktur Modal", "Detail Tugas": "Susun HTML modal form edit. Verifikasi ID input."}, {"Aktivitas": "CSS Overlay", "Detail Tugas": "Implementasi opacity transition dan pointer-events."}, {"Aktivitas": "Styling Toast", "Detail Tugas": "Desain toast .success (hijau) dan .error (merah)."}, {"Aktivitas": "Uji Visual", "Detail Tugas": "Toggle class via DevTools Console untuk cek animasi."}]'
                          ]
                      }
                  ]
              }
          ]
      },


exam: [
      {
          section: 'titleHero',
          title: 'Evaluasi Kompetensi:<br>DonatJS & Web Architecture'
      },
      {
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Informasi Ujian',
              lines: [
                  '**Status:** Tersedia (Batch 1)',
                  '**Durasi:** 30 Menit',
                  '**Passing Grade:** 80%',
                  '---',
                  '### Instruksi:',
                  '1. Masukkan kata sandi yang telah dibagikan melalui grup kelas.',
                  '2. Pastikan koneksi stabil; skor akan langsung dienkripsi setelah submit.',
                  '3. Sertifikat digital akan diterbitkan otomatis jika Anda lulus.'
              ]
          },
          rightCol: {
              subtitle: 'Akses Ujian',
              lines: ['form:quiz'], // Trigger engine quiz di script.js
              startTime: '2026-04-19T08:00:00',
              password: 'SLS2026',
              questions: [
                  {
                      q: 'Apa filosofi utama di balik penggunaan DonatJS dalam pengembangan web?',
                      options: [
                          'Mengandalkan banyak library pihak ketiga',
                          'Minimal Web Infrastructure & Zero-dependency',
                          'Hanya berjalan di sistem operasi tertentu'
                      ],
                      ans: btoa('Minimal Web Infrastructure & Zero-dependency')
                  },
                  {
                      q: 'Dalam arsitektur MVC DonatJS, di mana kita mendefinisikan struktur data halaman?',
                      options: ['index.html', 'style.css', 'dataset.js'],
                      ans: btoa('dataset.js')
                  },
                  {
                      q: 'Manakah fitur CSS yang digunakan untuk membuat modal responsif di modul 4?',
                      options: ['Fungsi min()', 'Float left', 'Table-layout'],
                      ans: btoa('Fungsi min()')
                  },
                  {
                      q: 'Teknologi apa yang direkomendasikan pengampu untuk implementasi face recognition offline?',
                      options: ['Flash Player', 'OpenCV.js / MediaPipe', 'Java Applet'],
                      ans: btoa('OpenCV.js / MediaPipe')
                  },
                  {
                      q: 'Apa fungsi utama dari komponen "Toast" dalam UX modern?',
                      options: [
                          'Memblokir interaksi pengguna sampai diklik',
                          'Memberikan feedback non-intrusif (auto-hide)',
                          'Menghapus seluruh database secara permanen'
                      ],
                      ans: btoa('Memberikan feedback non-intrusif (auto-hide)')
                  }
              ]
          }
      }
  ],

       'certificates': {
      'SLS-2026-001': {
            name: 'Wawan Sismadi',
            exam: 'Fundamental Cybersecurity',
            score: '98/100',
            date: '19 April 2026'
        },

        'SLS-2026-002': {
            name: 'Budi Santoso',
            exam: 'Fundamental Cybersecurity',
            score: '95/100',
            date: '19 April 2026'
        },
        'SLS-2026-003': {
            name: 'Ani Wijaya',
            exam: 'Web Development with DonatJS',
            score: '100/100',
            date: '20 April 2026'
        }
    },

    'order': [
        { section: 'titleHero', title: 'Verifikasi Sertifikat' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Cek Kredensial',
                lines: [
                    'Gunakan form di samping untuk melakukan validasi sertifikat pelatihan.',
                    '---',
                    '### Mengapa Verifikasi?',
                    'Menjamin keaslian dokumen yang diterbitkan oleh PT SLS.'
                ]
            },
            rightCol: {
                subtitle: 'Validasi',
                lines: ['form:validate-cert'] // Memicu input kredensial
            }
        }
    ],

    // Tambahkan objek 'profile' di dalam const pages = { ... }
    profile: [
      {
        section: 'titleHero',
        title: 'Profil Pengguna'
      },
      // Default fallback jika role tidak ditemukan
      {
        id: 'default',
        section: 'article',
        layout: 'split',
        leftCol: {
          subtitle: 'Akses Ditolak',
          lines: [
            'Profil yang Anda akses tidak tersedia.',
            '---',
            'link:Kembali ke Dashboard:home'
          ]
        },
        rightCol: {
          subtitle: 'Informasi',
          lines: [
            'Pastikan URL profil yang diakses valid.',
            'format:role:admin|guru|siswa'
          ]
        }
      },

      // ================= ADMIN PROFILE =================
      {
        id: 'admin',
        section: 'article',
        layout: 'split',
        leftCol: {
          subtitle: 'Admin Dashboard',
          lines: [
            'badge:Role: Administrator',
            'badge:Akses: Full',
            '---',
            '### Statistik Sistem',
            'card:Total Siswa: 124 Aktif',
            'card:Total Guru: 18 Terverifikasi',
            'card:Kursus Aktif: 8 Modul',
            'card:Kuis Tersedia: 24 Evaluasi',
            '---',
            'link:Kelola Siswa:profile/admin?tab=students',
            'link:Kelola Guru:profile/admin?tab=teachers',
            'link:Laporan Lengkap:order'
          ]
        },
        rightCol: {
          subtitle: 'Panel Kontrol',
          lines: [
            '### Aktivitas Terbaru',
            'table:[{"Aktivitas":"Login Guru","Waktu":"2 menit lalu","Status":"Sukses"},{"Aktivitas":"Submit Kuis","Waktu":"15 menit lalu","Status":"Diproses"},{"Aktivitas":"Enroll Siswa","Waktu":"1 jam lalu","Status":"Selesai"}]',
            '---',
            '### Quick Actions',
            'skill:100%:Tambah User Baru,Aksi',
            'skill:100%:Generate Laporan,Export',
            'skill:100%:Backup Database,Maintenance',
            '---',
            'form:{"fields":[{"label":"Pencarian","type":"text","placeholder":"Cari pengguna..."}],"submitText":"Cari"}'
          ]
        }
      },

      // ================= GURU PROFILE =================
      {
        id: 'guru',
        section: 'article',
        layout: 'split',
        leftCol: {
          subtitle: 'Dashboard Pengajar',
          lines: [
            'badge:Role: Guru',
            'badge:Mata Pelajaran: Web Development',
            '---',
            '### Kelas Aktif',
            'card:Batch 1 - DonatJS: 32 Siswa',
            'card:Batch 2 - Web Desain: 28 Siswa',
            'card:Mentoring: 12 Pertemuan',
            '---',
            '### Materi Terbaru',
            'step:2026-04:Modul 4:UI Components',
            'step:2026-04:Modul 5:Layout & Grid',
            'step:2026-05:Modul 6:UX Research (Draft)',
            '---',
            'link:Buat Kuis Baru:exam',
            'link:Lihat Progress Kelas:profile/guru?tab=progress'
          ]
        },
        rightCol: {
          subtitle: 'Monitoring Siswa',
          lines: [
            '### Performa Kuis',
            'table:[{"Siswa":"Ani Wijaya","Nilai":"95","Status":"Lulus"},{"Siswa":"Budi Santoso","Nilai":"88","Status":"Lulus"},{"Siswa":"Citra Dewi","Nilai":"72","Status":"Remedial"}]',
            '---',
            '### Tugas Pending',
            'skill:80%:Review Submission Modul 3,3 tersisa',
            'skill:60%:Feedback Kuis Bab 2,5 tersisa',
            'skill:40%:Update Materi Slide,2 tersisa',
            '---',
            'form:{"fields":[{"label":"Filter Kelas","type":"select","options":["Semua","Batch 1","Batch 2"]},{"label":"Catatan","type":"textarea","placeholder":"Catatan untuk siswa..."}],"submitText":"Kirim Feedback"}'
          ]
        }
      },

      // ================= SISWA PROFILE =================
      {
        id: 'siswa',
        section: 'article',
        layout: 'split',
        leftCol: {
          subtitle: 'Dashboard Pembelajaran',
          lines: [
            'badge:Role: Siswa',
            'badge:Batch: 1 - 2026',
            '---',
            '### Progres Kursus',
            'skill:85%:Fondasi & Arsitektur,Selesai',
            'skill:60%:UI & UX Implementation,Berjalan',
            'skill:20%:Project Final,Belum Dimulai',
            '---',
            '### Sertifikat',
            'card:Fundamental JS:Lulus • 92/100',
            'card: MVC Architecture:Lulus • 88/100',
            'badge:Next: Evaluasi Kompetensi',
            '---',
            'link:Lanjut Belajar:learn/modul-04',
            'link:Ambil Kuis:exam'
          ]
        },
        rightCol: {
          subtitle: 'Capaian & Target',
          lines: [
            '### Nilai Capaian',
            'table:[{"Modul":"Pertemuan 1","Nilai":"95","Tanggal":"12 Apr"},{"Modul":"Pertemuan 2","Nilai":"88","Tanggal":"19 Apr"},{"Modul":"Pertemuan 3","Nilai":"91","Tanggal":"26 Apr"}]',
            '---',
            '### Target Minggu Ini',
            'skill:100%:Selesaikan Modul 4,Deadline: 3 Mei',
            'skill:75%:Kerjakan Quiz Bab 2,Deadline: 5 Mei',
            'skill:30%:Upload Project Mini,Deadline: 10 Mei',
            '---',
            '### Notifikasi',
            'badge:Info:Sesi mentoring Sabtu 09.00 WIB',
            'badge:Update:Materi Slide 6 tersedia',
            'link:Lihat Semua:profile/siswa?tab=notifications'
          ]
        }
      },

      // ================= SISWA2 PROFILE (Contoh Variasi) =================
      {
        id: 'siswa2',
        section: 'article',
        layout: 'split',
        leftCol: {
          subtitle: 'Riwayat Pembelajaran',
          lines: [
            'badge:Role: Siswa',
            'badge:Status: Aktif',
            '---',
            '### Jalur Pembelajaran',
            'step:Jan 2026:Enroll:DonatJS Batch 1',
            'step:Feb 2026:Modul 1:Lulus • 90/100',
            'step:Mar 2026:Modul 2:Lulus • 85/100',
            'step:Apr 2026:Modul 3:Berjalan • 78/100',
            '---',
            '### Kompetensi Terkuasai',
            'skill:100%:ES6+ Syntax,Terkunci',
            'skill:100%:DOM Manipulation,Terkunci',
            'skill:85%:MVC Pattern,Berjalan',
            'skill:40%:Deployment,Belum',
            '---',
            'link:Download Transkrip:order',
            'link:Hubungi Mentor:home/biografi'
          ]
        },
        rightCol: {
          subtitle: 'Analytics Pribadi',
          lines: [
            '### Waktu Belajar',
            'table:[{"Minggu":"Week 1","Jam":"4.5h"},{"Minggu":"Week 2","Jam":"6.2h"},{"Minggu":"Week 3","Jam":"5.8h"},{"Minggu":"Week 4","Jam":"3.1h"}]',
            '---',
            '### Strength & Focus',
            'card:💪 Strong:JavaScript Fundamentals',
            'card:🎯 Focus:CSS Layout & Grid',
            'card:📈 Growth:+12% vs minggu lalu',
            '---',
            '### Rekomendasi',
            'skill:90%:Ulangi Materi Tipografi,Untuk kuis berikutnya',
            'skill:70%:Praktik Wireframing,Project-based',
            'skill:50%:Diskusi UX Research,Forum kelas',
            '---',
            'form:{"fields":[{"label":"Catatan Pribadi","type":"textarea","placeholder":"Target belajar minggu ini..."}],"submitText":"Simpan Target"}'
          ]
        }
      }
    ],

};






/**
 * Data slide Kursus Web Desain (pola PREP: Point–Reason–Example–Point)
 * Digunakan oleh component `slideViewer` di script.js via line handler 'slide:'
 */
const slideData = {
    'pengantar-web-desain': {
        title: 'Pertemuan 1: Pengantar Web Desain',
        slides: [
            { phase:'p', label:'POINT', title:'Apa itu <em>Web Desain</em>?', body:'Web desain adalah seni dan ilmu menciptakan pengalaman visual di browser. Bukan sekadar estetika — ini tentang komunikasi yang efektif antara manusia dan informasi.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa Web Desain <em>Penting?</em>', body:'Pengguna membentuk kesan tentang sebuah website dalam 50 milidetik.', type:'list', items:['Kesan pertama terjadi dalam 0.05 detik','94% kesan pertama berkaitan dengan desain','Website profesional meningkatkan konversi hingga 200%','Desain buruk menurunkan kredibilitas brand secara langsung'] },
            { phase:'r', label:'REASON', title:'Tiga Pilar <em>Web Desain</em>', body:'Web desain yang baik berdiri di atas tiga fondasi yang saling mendukung.', type:'cards', items:[{l:'Visual',v:'Estetika, tipografi, warna, layout'},{l:'Interaksi',v:'Bagaimana pengguna bergerak dan mengklik'},{l:'Konten',v:'Teks, gambar, video, data yang disampaikan'}] },
            { phase:'e', label:'EXAMPLE', title:'Studi Kasus: <em>Apple.com</em>', body:'Apple menggunakan prinsip desain minimalis yang konsisten.', type:'list', items:['Whitespace sebagai elemen desain aktif','Satu call-to-action dominan per layar','Tipografi sebagai hero — bukan dekorasi','Konsistensi visual di setiap halaman'], lc:'e' },
            { phase:'e', label:'EXAMPLE', title:'Workflow <em>Web Desainer</em>', body:'Proses profesional dari brief hingga launch.', type:'code', code:'1. Brief → memahami tujuan & target pengguna\n2. Research → analisis kompetitor & benchmark\n3. Wireframe → struktur & alur tanpa visual\n4. Visual Design → mockup high-fidelity\n5. Prototype → simulasi interaksi\n6. Handoff → spesifikasi untuk developer\n7. Launch & Iterate' },
            { phase:'e', label:'EXAMPLE', title:'Tools <em>Profesional</em>', body:'Ekosistem tools web desain modern.', type:'list', items:['Figma — desain & prototyping utama','VS Code — coding HTML/CSS/JS','Chrome DevTools — inspeksi & debug','GitHub — version control','Vercel/Netlify — deployment gratis'], lc:'e' },
            { phase:'p2', label:'POINT', title:'Desain adalah <em>Pemecahan Masalah</em>', body:'Web desain bukan tentang membuat sesuatu terlihat cantik. Ini tentang memecahkan masalah pengguna dengan cara yang elegan.', type:'text' }
        ]
    },
    'prinsip-desain-visual': {
        title: 'Pertemuan 2: Prinsip Desain Visual',
        slides: [
            { phase:'p', label:'POINT', title:'Prinsip adalah <em>Panduan Universal</em>', body:'Prinsip desain visual berlaku lintas medium — dari poster cetak hingga aplikasi mobile. Mereka adalah tata bahasa visual yang dipahami otak manusia secara intuitif.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa Prinsip Desain <em>Bekerja?</em>', body:'Prinsip desain lahir dari cara kerja persepsi visual manusia yang telah dipelajari selama berabad-abad.', type:'list', items:['Mata manusia mengikuti pola yang dapat diprediksi (F-pattern, Z-pattern)','Otak mencari konsistensi dan pola untuk memproses informasi lebih cepat','Kontras menarik perhatian ke elemen terpenting','Proximity menunjukkan hubungan antar elemen'] },
            { phase:'r', label:'REASON', title:'Hierarki Visual: <em>Siapa Bicara Duluan?</em>', body:'Hierarki visual mengontrol urutan mata melihat elemen.', type:'cards', items:[{l:'Ukuran',v:'Elemen besar = lebih penting. Headline > body > caption'},{l:'Kontras',v:'Elemen berbeda dari sekitarnya = menarik perhatian lebih'},{l:'Posisi',v:'Atas-kiri dibaca duluan (kultur baca kiri ke kanan)'}] },
            { phase:'e', label:'EXAMPLE', title:'Prinsip <em>Gestalt</em>', body:'Otak manusia melihat keseluruhan sebelum detail.', type:'list', items:['Proximity: elemen dekat dianggap satu kelompok','Similarity: elemen serupa dianggap berhubungan','Continuity: mata mengikuti garis dan kurva secara alami','Closure: otak melengkapi bentuk yang tidak sempurna'], lc:'e' },
            { phase:'e', label:'EXAMPLE', title:'Whitespace: <em>Ruang yang Berbicara</em>', body:'Whitespace adalah elemen desain aktif — bukan kekosongan yang terbuang.', type:'code', code:'.section  { padding: 80px 0; }\n.card     { padding: 24px; }\np + p     { margin-top: 1em; }' },
            { phase:'e', label:'EXAMPLE', title:'Alignment: <em>Tidak Ada yang Acak</em>', body:'Setiap elemen harus memiliki alasan visual untuk posisinya.', type:'list', items:['Kiri: default untuk teks panjang — paling nyaman dibaca','Tengah: judul, quote, CTA — hindari untuk paragraf','Kanan: angka, tanggal, metadata di tabel','Justify: hindari — menciptakan rivers of white'], lc:'e' },
            { phase:'p2', label:'POINT', title:'Ingat: Prinsip adalah <em>Panduan</em>', body:'Prinsip desain bukan penjara. Mereka adalah fondasi. Setelah kamu kuasai, kamu bisa melanggarnya secara intentional — tapi kamu harus tahu mengapa.', type:'text' }
        ]
    },
    'teori-warna': {
        title: 'Pertemuan 3: Teori Warna untuk Web',
        slides: [
            { phase:'p', label:'POINT', title:'Warna adalah <em>Bahasa</em>', body:'Warna berkomunikasi sebelum pengguna membaca satu kata pun. Pemilihan warna yang tepat membangun kepercayaan, emosi, dan identitas brand secara instan.', type:'text' },
            { phase:'r', label:'REASON', title:'Psikologi Warna dalam <em>Konteks Digital</em>', body:'Setiap warna membawa asosiasi psikologis yang kuat dan konsisten lintas budaya.', type:'list', items:['Biru: kepercayaan, teknologi — Facebook, Twitter, PayPal','Hijau: pertumbuhan, alam, finansial — WhatsApp, Shopee','Orange: energi, call-to-action — Amazon tombol beli','Hitam: premium, luxury — Apple, Chanel','Merah: urgensi, diskon — Shopee promo, error state'] },
            { phase:'r', label:'REASON', title:'Sistem Warna: <em>60-30-10</em>', body:'Aturan klasik yang selalu bekerja untuk web interface.', type:'cards', items:[{l:'60% Dominan',v:'Warna latar belakang utama. Biasanya netral: putih, abu, hitam'},{l:'30% Sekunder',v:'Warna pendukung untuk surface, card, sidebar'},{l:'10% Aksen',v:'Brand color untuk CTA, link, highlight. Harus mencolok'}] },
            { phase:'e', label:'EXAMPLE', title:'Membangun <em>Color Palette</em>', body:'Mulai dari satu warna brand, lalu derive seluruh sistem.', type:'code', code:':root {\n  --color-brand:   #DF8C43;\n  --color-bg:      #0D0D0F;\n  --color-surface: #16161A;\n  --color-text:    #F0EEE8;\n  --color-muted:   #888880;\n  --color-success: #5DCAA5;\n  --color-danger:  #E24B4A;\n}' },
            { phase:'e', label:'EXAMPLE', title:'Aksesibilitas Warna: <em>WCAG AA</em>', body:'Kontras minimum 4.5:1 untuk teks normal, 3:1 untuk teks besar.', type:'list', items:['Putih #FFF di atas hitam #000 = ratio 21:1 (sempurna)','Abu #888 di atas putih #FFF = ratio 3.9:1 (GAGAL untuk teks kecil)','Kuning #FFD700 di atas putih #FFF = ratio 1.8:1 (tidak aksesibel)','Tools: WebAIM Contrast Checker, browser DevTools'], lc:'e' },
            { phase:'e', label:'EXAMPLE', title:'Dark Mode & <em>Light Mode</em>', body:'Desain modern harus mendukung kedua mode.', type:'code', code:'@media (prefers-color-scheme: dark) {\n  :root { --color-bg: #0D0D0F; --color-text: #F0EEE8; }\n}\n@media (prefers-color-scheme: light) {\n  :root { --color-bg: #FAFAF8; --color-text: #0D0D0F; }\n}' },
            { phase:'p2', label:'POINT', title:'Satu Aksen, <em>Banyak Nuansa</em>', body:'Desainer hebat tidak menggunakan banyak warna — mereka menguasai sedikit warna dengan sangat baik. Satu warna aksen dengan 9 shade lebih powerful dari 10 warna acak.', type:'text' }
        ]
    },
    'tipografi-web': {
        title: 'Pertemuan 4: Tipografi Web',
        slides: [
            { phase:'p', label:'POINT', title:'Tipografi adalah <em>95% Web</em>', body:'Web pada dasarnya adalah teks. Desainer yang menguasai tipografi menguasai web. Oliver Reichenstein: Web design is 95% typography.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa Font <em>Mempengaruhi Persepsi?</em>', body:'Font bukan sekadar wadah huruf. Mereka membawa kepribadian, suasana, dan sinyal kepercayaan.', type:'list', items:['Serif: tradisional, otoritatif — koran, lembaga akademik','Sans-serif: modern, bersih — sebagian besar startup tech','Monospace: teknis, kode — developer tools, terminal','Display: ekspresif, branding — logo, headline besar saja'] },
            { phase:'r', label:'REASON', title:'Hierarki Tipografi: <em>Type Scale</em>', body:'Type scale yang konsisten menciptakan ritme visual.', type:'cards', items:[{l:'Display 48-72px',v:'Hero headline, satu per halaman'},{l:'H1 32-40px',v:'Judul section utama'},{l:'H2 24-28px',v:'Sub-section, card title'},{l:'Body 16-18px',v:'Teks paragraf — jangan di bawah 16px'},{l:'Small 12-14px',v:'Label, caption, metadata'}] },
            { phase:'e', label:'EXAMPLE', title:'Google Fonts: <em>Pair yang Bekerja</em>', body:'Pasangan font yang terbukti bekerja untuk web Indonesia.', type:'list', items:['Playfair Display + Source Sans Pro — editorial, elegan','Fraunces + DM Sans — modern editorial, unik','Sora + Noto Sans — cocok untuk bahasa Indonesia','Bebas Neue + Open Sans — bold display + readable body'], lc:'e' },
            { phase:'e', label:'EXAMPLE', title:'CSS Tipografi <em>Profesional</em>', body:'Setup tipografi yang benar dari awal.', type:'code', code:'body {\n  font-size: 16px;\n  line-height: 1.7;\n  -webkit-font-smoothing: antialiased;\n}\nh1, h2, h3 {\n  line-height: 1.15;\n  font-weight: 700;\n}\np + p { margin-top: 1em; }' },
            { phase:'e', label:'EXAMPLE', title:'Lebar Baris <em>Nyaman Dibaca</em>', body:'Panjang baris ideal adalah 45-75 karakter per baris.', type:'code', code:'.prose {\n  max-width: 65ch;\n  margin-inline: auto;\n}' },
            { phase:'p2', label:'POINT', title:'Kuasai Dua Font, <em>Bukan Dua Puluh</em>', body:'Pilih satu font display yang berkarakter kuat, satu font body yang sangat mudah dibaca. Itulah sistem tipografi yang cukup untuk 99% project web.', type:'text' }
        ]
    },
    'layout-grid': {
        title: 'Pertemuan 5: Layout & Grid System',
        slides: [
            { phase:'p', label:'POINT', title:'Grid adalah <em>Bahasa Tersembunyi</em>', body:'Pengguna tidak melihat grid — tapi mereka merasakannya. Layout yang menggunakan grid terasa rapi, dapat dipercaya, profesional.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa Grid <em>Bukan Opsional?</em>', body:'Grid menyediakan struktur yang memungkinkan otak manusia memproses informasi lebih cepat.', type:'list', items:['Konsistensi: elemen di posisi yang bisa diprediksi','Fleksibilitas: sistem yang sama bekerja di mobile dan desktop','Kecepatan produksi: tidak perlu berpikir ulang tiap elemen','Kolaborasi: developer bisa implementasi tanpa tebak-tebakan'] },
            { phase:'r', label:'REASON', title:'CSS Grid vs <em>Flexbox</em>', body:'Dua tools berbeda untuk kebutuhan berbeda.', type:'cards', items:[{l:'CSS Grid',v:'Layout 2D: baris DAN kolom. Untuk struktur halaman, card grid'},{l:'Flexbox',v:'Layout 1D: baris ATAU kolom. Untuk navigasi, komponen'},{l:'Kombinasi',v:'Grid untuk macro layout, Flexbox untuk micro component'}] },
            { phase:'e', label:'EXAMPLE', title:'12-Column Grid <em>Klasik</em>', body:'Sistem 12 kolom bekerja karena 12 bisa dibagi 1, 2, 3, 4, 6.', type:'code', code:'.grid-12 {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 24px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n.col-4  { grid-column: span 4; }\n.col-6  { grid-column: span 6; }\n.col-8  { grid-column: span 8; }\n.col-12 { grid-column: span 12; }' },
            { phase:'e', label:'EXAMPLE', title:'Responsive Grid dengan <em>auto-fit</em>', body:'Grid yang otomatis menyesuaikan jumlah kolom tanpa media query.', type:'code', code:'.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}' },
            { phase:'e', label:'EXAMPLE', title:'Spacing System: <em>8px Base Unit</em>', body:'Semua jarak adalah kelipatan 8.', type:'list', items:['4px — micro: icon ke teks','8px — kecil: padding kecil, gap antar item','16px — medium: padding komponen, gap card','24px — besar: section internal','48px — section: pemisah antar blok konten','80px — hero: padding section di desktop'], lc:'e' },
            { phase:'p2', label:'POINT', title:'Grid adalah <em>Kebebasan</em>', body:'Grid bukan penjara. Grid adalah sistem yang membebaskanmu dari keputusan trivial sehingga energi kreatifmu bisa fokus ke hal yang benar-benar penting.', type:'text' }
        ]
    },
    'ui-components': {
        title: 'Pertemuan 6: UI Components & Design System',
        slides: [
            { phase:'p', label:'POINT', title:'Komponen adalah <em>Atom UI</em>', body:'Design system modern membangun antarmuka dari komponen yang bisa dipakai ulang seperti LEGO. Satu komponen dibuat dengan benar, dipakai ratusan kali tanpa inkonsistensi.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa Design System <em>Penting?</em>', body:'Tanpa design system, tim desain akan terus membuat ulang elemen yang sama dengan variasi yang tidak disengaja.', type:'list', items:['Konsistensi: 50 tombol di 50 halaman terlihat sama persis','Kecepatan: komponen baru dari kombinasi atom yang sudah ada','Skalabilitas: 1 perubahan = update di seluruh produk','Komunikasi: desainer dan developer berbicara bahasa yang sama'] },
            { phase:'r', label:'REASON', title:'Atomic Design: <em>5 Level</em>', body:'Metodologi Brad Frost untuk mengorganisasi design system.', type:'cards', items:[{l:'Atoms',v:'Elemen terkecil: button, input, label, icon, badge'},{l:'Molecules',v:'Kombinasi atom: search bar = input + button + icon'},{l:'Organisms',v:'Header = logo + nav + search bar'},{l:'Templates',v:'Layout halaman dengan placeholder konten'},{l:'Pages',v:'Template + konten nyata — apa yang user lihat'}] },
            { phase:'e', label:'EXAMPLE', title:'Anatomi Tombol <em>yang Benar</em>', body:'Satu tombol memiliki banyak state yang harus didesain.', type:'code', code:'.btn {\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: var(--color-brand);\n  color: #000; border: none;\n  cursor: pointer;\n  transition: all .15s ease;\n}\n.btn:hover    { opacity: .88; }\n.btn:active   { transform: scale(.97); }\n.btn:disabled { opacity: .4; cursor: not-allowed; }' },
            { phase:'e', label:'EXAMPLE', title:'Form Input yang <em>Aksesibel</em>', body:'Input yang baik selalu punya label, placeholder, error state, dan focus ring yang jelas.', type:'code', code:'<label for="email">Alamat email</label>\n<input\n  type="email" id="email"\n  placeholder="nama@domain.com"\n  autocomplete="email"\n  aria-describedby="email-hint"\n/>\n<span id="email-hint" class="hint">\n  Kami tidak akan spam kamu.\n</span>' },
            { phase:'e', label:'EXAMPLE', title:'CSS Custom Properties sebagai <em>Design Token</em>', body:'Token adalah nama yang diberikan untuk keputusan desain.', type:'list', items:['--color-brand: keputusan warna aksen','--spacing-sm / md / lg: keputusan jarak','--radius-md: keputusan sudut elemen','--font-sans / serif: keputusan tipografi','--shadow-lg: keputusan kedalaman elevasi'], lc:'e' },
            { phase:'p2', label:'POINT', title:'Buat Sekali, <em>Pakai Seterusnya</em>', body:'Investasi waktu membangun komponen yang benar di awal akan menghemat puluhan jam di masa depan. Design system bukan overhead — ini adalah multiplier produktivitas.', type:'text' }
        ]
    },
    'ux-research': {
        title: 'Pertemuan 7: UX & User Research',
        slides: [
            { phase:'p', label:'POINT', title:'Desain tanpa Riset adalah <em>Tebakan</em>', body:'UX bukan tentang apa yang kamu pikir pengguna inginkan. Ini tentang apa yang pengguna benar-benar butuhkan — dan hanya riset yang bisa menjawabnya.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa UX Research <em>Bukan Kemewahan?</em>', body:'Biaya memperbaiki masalah UX setelah launch 100x lebih mahal daripada menemukan masalah sebelum kode ditulis.', type:'list', items:['Setiap $1 di UX menghasilkan ROI $2-100','85% masalah UX dapat ditemukan dengan hanya 5 penguji','Keranjang belanja ditinggalkan 70% karena UX buruk','Pengguna tidak melaporkan masalah — mereka langsung pergi'] },
            { phase:'r', label:'REASON', title:'Empathy Map: <em>Memahami Pengguna</em>', body:'Sebelum desain, jawab 4 pertanyaan tentang pengguna target.', type:'cards', items:[{l:'Think & Feel',v:'Apa yang ada di pikiran dan hati mereka?'},{l:'See',v:'Apa yang mereka lihat di lingkungan penggunaan?'},{l:'Say & Do',v:'Apa yang mereka katakan dan lakukan secara aktual?'},{l:'Hear',v:'Apa yang mereka dengar dari orang-orang di sekitar?'}] },
            { phase:'e', label:'EXAMPLE', title:'User Interview: <em>5 Pertanyaan Kunci</em>', body:'Teknik interview yang mengungkap insight nyata.', type:'list', items:['"Ceritakan terakhir kali kamu [task X]..." — konteks nyata','"Apa yang paling membuat frustrasi?" — pain point','"Kalau ada tongkat ajaib, kamu ubah apa?" — ideal state','"Tunjukkan bagaimana kamu biasanya melakukan ini?" — observasi','"Apa yang kamu lakukan sebelumnya saat butuh X?" — workaround'], lc:'e' },
            { phase:'e', label:'EXAMPLE', title:'Usability Testing: <em>Think Aloud</em>', body:'Minta pengguna melakukan task sambil berbicara keras tentang apa yang mereka pikirkan.', type:'code', code:'1. Jelaskan: tidak ada jawaban benar/salah.\n   Kami menguji produk, bukan kamu.\n\n2. Minta: katakan dengan keras apa\n   yang kamu pikirkan saat ini.\n\n3. Task: coba beli produk seharga < 100rb.\n\n4. Diam & catat. Jangan bantu.\n\n5. Debrief: apa yang paling membingungkan?' },
            { phase:'e', label:'EXAMPLE', title:'Heuristik Nielsen: <em>10 Prinsip Usability</em>', body:'Evaluasi heuristik — audit UX tanpa pengguna nyata.', type:'list', items:['Visibility of system status: selalu tunjukkan apa yang terjadi','User control & freedom: selalu ada undo dan keluar darurat','Consistency & standards: ikuti konvensi platform','Error prevention: desain yang mencegah error lebih baik dari pesan error'], lc:'e' },
            { phase:'p2', label:'POINT', title:'Riset Tidak Harus <em>Mahal</em>', body:'5 pengguna, 1 jam observasi, catatan sederhana — sudah cukup untuk menemukan 85% masalah utama. Setiap insight dari pengguna nyata lebih berharga dari 100 asumsi terbaik.', type:'text' }
        ]
    },
    'wireframing': {
        title: 'Pertemuan 8: Wireframing & Prototyping',
        slides: [
            { phase:'p', label:'POINT', title:'Wireframe: <em>Sketsa Sebelum Cat</em>', body:'Wireframe adalah blueprint antarmuka. Kotak abu-abu tanpa warna dan foto. Tujuannya satu: memvalidasi struktur dan alur sebelum investasi visual yang mahal.', type:'text' },
            { phase:'r', label:'REASON', title:'Mengapa Wireframe <em>Dulu?</em>', body:'Mengubah kotak abu-abu 10x lebih cepat daripada mengubah desain high-fidelity.', type:'list', items:['Fokus pada struktur: di mana tombol, teks, gambar ditempatkan','Fokus pada alur: bagaimana pengguna berpindah dari A ke B ke C','Iterasi cepat: 10 versi wireframe dalam waktu 1 desain hi-fi','Komunikasi awal: client bisa approve struktur sebelum visual'] },
            { phase:'r', label:'REASON', title:'Fidelitas Wireframe: <em>Tiga Level</em>', body:'Pilih level fidelitas sesuai tahap project.', type:'cards', items:[{l:'Lo-Fi',v:'Sketsa tangan atau balok kotak. Menit, bukan jam.'},{l:'Mid-Fi',v:'Digital, abu-abu, tanpa foto. Figma atau Balsamiq.'},{l:'Hi-Fi',v:'Desain lengkap dengan warna, font, foto. Untuk handoff dev.'}] },
            { phase:'e', label:'EXAMPLE', title:'Wireframe dengan <em>ASCII Art</em>', body:'Sebelum tools, wireframe bisa dibuat di text editor.', type:'code', code:'[Logo]  Nav  Nav  Nav  [Login]\n===============================\n  Judul Hero\n  Sub teks hero\n  [ CTA Button ]\n===============================\n [Card] [Card] [Card]' },
            { phase:'e', label:'EXAMPLE', title:'Prototype Interaktif: <em>Figma Basics</em>', body:'Prototype Figma menghubungkan frame dengan link — simulasi navigasi tanpa kode.', type:'list', items:['Frame = satu halaman atau state antarmuka','Connection = arrow dari elemen ke frame tujuan','Interaction = trigger (click/hover) + animation','Preview: Ctrl+P — buka prototype mode','Share: siapapun bisa melihat tanpa install Figma'], lc:'e' },
            { phase:'e', label:'EXAMPLE', title:'User Flow Diagram: <em>Peta Perjalanan</em>', body:'Sebelum wireframe, petakan semua jalur yang bisa ditempuh pengguna.', type:'code', code:'[Landing Page]\n  klik Daftar\n[Form Registrasi]\n  berhasil          gagal\n[Dashboard]     [Form + Error]\n  klik Mulai Kursus\n[Halaman Kursus]\n  selesai modul\n[Quiz] -- [Sertifikat]' },
            { phase:'p2', label:'POINT', title:'Fail Early, <em>Fail Cheap</em>', body:'Wireframe dan prototype adalah alat untuk gagal dengan cepat dan murah, sebelum kode yang mahal ditulis. Setiap iterasi di wireframe menghemat jam development di kemudian hari.', type:'text' }
        ]
    }
};

  // http://localhost/sb/sb/?cert/SLS-2026-001
