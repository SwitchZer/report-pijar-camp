// tugas 2
const namaLengkap = "Alfred Cristian Nugraha Zagoto";
const email = "alfredcnzagoto@gmail.com";
const noHandphone = "082272106860";
const umur = 19;
const tempatTanggalLahir = "Sawahlunto/21-05-2004";
const alamat = "Perum. Padmasari No.64, lurah madi, kecamatan Parung";
const kota = "Kota Parung";
const provinsi = "jawa barat";
const kodePos = "16330";
const programmingExperience = ["HTML", "CSS", "PHP", "MySQL"];
const riwayatPendidikan = [
  {
    Nama: "SD Negeri 10 Padang",
    tingkat: "SD",
    TahunMulai: "2010",
    TahunBerakhir: "2016",
    Jurusan: null,
    Direkomendasi: false,
    Lokasi: "Padang",
    Gurufavorit: undefined,
    Materifavorit: [
      {
        Nama: "Bahasa Inggris",
        Date: "2011",
        Pengajar: undefined,
        Alasan: "Karena saya jago dalam materi tersebut",
        Sulit: false,
      },
      {
        Nama: "Bahasa Indonesia",
        Date: "2010",
        Pengajar: undefined,
        Alasan: "Karena saya jago dalam materi tersebut",
        Sulit: false,
      },
      {
        Nama: "IPA",
        Date: "2010",
        Pengajar: undefined,
        Alasan: "Awalnya saya menyukainya karena pelajaran tentang alam",
        Sulit: false,
      },
    ],
  },
  {
    Nama: "SMP Negeri 20 Padang",
    tingkat: "SMP",
    TahunMulai: "2016",
    TahunBerakhir: "2019",
    Jurusan: null,
    Direkomendasi: false,
    Lokasi: "Padang",
    Gurufavorit: undefined,
    Materifavorit: [
      {
        Nama: "Bahasa Inggris",
        Date: "2016",
        Pengajar: undefined,
        Alasan: "Karena saya jago dalam materi tersebut",
        Sulit: false,
      },
      {
        Nama: "Bahasa Indonesia",
        Date: "2016",
        Pengajar: undefined,
        Alasan: "Karena saya jago dalam materi tersebut",
        Sulit: false,
      },
      {
        Nama: "IPS",
        Date: "2016",
        Pengajar: undefined,
        Alasan: "Saya menyukai sejarah",
        Sulit: false,
      },
    ],
  },
  {
    Nama: "SMK Negeri 2 Padang",
    tingkat: "SMK",
    TahunMulai: "2019",
    TahunBerakhir: "2022",
    Jurusan: null,
    Direkomendasi: false,
    Lokasi: "Padang",
    Gurufavorit: undefined,
    Materifavorit: [
      {
        Nama: "Bahasa Inggris",
        Date: "2019",
        Pengajar: undefined,
        Alasan: "Karena saya jago dalam materi tersebut",
        Sulit: false,
      },
      {
        Nama: "Pemograman web",
        Date: "2019",
        Pengajar: undefined,
        Alasan: "saya mulai tertarik ngoding",
        Sulit: false,
      },
      {
        Nama: "Basis Data",
        Date: "2011",
        Pengajar: undefined,
        Alasan: "mempelajari DataBase MySQL",
        Sulit: false,
      },
    ],
  },
];
const golonganDarah = undefined;
const hobi = ["Komputer", "Sepeda", "Game"];
const makananFavorit = [
  {
    Nama: "Rendang",
    Asal: "Sumatera Barat",
  },
  {
    Nama: "Gulai Ayam",
    Asal: "Sumatera Barat",
  },
  {
    Nama: "Sayur Lodeh",
    Asal: "Sumatera Barat",
  },
];

const biodata = {
  namaLengkap,
  noHandphone,
  programmingExperience,
  riwayatPendidikan,
  golonganDarah,
  hobi,
  makananFavorit,
};
console.log("Nama lengkap:", biodata.namaLengkap);
console.log("Nomor handphone:", biodata.noHandphone);
console.log("Programming Experience:", biodata.programmingExperience);
console.log(
  "Nama dan asal makanan favorit:",
  biodata.makananFavorit[0].Nama,
  "dari",
  biodata.makananFavorit[0].Asal
);
console.log("Hobi:", biodata.hobi[biodata.hobi.length - 1]);
console.log("Nama materi dan pengajar materi favorit =>");
console.log(
  "Materi:",
  biodata.riwayatPendidikan[biodata.riwayatPendidikan.length - 1]
    .Materifavorit[0].Nama
);
console.log(
  "Pengajar:",
  biodata.riwayatPendidikan[biodata.riwayatPendidikan.length - 1]
    .Materifavorit[0].Pengajar
);

// tugas 2
function printBiodata(biodata) {
  console.log("Nama lengkap:", biodata.namaLengkap);
  console.log(
    "Pernah menempuh pendidikan di",
    biodata.riwayatPendidikan.length,
    "tempat"
  );
}

printBiodata(biodata);

function looping(num) {
  for (let i = 1; i < num; i++) {
    console.log("Looping ke " + i);
  }
}
looping(5);

function printHobbies(listHobi) {
  for (let i = 0; i < listHobi.length; i++) {
    console.log("Hobi ke", i + 1, "adalah", listHobi[i]);
  }
}

printHobbies(biodata.hobi);

const checkPassingGrade = (grade) => {
  if (grade >= 75) {
    return "Selamat, Anda Lolos!";
  } else {
    return "Anda tidak lolos!";
  }
};

const gradeCheckMessage = checkPassingGrade(80);
console.log(gradeCheckMessage);
