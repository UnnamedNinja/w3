//1
let is_array = (array) => Array.isArray(array);

//2
let array_Clone = (array) => {
    return array.slice(0);
}

//3
let first = (array, n) => {
    if (n == null) {
        return array[0]
    } else if (n > 0) {
        return array.slice(0, n);
    } else {
        return [];
    }
}

//4
let last = (array, n) => {
    if (n == null) {
        return array[array.length - 1];
    } 
    return array.slice(Math.max(array.length - n, 0));
}

//6
let evenDash = (num) => {
    let formatedNum = '';
    for (let i = 0; i < num.length; i++) {
        if(parseInt(num[i]) % 2 === 0 && parseInt(num[i + 1]) % 2 === 0) {
            formatedNum += num[i] + '-';
        } else {
            formatedNum += num[i];
        }
    }
    return formatedNum;
}

//7
let sortArray = (array) => array.sort((a, b) => a - b);

//8
let mostFreq = (array) => {
    let freq = 0;
    let maxFrq = array[0];
    for (let i = 0; i < array.length; i++) {
        let count = 1;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
            if (freq < count) {
                freq = count;
                maxFrq = array[i];
            }
        }
    }
    return (maxFrq + ' (' + freq + ' times)')
}

//9
let swapCase = (message) => {
    let arrayMessage = message.split('');
    for (let i = 0; i < message.length; i++) {
        if (arrayMessage[i] === arrayMessage[i].toLowerCase()) {
            arrayMessage[i] = arrayMessage[i].toUpperCase();
        } else {
            arrayMessage[i] = arrayMessage[i].toLowerCase();
        }
    }
    return arrayMessage.join('');
}

//10
let printArray = (array) => {
    for (let i in array) {
        console.log('"row ' + i + '"')
        for (let j in array[i]) {
            console.log('"' + array[i][j] + '"');
        }
    }
}

//11
let squaresSum = (array) => {
    let squareArray = array.map(x => x = Math.pow(x, 2));
    return squareArray.reduce((total, current) => total + current);
}

//12
let sumAndProduct = (array) => {
    let sum = array.reduce((total, curr) => total + curr);
    let product = array.reduce((total, curr) => total * curr);
    console.log(`Sum : ${sum} Product :  ${product}`);
}

//13
let todoArray = [];
let todoForm = document.getElementById("list");
let list = document.querySelector(".todo-list");
let inputField = document.querySelector('input');
let displaybtn = document.querySelector('.display');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    todoArray.push(inputField.value);
    inputField.value = '';
})
let displayArray = () => {
    let elements = '';
    for (let i = 0; i < todoArray.length; i++) {
        elements += 'Element ' + i + ' ' + todoArray[i] + '<br>'; 
    }
    document.querySelector(".todo-list").innerHTML = elements;
}

//14
let removeDuplicate = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}

//15
let combineArrays = (numericArray, stringArray) => {
    for (let i = 1; i < stringArray.length; i++) {
        if (i >= 1 && i <=3) {
            console.log(i.toString() + numericArray[i] + ' choice is ' + stringArray[i]);
        } else {
            console.log(i.toString() + numericArray[0] + ' choice is ' + stringArray[i]);
        }
    }
}

//16
let leapYearRange = (firstYear, lastYear) => {
    let yearsArray = [];
    for (let i = firstYear; i <= lastYear; i++) {
        yearsArray.push(i);
    }
    return isYearLeap(yearsArray);
}
let isYearLeap = (array) => {
    let leapYears = [];
    array.forEach((year, index) => {
        if (index % 4 === 0) {
            leapYears.push(year);
        }
    })
    return leapYears;
}

//17
let shuffleArray = (array) => {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
       let index = Math.floor(Math.random() * array.length);
       let temp = array[index];
       array[index] = array[i];
       array[i] = temp;
    }
    return array;
}

//18
let binary_Search = (array, element) => {
    //рекурсія
    // let midIndex = 0;
    // if (array.length % 2 === 0) {
    //     midIndex = Math.floor((array.length / 2) - 1);
    // } else {
    //     midIndex = Math.floor((array.length / 2));
    // }
    // if (element === array[midIndex]) {
    //     return console.log('є)');
    // } else if (element < array[midIndex]) {
    //     binary_Search(array.slice(0, midIndex), element);
    // } else if (element > array[midIndex]){
    //     binary_Search(array.slice(midIndex + 1, array.length), element);
    // } else {
    //     console.log('нема(')
    // }
    //циклом їбать
    let startIndex = 0;
    let endIndex = array.length - 1;
    let count = 0;
    while (startIndex <= endIndex) {
        midIndex = Math.floor((startIndex + endIndex) / 2);
        if (element === array[midIndex]){
            console.log('Element index: ' + midIndex);
            count++;
            break;
        } else if (element < array[midIndex]){
            endIndex = midIndex - 1;
        } else if (element > array[midIndex]){
            startIndex = midIndex + 1;
        }
    }
    if (count === 0) {
        console.log('No such element');
    }
}

//19
let arraysElemSum = (firstArray, secondArray) => {
    sumArray = [];
    if (firstArray.length >= secondArray.length) {
        for (let i = 0; i < firstArray.length; i++) {
            if (!secondArray[i]) {
                sumArray.push(0 + firstArray[i]);
            } else {
                sumArray.push(firstArray[i] + secondArray[i]);
            }
        }
    } else {
        for (let i = 0; i < secondArray.length; i++) {
            if (!firstArray[i]) {
                sumArray.push(0 + secondArray[i]);
            } else {
                sumArray.push(firstArray[i] + secondArray[i]);
            }
        }
    }
    return sumArray;
}

//20
let findDuplicate = (array) => {
    let duplicatesArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let isAlready = duplicatesArray.indexOf(array[i]);
            if (array[i] === array[j] && isAlready === -1) {
                duplicatesArray.push(array[i]);
            }
        }
    }
    return duplicatesArray;
}

//21
let flatten = (array, shallow, flattenArray) => {
    if (!flattenArray) {
        flattenArray = [];
    }
    if (shallow) {
        return flattenArray.concat(...array);
    }
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], shallow, flattenArray);
        } else {
            flattenArray.push(array[i]);
        }
    }
    return flattenArray;
}

//22
let union = (firstArray, secondArray) => {
    let concatArray = firstArray.concat(secondArray);
    removeDuplicate(concatArray);
    return concatArray.sort((a, b) => a - b);
}

//23
let difference = (firstArray, secondArray) => {
    //мій спосіб
    // let combinedArray = firstArray.concat(secondArray);
    // combinedArray = flatten(combinedArray);
    // let uniqueArray = [];
    // for (let i = 0; i < combinedArray.length; i++) {
    //     let count = 0;
    //     for (let j = 0; j < combinedArray.length; j++) {
    //         if (i === j) {
    //             continue;
    //         }
    //         if (combinedArray[i] === combinedArray[j]) {
    //             count++;
    //         }
    //     }
    //     if (!count) {
    //         uniqueArray.push(combinedArray[i]);
    //     }
    // }
    // return uniqueArray;
    firstArray = flatten(firstArray);
    secondArray = flatten(secondArray);
    let uniqueArray = [];
    for (let i in firstArray) {
        if (!secondArray.includes(firstArray[i])) {
            uniqueArray.push(firstArray[i])
        }
    }
    for (let i in secondArray) {
        if (!firstArray.includes(secondArray[i])) {
            uniqueArray.push(secondArray[i])
        }
    }
    return uniqueArray;
}

//24
let removeFalse = (array) => array.filter(x => x);

//25
let sortByTitle = (array) => {
    return array.sort((a, b) => {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x > y) return 1;
        if (x < y) return -1;
    })
}

//26
let pairSum = (array, number) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] + array[i + 1] === number) {
            count++;
            return(console.log(i + ' ' + (i + 1)));
        }
    }
    if(!count) {
        return console.log('No such pair');
    }
}

//27
let retrieveProperty = (array, property) => {
    let propertiesArray = [];
    for (let i in array) {
        propertiesArray.push(array[i][property]);
    }
    return propertiesArray;
}

//28
let longest_common_starting_substring = (array) => {
    let substring = array[0];
    let string = array[1];
    let newString = '';
    for (let i in string) {
        if (string[i] === substring[i]) {
            newString += string[i]
        } else {
            break;
        }
    }
    if (newString) {
        console.log(newString);
    }
}

//29
let num_string_range = (start, end, step) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let resultArray = [];
    if (typeof start === 'string') {
        for (let i = 0; i < alphabet.length; i++) {
            if(alphabet[i] === start) {
                for (let j = i; j < alphabet.length; j = j + step) {
                    resultArray.push(alphabet[j]);
                    if(alphabet[j] === end || alphabet[j + 1] === end) {
                        break;
                    }
                }
                break;
            }
        }
    } else if (typeof start === 'number') {
        if (start < end) {
            for (let i = start; i <= end; i = i + step) {
                resultArray.push(i);
            }
        } else {
            for (let i = start; i >= end; i = i - step) {
                resultArray.push(i);
            }
        }
    }
    return resultArray;
}

//30
let merge_array = (firstArray, secondArray) => {
    let concatArray = firstArray.concat(secondArray);
    console.log(concatArray);
    return (removeDuplicate(concatArray));
}

//31
let remove_array_element = (array, element) => {
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === element) {
    //         array.splice(i, 1);
    //     }
    // }
    array.splice(array.indexOf(element), 1);
    return array;
}

//32
let contains = (array, element) => {
    let index = array.indexOf(element);
    if (index === -1) {
        return false;
    } 
    return true;
}

//33
let empty = (array) => {
    console.log(array);
    array = [];
    console.log(array);
}

//34
let nthlargest = (array, num) => Math.max(...array.slice(0, num));

//35
let randomElement = (array) => array[Math.floor(Math.random() * array.length)];

//36
let array_filled = (amount, element) => {
    return Array(...Array(amount)).map(Number.prototype.valueOf,element);
}

//37
let array_filled_string = (amount, element) => {
    return Array(...Array(amount)).map(String.prototype.valueOf,element);
}

//38
let move = (array, current, next) => {
    let element = array.splice(current, 1);
    if (next > 0) {
        array.splice(next, 0, Number(element));
    } else if(next < 0) {
        array.splice(next + 1, 0, Number(element));
    }
    return array;
}

//39
//заюзав removeFalse() з 24 завд.

//40
let array_range = (start, amount) => {
    let newArray = [];
    while (amount > 0) {
        newArray.push(start);
        start++;
        amount--;
    }
    return newArray;
}

//41
let rangeBetween = (start, end) => {
    let newArray = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            newArray.push(i);
        }
    } else {
        for (let i = end; i <= start; i++) {
            newArray.push(i);
        }
    }
    return newArray;
}

//42
let last_difference = (firstArray, secondArray) => {
    firstArray = flatten(firstArray);
    secondArray = flatten(secondArray);
    let groupArray = firstArray.concat(secondArray);
    groupArray = removeDuplicate(groupArray);
    return groupArray.sort((a, b) => a - b);
}



console.log('--1--');
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log('--2--');
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log('--3--');
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2], 3));
console.log('--4--');
console.log(last([], 3));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log('--5--');
const myColor = ['Red', 'Green', 'White', 'Black'];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
console.log('--6--');
console.log(evenDash('1623424'));
console.log('--7--');
console.log(sortArray([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
console.log('--8--');
console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
console.log('--9--');
console.log(swapCase('tHE qUICK bROWN fOX'));
console.log('--10--');
printArray([[1, 2, 1, 24], [8, 11, 9, 4]]);
console.log('--11--');
console.log(squaresSum([1, 2, 3, 4]));
console.log('--12--');
sumAndProduct([1, 2, 3, 4, 5, 6]);
console.log('--14--');
console.log(removeDuplicate([1, 2, 3, 4, 1, 2, 5, 5, 6, 'a', 'A']));
console.log('--15--');
console.log(combineArrays(["th","st","nd","rd"], ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]))
console.log('--16--');
console.log(leapYearRange(2000, 2012));
console.log('--17--');
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));
console.log('--18--');
binary_Search([1, 2, 3, 4, 5, 7, 8, 9], 5);
console.log('--19--');
console.log(arraysElemSum([3,5,6,7,8,13], [1,0,2,3,4]));
console.log('--20--');
console.log(findDuplicate([1, 8, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
console.log('--21--');
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
console.log('--22--');
console.log(union([1, 2, 3], [100, 2, 1, 10, 50]));
console.log('--23--');
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log('--24--');
console.log(removeFalse([NaN, 0, 15, false, -22, '',undefined, 47, null]))
console.log('--25--');
let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
console.log(sortByTitle(library));
console.log('--26--');
pairSum([10,20,10,40,50,60,70], 90);
console.log('--27--');
console.log(retrieveProperty(library, 'author'));
console.log(retrieveProperty(library, 'libraryID'));
console.log('--28--');
longest_common_starting_substring(['go', 'google']); 
longest_common_starting_substring(['SQLInjection', 'SQLTutorial']); 
longest_common_starting_substring(['abcd', '1234']); 
console.log('--29--');
console.log(num_string_range('a', 'z', 2));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(0, -50, 4));
console.log('--30--');
console.log(merge_array([1, 2, 3], [2, 30, 1]));
console.log('--31--');
console.log(remove_array_element([2, 5, 9, 6], 5));
console.log('--32--');
console.log(contains([2, 5, 9, 6], 7));
console.log(contains([2, 5, 9, 6], 5));
console.log('--33--');
empty([1, 2, 3]);
console.log('--34--');
console.log(nthlargest([ 43, 100, 23, 89, 88, 90, 99, 652], 4));
console.log('--35--');
console.log(randomElement([254, 45, 212, 365, 2543]));
console.log('--36--');
console.log(array_filled(6, 0));
console.log(array_filled(4, 11));
console.log('--37--');
console.log(array_filled_string(3, 'default value'));
console.log('--38--');
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
console.log('--39--');
console.log(removeFalse([58, '', 'abcd', true, null, false, 0]));
console.log('--40--');
console.log(array_range(2, 4));
console.log(array_range(-6, 5));
console.log('--41--');
console.log(rangeBetween(1, 4));
console.log(rangeBetween(-6, 4));
console.log('--42--');
console.log(last_difference([1, 2, 3], [100, 2, 1, 10]));
console.log(last_difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(last_difference([1, 2, 3], [100, 2, 1, 10]));
