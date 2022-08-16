// tombol 1 : ganti bg ke warna kesukaan
// tangkap element / node
const tombol = document.getElementById('tUbahWarna');
tombol.addEventListener('dblclick', function() {
	document.body.classList.toggle('gradasi');
});



// tombol 2 : buat gradasi
// buat elemen / node baru
const btnBaru = document.createElement('button');
const btnBaruTxt = document.createTextNode('buat gradasi!');
btnBaru.appendChild(btnBaruTxt);
// tambahkan attr pada element baru
btnBaru.setAttribute('type', 'button');
// masukkan element baru setelah node sebelumnya
tombol.after(btnBaru);

// buat event / tentukan rgb secara random
btnBaru.addEventListener('click', function() {
	// buat kualifikasi acak untuk menentukan nilai rgb
	const r = Math.ceil(Math.random() * 255);
	const g = Math.ceil(Math.random() * 255);
	const b = Math.ceil(Math.random() * 255);
	// buat warna random lainnya untuk dilakukan gradasi warna
	const r2 = Math.round(Math.random() * 255 + 1);
	const g2 = Math.round(Math.random() * 255 + 1);
	const b2 = Math.round(Math.random() * 255 + 1);
	// eksekusi
	document.body.style.background = 'linear-gradient(30deg, rgb('+ r +','+ g +','+ b +'), rgb('+ r2 +','+ g2 +','+ b2 +'))';
});



// slider warna
// tangkap element
const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function() {
	// tangkap nilai input dari slider
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'; 
});
const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function() {
	// tangkap nilai input dari slider
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'; 
});
const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function() {
	// tangkap nilai input dari slider
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'; 
});




// color mouse
// tangkap pergerakan elemen 'pointer' didalam body
document.body.addEventListener('mousemove', function(e) {
	// tangkap pergerakan pointer berdasar sumbu x
	const xPos = Math.ceil((e.clientX / window.innerWidth) * 255);
	// tangkap pergerakan pointer berdasar sumbu y
	const yPos = Math.ceil((e.clientY / window.innerHeight) * 255);
	// eksekusi
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});