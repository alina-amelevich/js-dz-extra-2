'use strict'
function replaceSymbol(text, symb, sub = '') {
    while (text.indexOf(symb) !== -1) {
        text = text.replace(symb, sub)
    }
    return text;
}

function isPalindrome(text) {
    text = text.toLowerCase();
    text = replaceSymbol(text, ' ');
    text = replaceSymbol(text, '\n');   // Без пробельных символов один раз выскочил какой-то баг, поэтому добавила их
    text = replaceSymbol(text, '\t');   // - // -
    text = replaceSymbol(text, '\r');   // - // -
    text = replaceSymbol(text, '\v');   // - // -
    text = replaceSymbol(text, 'ё', 'е');
    text = replaceSymbol(text, 'ь');
    text = replaceSymbol(text, 'ъ');
    text = replaceSymbol(text, '.');
    text = replaceSymbol(text, ',');
    text = replaceSymbol(text, '!');
    text = replaceSymbol(text, '?');
    text = replaceSymbol(text, '-');
    text = replaceSymbol(text, ':');
    text = replaceSymbol(text, ';');
    text = replaceSymbol(text, '(');
    text = replaceSymbol(text, ')');
    text = replaceSymbol(text, '"');
    text = replaceSymbol(text, '/');
    text = replaceSymbol(text, '{');
    text = replaceSymbol(text, '}');

    let i = 0;
    let j = text.length - 1;
    
    while (i < j) {
        if (text.charAt(i) !== text.charAt(j)) {
            return false;
        };
        i++;
        j--;
    } 
    return true;
}

function runPalindrome() {
    let userText = prompt('Введите фразу');
    let checkPalindrome = isPalindrome(userText);
    let value = (checkPalindrome === true) ? 'палиндром' : 'не палиндром';
    alert('Фраза ' + '"' + userText + '"' + ' - это ' + value);
}
