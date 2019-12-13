function replaceSymbol(text, symb, sub = '') {
    while (text.indexOf(symb) != -1) {
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

    let reverseText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text.charAt(i);
    }

    if (text === reverseText) {
        return 'палиндром';
    }
    return 'не палиндром';
}

function runPalindrome() {
    let userText = prompt('Введите фразу');
    console.log('Фраза ' + userText + ' - это ' + isPalindrome(userText))
}
