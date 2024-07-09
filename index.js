// Nejprve si rozmyslete logiku toho, jak bude vstupní pole pro zadání čísla platební karty zajišťovat doplňování pomlček.
// Pole by mělo příjímat pouze číslice a celkový počet číslic by měl být omezen na 16.
// Rozumná strategie je nejdříve ze zadaného vstupu odstranit všechno, co nejsou číslice a poté podle počtu číslic vložit do řetězce pomlčky.
// Bude se vám hodit funkce filterNonDigits ze cvičení v úvodní lekci kurzu.
// Implementujte výše zmíněnou logiku pomocí čístého JavaScriptu. Až poté doplňte typy tak, aby každá proměnná měla explicitně uvedený typ, stejně tak parametry funkcí a návratové hodnoty.
// Pokračujte v projektu z předchozího cvičení. V této části se zaměříme na zobrazování typu karty podle zadávaného čísla.
// Každý vydavatel karet uvádí jasná pravidla, jak podle čísla karty poznat její typ:
// MasterCard: začíná čísly 51—55 nebo 2221—2720.
// Visa: začíná číslem 4.
// American Express: začíná číslem 34 nebo 37.
// Discover: začíná čísly 65, 644—649, nebo 6011.
// Diners Club: začíná čísly 36 nebo 55.
var inputElm = document.querySelector('.card-input');
var activateCard = function (number) {
    if ((Number(number.slice(0, 2)) >= 51 && Number(number.slice(0, 2)) <= 54) ||
        (Number(number.slice(0, 2)) >= 2221 && Number(number.slice(0, 2)) <= 2720)) {
        var mastercardElm = document.querySelector('#mastercard');
        var mastercard = mastercardElm.classList.add('active');
    }
    else if (number.slice(0, 1) === '4') {
        var visaElm = document.querySelector('#visa');
        var visa = visaElm.classList.add('active');
    }
    else if (number.slice(0, 2) === '34' || number.slice(0, 2) === '37') {
        var amexElm = document.querySelector('#amex');
        var amex = amexElm.classList.add('active');
    }
    else if (number.slice(0, 2) === '65' ||
        (Number(number.slice(0, 3)) >= 644 && Number(number.slice(0, 3)) <= 649) ||
        number.slice(0, 4) === '6011') {
        var discoverElm = document.querySelector('#discover');
        var discover = discoverElm.classList.add('active');
    }
    else if (number.slice(0, 2) === '36') {
        var dinersElm = document.querySelector('#diners');
        var diners = dinersElm.classList.add('active');
    }
    else if (number.slice(0, 2) === '55') {
        var dinersElm = document.querySelector('#diners');
        var diners = dinersElm.classList.add('active');
        var mastercardElm = document.querySelector('#mastercard');
        var mastercard = mastercardElm.classList.add('active');
    }
};
var filterNonDigitsAndInsertHyphens = function (value) {
    var digits = value.replace(/\D/g, '').slice(0, 16);
    var withHyphens = digits.replace(/(.{4})/g, '$1-');
    return withHyphens.endsWith('-') ? withHyphens.slice(0, -1) : withHyphens;
};
inputElm.addEventListener('input', function (event) {
    var inputValue = event.target.value;
    var formattedValue = filterNonDigitsAndInsertHyphens(inputValue);
    event.target.value = formattedValue;
    activateCard(formattedValue);
});
