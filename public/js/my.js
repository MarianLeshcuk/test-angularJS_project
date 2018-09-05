const app = angular.module('app', ['ngRoute']);
const socket = io.connect();


//Забираєм %2F та # з url сайту
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

//Створюєм адреси
app.config(function ($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/'
        });

});

//MAIN CONTROLLER
app.controller('MyCtrl', function ($scope) {});


//MENU DIRECTIVE
app.directive('menuBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/menu.html',
        controller: function ($scope) {
//            USING JQUERY
            'use strict'
            $(document).ready(function () {
//                ABOUT BUTTON SHOW ABOUT SLIDE
                $('#About').on('click', function () {
                    $('.content').css('width', '70%');
                    setTimeout(function () {
                        $('.about').css('display', 'block');
                        $('#Back').css('display', 'block');
                    }, 2000);
                });
//                OFFER BUTTON SHOW OFFER SLIDE
                $('#Offers').on('click', function () {
                    $('.content').css('width', '70%');
                    setTimeout(function () {
                        $('.offers').css('display', 'block');
                        $('#Back').css('display', 'block');
                    }, 2000);
                });
//                CONTACTS BUTTON SHOW CONTACTS SLIDE
                $('#Contacts').on('click', function () {
                    $('.content').css('width', '70%');
                    setTimeout(function () {
                        $('.contacts').css('display', 'block');
                        $('#Back').css('display', 'block');
                    }, 2000);
                });
//                BACK BUTTON CLOSE OPENED SLIDE
                $('#Back').on('click', function () {
                    $('.content').css('width', '0%');
                    $('#Back').css('display', 'none');
                    $('.about').css('display', 'none');
                    $('.offers').css('display', 'none');
                    $('.contacts').css('display', 'none');
                });
            });
        }
    }
});

//CONTENT DIRECTIVE
app.directive('contentBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/content.html',
        controller: function ($scope) {

            //            SLIDER
            //                setInterval(function () {
            //                    moveRight();
            //                }, 5000);

            var slideCount = $('#slider ul li').length;
            var slideWidth = $('#slider ul li').width();
            var slideHeight = $('#slider ul li').height();
            var sliderUlWidth = slideCount * slideWidth;

            $('#slider').css({
                width: slideWidth,
                height: slideHeight
            });

            $('#slider ul').css({
                width: sliderUlWidth,
                marginLeft: -slideWidth
            });

            $('#slider ul li:last-child').prependTo('#slider ul');

            function moveLeft() {
                $('#slider ul').animate({
                    left: +slideWidth
                }, 200, function () {
                    $('#slider ul li:last-child').prependTo('#slider ul');
                    $('#slider ul').css('left', '');
                });
            };

            function moveRight() {
                $('#slider ul').animate({
                    left: -slideWidth
                }, 200, function () {
                    $('#slider ul li:first-child').appendTo('#slider ul');
                    $('#slider ul').css('left', '');
                });
            };

            $('a.control_prev').click(function () {
                moveLeft();
            });

            $('a.control_next').click(function () {
                moveRight();
            });

//            USING JQUERY
            'use strict'
            $(document).ready(function () {
//                OPEN MODAL WINDOW
                $('#Slide1Modal').on('click', function () {
                    $('#Overlay').css('display', 'block');
                    $('.modal').css('display', 'block');
                    $('#slide1ModalContent').css('display', 'block');
                });
                $('#Slide2Modal').on('click', function () {
                    $('#Overlay').css('display', 'block');
                    $('.modal').css('display', 'block');
                    $('#slide2ModalContent').css('display', 'block');
                });
                $('#Slide3Modal').on('click', function () {
                    $('#Overlay').css('display', 'block');
                    $('.modal').css('display', 'block');
                    $('#slide3ModalContent').css('display', 'block');
                });
                $('#Slide4Modal').on('click', function () {
                    $('#Overlay').css('display', 'block');
                    $('.modal').css('display', 'block');
                    $('#slide4ModalContent').css('display', 'block');
                });
                $('#Slide5Modal').on('click', function () {
                    $('#Overlay').css('display', 'block');
                    $('.modal').css('display', 'block');
                    $('#slide5ModalContent').css('display', 'block');
                });
                $('#Slide6Modal').on('click', function () {
                    $('#Overlay').css('display', 'block');
                    $('.modal').css('display', 'block');
                    $('#slide6ModalContent').css('display', 'block');
                });
//                CLOSE MODAL WINDOW
                $('#Close').on('click', function () {
                    $('#Overlay').css('display', 'none');
                    $('.modal').css('display', 'none');
                    $('.slide1ModalContent').css('display', 'block');
                    $('.modalSlidesContent').css('display', 'none');
                });
            });

        }
    }
});
