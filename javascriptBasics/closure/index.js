// Defines the form validator and it's function
function validator(form) {

    var form = form;

    return function(minChar) {
        var isValid = true;
        var inputs = form.elements;
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value || inputs[i].value.length < minChar) {
                isValid = false;
            }
        }
        return isValid;
    }
}



// Attach the form validation to the submit event
var form = document.getElementById("myForm");
form.addEventListener("submit", function(ev){
    ev.preventDefault(); // to stop the form from submitting

    // Creates a form validator
    var validates = new validator(this);

    if(validates(2)) {
        this.submit();
    } else {
        alert('Form is KO');
    }
});