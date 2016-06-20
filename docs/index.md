# Cookiee

Cookiee to wtyczka napisana w języku javascript, która informuje użytkownika który odwiedza stronę internetową, że do poprawnego jej działania wymagana jest zgoda na zapis oraz odczyt ciasteczek. Jako właściciel strony musisz umieścić zrozumiałą, czytelną i widoczną dla użytkownika infomację o ciasteczkach na swojej stronie. W tym celu powstała wtyczka Cookies, która pozwala na indywidualne dostosowanie komunikatu, jednocześnie spełniając wymogi prawne z zapisów Art. 173, 174 oraz Art. 209 znowelizowanej ustawy Prawa Telekomunikacyjnego.

## Funkcjonalności

* Wyświetlanie w postaci okienka lub paska
* 2 gotowe schematy kolorystyczne lub własne kolory
* 3 rodzaje animacji zamykania komunikatu
* 2 rodzaje przycisków
* Możliwość blokowanie komunikatu podczas przewijania
* Latwe wprowadzanie własnej treści komunikatu
* Szybka zmiana wyglądu( dodanie cienia, zaokrąglonych krawędzi, szerokości, marginesu, pozycji na stronie)
* Ustawienie czasu wygaśnięcia cookies
* Tryb debugowania

## Instalacja

Do działania wtyczki wymagana jest biblioteka jQuery. Możesz ją pobrać ze strony <a href="http://jquery.com/download/" _target="blank">http://jquery.com/download/</a>.

```javascript
    <script type="text/javascript" src="jquery.min.js"></script>
```

Kolejny krok to podpięcie samej wtyczki cookiee

```javascript
    <script type="text/javascript" src="cookiee.min.js"></script>
```

## Uruchomienie

Inicjalizacja wtyczki

```javascript
        // Widok domyślny
        $('body').cookiee();
        
        // Informacja umieszczona wewnątrz konteneta w postaci ciemnego paska
        $('.myClass').cookiee({
            type: 'bar',
            theme: 'dark'
        });
```

## Gotowy przykład

```html
        <html>
        <head>
            <script type="text/javascript" src="jquery.min.js"></script>
            <script type="text/javascript" src="js/cookiee.min.js"></script>
            <link rel="stylesheet" type="text/css" href="css/cookiee.min.css" media="all"/>
            <script>
            
                $(document).ready(function() {
                    $('body').cookiee({
                        modalWidth: '400',
                        modalRoundCorners: true,
                        theme: 'dark'
                    });
                });
                
            </script>
        </head>
        <body>
           <section>Hello Cookiee</section>
        </body>
        <footer></footer>
        </html>
```
