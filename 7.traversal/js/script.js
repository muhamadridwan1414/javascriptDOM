// CARA MANUAL TANPA TRAVERSAL
// tangkap semua element dengan class close
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// const img = document.querySelectorAll('.card img');

// // lakukan perulangan
// for( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function() {
// 		card[i].style.width = '100px';
// 		card[i].style.transition = '.45s';

// 		img[i].addEventListener('click', function() {
// 			card[i].style.width = '350px';
// 			card[i].style.transition = '.45s';
// 		});
// 	});
// }



// MENGGUNAKAN TRAVERSAL
// implementasiPADHIKA || menghilangkan element ketika x diklik
// tangkap / seleksi close
// const close = document.querySelectorAll('.close');

// menggunakan for
// for( let i = 0; i < close.length; i++ ) {
// 	// parameter e akan berisi event yang sedang terjadi
// 	close[i].addEventListener('click', function(e) {
// 		// close[i].parentElement.style.display = 'none';
// 		// .target ambil element yang di klik
// 		e.target.parentElement.style.display = 'none';
// 	})
// }

// menggunakan forEach() => querySelectorAll menghasilkan nilai nodelist / array
// parameter el => ambil setiap 1 elementnya
// close.forEach(function(el) {
// 	// el sendiri sama halnya dengan close[i] diatas
// 	el.addEventListener('click', function(ev) {
// 		ev.target.parentElement.style.display = 'none';
// 	})
// })




// tangkap semua element dengan class close
const close = document.querySelectorAll('.close');
const img = document.querySelectorAll('.card img');

// lakukan perulangan
// for( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function() {
// 		close[i].parentElement.style.width = '100px';
// 		close[i].parentElement.style.transition = '.45s';

// 		img[i].addEventListener('click', function() {
// 			close[i].parentElement.style.width = '350px';
// 			close[i].parentElement.style.transition = '.45s';

// 		});
// 	});
// }

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.width = '100px';
		e.target.parentElement.style.transition = '.45s';

		img.forEach(function(el) {
			el.addEventListener('click', function(e) {
				e.target.parentElement.style.width = '350px';
				e.target.parentElement.style.transition = '.45s';
			});
		});
	});
});



const nama = document.querySelector('.nama');
// Orang tua
// console.log(nama.parentNode);
// console.log(nama.parentElement);

// saudara kandung | adik
// console.log(nama.nextSibling.nextSibling);
// console.log(nama.nextElementSibling);

// saudara kandung | kakak
// console.log(nama.previousSibling.previousSibling);
// console.log(nama.previousElementSibling);






