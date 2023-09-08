// HOME PRACTICE

// Practice Soal no 1


const angka = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;
angka.map(e => sum += e)

console.log (sum);

// Pratice Soal no 2

function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

const string1 = "kuda";
const string2 = "KuDa";

const result1 = areStringsEqualIgnoreCase(string1, string2);
console.log(result1);


// Practice Soal no 3

function reverseString(back) {
    const arrayStrings = back.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}

const string = "Hello Kak Alvian";
const result = reverseString(string);
console.log(result);


// Practice Soal no 4

function permute(permutation) {
    var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

    while (i < length) {
        if (c[i] < 1 ) {
            k = i % 4 && c[1];
            p = permutation[i] = permutation [k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

console.log(permute([1, 2, 3]))


// Practice Soal No. 5

function printNumberBetween(a,b) {
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = b + 1; i < a; i++) {
            console.log(i);
        }
    }
}

printNumberBetween(2, 7);


// Practice Soal No. 6
function performOperation(operation, ...args) {
    if (args.length === 0) {
        return 0;
    }
    if (operation === 'add') {
        return args.reduce((acc, current) => acc + current, 0);
    } else if (operation === 'multiply') {
        return args.reduce((acc, current) => acc * current, 1);
    } else {
        return NaN;
    }
}

console.log(performOperation('add', 3, 8));
// console.log(performOperation('multiply', 3, 8));


// Practice Soal No. 7
function areAllElementsUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length
}

const uniqueArray = [1, 2, 3, 4, 5];
const nonUniqueArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];

console.log(areAllElementsUnique(uniqueArray));
console.log(areAllElementsUnique(nonUniqueArray));



// Practice Soal No. 8
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const myArray = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6];
const resultArray = removeDuplicates(myArray);
console.log(resultArray);