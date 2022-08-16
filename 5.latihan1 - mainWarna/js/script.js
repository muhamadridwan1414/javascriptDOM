const tombol = document.getElementById('tUbahWarna');
tombol.addEventListener('click', function() {
	// document.body.style.backgroundColor = 'magenta';
	document.body.classList.toggle('gradasi');
});


// buat tombol baru
const tombol2 = document.createElement('button');
const tombol2Txt = document.createTextNode('Buat Gradasi');
tombol2.appendChild(tombol2Txt);
tombol2.setAttribute('type', 'button');
// tentukan lokasi node baru disimpan
tombol.after(tombol2);


// buat event untuk tombol baru
tombol2.addEventListener('click', function() {
	const r = Math.ceil(Math.random() * 255);
	const g = Math.ceil(Math.random() * 255);
	const b = Math.ceil(Math.random() * 255);
	const r2 = Math.round(Math.random() * 255 + 1);
	const g2 = Math.round(Math.random() * 255 + 1);
	const b2 = Math.round(Math.random() * 255 + 1);
	console.log(r);
	document.body.style.background = 'linear-gradient(30deg, rgb('+ r +',' + g + ',' + b + '), rgb('+ r2 +',' + g2 + ',' + b2 + ')';
});




// slider warna
const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});





// POINTER PENGUBAH WARNA
document.body.addEventListener('mousemove', function(e) {
	// console.log(e.clientX); // hitung sumbu X
	// console.log(window.innerWidth) // hitung lebar window
	// console.log(window.innerHeight); // hitung tinggi window

	// buat aksi
	const xPos = Math.ceil((e.clientX / window.innerWidth) * 255);
	const yPos = Math.ceil((e.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});