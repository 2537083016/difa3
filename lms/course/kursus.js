var kursus={

model:{
host:'http://localhost/lms/api/lms.php',
role:'tutor',
table:{id:'menu',data:[
{id:1,induk:0,nama:"Pemrograman Web",isi:1,icon:"code",url:"kursus.controller.menu(1)"},
{id:2,induk:1,nama:"Modul 01",isi:1,icon:"eye",url:"kursus.controller.video('WpW36ldAqnM')"},
{id:3,induk:1,nama:"Modul 02",isi:2,icon:"eye",url:"pdf('pdf01.pdf')"},
{id:4,induk:1,nama:"Kuis",isi:2,icon:"eye",url:"kuis.controller('kuis-web')"},
{id:5,induk:1,nama:"Sertifikat",isi:2,icon:"eye",url:"sertifikat.controller('kuis-web')"},
]},
},

view:{
menu:function(arr){
out=`
<div class="row shadow">
<div id="card" class="col-1-1">  ${d.view.card(arr)}
</div>
</div>`;
return out;
},
kursus: function(arr) {
        var { data } = arr;

        // Mengambil daftar unik untuk filter agar checkbox otomatis mengikuti isi data
        const kategoris = [...new Set(data.map(item => item.kategori))];
        const instrukturs = [...new Set(data.map(item => item.instruktur))];
        const lembagas = [...new Set(data.map(item => item.lembaga))];

        let out = `
        <div class="row shadow" style="padding: 20px; background: #fff; margin-bottom: 20px; border-radius: 10px; border: 1px solid #eee;">
            <div class="col-1-1" style="margin-bottom: 15px;">
                <input type="text" id="searchKursus" placeholder="Cari judul kursus..."
                       onkeyup="kursus.controller.filter()"
                       style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-size: 16px;">
            </div>

            <div class="col-1-3">
                <strong>Kategori:</strong><br>
                ${kategoris.map(k => `<label style="display:block;"><input type="checkbox" class="f-kat" value="${k}" onchange="kursus.controller.filter()"> ${k}</label>`).join('')}
            </div>
            <div class="col-1-3">
                <strong>Instruktur:</strong><br>
                ${instrukturs.map(i => `<label style="display:block;"><input type="checkbox" class="f-ins" value="${i}" onchange="kursus.controller.filter()"> ${i}</label>`).join('')}
            </div>
            <div class="col-1-3">
                <strong>Lembaga:</strong><br>
                ${lembagas.map(l => `<label style="display:block;"><input type="checkbox" class="f-lem" value="${l}" onchange="kursus.controller.filter()"> ${l}</label>`).join('')}
            </div>
        </div>

        <div class="row shadow">
            <div id="card-container" class="col-1-1">
                ${this.renderCards(data)}
            </div>
        </div>`;
        return out;
    },

    renderCards: function(data) {
        if (data.length === 0) return "<div style='padding:40px; text-align:center; width:100%;'><h3>Kursus tidak ditemukan.</h3></div>";

        let step = data.length > 4 ? 4 : data.length;
        let out = "";
        for (let i in data) {
            var { id, judul, icon, instruktur, lembaga } = data[i];
            out += `
            <div class="col-1-${step}">
                <div class="ag"> ${svg.icon(icon)}
                    <div class="ag-menu">
                        <div class="ag-title">${judul}</div>
                        <div class="ag-desc">
                            <small>${instruktur} | ${lembaga}</small><br><br>
                            <input type="button" onclick="kursus.controller.materi(${id})" value="Lihat Materi">
                        </div>
                    </div>
                </div>
            </div>`;
        }
        return out;
    },

    materi: function(arr) {

      log(arr)
        // 1. Validasi Data & Destructuring Aman
        if (!arr.kursus || arr.kursus.length === 0) {
            return `<div class="row"><div class="col-1-1">Data kursus tidak ditemukan.</div></div>`;
        }

        // Mengambil data dari baris pertama array kursus
        const k = arr.kursus[0];

        // Gunakan nilai default jika field kosong agar tidak muncul 'undefined'
        const judulKursus = k.judul || k.kursus || "Judul Tidak Tersedia";
        const kategori = k.kategori || "Umum";
        const progres = k.progress_kursus || 0;
        const deskripsi = k.deskripsi || "Belum ada deskripsi untuk kursus ini.";
        const instruktur = k.instruktur || "Anonim";
        const lembaga = k.lembaga || "Piawai";

        // 2. Build UI Header
        let out = `
        <div class="row">
            <div class="ag"> ${svg.icon('buku')}
                <div class="ag-menu">
                    <div class="ag-title">
                        <small>${kategori}</small>
                        <h1 style="margin: 5px 0;">${judulKursus}</h1>
                    </div>
                    <div class="row">
                        <strong>${progres}% Progres</strong><br>
                        <small>72 Jam | Gratis | ${k.peserta_count || 0} Peserta</small>
                    </div>
                </div>
            </div>

            <div class="ag" style="margin-top: 20px;">
                <div class="row">
                    <h3>Deskripsi</h3>
                    <p>${deskripsi}</p>
                </div>
                <div class="row" style="margin-top:10px; border-top: 1px solid #eee; padding-top: 10px;">
                    <strong>Instruktur:</strong> <a href="#">${instruktur}</a> |
                    <strong>Lembaga:</strong> <a href="#">${lembaga}</a>
                </div>
            </div>

            <h3 style="margin-left: 10px; margin-top: 30px;">Modul Pembelajaran</h3>
        `;

        // 3. Render Modul (Grid Responsif)
        if (arr.modul && arr.modul.length > 0) {
            // Batasi kolom maksimal 4 agar tidak terlalu lebar jika modul sedikit
            let step = arr.modul.length;
            if (step > 4) step = 4;
            if (step < 1) step = 1;

            for (let i in arr.modul) {
                var m = arr.modul[i];
                out += `
                <div class="col-1-${step}">
                    <div class="ag"> ${svg.icon(m.icon || 'eye')}
                        <div class="ag-menu">
                            <div class="ag-title">${m.modul}</div>
                            <div class="ag-desc">
                                <input type="button"
                                       onclick="kursus.controller.baca(${m.id_modul}, ${m.url})"
                                       value="${m.status_modul || 'Buka'}"
                                       style="width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        } else {
            out += `<div class="col-1-1"><p style="padding-left: 10px;">Belum ada modul yang tersedia.</p></div>`;
        }

        out += `</div>`;
        return out;
    },

materis:function(arr){ var {kategori,kursus,progress_kursus}=arr.kursus[0];
nah=arr.kursus
log(nah)
// res=JSON.parse(json);


// <input type="button" onclick="kursus.controller.menu(0)" value="Learn" >
// <input type="button" onclick="kursus.controller.sertifikat(nah)" value="Download Sertifikat" >


out=`<div class="row">

<div class="ag"> ${svg.icon('buku')}
  <div class="ag-menu" >
    <div class="ag-title">
    ${kategori}
    <h1>${kursus}</h1>
    </div>

    <div class="row">
    ${progress_kursus}% Progres<br>
    72 Jam | Rp.0 | 22 Peserta
     </div>
  </div>
  </div>


<div class="ag" >
<div class="row">
<h3>Deskripsi</h3>
Pemrograman Web adalah kursus yang membahas cara membangun aplikasi dan website modern yang interaktif, responsif, dan siap produksi, mulai dari dasar hingga praktik nyata.
Peserta akan mempelajari bagaimana sebuah website bekerja, mulai dari struktur halaman, tampilan visual, hingga logika pemrosesan data di sisi server dan browser. Kursus ini dirancang berbasis praktik, sehingga setiap materi langsung diterapkan dalam bentuk proyek.
</div>
<div class="row" style="margin-top:10px;">
<a href="#" alt="Sismadi">Sismadi</a> | <a href="#" alt="Piawai">Piawai</a>
</div>
<h3>Modul</h3>

`;


step=arr.modul.length;
if (step>4){step=4;}
for(i in arr.modul){var {modul,status_modul,id_modul,icon,url}=arr.modul[i];

out+=`
<div class="col-1-${step}" >
<div class="ag" > ${svg.icon(icon)}
  <div class="ag-menu" >
    <div class="ag-title">${modul}</div>

    <div class="ag-desc">
    <input type="button" onclick="kursus.controller.baca(${id_modul},${url})" value="${status_modul}" >
    </div>
  </div>
</div>
</div>`;
}
out+=`</div>
`;
return out;
},

},

controller:{
  view:function(){
    d.service.host=kursus.model.host;
    d.service.param={t:'kursus', mod:'table',nama:'users'};
    d.service.get(callback);
    function callback(json){
    res=JSON.parse(json);
    table.data=res.data;
    log(res.data)
    // table.data=materi.model.table.data;
    d.controller.view()
    }
  },


daftar: async function(idpeserta,idkursus,func){
await kursus.controller.didaftar(idpeserta,idkursus);
},

baca: async function(i, func){
await kursus.controller.dibaca(i);
},

nilai: async function(arr,func){
await kursus.controller.dinilai(arr);
},

didaftar:function(idpeserta,idkursus){
d.service.host=kursus.model.host;
d.service.param={t:'view_kursus', mod:'daftarKursus',nama:{namas:Number(idkursus),namap:Number(idpeserta)}};
d.service.get(callback);
function callback(json){res=JSON.parse(json);}
},

dibaca:function(i){
d.service.host=kursus.model.host;
d.service.param={t:'view_kursus', mod:'dibaca',nama:i};
d.service.get(callback);
function callback(json){res=JSON.parse(json);}
},

dinilai:function(arr){
arr['idp']=1;
arr['idk']=1;
d.service.host=kursus.model.host;
d.service.param={t:'view_kursus', mod:'nilai',nama:arr};
d.service.get(callback);
function callback(json){res=JSON.parse(json);

alert(arr['nilai'])

}

},
masterData: [], // Tempat menyimpan data asli dari API

    kursus: function(i) {
        d.service.host = kursus.model.host;
        d.service.param = { t: 'kursus', mod: 'table', nama: 'users' }; // Sesuaikan param API Anda
        d.service.get((json) => {
            let res = JSON.parse(json);
            // Simpan data ke masterData untuk keperluan filter
            kursus.controller.masterData = res.data;
            d.gebi('content').innerHTML = kursus.view.kursus(res);
        });
    },

    filter: function() {
        let search = d.gebi('searchKursus').value.toLowerCase();

        // Fungsi helper untuk mengambil value checkbox yang tercentang
        let getChecked = (cls) => Array.from(document.querySelectorAll(cls + ':checked')).map(el => el.value);

        let selKategori = getChecked('.f-kat');
        let selInstruktur = getChecked('.f-ins');
        let selLembaga = getChecked('.f-lem');

        // Proses Filter Data
        let filtered = kursus.controller.masterData.filter(item => {
            // Cocokkan judul (case insensitive)
            let matchSearch = item.judul.toLowerCase().includes(search);

            // Cocokkan checkbox (jika kosong berarti tampilkan semua)
            let matchKat = selKategori.length === 0 || selKategori.includes(item.kategori);
            let matchIns = selInstruktur.length === 0 || selInstruktur.includes(item.instruktur);
            let matchLem = selLembaga.length === 0 || selLembaga.includes(item.lembaga);

            return matchSearch && matchKat && matchIns && matchLem;
        });

        // Update tampilan card saja
        d.gebi('card-container').innerHTML = kursus.view.renderCards(filtered);
    },

materi:function(idk){
// idk=1;
d.service.host=kursus.model.host;
d.service.param={mod:'view_peserta_modul',nama:idk};
d.service.get(callback);
function callback(json){
res=JSON.parse(json);
d.gebi('content').innerHTML=kursus.view.materi(res);
}
},


video:function(vid){
var vid=mp4.view();
d.modal(vid)
mp4.controller();

document.querySelectorAll('.modalcontent').forEach(el => {
  if (el.querySelector('.player')) {
    el.classList.add('has-player');
  }
});

},



presensi:function(idk){
idk=1;
d.service.host=kursus.model.host;
d.service.param={mod:'view_peserta_modul',nama:idk};
d.service.get(callback);
function callback(json){
res=JSON.parse(json);
d.gebi('content').innerHTML=kursus.view.materi(res);
}
},

ujian:function(idk){
idk=1;
d.gebi('content').innerHTML='ujian';
},

sertifikat:function(arr){
  log(arr)
// arr2={nama:'Wawan Sismadi',kursus:'PBO',tanggal:'08 Sep 2025',sertifikat:'202509080101'}
// sertifikat.controller(arr);
d.gebi('content').innerHTML='sertifikat';

},


},

};


const courses = {
  pemrograman_web: {
    slug: "pemrograman-web",
    title: "Pemrograman Web"
  },
  pemrograman_mobile: {
    slug: "pemrograman-mobile",
    title: "Pemrograman Mobile"
  }
};


// Tambahkan variabel penampung di dalam controller atau model
