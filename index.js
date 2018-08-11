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
function wantToDrink (consume){
    return new Promise(function(resolve,reject){
        setTimeout(function(err){
            if(err){
                throw err;
            }
            resolve(consume);
        },5000);
    });
};

async function ref(){
    let consume = await wantToDrink('finally, yum!');
    console.log(consume);
};
ref();



























