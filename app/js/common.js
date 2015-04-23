/**
 * Created by admin on 22.04.2015.
 */

(function() {

    var app = {

        // -- инициализация при загрузке js
        initialize : function () {
            var _this = this;

            _this.setUpListeners();

        },
         // -- инициализация при загрузке js

        // -- обработчик событий над DOM элементами на странице
        setUpListeners: function () {

            // -- слайдер на второй слайд locations
            $('.scroll-to-locations').on('click', app.scrollToLocations);
            // -- слайдер на второй слайд locations

            // -- слайдер к блоку франшиза
            $('.scroll-to-franchise').on('click', app.scrollToFranchise);
            // -- слайдер к блоку франшиза

        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============


        // -- функция скролла к сотрудничеству
        scrollToFranchise: function (e) {
            e.preventDefault();

            var offset = $('.franchise-block-bg').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к сотрудничеству

        // -- функция скролла к услугам
        scrollToLocations: function (e) {
            e.preventDefault();

            var offset = $('.choose-location-form').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к услугам

        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров
        someFunction: function () {}
        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров

        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();

}());











































