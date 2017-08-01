// On load, toggle the class to hide the dorpdown
function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}
// When some element is clicked:
//  if it is not the dropdown button, hide the dropdown content
window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) {
        var dropdowns=getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdowns.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
