// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = [];
 
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
 
    return thankYouMessages;
  }
 
  const result = writeCards(["Ada", "Brendan", "Ali"], "birthday");
  console.log(result);


  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
 
  countDown(20);




