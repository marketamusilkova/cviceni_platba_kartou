// Nejprve si rozmyslete logiku toho, jak bude vstupní pole pro zadání čísla platební karty zajišťovat doplňování pomlček.
// Pole by mělo příjímat pouze číslice a celkový počet číslic by měl být omezen na 16.
// Rozumná strategie je nejdříve ze zadaného vstupu odstranit všechno, co nejsou číslice a poté podle počtu číslic vložit do řetězce pomlčky.
// Bude se vám hodit funkce filterNonDigits ze cvičení v úvodní lekci kurzu.
// Implementujte výše zmíněnou logiku pomocí čístého JavaScriptu. Až poté doplňte typy tak, aby každá proměnná měla explicitně uvedený typ, stejně tak parametry funkcí a návratové hodnoty.

const inputElm: HTMLInputElement = document.querySelector('.card-input');

const filterNonDigitsAndInsertHyphens = (value: string): string => {
  const digits: string = value.replace(/\D/g, '').slice(0, 16);
  const withHyphens: string = digits.replace(/(.{4})/g, '$1-');
  return withHyphens.endsWith('-') ? withHyphens.slice(0, -1) : withHyphens;
};

inputElm.addEventListener('input', (event: MouseEvent) => {
  const inputValue: string = (event.target as HTMLInputElement).value;
  const formattedValue: string = filterNonDigitsAndInsertHyphens(inputValue);
  (event.target as HTMLInputElement).value = formattedValue;
});


