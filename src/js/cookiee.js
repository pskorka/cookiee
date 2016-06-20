/*!
 * Cookies Info v1.0.0
 * http://gitlab.divante.pl/front-end/cookies
 *
 * Released under the MIT license
 */
"use strict";
(function ($) {

    $.fn.cookiee = function (options) {

        // Default options
        var settings = $.extend({
            type: 'modal',
            barPosition: 'bottom',
            barAffix: false,
            modalPosition: 'bottom-right',
            modalMargin: 20,
            modalWidth: false,
            modalRoundCorners: false,
            theme: 'light',
            colors: {
                button: null,
                background: null,
                font: null,
                url: null
            },
            shadow: true,
            closingAnimation: 'slide',
            closingAnimationSpeed: 500,
            closeButtonType: 'button',
            buttonText: "Zgadzam się",
            customText: null,
            privacyPolicyText: 'Polityką prywatności',
            privacyPolicyUrl: '#',
            cookieName: 'ciastka',
            cookieExpire: 30,
            debug: false

        }, options);

        var plugin = this;

        plugin.destroy = function () {
            $('body').removeAttr('style');
            $('.cookies-info').remove();
        };


        function getColor(element) {

            var button = settings.colors['button'];
            var background = settings.colors['background'];
            var font = settings.colors['font'];
            var url = settings.colors['url'];
            var style = '';

            for (var key in settings.colors) {

                if (key == element) {

                    if (element == 'button' && button != null) {
                        return 'style="background-color:' + button + '"';
                    } else if (element == 'background' && background != null) {
                        return 'style="background-color:' + background + '"';
                    } else if (element == 'font' && font != null) {
                        return 'style="color:' + font + '"';
                    } else if (element == 'url' && url != null) {
                        return 'style="color:' + url + '"';
                    }
                }
            }

            return style;
        }

        var mainContent = '<div class="cookies-info ' + 'c-'+settings.type + ' ' + settings.theme + '" ' + getColor('background') + '></div>';
        var text = '<p ' + getColor('font') + '>Strona korzysta z plików cookie w celu realizacji usług zgodnie z <a href="' + settings.privacyPolicyUrl + '" ' + getColor('url') + '>' + settings.privacyPolicyText + '</a><br />Możesz okreslić warunki przechowywania lub dostępu do cookie w Twojej przeglądarce lub konfiguracji usługi.</p>';

        if (settings.customText) {
            text = '<p ' + getColor('font') + '>' + settings.customText + '</p>';
        }

        var buttons = {
            type1: '<button class="accept-cookies" ' + getColor('button') + '>' + settings.buttonText + '</button>',
            type2: '<a class="accept-cookies" href="#"></a>'
        };
        var content = {};
        var modalMargin = settings.modalMargin;
        var closingSpeed = settings.closingAnimationSpeed;

        function checkStatus() {
            if (Cookies.get(settings.cookieName)) {
                return false;
            }
            return true;
        }

        function destroy() {
            content.remove();
        }

        function acceptCookies(event) {
            event.preventDefault();
            if (settings.closingAnimation == "fade") {
                $(this).parent().fadeOut(closingSpeed, destroy);
            } else if (settings.closingAnimation == "slide") {
                $(this).parent().slideUp(closingSpeed, destroy);
            }

            if (settings.barAffix) {
                if (settings.barPosition == 'top') {
                    $('body').css('top', '0');
                } else if (settings.barPosition == 'top') {
                    $('body').css('bottom', '0');
                }
            }

            if (!settings.debug) {
                Cookies.set(settings.cookieName, '1', {expires: settings.cookieExpire});
            }
        }

        return this.each(function ($this) {

            if (checkStatus()) {

                $this = $(this);

                if (settings.type == 'bar') {

                    if (settings.barPosition == 'top') {
                        $this.prepend(mainContent);
                    } else {
                        $this.append(mainContent);
                    }

                    content = $this.find(".cookies-info.c-bar");

                    if (settings.barAffix) {
                        content.css('position', 'fixed');
                    }

                    if (settings.barPosition == 'top') {
                        content.css('top', 0);
                    } else if (settings.barPosition == 'bottom') {
                        content.css('bottom', 0);
                    }

                } else if (settings.type == 'modal') {

                    $this.append(mainContent);
                    content = $this.find(".cookies-info.c-modal");

                    switch (settings.modalPosition) {
                        case ('top-left'):
                            content.css({'top': modalMargin, left: modalMargin, marginRight: modalMargin});
                            break;
                        case ('top-right'):
                            content.css({'top': modalMargin, right: modalMargin, marginLeft: modalMargin});
                            break;
                        case ('bottom-right'):
                            content.css({'bottom': modalMargin, right: modalMargin, marginLeft: modalMargin});
                            break;
                        case ('bottom-left'):
                            content.css({'bottom': modalMargin, left: modalMargin, marginRight: modalMargin});
                            break;
                    }

                    if (settings.modalRoundCorners) {
                        content.addClass('rounded');
                    }

                    if (settings.modalWidth) {
                        content.css('width', settings.modalWidth);
                    }

                }

                content.append(text);

                if (settings.customText) {
                    content.find('> p > a').css('color', settings.colors.url);
                }

                if (settings.closeButtonType == 'button') {
                    content.append(buttons.type1);
                } else {
                    content.append(buttons.type2);
                }

                if (settings.shadow) {
                    content.addClass('shadow');
                }

                if (settings.barAffix) {

                    var barHeight = content.outerHeight();
                    var cloned = content.clone();
                    content.remove();
                    if (settings.barPosition == 'bottom') {
                        $('body').css({'position': 'relative', 'margin-bottom': barHeight});
                        $('html').append(cloned);
                    } else {
                        $('body').css({'position': 'relative', 'margin-top': barHeight});
                        $('html').prepend(cloned);
                    }
                }

                $('.accept-cookies').bind("click", acceptCookies);

                return $this;

            }
        });
    };

}(jQuery));
