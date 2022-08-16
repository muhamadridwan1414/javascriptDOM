var cobaLagi = true;
while(cobaLagi) {
	// tentukan pilihan pemain
	var p = prompt('Silahkan pilih : semut, orang, gajah');

	// tentukan pilihan komputer
	// bangkitkan bilangan random
	var com = Math.random();
	// buat logika untuk setiap bilangan random yang dihasilkan
	if (com < 0.34) {
		com = 'gajah';
	} else if (com >= 0.34 && com < 0.67) {
		com = 'orang';
	} else {
		com = 'semut';
	}
	// console.log(com);

	// tampung hasil
	var hasil = '';
	// tentukan rules permainan
	// jika pemain dan komputer memilih nilai yang sama
	if( p == com ) {
		hasil = 'SERI!';
	} else if ( p == 'semut' ) {
		if( com == 'gajah' ) {
			hasil = 'MENANG!';
		} else {
			hasil = 'KALAH!'
		}
	} else if ( p == 'orang' ) {
		// ternary
		hasil = (com == 'semut') ? 'MENANG!' : 'KALAH!';
	} else if ( p == 'gajah' ) {
		hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
	} else {
		hasil = 'memasukkan pilihan yang salah!'
	}


	// tampilkan hasil
	alert('anda memilih ' + p + ' dan komputer memilih ' + com + '\nHasilnya anda : ' + hasil);

	// main lagi ?
	cobaLagi = confirm('mau bermain lagi ?');
}
alert('terimakasih telah bermain!');