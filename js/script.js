/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 



// JavaScript function to toggle the navigation menu
function openNavbar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}
