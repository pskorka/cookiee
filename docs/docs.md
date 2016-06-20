# Opcje
<p>Wtyczka oferuje wiele możliwiści konfiguracyjnych. Poniżej lista opcji, które pozwolą Ci dostosować wygląd i zawartość informacji o cookies do potrzeb Twojej strony </p>

## Ogólne

> type

<p>Wyświetlanie w postaci paska lub okienka.</p>

```javascript
    typ: 'string'
    domyślnie: 'modal' // okienko
    opcje: 'modal', 'bar' // okienko, pasek
```

> theme

<p>Schemat kolorystyczny.</p>

```javascript
    typ: 'string'
    domyślnie: 'light' // schamat jasny
    opcje: 'light', 'dark' // schamat jasny, schemat ciemny
```

> colors

<p>Własne opcje kolorystyczne</p>

```javascript
    typ: 'object'
    domyślnie: 
    
    colors:{
        button: 'wartość w zależności od wybranego schematu kolorystycznego',
        background: 'wartość w zależności od wybranego schematu kolorystycznego',
        font: 'wartość w zależności od wybranego schematu kolorystycznego',
        url: 'wartość w zależności od wybranego schematu kolorystycznego'
    }
    opcje:
     
    colors:{
        button: nazwa koloru lub wartość hexadecymalna  // kolor przycisku
        background: nazwa koloru lub wartość hexadecymalna // kolor tła okienka/paska
        font: nazwa koloru lub wartość hexadecymalna // kolor czcionki
        url: nazwa koloru lub wartość hexadecymalna // kolor linków
    }
```

> shadow

<p>Cień</p>

```javascript
    typ: 'boolean'
    domyślnie: true
    opcje: true, false // cień włączony, cień wyłączony
```

> closeButtonType

<p>Rodzaj przycisku akceptacji plików cookies</p>

```javascript
    typ: 'string'
    domyślnie: 'button'
    opcje: 'button', 'cross' // przycisk, krzyżyk
```

> closingAnimation

<p>Efekt zamykanie okienka</p>

```javascript
    typ: 'string'
    domyślnie: 'slide'
    opcje: 'slide', 'fade', 'hide' // wyjazd, zanikanie, ukrycie
```

> closingAnimationSpeed

<p>Szybkość efektu zamykanie okienka</p>

```javascript
    typ: 'number'
    domyślnie: 500
    opcje: wartość liczbowa // dowolna liczba całkowita (milisekunda)
```

## Opcje okienka
> modalPosition

<p>Pozycja okienka na stronie</p>

```javascript
    typ: 'string'
    domyślnie: 'bottom-right' // okienko w prawym dolnym rogu
    opcje: 'top-left', 'top-right', 'bottom-left', 'bottom-right' // okienko w lewym górnym rogu, okienko w prawym górnym rogu, okienko w lewym dolnym rogu, okienko w prawym dolnym rogu 
```  

> modalMargin

<p>Odstęp od krawędzi okna przeglądarki</p>

```javascript
    typ: 'number'
    domyślnie: 20 // margines 20 pikseli
    opcje: wartość liczbowa // dowolna liczba całkowita (piksel)
```  

> modalWidth

<p>Szerokość okienka</p>

```javascript
    typ: 'number'
    domyślnie: false // szerokość okienka dostosowuje się automatycznie w zależności od zawartości
    opcje: wartość liczbowa, false // dowolna liczba całkowita (piksel), automatyczna szerokość
```  

> modalRoundCorners

<p>Zaokrąglenie krawędzi okienka</p>

```javascript
    typ: 'number'
    domyślnie: false // szerokość okienka dostosowuje się automatycznie w zależności od zawartości
    opcje: wartość liczbowa, false // dowolna liczba całkowita (piksel), brak zaokrąglenia
```  

## Opcje przycisku
> buttonText

<p>Etykieta przycisku akceptacji cookies</p>

```javascript
    typ: 'string'
    domyślnie: 'Zgadzam się' // wyświetla tekst "Zgadzam się" jako etykieta przycisku
    opcje: dowolny ciąg znaków // wyświetla dowolny tekst jako etykieta przycisku
```

## Opcje tekstu
> customText

<p>Treść informacji cookies</p>

```javascript
    typ: 'string'
    domyślnie: '<p>Strona korzysta z plików cookie w celu realizacji usług zgodnie z <a href="tutaj wstawiany jest url" >Tutaj wstawiany jest tekst url</a><br />Możesz okreslić warunki przechowywania lub dostępu do cookie w Twojej przeglądarce lub konfiguracji usługi.</p> // wyświetla tekst "Zgadzam się" jako etykieta przycisku
    opcje: dowolny tekst lub kod HTML // wyświetla treść informacji o cookies
```

> privacyPolicyText
   
<p>Etykieta linku</p>

```javascript
   typ: 'string'
   domyślnie: 'Polityką prywatności'
   opcje: dowolny tekst // etykieta linku
```

> privacyPolicyUrl
   
<p>Adres URL</p>

```javascript
   typ: 'string'
   domyślnie: '#'
   opcje: dowolny tekst // adres url do strony np. regulaminu, polityki prywatności
```

## Opcje paska
> barPosition

<p>Pozycja paska na stronie</p>

```javascript
    typ: 'string'
    domyślnie: 'bottom' // pasek na dole
    opcje: 'bottom', 'top' // pasek na dole, pasek na górze
```
    
> barAffix

<p>Blokada pozycji paska podczas przewijania strony</p>

```javascript
    typ: 'boolean'
    domyślnie: false // włączona
    opcje: true, false // blokada włączona, blokada wyłączona
```   

## Obsługa "cookies"
> cookieName

<p>Nazwa identyfikująca cookie</p>

```javascript
    typ: 'string'
    domyślnie: 'ciastka'
    opcje: dowolny ciąg znaków // nazwa pod jaką będzie przechowywana zmienna w cookies
```

> cookieExpire

<p>Czas wygaśnięcia</p>

```javascript
    typ: 'number'
    domyślnie: 30
    opcje: wartość liczbowa // dowolna liczba całkowita (dzień)
```

## Opcje deweloperskie

> debug

<p>Wyłącza dodawanie cookies</p>

```javascript
    typ: 'boolean'
    domyślnie: false
    opcje: true, false // dodawanie cookies nieaktywne, dodawanie cookies aktywne
```
