// setTimeout()
// jalankan program setelah periode waktu /  waktu tunggu tertentu

// const tampilkanPesan = function() { // pemanggilan dengan f.expression
// 	alert('ok');
// }

// dengan f.anonymous
// setTimeout(function(){
// 	alert('ok');
// }, 3000);

// menghentikan fungsi timeout sebelum di eksekusi
// const coba = setTimeout(function(){
// 	alert('ok');
// }, 5000);

// // ketika tombol di klik, hentikan Timeout dan tampilkan pesan
// const btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
// 	clearTimeout(coba);
// 	alert('selesai!');
// });



// setInterval()
// jalankan program secara berulang berdasar batas waktu / interval waktu tertentu
// const coba = setInterval(function() {
// 	console.log('ok');
// }, 3000);

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
// 	clearInterval(coba);
// 	alert('interval dihentikan!');
// })



// HITUNG MUNDUR
// tentukan waktu tujuan
const waktuTujuan = new Date('Aug 17, 2022 00:19:45').getTime();

// buat interval 
const hitungMundur = setInterval(function() {
	// tentukan waktu saat ini
	const sekarang = new Date().getTime();
	// tentukan selisih kedua waktu
	const selisih = (waktuTujuan - sekarang);

	// tentukan waktu untuk hari
	const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
	// tentukan waktu untuk jam
	const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	// tentukan waktu untuk menit
	const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
	// tentukan waktu untuk detik
	const detik = Math.floor(selisih % (1000 * 60) / 1000);

	// cetak hasil ke html
	const teks = document.getElementById('teks');
	teks.innerHTML = hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik.';

	if (selisih <= 0) {
		clearInterval(hitungMundur);
		teks.innerHTML = 'Selamat hari kemerdekaan RI ke-77 <br> tetap jadi Bangsa yang SOLID SOLID SOLID!';
	}
}, 1000);


