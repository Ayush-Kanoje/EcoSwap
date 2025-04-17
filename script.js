
document.addEventListener("DOMContentLoaded", function(){
  setTimeout(() => {
       document.querySelector(".logo-c").style.animation = "moveLogo 3s ease-in-out forwards";
  
  }, 3000);

});

function switchTab(tabName) {
// Tab switching logic would go here
console.log('Switching to tab:', tabName);

}
