const close = document.querySelectorAll('.close');
const img = document.querySelectorAll('.card img');

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.width = '100px';
		e.target.parentElement.style.transition = '.45s';
		e.preventDefault();

		img.forEach(function(el) {
			el.addEventListener('click', function(e) {
				e.target.parentElement.style.width = '350px';
				e.target.parentElement.style.transition = '.45s';
				e.preventDefault();
			});
		});
	});
});







