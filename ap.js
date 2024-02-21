var inputUser = prompt("Enter any word");
var data = '';

for (i = inputUser.length - 1; i >= 0; i--) {
  data += inputUser[i];
}

if (data === inputUser) {
  
  Swal.fire({
    title: 'Palindrome Checker',
    text: `${inputUser} is a Palindrome!`,
    icon: 'success',
  });
} 

else {
  
  Swal.fire({
    title: 'Palindrome Checker',
    text: `${inputUser} is not a Palindrome.`,
    icon: 'error',
  });
}




// alert("Developer by Adeel")