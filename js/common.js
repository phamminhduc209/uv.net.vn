(function($){
	"use strict";

	// Select picker
	$('.selectpicker').selectpicker({});

	// Click Sidebar Toggle
	$(".sidebar-toggle").click(function() {
		/* Act on the event */
		$("body").toggleClass("sidebar-collapse sidebar-mini");
	});

	/** Block SideBar Category **/
	$('.block-sidebar .list-category li.has-child a').click(function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('open');
		return false;
	});

	$(document).ready(function(){
		$(".sidebar-menu").addClass("tree");
		// $(".active.treeview").addClass("menu-open");
		$(".treeview a").click(function(){
			$(this).next().slideToggle();
			$(this).parent().toggleClass("menu-open");
		});
	});

})(jQuery); // End of use strict