var cobaLagi = true;
// selama bernilai true, jalankan perulangan
while(cobaLagi) {
	// tentukan kesempatan mencoba
	var coba = 3;
	// beri alert
	alert('masukkan sebuah angka 1-10\nKamu mempunyai ' + coba + 'x percobaan!');
	coba--
	// buat perulangan kondisi ketika kesempatan mencoba masih berlaku
	while( coba >= 0 ) {
		// tentukan pilihan pemain
		var p = prompt('masukkan angka tebakan :');

		// tentukan pilihan komputer dan bangkitkan bilangan random 1-10
		var com = Math.ceil(Math.random() * 10);
		
		// buat logika || aturan permainan
		if (p == com) {
			alert('tebakan kamu BENAR! \nAngka yang dicari adalah ' + com);
			break;
		} else if ( p < com ) {
			alert('tebakan kamu terlalu RENDAH! \nkamu mempunyai ' + coba + 'x percobaan lagi!');
		} else if ( p > com ) {
			alert('tebakan kamu terlalu TINGGI! \nkamu mempunyai ' + coba + 'x percobaan lagi!');
		} else if ( coba == 0 ) {
			alert('kesempatan untuk mencoba telah habis!');
			break;
		} else {
			alert('yang anda masukkan salah!');
		}
	coba--
	}
cobaLagi = confirm('mau bermain lagi?');
}
alert('terimakasih telah bermain!');