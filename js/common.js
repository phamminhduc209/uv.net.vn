(function($){
	"use strict";

	// Select picker
	$('.selectpicker').selectpicker({});

	$(".sidebar-toggle").click(function() {
		$("body").toggleClass("sidebar-collapse sidebar-mini");
	});

	// $('.block-sidebar .list-category li.has-child a').click(function () {
	// 	$(this).next().slideToggle();
	// 	$(this).parent().toggleClass('open');
	// 	return false;
	// });

	// 	$(".sidebar-menu").addClass("tree");
	// 	// $(".active.treeview").addClass("menu-open");
	// 	$(".treeview a").click(function(){
	// 		$(this).next().slideToggle();
	// 		$(this).parent().toggleClass("menu-open");
	// 	});
	// });

})(jQuery); // End of use strict