"use strict";

var App = {};

App.player = function(){
    var el = {
            player: 'video',
            panel: 'p-b-panel',
            play: 'play',
            check: 'checkbox'
        },
        render = function(){
            playerHeight();
            window.onresize = function(){
                playerHeight();
            };
            playClick();
        },
        playerHeight = function(){
            var win_height = window.innerHeight,
                head_heigth = document.getElementsByTagName('header')[0].offsetHeight,
                foot_height = document.getElementsByTagName('footer')[0].offsetHeight,
                panel_height = document.getElementsByClassName(el.panel)[0].offsetHeight,
                this_height;
            if (window.screen.orientation.angle != 0 && win_height < 420){
                this_height = win_height - panel_height;
                document.getElementById(el.player).style.height = this_height + 'px';
            }
            else{
                this_height = win_height - head_heigth - foot_height - panel_height;
                document.getElementById(el.player).style.height = this_height + 'px';
            }
        },
        playClick = function(){
            document.getElementById(el.play).onclick = function(){
                if (document.getElementById(el.check).checked){
                    document.getElementById(el.player).classList.add("active");
                }
                else{
                    alert('Согласитесь с правилами');
                }
            };
        };
    render();
};

window.onload = function(){
    App.player();
};