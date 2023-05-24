// For Loop


// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");


 for (let i = 0 ; i < 151; i++) {
    // console.log("hello", i);
 }

 const names = ["kutman", "aigerim", 'sultan', 'kady' ]
//                  0           1       2


//  console.log(names[0]);
//  console.log(names[1]);
//  console.log(names[2]);
//  console.log(names[3]);

//  console.log(names);// [.....]

 for (let i = 0 ; i < names.length; i++) {
    // console.log("hello", names[i]);
 }

// % 5кока
// % 3 кола

for (let san = 0; san < 101; san++) {
    if (san % 5 === 0) {
        console.log("кока");
    }else if ( san % 3 === 0) {
        console.log("кола")
    }
    

}


let name = 'adahan'

 for (let tamga = 0; tamga< name.length; tamga++){
    //  console.log(name[tamga].toLowerCase())
    if(name[tamga].toLowerCase() === "a")
     console.log(name[tamga].toLowerCase())
 }


 for (const t of name) {
     if(t.toUpperCase() === "A"){
        console.log(t.toUpperCase());
     }
 }


 // for in
 const user = {
    name: "Adahan",
    age: 20,
    gender: "male"
 }


 console.log(user.name);
 
 console.log(user.age);
 console.log(user['gender']);


 for (const key in user) {
    console.log(user[key])
    
 }

 let btn1 = document.querySelectorAll("button")

  for (let i = 0; i< btn1.length ; i++) 
  btn1[i].onclick = function () {
    document.body.style.background = btn1[i].innerText

  }

 btn1.onclick = function () {
    document.body.style.background = btn1.innerText

 }

 let btn2 = document.querySelector("button")

 btn2.onclick = function () {
    document.body.style.background = btn2.innerText

 }