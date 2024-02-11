// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    let messages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(message);
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;
  } 
  return messages;
}

function countDown() {
   let countDown = 10
    while (countDown >= 0){
        console.log(countDown);
        countDown--;
    }
}