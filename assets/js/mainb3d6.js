var menuControl = $('.menu-sm');
var closeMenu = $('.close-icon');
closeMenu.hide();
menuControl.css({left:'-100%'});
$('.menu-mobile').on('click', function() {

    $('.header-bottom').show('fast');
    $('.header-bottom').animate({
        left:'0px', 
        display: 'block'
    });

    $('.sidemenu-overlay').addClass('active');
    closeMenu.show();
});

$('.close-icon, .sidemenu-overlay').on('click', function() {
    $('.header-bottom').animate({left:'-100%'});
    $('.sidemenu-overlay').removeClass('active');
});


$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    dots: false,
    arrows: false,
    focusOnSelect: true,
});

var moreText = $('#text_more');
var readLess = $('.readless_text');
var readMore = $('.readmore_text');

readMore.on('click', function () {
    moreText.show();
    $(this).hide();
})

readLess.on('click', function () {
    moreText.hide();
    readMore.show();
});

$('#btn-tawk-small').hide();

$('#btn-tawk-small').on('click', function () {
    $(this).hide();
    $('.chat-dialog').hide();
});


const closeTextSp = document.getElementById("close-text-sp");
const textTeleSpB = document.getElementById("text_tele_sp_b");
closeTextSp.addEventListener("click", function () {
    textTeleSpB.style.transition = "width 0.5s";
    textTeleSpB.style.width = "0";
    textTeleSpB.style.overflow = "hidden";
});

    var moreText = document.getElementById('text_more');
    var moreText1 = document.getElementById('text_more1');
    var readLess = document.querySelector('.see-scope');
    var readMore = document.querySelector('.see-more');

    readMore.addEventListener('click', function () {
        moreText.style.display = 'inline-block';
    this.style.display = 'none';
    moreText1.style.display = 'none';
    });

    readLess.addEventListener('click', function () {
        moreText.style.display = 'none';
    readMore.style.display = 'inline-block';
    moreText1.style.display = 'inline-block';
    });
