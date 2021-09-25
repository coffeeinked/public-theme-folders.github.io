// Tutorial found at http://anarchei.me/post/24223347981/how-to-make-a-custom-404-page
$(init);
function init() {
var pageTitle = $('.title').text();
if (pageTitle == "Not Found"){
    $('.posts > .title').replaceWith( "<div class='title'>404</div>" );
    $('.posts > p').replaceWith( "<p align='center'>Sorry, the content you are looking for could not be traced.</p><p align='center' style='font-size:8px!important;'><a href='/'>Return back to homepage</a></p>" );
}}

$(function($) {var allAccordions = $('.accordion div.data');var allAccordionItems = $('.accordion .accordion-item');$('.accordion > .accordion-item').click(function() {if($(this).hasClass('open')){$(this).removeClass('open');$(this).next().slideUp('500');}else{allAccordions.slideUp('500');allAccordionItems.removeClass('open');$(this).addClass('open');$(this).next().slideDown('500');return false;}});});   
