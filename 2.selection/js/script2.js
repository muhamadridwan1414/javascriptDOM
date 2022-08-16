// DOM Selection
// getElementById() => element
// getElementsByTagName() => HTMLCollection
// getElementsByClassName() => HTMLCollection

// querySelector() => element
// sesuai namanya method yang satu ini mencari sebuah elemen berdasarkan selectornya.
// const p4 = document.querySelector('#b p');
// beri warna pada elemen
// p4.style.color = 'maroon';
// p4.style.fontSize = '32px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.background = 'linear-gradient(45deg, magenta, dodgerblue)';

// karena tipe-nya element, querySelector() tidak diperuntukkan untuk memilih > 1 node
// const p = document.querySelector('p');
// p.style.backgroundColor = 'royalblue';


// untuk mengatasi studi kasus diatas jawabannya ada di method selanjutnya

// querySelectorAll() => nodeList
// const p = document.querySelectorAll('p');
// implementasinya sama seperti halnya penggunaan method yang jamak sebelumnya
// for( let i = 0; i < p.length; i++ ) {
// 	p[i].style.backgroundColor = 'royalblue';
// }

// console.log(p)
// hanya saja tipe yang ditangkap method yang satu ini adalah nodeList

// mengubah node root
// tujuan dari teknik ini sendiri yaitu untuk mengubah scope/lingkup dari seleksi element
// beberapa cara penulisannya, sebagai berikut:

// const sectionA = document.getElementById('a');	// scope terluar yang menampung node root default
// const pWarna = sectionA.querySelectorAll('section#a p:nth-child(3n-2)');  // scope lokal
// for(let i = 0; i < pWarna.length; i++) {
// 	pWarna[i].style.backgroundColor = 'dodgerblue';
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'yellow';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';


// @note : secara singkat fungsi dari teknik lokalisasi node diatas adalah untuk menyeleksi sebuah elemen agar lebih terlihat spesifik dan flexibel penulisannya

// secara literal penulisan variabel sectionB diatas dimaksudkan untuk mempersempit lingkup dari section b itu sendiri, sehingga memudahkan variabel p4 agar lebih leluasa melakukan querySelector terhadap elemen p didalamnya

