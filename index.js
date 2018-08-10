//program for callback,async/await,promises.
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const friendBringsTickets = new Promise(function(resolve,reject) {
    setTimeout(function(err){
        if(err){
            throw err;
        }
        resolve('tickets');
    }, 5000);
        
});

friendBringsTickets.then(function(){
    console.log('my ticket: show ticket');
});

console.log('person3: shows ticket');
console.log('person4: shows ticket');

