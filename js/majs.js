var ano = (new Date).getFullYear();
$(document).ready(function() {
  $("#fecha").text( ano );
});

/* $(document).ready(function(){
    $(".your-class").slick({
      setting-name: setting-value
    });
  }); */

/*  $(document).ready(function() {
   
  
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
      autoplay: true
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
      infinite: true,
      centerPadding: '0px'
  });
  
  });  */

  $(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight:true, 
        asNavFor: '.slider-nav',
        
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
         centerMode: false, 
        focusOnSelect:false, 
      });
  });  
          