$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom-me img").css({
		width: (100 + scroll/5)  + "%",
		top: -(scroll/10)  + "%",
	});
});