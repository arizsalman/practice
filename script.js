// let newArr ="my name is Ariz"
// console.log(newArr.length);
// let newArr1 ="my name is ariz"
// console.log(newArr1.toLowerCase());
// console.log(newArr.toUpperCase());
// console.log(newArr.charAt(4));
// console.log(newArr.indexOf('r'));
// console.log(newArr.substring(0,9));
// console.log(newArr.slice(-14,5));
// console.log(newArr.trim());
// let url="https://Ariz%30salman"
// console.log(url);
// console.log(url.replace("%30","--"));
// console.log(url.includes('Ariz'));
// console.log(url.includes('hwsjsk'));
// console.log(url.split('A'));


// let min=10
// let max=20
// console.log(Math.floor(Math.random()*(max-min+1))+min);
 

//++++++++++++++++++  TOPIC   DATES  +++++++++++++++++++++++++++++++//
// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//++++++++++++++++TIME STAMP    ++++++++++++++//



// let newDate=new Date()
// newDate.toLocaleString('default',{
//     weekday:"long",

// })
// console.log(newDate.toLocaleString('default',{
//     weekday:"long",
    

// }));






//+++++++++++++++++++ TOPIC ARRAY++++++++++++++
// var col=["eerj",'em','ekj','lkl','sd',];
//  col.push('gj')
//  console.log(col);
//  let myArr=[1,2,3,4,5,6]
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
//  let my=[1,23,3,45,6]
// console.log(my)
// my.pop()
// console.log(my)
// my.unshift(0)
// console.log(my);
// my.shift()
// console.log(my);
// my.includes('23')
// console.log(my);
// my.includes('4')
// console.log(my);
// console.log(my.join());




// var newArr=["MY",'NAME','IS','KHAN','HOME',];
// console.log(newArr);
// newArr.slice(2,3)
// console.log(newArr);
// var fd=['1','2','23']
//   fd.splice(2,1,878)
//   console.log(fd);


//  let newArray=[1,2,3,4,5,6,[7,8,9],[1,3,[3,5,6]]]
//  console.log(newArray);
//  let anwser=newArray.flat(4)
//flat ke ander( value de ge ke ketne array ap ko lene hi (ye infenite ye worong tarikahe)(1 ya kio or array best))
//  console.log(anwser);


//  let sore1 =1000;
//  let sore2 =2000;
//  let sore3 =3000;
//  let sore4 =4000;
//  console.log(Array.of(sore1,sore2,sore3,sore4));

//++++++++++++++++++++++++ TOPIC ++ OBJECT__+++++++++++++++++++++++++++++


// agar app ko ak symbol  bana kar agar app is object me crate kar na hi tu us ka Ak he tarika he

// let mySyb= Symbol("key12")
// let myName={
//     name:'ariz',
//     [mySyb]:"key12",
//     age:23 ,
//     fatherName:"Salman",
//     email:"ariz@123.com",
// }

// console.log(myName[mySyb]);

// console.log(myName.fatherName);
// //ye taraka best nahi he (XX)
// console.log(myName[fatherName]);
// //ye taraka best  he (**)



 //.assign({}, obj1,obj2, obj3,obj4) ye obj  ko  murg krta he 
 ////////////////OR?????? 
 //.assign({}, obj1,obj2,) ye Object me jetne value hi sab combine ho jate hi  
 // AK Speard Method  Ye Method assign() ke taha kam karta  hi or
 //assign me FULL LAMBI HI OR SPEARD ME  {...obj1,..obj2} combine karne ka asan tareka
 

//  let obj1={1:"a",2:"b",3:"c"}
//  let obj2={4:"a",5:"b",6:"c"}
//  let obj3={7:"a",8:"b",9:"c"}
//  let obj4={10:"a",11:"b",12:"c"}
// console.log(obj1);
//  let obj=Object.assign({},obj1,obj2,obj3,obj4) 
//  //ye Sahe CODE HI BUT LONGE)

//  let objs= {...obj1,...obj2,...obj3,...obj4}
//  //ye Sahe CODE HI BEST PRACTICE
//  console.log(objs);
//  console.log(obj);

// // JAB beh DATABASE  se value ae ge tu YE SYTAX BUHAT USE HO TA HI 
// let userName={
//     name:'Ariz',
//     fatherName:"Salman",
//     gmail:"ariz@google.com"
// }
// console.log(userName);
//// IS  METHOD SE HUM OBJECT KO ARRAY ME COVERT KER KI LOOP & EXTAR CHEZE BE LAKA SETE HI
// console.log(Object.keys(userName));
// console.log(Object.values(userName));
// console.log(userName.hasOwnProperty("fatherName"));


///////////+++ TOPIC OJC DE_STURCTURE ++++++++??????

// let myHistory={
//     userName:"Ariz",
//     fatherName:"Salman",
//     brother: "Ali ",
// }

// //object me Add karven KA tarika
// myHistory.cnic="6378936839"
// // Ye Add karvane ka Tareka


// //console. LOG ME VALUE BASE KAR VANE KE TU SYTEX  HI

// myHistory.userName
// myHistory.fatherName
// //YE TAREKA SAHI HI MAGAR BEST NAHI HI  // ISE OJC DE_STURCTURE METHOD KEHTI HI
// console.log(myHistory);
// console.log(myHistory);

// // YE TAREKA BEST HI   // ISE OJC DE_STURCTURE METHOD KEHTI HI
// let {userName}=myHistory
// let {fatherName}=myHistory
// console.log(userName);
// console.log(fatherName);


// let myInfo ={
//     name:"Ariz",
//     fatherName:"Salman",
//     class:"12 Standard",
//     isMarrid:false,
//     age:22
// }

// //OR AGAR KIO VALUE DELETE KAR VANE HI TU
// delete myInfo.age
// console.log(myInfo);


// myInfo.dob=new Date("10-24-2002");
// myInfo.calulateAge=function () {
//     let now=new Date().getFullYear();
//     let userDobAge= new Date(this.dob).getFullYear()
//     let userAge=now-userDobAge;
//     return userAge;
// }
// console.log(myInfo.calulateAge());


///////  + TOPIC +  FUNCTION (){} ++
// function myFunction(num1,num2) {
    // let result=num1+num2
    // return result
    //AK TAREKA YE BE HI 
    // return num1+num2
// } 
// let result=myFunction(3,4)
// console.log(result);


// function userName(name) {
//     return `${name} Hello Bro`
// }
// console.log(userName(" Ariz"));

//   (... IS ko REST OPRATOR & SPARED KHETI HI)

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(2999,223,344,5667,786));
// for (let i = 0; i < calculateCartPrice.value; i++) {
//     console.log(calculateCartPrice [i]);
    
// }


// function calculateCartPrice(...prices) {
//     let totalPrice = 0;
//     for (let price of prices) {
//         totalPrice += price;
//     }
//     return totalPrice;
// }

// console.log(calculateCartPrice(2999, 223, 344, 5667, 786));




// function calculateCartPrice(...num1) {
//     let totalPrice = 0;
//     for (let i = 0; i < num1.length; i++) {
//         totalPrice += num1[i];
//     }
//     return totalPrice;
// }

// console.log(calculateCartPrice(2999, 223, 344, 5667, 786));




// function calculateCartPrice(...num1) {
//     // return num1

// let totalPrice=0;
// for (let i = 0; i < num1.length; i++) {
//     totalPrice+=num1[i];
//     return totalPrice ;
    
    
//  }
//  }
//  console.log(calculateCartPrice(2999,223,344,5667,786));





// +++++++++TOPIC SOPE    ?++++++++++++++++++++++++++++++

// { } YE SOPE KHELATA HI