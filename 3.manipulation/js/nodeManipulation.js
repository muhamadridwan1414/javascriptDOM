// DOM manipulation

// buat elemen baru | paragraf baru
const pBaru = document.createElement('p');
const txtPBaru = document.createTextNode('paragraf Baru');

// simpan dan satukan
pBaru.appendChild(txtPBaru);

// telusuri dimana element baru akan disimpan
const sectionA = document.getElementById('a');

// masukkan element baru ke sectionA
sectionA.appendChild(pBaru);


// buat elemen baru | list baru
const liBaru = document.createElement('li');
const liBaruTxt = document.createTextNode('item baru');
liBaru.appendChild(liBaruTxt);
// cari parent dari li
const ul = document.querySelector('section#b ul');
// tentukan tempat sebelum li baru nya disimpan 
const li2 = ul.querySelector('section#b ul li:nth-child(2)');
// insertBefore(nodeBaru, disimpanSebelumNodeMana);
ul.insertBefore(liBaru, li2);


// remove element | link
const link = document.querySelector('section#a a');
sectionA.removeChild(link);


// replace element | p
// tentukan parent
const sectionB = document.querySelector('section#b')
// tentukan element yang akan di replace
const p4 = sectionB.querySelector('p');
// buat element baru
const h3Baru = document.createElement('h3');
const h3BaruTxt = document.createTextNode('Judul Baru');
h3Baru.appendChild(h3BaruTxt);
// lakukan replace(nodeBaru, nodeLama) | nodeBaru dimasukkan me-replace nodeLama
sectionB.replaceChild(h3Baru, p4);