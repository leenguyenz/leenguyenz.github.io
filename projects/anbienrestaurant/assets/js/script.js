  $(function(){

    //load wowjs
    new WOW().init();

    //gallery
    $('#gallery-carousel-main').owlCarousel({
      items:1,
      autoplay:false,
      loop:false,
      navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
      nav:true,
      dots:false
    }).on('changed.owl.carousel', function (e) {
   $('#gallery-carousel-thumbs').trigger('to.owl.carousel', [e.item.index, duration, true]);
  });

  $('#gallery-carousel-thumbs').owlCarousel({
    items:5,
    margin:10,
    autoplay:false,
    loop:false,
    nav:false,
    dots:false
    }).on('click', '.owl-item', function () {
   $('#gallery-carousel-main').trigger('to.owl.carousel', [$(this).index(), duration, true]);

  }).on('changed.owl.carousel', function (e) {
   $('#gallery-carousel-main').trigger('to.owl.carousel', [e.item.index, duration, true]);
  });

    $('.popup-text h3').text($('.gallery-box-title').text());

  $('.gallery-box').click(function(event) {

    $('.popup-text h3').text($(this).children('.gallery-box-title').text());

    $('.gallery-blur').addClass('blur');
    $('.gallery-carousel').addClass('on');
    return false;
  });

  $('.gallery-blur,.fa-close').click(function(event) {
    $('.gallery-blur').removeClass('blur');
    $('.gallery-carousel').removeClass('on');
  });

    // product

    var image = $('#product-image');

    var thumbs = $('#product-thumbs');

    var duration = 500;

    image.owlCarousel({
      items:1,
      autoplay:4000,
      smartSpeed:700,
      loop:false,
      nav:false,
      dots:false,
    }).on('changed.owl.carousel', function (e) {
   thumbs.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });

  thumbs.owlCarousel({
    items:4,
    margin:10,
    center:true,
    autoplay:4000,
    smartSpeed:700,
    loop:false,
    nav:false,
    dots:false,
    responsive: {
        0:{
          items:3
        },
        992:{
          items:4
        }
      }
    }).on('click', '.owl-item', function () {
   image.trigger('to.owl.carousel', [$(this).index(), duration, true]);

  }).on('changed.owl.carousel', function (e) {
   image.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });


// menu item 
$('.menu ul li a').click(function(e) {

  $('.menu ul li a').removeClass('active');

  $(this).addClass('active');

  var locationMenu = $(this).data('menu');

  if(locationMenu == 'all'){
        $('.menu-item-dining').show(300);
    }
  else{
    $('.menu-item-dining').each(function(){
      if($(this).hasClass(locationMenu)){
        $(this).show(300);
      }
      else{
        $(this).hide(300);
      }
    })
  }

  return false;

});

// animation when wheel scroll article
$(window).scroll(function(event){  

//   var z = $('html,body').scrollTop();

// // homepage
// if(z >= $('.about').offset().top - 400){
//   $('.about-item').addClass('fadein');
// }
// if(z >= $('.sale').offset().top - 300){
//   $('.sale-item-hours').addClass('fadeinleft');
// }
// if(z >= $('.blog').offset().top - 300){
//   $('.blog-thumb').addClass('fadein');
// }
// if(z >= $('.chef').offset().top - 300){
//   $('.chef-group-item').addClass('fadeinup');
// }
// if(z >= $('.reservation').offset().top - 300){
//   $('.reservation-form .form-group').addClass('fadeinright');
// }
});



// Banner carousel
  var banner = $('#banner-carousel');

  banner.owlCarousel({
    items:1,
    autoplay:5000,
    smartSpeed:700,
    loop:true,
    nav:true,
    dots:true,
    navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    responsive:{
      0:{
        dots: false,
        nav:false
      },
      576:{
        dots: false,
        nav:false
      },
      768:{
        dots:false,
      },
      992:{
        dots:true
      }

    }
  })

// testimonial carousel
  var testimonial = $('#testimonial-slide');

  testimonial.owlCarousel({
    items:1,
    dots:true,
    autoplay:7000,
    smartSpeed:700,
    loop:true
  })
// special meal carousel
  var special = $('#special-carousel');

  special.owlCarousel({
    autoplay:4000,
    smartSpeed:700,
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    // responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        575:{
            items:2,
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})
            

  // account modal box
  $('.account-info-manager').slideUp();
  $('.account-info-name').click(function(event) {
      $('.account-info-manager').slideToggle();
    return false;
  });

  $('.log-out').click(function(event) {
      $('.account-info').hide();
      $('.topheader-account').show();
  });

  $('.login').click(function(event) {
    $('.topheader-account').hide();
    $('.account-info').show();
    return false;
  });

  $('.topheader-account').click(function(account) {
      $('.account-blur').addClass('blur');
      $('.account-box').addClass('visible');
      return false;
  });

  $('.account-blur,.account-image,.x,.login').click(function(blur) {
    $('.account-blur').removeClass('blur');
      $('.account-box').removeClass('visible');
  });

  $('.account-box-signup').animate({opacity:0,marginLeft:-20});

  $('.join-us').click(function(event) {
      $('.account-box-login').animate({opacity:0,marginLeft:-20}).hide(); 
      $('.account-box-signup').animate({opacity:1,marginLeft:0}); 
  });

$('.go-login').click(function(event) {
    $('.account-box-signup').animate({opacity:0,marginLeft:-20});
      $('.account-box-login').animate({opacity:1,marginLeft:0}).show();
  });
  // end account modal box


// Navbar mobile mode
	$('i.fa-bars').click(function(event) {
 		$('nav ul').css('right', '0');
 	});
 	$('.closer').click(function(event) {
 		$('nav ul').css('right', '-310px');
 	});

 	$(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('nav').addClass('fixed-nav');
          $('.back-to-top').fadeIn(300);
      } else {
          $('nav').removeClass('fixed-nav');
          $('.back-to-top').fadeOut(300);
      }

      var z = $('html,body').scrollTop();

    // homepage
    if(z >= $('.about').offset().top - 400){
      $('.about-item').addClass('fadein');
    }
    if(z >= $('.sale').offset().top - 300){
      $('.sale-item-hours').addClass('fadeinleft');
    }
    if(z >= $('.blog').offset().top - 300){
      $('.blog-thumb').addClass('fadein');
    }
    if(z >= $('.chef').offset().top - 300){
      $('.chef-group-item').addClass('fadeinup');
    }
    if(z >= $('.reservation').offset().top - 300){
      $('.reservation-form .form-group').addClass('fadeinright');
    }
    	});

// Back to top icon
	$('.back-to-top').click(function() {
		$('html, body').animate({scrollTop:0},1000);
    return false;
	});

//Menu-item masonry
// $('.menu-item .row').isotope({
//     itemSelector: '.menu-item-dining',
//     layoutMode: 'masonry'
// });

// $('.menu-intro ul li a').click(function(event) {
//   $('.menu-intro ul li a').removeClass('active');
//   $(this).addClass('active');

// var nameItem = $(this).attr('data-menu');

// $('.menu-item .row').isotope({filter:nameItem});

// return false;
// });

// review toggle
$('.review-title a').click(function(event) {
    $('.review-title a').removeClass('active');
    $(this).addClass('active');

    var indexVal = $(this).index() + 1;
    
    $('.review-description ul li').removeClass('visible');

    $('.review-description ul li:nth-child('+ indexVal +')').addClass('visible');

    return false;
});

$('.review-title a').click(function(a) {

  console.log('tada');
  return false;
});

// shoppingcart table
$('.delete').click(function() {
  $(this).parent().css('display', 'none');
});





})  
 