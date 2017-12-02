exports.capitalize = (s) => {
    if(s === undefined) {
        return undefined;
    }

    if(s === '') {
        return '';
    }

    if(typeof(s) !== 'string') {
        return '';
    }

    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

exports.countWords = (s) => {
    if(typeof(s) !== 'string') {
        return undefined;
    }

    s = s.trim().replace(/ +/g, ' ');
    const wordsQuantity = s.split(' ').length;

    if(wordsQuantity === 1) {
        return 0;
    }

    return wordsQuantity;
}

exports.zeroReplacer = (s) => {
    if(typeof(s) !== 'string') {
        return undefined;
    }
    
    return s.replace(/0/g, ' ');
}



