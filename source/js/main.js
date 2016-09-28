$(document).ready(function() {
	$('.animsition').animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target='_blank']):not([href^='#'])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src='loading.svg' />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // 'browser' option allows you to disable the 'animsition' in case the css property in the array is not supported by your browser.
    // The default setting is to disable the 'animsition' in a browser that does not support 'animation-duration'.
    //overlay : false,
    //overlayClass : 'animsition-overlay-slide',
    //overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  $('a.home-button').click(function() {    
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
//    	$('.panel-cover').removeClass('animated panel-cover--collapsed slideInLeft');
//    	$('.content-wrapper-post').removeClass('animated slideInLeft');
//    	$('.content-wrapper-list').removeClass('animated slideInLeft');
//    	$('.panel-cover').removeClass('animsition');
//    	$('.content-wrapper-post').removeClass('animsition');
//    	$('.content-wrapper-list').removeClass('animsition');
//    	$('.panel-cover').addClass('animated slideInRight');	
//    	$('.content-wrapper-post').addClass('animated slideInRight');
//    	$('.content-wrapper-list').addClass('animated slideInRight');
//			$('#page-button-home').css('display','none');
//    	$('#page-button-blog').css('display','inline-block');
//    	$('#page-button-ss').css('display','inline-block');
//    	$('#page-button-about').css('display','none');
//    	$('#page-button-records').css('display','none');
//    	$('nav').css('display','inline-block');
		  window.location.href="/"; 
    }
//    else{
//    	$('.panel-cover').removeClass('animated slideInRight');
//    	$('.content-wrapper-post').removeClass('animated slideInRight');
//    	$('.content-wrapper-list').removeClass('animated slideInRight');
//    	$('.content-wrapper-list').removeClass('animsition');
//    	$('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
//    	$('.content-wrapper-post').addClass('animated slideInLeft');
//    	$('.content-wrapper-list').addClass('animated slideInLeft');
//    	$('#page-button-home').css('display','block');
//    	$('#page-button-blog').css('display','block');
//    	$('#page-button-ss').css('display','block');
//    	$('#page-button-about').css('display','block');
//    	$('#page-button-records').css('display','block');
//    	$('nav').css('display','table');
//    }    
  });
  
  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.panel-cover').removeClass('animated slideInRight');
    $('.content-wrapper-post').removeClass('animated slideInRight');
    $('.content-wrapper-list').removeClass('animated slideInRight');
    $('.content-wrapper-list').removeClass('animsition');
    $('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    $('.content-wrapper-post').addClass('animated slideInLeft');
    $('.content-wrapper-list').addClass('animated slideInLeft');
    $('#page-button-home').css('display','block');
    $('#page-button-blog').css('display','block');
    $('#page-button-ss').css('display','block');
    $('#page-button-about').css('display','block');
    $('#page-button-records').css('display','block');
    $('nav').css('display','table');
    $(document.body).css({"overflow-x":"visible","overflow-y":"visible"});
  });
  
	if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $("img.excerpt").css('height','50%');
    $("img.excerpt").css('width','50%');
  }
  
  if(!($('.panel-cover').hasClass('panel-cover--collapsed'))){
  	$('#page-button-home').css('display','none');
    $('#page-button-blog').css('display','inline-block');
    $('#page-button-ss').css('display','inline-block');
    $('#page-button-about').css('display','none');
    $('#page-button-records').css('display','none')
    $('nav').css('display','inline-block');
    $(document.body).css({"overflow-x":"hidden","overflow-y":"hidden"});
  }
  
  if (window.location.pathname != '/') {       // if hexo in subdir of site, should change this line
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    // $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

});
