/**
 * Created by Isaiah on 2017-04-03.
 */
var $ = jQuery;

'use strict';

$(document).ready(function () {
    console.log($(window).scrollTop());
    $(window).scroll(function () {
        // console.log($(window).scrollTop());

        var h = window.innerHeight;

        if ($(window).scrollTop() > h) {
            $('.navbar').addClass('fixed-top');
        }

        if ($(window).scrollTop() < h) {
            console.log("In scroll top");
            $('.navbar').removeClass('fixed-top');
        }

    });
    
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 700, 'swing', function () {
                window.location.hash = target;
            });
        });
    
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeInDown');
    }, {
        offset: '90%'
    })

});