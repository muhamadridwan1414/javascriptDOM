// EVENT HANDLER
// tangkap elemen
// const p3 = document.querySelector('section#a .p3');

// // buat function
// let gantiWarnaP3 = function() {
// 	p3.style.background = 'linear-gradient(30deg, purple, limegreen)';
// 	p3.style.color = 'white';
// }

// // buat function
// let gantiWarnaP2 = function() {
// 	p2.style.background = 'linear-gradient(30deg, purple, limegreen)';
// 	p2.style.color = 'white';
// }

// // menggunakan teknik element method
// const p2 = document.querySelector('section#a .p2');
// p2.onclick = gantiWarnaP2;



// // addEventListener()
// // tangkap elemen
// const p4 = document.querySelector('section#b p');
// // buat event | studi kasus : setiap kali elemen p4 di klik, maka akan mencetak list item baru
// p4.addEventListener('click', function() {
// 	// buat aksi
// 	let ul = document.querySelector('section#b ul');
// 	// buat elemen/node baru
// 	let liBaru = document.createElement('li');
// 	let liBaruTxt = document.createTextNode('item baru');
// 	liBaru.appendChild(liBaruTxt);
// 	// tangkap dan masukkan elemen baru kedalam ul
// 	ul.appendChild(liBaru);
// });



// PERBEDAAN
const p3 = document.querySelector('section#a .p3');

// 1. menggunakan Event Handler => menimpa
// buat event
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightseagreen';
// }
// p3.onclick = function() {
// 	p3.style.color = 'white';
// }

// 2. menggunakan addEventListener() => menambah
// buat event
// p3.addEventListener('click', function() {
// 	p3.style.backgroundColor = 'lightseagreen';
// });
// p3.addEventListener('click', function() {
// 	p3.style.color = 'white';
// });



// konten tambahan
p3.addEventListener('dblclick', function() {
	p3.style.background = 'linear-gradient(30deg, magenta, dodgerblue)';
	p3.style.color = 'white'
});
p3.addEventListener('mouseleave', function() {
	p3.style.background = 'linear-gradient(30deg, yellow, darkorange)';
	p3.style.color = 'black'
});