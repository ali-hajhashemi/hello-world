$(document).ready(function(){
    $('.nav-menu').click(function(){
        $('.nav-link').slideDown();
        $('.nav-menu-close').slideDown();
    });

    $('.nav-menu-close').click(function(){
        $('.nav-link').slideUp();
        $('.nav-menu-close').slideUp();
    });
});