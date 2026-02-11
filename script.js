function each(tab, func) {
    for (var i = 0; i < tab.length; i++) {
        func(tab[i], i);
    }
}

function filter(array, func) {
    var result = [];
    each(array, function (el, i) {
        if (func(el, i)) {
            result.push(el);
        }
    });
    return result;
}




//ex1
function contientMot(tab, cle, mot) {
    return filter(tab, function (el, i) {
        return el[cle].includes(mot);
    })
}

var tab = [{ nom: 'Alice Paris' }, { nom: 'Bob Lyon' }, { nom: 'Charlie Paris' }];
contientMot(tab, 'nom', 'Paris');


//ex2
function topAvecLettre(tab, lettre) {
    return filter(tab, function (el, i) {
        return el.score > 80 && el.nom[0] === lettre;
    }
    )
}

var etudiants = [
    { nom: 'Alice', score: 95 },
    { nom: 'Bob', score: 90 },
    { nom: 'Amir', score: 70 },
    { nom: 'Anna', score: 85 }
];

topAvecLettre(etudiants, 'A');


//ex3
function datesPassees(dates) {
}
datesPassees(['2023-01-01', '2026-05-01', '2025-01-01']);


//ex4
function palindromes(chaines) {
    return filter(chaines, function (el, i) {
        var v = el.split("");
        var v1 = v.reverse();
        var mot2 = v1.join("");
        return el === mot2;
    });
}
palindromes(['radar', 'chat', 'level', 'code', 'noon']);


//ex5
function avecPropriete(tab, cle) {
    return filter(tab, function (el) {
        return el.hasOwnProperty(cle);
    });
}

var personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob' },
    { nom: 'Charlie', age: 30 }
];

avecPropriete(personnes, 'age');


//ex6
function filtrerComplexe(nombres) {
}
filtrerComplexe([1, 2, 3, 4, 5, 12, 14, 7, 9]);


//ex7
function avecValeur(tab, valeur) {
}

var data = [
    { nom: 'A', valeurs: [1, 2, 3] },
    { nom: 'B', valeurs: [4, 5] },
    { nom: 'C', valeurs: [3, 5, 6] }
];

avecValeur(data, 3);


//ex8
function uniques(chaines) {
}
uniques(['chat', 'chien', 'chat', 'lion', 'tigre', 'lion']);


//ex9
function voyellesUniques(mots) {
}
voyellesUniques(['education', 'audio', 'unique', 'aeiou', 'hello']);











