
(function($) {

	$(function() {
		$( ".proposed--session__description" ).click(function() {
			$(this).toggleClass("tab--closed");
  		$(this).find(".proposed--session__description__value").toggleClass( "tab--collapsed" );
		});
	});

})(jQuery);
