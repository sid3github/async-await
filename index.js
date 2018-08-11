//<program for callback,async/await,promises.>

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const friendBringsTickets = new Promise(function(resolve,reject) {
//     setTimeout(function(err){
//         if(err){
//             throw err;
//         }
//         resolve('tickets');
//     }, 5000);
        
// });

// friendBringsTickets.then(function(){
//     console.log('SID: show ticket');
// });

// console.log('person3: shows ticket');
// console.log('person4: shows ticket');


//<async - await>
// function wantToDrink (consume){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(err){
//             if(err){
//                 throw err;
//             }
//             resolve(consume);
//         },5000);
//     });
// };

// async function ref(){
//     let consume = await wantToDrink('finally, yum!');
//     console.log(consume);
// };
// ref();


//<async - await>
// function workout(pushups){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(err){
//         if(err){
//             reject('err');
//         }
//         resolve(pushups);
//     }, 7000);
// });
// }
// async function count(){
//     let pushups = await workout('pushups are good!');
//     console.log(pushups);
// };
// count();


// <function callback>
// function myName(data){
//     return new Promise(function(resolve,reject){
//         resolve(console.log('hello ' + data));
// }, 8000);
// };

// async function ref(){
//     let x = await myName('Siddharth');
//     console.log(x);
// };
// ref();


//<error handling try/>catch>
// try {
//     setTimeout(() => {
//         throw new Error("Uh oh!");
//     }, 8000);
// } catch (e) {
//     console.log("I caught the error: " + e.message);
// }





























































