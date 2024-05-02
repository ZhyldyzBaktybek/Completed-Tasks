//convert number into string, to swap the digits
    let numString = number.toString();

//swap first digit with the last digit and vice versa
    let firstDigit = numString.charAt(0);
    let lastDigit = numString.charAt(numString.length -1);
    let swappedNumber = lastDigit + 
       numString.substring(1, numString.length -1) + firstDigit;

//if number is less than 3 digits , user will get a following message. 
    if (numString.length < 3){
        alert( "Invalid number.The number should have at least 3 digits.")
      }
//if number is correct , below will be the outcome.      
      else {
          console.log("Original number:" + number);
          console.log("Swapped Number:" + swappedNumber);
      }
    
   
    

 



