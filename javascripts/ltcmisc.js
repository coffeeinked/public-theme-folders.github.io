$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$(function() {
    $("#toTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// V1
// tumblr redirects @ magnusthemes.tumblr
  $('a[href*="t.umblr.com/redirect"]').each(function(){
      var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
      var replaceURL = decodeURIComponent(originalURL);
      $(this).attr("href", replaceURL);
  });
  

// V2
// REMOVE REDIRECTS V2.0 @ magnusthemes.tumblr
function noHrefLi(){
    var linkSet = document.querySelectorAll('a[href*="href.li/?"]');
    Array.prototype.forEach.call(linkSet,function(el,i){
        var theLink = linkSet[i].getAttribute('href').split("href.li/?")[1];
        linkSet[i].setAttribute("href",theLink);
    });
}
noHrefLi();
