const links = document.querySelectorAll('nav ol li a');

links.forEach(link => {
	if (window.location.pathname.includes(link.getAttribute('href'))) {
		link.classList.add('active');
	}
});