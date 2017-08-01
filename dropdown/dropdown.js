(function(window, document, undefined) {
    window.onload = init;

    // Code to be called when the dom has loaded
    //  i.e. #document has its nodes
    function init() {
        var dropButton = document.getElementById('dropdownContainer');

        document.addEventListener('click', function(event) {
            var clickedInside = dropButton.contains(event.target);

            // When some element is clicked:
            //  if it is not the dropdown button, hide the dropdown content
            if (!clickedInside) {
                var dropdowns = document.getElementsByClassName('dropdownContent');
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            } else {
                document.getElementById('dropdownLinks').classList.toggle('show');
            }
        });
    }

})(window, document, undefined);
