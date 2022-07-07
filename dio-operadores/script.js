function numComparison(n1, n2) {
    const firstPhrase = createFirstPhrase(n1, n2);
    const secondPhrase = createSecondPhrase(n1, n2)

    return `${firstPhrase} ${secondPhrase}`
}

function createFirstPhrase(n1, n2) {
    let areEqual = '';
    if(n1 !== n2) {
        areEqual = "não";
    }

    return `Os números ${n1} e ${n2} ${areEqual} são iguais.`
}

function createSecondPhrase(n1, n2) {
    const sum = n1 + n2;

    let result10 = 'menor';
    let result20 = 'menor';

    const compare10 = sum > 10;
    const compare20 = sum > 20;

    if(compare10) {
        resultado10 = 'maior';
    }

    if(compare20) {
        result20 = 'maior';
    }

    return `Sua soma é ${sum}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(numComparison(1, 2));