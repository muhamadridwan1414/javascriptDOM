// document.getElementById() => element
const judul = document.getElementById('judul');
judul.style.background = 'linear-gradient(45deg, darkblue, royalblue)';
judul.style.color = '#eaeaea';

// document.getElementsByTagName() => HTMLCollection
const a = document.getElementsByTagName('a');
for(let i = 0; i < a.length; i++) {
	a[i].style.backgroundColor = 'royalblue';
	a[i].style.color = '#eaeaea';
	a[i].style.display = 'block';
	a[i].style.textDecoration = 'none';
	a[i].style.textAlign = 'center';
	a[i].style.borderRadius = '20px';
}


// ubah node root
const sectionA = document.getElementById('a');
const p = sectionA.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ) {
	p[i].style.backgroundColor = 'darkorange';
}



// document.getElementsByClassName() => HTMLCollection
const p2 = document.getElementsByClassName('p2');
for( let i = 0; i < p2.length; i++ ) {
	p2[i].style.backgroundColor = 'darkcyan';
}

// document.querySelectorAll()
const li = document.querySelectorAll('section#b ul li');
for( let i = 0; i < li.length; i++ ) {
	li[i].innerHTML = 'Timpa Teks Sanctuascript';
	li[i].style.backgroundColor = 'purple';
	li[i].style.fontStyle = 'italic';
	li[i].style.textDecoration = 'none';
	li[i].style.display = 'block';
	li[i].style.color = 'white';
}

// document.querySelector() => element
const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.backgroundColor = 'lightseagreen';
li3.innerHTML = 'Teks ini diubah oleh querySelector!';


// ubah node root - 2
const sectionB = document.querySelector('section#b');
const pB = sectionB.getElementsByTagName('p');
for( let i = 0; i < pB.length; i++ ) {
	pB[i].innerHTML = 'Timpa nodeRoot Sanctuary';
	pB[i].style.fontWeight = 'bold';
	pB[i].style.fontStyle = 'italic';
	pB[i].style.backgroundColor = 'lightskyblue';
	pB[i].style.color = 'white';
	pB[i].style.textAlign = 'center';
}




