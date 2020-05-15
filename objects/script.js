class Student {
    constructor(name, sclass, rollno) {
        this.name = name;
        this.sclass = sclass;
        this.rollno = rollno;
    }
}
let student = new Student('David Rayy', 'VI', 12);

let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        id: 1
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        id: 3
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        id: 2
    }];


//1
let listOfProperties = (obj) => {
    return Object.getOwnPropertyNames(obj);
}
//2
let deleteProperty = (obj, property) => {
    console.log(obj);
    delete obj[property];
    return obj;
}
//3
let lengthOfObject = (obj) => {
    return Object.keys(obj).length;
}

//4
let readingStatus = (objArray) => {
    for (let i in objArray) {
        if(objArray[i].readingStatus) {
            console.log(`You have already read ${objArray[i].title} by ${objArray[i].author}.`);
        } else {
            console.log(`You need to read ${objArray[i].title} by ${objArray[i].author}!`);
        };
    }
}

//5
let cylinder = {
    radius: 5,
    height: 7,
    findVolume() {
        return(Math.round(Math.PI * Math.pow(this.radius, 2) * this.height));
    }
};
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;

    }
    findVolume() {
        return(Math.round(Math.PI * Math.pow(this.radius, 2) * this.height));
    }
}
let firstCylinder = new Cylinder(5, 4);
let secondCylinder = new Cylinder(3, 9);

//6
Array.prototype.bubbleSort = function() {
    let n = this.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
}

//7
String.prototype.subset = function() {
    let subsetArray = [];
    n = this.length;
    for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            subsetArray.push(this.slice(i, j))
        }
    }
    return subsetArray;
}

//8 //після функцій


//9
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return 'Area: ' + (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
    get perimeter() {
        return 'Perimeter: ' + (2 * Math.PI * this.radius).toFixed(2);
    }
}

//10
let sortObjectsArray = (array, property) => {
    return array.sort((a, b) => {
        if(a[property] < b[property]) {
            return -1;
        } else {
            return 1;
        }
    });
}

//11
let all_method_properties = (obj) => {
    return Object.getOwnPropertyNames(obj).filter(x => {
        return typeof obj[x] === 'function';
    });
}

//13
let onlyProperties = (obj) => {
    return Object.getOwnPropertyNames(obj);
}

//14
let getValues = (obj) => {
    // let properties = onlyProperties(obj);
    // let values = [];
    // for (let i = 0; i < properties.length; i++) {
    //     values.push(obj[properties[i]]);
    // }
    return Object.values(obj);
}

//15
let convertObject = (obj) => {
    // let parentArray = [];
    // for (let prop in obj) {
    //     let childArray = [];
    //     childArray.push(prop);
    //     childArray.push(obj[prop]);
    //     parentArray.push(childArray);
    // }
    // return parentArray;
    return Object.entries(obj);
}

//16
let swapKeysnValues = (obj) => {
    copyObj = {};
    for (let prop in obj) {
        copyObj[obj[prop]] = prop;
    }
    return copyObj;
}

//17
let isThereProperty = (obj, property) => {
    isProperty = obj.hasOwnProperty(property);
    if (isProperty) {
        return(`Yes, object contains property ${property}`)
    } else {
        return(`No, there is no property ${property} in  object`);
    }
}














console.log('--1--');
console.log(listOfProperties(student));
console.log('--2--');
console.log(deleteProperty(student, 'sclass'));
console.log('--3--');
console.log(lengthOfObject(student));
console.log('--4--');
readingStatus(library);
console.log('--5--');
console.log(cylinder.findVolume());
console.log(firstCylinder.findVolume());
console.log(secondCylinder.findVolume());
console.log('--6--');
console.log([5, 1, 4, 2, 8].bubbleSort());
console.log('--7--');
console.log('doge'.subset());
console.log('--9--');
let firstCircle = new Circle(5);
console.log('radius: ' + firstCircle.radius);
console.log(firstCircle.area);
console.log(firstCircle.perimeter);
console.log('--10--');
console.log(sortObjectsArray(library, 'id'));
console.log('--11--');
console.log(all_method_properties(Array.prototype));
console.log('--13--');
console.log(onlyProperties(firstCircle));
console.log('--14--');
console.log(getValues(student));
console.log('--15--');
console.log(convertObject(student));
console.log('--16--');
console.log(swapKeysnValues(student));
console.log('--17--');
console.log(student);
console.log(isThereProperty(student, 'name'));
console.log(isThereProperty(student, 'age'));







