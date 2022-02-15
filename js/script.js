$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.quality__filter').click(function (event) {
		$('.quality__filter,.quality__menu').toggleClass('active');
	});
});