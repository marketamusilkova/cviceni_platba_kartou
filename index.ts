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

const inputElm: HTMLInputElement = document.querySelector('.card-input');

const activateCard = (number: string): void => {
  if (
    (Number(number.slice(0, 2)) >= 51 && Number(number.slice(0, 2)) <= 54) ||
    (Number(number.slice(0, 2)) >= 2221 && Number(number.slice(0, 2)) <= 2720)
  ) {
    const mastercardElm: HTMLDivElement = document.querySelector('#mastercard');
    const mastercard: void = mastercardElm.classList.add('active');
  } else if (number.slice(0, 1) === '4') {
    const visaElm: HTMLDivElement = document.querySelector('#visa');
    const visa: void = visaElm.classList.add('active');
  } else if (number.slice(0, 2) === '34' || number.slice(0, 2) === '37') {
    const amexElm: HTMLDivElement = document.querySelector('#amex');
    const amex: void = amexElm.classList.add('active');
  } else if (
    number.slice(0, 2) === '65' ||
    (Number(number.slice(0, 3)) >= 644 && Number(number.slice(0, 3)) <= 649) ||
    number.slice(0, 4) === '6011'
  ) {
    const discoverElm: HTMLDivElement = document.querySelector('#discover');
    const discover: void = discoverElm.classList.add('active');
  } else if (number.slice(0, 2) === '36') {
    const dinersElm: HTMLDivElement = document.querySelector('#diners');
    const diners: void = dinersElm.classList.add('active');
  } else if (number.slice(0, 2) === '55') {
    const dinersElm: HTMLDivElement = document.querySelector('#diners');
    const diners: void = dinersElm.classList.add('active');
    const mastercardElm: HTMLDivElement = document.querySelector('#mastercard');
    const mastercard: void = mastercardElm.classList.add('active');
  }
};

const filterNonDigitsAndInsertHyphens = (value: string): string => {
  const digits: string = value.replace(/\D/g, '').slice(0, 16);
  const withHyphens: string = digits.replace(/(.{4})/g, '$1-');
  return withHyphens.endsWith('-') ? withHyphens.slice(0, -1) : withHyphens;
};

inputElm.addEventListener('input', (event: MouseEvent) => {
  const inputValue: string = (event.target as HTMLInputElement).value;
  const formattedValue: string = filterNonDigitsAndInsertHyphens(inputValue);
  (event.target as HTMLInputElement).value = formattedValue;
  activateCard(formattedValue);
});
