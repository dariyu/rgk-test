"use strict";

var App = {};

App.player = function(){
    var el = {
            player: '.player__video-b',
            play: '.icon-b-play',
            check: '.checkbox',
            video_b: '.player__video-b'
        },
        render = function(){
            playerHeight();
            $(window).resize(function(){ playerHeight(); });
            playClick();
        },
        playerHeight = function(){
            var this_height = $(window).height() - $('header').innerHeight() - $('footer').innerHeight() - $('.player__bot-b').innerHeight();
            if ($(window).height() < 480){
                this_height = $(window).height() - $('.player__bot-b').innerHeight();
            }
            $(el.player).css({
                'height': this_height
            });
        },
        playClick = function(){
            $(document).on('click', el.play, function(){
                if ($(el.check).prop('checked')){
                    $(el.video_b).addClass('active');
                }
                else{
                    alert('Согласитесь с правилами');
                }
            });
        };
    render();
};

$(function(){

    App.player();

});