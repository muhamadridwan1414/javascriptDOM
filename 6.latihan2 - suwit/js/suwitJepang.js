// suwit patch 2.1.1

// tentukan pilihan random komputer
function getPilihanKomputer() {
	// gunakan method .random() untuk menghasilkan angka random 
	const komp = Math.random();
	// jika salahsatu keadaan benar, kembalikan nilai string berikut
	if (komp < 0.34) return 'kertas';
	if (komp >= 0.34 && komp < 0.67) return 'batu';
	return 'gunting';
}


// tentukan aturan / rules permainan
// buat function yang menangkap 2 buah parameter
function getHasil(komp, player) {
	// jika keadaan bernilai sama, kembalikan hasil
	if (player == komp) return 'SERI!';
	// jika salah satu keadaan benar, kembalikan hasil
	if (player == 'kertas') return (komp == 'batu') ? 'MENANG!' : 'KALAH!';
	if (player == 'batu') return (komp == 'gunting') ? 'MENANG!' : 'KALAH!';
	if (player == 'gunting') return (komp == 'kertas') ? 'MENANG!' : 'KALAH!'
}


// lakukan animasi acak sebelum gambar resukt ditampilkan
function acak() {
	// tangkap element / node gambar pilihan komputer
	const imgKomputer = document.querySelector('.img-komputer');
		// buat array untuk menampung beberapa nilai[nama-nama gambar]
		const namaGambar = ['batu', 'gunting', 'kertas'];
		// tankap index dari array diatas dimulai dari index ke 0
		// gunakan let karena nilai yang ditampung adalah nilai dari perulangan / selalu berubah
		let i = 0;
		// pada saat fungsi acak() dijalankan, ambil waktu saat itu juga
		const waktuMulai = new Date().getTime();
		// lakukan sesuatu secara berulang selama interval waktu tertentu
		setInterval(function() {
			// new Date() = pada saat awal, .getTIme() = setiap pengulangannya, ambil waktunya,
			// ketika interval / waktu mulai sudah > 1s
			if (new Date().getTime() - waktuMulai > 1000) {
				// hentikan interval
				clearInterval;
				// kembalikan hasil
				return;
			}
		// setAttribute('namaAttr', 'lokasiNilaiAttr' + nilaiAttr[i++] + 'ekstensiNilaiAttr')
		imgKomputer.setAttribute('src', 'img/icon/'+ namaGambar[i++] + '.png');
		// jika (i sudah sesuai dengan jumlah gambar) kembalikan i = index ke 0;
		if (i == namaGambar.length) i = 0;
	// setiap interval perulangan dilakukan selama 0.1s
	}, 100) 
}


// tangkap setiap element img yang ada didalam li
const pilihan = document.querySelectorAll('li img');
let p = 1;
let k = 1;
let skorP = document.getElementById('skorP');
let skorK = document.getElementById('skorK');
// lakukan perulangan untukSetiap img yang ada didalam nodelist pilihan(jalankan function berikut())
// parameter x digunakan untuk mengambil masing2 img-nya
pilihan.forEach(function(x) {
	// berikan event untuk setiap pilihan yang di-klik, jalankan fungsi berikut
	x.addEventListener('click', function() {
		// tampung setiap pilihan yang dihasilkan komputer kedalam variabel pilihanKomputer
		const pilihanKomputer = getPilihanKomputer();
		// tampung setiap gambar yang di klik player kedalam variabel pilihanPlayer
		const pilihanPlayer = x.className;
		// tampung setiap hasil dari masing2 variabel diatas lalu kirimkan hasilnya untuk dimasukkan kedalam function sebagai parameter getHasil()
		const hasil = getHasil(pilihanKomputer, pilihanPlayer);

		// panggil / lakukan function acak
		acak();

		// tunggu dulu function acak() nya selesai kemudian jalankan function berikut
		setTimeout(function() {
			// seleksi element dengan class img-komputer
			const imgKomputer = document.querySelector('.img-komputer');
		// lakukan setAttr('namaAttr', 'lokasiNilaiAttr', + nilaiAttr + '.ekstensiNilaiAttr');
		imgKomputer.setAttribute('src', 'img/icon/' + pilihanKomputer + '.png');
		// cetak hasil kedalam class info
		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		if (hasil == 'MENANG!') return skorP.innerHTML = p++;
		if (hasil == 'KALAH!') return skorK.innerHTML = k++;
		// jalankan function ini setelah 1s / acak() selesai
		}, 1000);	
	});
});



