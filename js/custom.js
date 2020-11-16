$(function(){
// counter
 $('.counter').counterUp({
    delay: 10,
    time: 1000
});    
    
// feedback slider

$('.feed-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  nextArrow:'.right',
  prevArrow:'.left',
  autoplaySpeed: 2000,
});
    
// venobox
$('.venobox').venobox();
    
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1000);
});   
    
$(window).scroll(function(){
   var scrolling = $(this).scrollTop();
   if(scrolling > 300){
       $('.navbar').addClass('bg');
   }
    else{
        $('.navbar').removeClass('bg');
    }
    
    
    if(scrolling > 200){
       $('.back-top').fadeIn(500);
    }
    else{
        $('.back-top').fadeOut(500);
    }
    
});    

$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(500);
})    
    
});