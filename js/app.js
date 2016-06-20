$( document ).ready(function() {
    $("html").cookiee({
        modalWidth: '420',
        colors: {
            button: '#CFDA33',
            background: '#00BCD4',
            font: '#FFF',
            url: '#E5F323'
        },
        shadow: true,
        customText: 'Dzięki wtyczce <strong>"COOKIEE"</strong> łatwo, szybko i przyjemnie dodasz do swojej strony informację o ciasteczkach cookies. <a href="#">POBIERZ</a>, skonfiguruj i odpal !',
        buttonText: "Dziękuję",
        debug: true
    });

    $('a.destroy').on('click', function(){
        $("html").cookiee().destroy();
    });

    $('a#create').on('click', function(e){
        e.preventDefault();
        var _type = $('select#type').val();
        var _buttonText = $('input#button_text').val();

        createCookiee(_type, _buttonText);

    });

    function createCookiee(_type, _buttonText){

        var element = $("html");
        element.cookiee().destroy();
        element.cookiee({
            type: _type,
            buttonText: _buttonText,
            colors: {
                button: '#CFDA33',
                background: '#00BCD4',
                font: '#FFF',
                url: '#E5F323'
            },
            debug: true
        });

    }
});