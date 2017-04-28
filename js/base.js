$(function () {

	$(".menuToggle").on("click", function() {

		$("ul").slideToggle(300, function() {

			if($(this).css("display") === "none") {
				$(this).removeAttr("style");
			}
		});
	});

	$(".button").hover(
		function() {
		$(this).css("background-color", "#49cbcd");
		$(this).closest("section").find("h2").css("background-color", "#49cbcd");
	},
	function() {
		$(this).css("background-color", "#788492");
		$(this).closest("section").find("h2").css("background-color", "#485460");
	});

	$(".slick_slider").slick();
});
