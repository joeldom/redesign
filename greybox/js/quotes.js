
//jQuery: Shuffle Plugin
(function($){

    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);

// Shuffle all list items within a list:
$('ul#cyclelist li').shuffle();


//Cycle Through a List
$(document).ready(function() {
	var j = 0;
	var delay = 10000; //millisecond delay between cycles
	function cycleThru(){
		var jmax = $("ul#cyclelist li").length -1;
		$("ul#cyclelist li:eq(" + j + ")")
			.animate({"opacity" : "1"}, 900)
			.animate({"opacity" : "1"}, delay)
			.animate({"opacity" : "0"}, 400, function(){
				(j == jmax) ? j=0 : j++;
				cycleThru();
			});
		};
	cycleThru();
});





// http://api.jquery.com/slideToggle/
$('.quote-toggle').click(function(){
  //get collapse content selector
  var collapse_content_selector = $(this).attr('href');

  //make the collapse content to be shown or hide
  var toggle_switch = $(this);
    $(collapse_content_selector).slideToggle(function(){
      if($(this).css('display')==='none'){
        toggle_switch.html('<i class="material-icons">add</i>');
      }else{
        toggle_switch.html('<i class="material-icons">clear</i>');
      }
    });
  });



//random color class
var testArray = [1,2,3,4,5];
Shuffle(testArray);
//$(testArray).shuffle();
console.log(testArray);
// jQuery to dump out new values to element with ID of 'dump'
$(function() {
   for (var i=0;i<testArray.length;i++) {
      $("#dump").append(testArray[i]);
   }
});
