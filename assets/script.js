let game = () => {
    let number = Math.floor(Math.random() * 10) // <0, 1) => 0-9
    let guess = prompt("Enter your guess 0-9")
    
    while(guess != number) {
        if (guess < number) {
          alert(guess + " is too low")
        } else {
          alert(guess + " is too high")
        }
      
        guess = prompt("Enter another guess 0-9")
    }
  
    alert("You won, you are the best! The number sure was: " + number)
}
