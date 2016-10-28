window.$ = window.jQuery = require('../../node_modules/jquery/dist/jquery.min.js');
const shell = require('electron').shell;
//        (function ($) {
//            $.StartScreen = function () {
//                var plugin = this;
//                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//
//                plugin.init = function () {
//                    setTilesAreaSize();
//                    if (width > 640) addMouseWheel();
//                };
//
//                var setTilesAreaSize = function () {
//                    var groups = $(".tile-group");
//                    var tileAreaWidth = 80;
//                    $.each(groups, function (i, t) {
//                        if (width <= 640) {
//                            tileAreaWidth = width;
//                        } else {
//                            tileAreaWidth += $(t).outerWidth() + 80;
//                        }
//                    });
//                    $(".tile-area").css({
//                        width: tileAreaWidth
//                    });
//                };
//
//                var addMouseWheel = function () {
//                    $("body").on('mousewheel', function (event, delta, deltaX, deltaY) {
//                        var page = $(document);
//                        var scroll_value = delta * 50;
//                        page.scrollLeft(page.scrollLeft() - scroll_value);
//                        return false;
//                    });
//                };
//
//                plugin.init();
//            }
//        })(jQuery);
$(function () {
    // $.StartScreen();

    const links = document.querySelectorAll('a[href]');

    Array.prototype.forEach.call(links, function (link) {
        const url = link.getAttribute('href');
        if (url.indexOf('http') === 0 || url.indexOf('file') === 0) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                shell.openExternal(url);
            });
        }
    });

    var tiles = $(".tile, .tile-small, .tile-sqaure, .tile-wide, .tile-large, .tile-big, .tile-super");

    $.each(tiles, function () {
        var tile = $(this);
        setTimeout(function () {
            tile.css({
                opacity: 1,
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)",
                "-webkit-transition": ".3s",
                "transition": ".3s"
            });
        }, Math.floor(Math.random() * 500));
    });

    $(".tile-group").animate({
        left: 0
    });
});