// Defines the form validator and it's function
function validator() {
    var isValid = true;
}

validator.prototype.validateForm = function(form) {
    this.isValid = true;
    var inputs =  form.elements;
    for (var i = 0; i<inputs.length; i++){
        if (!inputs[i].value){
            this.isValid = false;
        }
    }
    return this.isValid;
};

// Creates a form validator
var valid = new validator();

// Attach the form validation to the submit event
var form = document.getElementById("myForm");
form.addEventListener("submit", function(ev){
    ev.preventDefault(); // to stop the form from submitting
    if(valid.validateForm(this)) {
        this.submit();
    } else {
        alert('Form is KO');
    }
});