(function($){
	$(".nav li a").click(function(){
		ninja.tabSwitch($(this).parent()[0]);
	})
})(jQuery);
