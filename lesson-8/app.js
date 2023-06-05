// // // Functions
// // let userName = "Alastor";
// // hello("Iki", "Alastor", "Raykiri");
// // function hello(name, name2, n3) {
// //   // hoisting
// //   alert(" Hello " + name);
// //   alert(" Hello " + name2);
// //   alert(" Hello " + n3);
// // }
// // console.log;

// // const user = {
// //     name:'Alastor',
// //     phone:'+996702270133',
// //     email:'tim_tim2005@bk.ru',
// //     address: {
// //         city:'Hollywood',
// //         street:'lebedinoe ozero'
// //     }
// // }

// // function getSomeKey(key, obj) {
// //     return {
// //         [key]: obj[key],
// //     }
// // }

// declarationFn()

// // const name = getSomeKey('name', user)
// // const phone = getSomeKey('phone', user)
// // // ctrl + shift + L
// // console.log('phone: ', phone)
// // console.log('name: ', name)
// //-------------------виды функции-----------------

// // function declaration v1
// function declarationFn() {
//     console.log("I'm declaration function");
// }
// // function expression v2
// const expressionFn = function(){
//     console.log("I'm expression function");
// }

// // arrow function () => {}
// const arrowFn = () => {}
//     console.log("I'm arrow function");


// expressionFn()

// --------------------calculator-----------------------
const Calculator = {
    // sum: (a, b) => a + b,
    sum: (a, b) => {
        console.log('bul summa kylat');
        return a + b
    },

    sum2: (a, b) => a + b,
    min: (num1, num2) => num1 - num2,
    multiply: (p1, p2) => p1 * p2,
    divide: (a, b) => a / b,
    pow: (p1, p2) => p1 ** p2,


}


const res = Calculator.divide(500, 100)
console.log("res: ", res);

const array1 = ['item' ,'item2' , 'item3' ]

const array2 = ['item4']

function getArray(arr1, arr2) {
    if(arr1.length > arr2.length) {
        return arr1
    } else if (arr2.length > arr1.length)  {
        return arr2
    }else {
        return "они равны"
    }
}

const newArr = getArray(array1, array2)
console.log("newArr: ", newArr);

function someName() {
    const randomNum = ~~(Math.random() * 100)
    console.log(randomNum);
}

someName()