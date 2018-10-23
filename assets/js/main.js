$(document).ready(function(){

	/*
	horizontal slide menu js function start here.
	=============================================
	before to start, genarate random id for measure horizontal..
	slide menu width, because when we resize browser
	it will be render menu width dynamically....
		*=====*=======*
	first measure the width of this menu with left and right arrow.
	then subtruct the width of arrow.
	after that here only exiest menu container width..........
	*/

	//Random Id Generator

	function makeId(){
		let text = "";
		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (let i = 0; i < 5; i++){
		  text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	/* Assigning random ID when resizing menu-container
		and fix the width of menu container.
	*/
	//this is the scroll speed of all scrolling menu

	let scrollSpeed = 5;

	function horizontal_Menu_Width(){
		$('.horizontal-menu').each(function(){
			let id = makeId();
			$(this).attr("id", id);
			//total width of horizontal menu with 2 arrow.
			let horizontalMenuWidth = $(this).width();
			// console.log("horizontal-menu : "+horizontalMenuWidth);
			// width of the arrow
			let horizontalMenuArrowWidth = $(this).children('i').outerWidth(true);
			// console.log(horizontalMenuArrowWidth);
			// total-width - 2 arrow-width = menu-container width;
			let mainContainerWidth = horizontalMenuWidth - (horizontalMenuArrowWidth*2);
			// console.log(mainContainerWidth);
			$(this).children('.menu-container').css('width', mainContainerWidth);	
		});
	}
	// initialization horizontal menu width function
	horizontal_Menu_Width();

	/*
		A function, when I inter the mouse on Arrow in horihontal menu,
		then inner-menu-container witt be scrolled left and right.
		1. mouse enter on child element "i" of "horizontal-menu".
		2. fint the parent ID of child element "i"; 
	*/

	$('.horizontal-menu > i').on('mouseenter', function(){
		// init class,ID on valiable when mouse inter
		let horizontalMenuParentID = $(this).parent('.horizontal-menu')[0].id;
		let leftArrow = $(this).hasClass('left-arrow');
		let rightArrow = $(this).hasClass('right-arrow');

		// need to find total width of "menu-inner-container" class
		let horizontalMenuScrollableWidth = $("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container")[0].scrollWidth;
		// console.log(horizontalMenuScrollableWidth);

		//need to find out visible width of "menu-inner-container" class
		let menuInnerContainerWidth = $("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container").width();
		// console.log(menuInnerContainerWidth);

		//this is the value of total scrolable area of horizontal menu
		let horizontalMenuScroll = horizontalMenuScrollableWidth - menuInnerContainerWidth;
		// console.log(horizontalMenuScroll);

		//now we need to make a scroll left of "total scrolable area"
		let scrollableMenu = horizontalMenuScroll - $("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container").scrollLeft();
		// when mouse inter in right-arrow
		if(rightArrow){
			$("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container").animate({
				scrollLeft: horizontalMenuScroll
			},scrollSpeed*scrollableMenu);
		} else if(leftArrow){
			$("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container").animate({
				scrollLeft: 0
			},scrollSpeed * $("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container").scrollLeft());
		}
	});

	// when mouse leave from arrow then scroll should stop

	$('.horizontal-menu > i').on('mouseleave', function(){
		let horizontalMenuParentID = $(this).parent('.horizontal-menu')[0].id;
		$("#"+horizontalMenuParentID+" >.menu-container>.menu-inner-container").stop();
	});


	/* horizontal tool box (all working button) js function start here 
	====================================================================

	*/

	function horizontal_tool_box(){
		$('.horizontal-tool-box').each(function(){
			let id = makeId();
			$(this).attr("id", id);
			//total width of horizontal menu with 2 arrow.
			let horizontalMenuWidth = $(this).width();
			// console.log("tool box : "+ horizontalMenuWidth);
			// width of the arrow
			let horizontalMenuArrowWidth = $(this).children('i').outerWidth(true);
			// console.log(horizontalMenuArrowWidth);
			// total-width - 2 arrow-width = menu-container width;
			let mainContainerWidth = horizontalMenuWidth - (horizontalMenuArrowWidth*2);
			// console.log(mainContainerWidth);
			$(this).children('.tool-box-container').css('width', mainContainerWidth);	
		});
	}
	// initialization horizontal menu width function
	horizontal_tool_box();


	$('.horizontal-tool-box > i').on('mouseenter', function(){
		// init class,ID on valiable when mouse inter
		let horizontalMenuParentID = $(this).parent('.horizontal-tool-box')[0].id;
		let leftArrow = $(this).hasClass('left-arrow');
		let rightArrow = $(this).hasClass('right-arrow');

		// need to find total width of "menu-inner-container" class
		let horizontalMenuScrollableWidth = $("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box")[0].scrollWidth;
		// console.log(horizontalMenuScrollableWidth);

		//need to find out visible width of "menu-inner-container" class
		let menuInnerContainerWidth = $("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box").width();
		// console.log(menuInnerContainerWidth);

		//this is the value of total scrolable area of horizontal menu
		let horizontalMenuScroll = horizontalMenuScrollableWidth - menuInnerContainerWidth;
		// console.log(horizontalMenuScroll);

		//now we need to make a scroll left of "total scrolable area"
		let scrollableMenu = horizontalMenuScroll - $("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box").scrollLeft();
		// when mouse inter in right-arrow
		if(rightArrow){
			$("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box").animate({
				scrollLeft: horizontalMenuScroll
			},scrollSpeed*scrollableMenu);
		} else if(leftArrow){
			$("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box").animate({
				scrollLeft: 0
			},scrollSpeed * $("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box").scrollLeft());
		}
	});

	// when mouse leave from arrow then scroll should stop

	$('.horizontal-tool-box > i').on('mouseleave', function(){
		let horizontalMenuParentID = $(this).parent('.horizontal-tool-box')[0].id;
		$("#"+horizontalMenuParentID+" >.tool-box-container>.inner-horizontal-tool-box").stop();
	});





	// gride-view and list-view function start here
	function fileView(){
		$('ul.tool-box > li').click(function(e){
			e.preventDefault();
			if(this.id == 'gride-view'){
				// console.log('gride-view clicked..!');
				$('.divTableRow').addClass('grid-view-mode').removeClass('list-view-mode');

			} else if(this.id == 'list-view'){
				// console.log('list-view clicked..!');
				$('.divTableRow').addClass('list-view-mode').removeClass('grid-view-mode');
			}
			
		});
	}

	fileView();

});