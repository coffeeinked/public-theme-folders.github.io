/*
*
* CUSTOMIZED BY COFFEENUTSTHEMES (C)
*
*/

$(function () {
    var $container = $('#content');
    $container.masonry({itemSelector: '.posts'}),
    
    $container.infinitescroll({
        navSelector : 'div#pagination', 
        nextSelector : 'div#pagination a#nextPage',  
        itemSelector : '.posts',
        loading: {
            finishedMsg: 'You have reached the end of blog.',
            img: 'http://static.tumblr.com/qvqnij2/wlkmvr6f1/ajax-loader.gif'
    },
            
        bufferPx : 11600,
        extraScrollPx: 12000,
        debug : false,
        speed:'fast',
        errorCallback: function() {
            $('a.ends').delay(10).fadeOut(100);
        },

    },
    
    
function(newElements) {
    var $newElems = $(newElements).css({opacity: 0});
    $newElems.imagesLoaded(function(){
    $newElems.animate({opacity: 1});
    $container.masonry('appended', $newElems, true); 
    });
  });
  $(window).unbind('.infscr');
    $('a#load-more').click(function() {
        $container.infinitescroll('retrieve');
    return false;
    });
});

$(function() {
var $container = $('#content');
$container.imagesLoaded( function() {
     $container.masonry();
    });

    $('#content').masonry({
      isAnimated: true,
      isAnimated: !Modernizr.csstransitions
    });
    
  });
  
