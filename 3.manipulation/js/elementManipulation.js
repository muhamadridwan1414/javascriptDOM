// 1. innerHTML
// element.innerHTML => melakukan manipulasi terhadap elemen(teks/tag)
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Timpa Teks Script';
// judul.innerHTML = '<em>Timpa Teks Script</em>';


// 2. style
// element.style => melakukan manipulasi style css pada element
// const judul = document.querySelector('#judul');
// judul.style.background = 'linear-gradient(45deg, yellow, darkorange)';
// judul.style.letterSpacing = '10px';


// 3. attribute
// element.setAttribute => melakukan penambahan attribute pada element
// const sectionB = document.getElementById('b');
// const li3 = sectionB.querySelector('ul li:nth-child(3)');
// li3.setAttribute('class', 'tiga');

// element.getAttribute => menangkap nilai dari suatu attr pada element
// const sectionA = document.getElementById('a');
// const p2 = sectionA.querySelector('.p2');
// console.log(p2.getAttribute('class'));

// element.removeAttribute => menghilangkan attribute pada suatu element
// const removeLink = document.querySelector('section#a a');
// removeLink.removeAttribute('href');


// 4. classList
// element.classList.add() => menambahkan class baru tanpa menimpa class sebelumnya
// const classBaru = document.querySelector('section#a .p2');
// classBaru.classList.add('dua', 'tiga', 'empat');
// console.log(classBaru.getAttribute('class'));

// element.classList.remove() => menghilangkan class yang bersangkutan
// const classBaru = document.querySelector('section#a .p2');
// classBaru.classList.add('dua', 'tiga', 'empat');
// classBaru.classList.remove('tiga', 'empat');
// console.log(classBaru.getAttribute('class'));

// element.classList.toggle() => cek pada elemen apakah sudah memiliki class tertentu, jika belum maka tambahkan, jika sudah hapus class yang dimaksud | menghasilkan boolean
// const classBaru = document.querySelector('section#a .p2');
// belum punya (+) => true
// classBaru.classList.toggle('lima');
// sudah punya (-) => false
// classBaru.classList.toggle('lima');
// console.log(classBaru.getAttribute('class'));

// element.classList.item() => mengetahui class tertentu pada element berdasarkan index urutannya
// const p2 = document.querySelector('section#a .p2');
// p2.classList.add('satu', 'dua', 'tiga', 'empat');
// console.log(p2.classList.item(1));

// element.classList.contains() => cek class yang tersedia pada element | menghasilakan boolean
// const p2 = document.querySelector('section#a .p2');
// ada = true
// console.log(p2.classList.contains('p2'));
// tidak ada = false
// console.log(p2.classList.contains('dua'));

// element.classList.replace() => timpa dan ganti dengan class yang baru
// const p2 = document.querySelector('section#a .p2');
// p2.classList.add('tiga', 'empat');
// p2.classList.replace('empat', 'enam'); // ganti class empat dengan class enam
// console.log(p2.getAttribute('class'))