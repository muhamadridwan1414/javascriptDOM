// seleksi element
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
	// cek apakah yang di klik element dengan class thumb
	if (e.target.className == 'thumb') {
		// ganti src jumbo dengan src target
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		// hapus .fade setelah batas waktu tertentu
		setTimeout(function() {
			jumbo.classList.remove('fade')
		}, 500);

		// looping
		thumbs.forEach(function(thumb) {
			// cek apakah ada thumb yang punya .active, jika ada
			if (thumb.classList.contains('active')) {
				// hilangkan semua .active di element lain
				thumb.classList.remove('active');
			}

			// buat semua thumb default classnya adalah thumb
			// thumb.className = 'thumb';
		});

		// tambahkan .active kepada setiap element yang sedang di klik
		e.target.classList.add('active');
	}
})