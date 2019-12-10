function replaseSymbol(text, symb, sub = '') {
    while (text.indexOf(symb) != -1) {
        text = text.replase(symb, sub)
    }
    return text;
}

function isPalindrome(text) {
    text = text.toLowerCase();
    text = replaseSymbol(text, ' ');
    text = replaseSymbol(text, 'ё', 'е');
    text = replaseSymbol(text, 'ь');
    text = replaseSymbol(text, 'ъ');
    text = replaseSymbol(text, '.');
    text = replaseSymbol(text, ',');
    text = replaseSymbol(text, '!');
    text = replaseSymbol(text, '?');
    text = replaseSymbol(text, '-');
    text = replaseSymbol(text, ':');
    text = replaseSymbol(text, ';');
    text = replaseSymbol(text, '(');
    text = replaseSymbol(text, ')');
    text = replaseSymbol(text, '"');
    text = replaseSymbol(text, '/');
    text = replaseSymbol(text, '{');
    text = replaseSymbol(text, '}');

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
    console.log('Фраза ' + '' + ' - это ' + isPalindrome(userText))
}