// const close = document.querySelectorAll('.close');
// const img = document.querySelectorAll('.card img');

// TERAMAT SANGAT KURANG REKOMENDED
// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.width = '100px';
// 		e.target.parentElement.style.transition = '.45s';
// 		e.preventDefault();
// 		e.stopPropagation();

// 		img.forEach(function(el) {
// 			el.addEventListener('click', function(e) {
// 				e.target.parentElement.style.width = '350px';
// 				e.target.parentElement.style.transition = '.45s';
// 				e.preventDefault();
// 				e.stopPropagation();
// 			});
// 		});
// 	});
// });


// TERAMAT REKOMENDED
const container = document.querySelector('.container');
// seleksi elements img
const img = document.querySelectorAll('img');
// lakukan perulangan untukSetiap img, kemudian tambahkan attr class="image"
img.forEach(function(e) { e.setAttribute('class', 'image'); })

// tambah event pada container
container.addEventListener('click', function(e){
	// jika element yang di target punya class 'close'
	if (e.target.className == 'close') {
		e.target.parentElement.style.width = '100px';
		e.target.parentElement.style.transition = '.45s';
	}
	// jika element yang di target punya class 'image'
	if (e.target.className == 'image') {
		e.target.parentElement.style.width = '350px';
		e.target.parentElement.style.width = '.45s';
	}
})


// @note : cara diatas lebih disarankan karena menyajikan cara penulisan yang flexible dan script tetap bisa berjalan mekipun element html diedit secara real time(diedit manual lewat peramban).







