// DOM Selection

// document.getElementById()
const judul = document.getElementById('judul');
// ganti style warna pada font
judul.style.color = '#333';
// ganti warna background
judul.style.backgroundColor = 'yellow';
// timpa teks sanctuary
judul.innerHTML = 'Timpa Teks Script';

// document.getElementsByTagName() => HTMLCOllection
const p = document.getElementsByTagName('p');
// method ini menghasilkan sebuah nilai yang cara kerjanya sama dengan array / menggunakan index
// karena method yang satu ini bersifat jamak, cara panggilnya pun berbeda dengan method yang sifatnya satuan seperti Id

// menggunakan perulangan
for( let i = 0; i < p.length; i++ ) {
	p[i].style.backgroundColor = 'lightskyblue';
}

// @note : jika kita mengambil sebuah elemen menggunakan ByTagName(), meskipun jumlah elemen tersebut tunggal, pada akhirnya elemen yang kita pilih itu nantinya akan berubah menjadi HTMLCollection
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);

// @note : adapun cara penyelesaian pada studi kasus diatas adalah dengan menuliskan indexnya secara spesifik / elemen mana yang akan kita manipulasi nantinya.
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';
h1.style.fontStyle = 'italic';


// document.getElementsByClassName() => HTMLCollection
const p2 = document.getElementsByClassName('p2')[0];
// pada dasarnya format implementasi method ini sama dengan ByTagName()
p2.innerHTML = 'teks ini ditimpa oleh script!';
p2.style.backgroundColor = 'darkviolet';
p2.style.color = 'white';
